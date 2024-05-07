"use strict";(self.webpackChunk_snow_program_background=self.webpackChunk_snow_program_background||[]).push([[335],{48769:function(Z,h,n){n.r(h),n.d(h,{default:function(){return Y}});var m=n(90228),c=n.n(m),t=n(87999),U=n.n(t),z=n(67825),O=n.n(z),E=n(26068),f=n.n(E),o=n(48305),u=n.n(o),A=n(94287),G=n(47856),nn=n(45247),J=n(10753),R=n(54613),F=n(75271),K=n(65496),j=n(32299),b=n(42460),N=n(24805),V=n(50052),en=n(41324),e=n(52676);function H(D){var P=D.open,T=D.onOk,M=D.onCancel,x=j.Z.useForm(),p=u()(x,1),y=p[0],S=function(i){var l;return Array.isArray(i)?i:i==null||(l=i.file)===null||l===void 0||(l=l.response)===null||l===void 0?void 0:l.data};return(0,e.jsx)(b.Z,{title:"\u4E0A\u4F20\u8D44\u6599",open:P,onOk:y.submit,onCancel:M,children:(0,e.jsxs)(j.Z,{form:y,onFinish:function(i){T(i)},labelCol:{span:4},children:[(0,e.jsx)(j.Z.Item,{name:"userText",label:"\u6587\u6848",rules:[{required:!0}],children:(0,e.jsx)(N.Z,{})}),(0,e.jsx)(j.Z.Item,{label:"Upload",name:"filePath",getValueFromEvent:S,rules:[{required:!0}],children:(0,e.jsx)(V.Z,{action:"http://175.178.248.238:8080/api/upload",headers:{authorization:localStorage.getItem("token")},beforeUpload:function(){return!0},maxCount:1,children:(0,e.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[(0,e.jsx)(K.Z,{}),(0,e.jsx)("div",{style:{marginTop:8},children:"Upload"})]})})})]})})}var W=n(2022),B=n(81118),Q=["current","pageSize"],X=function(){var P=(0,F.useState)(!1),T=u()(P,2),M=T[0],x=T[1],p=(0,F.useRef)(),y=(0,F.useState)({current:1,size:10}),S=u()(y,2),v=S[0],i=S[1],l=(0,F.useRef)(0),$=(0,W.Aj)(["order",v],v,{onSuccess:function(){},refetchOnWindowFocus:!1}),g=$.data,L=$.refetch,k=function(){J.ZP.success("\u64CD\u4F5C\u6210\u529F"),L()},w=(0,W.Ud)({onSuccess:k}),q=w.mutateAsync,_=[{title:"\u8BA2\u5355id",dataIndex:"orderId",width:300,render:function(r){return(0,e.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,e.jsx)("span",{className:" ml-2",children:r})})}},{title:"\u7533\u8BC9\u72B6\u6001",dataIndex:"orderStatus",width:80,renderText:function(r,s){var d=s.orderStatus;return B._[d]},search:!1},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"startTime",width:200,renderText:function(r){return r||"-"},search:!1},{title:"\u7533\u8BC9\u65F6\u95F4",dataIndex:"explainTime",width:200,renderText:function(r){return r||"-"},search:!1},{title:"\u64CD\u4F5C",dataIndex:"option",width:200,valueType:"option",render:function(r,s){return[(0,e.jsx)(R.ZP,{type:"primary",disabled:s.orderStatus!==B.a.\u672A\u7533\u8BC9,onClick:function(){l.current=0,p.current=s,x(!0)},children:"\u7533\u8BC9"}),(0,e.jsx)(R.ZP,{type:"primary",disabled:s.orderStatus!==B.a.\u5DF2\u5F00\u5EAD,onClick:function(){l.current=1,p.current=s,x(!0)},children:"\u8865\u5145\u6750\u6599"})]}}];return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(A._z,{children:[(0,e.jsx)(G.Z,{headerTitle:"\u7528\u6237\u5217\u8868",pagination:{showTotal:function(r){return"\u5171\u6709".concat(r,"\u6761\u8BB0\u5F55")},total:g==null?void 0:g.total,current:v.current,pageSize:v.size,onChange:function(r,s){return i(f()(f()({},v),{},{current:r,size:s}))}},search:{labelWidth:120},request:function(r){var s=r.current,d=r.pageSize,C=O()(r,Q);i(f()(f()({},C),{},{current:s,size:d})),L()},dataSource:(g==null?void 0:g.records)||[],columns:_},"id"),(0,e.jsx)(H,{onOk:function(){var a=U()(c()().mark(function r(s){var d,C;return c()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,q(f()(f()({},s),{},{id:(d=p.current)===null||d===void 0?void 0:d.id,orderId:(C=p.current)===null||C===void 0?void 0:C.orderId,messageType:l.current}));case 2:x(!1);case 3:case"end":return I.stop()}},r)}));return function(r){return a.apply(this,arguments)}}(),onCancel:function(){x(!1)},open:M})]})})},Y=X},2022:function(Z,h,n){n.d(h,{Aj:function(){return t},ES:function(){return f},Ud:function(){return U}});var m=n(31098),c=n(90826);function t(o,u,A){return(0,m.aM)(o,function(){return(0,c.U2)("/order/get",u)},A)}function U(o){return(0,m.Db)(function(u){return(0,c.U2)("/order/explain",u)},o)}function z(o){return useMutation(function(u){return post("/download",u)},o)}function O(o){return useMutation(function(u){return post("/updateUser",u)},o)}function E(o){return useMutation(function(u){return post("/user/del",u)},o)}function f(o){return(0,m.Db)(function(u){return(0,c.U2)("/court/getJudge",u)},o)}},81118:function(Z,h,n){n.d(h,{_:function(){return c},a:function(){return m}});var m=function(t){return t[t.\u672A\u7533\u8BC9=0]="\u672A\u7533\u8BC9",t[t.\u5DF2\u7533\u8BC9=1]="\u5DF2\u7533\u8BC9",t[t.\u62DB\u52DF\u4E2D=2]="\u62DB\u52DF\u4E2D",t[t.\u5DF2\u5F00\u5EAD=3]="\u5DF2\u5F00\u5EAD",t[t.\u5DF2\u7ED3\u675F=4]="\u5DF2\u7ED3\u675F",t}({}),c={0:"\u672A\u7533\u8BC9",1:"\u5DF2\u7533\u8BC9",2:"\u62DB\u52DF\u4E2D",3:"\u5DF2\u5F00\u5EAD",4:"\u5DF2\u7ED3\u675F"}}}]);