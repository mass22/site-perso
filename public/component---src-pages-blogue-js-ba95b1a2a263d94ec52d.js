webpackJsonp([0xa15898a0c424],{69:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof S&&"undefined"!=typeof window&&window.IntersectionObserver&&(S=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),S}t.__esModule=!0;var n=i(6),r=a(n),l=i(8),s=a(l),d=i(7),u=a(d),c=i(43),f=a(c),p=i(3),h=a(p),y=i(2),m=a(y),g=i(1),b=a(g),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},E=function(e){var t=v(e),i=t.sizes?t.sizes.src:t.resolutions.src;return!!w[i]||(w[i]=!0,!1)},S=void 0,L=[],_=function(e,t){o().observe(e),L.push([e,t])},j=null,z=function(){if(null!==j)return j;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},I=function(e){var t=e.opacity,i=void 0===t?"":t,a=e.src,o=e.srcSet,n=e.sizes,r=void 0===n?"":n,l=e.title,s=void 0===l?"":l,d=e.alt,u=void 0===d?"":d,c=e.width,f=void 0===c?"":c,p=e.height,h=void 0===p?"":p,y=e.transitionDelay,m=void 0===y?"":y;return"<img width="+f+" height="+h+' src="'+a+'" srcset="'+o+'" alt="'+u+'" title="'+s+'" sizes="'+r+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+m+";opacity:"+i+';width:100%;height:100%;object-fit:cover;objectPosition:center"/>'},O=function(e){var t=e.opacity,i=e.onLoad,a=e.transitionDelay,o=void 0===a?"":a,n=(0,f.default)(e,["opacity","onLoad","transitionDelay"]);return m.default.createElement("img",(0,h.default)({},n,{onLoad:i,style:{position:"absolute",top:0,left:0,transition:"opacity 0.5s",transitionDelay:o,opacity:t,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}))};O.propTypes={opacity:b.default.number,transitionDelay:b.default.string,onLoad:b.default.func};var R=function(e){function t(i){(0,r.default)(this,t);var a=(0,s.default)(this,e.call(this,i)),o=!0,n=!0,l=!1,d=E(i);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,n=!1,l=!0),"undefined"==typeof window&&(o=!1,n=!1),a.state={isVisible:o,imgLoaded:n,IOSupported:l},a.handleRef=a.handleRef.bind(a),a}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&_(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),i=t.title,a=t.alt,o=t.className,n=t.outerWrapperClassName,r=t.style,l=void 0===r?{}:r,s=t.sizes,d=t.resolutions,u=t.backgroundColor,c=void 0;if(c="boolean"==typeof u?"lightgray":u,s){var f=s;return f.srcWebp&&f.srcSetWebp&&z()&&(f.src=f.srcWebp,f.srcSet=f.srcSetWebp),m.default.createElement("div",{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===l.position?"initial":"relative"}},m.default.createElement("div",{className:(o?o:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden",zIndex:1},l),ref:this.handleRef},m.default.createElement("div",{style:{width:"100%",paddingBottom:100/f.aspectRatio+"%"}}),f.base64&&m.default.createElement(O,{alt:a,title:i,src:f.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),f.tracedSVG&&m.default.createElement(O,{alt:a,title:i,src:f.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),c&&m.default.createElement("div",{title:i,style:{backgroundColor:c,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&m.default.createElement(O,{alt:a,title:i,srcSet:f.srcSet,src:f.src,sizes:f.sizes,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,h.default)({alt:a,title:i},f))}})))}if(d){var p=d,y=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",zIndex:1,width:p.width,height:p.height},l);return"inherit"===l.display&&delete y.display,p.srcWebp&&p.srcSetWebp&&z()&&(p.src=p.srcWebp,p.srcSet=p.srcSetWebp),m.default.createElement("div",{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===l.position?"initial":"relative"}},m.default.createElement("div",{className:(o?o:"")+" gatsby-image-wrapper",style:y,ref:this.handleRef},p.base64&&m.default.createElement(O,{alt:a,title:i,src:p.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s"}),p.tracedSVG&&m.default.createElement(O,{alt:a,title:i,src:p.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),c&&m.default.createElement("div",{title:i,style:{backgroundColor:c,width:p.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:p.height}}),this.state.isVisible&&m.default.createElement(O,{alt:a,title:i,width:p.width,height:p.height,srcSet:p.srcSet,src:p.src,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,h.default)({alt:a,title:i,width:p.width,height:p.height},p))}})))}return null},t}(m.default.Component);R.defaultProps={fadeIn:!0,alt:""},R.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func},t.default=R},538:function(e,t,i){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageBlogueQuery=void 0;var s=i(2),d=o(s),u=i(60),c=o(u),f=i(69),p=(o(f),i(113)),h=o(p),y=i(123),m=o(y),g=i(1),b=a(g),v={data:b.object.isRequired},w=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.fr.edges,t=function(e){var t=e.node;return d.default.createElement("div",null,d.default.createElement("h2",null,t.title),d.default.createElement("p",null,t.description),d.default.createElement("p",null,t.createdAt),d.default.createElement(c.default,{to:"/blogue/"+t.slug+"/"},"lire l'article"))};return d.default.createElement("div",null,d.default.createElement(h.default,null,d.default.createElement("title",null,"Blogue | "+m.default.siteTitle)),d.default.createElement("h1",null,"Hi from the Blogue"),d.default.createElement("p",null,"Welcome to Blogue"),d.default.createElement(c.default,{to:"/"},"Go back to the Homepage"),d.default.createElement("hr",null),e.map(function(e,i){var a=e.node;return d.default.createElement(t,{node:a,key:a.id})}))},t}(d.default.Component);w.propTypes=v,t.default=w;t.pageBlogueQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-blogue-js-ba95b1a2a263d94ec52d.js.map