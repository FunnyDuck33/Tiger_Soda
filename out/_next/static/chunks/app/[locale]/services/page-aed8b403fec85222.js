(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[479],{88160:function(e,t,r){Promise.resolve().then(r.bind(r,64085))},64085:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Creators}});var o=r(57437),s=r(2265),i=r(17466),a=r(72332),_=r(61063),l=r.n(_),n=r(47762),c=r(54440),m=r.n(c),d=r(71795),p=r(84928),x=r.n(p),u=r(72574),h=r.n(u),v=r(88753),Examples_Examples=e=>{let{data:t}=e;return(0,o.jsx)("div",{className:h().root,children:t.map((e,t)=>{let{src:r,title:s,link:i}=e;return(0,o.jsx)(v.Z,{src:r,title:s,link:i,size:"xxxs",position:"row",isInlineArrow:!0},t)})})},Accordion_Accordion=e=>{let{number:t,title:r,examples:i,text:a,showBottomDivider:_}=e,l=(0,d.useTranslations)("Services"),n=(0,s.useRef)(null),c=(0,s.useRef)(null),p=(0,s.useRef)(null),u=(0,s.useCallback)(e=>{let t=n.current,r=c.current,o=p.current;r&&(r.style.height="".concat((null==o?void 0:o.offsetHeight)||0,"px")),null==t||t.classList.toggle(x().root_hidden)},[]);return(0,o.jsxs)("div",{className:m()(x().root,x().root_hidden,"box"),ref:n,children:[(0,o.jsx)("div",{className:x().divider}),(0,o.jsxs)("div",{className:x().topWrapper,onClick:u,children:[(0,o.jsxs)("div",{className:x().titleWrapper,children:[(0,o.jsx)("div",{className:x().number,children:"0".concat(t)}),(0,o.jsx)("div",{className:x().title,children:r})]}),(0,o.jsx)("img",{src:"/_next/static/media/arrow.1392b3cb.svg",alt:"",className:x().arrow})]}),(0,o.jsx)("div",{className:x().bottomWrapper,ref:c,children:(0,o.jsxs)("div",{className:x().bottomInnerWrapper,ref:p,children:[(0,o.jsx)("div",{className:x().text,dangerouslySetInnerHTML:{__html:a}}),(0,o.jsxs)("div",{className:x().examplesWrapper,children:[(0,o.jsx)("div",{className:x().examplesTitle,children:"".concat(l("examplesTitle"),":")}),(null==i?void 0:i.length)&&(0,o.jsx)(Examples_Examples,{data:i})]})]})}),_&&(0,o.jsx)("div",{className:x().divider})]})},f=r(7892);let g=[{examples:["online-museum","nft"],key:"creative"},{examples:["online-museum","nft"],key:"digital-production"},{examples:["online-museum","nft"],key:"video-production-and-animation"},{examples:["online-museum","nft"],key:"web3"}],useServices=()=>{let e=(0,f.Z0)(),t=(0,d.useTranslations)("Services"),r=t.raw("list");return g.map(t=>({...t,...r[t.key],examples:t.examples.map(t=>e[t])}))};var j=r(83485);function Creators(e){let{params:t}=e,r=(0,d.useTranslations)("Services"),_=useServices();return(0,o.jsx)(j.Z,{children:(0,o.jsxs)("div",{className:l().root,children:[(0,o.jsx)(i.Z,{withLogo:!0,theme:"white",locale:t.locale}),(0,o.jsxs)("div",{className:l().headerWrapper,children:[(0,o.jsx)(n.Z,{title:r("title"),className:m()("box",l().blockHeader),titleClassName:l().title}),(0,o.jsx)("img",{src:"/_next/static/media/floaty-6.1fd61cfb.png",alt:"",className:m()(l().floaty,l().floaty6)})]}),(0,o.jsx)("div",{className:l().contentWrapper,children:_.map((e,t)=>(0,s.createElement)(Accordion_Accordion,{...e,key:t,number:t+1,showBottomDivider:t===_.length-1}))}),(0,o.jsx)(a.Z,{})]})})}},47762:function(e,t,r){"use strict";var o=r(57437),s=r(40048),i=r(54440),a=r.n(i),_=r(36775),l=r(90906),n=r.n(l);t.Z=e=>{let{title:t,buttonTitle:r,link:i,className:l,titleClassName:c}=e;return(0,o.jsxs)("div",{className:a()(n().root,l),children:[t&&(0,o.jsx)("div",{className:a()(n().title,c),children:t}),r&&i&&(0,o.jsx)(_.Z,{href:i,className:n().link,children:(0,o.jsxs)("div",{className:n().button,children:[r,(0,o.jsx)("img",{src:s.Z.src,alt:"",className:n().arrow})]})})]})}},88753:function(e,t,r){"use strict";var o=r(57437),s=r(54440),i=r.n(s),a=r(36775),_=r(32644),l=r.n(_);let n={l:l().root_size_l,m:l().root_size_m,s:l().root_size_s,xs:l().root_size_xs,xxs:l().root_size_xxs,xxxs:l().root_size_xxxs},c={row:l().root_position_row,column:l().root_position_column};t.Z=e=>{let{src:t,title:r,link:s,size:_,desc:m,position:d="column",isInlineArrow:p}=e;return(0,o.jsx)("div",{className:i()(l().root,n[_],c[d],p&&l().root_inlineArrow),children:(0,o.jsx)(a.Z,{href:s,className:l().link,children:(0,o.jsxs)("div",{className:l().wrapper,children:[(0,o.jsx)("img",{src:t,alt:"",className:l().img}),(0,o.jsx)("div",{className:l().title,dangerouslySetInnerHTML:{__html:r}}),m&&(0,o.jsx)("div",{className:l().desc,children:m})]})})})}},84928:function(e){e.exports={root_hidden:"Accordion_root_hidden__AN9Qx",bottomWrapper:"Accordion_bottomWrapper__9RGF3",arrow:"Accordion_arrow__Lf3tc",divider:"Accordion_divider__SS48e",topWrapper:"Accordion_topWrapper__41veV",titleWrapper:"Accordion_titleWrapper__ABBy6",number:"Accordion_number__9_cIB",title:"Accordion_title__oaNin",bottomInnerWrapper:"Accordion_bottomInnerWrapper__VAZAQ",text:"Accordion_text__vMjsF",examplesTitle:"Accordion_examplesTitle__92h7A"}},72574:function(e){e.exports={root:"Examples_root__j75a0"}},61063:function(e){e.exports={root:"page_root__NsDlE",title:"page_title__PoB_E",headerWrapper:"page_headerWrapper__urkqh",floaty:"page_floaty__7Cc4t",floaty6:"page_floaty6__MArAa",contentWrapper:"page_contentWrapper__4Yp1L"}},90906:function(e){e.exports={root:"BlockHeader_root__RIEwu",title:"BlockHeader_title__ZtHUQ",button:"BlockHeader_button__P1ARW",arrow:"BlockHeader_arrow__wHGon",link:"BlockHeader_link__89nfZ"}},32644:function(e){e.exports={root_size_xxxs:"ImageItem_root_size_xxxs__HShAv",img:"ImageItem_img__l6Tp3",title:"ImageItem_title__UzkhR",root_position_row:"ImageItem_root_position_row__u17v_",wrapper:"ImageItem_wrapper__Osltl",root_position_column:"ImageItem_root_position_column__0r58w",root_inlineArrow:"ImageItem_root_inlineArrow__eLC7c",root:"ImageItem_root__9v8tU",root_size_l:"ImageItem_root_size_l__Ddc2f",root_size_m:"ImageItem_root_size_m__EYZyp",root_size_s:"ImageItem_root_size_s__9a_xG",root_size_xxs:"ImageItem_root_size_xxs__GFr8o",link:"ImageItem_link__OtViP",desc:"ImageItem_desc__uevji",root_size_xs:"ImageItem_root_size_xs__7m4lE"}}},function(e){e.O(0,[816,760,824,117,971,472,744],function(){return e(e.s=88160)}),_N_E=e.O()}]);