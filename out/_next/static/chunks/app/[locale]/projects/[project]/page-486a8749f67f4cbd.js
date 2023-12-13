(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{7092:function(e,t,r){Promise.resolve().then(r.bind(r,6518))},6518:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Project}});var a=r(7437),s=r(9090),o=r(4440),n=r.n(o),i=r(1501),c=r.n(i),l=r(8524),Text_Text=e=>{let{title:t,className:r,content:s}=e;return(0,l.tq)()&&(s=[s.join("")]),(0,a.jsxs)("div",{className:n()(c().root,"box",r),children:[(0,a.jsx)("div",{className:c().title,children:t}),(0,a.jsx)("div",{className:c().contentWrapper,children:s.map(e=>(0,a.jsx)("div",{className:c().content,dangerouslySetInnerHTML:{__html:e}}))})]})},_=r(8232),d=r.n(_),x=r(1795),p=r(8753),Creators_Creators=e=>{let{data:t}=e,r=(0,x.useTranslations)("Projects");return(0,a.jsxs)("div",{className:d().root,children:[(0,a.jsx)("div",{className:d().title,children:r("artistsTitle")}),(0,a.jsx)("div",{className:d().wrapper,children:t.map(e=>{let{name:t,link:r,src:s}=e;return(0,a.jsx)(p.Z,{src:s,title:t,link:r,size:"xxs"})})})]})},m=r(2332),v=r(8471),j=r.n(v),g=r(1523),N=r.n(g),DescriptionWrapper_DescriptionWrapper=e=>{let{className:t,children:r,desc:s,descAlign:o="left"}=e;return(0,a.jsxs)("div",{className:n()(N().root,t),children:[r,(0,a.jsx)("div",{className:N().desc,style:{textAlign:o},children:s})]})},ContentRow_ContentRow=e=>{let{data:t}=e;return(0,a.jsx)("div",{className:n()(j().root,"box"),children:t.map(e=>{let{desc:t,src:r,srcM:s,descAlign:o,height:n}=e;return(0,a.jsx)(DescriptionWrapper_DescriptionWrapper,{className:j().wrapper,desc:t,descAlign:(0,l.tq)()?"center":o,children:(0,a.jsx)("img",{className:j().mainImg,style:(0,l.tq)()?{}:{height:"".concat(n,"rem")},src:(0,l.tq)()&&s?s:r,alt:""})})})})},h=r(1872),u=r.n(h),w=r(7892),T=r(48),f={src:"/_next/static/media/arrow.f1728478.svg"},C=r(6775),Navigator_Navigator=e=>{let{project:t}=e,r=(0,x.useTranslations)("Projects"),s=w.eT[w.eT.indexOf(t)-1]||w.eT[w.eT.length-1],o=w.eT[w.eT.indexOf(t)+1]||w.eT[0],i=(0,a.jsx)(C.Z,{href:"/projects/".concat(s),className:u().link,children:(0,a.jsxs)("div",{className:u().nav,children:[(0,a.jsx)("img",{src:f.src,alt:"",className:n()(u().navArrowLeft,u().navArrow)}),!(0,l.tq)()&&(0,a.jsx)("div",{className:u().navText,children:r("navigatorPrevButton")})]})}),c=(0,a.jsx)(C.Z,{href:"/projects/".concat(o),className:u().link,children:(0,a.jsxs)("div",{className:u().nav,children:[!(0,l.tq)()&&(0,a.jsx)("div",{className:u().navText,children:r("navigatorNextButton")}),(0,a.jsx)("img",{src:f.src,alt:"",className:n()(u().navArrowRight,u().navArrow)})]})}),_=(0,a.jsx)(C.Z,{href:"/projects",className:u().link,children:(0,a.jsxs)("div",{className:u().button,children:[r("navigatorButton"),(0,a.jsx)("img",{src:T.Z.src,alt:"",className:u().arrow})]})});return(0,a.jsx)("div",{className:n()(u().root,"box"),children:(0,l.tq)()?(0,a.jsxs)(a.Fragment,{children:[_,(0,a.jsxs)("div",{className:u().arrowWrapper,children:[i,c]})]}):(0,a.jsxs)(a.Fragment,{children:[i,_,c]})})},A=r(233),W=r.n(A);function Project(e){let{params:t}=e,r=(0,x.useTranslations)("Projects"),{locale:o,project:n}=t,i=(0,w.PY)(n),{taskSrc:c,cover:l,ideas:_,content:d,creators:p}=(0,w.PY)(n);return(0,a.jsxs)("div",{className:W().root,children:[(0,a.jsx)(s.Z,{locale:o,type:"project",...i}),(0,a.jsx)(Text_Text,{title:r("coverTitle"),content:[l],className:W().cover}),(0,a.jsx)("img",{src:c,alt:"",className:W().img}),(0,a.jsx)(Text_Text,{title:r("ideasTitle"),content:_,className:W().ideas}),d.map(e=>(0,a.jsx)(ContentRow_ContentRow,{data:e})),p&&(0,a.jsx)(Creators_Creators,{data:p}),(0,a.jsx)(Navigator_Navigator,{project:n}),(0,a.jsx)(m.Z,{})]})}},9090:function(e,t,r){"use strict";var a=r(7437),s=r(4440),o=r.n(s),n=r(7466),i=r(48),c=r(8524),l=r(757),_=r.n(l);t.Z=e=>{let{locale:t,titleImage:r,tags:s,title:l,titleM:d,titleText:x,type:p}=e,m={project:_().root_type_project,creator:_().root_type_creator};return(0,a.jsxs)("div",{className:o()(_().root,"wide_padding",m[p]),children:[(0,a.jsx)(n.Z,{withLogo:!0,theme:"black",locale:t}),(0,a.jsxs)("div",{className:_().title,children:[(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,c.tq)()&&d?d:l}}),"creator"!==p&&(0,a.jsx)("span",{children:(0,a.jsx)("img",{src:i.Z.src,alt:"",className:_().arrow})})]}),x&&(0,a.jsx)("div",{className:_().text,dangerouslySetInnerHTML:{__html:x}}),(0,a.jsx)("div",{className:_().tagsWrapper,children:null==s?void 0:s.map((e,t)=>(0,a.jsx)("div",{className:_().tag,children:e},t))}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:(0,c.tq)()?null==r?void 0:r.srcM:null==r?void 0:r.src,alt:"",className:_().item,style:(0,c.cT)((0,c.tq)()?r.stylesM:r.styles)})})]})}},233:function(e){e.exports={root:"page_root__CwkJX",cover:"page_cover__PbKSQ",img:"page_img__amKIl",ideas:"page_ideas__zNCmA"}},8471:function(e){e.exports={root:"ContentRow_root__TwRgE",mainImg:"ContentRow_mainImg__4u1Sn",wrapper:"ContentRow_wrapper__PamQ_"}},8232:function(e){e.exports={root:"Creators_root__8oRVY",title:"Creators_title__v5P4b",wrapper:"Creators_wrapper__A2TXW"}},1523:function(e){e.exports={desc:"DescriptionWrapper_desc__huOU5"}},1872:function(e){e.exports={root:"Navigator_root__n_bD3",link:"Navigator_link__wF8ZA",button:"Navigator_button__HBwgG",arrow:"Navigator_arrow__tVlXk",nav:"Navigator_nav__fKELG",navText:"Navigator_navText__pL7BU",navArrow:"Navigator_navArrow__i74Yz",navArrowLeft:"Navigator_navArrowLeft__0Tbi1",navArrowRight:"Navigator_navArrowRight__qZUwC",arrowWrapper:"Navigator_arrowWrapper__Ghmzj"}},1501:function(e){e.exports={root:"Text_root__tQZlz",title:"Text_title__hKgqF",contentWrapper:"Text_contentWrapper__Lx0Kf",content:"Text_content__aaDJE"}},757:function(e){e.exports={root:"Header_root__WmFhA",title:"Header_title__ruMvi",arrow:"Header_arrow__jQs3p",tagsWrapper:"Header_tagsWrapper__HZWIJ",tag:"Header_tag__Qs7AH",item:"Header_item__046HS",text:"Header_text__JIofC",root_type_creator:"Header_root_type_creator__1UBeI"}}},function(e){e.O(0,[816,434,830,971,472,744],function(){return e(e.s=7092)}),_N_E=e.O()}]);