webpackJsonp([70144966829960],{585:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}t.__esModule=!0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=n(2),d=a(f),m=n(50),p=(a(m),n(78)),s=(a(p),n(68)),h=a(s),b=n(47),y=a(b),E=n(46),g=n(1),v=o(g),j={data:v.object},C=function(e){function t(n){r(this,t);var o=l(this,e.call(this,n));return o.handleChange=function(e){var t;o.setState((t={},t[e.target.name]=e.target.value,t))},o.handleSubmit=function(e){fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:i(c({"form-name":"contact"},o.state))}).then(function(){return console.log("message envoyé !")}).catch(function(e){return console.log(e)})},o.state={},o}return u(t,e),t.prototype.render=function(){return d.default.createElement(E.Container,null,d.default.createElement(h.default,null,d.default.createElement("title",null,"Contact | "+y.default.siteTitle)),d.default.createElement("h1",null,"Contact"),d.default.createElement("p",null,"Vous avez un projet ? Une idée? Une offre d'emploi ? Ou simplement me demander comment ça va ? N'hésitez pas à m'envoyer un courriel !"),d.default.createElement(E.Form,{name:"contact",method:"post",action:"/merci/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},d.default.createElement("p",{hidden:!0},d.default.createElement("label",null,"Don’t fill this out: ",d.default.createElement("input",{name:"bot-field"}))),d.default.createElement(E.Form.Group,{widths:"equal"},d.default.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),d.default.createElement(E.Form.Field,{id:"form-input-control-first-name",control:E.Input,name:"name",label:"Votre nom",placeholder:"John Doe",onChange:this.handleChange,required:!0}),d.default.createElement(E.Form.Field,{id:"form-input-control-email",control:E.Input,name:"email",label:"Votre email:",placeholder:"jdoe@company.com",onChange:this.handleChange,type:"email",required:!0})),d.default.createElement(E.Form.Field,{id:"form-textarea-control-opinion",control:E.TextArea,label:"Message:",name:"message",placeholder:"Bonjour, j'ai un job pour toi !",onChange:this.handleChange,required:!0}),d.default.createElement(E.Form.Field,{id:"form-button-control-public",control:E.Button,content:"Envoyer",icon:"send"})))},t}(d.default.Component);C.propTypes=j,t.default=C,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-contact-js-c5bc85c95ffbcab2f66e.js.map