import { useGenerateLink } from '@/services/address';
import { baseURL } from '@/services/request';
import { copyToClipboard } from '@/utils/utils';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import { Button, message, Modal } from 'antd';
import React, { useState } from 'react';
import JSZip from 'jszip';
import bg from '@/assets/bg.jpg';

const TempLinkPage: React.FC = () => {
  const { isLoading, mutateAsync } = useGenerateLink({
    onSuccess: (res) => {
      Modal.confirm({
        title: '临时链接生成成功',
        content: (
          <div>
            <div>{res}</div>
            <Button
              type="primary"
              className=" mt-2"
              onClick={() => {
                copyToClipboard(res);
                message.success('复制成功');
              }}
            >
              复制
            </Button>
          </div>
        ),
      });
    },
  });

  const [downloadMoreLoading, setDownloadMoreLoading] = useState<boolean>(false);

  const [zipFile, setZipFile] = useState(null);

  const [exporting, setExporting] = useState<boolean>(false);

  const handleFileChange = (event: any) => {
    setZipFile(event.target.files[0]);
  };

  const downloadMoreFn = async (count: number) => {
    if (downloadMoreLoading) {
      return;
    }

    setDownloadMoreLoading(true);
    const response = await fetch(`${baseURL}/address/generateMore`, {
      // const response = await fetch(`http://127.0.0.1:9999/address/generateMore`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        count,
      }),
    });
    if (response.ok) {
      const blob = await response.blob(); // 获取响应的 Blob 对象
      const url = window.URL.createObjectURL(blob); // 创建一个 URL 对象
      const a = document.createElement('a'); // 创建一个链接元素
      a.href = url;
      a.download = 'download.zip'; // 指定下载文件名
      document.body.appendChild(a); // 将链接添加到 DOM
      a.click(); // 触发点击事件
      a.remove(); // 移除链接
      window.URL.revokeObjectURL(url); // 释放 URL 对象
    } else {
      console.error('下载失败:', response.statusText);
    }
    setDownloadMoreLoading(false);
  };

  const handleGeneratePosters = async () => {
    if (exporting) {
      return;
    }

    if (!zipFile) {
      alert('请上传一个 ZIP 文件');
      message.info('请上传导出的 ZIP 文件');
      return;
    }

    setExporting(true);

    const zip = new JSZip();
    const zipContent = await zip.loadAsync(zipFile);
    const qrImages = [];

    // 读取 ZIP 文件中的所有二维码图像
    for (const filename in zipContent.files) {
      // @ts-ignore
      const fileData = await zipContent.file(filename).async('blob');
      const img = await loadImage(URL.createObjectURL(fileData));
      qrImages.push(img);
    }

    const bgImage = await loadImage(bg); // 加载背景图
    const posters = await Promise.all(qrImages.map((qrImage) => createPoster(bgImage, qrImage)));
    downloadZip(posters);
    setExporting(false);
  };

  const loadImage = (src: any) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  const createPoster = (bgImage: any, qrImage: any) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = bgImage.width;
    canvas.height = bgImage.height;

    // @ts-ignore
    ctx.drawImage(bgImage, 0, 0);
    // @ts-ignore
    ctx.drawImage(qrImage, 110, 960, 225, 225); // 调整二维码位置和大小

    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), 'image/jpeg');
    });
  };

  const downloadZip = (posters: any) => {
    const zip = new JSZip();
    posters.forEach((posterBlob: any, index: number) => {
      zip.file(`poster${index + 1}.jpg`, posterBlob);
    });

    zip.generateAsync({ type: 'blob' }).then((content) => {
      const url = window.URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'posters.zip';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <>
      <PageContainer>
        <div className=" w-full flex justify-center items-center">
          <Button
            type="primary"
            size="large"
            className=" mt-5"
            loading={isLoading}
            onClick={async () => {
              await mutateAsync({});
            }}
          >
            生成链接
          </Button>
        </div>

        <div>
          <div className=" text-lg font-semibold">批量下载二维码zip</div>

          <div>
            <Button
              type="primary"
              size="large"
              className=" mt-5"
              loading={downloadMoreLoading}
              onClick={() => {
                downloadMoreFn(5);
              }}
            >
              导出5条
            </Button>

            <Button
              type="primary"
              size="large"
              className=" mt-5 ml-2"
              loading={downloadMoreLoading}
              onClick={() => {
                downloadMoreFn(10);
              }}
            >
              导出10条
            </Button>
          </div>
        </div>

        <div>
          <div className=" text-lg font-semibold mt-6">生成海报（上传二维码集合zip）</div>

          <input type="file" accept=".zip" onChange={handleFileChange} />
          <Button
            type="primary"
            size="large"
            className=" mt-5 ml-2"
            loading={exporting}
            onClick={handleGeneratePosters}
          >
            生成海报
          </Button>
        </div>
      </PageContainer>
    </>
  );
};
export default TempLinkPage;
