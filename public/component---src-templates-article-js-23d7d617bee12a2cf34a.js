webpackJsonp([0x77c411a55ba3],{549:function(e,t,n){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.TemplateArticleQuery=void 0;var c=n(2),i=r(c),f=n(57),p=r(f),d=n(80),s=(r(d),n(122)),m=r(s),b=n(75),h=r(b),y=n(54),E=n(1),w=l(E),_={data:w.object.isRequired},v=function(e){function t(){return a(this,t),u(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data.contentfulArticles,t=e.title,n=e.description,l=e.content.content,r=e.createdAt,a=(e.media,e.author.name),u=e.author.bio;return i.default.createElement(y.Container,null,i.default.createElement(m.default,null,i.default.createElement("title",null,t+" | "+h.default.siteTitle)),i.default.createElement("h1",null,t),i.default.createElement("b",null,n),i.default.createElement("i",null,r),i.default.createElement("p",null,l),i.default.createElement("hr",null),i.default.createElement("div",null,i.default.createElement("p",null,a),i.default.createElement("p",null,u),i.default.createElement(y.Button,{basic:!0,as:p.default,to:"/blogue/"},i.default.createElement(y.Icon,{name:"long arrow left"})," Retour")))},t}(i.default.Component);v.propTypes=_,t.default=v;t.TemplateArticleQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-article-js-23d7d617bee12a2cf34a.js.map