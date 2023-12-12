"use strict";(self.webpackChunkyeti_docs=self.webpackChunkyeti_docs||[]).push([[789],{7426:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(1151),i=n(7294);function r(e){const t=Object.assign({p:"p",h1:"h1",ul:"ul",li:"li",h2:"h2",a:"a"},(0,a.ah)(),e.components);return i.createElement(i.Fragment,null,i.createElement(t.p,null,"낚시성 기사에 대해 ",i.createElement("strike",null,"내용을 요약해주는")," 제목을 재생성하는 서비스를 진행하기로 하였어요."),"\n",i.createElement(t.h1,{id:"기획"},"기획"),"\n",i.createElement(t.p,null,"프로젝트를 진행하기 위해서 크게 세 가지로 작업을 나눌 수 있어요."),"\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"낚시성 기사 탐지"),"\n",i.createElement(t.li,null,"기사 내용을 통한 제목 생성"),"\n",i.createElement(t.li,null,"시각적으로 모델을 활용할 수 있는 interface"),"\n"),"\n",i.createElement(t.h2,{id:"낚시성-기사-탐지"},"낚시성 기사 탐지"),"\n",i.createElement(t.p,null,"기사의 제목과 내용을 이용하여 낚시성 여부를 판단하는 모델을 구현 할거에요."),"\n",i.createElement(t.p,null,"기존 BERT 모델을 이용하여 낚시성 여부를 판단하려 하였으나,\r\n기사 제목 + 내용이 한꺼번에 토큰화되어 모델의 입력으로 들어가기 때문에 BERT의 최대 토큰 수 제한이 정확도를 하락시킬 수 있다고 판단했습니다.\r\n따라서 LongFormer의 self-attention 메카니즘을 BERT에 적용하고 최대 토큰 수를 늘리는 방식을 활용하여 구현을 진행도록 기획하였어요."),"\n",i.createElement(t.p,null,i.createElement(t.a,{href:"https://www.aihub.or.kr/aihubdata/data/view.do?currMenu=&topMenu=&aihubDataSe=data&dataSetSn=71338"},"낚시성 기사 데이터 (AI-Hub)")),"\n",i.createElement(t.h2,{id:"제목-생성"},"제목 생성"),"\n",i.createElement(t.p,null,"기사의 내용을 통해 제목을 생성하는 모델을 구현합니다."),"\n",i.createElement(t.p,null,"BART 모델이 텍스트 이해와 생성 작업에 좋은 성적을 낸다는 것을 보았어요.\r\n따라서 이를 활용하여 구현을 진행하도록 기획했어요."),"\n",i.createElement(t.p,null,i.createElement(t.a,{href:"https://www.aihub.or.kr/aihubdata/data/view.do?currMenu=&topMenu=&aihubDataSe=data&dataSetSn=97"},"문서 요약 데이터 (AI-Hub)")),"\n",i.createElement(t.h2,{id:"모델-이용-interface"},"모델 이용 Interface"),"\n",i.createElement(t.p,null,"크롬 extension을 활용하여 구현을 할 수 있을지 이건 좀 찾아보겠다!"))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?i.createElement(t,e,i.createElement(r,e)):r(e)},d=n(4316),o=n(1840),c=n(2036),m=n(2654),s=n(4111),u=n(2726),h=n(4480),p=n(2818),f=n(9213),Z=n(7213),b=n(9265),w=n(9601),g=n(3071),v=n(6097),E=n(6782),x=n(4891),j=n(3387),y=n(917);const k=e=>{let{data:{mdx:t,file:n},children:r}=e;const l=(0,h.sJ)((0,p.cp)(p.eE,!1)),d=(0,h.sJ)((0,p.cp)(p.rf,!1)),f=(0,h.Zl)((0,p.cp)(p.Cy,t.tableOfContents.items));return(0,i.useEffect)((()=>{f(t.tableOfContents.items)}),[t]),(0,y.tZ)(o.Z,null,(0,y.tZ)(O,null,(0,y.tZ)(s.Z,null)),(0,y.tZ)(H,null,(0,y.tZ)(A,{className:"navigation",isNavOpened:d},(0,y.tZ)(I,null,(0,y.tZ)(c.Z,null))),(0,y.tZ)(D,{isNavOpened:d},(0,y.tZ)(R,{isWide:l},(0,y.tZ)(u.Z,{title:t.frontmatter.title,modifiedTime:n.modifiedTime}),(0,y.tZ)(a.Zo,{components:{p:Z.Z,h1:b.H1,h2:b.H2,h3:b.H3,h4:b.H4,h5:b.H5,h6:b.H6,hr:w.Z,blockquote:g.Z,ul:E.Z,ol:v.Z,pre:x.Z,code:j.Z}},r))),(0,y.tZ)(S,null,(0,y.tZ)(T,null,(0,y.tZ)(m.Z,null)))))},O=(0,d.Z)("div",{target:"e1ojob7j7"})({name:"11t2x7x",styles:"display:flex;height:var(--header-height);z-index:5;padding:0.6rem 2rem 0.6rem 0.6rem;position:fixed;width:100%;background:var(--background-color);border-bottom:1px solid var(--border-color)"}),H=(0,d.Z)("div",{target:"e1ojob7j6"})({name:"majwgz",styles:"position:relative;display:flex;min-height:calc(100vh - var(--header-height));overflow-x:hidden"}),A=(0,d.Z)("aside",{target:"e1ojob7j5"})("margin-left:",(e=>e.isNavOpened?"0":"calc(-1 * var(--sidebar-width))"),";flex:0 0 var(--sidebar-width);font-size:0.875rem;overflow-x:hidden;overflow-y:auto;padding-top:var(--body-padding-top);transition:margin 0.25s var(--ease-in-out-quad);@media (min-width: ",f.Z.IPAD_PRO,"px){margin-left:0;}"),I=(0,d.Z)("nav",{target:"e1ojob7j4"})({name:"1u006gd",styles:"position:fixed;width:var(--sidebar-width)"}),R=(0,d.Z)("main",{target:"e1ojob7j3"})("padding:1rem;width:100%;@media (min-width: ",f.Z.IPAD_AIR,"px){width:",(e=>e.isWide?"90%":"65%"),";}"),D=(0,d.Z)("main",{target:"e1ojob7j2"})("width:calc(100% - 2 * var(--sidebar-width));padding-top:var(--body-padding-top);flex-grow:1;min-width:20rem;display:flex;justify-content:center;opacity:",(e=>e.isNavOpened?.3:1),";@media (min-width: ",f.Z.IPAD_PRO,"px){opacity:1;}"),S=(0,d.Z)("aside",{target:"e1ojob7j1"})("font-size:0.75rem;font-weight:bold;overflow-x:hidden;overflow-y:auto;padding-top:var(--body-padding-top);width:0;transition:width 0.25s var(--ease-in-out-quad);@media (min-width: ",f.Z.HD,"px){width:var(--sidebar-width);}"),T=(0,d.Z)(I,{target:"e1ojob7j0"})({name:"b40oxt",styles:"padding:0 1rem 0 1rem"});function C(e){return i.createElement(k,e,i.createElement(l,e))}}}]);
//# sourceMappingURL=component---src-components-templates-main-template-tsx-content-file-path-contents-true-title-index-mdx-6de04d92b43c70cd11a0.js.map