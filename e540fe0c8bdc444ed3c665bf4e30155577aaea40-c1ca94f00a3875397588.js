"use strict";(self.webpackChunkyeti_docs=self.webpackChunkyeti_docs||[]).push([[6173],{3147:function(t,e,n){var r=n(4836);e.Z=void 0;var i=r(n(4938)),o=n(5893),l=(0,i.default)((0,o.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"}),"CalendarMonth");e.Z=l},6130:function(t,e,n){var r=n(4836);e.Z=void 0;var i=r(n(4938)),o=n(5893),l=(0,i.default)((0,o.jsx)("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),"List");e.Z=l},2339:function(t,e,n){var r=n(4836);e.Z=void 0;var i=r(n(4938)),o=n(5893),l=(0,i.default)((0,o.jsx)("path",{d:"M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"}),"Subject");e.Z=l},4938:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(4261)},4261:function(t,e,n){n.r(e),n.d(e,{capitalize:function(){return i.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return l.Z},debounce:function(){return u},deprecatedPropType:function(){return a},isMuiElement:function(){return d},ownerDocument:function(){return v},ownerWindow:function(){return m},requirePropFactory:function(){return h},setRef:function(){return g},unstable_ClassNameGenerator:function(){return F},unstable_useEnhancedEffect:function(){return Z},unstable_useId:function(){return x},unsupportedProp:function(){return k},useControlled:function(){return z},useEventCallback:function(){return j},useForkRef:function(){return E},useIsFocusVisible:function(){return _}});var r=n(7078),i=n(8216);var o=function(...t){return t.reduce(((t,e)=>null==e?t:function(...n){t.apply(this,n),e.apply(this,n)}),(()=>{}))},l=n(7265);var u=function(t,e=166){let n;function r(...r){clearTimeout(n),n=setTimeout((()=>{t.apply(this,r)}),e)}return r.clear=()=>{clearTimeout(n)},r};var a=function(t,e){return()=>null},c=n(7294),s=n.t(c,2);var d=function(t,e){var n,r;return c.isValidElement(t)&&-1!==e.indexOf(null!=(n=t.type.muiName)?n:null==(r=t.type)||null==(r=r._payload)||null==(r=r.value)?void 0:r.muiName)};function f(t){return t&&t.ownerDocument||document}var v=f;var m=function(t){return f(t).defaultView||window};n(7462);var h=function(t,e){return()=>null};function p(t,e){"function"==typeof t?t(e):t&&(t.current=e)}var g=p;var w="undefined"!=typeof window?c.useLayoutEffect:c.useEffect,Z=w;let y=0;const b=s["useId".toString()];var x=function(t){if(void 0!==b){const e=b();return null!=t?t:e}return function(t){const[e,n]=c.useState(t),r=t||e;return c.useEffect((()=>{null==e&&(y+=1,n(`mui-${y}`))}),[e]),r}(t)};var k=function(t,e,n,r,i){return null};var z=function({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=c.useRef(void 0!==t),[o,l]=c.useState(e);return[i?t:o,c.useCallback((t=>{i||l(t)}),[])]};var j=function(t){const e=c.useRef(t);return w((()=>{e.current=t})),c.useRef(((...t)=>(0,e.current)(...t))).current};var E=function(...t){return c.useMemo((()=>t.every((t=>null==t))?null:e=>{t.forEach((t=>{p(t,e)}))}),t)};let C,H=!0,S=!1;const R={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function V(t){t.metaKey||t.altKey||t.ctrlKey||(H=!0)}function M(){H=!1}function T(){"hidden"===this.visibilityState&&S&&(H=!0)}function L(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch(n){}return H||function(t){const{type:e,tagName:n}=t;return!("INPUT"!==n||!R[e]||t.readOnly)||"TEXTAREA"===n&&!t.readOnly||!!t.isContentEditable}(e)}var _=function(){const t=c.useCallback((t=>{var e;null!=t&&((e=t.ownerDocument).addEventListener("keydown",V,!0),e.addEventListener("mousedown",M,!0),e.addEventListener("pointerdown",M,!0),e.addEventListener("touchstart",M,!0),e.addEventListener("visibilitychange",T,!0))}),[]),e=c.useRef(!1);return{isFocusVisibleRef:e,onFocus:function(t){return!!L(t)&&(e.current=!0,!0)},onBlur:function(){return!!e.current&&(S=!0,window.clearTimeout(C),C=window.setTimeout((()=>{S=!1}),100),e.current=!1,!0)},ref:t}};const F={configure:t=>{r.Z.configure(t)}}},2439:function(t,e,n){n.r(e),n.d(e,{Card:function(){return f},CardContainer:function(){return m},ColorText:function(){return g},Cols:function(){return y},Comment:function(){return x},Details:function(){return j},Image:function(){return H},Project:function(){return F},TwoCols:function(){return P}});var r=n(4316),i=n(1883),o=n(917);const l=(0,r.Z)(i.Link,{target:"e1x4wbj75"})({name:"1r30ja9",styles:"text-decoration:none;width:20rem;height:16rem;margin:1rem;display:inline-block;border-radius:6px;overflow:hidden;box-shadow:0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);background-color:var(--card-background);border-top:1px solid var(--border-color);opacity:0.9;&:hover{cursor:pointer;opacity:1;}"}),u=(0,r.Z)("div",{target:"e1x4wbj74"})({name:"gqov8k",styles:"width:100%;height:55%;border-bottom:1px solid var(--border-color)"}),a=(0,r.Z)("img",{target:"e1x4wbj73"})({name:"w1atjl",styles:"width:100%;height:100%"}),c=(0,r.Z)("div",{target:"e1x4wbj72"})({name:"erte3j",styles:"width:100%;height:38%;font-weight:bold;font-size:1.2rem;color:var(--text-color);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;text-overflow:ellipsis;overflow:hidden"}),s=(0,r.Z)("div",{target:"e1x4wbj71"})({name:"ppop2m",styles:"width:100%;height:62%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-overflow:ellipsis;overflow:hidden;color:var(--sub-text-color)"}),d=(0,r.Z)("div",{target:"e1x4wbj70"})({name:"1152vuo",styles:"width:100%;height:45%;padding:1rem"});var f=t=>{let{src:e,title:n,description:r,path:i}=t;return(0,o.tZ)(l,{to:i},(0,o.tZ)(u,null,(0,o.tZ)(a,{src:e})),(0,o.tZ)(d,null,(0,o.tZ)(c,null,n),(0,o.tZ)(s,null,r)))};const v=(0,r.Z)("div",{target:"ea2qx2y0"})({name:"9v8t5g",styles:"display:flex;flex-wrap:wrap;justify-content:space-evenly;width:100%"});var m=t=>{let{children:e}=t;return(0,o.tZ)(v,null,e)},h=n(7294);const p=(0,r.Z)("div",{target:"etnjdtb0"})("display:inline;color:",(t=>t.color),";");var g=t=>{let{color:e,children:n}=t;return(0,o.tZ)(p,{color:e},n)},w=n(9213);const Z=(0,r.Z)("div",{target:"enqggp40"})("width:",(t=>t.size),"%;padding:1rem;@media (max-width: ",w.Z.SD,"px){width:100%;}");var y=t=>{let{size:e,children:n}=t;return(0,o.tZ)(Z,{size:e}," ",n," ")};const b=(0,r.Z)("code",{target:"ejkn85g0"})({name:"15yct12",styles:"display:block;width:100%;padding:0.2rem 0.4rem 0rem;color:var(--comment-color)"});var x=t=>{let{children:e}=t;return(0,o.tZ)(b,null,e)};const k=(0,r.Z)("summary",{target:"e1x9xfu61"})({name:"gcj01z",styles:"margin-bottom:16px;margin-left:1rem"}),z=(0,r.Z)("div",{target:"e1x9xfu60"})({name:"1h51pyi",styles:"margin-top:-16px"});var j=t=>{let{title:e,children:n}=t;return(0,o.tZ)(k,null,(0,o.tZ)("details",null,(0,o.tZ)("summary",null,e),(0,o.tZ)(z,null,n)))};const E=(0,r.Z)("img",{target:"e1d3pt0e1"})({name:"1d3w5wq",styles:"width:100%"}),C=(0,r.Z)("div",{target:"e1d3pt0e0"})({name:"zov8s0",styles:"width:100%;display:flex;justify-content:center"});var H=t=>{let{src:e}=t;return(0,o.tZ)(C,null,(0,o.tZ)(E,{src:e}))},S=n(2339),R=n(6130),V=n(3147);const M=(0,r.Z)("div",{target:"ekinfji3"})({name:"1obs879",styles:"width:100%;display:block;color:var(--sub-text-color);font-size:14px"}),T=(0,r.Z)("div",{target:"ekinfji2"})({name:"p9xnqn",styles:"width:100%;margin-bottom:0.3rem;display:flex"}),L=(0,r.Z)("div",{target:"ekinfji1"})("width:",(t=>t.width),"%;display:flex;align-items:center;"),_=(0,r.Z)("div",{target:"ekinfji0"})("background-color:var(--",(t=>t.color),"-background-color);color:black;margin-right:0.5rem;padding:0 0.4rem;border-radius:2px;height:1.2rem;display:flex;align-items:center;");var F=t=>{let{members:e="",domain:n=[],roles:r=[],tools:i=[],schedule:l=""}=t;const u=(t,e)=>{const n=[];return t.forEach((t=>{n.push((0,o.tZ)(_,{color:e},t))})),(0,o.tZ)(h.Fragment,null,n)};return(0,o.tZ)(M,null,(0,o.tZ)(T,null,(0,o.tZ)(L,{width:20},(0,o.tZ)(S.Z,{fontSize:"small",style:{marginRight:4}}),"팀 구성"),(0,o.tZ)(L,{width:70,style:{color:"var(--text-color)"}},e)),(0,o.tZ)(T,null,(0,o.tZ)(L,{width:20},(0,o.tZ)(R.Z,{fontSize:"small",style:{marginRight:4}}),"분야"),(0,o.tZ)(L,{width:70},u(n,"info"))),(0,o.tZ)(T,null,(0,o.tZ)(L,{width:20},(0,o.tZ)(R.Z,{fontSize:"small",style:{marginRight:4}}),"역할"),(0,o.tZ)(L,{width:70},u(r,"warning"))),(0,o.tZ)(T,null,(0,o.tZ)(L,{width:20},(0,o.tZ)(R.Z,{fontSize:"small",style:{marginRight:4}}),"도구"),(0,o.tZ)(L,{width:70},u(i,"error"))),(0,o.tZ)(T,null,(0,o.tZ)(L,{width:20},(0,o.tZ)(V.Z,{fontSize:"small",style:{marginRight:4}}),"일정"),(0,o.tZ)(L,{width:70,style:{color:"var(--text-color)"}},l)))};const I=(0,r.Z)("div",{target:"eu2sah40"})("width:100%;display:flex;justify-content:space-around;align-items:",(t=>t.align?t.align:"unset"),";@media (max-width: ",w.Z.SD,"px){flex-direction:column;}");var P=t=>{let{align:e,children:n}=t;return(0,o.tZ)(I,{align:e},n)}}}]);
//# sourceMappingURL=e540fe0c8bdc444ed3c665bf4e30155577aaea40-c1ca94f00a3875397588.js.map