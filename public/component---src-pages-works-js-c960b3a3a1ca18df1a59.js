webpackJsonp([35884836353623],{53:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){return"undefined"==typeof S&&"undefined"!=typeof window&&window.IntersectionObserver&&(S=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),S}t.__esModule=!0;var o=a(22),r=i(o),s=a(27),l=i(s),d=a(26),u=i(d),c=a(65),f=i(c),p=a(64),h=i(p),m=a(2),y=i(m),b=a(1),g=i(b),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},E=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},S=void 0,L=[],z=function(e,t){n().observe(e),L.push([e,t])},_=null,j=function(){if(null!==_)return _;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return _=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},I=function(e){var t=e.opacity,a=void 0===t?"":t,i=e.src,n=e.srcSet,o=e.sizes,r=void 0===o?"":o,s=e.title,l=void 0===s?"":s,d=e.alt,u=void 0===d?"":d,c=e.width,f=void 0===c?"":c,p=e.height,h=void 0===p?"":p,m=e.transitionDelay,y=void 0===m?"":m;return"<img width="+f+" height="+h+' src="'+i+'" srcset="'+n+'" alt="'+u+'" title="'+l+'" sizes="'+r+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+y+";opacity:"+a+';width:100%;height:100%;object-fit:cover;objectPosition:center"/>'},O=function(e){var t=e.opacity,a=e.onLoad,i=e.transitionDelay,n=void 0===i?"":i,o=(0,f.default)(e,["opacity","onLoad","transitionDelay"]);return y.default.createElement("img",(0,h.default)({},o,{onLoad:a,style:{position:"absolute",top:0,left:0,transition:"opacity 0.5s",transitionDelay:n,opacity:t,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}))};O.propTypes={opacity:g.default.number,transitionDelay:g.default.string,onLoad:g.default.func};var W=function(e){function t(a){(0,r.default)(this,t);var i=(0,l.default)(this,e.call(this,a)),n=!0,o=!0,s=!1,d=E(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,o=!1,s=!0),"undefined"==typeof window&&(n=!1,o=!1),i.state={isVisible:n,imgLoaded:o,IOSupported:s},i.handleRef=i.handleRef.bind(i),i}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&z(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,i=t.alt,n=t.className,o=t.outerWrapperClassName,r=t.style,s=void 0===r?{}:r,l=t.sizes,d=t.resolutions,u=t.backgroundColor,c=void 0;if(c="boolean"==typeof u?"lightgray":u,l){var f=l;return f.srcWebp&&f.srcSetWebp&&j()&&(f.src=f.srcWebp,f.srcSet=f.srcSetWebp),y.default.createElement("div",{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===s.position?"initial":"relative"}},y.default.createElement("div",{className:(n?n:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden",zIndex:1},s),ref:this.handleRef},y.default.createElement("div",{style:{width:"100%",paddingBottom:100/f.aspectRatio+"%"}}),f.base64&&y.default.createElement(O,{alt:i,title:a,src:f.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),f.tracedSVG&&y.default.createElement(O,{alt:i,title:a,src:f.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),c&&y.default.createElement("div",{title:a,style:{backgroundColor:c,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&y.default.createElement(O,{alt:i,title:a,srcSet:f.srcSet,src:f.src,sizes:f.sizes,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,h.default)({alt:i,title:a},f))}})))}if(d){var p=d,m=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",zIndex:1,width:p.width,height:p.height},s);return"inherit"===s.display&&delete m.display,p.srcWebp&&p.srcSetWebp&&j()&&(p.src=p.srcWebp,p.srcSet=p.srcSetWebp),y.default.createElement("div",{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===s.position?"initial":"relative"}},y.default.createElement("div",{className:(n?n:"")+" gatsby-image-wrapper",style:m,ref:this.handleRef},p.base64&&y.default.createElement(O,{alt:i,title:a,src:p.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s"}),p.tracedSVG&&y.default.createElement(O,{alt:i,title:a,src:p.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),c&&y.default.createElement("div",{title:a,style:{backgroundColor:c,width:p.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:p.height}}),this.state.isVisible&&y.default.createElement(O,{alt:i,title:a,width:p.width,height:p.height,srcSet:p.srcSet,src:p.src,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,h.default)({alt:i,title:a,width:p.width,height:p.height},p))}})))}return null},t}(y.default.Component);W.defaultProps={fadeIn:!0,alt:""},W.propTypes={responsiveResolution:g.default.object,responsiveSizes:g.default.object,resolutions:g.default.object,sizes:g.default.object,fadeIn:g.default.bool,title:g.default.string,alt:g.default.string,className:g.default.oneOfType([g.default.string,g.default.object]),outerWrapperClassName:g.default.oneOfType([g.default.string,g.default.object]),style:g.default.object,position:g.default.string,backgroundColor:g.default.oneOfType([g.default.string,g.default.bool]),onLoad:g.default.func},t.default=W},211:function(e,t,a){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageWorksQuery=void 0;var l=a(2),d=n(l),u=a(37),c=n(u),f=a(53),p=n(f),h=a(1),m=i(h),y={data:m.object.isRequired},b=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=this.props.data.fr.edges,t=function(e){var t=e.node;return d.default.createElement("div",null,d.default.createElement("h2",null,t.name),d.default.createElement("p",null,t.description.description),d.default.createElement("p",null,t.date),d.default.createElement("p",null,t.company),d.default.createElement("a",{href:t.link,target:"_blank"},"Aller"),d.default.createElement("br",null),d.default.createElement("span",null,t.category.name),d.default.createElement("br",null),[t.tags.map(function(e,t){return d.default.createElement("small",null,e.name+" - ")})],[t.media.map(function(e,t){return d.default.createElement(p.default,{src:e.sizes.src,style:{margin:0},sizes:e.sizes})})])};return d.default.createElement("div",null,d.default.createElement("h1",null,"Hi from the Works"),d.default.createElement("p",null,"Welcome to Works"),d.default.createElement(c.default,{to:"/"},"Go back to the Homepage"),d.default.createElement("hr",null),e.map(function(e,a){var i=e.node;return d.default.createElement(t,{node:i,key:i.id})}))},t}(d.default.Component);b.propTypes=y,t.default=b;t.pageWorksQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-works-js-c960b3a3a1ca18df1a59.js.map