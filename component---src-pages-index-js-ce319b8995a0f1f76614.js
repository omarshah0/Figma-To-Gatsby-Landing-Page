(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),o=r(a("8OQS")),s=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=k([].concat(t.fluid))),t.fixed&&(t.fixed=k([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=m(t);return h[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,b=E&&window.IntersectionObserver,v=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function k(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function _(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?_(e,!0):"")+_(e)})).join("")+"<img "+d+l+o+a+r+t+n+i+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,o=d.default.createElement(V,(0,s.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,i(r),o):o})),V=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:E}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,o=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,v=e.itemProp,k=e.loading,_=e.draggable,I=h||g;if(!I)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,H=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,s.default)({opacity:R?1:0,transition:H?"opacity "+E+"ms":"none"},o),L="boolean"==typeof y?"lightgray":y,B={transitionDelay:E+"ms"},z=(0,s.default)({opacity:this.state.imgLoaded?0:1},H&&B,o,f),F={title:t,alt:this.state.isVisible?"":a,style:z,className:m,itemProp:v},M=this.state.isHydrated?p(I):I[0];if(h)return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),L&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},H&&B)}),M.base64&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:F,imageVariants:I,generateSources:x}),M.tracedSVG&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:F,imageVariants:I,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(I),d.default.createElement(V,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:k,draggable:_})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:a,title:t,loading:k},M,{imageVariants:I}))}}));if(g){var N=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete N.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},L&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:L,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},H&&B)}),M.base64&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:F,imageVariants:I,generateSources:x}),M.tracedSVG&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:F,imageVariants:I,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(I),d.default.createElement(V,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:k,draggable:_})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:a,title:t,loading:k},M,{imageVariants:I}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function L(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}R.propTypes={resolutions:H,sizes:T,fixed:L(c.default.oneOfType([H,c.default.arrayOf(H)])),fluid:L(c.default.oneOfType([T,c.default.arrayOf(T)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var B=R;t.default=B},FSyj:function(e,t,a){var r=a("q1tI");function i(e){return r.createElement("svg",e,[r.createElement("path",{d:"M0.5 2.28572H6.28571C10.4278 2.28572 13.7857 5.64359 13.7857 9.78572V13.7857H8C3.85787 13.7857 0.5 10.4279 0.5 6.28572V2.28572Z",stroke:"#897942",strokeOpacity:"0.5",key:0}),r.createElement("path",{d:"M16.2143 16.2143H22C26.1421 16.2143 29.5 19.5721 29.5 23.7143V27.7143H23.7143C19.5722 27.7143 16.2143 24.3564 16.2143 20.2143V16.2143Z",stroke:"#897942",strokeOpacity:"0.5",key:1}),r.createElement("path",{d:"M16.2143 8C16.2143 3.85787 19.5722 0.5 23.7143 0.5H27.7143V6.28571C27.7143 10.4278 24.3564 13.7857 20.2143 13.7857H16.2143V8Z",stroke:"#897942",strokeOpacity:"0.5",key:2}),r.createElement("path",{d:"M2.28571 23.7143C2.28571 19.5721 5.64357 16.2143 9.78571 16.2143H13.7857V22C13.7857 26.1421 10.4278 29.5 6.28571 29.5H2.28571V23.7143Z",stroke:"#897942",strokeOpacity:"0.5",key:3})])}i.defaultProps={width:"30",height:"30",viewBox:"0 0 30 30",fill:"none"},e.exports=i,i.default=i},Jf9Q:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),l=a("Wbzz"),o=a("9eSz"),s=a.n(o),d=a("wqpJ"),c=a.n(d);a("upUh");var u=function(){var e=Object(l.useStaticQuery)("2497387243");return i.a.createElement("section",{id:"hero"},i.a.createElement("div",{className:"hero__container"},i.a.createElement("div",{className:"hero__description"},i.a.createElement("p",{className:"hero__description_mainTitle"},"Are you looking for ",i.a.createElement("strong",null,"wooden furniture")," for your place?"),i.a.createElement("span",{className:"hero__description_subTitle"},"This is the ",i.a.createElement("br",null),"Right Place"),i.a.createElement("button",{className:"hero__description__cta__button"},"Explore Furniture")),i.a.createElement("div",{className:"hero__image"},i.a.createElement(s.a,{fluid:e.heroImage.childImageSharp.fluid,alt:"Furniture Table"})),i.a.createElement("div",{className:"hero__background__logo"},i.a.createElement(c.a,null))))},f=a("FSyj"),m=a.n(f);a("Jf9Q");var p=function(e){var t=e.mainTitle,a=e.subTitle;return i.a.createElement("div",{className:"sectionTitle"},i.a.createElement("div",{className:"sectionTitle__mainTitle"},i.a.createElement("h2",null,t)),i.a.createElement("div",{className:"sectionTitle__divider"}),i.a.createElement("div",{className:"sectionTitle__subTitle"},i.a.createElement(m.a,null),i.a.createElement("h3",null,a)))};a("a/19");var h=function(){return i.a.createElement("section",{id:"about"},i.a.createElement(p,{mainTitle:"About us",subTitle:"Who we are"}))};var g=function(){return i.a.createElement("section",{id:"how-it-works"},i.a.createElement(p,{mainTitle:"How it works",subTitle:"How to custom"}))};var y=function(){return i.a.createElement("section",{id:"categories"},i.a.createElement(p,{mainTitle:"Categories",subTitle:"What we have"}))};var E=function(){return i.a.createElement("section",{id:"testimony"},i.a.createElement(p,{mainTitle:"testimony",subTitle:"What they say"}),i.a.createElement("div",{style:{height:"100vh"}},"100vh Div"))};t.default=function(){return i.a.createElement(n.a,null,i.a.createElement(u,null),i.a.createElement(h,null),i.a.createElement(g,null),i.a.createElement(y,null),i.a.createElement(E,null))}},"a/19":function(e,t,a){},upUh:function(e,t,a){},wqpJ:function(e,t,a){var r=a("q1tI");function i(e){return r.createElement("svg",e,[r.createElement("g",{filter:"url(#filter0_d)",key:0},r.createElement("path",{d:"M8.5 31.2381H109.905C153.811 31.2381 189.405 66.8315 189.405 110.738V189.405H88C44.0934 189.405 8.5 153.811 8.5 109.905V31.2381Z",stroke:"#894242",strokeOpacity:"0.2"})),r.createElement("g",{filter:"url(#filter1_d)",key:1},r.createElement("path",{d:"M208.595 208.595H310C353.907 208.595 389.5 244.189 389.5 288.095V366.762H288.095C244.189 366.762 208.595 331.169 208.595 287.262V208.595Z",stroke:"#894242",strokeOpacity:"0.2"})),r.createElement("g",{filter:"url(#filter2_d)",key:2},r.createElement("path",{d:"M208.595 88C208.595 44.0934 244.189 8.5 288.095 8.5H366.762V109.905C366.762 153.811 331.169 189.405 287.262 189.405H208.595V88Z",stroke:"#894242",strokeOpacity:"0.2"})),r.createElement("g",{filter:"url(#filter3_d)",key:3},r.createElement("path",{d:"M31.238 288.095C31.238 244.189 66.8314 208.595 110.738 208.595H189.405V310C189.405 353.907 153.811 389.5 109.905 389.5H31.238V288.095Z",stroke:"#894242",strokeOpacity:"0.2"})),r.createElement("defs",{key:4},[r.createElement("filter",{id:"filter0_d",x:"0",y:"22.7381",width:"197.905",height:"175.167",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",key:0},[r.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix",key:0}),r.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",key:1}),r.createElement("feOffset",{key:2}),r.createElement("feGaussianBlur",{stdDeviation:"4",key:3}),r.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",key:4}),r.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow",key:5}),r.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape",key:6})]),r.createElement("filter",{id:"filter1_d",x:"200.095",y:"200.095",width:"197.905",height:"175.167",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",key:1},[r.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix",key:0}),r.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",key:1}),r.createElement("feOffset",{key:2}),r.createElement("feGaussianBlur",{stdDeviation:"4",key:3}),r.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",key:4}),r.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow",key:5}),r.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape",key:6})]),r.createElement("filter",{id:"filter2_d",x:"200.095",y:"0",width:"175.167",height:"197.905",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",key:2},[r.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix",key:0}),r.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",key:1}),r.createElement("feOffset",{key:2}),r.createElement("feGaussianBlur",{stdDeviation:"4",key:3}),r.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",key:4}),r.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow",key:5}),r.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape",key:6})]),r.createElement("filter",{id:"filter3_d",x:"22.738",y:"200.095",width:"175.167",height:"197.905",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",key:3},[r.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix",key:0}),r.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",key:1}),r.createElement("feOffset",{key:2}),r.createElement("feGaussianBlur",{stdDeviation:"4",key:3}),r.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",key:4}),r.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow",key:5}),r.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape",key:6})])])])}i.defaultProps={width:"398",height:"398",viewBox:"0 0 398 398",fill:"none"},e.exports=i,i.default=i}}]);
//# sourceMappingURL=component---src-pages-index-js-ce319b8995a0f1f76614.js.map