webpackJsonp([70144966829960],{818:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}t.__esModule=!0;var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=n(2),d=l(i),p=n(184),m=(l(p),n(384)),s=(l(m),n(389)),h=(l(s),n(351)),b=(l(h),n(1)),y=a(b),E={data:y.object},g=function(e){function t(n){r(this,t);var a=o(this,e.call(this,n));return a.handleChange=function(e){var t;a.setState((t={},t[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:c(f({"form-name":"contact"},a.state))}).then(function(){return alert("Message envoyé!")}).catch(function(e){return alert(e)})},a.state={},a}return u(t,e),t.prototype.render=function(){return d.default.createElement("div",null,d.default.createElement("h1",null,"Contact"),d.default.createElement("form",{name:"contact",method:"post",action:"/merci/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},d.default.createElement("p",{hidden:!0},d.default.createElement("label",null,"Don’t fill this out: ",d.default.createElement("input",{name:"bot-field"}))),d.default.createElement("p",null,d.default.createElement("label",null,"Votre nom:",d.default.createElement("br",null),d.default.createElement("input",{type:"text",name:"name",onChange:this.handleChange}))),d.default.createElement("p",null,d.default.createElement("label",null,"Votre email:",d.default.createElement("br",null),d.default.createElement("input",{type:"email",name:"email",onChange:this.handleChange}))),d.default.createElement("p",null,d.default.createElement("label",null,"Message:",d.default.createElement("br",null),d.default.createElement("textarea",{name:"message",onChange:this.handleChange}))),d.default.createElement("p",null,d.default.createElement("button",{type:"submit"},"Envoyer"))))},t}(d.default.Component);g.propTypes=E,t.default=g,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-contact-js-53633423576f3ed54337.js.map