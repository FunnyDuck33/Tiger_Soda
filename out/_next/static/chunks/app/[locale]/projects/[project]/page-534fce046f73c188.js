(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{7092:function(e,t,r){Promise.resolve().then(r.bind(r,6518))},6518:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Project}});var s=r(7437),o=r(9090),a=r(4440),_=r.n(a),n=r(1501),i=r.n(n),Text_Text=e=>{let{title:t,className:r,content:o,isColumns:a}=e;return(0,s.jsxs)("div",{className:_()(i().root,"box",r),children:[(0,s.jsx)("div",{className:i().title,children:t}),(0,s.jsx)("div",{className:i().contentWrapper,children:(0,s.jsx)("div",{className:_()(i().content,a&&i().content_columns),dangerouslySetInnerHTML:{__html:o}})})]})},c=r(8232),l=r.n(c),m=r(1795),x=r(8753),Creators_Creators=e=>{let{data:t}=e,r=(0,m.useTranslations)("Projects");return(0,s.jsxs)("div",{className:l().root,children:[(0,s.jsx)("div",{className:l().title,children:r("artistsTitle")}),(0,s.jsx)("div",{className:l().wrapper,children:t.map(e=>{let{name:t,link:r,src:o}=e;return(0,s.jsx)(x.Z,{src:o,title:t,link:r,size:"xxs"})})})]})},d=r(2332),p=r(8471),v=r.n(p),g=r(1523),j=r.n(g),DescriptionWrapper_DescriptionWrapper=e=>{let{className:t,children:r,desc:o,descAlign:a="left"}=e;return(0,s.jsxs)("div",{className:_()(j().root,t),children:[r,(0,s.jsx)("div",{className:j().desc,style:{textAlign:a},children:o})]})},u=r(8524),ContentRow_ContentRow=e=>{let{data:t}=e;return(0,s.jsx)("div",{className:_()(v().root,"box"),children:t.map(e=>{let{desc:t,src:r,srcM:o,descAlign:a,height:_}=e;return(0,s.jsx)(DescriptionWrapper_DescriptionWrapper,{className:v().wrapper,desc:t,descAlign:(0,u.tq)()?"center":a,children:(0,s.jsx)("img",{className:v().mainImg,style:(0,u.tq)()?{}:{height:"".concat(_,"rem")},src:(0,u.tq)()&&o?o:r,alt:""})})})})},N=r(1872),h=r.n(N),w=r(7892),I=r(48),T={src:"/_next/static/media/arrow.f1728478.svg"},f=r(6775),Navigator_Navigator=e=>{let{project:t}=e,r=(0,m.useTranslations)("Projects"),o=w.eT[w.eT.indexOf(t)-1]||w.eT[w.eT.length-1],a=w.eT[w.eT.indexOf(t)+1]||w.eT[0],n=(0,s.jsx)(f.Z,{href:"/projects/".concat(o),className:h().link,children:(0,s.jsxs)("div",{className:h().nav,children:[(0,s.jsx)("img",{src:T.src,alt:"",className:_()(h().navArrowLeft,h().navArrow)}),!(0,u.tq)()&&(0,s.jsx)("div",{className:h().navText,children:r("navigatorPrevButton")})]})}),i=(0,s.jsx)(f.Z,{href:"/projects/".concat(a),className:h().link,children:(0,s.jsxs)("div",{className:h().nav,children:[!(0,u.tq)()&&(0,s.jsx)("div",{className:h().navText,children:r("navigatorNextButton")}),(0,s.jsx)("img",{src:T.src,alt:"",className:_()(h().navArrowRight,h().navArrow)})]})}),c=(0,s.jsx)(f.Z,{href:"/projects",className:h().link,children:(0,s.jsxs)("div",{className:h().button,children:[r("navigatorButton"),(0,s.jsx)("img",{src:I.Z.src,alt:"",className:h().arrow})]})});return(0,s.jsx)("div",{className:_()(h().root,"box"),children:(0,u.tq)()?(0,s.jsxs)(s.Fragment,{children:[c,(0,s.jsxs)("div",{className:h().arrowWrapper,children:[n,i]})]}):(0,s.jsxs)(s.Fragment,{children:[n,c,i]})})},z=r(233),C=r.n(z);function Project(e){let{params:t}=e,r=(0,m.useTranslations)("Projects"),{locale:a,project:_}=t,n=(0,w.PY)(_),{taskSrc:i,cover:c,ideas:l,content:x,creators:p}=(0,w.PY)(_);return(0,s.jsxs)("div",{className:C().root,children:[(0,s.jsx)(o.Z,{locale:a,type:"project",...n}),(0,s.jsx)(Text_Text,{title:r("coverTitle"),content:[c],className:C().cover}),(0,s.jsx)("img",{src:i,alt:"",className:C().img}),(0,s.jsx)(Text_Text,{title:r("ideasTitle"),content:l,className:C().ideas,isColumns:!0}),x.map(e=>(0,s.jsx)(ContentRow_ContentRow,{data:e})),p&&(0,s.jsx)(Creators_Creators,{data:p}),(0,s.jsx)(Navigator_Navigator,{project:_}),(0,s.jsx)(d.Z,{})]})}},9090:function(e,t,r){"use strict";var s=r(7437),o=r(4440),a=r.n(o),_=r(7466),n=r(48),i=r(8524),c=r(757),l=r.n(c);t.Z=e=>{let{locale:t,titleImage:r,tags:o,title:c,titleM:m,titleText:x,type:d}=e,p={project:l().root_type_project,creator:l().root_type_creator};return(0,s.jsxs)("div",{className:a()(l().root,"wide_padding",p[d]),children:[(0,s.jsx)(_.Z,{withLogo:!0,theme:"black",locale:t}),(0,s.jsxs)("div",{className:l().title,children:[(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,i.tq)()&&m?m:c}}),"creator"!==d&&(0,s.jsx)("span",{children:(0,s.jsx)("img",{src:n.Z.src,alt:"",className:l().arrow})})]}),x&&(0,s.jsx)("div",{className:l().text,dangerouslySetInnerHTML:{__html:x}}),(0,s.jsx)("div",{className:l().tagsWrapper,children:null==o?void 0:o.map((e,t)=>(0,s.jsx)("div",{className:l().tag,children:e},t))}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:(0,i.tq)()?null==r?void 0:r.srcM:null==r?void 0:r.src,alt:"",className:l().item,style:(0,i.cT)((0,i.tq)()?r.stylesM:r.styles)})})]})}},8753:function(e,t,r){"use strict";var s=r(7437),o=r(4440),a=r.n(o),_=r(6775),n=r(2644),i=r.n(n);let c={l:i().root_size_l,m:i().root_size_m,s:i().root_size_s,xs:i().root_size_xs,xxs:i().root_size_xxs,xxxs:i().root_size_xxxs},l={row:i().root_position_row,column:i().root_position_column};t.Z=e=>{let{src:t,title:r,link:o,size:n,desc:m,position:x="column",isInlineArrow:d}=e;return(0,s.jsx)("div",{className:a()(i().root,c[n],l[x],d&&i().root_inlineArrow),children:(0,s.jsx)(_.Z,{href:o,className:i().link,children:(0,s.jsxs)("div",{className:i().wrapper,children:[(0,s.jsx)("img",{src:t,alt:"",className:i().img}),(0,s.jsx)("div",{className:i().title,dangerouslySetInnerHTML:{__html:r}}),m&&(0,s.jsx)("div",{className:i().desc,children:m})]})})})}},233:function(e){e.exports={root:"page_root__CwkJX",cover:"page_cover__PbKSQ",img:"page_img__amKIl",ideas:"page_ideas__zNCmA"}},8471:function(e){e.exports={root:"ContentRow_root__TwRgE",mainImg:"ContentRow_mainImg__4u1Sn",wrapper:"ContentRow_wrapper__PamQ_"}},8232:function(e){e.exports={root:"Creators_root__8oRVY",title:"Creators_title__v5P4b",wrapper:"Creators_wrapper__A2TXW"}},1523:function(e){e.exports={desc:"DescriptionWrapper_desc__huOU5"}},1872:function(e){e.exports={root:"Navigator_root__n_bD3",link:"Navigator_link__wF8ZA",button:"Navigator_button__HBwgG",arrow:"Navigator_arrow__tVlXk",nav:"Navigator_nav__fKELG",navText:"Navigator_navText__pL7BU",navArrow:"Navigator_navArrow__i74Yz",navArrowLeft:"Navigator_navArrowLeft__0Tbi1",navArrowRight:"Navigator_navArrowRight__qZUwC",arrowWrapper:"Navigator_arrowWrapper__Ghmzj"}},1501:function(e){e.exports={root:"Text_root__tQZlz",title:"Text_title__hKgqF",contentWrapper:"Text_contentWrapper__Lx0Kf",content:"Text_content__aaDJE",content_columns:"Text_content_columns__xwRqd"}},757:function(e){e.exports={root:"Header_root__WmFhA",title:"Header_title__ruMvi",arrow:"Header_arrow__jQs3p",tagsWrapper:"Header_tagsWrapper__HZWIJ",tag:"Header_tag__Qs7AH",item:"Header_item__046HS",text:"Header_text__JIofC",root_type_creator:"Header_root_type_creator__1UBeI"}},2644:function(e){e.exports={root_size_xxxs:"ImageItem_root_size_xxxs__HShAv",img:"ImageItem_img__l6Tp3",title:"ImageItem_title__UzkhR",root_position_row:"ImageItem_root_position_row__u17v_",wrapper:"ImageItem_wrapper__Osltl",root_position_column:"ImageItem_root_position_column__0r58w",root_inlineArrow:"ImageItem_root_inlineArrow__eLC7c",root:"ImageItem_root__9v8tU",root_size_l:"ImageItem_root_size_l__Ddc2f",root_size_m:"ImageItem_root_size_m__EYZyp",root_size_s:"ImageItem_root_size_s__9a_xG",root_size_xxs:"ImageItem_root_size_xxs__GFr8o",link:"ImageItem_link__OtViP",desc:"ImageItem_desc__uevji",root_size_xs:"ImageItem_root_size_xs__7m4lE"}}},function(e){e.O(0,[816,434,341,971,472,744],function(){return e(e.s=7092)}),_N_E=e.O()}]);