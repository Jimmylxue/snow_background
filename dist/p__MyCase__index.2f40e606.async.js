"use strict";(self.webpackChunk_snow_program_background=self.webpackChunk_snow_program_background||[]).push([[413],{66906:function(ue,w,n){n.r(w),n.d(w,{default:function(){return ee}});var W=n(67825),k=n.n(W),U=n(26068),O=n.n(U),A=n(90228),v=n.n(A),D=n(87999),T=n.n(D),G=n(48305),P=n.n(G),Q=n(94287),L=n(47856),oe=n(45247),N=n(10753),z=n(54613),C=n(75271),B=n(31098),M=n(90826);function H(t,e,d){return(0,B.aM)(t,function(){return(0,M.U2)("/judge/cat",e)},d)}function K(t,e,d){return(0,B.aM)(t,function(){return(0,M.U2)("/judge/catExplain",e)},d)}function se(t){return useMutation(function(e){return get("/judge/catExplain",e)},t)}function V(t){return(0,B.Db)(function(e){return(0,M.U2)("/judge/judged",e)},t)}var F=n(42460),X=n(39147),de=n(41324),r=n(52676);function Y(t){var e,d=t.orderId,f=t.open,y=t.onOk,g=t.onCancel,j=K(["explainQuery"],{orderId:d},{enabled:!!d,refetchOnWindowFocus:!1}),c=j.data,I=j.refetch;console.log("data",c),(0,C.useEffect)(function(){f&&I()},[f]);var h=[{title:"\u7528\u6237id",dataIndex:"userId",key:"userId",render:function(p){return(0,r.jsx)("a",{children:p})}},{title:"\u8865\u5145\u6587\u6848",dataIndex:"userText",key:"userText",render:function(p){return(0,r.jsx)("a",{children:p})}},{title:"\u64CD\u4F5C",dataIndex:"option",render:function(p,R){return[(0,r.jsx)(z.ZP,{type:"primary",onClick:T()(v()().mark(function m(){return v()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:try{}catch(x){}case 1:case"end":return S.stop()}},m)})),children:"\u4E0B\u8F7D\u8D44\u6599"})]}}];return(0,r.jsx)(F.Z,{title:"\u8BC1\u636E\u5217\u8868",open:f,onOk:y,onCancel:g,children:(e=Object.values((c==null?void 0:c.data)||{}))===null||e===void 0?void 0:e.map(function(s){return(0,r.jsx)(X.Z,{columns:h,dataSource:s})})})}var E=n(3939);function b(t){var e=t.chooseOrder,d=t.open,f=t.onOk,y=t.onCancel,g=(0,C.useState)(),j=P()(g,2),c=j[0],I=j[1];return(0,r.jsx)(F.Z,{title:"\u9009\u62E9\u7528\u6237\u8FDB\u884C\u6295\u7968",open:d,onOk:function(){return f(c)},onCancel:y,children:(0,r.jsxs)(E.ZP.Group,{onChange:function(s){var p=s.target.value;I(p)},value:c,children:[(0,r.jsx)(E.ZP,{value:(e==null?void 0:e.userId1)||"1",children:(e==null?void 0:e.user1)||"\u7528\u62371"}),(0,r.jsx)(E.ZP,{value:(e==null?void 0:e.userId1)||"2",children:(e==null?void 0:e.user2)||"\u7528\u62372"})]})})}var q=["current","pageSize"],_=function(){var e,d=(0,C.useState)(!1),f=P()(d,2),y=f[0],g=f[1],j=(0,C.useState)(!1),c=P()(j,2),I=c[0],h=c[1],s=(0,C.useRef)(),p=(0,C.useState)({current:1,size:10}),R=P()(p,2),m=R[0],$=R[1],S=H(["order",m],m,{onSuccess:function(){},refetchOnWindowFocus:!1}),x=S.data,J=S.refetch,ne=V({onSuccess:function(){te()}}),re=ne.mutateAsync,te=function(){N.ZP.success("\u64CD\u4F5C\u6210\u529F"),J()},ae=[{title:"\u8BA2\u5355id",dataIndex:"orderId",width:300,render:function(a){return(0,r.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,r.jsx)("span",{className:" ml-2",children:a})})}},{title:"\u7528\u62371",dataIndex:"user1",width:300,search:!1},{title:"\u7528\u62372",dataIndex:"user2",width:300,search:!1},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"joinTime",width:350,renderText:function(a){return a||"-"},search:!1},{title:"\u64CD\u4F5C",dataIndex:"option",width:200,valueType:"option",render:function(a,l){return[(0,r.jsx)(z.ZP,{type:"primary",onClick:T()(v()().mark(function i(){return v()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:s.current=l,g(!0);case 2:case"end":return o.stop()}},i)})),children:"\u6848\u4EF6\u8BE6\u60C5"}),(0,r.jsx)(z.ZP,{type:"primary",disabled:!!l.judged,onClick:T()(v()().mark(function i(){return v()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:s.current=l,h(!0);case 2:case"end":return o.stop()}},i)})),children:"\u6295\u7968"})]}}];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(Q._z,{children:[(0,r.jsx)(L.Z,{headerTitle:"\u6211\u7684\u6848\u4EF6",pagination:{showTotal:function(a){return"\u5171\u6709".concat(a,"\u6761\u8BB0\u5F55")},total:x==null?void 0:x.total,current:m.current,pageSize:m.size,onChange:function(a,l){return $(O()(O()({},m),{},{current:a,size:l}))}},search:{labelWidth:120},request:function(a){var l=a.current,i=a.pageSize,Z=k()(a,q);$(O()(O()({},Z),{},{current:l,size:i})),J()},dataSource:(x==null?void 0:x.records)||[],toolBarRender:function(){return[]},columns:ae},"id"),(0,r.jsx)(Y,{orderId:(e=s.current)===null||e===void 0?void 0:e.orderId,open:y,onOk:function(){g(!1)},onCancel:function(){g(!1)}}),(0,r.jsx)(b,{chooseOrder:s.current,open:I,onOk:function(){var u=T()(v()().mark(function a(l){var i;return v()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(l){o.next=3;break}return h(!1),o.abrupt("return");case 3:return o.next=5,re({orderId:(i=s.current)===null||i===void 0?void 0:i.orderId,upUserId:l});case 5:h(!1);case 6:case"end":return o.stop()}},a)}));return function(a){return u.apply(this,arguments)}}(),onCancel:function(){h(!1)}})]})})},ee=_}}]);
