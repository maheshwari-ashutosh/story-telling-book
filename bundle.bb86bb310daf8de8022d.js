/*! For license information please see bundle.bb86bb310daf8de8022d.js.LICENSE.txt */
(()=>{"use strict";var e={56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],a=0;a<e.length;a++){var l=e[a],c=r.base?l[0]+r.base:l[0],h=i[c]||0,p="".concat(c," ").concat(h);i[c]=h+1;var d=n(p),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(u);else{var g=s(u,r);r.byIndex=a,t.splice(a,0,{identifier:p,updater:g,references:1})}o.push(p)}return o}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var i=r(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var a=n(i[o]);t[a].references--}for(var l=r(e,s),c=0;c<i.length;c++){var h=n(i[c]);0===t[h].references&&(t[h].updater(),t.splice(h,1))}i=l}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,s,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var h=[].concat(e[c]);r&&o[h[0]]||(void 0!==i&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=i),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),s&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=s):h[4]="".concat(s)),t.push(h))}},t}},365:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(601),s=n.n(r),i=n(314),o=n.n(i)()(s());o.push([e.id,":root {\n  /* Light theme (default) */\n  --primary-color-light: #2a5885;\n  --secondary-color-light: #4a90e2;\n  --background-color-light: #f8f9fa;\n  --content-background-light: #ffffff;\n  --text-color-light: #333333;\n  --text-secondary-light: #555555;\n  --border-color-light: #e0e0e0;\n  --hover-color-light: #f0f7ff;\n  --active-color-light: #e6f0fa;\n  --shadow-color-light: rgba(0, 0, 0, 0.05);\n  --code-background-light: #f5f7f9;\n  --blockquote-color-light: #6a737d;\n  \n  /* Dark theme */\n  --primary-color-dark: #4a90e2;\n  --secondary-color-dark: #64b5f6;\n  --background-color-dark: #1a1a1a;\n  --content-background-dark: #242424;\n  --text-color-dark: #e0e0e0;\n  --text-secondary-dark: #b0b0b0;\n  --border-color-dark: #444444;\n  --hover-color-dark: #2a3a4a;\n  --active-color-dark: #2c3e50;\n  --shadow-color-dark: rgba(0, 0, 0, 0.2);\n  --code-background-dark: #2d2d2d;\n  --blockquote-color-dark: #a0a0a0;\n  \n  /* Common variables */\n  --sidebar-width: 280px;\n  --header-height: 60px;\n  --content-max-width: 750px;\n  --transition-speed: 0.3s;\n  \n  /* Default theme (light) */\n  --primary-color: var(--primary-color-light);\n  --secondary-color: var(--secondary-color-light);\n  --background-color: var(--background-color-light);\n  --content-background: var(--content-background-light);\n  --text-color: var(--text-color-light);\n  --text-secondary: var(--text-secondary-light);\n  --border-color: var(--border-color-light);\n  --hover-color: var(--hover-color-light);\n  --active-color: var(--active-color-light);\n  --shadow-color: var(--shadow-color-light);\n  --code-background: var(--code-background-light);\n  --blockquote-color: var(--blockquote-color-light);\n}\n\n/* Dark theme class applied to body */\nbody.dark-theme {\n  --primary-color: var(--primary-color-dark);\n  --secondary-color: var(--secondary-color-dark);\n  --background-color: var(--background-color-dark);\n  --content-background: var(--content-background-dark);\n  --text-color: var(--text-color-dark);\n  --text-secondary: var(--text-secondary-dark);\n  --border-color: var(--border-color-dark);\n  --hover-color: var(--hover-color-dark);\n  --active-color: var(--active-color-dark);\n  --shadow-color: var(--shadow-color-dark);\n  --code-background: var(--code-background-dark);\n  --blockquote-color: var(--blockquote-color-dark);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Literata', 'Georgia', serif;\n  line-height: 1.7;\n  color: var(--text-color);\n  background-color: var(--background-color);\n  overflow-x: hidden;\n  font-size: 18px;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transition: background-color var(--transition-speed), color var(--transition-speed);\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Source Sans 3', 'Helvetica Neue', sans-serif;\n  margin-top: 1.5em;\n  margin-bottom: 0.5em;\n  line-height: 1.3;\n  color: var(--primary-color);\n  font-weight: 600;\n  letter-spacing: -0.01em;\n}\n\nh1 {\n  font-size: 2.2rem;\n  margin-top: 0;\n  letter-spacing: -0.02em;\n}\n\nh2 {\n  font-size: 1.8rem;\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 0.3em;\n}\n\nh3 {\n  font-size: 1.5rem;\n}\n\nh4 {\n  font-size: 1.3rem;\n}\n\np {\n  margin-bottom: 1.2em;\n}\n\na {\n  color: var(--secondary-color);\n  text-decoration: none;\n  transition: color var(--transition-speed);\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nblockquote {\n  border-left: 4px solid var(--secondary-color);\n  padding-left: 1em;\n  margin-left: 0;\n  margin-right: 0;\n  font-style: italic;\n  color: var(--blockquote-color);\n}\n\ncode {\n  font-family: 'JetBrains Mono', 'Courier New', monospace;\n  background-color: var(--code-background);\n  padding: 0.2em 0.4em;\n  border-radius: 3px;\n  font-size: 0.9em;\n}\n\npre {\n  background-color: var(--code-background);\n  padding: 1em;\n  border-radius: 5px;\n  overflow-x: auto;\n  margin: 1em 0;\n}\n\npre code {\n  background-color: transparent;\n  padding: 0;\n}\n\nhr {\n  border: 0;\n  border-top: 1px solid var(--border-color);\n  margin: 2em 0;\n}\n\nul, ol {\n  margin-bottom: 1.2em;\n  padding-left: 2em;\n}\n\nli {\n  margin-bottom: 0.5em;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  margin: 1.5em auto;\n}\n\n/* Layout */\n.app-container {\n  display: grid;\n  grid-template-columns: var(--sidebar-width) 1fr var(--sidebar-width);\n  grid-template-rows: var(--header-height) 1fr;\n  grid-template-areas:\n    \"header header header\"\n    \"chapter-nav content heading-nav\";\n  height: 100vh;\n  width: 100vw;\n}\n\n.header {\n  grid-area: header;\n  background-color: var(--primary-color);\n  color: white;\n  display: flex;\n  align-items: center;\n  padding: 0 1.5rem;\n  box-shadow: 0 2px 4px var(--shadow-color);\n  z-index: 10;\n}\n\n.header h1 {\n  font-size: 1.5rem;\n  margin: 0;\n  color: white;\n}\n\n.menu-toggle {\n  display: none;\n  background: none;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  margin-right: 1rem;\n}\n\n.chapter-nav {\n  grid-area: chapter-nav;\n  background-color: white;\n  border-right: 1px solid var(--border-color);\n  overflow-y: auto;\n  padding: 1.5rem 0;\n  box-shadow: 2px 0 5px var(--shadow-color);\n  transition: transform var(--transition-speed);\n}\n\n.chapter-nav h2 {\n  padding: 0 1.5rem 0.5rem;\n  margin-top: 0;\n  font-size: 1.2rem;\n  color: var(--primary-color);\n}\n\n.chapter-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.chapter-item {\n  margin: 0;\n  padding: 0;\n}\n\n.chapter-link {\n  display: block;\n  padding: 0.8rem 1.5rem;\n  color: var(--text-color);\n  text-decoration: none;\n  transition: background-color var(--transition-speed);\n  border-left: 3px solid transparent;\n  font-size: 0.95rem;\n  line-height: 1.4;\n}\n\n.chapter-link:hover {\n  background-color: var(--hover-color);\n  text-decoration: none;\n}\n\n.chapter-link.active {\n  background-color: var(--active-color);\n  border-left-color: var(--secondary-color);\n  font-weight: bold;\n}\n\n.content {\n  grid-area: content;\n  overflow-y: auto;\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n}\n\n.content-inner {\n  width: 100%;\n  max-width: var(--content-max-width);\n}\n\n.heading-nav {\n  grid-area: heading-nav;\n  background-color: white;\n  border-left: 1px solid var(--border-color);\n  overflow-y: auto;\n  padding: 1.5rem;\n  box-shadow: -2px 0 5px var(--shadow-color);\n  transition: transform var(--transition-speed);\n}\n\n.heading-nav h2 {\n  margin-top: 0;\n  font-size: 1.2rem;\n  padding-bottom: 0.5rem;\n  color: var(--primary-color);\n}\n\n.heading-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.heading-item {\n  margin: 0;\n  padding: 0;\n}\n\n.heading-link {\n  display: block;\n  padding: 0.4rem 0;\n  color: var(--text-color);\n  text-decoration: none;\n  transition: color var(--transition-speed);\n  font-size: 0.9rem;\n  line-height: 1.4;\n}\n\n.heading-link:hover {\n  color: var(--secondary-color);\n  text-decoration: none;\n}\n\n.heading-link.active {\n  color: var(--secondary-color);\n  font-weight: bold;\n}\n\n.heading-link.h2 {\n  padding-left: 0;\n}\n\n.heading-link.h3 {\n  padding-left: 1rem;\n  font-size: 0.85rem;\n}\n\n.heading-link.h4 {\n  padding-left: 2rem;\n  font-size: 0.8rem;\n}\n\n/* Loading spinner */\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n}\n\n.spinner {\n  width: 50px;\n  height: 50px;\n  border: 5px solid var(--border-color);\n  border-top-color: var(--secondary-color);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n/* Responsive styles */\n@media (max-width: 1200px) {\n  :root {\n    --sidebar-width: 250px;\n  }\n  \n  body {\n    font-size: 17px;\n  }\n}\n\n@media (max-width: 992px) {\n  .app-container {\n    grid-template-columns: var(--sidebar-width) 1fr;\n    grid-template-areas:\n      \"header header\"\n      \"chapter-nav content\";\n  }\n\n  .heading-nav {\n    display: none;\n  }\n}\n\n@media (max-width: 768px) {\n  :root {\n    --sidebar-width: 240px;\n  }\n  \n  body {\n    font-size: 16px;\n  }\n\n  .menu-toggle {\n    display: block;\n  }\n\n  .app-container {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"header\"\n      \"content\";\n  }\n\n  .chapter-nav {\n    position: fixed;\n    top: var(--header-height);\n    left: 0;\n    height: calc(100vh - var(--header-height));\n    width: var(--sidebar-width);\n    transform: translateX(-100%);\n    z-index: 5;\n  }\n\n  .chapter-nav.open {\n    transform: translateX(0);\n  }\n\n  .content {\n    padding: 1.5rem;\n  }\n}\n\n/* Print styles */\n@media print {\n  .app-container {\n    display: block;\n    height: auto;\n  }\n\n  .header, .chapter-nav, .heading-nav {\n    display: none;\n  }\n\n  .content {\n    overflow: visible;\n    padding: 0;\n  }\n\n  .content-inner {\n    max-width: 100%;\n  }\n} ",""]);const a=o},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},601:e=>{e.exports=function(e){return e[1]}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),s=n.n(r),i=n(825),o=n.n(i),a=n(659),l=n.n(a),c=n(56),h=n.n(c),p=n(540),d=n.n(p),u=n(113),g=n.n(u),f=n(365),m={};m.styleTagTransform=g(),m.setAttributes=h(),m.insert=l().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),s()(f.A,m),f.A&&f.A.locals&&f.A.locals;const b=globalThis,k=b.ShadowRoot&&(void 0===b.ShadyCSS||b.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,x=Symbol(),v=new WeakMap;class y{constructor(e,t,n){if(this._$cssResult$=!0,n!==x)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(k&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=v.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&v.set(t,e))}return e}toString(){return this.cssText}}const w=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1]),e[0]);return new y(n,e,x)},$=(e,t)=>{if(k)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const n of t){const t=document.createElement("style"),r=b.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=n.cssText,e.appendChild(t)}},_=k?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new y("string"==typeof e?e:e+"",void 0,x))(t)})(e):e,{is:A,defineProperty:S,getOwnPropertyDescriptor:C,getOwnPropertyNames:E,getOwnPropertySymbols:R,getPrototypeOf:T}=Object,z=globalThis,P=z.trustedTypes,M=P?P.emptyScript:"",O=z.reactiveElementPolyfillSupport,L=(e,t)=>e,I={toAttribute(e,t){switch(t){case Boolean:e=e?M:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},H=(e,t)=>!A(e,t),U={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:H};Symbol.metadata??=Symbol("metadata"),z.litPropertyMetadata??=new WeakMap;class B extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=U){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);void 0!==r&&S(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:s}=C(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){const i=r?.call(this);s.call(this,t),this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??U}static _$Ei(){if(this.hasOwnProperty(L("elementProperties")))return;const e=T(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(L("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(L("properties"))){const e=this.properties,t=[...E(e),...R(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(_(e))}else void 0!==e&&t.push(_(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(void 0!==r&&!0===n.reflect){const s=(void 0!==n.converter?.toAttribute?n.converter:I).toAttribute(t,n.type);this._$Em=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){const n=this.constructor,r=n._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=n.getPropertyOptions(r),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:I;this._$Em=r,this[r]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??H)(this[e],t))return;this.P(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[L("elementProperties")]=new Map,B[L("finalized")]=new Map,O?.({ReactiveElement:B}),(z.reactiveElementVersions??=[]).push("2.0.4");const j=globalThis,N=j.trustedTypes,q=N?N.createPolicy("lit-html",{createHTML:e=>e}):void 0,D="$lit$",Z=`lit$${Math.random().toFixed(9).slice(2)}$`,Q="?"+Z,F=`<${Q}>`,G=document,V=()=>G.createComment(""),W=e=>null===e||"object"!=typeof e&&"function"!=typeof e,X=Array.isArray,J="[ \t\n\f\r]",K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,ee=/>/g,te=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ne=/'/g,re=/"/g,se=/^(?:script|style|textarea|title)$/i,ie=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),oe=ie(1),ae=(ie(2),ie(3),Symbol.for("lit-noChange")),le=Symbol.for("lit-nothing"),ce=new WeakMap,he=G.createTreeWalker(G,129);function pe(e,t){if(!X(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==q?q.createHTML(t):t}const de=(e,t)=>{const n=e.length-1,r=[];let s,i=2===t?"<svg>":3===t?"<math>":"",o=K;for(let t=0;t<n;t++){const n=e[t];let a,l,c=-1,h=0;for(;h<n.length&&(o.lastIndex=h,l=o.exec(n),null!==l);)h=o.lastIndex,o===K?"!--"===l[1]?o=Y:void 0!==l[1]?o=ee:void 0!==l[2]?(se.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=te):void 0!==l[3]&&(o=te):o===te?">"===l[0]?(o=s??K,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?te:'"'===l[3]?re:ne):o===re||o===ne?o=te:o===Y||o===ee?o=K:(o=te,s=void 0);const p=o===te&&e[t+1].startsWith("/>")?" ":"";i+=o===K?n+F:c>=0?(r.push(a),n.slice(0,c)+D+n.slice(c)+Z+p):n+Z+(-2===c?t:p)}return[pe(e,i+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class ue{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,i=0;const o=e.length-1,a=this.parts,[l,c]=de(e,t);if(this.el=ue.createElement(l,n),he.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=he.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(D)){const t=c[i++],n=r.getAttribute(e).split(Z),o=/([.?@])?(.*)/.exec(t);a.push({type:1,index:s,name:o[2],strings:n,ctor:"."===o[1]?ke:"?"===o[1]?xe:"@"===o[1]?ve:be}),r.removeAttribute(e)}else e.startsWith(Z)&&(a.push({type:6,index:s}),r.removeAttribute(e));if(se.test(r.tagName)){const e=r.textContent.split(Z),t=e.length-1;if(t>0){r.textContent=N?N.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],V()),he.nextNode(),a.push({type:2,index:++s});r.append(e[t],V())}}}else if(8===r.nodeType)if(r.data===Q)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=r.data.indexOf(Z,e+1));)a.push({type:7,index:s}),e+=Z.length-1}s++}}static createElement(e,t){const n=G.createElement("template");return n.innerHTML=e,n}}function ge(e,t,n=e,r){if(t===ae)return t;let s=void 0!==r?n._$Co?.[r]:n._$Cl;const i=W(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),void 0===i?s=void 0:(s=new i(e),s._$AT(e,n,r)),void 0!==r?(n._$Co??=[])[r]=s:n._$Cl=s),void 0!==s&&(t=ge(e,s._$AS(e,t.values),s,r)),t}class fe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??G).importNode(t,!0);he.currentNode=r;let s=he.nextNode(),i=0,o=0,a=n[0];for(;void 0!==a;){if(i===a.index){let t;2===a.type?t=new me(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new ye(s,this,e)),this._$AV.push(t),a=n[++o]}i!==a?.index&&(s=he.nextNode(),i++)}return he.currentNode=G,r}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class me{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=le,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ge(this,e,t),W(e)?e===le||null==e||""===e?(this._$AH!==le&&this._$AR(),this._$AH=le):e!==this._$AH&&e!==ae&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>X(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==le&&W(this._$AH)?this._$AA.nextSibling.data=e:this.T(G.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,r="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=ue.createElement(pe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new fe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ce.get(e.strings);return void 0===t&&ce.set(e.strings,t=new ue(e)),t}k(e){X(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new me(this.O(V()),this.O(V()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class be{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,s){this.type=1,this._$AH=le,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=le}_$AI(e,t=this,n,r){const s=this.strings;let i=!1;if(void 0===s)e=ge(this,e,t,0),i=!W(e)||e!==this._$AH&&e!==ae,i&&(this._$AH=e);else{const r=e;let o,a;for(e=s[0],o=0;o<s.length-1;o++)a=ge(this,r[n+o],t,o),a===ae&&(a=this._$AH[o]),i||=!W(a)||a!==this._$AH[o],a===le?e=le:e!==le&&(e+=(a??"")+s[o+1]),this._$AH[o]=a}i&&!r&&this.j(e)}j(e){e===le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ke extends be{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===le?void 0:e}}class xe extends be{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==le)}}class ve extends be{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){if((e=ge(this,e,t,0)??le)===ae)return;const n=this._$AH,r=e===le&&n!==le||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==le&&(n===le||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ye{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ge(this,e)}}const we=j.litHtmlPolyfillSupport;we?.(ue,me),(j.litHtmlVersions??=[]).push("3.2.1");class $e extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const r=n?.renderBefore??t;let s=r._$litPart$;if(void 0===s){const e=n?.renderBefore??null;r._$litPart$=s=new me(t.insertBefore(V(),e),e,void 0,n??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ae}}$e._$litElement$=!0,$e.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:$e});const _e=globalThis.litElementPolyfillSupport;_e?.({LitElement:$e}),(globalThis.litElementVersions??=[]).push("4.1.1");const Ae=e=>(t,n)=>{void 0!==n?n.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},Se={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:H},Ce=(e=Se,t,n)=>{const{kind:r,metadata:s}=n;let i=globalThis.litPropertyMetadata.get(s);if(void 0===i&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(n.name,e),"accessor"===r){const{name:r}=n;return{set(n){const s=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,s,e)},init(t){return void 0!==t&&this.P(r,void 0,e),t}}}if("setter"===r){const{name:r}=n;return function(n){const s=this[r];t.call(this,n),this.requestUpdate(r,s,e)}}throw Error("Unsupported decorator location: "+r)};function Ee(e){return(t,n)=>"object"==typeof n?Ce(e,t,n):((e,t,n)=>{const r=t.hasOwnProperty(n);return t.constructor.createProperty(n,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function Re(e){return Ee({...e,state:!0,attribute:!1})}let Te={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};function ze(e){Te=e}const Pe={exec:()=>null};function Me(e,t=""){let n="string"==typeof e?e:e.source;const r={replace:(e,t)=>{let s="string"==typeof t?t:t.source;return s=s.replace(Oe.caret,"$1"),n=n.replace(e,s),r},getRegex:()=>new RegExp(n,t)};return r}const Oe={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[\t ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},Le=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ie=/(?:[*+-]|\d{1,9}[.)])/,He=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ue=Me(He).replace(/bull/g,Ie).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Be=Me(He).replace(/bull/g,Ie).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),je=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ne=/(?!\s*\])(?:\\.|[^\[\]\\])+/,qe=Me(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ne).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),De=Me(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ie).getRegex(),Ze="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Qe=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Fe=Me("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))","i").replace("comment",Qe).replace("tag",Ze).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ge=Me(je).replace("hr",Le).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ze).getRegex(),Ve={blockquote:Me(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ge).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:qe,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:Le,html:Fe,lheading:Ue,list:De,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:Ge,table:Pe,text:/^[^\n]+/},We=Me("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Le).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}\t)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ze).getRegex(),Xe={...Ve,lheading:Be,table:We,paragraph:Me(je).replace("hr",Le).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",We).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ze).getRegex()},Je={...Ve,html:Me("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Qe).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Pe,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Me(je).replace("hr",Le).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Ue).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ke=/^( {2,}|\\)\n(?!\s*$)/,Ye=/[\p{P}\p{S}]/u,et=/[\s\p{P}\p{S}]/u,tt=/[^\s\p{P}\p{S}]/u,nt=Me(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,et).getRegex(),rt=/(?!~)[\p{P}\p{S}]/u,st=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,it=Me(st,"u").replace(/punct/g,Ye).getRegex(),ot=Me(st,"u").replace(/punct/g,rt).getRegex(),at="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",lt=Me(at,"gu").replace(/notPunctSpace/g,tt).replace(/punctSpace/g,et).replace(/punct/g,Ye).getRegex(),ct=Me(at,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,rt).getRegex(),ht=Me("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,tt).replace(/punctSpace/g,et).replace(/punct/g,Ye).getRegex(),pt=Me(/\\(punct)/,"gu").replace(/punct/g,Ye).getRegex(),dt=Me(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ut=Me(Qe).replace("(?:--\x3e|$)","--\x3e").getRegex(),gt=Me("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",ut).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ft=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,mt=Me(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",ft).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),bt=Me(/^!?\[(label)\]\[(ref)\]/).replace("label",ft).replace("ref",Ne).getRegex(),kt=Me(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ne).getRegex(),xt={_backpedal:Pe,anyPunctuation:pt,autolink:dt,blockSkip:/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,br:Ke,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:Pe,emStrongLDelim:it,emStrongRDelimAst:lt,emStrongRDelimUnd:ht,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:mt,nolink:kt,punctuation:nt,reflink:bt,reflinkSearch:Me("reflink|nolink(?!\\()","g").replace("reflink",bt).replace("nolink",kt).getRegex(),tag:gt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:Pe},vt={...xt,link:Me(/^!?\[(label)\]\((.*?)\)/).replace("label",ft).getRegex(),reflink:Me(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ft).getRegex()},yt={...xt,emStrongRDelimAst:ct,emStrongLDelim:ot,url:Me(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},wt={...yt,br:Me(Ke).replace("{2,}","*").getRegex(),text:Me(yt.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},$t={normal:Ve,gfm:Xe,pedantic:Je},_t={normal:xt,gfm:yt,breaks:wt,pedantic:vt},At={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},St=e=>At[e];function Ct(e,t){if(t){if(Oe.escapeTest.test(e))return e.replace(Oe.escapeReplace,St)}else if(Oe.escapeTestNoEncode.test(e))return e.replace(Oe.escapeReplaceNoEncode,St);return e}function Et(e){try{e=encodeURI(e).replace(Oe.percentDecode,"%")}catch{return null}return e}function Rt(e,t){const n=e.replace(Oe.findPipe,((e,t,n)=>{let r=!1,s=t;for(;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"})).split(Oe.splitPipe);let r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(Oe.slashPipe,"|");return n}function Tt(e,t,n){const r=e.length;if(0===r)return"";let s=0;for(;s<r&&e.charAt(r-s-1)===t;)s++;return e.slice(0,r-s)}function zt(e,t,n,r,s){const i=t.href,o=t.title||null,a=e[1].replace(s.other.outputLinkReplace,"$1");if("!"!==e[0].charAt(0)){r.state.inLink=!0;const e={type:"link",raw:n,href:i,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,e}return{type:"image",raw:n,href:i,title:o,text:a}}class Pt{options;rules;lexer;constructor(e){this.options=e||Te}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:Tt(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t,n){const r=e.match(n.other.indentCodeCompensation);if(null===r)return t;const s=r[1];return t.split("\n").map((e=>{const t=e.match(n.other.beginningSpace);if(null===t)return e;const[r]=t;return r.length>=s.length?e.slice(s.length):e})).join("\n")}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){const t=Tt(e,"#");this.options.pedantic?e=t.trim():t&&!this.rules.other.endingSpaceChar.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Tt(t[0],"\n")}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let e=Tt(t[0],"\n").split("\n"),n="",r="";const s=[];for(;e.length>0;){let t=!1;const i=[];let o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))i.push(e[o]),t=!0;else{if(t)break;i.push(e[o])}e=e.slice(o);const a=i.join("\n"),l=a.replace(this.rules.other.blockquoteSetextReplace,"\n    $1").replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}\n${a}`:a,r=r?`${r}\n${l}`:l;const c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(l,s,!0),this.lexer.state.top=c,0===e.length)break;const h=s.at(-1);if("code"===h?.type)break;if("blockquote"===h?.type){const t=h,i=t.raw+"\n"+e.join("\n"),o=this.blockquote(i);s[s.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}if("list"!==h?.type);else{const t=h,i=t.raw+"\n"+e.join("\n"),o=this.list(i);s[s.length-1]=o,n=n.substring(0,n.length-h.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=i.substring(s.at(-1).raw.length).split("\n")}}return{type:"blockquote",raw:n,tokens:s,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let o=!1;for(;e;){let n=!1,r="",a="";if(!(t=i.exec(e)))break;if(this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let l=t[2].split("\n",1)[0].replace(this.rules.other.listReplaceTabs,(e=>" ".repeat(3*e.length))),c=e.split("\n",1)[0],h=!l.trim(),p=0;if(this.options.pedantic?(p=2,a=l.trimStart()):h?p=t[1].length+1:(p=t[2].search(this.rules.other.nonSpaceChar),p=p>4?1:p,a=l.slice(p),p+=t[1].length),h&&this.rules.other.blankLine.test(c)&&(r+=c+"\n",e=e.substring(c.length+1),n=!0),!n){const t=this.rules.other.nextBulletRegex(p),n=this.rules.other.hrRegex(p),s=this.rules.other.fencesBeginRegex(p),i=this.rules.other.headingBeginRegex(p),o=this.rules.other.htmlBeginRegex(p);for(;e;){const d=e.split("\n",1)[0];let u;if(c=d,this.options.pedantic?(c=c.replace(this.rules.other.listReplaceNesting,"  "),u=c):u=c.replace(this.rules.other.tabCharGlobal,"    "),s.test(c))break;if(i.test(c))break;if(o.test(c))break;if(t.test(c))break;if(n.test(c))break;if(u.search(this.rules.other.nonSpaceChar)>=p||!c.trim())a+="\n"+u.slice(p);else{if(h)break;if(l.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4)break;if(s.test(l))break;if(i.test(l))break;if(n.test(l))break;a+="\n"+c}h||c.trim()||(h=!0),r+=d+"\n",e=e.substring(d.length+1),l=u.slice(p)}}s.loose||(o?s.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0));let d,u=null;this.options.gfm&&(u=this.rules.other.listIsTask.exec(a),u&&(d="[ ] "!==u[0],a=a.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:r,task:!!u,checked:d,loose:!1,text:a,tokens:[]}),s.raw+=r}const a=s.items.at(-1);if(!a)return;a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd(),s.raw=s.raw.trimEnd();for(let e=0;e<s.items.length;e++)if(this.lexer.state.top=!1,s.items[e].tokens=this.lexer.blockTokens(s.items[e].text,[]),!s.loose){const t=s.items[e].tokens.filter((e=>"space"===e.type)),n=t.length>0&&t.some((e=>this.rules.other.anyLine.test(e.raw)));s.loose=n}if(s.loose)for(let e=0;e<s.items.length;e++)s.items[e].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:n,title:r}}}table(e){const t=this.rules.block.table.exec(e);if(!t)return;if(!this.rules.other.tableDelimiter.test(t[2]))return;const n=Rt(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split("\n"):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const e of r)this.rules.other.tableAlignRight.test(e)?i.align.push("right"):this.rules.other.tableAlignCenter.test(e)?i.align.push("center"):this.rules.other.tableAlignLeft.test(e)?i.align.push("left"):i.align.push(null);for(let e=0;e<n.length;e++)i.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:i.align[e]});for(const e of s)i.rows.push(Rt(e,i.header.length).map(((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:i.align[t]}))));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;const t=Tt(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;let n=0;for(let r=0;r<e.length;r++)if("\\"===e[r])r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return-1}(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){const e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),zt(t,{href:n?n.replace(this.rules.inline.anyPunctuation,"$1"):n,title:r?r.replace(this.rules.inline.anyPunctuation,"$1"):r},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return zt(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(r&&(!r[3]||!n.match(this.rules.other.unicodeAlphaNumeric))&&(!r[1]&&!r[2]||!n||this.rules.inline.punctuation.exec(n))){const n=[...r[0]].length-1;let s,i,o=n,a=0;const l="*"===r[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+n);null!=(r=l.exec(t));){if(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!s)continue;if(i=[...s].length,r[3]||r[4]){o+=i;continue}if((r[5]||r[6])&&n%3&&!((n+i)%3)){a+=i;continue}if(o-=i,o>0)continue;i=Math.min(i,i+o+a);const t=[...r[0]][0].length,l=e.slice(0,n+r.index+t+i);if(Math.min(n,i)%2){const e=l.slice(1,-1);return{type:"em",raw:l,text:e,tokens:this.lexer.inlineTokens(e)}}const c=l.slice(2,-2);return{type:"strong",raw:l,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," ");const n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let e,n;return"@"===t[2]?(e=t[1],n="mailto:"+e):(e=t[1],n=e),{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if("@"===t[2])e=t[0],n="mailto:"+e;else{let r;do{r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??""}while(r!==t[0]);e=t[0],n="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}}class Mt{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Te,this.options.tokenizer=this.options.tokenizer||new Pt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={other:Oe,block:$t.normal,inline:_t.normal};this.options.pedantic?(t.block=$t.pedantic,t.inline=_t.pedantic):this.options.gfm&&(t.block=$t.gfm,this.options.breaks?t.inline=_t.breaks:t.inline=_t.gfm),this.tokenizer.rules=t}static get rules(){return{block:$t,inline:_t}}static lex(e,t){return new Mt(t).lex(e)}static lexInline(e,t){return new Mt(t).inlineTokens(e)}lex(e){e=e.replace(Oe.carriageReturn,"\n"),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.options.pedantic&&(e=e.replace(Oe.tabCharGlobal,"    ").replace(Oe.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some((n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0))))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);const n=t.at(-1);1===r.raw.length&&void 0!==n?n.raw+="\n":t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);const n=t.at(-1);"paragraph"===n?.type||"text"===n?.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);const n=t.at(-1);"paragraph"===n?.type||"text"===n?.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let s=e;if(this.options.extensions?.startBlock){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startBlock.forEach((e=>{r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(s))){const i=t.at(-1);n&&"paragraph"===i?.type?(i.raw+="\n"+r.raw,i.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):t.push(r),n=s.length!==e.length,e=e.substring(r.raw.length)}else if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);const n=t.at(-1);"text"===n?.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r)}else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n=e,r=null;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(r=this.tokenizer.rules.inline.reflinkSearch.exec(n));)e.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(r=this.tokenizer.rules.inline.blockSkip.exec(n));)n=n.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(r=this.tokenizer.rules.inline.anyPunctuation.exec(n));)n=n.slice(0,r.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s=!1,i="";for(;e;){let r;if(s||(i=""),s=!1,this.options.extensions?.inline?.some((n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0))))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);const n=t.at(-1);"text"===r.type&&"text"===n?.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,i)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let o=e;if(this.options.extensions?.startInline){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startInline.forEach((e=>{r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(o=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(i=r.raw.slice(-1)),s=!0;const n=t.at(-1);"text"===n?.type?(n.raw+=r.raw,n.text+=r.text):t.push(r)}else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return t}}class Ot{options;parser;constructor(e){this.options=e||Te}space(e){return""}code({text:e,lang:t,escaped:n}){const r=(t||"").match(Oe.notSpaceStart)?.[0],s=e.replace(Oe.endingNewline,"")+"\n";return r?'<pre><code class="language-'+Ct(r)+'">'+(n?s:Ct(s,!0))+"</code></pre>\n":"<pre><code>"+(n?s:Ct(s,!0))+"</code></pre>\n"}blockquote({tokens:e}){return`<blockquote>\n${this.parser.parse(e)}</blockquote>\n`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>\n`}hr(e){return"<hr>\n"}list(e){const t=e.ordered,n=e.start;let r="";for(let t=0;t<e.items.length;t++){const n=e.items[t];r+=this.listitem(n)}const s=t?"ol":"ul";return"<"+s+(t&&1!==n?' start="'+n+'"':"")+">\n"+r+"</"+s+">\n"}listitem(e){let t="";if(e.task){const n=this.checkbox({checked:!!e.checked});e.loose?"paragraph"===e.tokens[0]?.type?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=n+" "+Ct(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>\n`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>\n`}table(e){let t="",n="";for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r="";for(let t=0;t<e.rows.length;t++){const s=e.rows[t];n="";for(let e=0;e<s.length;e++)n+=this.tablecell(s[e]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),"<table>\n<thead>\n"+t+"</thead>\n"+r+"</table>\n"}tablerow({text:e}){return`<tr>\n${e}</tr>\n`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>\n`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ct(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const r=this.parser.parseInline(n),s=Et(e);if(null===s)return r;let i='<a href="'+(e=s)+'"';return t&&(i+=' title="'+Ct(t)+'"'),i+=">"+r+"</a>",i}image({href:e,title:t,text:n}){const r=Et(e);if(null===r)return Ct(n);let s=`<img src="${e=r}" alt="${n}"`;return t&&(s+=` title="${Ct(t)}"`),s+=">",s}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Ct(e.text)}}class Lt{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class It{options;renderer;textRenderer;constructor(e){this.options=e||Te,this.options.renderer=this.options.renderer||new Ot,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Lt}static parse(e,t){return new It(t).parse(e)}static parseInline(e,t){return new It(t).parseInline(e)}parse(e,t=!0){let n="";for(let r=0;r<e.length;r++){const s=e[r];if(this.options.extensions?.renderers?.[s.type]){const e=s,t=this.options.extensions.renderers[e.type].call({parser:this},e);if(!1!==t||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(e.type)){n+=t||"";continue}}const i=s;switch(i.type){case"space":n+=this.renderer.space(i);continue;case"hr":n+=this.renderer.hr(i);continue;case"heading":n+=this.renderer.heading(i);continue;case"code":n+=this.renderer.code(i);continue;case"table":n+=this.renderer.table(i);continue;case"blockquote":n+=this.renderer.blockquote(i);continue;case"list":n+=this.renderer.list(i);continue;case"html":n+=this.renderer.html(i);continue;case"paragraph":n+=this.renderer.paragraph(i);continue;case"text":{let s=i,o=this.renderer.text(s);for(;r+1<e.length&&"text"===e[r+1].type;)s=e[++r],o+="\n"+this.renderer.text(s);n+=t?this.renderer.paragraph({type:"paragraph",raw:o,text:o,tokens:[{type:"text",raw:o,text:o,escaped:!0}]}):o;continue}default:{const e='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return n}parseInline(e,t=this.renderer){let n="";for(let r=0;r<e.length;r++){const s=e[r];if(this.options.extensions?.renderers?.[s.type]){const e=this.options.extensions.renderers[s.type].call({parser:this},s);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=e||"";continue}}const i=s;switch(i.type){case"escape":case"text":n+=t.text(i);break;case"html":n+=t.html(i);break;case"link":n+=t.link(i);break;case"image":n+=t.image(i);break;case"strong":n+=t.strong(i);break;case"em":n+=t.em(i);break;case"codespan":n+=t.codespan(i);break;case"br":n+=t.br(i);break;case"del":n+=t.del(i);break;default:{const e='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return n}}class Ht{options;block;constructor(e){this.options=e||Te}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Mt.lex:Mt.lexInline}provideParser(){return this.block?It.parse:It.parseInline}}const Ut=new class{defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=It;Renderer=Ot;TextRenderer=Lt;Lexer=Mt;Tokenizer=Pt;Hooks=Ht;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(const r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{const e=r;for(const r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(const r of e.rows)for(const e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case"list":{const e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{const e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach((r=>{const s=e[r].flat(1/0);n=n.concat(this.walkTokens(s,t))})):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach((e=>{const n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if("renderer"in e){const n=t.renderers[e.name];t.renderers[e.name]=n?function(...t){let r=e.renderer.apply(this,t);return!1===r&&(r=n.apply(this,t)),r}:e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");const n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)})),n.extensions=t),e.renderer){const t=this.defaults.renderer||new Ot(this.defaults);for(const n in e.renderer){if(!(n in t))throw new Error(`renderer '${n}' does not exist`);if(["options","parser"].includes(n))continue;const r=n,s=e.renderer[r],i=t[r];t[r]=(...e)=>{let n=s.apply(t,e);return!1===n&&(n=i.apply(t,e)),n||""}}n.renderer=t}if(e.tokenizer){const t=this.defaults.tokenizer||new Pt(this.defaults);for(const n in e.tokenizer){if(!(n in t))throw new Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;const r=n,s=e.tokenizer[r],i=t[r];t[r]=(...e)=>{let n=s.apply(t,e);return!1===n&&(n=i.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){const t=this.defaults.hooks||new Ht;for(const n in e.hooks){if(!(n in t))throw new Error(`hook '${n}' does not exist`);if(["options","block"].includes(n))continue;const r=n,s=e.hooks[r],i=t[r];Ht.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async)return Promise.resolve(s.call(t,e)).then((e=>i.call(t,e)));const n=s.call(t,e);return i.call(t,n)}:t[r]=(...e)=>{let n=s.apply(t,e);return!1===n&&(n=i.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){const t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}})),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Mt.lex(e,t??this.defaults)}parser(e,t){return It.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{const r={...n},s={...this.defaults,...r},i=this.onError(!!s.silent,!!s.async);if(!0===this.defaults.async&&!1===r.async)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(null==t)return i(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);const o=s.hooks?s.hooks.provideLexer():e?Mt.lex:Mt.lexInline,a=s.hooks?s.hooks.provideParser():e?It.parse:It.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(t):t).then((e=>o(e,s))).then((e=>s.hooks?s.hooks.processAllTokens(e):e)).then((e=>s.walkTokens?Promise.all(this.walkTokens(e,s.walkTokens)).then((()=>e)):e)).then((e=>a(e,s))).then((e=>s.hooks?s.hooks.postprocess(e):e)).catch(i);try{s.hooks&&(t=s.hooks.preprocess(t));let e=o(t,s);s.hooks&&(e=s.hooks.processAllTokens(e)),s.walkTokens&&this.walkTokens(e,s.walkTokens);let n=a(e,s);return s.hooks&&(n=s.hooks.postprocess(n)),n}catch(e){return i(e)}}}onError(e,t){return n=>{if(n.message+="\nPlease report this to https://github.com/markedjs/marked.",e){const e="<p>An error occurred:</p><pre>"+Ct(n.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function Bt(e,t){return Ut.parse(e,t)}Bt.options=Bt.setOptions=function(e){return Ut.setOptions(e),Bt.defaults=Ut.defaults,ze(Bt.defaults),Bt},Bt.getDefaults=function(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}},Bt.defaults=Te,Bt.use=function(...e){return Ut.use(...e),Bt.defaults=Ut.defaults,ze(Bt.defaults),Bt},Bt.walkTokens=function(e,t){return Ut.walkTokens(e,t)},Bt.parseInline=Ut.parseInline,Bt.Parser=It,Bt.parser=It.parse,Bt.Renderer=Ot,Bt.TextRenderer=Lt,Bt.Lexer=Mt,Bt.lexer=Mt.lex,Bt.Tokenizer=Pt,Bt.Hooks=Ht,Bt.parse=Bt,Bt.options,Bt.setOptions,Bt.use,Bt.walkTokens,Bt.parseInline,It.parse,Mt.lex;class jt{constructor(){this._chapters=[],this._currentChapter=null,this._headings=[]}static getInstance(){return jt.instance||(jt.instance=new jt),jt.instance}get chapters(){return this._chapters}get currentChapter(){return this._currentChapter}get headings(){return this._headings}async fetchChapters(){try{const e=["chapter-01-enduring-power-of-story.md","chapter-02-core-principles-of-storytelling.md","chapter-03-storytellers-mindset.md","chapter-04-unearthing-narrative-seed.md","chapter-05-character-architectonics.md","chapter-06-worldbuilding-and-setting.md","chapter-07-plot-construction.md","chapter-08-mastering-narrative-conflict.md","chapter-09-pacing-and-rhythm.md","chapter-10-show-dont-tell.md","chapter-11-dialogue-mastery.md","chapter-12-point-of-view.md","chapter-13-power-of-scene-and-setting.md","chapter-14-emotional-resonance.md","chapter-15-theme-and-meaning.md","chapter-16-refining-narrative-style.md","chapter-17-revision-and-refinement.md","chapter-18-storytelling-across-mediums.md","chapter-19-storytellers-journey.md"];return this._chapters=e.map((e=>{const t=e.match(/chapter-(\d+)-(.+)\.md/);if(t){const n=parseInt(t[1],10);return{id:`chapter-${n}`,number:n,title:t[2].split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),filename:e,path:`/chapters/${e}`}}return null})).filter(Boolean),this._chapters.sort(((e,t)=>e.number-t.number)),this._chapters}catch(e){throw console.error("Error fetching chapters:",e),e}}async loadChapter(e){try{const t=await fetch(e.path);if(!t.ok)throw new Error(`Failed to fetch chapter: ${e.title}`);const n=await t.text(),r=Bt.parse(n);if(this._currentChapter={...e,content:r},this.extractHeadings(),!this._currentChapter)throw new Error(`Failed to process chapter: ${e.title}`);return this._currentChapter}catch(t){throw console.error(`Error loading chapter ${e.title}:`,t),t}}extractHeadings(){if(!this._currentChapter||!this._currentChapter.content)return void(this._headings=[]);const e=document.createElement("div");e.innerHTML=this._currentChapter.content;const t=e.querySelectorAll("h1, h2, h3, h4");this._headings=Array.from(t).map((e=>{const t=e.textContent.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.id=t,{id:t,text:e.textContent,level:parseInt(e.tagName.substring(1),10)}})),this._currentChapter.content=e.innerHTML}}var Nt=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let qt=class extends $e{constructor(){super(...arguments),this.themeMode="light"}render(){return oe`
      <button class="theme-toggle" @click=${this.toggleTheme} aria-label="Toggle theme">
        ${"light"===this.themeMode?oe`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
              </svg>
              <span>Dark Mode</span>
            `:oe`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
              </svg>
              <span>Light Mode</span>
            `}
      </button>
    `}toggleTheme(){const e="light"===this.themeMode?"dark":"light";this.dispatchEvent(new CustomEvent("theme-changed",{detail:{themeMode:e},bubbles:!0,composed:!0}))}};qt.styles=w`
    :host {
      display: block;
    }

    .theme-toggle {
      display: flex;
      align-items: center;
      margin-left: auto;
      cursor: pointer;
      background: none;
      border: none;
      color: white;
      font-size: 1rem;
      padding: 0.5rem;
      border-radius: 4px;
      transition: background-color 0.2s;
    }

    .theme-toggle:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .theme-toggle svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
      margin-right: 6px;
    }

    @media (max-width: 768px) {
      .theme-toggle span {
        display: none;
      }
      
      .theme-toggle svg {
        margin-right: 0;
      }
    }
  `,Nt([Ee({type:String})],qt.prototype,"themeMode",void 0),qt=Nt([Ae("theme-toggle")],qt);var Dt=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Zt=class extends $e{constructor(){super(...arguments),this.isMenuOpen=!1,this.themeMode="light"}render(){return oe`
      <div class="header-content">
        <button class="menu-toggle" @click=${this.toggleMenu}>
          ☰
        </button>
        <h1>Storytelling Book</h1>
        <theme-toggle 
          .themeMode=${this.themeMode}
          @theme-changed=${this.handleThemeChanged}
        ></theme-toggle>
      </div>
    `}toggleMenu(){this.isMenuOpen=!this.isMenuOpen,this.dispatchEvent(new CustomEvent("menu-toggle",{detail:{isOpen:this.isMenuOpen},bubbles:!0,composed:!0}))}handleThemeChanged(e){const{themeMode:t}=e.detail;this.dispatchEvent(new CustomEvent("theme-changed",{detail:{themeMode:t},bubbles:!0,composed:!0}))}};Zt.styles=w`
    :host {
      display: block;
      background-color: var(--primary-color);
      color: white;
      box-shadow: 0 2px 4px var(--shadow-color);
      z-index: 10;
      height: var(--header-height);
    }

    .header-content {
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
      height: 100%;
    }

    h1 {
      font-size: 1.5rem;
      margin: 0;
      color: white;
      font-family: 'Source Sans 3', sans-serif;
      font-weight: 600;
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      margin-right: 1rem;
      padding: 0;
    }

    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
      }
      
      h1 {
        font-size: 1.3rem;
      }
    }
  `,Dt([Ee({type:Boolean})],Zt.prototype,"isMenuOpen",void 0),Dt([Ee({type:String})],Zt.prototype,"themeMode",void 0),Zt=Dt([Ae("app-header")],Zt);var Qt=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ft=class extends $e{constructor(){super(...arguments),this.chapters=[],this.currentChapter=null,this.isOpen=!1}render(){return oe`
      <h2>Chapters</h2>
      <ul class="chapter-list">
        ${this.chapters.map((e=>oe`
          <li class="chapter-item">
            <a 
              class="chapter-link ${this.currentChapter&&this.currentChapter.id===e.id?"active":""}" 
              @click=${()=>this.handleChapterClick(e)}
            >
              ${e.number}. ${e.title}
            </a>
          </li>
        `))}
      </ul>
    `}handleChapterClick(e){this.dispatchEvent(new CustomEvent("chapter-selected",{detail:{chapter:e},bubbles:!0,composed:!0}))}};Ft.styles=w`
    :host {
      display: block;
      background-color: var(--content-background);
      border-right: 1px solid var(--border-color);
      overflow-y: auto;
      padding: 1.5rem 0;
      box-shadow: 2px 0 5px var(--shadow-color);
      transition: transform var(--transition-speed), background-color var(--transition-speed);
      height: 100%;
    }

    h2 {
      padding: 0 1.5rem 0.5rem;
      margin-top: 0;
      font-size: 1.2rem;
      color: var(--primary-color);
      font-family: 'Source Sans 3', sans-serif;
      border-bottom: 1px solid var(--border-color);
    }

    .chapter-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .chapter-item {
      margin: 0;
      padding: 0;
    }

    .chapter-link {
      display: block;
      padding: 0.8rem 1.5rem;
      color: var(--text-color);
      text-decoration: none;
      transition: background-color var(--transition-speed);
      border-left: 3px solid transparent;
      font-size: 0.95rem;
      line-height: 1.4;
      cursor: pointer;
    }

    .chapter-link:hover {
      background-color: var(--hover-color);
      text-decoration: none;
    }

    .chapter-link.active {
      background-color: var(--active-color);
      border-left-color: var(--secondary-color);
      font-weight: bold;
    }

    @media (max-width: 768px) {
      :host {
        position: fixed;
        top: var(--header-height);
        left: 0;
        height: calc(100vh - var(--header-height));
        width: var(--sidebar-width);
        transform: translateX(-100%);
        z-index: 5;
      }

      :host(.open) {
        transform: translateX(0);
      }
    }
  `,Qt([Ee({type:Array})],Ft.prototype,"chapters",void 0),Qt([Ee({type:Object})],Ft.prototype,"currentChapter",void 0),Qt([Ee({type:Boolean})],Ft.prototype,"isOpen",void 0),Ft=Qt([Ae("chapter-nav")],Ft);class Gt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class Vt extends Gt{constructor(e){if(super(e),this.it=le,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===le||null==e)return this._t=void 0,this.it=e;if(e===ae)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Vt.directiveName="unsafeHTML",Vt.resultType=1;const Wt=(e=>(...t)=>({_$litDirective$:e,values:t}))(Vt);var Xt=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Jt=class extends $e{constructor(){super(...arguments),this.chapter=null}render(){return oe`
      ${this.chapter?oe`
        <div class="content-inner">
          <div class="chapter-content">
            ${Wt(this.chapter.content||"")}
          </div>
        </div>
      `:oe`
        <div class="loading">
          <div class="spinner"></div>
          <p>Loading chapter...</p>
        </div>
      `}
    `}updated(e){e.has("chapter")&&this.chapter&&(this.scrollTop=0)}};Jt.styles=w`
    :host {
      display: block;
      overflow-y: auto;
      padding: 2rem;
      height: 100%;
      background-color: var(--background-color);
      transition: background-color var(--transition-speed);
    }

    .content-inner {
      width: 100%;
      max-width: var(--content-max-width);
      margin: 0 auto;
      background-color: var(--content-background);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px var(--shadow-color);
      transition: background-color var(--transition-speed), box-shadow var(--transition-speed);
    }

    h1 {
      font-size: 2.2rem;
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 1.5rem;
      color: var(--primary-color);
      font-family: 'Source Sans 3', sans-serif;
      letter-spacing: -0.02em;
      line-height: 1.2;
    }

    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid var(--border-color);
      border-top-color: var(--secondary-color);
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 1rem;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (max-width: 768px) {
      :host {
        padding: 1rem;
      }
      
      .content-inner {
        padding: 1.5rem;
      }
    }
  `,Xt([Ee({type:Object})],Jt.prototype,"chapter",void 0),Jt=Xt([Ae("chapter-content")],Jt);var Kt=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Yt=class extends $e{constructor(){super(...arguments),this.headings=[]}render(){return oe`
      <h2>In This Chapter</h2>
      <ul class="heading-list">
        ${this.headings.map((e=>oe`
          <li class="heading-item">
            <a 
              class="heading-link h${e.level}" 
              @click=${()=>this.handleHeadingClick(e)}
            >
              ${e.text}
            </a>
          </li>
        `))}
      </ul>
    `}handleHeadingClick(e){this.dispatchEvent(new CustomEvent("heading-selected",{detail:{heading:e},bubbles:!0,composed:!0}))}};Yt.styles=w`
    :host {
      display: block;
      background-color: var(--content-background);
      border-left: 1px solid var(--border-color);
      overflow-y: auto;
      padding: 1.5rem;
      box-shadow: -2px 0 5px var(--shadow-color);
      transition: transform var(--transition-speed), background-color var(--transition-speed);
      height: 100%;
    }

    h2 {
      margin-top: 0;
      font-size: 1.2rem;
      padding-bottom: 0.5rem;
      color: var(--primary-color);
      font-family: 'Source Sans 3', sans-serif;
      border-bottom: 1px solid var(--border-color);
    }

    .heading-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .heading-item {
      margin: 0;
      padding: 0;
    }

    .heading-link {
      display: block;
      padding: 0.4rem 0;
      color: var(--text-color);
      text-decoration: none;
      transition: color var(--transition-speed);
      font-size: 0.9rem;
      line-height: 1.4;
      cursor: pointer;
    }

    .heading-link:hover {
      color: var(--secondary-color);
      text-decoration: none;
    }

    .heading-link.active {
      color: var(--secondary-color);
      font-weight: bold;
    }

    .heading-link.h2 {
      padding-left: 0;
    }

    .heading-link.h3 {
      padding-left: 1rem;
      font-size: 0.85rem;
    }

    .heading-link.h4 {
      padding-left: 2rem;
      font-size: 0.8rem;
    }

    @media (max-width: 992px) {
      :host {
        display: none;
      }
    }
  `,Kt([Ee({type:Array})],Yt.prototype,"headings",void 0),Yt=Kt([Ae("heading-nav")],Yt);var en=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let tn=class extends $e{constructor(){super(),this.chapters=[],this.currentChapter=null,this.headings=[],this.isMenuOpen=!1,this.themeMode="light",this.error=null,this.chapterService=jt.getInstance(),this.handleHashChange=()=>{const e=window.location.hash.substring(1),t=this.chapters.find((t=>t.id===e));!t||this.currentChapter&&this.currentChapter.id===t.id||this.loadChapter(t)},this.addEventListener("chapter-selected",this.handleChapterSelected),this.addEventListener("heading-selected",this.handleHeadingSelected),this.addEventListener("menu-toggle",this.handleMenuToggle),this.addEventListener("theme-changed",this.handleThemeChanged),this.loadThemePreference()}connectedCallback(){super.connectedCallback(),this.loadChapters(),window.addEventListener("hashchange",this.handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this.handleHashChange)}render(){return this.error?oe`
        <div class="error">
          <h2>Error</h2>
          <p>${this.error}</p>
          <button @click=${this.loadChapters}>Try Again</button>
        </div>
      `:oe`
      <div class="app-container">
        <app-header
          .themeMode=${this.themeMode}
          @theme-changed=${this.handleThemeChanged}
        ></app-header>
        
        <chapter-nav 
          .chapters=${this.chapters}
          .currentChapter=${this.currentChapter}
          class=${this.isMenuOpen?"open":""}
        ></chapter-nav>
        
        <chapter-content
          .chapter=${this.currentChapter}
        ></chapter-content>
        
        <heading-nav
          .headings=${this.headings}
        ></heading-nav>
      </div>
    `}async loadChapters(){try{if(this.error=null,this.chapters=await this.chapterService.fetchChapters(),this.chapters.length>0){const e=window.location.hash.substring(1),t=this.chapters.find((t=>t.id===e))||this.chapters[0];await this.loadChapter(t)}}catch(e){console.error("Error loading chapters:",e),this.error="Failed to load chapters. Please try again later."}}async loadChapter(e){try{this.error=null,this.currentChapter=await this.chapterService.loadChapter(e),this.headings=this.chapterService.headings,window.location.hash=e.id}catch(t){console.error(`Error loading chapter ${e.title}:`,t),this.error=`Failed to load chapter: ${e.title}. Please try again later.`}}handleChapterSelected(e){const{chapter:t}=e.detail;this.loadChapter(t),this.isMenuOpen=!1}handleHeadingSelected(e){const{heading:t}=e.detail,n=document.getElementById(t.id);n&&n.scrollIntoView({behavior:"smooth"})}handleMenuToggle(e){const{isOpen:t}=e.detail;this.isMenuOpen=t}handleThemeChanged(e){const{themeMode:t}=e.detail;this.themeMode=t,document.body.classList.toggle("dark-theme","dark"===t),localStorage.setItem("theme-preference",t)}loadThemePreference(){const e=localStorage.getItem("theme-preference");e?this.themeMode=e:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(this.themeMode="dark"),document.body.classList.toggle("dark-theme","dark"===this.themeMode)}};tn.styles=w`
    :host {
      display: block;
      height: 100vh;
      width: 100vw;
    }

    .app-container {
      display: grid;
      grid-template-columns: var(--sidebar-width) 1fr var(--sidebar-width);
      grid-template-rows: var(--header-height) 1fr;
      grid-template-areas:
        "header header header"
        "chapter-nav content heading-nav";
      height: 100vh;
      width: 100vw;
    }

    app-header {
      grid-area: header;
    }

    chapter-nav {
      grid-area: chapter-nav;
    }

    chapter-content {
      grid-area: content;
    }

    heading-nav {
      grid-area: heading-nav;
    }

    .error {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      padding: 2rem;
      text-align: center;
      background-color: var(--background-color);
      color: var(--text-color);
      transition: background-color var(--transition-speed), color var(--transition-speed);
    }

    .error h2 {
      color: var(--primary-color);
      margin-bottom: 1rem;
      font-family: 'Source Sans 3', sans-serif;
    }

    .error button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background-color: var(--secondary-color);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      font-family: 'Source Sans 3', sans-serif;
    }

    @media (max-width: 992px) {
      .app-container {
        grid-template-columns: var(--sidebar-width) 1fr;
        grid-template-areas:
          "header header"
          "chapter-nav content";
      }
    }

    @media (max-width: 768px) {
      .app-container {
        grid-template-columns: 1fr;
        grid-template-areas:
          "header"
          "content";
      }
    }
  `,en([Re()],tn.prototype,"chapters",void 0),en([Re()],tn.prototype,"currentChapter",void 0),en([Re()],tn.prototype,"headings",void 0),en([Re()],tn.prototype,"isMenuOpen",void 0),en([Re()],tn.prototype,"themeMode",void 0),en([Re()],tn.prototype,"error",void 0),tn=en([Ae("book-app")],tn),document.addEventListener("DOMContentLoaded",(()=>{const e=document.createElement("book-app");document.getElementById("app")?.appendChild(e)}))})();