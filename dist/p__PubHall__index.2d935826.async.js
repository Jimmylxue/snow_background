"use strict";(self.webpackChunk_snow_program_background=self.webpackChunk_snow_program_background||[]).push([[931],{6506:function(ie,E,e){e.r(E),e.d(E,{default:function(){return oe}});var L=e(67825),N=e.n(L),U=e(26068),C=e.n(U),G=e(90228),i=e.n(G),J=e(87999),P=e.n(J),K=e(48305),T=e.n(K),Q=e(94287),V=e(47856),me=e(45247),X=e(10753),w=e(54613),S=e(75271),k=e(42460),D=e(39147),n=e(52676);function Y(r){var a=r.recordData,s=r.open,v=r.onOk,g=r.onCancel,j=[{title:"\u7528\u6237id",dataIndex:"userId",key:"userId",render:function(o){return(0,n.jsx)("a",{children:o})}},{title:"\u8865\u5145\u6587\u6848",dataIndex:"userText",key:"userText",render:function(o){return(0,n.jsx)("a",{children:o})}},{title:"\u64CD\u4F5C",dataIndex:"option",render:function(o,I){return[(0,n.jsx)(w.ZP,{type:"primary",onClick:P()(i()().mark(function y(){return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:try{}catch($){}case 1:case"end":return h.stop()}},y)})),children:"\u4E0B\u8F7D\u8D44\u6599"})]}}];return(0,n.jsx)(k.Z,{title:"\u8BC1\u636E\u5217\u8868",open:s,onOk:v,onCancel:g,children:(0,n.jsx)(D.Z,{columns:j,dataSource:a||[]})})}var A=e(31098),R=e(90826);function b(r,a,s){return(0,A.aM)(r,function(){return(0,R.U2)("/court/resultExplain",a)},s)}function q(r,a,s){return(0,A.aM)(r,function(){return(0,R.U2)("/comment/listPage",a)},s)}function _(r){return(0,A.Db)(function(a){return(0,R.U2)("/comment/add",a)},r)}var fe=e(41324);function ee(r){var a=r.orderId,s=r.open,v=r.onOk,g=r.onCancel,j=(0,S.useState)({current:1,size:10,orderId:a}),m=T()(j,2),o=m[0],I=m[1];(0,S.useEffect)(function(){I(function(p){return C()(C()({},p),{},{orderId:a})})},[a]);var y=q(["pubHall",o],o,{onSuccess:function(){},refetchOnWindowFocus:!1,enabled:!1}),f=y.data,h=y.refetch;(0,S.useEffect)(function(){s&&o.orderId&&h()},[s,o]),console.log("userList",f);var $=[{title:"\u7528\u6237\u540D",dataIndex:"userName",key:"userName",render:function(x){return(0,n.jsx)("a",{children:x})}},{title:"\u8BC4\u8BBA\u5185\u5BB9",dataIndex:"userComment",key:"userComment",render:function(x){return(0,n.jsx)("a",{children:x})}},{title:"\u8BC4\u8BBA\u65F6\u95F4",dataIndex:"createTime",key:"createTime"}];return(0,n.jsx)(k.Z,{title:"\u7528\u6237\u5217\u8868",open:s,onOk:v,onCancel:g,children:(0,n.jsx)(D.Z,{columns:$,dataSource:(f==null?void 0:f.records)||[],pagination:{showTotal:function(x){return"\u5171\u6709".concat(x,"\u6761\u8BB0\u5F55")},total:f==null?void 0:f.total,current:o.current,pageSize:o.size,onChange:function(x,Z){return I(C()(C()({},o),{},{current:x,size:Z}))}}})})}var M=e(32299),ne=e(24805);function re(r){var a=r.open,s=r.onOk,v=r.onCancel,g=M.Z.useForm(),j=T()(g,1),m=j[0];return(0,n.jsx)(k.Z,{title:"\u53D1\u5E03\u8BC4\u8BBA",open:a,onOk:m.submit,onCancel:v,children:(0,n.jsx)(M.Z,{form:m,onFinish:function(I){console.log("values~",I),s(I)},children:(0,n.jsx)(M.Z.Item,{name:"text",label:"\u8BC4\u8BBA\u5185\u5BB9",rules:[{required:!0}],children:(0,n.jsx)(ne.Z,{})})})})}var te=["current","pageSize"],ae=function(){var a,s,v,g=(0,S.useState)(!1),j=T()(g,2),m=j[0],o=j[1],I=(0,S.useState)(!1),y=T()(I,2),f=y[0],h=y[1],$=(0,S.useState)(!1),p=T()($,2),x=p[0],Z=p[1],ue=(0,S.useState)({current:1,size:10}),W=T()(ue,2),z=W[0],H=W[1],B=(0,S.useRef)(),se=b(["pubHall",z],z,{onSuccess:function(){},refetchOnWindowFocus:!1}),O=se.data,ce=_({onSuccess:function(){X.ZP.success("\u8BC4\u8BBA\u6210\u529F")}}),le=ce.mutateAsync,de=[{title:"\u8BA2\u5355id",dataIndex:"court",width:300,render:function(l,d){var t=d.court;return(0,n.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,n.jsx)("span",{className:" ml-2",children:t.orderId})})}},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"startTime",width:200,renderText:function(l,d){var t=d.court;return t.startTime||"-"},search:!1},{title:"\u64CD\u4F5C",dataIndex:"option",width:200,valueType:"option",render:function(l,d){return[(0,n.jsx)(w.ZP,{type:"primary",onClick:P()(i()().mark(function t(){return i()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:B.current=d,o(!0);case 2:case"end":return u.stop()}},t)})),children:"\u67E5\u770B\u6750\u6599"}),(0,n.jsx)(w.ZP,{type:"primary",onClick:P()(i()().mark(function t(){return i()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:B.current=d,Z(!0);case 2:case"end":return u.stop()}},t)})),children:"\u8BC4\u8BBA"}),(0,n.jsx)(w.ZP,{type:"primary",onClick:P()(i()().mark(function t(){return i()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:B.current=d,h(!0);case 2:case"end":return u.stop()}},t)})),children:"\u67E5\u770B\u8BC4\u8BBA"})]}}];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(Q._z,{children:[(0,n.jsx)(V.Z,{headerTitle:"\u7528\u6237\u5217\u8868",pagination:{showTotal:function(l){return"\u5171\u6709".concat(l,"\u6761\u8BB0\u5F55")},total:O==null?void 0:O.total,current:z.current,pageSize:z.size,onChange:function(l,d){return H(C()(C()({},z),{},{current:l,size:d}))}},search:!1,request:function(l){var d=l.current,t=l.pageSize,F=N()(l,te);H(C()(C()({},F),{},{current:d,size:t}))},dataSource:(O==null||(a=O.data)===null||a===void 0?void 0:a.records)||[],columns:de},"id"),(0,n.jsx)(Y,{recordData:(s=B.current)===null||s===void 0?void 0:s.orderExplainMessages,open:m,onOk:function(){o(!1)},onCancel:function(){o(!1)}}),(0,n.jsx)(ee,{orderId:(v=B.current)===null||v===void 0?void 0:v.court.orderId,open:f,onOk:function(){h(!1)},onCancel:function(){h(!1)}}),(0,n.jsx)(re,{open:x,onOk:function(){var c=P()(i()().mark(function l(d){var t;return i()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,le({orderId:(t=B.current)===null||t===void 0||(t=t.court)===null||t===void 0?void 0:t.orderId,text:d.text});case 2:Z(!1);case 3:case"end":return u.stop()}},l)}));return function(l){return c.apply(this,arguments)}}(),onCancel:function(){Z(!1)}})]})})},oe=ae}}]);