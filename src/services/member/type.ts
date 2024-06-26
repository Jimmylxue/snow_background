import { TPageListType } from '../type';

export type TAddUser = Omit<TUser, 'username' | 'phone' | 'avatar'> & { password: string };

export type TEditUser = Omit<TUser, 'id'>;

export enum Sex {
  '未知',
  '男',
  '女',
}

export const sexConst = [
  {
    label: '男',
    value: Sex.男,
  },
  {
    label: '女',
    value: Sex.女,
  },
];

export enum EPlatform {
  todoList,
  snowMemo,
}

export enum EStatus {
  未读 = 1,
  已读,
}

export type TLetterItem = {
  letterId: number;
  platform: EPlatform;
  title: string;
  content: string;
  hasReadCount: number;
  notReadCount: number;
  createdTime: Date;
  updateTime: Date;
};

export type TLetterListParams = TPageListType & {
  createTime?: number;
  title?: string;
  platform?: EPlatform;
  letterId?: number;
};

export type TAddLetterParams = Omit<
  TLetterItem,
  'hasReadCount' | 'notReadCount' | 'createdTime' | 'updateTime' | 'letterId'
>;

export type TUser = {
  id: number;
  username: string;
  avatar?: string;
  sex: Sex;
  phone?: string;
  mail?: string;
};

export type TLetterRecordUserParams = {
  letterId: number;
  status: EStatus;
};
