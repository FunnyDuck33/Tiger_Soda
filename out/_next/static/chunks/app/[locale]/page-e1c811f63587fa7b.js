(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{2431:function(){},9120:function(e,t,s){Promise.resolve().then(s.bind(s,9733))},9733:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Home},dynamic:function(){return eg}});var a=s(7437),i=s(4440),r=s.n(i),l=s(1795);function isMobile(){var e,t;return(null===(t=document)||void 0===t?void 0:null===(e=t.documentElement)||void 0===e?void 0:e.clientWidth)<=768}var c=s(6775),o=s(1816),n=s(375),_=s.n(n),LocalePicker_LocalePicker=e=>{let{locale:t}=e,s=(0,o.Z)();return(0,a.jsxs)("div",{className:_().root,children:[(0,a.jsx)(c.Z,{href:s,locale:"en",className:_().link,children:(0,a.jsx)("div",{className:r()(_().language,"en"===t&&_().language_active),children:"EN"})}),(0,a.jsx)("div",{className:_().divider}),(0,a.jsx)(c.Z,{href:s,locale:"es",className:_().link,children:(0,a.jsx)("div",{className:r()(_().language,"es"===t&&_().language_active),children:"ESP"})})]})},d={src:"/_next/static/media/burger.80e0c09b.svg"},m=s(8547),g=s.n(m),Navigation_Navigation=e=>{let{locale:t}=e,s=(0,l.useTranslations)("Index.Navigation");return(0,a.jsxs)("div",{className:g().root,children:[!isMobile()&&(0,a.jsxs)("nav",{className:g().nav,children:[(0,a.jsx)("div",{className:g().navItem,children:s("about")}),(0,a.jsx)("div",{className:g().navItem,children:s("projects")}),(0,a.jsx)("div",{className:g().navItem,children:s("services")}),(0,a.jsx)("div",{className:g().navItem,children:s("creators")})]}),(0,a.jsxs)("div",{className:g().menu,children:[!isMobile()&&(0,a.jsx)("div",{className:g().contactButton,children:s("contacts")}),(0,a.jsx)(LocalePicker_LocalePicker,{locale:t}),isMobile()&&(0,a.jsx)("img",{src:d.src,alt:"",className:g().burger})]})]})},u={src:"/_next/static/media/background.28cc1f63.png"},x={src:"/_next/static/media/background-m.57df31a1.png"},v=s(9798),h=s.n(v),Header_Header=e=>{let{locale:t}=e,s=(0,l.useTranslations)("Index.Header");return(0,a.jsxs)("div",{className:r()(h().root,"wide_padding"),children:[(0,a.jsx)(Navigation_Navigation,{locale:t}),(0,a.jsx)("img",{src:"/_next/static/media/title.df429f9e.svg",alt:"tiger soda",className:h().title}),(0,a.jsx)("div",{className:h().desc,children:s("desc")}),(0,a.jsx)("div",{className:h().backgroundWrapper,children:(0,a.jsx)("img",{src:isMobile()?x.src:u.src,alt:"",className:h().background})}),(0,a.jsx)("img",{src:"/_next/static/media/tiger.7651d52c.png",alt:"",className:h().tiger})]})},p=s(1708),b=s.n(p),Cover_Cover=()=>{let e=(0,l.useTranslations)("Index");return(0,a.jsxs)("div",{className:r()(b().root,"box"),children:[(0,a.jsx)("div",{className:b().content,dangerouslySetInnerHTML:{__html:e("Cover")}}),(0,a.jsx)("img",{src:"/_next/static/media/floaty.c1896623.png",alt:"",className:b().floaty})]})},j=s(7926),f=s.n(j),k=s(2265),N=s(5928),I=s.n(N),Ticker_Ticker=()=>{let e=(0,l.useTranslations)("Index"),t=[...e.raw("Ticker"),...e.raw("Ticker")],s=(0,k.useRef)(null),scroller=()=>{let e=s.current;if(e){let t=e.scrollWidth-e.clientWidth-e.scrollLeft;t<10&&e.firstElementChild?(e.scrollLeft-=e.firstElementChild.clientWidth,e.append(e.firstElementChild)):e.scrollLeft+=isMobile()?.5:1}requestAnimationFrame(scroller)};return(0,k.useEffect)(()=>{requestAnimationFrame(scroller)}),(0,a.jsx)("div",{ref:s,className:r()(I().root,"wide"),children:t.map((e,t)=>(0,a.jsxs)("div",{className:I().item,children:[e,(0,a.jsx)("img",{src:"/_next/static/media/flake.f699839d.svg",alt:"",className:I().flake})]},t))})},H={src:"/_next/static/media/floaty.d884c2d0.png"},w={src:"/_next/static/media/arrow-white.f94dae30.svg"},y=s(1765),C=s.n(y),BlockHeader_BlockHeader=e=>{let{title:t,buttonTitle:s,link:i}=e;return(0,a.jsxs)("div",{className:C().root,children:[t&&(0,a.jsx)("div",{className:C().title,children:t}),s&&i&&(0,a.jsx)(c.Z,{href:i,className:C().link,children:(0,a.jsxs)("div",{className:C().button,children:[s,(0,a.jsx)("img",{src:w.src,alt:"",className:C().arrow})]})})]})},W=s(8633),T=s.n(W),M=s(2669),B=s.n(M);let L={l:B().root_size_l,m:B().root_size_m,s:B().root_size_s,xs:B().root_size_xs};var ImageItem_ImageItem=e=>{let{src:t,title:s,link:i,size:l,desc:o}=e;return(0,a.jsx)("div",{className:r()(B().root,L[l]),children:(0,a.jsx)(c.Z,{href:i,className:B().link,children:(0,a.jsxs)("div",{className:B().wrapper,children:[(0,a.jsx)("img",{src:t,alt:"",className:B().img}),(0,a.jsx)("div",{className:B().title,children:s}),o&&(0,a.jsx)("div",{className:B().desc,children:o})]})})})};let P=[{src:"/_next/static/media/project-1.d48ff58b.png",link:"/"},{src:"/_next/static/media/project-2.28885317.png",link:"/"},{src:"/_next/static/media/project-3.ff586c38.png",link:"/"}];var Projects_Projects=()=>{let e=(0,l.useTranslations)("Index.Projects"),t=e.raw("banners");return(0,a.jsxs)("div",{className:r()(T().root,"box"),children:[(0,a.jsx)(BlockHeader_BlockHeader,{title:e("title"),buttonTitle:isMobile()?void 0:e("button"),link:"/"}),(0,a.jsx)("div",{className:T().bottomWrapper,children:P.map((e,s)=>{let{src:i,link:r}=e;return(0,a.jsx)(ImageItem_ImageItem,{src:i,title:t[s],link:r,size:isMobile()?"m":"l"},i)})}),!isMobile()&&(0,a.jsx)("img",{src:H.src,alt:"",className:T().floaty}),isMobile()&&(0,a.jsx)(BlockHeader_BlockHeader,{buttonTitle:e("button"),link:"/"})]})},S={src:"/_next/static/media/tiger.7417b7b2.png"},F={src:"/_next/static/media/tiger-m.0d245a4f.png"},z=s(3584),E=s.n(z),Services_Services=()=>{let e=(0,l.useTranslations)("Index.Services"),t=e.raw("data");return(0,a.jsxs)("div",{className:r()(E().root,isMobile()?"wide":"wide_padding"),children:[(0,a.jsx)(BlockHeader_BlockHeader,{title:e("title"),buttonTitle:isMobile()?void 0:e("button"),link:"/"}),(0,a.jsx)("img",{src:isMobile()?F.src:S.src,alt:"",className:E().tiger}),(0,a.jsx)("div",{className:E().wrapper,children:t.map((e,t)=>{let{title:s,desc:i}=e;return(0,a.jsxs)("div",{className:E().item,children:[(0,a.jsxs)("div",{className:E().itemCount,children:["0",t+1]}),(0,a.jsxs)("div",{className:E().itemWrapper,children:[(0,a.jsx)("div",{className:E().itemTitle,children:s}),(0,a.jsx)("div",{className:E().itemDesc,dangerouslySetInnerHTML:{__html:i}})]})]},s)})}),isMobile()&&(0,a.jsx)(BlockHeader_BlockHeader,{buttonTitle:e("button"),link:"/"})]})},Z={src:"/_next/static/media/floaty-1.eabed837.png"},K={src:"/_next/static/media/floaty-2.1b726c1d.png"},A={src:"/_next/static/media/floaty-3.e60cb64f.png"},D=s(5755),q=s.n(D);let X=[{src:"/_next/static/media/author-1.d4402c9b.png",link:"/"},{src:"/_next/static/media/author-2.217f9f2f.png",link:"/"},{src:"/_next/static/media/author-3.e7053d2a.png",link:"/"},{src:"/_next/static/media/author-4.14986510.png",link:"/"}];var Creators_Creators=()=>{let e=(0,l.useTranslations)("Index.Creators"),t=e.raw("data");return(0,a.jsxs)("div",{className:r()(q().root,isMobile()&&"wide"),children:[(0,a.jsx)(BlockHeader_BlockHeader,{title:e("title"),buttonTitle:isMobile()?void 0:e("button"),link:"/"}),(0,a.jsx)("div",{className:q().wrapper,children:t.map((e,t)=>{let{title:s,desc:i}=e;return(0,a.jsx)(ImageItem_ImageItem,{src:X[t].src,title:s,desc:i,link:X[t].link,size:isMobile()?"xs":"s"},s)})}),!isMobile()&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{src:Z.src,alt:"",className:r()(q().floaty,q().floaty1)}),(0,a.jsx)("img",{src:K.src,alt:"",className:r()(q().floaty,q().floaty2)}),(0,a.jsx)("img",{src:A.src,alt:"",className:r()(q().floaty,q().floaty3)})]}),isMobile()&&(0,a.jsx)(BlockHeader_BlockHeader,{buttonTitle:e("button"),link:"/"})]})},Y={src:"/_next/static/media/client-1.1863e7ca.svg",height:27,width:128,blurWidth:0,blurHeight:0},J={src:"/_next/static/media/client-2.20df5615.svg",height:27,width:149,blurWidth:0,blurHeight:0},R={src:"/_next/static/media/client-3.83adca41.svg",height:27,width:95,blurWidth:0,blurHeight:0},O={src:"/_next/static/media/client-4.b35bec38.svg",height:27,width:72,blurWidth:0,blurHeight:0},Q={src:"/_next/static/media/client-5.c27c5f83.svg",height:27,width:129,blurWidth:0,blurHeight:0},U={src:"/_next/static/media/client-6.28ccfb58.svg",height:27,width:144,blurWidth:0,blurHeight:0},V={src:"/_next/static/media/client-7.ff2a4dc3.svg",height:48,width:48,blurWidth:0,blurHeight:0},G={src:"/_next/static/media/client-8.680801c6.svg",height:27,width:130,blurWidth:0,blurHeight:0},$={src:"/_next/static/media/client-9.b0f2a1cc.svg",height:48,width:55,blurWidth:0,blurHeight:0},ee={src:"/_next/static/media/client-10.a7c40233.svg",height:27,width:142,blurWidth:0,blurHeight:0},et={src:"/_next/static/media/client-11.2ff4247b.svg",height:48,width:48,blurWidth:0,blurHeight:0},es={src:"/_next/static/media/client-12.3e888627.svg",height:27,width:121,blurWidth:0,blurHeight:0},ea={src:"/_next/static/media/client-13.792af016.svg",height:27,width:121,blurWidth:0,blurHeight:0},ei=s(3696),er=s.n(ei);let el=[{svg:Y},{svg:J},{svg:R},{svg:O},{svg:Q},{svg:U}],ec=[{svg:V,type:"tall"},{svg:G},{svg:$,type:"tall"},{svg:ee},{svg:et,type:"tall"},{svg:es},{svg:ea}],eo=[{svg:Y},{svg:J},{svg:R},{svg:O},{svg:V,type:"tall"},{svg:Q},{svg:U},{svg:G},{svg:ee},{svg:$,type:"tall"},{svg:es},{svg:et,type:"tall"},{svg:ea}];var Clients_Clients=()=>{let e=(0,l.useTranslations)("Index");return(0,a.jsxs)("div",{className:r()(er().root,"box"),children:[(0,a.jsx)(BlockHeader_BlockHeader,{title:e("Clients")}),isMobile()?(0,a.jsx)("div",{className:er().wrapper,children:eo.map(e=>{let{svg:t,type:s}=e;return(0,a.jsx)("img",{src:t.src,alt:"",className:r()(er().icon,"tall"===s&&er().icon_tall)},t.src)})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:er().wrapper,children:el.map(e=>{let{svg:t,type:s}=e;return(0,a.jsx)("img",{src:t.src,alt:"",className:r()(er().icon,"tall"===s&&er().icon_tall)},t.src)})}),(0,a.jsx)("div",{className:er().wrapper,children:ec.map(e=>{let{svg:t,type:s}=e;return(0,a.jsx)("img",{src:t.src,alt:"",className:r()(er().icon,"tall"===s&&er().icon_tall)},t.src)})})]})]})},en={src:"/_next/static/media/background.89b74e78.png"},e_={src:"/_next/static/media/background-m.3d48619d.png"},ed=s(5744),em=s.n(ed),Footer_Footer=()=>{let e=(0,l.useTranslations)("Footer");return(0,a.jsxs)("div",{className:r()(em().root,"wide"),children:[(0,a.jsx)("div",{className:em().title,dangerouslySetInnerHTML:{__html:e("title")}}),(0,a.jsx)("div",{className:em().desc,dangerouslySetInnerHTML:{__html:e("desc")}}),(0,a.jsxs)("form",{action:"/",className:em().form,children:[(0,a.jsx)("input",{type:"text",className:em().input,required:!0,placeholder:"*".concat(e("name"))}),(0,a.jsx)("input",{type:"text",className:em().input,required:!0,placeholder:"*".concat(e("email"))}),(0,a.jsx)("input",{type:"text",className:em().input,required:!0,placeholder:"*".concat(e("company"))}),(0,a.jsx)("textarea",{className:r()(em().input,em().area),placeholder:e("message")}),(0,a.jsx)("button",{type:"submit",className:em().button,children:e("button")})]}),(0,a.jsx)("div",{className:em().backgorundWrapper,children:(0,a.jsx)("img",{src:isMobile()?e_.src:en.src,alt:"",className:em().background})}),(0,a.jsx)("img",{src:"/_next/static/media/floaty.c52c4060.png",alt:"",className:em().floaty})]})};let eg="force-static";function Home(e){let{params:t}=e;return(0,a.jsxs)("div",{className:f().root,children:[(0,a.jsx)(Header_Header,{locale:t.locale}),(0,a.jsx)(Cover_Cover,{}),(0,a.jsx)(Ticker_Ticker,{}),(0,a.jsx)(Projects_Projects,{}),(0,a.jsx)(Services_Services,{}),(0,a.jsx)(Creators_Creators,{}),(0,a.jsx)(Clients_Clients,{}),(0,a.jsx)(Footer_Footer,{})]})}},7926:function(e){e.exports={root:"page_root__fZvFU"}},1765:function(e){e.exports={root:"BlockHeader_root__2Wn46",title:"BlockHeader_title__fCoDL",button:"BlockHeader_button__ITjEq",arrow:"BlockHeader_arrow__yJtnC",link:"BlockHeader_link__n6lfa"}},3696:function(e){e.exports={root:"Clients_root__mLKkd",wrapper:"Clients_wrapper__kcrjq",icon:"Clients_icon__1LnNP",icon_tall:"Clients_icon_tall__r5lDX"}},1708:function(e){e.exports={root:"Cover_root__Hg8kH",content:"Cover_content__VwhNp",floaty:"Cover_floaty__PaK5x"}},5755:function(e){e.exports={root:"Creators_root__9NWKI",wrapper:"Creators_wrapper__G5o7S",floaty:"Creators_floaty__e5Ah_",floaty1:"Creators_floaty1__1JHat",floaty2:"Creators_floaty2__Q2jQP",floaty3:"Creators_floaty3__KIovN"}},5744:function(e){e.exports={root:"Footer_root__ddAEu",title:"Footer_title__aybIp",desc:"Footer_desc__qjHPS",form:"Footer_form__OeK1e",input:"Footer_input__P4dyk",area:"Footer_area__ojx2P",button:"Footer_button__9k3p_",backgorundWrapper:"Footer_backgorundWrapper__KLY7B",background:"Footer_background__5xeMj",floaty:"Footer_floaty__cIt4s"}},9798:function(e){e.exports={root:"Header_root__nuyRT",title:"Header_title__sISYX",desc:"Header_desc__ham8p",backgroundWrapper:"Header_backgroundWrapper__siYJc",background:"Header_background__XamMV",tiger:"Header_tiger__lfA2D"}},2669:function(e){e.exports={root:"ImageItem_root__5lD6v",root_size_l:"ImageItem_root_size_l__4527Z",root_size_m:"ImageItem_root_size_m__qbw6H",root_size_s:"ImageItem_root_size_s__YE1e_",wrapper:"ImageItem_wrapper__gxtA3",img:"ImageItem_img__kXR8I",link:"ImageItem_link__IdHHs",title:"ImageItem_title__TZtMY",desc:"ImageItem_desc__ftgzj",root_size_xs:"ImageItem_root_size_xs__7etLC"}},375:function(e){e.exports={root:"LocalePicker_root__xwBL3",language:"LocalePicker_language__cHlWQ",language_active:"LocalePicker_language_active__NIfW_",divider:"LocalePicker_divider__6WC1D",link:"LocalePicker_link__kyiLb"}},8547:function(e){e.exports={root:"Navigation_root__apIWZ",nav:"Navigation_nav__OzKAB",navItem:"Navigation_navItem__EMrRU",navItem_active:"Navigation_navItem_active__78B2g",menu:"Navigation_menu__e3BMw",contactButton:"Navigation_contactButton__belKi",burger:"Navigation_burger__JrAxN"}},8633:function(e){e.exports={root:"Projects_root__h2Z88",bottomWrapper:"Projects_bottomWrapper__KVA_B",floaty:"Projects_floaty__dXn0w"}},3584:function(e){e.exports={root:"Services_root__ZgDuX",tiger:"Services_tiger__NQ4o5",wrapper:"Services_wrapper__JLK5A",item:"Services_item__aSYvv",itemWrapper:"Services_itemWrapper__DSwK9",itemCount:"Services_itemCount__Hko_U",itemTitle:"Services_itemTitle__oLZtr",itemDesc:"Services_itemDesc__EWtuz"}},5928:function(e){e.exports={root:"Ticker_root__E3kRx",item:"Ticker_item__Iuvfo",flake:"Ticker_flake__IMIeg"}}},function(e){e.O(0,[816,871,971,472,744],function(){return e(e.s=9120)}),_N_E=e.O()}]);