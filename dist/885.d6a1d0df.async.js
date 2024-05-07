"use strict";(self.webpackChunk_snow_program_background=self.webpackChunk_snow_program_background||[]).push([[885],{59127:function(le,T,t){t.d(T,{Z:function(){return e}});const e=x=>x?typeof x=="function"?x():x:null},25885:function(le,T,t){t.d(T,{C:function(){return de}});var e=t(75271),x=t(82187),M=t.n(x),H=t(74772),L=t(99699),j=t(84442),N=t(7771),K=t(29739),X=t(95123),Q=t(98256),n=e.createContext({}),c=t(5660),r=t(22884),u=t(58846),d=t(58188);const l=o=>{const{antCls:i,componentCls:v,iconCls:s,avatarBg:p,avatarColor:z,containerSize:D,containerSizeLG:y,containerSizeSM:b,textFontSize:S,textFontSizeLG:I,textFontSizeSM:k,borderRadius:g,borderRadiusLG:h,borderRadiusSM:_,lineWidth:q,lineType:ee}=o,G=(F,W,te)=>({width:F,height:F,borderRadius:"50%",[`&${v}-square`]:{borderRadius:te},[`&${v}-icon`]:{fontSize:W,[`> ${s}`]:{margin:0}}});return{[v]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,r.Wf)(o)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:z,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:p,border:`${(0,c.bf)(q)} ${ee} transparent`,["&-image"]:{background:"transparent"},[`${i}-image-img`]:{display:"block"}}),G(D,S,g)),{["&-lg"]:Object.assign({},G(y,I,h)),["&-sm"]:Object.assign({},G(b,k,_)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},E=o=>{const{componentCls:i,groupBorderColor:v,groupOverlapping:s,groupSpace:p}=o;return{[`${i}-group`]:{display:"inline-flex",[`${i}`]:{borderColor:v},["> *:not(:first-child)"]:{marginInlineStart:s}},[`${i}-group-popover`]:{[`${i} + ${i}`]:{marginInlineStart:p}}}},m=o=>{const{controlHeight:i,controlHeightLG:v,controlHeightSM:s,fontSize:p,fontSizeLG:z,fontSizeXL:D,fontSizeHeading3:y,marginXS:b,marginXXS:S,colorBorderBg:I}=o;return{containerSize:i,containerSizeLG:v,containerSizeSM:s,textFontSize:Math.round((z+D)/2),textFontSizeLG:y,textFontSizeSM:p,groupSpace:S,groupOverlapping:-b,groupBorderColor:I}};var a=(0,u.I$)("Avatar",o=>{const{colorTextLightSolid:i,colorTextPlaceholder:v}=o,s=(0,d.TS)(o,{avatarBg:v,avatarColor:i});return[l(s),E(s)]},m),P=function(o,i){var v={};for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&i.indexOf(s)<0&&(v[s]=o[s]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,s=Object.getOwnPropertySymbols(o);p<s.length;p++)i.indexOf(s[p])<0&&Object.prototype.propertyIsEnumerable.call(o,s[p])&&(v[s[p]]=o[s[p]]);return v};const U=(o,i)=>{const[v,s]=e.useState(1),[p,z]=e.useState(!1),[D,y]=e.useState(!0),b=e.useRef(null),S=e.useRef(null),I=(0,L.sQ)(i,b),{getPrefixCls:k,avatar:g}=e.useContext(N.E_),h=e.useContext(n),_=()=>{if(!S.current||!b.current)return;const C=S.current.offsetWidth,O=b.current.offsetWidth;if(C!==0&&O!==0){const{gap:A=4}=o;A*2<O&&s(O-A*2<C?(O-A*2)/C:1)}};e.useEffect(()=>{z(!0)},[]),e.useEffect(()=>{y(!0),s(1)},[o.src]),e.useEffect(_,[o.gap]);const q=()=>{const{onError:C}=o;(C==null?void 0:C())!==!1&&y(!1)},{prefixCls:ee,shape:G,size:F,src:W,srcSet:te,icon:$,className:ae,rootClassName:ne,alt:se,draggable:Ee,children:ue,crossOrigin:Ce}=o,ve=P(o,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),B=(0,X.Z)(C=>{var O,A;return(A=(O=F!=null?F:h==null?void 0:h.size)!==null&&O!==void 0?O:C)!==null&&A!==void 0?A:"default"}),Oe=Object.keys(typeof B=="object"?B||{}:{}).some(C=>["xs","sm","md","lg","xl","xxl"].includes(C)),me=(0,Q.Z)(Oe),he=e.useMemo(()=>{if(typeof B!="object")return{};const C=j.c4.find(A=>me[A]),O=B[C];return O?{width:O,height:O,fontSize:O&&($||ue)?O/2:18}:{}},[me,B]),R=k("avatar",ee),fe=(0,K.Z)(R),[Pe,ye,Se]=a(R,fe),xe=M()({[`${R}-lg`]:B==="large",[`${R}-sm`]:B==="small"}),pe=e.isValidElement(W),_e=G||(h==null?void 0:h.shape)||"circle",Me=M()(R,xe,g==null?void 0:g.className,`${R}-${_e}`,{[`${R}-image`]:pe||W&&D,[`${R}-icon`]:!!$},Se,fe,ae,ne,ye),De=typeof B=="number"?{width:B,height:B,fontSize:$?B/2:18}:{};let oe;if(typeof W=="string"&&D)oe=e.createElement("img",{src:W,draggable:Ee,srcSet:te,onError:q,alt:se,crossOrigin:Ce});else if(pe)oe=W;else if($)oe=$;else if(p||v!==1){const C=`scale(${v})`,O={msTransform:C,WebkitTransform:C,transform:C};oe=e.createElement(H.Z,{onResize:_},e.createElement("span",{className:`${R}-string`,ref:S,style:Object.assign({},O)},ue))}else oe=e.createElement("span",{className:`${R}-string`,style:{opacity:0},ref:S},ue);return delete ve.onError,delete ve.gap,Pe(e.createElement("span",Object.assign({},ve,{style:Object.assign(Object.assign(Object.assign(Object.assign({},De),he),g==null?void 0:g.style),ve.style),className:Me,ref:I}),oe))};var w=e.forwardRef(U),Y=t(15489),V=t(81186),J=t(49696);const ie=o=>{const{size:i,shape:v}=e.useContext(n),s=e.useMemo(()=>({size:o.size||i,shape:o.shape||v}),[o.size,o.shape,i,v]);return e.createElement(n.Provider,{value:s},o.children)};var re=o=>{const{getPrefixCls:i,direction:v}=e.useContext(N.E_),{prefixCls:s,className:p,rootClassName:z,style:D,maxCount:y,maxStyle:b,size:S,shape:I,maxPopoverPlacement:k="top",maxPopoverTrigger:g="hover",children:h}=o,_=i("avatar",s),q=`${_}-group`,ee=(0,K.Z)(_),[G,F,W]=a(_,ee),te=M()(q,{[`${q}-rtl`]:v==="rtl"},W,ee,p,z,F),$=(0,Y.Z)(h).map((ne,se)=>(0,V.Tm)(ne,{key:`avatar-key-${se}`})),ae=$.length;if(y&&y<ae){const ne=$.slice(0,y),se=$.slice(y,ae);return ne.push(e.createElement(J.Z,{key:"avatar-popover-key",content:se,trigger:g,placement:k,overlayClassName:`${q}-popover`,destroyTooltipOnHide:!0},e.createElement(w,{style:b},`+${ae-y}`))),G(e.createElement(ie,{shape:I,size:S},e.createElement("div",{className:te,style:D},ne)))}return G(e.createElement(ie,{shape:I,size:S},e.createElement("div",{className:te,style:D},$)))};const ce=w;ce.Group=re;var de=ce},3113:function(le,T,t){var e=t(75271),x=t(82187),M=t.n(x),H=t(57996),L=t(59127),j=t(7771),N=t(88055),K=function(n,c){var r={};for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&c.indexOf(u)<0&&(r[u]=n[u]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,u=Object.getOwnPropertySymbols(n);d<u.length;d++)c.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(n,u[d])&&(r[u[d]]=n[u[d]]);return r};const X=(n,c,r)=>!c&&!r?null:e.createElement(e.Fragment,null,c&&e.createElement("div",{className:`${n}-title`},(0,L.Z)(c)),e.createElement("div",{className:`${n}-inner-content`},(0,L.Z)(r))),Q=n=>{const{hashId:c,prefixCls:r,className:u,style:d,placement:l="top",title:E,content:m,children:a}=n;return e.createElement("div",{className:M()(c,r,`${r}-pure`,`${r}-placement-${l}`,u),style:d},e.createElement("div",{className:`${r}-arrow`}),e.createElement(H.G,Object.assign({},n,{className:c,prefixCls:r}),a||X(r,E,m)))},f=n=>{const{prefixCls:c,className:r}=n,u=K(n,["prefixCls","className"]),{getPrefixCls:d}=e.useContext(j.E_),l=d("popover",c),[E,m,a]=(0,N.Z)(l);return E(e.createElement(Q,Object.assign({},u,{prefixCls:l,hashId:m,className:M()(r,a)})))};T.ZP=f},49696:function(le,T,t){var e=t(75271),x=t(82187),M=t.n(x),H=t(59030),L=t(57585),j=t(59127),N=t(84865),K=t(81186),X=t(7771),Q=t(78966),f=t(3113),n=t(88055),c=function(l,E){var m={};for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&E.indexOf(a)<0&&(m[a]=l[a]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,a=Object.getOwnPropertySymbols(l);P<a.length;P++)E.indexOf(a[P])<0&&Object.prototype.propertyIsEnumerable.call(l,a[P])&&(m[a[P]]=l[a[P]]);return m};const r=l=>{let{title:E,content:m,prefixCls:a}=l;return e.createElement(e.Fragment,null,E&&e.createElement("div",{className:`${a}-title`},(0,j.Z)(E)),e.createElement("div",{className:`${a}-inner-content`},(0,j.Z)(m)))},d=e.forwardRef((l,E)=>{var m,a;const{prefixCls:P,title:U,content:Z,overlayClassName:w,placement:Y="top",trigger:V="hover",children:J,mouseEnterDelay:ie=.1,mouseLeaveDelay:ge=.1,onOpenChange:re,overlayStyle:ce={}}=l,de=c(l,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:o}=e.useContext(X.E_),i=o("popover",P),[v,s,p]=(0,n.Z)(i),z=o(),D=M()(w,s,p),[y,b]=(0,H.Z)(!1,{value:(m=l.open)!==null&&m!==void 0?m:l.visible,defaultValue:(a=l.defaultOpen)!==null&&a!==void 0?a:l.defaultVisible}),S=(g,h)=>{b(g,!0),re==null||re(g,h)},I=g=>{g.keyCode===L.Z.ESC&&S(!1,g)},k=g=>{S(g)};return v(e.createElement(Q.Z,Object.assign({placement:Y,trigger:V,mouseEnterDelay:ie,mouseLeaveDelay:ge,overlayStyle:ce},de,{prefixCls:i,overlayClassName:D,ref:E,open:y,onOpenChange:k,overlay:U||Z?e.createElement(r,{prefixCls:i,title:U,content:Z}):null,transitionName:(0,N.m)(z,"zoom-big",de.transitionName),"data-popover-inject":!0}),(0,K.Tm)(J,{onKeyDown:g=>{var h,_;e.isValidElement(J)&&((_=J==null?void 0:(h=J.props).onKeyDown)===null||_===void 0||_.call(h,g)),I(g)}})))});d._InternalPanelDoNotUseOrYouWillBeFired=f.ZP,T.Z=d},88055:function(le,T,t){var e=t(22884),x=t(56642),M=t(95827),H=t(39451),L=t(19336),j=t(58846),N=t(58188);const K=f=>{const{componentCls:n,popoverColor:c,titleMinWidth:r,fontWeightStrong:u,innerPadding:d,boxShadowSecondary:l,colorTextHeading:E,borderRadiusLG:m,zIndexPopup:a,titleMarginBottom:P,colorBgElevated:U,popoverBg:Z,titleBorderBottom:w,innerContentPadding:Y,titlePadding:V}=f;return[{[n]:Object.assign(Object.assign({},(0,e.Wf)(f)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:a,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":U,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{backgroundColor:Z,backgroundClip:"padding-box",borderRadius:m,boxShadow:l,padding:d},[`${n}-title`]:{minWidth:r,marginBottom:P,color:E,fontWeight:u,borderBottom:w,padding:V},[`${n}-inner-content`]:{color:c,padding:Y}})},(0,M.ZP)(f,"var(--antd-arrow-background-color)"),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:f.sizePopupArrow,display:"inline-block",[`${n}-content`]:{display:"inline-block"}}}]},X=f=>{const{componentCls:n}=f;return{[n]:L.i.map(c=>{const r=f[`${c}6`];return{[`&${n}-${c}`]:{"--antd-arrow-background-color":r,[`${n}-inner`]:{backgroundColor:r},[`${n}-arrow`]:{background:"transparent"}}}})}},Q=f=>{const{lineWidth:n,controlHeight:c,fontHeight:r,padding:u,wireframe:d,zIndexPopupBase:l,borderRadiusLG:E,marginXS:m,lineType:a,colorSplit:P,paddingSM:U}=f,Z=c-r,w=Z/2,Y=Z/2-n,V=u;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:l+30},(0,H.w)(f)),(0,M.wZ)({contentRadius:E,limitVerticalRadius:!0})),{innerPadding:d?0:12,titleMarginBottom:d?0:m,titlePadding:d?`${w}px ${V}px ${Y}px`:0,titleBorderBottom:d?`${n}px ${a} ${P}`:"none",innerContentPadding:d?`${U}px ${V}px`:0})};T.Z=(0,j.I$)("Popover",f=>{const{colorBgElevated:n,colorText:c}=f,r=(0,N.TS)(f,{popoverBg:n,popoverColor:c});return[K(r),X(r),(0,x._y)(r,"zoom-big")]},Q,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})}}]);
