import T,{useState as jt,useEffect as Ke,useRef as yt}from"react";import Fn from"react-dom";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Je(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bt={exports:{}},V={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe;function zn(){if(pe)return V;pe=1;var t=T,e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(i,c,f){var u,h={},p=null,b=null;f!==void 0&&(p=""+f),c.key!==void 0&&(p=""+c.key),c.ref!==void 0&&(b=c.ref);for(u in c)a.call(c,u)&&!o.hasOwnProperty(u)&&(h[u]=c[u]);if(i&&i.defaultProps)for(u in c=i.defaultProps,c)h[u]===void 0&&(h[u]=c[u]);return{$$typeof:e,type:i,key:p,ref:b,props:h,_owner:r.current}}return V.Fragment=n,V.jsx=s,V.jsxs=s,V}var he;function Dn(){return he||(he=1,bt.exports=zn()),bt.exports}var m=Dn(),at={},ge;function Un(){if(ge)return at;ge=1;var t=Fn;return at.createRoot=t.createRoot,at.hydrateRoot=t.hydrateRoot,at}var Wn=Un();const H=Je(Wn),Yn=({id:t="42"})=>m.jsxs("div",{children:["Passed ID: ",t]}),Hn=({isEditMode:t=!1})=>(console.log("isEditMode",t),console.log("Boolean(isEditMode)",!!t),console.log("typeof isEditMode",typeof t),m.jsx("div",{children:t===!0||t==="true"?"Mode: Edit":"Mode: View"})),Rt=window.Liferay||{OAuth2:{getAuthorizeURL:()=>"",getBuiltInRedirectURL:()=>"",getIntrospectURL:()=>"",getTokenURL:()=>"",getUserAgentApplication:t=>{}},OAuth2Client:{FromParameters:t=>({}),FromUserAgentApplication:t=>({}),fetch:(t,e={})=>{}},ThemeDisplay:{getCompanyGroupId:()=>20119,getPathThemeImages:()=>"",getPortalURL:()=>"http://localhost:8080",getScopeGroupId:()=>20117,getSiteGroupId:()=>20117,isSignedIn:()=>!1},authToken:"",on:(t,e)=>{},fire:(t,e)=>{}},$n=()=>{const[t,e]=jt(0);return Ke(()=>{const n=()=>{e(a=>a+1)};return Rt.on("ACET-Click",n),()=>{Rt.detach("ACET-Click",n)}},[]),m.jsxs("div",{children:["Current Count: ",t]})},Gn=()=>{const t=()=>{Rt.fire("ACET-Click",{})};return m.jsx("button",{onClick:t,children:"Increment Counter"})},qn=()=>m.jsx("div",{children:m.jsx("slot",{name:"singleSlotName"})}),Xn=({isEditMode:t,id:e,bgImageId:n})=>{const a=t===!0||t==="true",[r,o]=jt(""),[s,i]=jt(""),c=yt<HTMLSlotElement>null,f=yt<HTMLSlotElement>null,u=yt<HTMLSlotElement>null;return Ke(()=>{const h=(p,b)=>{if(!p){console.log(`${b} slot is not found`);return}const w=p.assignedElements({flatten:!0});console.log(`${b} slot content:`);let S="";return w.forEach(v=>{console.log("-",v.textContent),S===""?S=v.textContent:S+=` ${v.textContent}`}),S};o(h(c.current,"nameSlot")),i(h(f.current,"descSlot")),h(u.current,"imageSlot")},[]),m.jsx("div",{children:a?m.jsxs("div",{children:[m.jsx("slot",{name:"nameSlot",ref:c}),m.jsx("br",{}),m.jsx("slot",{name:"descSlot",ref:f}),m.jsx("br",{}),m.jsx("slot",{name:"imageSlot",ref:u})]}):m.jsxs("div",{className:"mapping-slots",children:[m.jsxs("div",{style:{border:"1px solid red"},children:[m.jsx("slot",{name:"nameSlot",ref:c}),m.jsx("br",{}),m.jsx("slot",{name:"descSlot",ref:f}),m.jsx("br",{}),m.jsx("slot",{name:"imageSlot",ref:u})]}),m.jsxs("div",{"data-lfr-background-image-id":n,children:[m.jsx("h1",{children:r}),m.jsx("p",{children:s})]})]})},e)};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Bn(t,e,n){return(e=Kn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ye(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ye(Object(n),!0).forEach(function(a){Bn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Vn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Kn(t){var e=Vn(t,"string");return typeof e=="symbol"?e:e+""}const be=()=>{};let ne={},Qe={},Ze=null,tn={mark:be,measure:be};try{typeof window<"u"&&(ne=window),typeof document<"u"&&(Qe=document),typeof MutationObserver<"u"&&(Ze=MutationObserver),typeof performance<"u"&&(tn=performance)}catch{}const{userAgent:ve=""}=ne.navigator||{},F=ne,y=Qe,xe=Ze,rt=tn;F.document;const j=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",en=~ve.indexOf("MSIE")||~ve.indexOf("Trident/");var Jn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Qn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,nn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Zn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},an=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],E="classic",ut="duotone",ta="sharp",ea="sharp-duotone",rn=[E,ut,ta,ea],na={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},aa={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ra=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),oa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},sa=["fak","fa-kit","fakd","fa-kit-duotone"],Ae={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ia=["kit"],la={kit:{"fa-kit":"fak"}},ca=["fak","fakd"],fa={kit:{fak:"fa-kit"}},Se={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ua=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],da=["fak","fa-kit","fakd","fa-kit-duotone"],ma={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},pa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ha={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ft={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ga=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],zt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ua,...ga],ya=["solid","regular","light","thin","duotone","brands"],on=[1,2,3,4,5,6,7,8,9,10],ba=on.concat([11,12,13,14,15,16,17,18,19,20]),va=[...Object.keys(ha),...ya,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY].concat(on.map(t=>"".concat(t,"x"))).concat(ba.map(t=>"w-".concat(t))),xa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const M="___FONT_AWESOME___",Dt=16,sn="fa",ln="svg-inline--fa",W="data-fa-i2svg",Ut="data-fa-pseudo-element",Aa="data-fa-pseudo-element-pending",ae="data-prefix",re="data-icon",Ee="fontawesome-i2svg",Sa="async",Ea=["HTML","HEAD","STYLE","SCRIPT"],cn=(()=>{try{return!0}catch{return!1}})();function et(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[E]}})}const fn=l({},nn);fn[E]=l(l(l(l({},{"fa-duotone":"duotone"}),nn[E]),Ae.kit),Ae["kit-duotone"]);const wa=et(fn),Wt=l({},oa);Wt[E]=l(l(l(l({},{duotone:"fad"}),Wt[E]),Se.kit),Se["kit-duotone"]);const we=et(Wt),Yt=l({},Ft);Yt[E]=l(l({},Yt[E]),fa.kit);const oe=et(Yt),Ht=l({},pa);Ht[E]=l(l({},Ht[E]),la.kit);et(Ht);const _a=Jn,un="fa-layers-text",ka=Qn,Oa=l({},na);et(Oa);const Pa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vt=Zn,Ca=[...ia,...va],J=F.FontAwesomeConfig||{};function Ia(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ta(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Ta(Ia(n));r!=null&&(J[a]=r)});const dn={styleDefault:"solid",familyDefault:E,cssPrefix:sn,replacementClass:ln,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};J.familyPrefix&&(J.cssPrefix=J.familyPrefix);const X=l(l({},dn),J);X.autoReplaceSvg||(X.observeMutations=!1);const d={};Object.keys(dn).forEach(t=>{Object.defineProperty(d,t,{enumerable:!0,set:function(e){X[t]=e,Q.forEach(n=>n(d))},get:function(){return X[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){X.cssPrefix=t,Q.forEach(e=>e(d))},get:function(){return X.cssPrefix}});F.FontAwesomeConfig=d;const Q=[];function Na(t){return Q.push(t),()=>{Q.splice(Q.indexOf(t),1)}}const R=Dt,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ma(t){if(!t||!j)return;const e=y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=y.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return y.head.insertBefore(e,a),t}const La="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Z(){let t=12,e="";for(;t-- >0;)e+=La[Math.random()*62|0];return e}function B(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function se(t){return t.classList?B(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function mn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ja(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(mn(t[n]),'" '),"").trim()}function dt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ie(t){return t.size!==C.size||t.x!==C.x||t.y!==C.y||t.rotate!==C.rotate||t.flipX||t.flipY}function Ra(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(s," ").concat(i)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:f}}function Fa(t){let{transform:e,width:n=Dt,height:a=Dt,startCentered:r=!1}=t,o="";return r&&en?o+="translate(".concat(e.x/R-n/2,"em, ").concat(e.y/R-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/R,"em), calc(-50% + ").concat(e.y/R,"em)) "):o+="translate(".concat(e.x/R,"em, ").concat(e.y/R,"em) "),o+="scale(".concat(e.size/R*(e.flipX?-1:1),", ").concat(e.size/R*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var za=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function pn(){const t=sn,e=ln,n=d.cssPrefix,a=d.replacementClass;let r=za;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(i,".".concat(a))}return r}let _e=!1;function xt(){d.autoAddCss&&!_e&&(Ma(pn()),_e=!0)}var Da={mixout(){return{dom:{css:pn,insertCss:xt}}},hooks(){return{beforeDOMElementCreation(){xt()},beforeI2svg(){xt()}}}};const L=F||{};L[M]||(L[M]={});L[M].styles||(L[M].styles={});L[M].hooks||(L[M].hooks={});L[M].shims||(L[M].shims=[]);var I=L[M];const hn=[],gn=function(){y.removeEventListener("DOMContentLoaded",gn),lt=1,hn.map(t=>t())};let lt=!1;j&&(lt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),lt||y.addEventListener("DOMContentLoaded",gn));function Ua(t){j&&(lt?setTimeout(t,0):hn.push(t))}function nt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?mn(t):"<".concat(e," ").concat(ja(n),">").concat(a.map(nt).join(""),"</").concat(e,">")}function ke(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var At=function(e,n,a,r){var o=Object.keys(e),s=o.length,i=n,c,f,u;for(a===void 0?(c=1,u=e[o[0]]):(c=0,u=a);c<s;c++)f=o[c],u=i(u,e[f],f,e);return u};function Wa(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function $t(t){const e=Wa(t);return e.length===1?e[0].toString(16):null}function Ya(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Oe(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Gt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Oe(e);typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(t,Oe(e)):I.styles[t]=l(l({},I.styles[t]||{}),r),t==="fas"&&Gt("fa",e)}const{styles:tt,shims:Ha}=I,yn=Object.keys(oe),$a=yn.reduce((t,e)=>(t[e]=Object.keys(oe[e]),t),{});let le=null,bn={},vn={},xn={},An={},Sn={};function Ga(t){return~Ca.indexOf(t)}function qa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ga(r)?r:null}const En=()=>{const t=a=>At(tt,(r,o,s)=>(r[s]=At(o,a,{}),r),{});bn=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=o}),a)),vn=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=o}),a)),Sn=t((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(i=>{a[i]=o}),a});const e="far"in tt||d.autoFetchSvg,n=At(Ha,(a,r)=>{const o=r[0];let s=r[1];const i=r[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:i}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:i}),a},{names:{},unicodes:{}});xn=n.names,An=n.unicodes,le=mt(d.styleDefault,{family:d.familyDefault})};Na(t=>{le=mt(t.styleDefault,{family:d.familyDefault})});En();function ce(t,e){return(bn[t]||{})[e]}function Xa(t,e){return(vn[t]||{})[e]}function U(t,e){return(Sn[t]||{})[e]}function wn(t){return xn[t]||{prefix:null,iconName:null}}function Ba(t){const e=An[t],n=ce("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function z(){return le}const _n=()=>({prefix:null,iconName:null,rest:[]});function Va(t){let e=E;const n=yn.reduce((a,r)=>(a[r]="".concat(d.cssPrefix,"-").concat(r),a),{});return rn.forEach(a=>{(t.includes(n[a])||t.some(r=>$a[a].includes(r)))&&(e=a)}),e}function mt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=E}=e,a=wa[n][t];if(n===ut&&!t)return"fad";const r=we[n][t]||we[n][a],o=t in I.styles?t:null;return r||o||null}function Ka(t){let e=[],n=null;return t.forEach(a=>{const r=qa(d.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Pe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function pt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=zt.concat(da),o=Pe(t.filter(h=>r.includes(h))),s=Pe(t.filter(h=>!zt.includes(h))),i=o.filter(h=>(a=h,!an.includes(h))),[c=null]=i,f=Va(o),u=l(l({},Ka(s)),{},{prefix:mt(c,{family:f})});return l(l(l({},u),tr({values:t,family:f,styles:tt,config:d,canonical:u,givenPrefix:a})),Ja(n,a,u))}function Ja(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?wn(r):{},s=U(a,r);return r=o.iconName||s||r,a=o.prefix||a,a==="far"&&!tt.far&&tt.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Qa=rn.filter(t=>t!==E||t!==ut),Za=Object.keys(Ft).filter(t=>t!==E).map(t=>Object.keys(Ft[t])).flat();function tr(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:s={}}=t,i=n===ut,c=e.includes("fa-duotone")||e.includes("fad"),f=s.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!i&&(c||f||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Qa.includes(n)&&(Object.keys(o).find(p=>Za.includes(p))||s.autoFetchSvg)){const p=ra.get(n).defaultShortPrefixId;a.prefix=p,a.iconName=U(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=z()||"fas"),a}class er{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=l(l({},this.definitions[o]||{}),r[o]),Gt(o,r[o]);const s=oe[E][o];s&&Gt(s,r[o]),En()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:i}=a[r],c=i[2];e[o]||(e[o]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(e[o][f]=i)}),e[o][s]=i}),e}}let Ce=[],$={};const q={},nr=Object.keys(q);function ar(t,e){let{mixoutsTo:n}=e;return Ce=t,$={},Object.keys(q).forEach(a=>{nr.indexOf(a)===-1&&delete q[a]}),Ce.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{$[s]||($[s]=[]),$[s].push(o[s])})}a.provides&&a.provides(q)}),n}function qt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return($[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function Y(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];($[t]||[]).forEach(o=>{o.apply(null,n)})}function D(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return q[t]?q[t].apply(null,e):void 0}function Xt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||z();if(e)return e=U(n,e)||e,ke(kn.definitions,n,e)||ke(I.styles,n,e)}const kn=new er,rr=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,Y("noAuto")},or={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(Y("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Ua(()=>{ir({autoReplaceSvgRoot:e}),Y("watch",t)})}},sr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:U(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=mt(t[0]);return{prefix:n,iconName:U(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(_a))){const e=pt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||z(),iconName:U(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=z();return{prefix:e,iconName:U(e,t)||t}}}},k={noAuto:rr,config:d,dom:or,parse:sr,library:kn,findIconDefinition:Xt,toHtml:nt},ir=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=y}=t;(Object.keys(I.styles).length>0||d.autoFetchSvg)&&j&&d.autoReplaceSvg&&k.dom.i2svg({node:e})};function ht(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>nt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!j)return;const n=y.createElement("div");return n.innerHTML=t.html,n.children}}),t}function lr(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:s}=t;if(ie(s)&&n.found&&!a.found){const{width:i,height:c}=n,f={x:i/c/2,y:.5};r.style=dt(l(l({},o),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function cr(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:s}),children:a}]}]}function fe(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:i,maskId:c,titleId:f,extra:u,watchable:h=!1}=t,{width:p,height:b}=n.found?n:e,w=ca.includes(a),S=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(O=>u.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(u.classes).join(" ");let v={children:[],attributes:l(l({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:S,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(b)})};const A=w&&!~u.classes.indexOf("fa-fw")?{width:"".concat(p/b*16*.0625,"em")}:{};h&&(v.attributes[W]=""),i&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(f||Z())},children:[i]}),delete v.attributes.title);const x=l(l({},v),{},{prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:o,symbol:s,styles:l(l({},A),u.styles)}),{children:_,attributes:N}=n.found&&e.found?D("generateAbstractMask",x)||{children:[],attributes:{}}:D("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=_,x.attributes=N,s?cr(x):lr(x)}function Ie(t){const{content:e,width:n,height:a,transform:r,title:o,extra:s,watchable:i=!1}=t,c=l(l(l({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});i&&(c[W]="");const f=l({},s.styles);ie(r)&&(f.transform=Fa({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const u=dt(f);u.length>0&&(c.style=u);const h=[];return h.push({tag:"span",attributes:c,children:[e]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function fr(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=dt(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:St}=I;function Bt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(vt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(vt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const ur={found:!1,width:512,height:512};function dr(t,e){!cn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Vt(t,e){let n=e;return e==="fa"&&d.styleDefault!==null&&(e=z()),new Promise((a,r)=>{if(n==="fa"){const o=wn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&St[e]&&St[e][t]){const o=St[e][t];return a(Bt(o))}dr(t,e),a(l(l({},ur),{},{icon:d.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}const Te=()=>{},Kt=d.measurePerformance&&rt&&rt.mark&&rt.measure?rt:{mark:Te,measure:Te},K='FA "6.7.2"',mr=t=>(Kt.mark("".concat(K," ").concat(t," begins")),()=>On(t)),On=t=>{Kt.mark("".concat(K," ").concat(t," ends")),Kt.measure("".concat(K," ").concat(t),"".concat(K," ").concat(t," begins"),"".concat(K," ").concat(t," ends"))};var ue={begin:mr,end:On};const st=()=>{};function Ne(t){return typeof(t.getAttribute?t.getAttribute(W):null)=="string"}function pr(t){const e=t.getAttribute?t.getAttribute(ae):null,n=t.getAttribute?t.getAttribute(re):null;return e&&n}function hr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function gr(){return d.autoReplaceSvg===!0?it.replace:it[d.autoReplaceSvg]||it.replace}function yr(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function br(t){return y.createElement(t)}function Pn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?yr:br}=e;if(typeof t=="string")return y.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(Pn(o,{ceFn:n}))}),a}function vr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const it={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Pn(n),e)}),e.getAttribute(W)===null&&d.keepOriginalSource){let n=y.createComment(vr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~se(e).indexOf(d.replacementClass))return it.replace(t);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,i)=>(i===d.replacementClass||i.match(a)?s.toSvg.push(i):s.toNode.push(i),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>nt(o)).join(`
`);e.setAttribute(W,""),e.innerHTML=r}};function Me(t){t()}function Cn(t,e){const n=typeof e=="function"?e:st;if(t.length===0)n();else{let a=Me;d.mutateApproach===Sa&&(a=F.requestAnimationFrame||Me),a(()=>{const r=gr(),o=ue.begin("mutate");t.map(r),o(),n()})}}let de=!1;function In(){de=!0}function Jt(){de=!1}let ct=null;function Le(t){if(!xe||!d.observeMutations)return;const{treeCallback:e=st,nodeCallback:n=st,pseudoElementsCallback:a=st,observeMutationsRoot:r=y}=t;ct=new xe(o=>{if(de)return;const s=z();B(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!Ne(i.addedNodes[0])&&(d.searchPseudoElements&&a(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&d.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&Ne(i.target)&&~Pa.indexOf(i.attributeName))if(i.attributeName==="class"&&pr(i.target)){const{prefix:c,iconName:f}=pt(se(i.target));i.target.setAttribute(ae,c||s),f&&i.target.setAttribute(re,f)}else hr(i.target)&&n(i.target)})}),j&&ct.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function xr(){ct&&ct.disconnect()}function Ar(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),n}function Sr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=pt(se(t));return r.prefix||(r.prefix=z()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Xa(r.prefix,t.innerText)||ce(r.prefix,$t(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Er(t){const e=B(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||Z()):(e["aria-hidden"]="true",e.focusable="false")),e}function wr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function je(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Sr(t),o=Er(t),s=qt("parseNodeAttributes",{},t);let i=e.styleParser?Ar(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:i,attributes:o}},s)}const{styles:_r}=I;function Tn(t){const e=d.autoReplaceSvg==="nest"?je(t,{styleParser:!1}):je(t);return~e.extra.classes.indexOf(un)?D("generateLayersText",t,e):D("generateSvgReplacementMutation",t,e)}function kr(){return[...sa,...zt]}function Re(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();const n=y.documentElement.classList,a=u=>n.add("".concat(Ee,"-").concat(u)),r=u=>n.remove("".concat(Ee,"-").concat(u)),o=d.autoFetchSvg?kr():an.concat(Object.keys(_r));o.includes("fa")||o.push("fa");const s=[".".concat(un,":not([").concat(W,"])")].concat(o.map(u=>".".concat(u,":not([").concat(W,"])"))).join(", ");if(s.length===0)return Promise.resolve();let i=[];try{i=B(t.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),r("complete");else return Promise.resolve();const c=ue.begin("onTree"),f=i.reduce((u,h)=>{try{const p=Tn(h);p&&u.push(p)}catch(p){cn||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise((u,h)=>{Promise.all(f).then(p=>{Cn(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(p=>{c(),h(p)})})}function Or(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Tn(t).then(n=>{n&&Cn([n],e)})}function Pr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Xt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Xt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const Cr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:i=null,classes:c=[],attributes:f={},styles:u={}}=e;if(!t)return;const{prefix:h,iconName:p,icon:b}=t;return ht(l({type:"icon"},t),()=>(Y("beforeDOMElementCreation",{iconDefinition:t,params:e}),d.autoA11y&&(s?f["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(i||Z()):(f["aria-hidden"]="true",f.focusable="false")),fe({icons:{main:Bt(b),mask:r?Bt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:p,transform:l(l({},C),n),symbol:a,title:s,maskId:o,titleId:i,extra:{attributes:f,styles:u,classes:c}})))};var Ir={mixout(){return{icon:Pr(Cr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Re,t.nodeCallback=Or,t}}},provides(t){t.i2svg=function(e){const{node:n=y,callback:a=()=>{}}=e;return Re(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:i,symbol:c,mask:f,maskId:u,extra:h}=n;return new Promise((p,b)=>{Promise.all([Vt(a,s),f.iconName?Vt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[S,v]=w;p([e,fe({icons:{main:S,mask:v},prefix:s,iconName:a,transform:i,symbol:c,maskId:u,title:r,titleId:o,extra:h,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:s}=e;const i=dt(s);i.length>0&&(a.style=i);let c;return ie(o)&&(c=D("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},Tr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ht({type:"layer"},()=>{Y("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Nr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return ht({type:"counter",content:t},()=>(Y("beforeDOMElementCreation",{content:t,params:e}),fr({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},Mr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,title:a=null,classes:r=[],attributes:o={},styles:s={}}=e;return ht({type:"text",content:t},()=>(Y("beforeDOMElementCreation",{content:t,params:e}),Ie({content:t,transform:l(l({},C),n),title:a,extra:{attributes:o,styles:s,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let s=null,i=null;if(en){const c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/c,i=f.height/c}return d.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Ie({content:e.innerHTML,width:s,height:i,transform:r,title:a,extra:o,watchable:!0})])}}};const Lr=new RegExp('"',"ug"),Fe=[1105920,1112319],ze=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),aa),xa),ma),Qt=Object.keys(ze).reduce((t,e)=>(t[e.toLowerCase()]=ze[e],t),{}),jr=Object.keys(Qt).reduce((t,e)=>{const n=Qt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Rr(t){const e=t.replace(Lr,""),n=Ya(e,0),a=n>=Fe[0]&&n<=Fe[1],r=e.length===2?e[0]===e[1]:!1;return{value:$t(r?e[0]:e),isSecondary:a||r}}function Fr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Qt[n]||{})[r]||jr[n]}function De(t,e){const n="".concat(Aa).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=B(t.children).filter(p=>p.getAttribute(Ut)===e)[0],i=F.getComputedStyle(t,e),c=i.getPropertyValue("font-family"),f=c.match(ka),u=i.getPropertyValue("font-weight"),h=i.getPropertyValue("content");if(s&&!f)return t.removeChild(s),a();if(f&&h!=="none"&&h!==""){const p=i.getPropertyValue("content");let b=Fr(c,u);const{value:w,isSecondary:S}=Rr(p),v=f[0].startsWith("FontAwesome");let A=ce(b,w),x=A;if(v){const _=Ba(w);_.iconName&&_.prefix&&(A=_.iconName,b=_.prefix)}if(A&&!S&&(!s||s.getAttribute(ae)!==b||s.getAttribute(re)!==x)){t.setAttribute(n,x),s&&t.removeChild(s);const _=wr(),{extra:N}=_;N.attributes[Ut]=e,Vt(A,b).then(O=>{const jn=fe(l(l({},_),{},{icons:{main:O,mask:_n()},prefix:b,iconName:x,extra:N,watchable:!0})),gt=y.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(gt,t.firstChild):t.appendChild(gt),gt.outerHTML=jn.map(Rn=>nt(Rn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function zr(t){return Promise.all([De(t,"::before"),De(t,"::after")])}function Dr(t){return t.parentNode!==document.head&&!~Ea.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ut)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ue(t){if(j)return new Promise((e,n)=>{const a=B(t.querySelectorAll("*")).filter(Dr).map(zr),r=ue.begin("searchPseudoElements");In(),Promise.all(a).then(()=>{r(),Jt(),e()}).catch(()=>{r(),Jt(),n()})})}var Ur={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ue,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=y}=e;d.searchPseudoElements&&Ue(n)}}};let We=!1;var Wr={mixout(){return{dom:{unwatch(){In(),We=!0}}}},hooks(){return{bootstrap(){Le(qt("mutationObserverCallbacks",{}))},noAuto(){xr()},watch(t){const{observeMutationsRoot:e}=t;We?Jt():Le(qt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ye=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Yr={mixout(){return{parse:{transform:t=>Ye(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ye(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(i," ").concat(c," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:u,path:h};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),p.path)}]}]}}}};const Et={x:0,y:0,width:"100%",height:"100%"};function He(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Hr(t){return t.tag==="g"?t.children:[t]}var $r={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?pt(n.split(" ").map(r=>r.trim())):_n();return a.prefix||(a.prefix=z()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:i}=e;const{width:c,icon:f}=r,{width:u,icon:h}=o,p=Ra({transform:i,containerWidth:u,iconWidth:c}),b={tag:"rect",attributes:l(l({},Et),{},{fill:"white"})},w=f.children?{children:f.children.map(He)}:{},S={tag:"g",attributes:l({},p.inner),children:[He(l({tag:f.tag,attributes:l(l({},f.attributes),p.path)},w))]},v={tag:"g",attributes:l({},p.outer),children:[S]},A="mask-".concat(s||Z()),x="clip-".concat(s||Z()),_={tag:"mask",attributes:l(l({},Et),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,v]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Hr(h)},_]};return n.push(N,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(A,")")},Et)}),{children:n,attributes:a}}}},Gr={provides(t){let e=!1;F.matchMedia&&(e=F.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=l(l({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},qr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Xr=[Da,Ir,Tr,Nr,Mr,Ur,Wr,Yr,$r,Gr,qr];ar(Xr,{mixoutsTo:k});k.noAuto;k.config;k.library;k.dom;const Zt=k.parse;k.findIconDefinition;k.toHtml;const Br=k.icon;k.layer;k.text;k.counter;var wt={exports:{}},_t,$e;function Vr(){if($e)return _t;$e=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return _t=t,_t}var kt,Ge;function Kr(){if(Ge)return kt;Ge=1;var t=Vr();function e(){}function n(){}return n.resetWarningCache=e,kt=function(){function a(s,i,c,f,u,h){if(h!==t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}a.isRequired=a;function r(){return a}var o={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:r,element:a,elementType:a,instanceOf:r,node:a,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:e};return o.PropTypes=o,o},kt}var qe;function Jr(){return qe||(qe=1,wt.exports=Kr()()),wt.exports}var Qr=Jr();const g=Je(Qr);function Xe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Xe(Object(n),!0).forEach(function(a){G(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Xe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ft(t){"@babel/helpers - typeof";return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ft(t)}function G(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function to(t,e){if(t==null)return{};var n=Zr(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function te(t){return eo(t)||no(t)||ao(t)||ro()}function eo(t){if(Array.isArray(t))return ee(t)}function no(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ao(t,e){if(t){if(typeof t=="string")return ee(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(t,e)}}function ee(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function ro(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oo(t){var e,n=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,s=t.shake,i=t.flash,c=t.spin,f=t.spinPulse,u=t.spinReverse,h=t.pulse,p=t.fixedWidth,b=t.inverse,w=t.border,S=t.listItem,v=t.flip,A=t.size,x=t.rotation,_=t.pull,N=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":s,"fa-flash":i,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":h,"fa-fw":p,"fa-inverse":b,"fa-border":w,"fa-li":S,"fa-flip":v===!0,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},G(e,"fa-".concat(A),typeof A<"u"&&A!==null),G(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),G(e,"fa-pull-".concat(_),typeof _<"u"&&_!==null),G(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(N).map(function(O){return N[O]?O:null}).filter(function(O){return O})}function so(t){return t=t-0,t===t}function Nn(t){return so(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var io=["style"];function lo(t){return t.charAt(0).toUpperCase()+t.slice(1)}function co(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Nn(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[lo(r)]=o:e[r]=o,e},{})}function Mn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(c){return Mn(t,c)}),r=Object.keys(e.attributes||{}).reduce(function(c,f){var u=e.attributes[f];switch(f){case"class":c.attrs.className=u,delete e.attributes.class;break;case"style":c.attrs.style=co(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=u:c.attrs[Nn(f)]=u}return c},{attrs:{}}),o=n.style,s=o===void 0?{}:o,i=to(n,io);return r.attrs.style=P(P({},r.attrs.style),s),t.apply(void 0,[e.tag,P(P({},r.attrs),i)].concat(te(a)))}var Ln=!1;try{Ln=!0}catch{}function fo(){if(!Ln&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Be(t){if(t&&ft(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Zt.icon)return Zt.icon(t);if(t===null)return null;if(t&&ft(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ot(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?G({},t,e):{}}var Ve={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},me=T.forwardRef(function(t,e){var n=P(P({},Ve),t),a=n.icon,r=n.mask,o=n.symbol,s=n.className,i=n.title,c=n.titleId,f=n.maskId,u=Be(a),h=Ot("classes",[].concat(te(oo(n)),te((s||"").split(" ")))),p=Ot("transform",typeof n.transform=="string"?Zt.transform(n.transform):n.transform),b=Ot("mask",Be(r)),w=Br(u,P(P(P(P({},h),p),b),{},{symbol:o,title:i,titleId:c,maskId:f}));if(!w)return fo("Could not find icon",u),null;var S=w.abstract,v={ref:e};return Object.keys(n).forEach(function(A){Ve.hasOwnProperty(A)||(v[A]=n[A])}),uo(S[0],v)});me.displayName="FontAwesomeIcon";me.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};var uo=Mn.bind(null,T.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const mo={prefix:"fas",iconName:"compass",icon:[512,512,[129517],"f14e","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},po={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"]},ho={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},go={prefix:"fas",iconName:"earth-americas",icon:[512,512,[127758,"earth","earth-america","globe-americas"],"f57d","M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},yo=go,bo={prefix:"fas",iconName:"map",icon:[576,512,[128506,62072],"f279","M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z"]},vo=({id:t})=>{const e=[bo,po,mo,ho,yo],n=e[Math.floor(Math.random()*e.length)];return m.jsx("div",{children:m.jsx("table",{style:{width:"100%",borderCollapse:"collapse"},children:m.jsx("tbody",{children:m.jsxs("tr",{children:[m.jsx("td",{style:{width:"20%",padding:"1rem",verticalAlign:"middle",textAlign:"center"},children:m.jsx(me,{icon:n,size:"3x"})}),m.jsx("td",{style:{width:"80%",padding:"1rem"},children:m.jsx("table",{style:{width:"100%"},children:m.jsxs("tbody",{children:[m.jsx("tr",{children:m.jsxs("td",{children:[m.jsx("strong",{children:"Name: "}),m.jsx("slot",{name:"mapNameSlot"})]})}),m.jsx("tr",{children:m.jsxs("td",{children:[m.jsx("strong",{children:"Description: "}),m.jsx("slot",{name:"mapDescSlot"})]})})]})})})]})})})},t)};class xo extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._root=H.createRoot(this._shadow),this._root.render(m.jsx(T.StrictMode,{children:m.jsx(Yn,{id:this.getAttribute("id")})}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}class Ao extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._root=H.createRoot(this._shadow),this._root.render(m.jsx(T.StrictMode,{children:m.jsx(Hn,{isEditMode:this.getAttribute("isEditMode")})}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}class So extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._root=H.createRoot(this._shadow),this._root.render(m.jsx(T.StrictMode,{children:m.jsx($n,{})}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}class Eo extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._root=H.createRoot(this._shadow),this._root.render(m.jsx(T.StrictMode,{children:m.jsx(Gn,{})}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}class wo extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._root=H.createRoot(this._shadow),this._root.render(m.jsx(T.StrictMode,{children:m.jsx(qn,{})}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}class _o extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._root=H.createRoot(this._shadow),this._root.render(m.jsx(T.StrictMode,{children:m.jsx(Xn,{isEditMode:this.getAttribute("isEditMode"),id:this.getAttribute("id"),bgImageId:this.getAttribute("bgImageId")},this.getAttribute("id"))}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}class ko extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._root=H.createRoot(this._shadow),this._root.render(m.jsx(T.StrictMode,{children:m.jsx(vo,{id:this.getAttribute("id")})}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}const Pt="acet-idprops",Ct="acet-mode-display",It="acet-liferay-on",Tt="acet-liferay-fire",Nt="acet-single-slot",Mt="acet-mapping-slots",Lt="acet-mapping-display";customElements.get(Pt)?console.log(`Skipping registration for <${Pt}> (already registered)`):customElements.define(Pt,xo);customElements.get(Ct)?console.log(`Skipping registration for <${Ct}> (already registered)`):customElements.define(Ct,Ao);customElements.get(It)?console.log(`Skipping registration for <${It}> (already registered)`):customElements.define(It,So);customElements.get(Tt)?console.log(`Skipping registration for <${Tt}> (already registered)`):customElements.define(Tt,Eo);customElements.get(Nt)?console.log(`Skipping registration for <${Nt}> (already registered)`):customElements.define(Nt,wo);customElements.get(Mt)?console.log(`Skipping registration for <${Mt}> (already registered)`):customElements.define(Mt,_o);customElements.get(Lt)?console.log(`Skipping registration for <${Lt}> (already registered)`):customElements.define(Lt,ko);
