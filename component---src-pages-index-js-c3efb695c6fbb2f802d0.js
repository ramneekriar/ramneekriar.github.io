(self.webpackChunkgatsby_starter_personal_portfolio=self.webpackChunkgatsby_starter_personal_portfolio||[]).push([[678],{6162:function(e,t,a){"use strict";var r=a(4836);t.Z=void 0;var n,i=r(a(6115)),l=r(a(7867)),s=r(a(7071)),c=r(a(434)),o=r(a(7294)),d=r(a(5697)),m=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],u=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},A=Object.create({}),h=function(e){var t=u(e),a=g(t);return A[a]||!1},E="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,y=new WeakMap;function N(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&o.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+o+l+s+a+r+t+i+n+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},B=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,l=e.ariaHidden,s=o.default.createElement(M,(0,c.default)({ref:t,src:a},i,{ariaHidden:l}));return r.length>1?o.default.createElement("picture",null,n(r),s):s})),M=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,s.default)(e,m);return o.default.createElement("img",(0,c.default)({"aria-hidden":g,sizes:a,srcSet:r,src:n},p,{onLoad:l,onError:d,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));M.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!E&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(E||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=g(t))&&(A[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,g=e.fluid,A=e.fixed,h=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,v=e.itemProp,y=e.loading,w=e.draggable,R=g||A;if(!R)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,Q=(0,c.default)({opacity:k?1:0,transition:x?"opacity "+E+"ms":"none"},s),T="boolean"==typeof h?"lightgray":h,z={transitionDelay:E+"ms"},L=(0,c.default)({opacity:this.state.imgLoaded?0:1},x&&z,s,m),U={title:t,alt:this.state.isVisible?"":a,style:L,className:f,itemProp:v},G=this.state.isHydrated?p(R):R[0];if(g)return o.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:G.maxWidth?G.maxWidth+"px":null,maxHeight:G.maxHeight?G.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(G.srcSet)},o.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/G.aspectRatio+"%"}}),T&&o.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&z)}),G.base64&&o.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:G.base64,spreadProps:U,imageVariants:R,generateSources:I}),G.tracedSVG&&o.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:G.tracedSVG,spreadProps:U,imageVariants:R,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,N(R),o.default.createElement(M,{alt:a,title:t,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:w})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,c.default)({alt:a,title:t,loading:y},G,{imageVariants:R}))}}));if(A){var V=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},i);return"inherit"===i.display&&delete V.display,o.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},T&&o.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:T,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},x&&z)}),G.base64&&o.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:G.base64,spreadProps:U,imageVariants:R,generateSources:I}),G.tracedSVG&&o.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:G.tracedSVG,spreadProps:U,imageVariants:R,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,N(R),o.default.createElement(M,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:w})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,c.default)({alt:a,title:t,loading:y},G,{imageVariants:R}))}}))}return null},t}(o.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var Q=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),T=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function z(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}x.propTypes={resolutions:Q,sizes:T,fixed:z(d.default.oneOfType([Q,d.default.arrayOf(Q)])),fluid:z(d.default.oneOfType([T,d.default.arrayOf(T)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var L=x;t.Z=L},5426:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var r=a(7294),n=a(262),i=a(7549),l=a(1082),s=a(6162),c=function(e){var t=e.fileName,a=e.alt,n=e.className,i=(0,l.useStaticQuery)("2156507446").allImageSharp.nodes.find((function(e){return e.fluid.originalName===t})).fluid;return r.createElement("figure",null,r.createElement(s.Z,{fluid:i,alt:a,className:n}))},o=a(2768),d=a(7544),m=a(3168),u=a(4571);function f(){return r.createElement("ul",{className:"list-group list-group-horizontal"},r.createElement("li",{className:"list-group-item"},r.createElement("a",{href:"mailto:ramneek.riar@torontomu.ca",target:"_blank",rel:"noreferrer",alt:"email link"},r.createElement(d.G,{icon:m.FU$}))),r.createElement("li",{className:"list-group-item"},r.createElement("a",{href:"https://github.com/ramneekriar",target:"_blank",rel:"noreferrer",alt:"github link"},r.createElement(d.G,{icon:u.zhw}))),r.createElement("li",{className:"list-group-item"},r.createElement("a",{href:"https://www.linkedin.com/in/ramneekriar/",target:"_blank",rel:"noreferrer",alt:"linkedin link"},r.createElement(d.G,{icon:u.D9H}))),r.createElement("li",{className:"list-group-item"},r.createElement("a",{href:o.Z,target:"_blank",without:!0,rel:"noopener noreferrer",alt:"ramneek riar resume"},r.createElement(d.G,{icon:m.gMD}))))}var g=a(2349);function p(){return r.createElement("section",{className:"hero",id:"hero"},r.createElement("div",{className:"container h-100"},r.createElement("div",{className:"row h-100 justify-content-around"},r.createElement("div",{className:"col-lg-5 my-auto"},r.createElement("div",{className:"hero-introduction"},r.createElement("h1",null,r.createElement("span",{className:"wave",role:"img","aria-label":"Hand wave"},"👋")),r.createElement("h1",null,"Hi, I'm Ramneek Riar"),r.createElement("p",null,"I'm a recent graduate from Toronto Metropolitan University seeking 2025 New Grad SWE opportunities."),r.createElement(g.rU,{to:"content",className:"main-button btn btn-primary shadow-sm",smooth:!0},"Get to know me"))),r.createElement("div",{className:"col-lg-4 my-auto"},r.createElement("div",{className:"hero-bio"},r.createElement("div",{className:"card shadow-sm mb-5"},r.createElement("div",{className:"card-body"},r.createElement("div",{className:"icon"},r.createElement(c,{fileName:"Student_id.jpg",style:{width:"4rem",height:"4rem"},alt:"Hero Icon"})),r.createElement("h3",{className:"card-title"},"@ramneekriar"),r.createElement("h4",null,r.createElement("span",{className:"mr-1",role:"img","aria-label":"pin",alt:"pin emoji"},"📍"),"Toronto",r.createElement("br",null)),r.createElement("p",{className:"card-text"},"Seeking 2025 New Grad SWE Roles"),r.createElement(f,null))))))))}var A=a(1721),h=a.p+"static/tmulogo-eda2db3933574a97d57e04867808b1ad.jpg",E=a.p+"static/rmitLogo-09761a52dff549be35cb05812e18179a.jpg",b=function(e){function t(){return e.apply(this,arguments)||this}return(0,A.Z)(t,e),t.prototype.render=function(){return r.createElement(l.StaticQuery,{query:"1911259672",render:function(e){return r.createElement("section",{className:"content",id:"content"},r.createElement("div",{className:"container"},r.createElement("div",{className:"subsection"},r.createElement("h2",{className:"mt-5"},r.createElement("span",{className:"dot"}),"Education"," ",r.createElement("span",{className:"word"})),r.createElement("div",{className:"card"},r.createElement("div",{className:"card-body"},r.createElement("div",{className:"card-title"},r.createElement("h3",{style:{display:"inline-block"}},r.createElement("img",{style:{paddingRight:"5px",verticalAlign:"bottom",width:"5%",height:"auto"},src:h,alt:"Toronto Metropolitan University Logo"}),"Toronto Metropolitan University"),r.createElement("h4",null,r.createElement(d.G,{icon:m.Xf_,className:"mr-2"})," Computer Science (Co-op)"),r.createElement("h4",null,r.createElement(d.G,{icon:m.GiY,className:"mr-2"})," "," October 2024")),r.createElement("div",{className:"card-text"},"Relevant coursework includes:",r.createElement("br",null),r.createElement("ul",null,r.createElement("li",null,"Data Structures"),r.createElement("li",null,"Database Systems"),r.createElement("li",null,"Data Mining"),r.createElement("li",null,"Artificial Intelligence I"),r.createElement("li",null,"Intro to Software Engineering"),r.createElement("li",null,"Intro to C and UNIX"))))),r.createElement("div",{className:"card"},r.createElement("div",{className:"card-body"},r.createElement("div",{className:"card-title"},r.createElement("h3",{style:{display:"inline-block"}},r.createElement("img",{style:{paddingRight:"5px",verticalAlign:"bottom",width:"4%",height:"auto"},src:E,alt:"Royal Melbourne Institute of Technology Logo"}),"Royal Melbourne Institute of Technology (RMIT)"),r.createElement("h4",null,r.createElement(d.G,{icon:m.g4A,className:"mr-2"})," Study Abroad Semester in Melbourne, Australia 🇦🇺"),r.createElement("h4",null,r.createElement(d.G,{icon:m.fT7,className:"mr-2"})," March 2024 - June 2024")),r.createElement("div",{className:"card-text"},"Relevant coursework includes:",r.createElement("br",null),r.createElement("ul",null,r.createElement("li",null,"Professional Computing Practice"),r.createElement("li",null,"Cloud Computing"),r.createElement("li",null,"Practical Data Science")))))),r.createElement("div",{className:"subsection"},r.createElement("h2",null,r.createElement("span",{className:"dot"}),"Experience"," ",r.createElement("span",{className:"word"})),r.createElement("div",{className:"card"},r.createElement("div",{className:"card-body"},r.createElement("div",{className:"card-title"},r.createElement("h3",{style:{display:"inline-block"}},r.createElement("img",{style:{paddingRight:"5px",verticalAlign:"bottom"},src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAZABkAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAQECAQEBAgICAgICAgICAQICAgICAgICAgL/2wBDAQEBAQEBAQEBAQECAQEBAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL/wAARCAAhACEDAREAAhEBAxEB/8QAGwABAAEFAQAAAAAAAAAAAAAAAAQBAgYICQf/xAAnEAABBAICAQQBBQAAAAAAAAACAQMEBgURAAcSCBUhMTITIkFhcf/EAB4BAQABBAIDAAAAAAAAAAAAAAABAgQFCAMGBwkK/8QAKxEAAQMDAwMDBAMBAAAAAAAAAQIDBAAFEQYHEiExQQgTFBZCYaEjUXGB/9oADAMBAAIRAxEAPwDpRz5J68X1aRgH5mAb+vMxHf8Ankqb5UElXbx+RUEgdziqC42S6Fxs1+9CYEuk+10K/XBQoDJH7FAQexzV/KamnFKcUrZ/qLtTL9X9P9nS6xjH0s8660AIdkmUfG2it4vHpDzQZHGZHJZrHyImLyUsVBYzRijr6RjJpf2EqbV7PbrXXa/ZzcuZpq0u/Usy82EM3N2xxrnborAaniRHkSZseRFjPyRxMdpaQ68GnC0RwUoZCLKXGiSS0n+RTjeFFAUkDBBBJBAJ+0dz47VlFD9QGd7QuNb697krdKvNNuubxdUlhDo9ZrdlwD2fms4uJYKvnK3jYz0LKxpcmO74l+oDrbZtKgqW+dn0B6hL3ulrLTe3e8em7NrjR+tpsW1OhmyWy3XGAue+iK1Ptk23RozzMqM66hzB9xDraVslI58hysznJLzbEpCH2XiEnDaUrTyIAUhSRkEEg/nFaw3mtFTLtcKcUoZxVO02CtrNBEQZnsmWl40ZSIPwiuBGE1RPhFNUT4TmrOvdM/ReuNY6P+SJv0rdbhbfeGMPfClOxvdAHQcw2FYHYkjxWOebLLzzRPItKUnP98SRn9Vi3Op1x1VNbTe9bTevvW/nX965IxkZ6jz/AJ5/VK6B1nK+nBfTr2i9GpncQVZvsTrBvOQXrpVjzcrMnCzntMjFzgwyMxcc2KSkkNuAbjiuNqBB4rv2MaXunpwV6ddznouktWo0q3ftNiewu72xU1yWWZ/xVxnxb/abYQA8HkONuLWVN8HG+Jxmm12/4Eohh72w41yHuI5FWDgg4wAPuB6mvBKR2p1n1hkM3aqd1xl8rfI2dycjrbN3ewxchh6PiXWGWsRkpdfx8IAsVxjGs0xecMIom4y42CE2vlr1ofdfbHa2fftU6N27l3bXTE+UvTc29XBqREssRTaEw5LsBiO2i4XaMovKS644iKlZZdQ0FtHlZsyY8ZSnWo5U+CS2VqBSgeCUgYUsdevbyK1+ly5U+XKnTZDsubOkyJkyU+auPypct45EqS8a/m84+44ZL/JGq811nTZdymS7hOkKlzZzrjzzqzyW466suOOLUeqlrWpSlE9ySasiSokk5JJJJ7kk5JP/AGo/LWopxSpITJjcR+A3MltwJTzEmTBCS+EKTIjIYxpEiILiNvvti64jZmKkCOEgqm13eN3Cc1CkW1uY63b5S0OOsJcWGXHGgoNrW0FBta2wpQQpSSpAUoJIyankoAjJwfGTjp2OO2R4PjxUblnUU4pTilOKU4pTilOKU4pX/9k=",alt:"PointClickCare Logo"}),"PointClickCare"),r.createElement("h4",null,r.createElement(d.G,{icon:m.HXv,className:"mr-2"})," ","Software Engineer Intern"),r.createElement("h4",null,r.createElement(d.G,{icon:m.fT7,className:"mr-2"})," ","January 2023 - December 2023")),r.createElement("div",{className:"card-text"},"◆ Led UI development of a customer messaging solution using ",r.createElement("b",null,"React and RESTful APIs")," to improve communication across ",r.createElement("b",null,"30,000+")," healthcare facilities in North America",r.createElement("br",null),"◆ Integrated ",r.createElement("b",null,"Identity Access Management (IAM)")," features, including ",r.createElement("b",null,"multi-factor authentication (MFA)")," and feature flags, to resolve critical SSO login tracking bugs and enhance security across organizations",r.createElement("br",null),"◆ Streamlined user authentication process by resolving IAM sync issues and improving password expiry workflows",r.createElement("br",null),"◆ Created ",r.createElement("b",null,"DDL")," scripts to audit important announcements sent to healthcare facilities within organization",r.createElement("br",null),"◆ Managed cross-functional collaboration, auditing codebase and creating 70+ JIRA issues to standardize code for custom organization-specific features",r.createElement("br",null),"◆ Resolved production defects reported by customers, improving system reliability and reducing downtime for facilities",r.createElement("br",null),"◆ Engineered the UI for an ",r.createElement("b",null,"LLM chatbot")," hackathon project using React, completing it within one week"))),r.createElement("div",{className:"card"},r.createElement("div",{className:"card-body"},r.createElement("div",{className:"card-title"},r.createElement("h3",{style:{display:"inline-block"}},r.createElement("img",{style:{paddingRight:"5px",verticalAlign:"bottom"},src:"data:image/png;base64,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",alt:"BMO Financial Group Logo"}),"BMO Financial Group"),r.createElement("h4",null,r.createElement(d.G,{icon:m.HXv,className:"mr-2"})," ","QA Engineer Intern"),r.createElement("h4",null,r.createElement(d.G,{icon:m.fT7,className:"mr-2"})," ","May 2021 - December 2021")),r.createElement("div",{className:"card-text"},"◆ Built automated visual regression tests from scratch for over ",r.createElement("b",null,"70+")," web components using ",r.createElement("b",null,"Python Selenium")," and Applitools in an agile environmen",r.createElement("br",null),"◆ Achieved reduction in development time by refactoring team codebase, resulting in improved component efficiency and smoother integration with design collaboration platform",r.createElement("br",null),"◆ Unified ",r.createElement("b",null,"100+")," pages of documentation across subsystems on InVision through comprehensive component analysis",r.createElement("br",null),"◆ Ensured ",r.createElement("b",null,"WCAG 2.1")," compliance by optimizing web components, collaborating closely with design and development teams to meet accessibility standards")))),r.createElement("div",{className:"subsection"},r.createElement("h2",{className:"mt-5"},r.createElement("span",{className:"dot"}),"Technologies"," ",r.createElement("span",{className:"word"})),r.createElement("div",{className:"row"},e.allLanguagesJson.edges.map((function(e,t){var a=e.node;return r.createElement("div",{className:"col-lg-4 col-md-6",key:t},r.createElement("div",{className:"card"},r.createElement("div",{className:"card-text"},r.createElement("div",{className:"card-item"},r.createElement(d.G,{icon:m.Jw3,className:"mr-2 item-icon"})," ",a.language))))})))),r.createElement("div",{className:"subsection"},r.createElement("h2",{className:"mt-5"},r.createElement("span",{className:"dot"}),"Projects"," ",r.createElement("span",{className:"word"})),r.createElement("div",{className:"row"},e.allProjectsJson.edges.map((function(e,t){var a=e.node;return r.createElement("div",{className:"col-lg-4",key:t},r.createElement("div",{className:"card mb-4"},r.createElement("div",{className:"card-body"},r.createElement("div",{className:"card-title"},r.createElement("h3",null,a.project),r.createElement("h4",null,r.createElement(d.G,{icon:m.dT$,className:"mr-2"}),a.language)),r.createElement("div",{className:"card-text"},a.description)),r.createElement("div",{className:"card-footer"},r.createElement("a",{href:a.link,target:"_blank",rel:"noreferrer"},"View"))))}))))))}})},t}(r.Component),v=function(){return r.createElement(i.Z,null,r.createElement(n.Z,null),r.createElement(p,null),r.createElement(b,null))}},7071:function(e){e.exports=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-c3efb695c6fbb2f802d0.js.map