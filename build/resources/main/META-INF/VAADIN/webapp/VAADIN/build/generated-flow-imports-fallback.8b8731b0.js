import{c as B1,D as Ja,t as Gi,w as vt,m as $i,p as Vd,d as tr,P as jd,F as ue,E as G1,b as Ud,f as Wd,l as wr,r as Yd,a as f0,g as qd,e as Hd,h as Xd,O as Zd,i as Kd,s as Qd,j as Jd,k as Y,n as Y0,o as tu,M as eu,q as V,u as iu,v as fa,x as au,y as qn,z as ru,A as nu,B as su,C as q0,K as H0,G as X0,H as rt,I as Qe,J as $1,L as ou,N as V1,Q as Z0,R as er,S as li,T as j1,U as An,V as U1,W as wn,X as En,Y as ir,Z as Cn,_ as hu,$ as W1,a0 as ar,a1 as K0,a2 as Y1,a3 as q1,a4 as H1,a5 as X1,a6 as lu,a7 as Z1,a8 as Q0,a9 as J0,aa as ts,ab as cu,ac as Er,ad as es,ae as Ra,af as du,ag as uu,ah as vu,ai as pu,aj as fu,ak as gu,al as mu,am as K1,an as _u,ao as yu,ap as Mu,aq as Q1,ar as bu,as as J1,at as zu,au as xu,av as Au,aw as wu,ax as Eu,ay as Cu,az as is,aA as Iu,aB as Su,aC as Tu,aD as Ru,aE as Ou,aF as Pu,aG as Lu,aH as ku,aI as Fu,aJ as Hn,aK as Du,aL as Nu,aM as Bu}from"./generated-flow-imports.2fbe5ef1.js";import{i as O,r as R,T as X,a as as,c as tl,t as el,A as Gu}from"./indexhtml.d30d7242.js";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const In=!(window.ShadyDOM&&window.ShadyDOM.inUse);let Kr;function qs(i){i&&i.shimcssproperties?Kr=!1:Kr=In||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let Na;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(Na=window.ShadyCSS.cssBuild);const il=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?Kr=window.ShadyCSS.nativeCss:window.ShadyCSS?(qs(window.ShadyCSS),window.ShadyCSS=void 0):qs(window.WebComponents&&window.WebComponents.flags);const rs=Kr;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Hs{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function al(i){return i=$u(i),rl(Vu(i),i)}function $u(i){return i.replace(ze.comments,"").replace(ze.port,"")}function Vu(i){let t=new Hs;t.start=0,t.end=i.length;let e=t;for(let a=0,r=i.length;a<r;a++)if(i[a]===sl){e.rules||(e.rules=[]);let n=e,s=n.rules[n.rules.length-1]||null;e=new Hs,e.start=a+1,e.parent=n,e.previous=s,n.rules.push(e)}else i[a]===ol&&(e.end=a+1,e=e.parent||t);return t}function rl(i,t){let e=t.substring(i.start,i.end-1);if(i.parsedCssText=i.cssText=e.trim(),i.parent){let r=i.previous?i.previous.end:i.parent.start;e=t.substring(r,i.start-1),e=ju(e),e=e.replace(ze.multipleSpaces," "),e=e.substring(e.lastIndexOf(";")+1);let n=i.parsedSelector=i.selector=e.trim();i.atRule=n.indexOf(Xu)===0,i.atRule?n.indexOf(Hu)===0?i.type=Be.MEDIA_RULE:n.match(ze.keyframesRule)&&(i.type=Be.KEYFRAMES_RULE,i.keyframesName=i.selector.split(ze.multipleSpaces).pop()):n.indexOf(hl)===0?i.type=Be.MIXIN_RULE:i.type=Be.STYLE_RULE}let a=i.rules;if(a)for(let r=0,n=a.length,s;r<n&&(s=a[r]);r++)rl(s,t);return i}function ju(i){return i.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t})}function nl(i,t,e=""){let a="";if(i.cssText||i.rules){let r=i.rules;if(r&&!Uu(r))for(let n=0,s=r.length,o;n<s&&(o=r[n]);n++)a=nl(o,t,a);else a=t?i.cssText:Wu(i.cssText),a=a.trim(),a&&(a="  "+a+`
`)}return a&&(i.selector&&(e+=i.selector+" "+sl+`
`),e+=a,i.selector&&(e+=ol+`

`)),e}function Uu(i){let t=i[0];return Boolean(t)&&Boolean(t.selector)&&t.selector.indexOf(hl)===0}function Wu(i){return i=Yu(i),qu(i)}function Yu(i){return i.replace(ze.customProp,"").replace(ze.mixinProp,"")}function qu(i){return i.replace(ze.mixinApply,"").replace(ze.varApply,"")}const Be={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},sl="{",ol="}",ze={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},hl="--",Hu="@media",Xu="@";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const g0=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Qr=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Zu=/@media\s(.*)/;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xs=new Set,Ku="shady-unscoped";function Qu(i){const t=i.textContent;if(!Xs.has(t)){Xs.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function Ju(i){return i.hasAttribute(Ku)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function m0(i,t){return i?(typeof i=="string"&&(i=al(i)),t&&Oa(i,t),nl(i,rs)):""}function Zs(i){return!i.__cssRules&&i.textContent&&(i.__cssRules=al(i.textContent)),i.__cssRules||null}function Oa(i,t,e,a){if(!i)return;let r=!1,n=i.type;if(a&&n===Be.MEDIA_RULE){let o=i.selector.match(Zu);o&&(window.matchMedia(o[1]).matches||(r=!0))}n===Be.STYLE_RULE?t(i):e&&n===Be.KEYFRAMES_RULE?e(i):n===Be.MIXIN_RULE&&(r=!0);let s=i.rules;if(s&&!r)for(let o=0,h=s.length,l;o<h&&(l=s[o]);o++)Oa(l,t,e,a)}function tv(i,t){let e=0;for(let a=t,r=i.length;a<r;a++)if(i[a]==="(")e++;else if(i[a]===")"&&--e===0)return a;return-1}function ll(i,t){let e=i.indexOf("var(");if(e===-1)return t(i,"","","");let a=tv(i,e+3),r=i.substring(e+4,a),n=i.substring(0,e),s=ll(i.substring(a+1),t),o=r.indexOf(",");if(o===-1)return t(n,r.trim(),"",s);let h=r.substring(0,o).trim(),l=r.substring(o+1).trim();return t(n,h,l,s)}window.ShadyDOM&&window.ShadyDOM.wrap;function ev(i){let t=i.localName,e="",a="";return t?t.indexOf("-")>-1?e=t:(a=t,e=i.getAttribute&&i.getAttribute("is")||""):(e=i.is,a=i.extends),{is:e,typeExtension:a}}function iv(i){const t=[],e=i.querySelectorAll("style");for(let a=0;a<e.length;a++){const r=e[a];Ju(r)?In||(Qu(r),r.parentNode.removeChild(r)):(t.push(r.textContent),r.parentNode.removeChild(r))}return t.join("").trim()}const cl="css-build";function av(i){if(Na!==void 0)return Na;if(i.__cssBuild===void 0){const t=i.getAttribute(cl);if(t)i.__cssBuild=t;else{const e=rv(i);e!==""&&nv(i),i.__cssBuild=e}}return i.__cssBuild||""}function Ks(i){return av(i)!==""}function rv(i){const t=i.localName==="template"?i.content.firstChild:i.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===cl)return e[1]}return""}function nv(i){const t=i.localName==="template"?i.content.firstChild:i.firstChild;t.parentNode.removeChild(t)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function _0(i,t){for(let e in t)e===null?i.style.removeProperty(e):i.style.setProperty(e,t[e])}function dl(i,t){const e=window.getComputedStyle(i).getPropertyValue(t);return e?e.trim():""}function sv(i){const t=Qr.test(i)||g0.test(i);return Qr.lastIndex=0,g0.lastIndex=0,t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ov=/;\s*/m,hv=/^\s*(initial)|(inherit)\s*$/,Qs=/\s*!important/,y0="_-_";class lv{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let Jr=null;class Rt{constructor(){this._currentElement=null,this._measureElement=null,this._map=new lv}detectMixin(t){return sv(t)}gatherStyles(t){const e=iv(t.content);if(e){const a=document.createElement("style");return a.textContent=e,t.content.insertBefore(a,t.content.firstChild),a}return null}transformTemplate(t,e){t._gatheredStyle===void 0&&(t._gatheredStyle=this.gatherStyles(t));const a=t._gatheredStyle;return a?this.transformStyle(a,e):null}transformStyle(t,e=""){let a=Zs(t);return this.transformRules(a,e),t.textContent=m0(a),a}transformCustomStyle(t){let e=Zs(t);return Oa(e,a=>{a.selector===":root"&&(a.selector="html"),this.transformRule(a)}),t.textContent=m0(e),e}transformRules(t,e){this._currentElement=e,Oa(t,a=>{this.transformRule(a)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),t.selector===":root"&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(g0,(a,r,n,s)=>this._produceCssProperties(a,r,n,s,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const a={};let r=!1;return Oa(e,n=>{r=r||n===t,!r&&n.selector===t.selector&&Object.assign(a,this._cssTextToMap(n.parsedCssText))}),a}_consumeCssProperties(t,e){let a=null;for(;a=Qr.exec(t);){let r=a[0],n=a[1],s=a.index,o=s+r.indexOf("@apply"),h=s+r.length,l=t.slice(0,o),c=t.slice(h),d=e?this._fallbacksFromPreviousRules(e):{};Object.assign(d,this._cssTextToMap(l));let u=this._atApplyToCssProperties(n,d);t=`${l}${u}${c}`,Qr.lastIndex=s+u.length}return t}_atApplyToCssProperties(t,e){t=t.replace(ov,"");let a=[],r=this._map.get(t);if(r||(this._map.set(t,{}),r=this._map.get(t)),r){this._currentElement&&(r.dependants[this._currentElement]=!0);let n,s,o;const h=r.properties;for(n in h)o=e&&e[n],s=[n,": var(",t,y0,n],o&&s.push(",",o.replace(Qs,"")),s.push(")"),Qs.test(h[n])&&s.push(" !important"),a.push(s.join(""))}return a.join("; ")}_replaceInitialOrInherit(t,e){let a=hv.exec(e);return a&&(a[1]?e=this._getInitialValueForProperty(t):e="apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let a=t.split(";"),r,n,s={};for(let o=0,h,l;o<a.length;o++)h=a[o],h&&(l=h.split(":"),l.length>1&&(r=l[0].trim(),n=l.slice(1).join(":"),e&&(n=this._replaceInitialOrInherit(r,n)),s[r]=n));return s}_invalidateMixinEntry(t){if(!!Jr)for(let e in t.dependants)e!==this._currentElement&&Jr(e)}_produceCssProperties(t,e,a,r,n){if(a&&ll(a,(g,m)=>{m&&this._map.get(m)&&(r=`@apply ${m};`)}),!r)return t;let s=this._consumeCssProperties(""+r,n),o=t.slice(0,t.indexOf("--")),h=this._cssTextToMap(s,!0),l=h,c=this._map.get(e),d=c&&c.properties;d?l=Object.assign(Object.create(d),h):this._map.set(e,l);let u=[],v,p,f=!1;for(v in l)p=h[v],p===void 0&&(p="initial"),d&&!(v in d)&&(f=!0),u.push(`${e}${y0}${v}: ${p}`);return f&&this._invalidateMixinEntry(c),c&&(c.properties=l),a&&(o=`${t};${o}`),`${o}${u.join("; ")};`}}Rt.prototype.detectMixin=Rt.prototype.detectMixin;Rt.prototype.transformStyle=Rt.prototype.transformStyle;Rt.prototype.transformCustomStyle=Rt.prototype.transformCustomStyle;Rt.prototype.transformRules=Rt.prototype.transformRules;Rt.prototype.transformRule=Rt.prototype.transformRule;Rt.prototype.transformTemplate=Rt.prototype.transformTemplate;Rt.prototype._separator=y0;Object.defineProperty(Rt.prototype,"invalidCallback",{get(){return Jr},set(i){Jr=i}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const M0={};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const tn="_applyShimCurrentVersion",qi="_applyShimNextVersion",en="_applyShimValidatingVersion",cv=Promise.resolve();function dv(i){let t=M0[i];t&&uv(t)}function uv(i){i[tn]=i[tn]||0,i[en]=i[en]||0,i[qi]=(i[qi]||0)+1}function ul(i){return i[tn]===i[qi]}function vv(i){return!ul(i)&&i[en]===i[qi]}function pv(i){i[en]=i[qi],i._validating||(i._validating=!0,cv.then(function(){i[tn]=i[qi],i._validating=!1}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Xn=null,Js=window.HTMLImports&&window.HTMLImports.whenReady||null,Zn;function to(i){requestAnimationFrame(function(){Js?Js(i):(Xn||(Xn=new Promise(t=>{Zn=t}),document.readyState==="complete"?Zn():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&Zn()})),Xn.then(function(){i&&i()}))})}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const eo="__seenByShadyCSS",Cr="__shadyCSSCachedStyle";let an=null,Pa=null;class He{constructor(){this.customStyles=[],this.enqueued=!1,to(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!Pa||(this.enqueued=!0,to(Pa))}addCustomStyle(t){t[eo]||(t[eo]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[Cr])return t[Cr];let e;return t.getStyle?e=t.getStyle():e=t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const a=t[e];if(a[Cr])continue;const r=this.getStyleForCustomStyle(a);if(r){const n=r.__appliedElement||r;an&&an(n),a[Cr]=n}}return t}}He.prototype.addCustomStyle=He.prototype.addCustomStyle;He.prototype.getStyleForCustomStyle=He.prototype.getStyleForCustomStyle;He.prototype.processStyles=He.prototype.processStyles;Object.defineProperties(He.prototype,{transformCallback:{get(){return an},set(i){an=i}},validateCallback:{get(){return Pa},set(i){let t=!1;Pa||(t=!0),Pa=i,t&&this.enqueueDocumentValidation()}}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const xa=new Rt;class fv{constructor(){this.customStyleInterface=null,xa.invalidCallback=dv}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{xa.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),Ks(t))return;M0[e]=t;let a=xa.transformTemplate(t,e);t._styleAst=a}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(!!this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let a=t[e],r=this.customStyleInterface.getStyleForCustomStyle(a);r&&xa.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&_0(t,e),t.shadowRoot){this.styleElement(t);let a=t.shadowRoot.children||t.shadowRoot.childNodes;for(let r=0;r<a.length;r++)this.styleSubtree(a[r])}else{let a=t.children||t.childNodes;for(let r=0;r<a.length;r++)this.styleSubtree(a[r])}}styleElement(t){this.ensure();let{is:e}=ev(t),a=M0[e];if(!(a&&Ks(a))&&a&&!ul(a)){vv(a)||(this.prepareTemplate(a,e),pv(a));let r=t.shadowRoot;if(r){let n=r.querySelector("style");n&&(n.__cssRules=a._styleAst,n.textContent=m0(a._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const i=new fv;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,a,r){i.flushCustomStyles(),i.prepareTemplate(e,a)},prepareTemplateStyles(e,a,r){window.ShadyCSS.prepareTemplate(e,a,r)},prepareTemplateDom(e,a){},styleSubtree(e,a){i.flushCustomStyles(),i.styleSubtree(e,a)},styleElement(e){i.flushCustomStyles(),i.styleElement(e)},styleDocument(e){i.flushCustomStyles(),i.styleDocument(e)},getComputedStyleValue(e,a){return dl(e,a)},flushCustomStyles(){i.flushCustomStyles()},nativeCss:rs,nativeShadow:In,cssBuild:Na,disableRuntime:il},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=xa;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ns=typeof document.head.style.touchAction=="string",rn="__polymerGestures",Vr="__polymerGesturesHandled",b0="__polymerGesturesTouchAction",io=25,ao=5,gv=2,mv=2500,vl=["mousedown","mousemove","mouseup","click"],_v=[0,1,4,2],yv=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function ss(i){return vl.indexOf(i)>-1}let os=!1;(function(){try{let i=Object.defineProperty({},"passive",{get(){os=!0}});window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch{}})();function pl(i){if(!(ss(i)||i==="touchend")&&ns&&os&&Vd)return{passive:!0}}let fl=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const z0=[],Mv={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},bv={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function zv(i){return Mv[i.localName]||!1}function xv(i){let t=Array.prototype.slice.call(i.labels||[]);if(!t.length){t=[];try{let e=i.getRootNode();if(i.id){let a=e.querySelectorAll(`label[for = '${i.id}']`);for(let r=0;r<a.length;r++)t.push(a[r])}}catch{}}return t}let ro=function(i){let t=i.sourceCapabilities;if(!(t&&!t.firesTouchEvents)&&(i[Vr]={skip:!0},i.type==="click")){let e=!1,a=Sn(i);for(let r=0;r<a.length;r++){if(a[r].nodeType===Node.ELEMENT_NODE){if(a[r].localName==="label")z0.push(a[r]);else if(zv(a[r])){let n=xv(a[r]);for(let s=0;s<n.length;s++)e=e||z0.indexOf(n[s])>-1}}if(a[r]===At.mouse.target)return}if(e)return;i.preventDefault(),i.stopPropagation()}};function no(i){let t=fl?["click"]:vl;for(let e=0,a;e<t.length;e++)a=t[e],i?(z0.length=0,document.addEventListener(a,ro,!0)):document.removeEventListener(a,ro,!0)}function Av(i){if(!B1)return;At.mouse.mouseIgnoreJob||no(!0);let t=function(){no(),At.mouse.target=null,At.mouse.mouseIgnoreJob=null};At.mouse.target=Sn(i)[0],At.mouse.mouseIgnoreJob=Ja.debounce(At.mouse.mouseIgnoreJob,Gi.after(mv),t)}function ci(i){let t=i.type;if(!ss(t))return!1;if(t==="mousemove"){let e=i.buttons===void 0?1:i.buttons;return i instanceof window.MouseEvent&&!yv&&(e=_v[i.which]||0),Boolean(e&1)}else return(i.button===void 0?0:i.button)===0}function wv(i){if(i.type==="click"){if(i.detail===0)return!0;let t=We(i);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let e=t.getBoundingClientRect(),a=i.pageX,r=i.pageY;return!(a>=e.left&&a<=e.right&&r>=e.top&&r<=e.bottom)}return!1}let At={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Ev(i){let t="auto",e=Sn(i);for(let a=0,r;a<e.length;a++)if(r=e[a],r[b0]){t=r[b0];break}return t}function gl(i,t,e){i.movefn=t,i.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function Vi(i){document.removeEventListener("mousemove",i.movefn),document.removeEventListener("mouseup",i.upfn),i.movefn=null,i.upfn=null}B1&&document.addEventListener("touchend",Av,os?{passive:!0}:!1);const Sn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:i=>i.composedPath&&i.composedPath()||[],rr={},ni=[];function Cv(i,t){let e=document.elementFromPoint(i,t),a=e;for(;a&&a.shadowRoot&&!window.ShadyDOM;){let r=a;if(a=a.shadowRoot.elementFromPoint(i,t),r===a)break;a&&(e=a)}return e}function We(i){const t=Sn(i);return t.length>0?t[0]:i.target}function ml(i){let t,e=i.type,r=i.currentTarget[rn];if(!r)return;let n=r[e];if(!!n){if(!i[Vr]&&(i[Vr]={},e.slice(0,5)==="touch")){i=i;let s=i.changedTouches[0];if(e==="touchstart"&&i.touches.length===1&&(At.touch.id=s.identifier),At.touch.id!==s.identifier)return;ns||(e==="touchstart"||e==="touchmove")&&Iv(i)}if(t=i[Vr],!t.skip){for(let s=0,o;s<ni.length;s++)o=ni[s],n[o.name]&&!t[o.name]&&o.flow&&o.flow.start.indexOf(i.type)>-1&&o.reset&&o.reset();for(let s=0,o;s<ni.length;s++)o=ni[s],n[o.name]&&!t[o.name]&&(t[o.name]=!0,o[e](i))}}}function Iv(i){let t=i.changedTouches[0],e=i.type;if(e==="touchstart")At.touch.x=t.clientX,At.touch.y=t.clientY,At.touch.scrollDecided=!1;else if(e==="touchmove"){if(At.touch.scrollDecided)return;At.touch.scrollDecided=!0;let a=Ev(i),r=!1,n=Math.abs(At.touch.x-t.clientX),s=Math.abs(At.touch.y-t.clientY);i.cancelable&&(a==="none"?r=!0:a==="pan-x"?r=s>n:a==="pan-y"&&(r=n>s)),r?i.preventDefault():nn("track")}}function Sv(i,t,e){return rr[t]?(Rv(i,t,e),!0):!1}function Tv(i,t,e){return rr[t]?(Ov(i,t,e),!0):!1}function Rv(i,t,e){let a=rr[t],r=a.deps,n=a.name,s=i[rn];s||(i[rn]=s={});for(let o=0,h,l;o<r.length;o++)h=r[o],!(fl&&ss(h)&&h!=="click")&&(l=s[h],l||(s[h]=l={_count:0}),l._count===0&&i.addEventListener(h,ml,pl(h)),l[n]=(l[n]||0)+1,l._count=(l._count||0)+1);i.addEventListener(t,e),a.touchAction&&_l(i,a.touchAction)}function Ov(i,t,e){let a=rr[t],r=a.deps,n=a.name,s=i[rn];if(s)for(let o=0,h,l;o<r.length;o++)h=r[o],l=s[h],l&&l[n]&&(l[n]=(l[n]||1)-1,l._count=(l._count||1)-1,l._count===0&&i.removeEventListener(h,ml,pl(h)));i.removeEventListener(t,e)}function hs(i){ni.push(i);for(let t=0;t<i.emits.length;t++)rr[i.emits[t]]=i}function Pv(i){for(let t=0,e;t<ni.length;t++){e=ni[t];for(let a=0,r;a<e.emits.length;a++)if(r=e.emits[a],r===i)return e}return null}function _l(i,t){ns&&i instanceof HTMLElement&&$i.run(()=>{i.style.touchAction=t}),i[b0]=t}function ls(i,t,e){let a=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(a.detail=e,vt(i).dispatchEvent(a),a.defaultPrevented){let r=e.preventer||e.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function nn(i){let t=Pv(i);t.info&&(t.info.prevent=!0)}hs({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Vi(this.info)},mousedown:function(i){if(!ci(i))return;let t=We(i),e=this,a=function(s){ci(s)||(ga("up",t,s),Vi(e.info))},r=function(s){ci(s)&&ga("up",t,s),Vi(e.info)};gl(this.info,a,r),ga("down",t,i)},touchstart:function(i){ga("down",We(i),i.changedTouches[0],i)},touchend:function(i){ga("up",We(i),i.changedTouches[0],i)}});function ga(i,t,e,a){!t||ls(t,i,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:a,prevent:function(r){return nn(r)}})}hs({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(i){this.moves.length>gv&&this.moves.shift(),this.moves.push(i)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Vi(this.info)},mousedown:function(i){if(!ci(i))return;let t=We(i),e=this,a=function(s){let o=s.clientX,h=s.clientY;so(e.info,o,h)&&(e.info.state=e.info.started?s.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&nn("tap"),e.info.addMove({x:o,y:h}),ci(s)||(e.info.state="end",Vi(e.info)),t&&Kn(e.info,t,s),e.info.started=!0)},r=function(s){e.info.started&&a(s),Vi(e.info)};gl(this.info,a,r),this.info.x=i.clientX,this.info.y=i.clientY},touchstart:function(i){let t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(i){let t=We(i),e=i.changedTouches[0],a=e.clientX,r=e.clientY;so(this.info,a,r)&&(this.info.state==="start"&&nn("tap"),this.info.addMove({x:a,y:r}),Kn(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend:function(i){let t=We(i),e=i.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),Kn(this.info,t,e))}});function so(i,t,e){if(i.prevent)return!1;if(i.started)return!0;let a=Math.abs(i.x-t),r=Math.abs(i.y-e);return a>=ao||r>=ao}function Kn(i,t,e){if(!t)return;let a=i.moves[i.moves.length-2],r=i.moves[i.moves.length-1],n=r.x-i.x,s=r.y-i.y,o,h=0;a&&(o=r.x-a.x,h=r.y-a.y),ls(t,"track",{state:i.state,x:e.clientX,y:e.clientY,dx:n,dy:s,ddx:o,ddy:h,sourceEvent:e,hover:function(){return Cv(e.clientX,e.clientY)}})}hs({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(i){ci(i)&&(this.info.x=i.clientX,this.info.y=i.clientY)},click:function(i){ci(i)&&oo(this.info,i)},touchstart:function(i){const t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(i){oo(this.info,i.changedTouches[0],i)}});function oo(i,t,e){let a=Math.abs(t.clientX-i.x),r=Math.abs(t.clientY-i.y),n=We(e||t);!n||bv[n.localName]&&n.hasAttribute("disabled")||(isNaN(a)||isNaN(r)||a<=io&&r<=io||wv(t))&&(i.prevent||ls(n,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const yl=tr(i=>{class t extends i{_addEventListenerToNode(a,r,n){Sv(a,r,n)||super._addEventListenerToNode(a,r,n)}_removeEventListenerFromNode(a,r,n){Tv(a,r,n)||super._removeEventListenerFromNode(a,r,n)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Lv=/:host\(:dir\((ltr|rtl)\)\)/g,kv=':host([dir="$1"])',Fv=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Dv=':host([dir="$2"]) $1',Nv=/:dir\((?:ltr|rtl)\)/,ho=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),La=[];let ka=null,cs="";function Ml(){cs=document.documentElement.getAttribute("dir")}function bl(i){i.__autoDirOptOut||i.setAttribute("dir",cs)}function zl(){Ml(),cs=document.documentElement.getAttribute("dir");for(let i=0;i<La.length;i++)bl(La[i])}function Bv(){ka&&ka.takeRecords().length&&zl()}const Gv=tr(i=>{ho||ka||(Ml(),ka=new MutationObserver(zl),ka.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=jd(i);class e extends t{static _processStyleText(r,n){return r=t._processStyleText.call(this,r,n),!ho&&Nv.test(r)&&(r=this._replaceDirInCssText(r),this.__activateDir=!0),r}static _replaceDirInCssText(r){let n=r;return n=n.replace(Lv,kv),n=n.replace(Fv,Dv),n}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Bv(),La.push(this),bl(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const r=La.indexOf(this);r>-1&&La.splice(r,1)}}}return e.__activateDir=!1,e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function lo(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?lo():window.addEventListener("DOMContentLoaded",lo);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const xi=Element.prototype,$v=xi.matches||xi.matchesSelector||xi.mozMatchesSelector||xi.msMatchesSelector||xi.oMatchesSelector||xi.webkitMatchesSelector,xl=function(i,t){return $v.call(i,t)};class at{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new ue(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(vt(this.node).contains(t))return!0;let e=t,a=t.ownerDocument;for(;e&&e!==a&&e!==this.node;)e=vt(e).parentNode||vt(e).host;return e===this.node}getOwnerRoot(){return vt(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?vt(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=vt(this.node).assignedSlot;for(;e;)t.push(e),e=vt(e).assignedSlot;return t}importNode(t,e){let a=this.node instanceof Document?this.node:this.node.ownerDocument;return vt(a).importNode(t,e)}getEffectiveChildNodes(){return ue.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),a=[];for(let r=0,n=e.length,s;r<n&&(s=e[r]);r++)s.nodeType===Node.ELEMENT_NODE&&xl(s,t)&&a.push(s);return a}get activeElement(){let t=this.node;return t._activeElement!==void 0?t._activeElement:t.activeElement}}function Vv(i,t){for(let e=0;e<t.length;e++){let a=t[e];i[a]=function(){return this.node[a].apply(this.node,arguments)}}}function co(i,t){for(let e=0;e<t.length;e++){let a=t[e];Object.defineProperty(i,a,{get:function(){return this.node[a]},configurable:!0})}}function jv(i,t){for(let e=0;e<t.length;e++){let a=t[e];Object.defineProperty(i,a,{get:function(){return this.node[a]},set:function(r){this.node[a]=r},configurable:!0})}}class x0{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}at.prototype.cloneNode;at.prototype.appendChild;at.prototype.insertBefore;at.prototype.removeChild;at.prototype.replaceChild;at.prototype.setAttribute;at.prototype.removeAttribute;at.prototype.querySelector;at.prototype.querySelectorAll;at.prototype.parentNode;at.prototype.firstChild;at.prototype.lastChild;at.prototype.nextSibling;at.prototype.previousSibling;at.prototype.firstElementChild;at.prototype.lastElementChild;at.prototype.nextElementSibling;at.prototype.previousElementSibling;at.prototype.childNodes;at.prototype.children;at.prototype.classList;at.prototype.textContent;at.prototype.innerHTML;let A0=at;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class i extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(at.prototype).forEach(t=>{t!="activeElement"&&(i.prototype[t]=at.prototype[t])}),co(i.prototype,["classList"]),A0=i,Object.defineProperties(x0.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&St(t).getOwnerRoot(),a=this.path;for(let r=0;r<a.length;r++){const n=a[r];if(St(n).getOwnerRoot()===e)return n}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else Vv(at.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),co(at.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),jv(at.prototype,["textContent","innerHTML","className"]);const St=function(i){if(i=i||document,i instanceof A0||i instanceof x0)return i;let t=i.__domApi;return t||(i instanceof Event?t=new x0(i):t=new A0(i),i.__domApi=t),t};/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Qn=window.ShadyDOM,uo=window.ShadyCSS;function vo(i,t){return vt(i).getRootNode()===t}function Uv(i,t=!1){if(!Qn||!uo||!Qn.handlesDynamicScoping)return null;const e=uo.ScopingShim;if(!e)return null;const a=e.scopeForNode(i),r=vt(i).getRootNode(),n=s=>{if(!vo(s,r))return;const o=Array.from(Qn.nativeMethods.querySelectorAll.call(s,"*"));o.push(s);for(let h=0;h<o.length;h++){const l=o[h];if(!vo(l,r))continue;const c=e.currentScopeForNode(l);c!==a&&(c!==""&&e.unscopeNode(l,c),e.scopeNode(l,a))}};if(n(i),t){const s=new MutationObserver(o=>{for(let h=0;h<o.length;h++){const l=o[h];for(let c=0;c<l.addedNodes.length;c++){const d=l.addedNodes[c];d.nodeType===Node.ELEMENT_NODE&&n(d)}}});return s.observe(i,{childList:!0,subtree:!0}),s}else return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ir="disable-upgrade";let Wv=window.ShadyCSS;const Al=tr(i=>{const t=yl(G1(i)),e=Ud?t:Gv(t),a=Wd(e),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(o,h,l){(this.__dataAttributes&&this.__dataAttributes[o]||o===Ir)&&this.attributeChangedCallback(o,h,l,null)}setAttribute(o,h){if(wr&&!this._legacyForceObservedAttributes){const l=this.getAttribute(o);super.setAttribute(o,h),this.__attributeReaction(o,l,String(h))}else super.setAttribute(o,h)}removeAttribute(o){if(wr&&!this._legacyForceObservedAttributes){const h=this.getAttribute(o);super.removeAttribute(o),this.__attributeReaction(o,h,null)}else super.removeAttribute(o)}static get observedAttributes(){return wr&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],Yd(this.prototype)),this.__observedAttributes):a.call(this).concat(Ir)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(o){return super._canApplyPropertyDefault(o)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(o))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(o,h,l,c){h!==l&&(o==Ir?this.__isUpgradeDisabled&&l==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,vt(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(o,h,l,c),this.attributeChanged(o,h,l)))}attributeChanged(o,h,l){}_initializeProperties(){if(f0&&this.hasAttribute(Ir))this.__isUpgradeDisabled=!0;else{let o=Object.getPrototypeOf(this);o.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",o))||(this._registered(),o.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),wr&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const o=this.attributes;for(let h=0,l=o.length;h<l;h++){const c=o[h];this.__attributeReaction(c.name,null,c.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(o){return this._serializeValue(o)}deserialize(o,h){return this._deserializeValue(o,h)}reflectPropertyToAttribute(o,h,l){this._propertyToAttribute(o,h,l)}serializeValueToAttribute(o,h,l){this._valueToNodeAttribute(l||this,o,h)}extend(o,h){if(!(o&&h))return o||h;let l=Object.getOwnPropertyNames(h);for(let c=0,d;c<l.length&&(d=l[c]);c++){let u=Object.getOwnPropertyDescriptor(h,d);u&&Object.defineProperty(o,d,u)}return o}mixin(o,h){for(let l in h)o[l]=h[l];return o}chainObject(o,h){return o&&h&&o!==h&&(o.__proto__=h),o}instanceTemplate(o){let h=this.constructor._contentForTemplate(o);return document.importNode(h,!0)}fire(o,h,l){l=l||{},h=h==null?{}:h;let c=new Event(o,{bubbles:l.bubbles===void 0?!0:l.bubbles,cancelable:Boolean(l.cancelable),composed:l.composed===void 0?!0:l.composed});c.detail=h;let d=l.node||this;return vt(d).dispatchEvent(c),c}listen(o,h,l){o=o||this;let c=this.__boundListeners||(this.__boundListeners=new WeakMap),d=c.get(o);d||(d={},c.set(o,d));let u=h+l;d[u]||(d[u]=this._addMethodEventListenerToNode(o,h,l,this))}unlisten(o,h,l){o=o||this;let c=this.__boundListeners&&this.__boundListeners.get(o),d=h+l,u=c&&c[d];u&&(this._removeEventListenerFromNode(o,h,u),c[d]=null)}setScrollDirection(o,h){_l(h||this,r[o]||"auto")}$$(o){return this.root.querySelector(o)}get domHost(){let o=vt(this).getRootNode();return o instanceof DocumentFragment?o.host:o}distributeContent(){const h=St(this);window.ShadyDOM&&h.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return St(this).getEffectiveChildNodes()}queryDistributedElements(o){return St(this).queryDistributedElements(o)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(h){return h.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let o=this.getEffectiveChildNodes(),h=[];for(let l=0,c;c=o[l];l++)c.nodeType!==Node.COMMENT_NODE&&h.push(c.textContent);return h.join("")}queryEffectiveChildren(o){let h=this.queryDistributedElements(o);return h&&h[0]}queryAllEffectiveChildren(o){return this.queryDistributedElements(o)}getContentChildNodes(o){let h=this.root.querySelector(o||"slot");return h?St(h).getDistributedNodes():[]}getContentChildren(o){return this.getContentChildNodes(o).filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}isLightDescendant(o){const h=this;return h!==o&&vt(h).contains(o)&&vt(h).getRootNode()===vt(o).getRootNode()}isLocalDescendant(o){return this.root===vt(o).getRootNode()}scopeSubtree(o,h=!1){return Uv(o,h)}getComputedStyleValue(o){return Wv.getComputedStyleValue(this,o)}debounce(o,h,l){return this._debouncers=this._debouncers||{},this._debouncers[o]=Ja.debounce(this._debouncers[o],l>0?Gi.after(l):$i,h.bind(this))}isDebouncerActive(o){this._debouncers=this._debouncers||{};let h=this._debouncers[o];return!!(h&&h.isActive())}flushDebouncer(o){this._debouncers=this._debouncers||{};let h=this._debouncers[o];h&&h.flush()}cancelDebouncer(o){this._debouncers=this._debouncers||{};let h=this._debouncers[o];h&&h.cancel()}async(o,h){return h>0?Gi.run(o.bind(this),h):~$i.run(o.bind(this))}cancelAsync(o){o<0?$i.cancel(~o):Gi.cancel(o)}create(o,h){let l=document.createElement(o);if(h)if(l.setProperties)l.setProperties(h);else for(let c in h)l[c]=h[c];return l}elementMatches(o,h){return xl(h||this,o)}toggleAttribute(o,h){let l=this;return arguments.length===3&&(l=arguments[2]),arguments.length==1&&(h=!l.hasAttribute(o)),h?(vt(l).setAttribute(o,""),!0):(vt(l).removeAttribute(o),!1)}toggleClass(o,h,l){l=l||this,arguments.length==1&&(h=!l.classList.contains(o)),h?l.classList.add(o):l.classList.remove(o)}transform(o,h){h=h||this,h.style.webkitTransform=o,h.style.transform=o}translate3d(o,h,l,c){c=c||this,this.transform("translate3d("+o+","+h+","+l+")",c)}arrayDelete(o,h){let l;if(Array.isArray(o)){if(l=o.indexOf(h),l>=0)return o.splice(l,1)}else if(l=qd(this,o).indexOf(h),l>=0)return this.splice(o,l,1);return null}_logger(o,h){switch(Array.isArray(h)&&h.length===1&&Array.isArray(h[0])&&(h=h[0]),o){case"log":case"warn":case"error":console[o](...h)}}_log(...o){this._logger("log",o)}_warn(...o){this._logger("warn",o)}_error(...o){this._logger("error",o)}_logf(o,...h){return["[%s::%s]",this.is,o,...h]}}return n.prototype.is="",n});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Yv={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},wl={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},qv=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},wl);function Hv(i,t,e){const a=i._noAccessors,r=Object.getOwnPropertyNames(i);for(let n=0;n<r.length;n++){let s=r[n];if(!(s in e))if(a)t[s]=i[s];else{let o=Object.getOwnPropertyDescriptor(i,s);o&&(o.configurable=!0,Object.defineProperty(t,s,o))}}}function Xv(i,t,e){for(let a=0;a<t.length;a++)El(i,t[a],e,qv)}function El(i,t,e,a){Hv(t,i,a);for(let r in Yv)t[r]&&(e[r]=e[r]||[],e[r].push(t[r]))}function Cl(i,t,e){t=t||[];for(let a=i.length-1;a>=0;a--){let r=i[a];r?Array.isArray(r)?Cl(r,t):t.indexOf(r)<0&&(!e||e.indexOf(r)<0)&&t.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return t}function po(i,t){for(const e in t){const a=i[e],r=t[e];!("value"in r)&&a&&"value"in a?i[e]=Object.assign({value:a.value},r):i[e]=r}}const fo=Al(HTMLElement);function Zv(i,t,e){let a;const r={};class n extends t{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))t._finalizeClass.call(this);else{if(a)for(let h=0,l;h<a.length;h++)l=a[h],l.properties&&this.createProperties(l.properties),l.observers&&this.createObservers(l.observers,l.properties);i.properties&&this.createProperties(i.properties),i.observers&&this.createObservers(i.observers,i.properties),this._prepareTemplate()}}static get properties(){const h={};if(a)for(let l=0;l<a.length;l++)po(h,a[l].properties);return po(h,i.properties),h}static get observers(){let h=[];if(a)for(let l=0,c;l<a.length;l++)c=a[l],c.observers&&(h=h.concat(c.observers));return i.observers&&(h=h.concat(i.observers)),h}created(){super.created();const h=r.created;if(h)for(let l=0;l<h.length;l++)h[l].call(this)}_registered(){const h=n.prototype;if(!h.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",h))){h.__hasRegisterFinished=!0,super._registered(),f0&&s(h);const l=Object.getPrototypeOf(this);let c=r.beforeRegister;if(c)for(let d=0;d<c.length;d++)c[d].call(l);if(c=r.registered,c)for(let d=0;d<c.length;d++)c[d].call(l)}}_applyListeners(){super._applyListeners();const h=r.listeners;if(h)for(let l=0;l<h.length;l++){const c=h[l];if(c)for(let d in c)this._addMethodEventListenerToNode(this,d,c[d])}}_ensureAttributes(){const h=r.hostAttributes;if(h)for(let l=h.length-1;l>=0;l--){const c=h[l];for(let d in c)this._ensureAttribute(d,c[d])}super._ensureAttributes()}ready(){super.ready();let h=r.ready;if(h)for(let l=0;l<h.length;l++)h[l].call(this)}attached(){super.attached();let h=r.attached;if(h)for(let l=0;l<h.length;l++)h[l].call(this)}detached(){super.detached();let h=r.detached;if(h)for(let l=0;l<h.length;l++)h[l].call(this)}attributeChanged(h,l,c){super.attributeChanged();let d=r.attributeChanged;if(d)for(let u=0;u<d.length;u++)d[u].call(this,h,l,c)}}if(e){Array.isArray(e)||(e=[e]);let o=t.prototype.behaviors;a=Cl(e,null,o),n.prototype.behaviors=o?o.concat(e):a}const s=o=>{a&&Xv(o,a,r),El(o,i,r,wl)};return f0||s(n.prototype),n.generatedFrom=i,n}const Kv=function(i,t){i||console.warn("Polymer.Class requires `info` argument");let e=t?t(fo):fo;return e=Zv(i,e,i.behaviors),e.is=e.prototype.is=i.is,e};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const nr=function(i){let t;return typeof i=="function"?t=i:t=nr.Class(i),i._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=i._legacyForceObservedAttributes),customElements.define(t.is,t),t};nr.Class=Kv;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Qv={templatize(i,t){this._templatizerTemplate=i,this.ctor=Hd(i,this,{mutableData:Boolean(t),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(i){return new this.ctor(i)},modelForElement(i){return Xd(this._templatizerTemplate,i)}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Jv=yl(Zd(Kd(HTMLElement)));class t2 extends Jv{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),Qd)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,a,r){this.mutableData=!0}connectedCallback(){Jd()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){vt(vt(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),t)e.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});e.observe(this,{childList:!0});return}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",t2);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let e2=tr(i=>{let t=G1(i);class e extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(r,n){let s=n.path;if(s==JSCompiler_renameProperty("items",this)){let o=n.base||[],h=this.__lastItems,l=this.__lastMulti;if(r!==l&&this.clearSelection(),h){let c=Y0(o,h);this.__applySplices(c)}this.__lastItems=o,this.__lastMulti=r}else if(n.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(n.value.indexSplices);else{let o=s.slice(`${JSCompiler_renameProperty("items",this)}.`.length),h=parseInt(o,10);o.indexOf(".")<0&&o==h&&this.__deselectChangedIdx(h)}}__applySplices(r){let n=this.__selectedMap;for(let o=0;o<r.length;o++){let h=r[o];n.forEach((l,c)=>{l<h.index||(l>=h.index+h.removed.length?n.set(c,l+h.addedCount-h.removed.length):n.set(c,-1))});for(let l=0;l<h.addedCount;l++){let c=h.index+l;n.has(this.items[c])&&n.set(this.items[c],c)}}this.__updateLinks();let s=0;n.forEach((o,h)=>{o<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),s,1):this.selected=this.selectedItem=null,n.delete(h)):s++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let r=0;this.__selectedMap.forEach(n=>{n>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${n}`,`${JSCompiler_renameProperty("selected",this)}.${r++}`)})}else this.__selectedMap.forEach(r=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${r}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${r}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(r){return this.__selectedMap.has(r)}isIndexSelected(r){return this.isSelected(this.items[r])}__deselectChangedIdx(r){let n=this.__selectedIndexForItemIndex(r);if(n>=0){let s=0;this.__selectedMap.forEach((o,h)=>{n==s++&&this.deselect(h)})}}__selectedIndexForItemIndex(r){let n=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${r}`];if(n)return parseInt(n.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(r){let n=this.__selectedMap.get(r);if(n>=0){this.__selectedMap.delete(r);let s;this.multi&&(s=this.__selectedIndexForItemIndex(n)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),s,1):this.selected=this.selectedItem=null}}deselectIndex(r){this.deselect(this.items[r])}select(r){this.selectIndex(this.items.indexOf(r))}selectIndex(r){let n=this.items[r];this.isSelected(n)?this.toggle&&this.deselectIndex(r):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(n,r),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),n):this.selected=this.selectedItem=n)}}return e}),i2=e2(Y);class go extends i2{static get is(){return"array-selector"}static get template(){return null}}customElements.define(go.is,go);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const jr=new He;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(i,t,e){},prepareTemplateDom(i,t){},prepareTemplateStyles(i,t,e){},styleSubtree(i,t){jr.processStyles(),_0(i,t)},styleElement(i){jr.processStyles()},styleDocument(i){jr.processStyles(),_0(document.body,i)},getComputedStyleValue(i,t){return dl(i,t)},flushCustomStyles(){},nativeCss:rs,nativeShadow:In,cssBuild:Na,disableRuntime:il});window.ShadyCSS.CustomStyleInterface=jr;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const mo="include",a2=window.ShadyCSS.CustomStyleInterface;class r2 extends HTMLElement{constructor(){super(),this._style=null,a2.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(mo);return e&&(t.removeAttribute(mo),t.textContent=tu(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",r2);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Il;Il=eu._mutablePropertyChange;const n2={properties:{mutableData:Boolean},_shouldPropertyChange(i,t,e){return Il(this,i,t,e,this.mutableData)}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const s2=Al(HTMLElement).prototype;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Sl=V`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Sl.setAttribute("style","display: none;");document.head.appendChild(Sl.content);var Tl=document.createElement("style");Tl.textContent="[hidden] { display: none !important; }";document.head.appendChild(Tl);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class Yt{constructor(t){Yt[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return Yt.types[t]&&Yt.types[t][e]}set value(t){var e=this.type,a=this.key;e&&a&&(e=Yt.types[e]=Yt.types[e]||{},t==null?delete e[a]:e[a]=t)}get list(){var t=this.type;if(t){var e=Yt.types[this.type];return e?Object.keys(e).map(function(a){return o2[this.type][a]},this):[]}}byKey(t){return this.key=t,this.value}}Yt[" "]=function(){};Yt.types={};var o2=Yt.types;nr({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(i,t,e){var a=new Yt({type:i,key:t});return e!==void 0&&e!==a.value?a.value=e:this.value!==a.value&&(this.value=a.value),a},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(i){i&&(this.value=this)},byKey:function(i){return new Yt({type:this.type,key:i}).value}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/nr({_template:V`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:s2.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(i){var t=(i||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(i){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&St(this.root).removeChild(this._img),this._iconName===""?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,St(this.root).appendChild(this._img))}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Sr=new Set;const h2={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Sr.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){!this.isAttached||(this._interestedResizables.forEach(function(i){this.resizerShouldNotify(i)&&this._notifyDescendant(i)},this),this._fireResize())},assignParentResizable:function(i){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=i,i&&i._interestedResizables.indexOf(this)===-1&&(i._interestedResizables.push(this),i._subscribeIronResize(this))},stopResizeNotificationsFor:function(i){var t=this._interestedResizables.indexOf(i);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(i))},_subscribeIronResize:function(i){i.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(i){i.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(i){return!0},_onDescendantIronResize:function(i){if(this._notifyingDescendant){i.stopPropagation();return}iu||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(i){var t=St(i).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),i.stopPropagation())},_parentResizableChanged:function(i){i&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(i){!this.isAttached||(this._notifyingDescendant=!0,i.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(!!this.isAttached)if(document.readyState==="loading"){var i=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function t(){document.removeEventListener("readystatechange",t),i()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(t){t!==this&&t._findParent()},this):(Sr.forEach(function(t){t!==this&&t._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Sr.delete(this):Sr.add(this)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const l2={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(i,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),!!t)if(i==="document")this.scrollTarget=this._doc;else if(typeof i=="string"){var e=this.domHost;this.scrollTarget=e&&e.$?e.$[i]:St(this.ownerDocument).querySelector("#"+i)}else this._isValidScrollTarget()&&(this._oldScrollTarget=i,this._toggleScrollListener(this._shouldHaveListener,i))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(i){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,i):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=i)},set _scrollLeft(i){this.scrollTarget===this._doc?window.scrollTo(i,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i)},scroll:function(i,t){var e;typeof i=="object"?(e=i.left,t=i.top):e=i,e=e||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(e,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(i,t){var e=t===this._doc?window:t;i?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),e.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(e.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(i){this._shouldHaveListener=i,this._toggleScrollListener(i,this.scrollTarget)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var _o=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),c2=_o&&_o[1]>=8,yo=3,Mo="-10000px",ma=-100;nr({_template:V`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[Qv,h2,l2,n2],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var i=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return i-this._viewportHeight},get _itemsParent(){return St(St(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var i=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,i-this._physicalCount)},set _virtualStart(i){i=this._clamp(i,0,this._maxVirtualStart),this.grid&&(i=i-i%this._itemsPerRow),this._virtualStartVal=i},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(i){i=i%this._physicalCount,i<0&&(i=this._physicalCount+i),this.grid&&(i=i-i%this._itemsPerRow),this._physicalStartVal=i},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(i){this._physicalCountVal=i},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var i=this._firstVisibleIndexVal;if(i==null){var t=this._physicalTop+this._scrollOffset;i=this._iterateItems(function(e,a){if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return this.grid?a-a%this._itemsPerRow:a;if(this.grid&&this._virtualCount-1===a)return a-a%this._itemsPerRow})||0,this._firstVisibleIndexVal=i}return i},get lastVisibleIndex(){var i=this._lastVisibleIndexVal;if(i==null){if(this.grid)i=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems(function(e,a){t<this._scrollBottom&&(i=a),t+=this._getPhysicalSizeIncrement(e)})}this._lastVisibleIndexVal=i}return i},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,fa),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(i){this.style.webkitOverflowScrolling=i===this?"touch":"",this.style.overflowY=i===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,fa)},updateViewportBoundaries:function(){var i=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(i["padding-top"],10),this._isRTL=Boolean(i.direction==="rtl"),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var i=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=i-this._scrollPosition,e=t>=0;if(this._scrollPosition=i,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t=t-this._scrollOffset;var a=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+a,this._physicalStart=this._physicalStart+a,this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){var r=this._getReusables(e);e?(this._physicalTop=r.physicalTop,this._virtualStart=this._virtualStart+r.indexes.length,this._physicalStart=this._physicalStart+r.indexes.length):(this._virtualStart=this._virtualStart-r.indexes.length,this._physicalStart=this._physicalStart-r.indexes.length),this._update(r.indexes,e?null:r.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),$i)}},_getReusables:function(i){var t,e,a,r=[],n=this._hiddenContentSize*this._ratio,s=this._virtualStart,o=this._virtualEnd,h=this._physicalCount,l=this._physicalTop+this._scrollOffset,c=this._physicalBottom+this._scrollOffset,d=this._scrollPosition,u=this._scrollBottom;for(i?(t=this._physicalStart,this._physicalEnd,e=d-l):(t=this._physicalEnd,this._physicalStart,e=c-u);a=this._getPhysicalSizeIncrement(t),e=e-a,!(r.length>=h||e<=n);)if(i){if(o+r.length+1>=this._virtualCount||l+a>=d-this._scrollOffset)break;r.push(t),l=l+a,t=(t+1)%h}else{if(s-r.length<=0||l+this._physicalSize-a<=u)break;r.push(t),l=l-a,t=t===0?h-1:t-1}return{indexes:r,physicalTop:l-this._scrollOffset}},_update:function(i,t){if(!(i&&i.length===0||this._physicalCount===0)){if(this._manageFocus(),this._assignModels(i),this._updateMetrics(i),t)for(;t.length;){var e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(i){this._ensureTemplatized();var t,e,a=new Array(i);for(t=0;t<i;t++)e=this.stamp(null),a[t]=e.root.querySelector("*"),this._itemsParent.appendChild(e.root);return a},_isClientFull:function(){return this._scrollBottom!=0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(i){var t=this._clamp(this._physicalCount+i,yo,this._virtualCount-this._virtualStart);if(t=this._convertIndexToCompleteRow(t),this.grid){var e=t%this._itemsPerRow;e&&t-e<=this._physicalCount&&(t+=this._itemsPerRow),t-=e}var a=t-this._physicalCount,r=Math.round(this._physicalCount*.5);if(!(a<0)){if(a>0){var n=window.performance.now();[].push.apply(this._physicalItems,this._createPool(a));for(var s=0;s<a;s++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+a,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+a),this._update(),this._templateCost=(window.performance.now()-n)/a,r=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||r===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,r)),au):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,r),$i))}},_render:function(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){var i=this._getReusables(!0);this._physicalTop=i.physicalTop,this._virtualStart=this._virtualStart+i.indexes.length,this._physicalStart=this._physicalStart+i.indexes.length,this._update(i.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(yo))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var i={};i.__key__=!0,i[this.as]=!0,i[this.indexAs]=!0,i[this.selectedAs]=!0,i.tabIndex=!0,this._instanceProps=i,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(i,t){typeof t>"u"||(this.notifyResize(),qn(),i&&this._updateGridMetrics())},_itemsChanged:function(i){if(i.path==="items")this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,fa);else if(i.path==="items.splices"){this._adjustVirtualIndex(i.value.indexSplices),this._virtualCount=this.items?this.items.length:0;var t=i.value.indexSplices.some(function(r){return r.addedCount>0||r.removed.length>0});if(t){var e=this._getActiveElement();this.contains(e)&&e.blur()}var a=i.value.indexSplices.some(function(r){return r.index+r.addedCount>=this._virtualStart&&r.index<=this._virtualEnd},this);(!this._isClientFull()||a)&&this._debounce("_render",this._render,fa)}else i.path!=="items.length"&&this._forwardItemPath(i.path,i.value)},_forwardItemPath:function(i,t){i=i.slice(6);var e=i.indexOf(".");e===-1&&(e=i.length);var a,r,n,s=this.modelForElement(this._offscreenFocusedItem),o=parseInt(i.substring(0,e),10);a=this._isIndexRendered(o),a?(r=this._getPhysicalIndex(o),n=this.modelForElement(this._physicalItems[r])):s&&(n=s),!(!n||n[this.indexAs]!==o)&&(i=i.substring(e+1),i=this.as+(i?"."+i:""),n._setPendingPropertyOrPath(i,t,!1,!0),n._flushProperties&&n._flushProperties(),a&&(this._updateMetrics([r]),this._positionItems(),this._updateScrollerSize()))},_adjustVirtualIndex:function(i){i.forEach(function(t){if(t.removed.forEach(this._removeItem,this),t.index<this._virtualStart){var e=Math.max(t.addedCount-t.removed.length,t.index-this._virtualStart);this._virtualStart=this._virtualStart+e,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+e)}},this)},_removeItem:function(i){this.$.selector.deselect(i),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===i&&this._removeFocusedItem()},_iterateItems:function(i,t){var e,a,r,n;if(arguments.length===2&&t){for(n=0;n<t.length;n++)if(e=t[n],a=this._computeVidx(e),(r=i.call(this,e,a))!=null)return r}else{for(e=this._physicalStart,a=this._virtualStart;e<this._physicalCount;e++,a++)if((r=i.call(this,e,a))!=null)return r;for(e=0;e<this._physicalStart;e++,a++)if((r=i.call(this,e,a))!=null)return r}},_computeVidx:function(i){return i>=this._physicalStart?this._virtualStart+(i-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+i},_assignModels:function(i){this._iterateItems(function(t,e){var a=this._physicalItems[t],r=this.items&&this.items[e];if(r!=null){var n=this.modelForElement(a);n.__key__=null,this._forwardProperty(n,this.as,r),this._forwardProperty(n,this.selectedAs,this.$.selector.isSelected(r)),this._forwardProperty(n,this.indexAs,e),this._forwardProperty(n,"tabIndex",this._focusedVirtualIndex===e?0:-1),this._physicalIndexForKey[n.__key__]=t,n._flushProperties&&n._flushProperties(!0),a.removeAttribute("hidden")}else a.setAttribute("hidden","")},i)},_updateMetrics:function(i){qn();var t=0,e=0,a=this._physicalAverageCount,r=this._physicalAverage;this._iterateItems(function(n,s){e+=this._physicalSizes[n],this._physicalSizes[n]=this._physicalItems[n].offsetHeight,t+=this._physicalSizes[n],this._physicalAverageCount+=this._physicalSizes[n]?1:0},i),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(e=this._itemsPerRow===1?e:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-e,this._itemsPerRow=1),this._physicalAverageCount!==a&&(this._physicalAverage=Math.round((r*a+t)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var i=this._physicalTop;if(this.grid){var t=this._itemsPerRow*this._itemWidth,e=(this._viewportWidth-t)/2;this._iterateItems(function(a,r){var n=r%this._itemsPerRow,s=Math.floor(n*this._itemWidth+e);this._isRTL&&(s=s*-1),this.translate3d(s+"px",i+"px",0,this._physicalItems[a]),this._shouldRenderNextRow(r)&&(i+=this._rowHeight)})}else{const a=[];this._iterateItems(function(r,n){const s=this._physicalItems[r];this.translate3d(0,i+"px",0,s),i+=this._physicalSizes[r];const o=s.id;o&&a.push(o)}),a.length&&this.setAttribute("aria-owns",a.join(" "))}},_getPhysicalSizeIncrement:function(i){return this.grid?this._computeVidx(i)%this._itemsPerRow!==this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[i]},_shouldRenderNextRow:function(i){return i%this._itemsPerRow===this._itemsPerRow-1},_adjustScrollPosition:function(){var i=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(i!==0){this._physicalTop=this._physicalTop-i;var t=this._scrollPosition;!c2&&t>0&&this._resetScrollPosition(t-i)}},_resetScrollPosition:function(i){this.scrollTarget&&i>=0&&(this._scrollTop=i,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(i){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,i=i||this._scrollHeight===0,i=i||this._scrollPosition>=this._estScrollHeight-this._physicalSize,i=i||this.grid&&this.$.items.style.height<this._estScrollHeight,(i||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(i){return this.scrollToIndex(this.items.indexOf(i))},scrollToIndex:function(i){if(!(typeof i!="number"||i<0||i>this.items.length-1)&&(qn(),this._physicalCount!==0)){i=this._clamp(i,0,this._virtualCount-1),(!this._isIndexRendered(i)||i>=this._maxVirtualStart)&&(this._virtualStart=this.grid?i-this._itemsPerRow*2:i-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,e=this._virtualStart,a=0,r=this._hiddenContentSize;e<i&&a<=r;)a=a+this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,e++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+a),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},fa)},selectItem:function(i){return this.selectIndex(this.items.indexOf(i))},selectIndex:function(i){if(!(i<0||i>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(i)){var t=this.modelForElement(this._physicalItems[this._getPhysicalIndex(i)]);t&&(t[this.selectedAs]=!0),this.updateSizeForIndex(i)}this.$.selector.selectIndex(i)}},deselectItem:function(i){return this.deselectIndex(this.items.indexOf(i))},deselectIndex:function(i){if(!(i<0||i>=this._virtualCount)){if(this._isIndexRendered(i)){var t=this.modelForElement(this._physicalItems[this._getPhysicalIndex(i)]);t[this.selectedAs]=!1,this.updateSizeForIndex(i)}this.$.selector.deselectIndex(i)}},toggleSelectionForItem:function(i){return this.toggleSelectionForIndex(this.items.indexOf(i))},toggleSelectionForIndex:function(i){var t=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(i):this.$.selector.isSelected(this.items[i]);t?this.deselectIndex(i):this.selectIndex(i)},clearSelection:function(){this._iterateItems(function(i,t){this.modelForElement(this._physicalItems[i])[this.selectedAs]=!1}),this.$.selector.clearSelection()},_selectionEnabledChanged:function(i){var t=i?this.listen:this.unlisten;t.call(this,this,"tap","_selectionHandler")},_selectionHandler:function(i){var t=this.modelForElement(i.target);if(!!t){var e,a,r=St(i).path[0],n=this._getActiveElement(),s=this._physicalItems[this._getPhysicalIndex(t[this.indexAs])];r.localName==="input"||r.localName==="button"||r.localName==="select"||(e=t.tabIndex,t.tabIndex=ma,a=n?n.tabIndex:-1,t.tabIndex=e,!(n&&s!==n&&s.contains(n)&&a!==ma)&&this.toggleSelectionForItem(t[this.as]))}},_multiSelectionChanged:function(i){this.clearSelection(),this.$.selector.multi=i},updateSizeForItem:function(i){return this.updateSizeForIndex(this.items.indexOf(i))},updateSizeForIndex:function(i){return this._isIndexRendered(i)&&(this._updateMetrics([this._getPhysicalIndex(i)]),this._positionItems()),null},_manageFocus:function(){var i=this._focusedVirtualIndex;i>=0&&i<this._virtualCount?this._isIndexRendered(i)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(i){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(i/this._itemsPerRow)*this._itemsPerRow:i},_isIndexRendered:function(i){return i>=this._virtualStart&&i<=this._virtualEnd},_isIndexVisible:function(i){return i>=this.firstVisibleIndex&&i<=this.lastVisibleIndex},_getPhysicalIndex:function(i){return(this._physicalStart+(i-this._virtualStart))%this._physicalCount},focusItem:function(i){this._focusPhysicalItem(i)},_focusPhysicalItem:function(i){if(!(i<0||i>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(i)||this.scrollToIndex(i);var t=this._physicalItems[this._getPhysicalIndex(i)],e=this.modelForElement(t),a;e.tabIndex=ma,t.tabIndex===ma&&(a=t),a||(a=St(t).querySelector('[tabindex="'+ma+'"]')),e.tabIndex=0,this._focusedVirtualIndex=i,a&&a.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var i=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var t=this.stamp(null);this._focusBackfillItem=t.root.querySelector("*"),this._itemsParent.appendChild(t.root)}this._offscreenFocusedItem=this._physicalItems[i],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[i]=this._focusBackfillItem,this._focusedPhysicalIndex=i,this.translate3d(0,Mo,0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(!(!this._offscreenFocusedItem||this._focusedVirtualIndex<0)){this._assignModels();var i=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),t=this._physicalItems[i];if(!!t){var e=this.modelForElement(t),a=this.modelForElement(this._offscreenFocusedItem);e[this.as]===a[this.as]?(this._focusBackfillItem=t,e.tabIndex=-1,this._physicalItems[i]=this._offscreenFocusedItem,this.translate3d(0,Mo,0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(i){var t=this.modelForElement(i.target),e=this.modelForElement(this._focusedItem),a=this._offscreenFocusedItem!==null,r=this._focusedVirtualIndex;!t||(e===t?this._isIndexVisible(r)||this.scrollToIndex(r):(this._restoreFocusedItem(),e&&(e.tabIndex=-1),t.tabIndex=0,r=t[this.indexAs],this._focusedVirtualIndex=r,this._focusedPhysicalIndex=this._getPhysicalIndex(r),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],a&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(i){switch(i.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&i.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&i.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(i);break}},_clamp:function(i,t,e){return Math.min(e,Math.max(t,i))},_debounce:function(i,t,e){this._debouncers=this._debouncers||{},this._debouncers[i]=Ja.debounce(this._debouncers[i],e,t.bind(this)),ru(this._debouncers[i])},_forwardProperty:function(i,t,e){i._setPendingProperty(t,e)},_forwardHostPropV2:function(i,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(e){e&&this.modelForElement(e).forwardHostProp(i,t)},this)},_notifyInstancePropV2:function(i,t,e){if(nu(this.as,t)){var a=i[this.indexAs];t==this.as&&(this.items[a]=e),this.notifyPath(su(this.as,"items."+a,t),e)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(i,t,e){t.indexOf(this.as+".")===0&&this.notifyPath("items."+i.__key__+"."+t.slice(this.as.length+1),e)},_forwardParentPath:function(i,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(e){e&&this.modelForElement(e).notifyPath(i,t)},this)},_forwardParentProp:function(i,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(e){e&&(this.modelForElement(e)[i]=t)},this)},_getActiveElement:function(){var i=this._itemsParent.node.domHost;return St(i?i.root:document).activeElement}});const Rl=O`
  :host {
    margin: var(--lumo-space-xs) 0;
    outline: none;
  }

  [part='summary'] {
    display: flex;
    align-items: center;
    width: 100%;
    outline: none;
    padding: var(--lumo-space-s) 0;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-secondary-text-color);
    background-color: inherit;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([focus-ring]) [part='summary'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='toggle'] {
    display: block;
    width: 1em;
    height: 1em;
    margin-left: calc(var(--lumo-space-xs) * -1);
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-s);
    line-height: 1;
    color: var(--lumo-contrast-60pct);
    font-family: 'lumo-icons';
    cursor: var(--lumo-clickable-cursor);
  }

  :host([disabled]) [part='summary'],
  :host([disabled]) [part='toggle'] {
    color: var(--lumo-disabled-text-color);
    cursor: default;
  }

  @media (hover: hover) {
    :host(:not([disabled])) [part='summary']:hover,
    :host(:not([disabled])) [part='summary']:hover [part='toggle'] {
      color: var(--lumo-contrast-80pct);
    }
  }

  [part='toggle']::before {
    content: var(--lumo-icons-angle-right);
  }

  :host([opened]) [part='toggle'] {
    transform: rotate(90deg);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) 0 var(--lumo-space-s);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
  }

  :host([theme~='filled']) {
    background-color: var(--lumo-contrast-5pct);
    border-radius: var(--lumo-border-radius-m);
  }

  :host([theme~='filled']) [part='summary'] {
    padding: var(--lumo-space-s) calc(var(--lumo-space-s) + var(--lumo-space-xs) / 2);
  }

  :host([theme~='filled']) [part='content'] {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }

  :host([theme~='small']) [part='summary'] {
    padding-top: var(--lumo-space-xs);
    padding-bottom: var(--lumo-space-xs);
  }

  :host([theme~='small']) [part='toggle'] {
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='small']) [part\$='content'] {
    font-size: var(--lumo-font-size-s);
  }

  :host([theme~='reverse']) [part='summary'] {
    justify-content: space-between;
  }

  :host([theme~='reverse']) [part='toggle'] {
    order: 1;
    margin-right: 0;
  }

  :host([theme~='reverse'][theme~='filled']) [part='summary'] {
    padding-left: var(--lumo-space-m);
  }

  /* RTL specific styles */
  :host([dir='rtl']) [part='toggle'] {
    margin-left: var(--lumo-space-xs);
    margin-right: calc(var(--lumo-space-xs) * -1);
  }

  :host([dir='rtl']) [part='toggle']::before {
    content: var(--lumo-icons-angle-left);
  }

  :host([opened][dir='rtl']) [part='toggle'] {
    transform: rotate(-90deg);
  }

  :host([theme~='small'][dir='rtl']) [part='toggle'] {
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='reverse'][dir='rtl']) [part='toggle'] {
    margin-left: 0;
  }

  :host([theme~='reverse'][theme~='filled'][dir='rtl']) [part='summary'] {
    padding-right: var(--lumo-space-m);
  }
`;R("vaadin-details",Rl,{moduleId:"lumo-details"});const d2=O`
  :host {
    margin: 0;
    border-bottom: solid 1px var(--lumo-contrast-10pct);
  }

  :host(:last-child) {
    border-bottom: none;
  }

  :host([theme~='filled']) {
    border-bottom: none;
  }

  :host([theme~='filled']:not(:last-child)) {
    margin-bottom: 2px;
  }
`;R("vaadin-accordion-panel",[Rl,d2],{moduleId:"lumo-accordion-panel"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const u2=i=>class extends q0(H0(i)){static get properties(){return{tabindex:{type:Number,value:0}}}_onKeyDown(e){super._onKeyDown(e),!e.defaultPrevented&&e.keyCode===9&&e.shiftKey&&HTMLElement.prototype.focus.apply(this)}_shouldSetFocus(e){if(!this.disabled&&this.focusElement){const a=e.composedPath();if(a[0]===this&&this._keyboardActive&&this.focusElement.focus(),a[0]===this||a.includes(this.focusElement))return!0}return!1}_tabindexChanged(e){e!==void 0&&(this.focusElement.tabIndex=e),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}};/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class w0 extends u2(rt(X(Y))){static get template(){return V`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: none;
          overflow: hidden;
        }

        [part='summary'][disabled] {
          pointer-events: none;
        }

        :host([opened]) [part='content'] {
          display: block;
          overflow: visible;
        }
      </style>
      <div role="heading">
        <div
          role="button"
          part="summary"
          on-click="_onToggleClick"
          on-keydown="_onToggleKeyDown"
          disabled$="[[disabled]]"
          aria-expanded$="[[_getAriaExpanded(opened)]]"
          aria-controls$="[[_contentId]]"
        >
          <span part="toggle" aria-hidden="true"></span>
          <span part="summary-content"><slot name="summary"></slot></span>
        </div>
      </div>
      <section id$="[[_contentId]]" part="content" aria-hidden$="[[_getAriaHidden(opened)]]">
        <slot></slot>
      </section>
    `}static get is(){return"vaadin-details"}static get properties(){return{opened:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"}}}get _collapsible(){return this.shadowRoot.querySelector('[part="content"]')}get focusElement(){return this.shadowRoot.querySelector('[part="summary"]')}ready(){super.ready(),this._contentId=`${this.constructor.is}-content-${X0()}`,this._collapsible.addEventListener("keydown",t=>{t.shiftKey&&t.keyCode===9&&t.stopPropagation()})}_getAriaExpanded(t){return t?"true":"false"}_getAriaHidden(t){return t?"false":"true"}_openedChanged(t){this._collapsible.style.maxHeight=t?"":"0px"}_onToggleClick(){this.opened=!this.opened}_onToggleKeyDown(t){[13,32].indexOf(t.keyCode)>-1&&(t.preventDefault(),this.opened=!this.opened)}}customElements.define(w0.is,w0);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class E0 extends w0{static get is(){return"vaadin-accordion-panel"}}customElements.define(E0.is,E0);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bo extends X(rt(Y)){static get template(){return V`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
    `}static get is(){return"vaadin-accordion"}static get properties(){return{opened:{type:Number,value:0,notify:!0,reflectToAttribute:!0},items:{type:Array,readOnly:!0,notify:!0}}}static get observers(){return["_updateItems(items, opened)"]}constructor(){super(),this._boundUpdateOpened=this._updateOpened.bind(this)}get focused(){return this.getRootNode().activeElement}focus(){if(this._observer&&this._observer.flush(),Array.isArray(this.items)){const t=this._getAvailableIndex(0);t>=0&&this.items[t].focus()}}ready(){super.ready(),this.addEventListener("keydown",t=>this._onKeydown(t)),this._observer=new ue(this,t=>{this._setItems(this._filterItems(Array.from(this.children))),this._filterItems(t.addedNodes).forEach(e=>{e.addEventListener("opened-changed",this._boundUpdateOpened)})})}_filterItems(t){return t.filter(e=>e instanceof E0)}_updateItems(t,e){if(t){const a=t[e];t.forEach(r=>{r.opened=r===a})}}_onKeydown(t){const e=t.composedPath()[0];if(!this.items.some(s=>s.focusElement===e))return;const a=this.items.indexOf(this.focused);let r,n;switch(t.key){case"ArrowUp":n=-1,r=a-1;break;case"ArrowDown":n=1,r=a+1;break;case"Home":n=1,r=0;break;case"End":n=-1,r=this.items.length-1;break}r=this._getAvailableIndex(r,n),r>=0&&(this.items[r].focus(),this.items[r].setAttribute("focus-ring",""),t.preventDefault())}_getAvailableIndex(t,e){const a=this.items.length;let r=t;for(let n=0;typeof r=="number"&&n<a;n++,r+=e||1)if(r<0?r=a-1:r>=a&&(r=0),!this.items[r].disabled)return r;return-1}_updateOpened(t){const e=this._filterItems(t.composedPath())[0],a=this.items.indexOf(e);if(t.detail.value){if(e.disabled||a===-1)return;this.opened=a}else this.items.some(r=>r.opened)||(this.opened=null)}}customElements.define(bo.is,bo);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const v2=O`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`,Ol=document.createElement("template");Ol.innerHTML=`<style>${v2.toString().replace(":host","html")}</style>`;document.head.appendChild(Ol.content);const Pl=document.createElement("style");Pl.textContent="html { --vaadin-avatar-size: var(--lumo-size-m); }";document.head.appendChild(Pl);R("vaadin-avatar",O`
    :host {
      color: var(--lumo-secondary-text-color);
      background-color: var(--lumo-contrast-10pct);
      border-radius: 50%;
      outline: none;
      cursor: default;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([has-color-index]) {
      color: var(--lumo-base-color);
    }

    :host([focus-ring]) {
      border-color: var(--lumo-primary-color-50pct);
    }

    [part='icon'],
    [part='abbr'] {
      fill: currentColor;
    }

    [part='abbr'] {
      font-family: var(--lumo-font-family);
      font-size: 2.4375em;
      font-weight: 500;
    }

    :host([theme~='xlarge']) [part='abbr'] {
      font-size: 2.5em;
    }

    :host([theme~='large']) [part='abbr'] {
      font-size: 2.375em;
    }

    :host([theme~='small']) [part='abbr'] {
      font-size: 2.75em;
    }

    :host([theme~='xsmall']) [part='abbr'] {
      font-size: 3em;
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar"});/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ll=document.createElement("template");Ll.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-avatar-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQAAAsAAAAABnwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUmEY21hcAAAAYgAAABLAAABcOspwa1nbHlmAAAB1AAAAEUAAABMYO4o1WhlYWQAAAIcAAAALgAAADYYaAmGaGhlYQAAAkwAAAAdAAAAJAZsA1VobXR4AAACbAAAAAgAAAAIA+gAAGxvY2EAAAJ0AAAABgAAAAYAJgAAbWF4cAAAAnwAAAAeAAAAIAEOACFuYW1lAAACnAAAAUIAAAKavFDYrHBvc3QAAAPgAAAAHQAAAC52hGZ4eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGT8wjiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+YmQO+p/FEMUcxDANKMwIkgMADiUMJQB4nGNgYGBlYGBgBmIdIGZhYGAMYWBkAAE/oCgjWJyZgQsszsKgBFbDAhJ/xfj/P4wE8lnAJAMjG8Mo4AGTMlAeOKwgmIERADU0CX0AeJxjYGIAAmYJpkgGHgYRBgZGJT1GEztGIzlGET5GKEuU8YuSpZKSpQuI+LfLv21emz9jHJQPJP7dsUywsEiwBACG8g9CAAAAeJxjYGRgYADicIOnh+P5bb4ycDO/AIow3JZ4rIJMM0swRQIpDgYmEA8AKwgJOwAAeJxjYGRgYA76nwUkXzAAAbMEAyMDKmACAE2GAskAAAAAAAAAA+gAAAAAAAAAJgAAeJxjYGRgYGBiEAViBjCLgYELCBkY/oP5DAAKuwEwAAB4nI2Qu07DMBSG//SGaCWEhMSAGDx1QU0vYyemdmDrUDEhuamTpkriyHEj9RF4B56Bh2Bg5mmY+8d4Qh3qo9jf+c45thQAt/hGgGYFuHN7s1q4YvbHbdKD5w555LmLAZ499+hfPPfxhDfPA/p33hB0rmmG+PDcwg2+PLfpfzx3yL+eu7gPHj33MAxmnvtYB6+eB/SftZTbtBjJWlppRmmki2qlkkMmzZnKGbVWpkp1Iabh5Ex1qQplpFVbsTmKqk5m1sYiNjoXC11YlWValEbvVWTDnbXlfDyOvQ8jnaOGZGyRouCfky63/AyzFBE0fYUVFBIckLnKZTOXda15s+GZulxgihCTC2eXnC3cfFNV7BfY4Mi9eT3BjNYiZh6zRyMnLdxs050xNE3panuaiD7Ezk2VmGPMiP/1h+71/ATcWYAhAAB4nGNgYoAALgbsgImRiZGZgaW0OLWIgQEACl4B2QAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Ll.content);/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class C0 extends Qe(rt(X(Y))){static get template(){return V`
      <style>
        :host {
          display: inline-block;
          flex: none;
          border-radius: 50%;
          overflow: hidden;
          height: var(--vaadin-avatar-size, 64px);
          width: var(--vaadin-avatar-size, 64px);
          border: var(--vaadin-avatar-outline-width) solid transparent;
          margin: calc(var(--vaadin-avatar-outline-width) * -1);
          background-clip: content-box;
          --vaadin-avatar-outline-width: 2px;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        [part='icon'] {
          font-size: 5.6em;
        }

        [part='abbr'] {
          font-size: 2.2em;
        }

        [part='icon'] > text {
          font-family: 'vaadin-avatar-icons';
        }

        :host([hidden]) {
          display: none !important;
        }

        svg[hidden] {
          display: none !important;
        }

        :host([has-color-index]) {
          position: relative;
          background-color: var(--vaadin-avatar-user-color);
        }

        :host([has-color-index])::before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);
        }
      </style>
      <img hidden$="[[!__imgVisible]]" src$="[[img]]" aria-hidden="true" on-error="__onImageLoadError" />
      <svg
        part="icon"
        hidden$="[[!__iconVisible]]"
        id="avatar-icon"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle"></text>
      </svg>
      <svg
        part="abbr"
        hidden$="[[!__abbrVisible]]"
        id="avatar-abbr"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">[[abbr]]</text>
      </svg>
    `}static get is(){return"vaadin-avatar"}static get properties(){return{img:{type:String,reflectToAttribute:!0,observer:"__imgChanged"},abbr:{type:String,reflectToAttribute:!0},name:{type:String,reflectToAttribute:!0},colorIndex:{type:Number,observer:"__colorIndexChanged"},i18n:{type:Object,value:()=>({anonymous:"anonymous"})},__imgVisible:Boolean,__iconVisible:Boolean,__abbrVisible:Boolean}}static get observers(){return["__imgOrAbbrOrNameChanged(img, abbr, name)","__i18nChanged(i18n.*)"]}ready(){super.ready(),this.__updateVisibility(),!this.name&&!this.abbr&&this.__setTitle(this.name),this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}__colorIndexChanged(t){if(t!=null){const e=`--vaadin-user-color-${t}`;Boolean(getComputedStyle(document.documentElement).getPropertyValue(e))?(this.setAttribute("has-color-index",""),this.style.setProperty("--vaadin-avatar-user-color",`var(${e})`)):(this.removeAttribute("has-color-index"),console.warn(`The CSS property --vaadin-user-color-${t} is not defined`))}else this.removeAttribute("has-color-index")}__imgChanged(){this.__imgFailedToLoad=!1}__imgOrAbbrOrNameChanged(t,e,a){if(this.__updateVisibility(),e&&e!==this.__generatedAbbr){this.__setTitle(a?`${a} (${e})`:e);return}a?this.abbr=this.__generatedAbbr=a.split(" ").map(r=>r.charAt(0)).join(""):this.abbr=void 0,this.__setTitle(a)}__i18nChanged(t){t.base&&t.base.anonymous&&(this.__oldAnonymous&&this.getAttribute("title")===this.__oldAnonymous&&this.__setTitle(),this.__oldAnonymous=t.base.anonymous)}__updateVisibility(){this.__imgVisible=!!this.img&&!this.__imgFailedToLoad,this.__abbrVisible=!this.__imgVisible&&!!this.abbr,this.__iconVisible=!this.__imgVisible&&!this.abbr}__setTitle(t){t?this.setAttribute("title",t):this.setAttribute("title",this.i18n.anonymous)}__onImageLoadError(){this.img&&(console.warn(`<vaadin-avatar> The specified image could not be loaded: ${this.img}`),this.__imgFailedToLoad=!0,this.__updateVisibility())}}customElements.define(C0.is,C0);R("vaadin-avatar-group",O`
    :host {
      --vaadin-avatar-size: var(--lumo-size-m);
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-group-overlap: 12px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-group-overlap: 10px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-group-overlap: 6px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-group-overlap: 4px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar-group"});const p2=O`
  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;R("vaadin-avatar-group-overlay",[$1,ou,p2],{moduleId:"lumo-avatar-group-overlay"});R("vaadin-avatar-group-list-box",O`
    [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-right: var(--lumo-space-m);
    }

    :host([dir='rtl']) [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-left: var(--lumo-space-m);
    }
  `,{moduleId:"lumo-avatar-group-list-box"});R("vaadin-item",O`
    :host([theme='avatar-group-item']) [part='content'] {
      display: flex;
      align-items: center;
    }

    :host([theme='avatar-group-item']) ::slotted(vaadin-avatar) {
      width: var(--lumo-size-xs);
      height: var(--lumo-size-xs);
    }

    :host([theme='avatar-group-item']:not([dir='rtl'])) ::slotted(vaadin-avatar) {
      margin-right: var(--lumo-space-s);
    }

    :host([theme='avatar-group-item'][dir='rtl']) ::slotted(vaadin-avatar) {
      margin-left: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-avatar-group-item"});/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zo extends V1{static get is(){return"vaadin-avatar-group-list-box"}}customElements.define(zo.is,zo);/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xo extends Z0(er){static get is(){return"vaadin-avatar-group-overlay"}}customElements.define(xo.is,xo);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ee=document.createElement("div");ee.style.position="fixed";ee.style.clip="rect(0px, 0px, 0px, 0px)";ee.setAttribute("aria-live","polite");document.body.appendChild(ee);let Tr;function Me(i,t={}){const e=t.mode||"polite",a=t.timeout===void 0?150:t.timeout;e==="alert"?(ee.removeAttribute("aria-live"),ee.removeAttribute("role"),Tr=li.debounce(Tr,j1,()=>{ee.setAttribute("role","alert")})):(Tr&&Tr.cancel(),ee.removeAttribute("role"),ee.setAttribute("aria-live",e)),ee.textContent="",setTimeout(()=>{ee.textContent=i},a)}/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jn=2;class Ao extends An(rt(X(Y))){static get template(){return V`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          --vaadin-avatar-group-overlap: 8px;
          --vaadin-avatar-group-overlap-border: 2px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          display: flex;
          position: relative;
          width: 100%;
          flex-wrap: nowrap;
        }

        [part='avatar']:not(:first-child) {
          -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          -webkit-mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
          mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
        }

        [part='avatar']:not([dir='rtl']):not(:first-child) {
          margin-left: calc(var(--vaadin-avatar-group-overlap) * -1 - var(--vaadin-avatar-outline-width));
          -webkit-mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
          mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
        }

        [part='avatar'][dir='rtl']:not(:first-child) {
          margin-right: calc(var(--vaadin-avatar-group-overlap) * -1);
          -webkit-mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
          mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
        }
      </style>
      <div id="container" part="container">
        <template id="items" is="dom-repeat" items="[[__computeItems(items.*, __itemsInView, maxItemsVisible)]]">
          <vaadin-avatar
            name="[[item.name]]"
            abbr="[[item.abbr]]"
            img="[[item.img]]"
            part="avatar"
            theme$="[[_theme]]"
            i18n="[[i18n]]"
            color-index="[[item.colorIndex]]"
          ></vaadin-avatar>
        </template>
        <vaadin-avatar
          id="overflow"
          part="avatar"
          hidden$="[[__computeMoreHidden(items.length, __itemsInView, __maxReached)]]"
          abbr="[[__computeMore(items.length, __itemsInView, maxItemsVisible)]]"
          theme$="[[_theme]]"
          on-click="_onOverflowClick"
          on-keydown="_onOverflowKeyDown"
          aria-haspopup="listbox"
        ></vaadin-avatar>
      </div>
      <vaadin-avatar-group-overlay
        id="overlay"
        opened="{{_opened}}"
        no-vertical-overlap
        on-vaadin-overlay-close="_onVaadinOverlayClose"
      >
        <template>
          <vaadin-avatar-group-list-box on-keydown="_onListKeyDown">
            <template is="dom-repeat" items="[[__computeExtraItems(items.*, __itemsInView, maxItemsVisible)]]">
              <vaadin-item theme="avatar-group-item" role="option">
                <vaadin-avatar
                  name="[[item.name]]"
                  abbr="[[item.abbr]]"
                  img="[[item.img]]"
                  i18n="[[i18n]]"
                  part="avatar"
                  theme$="[[_theme]]"
                  color-index="[[item.colorIndex]]"
                  tabindex="-1"
                  aria-hidden="true"
                ></vaadin-avatar>
                [[item.name]]
              </vaadin-item>
            </template>
          </vaadin-avatar-group-list-box>
        </template>
      </vaadin-avatar-group-overlay>
    `}static get is(){return"vaadin-avatar-group"}static get properties(){return{items:{type:Array},maxItemsVisible:{type:Number},i18n:{type:Object,value:()=>({anonymous:"anonymous",activeUsers:{one:"Currently one active user",many:"Currently {count} active users"},joined:"{user} joined",left:"{user} left"})},__maxReached:{type:Boolean,computed:"__computeMaxReached(items.length, maxItemsVisible)"},__itemsInView:{type:Number,value:null},_opened:{type:Boolean,observer:"__openedChanged",value:!1}}}static get observers(){return["__computeMoreTitle(items.length, __itemsInView, maxItemsVisible)","__itemsChanged(items.splices, items.*)","__i18nItemsChanged(i18n.*, items.length)"]}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-avatar-group-overlay"),this._overlayElement.positionTarget=this.$.overflow,U1(this,()=>{this.__setItemsInView()})}get _avatars(){return this.shadowRoot.querySelectorAll("vaadin-avatar")}__getMessage(t,e){return e.replace("{user}",t.name||t.abbr||this.i18n.anonymous)}_onOverflowClick(t){t.stopPropagation(),this._opened?this.$.overlay.close():t.defaultPrevented||(this._opened=!0)}_onOverflowKeyDown(t){this._opened||/^(Enter|SpaceBar|\s)$/.test(t.key)&&(t.preventDefault(),this._opened=!0)}_onListKeyDown(t){(t.key==="Escape"||t.key==="Esc"||/^(Tab)$/.test(t.key))&&(this._opened=!1)}_onResize(){this.__setItemsInView()}_onVaadinOverlayClose(t){t.detail.sourceEvent&&t.detail.sourceEvent.composedPath().includes(this)&&t.preventDefault()}__computeItems(t,e,a){const r=t.base||[],n=this.__getLimit(r.length,e,a);return n?r.slice(0,n):r}__computeExtraItems(t,e,a){const r=t.base||[],n=this.__getLimit(r.length,e,a);return n?r.slice(n):r}__computeMaxReached(t,e){return e!=null&&t>this.__getMax(e)}__computeMore(t,e,a){return`+${t-this.__getLimit(t,e,a)}`}__computeMoreHidden(t,e,a){return!a&&!(e&&e<t)}__computeMoreTitle(t,e,a){const r=this.__getLimit(t,e,a);if(r==null)return;const n=[];for(let s=r;s<t;s++){const o=this.items[s];o&&n.push(o.name||o.abbr||"anonymous")}this.$.overflow.setAttribute("title",n.join(`
`))}__getLimit(t,e,a){let r=null;const n=this.__getMax(a);return a!=null&&n<t?r=n-1:e&&e<t&&(r=e),Math.min(r,this.__calculateAvatarsFitWidth())}__getMax(t){return Math.max(t,Jn)}__itemsChanged(t,e){const a=e.base;this.$.items.render(),this.__setItemsInView(),t&&Array.isArray(t.indexSplices)?t.indexSplices.forEach(r=>{this.__announceItemsChange(a,r)}):Array.isArray(a)&&Array.isArray(this.__oldItems)&&Y0(a,this.__oldItems).forEach(n=>{this.__announceItemsChange(a,n)}),this.__oldItems=a}__announceItemsChange(t,e){const{addedCount:a,index:r,removed:n}=e;let s=[],o=[];a&&(s=t.slice(r,r+a).map(l=>this.__getMessage(l,this.i18n.joined||"{user} joined"))),n&&(o=n.map(l=>this.__getMessage(l,this.i18n.left||"{user} left")));const h=o.concat(s);h.length>0&&Me(h.join(", "))}__i18nItemsChanged(t,e){const{base:a}=t;if(a&&a.activeUsers){const r=e===1?"one":"many";a.activeUsers[r]&&this.setAttribute("aria-label",a.activeUsers[r].replace("{count}",e||0))}}__openedChanged(t,e){t?(this._menuElement||(this._menuElement=this._overlayElement.content.querySelector("vaadin-avatar-group-list-box"),this._menuElement.setAttribute("role","listbox")),this._openedWithFocusRing=this.$.overflow.hasAttribute("focus-ring"),this._menuElement.querySelectorAll("vaadin-avatar").forEach(r=>r.removeAttribute("title")),this._menuElement.focus()):e&&(this.$.overflow.focus(),this._openedWithFocusRing&&this.$.overflow.setAttribute("focus-ring","")),this.$.overflow.setAttribute("aria-expanded",t===!0)}__setItemsInView(){const t=this._avatars,e=this.items;if(!e||!t||t.length<3)return;let a=this.__calculateAvatarsFitWidth();a===e.length-1&&(a=e.length),a>=e.length&&this._opened&&(this.$.overlay.close(),this.$.overlay._flushAnimation("closing")),this.__itemsInView=a}__calculateAvatarsFitWidth(){if(!this.shadowRoot||this._avatars.length<Jn)return Jn;const t=this._avatars,e=t[0].clientWidth,{marginLeft:a,marginRight:r}=getComputedStyle(t[1]),n=this.getAttribute("dir")==="rtl"?parseInt(r,0)-parseInt(a,0):parseInt(a,0)-parseInt(r,0);return Math.floor((this.$.container.offsetWidth-e)/(e+n))}}customElements.define(Ao.is,Ao);const f2=O`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-checkbox */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;R("vaadin-checkbox-group",[wn,En,f2],{moduleId:"lumo-checkbox-group"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wo extends ir(Qe(Cn(rt(X(Y))))){static get is(){return"vaadin-checkbox-group"}static get template(){return V`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>

      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:Array,value:()=>[],notify:!0,observer:"__valueChanged"}}}constructor(){super(),this.__registerCheckbox=this.__registerCheckbox.bind(this),this.__unregisterCheckbox=this.__unregisterCheckbox.bind(this),this.__onCheckboxCheckedChanged=this.__onCheckboxCheckedChanged.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","group"),this._observer=new ue(this,({addedNodes:t,removedNodes:e})=>{const a=this.__filterCheckboxes(t),r=this.__filterCheckboxes(e);a.forEach(this.__registerCheckbox),r.forEach(this.__unregisterCheckbox),this.__warnOfCheckboxesWithoutValue(a)})}checkValidity(){return!this.required||this.value.length>0}__filterCheckboxes(t){return t.filter(e=>e instanceof hu)}get __checkboxes(){return this.__filterCheckboxes([...this.children])}__warnOfCheckboxesWithoutValue(t){t.some(a=>{const{value:r}=a;return!a.hasAttribute("value")&&(!r||r==="on")})&&console.warn("Please provide the value attribute to all the checkboxes inside the checkbox group.")}__registerCheckbox(t){t.addEventListener("checked-changed",this.__onCheckboxCheckedChanged),this.disabled&&(t.disabled=!0),t.checked?this.__addCheckboxToValue(t.value):this.value.includes(t.value)&&(t.checked=!0)}__unregisterCheckbox(t){t.removeEventListener("checked-changed",this.__onCheckboxCheckedChanged),t.checked&&this.__removeCheckboxFromValue(t.value)}_disabledChanged(t,e){super._disabledChanged(t,e),!(!t&&e===void 0)&&e!==t&&this.__checkboxes.forEach(a=>{a.disabled=t})}__addCheckboxToValue(t){this.value.includes(t)||(this.value=[...this.value,t])}__removeCheckboxFromValue(t){this.value.includes(t)&&(this.value=this.value.filter(e=>e!==t))}__onCheckboxCheckedChanged(t){const e=t.target;e.checked?this.__addCheckboxToValue(e.value):this.__removeCheckboxFromValue(e.value)}__valueChanged(t,e){t.length===0&&e===void 0||(this.toggleAttribute("has-value",t.length>0),this.__checkboxes.forEach(a=>{a.checked=t.includes(a.value)}),e!==void 0&&this.validate())}_shouldRemoveFocus(t){return!this.contains(t.relatedTarget)}_setFocused(t){super._setFocused(t),t||this.validate()}}customElements.define(wo.is,wo);const g2=O`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  :host(:is([has-header], [has-title])) [part='header'] + [part='content'] {
    padding-top: 0;
  }

  [part='header'],
  [part='header-content'],
  [part='footer'] {
    gap: var(--lumo-space-xs) var(--lumo-space-s);
    line-height: var(--lumo-line-height-s);
  }

  [part='header'] {
    padding: var(--lumo-space-m);
    background-color: var(--lumo-base-color);
    border-radius: var(--lumo-border-radius-l) var(--lumo-border-radius-l) 0 0; /* Needed for Safari */
  }

  [part='footer'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    background-color: var(--lumo-contrast-5pct);
    border-radius: 0 0 var(--lumo-border-radius-l) var(--lumo-border-radius-l); /* Needed for Safari */
  }

  [part='title'] {
    font-size: var(--lumo-font-size-xl);
    font-weight: 600;
    color: var(--lumo-header-text-color);
    margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0;
  }

  @media (min-height: 320px) {
    :host([overflow~='top']) [part='header'] {
      box-shadow: 0 1px 0 0 var(--lumo-contrast-10pct);
    }
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;R("vaadin-dialog-overlay",[$1,g2],{moduleId:"lumo-dialog"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function sn(i){return i.touches?i.touches[0]:i}function kl(i){return i.clientX>=0&&i.clientX<=window.innerWidth&&i.clientY>=0&&i.clientY<=window.innerHeight}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const m2=i=>class extends i{static get properties(){return{draggable:{type:Boolean,value:!1,reflectToAttribute:!0},_touchDevice:{type:Boolean,value:W1},__dragHandleClassName:{type:String}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(e){if(!(e.type==="touchstart"&&e.touches.length>1)&&this.draggable&&(e.button===0||e.touches)){const a=this.$.overlay.$.resizerContainer,r=e.target===a,n=e.offsetX>a.clientWidth||e.offsetY>a.clientHeight,s=e.target===this.$.overlay.$.content,o=e.composedPath().some((h,l)=>{if(!h.classList)return!1;const c=h.classList.contains(this.__dragHandleClassName||"draggable"),d=h.classList.contains("draggable-leaf-only"),u=l===0;return d&&u||c&&(!d||u)});if(r&&!n||s||o){o||e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const h=sn(e);this._originalMouseCoords={top:h.pageY,left:h.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}}_drag(e){const a=sn(e);if(kl(a)){const r=this._originalBounds.top+(a.pageY-this._originalMouseCoords.top),n=this._originalBounds.left+(a.pageX-this._originalMouseCoords.left);this.$.overlay.setBounds({top:r,left:n})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-dialog-overlay",O`
    [part='overlay'] {
      position: relative;
      overflow: visible;
      max-height: 100%;
      display: flex;
    }

    [part='content'] {
      box-sizing: border-box;
      height: 100%;
    }

    .resizer-container {
      overflow: auto;
      flex-grow: 1;
      border-radius: inherit; /* prevent child elements being drawn outside part=overlay */
    }

    [part='overlay'][style] .resizer-container {
      min-height: 100%;
      width: 100%;
    }

    :host(:not([resizable])) .resizer {
      display: none;
    }

    :host([resizable]) [part='title'] {
      cursor: move;
      -webkit-user-select: none;
      user-select: none;
    }

    .resizer {
      position: absolute;
      height: 16px;
      width: 16px;
    }

    .resizer.edge {
      height: 8px;
      width: 8px;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    .resizer.edge.n {
      width: auto;
      bottom: auto;
      cursor: ns-resize;
    }

    .resizer.ne {
      top: -4px;
      right: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.e {
      height: auto;
      left: auto;
      cursor: ew-resize;
    }

    .resizer.se {
      bottom: -4px;
      right: -4px;
      cursor: nwse-resize;
    }

    .resizer.edge.s {
      width: auto;
      top: auto;
      cursor: ns-resize;
    }

    .resizer.sw {
      bottom: -4px;
      left: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.w {
      height: auto;
      right: auto;
      cursor: ew-resize;
    }

    .resizer.nw {
      top: -4px;
      left: -4px;
      cursor: nwse-resize;
    }
  `,{moduleId:"vaadin-dialog-resizable-overlay-styles"});const _2=i=>class extends i{static get properties(){return{resizable:{type:Boolean,value:!1,reflectToAttribute:!0}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(e=>{const a=document.createElement("div");this._resizeListeners.start[e]=r=>this._startResize(r,e),this._resizeListeners.resize[e]=r=>this._resize(r,e),this._resizeListeners.stop[e]=()=>this._stopResize(e),e.length===1&&a.classList.add("edge"),a.classList.add("resizer"),a.classList.add(e),a.addEventListener("mousedown",this._resizeListeners.start[e]),a.addEventListener("touchstart",this._resizeListeners.start[e]),this.$.overlay.$.resizerContainer.appendChild(a)})}_startResize(e,a){if(!(e.type==="touchstart"&&e.touches.length>1)&&(e.button===0||e.touches)){e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const r=sn(e);this._originalMouseCoords={top:r.pageY,left:r.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[a]),window.addEventListener("touchmove",this._resizeListeners.resize[a]),window.addEventListener("mouseup",this._resizeListeners.stop[a]),window.addEventListener("touchend",this._resizeListeners.stop[a]),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}_resize(e,a){const r=sn(e);kl(r)&&a.split("").forEach(s=>{switch(s){case"n":{const o=this._originalBounds.height-(r.pageY-this._originalMouseCoords.top),h=this._originalBounds.top+(r.pageY-this._originalMouseCoords.top);o>40&&this.$.overlay.setBounds({top:h,height:o});break}case"e":{const o=this._originalBounds.width+(r.pageX-this._originalMouseCoords.left);o>40&&this.$.overlay.setBounds({width:o});break}case"s":{const o=this._originalBounds.height+(r.pageY-this._originalMouseCoords.top);o>40&&this.$.overlay.setBounds({height:o});break}case"w":{const o=this._originalBounds.width-(r.pageX-this._originalMouseCoords.left),h=this._originalBounds.left+(r.pageX-this._originalMouseCoords.left);o>40&&this.$.overlay.setBounds({left:h,width:o});break}}})}_stopResize(e){window.removeEventListener("mousemove",this._resizeListeners.resize[e]),window.removeEventListener("touchmove",this._resizeListeners.resize[e]),window.removeEventListener("mouseup",this._resizeListeners.stop[e]),window.removeEventListener("touchend",this._resizeListeners.stop[e]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const e=this.$.overlay.$.resizerContainer.scrollTop,{width:a,height:r}=getComputedStyle(this.$.overlay.$.overlay),n=this.$.overlay.$.content;n.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:s,height:o}=getComputedStyle(n);return n.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=e,{width:a,height:r,contentWidth:s,contentHeight:o}}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-dialog-overlay",O`
    [part='header'],
    [part='header-content'],
    [part='footer'] {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex: none;
      pointer-events: none;
      z-index: 1;
    }

    [part='header'] {
      flex-wrap: nowrap;
    }

    ::slotted([slot='header-content']),
    ::slotted([slot='title']),
    ::slotted([slot='footer']) {
      display: contents;
      pointer-events: auto;
    }

    ::slotted([slot='title']) {
      font: inherit !important;
      overflow-wrap: anywhere;
    }

    [part='header-content'] {
      flex: 1;
    }

    :host([has-title]) [part='header-content'],
    [part='footer'] {
      justify-content: flex-end;
    }

    :host(:not([has-title]):not([has-header])) [part='header'],
    :host(:not([has-header])) [part='header-content'],
    :host(:not([has-title])) [part='title'],
    :host(:not([has-footer])) [part='footer'] {
      display: none !important;
    }

    :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
      height: auto;
    }

    @media (min-height: 320px) {
      :host(:is([has-title], [has-header], [has-footer])) .resizer-container {
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
        flex: 1;
        overflow: auto;
      }
    }

    /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
    [part='content'] {
      min-width: 12em; /* matches the default <vaadin-text-field> width */
    }

    :host([has-bounds-set]) [part='overlay'] {
      max-width: none;
    }
  `,{moduleId:"vaadin-dialog-overlay-styles"});let _a;class I0 extends er{static get is(){return"vaadin-dialog-overlay"}static get template(){if(!_a){_a=super.template.cloneNode(!0);const t=_a.content.querySelector('[part="content"]'),e=_a.content.querySelector('[part="overlay"]'),a=document.createElement("section");a.id="resizerContainer",a.classList.add("resizer-container"),a.appendChild(t),e.appendChild(a);const r=document.createElement("header");r.setAttribute("part","header"),a.insertBefore(r,t);const n=document.createElement("div");n.setAttribute("part","title"),r.appendChild(n);const s=document.createElement("slot");s.setAttribute("name","title"),n.appendChild(s);const o=document.createElement("div");o.setAttribute("part","header-content"),r.appendChild(o);const h=document.createElement("slot");h.setAttribute("name","header-content"),o.appendChild(h);const l=document.createElement("footer");l.setAttribute("part","footer"),a.appendChild(l);const c=document.createElement("slot");c.setAttribute("name","footer"),l.appendChild(c)}return _a}static get observers(){return["_headerFooterRendererChange(headerRenderer, footerRenderer, opened)","_headerTitleChanged(headerTitle, opened)"]}static get properties(){return{modeless:Boolean,withBackdrop:Boolean,headerTitle:String,headerRenderer:Function,footerRenderer:Function}}ready(){super.ready(),this.__resizeObserver=new ResizeObserver(()=>{this.__updateOverflow()}),this.__resizeObserver.observe(this.$.resizerContainer),this.$.content.addEventListener("scroll",()=>{this.__updateOverflow()})}__createContainer(t){const e=document.createElement("div");return e.setAttribute("slot",t),e}__clearContainer(t){t.innerHTML="",delete t._$litPart$}__initContainer(t,e){return t?this.__clearContainer(t):t=this.__createContainer(e),t}_headerFooterRendererChange(t,e,a){const r=this.__oldHeaderRenderer!==t;this.__oldHeaderRenderer=t;const n=this.__oldFooterRenderer!==e;this.__oldFooterRenderer=e;const s=this._oldOpenedFooterHeader!==a;this._oldOpenedFooterHeader=a,this.toggleAttribute("has-header",!!t),this.toggleAttribute("has-footer",!!e),r&&(t?this.headerContainer=this.__initContainer(this.headerContainer,"header-content"):this.headerContainer&&(this.headerContainer.remove(),this.headerContainer=null,this.__updateOverflow())),n&&(e?this.footerContainer=this.__initContainer(this.footerContainer,"footer"):this.footerContainer&&(this.footerContainer.remove(),this.footerContainer=null,this.__updateOverflow())),(t&&(r||s)||e&&(n||s))&&a&&this.requestContentUpdate()}_headerTitleChanged(t,e){this.toggleAttribute("has-title",!!t),e&&(t||this._oldHeaderTitle)&&this.requestContentUpdate(),this._oldHeaderTitle=t}_headerTitleRenderer(){this.headerTitle?(this.headerTitleElement||(this.headerTitleElement=document.createElement("h2"),this.headerTitleElement.setAttribute("slot","title"),this.headerTitleElement.classList.add("draggable")),this.appendChild(this.headerTitleElement),this.headerTitleElement.textContent=this.headerTitle):this.headerTitleElement&&(this.headerTitleElement.remove(),this.headerTitleElement=null)}requestContentUpdate(){super.requestContentUpdate(),this.headerContainer&&(this.headerContainer.parentElement||this.appendChild(this.headerContainer),this.headerRenderer&&this.headerRenderer.call(this.owner,this.headerContainer,this.owner)),this.footerContainer&&(this.footerContainer.parentElement||this.appendChild(this.footerContainer),this.footerRenderer&&this.footerRenderer.call(this.owner,this.footerContainer,this.owner)),this._headerTitleRenderer(),this.__updateOverflow()}setBounds(t){const e=this.$.overlay,a={...t};e.style.position!=="absolute"&&(e.style.position="absolute",this.setAttribute("has-bounds-set",""),this.__forceSafariReflow()),Object.keys(a).forEach(r=>{typeof a[r]=="number"&&(a[r]=`${a[r]}px`)}),Object.assign(e.style,a)}getBounds(){const t=this.$.overlay.getBoundingClientRect(),e=this.getBoundingClientRect(),a=t.top-e.top,r=t.left-e.left,n=t.width,s=t.height;return{top:a,left:r,width:n,height:s}}__forceSafariReflow(){const t=this.$.resizerContainer.scrollTop,e=this.$.overlay;e.style.display="block",requestAnimationFrame(()=>{e.style.display="",this.$.resizerContainer.scrollTop=t})}__updateOverflow(){let t="";if(this.hasAttribute("has-header")||this.hasAttribute("has-footer")||this.headerTitle){const a=this.$.content;a.scrollTop>0&&(t+=" top"),a.scrollTop<a.scrollHeight-a.clientHeight&&(t+=" bottom")}const e=t.trim();e.length>0&&this.getAttribute("overflow")!==e?this.setAttribute("overflow",e):e.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}}customElements.define(I0.is,I0);class S0 extends as(rt(m2(_2(Y)))){static get template(){return V`
      <style>
        :host {
          display: none !important;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        header-title="[[headerTitle]]"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-dialog-overlay>
    `}static get is(){return"vaadin-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String,value:""},renderer:Function,headerTitle:String,headerRenderer:Function,footerRenderer:Function,modeless:{type:Boolean,value:!1}}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel, headerTitle)","_rendererChanged(renderer, headerRenderer, footerRenderer)"]}ready(){super.ready(),this.$.overlay.setAttribute("role","dialog"),this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),ar(this)}requestContentUpdate(){this.$.overlay.requestContentUpdate()}_rendererChanged(t,e,a){this.$.overlay.setProperties({owner:this,renderer:t,headerRenderer:e,footerRenderer:a})}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.__restoreOpened=this.opened,this.opened=!1}_openedChanged(t){this.$.overlay.opened=t}_ariaLabelChanged(t,e){t||e?this.$.overlay.setAttribute("aria-label",t||e):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(t){t.detail.value===!1&&(this.opened=!1)}_handleOutsideClick(t){this.noCloseOnOutsideClick&&t.preventDefault()}_handleEscPress(t){this.noCloseOnEsc&&t.preventDefault()}_bringOverlayToFront(){this.modeless&&this.$.overlay.bringToFront()}}customElements.define(S0.is,S0);R("vaadin-confirm-dialog-overlay",O`
    [part='header'] ::slotted(h3) {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
    }

    [part='message'] {
      width: 25em;
      min-width: 100%;
      max-width: 100%;
    }

    ::slotted([slot$='button'][theme~='tertiary']) {
      padding-left: var(--lumo-space-s);
      padding-right: var(--lumo-space-s);
    }

    [part='cancel-button'] {
      flex-grow: 1;
    }

    @media (max-width: 360px) {
      [part='footer'] {
        flex-direction: column-reverse;
        align-items: stretch;
        padding: var(--lumo-space-s) var(--lumo-space-l);
        gap: var(--lumo-space-s);
      }

      ::slotted([slot$='button']) {
        width: 100%;
        margin: 0;
      }
    }
  `,{moduleId:"lumo-confirm-dialog-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-confirm-dialog-overlay",O`
    :host {
      --_vaadin-confirm-dialog-content-width: auto;
      --_vaadin-confirm-dialog-content-height: auto;
    }

    [part='overlay'] {
      width: var(--_vaadin-confirm-dialog-content-width);
      height: var(--_vaadin-confirm-dialog-content-height);
    }

    /* Make buttons clickable */
    [part='footer'] > * {
      pointer-events: all;
    }
  `,{moduleId:"vaadin-confirm-dialog-overlay-styles"});let Ai;const y2=V`
  <div part="cancel-button">
    <slot name="cancel-button"></slot>
  </div>
  <div part="reject-button">
    <slot name="reject-button"></slot>
  </div>
  <div part="confirm-button">
    <slot name="confirm-button"></slot>
  </div>
`;class Eo extends I0{static get is(){return"vaadin-confirm-dialog-overlay"}static get template(){if(!Ai){Ai=super.template.cloneNode(!0);const t=Ai.content.querySelector('[part="header"]');t.innerHTML="";const e=document.createElement("slot");e.setAttribute("name","header"),t.appendChild(e);const a=Ai.content.querySelector('[part="content"]'),r=a.querySelector("slot:not([name])"),n=document.createElement("div");n.setAttribute("part","message"),a.appendChild(n),n.appendChild(r);const s=Ai.content.querySelector('[part="footer"]');s.setAttribute("role","toolbar");const o=s.querySelector("slot");s.removeChild(o),s.appendChild(y2.content.cloneNode(!0))}return Ai}_finishClosing(){super._finishClosing(),this.dispatchEvent(new CustomEvent("vaadin-confirm-dialog-close"))}_headerFooterRendererChange(t,e,a){super._headerFooterRendererChange(t,e,a),this.setAttribute("has-header",""),this.setAttribute("has-footer","")}}customElements.define(Eo.is,Eo);class Co extends S0{static get is(){return"vaadin-confirm-dialog-dialog"}static get template(){return V`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-confirm-dialog-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-confirm-dialog-overlay>
    `}}customElements.define(Co.is,Co);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fl=tr(i=>class extends i{get slots(){return{}}ready(){super.ready(),this._connectSlotMixin()}_connectSlotMixin(){Object.keys(this.slots).forEach(e=>{if(!(this._getDirectSlotChild(e)!==void 0)){const r=this.slots[e],n=r();n instanceof Element&&(e!==""&&n.setAttribute("slot",e),this.appendChild(n))}})}_getDirectSlotChild(e){return Array.from(this.childNodes).find(a=>a.nodeType===Node.ELEMENT_NODE&&a.slot===e||a.nodeType===Node.TEXT_NODE&&a.textContent.trim()&&e==="")}});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Io extends Fl(rt(as(Y))){static get template(){return V`
      <style>
        :host,
        [hidden] {
          display: none !important;
        }
      </style>

      <vaadin-confirm-dialog-dialog
        id="dialog"
        opened="{{opened}}"
        aria-label="[[_getAriaLabel(header)]]"
        theme$="[[_theme]]"
        no-close-on-outside-click
        no-close-on-esc="[[noCloseOnEsc]]"
      ></vaadin-confirm-dialog-dialog>

      <div hidden>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="cancel-button"></slot>
        <slot name="reject-button"></slot>
        <slot name="confirm-button"></slot>
      </div>
    `}static get is(){return"vaadin-confirm-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},header:{type:String,value:""},message:{type:String,value:""},confirmText:{type:String,value:"Confirm"},confirmTheme:{type:String,value:"primary"},noCloseOnEsc:{type:Boolean,value:!1},reject:{type:Boolean,reflectToAttribute:!0,value:!1},rejectText:{type:String,value:"Reject"},rejectTheme:{type:String,value:"error tertiary"},cancel:{type:Boolean,reflectToAttribute:!0,value:!1},cancelText:{type:String,value:"Cancel"},cancelTheme:{type:String,value:"tertiary"},_cancelButton:{type:HTMLElement,observer:"_cancelButtonChanged"},_confirmButton:{type:HTMLElement,observer:"_confirmButtonChanged"},_headerNode:{type:HTMLElement},_messageNode:{type:HTMLElement},_rejectButton:{type:HTMLElement,observer:"_rejectButtonChanged"}}}static get observers(){return["__updateConfirmButton(_confirmButton, confirmText, confirmTheme)","__updateCancelButton(_cancelButton, cancelText, cancelTheme, cancel)","__updateHeaderNode(_headerNode, header)","__updateMessageNode(_messageNode, message)","__updateRejectButton(_rejectButton, rejectText, rejectTheme, reject)"]}get slots(){return{...super.slots,header:()=>{const t=document.createElement("h3");return this.__defaultHeader=t,t},"":()=>{const t=document.createElement("div");return this.__defaultMessage=t,t},"cancel-button":()=>{const t=document.createElement("vaadin-button");return t.setAttribute("theme",this.cancelTheme),t.textContent=this.cancelText,t._isDefaultButton=!0,t},"reject-button":()=>{const t=document.createElement("vaadin-button");return t.setAttribute("theme",this.rejectTheme),t.textContent=this.rejectText,t._isDefaultButton=!0,t},"confirm-button":()=>{const t=document.createElement("vaadin-button");return t._isDefaultButton=!0,t}}}constructor(){super(),this.__slottedNodes=[],this._observer=new ue(this,t=>{this.__onDomChange(t.addedNodes)})}ready(){super.ready(),this.__boundCancel=this._cancel.bind(this),this.__boundConfirm=this._confirm.bind(this),this.__boundReject=this._reject.bind(this),this._overlayElement=this.$.dialog.$.overlay,this._overlayElement.addEventListener("vaadin-overlay-escape-press",this._escPressed.bind(this)),this._overlayElement.addEventListener("vaadin-overlay-open",()=>this.__onDialogOpened()),this._overlayElement.addEventListener("vaadin-confirm-dialog-close",()=>this.__onDialogClosed()),this._dimensions&&Object.keys(this._dimensions).forEach(t=>{this._setDimension(t,this._dimensions[t])})}__onDialogOpened(){const t=this._overlayElement;this.__slottedNodes.forEach(a=>{t.appendChild(a)});const e=t.querySelector('[slot="confirm-button"]');e&&e.focus()}__onDialogClosed(){const t=this.__slottedNodes;this.__slottedNodes=[],t.forEach(e=>{this.appendChild(e)})}__onDomChange(t){t.forEach(e=>{this.__slottedNodes.push(e);const a=e.nodeType===Node.ELEMENT_NODE,r=a?e.getAttribute("slot"):"";if(r)if(r.indexOf("button")>=0){const[n]=r.split("-");this[`_${n}Button`]=e}else r==="header"&&(this._headerNode=e);else(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==""||a&&e.slot==="")&&(this._messageNode=e)})}_cancelButtonChanged(t,e){this.__setupSlottedButton(t,e,this.__boundCancel)}_confirmButtonChanged(t,e){this.__setupSlottedButton(t,e,this.__boundConfirm)}_rejectButtonChanged(t,e){this.__setupSlottedButton(t,e,this.__boundReject)}__setupSlottedButton(t,e,a){e&&e.parentElement&&e.remove(),t.addEventListener("click",a)}__updateCancelButton(t,e,a,r){t&&(t._isDefaultButton&&(t.textContent=e,t.setAttribute("theme",a)),t.toggleAttribute("hidden",!r))}__updateConfirmButton(t,e,a){t&&t._isDefaultButton&&(t.textContent=e,t.setAttribute("theme",a))}__updateHeaderNode(t,e){t&&t===this.__defaultHeader&&(t.textContent=e)}__updateMessageNode(t,e){t&&t===this.__defaultMessage&&(t.textContent=e)}__updateRejectButton(t,e,a,r){t&&(t._isDefaultButton&&(t.textContent=e,t.setAttribute("theme",a)),t.toggleAttribute("hidden",!r))}_escPressed(t){t.defaultPrevented||this._cancel()}_confirm(){this.dispatchEvent(new CustomEvent("confirm")),this.opened=!1}_cancel(){this.dispatchEvent(new CustomEvent("cancel")),this.opened=!1}_reject(){this.dispatchEvent(new CustomEvent("reject")),this.opened=!1}_getAriaLabel(t){return t||"confirmation"}_setWidth(t){this._setDimensionIfAttached("width",t)}_setHeight(t){this._setDimensionIfAttached("height",t)}_setDimensionIfAttached(t,e){this._overlayElement?this._setDimension(t,e):(this._dimensions=this._dimensions||{},this._dimensions[t]=e)}_setDimension(t,e){this._overlayElement.style.setProperty(`--_vaadin-confirm-dialog-content-${t}`,e)}}customElements.define(Io.is,Io);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dl=O`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    /* align with text-field height + vertical paddings */
    line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }

  :host::before {
    margin-top: var(--lumo-space-xs);
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  /* align with text-field label */
  :host([has-label]) [part='label'] {
    padding-bottom: calc(0.5em - var(--lumo-space-xs));
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-label]))::before {
    display: none;
  }

  /* align with text-field error message */
  :host([has-error-message]) [part='error-message']::before {
    height: calc(0.4em - var(--lumo-space-xs));
  }

  :host([focused]:not([readonly]):not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }

  /* Disabled */
  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small'][has-label]) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small'][has-label]) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* When custom-field is used with components without outer margin */
  :host([theme~='whitespace'][has-label]) [part='label'] {
    padding-bottom: 0.5em;
  }
`;R("vaadin-custom-field",[wn,En,Dl],{moduleId:"lumo-custom-field"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class So extends ir(Qe(H0(X(rt(Y))))){static get is(){return"vaadin-custom-field"}static get template(){return V`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
          /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-custom-field-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .inputs-wrapper {
          flex: none;
        }
      </style>

      <div class="vaadin-custom-field-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="inputs-wrapper" on-change="__onInputChange">
          <slot id="slot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{name:String,value:{type:String,observer:"__valueChanged",notify:!0},inputs:{type:Array,readOnly:!0},i18n:{type:Object,value:()=>({parseValue(t){return t.split("	")},formatValue(t){return t.join("	")}})}}}connectedCallback(){super.connectedCallback(),this.__observer&&this.__observer.connect()}disconnectedCallback(){super.disconnectedCallback(),this.__observer&&this.__observer.disconnect()}ready(){super.ready(),this.setAttribute("role","group"),this.ariaTarget=this,this.__setInputsFromSlot(),this.__observer=new ue(this.$.slot,()=>{this.__setInputsFromSlot()})}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}_setFocused(t){super._setFocused(t),t||this.validate()}_shouldRemoveFocus(t){const{relatedTarget:e}=t;return!this.inputs.some(a=>e===(a.focusElement||a))}checkValidity(){return!(this.inputs.filter(e=>!(e.validate||e.checkValidity).call(e)).length||this.required&&!this.value.trim())}_onKeyDown(t){t.key==="Tab"&&(this.inputs.indexOf(t.target)<this.inputs.length-1&&!t.shiftKey||this.inputs.indexOf(t.target)>0&&t.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue())}__onInputChange(t){t.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0,this.value=this.i18n.formatValue.apply(this,[this.inputs.map(t=>t.value)]),this.__settingValue=!1}__queryAllAssignedElements(t){const e=[];let a;return t.tagName==="SLOT"?a=t.assignedElements({flatten:!0}):(e.push(t),a=Array.from(t.children)),a.forEach(r=>e.push(...this.__queryAllAssignedElements(r))),e}__isInput(t){return!(t.getAttribute("slot")==="input"||t.getAttribute("slot")==="textarea")&&(t.validate||t.checkValidity)}__getInputsFromSlot(){return this.__queryAllAssignedElements(this.$.slot).filter(t=>this.__isInput(t))}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__toggleHasValue(t){this.toggleAttribute("has-value",t!==null&&t.trim()!=="")}__valueChanged(t,e){if(this.__settingValue||!this.inputs)return;this.__toggleHasValue(t);const a=this.i18n.parseValue(t);if(!a||a.length===0){console.warn("Value parser has not provided values array");return}this.inputs.forEach((r,n)=>{r.value=a[n]}),e!==void 0&&this.validate()}}customElements.define(So.is,So);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const M2=O`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;R("vaadin-time-picker",[K0,M2],{moduleId:"lumo-time-picker"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class To extends Y1{static get is(){return"vaadin-time-picker-item"}}customElements.define(To.is,To);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ro extends q1{static get is(){return"vaadin-time-picker-scroller"}}customElements.define(Ro.is,Ro);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-time-picker-overlay",O`
    #overlay {
      width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
    }
  `,{moduleId:"vaadin-time-picker-overlay-styles"});class Oo extends H1{static get is(){return"vaadin-time-picker-overlay"}}customElements.define(Oo.is,Oo);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Po extends X1(X(Y)){static get is(){return"vaadin-time-picker-combo-box"}static get template(){return V`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-time-picker-overlay>
    `}static get properties(){return{positionTarget:{type:Object}}}get _tagNamePrefix(){return"vaadin-time-picker"}get clearElement(){return this.querySelector('[part="clear-button"]')}ready(){super.ready(),this.allowCustomValue=!0,this._toggleElement=this.querySelector(".toggle-button"),this.setAttribute("dir","ltr")}}customElements.define(Po.is,Po);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lo="00:00:00.000",ko="23:59:59.999";R("vaadin-time-picker",ts,{moduleId:"vaadin-time-picker-styles"});class Hi extends lu(Z1(X(rt(Y)))){static get is(){return"vaadin-time-picker"}static get template(){return V`
      <style>
        /* See https://github.com/vaadin/vaadin-time-picker/issues/145 */
        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }

        [part~='toggle-button'] {
          cursor: pointer;
        }
      </style>

      <div class="vaadin-time-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-time-picker-combo-box
          id="comboBox"
          filtered-items="[[__dropdownItems]]"
          value="{{_comboBoxValue}}"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          clear-button-visible="[[clearButtonVisible]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          position-target="[[_inputContainer]]"
          theme$="[[_theme]]"
          on-change="__onComboBoxChange"
        >
          <vaadin-input-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="prefix" slot="prefix"></slot>
            <slot name="input"></slot>
            <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-input-container>
        </vaadin-time-picker-combo-box>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:String,notify:!0,value:""},min:{type:String,value:""},max:{type:String,value:""},step:{type:Number},autoOpenDisabled:Boolean,__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:t=>{if(!t)return;const e=(r=0,n="00")=>(n+r).substr((n+r).length-n.length);let a=`${e(t.hours)}:${e(t.minutes)}`;return t.seconds!==void 0&&(a+=`:${e(t.seconds)}`),t.milliseconds!==void 0&&(a+=`.${e(t.milliseconds,"000")}`),a},parseTime:t=>{const e="(\\d|[0-1]\\d|2[0-3])",a="(\\d|[0-5]\\d)",r=a,n="(\\d{1,3})",o=new RegExp(`^${e}(?::${a}(?::${r}(?:\\.${n})?)?)?$`).exec(t);if(o){if(o[4])for(;o[4].length<3;)o[4]+="0";return{hours:o[1],minutes:o[2],seconds:o[3],milliseconds:o[4]}}}})},_comboBoxValue:{type:String,observer:"__comboBoxValueChanged"},_inputContainer:Object}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}static get constraints(){return[...super.constraints,"min","max"]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Q0(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new J0(this.inputElement,this._labelController)),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]')}_inputElementChanged(t){super._inputElementChanged(t),t&&this.$.comboBox._setInputElement(t)}checkValidity(){return!!(this.inputElement.checkValidity()&&(!this.value||this._timeAllowed(this.i18n.parseTime(this.value)))&&(!this._comboBoxValue||this.i18n.parseTime(this._comboBoxValue)))}_setFocused(t){super._setFocused(t),t||this.validate()}__validDayDivisor(t){return!t||24*3600%t===0||t<1&&t%1*1e3%1===0}_onKeyDown(t){if(super._onKeyDown(t),this.readonly||this.disabled||this.__dropdownItems.length)return;const e=this.__validDayDivisor(this.step)&&this.step||60;t.keyCode===40?this.__onArrowPressWithStep(-e):t.keyCode===38&&this.__onArrowPressWithStep(e)}_onEscape(){}__onArrowPressWithStep(t){const e=this.__addStep(this.__getMsec(this.__memoValue),t,!0);this.__memoValue=e,this.inputElement.value=this.i18n.formatTime(this.__validateTime(e)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(t){let e=(t&&t.hours||0)*60*60*1e3;return e+=(t&&t.minutes||0)*60*1e3,e+=(t&&t.seconds||0)*1e3,e+=t&&parseInt(t.milliseconds)||0,e}__getSec(t){let e=(t&&t.hours||0)*60*60;return e+=(t&&t.minutes||0)*60,e+=t&&t.seconds||0,e+=t&&t.milliseconds/1e3||0,e}__addStep(t,e,a){t===0&&e<0&&(t=24*60*60*1e3);const r=e*1e3,n=t%r;r<0&&n&&a?t-=n:r>0&&n&&a?t-=n-r:t+=r;const s=Math.floor(t/1e3/60/60);t-=s*1e3*60*60;const o=Math.floor(t/1e3/60);t-=o*1e3*60;const h=Math.floor(t/1e3);return t-=h*1e3,{hours:s<24?s:0,minutes:o,seconds:h,milliseconds:t}}__updateDropdownItems(t,e,a,r){const n=this.__validateTime(this.__parseISO(e||Lo)),s=this.__getSec(n),o=this.__validateTime(this.__parseISO(a||ko)),h=this.__getSec(o);if(this.__adjustValue(s,h,n,o),this.__dropdownItems=this.__generateDropdownList(s,h,r),r!==this.__oldStep){this.__oldStep=r;const l=this.__validateTime(this.__parseISO(this.value));this.__updateValue(l)}this.value&&(this._comboBoxValue=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(t,e,a){if(a<15*60||!this.__validDayDivisor(a))return[];const r=[];a=a||3600;let n=-a+t;for(;n+a>=t&&n+a<=e;){const s=this.__validateTime(this.__addStep(n*1e3,a));n+=a;const o=this.i18n.formatTime(s);r.push({label:o,value:o})}return r}__adjustValue(t,e,a,r){if(!this.__memoValue)return;const n=this.__getSec(this.__memoValue);n<t?this.__updateValue(a):n>e&&this.__updateValue(r)}_valueChanged(t,e){const a=this.__memoValue=this.__parseISO(t),r=this.__formatISO(a)||"";t!==""&&t!==null&&!a?this.value=e===void 0?"":e:t!==r?this.value=r:this.__keepInvalidInput?delete this.__keepInvalidInput:this.__updateInputValue(a),this._toggleHasValue(this._hasValue)}__comboBoxValueChanged(t,e){if(t===""&&e===void 0)return;const a=this.i18n.parseTime(t),r=this.i18n.formatTime(a)||"";a?t!==r?this._comboBoxValue=r:this.__updateValue(a):(t!==""&&(this.__keepInvalidInput=!0),this.value="")}__onComboBoxChange(t){t.stopPropagation(),this.validate(),this.__dispatchChange()}__updateValue(t){const e=this.__formatISO(this.__validateTime(t))||"";this.value=e}__updateInputValue(t){const e=this.i18n.formatTime(this.__validateTime(t))||"";this._comboBoxValue=e}__validateTime(t){return t&&(t.hours=parseInt(t.hours),t.minutes=parseInt(t.minutes||0),t.seconds=this.__stepSegment<3?void 0:parseInt(t.seconds||0),t.milliseconds=this.__stepSegment<4?void 0:parseInt(t.milliseconds||0)),t}get __stepSegment(){if(this.step%3600===0)return 1;if(this.step%60===0||!this.step)return 2;if(this.step%1===0)return 3;if(this.step<1)return 4}__formatISO(t){return Hi.properties.i18n.value().formatTime(t)}__parseISO(t){return Hi.properties.i18n.value().parseTime(t)}_timeAllowed(t){const e=this.i18n.parseTime(this.min||Lo),a=this.i18n.parseTime(this.max||ko);return(!this.__getMsec(e)||this.__getMsec(t)>=this.__getMsec(e))&&(!this.__getMsec(a)||this.__getMsec(t)<=this.__getMsec(a))}_onClearButtonClick(){}_onChange(){}_onInput(){this._checkInputValue()}}customElements.define(Hi.is,Hi);R("vaadin-date-time-picker",[wn,En,Dl],{moduleId:"lumo-date-time-picker"});R("vaadin-date-time-picker-date-picker",O`
    :host {
      margin-right: 2px;
    }

    /* RTL specific styles */
    :host([dir='rtl']) {
      margin-right: auto;
      margin-left: 2px;
    }

    [part~='input-field'] {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-date-picker"});R("vaadin-date-time-picker-time-picker",O`
    [part~='input-field'] {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-time-picker"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fo extends cu{static get is(){return"vaadin-date-time-picker-date-picker"}}customElements.define(Fo.is,Fo);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Do extends Hi{static get is(){return"vaadin-date-time-picker-time-picker"}}customElements.define(Do.is,Do);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-date-time-picker",ts,{moduleId:"vaadin-date-time-picker"});function Nl(i,t){for(;i;){if(i.properties&&i.properties[t])return i.properties[t];i=Object.getPrototypeOf(i)}}const T0=customElements.get("vaadin-date-time-picker-date-picker"),b2=customElements.get("vaadin-date-time-picker-time-picker"),Bl=Nl(T0,"i18n").value(),Ur=Nl(b2,"i18n").value(),No=Object.keys(Bl),Bo=Object.keys(Ur);class Go extends ir(Fl(Cn(Qe(X(rt(Y)))))){static get template(){return V`
      <style>
        .vaadin-date-time-picker-container {
          --vaadin-field-default-width: auto;
        }

        .slots {
          display: flex;
          --vaadin-field-default-width: 12em;
        }

        [part='date'],
        .slots ::slotted([slot='date-picker']) {
          pointer-events: all;
          min-width: 0;
          flex: 1 1 auto;
        }

        [part='time'],
        .slots ::slotted([slot='time-picker']) {
          pointer-events: all;
          min-width: 0;
          flex: 1 1.65 auto;
        }
      </style>

      <div class="vaadin-date-time-picker-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="slots">
          <slot name="date-picker" id="dateSlot"></slot>
          <slot name="time-picker" id="timeSlot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-date-time-picker"}static get properties(){return{name:{type:String},value:{type:String,notify:!0,value:"",observer:"__valueChanged"},min:{type:String,observer:"__minChanged"},max:{type:String,observer:"__maxChanged"},__minDateTime:{type:Date,value:""},__maxDateTime:{type:Date,value:""},datePlaceholder:{type:String},timePlaceholder:{type:String},step:{type:Number},initialPosition:String,showWeekNumbers:{type:Boolean},autoOpenDisabled:Boolean,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},autofocus:{type:Boolean},__selectedDateTime:{type:Date},i18n:{type:Object,value:()=>({...Bl,...Ur})},__datePicker:{type:HTMLElement,observer:"__datePickerChanged"},__timePicker:{type:HTMLElement,observer:"__timePickerChanged"}}}static get observers(){return["__selectedDateTimeChanged(__selectedDateTime)","__datePlaceholderChanged(datePlaceholder)","__timePlaceholderChanged(timePlaceholder)","__stepChanged(step)","__initialPositionChanged(initialPosition)","__showWeekNumbersChanged(showWeekNumbers)","__requiredChanged(required)","__invalidChanged(invalid)","__disabledChanged(disabled)","__readonlyChanged(readonly)","__i18nChanged(i18n.*)","__autoOpenDisabledChanged(autoOpenDisabled)","__themeChanged(_theme, __datePicker, __timePicker)","__pickersChanged(__datePicker, __timePicker)"]}get slots(){return{...super.slots,"date-picker":()=>{const t=document.createElement("vaadin-date-time-picker-date-picker");return t.__defaultPicker=!0,t},"time-picker":()=>{const t=document.createElement("vaadin-date-time-picker-time-picker");return t.__defaultPicker=!0,t}}}constructor(){super(),this.__defaultDateMinMaxValue=void 0,this.__defaultTimeMinValue="00:00:00.000",this.__defaultTimeMaxValue="23:59:59.999",this.__changeEventHandler=this.__changeEventHandler.bind(this),this.__valueChangedEventHandler=this.__valueChangedEventHandler.bind(this),this._observer=new ue(this,t=>{this.__onDomChange(t.addedNodes)})}ready(){super.ready(),this.addEventListener("focusout",t=>{t.relatedTarget!==this.__datePicker.$.overlay&&this.validate()}),this.__datePicker=this._getDirectSlotChild("date-picker"),this.__timePicker=this._getDirectSlotChild("time-picker"),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>this.focus()),this.setAttribute("role","group"),this.ariaTarget=this}focus(){this.__datePicker.focus()}_shouldRemoveFocus(t){const e=t.relatedTarget;return!(this.__datePicker.contains(e)||this.__timePicker.contains(e)||e===this.__datePicker.$.overlay)}__syncI18n(t,e,a){a=a||Object.keys(e.i18n),a.forEach(r=>{e.i18n&&e.i18n.hasOwnProperty(r)&&t.set(`i18n.${r}`,e.i18n[r])})}__changeEventHandler(t){t.stopPropagation(),this.__dispatchChangeForValue===this.value&&(this.__dispatchChange(),this.validate()),this.__dispatchChangeForValue=void 0}__addInputListeners(t){t.addEventListener("change",this.__changeEventHandler),t.addEventListener("value-changed",this.__valueChangedEventHandler)}__removeInputListeners(t){t.removeEventListener("change",this.__changeEventHandler),t.removeEventListener("value-changed",this.__valueChangedEventHandler)}__onDomChange(t){t.filter(e=>e.nodeType===Node.ELEMENT_NODE).forEach(e=>{const a=e.getAttribute("slot");a==="date-picker"?this.__datePicker=e:a==="time-picker"&&(this.__timePicker=e)}),this.value&&(this.min||this.max)&&this.validate()}__datePickerChanged(t,e){!t||(e&&(this.__removeInputListeners(e),e.remove()),this.__addInputListeners(t),t.__defaultPicker?(t.placeholder=this.datePlaceholder,t.invalid=this.invalid,t.initialPosition=this.initialPosition,t.showWeekNumbers=this.showWeekNumbers,this.__syncI18n(t,this,No)):(this.datePlaceholder=t.placeholder,this.initialPosition=t.initialPosition,this.showWeekNumbers=t.showWeekNumbers,this.__syncI18n(this,t,No)),t.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue),t.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue),t.required=this.required,t.disabled=this.disabled,t.readonly=this.readonly,t.autoOpenDisabled=this.autoOpenDisabled,t.validate=()=>{},t._validateInput=()=>{})}__timePickerChanged(t,e){!t||(e&&(this.__removeInputListeners(e),e.remove()),this.__addInputListeners(t),t.__defaultPicker?(t.placeholder=this.timePlaceholder,t.step=this.step,t.invalid=this.invalid,this.__syncI18n(t,this,Bo)):(this.timePlaceholder=t.placeholder,this.step=t.step,this.__syncI18n(this,t,Bo)),this.__updateTimePickerMinMax(),t.required=this.required,t.disabled=this.disabled,t.readonly=this.readonly,t.autoOpenDisabled=this.autoOpenDisabled,t.validate=()=>{})}__updateTimePickerMinMax(){if(this.__timePicker&&this.__datePicker){const t=this.__parseDate(this.__datePicker.value),e=Er(this.__minDateTime,this.__maxDateTime),a=this.__timePicker.value;this.__minDateTime&&Er(t,this.__minDateTime)||e?this.__timePicker.min=this.__dateToIsoTimeString(this.__minDateTime):this.__timePicker.min=this.__defaultTimeMinValue,this.__maxDateTime&&Er(t,this.__maxDateTime)||e?this.__timePicker.max=this.__dateToIsoTimeString(this.__maxDateTime):this.__timePicker.max=this.__defaultTimeMaxValue,this.__timePicker.value!==a&&(this.__timePicker.value=a)}}__i18nChanged(t){this.__datePicker&&this.__datePicker.set(t.path,t.value),this.__timePicker&&this.__timePicker.set(t.path,t.value)}__datePlaceholderChanged(t){this.__datePicker&&(this.__datePicker.placeholder=t)}__timePlaceholderChanged(t){this.__timePicker&&(this.__timePicker.placeholder=t)}__stepChanged(t){this.__timePicker&&this.__timePicker.step!==t&&(this.__timePicker.step=t)}__initialPositionChanged(t){this.__datePicker&&(this.__datePicker.initialPosition=t)}__showWeekNumbersChanged(t){this.__datePicker&&(this.__datePicker.showWeekNumbers=t)}__invalidChanged(t){this.__datePicker&&(this.__datePicker.invalid=t),this.__timePicker&&(this.__timePicker.invalid=t)}__requiredChanged(t){this.__datePicker&&(this.__datePicker.required=t),this.__timePicker&&(this.__timePicker.required=t)}__disabledChanged(t){this.__datePicker&&(this.__datePicker.disabled=t),this.__timePicker&&(this.__timePicker.disabled=t)}__readonlyChanged(t){this.__datePicker&&(this.__datePicker.readonly=t),this.__timePicker&&(this.__timePicker.readonly=t)}__parseDate(t){return T0.prototype._parseDate(t)}__formatDateISO(t,e){return t?T0.prototype._formatISO(t):e}__formatTimeISO(t){return Ur.formatTime(t)}__parseTimeISO(t){return Ur.parseTime(t)}__parseDateTime(t){const[e,a]=t.split("T");if(!(e&&a))return;const r=this.__parseDate(e);if(!r)return;const n=this.__parseTimeISO(a);if(!!n)return r.setHours(parseInt(n.hours)),r.setMinutes(parseInt(n.minutes||0)),r.setSeconds(parseInt(n.seconds||0)),r.setMilliseconds(parseInt(n.milliseconds||0)),r}__formatDateTime(t){if(!t)return"";const e=this.__formatDateISO(t,""),a=this.__dateToIsoTimeString(t);return`${e}T${a}`}__dateToIsoTimeString(t){return this.__formatTimeISO(this.__validateTime({hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds(),milliseconds:t.getMilliseconds()}))}__validateTime(t){return t&&(t.seconds=this.__stepSegment<3?void 0:t.seconds,t.milliseconds=this.__stepSegment<4?void 0:t.milliseconds),t}get __inputs(){return[this.__datePicker,this.__timePicker]}checkValidity(){const t=this.__inputs.some(a=>!a.checkValidity()),e=this.required&&this.__inputs.some(a=>!a.value);return!(t||e)}get __stepSegment(){const t=this.step==null?60:parseFloat(this.step);if(t%3600===0)return 1;if(t%60===0||!t)return 2;if(t%1===0)return 3;if(t<1)return 4}__dateTimeEquals(t,e){return Er(t,e)?t.getHours()===e.getHours()&&t.getMinutes()===e.getMinutes()&&t.getSeconds()===e.getSeconds()&&t.getMilliseconds()===e.getMilliseconds():!1}__handleDateTimeChange(t,e,a,r){if(!a){this[t]="",this[e]="";return}const n=this.__parseDateTime(a);if(!n){this[t]=r;return}this.__dateTimeEquals(this[e],n)||(this[e]=n)}__valueChanged(t,e){this.__handleDateTimeChange("value","__selectedDateTime",t,e),e!==void 0&&(this.__dispatchChangeForValue=t),this.toggleAttribute("has-value",!!t),this.__updateTimePickerMinMax()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__minChanged(t,e){this.__handleDateTimeChange("min","__minDateTime",t,e),this.__datePicker&&(this.__datePicker.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__maxChanged(t,e){this.__handleDateTimeChange("max","__maxDateTime",t,e),this.__datePicker&&(this.__datePicker.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__selectedDateTimeChanged(t){const e=this.__formatDateTime(t);if(this.value!==e&&(this.value=e),Boolean(this.__datePicker&&this.__datePicker.$)&&!this.__ignoreInputValueChange){this.__ignoreInputValueChange=!0;const[r,n]=this.value.split("T");this.__datePicker.value=r||"",this.__timePicker.value=n||"",this.__ignoreInputValueChange=!1}}get __formattedValue(){const t=this.__datePicker.value,e=this.__timePicker.value;return t&&e?[t,e].join("T"):""}__valueChangedEventHandler(){if(this.__ignoreInputValueChange)return;const t=this.__formattedValue,[e,a]=t.split("T");this.__ignoreInputValueChange=!0,this.__updateTimePickerMinMax(),e&&a?t!==this.value&&(this.value=t):this.value="",this.__ignoreInputValueChange=!1}__autoOpenDisabledChanged(t){this.__datePicker&&(this.__datePicker.autoOpenDisabled=t),this.__timePicker&&(this.__timePicker.autoOpenDisabled=t)}__themeChanged(t,e,a){!e||!a||[e,a].forEach(r=>{t?r.setAttribute("theme",t):r.removeAttribute("theme")})}__pickersChanged(t,e){!t||!e||t.__defaultPicker===e.__defaultPicker&&(t.value?this.__valueChangedEventHandler():this.value&&this.__selectedDateTimeChanged(this.__selectedDateTime))}}customElements.define(Go.is,Go);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-field-outline",O`
    :host {
      transition: opacity 0.3s;
      -webkit-mask-image: none !important;
      mask-image: none !important;
    }

    :host::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0 0 0 2px var(--_active-user-color);
      border-radius: var(--lumo-border-radius);
      transition: box-shadow 0.3s;
    }

    :host([context$='checkbox'])::before {
      box-shadow: 0 0 0 2px var(--lumo-base-color), 0 0 0 4px var(--_active-user-color);
    }

    :host([context$='radio-button'])::before {
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--lumo-base-color), 0 0 0 5px var(--_active-user-color);
    }

    :host([context$='item'])::before {
      box-shadow: inset 0 0 0 2px var(--_active-user-color);
    }
  `,{moduleId:"lumo-field-outline"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-user-tags-overlay",O`
    [part='overlay'] {
      will-change: opacity, transform;
    }

    :host([opening]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-enter ease-out both;
    }

    @keyframes lumo-user-tags-enter {
      0% {
        opacity: 0;
      }
    }

    :host([closing]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-exit both;
    }

    @keyframes lumo-user-tags-exit {
      100% {
        opacity: 0;
      }
    }
  `,{moduleId:"lumo-user-tags-overlay"});R("vaadin-user-tag",O`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      border-radius: var(--lumo-border-radius-s);
      box-shadow: var(--lumo-box-shadow-xs);
      --vaadin-user-tag-offset: var(--lumo-space-xs);
    }

    [part='name'] {
      color: var(--lumo-primary-contrast-color);
      padding: 0.3em calc(0.3em + var(--lumo-border-radius-s) / 4);
      line-height: 1;
      font-weight: 500;
      min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    }
  `,{moduleId:"lumo-user-tag"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $o extends X(es(Y)){static get is(){return"vaadin-user-tag"}static get template(){return V`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          margin: 0 0 var(--vaadin-user-tag-offset);
          opacity: 0;
          height: 1.3rem;
          transition: opacity 0.2s ease-in-out;
          background-color: var(--vaadin-user-tag-color);
          color: #fff;
          cursor: default;
          -webkit-user-select: none;
          user-select: none;
          --vaadin-user-tag-offset: 4px;
        }

        :host(.show) {
          opacity: 1;
        }

        :host(:last-of-type) {
          margin-bottom: 0;
        }

        [part='name'] {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          box-sizing: border-box;
          padding: 2px 4px;
          height: 1.3rem;
          font-size: 13px;
        }
      </style>
      <div part="name">[[name]]</div>
    `}static get properties(){return{name:{type:String},uid:{type:String},colorIndex:{type:Number,observer:"_colorIndexChanged"}}}ready(){super.ready(),this.addEventListener("mousedown",this._onClick.bind(this),!0)}_colorIndexChanged(t){t!=null&&this.style.setProperty("--vaadin-user-tag-color",`var(--vaadin-user-color-${t})`)}_onClick(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("user-tag-click",{bubbles:!0,composed:!0,detail:{name:this.name}}))}}customElements.define($o.is,$o);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-user-tags-overlay",O`
    :host {
      background: transparent;
      box-shadow: none;
    }

    [part='overlay'] {
      box-shadow: none;
      background: transparent;
      position: relative;
      left: -4px;
      padding: 4px;
      outline: none;
      overflow: visible;
    }

    ::slotted([part='tags']) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    :host([dir='rtl']) [part='overlay'] {
      left: auto;
      right: -4px;
    }

    [part='content'] {
      padding: 0;
    }

    :host([opening]),
    :host([closing]) {
      animation: 0.14s user-tags-overlay-dummy-animation;
    }

    @keyframes user-tags-overlay-dummy-animation {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 1;
      }
    }
  `);class Vo extends Z0(er){static get is(){return"vaadin-user-tags-overlay"}ready(){super.ready(),this.$.overlay.setAttribute("tabindex","-1")}}customElements.define(Vo.is,Vo);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jo=(i,t)=>new Promise(e=>{const a=()=>{i.removeEventListener(t,a),e()};i.addEventListener(t,a)});class Uo extends Y{static get is(){return"vaadin-user-tags"}static get template(){return V`
      <style>
        :host {
          position: absolute;
        }
      </style>
      <vaadin-user-tags-overlay
        id="overlay"
        modeless
        opened="[[opened]]"
        no-vertical-overlap
        on-vaadin-overlay-open="_onOverlayOpen"
      ></vaadin-user-tags-overlay>
    `}static get properties(){return{hasFocus:{type:Boolean,value:!1,observer:"_hasFocusChanged"},opened:{type:Boolean,value:!1},flashing:{type:Boolean,value:!1},target:{type:Object,observer:"__targetChanged"},users:{type:Array,value:()=>[]},duration:{type:Number,value:200},delay:{type:Number,value:2e3},__flashQueue:{type:Array,value:()=>[]},__isTargetVisible:{type:Boolean,value:!1}}}constructor(){super(),this.__targetVisibilityObserver=new IntersectionObserver(([t])=>{this.__onTargetVisibilityChange(t.isIntersecting)},{threshold:1})}connectedCallback(){super.connectedCallback(),this.target&&this.__targetVisibilityObserver.observe(this.target)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1,this.target&&this.__targetVisibilityObserver.unobserve(this.target)}ready(){super.ready(),this.$.overlay.renderer=t=>{if(!t.firstChild){const e=document.createElement("div");e.setAttribute("part","tags"),t.appendChild(e)}},this.$.overlay.requestContentUpdate()}__onTargetVisibilityChange(t){if(this.__isTargetVisible=t,t&&this.__flashQueue.length>0&&!this.flashing){this.flashTags(this.__flashQueue.shift());return}if(t&&this.hasFocus){this.opened=!0;return}!t&&this.opened&&(this.opened=!1)}__targetChanged(t,e){this.$.overlay.positionTarget=t,e&&this.__targetVisibilityObserver.unobserve(e),t&&this.__targetVisibilityObserver.observe(t)}_hasFocusChanged(t){t&&this.flashing&&this.stopFlash()}get wrapper(){return this.$.overlay.content.querySelector('[part="tags"]')}createUserTag(t){const e=document.createElement("vaadin-user-tag");return e.name=t.name,e.uid=t.id,e.colorIndex=t.colorIndex,e}getTagForUser(t){return Array.from(this.wrapper.children).filter(e=>e.uid===t.id)[0]}getChangedTags(t,e){const a=e.map(n=>this.getTagForUser(n));return{added:t.map(n=>this.getTagForUser(n)||this.createUserTag(n)),removed:a}}getChangedUsers(t,e){const a=[],r=[];e.forEach(o=>{for(let h=0;h<o.removed.length;h++)r.push(o.removed[h]);for(let h=o.addedCount-1;h>=0;h--)a.push(t[o.index+h])});const n=a.filter(o=>!r.some(h=>o.id===h.id)),s=r.filter(o=>!a.some(h=>o.id===h.id));return{addedUsers:n,removedUsers:s}}applyTagsStart({added:t,removed:e}){const a=this.wrapper;e.forEach(r=>{r&&(r.classList.add("removing"),r.classList.remove("show"))}),t.forEach(r=>a.insertBefore(r,a.firstChild))}applyTagsEnd({added:t,removed:e}){const a=this.wrapper;e.forEach(r=>{r&&r.parentNode===a&&a.removeChild(r)}),t.forEach(r=>r&&r.classList.add("show"))}setUsers(t){this.requestContentUpdate();const e=Y0(t,this.users);if(e.length===0)return;const{addedUsers:a,removedUsers:r}=this.getChangedUsers(t,e);if(a.length===0&&r.length===0)return;const n=this.getChangedTags(a,r);if(this.__flashQueue.length>0){for(let s=0;s<r.length;s++)if(n.removed[s]===null)for(let o=0;o<this.__flashQueue.length;o++)this.__flashQueue[o].some(h=>h.uid===r[s].id)&&this.splice("__flashQueue",s,1)}if(this.opened&&this.hasFocus)this.updateTags(t,n);else if(a.length>0&&document.visibilityState!=="hidden"){const s=n.added,o=n.removed;this.updateTagsSync(t,{added:[],removed:o}),this.flashing||!this.__isTargetVisible?this.push("__flashQueue",s):this.flashTags(s)}else this.updateTagsSync(t,n)}_onOverlayOpen(){Array.from(this.wrapper.children).forEach(t=>{t.classList.contains("removing")||t.classList.add("show")})}flashTags(t){this.flashing=!0;const e=this.wrapper,a=Array.from(e.children);a.forEach(r=>{r.style.display="none"}),t.forEach(r=>{e.insertBefore(r,e.firstChild)}),this.flashPromise=new Promise(r=>{jo(this.$.overlay,"vaadin-overlay-open").then(()=>{this._debounceFlashStart=li.debounce(this._debounceFlashStart,Ra.after(this.duration+this.delay),()=>{this.hasFocus||t.forEach(n=>n.classList.remove("show")),this._debounceFlashEnd=li.debounce(this._debounceFlashEnd,Ra.after(this.duration),()=>{const n=()=>{a.forEach(s=>{s.style.display="block"}),this.flashing=!1,r()};this.hasFocus?n():(jo(this.$.overlay,"animationend").then(()=>{n()}),this.opened=!1)})})})}).then(()=>{if(this.__flashQueue.length>0){const r=this.__flashQueue[0];this.splice("__flashQueue",0,1),this.flashTags(r)}}),this.opened=!0}stopFlash(){this._debounceFlashStart&&this._debounceFlashStart.flush(),this._debounceFlashEnd&&this._debounceFlashEnd.flush(),this.$.overlay._flushAnimation("closing")}updateTags(t,e){this.applyTagsStart(e),this._debounceRender=li.debounce(this._debounceRender,Ra.after(this.duration),()=>{this.set("users",t),this.applyTagsEnd(e),t.length===0&&this.opened&&(this.opened=!1)})}updateTagsSync(t,e){this.applyTagsStart(e),this.set("users",t),this.applyTagsEnd(e)}show(){this.hasFocus=!0,this.__isTargetVisible&&(this.opened=!0)}hide(){this.hasFocus=!1,this.opened=!1}requestContentUpdate(){this._debounceRender&&this._debounceRender.isActive()&&this._debounceRender.flush()}}customElements.define(Uo.is,Uo);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Wo extends X(es(Y)){static get is(){return"vaadin-field-outline"}static get template(){return V`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          user-select: none;
          opacity: 0;
          --_active-user-color: transparent;
        }

        :host([has-active-user]) {
          opacity: 1;
        }
      </style>
    `}static get properties(){return{user:{type:Object,value:null,observer:"_userChanged"}}}ready(){super.ready(),this.setAttribute("part","outline"),this._field=this.getRootNode().host}_userChanged(t){this.toggleAttribute("has-active-user",Boolean(t));const e=t?`var(--vaadin-user-color-${t.colorIndex})`:"transparent",a="--_active-user-color";this.style.setProperty(a,e),this._field&&this._field.style.setProperty(a,e)}}customElements.define(Wo.is,Wo);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const z2=(i,t)=>{switch(t){case"vaadin-big-decimal-field":case"vaadin-combo-box":case"vaadin-date-picker":case"vaadin-date-time-picker-date-picker":case"vaadin-date-time-picker-time-picker":case"vaadin-email-field":case"vaadin-integer-field":case"vaadin-number-field":case"vaadin-password-field":case"vaadin-select":case"vaadin-text-area":case"vaadin-text-field":case"vaadin-time-picker":return i.shadowRoot.querySelector('[part="input-field"]');case"vaadin-checkbox":return i.shadowRoot.querySelector('[part="checkbox"]');case"vaadin-radio-button":return i.shadowRoot.querySelector('[part="radio"]');default:return i}},t0=new WeakMap,x2=i=>{if(!t0.has(i)){const t=i.tagName.toLowerCase(),e=z2(i,t);e.style.position="relative",t.endsWith("text-area")&&(e.style.overflow="visible");const a=document.createElement("style");a.textContent=`
      :host([active]) [part="outline"],
      :host([focus-ring]) [part="outline"] {
        display: none;
      }
    `,i.shadowRoot.appendChild(a);const r=document.createElement("vaadin-field-outline");(e===i?i.shadowRoot:e).appendChild(r),r.setAttribute("context",t),t0.set(i,{root:i,target:e,outline:r})}return t0.get(i)};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ds{constructor(t){this.component=t,this.initTags(t)}getFields(){return[this.component]}getFieldIndex(t){return this.getFields().indexOf(t)}getFocusTarget(t){return this.component}initTags(t){const e=document.createElement("vaadin-user-tags");t.shadowRoot.appendChild(e),e.target=t,this._tags=e,t.addEventListener("mouseenter",a=>{a.relatedTarget!==this._tags.$.overlay&&(this._mouse=!0,this._mouseDebouncer=li.debounce(this._mouseDebouncer,Ra.after(200),()=>{this._mouse&&this._tags.show()}))}),t.addEventListener("mouseleave",a=>{a.relatedTarget!==this._tags.$.overlay&&(this._mouse=!1,this._hasFocus||this._tags.hide())}),t.addEventListener("vaadin-highlight-show",a=>{this._hasFocus=!0,this._debouncer&&this._debouncer.isActive()?this._debouncer.cancel():this._tags.show()}),t.addEventListener("vaadin-highlight-hide",a=>{this._hasFocus=!1,this._mouse||(this._debouncer=li.debounce(this._debouncer,Ra.after(1),()=>{this._tags.hide()}))}),this._tags.$.overlay.addEventListener("mouseleave",a=>{a.relatedTarget!==t&&(this._mouse=!1,t.hasAttribute("focused")||this._tags.hide())})}setOutlines(t){const e=this.getFields();e.forEach((a,r)=>{const{outline:n}=x2(a),s=e.length===1?0:t.map(o=>o.fieldIndex).indexOf(r);n.user=t[s]})}showOutline(t){this.fire("show",t)}hideOutline(t){this.fire("hide",t)}fire(t,e){this.component.dispatchEvent(new CustomEvent(`vaadin-highlight-${t}`,{bubbles:!0,composed:!0,detail:{fieldIndex:this.getFieldIndex(e)}}))}redraw(t){this._tags.setUsers(t),this.setOutlines(t)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ea extends ds{constructor(t){super(t),this.addListeners(t)}addListeners(t){t.addEventListener("focusin",e=>this.onFocusIn(e)),t.addEventListener("focusout",e=>this.onFocusOut(e))}onFocusIn(t){const e=this.getFocusTarget(t);this.showOutline(e)}onFocusOut(t){const e=this.getFocusTarget(t);this.hideOutline(e)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class A2 extends ea{getFields(){return this.component.__checkboxes}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).filter(a=>e.includes(a))[0]}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Gl extends ds{constructor(t){super(t),this.datePicker=t,this.fullscreenFocus=!1,this.blurWhileOpened=!1,this.addListeners(t)}addListeners(t){this.overlay=t.$.overlay,t.addEventListener("blur",e=>this.onBlur(e),!0),t.addEventListener("opened-changed",e=>this.onOpenedChanged(e)),this.overlay.addEventListener("focusout",e=>this.onOverlayFocusOut(e)),t.addEventListener("focusin",e=>this.onFocusIn(e)),t.addEventListener("focusout",e=>this.onFocusOut(e))}onBlur(t){this.datePicker._fullscreen&&t.relatedTarget!==this.overlay&&(this.fullscreenFocus=!0)}onFocusIn(t){if(t.relatedTarget!==this.overlay){if(this.blurWhileOpened){this.blurWhileOpened=!1;return}this.showOutline(this.datePicker)}}onFocusOut(t){this.fullscreenFocus||t.relatedTarget===this.overlay||(this.datePicker.opened?this.blurWhileOpened=!0:this.hideOutline(this.datePicker))}onOverlayFocusOut(t){this.datePicker.contains(t.relatedTarget)||(this.blurWhileOpened=!0)}onOpenedChanged(t){t.detail.value===!0&&this.fullscreenFocus&&(this.fullscreenFocus=!1,this.showOutline(this.datePicker)),t.detail.value===!1&&this.blurWhileOpened&&(this.blurWhileOpened=!1,this.hideOutline(this.datePicker))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class w2 extends Gl{constructor(t,e){super(t),this.component=e}getFieldIndex(){return 0}}class E2 extends ea{constructor(t,e){super(t),this.component=e,this.timePicker=t}getFocusTarget(t){return this.timePicker}getFieldIndex(){return 1}}class C2 extends ds{constructor(t){super(t);const[e,a]=this.getFields();this.dateObserver=new w2(e,t),this.timeObserver=new E2(a,t)}getFields(){return this.component.__inputs}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class I2 extends ea{getFields(){return this.component.items||[]}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).filter(a=>e.includes(a))[0]}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class S2 extends ea{getFields(){return this.component.__radioButtons}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).filter(a=>e.includes(a))[0]}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class T2 extends ea{constructor(t){super(t),this.blurWhileOpened=!1,this.overlay=t._overlayElement}addListeners(t){super.addListeners(t),t.addEventListener("opened-changed",e=>{t._phone&&e.detail.value===!1&&this.hideOutline(t)})}onFocusIn(t){this.overlay.contains(t.relatedTarget)||!this.component._phone&&this.overlay.hasAttribute("closing")||super.onFocusIn(t)}onFocusOut(t){this.overlay.contains(t.relatedTarget)||super.onFocusOut(t)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const R2=i=>{let t;switch(i.tagName.toLowerCase()){case"vaadin-date-picker":t=new Gl(i);break;case"vaadin-date-time-picker":t=new C2(i);break;case"vaadin-select":t=new T2(i);break;case"vaadin-checkbox-group":t=new A2(i);break;case"vaadin-radio-group":t=new S2(i);break;case"vaadin-list-box":t=new I2(i);break;default:t=new ea(i)}return t};class O2{get user(){return this._user}set user(t){if(this._user=t,t){const e=`${t.name} started editing`,{label:a}=this.host;Me(a?`${e} ${a}`:e)}}constructor(t){this.host=t,this.user=null,this.users=[]}hostConnected(){this.redraw()}addUser(t){t&&(this.users.push(t),this.redraw(),this.user=t)}setUsers(t){Array.isArray(t)&&(this.users=t,this.redraw(),this.user=t[t.length-1]||null)}removeUser(t){if(t&&t.id!==void 0){let e;for(let a=0;a<this.users.length;a++)if(this.users[a].id===t.id){e=a;break}e!==void 0&&(this.users.splice(e,1),this.redraw(),this.users.length>0?this.user=this.users[this.users.length-1]:this.user=null)}}redraw(){this.observer.redraw([...this.users].reverse())}}class P2 extends HTMLElement{static init(t){if(!t._highlighterController){const e=new O2(t);t.setAttribute("has-highlighter",""),e.observer=R2(t),t.addController(e),t._highlighterController=e}return t._highlighterController}static addUser(t,e){this.init(t).addUser(e)}static removeUser(t,e){this.init(t).removeUser(e)}static setUsers(t,e){this.init(t).setUsers(e)}}customElements.define("vaadin-field-highlighter",P2);(function(){function i(e){const a=e._overlayElement;a&&(a.className=e.className)}const t=new MutationObserver(e=>{e.forEach(a=>{a.type==="attributes"&&a.attributeName==="class"&&i(a.target)})});window.Vaadin.Flow.confirmDialogConnector={initLazy:function(e){e.$connector||(e.$connector={},e.addEventListener("opened-changed",a=>{a.detail.value&&i(e)}),t.observe(e,{attributes:!0,attributeFilter:["class"]}),i(e))}}})();(function(){function i(e){const a=e._getPopup();a&&(a.className=e.className)}const t=new MutationObserver(e=>{e.forEach(a=>{a.type==="attributes"&&a.attributeName==="class"&&i(a.target)})});window.Vaadin.Flow.cookieConsentConnector={initLazy:function(e){e.$connector||(e.$connector={},t.observe(e,{attributes:!0,attributeFilter:["class"]}),i(e))}}})();(function(){function i(e){const a=e.$.overlay;a&&(a.className=e.className)}const t=new MutationObserver(e=>{e.forEach(a=>{a.type==="attributes"&&a.attributeName==="class"&&i(a.target)})});window.Vaadin.Flow.dialogConnector={initLazy:function(e){e.$connector||(e.$connector={},e.addEventListener("opened-changed",a=>{a.detail.value&&i(e)}),t.observe(e,{attributes:!0,attributeFilter:["class"]}),i(e))}}})();(function(){const i=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Grid Pro")};function t(e,a){return e.__edited&&e.__edited.model.item.key===a.item.key}window.Vaadin.Flow.gridProConnector={setEditModeRenderer:(e,a)=>i(function(r,n){r.editModeRenderer=i(function(o,h,l){if(!t(this._grid,l)){this._grid._stopEdit();return}n.parentNode!==o&&(o.appendChild(n),this._grid._cancelStopEdit(),n.focus())}),r._setEditorValue=function(s,o){},r._getEditorValue=function(s){}})(e,a),patchEditModeRenderer:e=>i(function(a){a.__editModeRenderer=i(function(n,s,o){const h=n.assignedSlot.parentNode,l=s._grid;if(!t(l,o)){l._stopEdit();return}const c=s._getEditorTagName(h);(!n.firstElementChild||n.firstElementChild.localName.toLowerCase()!==c)&&(n.innerHTML=`<${c}></${c}>`)})})(e)}})();window.Vaadin.Flow.ironListConnector={initLazy:function(i){if(i.$connector)return;const t=20;let e=[0,0];i.$connector={},i.$connector.placeholderItem={__placeholder:!0};const a=function(){let o=i._virtualStart,h=i._virtualEnd,l=Math.max(0,o-t),c=Math.min(h+t,i.items.length);if(e[0]!=l||e[1]!=c){e=[l,c];const d=1+c-l;i.$server.setRequestedRange(l,d)}};let r;const n=function(){r=Ja.debounce(r,Gi.after(10),a)},s=i._assignModels;i._assignModels=function(){const o=[],h=i._virtualStart,l=Math.min(i.items.length,i._physicalCount);for(let c=0;c<l;c++)i.items[h+c]===void 0&&(o.push(c),i.items[h+c]=i.$connector.placeholderItem);s.apply(i,arguments);for(let c=0;c<o.length;c++)delete i.items[h+o[c]];n()},i.items=[],i.$connector.set=function(o,h){for(let l=0;l<h.length;l++){const c=o+l;i.items[c]=h[l]}i._render()},i.$connector.updateData=function(o){const h=i.items,l={};let c=o.length;for(let d=0;d<o.length;d++){const u=o[d];l[u.key]=u}for(let d=0;d<h.length;d++){const u=h[d],v=l[u.key];if(v&&(i.items[d]=v,i.notifyPath("items."+d),c--,c==0))break}},i.$connector.clear=function(o,h){for(let l=0;l<h;l++){const c=o+l;delete i.items[c],i.notifyPath("items."+c)}},i.$connector.updateSize=function(o){const h=o-i.items.length;if(h>0)i.items.length=o,i.notifySplices("items",[{index:o-h,removed:[],addedCount:h,object:i.items,type:"splice"}]);else if(h<0){const l=i.items.slice(o,i.items.length);i.items.splice(o),i.notifySplices("items",[{index:o,removed:l,addedCount:0,object:i.items,type:"splice"}])}},i.$connector.setPlaceholderItem=function(o){o||(o={}),o.__placeholder=!0,i.$connector.placeholderItem=o}}};const $l=document.createElement("template");$l.innerHTML=`<style>
/* Fixes zero width in flex layouts */
iron-list {
  flex: auto;
  align-self: stretch;
}
</style>`;document.head.appendChild($l.content);(function(){function i(e){const a=e.$.vaadinLoginOverlayWrapper;a&&(a.className=e.className)}const t=new MutationObserver(e=>{e.forEach(a=>{a.type==="attributes"&&a.attributeName==="class"&&i(a.target)})});window.Vaadin.Flow.loginOverlayConnector={initLazy:function(e){e.$connector||(e.$connector={},e.addEventListener("opened-changed",a=>{a.detail.value&&i(e)}),t.observe(e,{attributes:!0,attributeFilter:["class"]}),i(e))}}})();(function(){const i=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Menu Bar")};function t(e,a){if(e.$connector)return;const r=new MutationObserver(n=>{n.some(o=>{const h=o.oldValue,l=o.target.getAttribute(o.attributeName);return h!==l})&&e.$connector.generateItems()});e.$connector={generateItems:i(n=>{if(!e.shadowRoot){setTimeout(()=>e.$connector.generateItems(n));return}n&&(e.__generatedItems=window.Vaadin.Flow.contextMenuConnector.generateItemsTree(a,n));let s=e.__generatedItems||[];s.forEach(o=>o.disabled=o.component.disabled),s=s.filter(o=>!o.component.hidden),s.forEach(o=>{r.observe(o.component,{attributeFilter:["hidden","disabled"],attributeOldValue:!0})}),e.items=s,e._buttons.forEach(o=>{o.item&&o.item.component&&o.addEventListener("click",h=>{h.composedPath().indexOf(o.item.component)===-1&&(o.item.component.click(),h.stopPropagation())})})})}}window.Vaadin.Flow.menubarConnector={initLazy(...e){return i(t)(...e)}}})();(function(){const i=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Message List")};window.Vaadin.Flow.messageListConnector={setItems:(t,e,a)=>i(function(r,n,s){const o=new Intl.DateTimeFormat(s,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"});r.items=n.map(h=>h.time?Object.assign(h,{time:o.format(new Date(h.time))}):h)})(t,e,a)}})();(function(){function i(e){const a=e._card;a&&(a.className=e.className)}const t=new MutationObserver(e=>{e.forEach(a=>{a.type==="attributes"&&a.attributeName==="class"&&i(a.target)})});window.Vaadin.Flow.notificationConnector={initLazy:function(e){e.$connector||(e.$connector={},e.addEventListener("opened-changed",a=>{a.detail.value&&i(e)}),t.observe(e,{attributes:!0,attributeFilter:["class"]}),i(e))}}})();(function(){const i=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Select")};window.Vaadin.Flow.selectConnector={initLazy:t=>i(function(e){const a=i(function(){for(let r=0;r<e.childElementCount;r++){const n=e.children[r];if(n.tagName.toUpperCase()==="VAADIN-SELECT-LIST-BOX")return n}});e.$connector||(e.$connector={},e.renderer=i(function(r){const n=a();n&&(r.firstChild&&r.removeChild(r.firstChild),r.appendChild(n))}))})(t)}})();(function(){let i;customElements.whenDefined("vaadin-text-field").then(()=>{class t extends customElements.get("vaadin-text-field"){static get template(){return i||(i=super.template.cloneNode(!0),i.innerHTML+=`<style>
                  :host {
                    width: 8em;
                  }

                  :host([dir="rtl"]) [part="input-field"] {
                    direction: ltr;
                  }

                  :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
                    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em) !important;
                  }
            </style>`),i}static get is(){return"vaadin-big-decimal-field"}static get properties(){return{_decimalSeparator:{type:String,value:".",observer:"__decimalSeparatorChanged"}}}ready(){super.ready(),this.inputElement.setAttribute("inputmode","decimal")}__decimalSeparatorChanged(a,r){this.allowedCharPattern="[\\d-+"+a+"]",this.value&&r&&(this.value=this.value.split(r).join(a))}}customElements.define(t.is,t)})})();var ia={RADIANS:"radians",DEGREES:"degrees",FEET:"ft",METERS:"m",PIXELS:"pixels",TILE_PIXELS:"tile-pixels",USFEET:"us-ft"},Ht={};Ht[ia.RADIANS]=6370997/(2*Math.PI);Ht[ia.DEGREES]=2*Math.PI*6370997/360;Ht[ia.FEET]=.3048;Ht[ia.METERS]=1;Ht[ia.USFEET]=1200/3937;const xe=ia;var L2=function(){function i(t){this.code_=t.code,this.units_=t.units,this.extent_=t.extent!==void 0?t.extent:null,this.worldExtent_=t.worldExtent!==void 0?t.worldExtent:null,this.axisOrientation_=t.axisOrientation!==void 0?t.axisOrientation:"enu",this.global_=t.global!==void 0?t.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=t.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=t.metersPerUnit}return i.prototype.canWrapX=function(){return this.canWrapX_},i.prototype.getCode=function(){return this.code_},i.prototype.getExtent=function(){return this.extent_},i.prototype.getUnits=function(){return this.units_},i.prototype.getMetersPerUnit=function(){return this.metersPerUnit_||Ht[this.units_]},i.prototype.getWorldExtent=function(){return this.worldExtent_},i.prototype.getAxisOrientation=function(){return this.axisOrientation_},i.prototype.isGlobal=function(){return this.global_},i.prototype.setGlobal=function(t){this.global_=t,this.canWrapX_=!!(t&&this.extent_)},i.prototype.getDefaultTileGrid=function(){return this.defaultTileGrid_},i.prototype.setDefaultTileGrid=function(t){this.defaultTileGrid_=t},i.prototype.setExtent=function(t){this.extent_=t,this.canWrapX_=!!(this.global_&&t)},i.prototype.setWorldExtent=function(t){this.worldExtent_=t},i.prototype.setGetPointResolution=function(t){this.getPointResolutionFunc_=t},i.prototype.getPointResolutionFunc=function(){return this.getPointResolutionFunc_},i}();const us=L2;function ft(i,t,e){return Math.min(Math.max(i,t),e)}var k2=function(){var i;return"cosh"in Math?i=Math.cosh:i=function(t){var e=Math.exp(t);return(e+1/e)/2},i}(),F2=function(){var i;return"log2"in Math?i=Math.log2:i=function(t){return Math.log(t)*Math.LOG2E},i}();function D2(i,t,e,a,r,n){var s=r-e,o=n-a;if(s!==0||o!==0){var h=((i-e)*s+(t-a)*o)/(s*s+o*o);h>1?(e=r,a=n):h>0&&(e+=s*h,a+=o*h)}return ji(i,t,e,a)}function ji(i,t,e,a){var r=e-i,n=a-t;return r*r+n*n}function N2(i){for(var t=i.length,e=0;e<t;e++){for(var a=e,r=Math.abs(i[e][e]),n=e+1;n<t;n++){var s=Math.abs(i[n][e]);s>r&&(r=s,a=n)}if(r===0)return null;var o=i[a];i[a]=i[e],i[e]=o;for(var h=e+1;h<t;h++)for(var l=-i[h][e]/i[e][e],c=e;c<t+1;c++)e==c?i[h][c]=0:i[h][c]+=l*i[e][c]}for(var d=new Array(t),u=t-1;u>=0;u--){d[u]=i[u][t]/i[u][u];for(var v=u-1;v>=0;v--)i[v][t]-=i[v][u]*d[u]}return d}function Wr(i){return i*Math.PI/180}function di(i,t){var e=i%t;return e*t<0?e+t:e}function ai(i,t,e){return i+e*(t-i)}function vs(i,t){var e=Math.pow(10,t);return Math.round(i*e)/e}function Yo(i,t){return Math.round(vs(i,t))}function Oi(i,t){return Math.floor(vs(i,t))}function Ge(i,t){return Math.ceil(vs(i,t))}var B2=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),sr=6378137,Pi=Math.PI*sr,G2=[-Pi,-Pi,Pi,Pi],$2=[-180,-85,180,85],Rr=sr*Math.log(Math.tan(Math.PI/2)),wi=function(i){B2(t,i);function t(e){return i.call(this,{code:e,units:xe.METERS,extent:G2,global:!0,worldExtent:$2,getPointResolution:function(a,r){return a/k2(r[1]/sr)}})||this}return t}(us),qo=[new wi("EPSG:3857"),new wi("EPSG:102100"),new wi("EPSG:102113"),new wi("EPSG:900913"),new wi("http://www.opengis.net/def/crs/EPSG/0/3857"),new wi("http://www.opengis.net/gml/srs/epsg.xml#3857")];function V2(i,t,e){var a=i.length,r=e>1?e:2,n=t;n===void 0&&(r>2?n=i.slice():n=new Array(a));for(var s=0;s<a;s+=r){n[s]=Pi*i[s]/180;var o=sr*Math.log(Math.tan(Math.PI*(+i[s+1]+90)/360));o>Rr?o=Rr:o<-Rr&&(o=-Rr),n[s+1]=o}return n}function j2(i,t,e){var a=i.length,r=e>1?e:2,n=t;n===void 0&&(r>2?n=i.slice():n=new Array(a));for(var s=0;s<a;s+=r)n[s]=180*i[s]/Pi,n[s+1]=360*Math.atan(Math.exp(i[s+1]/sr))/Math.PI-90;return n}var U2=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),W2=6378137,Ho=[-180,-90,180,90],Y2=Math.PI*W2/180,ii=function(i){U2(t,i);function t(e,a){return i.call(this,{code:e,units:xe.DEGREES,extent:Ho,axisOrientation:a,global:!0,metersPerUnit:Y2,worldExtent:Ho})||this}return t}(us),Xo=[new ii("CRS:84"),new ii("EPSG:4326","neu"),new ii("urn:ogc:def:crs:OGC:1.3:CRS84"),new ii("urn:ogc:def:crs:OGC:2:84"),new ii("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new ii("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new ii("http://www.opengis.net/def/crs/EPSG/0/4326","neu")],R0={};function q2(i){return R0[i]||R0[i.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function H2(i,t){R0[i]=t}var ot=typeof Object.assign=="function"?Object.assign:function(i,t){if(i==null)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(i),a=1,r=arguments.length;a<r;++a){var n=arguments[a];if(n!=null)for(var s in n)n.hasOwnProperty(s)&&(e[s]=n[s])}return e};function ps(i){for(var t in i)delete i[t]}var X2=typeof Object.values=="function"?Object.values:function(i){var t=[];for(var e in i)t.push(i[e]);return t};function Ba(i){var t;for(t in i)return!1;return!t}var Ui={};function Xi(i,t,e){var a=i.getCode(),r=t.getCode();a in Ui||(Ui[a]={}),Ui[a][r]=e}function Vl(i,t){var e;return i in Ui&&t in Ui[i]&&(e=Ui[i][t]),e}const Aa={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"},_t={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function K(){return function(){throw new Error("Unimplemented abstract method.")}()}var Z2=0;function nt(i){return i.ol_uid||(i.ol_uid=String(++Z2))}var K2="6.13.0",Q2=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),J2=function(i){Q2(t,i);function t(e){var a=this,r="v"+K2.split("-")[0],n="Assertion failed. See https://openlayers.org/en/"+r+"/doc/errors/#"+e+" for details.";return a=i.call(this,n)||this,a.code=e,a.name="AssertionError",a.message=n,a}return t}(Error);const jl=J2;function J(i,t){if(!i)throw new jl(t)}function Zo(i){for(var t=Xt(),e=0,a=i.length;e<a;++e)Fa(t,i[e]);return t}function tp(i,t,e){var a=Math.min.apply(null,i),r=Math.min.apply(null,t),n=Math.max.apply(null,i),s=Math.max.apply(null,t);return ve(a,r,n,s,e)}function Ga(i,t,e){return e?(e[0]=i[0]-t,e[1]=i[1]-t,e[2]=i[2]+t,e[3]=i[3]+t,e):[i[0]-t,i[1]-t,i[2]+t,i[3]+t]}function ep(i,t){return t?(t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t):i.slice()}function Ul(i,t,e){var a,r;return t<i[0]?a=i[0]-t:i[2]<t?a=t-i[2]:a=0,e<i[1]?r=i[1]-e:i[3]<e?r=e-i[3]:r=0,a*a+r*r}function aa(i,t){return Wl(i,t[0],t[1])}function $e(i,t){return i[0]<=t[0]&&t[2]<=i[2]&&i[1]<=t[1]&&t[3]<=i[3]}function Wl(i,t,e){return i[0]<=t&&t<=i[2]&&i[1]<=e&&e<=i[3]}function O0(i,t){var e=i[0],a=i[1],r=i[2],n=i[3],s=t[0],o=t[1],h=_t.UNKNOWN;return s<e?h=h|_t.LEFT:s>r&&(h=h|_t.RIGHT),o<a?h=h|_t.BELOW:o>n&&(h=h|_t.ABOVE),h===_t.UNKNOWN&&(h=_t.INTERSECTING),h}function Xt(){return[1/0,1/0,-1/0,-1/0]}function ve(i,t,e,a,r){return r?(r[0]=i,r[1]=t,r[2]=e,r[3]=a,r):[i,t,e,a]}function fs(i){return ve(1/0,1/0,-1/0,-1/0,i)}function ip(i,t){var e=i[0],a=i[1];return ve(e,a,e,a,t)}function ap(i,t,e,a,r){var n=fs(r);return Yl(n,i,t,e,a)}function Tn(i,t){return i[0]==t[0]&&i[2]==t[2]&&i[1]==t[1]&&i[3]==t[3]}function rp(i,t){return t[0]<i[0]&&(i[0]=t[0]),t[2]>i[2]&&(i[2]=t[2]),t[1]<i[1]&&(i[1]=t[1]),t[3]>i[3]&&(i[3]=t[3]),i}function Fa(i,t){t[0]<i[0]&&(i[0]=t[0]),t[0]>i[2]&&(i[2]=t[0]),t[1]<i[1]&&(i[1]=t[1]),t[1]>i[3]&&(i[3]=t[1])}function Yl(i,t,e,a,r){for(;e<a;e+=r)np(i,t[e],t[e+1]);return i}function np(i,t,e){i[0]=Math.min(i[0],t),i[1]=Math.min(i[1],e),i[2]=Math.max(i[2],t),i[3]=Math.max(i[3],e)}function ql(i,t){var e;return e=t(Rn(i)),e||(e=t(On(i)),e)||(e=t(Pn(i)),e)||(e=t(fi(i)),e)?e:!1}function P0(i){var t=0;return gs(i)||(t=st(i)*wt(i)),t}function Rn(i){return[i[0],i[1]]}function On(i){return[i[2],i[1]]}function Xe(i){return[(i[0]+i[2])/2,(i[1]+i[3])/2]}function sp(i,t){var e;return t===Aa.BOTTOM_LEFT?e=Rn(i):t===Aa.BOTTOM_RIGHT?e=On(i):t===Aa.TOP_LEFT?e=fi(i):t===Aa.TOP_RIGHT?e=Pn(i):J(!1,13),e}function Yr(i,t,e,a,r){var n=t*a[0]/2,s=t*a[1]/2,o=Math.cos(e),h=Math.sin(e),l=n*o,c=n*h,d=s*o,u=s*h,v=i[0],p=i[1],f=v-l+u,g=v-l-u,m=v+l-u,_=v+l+u,y=p-c-d,M=p-c+d,b=p+c+d,z=p+c-d;return ve(Math.min(f,g,m,_),Math.min(y,M,b,z),Math.max(f,g,m,_),Math.max(y,M,b,z),r)}function wt(i){return i[3]-i[1]}function Wi(i,t,e){var a=e||Xt();return It(i,t)?(i[0]>t[0]?a[0]=i[0]:a[0]=t[0],i[1]>t[1]?a[1]=i[1]:a[1]=t[1],i[2]<t[2]?a[2]=i[2]:a[2]=t[2],i[3]<t[3]?a[3]=i[3]:a[3]=t[3]):fs(a),a}function fi(i){return[i[0],i[3]]}function Pn(i){return[i[2],i[3]]}function st(i){return i[2]-i[0]}function It(i,t){return i[0]<=t[2]&&i[2]>=t[0]&&i[1]<=t[3]&&i[3]>=t[1]}function gs(i){return i[2]<i[0]||i[3]<i[1]}function op(i,t){return t?(t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t):i}function hp(i,t,e){var a=!1,r=O0(i,t),n=O0(i,e);if(r===_t.INTERSECTING||n===_t.INTERSECTING)a=!0;else{var s=i[0],o=i[1],h=i[2],l=i[3],c=t[0],d=t[1],u=e[0],v=e[1],p=(v-d)/(u-c),f=void 0,g=void 0;!!(n&_t.ABOVE)&&!(r&_t.ABOVE)&&(f=u-(v-l)/p,a=f>=s&&f<=h),!a&&!!(n&_t.RIGHT)&&!(r&_t.RIGHT)&&(g=v-(u-h)*p,a=g>=o&&g<=l),!a&&!!(n&_t.BELOW)&&!(r&_t.BELOW)&&(f=u-(v-o)/p,a=f>=s&&f<=h),!a&&!!(n&_t.LEFT)&&!(r&_t.LEFT)&&(g=v-(u-s)*p,a=g>=o&&g<=l)}return a}function lp(i,t,e,a){var r=[];if(a>1)for(var n=i[2]-i[0],s=i[3]-i[1],o=0;o<a;++o)r.push(i[0]+n*o/a,i[1],i[2],i[1]+s*o/a,i[2]-n*o/a,i[3],i[0],i[3]-s*o/a);else r=[i[0],i[1],i[2],i[1],i[2],i[3],i[0],i[3]];t(r,r,2);for(var h=[],l=[],o=0,c=r.length;o<c;o+=2)h.push(r[o]),l.push(r[o+1]);return tp(h,l,e)}function cp(i,t){var e=t.getExtent(),a=Xe(i);if(t.canWrapX()&&(a[0]<e[0]||a[0]>=e[2])){var r=st(e),n=Math.floor((a[0]-e[0])/r),s=n*r;i[0]-=s,i[2]-=s}return i}function Hl(i,t){for(var e=(""+i).split("."),a=(""+t).split("."),r=0;r<Math.max(e.length,a.length);r++){var n=parseInt(e[r]||"0",10),s=parseInt(a[r]||"0",10);if(n>s)return 1;if(s>n)return-1}return 0}function dp(i,t){return i[0]+=+t[0],i[1]+=+t[1],i}function on(i,t){for(var e=!0,a=i.length-1;a>=0;--a)if(i[a]!=t[a]){e=!1;break}return e}function up(i,t){var e=Math.cos(t),a=Math.sin(t),r=i[0]*e-i[1]*a,n=i[1]*e+i[0]*a;return i[0]=r,i[1]=n,i}function vp(i,t){if(t.canWrapX()){var e=st(t.getExtent()),a=Xl(i,t,e);a&&(i[0]-=a*e)}return i}function Xl(i,t,e){var a=t.getExtent(),r=0;if(t.canWrapX()&&(i[0]<a[0]||i[0]>a[2])){var n=e||st(a);r=Math.floor((i[0]-a[0])/n)}return r}const W={POINT:"Point",LINE_STRING:"LineString",LINEAR_RING:"LinearRing",POLYGON:"Polygon",MULTI_POINT:"MultiPoint",MULTI_LINE_STRING:"MultiLineString",MULTI_POLYGON:"MultiPolygon",GEOMETRY_COLLECTION:"GeometryCollection",CIRCLE:"Circle"};var pp=63710088e-1;function Ko(i,t,e){var a=e||pp,r=Wr(i[1]),n=Wr(t[1]),s=(n-r)/2,o=Wr(t[0]-i[0])/2,h=Math.sin(s)*Math.sin(s)+Math.sin(o)*Math.sin(o)*Math.cos(r)*Math.cos(n);return 2*a*Math.atan2(Math.sqrt(h),Math.sqrt(1-h))}var L0=!0;function fp(i){var t=i===void 0?!0:i;L0=!t}function ms(i,t,e){var a;if(t!==void 0){for(var r=0,n=i.length;r<n;++r)t[r]=i[r];a=t}else a=i.slice();return a}function Zl(i,t,e){if(t!==void 0&&i!==t){for(var a=0,r=i.length;a<r;++a)t[a]=i[a];i=t}return i}function Kl(i){H2(i.getCode(),i),Xi(i,i,ms)}function gp(i){i.forEach(Kl)}function gt(i){return typeof i=="string"?q2(i):i||null}function Qo(i,t,e,a){i=gt(i);var r,n=i.getPointResolutionFunc();if(n){if(r=n(t,e),a&&a!==i.getUnits()){var s=i.getMetersPerUnit();s&&(r=r*s/Ht[a])}}else{var o=i.getUnits();if(o==xe.DEGREES&&!a||a==xe.DEGREES)r=t;else{var h=Ln(i,gt("EPSG:4326"));if(h===Zl&&o!==xe.DEGREES)r=t*i.getMetersPerUnit();else{var l=[e[0]-t/2,e[1],e[0]+t/2,e[1],e[0],e[1]-t/2,e[0],e[1]+t/2];l=h(l,l,2);var c=Ko(l.slice(0,2),l.slice(2,4)),d=Ko(l.slice(4,6),l.slice(6,8));r=(c+d)/2}var s=a?Ht[a]:i.getMetersPerUnit();s!==void 0&&(r/=s)}}return r}function k0(i){gp(i),i.forEach(function(t){i.forEach(function(e){t!==e&&Xi(t,e,ms)})})}function mp(i,t,e,a){i.forEach(function(r){t.forEach(function(n){Xi(r,n,e),Xi(n,r,a)})})}function _s(i,t){return i?typeof i=="string"?gt(i):i:gt(t)}function Jo(i){return function(t,e,a){for(var r=t.length,n=a!==void 0?a:2,s=e!==void 0?e:new Array(r),o=0;o<r;o+=n){var h=i([t[o],t[o+1]]);s[o]=h[0],s[o+1]=h[1];for(var l=n-1;l>=2;--l)s[o+l]=t[o+l]}return s}}function _p(i,t,e,a){var r=gt(i),n=gt(t);Xi(r,n,Jo(e)),Xi(n,r,Jo(a))}function Ne(i,t){if(i===t)return!0;var e=i.getUnits()===t.getUnits();if(i.getCode()===t.getCode())return e;var a=Ln(i,t);return a===ms&&e}function Ln(i,t){var e=i.getCode(),a=t.getCode(),r=Vl(e,a);return r||(r=Zl),r}function $a(i,t){var e=gt(i),a=gt(t);return Ln(e,a)}function or(i,t,e){var a=$a(t,e);return a(i,void 0,i.length)}function ys(i,t,e,a){var r=$a(t,e);return lp(i,r,void 0,a)}var Zt=null;function Ql(i){Zt=gt(i)}function Jl(){return Zt}function th(i,t){return Zt?or(i,t,Zt):i}function Te(i,t){return Zt?or(i,Zt,t):(L0&&!on(i,[0,0])&&i[0]>=-180&&i[0]<=180&&i[1]>=-90&&i[1]<=90&&(L0=!1,console.warn("Call useGeographic() ol/proj once to work with [longitude, latitude] coordinates.")),i)}function F0(i,t){return Zt?ys(i,t,Zt):i}function be(i,t){return Zt?ys(i,Zt,t):i}function yp(i,t){if(!Zt)return i;var e=gt(t).getUnits(),a=Zt.getUnits();return e&&a?i*Ht[e]/Ht[a]:i}function eh(i,t,e){return function(a){var r=a[0],n=a[1],s,o;if(i.canWrapX()){var h=i.getExtent(),l=st(h);o=Xl(a,i,l),o&&(r=r-o*l),r=ft(r,h[0],h[2]),n=ft(n,h[1],h[3]),s=e([r,n])}else s=e(a);return o&&t.canWrapX()&&(s[0]+=o*st(t.getExtent())),s}}function Mp(){k0(qo),k0(Xo),mp(Xo,qo,V2,j2)}Mp();function bp(i){var t=Object.keys(i.defs),e=t.length,a,r;for(a=0;a<e;++a){var n=t[a];if(!gt(n)){var s=i.defs(n),o=s.units;!o&&s.projName==="longlat"&&(o=xe.DEGREES),Kl(new us({code:n,axisOrientation:s.axis,metersPerUnit:s.to_meter,units:o}))}}for(a=0;a<e;++a){var h=t[a],l=gt(h);for(r=0;r<e;++r){var c=t[r],d=gt(c);if(!Vl(h,c))if(i.defs[h]===i.defs[c])k0([l,d]);else{var u=i(h,c);_p(l,d,eh(l,d,u.forward),eh(d,l,u.inverse))}}}}function zp(i){i("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),i("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),i("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),i.WGS84=i["EPSG:4326"],i["EPSG:3785"]=i["EPSG:3857"],i.GOOGLE=i["EPSG:3857"],i["EPSG:900913"]=i["EPSG:3857"],i["EPSG:102113"]=i["EPSG:3857"]}var vi=1,pi=2,qr=3,xp=4,D0=5,ih=6378137,Ap=6356752314e-3,ah=.0066943799901413165,Da=484813681109536e-20,w=Math.PI/2,wp=.16666666666666666,Ep=.04722222222222222,Cp=.022156084656084655,I=1e-10,bt=.017453292519943295,le=57.29577951308232,tt=Math.PI/4,Va=Math.PI*2,pt=3.14159265359,Nt={};Nt.greenwich=0;Nt.lisbon=-9.131906111111;Nt.paris=2.337229166667;Nt.bogota=-74.080916666667;Nt.madrid=-3.687938888889;Nt.rome=12.452333333333;Nt.bern=7.439583333333;Nt.jakarta=106.807719444444;Nt.ferro=-17.666666666667;Nt.brussels=4.367975;Nt.stockholm=18.058277777778;Nt.athens=23.7163375;Nt.oslo=10.722916666667;const Ip={ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937}};var rh=/[\s_\-\/\(\)]/g;function Ze(i,t){if(i[t])return i[t];for(var e=Object.keys(i),a=t.toLowerCase().replace(rh,""),r=-1,n,s;++r<e.length;)if(n=e[r],s=n.toLowerCase().replace(rh,""),s===a)return i[n]}function N0(i){var t={},e=i.split("+").map(function(o){return o.trim()}).filter(function(o){return o}).reduce(function(o,h){var l=h.split("=");return l.push(!0),o[l[0].toLowerCase()]=l[1],o},{}),a,r,n,s={proj:"projName",datum:"datumCode",rf:function(o){t.rf=parseFloat(o)},lat_0:function(o){t.lat0=o*bt},lat_1:function(o){t.lat1=o*bt},lat_2:function(o){t.lat2=o*bt},lat_ts:function(o){t.lat_ts=o*bt},lon_0:function(o){t.long0=o*bt},lon_1:function(o){t.long1=o*bt},lon_2:function(o){t.long2=o*bt},alpha:function(o){t.alpha=parseFloat(o)*bt},gamma:function(o){t.rectified_grid_angle=parseFloat(o)},lonc:function(o){t.longc=o*bt},x_0:function(o){t.x0=parseFloat(o)},y_0:function(o){t.y0=parseFloat(o)},k_0:function(o){t.k0=parseFloat(o)},k:function(o){t.k0=parseFloat(o)},a:function(o){t.a=parseFloat(o)},b:function(o){t.b=parseFloat(o)},r_a:function(){t.R_A=!0},zone:function(o){t.zone=parseInt(o,10)},south:function(){t.utmSouth=!0},towgs84:function(o){t.datum_params=o.split(",").map(function(h){return parseFloat(h)})},to_meter:function(o){t.to_meter=parseFloat(o)},units:function(o){t.units=o;var h=Ze(Ip,o);h&&(t.to_meter=h.to_meter)},from_greenwich:function(o){t.from_greenwich=o*bt},pm:function(o){var h=Ze(Nt,o);t.from_greenwich=(h||parseFloat(o))*bt},nadgrids:function(o){o==="@null"?t.datumCode="none":t.nadgrids=o},axis:function(o){var h="ewnsud";o.length===3&&h.indexOf(o.substr(0,1))!==-1&&h.indexOf(o.substr(1,1))!==-1&&h.indexOf(o.substr(2,1))!==-1&&(t.axis=o)},approx:function(){t.approx=!0}};for(a in e)r=e[a],a in s?(n=s[a],typeof n=="function"?n(r):t[n]=r):t[a]=r;return typeof t.datumCode=="string"&&t.datumCode!=="WGS84"&&(t.datumCode=t.datumCode.toLowerCase()),t}var ja=1,tc=2,ec=3,hn=4,ic=5,Ms=-1,Sp=/\s/,Tp=/[A-Za-z]/,Rp=/[A-Za-z84_]/,kn=/[,\]]/,ac=/[\d\.E\-\+]/;function we(i){if(typeof i!="string")throw new Error("not a string");this.text=i.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=ja}we.prototype.readCharicter=function(){var i=this.text[this.place++];if(this.state!==hn)for(;Sp.test(i);){if(this.place>=this.text.length)return;i=this.text[this.place++]}switch(this.state){case ja:return this.neutral(i);case tc:return this.keyword(i);case hn:return this.quoted(i);case ic:return this.afterquote(i);case ec:return this.number(i);case Ms:return}};we.prototype.afterquote=function(i){if(i==='"'){this.word+='"',this.state=hn;return}if(kn.test(i)){this.word=this.word.trim(),this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in afterquote yet, index '+this.place)};we.prototype.afterItem=function(i){if(i===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=ja;return}if(i==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=ja,this.currentObject=this.stack.pop(),this.currentObject||(this.state=Ms);return}};we.prototype.number=function(i){if(ac.test(i)){this.word+=i;return}if(kn.test(i)){this.word=parseFloat(this.word),this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in number yet, index '+this.place)};we.prototype.quoted=function(i){if(i==='"'){this.state=ic;return}this.word+=i};we.prototype.keyword=function(i){if(Rp.test(i)){this.word+=i;return}if(i==="["){var t=[];t.push(this.word),this.level++,this.root===null?this.root=t:this.currentObject.push(t),this.stack.push(this.currentObject),this.currentObject=t,this.state=ja;return}if(kn.test(i)){this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in keyword yet, index '+this.place)};we.prototype.neutral=function(i){if(Tp.test(i)){this.word=i,this.state=tc;return}if(i==='"'){this.word="",this.state=hn;return}if(ac.test(i)){this.word=i,this.state=ec;return}if(kn.test(i)){this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in neutral yet, index '+this.place)};we.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===Ms)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function Op(i){var t=new we(i);return t.output()}function nh(i,t,e){Array.isArray(t)&&(e.unshift(t),t=null);var a=t?{}:i,r=e.reduce(function(n,s){return Li(s,n),n},a);t&&(i[t]=r)}function Li(i,t){if(!Array.isArray(i)){t[i]=!0;return}var e=i.shift();if(e==="PARAMETER"&&(e=i.shift()),i.length===1){if(Array.isArray(i[0])){t[e]={},Li(i[0],t[e]);return}t[e]=i[0];return}if(!i.length){t[e]=!0;return}if(e==="TOWGS84"){t[e]=i;return}if(e==="AXIS"){e in t||(t[e]=[]),t[e].push(i);return}Array.isArray(e)||(t[e]={});var a;switch(e){case"UNIT":case"PRIMEM":case"VERT_DATUM":t[e]={name:i[0].toLowerCase(),convert:i[1]},i.length===3&&Li(i[2],t[e]);return;case"SPHEROID":case"ELLIPSOID":t[e]={name:i[0],a:i[1],rf:i[2]},i.length===4&&Li(i[3],t[e]);return;case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"EDATUM":case"ENGINEERINGDATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":case"COMPD_CS":case"COMPOUNDCRS":case"ENGINEERINGCRS":case"ENGCRS":case"FITTED_CS":case"LOCAL_DATUM":case"DATUM":i[0]=["name",i[0]],nh(t,e,i);return;default:for(a=-1;++a<i.length;)if(!Array.isArray(i[a]))return Li(i,t[e]);return nh(t,e,i)}}var Pp=.017453292519943295;function Lp(i,t){var e=t[0],a=t[1];!(e in i)&&a in i&&(i[e]=i[a],t.length===3&&(i[e]=t[2](i[e])))}function me(i){return i*Pp}function kp(i){if(i.type==="GEOGCS"?i.projName="longlat":i.type==="LOCAL_CS"?(i.projName="identity",i.local=!0):typeof i.PROJECTION=="object"?i.projName=Object.keys(i.PROJECTION)[0]:i.projName=i.PROJECTION,i.AXIS){for(var t="",e=0,a=i.AXIS.length;e<a;++e){var r=[i.AXIS[e][0].toLowerCase(),i.AXIS[e][1].toLowerCase()];r[0].indexOf("north")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="north"?t+="n":r[0].indexOf("south")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="south"?t+="s":r[0].indexOf("east")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="east"?t+="e":(r[0].indexOf("west")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="west")&&(t+="w")}t.length===2&&(t+="u"),t.length===3&&(i.axis=t)}i.UNIT&&(i.units=i.UNIT.name.toLowerCase(),i.units==="metre"&&(i.units="meter"),i.UNIT.convert&&(i.type==="GEOGCS"?i.DATUM&&i.DATUM.SPHEROID&&(i.to_meter=i.UNIT.convert*i.DATUM.SPHEROID.a):i.to_meter=i.UNIT.convert));var n=i.GEOGCS;i.type==="GEOGCS"&&(n=i),n&&(n.DATUM?i.datumCode=n.DATUM.name.toLowerCase():i.datumCode=n.name.toLowerCase(),i.datumCode.slice(0,2)==="d_"&&(i.datumCode=i.datumCode.slice(2)),(i.datumCode==="new_zealand_geodetic_datum_1949"||i.datumCode==="new_zealand_1949")&&(i.datumCode="nzgd49"),(i.datumCode==="wgs_1984"||i.datumCode==="world_geodetic_system_1984")&&(i.PROJECTION==="Mercator_Auxiliary_Sphere"&&(i.sphere=!0),i.datumCode="wgs84"),i.datumCode.slice(-6)==="_ferro"&&(i.datumCode=i.datumCode.slice(0,-6)),i.datumCode.slice(-8)==="_jakarta"&&(i.datumCode=i.datumCode.slice(0,-8)),~i.datumCode.indexOf("belge")&&(i.datumCode="rnb72"),n.DATUM&&n.DATUM.SPHEROID&&(i.ellps=n.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),i.ellps.toLowerCase().slice(0,13)==="international"&&(i.ellps="intl"),i.a=n.DATUM.SPHEROID.a,i.rf=parseFloat(n.DATUM.SPHEROID.rf,10)),n.DATUM&&n.DATUM.TOWGS84&&(i.datum_params=n.DATUM.TOWGS84),~i.datumCode.indexOf("osgb_1936")&&(i.datumCode="osgb36"),~i.datumCode.indexOf("osni_1952")&&(i.datumCode="osni52"),(~i.datumCode.indexOf("tm65")||~i.datumCode.indexOf("geodetic_datum_of_1965"))&&(i.datumCode="ire65"),i.datumCode==="ch1903+"&&(i.datumCode="ch1903"),~i.datumCode.indexOf("israel")&&(i.datumCode="isr93")),i.b&&!isFinite(i.b)&&(i.b=i.a);function s(l){var c=i.to_meter||1;return l*c}var o=function(l){return Lp(i,l)},h=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",me],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",me],["x0","false_easting",s],["y0","false_northing",s],["long0","central_meridian",me],["lat0","latitude_of_origin",me],["lat0","standard_parallel_1",me],["lat1","standard_parallel_1",me],["lat2","standard_parallel_2",me],["azimuth","Azimuth"],["alpha","azimuth",me],["srsCode","name"]];h.forEach(o),!i.long0&&i.longc&&(i.projName==="Albers_Conic_Equal_Area"||i.projName==="Lambert_Azimuthal_Equal_Area")&&(i.long0=i.longc),!i.lat_ts&&i.lat1&&(i.projName==="Stereographic_South_Pole"||i.projName==="Polar Stereographic (variant B)")&&(i.lat0=me(i.lat1>0?90:-90),i.lat_ts=i.lat1)}function rc(i){var t=Op(i),e=t.shift(),a=t.shift();t.unshift(["name",a]),t.unshift(["type",e]);var r={};return Li(t,r),kp(r),r}function Ct(i){var t=this;if(arguments.length===2){var e=arguments[1];typeof e=="string"?e.charAt(0)==="+"?Ct[i]=N0(arguments[1]):Ct[i]=rc(arguments[1]):Ct[i]=e}else if(arguments.length===1){if(Array.isArray(i))return i.map(function(a){Array.isArray(a)?Ct.apply(t,a):Ct(a)});if(typeof i=="string"){if(i in Ct)return Ct[i]}else"EPSG"in i?Ct["EPSG:"+i.EPSG]=i:"ESRI"in i?Ct["ESRI:"+i.ESRI]=i:"IAU2000"in i?Ct["IAU2000:"+i.IAU2000]=i:console.log(i);return}}zp(Ct);function Fp(i){return typeof i=="string"}function Dp(i){return i in Ct}var Np=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function Bp(i){return Np.some(function(t){return i.indexOf(t)>-1})}var Gp=["3857","900913","3785","102113"];function $p(i){var t=Ze(i,"authority");if(!!t){var e=Ze(t,"epsg");return e&&Gp.indexOf(e)>-1}}function Vp(i){var t=Ze(i,"extension");if(!!t)return Ze(t,"proj4")}function jp(i){return i[0]==="+"}function Up(i){if(Fp(i)){if(Dp(i))return Ct[i];if(Bp(i)){var t=rc(i);if($p(t))return Ct["EPSG:3857"];var e=Vp(t);return e?N0(e):t}if(jp(i))return N0(i)}else return i}function sh(i,t){i=i||{};var e,a;if(!t)return i;for(a in t)e=t[a],e!==void 0&&(i[a]=e);return i}function pe(i,t,e){var a=i*t;return e/Math.sqrt(1-a*a)}function hr(i){return i<0?-1:1}function S(i){return Math.abs(i)<=pt?i:i-hr(i)*Va}function ae(i,t,e){var a=i*e,r=.5*i;return a=Math.pow((1-a)/(1+a),r),Math.tan(.5*(w-t))/a}function Ua(i,t){for(var e=.5*i,a,r,n=w-2*Math.atan(t),s=0;s<=15;s++)if(a=i*Math.sin(n),r=w-2*Math.atan(t*Math.pow((1-a)/(1+a),e))-n,n+=r,Math.abs(r)<=1e-10)return n;return-9999}function Wp(){var i=this.b/this.a;this.es=1-i*i,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=pe(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function Yp(i){var t=i.x,e=i.y;if(e*le>90&&e*le<-90&&t*le>180&&t*le<-180)return null;var a,r;if(Math.abs(Math.abs(e)-w)<=I)return null;if(this.sphere)a=this.x0+this.a*this.k0*S(t-this.long0),r=this.y0+this.a*this.k0*Math.log(Math.tan(tt+.5*e));else{var n=Math.sin(e),s=ae(this.e,e,n);a=this.x0+this.a*this.k0*S(t-this.long0),r=this.y0-this.a*this.k0*Math.log(s)}return i.x=a,i.y=r,i}function qp(i){var t=i.x-this.x0,e=i.y-this.y0,a,r;if(this.sphere)r=w-2*Math.atan(Math.exp(-e/(this.a*this.k0)));else{var n=Math.exp(-e/(this.a*this.k0));if(r=Ua(this.e,n),r===-9999)return null}return a=S(this.long0+t/(this.a*this.k0)),i.x=a,i.y=r,i}var Hp=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"];const Xp={init:Wp,forward:Yp,inverse:qp,names:Hp};function Zp(){}function oh(i){return i}var Kp=["longlat","identity"];const Qp={init:Zp,forward:oh,inverse:oh,names:Kp};var Jp=[Xp,Qp],Hr={},ln=[];function nc(i,t){var e=ln.length;return i.names?(ln[e]=i,i.names.forEach(function(a){Hr[a.toLowerCase()]=e}),this):(console.log(t),!0)}function tf(i){if(!i)return!1;var t=i.toLowerCase();if(typeof Hr[t]<"u"&&ln[Hr[t]])return ln[Hr[t]]}function ef(){Jp.forEach(nc)}const af={start:ef,add:nc,get:tf};var j={};j.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"};j.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"};j.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"};j.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"};j.airy={a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"};j.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"};j.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"};j.mod_airy={a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"};j.andrae={a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"};j.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"};j.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"};j.bessel={a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"};j.bess_nam={a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"};j.clrk66={a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"};j.clrk80={a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."};j.clrk58={a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"};j.CPM={a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"};j.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"};j.engelis={a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"};j.evrst30={a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"};j.evrst48={a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"};j.evrst56={a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"};j.evrst69={a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"};j.evrstSS={a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"};j.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"};j.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"};j.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"};j.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"};j.hough={a:6378270,rf:297,ellipseName:"Hough"};j.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"};j.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"};j.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"};j.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"};j.new_intl={a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"};j.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"};j.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"};j.SEasia={a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"};j.walbeck={a:6376896,b:63558348467e-4,ellipseName:"Walbeck"};j.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"};j.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"};j.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"};var rf=j.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"};j.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"};function nf(i,t,e,a){var r=i*i,n=t*t,s=(r-n)/r,o=0;a?(i*=1-s*(wp+s*(Ep+s*Cp)),r=i*i,s=0):o=Math.sqrt(s);var h=(r-n)/n;return{es:s,e:o,ep2:h}}function sf(i,t,e,a,r){if(!i){var n=Ze(j,a);n||(n=rf),i=n.a,t=n.b,e=n.rf}return e&&!t&&(t=(1-1/e)*i),(e===0||Math.abs(i-t)<I)&&(r=!0,t=i),{a:i,b:t,rf:e,sphere:r}}var yt={};yt.wgs84={towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"};yt.ch1903={towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"};yt.ggrs87={towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"};yt.nad83={towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"};yt.nad27={nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"};yt.potsdam={towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"};yt.carthage={towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"};yt.hermannskogel={towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"};yt.osni52={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"};yt.ire65={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"};yt.rassadiran={towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"};yt.nzgd49={towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"};yt.osgb36={towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"};yt.s_jtsk={towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"};yt.beduaram={towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"};yt.gunung_segara={towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"};yt.rnb72={towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"};function of(i,t,e,a,r,n,s){var o={};return i===void 0||i==="none"?o.datum_type=D0:o.datum_type=xp,t&&(o.datum_params=t.map(parseFloat),(o.datum_params[0]!==0||o.datum_params[1]!==0||o.datum_params[2]!==0)&&(o.datum_type=vi),o.datum_params.length>3&&(o.datum_params[3]!==0||o.datum_params[4]!==0||o.datum_params[5]!==0||o.datum_params[6]!==0)&&(o.datum_type=pi,o.datum_params[3]*=Da,o.datum_params[4]*=Da,o.datum_params[5]*=Da,o.datum_params[6]=o.datum_params[6]/1e6+1)),s&&(o.datum_type=qr,o.grids=s),o.a=e,o.b=a,o.es=r,o.ep2=n,o}var sc={};function hf(i,t){var e=new DataView(t),a=df(e),r=uf(e,a);r.nSubgrids>1&&console.log("Only single NTv2 subgrids are currently supported, subsequent sub grids are ignored");var n=vf(e,r,a),s={header:r,subgrids:n};return sc[i]=s,s}function lf(i){if(i===void 0)return null;var t=i.split(",");return t.map(cf)}function cf(i){if(i.length===0)return null;var t=i[0]==="@";return t&&(i=i.slice(1)),i==="null"?{name:"null",mandatory:!t,grid:null,isNull:!0}:{name:i,mandatory:!t,grid:sc[i]||null,isNull:!1}}function ki(i){return i/3600*Math.PI/180}function df(i){var t=i.getInt32(8,!1);return t===11?!1:(t=i.getInt32(8,!0),t!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function uf(i,t){return{nFields:i.getInt32(8,t),nSubgridFields:i.getInt32(24,t),nSubgrids:i.getInt32(40,t),shiftType:B0(i,56,56+8).trim(),fromSemiMajorAxis:i.getFloat64(120,t),fromSemiMinorAxis:i.getFloat64(136,t),toSemiMajorAxis:i.getFloat64(152,t),toSemiMinorAxis:i.getFloat64(168,t)}}function B0(i,t,e){return String.fromCharCode.apply(null,new Uint8Array(i.buffer.slice(t,e)))}function vf(i,t,e){for(var a=176,r=[],n=0;n<t.nSubgrids;n++){var s=ff(i,a,e),o=gf(i,a,s,e),h=Math.round(1+(s.upperLongitude-s.lowerLongitude)/s.longitudeInterval),l=Math.round(1+(s.upperLatitude-s.lowerLatitude)/s.latitudeInterval);r.push({ll:[ki(s.lowerLongitude),ki(s.lowerLatitude)],del:[ki(s.longitudeInterval),ki(s.latitudeInterval)],lim:[h,l],count:s.gridNodeCount,cvs:pf(o)})}return r}function pf(i){return i.map(function(t){return[ki(t.longitudeShift),ki(t.latitudeShift)]})}function ff(i,t,e){return{name:B0(i,t+8,t+16).trim(),parent:B0(i,t+24,t+24+8).trim(),lowerLatitude:i.getFloat64(t+72,e),upperLatitude:i.getFloat64(t+88,e),lowerLongitude:i.getFloat64(t+104,e),upperLongitude:i.getFloat64(t+120,e),latitudeInterval:i.getFloat64(t+136,e),longitudeInterval:i.getFloat64(t+152,e),gridNodeCount:i.getInt32(t+168,e)}}function gf(i,t,e,a){for(var r=t+176,n=16,s=[],o=0;o<e.gridNodeCount;o++){var h={latitudeShift:i.getFloat32(r+o*n,a),longitudeShift:i.getFloat32(r+o*n+4,a),latitudeAccuracy:i.getFloat32(r+o*n+8,a),longitudeAccuracy:i.getFloat32(r+o*n+12,a)};s.push(h)}return s}function de(i,t){if(!(this instanceof de))return new de(i);t=t||function(l){if(l)throw l};var e=Up(i);if(typeof e!="object"){t(i);return}var a=de.projections.get(e.projName);if(!a){t(i);return}if(e.datumCode&&e.datumCode!=="none"){var r=Ze(yt,e.datumCode);r&&(e.datum_params=e.datum_params||(r.towgs84?r.towgs84.split(","):null),e.ellps=r.ellipse,e.datumName=r.datumName?r.datumName:e.datumCode)}e.k0=e.k0||1,e.axis=e.axis||"enu",e.ellps=e.ellps||"wgs84",e.lat1=e.lat1||e.lat0;var n=sf(e.a,e.b,e.rf,e.ellps,e.sphere),s=nf(n.a,n.b,n.rf,e.R_A),o=lf(e.nadgrids),h=e.datum||of(e.datumCode,e.datum_params,n.a,n.b,s.es,s.ep2,o);sh(this,e),sh(this,a),this.a=n.a,this.b=n.b,this.rf=n.rf,this.sphere=n.sphere,this.es=s.es,this.e=s.e,this.ep2=s.ep2,this.datum=h,this.init(),t(null,this)}de.projections=af;de.projections.start();function mf(i,t){return i.datum_type!==t.datum_type||i.a!==t.a||Math.abs(i.es-t.es)>5e-11?!1:i.datum_type===vi?i.datum_params[0]===t.datum_params[0]&&i.datum_params[1]===t.datum_params[1]&&i.datum_params[2]===t.datum_params[2]:i.datum_type===pi?i.datum_params[0]===t.datum_params[0]&&i.datum_params[1]===t.datum_params[1]&&i.datum_params[2]===t.datum_params[2]&&i.datum_params[3]===t.datum_params[3]&&i.datum_params[4]===t.datum_params[4]&&i.datum_params[5]===t.datum_params[5]&&i.datum_params[6]===t.datum_params[6]:!0}function oc(i,t,e){var a=i.x,r=i.y,n=i.z?i.z:0,s,o,h,l;if(r<-w&&r>-1.001*w)r=-w;else if(r>w&&r<1.001*w)r=w;else{if(r<-w)return{x:-1/0,y:-1/0,z:i.z};if(r>w)return{x:1/0,y:1/0,z:i.z}}return a>Math.PI&&(a-=2*Math.PI),o=Math.sin(r),l=Math.cos(r),h=o*o,s=e/Math.sqrt(1-t*h),{x:(s+n)*l*Math.cos(a),y:(s+n)*l*Math.sin(a),z:(s*(1-t)+n)*o}}function hc(i,t,e,a){var r=1e-12,n=r*r,s=30,o,h,l,c,d,u,v,p,f,g,m,_,y,M=i.x,b=i.y,z=i.z?i.z:0,A,x,C;if(o=Math.sqrt(M*M+b*b),h=Math.sqrt(M*M+b*b+z*z),o/e<r){if(A=0,h/e<r)return x=w,C=-a,{x:i.x,y:i.y,z:i.z}}else A=Math.atan2(b,M);l=z/h,c=o/h,d=1/Math.sqrt(1-t*(2-t)*c*c),p=c*(1-t)*d,f=l*d,y=0;do y++,v=e/Math.sqrt(1-t*f*f),C=o*p+z*f-v*(1-t*f*f),u=t*v/(v+C),d=1/Math.sqrt(1-u*(2-u)*c*c),g=c*(1-u)*d,m=l*d,_=m*p-g*f,p=g,f=m;while(_*_>n&&y<s);return x=Math.atan(m/Math.abs(g)),{x:A,y:x,z:C}}function _f(i,t,e){if(t===vi)return{x:i.x+e[0],y:i.y+e[1],z:i.z+e[2]};if(t===pi){var a=e[0],r=e[1],n=e[2],s=e[3],o=e[4],h=e[5],l=e[6];return{x:l*(i.x-h*i.y+o*i.z)+a,y:l*(h*i.x+i.y-s*i.z)+r,z:l*(-o*i.x+s*i.y+i.z)+n}}}function yf(i,t,e){if(t===vi)return{x:i.x-e[0],y:i.y-e[1],z:i.z-e[2]};if(t===pi){var a=e[0],r=e[1],n=e[2],s=e[3],o=e[4],h=e[5],l=e[6],c=(i.x-a)/l,d=(i.y-r)/l,u=(i.z-n)/l;return{x:c+h*d-o*u,y:-h*c+d+s*u,z:o*c-s*d+u}}}function Or(i){return i===vi||i===pi}function Mf(i,t,e){if(mf(i,t)||i.datum_type===D0||t.datum_type===D0)return e;var a=i.a,r=i.es;if(i.datum_type===qr){var n=hh(i,!1,e);if(n!==0)return;a=ih,r=ah}var s=t.a,o=t.b,h=t.es;if(t.datum_type===qr&&(s=ih,o=Ap,h=ah),r===h&&a===s&&!Or(i.datum_type)&&!Or(t.datum_type))return e;if(e=oc(e,r,a),Or(i.datum_type)&&(e=_f(e,i.datum_type,i.datum_params)),Or(t.datum_type)&&(e=yf(e,t.datum_type,t.datum_params)),e=hc(e,h,s,o),t.datum_type===qr){var l=hh(t,!0,e);if(l!==0)return}return e}function hh(i,t,e){if(i.grids===null||i.grids.length===0)return console.log("Grid shift grids not found"),-1;for(var a={x:-e.x,y:e.y},r={x:Number.NaN,y:Number.NaN},n=[],s=0;s<i.grids.length;s++){var o=i.grids[s];if(n.push(o.name),o.isNull){r=a;break}if(o.mandatory,o.grid===null){if(o.mandatory)return console.log("Unable to find mandatory grid '"+o.name+"'"),-1;continue}var h=o.grid.subgrids[0],l=(Math.abs(h.del[1])+Math.abs(h.del[0]))/1e4,c=h.ll[0]-l,d=h.ll[1]-l,u=h.ll[0]+(h.lim[0]-1)*h.del[0]+l,v=h.ll[1]+(h.lim[1]-1)*h.del[1]+l;if(!(d>a.y||c>a.x||v<a.y||u<a.x)&&(r=bf(a,t,h),!isNaN(r.x)))break}return isNaN(r.x)?(console.log("Failed to find a grid shift table for location '"+-a.x*le+" "+a.y*le+" tried: '"+n+"'"),-1):(e.x=-r.x,e.y=r.y,0)}function bf(i,t,e){var a={x:Number.NaN,y:Number.NaN};if(isNaN(i.x))return a;var r={x:i.x,y:i.y};r.x-=e.ll[0],r.y-=e.ll[1],r.x=S(r.x-Math.PI)+Math.PI;var n=lh(r,e);if(t){if(isNaN(n.x))return a;n.x=r.x-n.x,n.y=r.y-n.y;var s=9,o=1e-12,h,l;do{if(l=lh(n,e),isNaN(l.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}h={x:r.x-(l.x+n.x),y:r.y-(l.y+n.y)},n.x+=h.x,n.y+=h.y}while(s--&&Math.abs(h.x)>o&&Math.abs(h.y)>o);if(s<0)return console.log("Inverse grid shift iterator failed to converge."),a;a.x=S(n.x+e.ll[0]),a.y=n.y+e.ll[1]}else isNaN(n.x)||(a.x=i.x+n.x,a.y=i.y+n.y);return a}function lh(i,t){var e={x:i.x/t.del[0],y:i.y/t.del[1]},a={x:Math.floor(e.x),y:Math.floor(e.y)},r={x:e.x-1*a.x,y:e.y-1*a.y},n={x:Number.NaN,y:Number.NaN},s;if(a.x<0||a.x>=t.lim[0]||a.y<0||a.y>=t.lim[1])return n;s=a.y*t.lim[0]+a.x;var o={x:t.cvs[s][0],y:t.cvs[s][1]};s++;var h={x:t.cvs[s][0],y:t.cvs[s][1]};s+=t.lim[0];var l={x:t.cvs[s][0],y:t.cvs[s][1]};s--;var c={x:t.cvs[s][0],y:t.cvs[s][1]},d=r.x*r.y,u=r.x*(1-r.y),v=(1-r.x)*(1-r.y),p=(1-r.x)*r.y;return n.x=v*o.x+u*h.x+p*c.x+d*l.x,n.y=v*o.y+u*h.y+p*c.y+d*l.y,n}function ch(i,t,e){var a=e.x,r=e.y,n=e.z||0,s,o,h,l={};for(h=0;h<3;h++)if(!(t&&h===2&&e.z===void 0))switch(h===0?(s=a,"ew".indexOf(i.axis[h])!==-1?o="x":o="y"):h===1?(s=r,"ns".indexOf(i.axis[h])!==-1?o="y":o="x"):(s=n,o="z"),i.axis[h]){case"e":l[o]=s;break;case"w":l[o]=-s;break;case"n":l[o]=s;break;case"s":l[o]=-s;break;case"u":e[o]!==void 0&&(l.z=s);break;case"d":e[o]!==void 0&&(l.z=-s);break;default:return null}return l}function lc(i){var t={x:i[0],y:i[1]};return i.length>2&&(t.z=i[2]),i.length>3&&(t.m=i[3]),t}function zf(i){dh(i.x),dh(i.y)}function dh(i){if(typeof Number.isFinite=="function"){if(Number.isFinite(i))return;throw new TypeError("coordinates must be finite numbers")}if(typeof i!="number"||i!==i||!isFinite(i))throw new TypeError("coordinates must be finite numbers")}function xf(i,t){return(i.datum.datum_type===vi||i.datum.datum_type===pi)&&t.datumCode!=="WGS84"||(t.datum.datum_type===vi||t.datum.datum_type===pi)&&i.datumCode!=="WGS84"}function cn(i,t,e,a){var r;if(Array.isArray(e)&&(e=lc(e)),zf(e),i.datum&&t.datum&&xf(i,t)&&(r=new de("WGS84"),e=cn(i,r,e,a),i=r),a&&i.axis!=="enu"&&(e=ch(i,!1,e)),i.projName==="longlat")e={x:e.x*bt,y:e.y*bt,z:e.z||0};else if(i.to_meter&&(e={x:e.x*i.to_meter,y:e.y*i.to_meter,z:e.z||0}),e=i.inverse(e),!e)return;if(i.from_greenwich&&(e.x+=i.from_greenwich),e=Mf(i.datum,t.datum,e),!!e)return t.from_greenwich&&(e={x:e.x-t.from_greenwich,y:e.y,z:e.z||0}),t.projName==="longlat"?e={x:e.x*le,y:e.y*le,z:e.z||0}:(e=t.forward(e),t.to_meter&&(e={x:e.x/t.to_meter,y:e.y/t.to_meter,z:e.z||0})),a&&t.axis!=="enu"?ch(t,!0,e):e}var uh=de("WGS84");function e0(i,t,e,a){var r,n,s;return Array.isArray(e)?(r=cn(i,t,e,a)||{x:NaN,y:NaN},e.length>2?typeof i.name<"u"&&i.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"?typeof r.z=="number"?[r.x,r.y,r.z].concat(e.splice(3)):[r.x,r.y,e[2]].concat(e.splice(3)):[r.x,r.y].concat(e.splice(2)):[r.x,r.y]):(n=cn(i,t,e,a),s=Object.keys(e),s.length===2||s.forEach(function(o){if(typeof i.name<"u"&&i.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"){if(o==="x"||o==="y"||o==="z")return}else if(o==="x"||o==="y")return;n[o]=e[o]}),n)}function vh(i){return i instanceof de?i:i.oProj?i.oProj:de(i)}function Dt(i,t,e){i=vh(i);var a=!1,r;return typeof t>"u"?(t=i,i=uh,a=!0):(typeof t.x<"u"||Array.isArray(t))&&(e=t,t=i,i=uh,a=!0),t=vh(t),e?e0(i,t,e):(r={forward:function(n,s){return e0(i,t,n,s)},inverse:function(n,s){return e0(t,i,n,s)}},a&&(r.oProj=t),r)}var ph=6,cc="AJSAJS",dc="AFAFAF",Fi=65,kt=73,Wt=79,wa=86,Ea=90;const Af={forward:uc,inverse:wf,toPoint:vc};function uc(i,t){return t=t||5,If(Ef({lat:i[1],lon:i[0]}),t)}function wf(i){var t=bs(fc(i.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat,t.lon,t.lat]:[t.left,t.bottom,t.right,t.top]}function vc(i){var t=bs(fc(i.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat]:[(t.left+t.right)/2,(t.top+t.bottom)/2]}function i0(i){return i*(Math.PI/180)}function fh(i){return 180*(i/Math.PI)}function Ef(i){var t=i.lat,e=i.lon,a=6378137,r=.00669438,n=.9996,s,o,h,l,c,d,u,v=i0(t),p=i0(e),f,g;g=Math.floor((e+180)/6)+1,e===180&&(g=60),t>=56&&t<64&&e>=3&&e<12&&(g=32),t>=72&&t<84&&(e>=0&&e<9?g=31:e>=9&&e<21?g=33:e>=21&&e<33?g=35:e>=33&&e<42&&(g=37)),s=(g-1)*6-180+3,f=i0(s),o=r/(1-r),h=a/Math.sqrt(1-r*Math.sin(v)*Math.sin(v)),l=Math.tan(v)*Math.tan(v),c=o*Math.cos(v)*Math.cos(v),d=Math.cos(v)*(p-f),u=a*((1-r/4-3*r*r/64-5*r*r*r/256)*v-(3*r/8+3*r*r/32+45*r*r*r/1024)*Math.sin(2*v)+(15*r*r/256+45*r*r*r/1024)*Math.sin(4*v)-35*r*r*r/3072*Math.sin(6*v));var m=n*h*(d+(1-l+c)*d*d*d/6+(5-18*l+l*l+72*c-58*o)*d*d*d*d*d/120)+5e5,_=n*(u+h*Math.tan(v)*(d*d/2+(5-l+9*c+4*c*c)*d*d*d*d/24+(61-58*l+l*l+600*c-330*o)*d*d*d*d*d*d/720));return t<0&&(_+=1e7),{northing:Math.round(_),easting:Math.round(m),zoneNumber:g,zoneLetter:Cf(t)}}function bs(i){var t=i.northing,e=i.easting,a=i.zoneLetter,r=i.zoneNumber;if(r<0||r>60)return null;var n=.9996,s=6378137,o=.00669438,h,l=(1-Math.sqrt(1-o))/(1+Math.sqrt(1-o)),c,d,u,v,p,f,g,m,_,y=e-5e5,M=t;a<"N"&&(M-=1e7),g=(r-1)*6-180+3,h=o/(1-o),f=M/n,m=f/(s*(1-o/4-3*o*o/64-5*o*o*o/256)),_=m+(3*l/2-27*l*l*l/32)*Math.sin(2*m)+(21*l*l/16-55*l*l*l*l/32)*Math.sin(4*m)+151*l*l*l/96*Math.sin(6*m),c=s/Math.sqrt(1-o*Math.sin(_)*Math.sin(_)),d=Math.tan(_)*Math.tan(_),u=h*Math.cos(_)*Math.cos(_),v=s*(1-o)/Math.pow(1-o*Math.sin(_)*Math.sin(_),1.5),p=y/(c*n);var b=_-c*Math.tan(_)/v*(p*p/2-(5+3*d+10*u-4*u*u-9*h)*p*p*p*p/24+(61+90*d+298*u+45*d*d-252*h-3*u*u)*p*p*p*p*p*p/720);b=fh(b);var z=(p-(1+2*d+u)*p*p*p/6+(5-2*u+28*d-3*u*u+8*h+24*d*d)*p*p*p*p*p/120)/Math.cos(_);z=g+fh(z);var A;if(i.accuracy){var x=bs({northing:i.northing+i.accuracy,easting:i.easting+i.accuracy,zoneLetter:i.zoneLetter,zoneNumber:i.zoneNumber});A={top:x.lat,right:x.lon,bottom:b,left:z}}else A={lat:b,lon:z};return A}function Cf(i){var t="Z";return 84>=i&&i>=72?t="X":72>i&&i>=64?t="W":64>i&&i>=56?t="V":56>i&&i>=48?t="U":48>i&&i>=40?t="T":40>i&&i>=32?t="S":32>i&&i>=24?t="R":24>i&&i>=16?t="Q":16>i&&i>=8?t="P":8>i&&i>=0?t="N":0>i&&i>=-8?t="M":-8>i&&i>=-16?t="L":-16>i&&i>=-24?t="K":-24>i&&i>=-32?t="J":-32>i&&i>=-40?t="H":-40>i&&i>=-48?t="G":-48>i&&i>=-56?t="F":-56>i&&i>=-64?t="E":-64>i&&i>=-72?t="D":-72>i&&i>=-80&&(t="C"),t}function If(i,t){var e="00000"+i.easting,a="00000"+i.northing;return i.zoneNumber+i.zoneLetter+Sf(i.easting,i.northing,i.zoneNumber)+e.substr(e.length-5,t)+a.substr(a.length-5,t)}function Sf(i,t,e){var a=pc(e),r=Math.floor(i/1e5),n=Math.floor(t/1e5)%20;return Tf(r,n,a)}function pc(i){var t=i%ph;return t===0&&(t=ph),t}function Tf(i,t,e){var a=e-1,r=cc.charCodeAt(a),n=dc.charCodeAt(a),s=r+i-1,o=n+t,h=!1;s>Ea&&(s=s-Ea+Fi-1,h=!0),(s===kt||r<kt&&s>kt||(s>kt||r<kt)&&h)&&s++,(s===Wt||r<Wt&&s>Wt||(s>Wt||r<Wt)&&h)&&(s++,s===kt&&s++),s>Ea&&(s=s-Ea+Fi-1),o>wa?(o=o-wa+Fi-1,h=!0):h=!1,(o===kt||n<kt&&o>kt||(o>kt||n<kt)&&h)&&o++,(o===Wt||n<Wt&&o>Wt||(o>Wt||n<Wt)&&h)&&(o++,o===kt&&o++),o>wa&&(o=o-wa+Fi-1);var l=String.fromCharCode(s)+String.fromCharCode(o);return l}function fc(i){if(i&&i.length===0)throw"MGRSPoint coverting from nothing";for(var t=i.length,e=null,a="",r,n=0;!/[A-Z]/.test(r=i.charAt(n));){if(n>=2)throw"MGRSPoint bad conversion from: "+i;a+=r,n++}var s=parseInt(a,10);if(n===0||n+3>t)throw"MGRSPoint bad conversion from: "+i;var o=i.charAt(n++);if(o<="A"||o==="B"||o==="Y"||o>="Z"||o==="I"||o==="O")throw"MGRSPoint zone letter "+o+" not handled: "+i;e=i.substring(n,n+=2);for(var h=pc(s),l=Rf(e.charAt(0),h),c=Of(e.charAt(1),h);c<Pf(o);)c+=2e6;var d=t-n;if(d%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+i;var u=d/2,v=0,p=0,f,g,m,_,y;return u>0&&(f=1e5/Math.pow(10,u),g=i.substring(n,n+u),v=parseFloat(g)*f,m=i.substring(n+u),p=parseFloat(m)*f),_=v+l,y=p+c,{easting:_,northing:y,zoneLetter:o,zoneNumber:s,accuracy:f}}function Rf(i,t){for(var e=cc.charCodeAt(t-1),a=1e5,r=!1;e!==i.charCodeAt(0);){if(e++,e===kt&&e++,e===Wt&&e++,e>Ea){if(r)throw"Bad character: "+i;e=Fi,r=!0}a+=1e5}return a}function Of(i,t){if(i>"V")throw"MGRSPoint given invalid Northing "+i;for(var e=dc.charCodeAt(t-1),a=0,r=!1;e!==i.charCodeAt(0);){if(e++,e===kt&&e++,e===Wt&&e++,e>wa){if(r)throw"Bad character: "+i;e=Fi,r=!0}a+=1e5}return a}function Pf(i){var t;switch(i){case"C":t=11e5;break;case"D":t=2e6;break;case"E":t=28e5;break;case"F":t=37e5;break;case"G":t=46e5;break;case"H":t=55e5;break;case"J":t=64e5;break;case"K":t=73e5;break;case"L":t=82e5;break;case"M":t=91e5;break;case"N":t=0;break;case"P":t=8e5;break;case"Q":t=17e5;break;case"R":t=26e5;break;case"S":t=35e5;break;case"T":t=44e5;break;case"U":t=53e5;break;case"V":t=62e5;break;case"W":t=7e6;break;case"X":t=79e5;break;default:t=-1}if(t>=0)return t;throw"Invalid zone letter: "+i}function Zi(i,t,e){if(!(this instanceof Zi))return new Zi(i,t,e);if(Array.isArray(i))this.x=i[0],this.y=i[1],this.z=i[2]||0;else if(typeof i=="object")this.x=i.x,this.y=i.y,this.z=i.z||0;else if(typeof i=="string"&&typeof t>"u"){var a=i.split(",");this.x=parseFloat(a[0],10),this.y=parseFloat(a[1],10),this.z=parseFloat(a[2],10)||0}else this.x=i,this.y=t,this.z=e||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}Zi.fromMGRS=function(i){return new Zi(vc(i))};Zi.prototype.toMGRS=function(i){return uc([this.x,this.y],i)};var Lf=1,kf=.25,gh=.046875,mh=.01953125,_h=.01068115234375,Ff=.75,Df=.46875,Nf=.013020833333333334,Bf=.007120768229166667,Gf=.3645833333333333,$f=.005696614583333333,Vf=.3076171875;function gc(i){var t=[];t[0]=Lf-i*(kf+i*(gh+i*(mh+i*_h))),t[1]=i*(Ff-i*(gh+i*(mh+i*_h)));var e=i*i;return t[2]=e*(Df-i*(Nf+i*Bf)),e*=i,t[3]=e*(Gf-i*$f),t[4]=e*i*Vf,t}function Fn(i,t,e,a){return e*=t,t*=t,a[0]*i-e*(a[1]+t*(a[2]+t*(a[3]+t*a[4])))}var jf=20;function mc(i,t,e){for(var a=1/(1-t),r=i,n=jf;n;--n){var s=Math.sin(r),o=1-t*s*s;if(o=(Fn(r,s,Math.cos(r),e)-i)*(o*Math.sqrt(o))*a,r-=o,Math.abs(o)<I)return r}return r}function Uf(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=gc(this.es),this.ml0=Fn(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function Wf(i){var t=i.x,e=i.y,a=S(t-this.long0),r,n,s,o=Math.sin(e),h=Math.cos(e);if(this.es){var c=h*a,d=Math.pow(c,2),u=this.ep2*Math.pow(h,2),v=Math.pow(u,2),p=Math.abs(h)>I?Math.tan(e):0,f=Math.pow(p,2),g=Math.pow(f,2);r=1-this.es*Math.pow(o,2),c=c/Math.sqrt(r);var m=Fn(e,o,h,this.en);n=this.a*(this.k0*c*(1+d/6*(1-f+u+d/20*(5-18*f+g+14*u-58*f*u+d/42*(61+179*g-g*f-479*f)))))+this.x0,s=this.a*(this.k0*(m-this.ml0+o*a*c/2*(1+d/12*(5-f+9*u+4*v+d/30*(61+g-58*f+270*u-330*f*u+d/56*(1385+543*g-g*f-3111*f))))))+this.y0}else{var l=h*Math.sin(a);if(Math.abs(Math.abs(l)-1)<I)return 93;if(n=.5*this.a*this.k0*Math.log((1+l)/(1-l))+this.x0,s=h*Math.cos(a)/Math.sqrt(1-Math.pow(l,2)),l=Math.abs(s),l>=1){if(l-1>I)return 93;s=0}else s=Math.acos(s);e<0&&(s=-s),s=this.a*this.k0*(s-this.lat0)+this.y0}return i.x=n,i.y=s,i}function Yf(i){var t,e,a,r,n=(i.x-this.x0)*(1/this.a),s=(i.y-this.y0)*(1/this.a);if(this.es)if(t=this.ml0+s/this.k0,e=mc(t,this.es,this.en),Math.abs(e)<w){var d=Math.sin(e),u=Math.cos(e),v=Math.abs(u)>I?Math.tan(e):0,p=this.ep2*Math.pow(u,2),f=Math.pow(p,2),g=Math.pow(v,2),m=Math.pow(g,2);t=1-this.es*Math.pow(d,2);var _=n*Math.sqrt(t)/this.k0,y=Math.pow(_,2);t=t*v,a=e-t*y/(1-this.es)*.5*(1-y/12*(5+3*g-9*p*g+p-4*f-y/30*(61+90*g-252*p*g+45*m+46*p-y/56*(1385+3633*g+4095*m+1574*m*g)))),r=S(this.long0+_*(1-y/6*(1+2*g+p-y/20*(5+28*g+24*m+8*p*g+6*p-y/42*(61+662*g+1320*m+720*m*g))))/u)}else a=w*hr(s),r=0;else{var o=Math.exp(n/this.k0),h=.5*(o-1/o),l=this.lat0+s/this.k0,c=Math.cos(l);t=Math.sqrt((1-Math.pow(c,2))/(1+Math.pow(h,2))),a=Math.asin(t),s<0&&(a=-a),h===0&&c===0?r=0:r=S(Math.atan2(h,c)+this.long0)}return i.x=r,i.y=a,i}var qf=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const Xr={init:Uf,forward:Wf,inverse:Yf,names:qf};function _c(i){var t=Math.exp(i);return t=(t-1/t)/2,t}function ie(i,t){i=Math.abs(i),t=Math.abs(t);var e=Math.max(i,t),a=Math.min(i,t)/(e||1);return e*Math.sqrt(1+Math.pow(a,2))}function Hf(i){var t=1+i,e=t-1;return e===0?i:i*Math.log(t)/e}function Xf(i){var t=Math.abs(i);return t=Hf(t*(1+t/(ie(1,t)+1))),i<0?-t:t}function zs(i,t){for(var e=2*Math.cos(2*t),a=i.length-1,r=i[a],n=0,s;--a>=0;)s=-n+e*r+i[a],n=r,r=s;return t+s*Math.sin(2*t)}function Zf(i,t){for(var e=2*Math.cos(t),a=i.length-1,r=i[a],n=0,s;--a>=0;)s=-n+e*r+i[a],n=r,r=s;return Math.sin(t)*s}function Kf(i){var t=Math.exp(i);return t=(t+1/t)/2,t}function yc(i,t,e){for(var a=Math.sin(t),r=Math.cos(t),n=_c(e),s=Kf(e),o=2*r*s,h=-2*a*n,l=i.length-1,c=i[l],d=0,u=0,v=0,p,f;--l>=0;)p=u,f=d,u=c,d=v,c=-p+o*u-h*d+i[l],v=-f+h*u+o*d;return o=a*s,h=r*n,[o*c-h*v,o*v+h*c]}function Qf(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(Xr.init.apply(this),this.forward=Xr.forward,this.inverse=Xr.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var i=this.es/(1+Math.sqrt(1-this.es)),t=i/(2-i),e=t;this.cgb[0]=t*(2+t*(-2/3+t*(-2+t*(116/45+t*(26/45+t*(-2854/675)))))),this.cbg[0]=t*(-2+t*(2/3+t*(4/3+t*(-82/45+t*(32/45+t*(4642/4725)))))),e=e*t,this.cgb[1]=e*(7/3+t*(-8/5+t*(-227/45+t*(2704/315+t*(2323/945))))),this.cbg[1]=e*(5/3+t*(-16/15+t*(-13/9+t*(904/315+t*(-1522/945))))),e=e*t,this.cgb[2]=e*(56/15+t*(-136/35+t*(-1262/105+t*(73814/2835)))),this.cbg[2]=e*(-26/15+t*(34/21+t*(8/5+t*(-12686/2835)))),e=e*t,this.cgb[3]=e*(4279/630+t*(-332/35+t*(-399572/14175))),this.cbg[3]=e*(1237/630+t*(-12/5+t*(-24832/14175))),e=e*t,this.cgb[4]=e*(4174/315+t*(-144838/6237)),this.cbg[4]=e*(-734/315+t*(109598/31185)),e=e*t,this.cgb[5]=e*(601676/22275),this.cbg[5]=e*(444337/155925),e=Math.pow(t,2),this.Qn=this.k0/(1+t)*(1+e*(1/4+e*(1/64+e/256))),this.utg[0]=t*(-.5+t*(2/3+t*(-37/96+t*(1/360+t*(81/512+t*(-96199/604800)))))),this.gtu[0]=t*(.5+t*(-2/3+t*(5/16+t*(41/180+t*(-127/288+t*(7891/37800)))))),this.utg[1]=e*(-1/48+t*(-1/15+t*(437/1440+t*(-46/105+t*(1118711/3870720))))),this.gtu[1]=e*(13/48+t*(-3/5+t*(557/1440+t*(281/630+t*(-1983433/1935360))))),e=e*t,this.utg[2]=e*(-17/480+t*(37/840+t*(209/4480+t*(-5569/90720)))),this.gtu[2]=e*(61/240+t*(-103/140+t*(15061/26880+t*(167603/181440)))),e=e*t,this.utg[3]=e*(-4397/161280+t*(11/504+t*(830251/7257600))),this.gtu[3]=e*(49561/161280+t*(-179/168+t*(6601661/7257600))),e=e*t,this.utg[4]=e*(-4583/161280+t*(108847/3991680)),this.gtu[4]=e*(34729/80640+t*(-3418889/1995840)),e=e*t,this.utg[5]=e*(-20648693/638668800),this.gtu[5]=e*(212378941/319334400);var a=zs(this.cbg,this.lat0);this.Zb=-this.Qn*(a+Zf(this.gtu,2*a))}function Jf(i){var t=S(i.x-this.long0),e=i.y;e=zs(this.cbg,e);var a=Math.sin(e),r=Math.cos(e),n=Math.sin(t),s=Math.cos(t);e=Math.atan2(a,s*r),t=Math.atan2(n*r,ie(a,r*s)),t=Xf(Math.tan(t));var o=yc(this.gtu,2*e,2*t);e=e+o[0],t=t+o[1];var h,l;return Math.abs(t)<=2.623395162778?(h=this.a*(this.Qn*t)+this.x0,l=this.a*(this.Qn*e+this.Zb)+this.y0):(h=1/0,l=1/0),i.x=h,i.y=l,i}function t3(i){var t=(i.x-this.x0)*(1/this.a),e=(i.y-this.y0)*(1/this.a);e=(e-this.Zb)/this.Qn,t=t/this.Qn;var a,r;if(Math.abs(t)<=2.623395162778){var n=yc(this.utg,2*e,2*t);e=e+n[0],t=t+n[1],t=Math.atan(_c(t));var s=Math.sin(e),o=Math.cos(e),h=Math.sin(t),l=Math.cos(t);e=Math.atan2(s*l,ie(h,l*o)),t=Math.atan2(h,l*o),a=S(t+this.long0),r=zs(this.cgb,e)}else a=1/0,r=1/0;return i.x=a,i.y=r,i}var e3=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","tmerc"];const Zr={init:Qf,forward:Jf,inverse:t3,names:e3};function i3(i,t){if(i===void 0){if(i=Math.floor((S(t)+Math.PI)*30/Math.PI)+1,i<0)return 0;if(i>60)return 60}return i}var a3="etmerc";function r3(){var i=i3(this.zone,this.long0);if(i===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(i)-183)*bt,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,Zr.init.apply(this),this.forward=Zr.forward,this.inverse=Zr.inverse}var n3=["Universal Transverse Mercator System","utm"];const s3={init:r3,names:n3,dependsOn:a3};function xs(i,t){return Math.pow((1-i)/(1+i),t)}var o3=20;function h3(){var i=Math.sin(this.lat0),t=Math.cos(this.lat0);t*=t,this.rc=Math.sqrt(1-this.es)/(1-this.es*i*i),this.C=Math.sqrt(1+this.es*t*t/(1-this.es)),this.phic0=Math.asin(i/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+tt)/(Math.pow(Math.tan(.5*this.lat0+tt),this.C)*xs(this.e*i,this.ratexp))}function l3(i){var t=i.x,e=i.y;return i.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*e+tt),this.C)*xs(this.e*Math.sin(e),this.ratexp))-w,i.x=this.C*t,i}function c3(i){for(var t=1e-14,e=i.x/this.C,a=i.y,r=Math.pow(Math.tan(.5*a+tt)/this.K,1/this.C),n=o3;n>0&&(a=2*Math.atan(r*xs(this.e*Math.sin(i.y),-.5*this.e))-w,!(Math.abs(a-i.y)<t));--n)i.y=a;return n?(i.x=e,i.y=a,i):null}var d3=["gauss"];const As={init:h3,forward:l3,inverse:c3,names:d3};function u3(){As.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function v3(i){var t,e,a,r;return i.x=S(i.x-this.long0),As.forward.apply(this,[i]),t=Math.sin(i.y),e=Math.cos(i.y),a=Math.cos(i.x),r=this.k0*this.R2/(1+this.sinc0*t+this.cosc0*e*a),i.x=r*e*Math.sin(i.x),i.y=r*(this.cosc0*t-this.sinc0*e*a),i.x=this.a*i.x+this.x0,i.y=this.a*i.y+this.y0,i}function p3(i){var t,e,a,r,n;if(i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,i.x/=this.k0,i.y/=this.k0,n=Math.sqrt(i.x*i.x+i.y*i.y)){var s=2*Math.atan2(n,this.R2);t=Math.sin(s),e=Math.cos(s),r=Math.asin(e*this.sinc0+i.y*t*this.cosc0/n),a=Math.atan2(i.x*t,n*this.cosc0*e-i.y*this.sinc0*t)}else r=this.phic0,a=0;return i.x=a,i.y=r,As.inverse.apply(this,[i]),i.x=S(i.x+this.long0),i}var f3=["Stereographic_North_Pole","Oblique_Stereographic","Polar_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const g3={init:u3,forward:v3,inverse:p3,names:f3};function m3(i,t,e){return t*=e,Math.tan(.5*(w+i))*Math.pow((1-t)/(1+t),.5*e)}function _3(){this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=I&&(this.k0=.5*(1+hr(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=I&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=I&&(this.k0=.5*this.cons*pe(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/ae(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=pe(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-w,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function y3(i){var t=i.x,e=i.y,a=Math.sin(e),r=Math.cos(e),n,s,o,h,l,c,d=S(t-this.long0);return Math.abs(Math.abs(t-this.long0)-Math.PI)<=I&&Math.abs(e+this.lat0)<=I?(i.x=NaN,i.y=NaN,i):this.sphere?(n=2*this.k0/(1+this.sinlat0*a+this.coslat0*r*Math.cos(d)),i.x=this.a*n*r*Math.sin(d)+this.x0,i.y=this.a*n*(this.coslat0*a-this.sinlat0*r*Math.cos(d))+this.y0,i):(s=2*Math.atan(this.ssfn_(e,a,this.e))-w,h=Math.cos(s),o=Math.sin(s),Math.abs(this.coslat0)<=I?(l=ae(this.e,e*this.con,this.con*a),c=2*this.a*this.k0*l/this.cons,i.x=this.x0+c*Math.sin(t-this.long0),i.y=this.y0-this.con*c*Math.cos(t-this.long0),i):(Math.abs(this.sinlat0)<I?(n=2*this.a*this.k0/(1+h*Math.cos(d)),i.y=n*o):(n=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*o+this.cosX0*h*Math.cos(d))),i.y=n*(this.cosX0*o-this.sinX0*h*Math.cos(d))+this.y0),i.x=n*h*Math.sin(d)+this.x0,i))}function M3(i){i.x-=this.x0,i.y-=this.y0;var t,e,a,r,n,s=Math.sqrt(i.x*i.x+i.y*i.y);if(this.sphere){var o=2*Math.atan(s/(2*this.a*this.k0));return t=this.long0,e=this.lat0,s<=I?(i.x=t,i.y=e,i):(e=Math.asin(Math.cos(o)*this.sinlat0+i.y*Math.sin(o)*this.coslat0/s),Math.abs(this.coslat0)<I?this.lat0>0?t=S(this.long0+Math.atan2(i.x,-1*i.y)):t=S(this.long0+Math.atan2(i.x,i.y)):t=S(this.long0+Math.atan2(i.x*Math.sin(o),s*this.coslat0*Math.cos(o)-i.y*this.sinlat0*Math.sin(o))),i.x=t,i.y=e,i)}else if(Math.abs(this.coslat0)<=I){if(s<=I)return e=this.lat0,t=this.long0,i.x=t,i.y=e,i;i.x*=this.con,i.y*=this.con,a=s*this.cons/(2*this.a*this.k0),e=this.con*Ua(this.e,a),t=this.con*S(this.con*this.long0+Math.atan2(i.x,-1*i.y))}else r=2*Math.atan(s*this.cosX0/(2*this.a*this.k0*this.ms1)),t=this.long0,s<=I?n=this.X0:(n=Math.asin(Math.cos(r)*this.sinX0+i.y*Math.sin(r)*this.cosX0/s),t=S(this.long0+Math.atan2(i.x*Math.sin(r),s*this.cosX0*Math.cos(r)-i.y*this.sinX0*Math.sin(r)))),e=-1*Ua(this.e,Math.tan(.5*(w+n)));return i.x=t,i.y=e,i}var b3=["stere","Stereographic_South_Pole","Polar Stereographic (variant B)"];const z3={init:_3,forward:y3,inverse:M3,names:b3,ssfn_:m3};function x3(){var i=this.lat0;this.lambda0=this.long0;var t=Math.sin(i),e=this.a,a=this.rf,r=1/a,n=2*r-Math.pow(r,2),s=this.e=Math.sqrt(n);this.R=this.k0*e*Math.sqrt(1-n)/(1-n*Math.pow(t,2)),this.alpha=Math.sqrt(1+n/(1-n)*Math.pow(Math.cos(i),4)),this.b0=Math.asin(t/this.alpha);var o=Math.log(Math.tan(Math.PI/4+this.b0/2)),h=Math.log(Math.tan(Math.PI/4+i/2)),l=Math.log((1+s*t)/(1-s*t));this.K=o-this.alpha*h+this.alpha*s/2*l}function A3(i){var t=Math.log(Math.tan(Math.PI/4-i.y/2)),e=this.e/2*Math.log((1+this.e*Math.sin(i.y))/(1-this.e*Math.sin(i.y))),a=-this.alpha*(t+e)+this.K,r=2*(Math.atan(Math.exp(a))-Math.PI/4),n=this.alpha*(i.x-this.lambda0),s=Math.atan(Math.sin(n)/(Math.sin(this.b0)*Math.tan(r)+Math.cos(this.b0)*Math.cos(n))),o=Math.asin(Math.cos(this.b0)*Math.sin(r)-Math.sin(this.b0)*Math.cos(r)*Math.cos(n));return i.y=this.R/2*Math.log((1+Math.sin(o))/(1-Math.sin(o)))+this.y0,i.x=this.R*s+this.x0,i}function w3(i){for(var t=i.x-this.x0,e=i.y-this.y0,a=t/this.R,r=2*(Math.atan(Math.exp(e/this.R))-Math.PI/4),n=Math.asin(Math.cos(this.b0)*Math.sin(r)+Math.sin(this.b0)*Math.cos(r)*Math.cos(a)),s=Math.atan(Math.sin(a)/(Math.cos(this.b0)*Math.cos(a)-Math.sin(this.b0)*Math.tan(r))),o=this.lambda0+s/this.alpha,h=0,l=n,c=-1e3,d=0;Math.abs(l-c)>1e-7;){if(++d>20)return;h=1/this.alpha*(Math.log(Math.tan(Math.PI/4+n/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(l))/2)),c=l,l=2*Math.atan(Math.exp(h))-Math.PI/2}return i.x=o,i.y=l,i}var E3=["somerc"];const C3={init:x3,forward:A3,inverse:w3,names:E3};var Si=1e-7;function I3(i){var t=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],e=typeof i.PROJECTION=="object"?Object.keys(i.PROJECTION)[0]:i.PROJECTION;return"no_uoff"in i||"no_off"in i||t.indexOf(e)!==-1}function S3(){var i,t,e,a,r,n,s,o,h,l,c=0,d,u=0,v=0,p=0,f=0,g=0,m=0;this.no_off=I3(this),this.no_rot="no_rot"in this;var _=!1;"alpha"in this&&(_=!0);var y=!1;if("rectified_grid_angle"in this&&(y=!0),_&&(m=this.alpha),y&&(c=this.rectified_grid_angle*bt),_||y)u=this.longc;else if(v=this.long1,f=this.lat1,p=this.long2,g=this.lat2,Math.abs(f-g)<=Si||(i=Math.abs(f))<=Si||Math.abs(i-w)<=Si||Math.abs(Math.abs(this.lat0)-w)<=Si||Math.abs(Math.abs(g)-w)<=Si)throw new Error;var M=1-this.es;t=Math.sqrt(M),Math.abs(this.lat0)>I?(o=Math.sin(this.lat0),e=Math.cos(this.lat0),i=1-this.es*o*o,this.B=e*e,this.B=Math.sqrt(1+this.es*this.B*this.B/M),this.A=this.B*this.k0*t/i,a=this.B*t/(e*Math.sqrt(i)),r=a*a-1,r<=0?r=0:(r=Math.sqrt(r),this.lat0<0&&(r=-r)),this.E=r+=a,this.E*=Math.pow(ae(this.e,this.lat0,o),this.B)):(this.B=1/t,this.A=this.k0,this.E=a=r=1),_||y?(_?(d=Math.asin(Math.sin(m)/a),y||(c=m)):(d=c,m=Math.asin(a*Math.sin(d))),this.lam0=u-Math.asin(.5*(r-1/r)*Math.tan(d))/this.B):(n=Math.pow(ae(this.e,f,Math.sin(f)),this.B),s=Math.pow(ae(this.e,g,Math.sin(g)),this.B),r=this.E/n,h=(s-n)/(s+n),l=this.E*this.E,l=(l-s*n)/(l+s*n),i=v-p,i<-Math.pi?p-=Va:i>Math.pi&&(p+=Va),this.lam0=S(.5*(v+p)-Math.atan(l*Math.tan(.5*this.B*(v-p))/h)/this.B),d=Math.atan(2*Math.sin(this.B*S(v-this.lam0))/(r-1/r)),c=m=Math.asin(a*Math.sin(d))),this.singam=Math.sin(d),this.cosgam=Math.cos(d),this.sinrot=Math.sin(c),this.cosrot=Math.cos(c),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.A*this.B,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(a*a-1)/Math.cos(m))),this.lat0<0&&(this.u_0=-this.u_0)),r=.5*d,this.v_pole_n=this.ArB*Math.log(Math.tan(tt-r)),this.v_pole_s=this.ArB*Math.log(Math.tan(tt+r))}function T3(i){var t={},e,a,r,n,s,o,h,l;if(i.x=i.x-this.lam0,Math.abs(Math.abs(i.y)-w)>I){if(s=this.E/Math.pow(ae(this.e,i.y,Math.sin(i.y)),this.B),o=1/s,e=.5*(s-o),a=.5*(s+o),n=Math.sin(this.B*i.x),r=(e*this.singam-n*this.cosgam)/a,Math.abs(Math.abs(r)-1)<I)throw new Error;l=.5*this.ArB*Math.log((1-r)/(1+r)),o=Math.cos(this.B*i.x),Math.abs(o)<Si?h=this.A*i.x:h=this.ArB*Math.atan2(e*this.cosgam+n*this.singam,o)}else l=i.y>0?this.v_pole_n:this.v_pole_s,h=this.ArB*i.y;return this.no_rot?(t.x=h,t.y=l):(h-=this.u_0,t.x=l*this.cosrot+h*this.sinrot,t.y=h*this.cosrot-l*this.sinrot),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function R3(i){var t,e,a,r,n,s,o,h={};if(i.x=(i.x-this.x0)*(1/this.a),i.y=(i.y-this.y0)*(1/this.a),this.no_rot?(e=i.y,t=i.x):(e=i.x*this.cosrot-i.y*this.sinrot,t=i.y*this.cosrot+i.x*this.sinrot+this.u_0),a=Math.exp(-this.BrA*e),r=.5*(a-1/a),n=.5*(a+1/a),s=Math.sin(this.BrA*t),o=(s*this.cosgam+r*this.singam)/n,Math.abs(Math.abs(o)-1)<I)h.x=0,h.y=o<0?-w:w;else{if(h.y=this.E/Math.sqrt((1+o)/(1-o)),h.y=Ua(this.e,Math.pow(h.y,1/this.B)),h.y===1/0)throw new Error;h.x=-this.rB*Math.atan2(r*this.cosgam-s*this.singam,Math.cos(this.BrA*t))}return h.x+=this.lam0,h}var O3=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const P3={init:S3,forward:T3,inverse:R3,names:O3};function L3(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<I)){var i=this.b/this.a;this.e=Math.sqrt(1-i*i);var t=Math.sin(this.lat1),e=Math.cos(this.lat1),a=pe(this.e,t,e),r=ae(this.e,this.lat1,t),n=Math.sin(this.lat2),s=Math.cos(this.lat2),o=pe(this.e,n,s),h=ae(this.e,this.lat2,n),l=ae(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>I?this.ns=Math.log(a/o)/Math.log(r/h):this.ns=t,isNaN(this.ns)&&(this.ns=t),this.f0=a/(this.ns*Math.pow(r,this.ns)),this.rh=this.a*this.f0*Math.pow(l,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function k3(i){var t=i.x,e=i.y;Math.abs(2*Math.abs(e)-Math.PI)<=I&&(e=hr(e)*(w-2*I));var a=Math.abs(Math.abs(e)-w),r,n;if(a>I)r=ae(this.e,e,Math.sin(e)),n=this.a*this.f0*Math.pow(r,this.ns);else{if(a=e*this.ns,a<=0)return null;n=0}var s=this.ns*S(t-this.long0);return i.x=this.k0*(n*Math.sin(s))+this.x0,i.y=this.k0*(this.rh-n*Math.cos(s))+this.y0,i}function F3(i){var t,e,a,r,n,s=(i.x-this.x0)/this.k0,o=this.rh-(i.y-this.y0)/this.k0;this.ns>0?(t=Math.sqrt(s*s+o*o),e=1):(t=-Math.sqrt(s*s+o*o),e=-1);var h=0;if(t!==0&&(h=Math.atan2(e*s,e*o)),t!==0||this.ns>0){if(e=1/this.ns,a=Math.pow(t/(this.a*this.f0),e),r=Ua(this.e,a),r===-9999)return null}else r=-w;return n=S(h/this.ns+this.long0),i.x=n,i.y=r,i}var D3=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const N3={init:L3,forward:k3,inverse:F3,names:D3};function B3(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function G3(i){var t,e,a,r,n,s,o,h=i.x,l=i.y,c=S(h-this.long0);return t=Math.pow((1+this.e*Math.sin(l))/(1-this.e*Math.sin(l)),this.alfa*this.e/2),e=2*(Math.atan(this.k*Math.pow(Math.tan(l/2+this.s45),this.alfa)/t)-this.s45),a=-c*this.alfa,r=Math.asin(Math.cos(this.ad)*Math.sin(e)+Math.sin(this.ad)*Math.cos(e)*Math.cos(a)),n=Math.asin(Math.cos(e)*Math.sin(a)/Math.cos(r)),s=this.n*n,o=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(r/2+this.s45),this.n),i.y=o*Math.cos(s)/1,i.x=o*Math.sin(s)/1,this.czech||(i.y*=-1,i.x*=-1),i}function $3(i){var t,e,a,r,n,s,o,h,l=i.x;i.x=i.y,i.y=l,this.czech||(i.y*=-1,i.x*=-1),s=Math.sqrt(i.x*i.x+i.y*i.y),n=Math.atan2(i.y,i.x),r=n/Math.sin(this.s0),a=2*(Math.atan(Math.pow(this.ro0/s,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),t=Math.asin(Math.cos(this.ad)*Math.sin(a)-Math.sin(this.ad)*Math.cos(a)*Math.cos(r)),e=Math.asin(Math.cos(a)*Math.sin(r)/Math.cos(t)),i.x=this.long0-e/this.alfa,o=t,h=0;var c=0;do i.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(t/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(o))/(1-this.e*Math.sin(o)),this.e/2))-this.s45),Math.abs(o-i.y)<1e-10&&(h=1),o=i.y,c+=1;while(h===0&&c<15);return c>=15?null:i}var V3=["Krovak","krovak"];const j3={init:B3,forward:G3,inverse:$3,names:V3};function Tt(i,t,e,a,r){return i*r-t*Math.sin(2*r)+e*Math.sin(4*r)-a*Math.sin(6*r)}function lr(i){return 1-.25*i*(1+i/16*(3+1.25*i))}function cr(i){return .375*i*(1+.25*i*(1+.46875*i))}function dr(i){return .05859375*i*i*(1+.75*i)}function ur(i){return i*i*i*(35/3072)}function Ki(i,t,e){var a=t*e;return i/Math.sqrt(1-a*a)}function ra(i){return Math.abs(i)<w?i:i-hr(i)*Math.PI}function dn(i,t,e,a,r){var n,s;n=i/t;for(var o=0;o<15;o++)if(s=(i-(t*n-e*Math.sin(2*n)+a*Math.sin(4*n)-r*Math.sin(6*n)))/(t-2*e*Math.cos(2*n)+4*a*Math.cos(4*n)-6*r*Math.cos(6*n)),n+=s,Math.abs(s)<=1e-10)return n;return NaN}function U3(){this.sphere||(this.e0=lr(this.es),this.e1=cr(this.es),this.e2=dr(this.es),this.e3=ur(this.es),this.ml0=this.a*Tt(this.e0,this.e1,this.e2,this.e3,this.lat0))}function W3(i){var t,e,a=i.x,r=i.y;if(a=S(a-this.long0),this.sphere)t=this.a*Math.asin(Math.cos(r)*Math.sin(a)),e=this.a*(Math.atan2(Math.tan(r),Math.cos(a))-this.lat0);else{var n=Math.sin(r),s=Math.cos(r),o=Ki(this.a,this.e,n),h=Math.tan(r)*Math.tan(r),l=a*Math.cos(r),c=l*l,d=this.es*s*s/(1-this.es),u=this.a*Tt(this.e0,this.e1,this.e2,this.e3,r);t=o*l*(1-c*h*(1/6-(8-h+8*d)*c/120)),e=u-this.ml0+o*n/s*c*(.5+(5-h+6*d)*c/24)}return i.x=t+this.x0,i.y=e+this.y0,i}function Y3(i){i.x-=this.x0,i.y-=this.y0;var t=i.x/this.a,e=i.y/this.a,a,r;if(this.sphere){var n=e+this.lat0;a=Math.asin(Math.sin(n)*Math.cos(t)),r=Math.atan2(Math.tan(t),Math.cos(n))}else{var s=this.ml0/this.a+e,o=dn(s,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(o)-w)<=I)return i.x=this.long0,i.y=w,e<0&&(i.y*=-1),i;var h=Ki(this.a,this.e,Math.sin(o)),l=h*h*h/this.a/this.a*(1-this.es),c=Math.pow(Math.tan(o),2),d=t*this.a/h,u=d*d;a=o-h*Math.tan(o)/l*d*d*(.5-(1+3*c)*d*d/24),r=d*(1-u*(c/3+(1+3*c)*c*u/15))/Math.cos(o)}return i.x=S(r+this.long0),i.y=ra(a),i}var q3=["Cassini","Cassini_Soldner","cass"];const H3={init:U3,forward:W3,inverse:Y3,names:q3};function Ye(i,t){var e;return i>1e-7?(e=i*t,(1-i*i)*(t/(1-e*e)-.5/i*Math.log((1-e)/(1+e)))):2*t}var X3=1,Z3=2,K3=3,Q3=4;function J3(){var i=Math.abs(this.lat0);if(Math.abs(i-w)<I?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(i)<I?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var t;switch(this.qp=Ye(this.e,1),this.mmf=.5/(1-this.es),this.apa=hg(this.es),this.mode){case this.N_POLE:this.dd=1;break;case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=Ye(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function tg(i){var t,e,a,r,n,s,o,h,l,c,d=i.x,u=i.y;if(d=S(d-this.long0),this.sphere){if(n=Math.sin(u),c=Math.cos(u),a=Math.cos(d),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e=this.mode===this.EQUIT?1+c*a:1+this.sinph0*n+this.cosph0*c*a,e<=I)return null;e=Math.sqrt(2/e),t=e*c*Math.sin(d),e*=this.mode===this.EQUIT?n:this.cosph0*n-this.sinph0*c*a}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(a=-a),Math.abs(u+this.lat0)<I)return null;e=tt-u*.5,e=2*(this.mode===this.S_POLE?Math.cos(e):Math.sin(e)),t=e*Math.sin(d),e*=a}}else{switch(o=0,h=0,l=0,a=Math.cos(d),r=Math.sin(d),n=Math.sin(u),s=Ye(this.e,n),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(o=s/this.qp,h=Math.sqrt(1-o*o)),this.mode){case this.OBLIQ:l=1+this.sinb1*o+this.cosb1*h*a;break;case this.EQUIT:l=1+h*a;break;case this.N_POLE:l=w+u,s=this.qp-s;break;case this.S_POLE:l=u-w,s=this.qp+s;break}if(Math.abs(l)<I)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:l=Math.sqrt(2/l),this.mode===this.OBLIQ?e=this.ymf*l*(this.cosb1*o-this.sinb1*h*a):e=(l=Math.sqrt(2/(1+h*a)))*o*this.ymf,t=this.xmf*l*h*r;break;case this.N_POLE:case this.S_POLE:s>=0?(t=(l=Math.sqrt(s))*r,e=a*(this.mode===this.S_POLE?l:-l)):t=e=0;break}}return i.x=this.a*t+this.x0,i.y=this.a*e+this.y0,i}function eg(i){i.x-=this.x0,i.y-=this.y0;var t=i.x/this.a,e=i.y/this.a,a,r,n,s,o,h,l;if(this.sphere){var c=0,d,u=0;if(d=Math.sqrt(t*t+e*e),r=d*.5,r>1)return null;switch(r=2*Math.asin(r),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(u=Math.sin(r),c=Math.cos(r)),this.mode){case this.EQUIT:r=Math.abs(d)<=I?0:Math.asin(e*u/d),t*=u,e=c*d;break;case this.OBLIQ:r=Math.abs(d)<=I?this.lat0:Math.asin(c*this.sinph0+e*u*this.cosph0/d),t*=u*this.cosph0,e=(c-Math.sin(r)*this.sinph0)*d;break;case this.N_POLE:e=-e,r=w-r;break;case this.S_POLE:r-=w;break}a=e===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(t,e)}else{if(l=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t/=this.dd,e*=this.dd,h=Math.sqrt(t*t+e*e),h<I)return i.x=this.long0,i.y=this.lat0,i;s=2*Math.asin(.5*h/this.rq),n=Math.cos(s),t*=s=Math.sin(s),this.mode===this.OBLIQ?(l=n*this.sinb1+e*s*this.cosb1/h,o=this.qp*l,e=h*this.cosb1*n-e*this.sinb1*s):(l=e*s/h,o=this.qp*l,e=h*n)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(e=-e),o=t*t+e*e,!o)return i.x=this.long0,i.y=this.lat0,i;l=1-o/this.qp,this.mode===this.S_POLE&&(l=-l)}a=Math.atan2(t,e),r=lg(Math.asin(l),this.apa)}return i.x=S(this.long0+a),i.y=r,i}var ig=.3333333333333333,ag=.17222222222222222,rg=.10257936507936508,ng=.06388888888888888,sg=.0664021164021164,og=.016415012942191543;function hg(i){var t,e=[];return e[0]=i*ig,t=i*i,e[0]+=t*ag,e[1]=t*ng,t*=i,e[0]+=t*rg,e[1]+=t*sg,e[2]=t*og,e}function lg(i,t){var e=i+i;return i+t[0]*Math.sin(e)+t[1]*Math.sin(e+e)+t[2]*Math.sin(e+e+e)}var cg=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const dg={init:J3,forward:tg,inverse:eg,names:cg,S_POLE:X3,N_POLE:Z3,EQUIT:K3,OBLIQ:Q3};function Ke(i){return Math.abs(i)>1&&(i=i>1?1:-1),Math.asin(i)}function ug(){Math.abs(this.lat1+this.lat2)<I||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=pe(this.e3,this.sin_po,this.cos_po),this.qs1=Ye(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=pe(this.e3,this.sin_po,this.cos_po),this.qs2=Ye(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=Ye(this.e3,this.sin_po,this.cos_po),Math.abs(this.lat1-this.lat2)>I?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function vg(i){var t=i.x,e=i.y;this.sin_phi=Math.sin(e),this.cos_phi=Math.cos(e);var a=Ye(this.e3,this.sin_phi,this.cos_phi),r=this.a*Math.sqrt(this.c-this.ns0*a)/this.ns0,n=this.ns0*S(t-this.long0),s=r*Math.sin(n)+this.x0,o=this.rh-r*Math.cos(n)+this.y0;return i.x=s,i.y=o,i}function pg(i){var t,e,a,r,n,s;return i.x-=this.x0,i.y=this.rh-i.y+this.y0,this.ns0>=0?(t=Math.sqrt(i.x*i.x+i.y*i.y),a=1):(t=-Math.sqrt(i.x*i.x+i.y*i.y),a=-1),r=0,t!==0&&(r=Math.atan2(a*i.x,a*i.y)),a=t*this.ns0/this.a,this.sphere?s=Math.asin((this.c-a*a)/(2*this.ns0)):(e=(this.c-a*a)/this.ns0,s=this.phi1z(this.e3,e)),n=S(r/this.ns0+this.long0),i.x=n,i.y=s,i}function fg(i,t){var e,a,r,n,s,o=Ke(.5*t);if(i<I)return o;for(var h=i*i,l=1;l<=25;l++)if(e=Math.sin(o),a=Math.cos(o),r=i*e,n=1-r*r,s=.5*n*n/a*(t/(1-h)-e/n+.5/i*Math.log((1-r)/(1+r))),o=o+s,Math.abs(s)<=1e-7)return o;return null}var gg=["Albers_Conic_Equal_Area","Albers","aea"];const mg={init:ug,forward:vg,inverse:pg,names:gg,phi1z:fg};function _g(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function yg(i){var t,e,a,r,n,s,o,h,l=i.x,c=i.y;return a=S(l-this.long0),t=Math.sin(c),e=Math.cos(c),r=Math.cos(a),s=this.sin_p14*t+this.cos_p14*e*r,n=1,s>0||Math.abs(s)<=I?(o=this.x0+this.a*n*e*Math.sin(a)/s,h=this.y0+this.a*n*(this.cos_p14*t-this.sin_p14*e*r)/s):(o=this.x0+this.infinity_dist*e*Math.sin(a),h=this.y0+this.infinity_dist*(this.cos_p14*t-this.sin_p14*e*r)),i.x=o,i.y=h,i}function Mg(i){var t,e,a,r,n,s;return i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,i.x/=this.k0,i.y/=this.k0,(t=Math.sqrt(i.x*i.x+i.y*i.y))?(r=Math.atan2(t,this.rc),e=Math.sin(r),a=Math.cos(r),s=Ke(a*this.sin_p14+i.y*e*this.cos_p14/t),n=Math.atan2(i.x*e,t*this.cos_p14*a-i.y*this.sin_p14*e),n=S(this.long0+n)):(s=this.phic0,n=0),i.x=n,i.y=s,i}var bg=["gnom"];const zg={init:_g,forward:yg,inverse:Mg,names:bg};function xg(i,t){var e=1-(1-i*i)/(2*i)*Math.log((1-i)/(1+i));if(Math.abs(Math.abs(t)-e)<1e-6)return t<0?-1*w:w;for(var a=Math.asin(.5*t),r,n,s,o,h=0;h<30;h++)if(n=Math.sin(a),s=Math.cos(a),o=i*n,r=Math.pow(1-o*o,2)/(2*s)*(t/(1-i*i)-n/(1-o*o)+.5/i*Math.log((1-o)/(1+o))),a+=r,Math.abs(r)<=1e-10)return a;return NaN}function Ag(){this.sphere||(this.k0=pe(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function wg(i){var t=i.x,e=i.y,a,r,n=S(t-this.long0);if(this.sphere)a=this.x0+this.a*n*Math.cos(this.lat_ts),r=this.y0+this.a*Math.sin(e)/Math.cos(this.lat_ts);else{var s=Ye(this.e,Math.sin(e));a=this.x0+this.a*this.k0*n,r=this.y0+this.a*s*.5/this.k0}return i.x=a,i.y=r,i}function Eg(i){i.x-=this.x0,i.y-=this.y0;var t,e;return this.sphere?(t=S(this.long0+i.x/this.a/Math.cos(this.lat_ts)),e=Math.asin(i.y/this.a*Math.cos(this.lat_ts))):(e=xg(this.e,2*i.y*this.k0/this.a),t=S(this.long0+i.x/(this.a*this.k0))),i.x=t,i.y=e,i}var Cg=["cea"];const Ig={init:Ag,forward:wg,inverse:Eg,names:Cg};function Sg(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function Tg(i){var t=i.x,e=i.y,a=S(t-this.long0),r=ra(e-this.lat0);return i.x=this.x0+this.a*a*this.rc,i.y=this.y0+this.a*r,i}function Rg(i){var t=i.x,e=i.y;return i.x=S(this.long0+(t-this.x0)/(this.a*this.rc)),i.y=ra(this.lat0+(e-this.y0)/this.a),i}var Og=["Equirectangular","Equidistant_Cylindrical","eqc"];const Pg={init:Sg,forward:Tg,inverse:Rg,names:Og};var yh=20;function Lg(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=lr(this.es),this.e1=cr(this.es),this.e2=dr(this.es),this.e3=ur(this.es),this.ml0=this.a*Tt(this.e0,this.e1,this.e2,this.e3,this.lat0)}function kg(i){var t=i.x,e=i.y,a,r,n,s=S(t-this.long0);if(n=s*Math.sin(e),this.sphere)Math.abs(e)<=I?(a=this.a*s,r=-1*this.a*this.lat0):(a=this.a*Math.sin(n)/Math.tan(e),r=this.a*(ra(e-this.lat0)+(1-Math.cos(n))/Math.tan(e)));else if(Math.abs(e)<=I)a=this.a*s,r=-1*this.ml0;else{var o=Ki(this.a,this.e,Math.sin(e))/Math.tan(e);a=o*Math.sin(n),r=this.a*Tt(this.e0,this.e1,this.e2,this.e3,e)-this.ml0+o*(1-Math.cos(n))}return i.x=a+this.x0,i.y=r+this.y0,i}function Fg(i){var t,e,a,r,n,s,o,h,l;if(a=i.x-this.x0,r=i.y-this.y0,this.sphere)if(Math.abs(r+this.a*this.lat0)<=I)t=S(a/this.a+this.long0),e=0;else{s=this.lat0+r/this.a,o=a*a/this.a/this.a+s*s,h=s;var c;for(n=yh;n;--n)if(c=Math.tan(h),l=-1*(s*(h*c+1)-h-.5*(h*h+o)*c)/((h-s)/c-1),h+=l,Math.abs(l)<=I){e=h;break}t=S(this.long0+Math.asin(a*Math.tan(h)/this.a)/Math.sin(e))}else if(Math.abs(r+this.ml0)<=I)e=0,t=S(this.long0+a/this.a);else{s=(this.ml0+r)/this.a,o=a*a/this.a/this.a+s*s,h=s;var d,u,v,p,f;for(n=yh;n;--n)if(f=this.e*Math.sin(h),d=Math.sqrt(1-f*f)*Math.tan(h),u=this.a*Tt(this.e0,this.e1,this.e2,this.e3,h),v=this.e0-2*this.e1*Math.cos(2*h)+4*this.e2*Math.cos(4*h)-6*this.e3*Math.cos(6*h),p=u/this.a,l=(s*(d*p+1)-p-.5*d*(p*p+o))/(this.es*Math.sin(2*h)*(p*p+o-2*s*p)/(4*d)+(s-p)*(d*v-2/Math.sin(2*h))-v),h-=l,Math.abs(l)<=I){e=h;break}d=Math.sqrt(1-this.es*Math.pow(Math.sin(e),2))*Math.tan(e),t=S(this.long0+Math.asin(a*d/this.a)/Math.sin(e))}return i.x=t,i.y=e,i}var Dg=["Polyconic","poly"];const Ng={init:Lg,forward:kg,inverse:Fg,names:Dg};function Bg(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function Gg(i){var t,e=i.x,a=i.y,r=a-this.lat0,n=e-this.long0,s=r/Da*1e-5,o=n,h=1,l=0;for(t=1;t<=10;t++)h=h*s,l=l+this.A[t]*h;var c=l,d=o,u=1,v=0,p,f,g=0,m=0;for(t=1;t<=6;t++)p=u*c-v*d,f=v*c+u*d,u=p,v=f,g=g+this.B_re[t]*u-this.B_im[t]*v,m=m+this.B_im[t]*u+this.B_re[t]*v;return i.x=m*this.a+this.x0,i.y=g*this.a+this.y0,i}function $g(i){var t,e=i.x,a=i.y,r=e-this.x0,n=a-this.y0,s=n/this.a,o=r/this.a,h=1,l=0,c,d,u=0,v=0;for(t=1;t<=6;t++)c=h*s-l*o,d=l*s+h*o,h=c,l=d,u=u+this.C_re[t]*h-this.C_im[t]*l,v=v+this.C_im[t]*h+this.C_re[t]*l;for(var p=0;p<this.iterations;p++){var f=u,g=v,m,_,y=s,M=o;for(t=2;t<=6;t++)m=f*u-g*v,_=g*u+f*v,f=m,g=_,y=y+(t-1)*(this.B_re[t]*f-this.B_im[t]*g),M=M+(t-1)*(this.B_im[t]*f+this.B_re[t]*g);f=1,g=0;var b=this.B_re[1],z=this.B_im[1];for(t=2;t<=6;t++)m=f*u-g*v,_=g*u+f*v,f=m,g=_,b=b+t*(this.B_re[t]*f-this.B_im[t]*g),z=z+t*(this.B_im[t]*f+this.B_re[t]*g);var A=b*b+z*z;u=(y*b+M*z)/A,v=(M*b-y*z)/A}var x=u,C=v,T=1,P=0;for(t=1;t<=9;t++)T=T*x,P=P+this.D[t]*T;var k=this.lat0+P*Da*1e5,L=this.long0+C;return i.x=L,i.y=k,i}var Vg=["New_Zealand_Map_Grid","nzmg"];const jg={init:Bg,forward:Gg,inverse:$g,names:Vg};function Ug(){}function Wg(i){var t=i.x,e=i.y,a=S(t-this.long0),r=this.x0+this.a*a,n=this.y0+this.a*Math.log(Math.tan(Math.PI/4+e/2.5))*1.25;return i.x=r,i.y=n,i}function Yg(i){i.x-=this.x0,i.y-=this.y0;var t=S(this.long0+i.x/this.a),e=2.5*(Math.atan(Math.exp(.8*i.y/this.a))-Math.PI/4);return i.x=t,i.y=e,i}var qg=["Miller_Cylindrical","mill"];const Hg={init:Ug,forward:Wg,inverse:Yg,names:qg};var Xg=20;function Zg(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=gc(this.es)}function Kg(i){var t,e,a=i.x,r=i.y;if(a=S(a-this.long0),this.sphere){if(!this.m)r=this.n!==1?Math.asin(this.n*Math.sin(r)):r;else for(var n=this.n*Math.sin(r),s=Xg;s;--s){var o=(this.m*r+Math.sin(r)-n)/(this.m+Math.cos(r));if(r-=o,Math.abs(o)<I)break}t=this.a*this.C_x*a*(this.m+Math.cos(r)),e=this.a*this.C_y*r}else{var h=Math.sin(r),l=Math.cos(r);e=this.a*Fn(r,h,l,this.en),t=this.a*a*l/Math.sqrt(1-this.es*h*h)}return i.x=t,i.y=e,i}function Qg(i){var t,e,a,r;return i.x-=this.x0,a=i.x/this.a,i.y-=this.y0,t=i.y/this.a,this.sphere?(t/=this.C_y,a=a/(this.C_x*(this.m+Math.cos(t))),this.m?t=Ke((this.m*t+Math.sin(t))/this.n):this.n!==1&&(t=Ke(Math.sin(t)/this.n)),a=S(a+this.long0),t=ra(t)):(t=mc(i.y/this.a,this.es,this.en),r=Math.abs(t),r<w?(r=Math.sin(t),e=this.long0+i.x*Math.sqrt(1-this.es*r*r)/(this.a*Math.cos(t)),a=S(e)):r-I<w&&(a=this.long0)),i.x=a,i.y=t,i}var Jg=["Sinusoidal","sinu"];const t5={init:Zg,forward:Kg,inverse:Qg,names:Jg};function e5(){}function i5(i){for(var t=i.x,e=i.y,a=S(t-this.long0),r=e,n=Math.PI*Math.sin(e);;){var s=-(r+Math.sin(r)-n)/(1+Math.cos(r));if(r+=s,Math.abs(s)<I)break}r/=2,Math.PI/2-Math.abs(e)<I&&(a=0);var o=.900316316158*this.a*a*Math.cos(r)+this.x0,h=1.4142135623731*this.a*Math.sin(r)+this.y0;return i.x=o,i.y=h,i}function a5(i){var t,e;i.x-=this.x0,i.y-=this.y0,e=i.y/(1.4142135623731*this.a),Math.abs(e)>.999999999999&&(e=.999999999999),t=Math.asin(e);var a=S(this.long0+i.x/(.900316316158*this.a*Math.cos(t)));a<-Math.PI&&(a=-Math.PI),a>Math.PI&&(a=Math.PI),e=(2*t+Math.sin(2*t))/Math.PI,Math.abs(e)>1&&(e=1);var r=Math.asin(e);return i.x=a,i.y=r,i}var r5=["Mollweide","moll"];const n5={init:e5,forward:i5,inverse:a5,names:r5};function s5(){Math.abs(this.lat1+this.lat2)<I||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=lr(this.es),this.e1=cr(this.es),this.e2=dr(this.es),this.e3=ur(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=pe(this.e,this.sinphi,this.cosphi),this.ml1=Tt(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<I?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=pe(this.e,this.sinphi,this.cosphi),this.ml2=Tt(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=Tt(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function o5(i){var t=i.x,e=i.y,a;if(this.sphere)a=this.a*(this.g-e);else{var r=Tt(this.e0,this.e1,this.e2,this.e3,e);a=this.a*(this.g-r)}var n=this.ns*S(t-this.long0),s=this.x0+a*Math.sin(n),o=this.y0+this.rh-a*Math.cos(n);return i.x=s,i.y=o,i}function h5(i){i.x-=this.x0,i.y=this.rh-i.y+this.y0;var t,e,a,r;this.ns>=0?(e=Math.sqrt(i.x*i.x+i.y*i.y),t=1):(e=-Math.sqrt(i.x*i.x+i.y*i.y),t=-1);var n=0;if(e!==0&&(n=Math.atan2(t*i.x,t*i.y)),this.sphere)return r=S(this.long0+n/this.ns),a=ra(this.g-e/this.a),i.x=r,i.y=a,i;var s=this.g-e/this.a;return a=dn(s,this.e0,this.e1,this.e2,this.e3),r=S(this.long0+n/this.ns),i.x=r,i.y=a,i}var l5=["Equidistant_Conic","eqdc"];const c5={init:s5,forward:o5,inverse:h5,names:l5};function d5(){this.R=this.a}function u5(i){var t=i.x,e=i.y,a=S(t-this.long0),r,n;Math.abs(e)<=I&&(r=this.x0+this.R*a,n=this.y0);var s=Ke(2*Math.abs(e/Math.PI));(Math.abs(a)<=I||Math.abs(Math.abs(e)-w)<=I)&&(r=this.x0,e>=0?n=this.y0+Math.PI*this.R*Math.tan(.5*s):n=this.y0+Math.PI*this.R*-Math.tan(.5*s));var o=.5*Math.abs(Math.PI/a-a/Math.PI),h=o*o,l=Math.sin(s),c=Math.cos(s),d=c/(l+c-1),u=d*d,v=d*(2/l-1),p=v*v,f=Math.PI*this.R*(o*(d-p)+Math.sqrt(h*(d-p)*(d-p)-(p+h)*(u-p)))/(p+h);a<0&&(f=-f),r=this.x0+f;var g=h+d;return f=Math.PI*this.R*(v*g-o*Math.sqrt((p+h)*(h+1)-g*g))/(p+h),e>=0?n=this.y0+f:n=this.y0-f,i.x=r,i.y=n,i}function v5(i){var t,e,a,r,n,s,o,h,l,c,d,u,v;return i.x-=this.x0,i.y-=this.y0,d=Math.PI*this.R,a=i.x/d,r=i.y/d,n=a*a+r*r,s=-Math.abs(r)*(1+n),o=s-2*r*r+a*a,h=-2*s+1+2*r*r+n*n,v=r*r/h+(2*o*o*o/h/h/h-9*s*o/h/h)/27,l=(s-o*o/3/h)/h,c=2*Math.sqrt(-l/3),d=3*v/l/c,Math.abs(d)>1&&(d>=0?d=1:d=-1),u=Math.acos(d)/3,i.y>=0?e=(-c*Math.cos(u+Math.PI/3)-o/3/h)*Math.PI:e=-(-c*Math.cos(u+Math.PI/3)-o/3/h)*Math.PI,Math.abs(a)<I?t=this.long0:t=S(this.long0+Math.PI*(n-1+Math.sqrt(1+2*(a*a-r*r)+n*n))/2/a),i.x=t,i.y=e,i}var p5=["Van_der_Grinten_I","VanDerGrinten","vandg"];const f5={init:d5,forward:u5,inverse:v5,names:p5};function g5(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)}function m5(i){var t=i.x,e=i.y,a=Math.sin(i.y),r=Math.cos(i.y),n=S(t-this.long0),s,o,h,l,c,d,u,v,p,f,g,m,_,y,M,b,z,A,x,C,T,P,k;return this.sphere?Math.abs(this.sin_p12-1)<=I?(i.x=this.x0+this.a*(w-e)*Math.sin(n),i.y=this.y0-this.a*(w-e)*Math.cos(n),i):Math.abs(this.sin_p12+1)<=I?(i.x=this.x0+this.a*(w+e)*Math.sin(n),i.y=this.y0+this.a*(w+e)*Math.cos(n),i):(A=this.sin_p12*a+this.cos_p12*r*Math.cos(n),b=Math.acos(A),z=b?b/Math.sin(b):1,i.x=this.x0+this.a*z*r*Math.sin(n),i.y=this.y0+this.a*z*(this.cos_p12*a-this.sin_p12*r*Math.cos(n)),i):(s=lr(this.es),o=cr(this.es),h=dr(this.es),l=ur(this.es),Math.abs(this.sin_p12-1)<=I?(c=this.a*Tt(s,o,h,l,w),d=this.a*Tt(s,o,h,l,e),i.x=this.x0+(c-d)*Math.sin(n),i.y=this.y0-(c-d)*Math.cos(n),i):Math.abs(this.sin_p12+1)<=I?(c=this.a*Tt(s,o,h,l,w),d=this.a*Tt(s,o,h,l,e),i.x=this.x0+(c+d)*Math.sin(n),i.y=this.y0+(c+d)*Math.cos(n),i):(u=a/r,v=Ki(this.a,this.e,this.sin_p12),p=Ki(this.a,this.e,a),f=Math.atan((1-this.es)*u+this.es*v*this.sin_p12/(p*r)),g=Math.atan2(Math.sin(n),this.cos_p12*Math.tan(f)-this.sin_p12*Math.cos(n)),g===0?x=Math.asin(this.cos_p12*Math.sin(f)-this.sin_p12*Math.cos(f)):Math.abs(Math.abs(g)-Math.PI)<=I?x=-Math.asin(this.cos_p12*Math.sin(f)-this.sin_p12*Math.cos(f)):x=Math.asin(Math.sin(n)*Math.cos(f)/Math.sin(g)),m=this.e*this.sin_p12/Math.sqrt(1-this.es),_=this.e*this.cos_p12*Math.cos(g)/Math.sqrt(1-this.es),y=m*_,M=_*_,C=x*x,T=C*x,P=T*x,k=P*x,b=v*x*(1-C*M*(1-M)/6+T/8*y*(1-2*M)+P/120*(M*(4-7*M)-3*m*m*(1-7*M))-k/48*y),i.x=this.x0+b*Math.sin(g),i.y=this.y0+b*Math.cos(g),i))}function _5(i){i.x-=this.x0,i.y-=this.y0;var t,e,a,r,n,s,o,h,l,c,d,u,v,p,f,g,m,_,y,M,b,z,A,x;return this.sphere?(t=Math.sqrt(i.x*i.x+i.y*i.y),t>2*w*this.a?void 0:(e=t/this.a,a=Math.sin(e),r=Math.cos(e),n=this.long0,Math.abs(t)<=I?s=this.lat0:(s=Ke(r*this.sin_p12+i.y*a*this.cos_p12/t),o=Math.abs(this.lat0)-w,Math.abs(o)<=I?this.lat0>=0?n=S(this.long0+Math.atan2(i.x,-i.y)):n=S(this.long0-Math.atan2(-i.x,i.y)):n=S(this.long0+Math.atan2(i.x*a,t*this.cos_p12*r-i.y*this.sin_p12*a))),i.x=n,i.y=s,i)):(h=lr(this.es),l=cr(this.es),c=dr(this.es),d=ur(this.es),Math.abs(this.sin_p12-1)<=I?(u=this.a*Tt(h,l,c,d,w),t=Math.sqrt(i.x*i.x+i.y*i.y),v=u-t,s=dn(v/this.a,h,l,c,d),n=S(this.long0+Math.atan2(i.x,-1*i.y)),i.x=n,i.y=s,i):Math.abs(this.sin_p12+1)<=I?(u=this.a*Tt(h,l,c,d,w),t=Math.sqrt(i.x*i.x+i.y*i.y),v=t-u,s=dn(v/this.a,h,l,c,d),n=S(this.long0+Math.atan2(i.x,i.y)),i.x=n,i.y=s,i):(t=Math.sqrt(i.x*i.x+i.y*i.y),g=Math.atan2(i.x,i.y),p=Ki(this.a,this.e,this.sin_p12),m=Math.cos(g),_=this.e*this.cos_p12*m,y=-_*_/(1-this.es),M=3*this.es*(1-y)*this.sin_p12*this.cos_p12*m/(1-this.es),b=t/p,z=b-y*(1+y)*Math.pow(b,3)/6-M*(1+3*y)*Math.pow(b,4)/24,A=1-y*z*z/2-b*z*z*z/6,f=Math.asin(this.sin_p12*Math.cos(z)+this.cos_p12*Math.sin(z)*m),n=S(this.long0+Math.asin(Math.sin(g)*Math.sin(z)/Math.cos(f))),x=Math.sin(f),s=Math.atan2((x-this.es*A*this.sin_p12)*Math.tan(f),x*(1-this.es)),i.x=n,i.y=s,i))}var y5=["Azimuthal_Equidistant","aeqd"];const M5={init:g5,forward:m5,inverse:_5,names:y5};function b5(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function z5(i){var t,e,a,r,n,s,o,h,l=i.x,c=i.y;return a=S(l-this.long0),t=Math.sin(c),e=Math.cos(c),r=Math.cos(a),s=this.sin_p14*t+this.cos_p14*e*r,n=1,(s>0||Math.abs(s)<=I)&&(o=this.a*n*e*Math.sin(a),h=this.y0+this.a*n*(this.cos_p14*t-this.sin_p14*e*r)),i.x=o,i.y=h,i}function x5(i){var t,e,a,r,n,s,o;return i.x-=this.x0,i.y-=this.y0,t=Math.sqrt(i.x*i.x+i.y*i.y),e=Ke(t/this.a),a=Math.sin(e),r=Math.cos(e),s=this.long0,Math.abs(t)<=I?(o=this.lat0,i.x=s,i.y=o,i):(o=Ke(r*this.sin_p14+i.y*a*this.cos_p14/t),n=Math.abs(this.lat0)-w,Math.abs(n)<=I?(this.lat0>=0?s=S(this.long0+Math.atan2(i.x,-i.y)):s=S(this.long0-Math.atan2(-i.x,i.y)),i.x=s,i.y=o,i):(s=S(this.long0+Math.atan2(i.x*a,t*this.cos_p14*r-i.y*this.sin_p14*a)),i.x=s,i.y=o,i))}var A5=["ortho"];const w5={init:b5,forward:z5,inverse:x5,names:A5};var lt={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},et={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function E5(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=w-tt/2?this.face=lt.TOP:this.lat0<=-(w-tt/2)?this.face=lt.BOTTOM:Math.abs(this.long0)<=tt?this.face=lt.FRONT:Math.abs(this.long0)<=w+tt?this.face=this.long0>0?lt.RIGHT:lt.LEFT:this.face=lt.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function C5(i){var t={x:0,y:0},e,a,r,n,s,o,h={value:0};if(i.x-=this.long0,this.es!==0?e=Math.atan(this.one_minus_f_squared*Math.tan(i.y)):e=i.y,a=i.x,this.face===lt.TOP)n=w-e,a>=tt&&a<=w+tt?(h.value=et.AREA_0,r=a-w):a>w+tt||a<=-(w+tt)?(h.value=et.AREA_1,r=a>0?a-pt:a+pt):a>-(w+tt)&&a<=-tt?(h.value=et.AREA_2,r=a+w):(h.value=et.AREA_3,r=a);else if(this.face===lt.BOTTOM)n=w+e,a>=tt&&a<=w+tt?(h.value=et.AREA_0,r=-a+w):a<tt&&a>=-tt?(h.value=et.AREA_1,r=-a):a<-tt&&a>=-(w+tt)?(h.value=et.AREA_2,r=-a-w):(h.value=et.AREA_3,r=a>0?-a+pt:-a-pt);else{var l,c,d,u,v,p,f;this.face===lt.RIGHT?a=Yi(a,+w):this.face===lt.BACK?a=Yi(a,+pt):this.face===lt.LEFT&&(a=Yi(a,-w)),u=Math.sin(e),v=Math.cos(e),p=Math.sin(a),f=Math.cos(a),l=v*f,c=v*p,d=u,this.face===lt.FRONT?(n=Math.acos(l),r=Pr(n,d,c,h)):this.face===lt.RIGHT?(n=Math.acos(c),r=Pr(n,d,-l,h)):this.face===lt.BACK?(n=Math.acos(-l),r=Pr(n,d,-c,h)):this.face===lt.LEFT?(n=Math.acos(-c),r=Pr(n,d,l,h)):(n=r=0,h.value=et.AREA_0)}return o=Math.atan(12/pt*(r+Math.acos(Math.sin(r)*Math.cos(tt))-w)),s=Math.sqrt((1-Math.cos(n))/(Math.cos(o)*Math.cos(o))/(1-Math.cos(Math.atan(1/Math.cos(r))))),h.value===et.AREA_1?o+=w:h.value===et.AREA_2?o+=pt:h.value===et.AREA_3&&(o+=1.5*pt),t.x=s*Math.cos(o),t.y=s*Math.sin(o),t.x=t.x*this.a+this.x0,t.y=t.y*this.a+this.y0,i.x=t.x,i.y=t.y,i}function I5(i){var t={lam:0,phi:0},e,a,r,n,s,o,h,l,c,d={value:0};if(i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,a=Math.atan(Math.sqrt(i.x*i.x+i.y*i.y)),e=Math.atan2(i.y,i.x),i.x>=0&&i.x>=Math.abs(i.y)?d.value=et.AREA_0:i.y>=0&&i.y>=Math.abs(i.x)?(d.value=et.AREA_1,e-=w):i.x<0&&-i.x>=Math.abs(i.y)?(d.value=et.AREA_2,e=e<0?e+pt:e-pt):(d.value=et.AREA_3,e+=w),c=pt/12*Math.tan(e),s=Math.sin(c)/(Math.cos(c)-1/Math.sqrt(2)),o=Math.atan(s),r=Math.cos(e),n=Math.tan(a),h=1-r*r*n*n*(1-Math.cos(Math.atan(1/Math.cos(o)))),h<-1?h=-1:h>1&&(h=1),this.face===lt.TOP)l=Math.acos(h),t.phi=w-l,d.value===et.AREA_0?t.lam=o+w:d.value===et.AREA_1?t.lam=o<0?o+pt:o-pt:d.value===et.AREA_2?t.lam=o-w:t.lam=o;else if(this.face===lt.BOTTOM)l=Math.acos(h),t.phi=l-w,d.value===et.AREA_0?t.lam=-o+w:d.value===et.AREA_1?t.lam=-o:d.value===et.AREA_2?t.lam=-o-w:t.lam=o<0?-o-pt:-o+pt;else{var u,v,p;u=h,c=u*u,c>=1?p=0:p=Math.sqrt(1-c)*Math.sin(o),c+=p*p,c>=1?v=0:v=Math.sqrt(1-c),d.value===et.AREA_1?(c=v,v=-p,p=c):d.value===et.AREA_2?(v=-v,p=-p):d.value===et.AREA_3&&(c=v,v=p,p=-c),this.face===lt.RIGHT?(c=u,u=-v,v=c):this.face===lt.BACK?(u=-u,v=-v):this.face===lt.LEFT&&(c=u,u=v,v=-c),t.phi=Math.acos(-p)-w,t.lam=Math.atan2(v,u),this.face===lt.RIGHT?t.lam=Yi(t.lam,-w):this.face===lt.BACK?t.lam=Yi(t.lam,-pt):this.face===lt.LEFT&&(t.lam=Yi(t.lam,+w))}if(this.es!==0){var f,g,m;f=t.phi<0?1:0,g=Math.tan(t.phi),m=this.b/Math.sqrt(g*g+this.one_minus_f_squared),t.phi=Math.atan(Math.sqrt(this.a*this.a-m*m)/(this.one_minus_f*m)),f&&(t.phi=-t.phi)}return t.lam+=this.long0,i.x=t.lam,i.y=t.phi,i}function Pr(i,t,e,a){var r;return i<I?(a.value=et.AREA_0,r=0):(r=Math.atan2(t,e),Math.abs(r)<=tt?a.value=et.AREA_0:r>tt&&r<=w+tt?(a.value=et.AREA_1,r-=w):r>w+tt||r<=-(w+tt)?(a.value=et.AREA_2,r=r>=0?r-pt:r+pt):(a.value=et.AREA_3,r+=w)),r}function Yi(i,t){var e=i+t;return e<-pt?e+=Va:e>+pt&&(e-=Va),e}var S5=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const T5={init:E5,forward:C5,inverse:I5,names:S5};var G0=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],Ca=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],Mc=.8487,bc=1.3523,zc=le/5,R5=1/zc,Di=18,un=function(i,t){return i[0]+t*(i[1]+t*(i[2]+t*i[3]))},O5=function(i,t){return i[1]+t*(2*i[2]+t*3*i[3])};function P5(i,t,e,a){for(var r=t;a;--a){var n=i(r);if(r-=n,Math.abs(n)<e)break}return r}function L5(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function k5(i){var t=S(i.x-this.long0),e=Math.abs(i.y),a=Math.floor(e*zc);a<0?a=0:a>=Di&&(a=Di-1),e=le*(e-R5*a);var r={x:un(G0[a],e)*t,y:un(Ca[a],e)};return i.y<0&&(r.y=-r.y),r.x=r.x*this.a*Mc+this.x0,r.y=r.y*this.a*bc+this.y0,r}function F5(i){var t={x:(i.x-this.x0)/(this.a*Mc),y:Math.abs(i.y-this.y0)/(this.a*bc)};if(t.y>=1)t.x/=G0[Di][0],t.y=i.y<0?-w:w;else{var e=Math.floor(t.y*Di);for(e<0?e=0:e>=Di&&(e=Di-1);;)if(Ca[e][0]>t.y)--e;else if(Ca[e+1][0]<=t.y)++e;else break;var a=Ca[e],r=5*(t.y-a[0])/(Ca[e+1][0]-a[0]);r=P5(function(n){return(un(a,n)-t.y)/O5(a,n)},r,I,100),t.x/=un(G0[e],r),t.y=(5*e+r)*bt,i.y<0&&(t.y=-t.y)}return t.x=S(t.x+this.long0),t}var D5=["Robinson","robin"];const N5={init:L5,forward:k5,inverse:F5,names:D5};function B5(){this.name="geocent"}function G5(i){var t=oc(i,this.es,this.a);return t}function $5(i){var t=hc(i,this.es,this.a,this.b);return t}var V5=["Geocentric","geocentric","geocent","Geocent"];const j5={init:B5,forward:G5,inverse:$5,names:V5};var xt={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},ya={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function U5(){if(Object.keys(ya).forEach(function(e){if(typeof this[e]>"u")this[e]=ya[e].def;else{if(ya[e].num&&isNaN(this[e]))throw new Error("Invalid parameter value, must be numeric "+e+" = "+this[e]);ya[e].num&&(this[e]=parseFloat(this[e]))}ya[e].degrees&&(this[e]=this[e]*bt)}.bind(this)),Math.abs(Math.abs(this.lat0)-w)<I?this.mode=this.lat0<0?xt.S_POLE:xt.N_POLE:Math.abs(this.lat0)<I?this.mode=xt.EQUIT:(this.mode=xt.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var i=this.tilt,t=this.azi;this.cg=Math.cos(t),this.sg=Math.sin(t),this.cw=Math.cos(i),this.sw=Math.sin(i)}function W5(i){i.x-=this.long0;var t=Math.sin(i.y),e=Math.cos(i.y),a=Math.cos(i.x),r,n;switch(this.mode){case xt.OBLIQ:n=this.sinph0*t+this.cosph0*e*a;break;case xt.EQUIT:n=e*a;break;case xt.S_POLE:n=-t;break;case xt.N_POLE:n=t;break}switch(n=this.pn1/(this.p-n),r=n*e*Math.sin(i.x),this.mode){case xt.OBLIQ:n*=this.cosph0*t-this.sinph0*e*a;break;case xt.EQUIT:n*=t;break;case xt.N_POLE:n*=-(e*a);break;case xt.S_POLE:n*=e*a;break}var s,o;return s=n*this.cg+r*this.sg,o=1/(s*this.sw*this.h1+this.cw),r=(r*this.cg-n*this.sg)*this.cw*o,n=s*o,i.x=r*this.a,i.y=n*this.a,i}function Y5(i){i.x/=this.a,i.y/=this.a;var t={x:i.x,y:i.y},e,a,r;r=1/(this.pn1-i.y*this.sw),e=this.pn1*i.x*r,a=this.pn1*i.y*this.cw*r,i.x=e*this.cg+a*this.sg,i.y=a*this.cg-e*this.sg;var n=ie(i.x,i.y);if(Math.abs(n)<I)t.x=0,t.y=i.y;else{var s,o;switch(o=1-n*n*this.pfact,o=(this.p-Math.sqrt(o))/(this.pn1/n+n/this.pn1),s=Math.sqrt(1-o*o),this.mode){case xt.OBLIQ:t.y=Math.asin(s*this.sinph0+i.y*o*this.cosph0/n),i.y=(s-this.sinph0*Math.sin(t.y))*n,i.x*=o*this.cosph0;break;case xt.EQUIT:t.y=Math.asin(i.y*o/n),i.y=s*n,i.x*=o;break;case xt.N_POLE:t.y=Math.asin(s),i.y=-i.y;break;case xt.S_POLE:t.y=-Math.asin(s);break}t.x=Math.atan2(i.x,i.y)}return i.x=t.x+this.long0,i.y=t.y,i}var q5=["Tilted_Perspective","tpers"];const H5={init:U5,forward:W5,inverse:Y5,names:q5};function X5(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var i=1-this.es,t=1/i;this.radius_p=Math.sqrt(i),this.radius_p2=i,this.radius_p_inv2=t,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function Z5(i){var t=i.x,e=i.y,a,r,n,s;if(t=t-this.long0,this.shape==="ellipse"){e=Math.atan(this.radius_p2*Math.tan(e));var o=this.radius_p/ie(this.radius_p*Math.cos(e),Math.sin(e));if(r=o*Math.cos(t)*Math.cos(e),n=o*Math.sin(t)*Math.cos(e),s=o*Math.sin(e),(this.radius_g-r)*r-n*n-s*s*this.radius_p_inv2<0)return i.x=Number.NaN,i.y=Number.NaN,i;a=this.radius_g-r,this.flip_axis?(i.x=this.radius_g_1*Math.atan(n/ie(s,a)),i.y=this.radius_g_1*Math.atan(s/a)):(i.x=this.radius_g_1*Math.atan(n/a),i.y=this.radius_g_1*Math.atan(s/ie(n,a)))}else this.shape==="sphere"&&(a=Math.cos(e),r=Math.cos(t)*a,n=Math.sin(t)*a,s=Math.sin(e),a=this.radius_g-r,this.flip_axis?(i.x=this.radius_g_1*Math.atan(n/ie(s,a)),i.y=this.radius_g_1*Math.atan(s/a)):(i.x=this.radius_g_1*Math.atan(n/a),i.y=this.radius_g_1*Math.atan(s/ie(n,a))));return i.x=i.x*this.a,i.y=i.y*this.a,i}function K5(i){var t=-1,e=0,a=0,r,n,s,o;if(i.x=i.x/this.a,i.y=i.y/this.a,this.shape==="ellipse"){this.flip_axis?(a=Math.tan(i.y/this.radius_g_1),e=Math.tan(i.x/this.radius_g_1)*ie(1,a)):(e=Math.tan(i.x/this.radius_g_1),a=Math.tan(i.y/this.radius_g_1)*ie(1,e));var h=a/this.radius_p;if(r=e*e+h*h+t*t,n=2*this.radius_g*t,s=n*n-4*r*this.C,s<0)return i.x=Number.NaN,i.y=Number.NaN,i;o=(-n-Math.sqrt(s))/(2*r),t=this.radius_g+o*t,e*=o,a*=o,i.x=Math.atan2(e,t),i.y=Math.atan(a*Math.cos(i.x)/t),i.y=Math.atan(this.radius_p_inv2*Math.tan(i.y))}else if(this.shape==="sphere"){if(this.flip_axis?(a=Math.tan(i.y/this.radius_g_1),e=Math.tan(i.x/this.radius_g_1)*Math.sqrt(1+a*a)):(e=Math.tan(i.x/this.radius_g_1),a=Math.tan(i.y/this.radius_g_1)*Math.sqrt(1+e*e)),r=e*e+a*a+t*t,n=2*this.radius_g*t,s=n*n-4*r*this.C,s<0)return i.x=Number.NaN,i.y=Number.NaN,i;o=(-n-Math.sqrt(s))/(2*r),t=this.radius_g+o*t,e*=o,a*=o,i.x=Math.atan2(e,t),i.y=Math.atan(a*Math.cos(i.x)/t)}return i.x=i.x+this.long0,i}var Q5=["Geostationary Satellite View","Geostationary_Satellite","geos"];const J5={init:X5,forward:Z5,inverse:K5,names:Q5};function t4(i){i.Proj.projections.add(Xr),i.Proj.projections.add(Zr),i.Proj.projections.add(s3),i.Proj.projections.add(g3),i.Proj.projections.add(z3),i.Proj.projections.add(C3),i.Proj.projections.add(P3),i.Proj.projections.add(N3),i.Proj.projections.add(j3),i.Proj.projections.add(H3),i.Proj.projections.add(dg),i.Proj.projections.add(mg),i.Proj.projections.add(zg),i.Proj.projections.add(Ig),i.Proj.projections.add(Pg),i.Proj.projections.add(Ng),i.Proj.projections.add(jg),i.Proj.projections.add(Hg),i.Proj.projections.add(t5),i.Proj.projections.add(n5),i.Proj.projections.add(c5),i.Proj.projections.add(f5),i.Proj.projections.add(M5),i.Proj.projections.add(w5),i.Proj.projections.add(T5),i.Proj.projections.add(N5),i.Proj.projections.add(j5),i.Proj.projections.add(H5),i.Proj.projections.add(J5)}Dt.defaultDatum="WGS84";Dt.Proj=de;Dt.WGS84=new Dt.Proj("WGS84");Dt.Point=Zi;Dt.toPoint=lc;Dt.defs=Ct;Dt.nadgrid=hf;Dt.transform=cn;Dt.mgrs=Af;Dt.version="__VERSION__";t4(Dt);var e4=function(){function i(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}return i.prototype.preventDefault=function(){this.defaultPrevented=!0},i.prototype.stopPropagation=function(){this.propagationStopped=!0},i}();const gi=e4,xc={PROPERTYCHANGE:"propertychange"};var i4=function(){function i(){this.disposed=!1}return i.prototype.dispose=function(){this.disposed||(this.disposed=!0,this.disposeInternal())},i.prototype.disposeInternal=function(){},i}();const a4=i4;function Qi(i,t){return i>t?1:i<t?-1:0}function Dn(i,t,e){var a=i.length;if(i[0]<=t)return 0;if(t<=i[a-1])return a-1;var r=void 0;if(e>0){for(r=1;r<a;++r)if(i[r]<t)return r-1}else if(e<0){for(r=1;r<a;++r)if(i[r]<=t)return r}else for(r=1;r<a;++r){if(i[r]==t)return r;if(i[r]<t)return typeof e=="function"?e(t,i[r-1],i[r])>0?r-1:r:i[r-1]-t<t-i[r]?r-1:r}return a-1}function r4(i,t,e){for(;t<e;){var a=i[t];i[t]=i[e],i[e]=a,++t,--e}}function Ac(i,t){for(var e=Array.isArray(t)?t:[t],a=e.length,r=0;r<a;r++)i[i.length]=e[r]}function na(i,t){var e=i.length;if(e!==t.length)return!1;for(var a=0;a<e;a++)if(i[a]!==t[a])return!1;return!0}function n4(i,t,e){var a=t||Qi;return i.every(function(r,n){if(n===0)return!0;var s=a(i[n-1],r);return!(s>0||e&&s===0)})}function s4(){return!0}function Wa(){}function o4(i){var t=!1,e,a,r;return function(){var n=Array.prototype.slice.call(arguments);return(!t||this!==r||!na(n,a))&&(t=!0,r=this,a=n,e=i.apply(this,arguments)),e}}var h4=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),l4=function(i){h4(t,i);function t(e){var a=i.call(this)||this;return a.eventTarget_=e,a.pendingRemovals_=null,a.dispatching_=null,a.listeners_=null,a}return t.prototype.addEventListener=function(e,a){if(!(!e||!a)){var r=this.listeners_||(this.listeners_={}),n=r[e]||(r[e]=[]);n.indexOf(a)===-1&&n.push(a)}},t.prototype.dispatchEvent=function(e){var a=typeof e=="string",r=a?e:e.type,n=this.listeners_&&this.listeners_[r];if(!!n){var s=a?new gi(e):e;s.target||(s.target=this.eventTarget_||this);var o=this.dispatching_||(this.dispatching_={}),h=this.pendingRemovals_||(this.pendingRemovals_={});r in o||(o[r]=0,h[r]=0),++o[r];for(var l,c=0,d=n.length;c<d;++c)if("handleEvent"in n[c]?l=n[c].handleEvent(s):l=n[c].call(this,s),l===!1||s.propagationStopped){l=!1;break}if(--o[r]===0){var u=h[r];for(delete h[r];u--;)this.removeEventListener(r,Wa);delete o[r]}return l}},t.prototype.disposeInternal=function(){this.listeners_&&ps(this.listeners_)},t.prototype.getListeners=function(e){return this.listeners_&&this.listeners_[e]||void 0},t.prototype.hasListener=function(e){return this.listeners_?e?e in this.listeners_:Object.keys(this.listeners_).length>0:!1},t.prototype.removeEventListener=function(e,a){var r=this.listeners_&&this.listeners_[e];if(r){var n=r.indexOf(a);n!==-1&&(this.pendingRemovals_&&e in this.pendingRemovals_?(r[n]=Wa,++this.pendingRemovals_[e]):(r.splice(n,1),r.length===0&&delete this.listeners_[e]))}},t}(a4);const vr=l4,zt={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function re(i,t,e,a,r){if(a&&a!==i&&(e=e.bind(a)),r){var n=e;e=function(){i.removeEventListener(t,e),n.apply(this,arguments)}}var s={target:i,type:t,listener:e};return i.addEventListener(t,e),s}function vn(i,t,e,a){return re(i,t,e,a,!0)}function qt(i){i&&i.target&&(i.target.removeEventListener(i.type,i.listener),ps(i))}var c4=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Nn=function(i){c4(t,i);function t(){var e=i.call(this)||this;return e.on=e.onInternal,e.once=e.onceInternal,e.un=e.unInternal,e.revision_=0,e}return t.prototype.changed=function(){++this.revision_,this.dispatchEvent(zt.CHANGE)},t.prototype.getRevision=function(){return this.revision_},t.prototype.onInternal=function(e,a){if(Array.isArray(e)){for(var r=e.length,n=new Array(r),s=0;s<r;++s)n[s]=re(this,e[s],a);return n}else return re(this,e,a)},t.prototype.onceInternal=function(e,a){var r;if(Array.isArray(e)){var n=e.length;r=new Array(n);for(var s=0;s<n;++s)r[s]=vn(this,e[s],a)}else r=vn(this,e,a);return a.ol_key=r,r},t.prototype.unInternal=function(e,a){var r=a.ol_key;if(r)d4(r);else if(Array.isArray(e))for(var n=0,s=e.length;n<s;++n)this.removeEventListener(e[n],a);else this.removeEventListener(e,a)},t}(vr);Nn.prototype.on;Nn.prototype.once;Nn.prototype.un;function d4(i){if(Array.isArray(i))for(var t=0,e=i.length;t<e;++t)qt(i[t]);else qt(i)}const wc=Nn;var Ec=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Mh=function(i){Ec(t,i);function t(e,a,r){var n=i.call(this,e)||this;return n.key=a,n.oldValue=r,n}return t}(gi),u4=function(i){Ec(t,i);function t(e){var a=i.call(this)||this;return a.on,a.once,a.un,nt(a),a.values_=null,e!==void 0&&a.setProperties(e),a}return t.prototype.get=function(e){var a;return this.values_&&this.values_.hasOwnProperty(e)&&(a=this.values_[e]),a},t.prototype.getKeys=function(){return this.values_&&Object.keys(this.values_)||[]},t.prototype.getProperties=function(){return this.values_&&ot({},this.values_)||{}},t.prototype.hasProperties=function(){return!!this.values_},t.prototype.notify=function(e,a){var r;r="change:".concat(e),this.hasListener(r)&&this.dispatchEvent(new Mh(r,e,a)),r=xc.PROPERTYCHANGE,this.hasListener(r)&&this.dispatchEvent(new Mh(r,e,a))},t.prototype.addChangeListener=function(e,a){this.addEventListener("change:".concat(e),a)},t.prototype.removeChangeListener=function(e,a){this.removeEventListener("change:".concat(e),a)},t.prototype.set=function(e,a,r){var n=this.values_||(this.values_={});if(r)n[e]=a;else{var s=n[e];n[e]=a,s!==a&&this.notify(e,s)}},t.prototype.setProperties=function(e,a){for(var r in e)this.set(r,e[r],a)},t.prototype.applyProperties=function(e){!e.values_||ot(this.values_||(this.values_={}),e.values_)},t.prototype.unset=function(e,a){if(this.values_&&e in this.values_){var r=this.values_[e];delete this.values_[e],Ba(this.values_)&&(this.values_=null),a||this.notify(e,r)}},t}(wc);const mi=u4;var v4=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),p4=function(i){v4(t,i);function t(e){var a=i.call(this)||this;if(a.on,a.once,a.un,a.id_=void 0,a.geometryName_="geometry",a.style_=null,a.styleFunction_=void 0,a.geometryChangeKey_=null,a.addChangeListener(a.geometryName_,a.handleGeometryChanged_),e)if(typeof e.getSimplifiedGeometry=="function"){var r=e;a.setGeometry(r)}else{var n=e;a.setProperties(n)}return a}return t.prototype.clone=function(){var e=new t(this.hasProperties()?this.getProperties():null);e.setGeometryName(this.getGeometryName());var a=this.getGeometry();a&&e.setGeometry(a.clone());var r=this.getStyle();return r&&e.setStyle(r),e},t.prototype.getGeometry=function(){return this.get(this.geometryName_)},t.prototype.getId=function(){return this.id_},t.prototype.getGeometryName=function(){return this.geometryName_},t.prototype.getStyle=function(){return this.style_},t.prototype.getStyleFunction=function(){return this.styleFunction_},t.prototype.handleGeometryChange_=function(){this.changed()},t.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&(qt(this.geometryChangeKey_),this.geometryChangeKey_=null);var e=this.getGeometry();e&&(this.geometryChangeKey_=re(e,zt.CHANGE,this.handleGeometryChange_,this)),this.changed()},t.prototype.setGeometry=function(e){this.set(this.geometryName_,e)},t.prototype.setStyle=function(e){this.style_=e,this.styleFunction_=e?f4(e):void 0,this.changed()},t.prototype.setId=function(e){this.id_=e,this.changed()},t.prototype.setGeometryName=function(e){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=e,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()},t}(mi);function f4(i){if(typeof i=="function")return i;var t;if(Array.isArray(i))t=i;else{J(typeof i.getZIndex=="function",41);var e=i;t=[e]}return function(){return t}}const g4=p4;var Ji=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"";Ji.indexOf("firefox");Ji.indexOf("safari")!==-1&&Ji.indexOf("chrom")==-1;Ji.indexOf("webkit")!==-1&&Ji.indexOf("edge")==-1;Ji.indexOf("macintosh");var Bn=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,m4=typeof Image<"u"&&Image.prototype.decode;(function(){var i=!1;try{var t=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("_",null,t),window.removeEventListener("_",null,t)}catch{}return i})();new Array(6);function qe(){return[1,0,0,1,0,0]}function _4(i,t,e,a,r,n,s){return i[0]=t,i[1]=e,i[2]=a,i[3]=r,i[4]=n,i[5]=s,i}function y4(i,t){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i}function mt(i,t){var e=t[0],a=t[1];return t[0]=i[0]*e+i[2]*a+i[4],t[1]=i[1]*e+i[3]*a+i[5],t}function M4(i,t,e){return _4(i,t,0,0,e,0,0)}function fe(i,t,e,a,r,n,s,o){var h=Math.sin(n),l=Math.cos(n);return i[0]=a*l,i[1]=r*h,i[2]=-a*h,i[3]=r*l,i[4]=s*a*l-o*a*h+t,i[5]=s*r*h+o*r*l+e,i}function ws(i,t){var e=b4(t);J(e!==0,32);var a=t[0],r=t[1],n=t[2],s=t[3],o=t[4],h=t[5];return i[0]=s/e,i[1]=-r/e,i[2]=-n/e,i[3]=a/e,i[4]=(n*h-s*o)/e,i[5]=-(a*h-r*o)/e,i}function b4(i){return i[0]*i[3]-i[1]*i[2]}var bh;function Es(i){var t="matrix("+i.join(", ")+")";if(Bn)return t;var e=bh||(bh=document.createElement("div"));return e.style.transform=t,e.style.transform}function ui(i,t,e,a,r,n){for(var s=n||[],o=0,h=t;h<e;h+=a){var l=i[h],c=i[h+1];s[o++]=r[0]*l+r[2]*c+r[4],s[o++]=r[1]*l+r[3]*c+r[5]}return n&&s.length!=o&&(s.length=o),s}function Cc(i,t,e,a,r,n,s){for(var o=s||[],h=Math.cos(r),l=Math.sin(r),c=n[0],d=n[1],u=0,v=t;v<e;v+=a){var p=i[v]-c,f=i[v+1]-d;o[u++]=c+p*h-f*l,o[u++]=d+p*l+f*h;for(var g=v+2;g<v+a;++g)o[u++]=i[g]}return s&&o.length!=u&&(o.length=u),o}function z4(i,t,e,a,r,n,s,o){for(var h=o||[],l=s[0],c=s[1],d=0,u=t;u<e;u+=a){var v=i[u]-l,p=i[u+1]-c;h[d++]=l+r*v,h[d++]=c+n*p;for(var f=u+2;f<u+a;++f)h[d++]=i[f]}return o&&h.length!=d&&(h.length=d),h}function x4(i,t,e,a,r,n,s){for(var o=s||[],h=0,l=t;l<e;l+=a){o[h++]=i[l]+r,o[h++]=i[l+1]+n;for(var c=l+2;c<l+a;++c)o[h++]=i[c]}return s&&o.length!=h&&(o.length=h),o}var A4=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),zh=qe(),w4=function(i){A4(t,i);function t(){var e=i.call(this)||this;return e.extent_=Xt(),e.extentRevision_=-1,e.simplifiedGeometryMaxMinSquaredTolerance=0,e.simplifiedGeometryRevision=0,e.simplifyTransformedInternal=o4(function(a,r,n){if(!n)return this.getSimplifiedGeometry(r);var s=this.clone();return s.applyTransform(n),s.getSimplifiedGeometry(r)}),e}return t.prototype.simplifyTransformed=function(e,a){return this.simplifyTransformedInternal(this.getRevision(),e,a)},t.prototype.clone=function(){return K()},t.prototype.closestPointXY=function(e,a,r,n){return K()},t.prototype.containsXY=function(e,a){var r=this.getClosestPoint([e,a]);return r[0]===e&&r[1]===a},t.prototype.getClosestPoint=function(e,a){var r=a||[NaN,NaN];return this.closestPointXY(e[0],e[1],r,1/0),r},t.prototype.intersectsCoordinate=function(e){return this.containsXY(e[0],e[1])},t.prototype.computeExtent=function(e){return K()},t.prototype.getExtent=function(e){if(this.extentRevision_!=this.getRevision()){var a=this.computeExtent(this.extent_);(isNaN(a[0])||isNaN(a[1]))&&fs(a),this.extentRevision_=this.getRevision()}return op(this.extent_,e)},t.prototype.rotate=function(e,a){K()},t.prototype.scale=function(e,a,r){K()},t.prototype.simplify=function(e){return this.getSimplifiedGeometry(e*e)},t.prototype.getSimplifiedGeometry=function(e){return K()},t.prototype.getType=function(){return K()},t.prototype.applyTransform=function(e){K()},t.prototype.intersectsExtent=function(e){return K()},t.prototype.translate=function(e,a){K()},t.prototype.transform=function(e,a){var r=gt(e),n=r.getUnits()==xe.TILE_PIXELS?function(s,o,h){var l=r.getExtent(),c=r.getWorldExtent(),d=wt(c)/wt(l);return fe(zh,c[0],c[3],d,-d,0,0,0),ui(s,0,s.length,h,zh,o),$a(r,a)(s,o,h)}:$a(r,a);return this.applyTransform(n),this},t}(mi);const E4=w4,Vt={XY:"XY",XYZ:"XYZ",XYM:"XYM",XYZM:"XYZM"};var C4=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),I4=function(i){C4(t,i);function t(){var e=i.call(this)||this;return e.layout=Vt.XY,e.stride=2,e.flatCoordinates=null,e}return t.prototype.computeExtent=function(e){return ap(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)},t.prototype.getCoordinates=function(){return K()},t.prototype.getFirstCoordinate=function(){return this.flatCoordinates.slice(0,this.stride)},t.prototype.getFlatCoordinates=function(){return this.flatCoordinates},t.prototype.getLastCoordinate=function(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)},t.prototype.getLayout=function(){return this.layout},t.prototype.getSimplifiedGeometry=function(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;var a=this.getSimplifiedGeometryInternal(e),r=a.getFlatCoordinates();return r.length<this.flatCoordinates.length?a:(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)},t.prototype.getSimplifiedGeometryInternal=function(e){return this},t.prototype.getStride=function(){return this.stride},t.prototype.setFlatCoordinates=function(e,a){this.stride=xh(e),this.layout=e,this.flatCoordinates=a},t.prototype.setCoordinates=function(e,a){K()},t.prototype.setLayout=function(e,a,r){var n;if(e)n=xh(e);else{for(var s=0;s<r;++s)if(a.length===0){this.layout=Vt.XY,this.stride=2;return}else a=a[0];n=a.length,e=S4(n)}this.layout=e,this.stride=n},t.prototype.applyTransform=function(e){this.flatCoordinates&&(e(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())},t.prototype.rotate=function(e,a){var r=this.getFlatCoordinates();if(r){var n=this.getStride();Cc(r,0,r.length,n,e,a,r),this.changed()}},t.prototype.scale=function(e,a,r){var n=a;n===void 0&&(n=e);var s=r;s||(s=Xe(this.getExtent()));var o=this.getFlatCoordinates();if(o){var h=this.getStride();z4(o,0,o.length,h,e,n,s,o),this.changed()}},t.prototype.translate=function(e,a){var r=this.getFlatCoordinates();if(r){var n=this.getStride();x4(r,0,r.length,n,e,a,r),this.changed()}},t}(E4);function S4(i){var t;return i==2?t=Vt.XY:i==3?t=Vt.XYZ:i==4&&(t=Vt.XYZM),t}function xh(i){var t;return i==Vt.XY?t=2:i==Vt.XYZ||i==Vt.XYM?t=3:i==Vt.XYZM&&(t=4),t}function T4(i,t,e){var a=i.getFlatCoordinates();if(a){var r=i.getStride();return ui(a,0,a.length,r,t,e)}else return null}const Cs=I4;function R4(i,t,e,a){for(var r=0,n=e.length;r<n;++r)i[t++]=e[r];return t}function Ic(i,t,e,a){for(var r=0,n=e.length;r<n;++r)for(var s=e[r],o=0;o<a;++o)i[t++]=s[o];return t}function O4(i,t,e,a,r){for(var n=r||[],s=0,o=0,h=e.length;o<h;++o){var l=Ic(i,t,e[o],a);n[s++]=l,t=l}return n.length=s,n}var P4=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),L4=function(i){P4(t,i);function t(e,a){var r=i.call(this)||this;return r.setCoordinates(e,a),r}return t.prototype.clone=function(){var e=new t(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e},t.prototype.closestPointXY=function(e,a,r,n){var s=this.flatCoordinates,o=ji(e,a,s[0],s[1]);if(o<n){for(var h=this.stride,l=0;l<h;++l)r[l]=s[l];return r.length=h,o}else return n},t.prototype.getCoordinates=function(){return this.flatCoordinates?this.flatCoordinates.slice():[]},t.prototype.computeExtent=function(e){return ip(this.flatCoordinates,e)},t.prototype.getType=function(){return W.POINT},t.prototype.intersectsExtent=function(e){return Wl(e,this.flatCoordinates[0],this.flatCoordinates[1])},t.prototype.setCoordinates=function(e,a){this.setLayout(a,e,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=R4(this.flatCoordinates,0,e,this.stride),this.changed()},t}(Cs);const Sc=L4,Ft={ANIMATING:0,INTERACTING:1},Qt={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"};var k4=42,Is=256;function Ah(i,t,e){return function(a,r,n,s,o){if(!!a){if(!r&&!t)return a;var h=t?0:n[0]*r,l=t?0:n[1]*r,c=o?o[0]:0,d=o?o[1]:0,u=i[0]+h/2+c,v=i[2]-h/2+c,p=i[1]+l/2+d,f=i[3]-l/2+d;u>v&&(u=(v+u)/2,v=u),p>f&&(p=(f+p)/2,f=p);var g=ft(a[0],u,v),m=ft(a[1],p,f);if(s&&e&&r){var _=30*r;g+=-_*Math.log(1+Math.max(0,u-a[0])/_)+_*Math.log(1+Math.max(0,a[0]-v)/_),m+=-_*Math.log(1+Math.max(0,p-a[1])/_)+_*Math.log(1+Math.max(0,a[1]-f)/_)}return[g,m]}}}function F4(i){return i}function Ss(i,t,e,a){var r=st(t)/e[0],n=wt(t)/e[1];return a?Math.min(i,Math.max(r,n)):Math.min(i,Math.min(r,n))}function Ts(i,t,e){var a=Math.min(i,t),r=50;return a*=Math.log(1+r*Math.max(0,i/t-1))/r+1,e&&(a=Math.max(a,e),a/=Math.log(1+r*Math.max(0,e/i-1))/r+1),ft(a,e/2,t*2)}function D4(i,t,e,a){return function(r,n,s,o){if(r!==void 0){var h=i[0],l=i[i.length-1],c=e?Ss(h,e,s,a):h;if(o){var d=t!==void 0?t:!0;return d?Ts(r,c,l):ft(r,l,c)}var u=Math.min(c,r),v=Math.floor(Dn(i,u,n));return i[v]>c&&v<i.length-1?i[v+1]:i[v]}else return}}function N4(i,t,e,a,r,n){return function(s,o,h,l){if(s!==void 0){var c=r?Ss(t,r,h,n):t,d=e!==void 0?e:0;if(l){var u=a!==void 0?a:!0;return u?Ts(s,c,d):ft(s,d,c)}var v=1e-9,p=Math.ceil(Math.log(t/c)/Math.log(i)-v),f=-o*(.5-v)+.5,g=Math.min(c,s),m=Math.floor(Math.log(t/g)/Math.log(i)+f),_=Math.max(p,m),y=t/Math.pow(i,_);return ft(y,d,c)}else return}}function wh(i,t,e,a,r){return function(n,s,o,h){if(n!==void 0){var l=a?Ss(i,a,o,r):i,c=e!==void 0?e:!0;return!c||!h?ft(n,t,l):Ts(n,l,t)}else return}}function B4(i){if(i!==void 0)return 0}function Eh(i){if(i!==void 0)return i}function G4(i){var t=2*Math.PI/i;return function(e,a){if(a)return e;if(e!==void 0)return e=Math.floor(e/t+.5)*t,e}}function $4(i){var t=i||Wr(5);return function(e,a){if(a)return e;if(e!==void 0)return Math.abs(e)<=t?0:e}}function Tc(i){return Math.pow(i,3)}function V4(i){return 1-Tc(1-i)}function j4(i){return 3*i*i-2*i*i*i}function Ch(i,t,e,a,r,n,s){var o=i[t],h=i[t+1],l=i[e]-o,c=i[e+1]-h,d;if(l===0&&c===0)d=t;else{var u=((r-o)*l+(n-h)*c)/(l*l+c*c);if(u>1)d=e;else if(u>0){for(var v=0;v<a;++v)s[v]=ai(i[t+v],i[e+v],u);s.length=a;return}else d=t}for(var v=0;v<a;++v)s[v]=i[d+v];s.length=a}function Rc(i,t,e,a,r){var n=i[t],s=i[t+1];for(t+=a;t<e;t+=a){var o=i[t],h=i[t+1],l=ji(n,s,o,h);l>r&&(r=l),n=o,s=h}return r}function U4(i,t,e,a,r){for(var n=0,s=e.length;n<s;++n){var o=e[n];r=Rc(i,t,o,a,r),t=o}return r}function Oc(i,t,e,a,r,n,s,o,h,l,c){if(t==e)return l;var d,u;if(r===0)if(u=ji(s,o,i[t],i[t+1]),u<l){for(d=0;d<a;++d)h[d]=i[t+d];return h.length=a,u}else return l;for(var v=c||[NaN,NaN],p=t+a;p<e;)if(Ch(i,p-a,p,a,s,o,v),u=ji(s,o,v[0],v[1]),u<l){for(l=u,d=0;d<a;++d)h[d]=v[d];h.length=a,p+=a}else p+=a*Math.max((Math.sqrt(u)-Math.sqrt(l))/r|0,1);if(n&&(Ch(i,e-a,t,a,s,o,v),u=ji(s,o,v[0],v[1]),u<l)){for(l=u,d=0;d<a;++d)h[d]=v[d];h.length=a}return l}function W4(i,t,e,a,r,n,s,o,h,l,c){for(var d=c||[NaN,NaN],u=0,v=e.length;u<v;++u){var p=e[u];l=Oc(i,t,p,a,r,n,s,o,h,l,d),t=p}return l}function Y4(i,t,e,a,r,n,s){var o=(e-t)/a;if(o<3){for(;t<e;t+=a)n[s++]=i[t],n[s++]=i[t+1];return s}var h=new Array(o);h[0]=1,h[o-1]=1;for(var l=[t,e-a],c=0;l.length>0;){for(var d=l.pop(),u=l.pop(),v=0,p=i[u],f=i[u+1],g=i[d],m=i[d+1],_=u+a;_<d;_+=a){var y=i[_],M=i[_+1],b=D2(y,M,p,f,g,m);b>v&&(c=_,v=b)}v>r&&(h[(c-t)/a]=1,u+a<c&&l.push(u,c),c+a<d&&l.push(c,d))}for(var _=0;_<o;++_)h[_]&&(n[s++]=i[t+_*a],n[s++]=i[t+_*a+1]);return s}function ri(i,t){return t*Math.round(i/t)}function q4(i,t,e,a,r,n,s){if(t==e)return s;var o=ri(i[t],r),h=ri(i[t+1],r);t+=a,n[s++]=o,n[s++]=h;var l,c;do if(l=ri(i[t],r),c=ri(i[t+1],r),t+=a,t==e)return n[s++]=l,n[s++]=c,s;while(l==o&&c==h);for(;t<e;){var d=ri(i[t],r),u=ri(i[t+1],r);if(t+=a,!(d==l&&u==c)){var v=l-o,p=c-h,f=d-o,g=u-h;if(v*g==p*f&&(v<0&&f<v||v==f||v>0&&f>v)&&(p<0&&g<p||p==g||p>0&&g>p)){l=d,c=u;continue}n[s++]=l,n[s++]=c,o=l,h=c,l=d,c=u}}return n[s++]=l,n[s++]=c,s}function H4(i,t,e,a,r,n,s,o){for(var h=0,l=e.length;h<l;++h){var c=e[h];s=q4(i,t,c,a,r,n,s),o.push(s),t=c}return s}function Ni(i,t,e,a,r){for(var n=r!==void 0?r:[],s=0,o=t;o<e;o+=a)n[s++]=i.slice(o,o+a);return n.length=s,n}function pn(i,t,e,a,r){for(var n=r!==void 0?r:[],s=0,o=0,h=e.length;o<h;++o){var l=e[o];n[s++]=Ni(i,t,l,a,n[s]),t=l}return n.length=s,n}function Ih(i,t,e,a,r){for(var n=r!==void 0?r:[],s=0,o=0,h=e.length;o<h;++o){var l=e[o];n[s++]=pn(i,t,l,a,n[s]),t=l[l.length-1]}return n.length=s,n}function Pc(i,t,e,a){for(var r=0,n=i[e-a],s=i[e-a+1];t<e;t+=a){var o=i[t],h=i[t+1];r+=s*o-n*h,n=o,s=h}return r/2}function X4(i,t,e,a){for(var r=0,n=0,s=e.length;n<s;++n){var o=e[n];r+=Pc(i,t,o,a),t=o}return r}var Z4=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),K4=function(i){Z4(t,i);function t(e,a){var r=i.call(this)||this;return r.maxDelta_=-1,r.maxDeltaRevision_=-1,a!==void 0&&!Array.isArray(e[0])?r.setFlatCoordinates(a,e):r.setCoordinates(e,a),r}return t.prototype.clone=function(){return new t(this.flatCoordinates.slice(),this.layout)},t.prototype.closestPointXY=function(e,a,r,n){return n<Ul(this.getExtent(),e,a)?n:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Rc(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Oc(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,e,a,r,n))},t.prototype.getArea=function(){return Pc(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},t.prototype.getCoordinates=function(){return Ni(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},t.prototype.getSimplifiedGeometryInternal=function(e){var a=[];return a.length=Y4(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,a,0),new t(a,Vt.XY)},t.prototype.getType=function(){return W.LINEAR_RING},t.prototype.intersectsExtent=function(e){return!1},t.prototype.setCoordinates=function(e,a){this.setLayout(a,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Ic(this.flatCoordinates,0,e,this.stride),this.changed()},t}(Cs);const Sh=K4;function Q4(i,t,e,a,r){var n=ql(r,function(s){return!si(i,t,e,a,s[0],s[1])});return!n}function si(i,t,e,a,r,n){for(var s=0,o=i[e-a],h=i[e-a+1];t<e;t+=a){var l=i[t],c=i[t+1];h<=n?c>n&&(l-o)*(n-h)-(r-o)*(c-h)>0&&s++:c<=n&&(l-o)*(n-h)-(r-o)*(c-h)<0&&s--,o=l,h=c}return s!==0}function Lc(i,t,e,a,r,n){if(e.length===0||!si(i,t,e[0],a,r,n))return!1;for(var s=1,o=e.length;s<o;++s)if(si(i,e[s-1],e[s],a,r,n))return!1;return!0}function J4(i,t,e,a,r,n,s){for(var o,h,l,c,d,u,v,p=r[n+1],f=[],g=0,m=e.length;g<m;++g){var _=e[g];for(c=i[_-a],u=i[_-a+1],o=t;o<_;o+=a)d=i[o],v=i[o+1],(p<=u&&v<=p||u<=p&&p<=v)&&(l=(p-u)/(v-u)*(d-c)+c,f.push(l)),c=d,u=v}var y=NaN,M=-1/0;for(f.sort(Qi),c=f[0],o=1,h=f.length;o<h;++o){d=f[o];var b=Math.abs(d-c);b>M&&(l=(c+d)/2,Lc(i,t,e,a,l,p)&&(y=l,M=b)),c=d}return isNaN(y)&&(y=r[n]),s?(s.push(y,p,M),s):[y,p,M]}function tm(i,t,e,a,r){var n;for(t+=a;t<e;t+=a)if(n=r(i.slice(t-a,t),i.slice(t,t+a)),n)return n;return!1}function kc(i,t,e,a,r){var n=Yl(Xt(),i,t,e,a);return It(r,n)?$e(r,n)||n[0]>=r[0]&&n[2]<=r[2]||n[1]>=r[1]&&n[3]<=r[3]?!0:tm(i,t,e,a,function(s,o){return hp(r,s,o)}):!1}function em(i,t,e,a,r){return!!(kc(i,t,e,a,r)||si(i,t,e,a,r[0],r[1])||si(i,t,e,a,r[0],r[3])||si(i,t,e,a,r[2],r[1])||si(i,t,e,a,r[2],r[3]))}function im(i,t,e,a,r){if(!em(i,t,e[0],a,r))return!1;if(e.length===1)return!0;for(var n=1,s=e.length;n<s;++n)if(Q4(i,e[n-1],e[n],a,r)&&!kc(i,e[n-1],e[n],a,r))return!1;return!0}function am(i,t,e,a){for(;t<e-a;){for(var r=0;r<a;++r){var n=i[t+r];i[t+r]=i[e-a+r],i[e-a+r]=n}t+=a,e-=a}}function Fc(i,t,e,a){for(var r=0,n=i[e-a],s=i[e-a+1];t<e;t+=a){var o=i[t],h=i[t+1];r+=(o-n)*(h+s),n=o,s=h}return r===0?void 0:r>0}function rm(i,t,e,a,r){for(var n=r!==void 0?r:!1,s=0,o=e.length;s<o;++s){var h=e[s],l=Fc(i,t,h,a);if(s===0){if(n&&l||!n&&!l)return!1}else if(n&&!l||!n&&l)return!1;t=h}return!0}function Th(i,t,e,a,r){for(var n=r!==void 0?r:!1,s=0,o=e.length;s<o;++s){var h=e[s],l=Fc(i,t,h,a),c=s===0?n&&l||!n&&!l:n&&!l||!n&&l;c&&am(i,t,h,a),t=h}return t}var nm=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),sm=function(i){nm(t,i);function t(e,a,r){var n=i.call(this)||this;return n.ends_=[],n.flatInteriorPointRevision_=-1,n.flatInteriorPoint_=null,n.maxDelta_=-1,n.maxDeltaRevision_=-1,n.orientedRevision_=-1,n.orientedFlatCoordinates_=null,a!==void 0&&r?(n.setFlatCoordinates(a,e),n.ends_=r):n.setCoordinates(e,a),n}return t.prototype.appendLinearRing=function(e){this.flatCoordinates?Ac(this.flatCoordinates,e.getFlatCoordinates()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()},t.prototype.clone=function(){var e=new t(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e},t.prototype.closestPointXY=function(e,a,r,n){return n<Ul(this.getExtent(),e,a)?n:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(U4(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),W4(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,e,a,r,n))},t.prototype.containsXY=function(e,a){return Lc(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,a)},t.prototype.getArea=function(){return X4(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)},t.prototype.getCoordinates=function(e){var a;return e!==void 0?(a=this.getOrientedFlatCoordinates().slice(),Th(a,0,this.ends_,this.stride,e)):a=this.flatCoordinates,pn(a,0,this.ends_,this.stride)},t.prototype.getEnds=function(){return this.ends_},t.prototype.getFlatInteriorPoint=function(){if(this.flatInteriorPointRevision_!=this.getRevision()){var e=Xe(this.getExtent());this.flatInteriorPoint_=J4(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_},t.prototype.getInteriorPoint=function(){return new Sc(this.getFlatInteriorPoint(),Vt.XYM)},t.prototype.getLinearRingCount=function(){return this.ends_.length},t.prototype.getLinearRing=function(e){return e<0||this.ends_.length<=e?null:new Sh(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)},t.prototype.getLinearRings=function(){for(var e=this.layout,a=this.flatCoordinates,r=this.ends_,n=[],s=0,o=0,h=r.length;o<h;++o){var l=r[o],c=new Sh(a.slice(s,l),e);n.push(c),s=l}return n},t.prototype.getOrientedFlatCoordinates=function(){if(this.orientedRevision_!=this.getRevision()){var e=this.flatCoordinates;rm(e,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=Th(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_},t.prototype.getSimplifiedGeometryInternal=function(e){var a=[],r=[];return a.length=H4(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(e),a,0,r),new t(a,Vt.XY,r)},t.prototype.getType=function(){return W.POLYGON},t.prototype.intersectsExtent=function(e){return im(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e)},t.prototype.setCoordinates=function(e,a){this.setLayout(a,e,2),this.flatCoordinates||(this.flatCoordinates=[]);var r=O4(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=r.length===0?0:r[r.length-1],this.changed()},t}(Cs);function Rh(i){var t=i[0],e=i[1],a=i[2],r=i[3],n=[t,e,t,r,a,r,a,e,t,e];return new sm(n,Vt.XY,[n.length])}var om=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),a0=0,hm=function(i){om(t,i);function t(e){var a=i.call(this)||this;a.on,a.once,a.un;var r=ot({},e);return a.hints_=[0,0],a.animations_=[],a.updateAnimationKey_,a.projection_=_s(r.projection,"EPSG:3857"),a.viewportSize_=[100,100],a.targetCenter_=null,a.targetResolution_,a.targetRotation_,a.nextCenter_=null,a.nextResolution_,a.nextRotation_,a.cancelAnchor_=void 0,r.center&&(r.center=Te(r.center,a.projection_)),r.extent&&(r.extent=be(r.extent,a.projection_)),r.projection&&fp(),a.applyOptions_(r),a}return t.prototype.applyOptions_=function(e){var a=ot({},e);for(var r in Qt)delete a[r];this.setProperties(a,!0);var n=cm(e);this.maxResolution_=n.maxResolution,this.minResolution_=n.minResolution,this.zoomFactor_=n.zoomFactor,this.resolutions_=e.resolutions,this.padding_=e.padding,this.minZoom_=n.minZoom;var s=lm(e),o=n.constraint,h=dm(e);this.constraints_={center:s,resolution:o,rotation:h},this.setRotation(e.rotation!==void 0?e.rotation:0),this.setCenterInternal(e.center!==void 0?e.center:null),e.resolution!==void 0?this.setResolution(e.resolution):e.zoom!==void 0&&this.setZoom(e.zoom)},Object.defineProperty(t.prototype,"padding",{get:function(){return this.padding_},set:function(e){var a=this.padding_;this.padding_=e;var r=this.getCenter();if(r){var n=e||[0,0,0,0];a=a||[0,0,0,0];var s=this.getResolution(),o=s/2*(n[3]-a[3]+a[1]-n[1]),h=s/2*(n[0]-a[0]+a[2]-n[2]);this.setCenterInternal([r[0]+o,r[1]-h])}},enumerable:!1,configurable:!0}),t.prototype.getUpdatedOptions_=function(e){var a=this.getProperties();return a.resolution!==void 0?a.resolution=this.getResolution():a.zoom=this.getZoom(),a.center=this.getCenterInternal(),a.rotation=this.getRotation(),ot({},a,e)},t.prototype.animate=function(e){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);for(var a=new Array(arguments.length),r=0;r<a.length;++r){var n=arguments[r];n.center&&(n=ot({},n),n.center=Te(n.center,this.getProjection())),n.anchor&&(n=ot({},n),n.anchor=Te(n.anchor,this.getProjection())),a[r]=n}this.animateInternal.apply(this,a)},t.prototype.animateInternal=function(e){var a=arguments.length,r;a>1&&typeof arguments[a-1]=="function"&&(r=arguments[a-1],--a);for(var n=0;n<a&&!this.isDef();++n){var s=arguments[n];s.center&&this.setCenterInternal(s.center),s.zoom!==void 0?this.setZoom(s.zoom):s.resolution&&this.setResolution(s.resolution),s.rotation!==void 0&&this.setRotation(s.rotation)}if(n===a){r&&Lr(r,!0);return}for(var o=Date.now(),h=this.targetCenter_.slice(),l=this.targetResolution_,c=this.targetRotation_,d=[];n<a;++n){var u=arguments[n],v={start:o,complete:!1,anchor:u.anchor,duration:u.duration!==void 0?u.duration:1e3,easing:u.easing||j4,callback:r};if(u.center&&(v.sourceCenter=h,v.targetCenter=u.center.slice(),h=v.targetCenter),u.zoom!==void 0?(v.sourceResolution=l,v.targetResolution=this.getResolutionForZoom(u.zoom),l=v.targetResolution):u.resolution&&(v.sourceResolution=l,v.targetResolution=u.resolution,l=v.targetResolution),u.rotation!==void 0){v.sourceRotation=c;var p=di(u.rotation-c+Math.PI,2*Math.PI)-Math.PI;v.targetRotation=c+p,c=v.targetRotation}um(v)?v.complete=!0:o+=v.duration,d.push(v)}this.animations_.push(d),this.setHint(Ft.ANIMATING,1),this.updateAnimations_()},t.prototype.getAnimating=function(){return this.hints_[Ft.ANIMATING]>0},t.prototype.getInteracting=function(){return this.hints_[Ft.INTERACTING]>0},t.prototype.cancelAnimations=function(){this.setHint(Ft.ANIMATING,-this.hints_[Ft.ANIMATING]);for(var e,a=0,r=this.animations_.length;a<r;++a){var n=this.animations_[a];if(n[0].callback&&Lr(n[0].callback,!1),!e)for(var s=0,o=n.length;s<o;++s){var h=n[s];if(!h.complete){e=h.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=e,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN},t.prototype.updateAnimations_=function(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!!this.getAnimating()){for(var e=Date.now(),a=!1,r=this.animations_.length-1;r>=0;--r){for(var n=this.animations_[r],s=!0,o=0,h=n.length;o<h;++o){var l=n[o];if(!l.complete){var c=e-l.start,d=l.duration>0?c/l.duration:1;d>=1?(l.complete=!0,d=1):s=!1;var u=l.easing(d);if(l.sourceCenter){var v=l.sourceCenter[0],p=l.sourceCenter[1],f=l.targetCenter[0],g=l.targetCenter[1];this.nextCenter_=l.targetCenter;var m=v+u*(f-v),_=p+u*(g-p);this.targetCenter_=[m,_]}if(l.sourceResolution&&l.targetResolution){var y=u===1?l.targetResolution:l.sourceResolution+u*(l.targetResolution-l.sourceResolution);if(l.anchor){var M=this.getViewportSize_(this.getRotation()),b=this.constraints_.resolution(y,0,M,!0);this.targetCenter_=this.calculateCenterZoom(b,l.anchor)}this.nextResolution_=l.targetResolution,this.targetResolution_=y,this.applyTargetState_(!0)}if(l.sourceRotation!==void 0&&l.targetRotation!==void 0){var z=u===1?di(l.targetRotation+Math.PI,2*Math.PI)-Math.PI:l.sourceRotation+u*(l.targetRotation-l.sourceRotation);if(l.anchor){var A=this.constraints_.rotation(z,!0);this.targetCenter_=this.calculateCenterRotate(A,l.anchor)}this.nextRotation_=l.targetRotation,this.targetRotation_=z}if(this.applyTargetState_(!0),a=!0,!l.complete)break}}if(s){this.animations_[r]=null,this.setHint(Ft.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;var x=n[0].callback;x&&Lr(x,!0)}}this.animations_=this.animations_.filter(Boolean),a&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}},t.prototype.calculateCenterRotate=function(e,a){var r,n=this.getCenterInternal();return n!==void 0&&(r=[n[0]-a[0],n[1]-a[1]],up(r,e-this.getRotation()),dp(r,a)),r},t.prototype.calculateCenterZoom=function(e,a){var r,n=this.getCenterInternal(),s=this.getResolution();if(n!==void 0&&s!==void 0){var o=a[0]-e*(a[0]-n[0])/s,h=a[1]-e*(a[1]-n[1])/s;r=[o,h]}return r},t.prototype.getViewportSize_=function(e){var a=this.viewportSize_;if(e){var r=a[0],n=a[1];return[Math.abs(r*Math.cos(e))+Math.abs(n*Math.sin(e)),Math.abs(r*Math.sin(e))+Math.abs(n*Math.cos(e))]}else return a},t.prototype.setViewportSize=function(e){this.viewportSize_=Array.isArray(e)?e.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)},t.prototype.getCenter=function(){var e=this.getCenterInternal();return e&&th(e,this.getProjection())},t.prototype.getCenterInternal=function(){return this.get(Qt.CENTER)},t.prototype.getConstraints=function(){return this.constraints_},t.prototype.getConstrainResolution=function(){return this.get("constrainResolution")},t.prototype.getHints=function(e){return e!==void 0?(e[0]=this.hints_[0],e[1]=this.hints_[1],e):this.hints_.slice()},t.prototype.calculateExtent=function(e){var a=this.calculateExtentInternal(e);return F0(a,this.getProjection())},t.prototype.calculateExtentInternal=function(e){var a=e||this.getViewportSizeMinusPadding_(),r=this.getCenterInternal();J(r,1);var n=this.getResolution();J(n!==void 0,2);var s=this.getRotation();return J(s!==void 0,3),Yr(r,n,s,a)},t.prototype.getMaxResolution=function(){return this.maxResolution_},t.prototype.getMinResolution=function(){return this.minResolution_},t.prototype.getMaxZoom=function(){return this.getZoomForResolution(this.minResolution_)},t.prototype.setMaxZoom=function(e){this.applyOptions_(this.getUpdatedOptions_({maxZoom:e}))},t.prototype.getMinZoom=function(){return this.getZoomForResolution(this.maxResolution_)},t.prototype.setMinZoom=function(e){this.applyOptions_(this.getUpdatedOptions_({minZoom:e}))},t.prototype.setConstrainResolution=function(e){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:e}))},t.prototype.getProjection=function(){return this.projection_},t.prototype.getResolution=function(){return this.get(Qt.RESOLUTION)},t.prototype.getResolutions=function(){return this.resolutions_},t.prototype.getResolutionForExtent=function(e,a){return this.getResolutionForExtentInternal(be(e,this.getProjection()),a)},t.prototype.getResolutionForExtentInternal=function(e,a){var r=a||this.getViewportSizeMinusPadding_(),n=st(e)/r[0],s=wt(e)/r[1];return Math.max(n,s)},t.prototype.getResolutionForValueFunction=function(e){var a=e||2,r=this.getConstrainedResolution(this.maxResolution_),n=this.minResolution_,s=Math.log(r/n)/Math.log(a);return function(o){var h=r/Math.pow(a,o*s);return h}},t.prototype.getRotation=function(){return this.get(Qt.ROTATION)},t.prototype.getValueForResolutionFunction=function(e){var a=Math.log(e||2),r=this.getConstrainedResolution(this.maxResolution_),n=this.minResolution_,s=Math.log(r/n)/a;return function(o){var h=Math.log(r/o)/a/s;return h}},t.prototype.getViewportSizeMinusPadding_=function(e){var a=this.getViewportSize_(e),r=this.padding_;return r&&(a=[a[0]-r[1]-r[3],a[1]-r[0]-r[2]]),a},t.prototype.getState=function(){var e=this.getProjection(),a=this.getResolution(),r=this.getRotation(),n=this.getCenterInternal(),s=this.padding_;if(s){var o=this.getViewportSizeMinusPadding_();n=r0(n,this.getViewportSize_(),[o[0]/2+s[3],o[1]/2+s[0]],a,r)}return{center:n.slice(0),projection:e!==void 0?e:null,resolution:a,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:r,zoom:this.getZoom()}},t.prototype.getZoom=function(){var e,a=this.getResolution();return a!==void 0&&(e=this.getZoomForResolution(a)),e},t.prototype.getZoomForResolution=function(e){var a=this.minZoom_||0,r,n;if(this.resolutions_){var s=Dn(this.resolutions_,e,1);a=s,r=this.resolutions_[s],s==this.resolutions_.length-1?n=2:n=r/this.resolutions_[s+1]}else r=this.maxResolution_,n=this.zoomFactor_;return a+Math.log(r/e)/Math.log(n)},t.prototype.getResolutionForZoom=function(e){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;var a=ft(Math.floor(e),0,this.resolutions_.length-2),r=this.resolutions_[a]/this.resolutions_[a+1];return this.resolutions_[a]/Math.pow(r,ft(e-a,0,1))}else return this.maxResolution_/Math.pow(this.zoomFactor_,e-this.minZoom_)},t.prototype.fit=function(e,a){var r;if(J(Array.isArray(e)||typeof e.getSimplifiedGeometry=="function",24),Array.isArray(e)){J(!gs(e),25);var n=be(e,this.getProjection());r=Rh(n)}else if(e.getType()===W.CIRCLE){var n=be(e.getExtent(),this.getProjection());r=Rh(n),r.rotate(this.getRotation(),Xe(n))}else{var s=Jl();s?r=e.clone().transform(s,this.getProjection()):r=e}this.fitInternal(r,a)},t.prototype.rotatedExtentForGeometry=function(e){for(var a=this.getRotation(),r=Math.cos(a),n=Math.sin(-a),s=e.getFlatCoordinates(),o=e.getStride(),h=1/0,l=1/0,c=-1/0,d=-1/0,u=0,v=s.length;u<v;u+=o){var p=s[u]*r-s[u+1]*n,f=s[u]*n+s[u+1]*r;h=Math.min(h,p),l=Math.min(l,f),c=Math.max(c,p),d=Math.max(d,f)}return[h,l,c,d]},t.prototype.fitInternal=function(e,a){var r=a||{},n=r.size;n||(n=this.getViewportSizeMinusPadding_());var s=r.padding!==void 0?r.padding:[0,0,0,0],o=r.nearest!==void 0?r.nearest:!1,h;r.minResolution!==void 0?h=r.minResolution:r.maxZoom!==void 0?h=this.getResolutionForZoom(r.maxZoom):h=0;var l=this.rotatedExtentForGeometry(e),c=this.getResolutionForExtentInternal(l,[n[0]-s[1]-s[3],n[1]-s[0]-s[2]]);c=isNaN(c)?h:Math.max(c,h),c=this.getConstrainedResolution(c,o?0:1);var d=this.getRotation(),u=Math.sin(d),v=Math.cos(d),p=Xe(l);p[0]+=(s[1]-s[3])/2*c,p[1]+=(s[0]-s[2])/2*c;var f=p[0]*v-p[1]*u,g=p[1]*v+p[0]*u,m=this.getConstrainedCenter([f,g],c),_=r.callback?r.callback:Wa;r.duration!==void 0?this.animateInternal({resolution:c,center:m,duration:r.duration,easing:r.easing},_):(this.targetResolution_=c,this.targetCenter_=m,this.applyTargetState_(!1,!0),Lr(_,!0))},t.prototype.centerOn=function(e,a,r){this.centerOnInternal(Te(e,this.getProjection()),a,r)},t.prototype.centerOnInternal=function(e,a,r){this.setCenterInternal(r0(e,a,r,this.getResolution(),this.getRotation()))},t.prototype.calculateCenterShift=function(e,a,r,n){var s,o=this.padding_;if(o&&e){var h=this.getViewportSizeMinusPadding_(-r),l=r0(e,n,[h[0]/2+o[3],h[1]/2+o[0]],a,r);s=[e[0]-l[0],e[1]-l[1]]}return s},t.prototype.isDef=function(){return!!this.getCenterInternal()&&this.getResolution()!==void 0},t.prototype.adjustCenter=function(e){var a=th(this.targetCenter_,this.getProjection());this.setCenter([a[0]+e[0],a[1]+e[1]])},t.prototype.adjustCenterInternal=function(e){var a=this.targetCenter_;this.setCenterInternal([a[0]+e[0],a[1]+e[1]])},t.prototype.adjustResolution=function(e,a){var r=a&&Te(a,this.getProjection());this.adjustResolutionInternal(e,r)},t.prototype.adjustResolutionInternal=function(e,a){var r=this.getAnimating()||this.getInteracting(),n=this.getViewportSize_(this.getRotation()),s=this.constraints_.resolution(this.targetResolution_*e,0,n,r);a&&(this.targetCenter_=this.calculateCenterZoom(s,a)),this.targetResolution_*=e,this.applyTargetState_()},t.prototype.adjustZoom=function(e,a){this.adjustResolution(Math.pow(this.zoomFactor_,-e),a)},t.prototype.adjustRotation=function(e,a){a&&(a=Te(a,this.getProjection())),this.adjustRotationInternal(e,a)},t.prototype.adjustRotationInternal=function(e,a){var r=this.getAnimating()||this.getInteracting(),n=this.constraints_.rotation(this.targetRotation_+e,r);a&&(this.targetCenter_=this.calculateCenterRotate(n,a)),this.targetRotation_+=e,this.applyTargetState_()},t.prototype.setCenter=function(e){this.setCenterInternal(e&&Te(e,this.getProjection()))},t.prototype.setCenterInternal=function(e){this.targetCenter_=e,this.applyTargetState_()},t.prototype.setHint=function(e,a){return this.hints_[e]+=a,this.changed(),this.hints_[e]},t.prototype.setResolution=function(e){this.targetResolution_=e,this.applyTargetState_()},t.prototype.setRotation=function(e){this.targetRotation_=e,this.applyTargetState_()},t.prototype.setZoom=function(e){this.setResolution(this.getResolutionForZoom(e))},t.prototype.applyTargetState_=function(e,a){var r=this.getAnimating()||this.getInteracting()||a,n=this.constraints_.rotation(this.targetRotation_,r),s=this.getViewportSize_(n),o=this.constraints_.resolution(this.targetResolution_,0,s,r),h=this.constraints_.center(this.targetCenter_,o,s,r,this.calculateCenterShift(this.targetCenter_,o,n,s));this.get(Qt.ROTATION)!==n&&this.set(Qt.ROTATION,n),this.get(Qt.RESOLUTION)!==o&&(this.set(Qt.RESOLUTION,o),this.set("zoom",this.getZoom(),!0)),(!h||!this.get(Qt.CENTER)||!on(this.get(Qt.CENTER),h))&&this.set(Qt.CENTER,h),this.getAnimating()&&!e&&this.cancelAnimations(),this.cancelAnchor_=void 0},t.prototype.resolveConstraints=function(e,a,r){var n=e!==void 0?e:200,s=a||0,o=this.constraints_.rotation(this.targetRotation_),h=this.getViewportSize_(o),l=this.constraints_.resolution(this.targetResolution_,s,h),c=this.constraints_.center(this.targetCenter_,l,h,!1,this.calculateCenterShift(this.targetCenter_,l,o,h));if(n===0&&!this.cancelAnchor_){this.targetResolution_=l,this.targetRotation_=o,this.targetCenter_=c,this.applyTargetState_();return}var d=r||(n===0?this.cancelAnchor_:void 0);this.cancelAnchor_=void 0,(this.getResolution()!==l||this.getRotation()!==o||!this.getCenterInternal()||!on(this.getCenterInternal(),c))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:o,center:c,resolution:l,duration:n,easing:V4,anchor:d}))},t.prototype.beginInteraction=function(){this.resolveConstraints(0),this.setHint(Ft.INTERACTING,1)},t.prototype.endInteraction=function(e,a,r){var n=r&&Te(r,this.getProjection());this.endInteractionInternal(e,a,n)},t.prototype.endInteractionInternal=function(e,a,r){this.setHint(Ft.INTERACTING,-1),this.resolveConstraints(e,a,r)},t.prototype.getConstrainedCenter=function(e,a){var r=this.getViewportSize_(this.getRotation());return this.constraints_.center(e,a||this.getResolution(),r)},t.prototype.getConstrainedZoom=function(e,a){var r=this.getResolutionForZoom(e);return this.getZoomForResolution(this.getConstrainedResolution(r,a))},t.prototype.getConstrainedResolution=function(e,a){var r=a||0,n=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(e,r,n)},t}(mi);function Lr(i,t){setTimeout(function(){i(t)},0)}function lm(i){if(i.extent!==void 0){var t=i.smoothExtentConstraint!==void 0?i.smoothExtentConstraint:!0;return Ah(i.extent,i.constrainOnlyCenter,t)}var e=_s(i.projection,"EPSG:3857");if(i.multiWorld!==!0&&e.isGlobal()){var a=e.getExtent().slice();return a[0]=-1/0,a[2]=1/0,Ah(a,!1,!1)}return F4}function cm(i){var t,e,a,r=28,n=2,s=i.minZoom!==void 0?i.minZoom:a0,o=i.maxZoom!==void 0?i.maxZoom:r,h=i.zoomFactor!==void 0?i.zoomFactor:n,l=i.multiWorld!==void 0?i.multiWorld:!1,c=i.smoothResolutionConstraint!==void 0?i.smoothResolutionConstraint:!0,d=i.showFullExtent!==void 0?i.showFullExtent:!1,u=_s(i.projection,"EPSG:3857"),v=u.getExtent(),p=i.constrainOnlyCenter,f=i.extent;if(!l&&!f&&u.isGlobal()&&(p=!1,f=v),i.resolutions!==void 0){var g=i.resolutions;e=g[s],a=g[o]!==void 0?g[o]:g[g.length-1],i.constrainResolution?t=D4(g,c,!p&&f,d):t=wh(e,a,c,!p&&f,d)}else{var m=v?Math.max(st(v),wt(v)):360*Ht[xe.DEGREES]/u.getMetersPerUnit(),_=m/Is/Math.pow(n,a0),y=_/Math.pow(n,r-a0);e=i.maxResolution,e!==void 0?s=0:e=_/Math.pow(h,s),a=i.minResolution,a===void 0&&(i.maxZoom!==void 0?i.maxResolution!==void 0?a=e/Math.pow(h,o):a=_/Math.pow(h,o):a=y),o=s+Math.floor(Math.log(e/a)/Math.log(h)),a=e/Math.pow(h,o-s),i.constrainResolution?t=N4(h,e,a,c,!p&&f,d):t=wh(e,a,c,!p&&f,d)}return{constraint:t,maxResolution:e,minResolution:a,minZoom:s,zoomFactor:h}}function dm(i){var t=i.enableRotation!==void 0?i.enableRotation:!0;if(t){var e=i.constrainRotation;return e===void 0||e===!0?$4():e===!1?Eh:typeof e=="number"?G4(e):Eh}else return B4}function um(i){return!(i.sourceCenter&&i.targetCenter&&!on(i.sourceCenter,i.targetCenter)||i.sourceResolution!==i.targetResolution||i.sourceRotation!==i.targetRotation)}function r0(i,t,e,a,r){var n=Math.cos(-r),s=Math.sin(-r),o=i[0]*n-i[1]*s,h=i[1]*n+i[0]*s;o+=(t[0]/2-e[0])*a,h+=(e[1]-t[1]/2)*a,s=-s;var l=o*n-h*s,c=h*n+o*s;return[l,c]}const vm=hm,it={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"};var pm=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),fm=function(i){pm(t,i);function t(e){var a=i.call(this)||this;a.on,a.once,a.un,a.background_=e.background;var r=ot({},e);return typeof e.properties=="object"&&(delete r.properties,ot(r,e.properties)),r[it.OPACITY]=e.opacity!==void 0?e.opacity:1,J(typeof r[it.OPACITY]=="number",64),r[it.VISIBLE]=e.visible!==void 0?e.visible:!0,r[it.Z_INDEX]=e.zIndex,r[it.MAX_RESOLUTION]=e.maxResolution!==void 0?e.maxResolution:1/0,r[it.MIN_RESOLUTION]=e.minResolution!==void 0?e.minResolution:0,r[it.MIN_ZOOM]=e.minZoom!==void 0?e.minZoom:-1/0,r[it.MAX_ZOOM]=e.maxZoom!==void 0?e.maxZoom:1/0,a.className_=r.className!==void 0?r.className:"ol-layer",delete r.className,a.setProperties(r),a.state_=null,a}return t.prototype.getBackground=function(){return this.background_},t.prototype.getClassName=function(){return this.className_},t.prototype.getLayerState=function(e){var a=this.state_||{layer:this,managed:e===void 0?!0:e},r=this.getZIndex();return a.opacity=ft(Math.round(this.getOpacity()*100)/100,0,1),a.visible=this.getVisible(),a.extent=this.getExtent(),a.zIndex=r===void 0&&!a.managed?1/0:r,a.maxResolution=this.getMaxResolution(),a.minResolution=Math.max(this.getMinResolution(),0),a.minZoom=this.getMinZoom(),a.maxZoom=this.getMaxZoom(),this.state_=a,a},t.prototype.getLayersArray=function(e){return K()},t.prototype.getLayerStatesArray=function(e){return K()},t.prototype.getExtent=function(){return this.get(it.EXTENT)},t.prototype.getMaxResolution=function(){return this.get(it.MAX_RESOLUTION)},t.prototype.getMinResolution=function(){return this.get(it.MIN_RESOLUTION)},t.prototype.getMinZoom=function(){return this.get(it.MIN_ZOOM)},t.prototype.getMaxZoom=function(){return this.get(it.MAX_ZOOM)},t.prototype.getOpacity=function(){return this.get(it.OPACITY)},t.prototype.getSourceState=function(){return K()},t.prototype.getVisible=function(){return this.get(it.VISIBLE)},t.prototype.getZIndex=function(){return this.get(it.Z_INDEX)},t.prototype.setBackground=function(e){this.background_=e,this.changed()},t.prototype.setExtent=function(e){this.set(it.EXTENT,e)},t.prototype.setMaxResolution=function(e){this.set(it.MAX_RESOLUTION,e)},t.prototype.setMinResolution=function(e){this.set(it.MIN_RESOLUTION,e)},t.prototype.setMaxZoom=function(e){this.set(it.MAX_ZOOM,e)},t.prototype.setMinZoom=function(e){this.set(it.MIN_ZOOM,e)},t.prototype.setOpacity=function(e){J(typeof e=="number",64),this.set(it.OPACITY,e)},t.prototype.setVisible=function(e){this.set(it.VISIBLE,e)},t.prototype.setZIndex=function(e){this.set(it.Z_INDEX,e)},t.prototype.disposeInternal=function(){this.state_&&(this.state_.layer=null,this.state_=null),i.prototype.disposeInternal.call(this)},t}(mi);const gm=fm,$0={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"},Gn={UNDEFINED:"undefined",LOADING:"loading",READY:"ready",ERROR:"error"};var mm=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),_m=function(i){mm(t,i);function t(e){var a=this,r=ot({},e);delete r.source,a=i.call(this,r)||this,a.on,a.once,a.un,a.mapPrecomposeKey_=null,a.mapRenderKey_=null,a.sourceChangeKey_=null,a.renderer_=null,a.rendered=!1,e.render&&(a.render=e.render),e.map&&a.setMap(e.map),a.addChangeListener(it.SOURCE,a.handleSourcePropertyChange_);var n=e.source?e.source:null;return a.setSource(n),a}return t.prototype.getLayersArray=function(e){var a=e||[];return a.push(this),a},t.prototype.getLayerStatesArray=function(e){var a=e||[];return a.push(this.getLayerState()),a},t.prototype.getSource=function(){return this.get(it.SOURCE)||null},t.prototype.getRenderSource=function(){return this.getSource()},t.prototype.getSourceState=function(){var e=this.getSource();return e?e.getState():Gn.UNDEFINED},t.prototype.handleSourceChange_=function(){this.changed()},t.prototype.handleSourcePropertyChange_=function(){this.sourceChangeKey_&&(qt(this.sourceChangeKey_),this.sourceChangeKey_=null);var e=this.getSource();e&&(this.sourceChangeKey_=re(e,zt.CHANGE,this.handleSourceChange_,this)),this.changed()},t.prototype.getFeatures=function(e){return this.renderer_?this.renderer_.getFeatures(e):new Promise(function(a){return a([])})},t.prototype.getData=function(e){return!this.renderer_||!this.rendered?null:this.renderer_.getData(e)},t.prototype.render=function(e,a){var r=this.getRenderer();if(r.prepareFrame(e))return this.rendered=!0,r.renderFrame(e,a)},t.prototype.unrender=function(){this.rendered=!1},t.prototype.setMapInternal=function(e){e||this.unrender(),this.set(it.MAP,e)},t.prototype.getMapInternal=function(){return this.get(it.MAP)},t.prototype.setMap=function(e){this.mapPrecomposeKey_&&(qt(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),e||this.changed(),this.mapRenderKey_&&(qt(this.mapRenderKey_),this.mapRenderKey_=null),e&&(this.mapPrecomposeKey_=re(e,$0.PRECOMPOSE,function(a){var r=a,n=r.frameState.layerStatesArray,s=this.getLayerState(!1);J(!n.some(function(o){return o.layer===s.layer}),67),n.push(s)},this),this.mapRenderKey_=re(this,zt.CHANGE,e.render,e),this.changed())},t.prototype.setSource=function(e){this.set(it.SOURCE,e)},t.prototype.getRenderer=function(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_},t.prototype.hasRenderer=function(){return!!this.renderer_},t.prototype.createRenderer=function(){return null},t.prototype.disposeInternal=function(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_),this.setSource(null),i.prototype.disposeInternal.call(this)},t}(gm);const Rs=_m;var ym=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Mm=function(i){ym(t,i);function t(e){var a=e||{};return i.call(this,a)||this}return t}(Rs);const bm=Mm,q={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};var zm=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),xm=function(i){zm(t,i);function t(e){var a=i.call(this)||this;return a.ready=!0,a.boundHandleImageChange_=a.handleImageChange_.bind(a),a.layer_=e,a.declutterExecutorGroup=null,a}return t.prototype.getFeatures=function(e){return K()},t.prototype.getData=function(e){return null},t.prototype.prepareFrame=function(e){return K()},t.prototype.renderFrame=function(e,a){return K()},t.prototype.loadedTileCallback=function(e,a,r){e[a]||(e[a]={}),e[a][r.tileCoord.toString()]=r},t.prototype.createLoadedTileFinder=function(e,a,r){return function(n,s){var o=this.loadedTileCallback.bind(this,r,n);return e.forEachLoadedTile(a,n,s,o)}.bind(this)},t.prototype.forEachFeatureAtCoordinate=function(e,a,r,n,s){},t.prototype.getDataAtPixel=function(e,a,r){return null},t.prototype.getLayer=function(){return this.layer_},t.prototype.handleFontsChanged=function(){},t.prototype.handleImageChange_=function(e){var a=e.target;a.getState()===q.LOADED&&this.renderIfReadyAndVisible()},t.prototype.loadImage=function(e){var a=e.getState();return a!=q.LOADED&&a!=q.ERROR&&e.addEventListener(zt.CHANGE,this.boundHandleImageChange_),a==q.IDLE&&(e.load(),a=e.getState()),a==q.LOADED},t.prototype.renderIfReadyAndVisible=function(){var e=this.getLayer();e.getVisible()&&e.getSourceState()==Gn.READY&&e.changed()},t.prototype.disposeInternal=function(){delete this.layer_,i.prototype.disposeInternal.call(this)},t}(wc);const Am=xm;var wm=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Em=function(i){wm(t,i);function t(e,a,r,n){var s=i.call(this,e)||this;return s.inversePixelTransform=a,s.frameState=r,s.context=n,s}return t}(gi);const Cm=Em;var Im=/^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,Sm=/^([a-z]*)$|^hsla?\(.*\)$/i;function Dc(i){return typeof i=="string"?i:Nc(i)}function Tm(i){var t=document.createElement("div");if(t.style.color=i,t.style.color!==""){document.body.appendChild(t);var e=getComputedStyle(t).color;return document.body.removeChild(t),e}else return""}var Rm=function(){var i=1024,t={},e=0;return function(a){var r;if(t.hasOwnProperty(a))r=t[a];else{if(e>=i){var n=0;for(var s in t)(n++&3)===0&&(delete t[s],--e)}r=Om(a),t[a]=r,++e}return r}}();function fn(i){return Array.isArray(i)?i:Rm(i)}function Om(i){var t,e,a,r,n;if(Sm.exec(i)&&(i=Tm(i)),Im.exec(i)){var s=i.length-1,o=void 0;s<=4?o=1:o=2;var h=s===4||s===8;t=parseInt(i.substr(1+0*o,o),16),e=parseInt(i.substr(1+1*o,o),16),a=parseInt(i.substr(1+2*o,o),16),h?r=parseInt(i.substr(1+3*o,o),16):r=255,o==1&&(t=(t<<4)+t,e=(e<<4)+e,a=(a<<4)+a,h&&(r=(r<<4)+r)),n=[t,e,a,r/255]}else i.indexOf("rgba(")==0?(n=i.slice(5,-1).split(",").map(Number),Oh(n)):i.indexOf("rgb(")==0?(n=i.slice(4,-1).split(",").map(Number),n.push(1),Oh(n)):J(!1,14);return n}function Oh(i){return i[0]=ft(i[0]+.5|0,0,255),i[1]=ft(i[1]+.5|0,0,255),i[2]=ft(i[2]+.5|0,0,255),i[3]=ft(i[3],0,1),i}function Nc(i){var t=i[0];t!=(t|0)&&(t=t+.5|0);var e=i[1];e!=(e|0)&&(e=e+.5|0);var a=i[2];a!=(a|0)&&(a=a+.5|0);var r=i[3]===void 0?1:Math.round(i[3]*100)/100;return"rgba("+t+","+e+","+a+","+r+")"}function Kt(i,t,e,a){var r;return e&&e.length?r=e.shift():Bn?r=new OffscreenCanvas(i||300,t||300):r=document.createElement("canvas"),i&&(r.width=i),t&&(r.height=t),r.getContext("2d",a)}var Pm=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Ia=null;function Lm(){var i=document.createElement("canvas");i.width=1,i.height=1,Ia=i.getContext("2d")}var km=function(i){Pm(t,i);function t(e){var a=i.call(this,e)||this;return a.container=null,a.renderedResolution,a.tempTransform=qe(),a.pixelTransform=qe(),a.inversePixelTransform=qe(),a.context=null,a.containerReused=!1,a.pixelContext_=null,a.frameState=null,a}return t.prototype.getImageData=function(e,a,r){Ia||Lm(),Ia.clearRect(0,0,1,1);var n;try{Ia.drawImage(e,a,r,1,1,0,0,1,1),n=Ia.getImageData(0,0,1,1).data}catch{return null}return n},t.prototype.getBackground=function(e){var a=this.getLayer(),r=a.getBackground();return typeof r=="function"&&(r=r(e.viewState.resolution)),r||void 0},t.prototype.useContainer=function(e,a,r,n){var s=this.getLayer().getClassName(),o,h;if(e&&e.className===s&&e.style.opacity===""&&r===1&&(!n||e.style.backgroundColor&&na(fn(e.style.backgroundColor),fn(n)))){var l=e.firstElementChild;l instanceof HTMLCanvasElement&&(h=l.getContext("2d"))}if(h&&h.canvas.style.transform===a?(this.container=e,this.context=h,this.containerReused=!0):this.containerReused&&(this.container=null,this.context=null,this.containerReused=!1),!this.container){o=document.createElement("div"),o.className=s;var c=o.style;c.position="absolute",c.width="100%",c.height="100%",n&&(c.backgroundColor=n),h=Kt();var l=h.canvas;o.appendChild(l),c=l.style,c.position="absolute",c.left="0",c.transformOrigin="top left",this.container=o,this.context=h}},t.prototype.clipUnrotated=function(e,a,r){var n=fi(r),s=Pn(r),o=On(r),h=Rn(r);mt(a.coordinateToPixelTransform,n),mt(a.coordinateToPixelTransform,s),mt(a.coordinateToPixelTransform,o),mt(a.coordinateToPixelTransform,h);var l=this.inversePixelTransform;mt(l,n),mt(l,s),mt(l,o),mt(l,h),e.save(),e.beginPath(),e.moveTo(Math.round(n[0]),Math.round(n[1])),e.lineTo(Math.round(s[0]),Math.round(s[1])),e.lineTo(Math.round(o[0]),Math.round(o[1])),e.lineTo(Math.round(h[0]),Math.round(h[1])),e.clip()},t.prototype.dispatchRenderEvent_=function(e,a,r){var n=this.getLayer();if(n.hasListener(e)){var s=new Cm(e,this.inversePixelTransform,r,a);n.dispatchEvent(s)}},t.prototype.preRender=function(e,a){this.frameState=a,this.dispatchRenderEvent_($0.PRERENDER,e,a)},t.prototype.postRender=function(e,a){this.dispatchRenderEvent_($0.POSTRENDER,e,a)},t.prototype.getRenderTransform=function(e,a,r,n,s,o,h){var l=s/2,c=o/2,d=n/a,u=-d,v=-e[0]+h,p=-e[1];return fe(this.tempTransform,l,c,d,u,-r,v,p)},t.prototype.getDataAtPixel=function(e,a,r){var n=mt(this.inversePixelTransform,e.slice()),s=this.context,o=this.getLayer(),h=o.getExtent();if(h){var l=mt(a.pixelToCoordinateTransform,e.slice());if(!aa(h,l))return null}var c=Math.round(n[0]),d=Math.round(n[1]),u=this.pixelContext_;if(!u){var v=document.createElement("canvas");v.width=1,v.height=1,u=v.getContext("2d"),this.pixelContext_=u}u.clearRect(0,0,1,1);var p;try{u.drawImage(s.canvas,c,d,1,1,0,0,1,1),p=u.getImageData(0,0,1,1).data}catch(f){return f.name==="SecurityError"?(this.pixelContext_=null,new Uint8Array):p}return p[3]===0?null:p},t.prototype.disposeInternal=function(){delete this.frameState,i.prototype.disposeInternal.call(this)},t}(Am);const Os=km;var Bc=.5,te=!0,gn={imageSmoothingEnabled:!1,msImageSmoothingEnabled:!1},Gc={imageSmoothingEnabled:!0,msImageSmoothingEnabled:!0},Fm=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Dm=function(i){Fm(t,i);function t(e){var a=i.call(this,e)||this;return a.image_=null,a}return t.prototype.getImage=function(){return this.image_?this.image_.getImage():null},t.prototype.prepareFrame=function(e){var a=e.layerStatesArray[e.layerIndex],r=e.pixelRatio,n=e.viewState,s=n.resolution,o=this.getLayer().getSource(),h=e.viewHints,l=e.extent;if(a.extent!==void 0&&(l=Wi(l,be(a.extent,n.projection))),!h[Ft.ANIMATING]&&!h[Ft.INTERACTING]&&!gs(l))if(o){var c=n.projection;if(!te){var d=o.getProjection();d&&(c=d)}var u=o.getImage(l,s,r,c);u&&this.loadImage(u)?this.image_=u:this.image_=null}else this.image_=null;return!!this.image_},t.prototype.getData=function(e){var a=this.frameState;if(!a)return null;var r=this.getLayer(),n=mt(a.pixelToCoordinateTransform,e.slice()),s=r.getExtent();if(s&&!aa(s,n))return null;var o=this.image_.getExtent(),h=this.image_.getImage(),l=st(o),c=Math.floor(h.width*((n[0]-o[0])/l));if(c<0||c>=h.width)return null;var d=wt(o),u=Math.floor(h.height*((o[3]-n[1])/d));return u<0||u>=h.height?null:this.getImageData(h,c,u)},t.prototype.renderFrame=function(e,a){var r=this.image_,n=r.getExtent(),s=r.getResolution(),o=r.getPixelRatio(),h=e.layerStatesArray[e.layerIndex],l=e.pixelRatio,c=e.viewState,d=c.center,u=c.resolution,v=e.size,p=l*s/(u*o),f=Math.round(v[0]*l),g=Math.round(v[1]*l),m=c.rotation;if(m){var _=Math.round(Math.sqrt(f*f+g*g));f=_,g=_}fe(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/l,1/l,m,-f/2,-g/2),ws(this.inversePixelTransform,this.pixelTransform);var y=Es(this.pixelTransform);this.useContainer(a,y,h.opacity,this.getBackground(e));var M=this.context,b=M.canvas;b.width!=f||b.height!=g?(b.width=f,b.height=g):this.containerReused||M.clearRect(0,0,f,g);var z=!1,A=!0;if(h.extent){var x=be(h.extent,c.projection);A=It(x,e.extent),z=A&&!$e(x,e.extent),z&&this.clipUnrotated(M,e,x)}var C=r.getImage(),T=fe(this.tempTransform,f/2,g/2,p,p,0,o*(n[0]-d[0])/s,o*(d[1]-n[3])/s);this.renderedResolution=s*l/o;var P=C.width*T[0],k=C.height*T[3];if(this.getLayer().getSource().getInterpolate()||ot(M,gn),this.preRender(M,e),A&&P>=.5&&k>=.5){var L=T[4],U=T[5],N=h.opacity,B=void 0;N!==1&&(B=M.globalAlpha,M.globalAlpha=N),M.drawImage(C,0,0,+C.width,+C.height,Math.round(L),Math.round(U),Math.round(P),Math.round(k)),N!==1&&(M.globalAlpha=B)}return this.postRender(M,e),z&&M.restore(),ot(M,Gc),y!==b.style.transform&&(b.style.transform=y),this.container},t}(Os);const Nm=Dm;var Bm=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Gm=function(i){Bm(t,i);function t(e){return i.call(this,e)||this}return t.prototype.createRenderer=function(){return new Nm(this)},t.prototype.getData=function(e){return i.prototype.getData.call(this,e)},t}(bm);const $m=Gm,kr={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"};var Vm=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),jm=function(i){Vm(t,i);function t(e){var a=this,r=e||{},n=ot({},r);return delete n.preload,delete n.useInterimTilesOnError,a=i.call(this,n)||this,a.on,a.once,a.un,a.setPreload(r.preload!==void 0?r.preload:0),a.setUseInterimTilesOnError(r.useInterimTilesOnError!==void 0?r.useInterimTilesOnError:!0),a}return t.prototype.getPreload=function(){return this.get(kr.PRELOAD)},t.prototype.setPreload=function(e){this.set(kr.PRELOAD,e)},t.prototype.getUseInterimTilesOnError=function(){return this.get(kr.USE_INTERIM_TILES_ON_ERROR)},t.prototype.setUseInterimTilesOnError=function(e){this.set(kr.USE_INTERIM_TILES_ON_ERROR,e)},t.prototype.getData=function(e){return i.prototype.getData.call(this,e)},t}(Rs);const Um=jm,G={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};var Wm=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Ym=function(i){Wm(t,i);function t(e,a,r){var n=i.call(this)||this,s=r||{};return n.tileCoord=e,n.state=a,n.interimTile=null,n.key="",n.transition_=s.transition===void 0?250:s.transition,n.transitionStarts_={},n.interpolate=!!s.interpolate,n}return t.prototype.changed=function(){this.dispatchEvent(zt.CHANGE)},t.prototype.release=function(){},t.prototype.getKey=function(){return this.key+"/"+this.tileCoord},t.prototype.getInterimTile=function(){if(!this.interimTile)return this;var e=this.interimTile;do{if(e.getState()==G.LOADED)return this.transition_=0,e;e=e.interimTile}while(e);return this},t.prototype.refreshInterimChain=function(){if(!!this.interimTile){var e=this.interimTile,a=this;do{if(e.getState()==G.LOADED){e.interimTile=null;break}else e.getState()==G.LOADING?a=e:e.getState()==G.IDLE?a.interimTile=e.interimTile:a=e;e=a.interimTile}while(e)}},t.prototype.getTileCoord=function(){return this.tileCoord},t.prototype.getState=function(){return this.state},t.prototype.setState=function(e){if(this.state!==G.ERROR&&this.state>e)throw new Error("Tile load sequence violation");this.state=e,this.changed()},t.prototype.load=function(){K()},t.prototype.getAlpha=function(e,a){if(!this.transition_)return 1;var r=this.transitionStarts_[e];if(!r)r=a,this.transitionStarts_[e]=r;else if(r===-1)return 1;var n=a-r+1e3/60;return n>=this.transition_?1:Tc(n/this.transition_)},t.prototype.inTransition=function(e){return this.transition_?this.transitionStarts_[e]!==-1:!1},t.prototype.endTransition=function(e){this.transition_&&(this.transitionStarts_[e]=-1)},t}(vr);const $c=Ym;var qm=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Hm=function(i){qm(t,i);function t(e,a,r,n){var s=i.call(this)||this;return s.extent=e,s.pixelRatio_=r,s.resolution=a,s.state=n,s}return t.prototype.changed=function(){this.dispatchEvent(zt.CHANGE)},t.prototype.getExtent=function(){return this.extent},t.prototype.getImage=function(){return K()},t.prototype.getPixelRatio=function(){return this.pixelRatio_},t.prototype.getResolution=function(){return this.resolution},t.prototype.getState=function(){return this.state},t.prototype.load=function(){K()},t}(vr);const Vc=Hm;var Xm=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Zm=function(i){Xm(t,i);function t(e,a,r,n,s,o){var h=i.call(this,e,a,r,q.IDLE)||this;return h.src_=n,h.image_=new Image,s!==null&&(h.image_.crossOrigin=s),h.unlisten_=null,h.state=q.IDLE,h.imageLoadFunction_=o,h}return t.prototype.getImage=function(){return this.image_},t.prototype.handleImageError_=function(){this.state=q.ERROR,this.unlistenImage_(),this.changed()},t.prototype.handleImageLoad_=function(){this.resolution===void 0&&(this.resolution=wt(this.extent)/this.image_.height),this.state=q.LOADED,this.unlistenImage_(),this.changed()},t.prototype.load=function(){(this.state==q.IDLE||this.state==q.ERROR)&&(this.state=q.LOADING,this.changed(),this.imageLoadFunction_(this,this.src_),this.unlisten_=Ps(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))},t.prototype.setImage=function(e){this.image_=e,this.resolution=wt(this.extent)/this.image_.height},t.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)},t}(Vc);function Ps(i,t,e){var a=i,r=!0,n=!1,s=!1,o=[vn(a,zt.LOAD,function(){s=!0,n||t()})];return a.src&&m4?(n=!0,a.decode().then(function(){r&&t()}).catch(function(h){r&&(s?t():e())})):o.push(vn(a,zt.ERROR,e)),function(){r=!1,o.forEach(qt)}}const Km=Zm;var Qm=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Jm=function(i){Qm(t,i);function t(e,a,r,n,s,o){var h=i.call(this,e,a,o)||this;return h.crossOrigin_=n,h.src_=r,h.key=r,h.image_=new Image,n!==null&&(h.image_.crossOrigin=n),h.unlisten_=null,h.tileLoadFunction_=s,h}return t.prototype.getImage=function(){return this.image_},t.prototype.setImage=function(e){this.image_=e,this.state=G.LOADED,this.unlistenImage_(),this.changed()},t.prototype.handleImageError_=function(){this.state=G.ERROR,this.unlistenImage_(),this.image_=t_(),this.changed()},t.prototype.handleImageLoad_=function(){var e=this.image_;e.naturalWidth&&e.naturalHeight?this.state=G.LOADED:this.state=G.EMPTY,this.unlistenImage_(),this.changed()},t.prototype.load=function(){this.state==G.ERROR&&(this.state=G.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==G.IDLE&&(this.state=G.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=Ps(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))},t.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)},t}($c);function t_(){var i=Kt(1,1);return i.fillStyle="rgba(0,0,0,0)",i.fillRect(0,0,1,1),i.canvas}const jc=Jm;var e_=10,Ph=.25,i_=function(){function i(t,e,a,r,n,s){this.sourceProj_=t,this.targetProj_=e;var o={},h=$a(this.targetProj_,this.sourceProj_);this.transformInv_=function(y){var M=y[0]+"/"+y[1];return o[M]||(o[M]=h(y)),o[M]},this.maxSourceExtent_=r,this.errorThresholdSquared_=n*n,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!r&&!!this.sourceProj_.getExtent()&&st(r)==st(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?st(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?st(this.targetProj_.getExtent()):null;var l=fi(a),c=Pn(a),d=On(a),u=Rn(a),v=this.transformInv_(l),p=this.transformInv_(c),f=this.transformInv_(d),g=this.transformInv_(u),m=e_+(s?Math.max(0,Math.ceil(F2(P0(a)/(s*s*256*256)))):0);if(this.addQuad_(l,c,d,u,v,p,f,g,m),this.wrapsXInSource_){var _=1/0;this.triangles_.forEach(function(y,M,b){_=Math.min(_,y.source[0][0],y.source[1][0],y.source[2][0])}),this.triangles_.forEach(function(y){if(Math.max(y.source[0][0],y.source[1][0],y.source[2][0])-_>this.sourceWorldWidth_/2){var M=[[y.source[0][0],y.source[0][1]],[y.source[1][0],y.source[1][1]],[y.source[2][0],y.source[2][1]]];M[0][0]-_>this.sourceWorldWidth_/2&&(M[0][0]-=this.sourceWorldWidth_),M[1][0]-_>this.sourceWorldWidth_/2&&(M[1][0]-=this.sourceWorldWidth_),M[2][0]-_>this.sourceWorldWidth_/2&&(M[2][0]-=this.sourceWorldWidth_);var b=Math.min(M[0][0],M[1][0],M[2][0]),z=Math.max(M[0][0],M[1][0],M[2][0]);z-b<this.sourceWorldWidth_/2&&(y.source=M)}}.bind(this))}o={}}return i.prototype.addTriangle_=function(t,e,a,r,n,s){this.triangles_.push({source:[r,n,s],target:[t,e,a]})},i.prototype.addQuad_=function(t,e,a,r,n,s,o,h,l){var c=Zo([n,s,o,h]),d=this.sourceWorldWidth_?st(c)/this.sourceWorldWidth_:null,u=this.sourceWorldWidth_,v=this.sourceProj_.canWrapX()&&d>.5&&d<1,p=!1;if(l>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){var f=Zo([t,e,a,r]),g=st(f)/this.targetWorldWidth_;p=g>Ph||p}!v&&this.sourceProj_.isGlobal()&&d&&(p=d>Ph||p)}if(!(!p&&this.maxSourceExtent_&&isFinite(c[0])&&isFinite(c[1])&&isFinite(c[2])&&isFinite(c[3])&&!It(c,this.maxSourceExtent_))){var m=0;if(!p&&(!isFinite(n[0])||!isFinite(n[1])||!isFinite(s[0])||!isFinite(s[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(h[0])||!isFinite(h[1]))){if(l>0)p=!0;else if(m=(!isFinite(n[0])||!isFinite(n[1])?8:0)+(!isFinite(s[0])||!isFinite(s[1])?4:0)+(!isFinite(o[0])||!isFinite(o[1])?2:0)+(!isFinite(h[0])||!isFinite(h[1])?1:0),m!=1&&m!=2&&m!=4&&m!=8)return}if(l>0){if(!p){var _=[(t[0]+a[0])/2,(t[1]+a[1])/2],y=this.transformInv_(_),M=void 0;if(v){var b=(di(n[0],u)+di(o[0],u))/2;M=b-di(y[0],u)}else M=(n[0]+o[0])/2-y[0];var z=(n[1]+o[1])/2-y[1],A=M*M+z*z;p=A>this.errorThresholdSquared_}if(p){if(Math.abs(t[0]-a[0])<=Math.abs(t[1]-a[1])){var x=[(e[0]+a[0])/2,(e[1]+a[1])/2],C=this.transformInv_(x),T=[(r[0]+t[0])/2,(r[1]+t[1])/2],P=this.transformInv_(T);this.addQuad_(t,e,x,T,n,s,C,P,l-1),this.addQuad_(T,x,a,r,P,C,o,h,l-1)}else{var k=[(t[0]+e[0])/2,(t[1]+e[1])/2],L=this.transformInv_(k),U=[(a[0]+r[0])/2,(a[1]+r[1])/2],N=this.transformInv_(U);this.addQuad_(t,k,U,r,n,L,N,h,l-1),this.addQuad_(k,e,a,U,L,s,o,N,l-1)}return}}if(v){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}(m&11)==0&&this.addTriangle_(t,a,r,n,o,h),(m&14)==0&&this.addTriangle_(t,a,e,n,o,s),m&&((m&13)==0&&this.addTriangle_(e,r,t,s,h,n),(m&7)==0&&this.addTriangle_(e,r,a,s,h,o))}},i.prototype.calculateSourceExtent=function(){var t=Xt();return this.triangles_.forEach(function(e,a,r){var n=e.source;Fa(t,n[0]),Fa(t,n[1]),Fa(t,n[2])}),t},i.prototype.getTriangles=function(){return this.triangles_},i}();const Uc=i_;var n0;function Lh(i,t,e,a,r){i.beginPath(),i.moveTo(0,0),i.lineTo(t,e),i.lineTo(a,r),i.closePath(),i.save(),i.clip(),i.fillRect(0,0,Math.max(t,a)+1,Math.max(e,r)),i.restore()}function s0(i,t){return Math.abs(i[t*4]-210)>2||Math.abs(i[t*4+3]-.75*255)>2}function a_(){if(n0===void 0){var i=document.createElement("canvas").getContext("2d");i.globalCompositeOperation="lighter",i.fillStyle="rgba(210, 0, 0, 0.75)",Lh(i,4,5,4,0),Lh(i,4,5,0,5);var t=i.getImageData(0,0,3,3).data;n0=s0(t,0)||s0(t,4)||s0(t,8)}return n0}function Ya(i,t,e,a){var r=or(e,t,i),n=Qo(t,a,e),s=t.getMetersPerUnit();s!==void 0&&(n*=s);var o=i.getMetersPerUnit();o!==void 0&&(n/=o);var h=i.getExtent();if(!h||aa(h,r)){var l=Qo(i,n,r)/n;isFinite(l)&&l>0&&(n/=l)}return n}function r_(i,t,e,a){var r=Xe(e),n=Ya(i,t,r,a);return(!isFinite(n)||n<=0)&&ql(e,function(s){return n=Ya(i,t,s,a),isFinite(n)&&n>0}),n}function Wc(i,t,e,a,r,n,s,o,h,l,c,d){var u=Kt(Math.round(e*i),Math.round(e*t));if(d||ot(u,gn),h.length===0)return u.canvas;u.scale(e,e);function v(M){return Math.round(M*e)/e}u.globalCompositeOperation="lighter";var p=Xt();h.forEach(function(M,b,z){rp(p,M.extent)});var f=st(p),g=wt(p),m=Kt(Math.round(e*f/a),Math.round(e*g/a));d||ot(m,gn);var _=e/a;h.forEach(function(M,b,z){var A=M.extent[0]-p[0],x=-(M.extent[3]-p[3]),C=st(M.extent),T=wt(M.extent);M.image.width>0&&M.image.height>0&&m.drawImage(M.image,l,l,M.image.width-2*l,M.image.height-2*l,A*_,x*_,C*_,T*_)});var y=fi(s);return o.getTriangles().forEach(function(M,b,z){var A=M.source,x=M.target,C=A[0][0],T=A[0][1],P=A[1][0],k=A[1][1],L=A[2][0],U=A[2][1],N=v((x[0][0]-y[0])/n),B=v(-(x[0][1]-y[1])/n),F=v((x[1][0]-y[0])/n),Q=v(-(x[1][1]-y[1])/n),H=v((x[2][0]-y[0])/n),Z=v(-(x[2][1]-y[1])/n),ht=C,E=T;C=0,T=0,P-=ht,k-=E,L-=ht,U-=E;var dt=[[P,k,0,0,F-N],[L,U,0,0,H-N],[0,0,P,k,Q-B],[0,0,L,U,Z-B]],$=N2(dt);if(!!$){if(u.save(),u.beginPath(),a_()||!d){u.moveTo(F,Q);for(var ut=4,Et=N-F,Bt=B-Q,Ot=0;Ot<ut;Ot++)u.lineTo(F+v((Ot+1)*Et/ut),Q+v(Ot*Bt/(ut-1))),Ot!=ut-1&&u.lineTo(F+v((Ot+1)*Et/ut),Q+v((Ot+1)*Bt/(ut-1)));u.lineTo(H,Z)}else u.moveTo(F,Q),u.lineTo(N,B),u.lineTo(H,Z);u.clip(),u.transform($[0],$[2],$[1],$[3],N,B),u.translate(p[0]-ht,p[3]-E),u.scale(a/e,-a/e),u.drawImage(m.canvas,0,0),u.restore()}}),c&&(u.save(),u.globalCompositeOperation="source-over",u.strokeStyle="black",u.lineWidth=1,o.getTriangles().forEach(function(M,b,z){var A=M.target,x=(A[0][0]-y[0])/n,C=-(A[0][1]-y[1])/n,T=(A[1][0]-y[0])/n,P=-(A[1][1]-y[1])/n,k=(A[2][0]-y[0])/n,L=-(A[2][1]-y[1])/n;u.beginPath(),u.moveTo(T,P),u.lineTo(x,C),u.lineTo(k,L),u.closePath(),u.stroke()}),u.restore()),u.canvas}var n_=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),s_=function(i){n_(t,i);function t(e,a,r,n,s,o,h,l,c,d,u,v){var p=i.call(this,s,G.IDLE,{interpolate:!!v})||this;p.renderEdges_=u!==void 0?u:!1,p.pixelRatio_=h,p.gutter_=l,p.canvas_=null,p.sourceTileGrid_=a,p.targetTileGrid_=n,p.wrappedTileCoord_=o||s,p.sourceTiles_=[],p.sourcesListenerKeys_=null,p.sourceZ_=0;var f=n.getTileCoordExtent(p.wrappedTileCoord_),g=p.targetTileGrid_.getExtent(),m=p.sourceTileGrid_.getExtent(),_=g?Wi(f,g):f;if(P0(_)===0)return p.state=G.EMPTY,p;var y=e.getExtent();y&&(m?m=Wi(m,y):m=y);var M=n.getResolution(p.wrappedTileCoord_[0]),b=r_(e,r,_,M);if(!isFinite(b)||b<=0)return p.state=G.EMPTY,p;var z=d!==void 0?d:Bc;if(p.triangulation_=new Uc(e,r,_,m,b*z,M),p.triangulation_.getTriangles().length===0)return p.state=G.EMPTY,p;p.sourceZ_=a.getZForResolution(b);var A=p.triangulation_.calculateSourceExtent();if(m&&(e.canWrapX()?(A[1]=ft(A[1],m[1],m[3]),A[3]=ft(A[3],m[1],m[3])):A=Wi(A,m)),!P0(A))p.state=G.EMPTY;else{for(var x=a.getTileRangeForExtentAndZ(A,p.sourceZ_),C=x.minX;C<=x.maxX;C++)for(var T=x.minY;T<=x.maxY;T++){var P=c(p.sourceZ_,C,T,h);P&&p.sourceTiles_.push(P)}p.sourceTiles_.length===0&&(p.state=G.EMPTY)}return p}return t.prototype.getImage=function(){return this.canvas_},t.prototype.reproject_=function(){var e=[];if(this.sourceTiles_.forEach(function(c,d,u){c&&c.getState()==G.LOADED&&e.push({extent:this.sourceTileGrid_.getTileCoordExtent(c.tileCoord),image:c.getImage()})}.bind(this)),this.sourceTiles_.length=0,e.length===0)this.state=G.ERROR;else{var a=this.wrappedTileCoord_[0],r=this.targetTileGrid_.getTileSize(a),n=typeof r=="number"?r:r[0],s=typeof r=="number"?r:r[1],o=this.targetTileGrid_.getResolution(a),h=this.sourceTileGrid_.getResolution(this.sourceZ_),l=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=Wc(n,s,this.pixelRatio_,h,this.sourceTileGrid_.getExtent(),o,l,this.triangulation_,e,this.gutter_,this.renderEdges_,this.interpolate),this.state=G.LOADED}this.changed()},t.prototype.load=function(){if(this.state==G.IDLE){this.state=G.LOADING,this.changed();var e=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(function(a,r,n){var s=a.getState();if(s==G.IDLE||s==G.LOADING){e++;var o=re(a,zt.CHANGE,function(h){var l=a.getState();(l==G.LOADED||l==G.ERROR||l==G.EMPTY)&&(qt(o),e--,e===0&&(this.unlistenSources_(),this.reproject_()))},this);this.sourcesListenerKeys_.push(o)}}.bind(this)),e===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function(a,r,n){var s=a.getState();s==G.IDLE&&a.load()})}},t.prototype.unlistenSources_=function(){this.sourcesListenerKeys_.forEach(qt),this.sourcesListenerKeys_=null},t}($c);const Yc=s_;var qc=function(){function i(t,e,a,r){this.minX=t,this.maxX=e,this.minY=a,this.maxY=r}return i.prototype.contains=function(t){return this.containsXY(t[1],t[2])},i.prototype.containsTileRange=function(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY},i.prototype.containsXY=function(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY},i.prototype.equals=function(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY},i.prototype.extend=function(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)},i.prototype.getHeight=function(){return this.maxY-this.minY+1},i.prototype.getSize=function(){return[this.getWidth(),this.getHeight()]},i.prototype.getWidth=function(){return this.maxX-this.minX+1},i.prototype.intersects=function(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY},i}();function Ei(i,t,e,a,r){return r!==void 0?(r.minX=i,r.maxX=t,r.minY=e,r.maxY=a,r):new qc(i,t,e,a)}const Hc=qc;var o_=new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)","(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?","(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))","(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",`?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`].join(""),"i"),kh=["style","variant","weight","size","lineHeight","family"],Xc=function(i){var t=i.match(o_);if(!t)return null;for(var e={lineHeight:"normal",size:"1.2em",style:"normal",weight:"normal",variant:"normal"},a=0,r=kh.length;a<r;++a){var n=t[a+1];n!==void 0&&(e[kh[a]]=n)}return e.families=e.family.split(/,\s?/),e};function Zc(i){return i===1?"":String(Math.round(i*100)/100)}function Fh(i,t,e){return e===void 0&&(e=[0,0]),e[0]=i[0]+2*t,e[1]=i[1]+2*t,e}function Kc(i,t,e){return e===void 0&&(e=[0,0]),e[0]=i[0]*t+.5|0,e[1]=i[1]*t+.5|0,e}function $t(i,t){return Array.isArray(i)?i:(t===void 0?t=[i,i]:(t[0]=i,t[1]=i),t)}var h_=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),l_=function(i){h_(t,i);function t(e){var a=i.call(this,e)||this;return a.extentChanged=!0,a.renderedExtent_=null,a.renderedPixelRatio,a.renderedProjection=null,a.renderedRevision,a.renderedTiles=[],a.newTiles_=!1,a.tmpExtent=Xt(),a.tmpTileRange_=new Hc(0,0,0,0),a}return t.prototype.isDrawableTile=function(e){var a=this.getLayer(),r=e.getState(),n=a.getUseInterimTilesOnError();return r==G.LOADED||r==G.EMPTY||r==G.ERROR&&!n},t.prototype.getTile=function(e,a,r,n){var s=n.pixelRatio,o=n.viewState.projection,h=this.getLayer(),l=h.getSource(),c=l.getTile(e,a,r,s,o);return c.getState()==G.ERROR&&(h.getUseInterimTilesOnError()?h.getPreload()>0&&(this.newTiles_=!0):c.setState(G.LOADED)),this.isDrawableTile(c)||(c=c.getInterimTile()),c},t.prototype.getData=function(e){var a=this.frameState;if(!a)return null;var r=this.getLayer(),n=mt(a.pixelToCoordinateTransform,e.slice()),s=r.getExtent();if(s&&!aa(s,n))return null;for(var o=a.pixelRatio,h=a.viewState.projection,l=a.viewState,c=r.getRenderSource(),d=c.getTileGridForProjection(l.projection),u=c.getTilePixelRatio(a.pixelRatio),v=d.getZForResolution(l.resolution);v>=d.getMinZoom();--v){var p=d.getTileCoordForCoordAndZ(n,v),f=c.getTile(v,p[1],p[2],o,h);if(!(f instanceof jc||f instanceof Yc))return null;if(f.getState()===G.LOADED){var g=d.getOrigin(v),m=$t(d.getTileSize(v)),_=d.getResolution(v),y=Math.floor(u*((n[0]-g[0])/_-p[1]*m[0])),M=Math.floor(u*((g[1]-n[1])/_-p[2]*m[1]));return this.getImageData(f.getImage(),y,M)}}return null},t.prototype.loadedTileCallback=function(e,a,r){return this.isDrawableTile(r)?i.prototype.loadedTileCallback.call(this,e,a,r):!1},t.prototype.prepareFrame=function(e){return!!this.getLayer().getSource()},t.prototype.renderFrame=function(e,a){var r=e.layerStatesArray[e.layerIndex],n=e.viewState,s=n.projection,o=n.resolution,h=n.center,l=n.rotation,c=e.pixelRatio,d=this.getLayer(),u=d.getSource(),v=u.getRevision(),p=u.getTileGridForProjection(s),f=p.getZForResolution(o,u.zDirection),g=p.getResolution(f),m=e.extent,_=r.extent&&be(r.extent,s);_&&(m=Wi(m,be(r.extent,s)));var y=u.getTilePixelRatio(c),M=Math.round(e.size[0]*y),b=Math.round(e.size[1]*y);if(l){var z=Math.round(Math.sqrt(M*M+b*b));M=z,b=z}var A=g*M/2/y,x=g*b/2/y,C=[h[0]-A,h[1]-x,h[0]+A,h[1]+x],T=p.getTileRangeForExtentAndZ(m,f),P={};P[f]={};var k=this.createLoadedTileFinder(u,s,P),L=this.tmpExtent,U=this.tmpTileRange_;this.newTiles_=!1;for(var N=T.minX;N<=T.maxX;++N)for(var B=T.minY;B<=T.maxY;++B){var F=this.getTile(f,N,B,e);if(this.isDrawableTile(F)){var Q=nt(this);if(F.getState()==G.LOADED){P[f][F.tileCoord.toString()]=F;var H=F.inTransition(Q);!this.newTiles_&&(H||this.renderedTiles.indexOf(F)===-1)&&(this.newTiles_=!0)}if(F.getAlpha(Q,e.time)===1)continue}var Z=p.getTileCoordChildTileRange(F.tileCoord,U,L),ht=!1;Z&&(ht=k(f+1,Z)),ht||p.forEachTileCoordParentTileRange(F.tileCoord,k,U,L)}var E=g/o;fe(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/y,1/y,l,-M/2,-b/2);var dt=Es(this.pixelTransform);this.useContainer(a,dt,r.opacity,this.getBackground(e));var $=this.context,ut=$.canvas;ws(this.inversePixelTransform,this.pixelTransform),fe(this.tempTransform,M/2,b/2,E,E,0,-M/2,-b/2),ut.width!=M||ut.height!=b?(ut.width=M,ut.height=b):this.containerReused||$.clearRect(0,0,M,b),_&&this.clipUnrotated($,e,_),u.getInterpolate()||ot($,gn),this.preRender($,e),this.renderedTiles.length=0;var Et=Object.keys(P).map(Number);Et.sort(Qi);var Bt,Ot,Gt;r.opacity===1&&(!this.containerReused||u.getOpaque(e.viewState.projection))?Et=Et.reverse():(Bt=[],Ot=[]);for(var _i=Et.length-1;_i>=0;--_i){var ne=Et[_i],gr=u.getTilePixelSize(ne,c,s),mr=p.getResolution(ne),Ce=mr/g,yi=gr[0]*Ce*E,_r=gr[1]*Ce*E,sa=p.getTileCoordForCoordAndZ(fi(C),ne),yr=p.getTileCoordExtent(sa),Je=mt(this.tempTransform,[y*(yr[0]-C[0])/g,y*(C[3]-yr[3])/g]),oa=y*u.getGutterForProjection(s),Mr=P[ne];for(var Mi in Mr){var F=Mr[Mi],Ie=F.tileCoord,bi=sa[1]-Ie[1],Vn=Math.round(Je[0]-(bi-1)*yi),br=sa[2]-Ie[2],ha=Math.round(Je[1]-(br-1)*_r),N=Math.round(Je[0]-bi*yi),B=Math.round(Je[1]-br*_r),ge=Vn-N,se=ha-B,ti=f===ne,H=ti&&F.getAlpha(nt(this),e.time)!==1,la=!1;if(!H)if(Bt){Gt=[N,B,N+ge,B,N+ge,B+se,N,B+se];for(var Pt=0,zr=Bt.length;Pt<zr;++Pt)if(f!==ne&&ne<Ot[Pt]){var Mt=Bt[Pt];It([N,B,N+ge,B+se],[Mt[0],Mt[3],Mt[4],Mt[7]])&&(la||($.save(),la=!0),$.beginPath(),$.moveTo(Gt[0],Gt[1]),$.lineTo(Gt[2],Gt[3]),$.lineTo(Gt[4],Gt[5]),$.lineTo(Gt[6],Gt[7]),$.moveTo(Mt[6],Mt[7]),$.lineTo(Mt[4],Mt[5]),$.lineTo(Mt[2],Mt[3]),$.lineTo(Mt[0],Mt[1]),$.clip())}Bt.push(Gt),Ot.push(ne)}else $.clearRect(N,B,ge,se);this.drawTileImage(F,e,N,B,ge,se,oa,ti),Bt&&!H?(la&&$.restore(),this.renderedTiles.unshift(F)):this.renderedTiles.push(F),this.updateUsedTiles(e.usedTiles,u,F)}}this.renderedRevision=v,this.renderedResolution=g,this.extentChanged=!this.renderedExtent_||!Tn(this.renderedExtent_,C),this.renderedExtent_=C,this.renderedPixelRatio=c,this.renderedProjection=s,this.manageTilePyramid(e,u,p,c,s,m,f,d.getPreload()),this.scheduleExpireCache(e,u),this.postRender($,e),r.extent&&$.restore(),ot($,Gc),dt!==ut.style.transform&&(ut.style.transform=dt);var zi=Zc(r.opacity),ei=this.container;return zi!==ei.style.opacity&&(ei.style.opacity=zi),this.container},t.prototype.drawTileImage=function(e,a,r,n,s,o,h,l){var c=this.getTileImage(e);if(!!c){var d=nt(this),u=l?e.getAlpha(d,a.time):1,v=u!==this.context.globalAlpha;v&&(this.context.save(),this.context.globalAlpha=u),this.context.drawImage(c,h,h,c.width-2*h,c.height-2*h,r,n,s,o),v&&this.context.restore(),u!==1?a.animate=!0:l&&e.endTransition(d)}},t.prototype.getImage=function(){var e=this.context;return e?e.canvas:null},t.prototype.getTileImage=function(e){return e.getImage()},t.prototype.scheduleExpireCache=function(e,a){if(a.canExpireCache()){var r=function(n,s,o){var h=nt(n);h in o.usedTiles&&n.expireCache(o.viewState.projection,o.usedTiles[h])}.bind(null,a);e.postRenderFunctions.push(r)}},t.prototype.updateUsedTiles=function(e,a,r){var n=nt(a);n in e||(e[n]={}),e[n][r.getKey()]=!0},t.prototype.manageTilePyramid=function(e,a,r,n,s,o,h,l,c){var d=nt(a);d in e.wantedTiles||(e.wantedTiles[d]={});var u=e.wantedTiles[d],v=e.tileQueue,p=r.getMinZoom(),f=0,g,m,_,y,M,b;for(b=p;b<=h;++b)for(m=r.getTileRangeForExtentAndZ(o,b,m),_=r.getResolution(b),y=m.minX;y<=m.maxX;++y)for(M=m.minY;M<=m.maxY;++M)h-b<=l?(++f,g=a.getTile(b,y,M,n,s),g.getState()==G.IDLE&&(u[g.getKey()]=!0,v.isKeyQueued(g.getKey())||v.enqueue([g,d,r.getTileCoordCenter(g.tileCoord),_])),c!==void 0&&c(g)):a.useTile(b,y,M,s);a.updateCacheSize(f,s)},t}(Os);const c_=l_;var d_=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),u_=function(i){d_(t,i);function t(e){return i.call(this,e)||this}return t.prototype.createRenderer=function(){return new c_(this)},t}(Um);const v_=u_;function p_(i,t,e,a,r){Qc(i,t,e||0,a||i.length-1,r||f_)}function Qc(i,t,e,a,r){for(;a>e;){if(a-e>600){var n=a-e+1,s=t-e+1,o=Math.log(n),h=.5*Math.exp(2*o/3),l=.5*Math.sqrt(o*h*(n-h)/n)*(s-n/2<0?-1:1),c=Math.max(e,Math.floor(t-s*h/n+l)),d=Math.min(a,Math.floor(t+(n-s)*h/n+l));Qc(i,t,c,d,r)}var u=i[t],v=e,p=a;for(Ma(i,e,t),r(i[a],u)>0&&Ma(i,e,a);v<p;){for(Ma(i,v,p),v++,p--;r(i[v],u)<0;)v++;for(;r(i[p],u)>0;)p--}r(i[e],u)===0?Ma(i,e,p):(p++,Ma(i,p,a)),p<=t&&(e=p+1),t<=p&&(a=p-1)}}function Ma(i,t,e){var a=i[t];i[t]=i[e],i[e]=a}function f_(i,t){return i<t?-1:i>t?1:0}class Jc{constructor(t=9){this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(t){let e=this.data;const a=[];if(!Dr(t,e))return a;const r=this.toBBox,n=[];for(;e;){for(let s=0;s<e.children.length;s++){const o=e.children[s],h=e.leaf?r(o):o;Dr(t,h)&&(e.leaf?a.push(o):h0(t,h)?this._all(o,a):n.push(o))}e=n.pop()}return a}collides(t){let e=this.data;if(!Dr(t,e))return!1;const a=[];for(;e;){for(let r=0;r<e.children.length;r++){const n=e.children[r],s=e.leaf?this.toBBox(n):n;if(Dr(t,s)){if(e.leaf||h0(t,s))return!0;a.push(n)}}e=a.pop()}return!1}load(t){if(!(t&&t.length))return this;if(t.length<this._minEntries){for(let a=0;a<t.length;a++)this.insert(t[a]);return this}let e=this._build(t.slice(),0,t.length-1,0);if(!this.data.children.length)this.data=e;else if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const a=this.data;this.data=e,e=a}this._insert(e,this.data.height-e.height-1,!0)}return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=Ti([]),this}remove(t,e){if(!t)return this;let a=this.data;const r=this.toBBox(t),n=[],s=[];let o,h,l;for(;a||n.length;){if(a||(a=n.pop(),h=n[n.length-1],o=s.pop(),l=!0),a.leaf){const c=g_(t,a.children,e);if(c!==-1)return a.children.splice(c,1),n.push(a),this._condense(n),this}!l&&!a.leaf&&h0(a,r)?(n.push(a),s.push(o),o=0,h=a,a=a.children[0]):h?(o++,a=h.children[o],l=!1):a=null}return this}toBBox(t){return t}compareMinX(t,e){return t.minX-e.minX}compareMinY(t,e){return t.minY-e.minY}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){const a=[];for(;t;)t.leaf?e.push(...t.children):a.push(...t.children),t=a.pop();return e}_build(t,e,a,r){const n=a-e+1;let s=this._maxEntries,o;if(n<=s)return o=Ti(t.slice(e,a+1)),Ci(o,this.toBBox),o;r||(r=Math.ceil(Math.log(n)/Math.log(s)),s=Math.ceil(n/Math.pow(s,r-1))),o=Ti([]),o.leaf=!1,o.height=r;const h=Math.ceil(n/s),l=h*Math.ceil(Math.sqrt(s));Dh(t,e,a,l,this.compareMinX);for(let c=e;c<=a;c+=l){const d=Math.min(c+l-1,a);Dh(t,c,d,h,this.compareMinY);for(let u=c;u<=d;u+=h){const v=Math.min(u+h-1,d);o.children.push(this._build(t,u,v,r-1))}}return Ci(o,this.toBBox),o}_chooseSubtree(t,e,a,r){for(;r.push(e),!(e.leaf||r.length-1===a);){let n=1/0,s=1/0,o;for(let h=0;h<e.children.length;h++){const l=e.children[h],c=o0(l),d=y_(t,l)-c;d<s?(s=d,n=c<n?c:n,o=l):d===s&&c<n&&(n=c,o=l)}e=o||e.children[0]}return e}_insert(t,e,a){const r=a?t:this.toBBox(t),n=[],s=this._chooseSubtree(r,this.data,e,n);for(s.children.push(t),Ta(s,r);e>=0&&n[e].children.length>this._maxEntries;)this._split(n,e),e--;this._adjustParentBBoxes(r,n,e)}_split(t,e){const a=t[e],r=a.children.length,n=this._minEntries;this._chooseSplitAxis(a,n,r);const s=this._chooseSplitIndex(a,n,r),o=Ti(a.children.splice(s,a.children.length-s));o.height=a.height,o.leaf=a.leaf,Ci(a,this.toBBox),Ci(o,this.toBBox),e?t[e-1].children.push(o):this._splitRoot(a,o)}_splitRoot(t,e){this.data=Ti([t,e]),this.data.height=t.height+1,this.data.leaf=!1,Ci(this.data,this.toBBox)}_chooseSplitIndex(t,e,a){let r,n=1/0,s=1/0;for(let o=e;o<=a-e;o++){const h=Sa(t,0,o,this.toBBox),l=Sa(t,o,a,this.toBBox),c=M_(h,l),d=o0(h)+o0(l);c<n?(n=c,r=o,s=d<s?d:s):c===n&&d<s&&(s=d,r=o)}return r||a-e}_chooseSplitAxis(t,e,a){const r=t.leaf?this.compareMinX:m_,n=t.leaf?this.compareMinY:__,s=this._allDistMargin(t,e,a,r),o=this._allDistMargin(t,e,a,n);s<o&&t.children.sort(r)}_allDistMargin(t,e,a,r){t.children.sort(r);const n=this.toBBox,s=Sa(t,0,e,n),o=Sa(t,a-e,a,n);let h=Fr(s)+Fr(o);for(let l=e;l<a-e;l++){const c=t.children[l];Ta(s,t.leaf?n(c):c),h+=Fr(s)}for(let l=a-e-1;l>=e;l--){const c=t.children[l];Ta(o,t.leaf?n(c):c),h+=Fr(o)}return h}_adjustParentBBoxes(t,e,a){for(let r=a;r>=0;r--)Ta(e[r],t)}_condense(t){for(let e=t.length-1,a;e>=0;e--)t[e].children.length===0?e>0?(a=t[e-1].children,a.splice(a.indexOf(t[e]),1)):this.clear():Ci(t[e],this.toBBox)}}function g_(i,t,e){if(!e)return t.indexOf(i);for(let a=0;a<t.length;a++)if(e(i,t[a]))return a;return-1}function Ci(i,t){Sa(i,0,i.children.length,t,i)}function Sa(i,t,e,a,r){r||(r=Ti(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let n=t;n<e;n++){const s=i.children[n];Ta(r,i.leaf?a(s):s)}return r}function Ta(i,t){return i.minX=Math.min(i.minX,t.minX),i.minY=Math.min(i.minY,t.minY),i.maxX=Math.max(i.maxX,t.maxX),i.maxY=Math.max(i.maxY,t.maxY),i}function m_(i,t){return i.minX-t.minX}function __(i,t){return i.minY-t.minY}function o0(i){return(i.maxX-i.minX)*(i.maxY-i.minY)}function Fr(i){return i.maxX-i.minX+(i.maxY-i.minY)}function y_(i,t){return(Math.max(t.maxX,i.maxX)-Math.min(t.minX,i.minX))*(Math.max(t.maxY,i.maxY)-Math.min(t.minY,i.minY))}function M_(i,t){const e=Math.max(i.minX,t.minX),a=Math.max(i.minY,t.minY),r=Math.min(i.maxX,t.maxX),n=Math.min(i.maxY,t.maxY);return Math.max(0,r-e)*Math.max(0,n-a)}function h0(i,t){return i.minX<=t.minX&&i.minY<=t.minY&&t.maxX<=i.maxX&&t.maxY<=i.maxY}function Dr(i,t){return t.minX<=i.maxX&&t.minY<=i.maxY&&t.maxX>=i.minX&&t.maxY>=i.minY}function Ti(i){return{children:i,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Dh(i,t,e,a,r){const n=[t,e];for(;n.length;){if(e=n.pop(),t=n.pop(),e-t<=a)continue;const s=t+Math.ceil((e-t)/a/2)*a;p_(i,s,t,e,r),n.push(t,s,s,e)}}var b_=function(){function i(t){this.opacity_=t.opacity,this.rotateWithView_=t.rotateWithView,this.rotation_=t.rotation,this.scale_=t.scale,this.scaleArray_=$t(t.scale),this.displacement_=t.displacement}return i.prototype.clone=function(){var t=this.getScale();return new i({opacity:this.getOpacity(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice()})},i.prototype.getOpacity=function(){return this.opacity_},i.prototype.getRotateWithView=function(){return this.rotateWithView_},i.prototype.getRotation=function(){return this.rotation_},i.prototype.getScale=function(){return this.scale_},i.prototype.getScaleArray=function(){return this.scaleArray_},i.prototype.getDisplacement=function(){return this.displacement_},i.prototype.getAnchor=function(){return K()},i.prototype.getImage=function(t){return K()},i.prototype.getHitDetectionImage=function(){return K()},i.prototype.getPixelRatio=function(t){return 1},i.prototype.getImageState=function(){return K()},i.prototype.getImageSize=function(){return K()},i.prototype.getOrigin=function(){return K()},i.prototype.getSize=function(){return K()},i.prototype.setDisplacement=function(t){this.displacement_=t},i.prototype.setOpacity=function(t){this.opacity_=t},i.prototype.setRotateWithView=function(t){this.rotateWithView_=t},i.prototype.setRotation=function(t){this.rotation_=t},i.prototype.setScale=function(t){this.scale_=t,this.scaleArray_=$t(t)},i.prototype.listenImageChange=function(t){K()},i.prototype.load=function(){K()},i.prototype.unlistenImageChange=function(t){K()},i}();const td=b_;function ce(i){return Array.isArray(i)?Nc(i):i}var ed="10px sans-serif",Ae="#000",mn="round",qa=[],Ha=0,ta="round",Xa=10,Za="#000",Ka="center",_n="middle",oi=[0,0,0,0],Qa=1,Re=new mi,z_=new vr;z_.setSize=function(){console.warn("labelCache is deprecated.")};var Ri=null,V0,j0={},x_=function(){var i=100,t="32px ",e=["monospace","serif"],a=e.length,r="wmytzilWMYTZIL@#/&?$%10\uF013",n,s;function o(l,c,d){for(var u=!0,v=0;v<a;++v){var p=e[v];if(s=yn(l+" "+c+" "+t+p,r),d!=p){var f=yn(l+" "+c+" "+t+d+","+p,r);u=u&&f!=s}}return!!u}function h(){for(var l=!0,c=Re.getKeys(),d=0,u=c.length;d<u;++d){var v=c[d];Re.get(v)<i&&(o.apply(this,v.split(`
`))?(ps(j0),Ri=null,V0=void 0,Re.set(v,i)):(Re.set(v,Re.get(v)+1,!0),l=!1))}l&&(clearInterval(n),n=void 0)}return function(l){var c=Xc(l);if(!!c)for(var d=c.families,u=0,v=d.length;u<v;++u){var p=d[u],f=c.style+`
`+c.weight+`
`+p;Re.get(f)===void 0&&(Re.set(f,i,!0),o(c.style,c.weight,p)||(Re.set(f,0,!0),n===void 0&&(n=setInterval(h,32))))}}}(),A_=function(){var i;return function(t){var e=j0[t];if(e==null){if(Bn){var a=Xc(t),r=id(t,"\u017Dg"),n=isNaN(Number(a.lineHeight))?1.2:Number(a.lineHeight);e=n*(r.actualBoundingBoxAscent+r.actualBoundingBoxDescent)}else i||(i=document.createElement("div"),i.innerHTML="M",i.style.minHeight="0",i.style.maxHeight="none",i.style.height="auto",i.style.padding="0",i.style.border="none",i.style.position="absolute",i.style.display="block",i.style.left="-99999px"),i.style.font=t,document.body.appendChild(i),e=i.offsetHeight,document.body.removeChild(i);j0[t]=e}return e}}();function id(i,t){return Ri||(Ri=Kt(1,1)),i!=V0&&(Ri.font=i,V0=Ri.font),Ri.measureText(t)}function yn(i,t){return id(i,t).width}function Nh(i,t,e){if(t in e)return e[t];var a=yn(i,t);return e[t]=a,a}function w_(i,t){for(var e=[],a=[],r=[],n=0,s=0,o=0,h=0,l=0,c=t.length;l<=c;l+=2){var d=t[l];if(d===`
`||l===c){n=Math.max(n,s),r.push(s),s=0,o+=h;continue}var u=t[l+1]||i.font,v=yn(u,d);e.push(v),s+=v;var p=A_(u);a.push(p),h=Math.max(h,p)}return{width:n,height:o,widths:e,heights:a,lineWidths:r}}function E_(i,t,e,a,r,n,s,o,h,l,c){i.save(),e!==1&&(i.globalAlpha*=e),t&&i.setTransform.apply(i,t),a.contextInstructions?(i.translate(h,l),i.scale(c[0],c[1]),C_(a,i)):c[0]<0||c[1]<0?(i.translate(h,l),i.scale(c[0],c[1]),i.drawImage(a,r,n,s,o,0,0,s,o)):i.drawImage(a,r,n,s,o,h,l,s*c[0],o*c[1]),i.restore()}function C_(i,t){for(var e=i.contextInstructions,a=0,r=e.length;a<r;a+=2)Array.isArray(e[a+1])?t[e[a]].apply(t,e[a+1]):t[e[a]]=e[a+1]}var I_=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),S_=function(i){I_(t,i);function t(e){var a=this,r=e.rotateWithView!==void 0?e.rotateWithView:!1;return a=i.call(this,{opacity:1,rotateWithView:r,rotation:e.rotation!==void 0?e.rotation:0,scale:e.scale!==void 0?e.scale:1,displacement:e.displacement!==void 0?e.displacement:[0,0]})||this,a.canvas_=void 0,a.hitDetectionCanvas_=null,a.fill_=e.fill!==void 0?e.fill:null,a.origin_=[0,0],a.points_=e.points,a.radius_=e.radius!==void 0?e.radius:e.radius1,a.radius2_=e.radius2,a.angle_=e.angle!==void 0?e.angle:0,a.stroke_=e.stroke!==void 0?e.stroke:null,a.size_=null,a.renderOptions_=null,a.render(),a}return t.prototype.clone=function(){var e=this.getScale(),a=new t({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,displacement:this.getDisplacement().slice()});return a.setOpacity(this.getOpacity()),a},t.prototype.getAnchor=function(){var e=this.size_;if(!e)return null;var a=this.getDisplacement();return[e[0]/2-a[0],e[1]/2+a[1]]},t.prototype.getAngle=function(){return this.angle_},t.prototype.getFill=function(){return this.fill_},t.prototype.getHitDetectionImage=function(){return this.hitDetectionCanvas_||this.createHitDetectionCanvas_(this.renderOptions_),this.hitDetectionCanvas_},t.prototype.getImage=function(e){var a=this.canvas_[e];if(!a){var r=this.renderOptions_,n=Kt(r.size*e,r.size*e);this.draw_(r,n,e),a=n.canvas,this.canvas_[e]=a}return a},t.prototype.getPixelRatio=function(e){return e},t.prototype.getImageSize=function(){return this.size_},t.prototype.getImageState=function(){return q.LOADED},t.prototype.getOrigin=function(){return this.origin_},t.prototype.getPoints=function(){return this.points_},t.prototype.getRadius=function(){return this.radius_},t.prototype.getRadius2=function(){return this.radius2_},t.prototype.getSize=function(){return this.size_},t.prototype.getStroke=function(){return this.stroke_},t.prototype.listenImageChange=function(e){},t.prototype.load=function(){},t.prototype.unlistenImageChange=function(e){},t.prototype.calculateLineJoinSize_=function(e,a,r){if(a===0||this.points_===1/0||e!=="bevel"&&e!=="miter")return a;var n=this.radius_,s=this.radius2_===void 0?n:this.radius2_;if(n<s){var o=n;n=s,s=o}var h=this.radius2_===void 0?this.points_:this.points_*2,l=2*Math.PI/h,c=s*Math.sin(l),d=Math.sqrt(s*s-c*c),u=n-d,v=Math.sqrt(c*c+u*u),p=v/c;if(e==="miter"&&p<=r)return p*a;var f=a/2/p,g=a/2*(u/v),m=Math.sqrt((n+f)*(n+f)+g*g),_=m-n;if(this.radius2_===void 0||e==="bevel")return _*2;var y=n*Math.sin(l),M=Math.sqrt(n*n-y*y),b=s-M,z=Math.sqrt(y*y+b*b),A=z/y;if(A<=r){var x=A*a/2-s-n;return 2*Math.max(_,x)}return _*2},t.prototype.createRenderOptions=function(){var e=ta,a=0,r=null,n=0,s,o=0;this.stroke_&&(s=this.stroke_.getColor(),s===null&&(s=Za),s=ce(s),o=this.stroke_.getWidth(),o===void 0&&(o=Qa),r=this.stroke_.getLineDash(),n=this.stroke_.getLineDashOffset(),e=this.stroke_.getLineJoin(),e===void 0&&(e=ta),a=this.stroke_.getMiterLimit(),a===void 0&&(a=Xa));var h=this.calculateLineJoinSize_(e,o,a),l=Math.max(this.radius_,this.radius2_||0),c=Math.ceil(2*l+h);return{strokeStyle:s,strokeWidth:o,size:c,lineDash:r,lineDashOffset:n,lineJoin:e,miterLimit:a}},t.prototype.render=function(){this.renderOptions_=this.createRenderOptions();var e=this.renderOptions_.size;this.canvas_={},this.size_=[e,e]},t.prototype.draw_=function(e,a,r){if(a.scale(r,r),a.translate(e.size/2,e.size/2),this.createPath_(a),this.fill_){var n=this.fill_.getColor();n===null&&(n=Ae),a.fillStyle=ce(n),a.fill()}this.stroke_&&(a.strokeStyle=e.strokeStyle,a.lineWidth=e.strokeWidth,a.setLineDash&&e.lineDash&&(a.setLineDash(e.lineDash),a.lineDashOffset=e.lineDashOffset),a.lineJoin=e.lineJoin,a.miterLimit=e.miterLimit,a.stroke())},t.prototype.createHitDetectionCanvas_=function(e){if(this.fill_){var a=this.fill_.getColor(),r=0;if(typeof a=="string"&&(a=fn(a)),a===null?r=1:Array.isArray(a)&&(r=a.length===4?a[3]:1),r===0){var n=Kt(e.size,e.size);this.hitDetectionCanvas_=n.canvas,this.drawHitDetectionCanvas_(e,n)}}this.hitDetectionCanvas_||(this.hitDetectionCanvas_=this.getImage(1))},t.prototype.createPath_=function(e){var a=this.points_,r=this.radius_;if(a===1/0)e.arc(0,0,r,0,2*Math.PI);else{var n=this.radius2_===void 0?r:this.radius2_;this.radius2_!==void 0&&(a*=2);for(var s=this.angle_-Math.PI/2,o=2*Math.PI/a,h=0;h<a;h++){var l=s+h*o,c=h%2===0?r:n;e.lineTo(c*Math.cos(l),c*Math.sin(l))}e.closePath()}},t.prototype.drawHitDetectionCanvas_=function(e,a){a.translate(e.size/2,e.size/2),this.createPath_(a),a.fillStyle=Ae,a.fill(),this.stroke_&&(a.strokeStyle=e.strokeStyle,a.lineWidth=e.strokeWidth,e.lineDash&&(a.setLineDash(e.lineDash),a.lineDashOffset=e.lineDashOffset),a.lineJoin=e.lineJoin,a.miterLimit=e.miterLimit,a.stroke())},t}(td);const T_=S_;var R_=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),O_=function(i){R_(t,i);function t(e){var a=e||{};return i.call(this,{points:1/0,fill:a.fill,radius:a.radius,stroke:a.stroke,scale:a.scale!==void 0?a.scale:1,rotation:a.rotation!==void 0?a.rotation:0,rotateWithView:a.rotateWithView!==void 0?a.rotateWithView:!1,displacement:a.displacement!==void 0?a.displacement:[0,0]})||this}return t.prototype.clone=function(){var e=this.getScale(),a=new t({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice()});return a.setOpacity(this.getOpacity()),a},t.prototype.setRadius=function(e){this.radius_=e,this.render()},t}(T_);const P_=O_;var L_=function(){function i(t){var e=t||{};this.color_=e.color!==void 0?e.color:null}return i.prototype.clone=function(){var t=this.getColor();return new i({color:Array.isArray(t)?t.slice():t||void 0})},i.prototype.getColor=function(){return this.color_},i.prototype.setColor=function(t){this.color_=t},i}();const ad=L_;var k_=function(){function i(t){var e=t||{};this.color_=e.color!==void 0?e.color:null,this.lineCap_=e.lineCap,this.lineDash_=e.lineDash!==void 0?e.lineDash:null,this.lineDashOffset_=e.lineDashOffset,this.lineJoin_=e.lineJoin,this.miterLimit_=e.miterLimit,this.width_=e.width}return i.prototype.clone=function(){var t=this.getColor();return new i({color:Array.isArray(t)?t.slice():t||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),width:this.getWidth()})},i.prototype.getColor=function(){return this.color_},i.prototype.getLineCap=function(){return this.lineCap_},i.prototype.getLineDash=function(){return this.lineDash_},i.prototype.getLineDashOffset=function(){return this.lineDashOffset_},i.prototype.getLineJoin=function(){return this.lineJoin_},i.prototype.getMiterLimit=function(){return this.miterLimit_},i.prototype.getWidth=function(){return this.width_},i.prototype.setColor=function(t){this.color_=t},i.prototype.setLineCap=function(t){this.lineCap_=t},i.prototype.setLineDash=function(t){this.lineDash_=t},i.prototype.setLineDashOffset=function(t){this.lineDashOffset_=t},i.prototype.setLineJoin=function(t){this.lineJoin_=t},i.prototype.setMiterLimit=function(t){this.miterLimit_=t},i.prototype.setWidth=function(t){this.width_=t},i}();const rd=k_;var nd=function(){function i(t){var e=t||{};this.geometry_=null,this.geometryFunction_=Bh,e.geometry!==void 0&&this.setGeometry(e.geometry),this.fill_=e.fill!==void 0?e.fill:null,this.image_=e.image!==void 0?e.image:null,this.renderer_=e.renderer!==void 0?e.renderer:null,this.hitDetectionRenderer_=e.hitDetectionRenderer!==void 0?e.hitDetectionRenderer:null,this.stroke_=e.stroke!==void 0?e.stroke:null,this.text_=e.text!==void 0?e.text:null,this.zIndex_=e.zIndex}return i.prototype.clone=function(){var t=this.getGeometry();return t&&typeof t=="object"&&(t=t.clone()),new i({geometry:t,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer(),stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})},i.prototype.getRenderer=function(){return this.renderer_},i.prototype.setRenderer=function(t){this.renderer_=t},i.prototype.setHitDetectionRenderer=function(t){this.hitDetectionRenderer_=t},i.prototype.getHitDetectionRenderer=function(){return this.hitDetectionRenderer_},i.prototype.getGeometry=function(){return this.geometry_},i.prototype.getGeometryFunction=function(){return this.geometryFunction_},i.prototype.getFill=function(){return this.fill_},i.prototype.setFill=function(t){this.fill_=t},i.prototype.getImage=function(){return this.image_},i.prototype.setImage=function(t){this.image_=t},i.prototype.getStroke=function(){return this.stroke_},i.prototype.setStroke=function(t){this.stroke_=t},i.prototype.getText=function(){return this.text_},i.prototype.setText=function(t){this.text_=t},i.prototype.getZIndex=function(){return this.zIndex_},i.prototype.setGeometry=function(t){typeof t=="function"?this.geometryFunction_=t:typeof t=="string"?this.geometryFunction_=function(e){return e.get(t)}:t?t!==void 0&&(this.geometryFunction_=function(){return t}):this.geometryFunction_=Bh,this.geometry_=t},i.prototype.setZIndex=function(t){this.zIndex_=t},i}();function F_(i){var t;if(typeof i=="function")t=i;else{var e;if(Array.isArray(i))e=i;else{J(typeof i.getZIndex=="function",41);var a=i;e=[a]}t=function(){return e}}return t}var l0=null;function D_(i,t){if(!l0){var e=new ad({color:"rgba(255,255,255,0.4)"}),a=new rd({color:"#3399CC",width:1.25});l0=[new nd({image:new P_({fill:e,stroke:a,radius:5}),fill:e,stroke:a})]}return l0}function Bh(i){return i.getGeometry()}const N_=nd;var B_=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Gh={RENDER_ORDER:"renderOrder"},G_=function(i){B_(t,i);function t(e){var a=this,r=e||{},n=ot({},r);return delete n.style,delete n.renderBuffer,delete n.updateWhileAnimating,delete n.updateWhileInteracting,a=i.call(this,n)||this,a.declutter_=r.declutter!==void 0?r.declutter:!1,a.renderBuffer_=r.renderBuffer!==void 0?r.renderBuffer:100,a.style_=null,a.styleFunction_=void 0,a.setStyle(r.style),a.updateWhileAnimating_=r.updateWhileAnimating!==void 0?r.updateWhileAnimating:!1,a.updateWhileInteracting_=r.updateWhileInteracting!==void 0?r.updateWhileInteracting:!1,a}return t.prototype.getDeclutter=function(){return this.declutter_},t.prototype.getFeatures=function(e){return i.prototype.getFeatures.call(this,e)},t.prototype.getRenderBuffer=function(){return this.renderBuffer_},t.prototype.getRenderOrder=function(){return this.get(Gh.RENDER_ORDER)},t.prototype.getStyle=function(){return this.style_},t.prototype.getStyleFunction=function(){return this.styleFunction_},t.prototype.getUpdateWhileAnimating=function(){return this.updateWhileAnimating_},t.prototype.getUpdateWhileInteracting=function(){return this.updateWhileInteracting_},t.prototype.renderDeclutter=function(e){e.declutterTree||(e.declutterTree=new Jc(9)),this.getRenderer().renderDeclutter(e)},t.prototype.setRenderOrder=function(e){this.set(Gh.RENDER_ORDER,e)},t.prototype.setStyle=function(e){this.style_=e!==void 0?e:D_,this.styleFunction_=e===null?void 0:F_(this.style_),this.changed()},t}(Rs);const $_=G_;var pr={BEGIN_GEOMETRY:0,BEGIN_PATH:1,CIRCLE:2,CLOSE_PATH:3,CUSTOM:4,DRAW_CHARS:5,DRAW_IMAGE:6,END_GEOMETRY:7,FILL:8,MOVE_TO_LINE_TO:9,SET_FILL_STYLE:10,SET_STROKE_STYLE:11,STROKE:12},Nr=[pr.FILL],Ve=[pr.STROKE],hi=[pr.BEGIN_PATH],$h=[pr.CLOSE_PATH];const D=pr;var V_=function(){function i(){}return i.prototype.drawCustom=function(t,e,a,r){},i.prototype.drawGeometry=function(t){},i.prototype.setStyle=function(t){},i.prototype.drawCircle=function(t,e){},i.prototype.drawFeature=function(t,e){},i.prototype.drawGeometryCollection=function(t,e){},i.prototype.drawLineString=function(t,e){},i.prototype.drawMultiLineString=function(t,e){},i.prototype.drawMultiPoint=function(t,e){},i.prototype.drawMultiPolygon=function(t,e){},i.prototype.drawPoint=function(t,e){},i.prototype.drawPolygon=function(t,e){},i.prototype.drawText=function(t,e){},i.prototype.setFillStrokeStyle=function(t,e){},i.prototype.setImageStyle=function(t,e){},i.prototype.setTextStyle=function(t,e){},i}();const sd=V_;var j_=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),U_=function(i){j_(t,i);function t(e,a,r,n){var s=i.call(this)||this;return s.tolerance=e,s.maxExtent=a,s.pixelRatio=n,s.maxLineWidth=0,s.resolution=r,s.beginGeometryInstruction1_=null,s.beginGeometryInstruction2_=null,s.bufferedMaxExtent_=null,s.instructions=[],s.coordinates=[],s.tmpCoordinate_=[],s.hitDetectionInstructions=[],s.state={},s}return t.prototype.applyPixelRatio=function(e){var a=this.pixelRatio;return a==1?e:e.map(function(r){return r*a})},t.prototype.appendFlatPointCoordinates=function(e,a){for(var r=this.getBufferedMaxExtent(),n=this.tmpCoordinate_,s=this.coordinates,o=s.length,h=0,l=e.length;h<l;h+=a)n[0]=e[h],n[1]=e[h+1],aa(r,n)&&(s[o++]=n[0],s[o++]=n[1]);return o},t.prototype.appendFlatLineCoordinates=function(e,a,r,n,s,o){var h=this.coordinates,l=h.length,c=this.getBufferedMaxExtent();o&&(a+=n);var d=e[a],u=e[a+1],v=this.tmpCoordinate_,p=!0,f,g,m;for(f=a+n;f<r;f+=n)v[0]=e[f],v[1]=e[f+1],m=O0(c,v),m!==g?(p&&(h[l++]=d,h[l++]=u,p=!1),h[l++]=v[0],h[l++]=v[1]):m===_t.INTERSECTING?(h[l++]=v[0],h[l++]=v[1],p=!1):p=!0,d=v[0],u=v[1],g=m;return(s&&p||f===a+n)&&(h[l++]=d,h[l++]=u),l},t.prototype.drawCustomCoordinates_=function(e,a,r,n,s){for(var o=0,h=r.length;o<h;++o){var l=r[o],c=this.appendFlatLineCoordinates(e,a,l,n,!1,!1);s.push(c),a=l}return a},t.prototype.drawCustom=function(e,a,r,n){this.beginGeometry(e,a);var s=e.getType(),o=e.getStride(),h=this.coordinates.length,l,c,d,u,v;switch(s){case W.MULTI_POLYGON:l=e.getOrientedFlatCoordinates(),u=[];var p=e.getEndss();v=0;for(var f=0,g=p.length;f<g;++f){var m=[];v=this.drawCustomCoordinates_(l,v,p[f],o,m),u.push(m)}this.instructions.push([D.CUSTOM,h,u,e,r,Ih]),this.hitDetectionInstructions.push([D.CUSTOM,h,u,e,n||r,Ih]);break;case W.POLYGON:case W.MULTI_LINE_STRING:d=[],l=s==W.POLYGON?e.getOrientedFlatCoordinates():e.getFlatCoordinates(),v=this.drawCustomCoordinates_(l,0,e.getEnds(),o,d),this.instructions.push([D.CUSTOM,h,d,e,r,pn]),this.hitDetectionInstructions.push([D.CUSTOM,h,d,e,n||r,pn]);break;case W.LINE_STRING:case W.CIRCLE:l=e.getFlatCoordinates(),c=this.appendFlatLineCoordinates(l,0,l.length,o,!1,!1),this.instructions.push([D.CUSTOM,h,c,e,r,Ni]),this.hitDetectionInstructions.push([D.CUSTOM,h,c,e,n||r,Ni]);break;case W.MULTI_POINT:l=e.getFlatCoordinates(),c=this.appendFlatPointCoordinates(l,o),c>h&&(this.instructions.push([D.CUSTOM,h,c,e,r,Ni]),this.hitDetectionInstructions.push([D.CUSTOM,h,c,e,n||r,Ni]));break;case W.POINT:l=e.getFlatCoordinates(),this.coordinates.push(l[0],l[1]),c=this.coordinates.length,this.instructions.push([D.CUSTOM,h,c,e,r]),this.hitDetectionInstructions.push([D.CUSTOM,h,c,e,n||r]);break}this.endGeometry(a)},t.prototype.beginGeometry=function(e,a){this.beginGeometryInstruction1_=[D.BEGIN_GEOMETRY,a,0,e],this.instructions.push(this.beginGeometryInstruction1_),this.beginGeometryInstruction2_=[D.BEGIN_GEOMETRY,a,0,e],this.hitDetectionInstructions.push(this.beginGeometryInstruction2_)},t.prototype.finish=function(){return{instructions:this.instructions,hitDetectionInstructions:this.hitDetectionInstructions,coordinates:this.coordinates}},t.prototype.reverseHitDetectionInstructions=function(){var e=this.hitDetectionInstructions;e.reverse();var a,r=e.length,n,s,o=-1;for(a=0;a<r;++a)n=e[a],s=n[0],s==D.END_GEOMETRY?o=a:s==D.BEGIN_GEOMETRY&&(n[2]=a,r4(this.hitDetectionInstructions,o,a),o=-1)},t.prototype.setFillStrokeStyle=function(e,a){var r=this.state;if(e){var n=e.getColor();r.fillStyle=ce(n||Ae)}else r.fillStyle=void 0;if(a){var s=a.getColor();r.strokeStyle=ce(s||Za);var o=a.getLineCap();r.lineCap=o!==void 0?o:mn;var h=a.getLineDash();r.lineDash=h?h.slice():qa;var l=a.getLineDashOffset();r.lineDashOffset=l||Ha;var c=a.getLineJoin();r.lineJoin=c!==void 0?c:ta;var d=a.getWidth();r.lineWidth=d!==void 0?d:Qa;var u=a.getMiterLimit();r.miterLimit=u!==void 0?u:Xa,r.lineWidth>this.maxLineWidth&&(this.maxLineWidth=r.lineWidth,this.bufferedMaxExtent_=null)}else r.strokeStyle=void 0,r.lineCap=void 0,r.lineDash=null,r.lineDashOffset=void 0,r.lineJoin=void 0,r.lineWidth=void 0,r.miterLimit=void 0},t.prototype.createFill=function(e){var a=e.fillStyle,r=[D.SET_FILL_STYLE,a];return typeof a!="string"&&r.push(!0),r},t.prototype.applyStroke=function(e){this.instructions.push(this.createStroke(e))},t.prototype.createStroke=function(e){return[D.SET_STROKE_STYLE,e.strokeStyle,e.lineWidth*this.pixelRatio,e.lineCap,e.lineJoin,e.miterLimit,this.applyPixelRatio(e.lineDash),e.lineDashOffset*this.pixelRatio]},t.prototype.updateFillStyle=function(e,a){var r=e.fillStyle;(typeof r!="string"||e.currentFillStyle!=r)&&(r!==void 0&&this.instructions.push(a.call(this,e)),e.currentFillStyle=r)},t.prototype.updateStrokeStyle=function(e,a){var r=e.strokeStyle,n=e.lineCap,s=e.lineDash,o=e.lineDashOffset,h=e.lineJoin,l=e.lineWidth,c=e.miterLimit;(e.currentStrokeStyle!=r||e.currentLineCap!=n||s!=e.currentLineDash&&!na(e.currentLineDash,s)||e.currentLineDashOffset!=o||e.currentLineJoin!=h||e.currentLineWidth!=l||e.currentMiterLimit!=c)&&(r!==void 0&&a.call(this,e),e.currentStrokeStyle=r,e.currentLineCap=n,e.currentLineDash=s,e.currentLineDashOffset=o,e.currentLineJoin=h,e.currentLineWidth=l,e.currentMiterLimit=c)},t.prototype.endGeometry=function(e){this.beginGeometryInstruction1_[2]=this.instructions.length,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_[2]=this.hitDetectionInstructions.length,this.beginGeometryInstruction2_=null;var a=[D.END_GEOMETRY,e];this.instructions.push(a),this.hitDetectionInstructions.push(a)},t.prototype.getBufferedMaxExtent=function(){if(!this.bufferedMaxExtent_&&(this.bufferedMaxExtent_=ep(this.maxExtent),this.maxLineWidth>0)){var e=this.resolution*(this.maxLineWidth+1)/2;Ga(this.bufferedMaxExtent_,e,this.bufferedMaxExtent_)}return this.bufferedMaxExtent_},t}(sd);const fr=U_;var W_=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Y_=function(i){W_(t,i);function t(e,a,r,n){var s=i.call(this,e,a,r,n)||this;return s.hitDetectionImage_=null,s.image_=null,s.imagePixelRatio_=void 0,s.anchorX_=void 0,s.anchorY_=void 0,s.height_=void 0,s.opacity_=void 0,s.originX_=void 0,s.originY_=void 0,s.rotateWithView_=void 0,s.rotation_=void 0,s.scale_=void 0,s.width_=void 0,s.declutterImageWithText_=void 0,s}return t.prototype.drawPoint=function(e,a){if(!!this.image_){this.beginGeometry(e,a);var r=e.getFlatCoordinates(),n=e.getStride(),s=this.coordinates.length,o=this.appendFlatPointCoordinates(r,n);this.instructions.push([D.DRAW_IMAGE,s,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterImageWithText_]),this.hitDetectionInstructions.push([D.DRAW_IMAGE,s,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterImageWithText_]),this.endGeometry(a)}},t.prototype.drawMultiPoint=function(e,a){if(!!this.image_){this.beginGeometry(e,a);var r=e.getFlatCoordinates(),n=e.getStride(),s=this.coordinates.length,o=this.appendFlatPointCoordinates(r,n);this.instructions.push([D.DRAW_IMAGE,s,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterImageWithText_]),this.hitDetectionInstructions.push([D.DRAW_IMAGE,s,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterImageWithText_]),this.endGeometry(a)}},t.prototype.finish=function(){return this.reverseHitDetectionInstructions(),this.anchorX_=void 0,this.anchorY_=void 0,this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.height_=void 0,this.scale_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.width_=void 0,i.prototype.finish.call(this)},t.prototype.setImageStyle=function(e,a){var r=e.getAnchor(),n=e.getSize(),s=e.getHitDetectionImage(),o=e.getImage(this.pixelRatio),h=e.getOrigin();this.imagePixelRatio_=e.getPixelRatio(this.pixelRatio),this.anchorX_=r[0],this.anchorY_=r[1],this.hitDetectionImage_=s,this.image_=o,this.height_=n[1],this.opacity_=e.getOpacity(),this.originX_=h[0]*this.imagePixelRatio_,this.originY_=h[1]*this.imagePixelRatio_,this.rotateWithView_=e.getRotateWithView(),this.rotation_=e.getRotation(),this.scale_=e.getScaleArray(),this.width_=n[0],this.declutterImageWithText_=a},t}(fr);const q_=Y_;var H_=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),X_=function(i){H_(t,i);function t(e,a,r,n){return i.call(this,e,a,r,n)||this}return t.prototype.drawFlatCoordinates_=function(e,a,r,n){var s=this.coordinates.length,o=this.appendFlatLineCoordinates(e,a,r,n,!1,!1),h=[D.MOVE_TO_LINE_TO,s,o];return this.instructions.push(h),this.hitDetectionInstructions.push(h),r},t.prototype.drawLineString=function(e,a){var r=this.state,n=r.strokeStyle,s=r.lineWidth;if(!(n===void 0||s===void 0)){this.updateStrokeStyle(r,this.applyStroke),this.beginGeometry(e,a),this.hitDetectionInstructions.push([D.SET_STROKE_STYLE,r.strokeStyle,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,qa,Ha],hi);var o=e.getFlatCoordinates(),h=e.getStride();this.drawFlatCoordinates_(o,0,o.length,h),this.hitDetectionInstructions.push(Ve),this.endGeometry(a)}},t.prototype.drawMultiLineString=function(e,a){var r=this.state,n=r.strokeStyle,s=r.lineWidth;if(!(n===void 0||s===void 0)){this.updateStrokeStyle(r,this.applyStroke),this.beginGeometry(e,a),this.hitDetectionInstructions.push([D.SET_STROKE_STYLE,r.strokeStyle,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,r.lineDash,r.lineDashOffset],hi);for(var o=e.getEnds(),h=e.getFlatCoordinates(),l=e.getStride(),c=0,d=0,u=o.length;d<u;++d)c=this.drawFlatCoordinates_(h,c,o[d],l);this.hitDetectionInstructions.push(Ve),this.endGeometry(a)}},t.prototype.finish=function(){var e=this.state;return e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&this.instructions.push(Ve),this.reverseHitDetectionInstructions(),this.state=null,i.prototype.finish.call(this)},t.prototype.applyStroke=function(e){e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&(this.instructions.push(Ve),e.lastStroke=this.coordinates.length),e.lastStroke=0,i.prototype.applyStroke.call(this,e),this.instructions.push(hi)},t}(fr);const Z_=X_;var K_=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Q_=function(i){K_(t,i);function t(e,a,r,n){return i.call(this,e,a,r,n)||this}return t.prototype.drawFlatCoordinatess_=function(e,a,r,n){var s=this.state,o=s.fillStyle!==void 0,h=s.strokeStyle!==void 0,l=r.length;this.instructions.push(hi),this.hitDetectionInstructions.push(hi);for(var c=0;c<l;++c){var d=r[c],u=this.coordinates.length,v=this.appendFlatLineCoordinates(e,a,d,n,!0,!h),p=[D.MOVE_TO_LINE_TO,u,v];this.instructions.push(p),this.hitDetectionInstructions.push(p),h&&(this.instructions.push($h),this.hitDetectionInstructions.push($h)),a=d}return o&&(this.instructions.push(Nr),this.hitDetectionInstructions.push(Nr)),h&&(this.instructions.push(Ve),this.hitDetectionInstructions.push(Ve)),a},t.prototype.drawCircle=function(e,a){var r=this.state,n=r.fillStyle,s=r.strokeStyle;if(!(n===void 0&&s===void 0)){this.setFillStrokeStyles_(),this.beginGeometry(e,a),r.fillStyle!==void 0&&this.hitDetectionInstructions.push([D.SET_FILL_STYLE,Ae]),r.strokeStyle!==void 0&&this.hitDetectionInstructions.push([D.SET_STROKE_STYLE,r.strokeStyle,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,r.lineDash,r.lineDashOffset]);var o=e.getFlatCoordinates(),h=e.getStride(),l=this.coordinates.length;this.appendFlatLineCoordinates(o,0,o.length,h,!1,!1);var c=[D.CIRCLE,l];this.instructions.push(hi,c),this.hitDetectionInstructions.push(hi,c),r.fillStyle!==void 0&&(this.instructions.push(Nr),this.hitDetectionInstructions.push(Nr)),r.strokeStyle!==void 0&&(this.instructions.push(Ve),this.hitDetectionInstructions.push(Ve)),this.endGeometry(a)}},t.prototype.drawPolygon=function(e,a){var r=this.state,n=r.fillStyle,s=r.strokeStyle;if(!(n===void 0&&s===void 0)){this.setFillStrokeStyles_(),this.beginGeometry(e,a),r.fillStyle!==void 0&&this.hitDetectionInstructions.push([D.SET_FILL_STYLE,Ae]),r.strokeStyle!==void 0&&this.hitDetectionInstructions.push([D.SET_STROKE_STYLE,r.strokeStyle,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,r.lineDash,r.lineDashOffset]);var o=e.getEnds(),h=e.getOrientedFlatCoordinates(),l=e.getStride();this.drawFlatCoordinatess_(h,0,o,l),this.endGeometry(a)}},t.prototype.drawMultiPolygon=function(e,a){var r=this.state,n=r.fillStyle,s=r.strokeStyle;if(!(n===void 0&&s===void 0)){this.setFillStrokeStyles_(),this.beginGeometry(e,a),r.fillStyle!==void 0&&this.hitDetectionInstructions.push([D.SET_FILL_STYLE,Ae]),r.strokeStyle!==void 0&&this.hitDetectionInstructions.push([D.SET_STROKE_STYLE,r.strokeStyle,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,r.lineDash,r.lineDashOffset]);for(var o=e.getEndss(),h=e.getOrientedFlatCoordinates(),l=e.getStride(),c=0,d=0,u=o.length;d<u;++d)c=this.drawFlatCoordinatess_(h,c,o[d],l);this.endGeometry(a)}},t.prototype.finish=function(){this.reverseHitDetectionInstructions(),this.state=null;var e=this.tolerance;if(e!==0)for(var a=this.coordinates,r=0,n=a.length;r<n;++r)a[r]=ri(a[r],e);return i.prototype.finish.call(this)},t.prototype.setFillStrokeStyles_=function(){var e=this.state,a=e.fillStyle;a!==void 0&&this.updateFillStyle(e,this.createFill),e.strokeStyle!==void 0&&this.updateStrokeStyle(e,this.applyStroke)},t}(fr);const Vh=Q_,J_={POINT:"point",LINE:"line"};function t6(i,t,e,a,r){var n=e,s=e,o=0,h=0,l=e,c,d,u,v,p,f,g,m,_,y;for(d=e;d<a;d+=r){var M=t[d],b=t[d+1];p!==void 0&&(_=M-p,y=b-f,v=Math.sqrt(_*_+y*y),g!==void 0&&(h+=u,c=Math.acos((g*_+m*y)/(u*v)),c>i&&(h>o&&(o=h,n=l,s=d),h=0,l=d-r)),u=v,g=_,m=y),p=M,f=b}return h+=v,h>o?[l,d]:[n,s]}var e6=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Mn={left:0,end:0,center:.5,right:1,start:1,top:0,middle:.5,hanging:.2,alphabetic:.8,ideographic:.8,bottom:1},i6=function(i){e6(t,i);function t(e,a,r,n){var s=i.call(this,e,a,r,n)||this;return s.labels_=null,s.text_="",s.textOffsetX_=0,s.textOffsetY_=0,s.textRotateWithView_=void 0,s.textRotation_=0,s.textFillState_=null,s.fillStates={},s.textStrokeState_=null,s.strokeStates={},s.textState_={},s.textStates={},s.textKey_="",s.fillKey_="",s.strokeKey_="",s.declutterImageWithText_=void 0,s}return t.prototype.finish=function(){var e=i.prototype.finish.call(this);return e.textStates=this.textStates,e.fillStates=this.fillStates,e.strokeStates=this.strokeStates,e},t.prototype.drawText=function(e,a){var r=this.textFillState_,n=this.textStrokeState_,s=this.textState_;if(!(this.text_===""||!s||!r&&!n)){var o=this.coordinates,h=o.length,l=e.getType(),c=null,d=e.getStride();if(s.placement===J_.LINE&&(l==W.LINE_STRING||l==W.MULTI_LINE_STRING||l==W.POLYGON||l==W.MULTI_POLYGON)){if(!It(this.getBufferedMaxExtent(),e.getExtent()))return;var u=void 0;if(c=e.getFlatCoordinates(),l==W.LINE_STRING)u=[c.length];else if(l==W.MULTI_LINE_STRING)u=e.getEnds();else if(l==W.POLYGON)u=e.getEnds().slice(0,1);else if(l==W.MULTI_POLYGON){var v=e.getEndss();u=[];for(var p=0,f=v.length;p<f;++p)u.push(v[p][0])}this.beginGeometry(e,a);for(var g=s.textAlign,m=0,_=void 0,y=0,M=u.length;y<M;++y){if(g==null){var b=t6(s.maxAngle,c,m,u[y],d);m=b[0],_=b[1]}else _=u[y];for(var p=m;p<_;p+=d)o.push(c[p],c[p+1]);var z=o.length;m=u[y],this.drawChars_(h,z),h=z}this.endGeometry(a)}else{var A=s.overflow?null:[];switch(l){case W.POINT:case W.MULTI_POINT:c=e.getFlatCoordinates();break;case W.LINE_STRING:c=e.getFlatMidpoint();break;case W.CIRCLE:c=e.getCenter();break;case W.MULTI_LINE_STRING:c=e.getFlatMidpoints(),d=2;break;case W.POLYGON:c=e.getFlatInteriorPoint(),s.overflow||A.push(c[2]/this.resolution),d=3;break;case W.MULTI_POLYGON:var x=e.getFlatInteriorPoints();c=[];for(var p=0,f=x.length;p<f;p+=3)s.overflow||A.push(x[p+2]/this.resolution),c.push(x[p],x[p+1]);if(c.length===0)return;d=2;break}var z=this.appendFlatPointCoordinates(c,d);if(z===h)return;if(A&&(z-h)/2!==c.length/d){var C=h/2;A=A.filter(function(Q,H){var Z=o[(C+H)*2]===c[H*d]&&o[(C+H)*2+1]===c[H*d+1];return Z||--C,Z})}this.saveTextStates_(),(s.backgroundFill||s.backgroundStroke)&&(this.setFillStrokeStyle(s.backgroundFill,s.backgroundStroke),s.backgroundFill&&(this.updateFillStyle(this.state,this.createFill),this.hitDetectionInstructions.push(this.createFill(this.state))),s.backgroundStroke&&(this.updateStrokeStyle(this.state,this.applyStroke),this.hitDetectionInstructions.push(this.createStroke(this.state)))),this.beginGeometry(e,a);var T=s.padding;if(T!=oi&&(s.scale[0]<0||s.scale[1]<0)){var P=s.padding[0],k=s.padding[1],L=s.padding[2],U=s.padding[3];s.scale[0]<0&&(k=-k,U=-U),s.scale[1]<0&&(P=-P,L=-L),T=[P,k,L,U]}var N=this.pixelRatio;this.instructions.push([D.DRAW_IMAGE,h,z,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[1,1],NaN,this.declutterImageWithText_,T==oi?oi:T.map(function(Q){return Q*N}),!!s.backgroundFill,!!s.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,A]);var B=1/N;this.hitDetectionInstructions.push([D.DRAW_IMAGE,h,z,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[B,B],NaN,this.declutterImageWithText_,T,!!s.backgroundFill,!!s.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,A]),this.endGeometry(a)}}},t.prototype.saveTextStates_=function(){var e=this.textStrokeState_,a=this.textState_,r=this.textFillState_,n=this.strokeKey_;e&&(n in this.strokeStates||(this.strokeStates[n]={strokeStyle:e.strokeStyle,lineCap:e.lineCap,lineDashOffset:e.lineDashOffset,lineWidth:e.lineWidth,lineJoin:e.lineJoin,miterLimit:e.miterLimit,lineDash:e.lineDash}));var s=this.textKey_;s in this.textStates||(this.textStates[s]={font:a.font,textAlign:a.textAlign||Ka,textBaseline:a.textBaseline||_n,scale:a.scale});var o=this.fillKey_;r&&(o in this.fillStates||(this.fillStates[o]={fillStyle:r.fillStyle}))},t.prototype.drawChars_=function(e,a){var r=this.textStrokeState_,n=this.textState_,s=this.strokeKey_,o=this.textKey_,h=this.fillKey_;this.saveTextStates_();var l=this.pixelRatio,c=Mn[n.textBaseline],d=this.textOffsetY_*l,u=this.text_,v=r?r.lineWidth*Math.abs(n.scale[0])/2:0;this.instructions.push([D.DRAW_CHARS,e,a,c,n.overflow,h,n.maxAngle,l,d,s,v*l,u,o,1]),this.hitDetectionInstructions.push([D.DRAW_CHARS,e,a,c,n.overflow,h,n.maxAngle,1,d,s,v,u,o,1/l])},t.prototype.setTextStyle=function(e,a){var r,n,s;if(!e)this.text_="";else{var o=e.getFill();o?(n=this.textFillState_,n||(n={},this.textFillState_=n),n.fillStyle=ce(o.getColor()||Ae)):(n=null,this.textFillState_=n);var h=e.getStroke();if(!h)s=null,this.textStrokeState_=s;else{s=this.textStrokeState_,s||(s={},this.textStrokeState_=s);var l=h.getLineDash(),c=h.getLineDashOffset(),d=h.getWidth(),u=h.getMiterLimit();s.lineCap=h.getLineCap()||mn,s.lineDash=l?l.slice():qa,s.lineDashOffset=c===void 0?Ha:c,s.lineJoin=h.getLineJoin()||ta,s.lineWidth=d===void 0?Qa:d,s.miterLimit=u===void 0?Xa:u,s.strokeStyle=ce(h.getColor()||Za)}r=this.textState_;var v=e.getFont()||ed;x_(v);var p=e.getScaleArray();r.overflow=e.getOverflow(),r.font=v,r.maxAngle=e.getMaxAngle(),r.placement=e.getPlacement(),r.textAlign=e.getTextAlign(),r.textBaseline=e.getTextBaseline()||_n,r.backgroundFill=e.getBackgroundFill(),r.backgroundStroke=e.getBackgroundStroke(),r.padding=e.getPadding()||oi,r.scale=p===void 0?[1,1]:p;var f=e.getOffsetX(),g=e.getOffsetY(),m=e.getRotateWithView(),_=e.getRotation();this.text_=e.getText()||"",this.textOffsetX_=f===void 0?0:f,this.textOffsetY_=g===void 0?0:g,this.textRotateWithView_=m===void 0?!1:m,this.textRotation_=_===void 0?0:_,this.strokeKey_=s?(typeof s.strokeStyle=="string"?s.strokeStyle:nt(s.strokeStyle))+s.lineCap+s.lineDashOffset+"|"+s.lineWidth+s.lineJoin+s.miterLimit+"["+s.lineDash.join()+"]":"",this.textKey_=r.font+r.scale+(r.textAlign||"?")+(r.textBaseline||"?"),this.fillKey_=n?typeof n.fillStyle=="string"?n.fillStyle:"|"+nt(n.fillStyle):""}this.declutterImageWithText_=a},t}(fr);const a6=i6;var r6={Circle:Vh,Default:fr,Image:q_,LineString:Z_,Polygon:Vh,Text:a6},n6=function(){function i(t,e,a,r){this.tolerance_=t,this.maxExtent_=e,this.pixelRatio_=r,this.resolution_=a,this.buildersByZIndex_={}}return i.prototype.finish=function(){var t={};for(var e in this.buildersByZIndex_){t[e]=t[e]||{};var a=this.buildersByZIndex_[e];for(var r in a){var n=a[r].finish();t[e][r]=n}}return t},i.prototype.getBuilder=function(t,e){var a=t!==void 0?t.toString():"0",r=this.buildersByZIndex_[a];r===void 0&&(r={},this.buildersByZIndex_[a]=r);var n=r[e];if(n===void 0){var s=r6[e];n=new s(this.tolerance_,this.maxExtent_,this.resolution_,this.pixelRatio_),r[e]=n}return n},i}();const jh=n6,ct={CIRCLE:"Circle",DEFAULT:"Default",IMAGE:"Image",LINE_STRING:"LineString",POLYGON:"Polygon",TEXT:"Text"};function s6(i,t,e,a,r,n,s,o,h,l,c,d){var u=i[t],v=i[t+1],p=0,f=0,g=0,m=0;function _(){p=u,f=v,t+=a,u=i[t],v=i[t+1],m+=g,g=Math.sqrt((u-p)*(u-p)+(v-f)*(v-f))}do _();while(t<e-a&&m+g<n);for(var y=g===0?0:(n-m)/g,M=ai(p,u,y),b=ai(f,v,y),z=t-a,A=m,x=n+o*h(l,r,c);t<e-a&&m+g<x;)_();y=g===0?0:(x-m)/g;var C=ai(p,u,y),T=ai(f,v,y),P;if(d){var k=[M,b,C,T];Cc(k,0,4,2,d,k,k),P=k[0]>k[2]}else P=M>C;var L=Math.PI,U=[],N=z+a===t;t=z,g=0,m=A,u=i[t],v=i[t+1];var B;if(N){_(),B=Math.atan2(v-f,u-p),P&&(B+=B>0?-L:L);var F=(C+M)/2,Q=(T+b)/2;return U[0]=[F,Q,(x-n)/2,B,r],U}for(var H=0,Z=r.length;H<Z;){_();var ht=Math.atan2(v-f,u-p);if(P&&(ht+=ht>0?-L:L),B!==void 0){var E=ht-B;if(E+=E>L?-2*L:E<-L?2*L:0,Math.abs(E)>s)return null}B=ht;for(var dt=H,$=0;H<Z;++H){var ut=P?Z-H-1:H,Et=o*h(l,r[ut],c);if(t+a<e&&m+g<n+$+Et/2)break;$+=Et}if(H!==dt){var Bt=P?r.substring(Z-dt,Z-H):r.substring(dt,H);y=g===0?0:(n+$/2-m)/g;var F=ai(p,u,y),Q=ai(f,v,y);U.push([F,Q,$/2,ht,Bt]),n+=$}}return U}function o6(i,t,e,a){for(var r=i[t],n=i[t+1],s=0,o=t+a;o<e;o+=a){var h=i[o],l=i[o+1];s+=Math.sqrt((h-r)*(h-r)+(l-n)*(l-n)),r=h,n=l}return s}var Ii=Xt(),Oe=[],_e=[],ye=[],Pe=[];function Uh(i){return i[3].declutterBox}var h6=new RegExp("["+String.fromCharCode(1425)+"-"+String.fromCharCode(2303)+String.fromCharCode(64285)+"-"+String.fromCharCode(65023)+String.fromCharCode(65136)+"-"+String.fromCharCode(65276)+String.fromCharCode(67584)+"-"+String.fromCharCode(69631)+String.fromCharCode(124928)+"-"+String.fromCharCode(126975)+"]");function Wh(i,t){return(t==="start"||t==="end")&&!h6.test(i)&&(t=t==="start"?"left":"right"),Mn[t]}function l6(i,t,e){return e>0&&i.push(`
`,""),i.push(t,""),i}var c6=function(){function i(t,e,a,r){this.overlaps=a,this.pixelRatio=e,this.resolution=t,this.alignFill_,this.instructions=r.instructions,this.coordinates=r.coordinates,this.coordinateCache_={},this.renderedTransform_=qe(),this.hitDetectionInstructions=r.hitDetectionInstructions,this.pixelCoordinates_=null,this.viewRotation_=0,this.fillStates=r.fillStates||{},this.strokeStates=r.strokeStates||{},this.textStates=r.textStates||{},this.widths_={},this.labels_={}}return i.prototype.createLabel=function(t,e,a,r){var n=t+e+a+r;if(this.labels_[n])return this.labels_[n];var s=r?this.strokeStates[r]:null,o=a?this.fillStates[a]:null,h=this.textStates[e],l=this.pixelRatio,c=[h.scale[0]*l,h.scale[1]*l],d=Array.isArray(t),u=Wh(d?t[0]:t,h.textAlign||Ka),v=r&&s.lineWidth?s.lineWidth:0,p=d?t:t.split(`
`).reduce(l6,[]),f=w_(h,p),g=f.width,m=f.height,_=f.widths,y=f.heights,M=f.lineWidths,b=g+v,z=[],A=(b+2)*c[0],x=(m+v)*c[1],C={width:A<0?Math.floor(A):Math.ceil(A),height:x<0?Math.floor(x):Math.ceil(x),contextInstructions:z};if((c[0]!=1||c[1]!=1)&&z.push("scale",c),r){z.push("strokeStyle",s.strokeStyle),z.push("lineWidth",v),z.push("lineCap",s.lineCap),z.push("lineJoin",s.lineJoin),z.push("miterLimit",s.miterLimit);var T=Bn?OffscreenCanvasRenderingContext2D:CanvasRenderingContext2D;T.prototype.setLineDash&&(z.push("setLineDash",[s.lineDash]),z.push("lineDashOffset",s.lineDashOffset))}a&&z.push("fillStyle",o.fillStyle),z.push("textBaseline","middle"),z.push("textAlign","center");for(var P=.5-u,k=u*b+P*v,L=[],U=[],N=0,B=0,F=0,Q=0,H,Z=0,ht=p.length;Z<ht;Z+=2){var E=p[Z];if(E===`
`){B+=N,N=0,k=u*b+P*v,++Q;continue}var dt=p[Z+1]||h.font;dt!==H&&(r&&L.push("font",dt),a&&U.push("font",dt),H=dt),N=Math.max(N,y[F]);var $=[E,k+P*_[F]+u*(_[F]-M[Q]),.5*(v+N)+B];k+=_[F],r&&L.push("strokeText",$),a&&U.push("fillText",$),++F}return Array.prototype.push.apply(z,L),Array.prototype.push.apply(z,U),this.labels_[n]=C,C},i.prototype.replayTextBackground_=function(t,e,a,r,n,s,o){t.beginPath(),t.moveTo.apply(t,e),t.lineTo.apply(t,a),t.lineTo.apply(t,r),t.lineTo.apply(t,n),t.lineTo.apply(t,e),s&&(this.alignFill_=s[2],this.fill_(t)),o&&(this.setStrokeStyle_(t,o),t.stroke())},i.prototype.calculateImageOrLabelDimensions_=function(t,e,a,r,n,s,o,h,l,c,d,u,v,p,f,g){o*=u[0],h*=u[1];var m=a-o,_=r-h,y=n+l>t?t-l:n,M=s+c>e?e-c:s,b=p[3]+y*u[0]+p[1],z=p[0]+M*u[1]+p[2],A=m-p[3],x=_-p[0];(f||d!==0)&&(Oe[0]=A,Pe[0]=A,Oe[1]=x,_e[1]=x,_e[0]=A+b,ye[0]=_e[0],ye[1]=x+z,Pe[1]=ye[1]);var C;return d!==0?(C=fe(qe(),a,r,1,1,d,-a,-r),mt(C,Oe),mt(C,_e),mt(C,ye),mt(C,Pe),ve(Math.min(Oe[0],_e[0],ye[0],Pe[0]),Math.min(Oe[1],_e[1],ye[1],Pe[1]),Math.max(Oe[0],_e[0],ye[0],Pe[0]),Math.max(Oe[1],_e[1],ye[1],Pe[1]),Ii)):ve(Math.min(A,A+b),Math.min(x,x+z),Math.max(A,A+b),Math.max(x,x+z),Ii),v&&(m=Math.round(m),_=Math.round(_)),{drawImageX:m,drawImageY:_,drawImageW:y,drawImageH:M,originX:l,originY:c,declutterBox:{minX:Ii[0],minY:Ii[1],maxX:Ii[2],maxY:Ii[3],value:g},canvasTransform:C,scale:u}},i.prototype.replayImageOrLabel_=function(t,e,a,r,n,s,o){var h=!!(s||o),l=r.declutterBox,c=t.canvas,d=o?o[2]*r.scale[0]/2:0,u=l.minX-d<=c.width/e&&l.maxX+d>=0&&l.minY-d<=c.height/e&&l.maxY+d>=0;return u&&(h&&this.replayTextBackground_(t,Oe,_e,ye,Pe,s,o),E_(t,r.canvasTransform,n,a,r.originX,r.originY,r.drawImageW,r.drawImageH,r.drawImageX,r.drawImageY,r.scale)),!0},i.prototype.fill_=function(t){if(this.alignFill_){var e=mt(this.renderedTransform_,[0,0]),a=512*this.pixelRatio;t.save(),t.translate(e[0]%a,e[1]%a),t.rotate(this.viewRotation_)}t.fill(),this.alignFill_&&t.restore()},i.prototype.setStrokeStyle_=function(t,e){t.strokeStyle=e[1],t.lineWidth=e[2],t.lineCap=e[3],t.lineJoin=e[4],t.miterLimit=e[5],t.setLineDash&&(t.lineDashOffset=e[7],t.setLineDash(e[6]))},i.prototype.drawLabelWithPointPlacement_=function(t,e,a,r){var n=this.textStates[e],s=this.createLabel(t,e,r,a),o=this.strokeStates[a],h=this.pixelRatio,l=Wh(Array.isArray(t)?t[0]:t,n.textAlign||Ka),c=Mn[n.textBaseline||_n],d=o&&o.lineWidth?o.lineWidth:0,u=s.width/h-2*n.scale[0],v=l*u+2*(.5-l)*d,p=c*s.height/h+2*(.5-c)*d;return{label:s,anchorX:v,anchorY:p}},i.prototype.execute_=function(t,e,a,r,n,s,o,h){var l;this.pixelCoordinates_&&na(a,this.renderedTransform_)?l=this.pixelCoordinates_:(this.pixelCoordinates_||(this.pixelCoordinates_=[]),l=ui(this.coordinates,0,this.coordinates.length,2,a,this.pixelCoordinates_),y4(this.renderedTransform_,a));for(var c=0,d=r.length,u=0,v,p,f,g,m,_,y,M,b,z,A,x,C=0,T=0,P=null,k=null,L=this.coordinateCache_,U=this.viewRotation_,N=Math.round(Math.atan2(-a[1],a[0])*1e12)/1e12,B={context:t,pixelRatio:this.pixelRatio,resolution:this.resolution,rotation:U},F=this.instructions!=r||this.overlaps?0:200,Q,H,Z,ht;c<d;){var E=r[c],dt=E[0];switch(dt){case D.BEGIN_GEOMETRY:Q=E[1],ht=E[3],Q.getGeometry()?o!==void 0&&!It(o,ht.getExtent())?c=E[2]+1:++c:c=E[2];break;case D.BEGIN_PATH:C>F&&(this.fill_(t),C=0),T>F&&(t.stroke(),T=0),!C&&!T&&(t.beginPath(),g=NaN,m=NaN),++c;break;case D.CIRCLE:u=E[1];var $=l[u],ut=l[u+1],Et=l[u+2],Bt=l[u+3],Ot=Et-$,Gt=Bt-ut,_i=Math.sqrt(Ot*Ot+Gt*Gt);t.moveTo($+_i,ut),t.arc($,ut,_i,0,2*Math.PI,!0),++c;break;case D.CLOSE_PATH:t.closePath(),++c;break;case D.CUSTOM:u=E[1],v=E[2];var ne=E[3],gr=E[4],mr=E.length==6?E[5]:void 0;B.geometry=ne,B.feature=Q,c in L||(L[c]=[]);var Ce=L[c];mr?mr(l,u,v,2,Ce):(Ce[0]=l[u],Ce[1]=l[u+1],Ce.length=2),gr(Ce,B),++c;break;case D.DRAW_IMAGE:u=E[1],v=E[2],M=E[3],p=E[4],f=E[5];var yi=E[6],_r=E[7],sa=E[8],yr=E[9],Je=E[10],oa=E[11],Mr=E[12],Mi=E[13],Ie=E[14];if(!M&&E.length>=19){b=E[18],z=E[19],A=E[20],x=E[21];var bi=this.drawLabelWithPointPlacement_(b,z,A,x);M=bi.label,E[3]=M;var Vn=E[22];p=(bi.anchorX-Vn)*this.pixelRatio,E[4]=p;var br=E[23];f=(bi.anchorY-br)*this.pixelRatio,E[5]=f,yi=M.height,E[6]=yi,Mi=M.width,E[13]=Mi}var ha=void 0;E.length>24&&(ha=E[24]);var ge=void 0,se=void 0,ti=void 0;E.length>16?(ge=E[15],se=E[16],ti=E[17]):(ge=oi,se=!1,ti=!1),Je&&N?oa+=U:!Je&&!N&&(oa-=U);for(var la=0;u<v;u+=2)if(!(ha&&ha[la++]<Mi/this.pixelRatio)){var Pt=this.calculateImageOrLabelDimensions_(M.width,M.height,l[u],l[u+1],Mi,yi,p,f,sa,yr,oa,Mr,n,ge,se||ti,Q),zr=[t,e,M,Pt,_r,se?P:null,ti?k:null],Mt=void 0,zi=void 0;if(h&&Ie){var ei=v-u;if(!Ie[ei]){Ie[ei]=zr;continue}if(Mt=Ie[ei],delete Ie[ei],zi=Uh(Mt),h.collides(zi))continue}h&&h.collides(Pt.declutterBox)||(Mt&&(h&&h.insert(zi),this.replayImageOrLabel_.apply(this,Mt)),h&&h.insert(Pt.declutterBox),this.replayImageOrLabel_.apply(this,zr))}++c;break;case D.DRAW_CHARS:var Bs=E[1],Gs=E[2],jn=E[3],Dd=E[4];x=E[5];var Nd=E[6],$s=E[7],Vs=E[8];A=E[9];var Un=E[10];b=E[11],z=E[12];var js=[E[13],E[13]],Wn=this.textStates[z],ca=Wn.font,da=[Wn.scale[0]*$s,Wn.scale[1]*$s],ua=void 0;ca in this.widths_?ua=this.widths_[ca]:(ua={},this.widths_[ca]=ua);var Us=o6(l,Bs,Gs,2),Ws=Math.abs(da[0])*Nh(ca,b,ua);if(Dd||Ws<=Us){var Bd=this.textStates[z].textAlign,Gd=(Us-Ws)*Mn[Bd],va=s6(l,Bs,Gs,2,b,Gd,Nd,Math.abs(da[0]),Nh,ca,ua,N?0:this.viewRotation_);t:if(va){var pa=[],Se=void 0,xr=void 0,Ar=void 0,Lt=void 0,jt=void 0;if(A)for(Se=0,xr=va.length;Se<xr;++Se){jt=va[Se],Ar=jt[4],Lt=this.createLabel(Ar,z,"",A),p=jt[2]+(da[0]<0?-Un:Un),f=jn*Lt.height+(.5-jn)*2*Un*da[1]/da[0]-Vs;var Pt=this.calculateImageOrLabelDimensions_(Lt.width,Lt.height,jt[0],jt[1],Lt.width,Lt.height,p,f,0,0,jt[3],js,!1,oi,!1,Q);if(h&&h.collides(Pt.declutterBox))break t;pa.push([t,e,Lt,Pt,1,null,null])}if(x)for(Se=0,xr=va.length;Se<xr;++Se){jt=va[Se],Ar=jt[4],Lt=this.createLabel(Ar,z,x,""),p=jt[2],f=jn*Lt.height-Vs;var Pt=this.calculateImageOrLabelDimensions_(Lt.width,Lt.height,jt[0],jt[1],Lt.width,Lt.height,p,f,0,0,jt[3],js,!1,oi,!1,Q);if(h&&h.collides(Pt.declutterBox))break t;pa.push([t,e,Lt,Pt,1,null,null])}h&&h.load(pa.map(Uh));for(var Yn=0,$d=pa.length;Yn<$d;++Yn)this.replayImageOrLabel_.apply(this,pa[Yn])}}++c;break;case D.END_GEOMETRY:if(s!==void 0){Q=E[1];var Ys=s(Q,ht);if(Ys)return Ys}++c;break;case D.FILL:F?C++:this.fill_(t),++c;break;case D.MOVE_TO_LINE_TO:for(u=E[1],v=E[2],H=l[u],Z=l[u+1],_=H+.5|0,y=Z+.5|0,(_!==g||y!==m)&&(t.moveTo(H,Z),g=_,m=y),u+=2;u<v;u+=2)H=l[u],Z=l[u+1],_=H+.5|0,y=Z+.5|0,(u==v-2||_!==g||y!==m)&&(t.lineTo(H,Z),g=_,m=y);++c;break;case D.SET_FILL_STYLE:P=E,this.alignFill_=E[2],C&&(this.fill_(t),C=0,T&&(t.stroke(),T=0)),t.fillStyle=E[1],++c;break;case D.SET_STROKE_STYLE:k=E,T&&(t.stroke(),T=0),this.setStrokeStyle_(t,E),++c;break;case D.STROKE:F?T++:t.stroke(),++c;break;default:++c;break}}C&&this.fill_(t),T&&t.stroke()},i.prototype.execute=function(t,e,a,r,n,s){this.viewRotation_=r,this.execute_(t,e,a,this.instructions,n,void 0,void 0,s)},i.prototype.executeHitDetection=function(t,e,a,r,n){return this.viewRotation_=a,this.execute_(t,1,e,this.hitDetectionInstructions,!0,r,n)},i}();const d6=c6;var c0=[ct.POLYGON,ct.CIRCLE,ct.LINE_STRING,ct.IMAGE,ct.TEXT,ct.DEFAULT],u6=function(){function i(t,e,a,r,n,s){this.maxExtent_=t,this.overlaps_=r,this.pixelRatio_=a,this.resolution_=e,this.renderBuffer_=s,this.executorsByZIndex_={},this.hitDetectionContext_=null,this.hitDetectionTransform_=qe(),this.createExecutors_(n)}return i.prototype.clip=function(t,e){var a=this.getClipCoords(e);t.beginPath(),t.moveTo(a[0],a[1]),t.lineTo(a[2],a[3]),t.lineTo(a[4],a[5]),t.lineTo(a[6],a[7]),t.clip()},i.prototype.createExecutors_=function(t){for(var e in t){var a=this.executorsByZIndex_[e];a===void 0&&(a={},this.executorsByZIndex_[e]=a);var r=t[e];for(var n in r){var s=r[n];a[n]=new d6(this.resolution_,this.pixelRatio_,this.overlaps_,s)}}},i.prototype.hasExecutors=function(t){for(var e in this.executorsByZIndex_)for(var a=this.executorsByZIndex_[e],r=0,n=t.length;r<n;++r)if(t[r]in a)return!0;return!1},i.prototype.forEachFeatureAtCoordinate=function(t,e,a,r,n,s){r=Math.round(r);var o=r*2+1,h=fe(this.hitDetectionTransform_,r+.5,r+.5,1/e,-1/e,-a,-t[0],-t[1]),l=!this.hitDetectionContext_;l&&(this.hitDetectionContext_=Kt(o,o));var c=this.hitDetectionContext_;c.canvas.width!==o||c.canvas.height!==o?(c.canvas.width=o,c.canvas.height=o):l||c.clearRect(0,0,o,o);var d;this.renderBuffer_!==void 0&&(d=Xt(),Fa(d,t),Ga(d,e*(this.renderBuffer_+r),d));var u=v6(r),v;function p(z,A){for(var x=c.getImageData(0,0,o,o).data,C=0,T=u.length;C<T;C++)if(x[u[C]]>0){if(!s||v!==ct.IMAGE&&v!==ct.TEXT||s.indexOf(z)!==-1){var P=(u[C]-3)/4,k=r-P%o,L=r-(P/o|0),U=n(z,A,k*k+L*L);if(U)return U}c.clearRect(0,0,o,o);break}}var f=Object.keys(this.executorsByZIndex_).map(Number);f.sort(Qi);var g,m,_,y,M;for(g=f.length-1;g>=0;--g){var b=f[g].toString();for(_=this.executorsByZIndex_[b],m=c0.length-1;m>=0;--m)if(v=c0[m],y=_[v],y!==void 0&&(M=y.executeHitDetection(c,h,a,p,d),M))return M}},i.prototype.getClipCoords=function(t){var e=this.maxExtent_;if(!e)return null;var a=e[0],r=e[1],n=e[2],s=e[3],o=[a,r,a,s,n,s,n,r];return ui(o,0,8,2,t,o),o},i.prototype.isEmpty=function(){return Ba(this.executorsByZIndex_)},i.prototype.execute=function(t,e,a,r,n,s,o){var h=Object.keys(this.executorsByZIndex_).map(Number);h.sort(Qi),this.maxExtent_&&(t.save(),this.clip(t,a));var l=s||c0,c,d,u,v,p,f;for(o&&h.reverse(),c=0,d=h.length;c<d;++c){var g=h[c].toString();for(p=this.executorsByZIndex_[g],u=0,v=l.length;u<v;++u){var m=l[u];f=p[m],f!==void 0&&f.execute(t,e,a,r,n,o)}}this.maxExtent_&&t.restore()},i}(),d0={};function v6(i){if(d0[i]!==void 0)return d0[i];for(var t=i*2+1,e=i*i,a=new Array(e+1),r=0;r<=i;++r)for(var n=0;n<=i;++n){var s=r*r+n*n;if(s>e)break;var o=a[s];o||(o=[],a[s]=o),o.push(((i+r)*t+(i+n))*4+3),r>0&&o.push(((i-r)*t+(i+n))*4+3),n>0&&(o.push(((i+r)*t+(i-n))*4+3),r>0&&o.push(((i-r)*t+(i-n))*4+3))}for(var h=[],r=0,l=a.length;r<l;++r)a[r]&&h.push.apply(h,a[r]);return d0[i]=h,h}const Yh=u6;var p6=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),f6=function(i){p6(t,i);function t(e,a,r,n,s,o,h){var l=i.call(this)||this;return l.context_=e,l.pixelRatio_=a,l.extent_=r,l.transform_=n,l.viewRotation_=s,l.squaredTolerance_=o,l.userTransform_=h,l.contextFillState_=null,l.contextStrokeState_=null,l.contextTextState_=null,l.fillState_=null,l.strokeState_=null,l.image_=null,l.imageAnchorX_=0,l.imageAnchorY_=0,l.imageHeight_=0,l.imageOpacity_=0,l.imageOriginX_=0,l.imageOriginY_=0,l.imageRotateWithView_=!1,l.imageRotation_=0,l.imageScale_=[0,0],l.imageWidth_=0,l.text_="",l.textOffsetX_=0,l.textOffsetY_=0,l.textRotateWithView_=!1,l.textRotation_=0,l.textScale_=[0,0],l.textFillState_=null,l.textStrokeState_=null,l.textState_=null,l.pixelCoordinates_=[],l.tmpLocalTransform_=qe(),l}return t.prototype.drawImages_=function(e,a,r,n){if(!!this.image_){var s=ui(e,a,r,n,this.transform_,this.pixelCoordinates_),o=this.context_,h=this.tmpLocalTransform_,l=o.globalAlpha;this.imageOpacity_!=1&&(o.globalAlpha=l*this.imageOpacity_);var c=this.imageRotation_;this.imageRotateWithView_&&(c+=this.viewRotation_);for(var d=0,u=s.length;d<u;d+=2){var v=s[d]-this.imageAnchorX_,p=s[d+1]-this.imageAnchorY_;if(c!==0||this.imageScale_[0]!=1||this.imageScale_[1]!=1){var f=v+this.imageAnchorX_,g=p+this.imageAnchorY_;fe(h,f,g,1,1,c,-f,-g),o.setTransform.apply(o,h),o.translate(f,g),o.scale(this.imageScale_[0],this.imageScale_[1]),o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,-this.imageAnchorX_,-this.imageAnchorY_,this.imageWidth_,this.imageHeight_),o.setTransform(1,0,0,1,0,0)}else o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,v,p,this.imageWidth_,this.imageHeight_)}this.imageOpacity_!=1&&(o.globalAlpha=l)}},t.prototype.drawText_=function(e,a,r,n){if(!(!this.textState_||this.text_==="")){this.textFillState_&&this.setContextFillState_(this.textFillState_),this.textStrokeState_&&this.setContextStrokeState_(this.textStrokeState_),this.setContextTextState_(this.textState_);var s=ui(e,a,r,n,this.transform_,this.pixelCoordinates_),o=this.context_,h=this.textRotation_;for(this.textRotateWithView_&&(h+=this.viewRotation_);a<r;a+=n){var l=s[a]+this.textOffsetX_,c=s[a+1]+this.textOffsetY_;if(h!==0||this.textScale_[0]!=1||this.textScale_[1]!=1){var d=fe(this.tmpLocalTransform_,l,c,1,1,h,-l,-c);o.setTransform.apply(o,d),o.translate(l,c),o.scale(this.textScale_[0],this.textScale_[1]),this.textStrokeState_&&o.strokeText(this.text_,0,0),this.textFillState_&&o.fillText(this.text_,0,0),o.setTransform(1,0,0,1,0,0)}else this.textStrokeState_&&o.strokeText(this.text_,l,c),this.textFillState_&&o.fillText(this.text_,l,c)}}},t.prototype.moveToLineTo_=function(e,a,r,n,s){var o=this.context_,h=ui(e,a,r,n,this.transform_,this.pixelCoordinates_);o.moveTo(h[0],h[1]);var l=h.length;s&&(l-=2);for(var c=2;c<l;c+=2)o.lineTo(h[c],h[c+1]);return s&&o.closePath(),r},t.prototype.drawRings_=function(e,a,r,n){for(var s=0,o=r.length;s<o;++s)a=this.moveToLineTo_(e,a,r[s],n,!0);return a},t.prototype.drawCircle=function(e){if(!!It(this.extent_,e.getExtent())){if(this.fillState_||this.strokeState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);var a=T4(e,this.transform_,this.pixelCoordinates_),r=a[2]-a[0],n=a[3]-a[1],s=Math.sqrt(r*r+n*n),o=this.context_;o.beginPath(),o.arc(a[0],a[1],s,0,2*Math.PI),this.fillState_&&o.fill(),this.strokeState_&&o.stroke()}this.text_!==""&&this.drawText_(e.getCenter(),0,2,2)}},t.prototype.setStyle=function(e){this.setFillStrokeStyle(e.getFill(),e.getStroke()),this.setImageStyle(e.getImage()),this.setTextStyle(e.getText())},t.prototype.setTransform=function(e){this.transform_=e},t.prototype.drawGeometry=function(e){var a=e.getType();switch(a){case W.POINT:this.drawPoint(e);break;case W.LINE_STRING:this.drawLineString(e);break;case W.POLYGON:this.drawPolygon(e);break;case W.MULTI_POINT:this.drawMultiPoint(e);break;case W.MULTI_LINE_STRING:this.drawMultiLineString(e);break;case W.MULTI_POLYGON:this.drawMultiPolygon(e);break;case W.GEOMETRY_COLLECTION:this.drawGeometryCollection(e);break;case W.CIRCLE:this.drawCircle(e);break}},t.prototype.drawFeature=function(e,a){var r=a.getGeometryFunction()(e);!r||!It(this.extent_,r.getExtent())||(this.setStyle(a),this.drawGeometry(r))},t.prototype.drawGeometryCollection=function(e){for(var a=e.getGeometriesArray(),r=0,n=a.length;r<n;++r)this.drawGeometry(a[r])},t.prototype.drawPoint=function(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));var a=e.getFlatCoordinates(),r=e.getStride();this.image_&&this.drawImages_(a,0,a.length,r),this.text_!==""&&this.drawText_(a,0,a.length,r)},t.prototype.drawMultiPoint=function(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));var a=e.getFlatCoordinates(),r=e.getStride();this.image_&&this.drawImages_(a,0,a.length,r),this.text_!==""&&this.drawText_(a,0,a.length,r)},t.prototype.drawLineString=function(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!It(this.extent_,e.getExtent())){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);var a=this.context_,r=e.getFlatCoordinates();a.beginPath(),this.moveToLineTo_(r,0,r.length,e.getStride(),!1),a.stroke()}if(this.text_!==""){var n=e.getFlatMidpoint();this.drawText_(n,0,2,2)}}},t.prototype.drawMultiLineString=function(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));var a=e.getExtent();if(!!It(this.extent_,a)){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);var r=this.context_,n=e.getFlatCoordinates(),s=0,o=e.getEnds(),h=e.getStride();r.beginPath();for(var l=0,c=o.length;l<c;++l)s=this.moveToLineTo_(n,s,o[l],h,!1);r.stroke()}if(this.text_!==""){var d=e.getFlatMidpoints();this.drawText_(d,0,d.length,2)}}},t.prototype.drawPolygon=function(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!It(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);var a=this.context_;a.beginPath(),this.drawRings_(e.getOrientedFlatCoordinates(),0,e.getEnds(),e.getStride()),this.fillState_&&a.fill(),this.strokeState_&&a.stroke()}if(this.text_!==""){var r=e.getFlatInteriorPoint();this.drawText_(r,0,2,2)}}},t.prototype.drawMultiPolygon=function(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!It(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);var a=this.context_,r=e.getOrientedFlatCoordinates(),n=0,s=e.getEndss(),o=e.getStride();a.beginPath();for(var h=0,l=s.length;h<l;++h){var c=s[h];n=this.drawRings_(r,n,c,o)}this.fillState_&&a.fill(),this.strokeState_&&a.stroke()}if(this.text_!==""){var d=e.getFlatInteriorPoints();this.drawText_(d,0,d.length,2)}}},t.prototype.setContextFillState_=function(e){var a=this.context_,r=this.contextFillState_;r?r.fillStyle!=e.fillStyle&&(r.fillStyle=e.fillStyle,a.fillStyle=e.fillStyle):(a.fillStyle=e.fillStyle,this.contextFillState_={fillStyle:e.fillStyle})},t.prototype.setContextStrokeState_=function(e){var a=this.context_,r=this.contextStrokeState_;r?(r.lineCap!=e.lineCap&&(r.lineCap=e.lineCap,a.lineCap=e.lineCap),a.setLineDash&&(na(r.lineDash,e.lineDash)||a.setLineDash(r.lineDash=e.lineDash),r.lineDashOffset!=e.lineDashOffset&&(r.lineDashOffset=e.lineDashOffset,a.lineDashOffset=e.lineDashOffset)),r.lineJoin!=e.lineJoin&&(r.lineJoin=e.lineJoin,a.lineJoin=e.lineJoin),r.lineWidth!=e.lineWidth&&(r.lineWidth=e.lineWidth,a.lineWidth=e.lineWidth),r.miterLimit!=e.miterLimit&&(r.miterLimit=e.miterLimit,a.miterLimit=e.miterLimit),r.strokeStyle!=e.strokeStyle&&(r.strokeStyle=e.strokeStyle,a.strokeStyle=e.strokeStyle)):(a.lineCap=e.lineCap,a.setLineDash&&(a.setLineDash(e.lineDash),a.lineDashOffset=e.lineDashOffset),a.lineJoin=e.lineJoin,a.lineWidth=e.lineWidth,a.miterLimit=e.miterLimit,a.strokeStyle=e.strokeStyle,this.contextStrokeState_={lineCap:e.lineCap,lineDash:e.lineDash,lineDashOffset:e.lineDashOffset,lineJoin:e.lineJoin,lineWidth:e.lineWidth,miterLimit:e.miterLimit,strokeStyle:e.strokeStyle})},t.prototype.setContextTextState_=function(e){var a=this.context_,r=this.contextTextState_,n=e.textAlign?e.textAlign:Ka;r?(r.font!=e.font&&(r.font=e.font,a.font=e.font),r.textAlign!=n&&(r.textAlign=n,a.textAlign=n),r.textBaseline!=e.textBaseline&&(r.textBaseline=e.textBaseline,a.textBaseline=e.textBaseline)):(a.font=e.font,a.textAlign=n,a.textBaseline=e.textBaseline,this.contextTextState_={font:e.font,textAlign:n,textBaseline:e.textBaseline})},t.prototype.setFillStrokeStyle=function(e,a){var r=this;if(!e)this.fillState_=null;else{var n=e.getColor();this.fillState_={fillStyle:ce(n||Ae)}}if(!a)this.strokeState_=null;else{var s=a.getColor(),o=a.getLineCap(),h=a.getLineDash(),l=a.getLineDashOffset(),c=a.getLineJoin(),d=a.getWidth(),u=a.getMiterLimit(),v=h||qa;this.strokeState_={lineCap:o!==void 0?o:mn,lineDash:this.pixelRatio_===1?v:v.map(function(p){return p*r.pixelRatio_}),lineDashOffset:(l||Ha)*this.pixelRatio_,lineJoin:c!==void 0?c:ta,lineWidth:(d!==void 0?d:Qa)*this.pixelRatio_,miterLimit:u!==void 0?u:Xa,strokeStyle:ce(s||Za)}}},t.prototype.setImageStyle=function(e){var a;if(!e||!(a=e.getSize())){this.image_=null;return}var r=e.getAnchor(),n=e.getOrigin();this.image_=e.getImage(this.pixelRatio_),this.imageAnchorX_=r[0]*this.pixelRatio_,this.imageAnchorY_=r[1]*this.pixelRatio_,this.imageHeight_=a[1]*this.pixelRatio_,this.imageOpacity_=e.getOpacity(),this.imageOriginX_=n[0],this.imageOriginY_=n[1],this.imageRotateWithView_=e.getRotateWithView(),this.imageRotation_=e.getRotation(),this.imageScale_=e.getScaleArray(),this.imageWidth_=a[0]*this.pixelRatio_},t.prototype.setTextStyle=function(e){if(!e)this.text_="";else{var a=e.getFill();if(!a)this.textFillState_=null;else{var r=a.getColor();this.textFillState_={fillStyle:ce(r||Ae)}}var n=e.getStroke();if(!n)this.textStrokeState_=null;else{var s=n.getColor(),o=n.getLineCap(),h=n.getLineDash(),l=n.getLineDashOffset(),c=n.getLineJoin(),d=n.getWidth(),u=n.getMiterLimit();this.textStrokeState_={lineCap:o!==void 0?o:mn,lineDash:h||qa,lineDashOffset:l||Ha,lineJoin:c!==void 0?c:ta,lineWidth:d!==void 0?d:Qa,miterLimit:u!==void 0?u:Xa,strokeStyle:ce(s||Za)}}var v=e.getFont(),p=e.getOffsetX(),f=e.getOffsetY(),g=e.getRotateWithView(),m=e.getRotation(),_=e.getScaleArray(),y=e.getText(),M=e.getTextAlign(),b=e.getTextBaseline();this.textState_={font:v!==void 0?v:ed,textAlign:M!==void 0?M:Ka,textBaseline:b!==void 0?b:_n},this.text_=y!==void 0?Array.isArray(y)?y.reduce(function(z,A,x){return z+=x%2?" ":A},""):y:"",this.textOffsetX_=p!==void 0?this.pixelRatio_*p:0,this.textOffsetY_=f!==void 0?this.pixelRatio_*f:0,this.textRotateWithView_=g!==void 0?g:!1,this.textRotation_=m!==void 0?m:0,this.textScale_=[this.pixelRatio_*_[0],this.pixelRatio_*_[1]]}},t}(sd);const g6=f6,De={FRACTION:"fraction",PIXELS:"pixels"},Ut={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"};var m6=function(){function i(){this.cache_={},this.cacheSize_=0,this.maxCacheSize_=32}return i.prototype.clear=function(){this.cache_={},this.cacheSize_=0},i.prototype.canExpireCache=function(){return this.cacheSize_>this.maxCacheSize_},i.prototype.expire=function(){if(this.canExpireCache()){var t=0;for(var e in this.cache_){var a=this.cache_[e];(t++&3)===0&&!a.hasListener()&&(delete this.cache_[e],--this.cacheSize_)}}},i.prototype.get=function(t,e,a){var r=qh(t,e,a);return r in this.cache_?this.cache_[r]:null},i.prototype.set=function(t,e,a,r){var n=qh(t,e,a);this.cache_[n]=r,++this.cacheSize_},i.prototype.setSize=function(t){this.maxCacheSize_=t,this.expire()},i}();function qh(i,t,e){var a=e?Dc(e):"null";return t+":"+i+":"+a}var Hh=new m6,_6=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),ba=null,y6=function(i){_6(t,i);function t(e,a,r,n,s,o){var h=i.call(this)||this;return h.hitDetectionImage_=null,h.image_=e||new Image,n!==null&&(h.image_.crossOrigin=n),h.canvas_={},h.color_=o,h.unlisten_=null,h.imageState_=s,h.size_=r,h.src_=a,h.tainted_,h}return t.prototype.isTainted_=function(){if(this.tainted_===void 0&&this.imageState_===q.LOADED){ba||(ba=Kt(1,1)),ba.drawImage(this.image_,0,0);try{ba.getImageData(0,0,1,1),this.tainted_=!1}catch{ba=null,this.tainted_=!0}}return this.tainted_===!0},t.prototype.dispatchChangeEvent_=function(){this.dispatchEvent(zt.CHANGE)},t.prototype.handleImageError_=function(){this.imageState_=q.ERROR,this.unlistenImage_(),this.dispatchChangeEvent_()},t.prototype.handleImageLoad_=function(){this.imageState_=q.LOADED,this.size_?(this.image_.width=this.size_[0],this.image_.height=this.size_[1]):this.size_=[this.image_.width,this.image_.height],this.unlistenImage_(),this.dispatchChangeEvent_()},t.prototype.getImage=function(e){return this.replaceColor_(e),this.canvas_[e]?this.canvas_[e]:this.image_},t.prototype.getPixelRatio=function(e){return this.replaceColor_(e),this.canvas_[e]?e:1},t.prototype.getImageState=function(){return this.imageState_},t.prototype.getHitDetectionImage=function(){if(!this.hitDetectionImage_)if(this.isTainted_()){var e=this.size_[0],a=this.size_[1],r=Kt(e,a);r.fillRect(0,0,e,a),this.hitDetectionImage_=r.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_},t.prototype.getSize=function(){return this.size_},t.prototype.getSrc=function(){return this.src_},t.prototype.load=function(){if(this.imageState_==q.IDLE){this.imageState_=q.LOADING;try{this.image_.src=this.src_}catch{this.handleImageError_()}this.unlisten_=Ps(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this))}},t.prototype.replaceColor_=function(e){if(!(!this.color_||this.canvas_[e]||this.imageState_!==q.LOADED)){var a=document.createElement("canvas");this.canvas_[e]=a,a.width=Math.ceil(this.image_.width*e),a.height=Math.ceil(this.image_.height*e);var r=a.getContext("2d");if(r.scale(e,e),r.drawImage(this.image_,0,0),r.globalCompositeOperation="multiply",r.globalCompositeOperation==="multiply"||this.isTainted_())r.fillStyle=Dc(this.color_),r.fillRect(0,0,a.width/e,a.height/e),r.globalCompositeOperation="destination-in",r.drawImage(this.image_,0,0);else{for(var n=r.getImageData(0,0,a.width,a.height),s=n.data,o=this.color_[0]/255,h=this.color_[1]/255,l=this.color_[2]/255,c=this.color_[3],d=0,u=s.length;d<u;d+=4)s[d]*=o,s[d+1]*=h,s[d+2]*=l,s[d+3]*=c;r.putImageData(n,0,0)}}},t.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)},t}(vr);function M6(i,t,e,a,r,n){var s=Hh.get(t,a,n);return s||(s=new y6(i,t,e,a,r,n),Hh.set(t,a,n,s)),s}var b6=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),z6=function(i){b6(t,i);function t(e){var a=this,r=e||{},n=r.opacity!==void 0?r.opacity:1,s=r.rotation!==void 0?r.rotation:0,o=r.scale!==void 0?r.scale:1,h=r.rotateWithView!==void 0?r.rotateWithView:!1;a=i.call(this,{opacity:n,rotation:s,scale:o,displacement:r.displacement!==void 0?r.displacement:[0,0],rotateWithView:h})||this,a.anchor_=r.anchor!==void 0?r.anchor:[.5,.5],a.normalizedAnchor_=null,a.anchorOrigin_=r.anchorOrigin!==void 0?r.anchorOrigin:Ut.TOP_LEFT,a.anchorXUnits_=r.anchorXUnits!==void 0?r.anchorXUnits:De.FRACTION,a.anchorYUnits_=r.anchorYUnits!==void 0?r.anchorYUnits:De.FRACTION,a.crossOrigin_=r.crossOrigin!==void 0?r.crossOrigin:null;var l=r.img!==void 0?r.img:null;a.imgSize_=r.imgSize;var c=r.src;J(!(c!==void 0&&l),4),J(!l||l&&a.imgSize_,5),(c===void 0||c.length===0)&&l&&(c=l.src||nt(l)),J(c!==void 0&&c.length>0,6);var d=r.src!==void 0?q.IDLE:q.LOADED;return a.color_=r.color!==void 0?fn(r.color):null,a.iconImage_=M6(l,c,a.imgSize_!==void 0?a.imgSize_:null,a.crossOrigin_,d,a.color_),a.offset_=r.offset!==void 0?r.offset:[0,0],a.offsetOrigin_=r.offsetOrigin!==void 0?r.offsetOrigin:Ut.TOP_LEFT,a.origin_=null,a.size_=r.size!==void 0?r.size:null,a}return t.prototype.clone=function(){var e=this.getScale();return new t({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,imgSize:this.imgSize_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:Array.isArray(e)?e.slice():e,size:this.size_!==null?this.size_.slice():void 0,src:this.getSrc()})},t.prototype.getAnchor=function(){var e=this.normalizedAnchor_;if(!e){e=this.anchor_;var a=this.getSize();if(this.anchorXUnits_==De.FRACTION||this.anchorYUnits_==De.FRACTION){if(!a)return null;e=this.anchor_.slice(),this.anchorXUnits_==De.FRACTION&&(e[0]*=a[0]),this.anchorYUnits_==De.FRACTION&&(e[1]*=a[1])}if(this.anchorOrigin_!=Ut.TOP_LEFT){if(!a)return null;e===this.anchor_&&(e=this.anchor_.slice()),(this.anchorOrigin_==Ut.TOP_RIGHT||this.anchorOrigin_==Ut.BOTTOM_RIGHT)&&(e[0]=-e[0]+a[0]),(this.anchorOrigin_==Ut.BOTTOM_LEFT||this.anchorOrigin_==Ut.BOTTOM_RIGHT)&&(e[1]=-e[1]+a[1])}this.normalizedAnchor_=e}var r=this.getDisplacement();return[e[0]-r[0],e[1]+r[1]]},t.prototype.setAnchor=function(e){this.anchor_=e,this.normalizedAnchor_=null},t.prototype.getColor=function(){return this.color_},t.prototype.getImage=function(e){return this.iconImage_.getImage(e)},t.prototype.getPixelRatio=function(e){return this.iconImage_.getPixelRatio(e)},t.prototype.getImageSize=function(){return this.iconImage_.getSize()},t.prototype.getImageState=function(){return this.iconImage_.getImageState()},t.prototype.getHitDetectionImage=function(){return this.iconImage_.getHitDetectionImage()},t.prototype.getOrigin=function(){if(this.origin_)return this.origin_;var e=this.offset_;if(this.offsetOrigin_!=Ut.TOP_LEFT){var a=this.getSize(),r=this.iconImage_.getSize();if(!a||!r)return null;e=e.slice(),(this.offsetOrigin_==Ut.TOP_RIGHT||this.offsetOrigin_==Ut.BOTTOM_RIGHT)&&(e[0]=r[0]-a[0]-e[0]),(this.offsetOrigin_==Ut.BOTTOM_LEFT||this.offsetOrigin_==Ut.BOTTOM_RIGHT)&&(e[1]=r[1]-a[1]-e[1])}return this.origin_=e,this.origin_},t.prototype.getSrc=function(){return this.iconImage_.getSrc()},t.prototype.getSize=function(){return this.size_?this.size_:this.iconImage_.getSize()},t.prototype.listenImageChange=function(e){this.iconImage_.addEventListener(zt.CHANGE,e)},t.prototype.load=function(){this.iconImage_.load()},t.prototype.unlistenImageChange=function(e){this.iconImage_.removeEventListener(zt.CHANGE,e)},t}(td);const od=z6;var he=.5;function x6(i,t,e,a,r,n,s){var o=i[0]*he,h=i[1]*he,l=Kt(o,h);l.imageSmoothingEnabled=!1;for(var c=l.canvas,d=new g6(l,he,r,null,s),u=e.length,v=Math.floor((256*256*256-1)/u),p={},f=1;f<=u;++f){var g=e[f-1],m=g.getStyleFunction()||a;if(!!a){var _=m(g,n);if(!!_){Array.isArray(_)||(_=[_]);for(var y=f*v,M="#"+("000000"+y.toString(16)).slice(-6),b=0,z=_.length;b<z;++b){var A=_[b],x=A.getGeometryFunction()(g);if(!(!x||!It(r,x.getExtent()))){var C=A.clone(),T=C.getFill();T&&T.setColor(M);var P=C.getStroke();P&&(P.setColor(M),P.setLineDash(null)),C.setText(void 0);var k=A.getImage();if(k&&k.getOpacity()!==0){var L=k.getImageSize();if(!L)continue;var U=Kt(L[0],L[1],void 0,{alpha:!1}),N=U.canvas;U.fillStyle=M,U.fillRect(0,0,N.width,N.height),C.setImage(new od({img:N,imgSize:L,anchor:k.getAnchor(),anchorXUnits:De.PIXELS,anchorYUnits:De.PIXELS,offset:k.getOrigin(),opacity:1,size:k.getSize(),scale:k.getScale(),rotation:k.getRotation(),rotateWithView:k.getRotateWithView()}))}var B=C.getZIndex()||0,F=p[B];F||(F={},p[B]=F,F[W.POLYGON]=[],F[W.CIRCLE]=[],F[W.LINE_STRING]=[],F[W.POINT]=[]),F[x.getType().replace("Multi","")].push(x,C)}}}}}for(var Q=Object.keys(p).map(Number).sort(Qi),f=0,H=Q.length;f<H;++f){var F=p[Q[f]];for(var Z in F)for(var ht=F[Z],b=0,z=ht.length;b<z;b+=2){d.setStyle(ht[b+1]);for(var E=0,dt=t.length;E<dt;++E)d.setTransform(t[E]),d.drawGeometry(ht[b])}}return l.getImageData(0,0,c.width,c.height)}function A6(i,t,e){var a=[];if(e){var r=Math.floor(Math.round(i[0])*he),n=Math.floor(Math.round(i[1])*he),s=(ft(r,0,e.width-1)+ft(n,0,e.height-1)*e.width)*4,o=e.data[s],h=e.data[s+1],l=e.data[s+2],c=l+256*(h+256*o),d=Math.floor((256*256*256-1)/t.length);c&&c%d===0&&a.push(t[c/d-1])}return a}var w6=.5,hd={Point:L6,LineString:R6,Polygon:F6,MultiPoint:k6,MultiLineString:O6,MultiPolygon:P6,GeometryCollection:T6,Circle:I6};function E6(i,t){return parseInt(nt(i),10)-parseInt(nt(t),10)}function C6(i,t){var e=U0(i,t);return e*e}function U0(i,t){return w6*i/t}function I6(i,t,e,a,r){var n=e.getFill(),s=e.getStroke();if(n||s){var o=i.getBuilder(e.getZIndex(),ct.CIRCLE);o.setFillStrokeStyle(n,s),o.drawCircle(t,a)}var h=e.getText();if(h&&h.getText()){var l=(r||i).getBuilder(e.getZIndex(),ct.TEXT);l.setTextStyle(h),l.drawText(t,a)}}function Xh(i,t,e,a,r,n,s){var o=!1,h=e.getImage();if(h){var l=h.getImageState();l==q.LOADED||l==q.ERROR?h.unlistenImageChange(r):(l==q.IDLE&&h.load(),l=h.getImageState(),h.listenImageChange(r),o=!0)}return S6(i,t,e,a,n,s),o}function S6(i,t,e,a,r,n){var s=e.getGeometryFunction()(t);if(!!s){var o=s.simplifyTransformed(a,r),h=e.getRenderer();if(h)ld(i,o,e,t);else{var l=hd[o.getType()];l(i,o,e,t,n)}}}function ld(i,t,e,a){if(t.getType()==W.GEOMETRY_COLLECTION){for(var r=t.getGeometries(),n=0,s=r.length;n<s;++n)ld(i,r[n],e,a);return}var o=i.getBuilder(e.getZIndex(),ct.DEFAULT);o.drawCustom(t,a,e.getRenderer(),e.getHitDetectionRenderer())}function T6(i,t,e,a,r){var n=t.getGeometriesArray(),s,o;for(s=0,o=n.length;s<o;++s){var h=hd[n[s].getType()];h(i,n[s],e,a,r)}}function R6(i,t,e,a,r){var n=e.getStroke();if(n){var s=i.getBuilder(e.getZIndex(),ct.LINE_STRING);s.setFillStrokeStyle(null,n),s.drawLineString(t,a)}var o=e.getText();if(o&&o.getText()){var h=(r||i).getBuilder(e.getZIndex(),ct.TEXT);h.setTextStyle(o),h.drawText(t,a)}}function O6(i,t,e,a,r){var n=e.getStroke();if(n){var s=i.getBuilder(e.getZIndex(),ct.LINE_STRING);s.setFillStrokeStyle(null,n),s.drawMultiLineString(t,a)}var o=e.getText();if(o&&o.getText()){var h=(r||i).getBuilder(e.getZIndex(),ct.TEXT);h.setTextStyle(o),h.drawText(t,a)}}function P6(i,t,e,a,r){var n=e.getFill(),s=e.getStroke();if(s||n){var o=i.getBuilder(e.getZIndex(),ct.POLYGON);o.setFillStrokeStyle(n,s),o.drawMultiPolygon(t,a)}var h=e.getText();if(h&&h.getText()){var l=(r||i).getBuilder(e.getZIndex(),ct.TEXT);l.setTextStyle(h),l.drawText(t,a)}}function L6(i,t,e,a,r){var n=e.getImage(),s=e.getText(),o;if(r&&(i=r,o=n&&s&&s.getText()?{}:void 0),n){if(n.getImageState()!=q.LOADED)return;var h=i.getBuilder(e.getZIndex(),ct.IMAGE);h.setImageStyle(n,o),h.drawPoint(t,a)}if(s&&s.getText()){var l=i.getBuilder(e.getZIndex(),ct.TEXT);l.setTextStyle(s,o),l.drawText(t,a)}}function k6(i,t,e,a,r){var n=e.getImage(),s=e.getText(),o;if(r&&(i=r,o=n&&s&&s.getText()?{}:void 0),n){if(n.getImageState()!=q.LOADED)return;var h=i.getBuilder(e.getZIndex(),ct.IMAGE);h.setImageStyle(n,o),h.drawMultiPoint(t,a)}if(s&&s.getText()){var l=(r||i).getBuilder(e.getZIndex(),ct.TEXT);l.setTextStyle(s,o),l.drawText(t,a)}}function F6(i,t,e,a,r){var n=e.getFill(),s=e.getStroke();if(n||s){var o=i.getBuilder(e.getZIndex(),ct.POLYGON);o.setFillStrokeStyle(n,s),o.drawPolygon(t,a)}var h=e.getText();if(h&&h.getText()){var l=(r||i).getBuilder(e.getZIndex(),ct.TEXT);l.setTextStyle(h),l.drawText(t,a)}}var D6=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),N6=function(i){D6(t,i);function t(e){var a=i.call(this,e)||this;return a.boundHandleStyleImageChange_=a.handleStyleImageChange_.bind(a),a.animatingOrInteracting_,a.dirty_=!1,a.hitDetectionImageData_=null,a.renderedFeatures_=null,a.renderedRevision_=-1,a.renderedResolution_=NaN,a.renderedExtent_=Xt(),a.wrappedRenderedExtent_=Xt(),a.renderedRotation_,a.renderedCenter_=null,a.renderedProjection_=null,a.renderedRenderOrder_=null,a.replayGroup_=null,a.replayGroupChanged=!0,a.declutterExecutorGroup=null,a.clipping=!0,a}return t.prototype.renderWorlds=function(e,a,r){var n=a.extent,s=a.viewState,o=s.center,h=s.resolution,l=s.projection,c=s.rotation,d=l.getExtent(),u=this.getLayer().getSource(),v=a.pixelRatio,p=a.viewHints,f=!(p[Ft.ANIMATING]||p[Ft.INTERACTING]),g=this.context,m=Math.round(a.size[0]*v),_=Math.round(a.size[1]*v),y=u.getWrapX()&&l.canWrapX(),M=y?st(d):null,b=y?Math.ceil((n[2]-d[2])/M)+1:1,z=y?Math.floor((n[0]-d[0])/M):0;do{var A=this.getRenderTransform(o,h,c,v,m,_,z*M);e.execute(g,1,A,c,f,void 0,r)}while(++z<b)},t.prototype.renderDeclutter=function(e){this.declutterExecutorGroup&&this.renderWorlds(this.declutterExecutorGroup,e,e.declutterTree)},t.prototype.renderFrame=function(e,a){var r=e.pixelRatio,n=e.layerStatesArray[e.layerIndex];M4(this.pixelTransform,1/r,1/r),ws(this.inversePixelTransform,this.pixelTransform);var s=Es(this.pixelTransform);this.useContainer(a,s,n.opacity,this.getBackground(e));var o=this.context,h=o.canvas,l=this.replayGroup_,c=this.declutterExecutorGroup;if((!l||l.isEmpty())&&(!c||c.isEmpty()))return null;var d=Math.round(e.size[0]*r),u=Math.round(e.size[1]*r);h.width!=d||h.height!=u?(h.width=d,h.height=u,h.style.transform!==s&&(h.style.transform=s)):this.containerReused||o.clearRect(0,0,d,u),this.preRender(o,e);var v=e.viewState,p=v.projection,f=!1,g=!0;if(n.extent&&this.clipping){var m=be(n.extent,p);g=It(m,e.extent),f=g&&!$e(m,e.extent),f&&this.clipUnrotated(o,e,m)}g&&this.renderWorlds(l,e),f&&o.restore(),this.postRender(o,e);var _=Zc(n.opacity),y=this.container;return _!==y.style.opacity&&(y.style.opacity=_),this.renderedRotation_!==v.rotation&&(this.renderedRotation_=v.rotation,this.hitDetectionImageData_=null),this.container},t.prototype.getFeatures=function(e){return new Promise(function(a){if(!this.hitDetectionImageData_&&!this.animatingOrInteracting_){var r=[this.context.canvas.width,this.context.canvas.height];mt(this.pixelTransform,r);var n=this.renderedCenter_,s=this.renderedResolution_,o=this.renderedRotation_,h=this.renderedProjection_,l=this.wrappedRenderedExtent_,c=this.getLayer(),d=[],u=r[0]*he,v=r[1]*he;d.push(this.getRenderTransform(n,s,o,he,u,v,0).slice());var p=c.getSource(),f=h.getExtent();if(p.getWrapX()&&h.canWrapX()&&!$e(f,l)){for(var g=l[0],m=st(f),_=0,y=void 0;g<f[0];)--_,y=m*_,d.push(this.getRenderTransform(n,s,o,he,u,v,y).slice()),g+=m;for(_=0,g=l[2];g>f[2];)++_,y=m*_,d.push(this.getRenderTransform(n,s,o,he,u,v,y).slice()),g-=m}this.hitDetectionImageData_=x6(r,d,this.renderedFeatures_,c.getStyleFunction(),l,s,o)}a(A6(e,this.renderedFeatures_,this.hitDetectionImageData_))}.bind(this))},t.prototype.forEachFeatureAtCoordinate=function(e,a,r,n,s){var o=this;if(!!this.replayGroup_){var h=a.viewState.resolution,l=a.viewState.rotation,c=this.getLayer(),d={},u=function(f,g,m){var _=nt(f),y=d[_];if(y){if(y!==!0&&m<y.distanceSq){if(m===0)return d[_]=!0,s.splice(s.lastIndexOf(y),1),n(f,c,g);y.geometry=g,y.distanceSq=m}}else{if(m===0)return d[_]=!0,n(f,c,g);s.push(d[_]={feature:f,layer:c,geometry:g,distanceSq:m,callback:n})}},v,p=[this.replayGroup_];return this.declutterExecutorGroup&&p.push(this.declutterExecutorGroup),p.some(function(f){return v=f.forEachFeatureAtCoordinate(e,h,l,r,u,f===o.declutterExecutorGroup&&a.declutterTree?a.declutterTree.all().map(function(g){return g.value}):null)}),v}},t.prototype.handleFontsChanged=function(){var e=this.getLayer();e.getVisible()&&this.replayGroup_&&e.changed()},t.prototype.handleStyleImageChange_=function(e){this.renderIfReadyAndVisible()},t.prototype.prepareFrame=function(e){var a=this.getLayer(),r=a.getSource();if(!r)return!1;var n=e.viewHints[Ft.ANIMATING],s=e.viewHints[Ft.INTERACTING],o=a.getUpdateWhileAnimating(),h=a.getUpdateWhileInteracting();if(!this.dirty_&&!o&&n||!h&&s)return this.animatingOrInteracting_=!0,!0;this.animatingOrInteracting_=!1;var l=e.extent,c=e.viewState,d=c.projection,u=c.resolution,v=e.pixelRatio,p=a.getRevision(),f=a.getRenderBuffer(),g=a.getRenderOrder();g===void 0&&(g=E6);var m=c.center.slice(),_=Ga(l,f*u),y=_.slice(),M=[_.slice()],b=d.getExtent();if(r.getWrapX()&&d.canWrapX()&&!$e(b,e.extent)){var z=st(b),A=Math.max(st(_)/2,z);_[0]=b[0]-A,_[2]=b[2]+A,vp(m,d);var x=cp(M[0],d);x[0]<b[0]&&x[2]<b[2]?M.push([x[0]+z,x[1],x[2]+z,x[3]]):x[0]>b[0]&&x[2]>b[2]&&M.push([x[0]-z,x[1],x[2]-z,x[3]])}if(!this.dirty_&&this.renderedResolution_==u&&this.renderedRevision_==p&&this.renderedRenderOrder_==g&&$e(this.wrappedRenderedExtent_,_))return na(this.renderedExtent_,y)||(this.hitDetectionImageData_=null,this.renderedExtent_=y),this.renderedCenter_=m,this.replayGroupChanged=!1,!0;this.replayGroup_=null,this.dirty_=!1;var C=new jh(U0(u,v),_,u,v),T;this.getLayer().getDeclutter()&&(T=new jh(U0(u,v),_,u,v));var P=Jl(),k;if(P){for(var L=0,U=M.length;L<U;++L){var N=M[L],B=F0(N,d);r.loadFeatures(B,yp(u,d),P)}k=Ln(P,d)}else for(var L=0,U=M.length;L<U;++L)r.loadFeatures(M[L],u,d);var F=C6(u,v),Q=function(dt){var $,ut=dt.getStyleFunction()||a.getStyleFunction();if(ut&&($=ut(dt,u)),$){var Et=this.renderFeature(dt,F,$,C,k,T);this.dirty_=this.dirty_||Et}}.bind(this),H=F0(_,d),Z=r.getFeaturesInExtent(H);g&&Z.sort(g);for(var L=0,U=Z.length;L<U;++L)Q(Z[L]);this.renderedFeatures_=Z;var ht=C.finish(),E=new Yh(_,u,v,r.getOverlaps(),ht,a.getRenderBuffer());return T&&(this.declutterExecutorGroup=new Yh(_,u,v,r.getOverlaps(),T.finish(),a.getRenderBuffer())),this.renderedResolution_=u,this.renderedRevision_=p,this.renderedRenderOrder_=g,this.renderedExtent_=y,this.wrappedRenderedExtent_=_,this.renderedCenter_=m,this.renderedProjection_=d,this.replayGroup_=E,this.hitDetectionImageData_=null,this.replayGroupChanged=!0,!0},t.prototype.renderFeature=function(e,a,r,n,s,o){if(!r)return!1;var h=!1;if(Array.isArray(r))for(var l=0,c=r.length;l<c;++l)h=Xh(n,e,r[l],a,this.boundHandleStyleImageChange_,s,o)||h;else h=Xh(n,e,r,a,this.boundHandleStyleImageChange_,s,o);return h},t}(Os);const B6=N6;var G6=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),$6=function(i){G6(t,i);function t(e){return i.call(this,e)||this}return t.prototype.createRenderer=function(){return new B6(this)},t}($_);const V6=$6;function bn(i){return[i.x,i.y]}function j6(i){return[i.width,i.height]}function cd(i,t,e){if(!(t.length!==i.getLength()||i.getArray().some((n,s)=>n.id!==t[s])))return;const r=t.map(n=>e.lookup.get(n)).filter(n=>!!n);i.clear(),r.forEach(n=>i.push(n))}function Ee(i){const t={...i};return Object.keys(i).forEach(e=>{i[e]===null&&delete t[e]}),t}function Ls(i,t,e){if(!i)throw new Error("Can not instantiate base class: ol/layer/Layer");return i.setOpacity(t.opacity),i.setVisible(t.visible),i.setZIndex(t.zIndex||void 0),i.setMinZoom(t.minZoom||-1/0),i.setMaxZoom(t.maxZoom||1/0),i.setBackground(t.background||void 0),i}function U6(i,t,e){return i||(i=new v_(Ee({...t,source:e.lookup.get(t.source)}))),Ls(i,t),i.setSource(e.lookup.get(t.source)),i}function W6(i,t,e){return i||(i=new V6(Ee({...t,source:e.lookup.get(t.source)}))),Ls(i,t),i.setSource(e.lookup.get(t.source)),i}function Y6(i,t,e){return i||(i=new $m(Ee({...t,source:e.lookup.get(t.source)}))),Ls(i,t),i.setSource(e.lookup.get(t.source)),i}const Bi={ADD:"add",REMOVE:"remove"};var dd=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Zh={LENGTH:"length"},Br=function(i){dd(t,i);function t(e,a,r){var n=i.call(this,e)||this;return n.element=a,n.index=r,n}return t}(gi),q6=function(i){dd(t,i);function t(e,a){var r=i.call(this)||this;r.on,r.once,r.un;var n=a||{};if(r.unique_=!!n.unique,r.array_=e||[],r.unique_)for(var s=0,o=r.array_.length;s<o;++s)r.assertUnique_(r.array_[s],s);return r.updateLength_(),r}return t.prototype.clear=function(){for(;this.getLength()>0;)this.pop()},t.prototype.extend=function(e){for(var a=0,r=e.length;a<r;++a)this.push(e[a]);return this},t.prototype.forEach=function(e){for(var a=this.array_,r=0,n=a.length;r<n;++r)e(a[r],r,a)},t.prototype.getArray=function(){return this.array_},t.prototype.item=function(e){return this.array_[e]},t.prototype.getLength=function(){return this.get(Zh.LENGTH)},t.prototype.insertAt=function(e,a){this.unique_&&this.assertUnique_(a),this.array_.splice(e,0,a),this.updateLength_(),this.dispatchEvent(new Br(Bi.ADD,a,e))},t.prototype.pop=function(){return this.removeAt(this.getLength()-1)},t.prototype.push=function(e){this.unique_&&this.assertUnique_(e);var a=this.getLength();return this.insertAt(a,e),this.getLength()},t.prototype.remove=function(e){for(var a=this.array_,r=0,n=a.length;r<n;++r)if(a[r]===e)return this.removeAt(r)},t.prototype.removeAt=function(e){var a=this.array_[e];return this.array_.splice(e,1),this.updateLength_(),this.dispatchEvent(new Br(Bi.REMOVE,a,e)),a},t.prototype.setAt=function(e,a){var r=this.getLength();if(e<r){this.unique_&&this.assertUnique_(a,e);var n=this.array_[e];this.array_[e]=a,this.dispatchEvent(new Br(Bi.REMOVE,n,e)),this.dispatchEvent(new Br(Bi.ADD,a,e))}else{for(var s=r;s<e;++s)this.insertAt(s,void 0);this.insertAt(e,a)}},t.prototype.updateLength_=function(){this.set(Zh.LENGTH,this.array_.length)},t.prototype.assertUnique_=function(e,a){for(var r=0,n=this.array_.length;r<n;++r)if(this.array_[r]===e&&r!==a)throw new jl(58)},t}(mi);const ud=q6;var je="1.3.0",H6=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),X6=function(i){H6(t,i);function t(e,a,r,n,s,o,h){var l=this,c=e.getExtent(),d=a.getExtent(),u=d?Wi(r,d):r,v=Xe(u),p=Ya(e,a,v,n),f=Bc,g=new Uc(e,a,u,c,p*f,n),m=g.calculateSourceExtent(),_=o(m,p,s),y=_?q.IDLE:q.EMPTY,M=_?_.getPixelRatio():1;return l=i.call(this,r,n,M,y)||this,l.targetProj_=a,l.maxSourceExtent_=c,l.triangulation_=g,l.targetResolution_=n,l.targetExtent_=r,l.sourceImage_=_,l.sourcePixelRatio_=M,l.interpolate_=h,l.canvas_=null,l.sourceListenerKey_=null,l}return t.prototype.disposeInternal=function(){this.state==q.LOADING&&this.unlistenSource_(),i.prototype.disposeInternal.call(this)},t.prototype.getImage=function(){return this.canvas_},t.prototype.getProjection=function(){return this.targetProj_},t.prototype.reproject_=function(){var e=this.sourceImage_.getState();if(e==q.LOADED){var a=st(this.targetExtent_)/this.targetResolution_,r=wt(this.targetExtent_)/this.targetResolution_;this.canvas_=Wc(a,r,this.sourcePixelRatio_,this.sourceImage_.getResolution(),this.maxSourceExtent_,this.targetResolution_,this.targetExtent_,this.triangulation_,[{extent:this.sourceImage_.getExtent(),image:this.sourceImage_.getImage()}],0,void 0,this.interpolate_)}this.state=e,this.changed()},t.prototype.load=function(){if(this.state==q.IDLE){this.state=q.LOADING,this.changed();var e=this.sourceImage_.getState();e==q.LOADED||e==q.ERROR?this.reproject_():(this.sourceListenerKey_=re(this.sourceImage_,zt.CHANGE,function(a){var r=this.sourceImage_.getState();(r==q.LOADED||r==q.ERROR)&&(this.unlistenSource_(),this.reproject_())},this),this.sourceImage_.load())}},t.prototype.unlistenSource_=function(){qt(this.sourceListenerKey_),this.sourceListenerKey_=null},t}(Vc);const Z6=X6;var K6=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Q6=function(i){K6(t,i);function t(e){var a=i.call(this)||this;a.projection=gt(e.projection),a.attributions_=Kh(e.attributions),a.attributionsCollapsible_=e.attributionsCollapsible!==void 0?e.attributionsCollapsible:!0,a.loading=!1,a.state_=e.state!==void 0?e.state:Gn.READY,a.wrapX_=e.wrapX!==void 0?e.wrapX:!1,a.interpolate_=!!e.interpolate,a.viewResolver=null,a.viewRejector=null;var r=a;return a.viewPromise_=new Promise(function(n,s){r.viewResolver=n,r.viewRejector=s}),a}return t.prototype.getAttributions=function(){return this.attributions_},t.prototype.getAttributionsCollapsible=function(){return this.attributionsCollapsible_},t.prototype.getProjection=function(){return this.projection},t.prototype.getResolutions=function(){return K()},t.prototype.getView=function(){return this.viewPromise_},t.prototype.getState=function(){return this.state_},t.prototype.getWrapX=function(){return this.wrapX_},t.prototype.getInterpolate=function(){return this.interpolate_},t.prototype.refresh=function(){this.changed()},t.prototype.setAttributions=function(e){this.attributions_=Kh(e),this.changed()},t.prototype.setState=function(e){this.state_=e,this.changed()},t}(mi);function Kh(i){return i?Array.isArray(i)?function(t){return i}:typeof i=="function"?i:function(t){return[i]}:null}const ks=Q6;var vd=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),u0={IMAGELOADSTART:"imageloadstart",IMAGELOADEND:"imageloadend",IMAGELOADERROR:"imageloaderror"},J6=function(i){vd(t,i);function t(e,a){var r=i.call(this,e)||this;return r.image=a,r}return t}(gi),t8=function(i){vd(t,i);function t(e){var a=this,r=e.imageSmoothing!==void 0?e.imageSmoothing:!0;return e.interpolate!==void 0&&(r=e.interpolate),a=i.call(this,{attributions:e.attributions,projection:e.projection,state:e.state,interpolate:r})||this,a.on,a.once,a.un,a.resolutions_=e.resolutions!==void 0?e.resolutions:null,a.reprojectedImage_=null,a.reprojectedRevision_=0,a}return t.prototype.getResolutions=function(){return this.resolutions_},t.prototype.findNearestResolution=function(e){if(this.resolutions_){var a=Dn(this.resolutions_,e,0);e=this.resolutions_[a]}return e},t.prototype.getImage=function(e,a,r,n){var s=this.getProjection();if(!te||!s||!n||Ne(s,n))return s&&(n=s),this.getImageInternal(e,a,r,n);if(this.reprojectedImage_){if(this.reprojectedRevision_==this.getRevision()&&Ne(this.reprojectedImage_.getProjection(),n)&&this.reprojectedImage_.getResolution()==a&&Tn(this.reprojectedImage_.getExtent(),e))return this.reprojectedImage_;this.reprojectedImage_.dispose(),this.reprojectedImage_=null}return this.reprojectedImage_=new Z6(s,n,e,a,r,function(o,h,l){return this.getImageInternal(o,h,l,s)}.bind(this),this.getInterpolate()),this.reprojectedRevision_=this.getRevision(),this.reprojectedImage_},t.prototype.getImageInternal=function(e,a,r,n){return K()},t.prototype.handleImageChange=function(e){var a=e.target,r;switch(a.getState()){case q.LOADING:this.loading=!0,r=u0.IMAGELOADSTART;break;case q.LOADED:this.loading=!1,r=u0.IMAGELOADEND;break;case q.ERROR:this.loading=!1,r=u0.IMAGELOADERROR;break;default:return}this.hasListener(r)&&this.dispatchEvent(new J6(r,a))},t}(ks);function e8(i,t){i.getImage().src=t}const i8=t8,Ue={CARMENTA_SERVER:"carmentaserver",GEOSERVER:"geoserver",MAPSERVER:"mapserver",QGIS:"qgis"};function zn(i,t){var e=[];Object.keys(t).forEach(function(r){t[r]!==null&&t[r]!==void 0&&e.push(r+"="+encodeURIComponent(t[r]))});var a=e.join("&");return i=i.replace(/[?&]$/,""),i=i.indexOf("?")===-1?i+"?":i+"&",i+a}var a8=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Le=4,Qh=[101,101],r8=function(i){a8(t,i);function t(e){var a=this,r=e||{},n=r.imageSmoothing!==void 0?r.imageSmoothing:!0;return r.interpolate!==void 0&&(n=r.interpolate),a=i.call(this,{attributions:r.attributions,interpolate:n,projection:r.projection,resolutions:r.resolutions})||this,a.crossOrigin_=r.crossOrigin!==void 0?r.crossOrigin:null,a.url_=r.url,a.imageLoadFunction_=r.imageLoadFunction!==void 0?r.imageLoadFunction:e8,a.params_=r.params||{},a.v13_=!0,a.updateV13_(),a.serverType_=r.serverType,a.hidpi_=r.hidpi!==void 0?r.hidpi:!0,a.image_=null,a.imageSize_=[0,0],a.renderedRevision_=0,a.ratio_=r.ratio!==void 0?r.ratio:1.5,a}return t.prototype.getFeatureInfoUrl=function(e,a,r,n){if(this.url_!==void 0){var s=gt(r),o=this.getProjection();o&&o!==s&&(a=Ya(o,s,e,a),e=or(e,s,o));var h=Yr(e,a,0,Qh),l={SERVICE:"WMS",VERSION:je,REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.params_.LAYERS};ot(l,this.params_,n);var c=Oi((e[0]-h[0])/a,Le),d=Oi((h[3]-e[1])/a,Le);return l[this.v13_?"I":"X"]=c,l[this.v13_?"J":"Y"]=d,this.getRequestUrl_(h,Qh,1,o||s,l)}},t.prototype.getLegendUrl=function(e,a){if(this.url_!==void 0){var r={SERVICE:"WMS",VERSION:je,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(a===void 0||a.LAYER===void 0){var n=this.params_.LAYERS,s=!Array.isArray(n)||n.length===1;if(!s)return;r.LAYER=n}if(e!==void 0){var o=this.getProjection()?this.getProjection().getMetersPerUnit():1,h=28e-5;r.SCALE=e*o/h}return ot(r,a),zn(this.url_,r)}},t.prototype.getParams=function(){return this.params_},t.prototype.getImageInternal=function(e,a,r,n){if(this.url_===void 0)return null;a=this.findNearestResolution(a),r!=1&&(!this.hidpi_||this.serverType_===void 0)&&(r=1);var s=a/r,o=Xe(e),h=Ge(st(e)/s,Le),l=Ge(wt(e)/s,Le),c=Yr(o,s,0,[h,l]),d=Ge(this.ratio_*st(e)/s,Le),u=Ge(this.ratio_*wt(e)/s,Le),v=Yr(o,s,0,[d,u]),p=this.image_;if(p&&this.renderedRevision_==this.getRevision()&&p.getResolution()==a&&p.getPixelRatio()==r&&$e(p.getExtent(),c))return p;var f={SERVICE:"WMS",VERSION:je,REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};ot(f,this.params_),this.imageSize_[0]=Yo(st(v)/s,Le),this.imageSize_[1]=Yo(wt(v)/s,Le);var g=this.getRequestUrl_(v,this.imageSize_,r,n,f);return this.image_=new Km(v,a,r,g,this.crossOrigin_,this.imageLoadFunction_),this.renderedRevision_=this.getRevision(),this.image_.addEventListener(zt.CHANGE,this.handleImageChange.bind(this)),this.image_},t.prototype.getImageLoadFunction=function(){return this.imageLoadFunction_},t.prototype.getRequestUrl_=function(e,a,r,n,s){if(J(this.url_!==void 0,9),s[this.v13_?"CRS":"SRS"]=n.getCode(),"STYLES"in this.params_||(s.STYLES=""),r!=1)switch(this.serverType_){case Ue.GEOSERVER:var o=90*r+.5|0;"FORMAT_OPTIONS"in s?s.FORMAT_OPTIONS+=";dpi:"+o:s.FORMAT_OPTIONS="dpi:"+o;break;case Ue.MAPSERVER:s.MAP_RESOLUTION=90*r;break;case Ue.CARMENTA_SERVER:case Ue.QGIS:s.DPI=90*r;break;default:J(!1,8);break}s.WIDTH=a[0],s.HEIGHT=a[1];var h=n.getAxisOrientation(),l;return this.v13_&&h.substr(0,2)=="ne"?l=[e[1],e[0],e[3],e[2]]:l=e,s.BBOX=l.join(","),zn(this.url_,s)},t.prototype.getUrl=function(){return this.url_},t.prototype.setImageLoadFunction=function(e){this.image_=null,this.imageLoadFunction_=e,this.changed()},t.prototype.setUrl=function(e){e!=this.url_&&(this.url_=e,this.image_=null,this.changed())},t.prototype.updateParams=function(e){ot(this.params_,e),this.updateV13_(),this.image_=null,this.changed()},t.prototype.updateV13_=function(){var e=this.params_.VERSION||je;this.v13_=Hl(e,"1.3")>=0},t}(i8);const n8=r8;var s8=function(){function i(t){this.highWaterMark=t!==void 0?t:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}return i.prototype.canExpireCache=function(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark},i.prototype.expireCache=function(t){for(;this.canExpireCache();)this.pop()},i.prototype.clear=function(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null},i.prototype.containsKey=function(t){return this.entries_.hasOwnProperty(t)},i.prototype.forEach=function(t){for(var e=this.oldest_;e;)t(e.value_,e.key_,this),e=e.newer},i.prototype.get=function(t,e){var a=this.entries_[t];return J(a!==void 0,15),a===this.newest_||(a===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(a.newer.older=a.older,a.older.newer=a.newer),a.newer=null,a.older=this.newest_,this.newest_.newer=a,this.newest_=a),a.value_},i.prototype.remove=function(t){var e=this.entries_[t];return J(e!==void 0,15),e===this.newest_?(this.newest_=e.older,this.newest_&&(this.newest_.newer=null)):e===this.oldest_?(this.oldest_=e.newer,this.oldest_&&(this.oldest_.older=null)):(e.newer.older=e.older,e.older.newer=e.newer),delete this.entries_[t],--this.count_,e.value_},i.prototype.getCount=function(){return this.count_},i.prototype.getKeys=function(){var t=new Array(this.count_),e=0,a;for(a=this.newest_;a;a=a.older)t[e++]=a.key_;return t},i.prototype.getValues=function(){var t=new Array(this.count_),e=0,a;for(a=this.newest_;a;a=a.older)t[e++]=a.value_;return t},i.prototype.peekLast=function(){return this.oldest_.value_},i.prototype.peekLastKey=function(){return this.oldest_.key_},i.prototype.peekFirstKey=function(){return this.newest_.key_},i.prototype.pop=function(){var t=this.oldest_;return delete this.entries_[t.key_],t.newer&&(t.newer.older=null),this.oldest_=t.newer,this.oldest_||(this.newest_=null),--this.count_,t.value_},i.prototype.replace=function(t,e){this.get(t),this.entries_[t].value_=e},i.prototype.set=function(t,e){J(!(t in this.entries_),16);var a={key_:t,newer:null,older:this.newest_,value_:e};this.newest_?this.newest_.newer=a:this.oldest_=a,this.newest_=a,this.entries_[t]=a,++this.count_},i.prototype.setSize=function(t){this.highWaterMark=t},i}();const o8=s8;function Jh(i,t,e,a){return a!==void 0?(a[0]=i,a[1]=t,a[2]=e,a):[i,t,e]}function $n(i,t,e){return i+"/"+t+"/"+e}function pd(i){return $n(i[0],i[1],i[2])}function h8(i){return i.split("/").map(Number)}function fd(i){return(i[1]<<i[0])+i[2]}function l8(i,t){var e=i[0],a=i[1],r=i[2];if(t.getMinZoom()>e||e>t.getMaxZoom())return!1;var n=t.getFullTileRange(e);return n?n.containsXY(a,r):!0}var c8=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),d8=function(i){c8(t,i);function t(){return i!==null&&i.apply(this,arguments)||this}return t.prototype.expireCache=function(e){for(;this.canExpireCache();){var a=this.peekLast();if(a.getKey()in e)break;this.pop().release()}},t.prototype.pruneExceptNewestZ=function(){if(this.getCount()!==0){var e=this.peekFirstKey(),a=h8(e),r=a[0];this.forEach(function(n){n.tileCoord[0]!==r&&(this.remove(pd(n.tileCoord)),n.release())}.bind(this))}},t}(o8);const gd=d8,v0={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"};var u8=[0,0,0],ke=5,v8=function(){function i(t){this.minZoom=t.minZoom!==void 0?t.minZoom:0,this.resolutions_=t.resolutions,J(n4(this.resolutions_,function(s,o){return o-s},!0),17);var e;if(!t.origins){for(var a=0,r=this.resolutions_.length-1;a<r;++a)if(!e)e=this.resolutions_[a]/this.resolutions_[a+1];else if(this.resolutions_[a]/this.resolutions_[a+1]!==e){e=void 0;break}}this.zoomFactor_=e,this.maxZoom=this.resolutions_.length-1,this.origin_=t.origin!==void 0?t.origin:null,this.origins_=null,t.origins!==void 0&&(this.origins_=t.origins,J(this.origins_.length==this.resolutions_.length,20));var n=t.extent;n!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=fi(n)),J(!this.origin_&&this.origins_||this.origin_&&!this.origins_,18),this.tileSizes_=null,t.tileSizes!==void 0&&(this.tileSizes_=t.tileSizes,J(this.tileSizes_.length==this.resolutions_.length,19)),this.tileSize_=t.tileSize!==void 0?t.tileSize:this.tileSizes_?null:Is,J(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,22),this.extent_=n!==void 0?n:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],t.sizes!==void 0?this.fullTileRanges_=t.sizes.map(function(s,o){var h=new Hc(Math.min(0,s[0]),Math.max(s[0]-1,-1),Math.min(0,s[1]),Math.max(s[1]-1,-1));if(n){var l=this.getTileRangeForExtentAndZ(n,o);h.minX=Math.max(l.minX,h.minX),h.maxX=Math.min(l.maxX,h.maxX),h.minY=Math.max(l.minY,h.minY),h.maxY=Math.min(l.maxY,h.maxY)}return h},this):n&&this.calculateTileRanges_(n)}return i.prototype.forEachTileCoord=function(t,e,a){for(var r=this.getTileRangeForExtentAndZ(t,e),n=r.minX,s=r.maxX;n<=s;++n)for(var o=r.minY,h=r.maxY;o<=h;++o)a([e,n,o])},i.prototype.forEachTileCoordParentTileRange=function(t,e,a,r){var n,s,o,h=null,l=t[0]-1;for(this.zoomFactor_===2?(s=t[1],o=t[2]):h=this.getTileCoordExtent(t,r);l>=this.minZoom;){if(this.zoomFactor_===2?(s=Math.floor(s/2),o=Math.floor(o/2),n=Ei(s,s,o,o,a)):n=this.getTileRangeForExtentAndZ(h,l,a),e(l,n))return!0;--l}return!1},i.prototype.getExtent=function(){return this.extent_},i.prototype.getMaxZoom=function(){return this.maxZoom},i.prototype.getMinZoom=function(){return this.minZoom},i.prototype.getOrigin=function(t){return this.origin_?this.origin_:this.origins_[t]},i.prototype.getResolution=function(t){return this.resolutions_[t]},i.prototype.getResolutions=function(){return this.resolutions_},i.prototype.getTileCoordChildTileRange=function(t,e,a){if(t[0]<this.maxZoom){if(this.zoomFactor_===2){var r=t[1]*2,n=t[2]*2;return Ei(r,r+1,n,n+1,e)}var s=this.getTileCoordExtent(t,a||this.tmpExtent_);return this.getTileRangeForExtentAndZ(s,t[0]+1,e)}return null},i.prototype.getTileRangeForTileCoordAndZ=function(t,e,a){if(e>this.maxZoom||e<this.minZoom)return null;var r=t[0],n=t[1],s=t[2];if(e===r)return Ei(n,s,n,s,a);if(this.zoomFactor_){var o=Math.pow(this.zoomFactor_,e-r),h=Math.floor(n*o),l=Math.floor(s*o);if(e<r)return Ei(h,h,l,l,a);var c=Math.floor(o*(n+1))-1,d=Math.floor(o*(s+1))-1;return Ei(h,c,l,d,a)}var u=this.getTileCoordExtent(t,this.tmpExtent_);return this.getTileRangeForExtentAndZ(u,e,a)},i.prototype.getTileRangeExtent=function(t,e,a){var r=this.getOrigin(t),n=this.getResolution(t),s=$t(this.getTileSize(t),this.tmpSize_),o=r[0]+e.minX*s[0]*n,h=r[0]+(e.maxX+1)*s[0]*n,l=r[1]+e.minY*s[1]*n,c=r[1]+(e.maxY+1)*s[1]*n;return ve(o,l,h,c,a)},i.prototype.getTileRangeForExtentAndZ=function(t,e,a){var r=u8;this.getTileCoordForXYAndZ_(t[0],t[3],e,!1,r);var n=r[1],s=r[2];return this.getTileCoordForXYAndZ_(t[2],t[1],e,!0,r),Ei(n,r[1],s,r[2],a)},i.prototype.getTileCoordCenter=function(t){var e=this.getOrigin(t[0]),a=this.getResolution(t[0]),r=$t(this.getTileSize(t[0]),this.tmpSize_);return[e[0]+(t[1]+.5)*r[0]*a,e[1]-(t[2]+.5)*r[1]*a]},i.prototype.getTileCoordExtent=function(t,e){var a=this.getOrigin(t[0]),r=this.getResolution(t[0]),n=$t(this.getTileSize(t[0]),this.tmpSize_),s=a[0]+t[1]*n[0]*r,o=a[1]-(t[2]+1)*n[1]*r,h=s+n[0]*r,l=o+n[1]*r;return ve(s,o,h,l,e)},i.prototype.getTileCoordForCoordAndResolution=function(t,e,a){return this.getTileCoordForXYAndResolution_(t[0],t[1],e,!1,a)},i.prototype.getTileCoordForXYAndResolution_=function(t,e,a,r,n){var s=this.getZForResolution(a),o=a/this.getResolution(s),h=this.getOrigin(s),l=$t(this.getTileSize(s),this.tmpSize_),c=o*(t-h[0])/a/l[0],d=o*(h[1]-e)/a/l[1];return r?(c=Ge(c,ke)-1,d=Ge(d,ke)-1):(c=Oi(c,ke),d=Oi(d,ke)),Jh(s,c,d,n)},i.prototype.getTileCoordForXYAndZ_=function(t,e,a,r,n){var s=this.getOrigin(a),o=this.getResolution(a),h=$t(this.getTileSize(a),this.tmpSize_),l=(t-s[0])/o/h[0],c=(s[1]-e)/o/h[1];return r?(l=Ge(l,ke)-1,c=Ge(c,ke)-1):(l=Oi(l,ke),c=Oi(c,ke)),Jh(a,l,c,n)},i.prototype.getTileCoordForCoordAndZ=function(t,e,a){return this.getTileCoordForXYAndZ_(t[0],t[1],e,!1,a)},i.prototype.getTileCoordResolution=function(t){return this.resolutions_[t[0]]},i.prototype.getTileSize=function(t){return this.tileSize_?this.tileSize_:this.tileSizes_[t]},i.prototype.getFullTileRange=function(t){return this.fullTileRanges_?this.fullTileRanges_[t]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,t):null},i.prototype.getZForResolution=function(t,e){var a=Dn(this.resolutions_,t,e||0);return ft(a,this.minZoom,this.maxZoom)},i.prototype.calculateTileRanges_=function(t){for(var e=this.resolutions_.length,a=new Array(e),r=this.minZoom;r<e;++r)a[r]=this.getTileRangeForExtentAndZ(t,r);this.fullTileRanges_=a},i}();const md=v8;function _d(i){var t=i.getDefaultTileGrid();return t||(t=m8(i),i.setDefaultTileGrid(t)),t}function p8(i,t,e){var a=t[0],r=i.getTileCoordCenter(t),n=Fs(e);if(aa(n,r))return t;var s=st(n),o=Math.ceil((n[0]-r[0])/s);return r[0]+=s*o,i.getTileCoordForCoordAndZ(r,a)}function f8(i,t,e,a){var r=a!==void 0?a:Aa.TOP_LEFT,n=yd(i,t,e);return new md({extent:i,origin:sp(i,r),resolutions:n,tileSize:e})}function g8(i){var t=i||{},e=t.extent||gt("EPSG:3857").getExtent(),a={extent:e,minZoom:t.minZoom,tileSize:t.tileSize,resolutions:yd(e,t.maxZoom,t.tileSize,t.maxResolution)};return new md(a)}function yd(i,t,e,a){for(var r=t!==void 0?t:k4,n=wt(i),s=st(i),o=$t(e!==void 0?e:Is),h=a>0?a:Math.max(s/o[0],n/o[1]),l=r+1,c=new Array(l),d=0;d<l;++d)c[d]=h/Math.pow(2,d);return c}function m8(i,t,e,a){var r=Fs(i);return f8(r,t,e,a)}function Fs(i){i=gt(i);var t=i.getExtent();if(!t){var e=180*Ht[xe.DEGREES]/i.getMetersPerUnit();t=ve(-e,-e,e,e)}return t}var Md=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),_8=function(i){Md(t,i);function t(e){var a=i.call(this,{attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX,interpolate:e.interpolate})||this;a.on,a.once,a.un,a.opaque_=e.opaque!==void 0?e.opaque:!1,a.tilePixelRatio_=e.tilePixelRatio!==void 0?e.tilePixelRatio:1,a.tileGrid=e.tileGrid!==void 0?e.tileGrid:null;var r=[256,256];return a.tileGrid&&$t(a.tileGrid.getTileSize(a.tileGrid.getMinZoom()),r),a.tileCache=new gd(e.cacheSize||0),a.tmpSize=[0,0],a.key_=e.key||"",a.tileOptions={transition:e.transition,interpolate:e.interpolate},a.zDirection=e.zDirection?e.zDirection:0,a}return t.prototype.canExpireCache=function(){return this.tileCache.canExpireCache()},t.prototype.expireCache=function(e,a){var r=this.getTileCacheForProjection(e);r&&r.expireCache(a)},t.prototype.forEachLoadedTile=function(e,a,r,n){var s=this.getTileCacheForProjection(e);if(!s)return!1;for(var o=!0,h,l,c,d=r.minX;d<=r.maxX;++d)for(var u=r.minY;u<=r.maxY;++u)l=$n(a,d,u),c=!1,s.containsKey(l)&&(h=s.get(l),c=h.getState()===G.LOADED,c&&(c=n(h)!==!1)),c||(o=!1);return o},t.prototype.getGutterForProjection=function(e){return 0},t.prototype.getKey=function(){return this.key_},t.prototype.setKey=function(e){this.key_!==e&&(this.key_=e,this.changed())},t.prototype.getOpaque=function(e){return this.opaque_},t.prototype.getResolutions=function(){return this.tileGrid?this.tileGrid.getResolutions():null},t.prototype.getTile=function(e,a,r,n,s){return K()},t.prototype.getTileGrid=function(){return this.tileGrid},t.prototype.getTileGridForProjection=function(e){return this.tileGrid?this.tileGrid:_d(e)},t.prototype.getTileCacheForProjection=function(e){return J(Ne(this.getProjection(),e),68),this.tileCache},t.prototype.getTilePixelRatio=function(e){return this.tilePixelRatio_},t.prototype.getTilePixelSize=function(e,a,r){var n=this.getTileGridForProjection(r),s=this.getTilePixelRatio(a),o=$t(n.getTileSize(e),this.tmpSize);return s==1?o:Kc(o,s,this.tmpSize)},t.prototype.getTileCoordForTileUrlFunction=function(e,a){var r=a!==void 0?a:this.getProjection(),n=this.getTileGridForProjection(r);return this.getWrapX()&&r.isGlobal()&&(e=p8(n,e,r)),l8(e,n)?e:null},t.prototype.clear=function(){this.tileCache.clear()},t.prototype.refresh=function(){this.clear(),i.prototype.refresh.call(this)},t.prototype.updateCacheSize=function(e,a){var r=this.getTileCacheForProjection(a);e>r.highWaterMark&&(r.highWaterMark=e)},t.prototype.useTile=function(e,a,r,n){},t}(ks),y8=function(i){Md(t,i);function t(e,a){var r=i.call(this,e)||this;return r.tile=a,r}return t}(gi);const M8=_8;function b8(i,t){var e=/\{z\}/g,a=/\{x\}/g,r=/\{y\}/g,n=/\{-y\}/g;return function(s,o,h){if(s)return i.replace(e,s[0].toString()).replace(a,s[1].toString()).replace(r,s[2].toString()).replace(n,function(){var l=s[0],c=t.getFullTileRange(l);J(c,55);var d=c.getHeight()-s[2]-1;return d.toString()})}}function z8(i,t){for(var e=i.length,a=new Array(e),r=0;r<e;++r)a[r]=b8(i[r],t);return x8(a)}function x8(i){return i.length===1?i[0]:function(t,e,a){if(t){var r=fd(t),n=di(r,i.length);return i[n](t,e,a)}else return}}function A8(i){var t=[],e=/\{([a-z])-([a-z])\}/.exec(i);if(e){var a=e[1].charCodeAt(0),r=e[2].charCodeAt(0),n=void 0;for(n=a;n<=r;++n)t.push(i.replace(e[0],String.fromCharCode(n)));return t}if(e=/\{(\d+)-(\d+)\}/.exec(i),e){for(var s=parseInt(e[2],10),o=parseInt(e[1],10);o<=s;o++)t.push(i.replace(e[0],o.toString()));return t}return t.push(i),t}var w8=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),E8=function(i){w8(t,i);function t(e){var a=i.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tilePixelRatio:e.tilePixelRatio,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection})||this;return a.generateTileUrlFunction_=a.tileUrlFunction===t.prototype.tileUrlFunction,a.tileLoadFunction=e.tileLoadFunction,e.tileUrlFunction&&(a.tileUrlFunction=e.tileUrlFunction),a.urls=null,e.urls?a.setUrls(e.urls):e.url&&a.setUrl(e.url),a.tileLoadingKeys_={},a}return t.prototype.getTileLoadFunction=function(){return this.tileLoadFunction},t.prototype.getTileUrlFunction=function(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction},t.prototype.getUrls=function(){return this.urls},t.prototype.handleTileChange=function(e){var a=e.target,r=nt(a),n=a.getState(),s;n==G.LOADING?(this.tileLoadingKeys_[r]=!0,s=v0.TILELOADSTART):r in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[r],s=n==G.ERROR?v0.TILELOADERROR:n==G.LOADED?v0.TILELOADEND:void 0),s!=null&&this.dispatchEvent(new y8(s,a))},t.prototype.setTileLoadFunction=function(e){this.tileCache.clear(),this.tileLoadFunction=e,this.changed()},t.prototype.setTileUrlFunction=function(e,a){this.tileUrlFunction=e,this.tileCache.pruneExceptNewestZ(),typeof a<"u"?this.setKey(a):this.changed()},t.prototype.setUrl=function(e){var a=A8(e);this.urls=a,this.setUrls(a)},t.prototype.setUrls=function(e){this.urls=e;var a=e.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(z8(e,this.tileGrid),a):this.setKey(a)},t.prototype.tileUrlFunction=function(e,a,r){},t.prototype.useTile=function(e,a,r){var n=$n(e,a,r);this.tileCache.containsKey(n)&&this.tileCache.get(n)},t}(M8);const C8=E8;var I8=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),S8=function(i){I8(t,i);function t(e){var a=this,r=e.imageSmoothing!==void 0?e.imageSmoothing:!0;return e.interpolate!==void 0&&(r=e.interpolate),a=i.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:T8,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:r,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection})||this,a.crossOrigin=e.crossOrigin!==void 0?e.crossOrigin:null,a.tileClass=e.tileClass!==void 0?e.tileClass:jc,a.tileCacheForProjection={},a.tileGridForProjection={},a.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,a.renderReprojectionEdges_=!1,a}return t.prototype.canExpireCache=function(){if(!te)return i.prototype.canExpireCache.call(this);if(this.tileCache.canExpireCache())return!0;for(var e in this.tileCacheForProjection)if(this.tileCacheForProjection[e].canExpireCache())return!0;return!1},t.prototype.expireCache=function(e,a){if(!te){i.prototype.expireCache.call(this,e,a);return}var r=this.getTileCacheForProjection(e);this.tileCache.expireCache(this.tileCache==r?a:{});for(var n in this.tileCacheForProjection){var s=this.tileCacheForProjection[n];s.expireCache(s==r?a:{})}},t.prototype.getGutterForProjection=function(e){return te&&this.getProjection()&&e&&!Ne(this.getProjection(),e)?0:this.getGutter()},t.prototype.getGutter=function(){return 0},t.prototype.getKey=function(){var e=i.prototype.getKey.call(this);return this.getInterpolate()||(e+=":disable-interpolation"),e},t.prototype.getOpaque=function(e){return te&&this.getProjection()&&e&&!Ne(this.getProjection(),e)?!1:i.prototype.getOpaque.call(this,e)},t.prototype.getTileGridForProjection=function(e){if(!te)return i.prototype.getTileGridForProjection.call(this,e);var a=this.getProjection();if(this.tileGrid&&(!a||Ne(a,e)))return this.tileGrid;var r=nt(e);return r in this.tileGridForProjection||(this.tileGridForProjection[r]=_d(e)),this.tileGridForProjection[r]},t.prototype.getTileCacheForProjection=function(e){if(!te)return i.prototype.getTileCacheForProjection.call(this,e);var a=this.getProjection();if(!a||Ne(a,e))return this.tileCache;var r=nt(e);return r in this.tileCacheForProjection||(this.tileCacheForProjection[r]=new gd(this.tileCache.highWaterMark)),this.tileCacheForProjection[r]},t.prototype.createTile_=function(e,a,r,n,s,o){var h=[e,a,r],l=this.getTileCoordForTileUrlFunction(h,s),c=l?this.tileUrlFunction(l,n,s):void 0,d=new this.tileClass(h,c!==void 0?G.IDLE:G.EMPTY,c!==void 0?c:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return d.key=o,d.addEventListener(zt.CHANGE,this.handleTileChange.bind(this)),d},t.prototype.getTile=function(e,a,r,n,s){var o=this.getProjection();if(!te||!o||!s||Ne(o,s))return this.getTileInternal(e,a,r,n,o||s);var h=this.getTileCacheForProjection(s),l=[e,a,r],c=void 0,d=pd(l);h.containsKey(d)&&(c=h.get(d));var u=this.getKey();if(c&&c.key==u)return c;var v=this.getTileGridForProjection(o),p=this.getTileGridForProjection(s),f=this.getTileCoordForTileUrlFunction(l,s),g=new Yc(o,v,s,p,l,f,this.getTilePixelRatio(n),this.getGutter(),function(m,_,y,M){return this.getTileInternal(m,_,y,M,o)}.bind(this),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.getInterpolate());return g.key=u,c?(g.interimTile=c,g.refreshInterimChain(),h.replace(d,g)):h.set(d,g),g},t.prototype.getTileInternal=function(e,a,r,n,s){var o=null,h=$n(e,a,r),l=this.getKey();if(!this.tileCache.containsKey(h))o=this.createTile_(e,a,r,n,s,l),this.tileCache.set(h,o);else if(o=this.tileCache.get(h),o.key!=l){var c=o;o=this.createTile_(e,a,r,n,s,l),c.getState()==G.IDLE?o.interimTile=c.interimTile:o.interimTile=c,o.refreshInterimChain(),this.tileCache.replace(h,o)}return o},t.prototype.setRenderReprojectionEdges=function(e){if(!(!te||this.renderReprojectionEdges_==e)){this.renderReprojectionEdges_=e;for(var a in this.tileCacheForProjection)this.tileCacheForProjection[a].clear();this.changed()}},t.prototype.setTileGridForProjection=function(e,a){if(te){var r=gt(e);if(r){var n=nt(r);n in this.tileGridForProjection||(this.tileGridForProjection[n]=a)}}},t}(C8);function T8(i,t){i.getImage().src=t}const bd=S8;var R8=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),O8=function(i){R8(t,i);function t(e){var a=e||{},r=a.imageSmoothing!==void 0?a.imageSmoothing:!0;a.interpolate!==void 0&&(r=a.interpolate);var n=a.projection!==void 0?a.projection:"EPSG:3857",s=a.tileGrid!==void 0?a.tileGrid:g8({extent:Fs(n),maxResolution:a.maxResolution,maxZoom:a.maxZoom,minZoom:a.minZoom,tileSize:a.tileSize});return i.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,interpolate:r,opaque:a.opaque,projection:n,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileGrid:s,tileLoadFunction:a.tileLoadFunction,tilePixelRatio:a.tilePixelRatio,tileUrlFunction:a.tileUrlFunction,url:a.url,urls:a.urls,wrapX:a.wrapX!==void 0?a.wrapX:!0,transition:a.transition,attributionsCollapsible:a.attributionsCollapsible,zDirection:a.zDirection})||this}return t}(bd);const zd=O8;var P8=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),xd='&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.',L8=function(i){P8(t,i);function t(e){var a=e||{},r=a.imageSmoothing!==void 0?a.imageSmoothing:!0;a.interpolate!==void 0&&(r=a.interpolate);var n;a.attributions!==void 0?n=a.attributions:n=[xd];var s=a.crossOrigin!==void 0?a.crossOrigin:"anonymous",o=a.url!==void 0?a.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";return i.call(this,{attributions:n,attributionsCollapsible:!1,cacheSize:a.cacheSize,crossOrigin:s,interpolate:r,maxZoom:a.maxZoom!==void 0?a.maxZoom:19,opaque:a.opaque!==void 0?a.opaque:!0,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileLoadFunction:a.tileLoadFunction,transition:a.transition,url:o,wrapX:a.wrapX,zDirection:a.zDirection})||this}return t}(zd);const k8=L8;var F8=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),D8=function(i){F8(t,i);function t(e){var a=this,r=e||{},n=r.imageSmoothing!==void 0?r.imageSmoothing:!0;r.interpolate!==void 0&&(n=r.interpolate);var s=r.params||{},o="TRANSPARENT"in s?s.TRANSPARENT:!0;return a=i.call(this,{attributions:r.attributions,attributionsCollapsible:r.attributionsCollapsible,cacheSize:r.cacheSize,crossOrigin:r.crossOrigin,interpolate:n,opaque:!o,projection:r.projection,reprojectionErrorThreshold:r.reprojectionErrorThreshold,tileClass:r.tileClass,tileGrid:r.tileGrid,tileLoadFunction:r.tileLoadFunction,url:r.url,urls:r.urls,wrapX:r.wrapX!==void 0?r.wrapX:!0,transition:r.transition,zDirection:r.zDirection})||this,a.gutter_=r.gutter!==void 0?r.gutter:0,a.params_=s,a.v13_=!0,a.serverType_=r.serverType,a.hidpi_=r.hidpi!==void 0?r.hidpi:!0,a.tmpExtent_=Xt(),a.updateV13_(),a.setKey(a.getKeyForParams_()),a}return t.prototype.getFeatureInfoUrl=function(e,a,r,n){var s=gt(r),o=this.getProjection(),h=this.getTileGrid();h||(h=this.getTileGridForProjection(s));var l=h.getZForResolution(a,this.zDirection),c=h.getTileCoordForCoordAndZ(e,l);if(!(h.getResolutions().length<=c[0])){var d=h.getResolution(c[0]),u=h.getTileCoordExtent(c,this.tmpExtent_),v=$t(h.getTileSize(c[0]),this.tmpSize),p=this.gutter_;p!==0&&(v=Fh(v,p,this.tmpSize),u=Ga(u,d*p,u)),o&&o!==s&&(d=Ya(o,s,e,d),u=ys(u,s,o),e=or(e,s,o));var f={SERVICE:"WMS",VERSION:je,REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.params_.LAYERS};ot(f,this.params_,n);var g=Math.floor((e[0]-u[0])/d),m=Math.floor((u[3]-e[1])/d);return f[this.v13_?"I":"X"]=g,f[this.v13_?"J":"Y"]=m,this.getRequestUrl_(c,v,u,1,o||s,f)}},t.prototype.getLegendUrl=function(e,a){if(this.urls[0]!==void 0){var r={SERVICE:"WMS",VERSION:je,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(a===void 0||a.LAYER===void 0){var n=this.params_.LAYERS,s=!Array.isArray(n)||n.length===1;if(!s)return;r.LAYER=n}if(e!==void 0){var o=this.getProjection()?this.getProjection().getMetersPerUnit():1,h=28e-5;r.SCALE=e*o/h}return ot(r,a),zn(this.urls[0],r)}},t.prototype.getGutter=function(){return this.gutter_},t.prototype.getParams=function(){return this.params_},t.prototype.getRequestUrl_=function(e,a,r,n,s,o){var h=this.urls;if(!!h){if(o.WIDTH=a[0],o.HEIGHT=a[1],o[this.v13_?"CRS":"SRS"]=s.getCode(),"STYLES"in this.params_||(o.STYLES=""),n!=1)switch(this.serverType_){case Ue.GEOSERVER:var l=90*n+.5|0;"FORMAT_OPTIONS"in o?o.FORMAT_OPTIONS+=";dpi:"+l:o.FORMAT_OPTIONS="dpi:"+l;break;case Ue.MAPSERVER:o.MAP_RESOLUTION=90*n;break;case Ue.CARMENTA_SERVER:case Ue.QGIS:o.DPI=90*n;break;default:J(!1,52);break}var c=s.getAxisOrientation(),d=r;if(this.v13_&&c.substr(0,2)=="ne"){var u=void 0;u=r[0],d[0]=r[1],d[1]=u,u=r[2],d[2]=r[3],d[3]=u}o.BBOX=d.join(",");var v;if(h.length==1)v=h[0];else{var p=di(fd(e),h.length);v=h[p]}return zn(v,o)}},t.prototype.getTilePixelRatio=function(e){return!this.hidpi_||this.serverType_===void 0?1:e},t.prototype.getKeyForParams_=function(){var e=0,a=[];for(var r in this.params_)a[e++]=r+"-"+this.params_[r];return a.join("/")},t.prototype.updateParams=function(e){ot(this.params_,e),this.updateV13_(),this.setKey(this.getKeyForParams_())},t.prototype.updateV13_=function(){var e=this.params_.VERSION||je;this.v13_=Hl(e,"1.3")>=0},t.prototype.tileUrlFunction=function(e,a,r){var n=this.getTileGrid();if(n||(n=this.getTileGridForProjection(r)),!(n.getResolutions().length<=e[0])){a!=1&&(!this.hidpi_||this.serverType_===void 0)&&(a=1);var s=n.getResolution(e[0]),o=n.getTileCoordExtent(e,this.tmpExtent_),h=$t(n.getTileSize(e[0]),this.tmpSize),l=this.gutter_;l!==0&&(h=Fh(h,l,this.tmpSize),o=Ga(o,s*l,o)),a!=1&&(h=Kc(h,a,this.tmpSize));var c={SERVICE:"WMS",VERSION:je,REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};return ot(c,this.params_),this.getRequestUrl_(e,h,o,a,r,c)}},t}(bd);const N8=D8;var B8=function(){function i(t){this.rbush_=new Jc(t),this.items_={}}return i.prototype.insert=function(t,e){var a={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3],value:e};this.rbush_.insert(a),this.items_[nt(e)]=a},i.prototype.load=function(t,e){for(var a=new Array(e.length),r=0,n=e.length;r<n;r++){var s=t[r],o=e[r],h={minX:s[0],minY:s[1],maxX:s[2],maxY:s[3],value:o};a[r]=h,this.items_[nt(o)]=h}this.rbush_.load(a)},i.prototype.remove=function(t){var e=nt(t),a=this.items_[e];return delete this.items_[e],this.rbush_.remove(a)!==null},i.prototype.update=function(t,e){var a=this.items_[nt(e)],r=[a.minX,a.minY,a.maxX,a.maxY];Tn(r,t)||(this.remove(e),this.insert(t,e))},i.prototype.getAll=function(){var t=this.rbush_.all();return t.map(function(e){return e.value})},i.prototype.getInExtent=function(t){var e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]},a=this.rbush_.search(e);return a.map(function(r){return r.value})},i.prototype.forEach=function(t){return this.forEach_(this.getAll(),t)},i.prototype.forEachInExtent=function(t,e){return this.forEach_(this.getInExtent(t),e)},i.prototype.forEach_=function(t,e){for(var a,r=0,n=t.length;r<n;r++)if(a=e(t[r]),a)return a;return a},i.prototype.isEmpty=function(){return Ba(this.items_)},i.prototype.clear=function(){this.rbush_.clear(),this.items_={}},i.prototype.getExtent=function(t){var e=this.rbush_.toJSON();return ve(e.minX,e.minY,e.maxX,e.maxY,t)},i.prototype.concat=function(t){this.rbush_.load(t.rbush_.all());for(var e in t.items_)this.items_[e]=t.items_[e]},i}();const t1=B8,Jt={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature",FEATURESLOADSTART:"featuresloadstart",FEATURESLOADEND:"featuresloadend",FEATURESLOADERROR:"featuresloaderror"};function G8(i,t){return[[-1/0,-1/0,1/0,1/0]]}const za={ARRAY_BUFFER:"arraybuffer",JSON:"json",TEXT:"text",XML:"xml"};var $8=!1;function V8(i,t,e,a,r,n,s){var o=new XMLHttpRequest;o.open("GET",typeof i=="function"?i(e,a,r):i,!0),t.getType()==za.ARRAY_BUFFER&&(o.responseType="arraybuffer"),o.withCredentials=$8,o.onload=function(h){if(!o.status||o.status>=200&&o.status<300){var l=t.getType(),c=void 0;l==za.JSON||l==za.TEXT?c=o.responseText:l==za.XML?(c=o.responseXML,c||(c=new DOMParser().parseFromString(o.responseText,"application/xml"))):l==za.ARRAY_BUFFER&&(c=o.response),c?n(t.readFeatures(c,{extent:e,featureProjection:r}),t.readProjection(c)):s()}else s()},o.onerror=s,o.send()}function e1(i,t){return function(e,a,r,n,s){var o=this;V8(i,t,e,a,r,function(h,l){o.addFeatures(h),n!==void 0&&n(h)},s||Wa)}}var Ad=globalThis&&globalThis.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function a(){this.constructor=t}t.prototype=e===null?Object.create(e):(a.prototype=e.prototype,new a)}}(),Fe=function(i){Ad(t,i);function t(e,a,r){var n=i.call(this,e)||this;return n.feature=a,n.features=r,n}return t}(gi),j8=function(i){Ad(t,i);function t(e){var a=this,r=e||{};a=i.call(this,{attributions:r.attributions,interpolate:!0,projection:void 0,state:Gn.READY,wrapX:r.wrapX!==void 0?r.wrapX:!0})||this,a.on,a.once,a.un,a.loader_=Wa,a.format_=r.format,a.overlaps_=r.overlaps===void 0?!0:r.overlaps,a.url_=r.url,r.loader!==void 0?a.loader_=r.loader:a.url_!==void 0&&(J(a.format_,7),a.loader_=e1(a.url_,a.format_)),a.strategy_=r.strategy!==void 0?r.strategy:G8;var n=r.useSpatialIndex!==void 0?r.useSpatialIndex:!0;a.featuresRtree_=n?new t1:null,a.loadedExtentsRtree_=new t1,a.loadingExtentsCount_=0,a.nullGeometryFeatures_={},a.idIndex_={},a.uidIndex_={},a.featureChangeKeys_={},a.featuresCollection_=null;var s,o;return Array.isArray(r.features)?o=r.features:r.features&&(s=r.features,o=s.getArray()),!n&&s===void 0&&(s=new ud(o)),o!==void 0&&a.addFeaturesInternal(o),s!==void 0&&a.bindFeaturesCollection_(s),a}return t.prototype.addFeature=function(e){this.addFeatureInternal(e),this.changed()},t.prototype.addFeatureInternal=function(e){var a=nt(e);if(!this.addToIndex_(a,e)){this.featuresCollection_&&this.featuresCollection_.remove(e);return}this.setupChangeEvents_(a,e);var r=e.getGeometry();if(r){var n=r.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(n,e)}else this.nullGeometryFeatures_[a]=e;this.dispatchEvent(new Fe(Jt.ADDFEATURE,e))},t.prototype.setupChangeEvents_=function(e,a){this.featureChangeKeys_[e]=[re(a,zt.CHANGE,this.handleFeatureChange_,this),re(a,xc.PROPERTYCHANGE,this.handleFeatureChange_,this)]},t.prototype.addToIndex_=function(e,a){var r=!0,n=a.getId();return n!==void 0&&(n.toString()in this.idIndex_?r=!1:this.idIndex_[n.toString()]=a),r&&(J(!(e in this.uidIndex_),30),this.uidIndex_[e]=a),r},t.prototype.addFeatures=function(e){this.addFeaturesInternal(e),this.changed()},t.prototype.addFeaturesInternal=function(e){for(var a=[],r=[],n=[],s=0,o=e.length;s<o;s++){var h=e[s],l=nt(h);this.addToIndex_(l,h)&&r.push(h)}for(var s=0,c=r.length;s<c;s++){var h=r[s],l=nt(h);this.setupChangeEvents_(l,h);var d=h.getGeometry();if(d){var u=d.getExtent();a.push(u),n.push(h)}else this.nullGeometryFeatures_[l]=h}if(this.featuresRtree_&&this.featuresRtree_.load(a,n),this.hasListener(Jt.ADDFEATURE))for(var s=0,v=r.length;s<v;s++)this.dispatchEvent(new Fe(Jt.ADDFEATURE,r[s]))},t.prototype.bindFeaturesCollection_=function(e){var a=!1;this.addEventListener(Jt.ADDFEATURE,function(r){a||(a=!0,e.push(r.feature),a=!1)}),this.addEventListener(Jt.REMOVEFEATURE,function(r){a||(a=!0,e.remove(r.feature),a=!1)}),e.addEventListener(Bi.ADD,function(r){a||(a=!0,this.addFeature(r.element),a=!1)}.bind(this)),e.addEventListener(Bi.REMOVE,function(r){a||(a=!0,this.removeFeature(r.element),a=!1)}.bind(this)),this.featuresCollection_=e},t.prototype.clear=function(e){if(e){for(var a in this.featureChangeKeys_){var r=this.featureChangeKeys_[a];r.forEach(qt)}this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){var n=function(h){this.removeFeatureInternal(h)}.bind(this);this.featuresRtree_.forEach(n);for(var s in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[s])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};var o=new Fe(Jt.CLEAR);this.dispatchEvent(o),this.changed()},t.prototype.forEachFeature=function(e){if(this.featuresRtree_)return this.featuresRtree_.forEach(e);this.featuresCollection_&&this.featuresCollection_.forEach(e)},t.prototype.forEachFeatureAtCoordinateDirect=function(e,a){var r=[e[0],e[1],e[0],e[1]];return this.forEachFeatureInExtent(r,function(n){var s=n.getGeometry();if(s.intersectsCoordinate(e))return a(n)})},t.prototype.forEachFeatureInExtent=function(e,a){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(e,a);this.featuresCollection_&&this.featuresCollection_.forEach(a)},t.prototype.forEachFeatureIntersectingExtent=function(e,a){return this.forEachFeatureInExtent(e,function(r){var n=r.getGeometry();if(n.intersectsExtent(e)){var s=a(r);if(s)return s}})},t.prototype.getFeaturesCollection=function(){return this.featuresCollection_},t.prototype.getFeatures=function(){var e;return this.featuresCollection_?e=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(e=this.featuresRtree_.getAll(),Ba(this.nullGeometryFeatures_)||Ac(e,X2(this.nullGeometryFeatures_))),e},t.prototype.getFeaturesAtCoordinate=function(e){var a=[];return this.forEachFeatureAtCoordinateDirect(e,function(r){a.push(r)}),a},t.prototype.getFeaturesInExtent=function(e){return this.featuresRtree_?this.featuresRtree_.getInExtent(e):this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]},t.prototype.getClosestFeatureToCoordinate=function(e,a){var r=e[0],n=e[1],s=null,o=[NaN,NaN],h=1/0,l=[-1/0,-1/0,1/0,1/0],c=a||s4;return this.featuresRtree_.forEachInExtent(l,function(d){if(c(d)){var u=d.getGeometry(),v=h;if(h=u.closestPointXY(r,n,o,h),h<v){s=d;var p=Math.sqrt(h);l[0]=r-p,l[1]=n-p,l[2]=r+p,l[3]=n+p}}}),s},t.prototype.getExtent=function(e){return this.featuresRtree_.getExtent(e)},t.prototype.getFeatureById=function(e){var a=this.idIndex_[e.toString()];return a!==void 0?a:null},t.prototype.getFeatureByUid=function(e){var a=this.uidIndex_[e];return a!==void 0?a:null},t.prototype.getFormat=function(){return this.format_},t.prototype.getOverlaps=function(){return this.overlaps_},t.prototype.getUrl=function(){return this.url_},t.prototype.handleFeatureChange_=function(e){var a=e.target,r=nt(a),n=a.getGeometry();if(!n)r in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(a),this.nullGeometryFeatures_[r]=a);else{var s=n.getExtent();r in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[r],this.featuresRtree_&&this.featuresRtree_.insert(s,a)):this.featuresRtree_&&this.featuresRtree_.update(s,a)}var o=a.getId();if(o!==void 0){var h=o.toString();this.idIndex_[h]!==a&&(this.removeFromIdIndex_(a),this.idIndex_[h]=a)}else this.removeFromIdIndex_(a),this.uidIndex_[r]=a;this.changed(),this.dispatchEvent(new Fe(Jt.CHANGEFEATURE,a))},t.prototype.hasFeature=function(e){var a=e.getId();return a!==void 0?a in this.idIndex_:nt(e)in this.uidIndex_},t.prototype.isEmpty=function(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&Ba(this.nullGeometryFeatures_):this.featuresCollection_?this.featuresCollection_.getLength()===0:!0},t.prototype.loadFeatures=function(e,a,r){for(var n=this.loadedExtentsRtree_,s=this.strategy_(e,a,r),o=function(d,u){var v=s[d],p=n.forEachInExtent(v,function(f){return $e(f.extent,v)});p||(++h.loadingExtentsCount_,h.dispatchEvent(new Fe(Jt.FEATURESLOADSTART)),h.loader_.call(h,v,a,r,function(f){--this.loadingExtentsCount_,this.dispatchEvent(new Fe(Jt.FEATURESLOADEND,void 0,f))}.bind(h),function(){--this.loadingExtentsCount_,this.dispatchEvent(new Fe(Jt.FEATURESLOADERROR))}.bind(h)),n.insert(v,{extent:v.slice()}))},h=this,l=0,c=s.length;l<c;++l)o(l);this.loading=this.loader_.length<4?!1:this.loadingExtentsCount_>0},t.prototype.refresh=function(){this.clear(!0),this.loadedExtentsRtree_.clear(),i.prototype.refresh.call(this)},t.prototype.removeLoadedExtent=function(e){var a=this.loadedExtentsRtree_,r;a.forEachInExtent(e,function(n){if(Tn(n.extent,e))return r=n,!0}),r&&a.remove(r)},t.prototype.removeFeature=function(e){if(!!e){var a=nt(e);a in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[a]:this.featuresRtree_&&this.featuresRtree_.remove(e);var r=this.removeFeatureInternal(e);r&&this.changed()}},t.prototype.removeFeatureInternal=function(e){var a=nt(e),r=this.featureChangeKeys_[a];if(!!r){r.forEach(qt),delete this.featureChangeKeys_[a];var n=e.getId();return n!==void 0&&delete this.idIndex_[n.toString()],delete this.uidIndex_[a],this.dispatchEvent(new Fe(Jt.REMOVEFEATURE,e)),e}},t.prototype.removeFromIdIndex_=function(e){var a=!1;for(var r in this.idIndex_)if(this.idIndex_[r]===e){delete this.idIndex_[r],a=!0;break}return a},t.prototype.setLoader=function(e){this.loader_=e},t.prototype.setUrl=function(e){J(this.format_,7),this.url_=e,this.setLoader(e1(e,this.format_))},t}(ks);const wd=j8;/**
 * @license
 * Copyright 2000-2022 Vaadin Ltd.
 * This program is available under Commercial Vaadin Developer License 4.0, available at https://vaadin.com/license/cvdl-4.0.
 */function Ds(i,t,e){if(!i)throw new Error("Can not instantiate base class: ol/source/Source");return i.setAttributions(t.attributions),i}function U8(i,t,e){if(!i)throw new Error("Can not instantiate base class: ol/source/Tile");return Ds(i,t),i}function W8(i,t,e){if(!i)throw new Error("Can not instantiate base class: ol/source/UrlTile");return U8(i,t),t.url&&i.setUrl(t.url),i}function Ed(i,t,e){if(!i)throw new Error("Can not instantiate base class: ol/source/TileImage");return W8(i,t),i}function Y8(i,t,e){return i||(i=new N8(Ee(t))),Ed(i,t),i}function Cd(i,t,e){return i||(i=new zd(Ee(t))),Ed(i,t),i}function q8(i,t,e){return i||(i=new k8(Ee(t))),t.attributions||(t.attributions=xd),Cd(i,t),i}function H8(i,t,e){if(!i)throw new Error("Can not instantiate base class: ol/source/Image");return Ds(i,t),i}function X8(i,t,e){return i||(i=new n8(Ee(t))),H8(i,t),t.url&&i.setUrl(t.url),i}function Z8(i,t,e){return i||(i=new wd(Ee({...t,features:new ud}))),Ds(i,t),cd(i.getFeaturesCollection(),t.features,e),i}function K8(i,t,e){return i||(i=new ad),i.setColor(t.color),e.connector.forceRender(),i}function Q8(i,t,e){return i||(i=new rd),i.setColor(t.color),i.setWidth(t.width),e.connector.forceRender(),i}function J8(i,t,e){if(!i)throw new Error("Can not instantiate base class: ol/style/Image");return i.setOpacity(t.opacity),i.setRotateWithView(t.rotateWithView),i.setRotation(t.rotation),i.setScale(t.scale),i}function ty(i){return i.toLowerCase().replace(/_/,"-")}function ey(i,t,e){if(!i){const a=t.img||t.src;i=new od(Ee({...t,img:void 0,src:a,imgSize:t.imgSize?j6(t.imgSize):void 0,anchor:t.anchor?bn(t.anchor):void 0,anchorOrigin:t.anchorOrigin?ty(t.anchorOrigin):void 0}))}return J8(i,t),e.connector.forceRender(),i}function iy(i,t,e){return i||(i=new N_),i.setImage(t.image?e.lookup.get(t.image):void 0),i.setFill(t.fill?e.lookup.get(t.fill):void 0),i.setStroke(t.stroke?e.lookup.get(t.stroke):void 0),e.connector.forceRender(),i}/**
 * @license
 * Copyright 2000-2022 Vaadin Ltd.
 * This program is available under Commercial Vaadin Developer License 4.0, available at https://vaadin.com/license/cvdl-4.0.
 */function ay(i,t,e){if(!i)throw new Error("Existing map instance must be provided");return cd(i.getLayers(),t.layers,e),i.setView(e.lookup.get(t.view)),i}function ry(i,t,e){return i||(i=new vm({projection:t.projection})),i.setCenter(t.center?bn(t.center):[0,0]),i.setRotation(t.rotation||0),i.setZoom(t.zoom||0),i}function ny(i,t,e){return i||(i=new Sc(bn(t.coordinates))),i.setCoordinates(bn(t.coordinates)),i}function sy(i,t,e){return i||(i=new g4),i.setGeometry(e.lookup.get(t.geometry)),i.setStyle(e.lookup.get(t.style)),i}const oy={"ol/Feature":sy,"ol/Map":ay,"ol/View":ry,"ol/layer/Image":Y6,"ol/layer/Tile":U6,"ol/layer/Vector":W6,"ol/source/ImageWMS":X8,"ol/source/OSM":q8,"ol/source/TileWMS":Y8,"ol/source/Vector":Z8,"ol/source/XYZ":Cd,"ol/geom/Point":ny,"ol/style/Icon":ey,"ol/style/Fill":K8,"ol/style/Stroke":Q8,"ol/style/Style":iy};function i1(i,t){const e=i.type;if(!e)throw new Error("Configuration object must have a type");if(!i.id)throw new Error("Configuration object must have an ID");let a=t.lookup.get(i.id);const r=oy[e];if(!r)throw new Error(`Unsupported configuration object type: ${e}`);return a=r(a,i,t),t.lookup.put(i.id,a),a.id=i.id,a.typeName=e,a}class hy{constructor(){this.map=new Map}get(t){return this.map.get(t)}put(t,e){this.map.set(t,e)}}class ly{constructor(){this.map=new Map,this.registry=new FinalizationRegistry(t=>{this.map.delete(t)})}get(t){const e=this.map.get(t);return e?e.deref():void 0}put(t,e){if(this.map.has(t))return;const a=new WeakRef(e);this.map.set(t,a),this.registry.register(e,t)}}const cy=window.WeakRef&&window.FinalizationRegistry;function dy(){return cy?new ly:new hy}function uy(i,t){return i.find(e=>{const a=e.getSource&&e.getSource();return a&&a instanceof wd&&a.getFeatures().includes(t)})}Ql("EPSG:4326");(function(){function i(a){a.$connector={lookup:dy(),synchronize(r){const n={synchronize:i1,lookup:this.lookup,mapElement:a,connector:a.$connector};r.forEach(s=>{s.type==="ol/Map"&&this.lookup.put(s.id,a.configuration),i1(s,n)})},forceRender(){this._forceRenderTimeout||(this._forceRenderTimeout=setTimeout(()=>{this._forceRenderTimeout=null,a.configuration.getLayers().getArray().forEach(r=>r.changed())}))}},a.configuration.on("moveend",r=>{const n=a.configuration.getView(),s=n.getCenter(),o=n.getRotation(),h=n.getZoom(),l=n.calculateExtent(),c=new CustomEvent("map-view-moveend",{detail:{center:s,rotation:o,zoom:h,extent:l}});a.dispatchEvent(c)}),a.configuration.on("singleclick",r=>{const n=r.coordinate,s=r.pixel,h=a.configuration.getFeaturesAtPixel(s).map(c=>{const d=uy(a.configuration.getLayers().getArray(),c);return{feature:c,layer:d}}),l=new CustomEvent("map-click",{detail:{coordinate:n,features:h,originalEvent:r.originalEvent}});if(a.dispatchEvent(l),h.length>0){const c=h[0],d=new CustomEvent("map-feature-click",{detail:{feature:c.feature,layer:c.layer,originalEvent:r.originalEvent}});a.dispatchEvent(d)}})}function t(a){Ql(a)}function e(a,r){Dt.defs(a,r),bp(Dt)}window.Vaadin.Flow.mapConnector={init:i,setUserProjection:t,defineProjection:e}})();const vy={"\\u0660":"0","\\u0661":"1","\\u0662":"2","\\u0663":"3","\\u0664":"4","\\u0665":"5","\\u0666":"6","\\u0667":"7","\\u0668":"8","\\u0669":"9"};function py(i){return i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Id(i){return i.replace(/[\u0660-\u0669]/g,function(t){const e="\\u0"+t.charCodeAt(0).toString(16);return vy[e]})}function Sd(i,t){const e=t.toLocaleTimeString(i),a=/[^\d\u0660-\u0669]/,r=e.match(new RegExp(`${a.source}+$`,"g"))||e.match(new RegExp(`^${a.source}+`,"g"));return r&&r[0].trim()}function fy(i){let t=Ns.toLocaleTimeString(i);const e=Td(i);e&&t.startsWith(e)&&(t=t.replace(e,""));const a=t.match(/[^\u0660-\u0669\s\d]/);return a&&a[0]}function a1(i,t){if(!t)return null;const e=t.split(/\s*/).map(py).join("\\s*"),a=new RegExp(e,"i"),r=i.match(a);if(r)return r[0]}const Ns=new Date("August 19, 1975 23:15:30"),gy=new Date("August 19, 1975 05:15:30");function Td(i){return Sd(i,Ns)}function my(i){return Sd(i,gy)}function p0(i){return parseInt(Id(i))}function _y(i){return i=Id(i),i.length===1?i+="00":i.length===2&&(i+="0"),parseInt(i)}function yy(i,t,e,a){let r=i;if(i.endsWith(e)?r=i.replace(" "+e,""):i.endsWith(a)&&(r=i.replace(" "+a,"")),t){let n=t<10?"0":"";n+=t<100?"0":"",n+=t,r+="."+n}else r+=".000";return i.endsWith(e)?r=r+" "+e:i.endsWith(a)&&(r=r+" "+a),r}(function(){const i=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Time Picker")};function t(e,a,r=0){e()?a():setTimeout(()=>t(e,a,200),r)}window.Vaadin.Flow.timepickerConnector={initLazy:e=>i(function(a){a.$connector||(a.$connector={},a.$connector.setLocale=i(function(r){let n;a.value&&a.value!==""&&(n=a.i18n.parseTime(a.value));try{Ns.toLocaleTimeString(r)}catch{throw r="en-US",new Error("vaadin-time-picker: The locale "+r+" is not supported, falling back to default locale setting(en-US).")}const s=Td(r),o=my(r),h=fy(r),l=function(){return a.step&&a.step<60},c=function(){return a.step&&a.step<1};let d,u;a.i18n={formatTime:i(function(v){if(!v)return;const p=new Date;p.setHours(v.hours),p.setMinutes(v.minutes),p.setSeconds(v.seconds!==void 0?v.seconds:0);let f=p.toLocaleTimeString(r,{hour:"numeric",minute:"numeric",second:l()?"numeric":void 0});return c()&&(f=yy(f,v.milliseconds,o,s)),f}),parseTime:i(function(v){if(v&&v===d&&u)return u;if(!v)return;const p=a1(v,o),f=a1(v,s),g=v.replace(p||"","").replace(f||"","").trim(),m=new RegExp("([\\d\\u0660-\\u0669]){1,2}(?:"+h+")?","g");let _=m.exec(g);if(_){_=p0(_[0].replace(h,"")),p!==f&&(_===12&&p&&(_=0),_!==12&&f&&(_+=12));const y=m.exec(g),M=y&&m.exec(g),b=/[[\.][\d\u0660-\u0669]{1,3}$/;let z=M&&c()&&b.exec(g);return z&&z.index<=M.index&&(z=void 0),u=_!==void 0&&{hours:_,minutes:y?p0(y[0].replace(h,"")):0,seconds:M?p0(M[0].replace(h,"")):0,milliseconds:y&&M&&z?_y(z[0].replace(".","")):0},d=v,u}})},n&&t(()=>a.$,()=>{const v=a.i18n.formatTime(n);a.inputElement.value!==v&&(a.inputElement.value=v,a.$.comboBox.value=v)})}))})(e)}})();window.Vaadin.Flow.virtualListConnector={initLazy:function(i){if(i.$connector)return;const t=20;let e=[0,0];i.$connector={},i.$connector.placeholderItem={__placeholder:!0};const a=function(){const n=[...i.children].filter(c=>"__virtualListIndex"in c).map(c=>c.__virtualListIndex),s=Math.min(...n),o=Math.max(...n);let h=Math.max(0,s-t),l=Math.min(o+t,i.items.length);if(e[0]!=h||e[1]!=l){e=[h,l];const c=1+l-h;i.$server.setRequestedRange(h,c)}},r=function(){i.__requestDebounce=Ja.debounce(i.__requestDebounce,Gi.after(50),a)};requestAnimationFrame(()=>a),i.patchVirtualListRenderer=function(){if(!i.renderer||i.renderer.__virtualListConnectorPatched)return;const n=i.renderer,s=(o,h,l)=>{o.__virtualListIndex=l.index,l.item===void 0?n.call(h,o,h,{...l,item:h.$connector.placeholderItem}):n.call(h,o,h,l),r()};s.__virtualListConnectorPatched=!0,s.__rendererId=n.__rendererId,i.renderer=s},i._createPropertyObserver("renderer","patchVirtualListRenderer",!0),i.patchVirtualListRenderer(),i.items=[],i.$connector.set=function(n,s){i.items.splice(n,s.length,...s),i.items=[...i.items]},i.$connector.clear=function(n,s){const o=Math.min(s,i.items.length-n);i.$connector.set(n,[...Array(o)])},i.$connector.updateData=function(n){const s=n.reduce((o,h)=>(o[h.key]=h,o),{});i.items=i.items.map(o=>o&&(s[o.key]||o))},i.$connector.updateSize=function(n){const s=n-i.items.length;s>0?i.items=[...i.items,...Array(s)]:s<0&&(i.items=i.items.slice(0,n))},i.$connector.setPlaceholderItem=function(n={}){n.__placeholder=!0,i.$connector.placeholderItem=n}}};R("vaadin-grid-tree-toggle",O`
    :host {
      --vaadin-grid-tree-toggle-level-offset: 2em;
      align-items: center;
      vertical-align: middle;
      margin-left: calc(var(--lumo-space-s) * -1);
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([leaf])) {
      cursor: default;
    }

    [part='toggle'] {
      display: inline-block;
      font-size: 1.5em;
      line-height: 1;
      width: 1em;
      height: 1em;
      text-align: center;
      color: var(--lumo-contrast-50pct);
      cursor: var(--lumo-clickable-cursor);
      /* Increase touch target area */
      padding: calc(1em / 3);
      margin: calc(1em / -3);
    }

    :host(:not([dir='rtl'])) [part='toggle'] {
      margin-right: 0;
    }

    @media (hover: hover) {
      :host(:hover) [part='toggle'] {
        color: var(--lumo-contrast-80pct);
      }
    }

    [part='toggle']::before {
      font-family: 'lumo-icons';
      display: inline-block;
      height: 100%;
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
    }

    :host([expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
      transform: rotate(90deg);
    }

    /* Experimental support for hierarchy connectors, using an unsupported selector */
    :host([theme~='connectors']) #level-spacer {
      position: relative;
      z-index: -1;
      font-size: 1em;
      height: 1.5em;
    }

    :host([theme~='connectors']) #level-spacer::before {
      display: block;
      content: '';
      margin-top: calc(var(--lumo-space-m) * -1);
      height: calc(var(--lumo-space-m) + 3em);
      background-image: linear-gradient(
        to right,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
      background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
    }

    /* RTL specific styles */

    :host([dir='rtl']) {
      margin-left: 0;
      margin-right: calc(var(--lumo-space-s) * -1);
    }

    :host([dir='rtl']) [part='toggle'] {
      margin-left: 0;
    }

    :host([dir='rtl'][expanded]) [part='toggle']::before {
      transform: rotate(-90deg);
    }

    :host([dir='rtl'][theme~='connectors']) #level-spacer::before {
      background-image: linear-gradient(
        to left,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
    }

    :host([dir='rtl']:not([expanded])) [part='toggle']::before,
    :host([dir='rtl'][expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-left);
    }
  `,{moduleId:"lumo-grid-tree-toggle"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rd=document.createElement("template");Rd.innerHTML=`
  <style>
    @font-face {
      font-family: "vaadin-grid-tree-icons";
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Rd.content);class r1 extends X(es(Y)){static get template(){return V`
      <style>
        :host {
          display: inline-flex;
          align-items: baseline;
          max-width: 100%;

          /* CSS API for :host */
          --vaadin-grid-tree-toggle-level-offset: 1em;
          --_collapsed-icon: '\\e7be\\00a0';
        }

        :host([dir='rtl']) {
          --_collapsed-icon: '\\e7bd\\00a0';
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([leaf])) {
          cursor: pointer;
        }

        #level-spacer,
        [part='toggle'] {
          flex: none;
        }

        #level-spacer {
          display: inline-block;
          width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
        }

        [part='toggle']::before {
          font-family: 'vaadin-grid-tree-icons';
          line-height: 1em; /* make icon font metrics not affect baseline */
        }

        :host(:not([expanded])) [part='toggle']::before {
          content: var(--_collapsed-icon);
        }

        :host([expanded]) [part='toggle']::before {
          content: '\\e7bc\\00a0'; /* icon glyph + single non-breaking space */
        }

        :host([leaf]) [part='toggle'] {
          visibility: hidden;
        }

        slot {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>

      <span id="level-spacer"></span>
      <span part="toggle"></span>
      <slot></slot>
    `}static get is(){return"vaadin-grid-tree-toggle"}static get properties(){return{level:{type:Number,value:0,observer:"_levelChanged"},leaf:{type:Boolean,value:!1,reflectToAttribute:!0},expanded:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0}}}ready(){super.ready(),this.addEventListener("click",t=>this._onClick(t))}_onClick(t){this.leaf||du(t.target)||(t.preventDefault(),this.expanded=!this.expanded)}_levelChanged(t){const e=Number(t).toString();this.style.setProperty("---level",e)}}customElements.define(r1.is,r1);R("vaadin-icon",O`
    :host {
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }
  `,{moduleId:"lumo-icon"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const My="vaadin";class n1 extends X(rt(Y)){static get template(){return V`
      <style>
        :host {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          vertical-align: middle;
          width: 24px;
          height: 24px;
          fill: currentColor;
        }

        :host([hidden]) {
          display: none !important;
        }

        svg {
          display: block;
          width: 100%;
          height: 100%;
        }
      </style>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="[[__computeViewBox(size, __viewBox)]]"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      ></svg>
    `}static get is(){return"vaadin-icon"}static get properties(){return{icon:{type:String,observer:"__iconChanged"},svg:{type:Object},size:{type:Number,value:24},__svgElement:Object,__viewBox:String}}static get observers(){return["__svgChanged(svg, __svgElement)"]}constructor(){super(),this.__onIconsetRegistered=this.__onIconsetRegistered.bind(this)}ready(){super.ready(),this.__svgElement=this.shadowRoot.querySelector("svg")}__getIconsetName(t){return t?t.split(":")[0]||My:void 0}__onIconsetRegistered(t){t.detail===this.__getIconsetName(this.icon)&&this.__iconChanged(this.icon)}connectedCallback(){super.connectedCallback(),document.addEventListener("vaadin-iconset-registered",this.__onIconsetRegistered)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("vaadin-iconset-registered",this.__onIconsetRegistered)}__iconChanged(t){if(t){this.__checkDeprecatedIcon(t);const e=this.__getIconsetName(t),a=uu.getIconset(e),{svg:r,size:n,viewBox:s}=a.applyIcon(t);s&&(this.__viewBox=s),n!==this.size&&(this.size=n),this.svg=r}else this.svg=vu(null)}__checkDeprecatedIcon(t){const e={"vaadin:buss":"vaadin:bus","vaadin:funcion":"vaadin:function","vaadin:megafone":"vaadin:megaphone","vaadin:palete":"vaadin:palette","vaadin:trendind-down":"vaadin:trending-down"};t in e&&console.warn(`WARNING: The icon "${t}" is deprecated. Use "${e[t]}" instead`)}__svgChanged(t,e){!e||pu(t,e)}__computeViewBox(t,e){return e||`0 0 ${t} ${t}`}}customElements.define(n1.is,n1);/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Od=document.createElement("template");Od.innerHTML=`<vaadin-iconset name="vaadin" size="16">
<svg><defs>
<g id="vaadin:abacus"><path d="M0 0v16h16v-16h-16zM14 2v3h-0.1c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-3h12zM13.9 10c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-4h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1l-0.1 4zM2 14v-3h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1v3h-12z"></path></g>
<g id="vaadin:absolute-position"><path d="M0 0v16h16v-16h-16zM15 15h-14v-6h3v1l3-2-3-2v1h-3v-6h6v3h-1l2 3 2-3h-1v-3h6v14z"></path></g>
<g id="vaadin:academy-cap"><path d="M15.090 12.79c0.235-0.185 0.385-0.469 0.385-0.789 0-0.358-0.188-0.672-0.471-0.849l-0.004-5.822-1 0.67v5.15c-0.283 0.18-0.468 0.492-0.468 0.847 0 0.316 0.147 0.598 0.376 0.782l-0.378 0.502c-0.323 0.41-0.521 0.931-0.53 1.498l-0 1.222h0.81c0.002 0 0.004 0 0.005 0 0.411 0 0.757-0.282 0.853-0.664l0.331-1.336v2h1v-1.21c-0.009-0.569-0.207-1.090-0.534-1.505z"></path><path d="M8 0l-8 4 8 5 8-5-8-4z"></path><path d="M8 10l-5-3.33v1.71c0 0.91 2.94 3.62 5 3.62s5-2.71 5-3.62v-1.71z"></path></g>
<g id="vaadin:accessibility"><path d="M10.4 10h-0.5c0.1 0.3 0.1 0.7 0.1 1 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.1 1.6-3.8 3.7-4l-0.2-1c-2.6 0.4-4.5 2.4-4.5 5 0 2.8 2.2 5 5 5 2.4 0 4.4-1.7 4.9-3.9l-0.5-2.1z"></path><path d="M13.1 13l-1.1-5h-4.1l-0.2-1h3.3v-1h-3.5l-0.6-2.5c0.9-0.1 1.6-0.8 1.6-1.7 0-1-0.8-1.8-1.8-1.8s-1.7 0.8-1.7 1.8c0 0.6 0.3 1.2 0.8 1.5l1.3 5.7h4.1l1.2 5h2.6v-1h-1.9z"></path></g>
<g id="vaadin:accordion-menu"><path d="M0 4v8h16v-8h-16zM15 11h-14v-4h14v4z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M0 13h16v3h-16v-3z"></path></g>
<g id="vaadin:add-dock"><path d="M0 11v5h16v-5h-16zM12 15h-3v-3h3v3z"></path><path d="M12 7v-2c0-5-8-5-8-5s5 0 5 5v2h-2l3.5 3 3.5-3h-2z"></path></g>
<g id="vaadin:adjust"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM2 8c0-3.3 2.7-6 6-6v12c-3.3 0-6-2.7-6-6z"></path></g>
<g id="vaadin:adobe-flash"><path d="M0 0v16h16v-16h-16zM13 4.4c-3 0-3.3 2.6-3.3 2.6h1.3v2h-2.4c-1.8 5.8-5.6 5-5.6 5v-2.5c0 0 2.5 0.6 3.9-4 1.8-6.1 6.1-5.5 6.1-5.5v2.4z"></path></g>
<g id="vaadin:airplane"><path d="M12.3 6.5c0.5-0.5 0.9-0.8 1.2-1.1 1.6-1.6 3.2-4.1 2.2-5.1s-3.4 0.6-5 2.2c-0.3 0.3-0.6 0.7-1.1 1.2l-7-3.2c-0.7-0.3-1.5-0.2-2 0.3l-0.6 0.5 6.6 5.7c-1.3 1.6-2.7 3.1-3.4 4l-1.1-0.6c-0.5-0.3-1.2-0.3-1.6 0.2l-0.3 0.3 2.8 2.1 2 2.8 0.3-0.3c0.4-0.4 0.5-1.1 0.2-1.6l-0.5-1.1c0.9-0.7 2.4-2.1 4-3.4l5.7 6.6 0.5-0.5c0.5-0.5 0.6-1.3 0.3-2l-3.2-7z"></path></g>
<g id="vaadin:alarm"><path d="M8 5h-1v5h4v-1l-2.93 0.070-0.070-4.070z"></path><path d="M5.46 0.87c-0.387-0.522-1-0.856-1.692-0.856-0.41 0-0.793 0.118-1.117 0.321l-0.991 0.765c-0.41 0.384-0.666 0.929-0.666 1.534 0 0.496 0.172 0.951 0.459 1.31z"></path><path d="M14.34 1.1l-1-0.77c-0.315-0.198-0.698-0.316-1.108-0.316-0.692 0-1.305 0.334-1.688 0.85l3.996 3.076c0.287-0.356 0.46-0.813 0.46-1.312 0-0.602-0.253-1.145-0.659-1.528z"></path><path d="M12.87 14c1.308-1.268 2.122-3.038 2.13-4.998-0.028-3.856-3.145-6.973-6.997-7.002-3.857 0.028-6.975 3.145-7.003 6.997 0.008 1.965 0.822 3.735 2.128 5.001l-0.938 0.942c-0.075 0.102-0.12 0.231-0.12 0.37 0 0.348 0.282 0.63 0.63 0.63 0.139 0 0.268-0.045 0.372-0.122l0.998-0.999c1.092 0.758 2.446 1.211 3.905 1.211s2.813-0.453 3.928-1.226l0.977 1.015c0.102 0.075 0.231 0.12 0.37 0.12 0.348 0 0.63-0.282 0.63-0.63 0-0.139-0.045-0.268-0.122-0.372zM2.87 9c0.028-2.822 2.308-5.102 5.127-5.13 2.825 0.028 5.105 2.308 5.133 5.127-0.028 2.825-2.308 5.105-5.127 5.133-2.825-0.028-5.105-2.308-5.133-5.127z"></path></g>
<g id="vaadin:align-center"><path d="M5 0h6v3h-6v-3z"></path><path d="M1 4h14v3h-14v-3z"></path><path d="M3 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-justify"><path d="M0 0h16v3h-16v-3z"></path><path d="M0 4h16v3h-16v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 8h16v3h-16v-3z"></path></g>
<g id="vaadin:align-left"><path d="M0 0h11v3h-11v-3z"></path><path d="M0 4h15v3h-15v-3z"></path><path d="M0 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-right"><path d="M5 0h11v3h-11v-3z"></path><path d="M1 4h15v3h-15v-3z"></path><path d="M3 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:alt-a"><path d="M14 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0 1 0.56 1.44 2 1.44v-1c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M9 3h1v9h-1v-9z"></path><path d="M3 12l0.57-2h2.82l0.61 2h1l-2.27-8h-1.46l-2.27 8h1zM5 5.1l1.11 3.9h-2.22z"></path></g>
<g id="vaadin:alt"><path d="M3.89 9h2.22l-1.11-3.9-1.11 3.9z"></path><path d="M0 0v16h16v-16h-16zM7 12l-0.61-2h-2.78l-0.61 2h-1l2.27-8h1.46l2.27 8h-1zM10 12h-1v-9h1v9zM14 7h-1v3.5s0 0.5 1 0.5v1c-1 0-2-0.44-2-1.44v-3.56h-0.5v-1h0.5v-1h1v1h1v1z"></path></g>
<g id="vaadin:ambulance"><path d="M6.18 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M14 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M5 6h-1v1h-1v1h1v1h1v-1h1v-1h-1v-1z"></path><path d="M15.76 8.64l-3-4.53c-0.455-0.673-1.215-1.11-2.078-1.11-0.008 0-0.015 0-0.023 0l-2.659-0v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h-4.5c-0.828 0-1.5 0.672-1.5 1.5v8.5h1.37c0.474-1.135 1.546-1.931 2.812-2 1.278 0.072 2.345 0.868 2.81 1.978l2.188 0.021c0.474-1.135 1.546-1.931 2.812-2 1.303 0.003 2.405 0.827 2.822 1.979l1.187 0.021v-3.57c-0.001-0.294-0.090-0.568-0.243-0.795zM6.92 8.12c-0.266 1.117-1.255 1.935-2.435 1.935-1.381 0-2.5-1.119-2.5-2.5 0-1.18 0.818-2.17 1.918-2.432 0.195-0.049 0.399-0.075 0.609-0.075 1.37 0 2.48 1.11 2.48 2.48 0 0.21-0.026 0.414-0.075 0.609zM10 8v-3h0.85c0.003-0 0.006-0 0.009-0 0.777 0 1.461 0.394 1.866 0.992l1.325 2.008z"></path></g>
<g id="vaadin:anchor"><path d="M13 9v2c0 0-0.8 1.7-4 1.9v-6.9h2.2c0.2 0.3 0.5 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.8 0.5h-2.2v-1.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v1.3h-2.2c-0.1-0.3-0.4-0.5-0.8-0.5-0.6 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5h2.2v7c-3.3-0.3-4-2-4-2v-2h-3c0 0 2.8 7 8 7 5 0 8-7 8-7h-3zM8 1c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1 0.4-1 1-1z"></path></g>
<g id="vaadin:angle-double-down"><path d="M3 2v2l5 5 5-5v-2l-5 5z"></path><path d="M3 7v2l5 5 5-5v-2l-5 5z"></path></g>
<g id="vaadin:angle-double-left"><path d="M14 3h-2l-5 5 5 5h2l-5-5z"></path><path d="M9 3h-2l-5 5 5 5h2l-5-5z"></path></g>
<g id="vaadin:angle-double-right"><path d="M2 13h2l5-5-5-5h-2l5 5z"></path><path d="M7 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-double-up"><path d="M13 14v-2l-5-5-5 5v2l5-5z"></path><path d="M13 9v-2l-5-5-5 5v2l5-5z"></path></g>
<g id="vaadin:angle-down"><path d="M13 4v2l-5 5-5-5v-2l5 5z"></path></g>
<g id="vaadin:angle-left"><path d="M12 13h-2l-5-5 5-5h2l-5 5z"></path></g>
<g id="vaadin:angle-right"><path d="M4 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-up"><path d="M3 12v-2l5-5 5 5v2l-5-5z"></path></g>
<g id="vaadin:archive"><path d="M0 1h16v3h-16v-3z"></path><path d="M1 5v11h14v-11h-14zM11 9h-6v-2h6v2z"></path></g>
<g id="vaadin:archives"><path d="M11 2h-6v4h6v-4zM9 4h-2v-1h2v1z"></path><path d="M3 0v16h2v-1h6v1h2v-16h-10zM12 14h-8v-6h8v6zM12 7h-8v-6h8v6z"></path><path d="M11 9h-6v4h6v-4zM9 11h-2v-1h2v1z"></path></g>
<g id="vaadin:area-select"><path d="M7.9 7.9l2.1 7.5 1.7-2.6 3.2 3.2 1.1-1.1-3.3-3.2 2.7-1.6z"></path><path d="M8 12h-7v-9h12v5.4l1 0.2v-6.6h-14v11h8.2z"></path></g>
<g id="vaadin:arrow-backward"><path d="M0 7.9l6-4.9v3c0 0 1.1 0 2 0 8 0 8 8 8 8s-1-4-7.8-4c-1.1 0-1.8 0-2.2 0v2.9l-6-5z"></path></g>
<g id="vaadin:arrow-circle-down-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-4.4 0-8 3.6-8 8zM9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-left-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-right-o"><path d="M8 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zM8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8v0z"></path><path d="M9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-up-o"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4.4 3.6 8 8 8s8-3.6 8-8v0z"></path><path d="M7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-down"><path d="M12.5 8.6l-3.5 3.6v-12.2h-2v12.2l-3.5-3.6-1.4 1.5 5.9 5.9 5.9-5.9z"></path></g>
<g id="vaadin:arrow-forward"><path d="M16 7.9l-6-4.9v3c-0.5 0-1.1 0-2 0-8 0-8 8-8 8s1-4 7.8-4c1.1 0 1.8 0 2.2 0v2.9l6-5z"></path></g>
<g id="vaadin:arrow-left"><path d="M7.4 12.5l-3.6-3.5h12.2v-2h-12.2l3.6-3.5-1.5-1.4-5.9 5.9 5.9 5.9z"></path></g>
<g id="vaadin:arrow-long-down"><path d="M7 1h2v11h2l-3 3-3-3h2z"></path></g>
<g id="vaadin:arrow-long-left"><path d="M15 7v2h-11v2l-3-3 3-3v2z"></path></g>
<g id="vaadin:arrow-right"><path d="M8.6 3.5l3.5 3.5h-12.1v2h12.1l-3.5 3.5 1.4 1.4 6-5.9-6-5.9z"></path></g>
<g id="vaadin:arrow-up"><path d="M3.4 7.4l3.6-3.6v12.2h2v-12.2l3.5 3.6 1.4-1.5-5.9-5.9-6 5.9z"></path></g>
<g id="vaadin:arrows-cross"><path d="M15 5v-4h-4l1.3 1.3-4.3 4.3-4.3-4.3 1.3-1.3h-4v4l1.3-1.3 4.3 4.3-4.3 4.3-1.3-1.3v4h4l-1.3-1.3 4.3-4.3 4.3 4.3-1.3 1.3h4v-4l-1.3 1.3-4.3-4.3 4.3-4.3z"></path></g>
<g id="vaadin:arrows-long-h"><path d="M16 8l-3-3v2h-10v-2l-3 3 3 3v-2h10v2z"></path></g>
<g id="vaadin:arrows-long-right"><path d="M1 9v-2h11v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:arrows-long-up"><path d="M9 15h-2v-11h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:arrows-long-v"><path d="M9 3h2l-3-3-3 3h2v10h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:arrows"><path d="M16 8l-3-3v2h-4v-4h2l-3-3-3 3h2v4h-4v-2l-3 3 3 3v-2h4v4h-2l3 3 3-3h-2v-4h4v2z"></path></g>
<g id="vaadin:asterisk"><path d="M15.9 5.7l-2-3.4-3.9 2.2v-4.5h-4v4.5l-4-2.2-2 3.4 3.9 2.3-3.9 2.3 2 3.4 4-2.2v4.5h4v-4.5l3.9 2.2 2-3.4-4-2.3z"></path></g>
<g id="vaadin:at"><path d="M7.5 12.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2c0.1 2.3-1.9 4.2-4.2 4.2zM7.5 5.2c-1.5 0-2.7 1.3-2.7 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.4-2.8-2.9-2.8z"></path><path d="M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8c0 1.5-0.4 3-1.2 4.2-0.3 0.5-1.1 1.2-2.3 1.2-0.8 0-1.3-0.3-1.6-0.6-0.7-0.7-0.6-1.8-0.6-1.9v-6.9h1.5v7c0 0.2 0 0.6 0.2 0.8 0 0 0.2 0.2 0.5 0.2 0.7 0 1.1-0.5 1.1-0.5 0.6-1 1-2.2 1-3.4 0-3.6-2.9-6.5-6.5-6.5s-6.6 2.8-6.6 6.4 2.9 6.5 6.5 6.5c0.7 0 1.3-0.1 1.9-0.3l0.4 1.4c-0.7 0.3-1.5 0.4-2.3 0.4z"></path></g>
<g id="vaadin:automation"><path d="M14 12c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M11.7 16v0c-0.8 0-1.6-0.2-2.3-0.7l-6.2-3.3c-0.5-0.4-0.9-0.6-1.3-1-1.2-1.2-1.9-2.9-1.9-4.6s0.7-3.3 1.9-4.5c1.2-1.2 2.8-1.9 4.5-1.9s3.3 0.7 4.6 1.9c0.4 0.4 0.6 0.7 1 1.2l3.5 6.4c1 1.7 0.7 3.8-0.7 5.2-0.9 0.9-1.9 1.3-3.1 1.3zM6.4 1c-1.4 0-2.8 0.6-3.8 1.6s-1.6 2.4-1.6 3.8c0 1.5 0.6 2.8 1.6 3.8 0.3 0.3 0.6 0.5 1.1 0.8l6.3 3.4c0.6 0.4 1.2 0.5 1.8 0.5v0c0.9 0 1.7-0.3 2.3-1 1.1-1.1 1.3-2.7 0.5-4l-3.5-6.4c-0.3-0.4-0.5-0.7-0.8-1-1.1-0.9-2.4-1.5-3.9-1.5z"></path><path d="M11 7v-1l-1.4-0.5c-0.1-0.2-0.1-0.3-0.2-0.5l0.6-1.3-0.7-0.7-1.3 0.6c-0.2-0.1-0.3-0.1-0.5-0.2l-0.5-1.4h-1l-0.5 1.4c-0.2 0.1-0.3 0.1-0.5 0.2l-1.3-0.6-0.7 0.7 0.6 1.3c-0.1 0.2-0.1 0.3-0.2 0.5l-1.4 0.5v1l1.4 0.5c0.1 0.2 0.1 0.3 0.2 0.5l-0.6 1.3 0.7 0.7 1.3-0.6c0.2 0.1 0.3 0.2 0.5 0.2l0.5 1.4h1l0.5-1.4c0.2-0.1 0.3-0.1 0.5-0.2l1.3 0.6 0.7-0.7-0.6-1.3c0.1-0.2 0.2-0.3 0.2-0.5l1.4-0.5zM6.5 8c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:backspace-a"><path d="M5 12l-5-4 5-4v2h11v4h-11v2z"></path></g>
<g id="vaadin:backspace"><path d="M0 2v12h16v-12h-16zM13 9h-7v2l-3-3 3-3v2h7v2z"></path></g>
<g id="vaadin:backwards"><path d="M16 15v-14l-8 7z"></path><path d="M8 15v-14l-8 7z"></path></g>
<g id="vaadin:ban"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 2c1.3 0 2.5 0.4 3.5 1.1l-8.4 8.4c-0.7-1-1.1-2.2-1.1-3.5 0-3.3 2.7-6 6-6zM8 14c-1.3 0-2.5-0.4-3.5-1.1l8.4-8.4c0.7 1 1.1 2.2 1.1 3.5 0 3.3-2.7 6-6 6z"></path></g>
<g id="vaadin:bar-chart-h"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M2 8h4v6h-4v-6z"></path><path d="M7 2h4v12h-4v-12z"></path><path d="M12 6h4v8h-4v-8z"></path></g>
<g id="vaadin:bar-chart-v"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M8 0v4h-6v-4h6z"></path><path d="M14 5v4h-12v-4h12z"></path><path d="M10 10v4h-8v-4h8z"></path></g>
<g id="vaadin:bar-chart"><path d="M0 15h15v1h-15v-1z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M4 9h3v5h-3v-5z"></path><path d="M8 5h3v9h-3v-9z"></path><path d="M12 0h3v14h-3v-14z"></path></g>
<g id="vaadin:barcode"><path d="M0 3h1v10h-1v-10z"></path><path d="M8 3h2v10h-2v-10z"></path><path d="M11 3h1v10h-1v-10z"></path><path d="M13 3h1v10h-1v-10z"></path><path d="M15 3h1v10h-1v-10z"></path><path d="M2 3h3v10h-3v-10z"></path><path d="M6 3h1v10h-1v-10z"></path></g>
<g id="vaadin:bed"><path d="M4.28 7h2.72l-1.15-1.68c-0.542-0.725-1.36-1.216-2.295-1.319l-0.555-0.001v1.54c-0.011 0.063-0.018 0.136-0.018 0.211 0 0.69 0.56 1.25 1.25 1.25 0.017 0 0.034-0 0.050-0.001z"></path><path d="M13 7v-0.28c0-0.003 0-0.007 0-0.010 0-0.934-0.749-1.693-1.678-1.71l-4.692-0c0.5 0.62 1.37 2 1.37 2h5z"></path><path d="M15 5.1c-0.552 0-1 0.448-1 1v1.9h-12v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v9h2v-2h12v2h2v-6.9c0-0.552-0.448-1-1-1z"></path></g>
<g id="vaadin:bell-o"><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0 0-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v2h4c0 0-0.1 2 2 2s2-2 2-2h4v-2l-1.3-0.6zM13 13h-10v-0.4l0.7-0.4c0.8-0.3 1.3-1.1 1.3-2v-5.2c0-0.1 0-1.6 2.2-1.9l0.8-0.2 0.8 0.1c2 0.4 2.2 1.7 2.2 2v5.2c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.3z"></path></g>
<g id="vaadin:bell-slash-o"><path d="M15.2 0l-3.6 3.6c-0.4-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1.3l-2 2v0.7h0.7l15.3-15.4v-0.6h-0.8zM5 10.3c0-0.1 0-0.1 0 0v-5.3c0-0.1 0.1-1.6 2.2-1.9l0.8-0.2 0.8 0.1c1.2 0.2 1.8 0.8 2 1.3l-5.8 6z"></path><path d="M12 10.2v-4.6l-1 1v3.5c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.4h-8.3l-1 1h2.4c0 0-0.1 2 2 2s2-2 2-2h3.9v-2l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell-slash"><path d="M15.2 0l-3.6 3.6c-0.5-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h0.3l-2.3 2.3v0.7h0.7l15.3-15.4v-0.6h-0.8zM6 4.8v4.5l-1 1v-5.3c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path><path d="M8 16c2.1 0 2-2 2-2h-4c0 0-0.1 2 2 2z"></path><path d="M12 10.2v-4.6l-6 6-0.3 0.4-1 1h9.3v-1l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell"><path d="M6 14h4c0 0 0.1 2-2 2s-2-2-2-2z"></path><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0-0.2-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h12v-1l-1.3-0.6zM6 4.8v7.2h-2c0.8 0 1-1 1-1v-6c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path></g>
<g id="vaadin:boat"><path d="M1.5 9.6c1.1 0.7 2.5 1.9 2.5 3.3 0 0.4 0 0.7 0 1.1 0 0 0.1 0 0.1 0s0.9 0 2-1c1 1 2 1 2 1s1 0 2-1c1 1 1.9 1 1.9 1s0.1 0 0.1 0c0-0.3 0-0.7 0-1.1 0-1.4 1.4-2.6 2.5-3.3 0.6-0.4 0.5-1.2-0.2-1.4l-1.4-0.4v-3.8h-1v-1h-3v-2h-2v2h-3v1h-1v3.8l-1.3 0.4c-0.8 0.2-0.8 1-0.2 1.4zM4 5h1v-1h6v1h1v2.5l-3.3-1c-0.5-0.1-1-0.1-1.5 0l-3.2 1v-2.5z"></path><path d="M14 14c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1v1h16v-1c0 0-1 0-2-1z"></path></g>
<g id="vaadin:bold"><path d="M11 7.5c0 0 2-0.8 2-3.6 0-4.1-5.1-3.9-7-3.9h-4v16h4c3.7 0 8 0 8-4.4 0-3.8-3-4.1-3-4.1zM9 4.4c0 1.8-1.5 1.6-3 1.6v-3c1.8 0 3 0.1 3 1.4zM6 13v-4c1.8 0 4-0.3 4 2.2 0 1.9-2.5 1.8-4 1.8z"></path></g>
<g id="vaadin:bolt"><path d="M7.99 0l-7.010 9.38 6.020-0.42-4.96 7.040 12.96-10-7.010 0.47 7.010-6.47h-7.010z"></path></g>
<g id="vaadin:bomb"><path d="M12 1h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M14 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M14.6 2.1l0.7-0.7-0.7-0.7-1.4 1.4 0.7 0.7z"></path><path d="M13.9 4.2l-0.7 0.7 1.4 1.4 0.7-0.7-0.7-0.7z"></path><path d="M11.1 2.8l0.7-0.7-1.4-1.4-0.7 0.7 0.7 0.7z"></path><path d="M10.4 6.4l2-2-0.7-0.7-2 2-0.7-0.7-0.7 0.8c-0.8-0.5-1.8-0.8-2.8-0.8-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5c0-1-0.3-1.9-0.7-2.8l0.7-0.7-0.6-0.6zM6 7.2c-2 0-3.4 1.8-3.4 2.8h-1c0-2 2.4-3.8 4.4-3.8v1z"></path></g>
<g id="vaadin:book-dollar"><path d="M12.9 2.5c-1.6-1.2-1.4-2.5-1.4-2.5h-9.5v12.5c0 1.9 2.1 3.5 4 3.5h8v-13c0 0-0.8-0.2-1.1-0.5zM7 6.3c-0.9-0.3-2.3-0.8-2.3-1.9 0.1-0.8 1.3-1.4 1.3-1.6v-0.8h1v0.7c1 0.1 1.8 0.4 1.9 0.4l-0.3 0.9c0 0-0.7-0.3-1.5-0.3-0.7 0-1.1 0.3-1.2 0.8 0 0.3 0.5 0.6 1.3 0.9 1.5 0.5 1.9 1.1 1.9 1.9 0 0.7-0.1 1.6-2.1 1.8v0.9h-1v-0.8c0-0.1-1.4-0.5-1.5-0.5l0.5-0.9c0 0 1.1 0.5 2 0.4s1.3-0.6 1.3-1c0.1-0.3-0.4-0.6-1.3-0.9zM13 15h-7c-1 0-1.8-0.6-2-1.3-0.1-0.3 0-0.7 0.4-0.7h6.6v-10.3c1 0.6 2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:book-percent"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM5.5 3.2c0.8 0 1.5 0.7 1.5 1.6s-0.7 1.4-1.5 1.4-1.5-0.6-1.5-1.4 0.7-1.6 1.5-1.6zM9 3h1l-5 7h-1l5-7zM10 8.5c0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5 0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0 0.6 1 1.1 2 1.3v11z"></path><path d="M9 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path><path d="M6 4.8c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:book"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM4 2h5v2h-5v-2zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0.4 0.6 1.2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:bookmark-o"><path d="M3 0v16l5-5 5 5v-16h-10zM12 13.7l-4-3.9-4 3.9v-10.7h8v10.7zM12 2h-8v-1h8v1z"></path></g>
<g id="vaadin:bookmark"><path d="M3 0v0 1h10l0.1-1z"></path><path d="M3 2h10v14l-5-5-5 5z"></path></g>
<g id="vaadin:briefcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM10 3h-4v-1h4v1z"></path></g>
<g id="vaadin:browser"><path d="M15 1v-1h-15v15h1v1h15v-15h-1zM3 1h9v1h-9v-1zM1 1h1v1h-1v-1zM1 3h13v11h-13v-11z"></path></g>
<g id="vaadin:bug-o"><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.681 1.007 1.714 1.731 2.92 1.994l0.031-0.994h2v1c1.237-0.269 2.271-0.993 2.939-1.983 0.013-0.017 0.016-0.017 0.019-0.017 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM6 13.5c-0.44-0.253-0.805-0.589-1.083-0.989l-0.247-0.411-0.15-0.39c-0.302-0.802-0.49-1.73-0.52-2.697l-0-0.013v-1.65c0.578 0.326 1.254 0.556 1.973 0.647l0.027 5.573zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1zM12 9c-0.030 0.98-0.218 1.908-0.54 2.77l-0.13 0.33-0.24 0.4c-0.285 0.411-0.65 0.747-1.074 0.992l-0.016-5.492c0.743-0.081 1.421-0.297 2.029-0.624l-0.029 1.624z"></path><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path></g>
<g id="vaadin:bug"><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.588 1.095 1.667 1.859 2.934 1.998l0.017-0.998h2v1c1.284-0.141 2.364-0.905 2.94-1.98 0.012-0.020 0.015-0.020 0.018-0.020 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1z"></path></g>
<g id="vaadin:building-o"><path d="M2 0v16h12v-16h-12zM13 15h-4v-3h-2v3h-4v-14h10v14z"></path><path d="M4 9h2v2h-2v-2z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M10 9h2v2h-2v-2z"></path><path d="M4 6h2v2h-2v-2z"></path><path d="M7 6h2v2h-2v-2z"></path><path d="M10 6h2v2h-2v-2z"></path><path d="M4 3h2v2h-2v-2z"></path><path d="M7 3h2v2h-2v-2z"></path><path d="M10 3h2v2h-2v-2z"></path></g>
<g id="vaadin:building"><path d="M3 0v16h4v-3h2v3h4v-16h-10zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM6 6h-2v-2h2v2zM6 3h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM9 6h-2v-2h2v2zM9 3h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM12 6h-2v-2h2v2zM12 3h-2v-2h2v2z"></path></g>
<g id="vaadin:bullets"><path d="M0 2.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 7.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 12.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:bullseye"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14.9c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z"></path><path d="M8 2.3c-3.2 0-5.7 2.5-5.7 5.7s2.6 5.7 5.7 5.7 5.7-2.6 5.7-5.7-2.5-5.7-5.7-5.7zM8 12.6c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6c0 2.5-2.1 4.6-4.6 4.6z"></path><path d="M8 4.6c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4z"></path></g>
<g id="vaadin:bus"><path d="M14.67 4h-0.67v-2c0-1.105-0.895-2-2-2h-8c-1.105 0-2 0.895-2 2v2h-0.68c-0 0-0 0-0 0-0.177 0-0.32 0.143-0.32 0.32 0 0.004 0 0.007 0 0.011l-0 2.339c-0 0.003-0 0.006-0 0.010 0 0.177 0.143 0.32 0.32 0.32 0 0 0 0 0 0h0.68v6c0 0.55 0 1 1 1v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5h4v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5c1 0 1-0.45 1-1v-6h0.67c0.182 0 0.33-0.148 0.33-0.33s-0.148-0.33-0.33-0.33c-0.182 0-0.33 0.148-0.33 0.33s0.148 0.33 0.33 0.33c0.182 0 0.33-0.148 0.33-0.33v-2.34c0-0.182-0.148-0.33-0.33-0.33 0 0 0 0 0 0zM6 1h4v1h-4v-1zM4 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM3 8v-5h10v5h-10zM12 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:buss"><path d="M14.67 4h-0.67v-2c0-1.105-0.895-2-2-2h-8c-1.105 0-2 0.895-2 2v2h-0.68c-0 0-0 0-0 0-0.177 0-0.32 0.143-0.32 0.32 0 0.004 0 0.007 0 0.011l-0 2.339c-0 0.003-0 0.006-0 0.010 0 0.177 0.143 0.32 0.32 0.32 0 0 0 0 0 0h0.68v6c0 0.55 0 1 1 1v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5h4v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5c1 0 1-0.45 1-1v-6h0.67c0.182 0 0.33-0.148 0.33-0.33s-0.148-0.33-0.33-0.33c-0.182 0-0.33 0.148-0.33 0.33s0.148 0.33 0.33 0.33c0.182 0 0.33-0.148 0.33-0.33v-2.34c0-0.182-0.148-0.33-0.33-0.33 0 0 0 0 0 0zM6 1h4v1h-4v-1zM4 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM3 8v-5h10v5h-10zM12 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:button"><path d="M15.7 5.3l-1-1c-0.2-0.2-0.4-0.3-0.7-0.3h-13c-0.6 0-1 0.4-1 1v5c0 0.3 0.1 0.6 0.3 0.7l1 1c0.2 0.2 0.4 0.3 0.7 0.3h13c0.6 0 1-0.4 1-1v-5c0-0.3-0.1-0.5-0.3-0.7zM14 10h-13v-5h13v5z"></path></g>
<g id="vaadin:calc-book"><path d="M11.9 0c-1.3 0-2 0.4-2.4 0.8-0.4-0.4-1.1-0.8-2.5-0.8-3.4 0-4 2-4 2v0 0 4h-3v10h7v-4.6l1.5-0.2c0 0 0.2-0.3 0.3 0.7h1.3c0.1-1 0.4-0.7 0.4-0.7l5.5 0.7v-9.8c0 0-0.6-2.1-4.1-2.1zM1 7h5v2h-5v-2zM6 10v1h-1v-1h1zM4 10v1h-1v-1h1zM2 15h-1v-1h1v1zM2 13h-1v-1h1v1zM2 11h-1v-1h1v1zM4 15h-1v-1h1v1zM4 13h-1v-1h1v1zM6 15h-1v-1h1v1zM6 13h-1v-1h1v1zM9 9.5c-0.9-0.1-1.3-0.3-2-0.3v-3.2h-3v-3.9c0-0.4 0.8-1.5 3-1.5 1.8 0 1.9 0.8 1.9 1 0 0 0 0 0 0v7.9zM15 9.9c-1-0.4-1.1-0.7-2.5-0.7-0.1 0-0.2 0-0.2 0-1 0-1.3 0.2-2.3 0.4v-7.6c0 0 0-0.1 0-0.1s0-0.1 0-0.1c0-0.2 0.2-1.1 1.9-1.1 2.3 0 3.1 0.9 3.1 1.4v7.8z"></path></g>
<g id="vaadin:calc"><path d="M9 3h6v2h-6v-2z"></path><path d="M9 11h6v2h-6v-2z"></path><path d="M5 1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M7 10.4l-1.4-1.4-1.6 1.6-1.6-1.6-1.4 1.4 1.6 1.6-1.6 1.6 1.4 1.4 1.6-1.6 1.6 1.6 1.4-1.4-1.6-1.6z"></path><path d="M13 14.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M13 9.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:calendar-briefcase"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M13 1v3h-3v-3h-5v3h-3v-3h-2v14h5v-1h-4v-8h13v3h1v-8z"></path><path d="M13 10v-2h-4v2h-3v6h10v-6h-3zM10 9h2v1h-2v-1z"></path></g>
<g id="vaadin:calendar-clock"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M6.6 14h-5.6v-8h13v0.6c0.4 0.2 0.7 0.4 1 0.7v-6.3h-2v3h-3v-3h-5v3h-3v-3h-2v14h7.3c-0.3-0.3-0.5-0.6-0.7-1z"></path><path d="M14 12h-3v-3h1v2h2z"></path><path d="M11.5 8c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5zM11.5 7c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5v0z"></path></g>
<g id="vaadin:calendar-envelope"><path d="M3 0h1v2h-1v-2z"></path><path d="M9 0h1v2h-1v-2z"></path><path d="M13 7v-6h-2v2h-3v-2h-3v2h-3v-2h-2v12h4v3h12v-9h-3zM4 12h-3v-7h11v2h-8v5zM5 10.2l2.6 1.5-2.6 2.6v-4.1zM5.7 15l2.8-2.8 1.5 0.9 1.5-0.8 2.8 2.8h-8.6zM15 14.3l-2.6-2.6 2.6-1.4v4zM15 9.2l-5 2.7-5-2.9v-1h10v1.2zM15.4 9.6v0 0 0z"></path></g>
<g id="vaadin:calendar-o"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:calendar-user"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M9 14.1c0-0.1 0-0.1 0 0l-8-0.1v-8h13v1.2c0.4 0.1 0.7 0.3 1 0.6v-6.8h-2v3h-3v-3h-5v3h-3v-3h-2v14h9v-0.9z"></path><path d="M15 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13.9 12h-1.8c-1.1 0-2.1 0.9-2.1 2.1v1.9h6v-1.9c0-1.2-0.9-2.1-2.1-2.1z"></path></g>
<g id="vaadin:calendar"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM3 15h-2v-2h2v2zM3 12h-2v-2h2v2zM3 9h-2v-2h2v2zM6 15h-2v-2h2v2zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM9 15h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM12 15h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM15 15h-2v-2h2v2zM15 12h-2v-2h2v2zM15 9h-2v-2h2v2z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:camera"><path d="M11 9c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path><path d="M11 4v-3h-6v3h-5v9h5c0.8 0.6 1.9 1 3 1s2.2-0.4 3-1h5v-9h-5zM6 2h4v2h-4v-2zM8 13c-2.2 0-4-1.8-4-4s1.8-4 4-4c2.2 0 4 1.8 4 4s-1.8 4-4 4zM15 6h-2v-1h2v1z"></path></g>
<g id="vaadin:car"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-1.9-1.2h-7.4c-0.8 0-1.5 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0.4 1.1 1 1.2v2c0 0.6 0.5 1.1 1.1 1.1h0.9c0.5 0 1-0.5 1-1.1v-1.9h8v1.9c0 0.6 0.5 1.1 1.1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c0.6-0.1 1-0.6 1-1.2v-3.5c-0.1-0.5-0.5-1-1.1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:caret-down"><path d="M3 4h10l-5 7z"></path></g>
<g id="vaadin:caret-left"><path d="M11 3v10l-7-5z"></path></g>
<g id="vaadin:caret-right"><path d="M5 13v-10l7 5z"></path></g>
<g id="vaadin:caret-square-down-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M4 6h8l-4 5z"></path></g>
<g id="vaadin:caret-square-left-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M10 4v8l-5-4z"></path></g>
<g id="vaadin:caret-square-right-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M5.9 12v-8l5 4z"></path></g>
<g id="vaadin:caret-square-up-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M12 10h-8l4-5z"></path></g>
<g id="vaadin:caret-up"><path d="M13 12h-10l5-7z"></path></g>
<g id="vaadin:cart-o"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"></path></g>
<g id="vaadin:cart"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4z"></path></g>
<g id="vaadin:cash"><path d="M16 14h-14v-1h13v-7h1v8z"></path><path d="M13 4v7h-12v-7h12zM14 3h-14v9h14v-9z"></path><path d="M3 6h-1v3h1v1h4c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5h-4v1z"></path><path d="M11 6v-1h-4c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5h4v-1h1v-3h-1z"></path></g>
<g id="vaadin:chart-3d"><path d="M12 4v-2l-4-2-4 2v1l-4 2v5l12 6 4-2v-8zM4 10.88l-3-1.5v-3.3l3 1.53v3.27zM4 6.49l-2.34-1.2 2.34-1.17v2.37zM8 12.88l-3-1.5v-8.31l3 1.54v8.27zM5.66 2.29l2.34-1.17 2.34 1.17-2.34 1.2zM12 14.88l-3-1.5v-6.31l3 1.54v6.27zM12 7.49l-2.34-1.2 2.34-1.17 2.34 1.17z"></path></g>
<g id="vaadin:chart-grid"><path d="M0 9v7h16v-7h-16zM5 15h-4v-1h4v1zM5 13h-4v-1h4v1zM5 11h-4v-1h4v1zM10 15h-4v-1h4v1zM10 13h-4v-1h4v1zM10 11h-4v-1h4v1zM15 15h-4v-1h4v1zM15 13h-4v-1h4v1zM15 11h-4v-1h4v1z"></path><path d="M16 8h-16v-8h1v7h15v1z"></path><path d="M15 1.57l-5.020 2.86-3.96-1.98-4.020 1.61v1.080l3.98-1.59 4.040 2.020 4.98-2.85v-1.15z"></path></g>
<g id="vaadin:chart-line"><path d="M0 16h16v-16h-1v2.6l-4 3.4v-6h-1v6.4l-4-0.9v-5.5h-1v5.7l-4 2.9v-8.6h-1zM5 14h-4v-1.7l4-2.9v4.6zM10 14h-4v-5.3l0.1-0.1 3.9 0.9v4.5zM15 14h-4v-4.3h0.1l3.9-3.2v7.5z"></path></g>
<g id="vaadin:chart-timeline"><path d="M16 13v-1h-15v-12h-1v13h5v2h-5v1h16v-1h-5v-2h5z"></path><path d="M9 7l-3-3-4 4v3h14v-11l-7 7z"></path></g>
<g id="vaadin:chart"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0h1v16h-1v-16z"></path><path d="M9 8l-2.9-3-4.1 4v5h14v-13.1z"></path></g>
<g id="vaadin:chat"><path d="M14 14.2c0 0 0 0 0 0 0-0.6 2-1.8 2-3.1 0-1.5-1.4-2.7-3.1-3.2 0.7-0.8 1.1-1.7 1.1-2.8 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.6 0 2.9-0.5 3.7-1.1 0 0.1 0 0.1 0 0.2 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0.1-0.1-0.7-0.5-0.7-1.9zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:check-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7.1 11.7l-4.2-4.1 1.4-1.4 2.8 2.7 4.9-4.9 1.4 1.4z"></path></g>
<g id="vaadin:check-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7.1 11.7l-4.2-4.1 1.4-1.4 2.7 2.7 5-4.9 1.4 1.4-6.3 6.3z"></path></g>
<g id="vaadin:check-square-o"><path d="M14 6.2v7.8h-12v-12h10.5l1-1h-12.5v14h14v-9.8z"></path><path d="M7.9 10.9l-4.2-4.2 1.5-1.4 2.7 2.8 6.7-6.7 1.4 1.4z"></path></g>
<g id="vaadin:check-square"><path d="M13 0.9l-1 1.1h-12v14h14v-10.5l1.7-2-2.7-2.6zM6.5 11.7l-4.2-4.2 1.4-1.4 2.7 2.7 6.6-6.6 1.4 1.4-7.9 8.1z"></path></g>
<g id="vaadin:check"><path d="M7.3 14.2l-7.1-5.2 1.7-2.4 4.8 3.5 6.6-8.5 2.3 1.8z"></path></g>
<g id="vaadin:chevron-circle-down-o"><path d="M13 6.6l-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path></g>
<g id="vaadin:chevron-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zM11.6 5.2l1.4 1.4-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-left-o"><path d="M9.4 13l-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM10.8 11.6l-1.4 1.4-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path></g>
<g id="vaadin:chevron-circle-right-o"><path d="M6.6 13l5-5-5-5-1.4 1.4 3.6 3.6-3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM5.2 4.4l1.4-1.4 5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-up-o"><path d="M3 9.4l5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8v0z"></path></g>
<g id="vaadin:chevron-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM4.4 10.8l-1.4-1.4 5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path></g>
<g id="vaadin:chevron-down-small"><path d="M8 12l-6.32-6.32 1.67-1.68 4.65 4.65 4.65-4.65 1.67 1.68-6.32 6.32z"></path></g>
<g id="vaadin:chevron-down"><path d="M8 13.1l-8-8 2.1-2.2 5.9 5.9 5.9-5.9 2.1 2.2z"></path></g>
<g id="vaadin:chevron-left-small"><path d="M4 8l6.32-6.32 1.68 1.67-4.65 4.65 4.65 4.65-1.68 1.67-6.32-6.32z"></path></g>
<g id="vaadin:chevron-left"><path d="M2.9 8l8-8 2.2 2.1-5.9 5.9 5.9 5.9-2.2 2.1z"></path></g>
<g id="vaadin:chevron-right-small"><path d="M12 8l-6.32-6.32-1.68 1.67 4.65 4.65-4.65 4.65 1.68 1.67 6.32-6.32z"></path></g>
<g id="vaadin:chevron-right"><path d="M13.1 8l-8 8-2.2-2.1 5.9-5.9-5.9-5.9 2.2-2.1z"></path></g>
<g id="vaadin:chevron-up-small"><path d="M8 4l-6.32 6.32 1.67 1.68 4.65-4.65 4.65 4.65 1.67-1.68-6.32-6.32z"></path></g>
<g id="vaadin:chevron-up"><path d="M8 2.9l8 8-2.1 2.2-5.9-5.9-5.9 5.9-2.1-2.2z"></path></g>
<g id="vaadin:child"><path d="M10 5c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 10.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v6.47h1.5v-4h1v4h1.5v-6.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:circle-thin"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"></path></g>
<g id="vaadin:clipboard-check"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M7.39 12.47l-3-2.73 1.35-1.48 1.58 1.44 2.87-2.9 1.42 1.4-4.22 4.27z"></path></g>
<g id="vaadin:clipboard-cross"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M11 8h-2v-2h-2v2h-2v2h2v2h2v-2h2z"></path></g>
<g id="vaadin:clipboard-heart"><path d="M9.5 7c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-pulse"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M9.3 13c0 0 0 0 0 0-0.2 0-0.3-0.1-0.4-0.3l-0.8-4.8-0.7 3.1c0 0.1-0.1 0.2-0.3 0.3-0.1 0-0.3 0-0.4-0.1l-1-1.3h-1.3c-0.2 0-0.4-0.2-0.4-0.4s0.2-0.4 0.4-0.4h1.6c0.1 0 0.2 0.1 0.3 0.1l0.6 0.8 0.9-4.3c0-0.2 0.2-0.3 0.4-0.3 0 0 0 0 0 0 0.2 0 0.3 0.2 0.3 0.4l0.9 5.3 0.6-1.7c0.1-0.1 0.2-0.2 0.3-0.2h1.3c0.2 0 0.4 0.2 0.4 0.4s-0.2 0.4-0.4 0.4h-1l-1 2.9c0 0-0.2 0.1-0.3 0.1z"></path></g>
<g id="vaadin:clipboard-text"><path d="M4 6h8v1h-8v-1z"></path><path d="M4 8h8v1h-8v-1z"></path><path d="M4 10h5v1h-5v-1z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-user"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M8 6c-2.5 0-1.3 3.2-1.3 3.2 0.3 0.4 0.7 0.4 0.7 0.6 0 0.3-0.3 0.3-0.6 0.4-0.5 0.1-0.9-0.1-1.4 0.8-0.3 0.4-0.4 2-0.4 2h6c0 0-0.1-1.6-0.4-2-0.4-0.8-0.9-0.7-1.4-0.8-0.3 0-0.6-0.1-0.6-0.4s0.3-0.2 0.6-0.6c0.1 0 1.3-3.2-1.2-3.2z"></path></g>
<g id="vaadin:clipboard"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clock"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M8 3h-1v6h5v-1h-4z"></path></g>
<g id="vaadin:close-big"><path d="M16 0l-1 0.010-7 6.99-7-6.99-1-0.010v1l7 7-7 7v1h1l7-7 7 7h1v-1l-7-7 7-7v-1z"></path></g>
<g id="vaadin:close-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M12.2 10.8l-2.8-2.8 2.8-2.8-1.4-1.4-2.8 2.8-2.8-2.8-1.4 1.4 2.8 2.8-2.8 2.8 1.4 1.4 2.8-2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM12.2 10.8l-1.4 1.4-2.8-2.8-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-small"><path d="M12.96 4.46l-1.42-1.42-3.54 3.55-3.54-3.55-1.42 1.42 3.55 3.54-3.55 3.54 1.42 1.42 3.54-3.55 3.54 3.55 1.42-1.42-3.55-3.54 3.55-3.54z"></path></g>
<g id="vaadin:close"><path d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"></path></g>
<g id="vaadin:cloud-download-o"><path d="M14.1 9.8c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0.1-0.6 0.1-0.9 0.1v-3h-2v2.4c-0.4-0.3-0.9-0.4-1.3-0.4-1.6 0-2.9 1.3-2.9 2.9 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.6 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.5 2.4-2.7s-0.8-2.3-1.9-2.5zM13.6 14h-10.3c-1.2 0-2.3-1.3-2.3-2.6s1.1-2.6 2.3-2.6c0.1 0 0.3 0 0.4 0l1.4 0.2-0.9-1c-0.2-0.3-0.4-0.7-0.4-1.2 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v2.4h-1.9l3 4 3-4h-2v-1.9c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6 0.8 0.1c0.7 0 1.4 0.7 1.4 1.5 0 0.7-0.6 1.6-1.4 1.6z"></path></g>
<g id="vaadin:cloud-download"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4v-4h-4v3.1c-0.2-0.1-0.3-0.1-0.5-0.1-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM8 11.4l-2.9-3.4h1.9v-6h2v6h1.9l-2.9 3.4z"></path></g>
<g id="vaadin:cloud-o"><path d="M14.1 8.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.6 0-1.2 0.1-1.8 0.4-0.5-0.7-1.5-1.2-2.4-1.2-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 13h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.8 0 1.5 0.5 1.7 1.2l0.3 0.6 0.5-0.3c0.5-0.3 1.1-0.5 1.8-0.5 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0 0.6-0.6 1.5-1.4 1.5z"></path></g>
<g id="vaadin:cloud-upload-o"><path d="M14.1 10.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0-0.6 0-0.9 0.1v-2.1h2l-3-4-3 4h2v1.5c-0.4-0.2-0.9-0.3-1.3-0.3-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 15h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v3.2h2v-2.8c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0.1 0.7-0.5 1.6-1.3 1.6z"></path></g>
<g id="vaadin:cloud-upload"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-1.6-1-3-2.4-3.6l-3.6-4.4-2.5 3c-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM9 6v6h-2v-6h-1.9l2.9-3.4 2.9 3.4h-1.9z"></path></g>
<g id="vaadin:cloud"><path d="M14 13c1.1 0 2-0.9 2-2s-0.9-2-2-2c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4-0.8 0-1.5 0.2-2.2 0.6-0.3-0.9-1.2-1.6-2.3-1.6-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11z"></path></g>
<g id="vaadin:cluster"><path d="M14 12c-0.372 0.011-0.716 0.121-1.008 0.305l-2.212-2.155c0.434-0.547 0.708-1.239 0.74-1.993l1.57-0.157c0.225 0.556 0.76 0.941 1.385 0.941 0.823 0 1.49-0.667 1.49-1.49s-0.667-1.49-1.49-1.49c-0.749 0-1.368 0.552-1.474 1.271l-1.591 0.128c-0.224-1.136-0.973-2.060-1.978-2.521l0.308-0.839h0.26c1.099-0.008 1.986-0.9 1.986-2 0-1.105-0.895-2-2-2s-2 0.895-2 2c0 0.742 0.404 1.39 1.004 1.735l-0.27 0.855c-0.227-0.054-0.487-0.084-0.754-0.084-0.83 0-1.59 0.296-2.181 0.789l-2.994-3.004c0.141-0.224 0.225-0.497 0.225-0.79 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 0.823 0.663 1.492 1.484 1.5 0.281-0.001 0.544-0.079 0.767-0.214l2.993 3.004c-0.474 0.588-0.76 1.344-0.76 2.168 0 0.015 0 0.030 0 0.045-0 0.058-0 0.108-0 0.158l-0.66 0.11c-0.313-0.72-1.019-1.214-1.839-1.214-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.020-0-0.039-0.001-0.059l0.63-0.097c0.242 0.843 0.768 1.538 1.466 1.992l-0.556 1.188c-0.161-0.049-0.347-0.078-0.539-0.080-0.006-0-0.012-0-0.017-0-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.64-0.301-1.211-0.769-1.577l0.566-1.153c0.364 0.146 0.787 0.231 1.229 0.231 0.847 0 1.621-0.311 2.216-0.824l2.176 2.124c-0.25 0.33-0.4 0.748-0.4 1.2 0 1.105 0.895 2 2 2s2-0.895 2-2c0-1.105-0.895-2-2-2 0 0 0 0 0 0zM5 15c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM8 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"></path></g>
<g id="vaadin:code"><path d="M5.2 14l4.5-12h1.1l-4.5 12z"></path><path d="M11.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path><path d="M4.9 13h-1.2l-3.7-5 3.7-5h1.3l-3.8 5z"></path></g>
<g id="vaadin:coffee"><path d="M14 13l-4 1h-6l-4-1v-1h14z"></path><path d="M14.7 3h-1.7v-1h-12v5c0 1.5 0.8 2.8 2 3.4v0.6h8v-0.6c0.9-0.5 1.6-1.4 1.9-2.4 0 0 0.1 0 0.1 0 2.3 0 2.9-2 3-3.5 0.1-0.8-0.5-1.5-1.3-1.5zM13 7v-3h1.7c0.1 0 0.2 0.1 0.2 0.1s0.1 0.1 0.1 0.3c-0.2 2.6-1.6 2.6-2 2.6z"></path></g>
<g id="vaadin:cog-o"><path d="M15.2 6l-1.1-0.2c-0.1-0.2-0.1-0.4-0.2-0.6l0.6-0.9 0.5-0.7-2.6-2.6-0.7 0.5-0.9 0.6c-0.2-0.1-0.4-0.1-0.6-0.2l-0.2-1.1-0.2-0.8h-3.6l-0.2 0.8-0.2 1.1c-0.2 0.1-0.4 0.1-0.6 0.2l-0.9-0.6-0.7-0.4-2.5 2.5 0.5 0.7 0.6 0.9c-0.2 0.2-0.2 0.4-0.3 0.6l-1.1 0.2-0.8 0.2v3.6l0.8 0.2 1.1 0.2c0.1 0.2 0.1 0.4 0.2 0.6l-0.6 0.9-0.5 0.7 2.6 2.6 0.7-0.5 0.9-0.6c0.2 0.1 0.4 0.1 0.6 0.2l0.2 1.1 0.2 0.8h3.6l0.2-0.8 0.2-1.1c0.2-0.1 0.4-0.1 0.6-0.2l0.9 0.6 0.7 0.5 2.6-2.6-0.5-0.7-0.6-0.9c0.1-0.2 0.2-0.4 0.2-0.6l1.1-0.2 0.8-0.2v-3.6l-0.8-0.2zM15 9l-1.7 0.3c-0.1 0.5-0.3 1-0.6 1.5l0.9 1.4-1.4 1.4-1.4-0.9c-0.5 0.3-1 0.5-1.5 0.6l-0.3 1.7h-2l-0.3-1.7c-0.5-0.1-1-0.3-1.5-0.6l-1.4 0.9-1.4-1.4 0.9-1.4c-0.3-0.5-0.5-1-0.6-1.5l-1.7-0.3v-2l1.7-0.3c0.1-0.5 0.3-1 0.6-1.5l-1-1.4 1.4-1.4 1.4 0.9c0.5-0.3 1-0.5 1.5-0.6l0.4-1.7h2l0.3 1.7c0.5 0.1 1 0.3 1.5 0.6l1.4-0.9 1.4 1.4-0.9 1.4c0.3 0.5 0.5 1 0.6 1.5l1.7 0.3v2z"></path><path d="M8 4.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM8 10.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:cog"><path d="M16 9v-2l-1.7-0.6c-0.2-0.6-0.4-1.2-0.7-1.8l0.8-1.6-1.4-1.4-1.6 0.8c-0.5-0.3-1.1-0.6-1.8-0.7l-0.6-1.7h-2l-0.6 1.7c-0.6 0.2-1.2 0.4-1.7 0.7l-1.6-0.8-1.5 1.5 0.8 1.6c-0.3 0.5-0.5 1.1-0.7 1.7l-1.7 0.6v2l1.7 0.6c0.2 0.6 0.4 1.2 0.7 1.8l-0.8 1.6 1.4 1.4 1.6-0.8c0.5 0.3 1.1 0.6 1.8 0.7l0.6 1.7h2l0.6-1.7c0.6-0.2 1.2-0.4 1.8-0.7l1.6 0.8 1.4-1.4-0.8-1.6c0.3-0.5 0.6-1.1 0.7-1.8l1.7-0.6zM8 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path><path d="M10.6 7.9c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5z"></path></g>
<g id="vaadin:cogs"><path d="M12 7v-2l-1.2-0.4c-0.1-0.3-0.2-0.7-0.4-1l0.6-1.2-1.5-1.3-1.1 0.5c-0.3-0.2-0.6-0.3-1-0.4l-0.4-1.2h-2l-0.4 1.2c-0.3 0.1-0.7 0.2-1 0.4l-1.1-0.5-1.4 1.4 0.6 1.2c-0.2 0.3-0.3 0.6-0.4 1l-1.3 0.3v2l1.2 0.4c0.1 0.3 0.2 0.7 0.4 1l-0.5 1.1 1.4 1.4 1.2-0.6c0.3 0.2 0.6 0.3 1 0.4l0.3 1.3h2l0.4-1.2c0.3-0.1 0.7-0.2 1-0.4l1.2 0.6 1.4-1.4-0.6-1.2c0.2-0.3 0.3-0.6 0.4-1l1.2-0.4zM3 6c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.7-1.3 3-3 3s-3-1.3-3-3z"></path><path d="M7.5 6c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M16 3v-1h-0.6c0-0.2-0.1-0.4-0.2-0.5l0.4-0.4-0.7-0.7-0.4 0.4c-0.2-0.1-0.3-0.2-0.5-0.2v-0.6h-1v0.6c-0.2 0-0.4 0.1-0.5 0.2l-0.4-0.4-0.7 0.7 0.4 0.4c-0.1 0.2-0.2 0.3-0.2 0.5h-0.6v1h0.6c0 0.2 0.1 0.4 0.2 0.5l-0.4 0.4 0.7 0.7 0.4-0.4c0.2 0.1 0.3 0.2 0.5 0.2v0.6h1v-0.6c0.2 0 0.4-0.1 0.5-0.2l0.4 0.4 0.7-0.7-0.4-0.4c0.1-0.2 0.2-0.3 0.2-0.5h0.6zM13.5 3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path><path d="M15.4 11.8c-0.1-0.3-0.2-0.6-0.4-0.9l0.3-0.6-0.7-0.7-0.5 0.4c-0.3-0.2-0.6-0.3-0.9-0.4l-0.2-0.6h-1l-0.2 0.6c-0.3 0.1-0.6 0.2-0.9 0.4l-0.6-0.3-0.7 0.7 0.3 0.6c-0.2 0.3-0.3 0.6-0.4 0.9l-0.5 0.1v1l0.6 0.2c0.1 0.3 0.2 0.6 0.4 0.9l-0.3 0.6 0.7 0.7 0.6-0.3c0.3 0.2 0.6 0.3 0.9 0.4l0.1 0.5h1l0.2-0.6c0.3-0.1 0.6-0.2 0.9-0.4l0.6 0.3 0.7-0.7-0.4-0.5c0.2-0.3 0.3-0.6 0.4-0.9l0.6-0.2v-1l-0.6-0.2zM12.5 14c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:coin-piles"><path d="M10.5 0c-3.040 0-5.5 0.88-5.5 2 0 0 0 0 0 0v2c-3 0.1-5 0.94-5 2 0 0 0 0 0 0v2s0 0 0 0v2s0 0 0 0v2c0 1.090 2.46 2 5.5 2 0.020 0 0.043 0 0.067 0 0.732 0 1.45-0.055 2.153-0.16 0.698 1.305 2.094 2.158 3.69 2.158 2.017 0 3.715-1.363 4.224-3.217 0.209-0.199 0.344-0.442 0.367-0.717l0-2.064v-8c0-1.12-2.46-2-5.5-2zM5.5 5c2.5 0 4.5 0.45 4.5 1s-2 1-4.5 1-4.5-0.45-4.5-1 2-1 4.5-1zM5.5 13c-2.71 0-4.25-0.71-4.5-1v-0.8c1.199 0.512 2.595 0.809 4.060 0.809 0.155 0 0.309-0.003 0.462-0.010 0.508-0.001 1.030-0.030 1.544-0.085-0.043 0.371 0.022 0.712 0.123 1.037-0.452 0.021-0.967 0.051-1.488 0.051-0.070 0-0.141-0.001-0.211-0.002zM7.070 10.91c-0.467 0.057-1.008 0.090-1.556 0.090-0.005 0-0.010 0-0.014 0-2.709 0-4.249-0.71-4.499-1v-0.84c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.632-0.001 1.271-0.044 1.897-0.128-0.197 0.306-0.291 0.654-0.342 1.015zM5.5 9c-2.71 0-4.25-0.71-4.5-1v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.366c-0.777 0.265-1.432 0.717-1.935 1.304-0.752 0.165-1.611 0.256-2.491 0.256-0.026 0-0.052-0-0.077-0zM11.41 15c-1.883 0-3.41-1.527-3.41-3.41s1.527-3.41 3.41-3.41c1.883 0 3.41 1.527 3.41 3.41s-1.527 3.41-3.41 3.41zM15 8c-0.175 0.167-0.385 0.3-0.617 0.386-0.288-0.244-0.6-0.46-0.938-0.634 0.575-0.153 1.101-0.352 1.593-0.61l-0.038 0.858zM15 6c-0.24 0.31-1.61 0.94-4 1v-1c0.003 0 0.007 0 0.011 0 1.443 0 2.814-0.305 4.053-0.855l-0.064 0.855zM15 4c-0.25 0.33-1.79 1-4.5 1h-0.23c-1.213-0.63-2.648-1-4.169-1-0.014 0-0.029 0-0.043 0l-0.058-0v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.926zM10.5 3c-2.5 0-4.5-0.45-4.5-1s2-1 4.5-1 4.5 0.45 4.5 1-2 1-4.5 1z"></path><path d="M10.5 11h0.5v3h1v-5h-0.5l-1 2z"></path></g>
<g id="vaadin:coins"><path d="M11.5 0c-2.485 0-4.5 2.015-4.5 4.5 0.004 0.261 0.029 0.513 0.074 0.758-0.479-0.176-1.025-0.261-1.591-0.261-3.043 0-5.51 2.467-5.51 5.51s2.467 5.51 5.51 5.51c3.043 0 5.51-2.467 5.51-5.51 0-0.566-0.085-1.112-0.244-1.626 0.23 0.077 0.484 0.099 0.742 0.099 2.48 0 4.49-2.010 4.49-4.49 0-2.477-2.005-4.485-4.481-4.49zM10 10.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5c0-2.485 2.015-4.5 4.5-4.5 2.483 0.006 4.494 2.017 4.5 4.499zM12.5 7h-2v-0.5h0.5v-3h-0.5l1-1.5h0.5v4.5h0.5v0.5z"></path><path d="M5.63 8c0.033-0.003 0.072-0.005 0.111-0.005 0.696 0 1.26 0.564 1.26 1.26 0 0.016-0 0.031-0.001 0.047 0 1.698-1.86 2.698-1.86 2.698h1.37v-0.5h0.49v1.5h-3v-1s2-1.27 2-2.33c0-0.37 0-0.67-0.42-0.67-0.69 0-0.65 1-0.65 1h-0.93s-0.23-2 1.63-2z"></path></g>
<g id="vaadin:combobox"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM10 11h-9v-6h9v6zM13 8.4l-2-1.4h4l-2 1.4z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:comment-ellipsis-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.6 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.2l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.8-2.3-2.8-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path><path d="M6 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:comment-ellipsis"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5zM5 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM8 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM11 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:comment-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.5 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.3l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.7-2.3-2.7-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path></g>
<g id="vaadin:comment"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5z"></path></g>
<g id="vaadin:comments-o"><path d="M14.2 14c0.6-0.5 1.8-1.6 1.8-3.2 0-1.4-1.2-2.6-2.8-3.3 0.5-0.6 0.8-1.5 0.8-2.4 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.2 0 2.2-0.3 3-0.7 0.3 1.9 2.5 3.4 5.3 3.4 0.1 0 0.3 0 0.5 0 0.6 0.5 1.8 1.3 3.5 1.3h1.4l-1.1-0.9c0 0-0.3-0.3-0.4-1.1zM10.3 13.7c-2.3 0-4.3-1.3-4.3-2.8 0-0.1 0-0.1 0-0.2 0.2-0.2 0.4-0.3 0.5-0.5 0.2 0 0.5 0 0.7 0 2.1 0 4-0.7 5.2-1.9 1.5 0.5 2.6 1.5 2.6 2.5s-0.9 2-1.7 2.5l-0.3 0.2v0.3c0 0.5 0.2 0.8 0.3 1.1-1-0.2-1.7-0.7-1.9-1l-0.1-0.2h-0.2c-0.3 0-0.6 0-0.8 0zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:comments"><path d="M16 11.1c0-1.5-1.5-2.8-3.2-3.3-1.3 1.5-3.9 2.4-6.4 2.4-0.1 0-0.3 0-0.4 0 0 0 0 0-0.1 0-0.1 0.3-0.1 0.5-0.1 0.8 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0 0-0.8-0.4-0.8-1.8 0 0 0 0 0 0 0-0.6 2-1.8 2-3.1z"></path><path d="M13 4.6c0-2.5-2.8-4.6-6.4-4.6s-6.6 2.1-6.6 4.6c0 1.7 2 3.2 3 4 0 0 0 0 0 0 0 1.8-1.4 2.4-1.4 2.4 2.3 0 3.6-1.1 4.2-1.8 0.2 0 0.5 0 0.8 0 3.5 0.1 6.4-2 6.4-4.6z"></path></g>
<g id="vaadin:compile"><path d="M1 12h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M11 12h4v4h-4v-4z"></path><path d="M1 7h4v4h-4v-4z"></path><path d="M1 2h4v4h-4v-4z"></path><path d="M6 7h4v4h-4v-4z"></path><path d="M7 1h4v4h-4v-4z"></path><path d="M11 7h4v4h-4v-4z"></path><path d="M13 0h3v3h-3v-3z"></path></g>
<g id="vaadin:compress-square"><path d="M12 0h-12v12l1-1v-10h10z"></path><path d="M4 16h12v-12l-1 1v10h-10z"></path><path d="M7 9h-5l1.8 1.8-3.8 3.8 1.4 1.4 3.8-3.8 1.8 1.8z"></path><path d="M16 1.4l-1.4-1.4-3.8 3.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:compress"><path d="M5.3 9.3l-5 5 1.4 1.4 5-5 1.3 1.3v-4h-4z"></path><path d="M15.7 1.7l-1.4-1.4-4 4-1.3-1.3v4h4l-1.3-1.3z"></path></g>
<g id="vaadin:connect-o"><path d="M12.5 9c-1 0-1.8 0.4-2.4 1l-3.2-1.7c0.1-0.3 0.1-0.5 0.1-0.8 0-0.2 0-0.3 0-0.4l2.9-1.3c0.6 0.7 1.5 1.2 2.6 1.2 1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5c0 0.2 0 0.3 0 0.4l-2.9 1.3c-0.6-0.7-1.5-1.2-2.6-1.2-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c1 0 1.8-0.4 2.4-1l3.1 1.7c0 0.3 0 0.5 0 0.8 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM12.5 1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5zM3.5 10c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5zM12.5 15c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:connect"><path d="M12 10c-0.8 0-1.4 0.3-2 0.8l-3.2-1.8c0.1-0.3 0.2-0.7 0.2-1s-0.1-0.7-0.2-1l3.2-1.8c0.6 0.5 1.2 0.8 2 0.8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 0.2 0 0.3 0 0.5l-3.5 1.9c-0.4-0.2-0.9-0.4-1.5-0.4-1.6 0-3 1.3-3 3v0c0 1.6 1.4 3 3 3 0.6 0 1.1-0.2 1.5-0.4l3.5 1.9c0 0.2 0 0.3 0 0.5 0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3z"></path></g>
<g id="vaadin:controller"><path d="M5.951 0.249l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M8.877 14.966l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M0.055 9.071l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M14.773 6.145l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M11.471 1.897l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M3.139 14.441l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M1.069 3.989l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M13.547 12.299l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M8.875 1.039l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M5.953 15.745l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M0.061 6.931l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M14.767 9.854l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M3.139 1.628l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M11.477 14.101l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M1.071 12.033l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M13.539 3.63l0.83-0.56 0.56 0.83-0.83 0.56-0.56-0.83z"></path><path d="M14 8c-0.003-1.895-0.884-3.583-2.258-4.681l-3.322 4.991-0.84-0.59 3.32-5c-0.836-0.47-1.836-0.747-2.9-0.747-3.314 0-6 2.686-6 6s2.686 6 6 6c3.304 0 5.984-2.671 6-5.971z"></path></g>
<g id="vaadin:copy-o"><path d="M13 3h-3l-3-3h-7v13h6v3h10v-10l-3-3zM7 1l2 2h-2v-2zM1 12v-11h5v3h3v8h-8zM15 15h-8v-2h3v-9h2v3h3v8zM13 6v-2l2 2h-2z"></path></g>
<g id="vaadin:copy"><path d="M6 0v3h3z"></path><path d="M9 4h-4v-4h-5v12h9z"></path><path d="M13 4v3h3z"></path><path d="M12 4h-2v9h-3v3h9v-8h-4z"></path></g>
<g id="vaadin:copyright"><path d="M8 1.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M9.9 10.3c-0.5 0.4-1.2 0.7-1.9 0.7-1.7 0-3-1.3-3-3s1.3-3 3-3c0.8 0 1.6 0.3 2.1 0.9l1.1-1.1c-0.8-0.8-2-1.3-3.2-1.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.1 0 2-0.4 2.8-1l-0.9-1.2z"></path></g>
<g id="vaadin:corner-lower-left"><path d="M16 16l-16-16v16z"></path></g>
<g id="vaadin:corner-lower-right"><path d="M16 16h-16l16-16z"></path></g>
<g id="vaadin:corner-upper-left"><path d="M0 16l16-16h-16z"></path></g>
<g id="vaadin:corner-upper-right"><path d="M16 16l-16-16h16z"></path></g>
<g id="vaadin:credit-card"><path d="M0 2v12h16v-12h-16zM15 13h-14v-5h14v5zM15 5h-14v-2h14v2z"></path><path d="M10 11h3v1h-3v-1z"></path><path d="M2 11h6v1h-6v-1z"></path></g>
<g id="vaadin:crop"><path d="M16 0.7v-0.7h-0.7l-3 3h-7.3v-3h-2v3h-3v2h3v8h8v3h2v-3h3v-2h-3v-7.3l3-3zM5 5h5.3l-5.3 5.3v-5.3zM11 11h-5.3l5.3-5.3v5.3z"></path></g>
<g id="vaadin:cross-cutlery"><path d="M10.9 8.6c0 0 0 0 0 0 0.6-0.1 1.2-0.4 1.6-0.9l3.1-3.1c0.4-0.4 0.4-1 0-1.4l-0.1-0.2-3 3c-0.2 0.2-0.6 0.2-0.9 0s-0.2-0.6 0-0.9l2.6-2.6c0.2-0.2 0.2-0.6 0-0.9-0.2-0.2-0.6-0.2-0.9 0l-2.6 2.6c-0.2 0.2-0.6 0.2-0.9 0-0.2-0.2-0.2-0.6 0-0.9l3-3-0.1-0.1c-0.4-0.4-1-0.4-1.4 0l-3.1 3.3c-0.4 0.4-0.7 1-0.8 1.6l-4.9-4.8c-0.4-0.4-1-0.3-1.3 0l-0.2 0.2c-1.4 1.4-0.9 4.2 1.5 6.6l0.8 0.8c0.4 0.4 0.9 0.7 1.5 0.8-0.5 0.4-0.8 0.8-0.8 0.8l-3.4 3.4c-0.7 0.7-0.7 1.9 0 2.6s1.9 0.7 2.6 0l3.3-3.5c0.2-0.2 0.7-0.8 1.3-1.5 0.3 0.4 0.5 0.6 0.5 0.6l4.3 4.3c0.7 0.7 1.9 0.7 2.6 0s0.7-1.9 0-2.6l-4.3-4.2z"></path></g>
<g id="vaadin:crosshairs"><path d="M7.5 0h1v4l-0.5 2-0.5-2v-4z"></path><path d="M8.5 16h-1v-4l0.5-2 0.5 2v4z"></path><path d="M16 7.5v1h-4l-2-0.5 2-0.5h4z"></path><path d="M0 8.5v-1h4l2 0.5-2 0.5h-4z"></path><path d="M8 2.5c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5c-3.038 0-5.5-2.462-5.5-5.5 0.006-3.035 2.465-5.494 5.499-5.5zM8 1c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7v0z"></path></g>
<g id="vaadin:css"><path d="M4.1 11c1.4 0 1.9-1 1.9-1l-0.8-0.5c0 0-0.3 0.5-1 0.5s-1.2-0.9-1.2-2.2c0-1.2 0.6-1.8 1.2-1.8 0.5 0 0.9 0.4 0.9 0.4l0.8-0.6c0 0-0.7-0.8-1.7-0.8-1.1 0-2.2 0.9-2.2 2.8s0.9 3.2 2.1 3.2zM8.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM12.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM0 0v16h16v-16h-16zM15 15h-14v-14h14v14z"></path></g>
<g id="vaadin:ctrl-a"><path d="M9 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0.176 0.835 0.907 1.453 1.783 1.453 0.077 0 0.152-0.005 0.226-0.014l-0.009-0.999c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M14 3h1v9h-1v-9z"></path><path d="M13 6c-0.025-0.001-0.055-0.001-0.085-0.001-0.773 0-1.462 0.358-1.911 0.917l-0.004-0.915h-1v6h1v-3c-0.003-0.037-0.004-0.080-0.004-0.124 0-1.038 0.842-1.88 1.88-1.88 0.044 0 0.087 0.001 0.13 0.004l-0.006-1z"></path><path d="M4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47z"></path></g>
<g id="vaadin:ctrl"><path d="M0 0v16h16v-16h-16zM4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47zM9 7h-1v3.5c0.147 0.309 0.457 0.519 0.815 0.519 0.065 0 0.129-0.007 0.19-0.020l-0.006 1.001c-0.065 0.008-0.141 0.013-0.217 0.013-0.875 0-1.606-0.618-1.781-1.441l-0.002-3.572h-0.51v-1h0.51v-1h1v1h1v1zM11 9v3h-1v-6h1v0.92c0.453-0.564 1.142-0.921 1.915-0.921 0.030 0 0.060 0.001 0.090 0.002l-0.004 1c-0.037-0.003-0.080-0.004-0.124-0.004-1.038 0-1.88 0.842-1.88 1.88 0 0.044 0.001 0.087 0.004 0.13zM15 12h-1v-9h1v9z"></path></g>
<g id="vaadin:cube"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM14.4 2.6l-5.9 2.2-6.6-2.2 6.1-1.6 6.4 1.6zM1 11.4v-8.1l7 2.4v9.2l-7-3.5z"></path></g>
<g id="vaadin:cubes"><path d="M12 6v-4l-4-2-4 2v4l-4 2v5l4 2 4-2 4 2 4-2v-5zM8.090 1.12l2.91 1.44-2.6 1.3-2.91-1.44zM5 2.78l3 1.5v3.6l-3-1.5v-3.6zM4 13.88l-3-1.5v-3.6l3 1.5v3.6zM4.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44zM12 13.88l-3-1.5v-3.6l3 1.5v3.6zM12.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44z"></path></g>
<g id="vaadin:curly-brackets"><path d="M2.1 3.1c0.2 1.3 0.4 1.6 0.4 2.9 0 0.8-1.5 1.5-1.5 1.5v1c0 0 1.5 0.7 1.5 1.5 0 1.3-0.2 1.6-0.4 2.9-0.3 2.1 0.8 3.1 1.8 3.1s2.1 0 2.1 0v-2c0 0-1.8 0.2-1.8-1 0-0.9 0.2-0.9 0.4-2.9 0.1-0.9-0.5-1.6-1.1-2.1 0.6-0.5 1.2-1.1 1.1-2-0.3-2-0.4-2-0.4-2.9 0-1.2 1.8-1.1 1.8-1.1v-2c0 0-1 0-2.1 0s-2.1 1-1.8 3.1z"></path><path d="M13.9 3.1c-0.2 1.3-0.4 1.6-0.4 2.9 0 0.8 1.5 1.5 1.5 1.5v1c0 0-1.5 0.7-1.5 1.5 0 1.3 0.2 1.6 0.4 2.9 0.3 2.1-0.8 3.1-1.8 3.1s-2.1 0-2.1 0v-2c0 0 1.8 0.2 1.8-1 0-0.9-0.2-0.9-0.4-2.9-0.1-0.9 0.5-1.6 1.1-2.1-0.6-0.5-1.2-1.1-1.1-2 0.2-2 0.4-2 0.4-2.9 0-1.2-1.8-1.1-1.8-1.1v-2c0 0 1 0 2.1 0s2.1 1 1.8 3.1z"></path></g>
<g id="vaadin:cursor-o"><path d="M5 2.6l5.75 6.4h-2.46l0.63 1.41 1.8 4-0.91 0.34-1.88-4.3-0.5-1.11-1 0.71-1.43 1.020v-8.47zM4 0v13l3-2.14 2.26 5.14 2.8-1-2.23-5h3.17l-9-10z"></path></g>
<g id="vaadin:cursor"><path d="M4 0v13l3.31-3.47 2.69 6.47 1.37-0.63-2.72-6.37h4.35l-9-9z"></path></g>
<g id="vaadin:cutlery"><path d="M13 0.8c0-0.5-0.4-0.8-0.8-0.8h-0.2c-1.7 0-3 1.9-3 4.7v0.9c0 1 0.5 1.9 1.4 2.4-0.3 1.2-0.4 2.5-0.4 2.5v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.4-0.1-1.4-0.3-2.3 0.2-0.2 0.3-0.4 0.3-0.7v-6.7z"></path><path d="M7.2 0h-0.2v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3c0-0.3-0.2-0.5-0.5-0.5s-0.5 0.2-0.5 0.5v3c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-0.2c-0.4 0-0.8 0.4-0.8 0.8v3.7c0 1 0.6 1.9 1.5 2.3-0.4 1.6-0.5 3.7-0.5 3.7v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.5-0.1-2.3-0.4-3.7 0.8-0.4 1.4-1.3 1.4-2.3v-3.7c0-0.4-0.4-0.8-0.8-0.8z"></path></g>
<g id="vaadin:dashboard"><path d="M16 10.1c0-4.4-3.6-8.1-8-8.1s-8 3.7-8 8.1c0 1.4 0.3 2.9 0.9 3.9h4.9c0.5 0.6 1.3 1 2.2 1s1.7-0.4 2.2-1h4.9c0.6-1 0.9-2.5 0.9-3.9zM14 7v1l-4.1 3.5c0 0.1 0.1 0.3 0.1 0.5 0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2c0.3 0 0.6 0.1 0.8 0.2l4.2-3.2h1zM10 4h1v1h-1v-1zM5 4h1v1h-1v-1zM2 12h-1v-1h1v1zM3 8h-1v-1h1v1zM15 12h-1v-1h1v1z"></path><path d="M9 12c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:database"><path d="M14 2.5c0 0.828-2.686 1.5-6 1.5s-6-0.672-6-1.5c0-0.828 2.686-1.5 6-1.5s6 0.672 6 1.5z"></path><path d="M8 5c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 9c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 13c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path></g>
<g id="vaadin:date-input"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path><path d="M3 8h1v5h-1v-5z"></path></g>
<g id="vaadin:deindent"><path d="M4 10.5v-6l-4 3z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:del-a"><path d="M14 3h1v9h-1v-9z"></path><path d="M3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM2 11h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5h-1v7z"></path><path d="M13 9v-0.5c-0.017-0.77-0.31-1.468-0.783-2.003-0.419-0.412-0.999-0.668-1.638-0.668-0.031 0-0.063 0.001-0.094 0.002-0.013-0.001-0.034-0.001-0.054-0.001-0.594 0-1.132 0.241-1.521 0.631-0.566 0.685-0.91 1.572-0.91 2.54 0 0.003-0 0.006-0 0.009 0 0.881 0.322 1.686 0.854 2.306 0.43 0.429 1.030 0.697 1.692 0.697 0.030 0 0.059-0.001 0.089-0.002 0.861-0.026 1.642-0.372 2.228-0.922l-0.712-0.708c-0.401 0.368-0.931 0.603-1.515 0.63-0.026 0.001-0.051 0.002-0.076 0.002-0.385 0-0.734-0.153-0.99-0.402-0.355-0.435-0.57-0.997-0.57-1.61l4-0zM10.5 6.8c0.020-0.001 0.043-0.002 0.066-0.002 0.362 0 0.691 0.141 0.935 0.372 0.209 0.224 0.361 0.505 0.427 0.818l-2.778 0.011c0.11-0.661 0.661-1.165 1.337-1.2z"></path></g>
<g id="vaadin:del"><path d="M0 0v16h16v-16h-16zM3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM13 9h-4c-0 0.004-0 0.008-0 0.012 0 0.607 0.211 1.164 0.564 1.603 0.252 0.244 0.601 0.397 0.986 0.397 0.025 0 0.049-0.001 0.074-0.002 0.586-0.027 1.115-0.261 1.518-0.631l0.708 0.712c-0.584 0.548-1.364 0.893-2.225 0.92-0.030 0.001-0.060 0.002-0.090 0.002-0.662 0-1.261-0.268-1.696-0.702-0.522-0.613-0.84-1.414-0.84-2.289 0-0.007 0-0.014 0-0.022-0-0.005-0-0.012-0-0.019 0-0.968 0.344-1.855 0.915-2.547 0.384-0.383 0.922-0.624 1.516-0.624 0.021 0 0.041 0 0.062 0.001 0.024-0.001 0.055-0.002 0.086-0.002 0.639 0 1.219 0.256 1.641 0.672 0.47 0.532 0.762 1.23 0.78 1.996l0 0.524zM15 12h-1v-9h1v9z"></path><path d="M3 4h-1v7h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5z"></path><path d="M10.49 6.8c-0.679 0.035-1.23 0.539-1.339 1.192l2.779 0.008c-0.069-0.324-0.22-0.606-0.431-0.831-0.242-0.229-0.571-0.371-0.934-0.371-0.027 0-0.053 0.001-0.079 0.002z"></path></g>
<g id="vaadin:dental-chair"><path d="M11.5 8.2c-0.3-0.1-0.6-0.2-0.8-0.2h-2.7v-1h3c0-0.6-0.4-1-1-1h-4c0 0.6 0.4 1 1 1v1c-0.5 0-1-0.2-1.2-0.6l-1.1-1.8c-0.3-0.4-0.7-0.6-1.1-0.6h-0.6v-0.7c0-0.3-0.1-0.5-0.2-0.8l-0.3-0.7c-0.3-0.5-0.9-0.8-1.5-0.8h-1l5 7c0.4 0.6 1.1 1 1.8 1h1.2v1h-1v2h-0.6c-0.9 0-1.8 0.4-2.4 1v0h-1v1h11v-1h-1c-0.6-0.6-1.5-1-2.4-1h-0.6v-2h-1v-1h1.6c0.2 0 0.5 0.1 0.7 0.2l1.7 0.9c0.9 0.5 2 0.5 2.9 0h0.1l-4.5-2.9z"></path></g>
<g id="vaadin:desktop"><path d="M16 0h-16v13h6v2h-2v1h8v-1h-2v-2h6v-13zM9 12h-2v-1h2v1zM15 10h-14v-8.9c0-0.1 0-0.1 0-0.1h14c0 0 0 0 0 0.1v8.9z"></path></g>
<g id="vaadin:diamond-o"><path d="M13 2h-10l-3 3.5 8 9.5 8-9.5zM4.64 5h-2.89l1.52-1.78zM6.42 5l1.58-1.84 1.58 1.84h-3.16zM10 6l-2 6.68-2-6.68h4zM5.26 6l1.89 6.44-5.42-6.44h3.53zM10.75 6h3.53l-5.43 6.44zM11.37 5l1.37-1.78 1.51 1.78h-2.9zM12 3l-1.44 1.81-1.46-1.81h2.9zM5.43 4.83l-1.43-1.83h2.9z"></path></g>
<g id="vaadin:diamond"><path d="M0 6h4l3 8.6-7-8.6z"></path><path d="M16 6h-4l-3 8.6 7-8.6z"></path><path d="M8 15l-3-9h6l-3 9z"></path><path d="M4 5h-4l2-3 2 3z"></path><path d="M16 5h-4l2-3 2 3z"></path><path d="M10 5h-4l2-3 2 3z"></path><path d="M3.34 2h3.66l-2 3-1.66-3z"></path><path d="M9 2h4l-2 3-2-3z"></path></g>
<g id="vaadin:diploma-scroll"><path d="M12.61 8.41c-0.53-0.079-1.008-0.223-1.454-0.424 2.104-1.876 4.424-3.536 4.454-3.556l0.1-0.070 0.060-0.11c0.177-0.367 0.281-0.797 0.281-1.252 0-0.901-0.407-1.707-1.046-2.244-0.523-0.482-1.219-0.776-1.983-0.776-0.538 0-1.043 0.146-1.476 0.4l-0.126 0.133c-1.578 2.181-3.182 4.099-4.908 5.899-1.836 1.638-3.87 3.195-6.018 4.592l-0.394 0.248v0.23c-0.077 0.314-0.122 0.675-0.122 1.046 0 0.97 0.304 1.87 0.822 2.609 0.507 0.53 1.237 0.87 2.045 0.87 0.055 0 0.109-0.002 0.162-0.005 0.026 0.002 0.065 0.003 0.104 0.003 0.701 0 1.317-0.36 1.674-0.905 0.245-0.308 2.065-2.608 4.005-4.708 0.268 0.464 0.476 1.003 0.594 1.575 0.032 0.249 0.046 0.496 0.046 0.747 0 0.823-0.158 1.61-0.445 2.331l1.685-2.043 1.33 1c-0.041-1.174-0.243-2.286-0.584-3.336-0.227-0.416-0.542-0.845-0.915-1.214 0.406 0.346 0.871 0.643 1.372 0.874 0.94 0.338 1.989 0.572 3.076 0.672l-0.949-1.266 2-1.73c-0.83 0.273-1.785 0.431-2.777 0.431-0.216 0-0.43-0.007-0.642-0.022zM12.16 1.18c0.246-0.123 0.536-0.194 0.842-0.194 0.506 0 0.966 0.196 1.309 0.516 0.441 0.356 0.721 0.897 0.721 1.504 0 0.242-0.045 0.474-0.126 0.688-0.486 0.307-2.346 1.717-4.146 3.307-0.055-0.521-0.302-0.975-0.668-1.298-0.28-0.239-0.643-0.384-1.039-0.384-0.068 0-0.135 0.004-0.201 0.012 1.568-1.771 2.978-3.691 3.308-4.151zM2.7 11.81c0.073-0.051 0.164-0.082 0.262-0.082 0.014 0 0.027 0.001 0.040 0.002l0.068-0c0.179 0.052 0.334 0.142 0.461 0.261l-0.871 0.719c-0.081-0.165-0.128-0.358-0.128-0.563 0-0.052 0.003-0.103 0.009-0.153 0.027-0.077 0.084-0.144 0.158-0.183zM4 14.5c-0.175 0.306-0.499 0.508-0.871 0.508-0.046 0-0.090-0.003-0.134-0.009-0.046 0.006-0.106 0.008-0.167 0.008-0.515 0-0.981-0.209-1.318-0.548-0.365-0.54-0.583-1.206-0.583-1.922 0-0.251 0.027-0.495 0.077-0.73l0.706-0.457c-0.094 0.14-0.164 0.304-0.199 0.481-0.007 0.076-0.010 0.154-0.010 0.234 0 0.642 0.202 1.237 0.545 1.724l0.354 0.44 1.7-1.4c0.066 0.209 0.104 0.45 0.104 0.7 0 0.351-0.075 0.685-0.21 0.985zM4.86 12.050c-0.345-0.6-0.889-1.053-1.54-1.274-0.071-0.012-0.13-0.016-0.19-0.016s-0.119 0.004-0.177 0.010c-0.046-0.007-0.106-0.011-0.168-0.011s-0.122 0.004-0.182 0.011c1.489-1.018 2.766-2.003 3.988-3.052 0.398 0.071 0.812 0.25 1.131 0.533 0.297 0.313 0.48 0.739 0.48 1.209 0 0.032-0.001 0.063-0.002 0.094-1.14 1.226-2.25 2.536-3 3.506-0.054-0.379-0.177-0.719-0.357-1.023z"></path></g>
<g id="vaadin:diploma"><path d="M14 10.58c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167l-0.479-0.698c-0.009-0.013-0.014-0.028-0.014-0.045s0.005-0.032 0.014-0.045l0.48-0.7c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167c-0.040-0.11-0.127-0.196-0.236-0.237l-0.823-0.301c-0.031-0.011-0.054-0.037-0.060-0.069l-0-0.841c-0.007-0.125-0.072-0.233-0.169-0.299-0.066-0.045-0.145-0.071-0.231-0.071-0.004 0-0.007 0-0.011 0l-0.159-0-0.85 0.22c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l-0.549-0.65c-0.079-0.085-0.191-0.137-0.315-0.137s-0.236 0.053-0.315 0.137l-0.55 0.65c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l0.001 0-0.9-0.23h-0.1c-0.002-0-0.005-0-0.008-0-0.087 0-0.167 0.026-0.234 0.071-0.096 0.066-0.161 0.174-0.168 0.298l-0 0.841c-0.006 0.033-0.029 0.059-0.059 0.070l-0.821 0.3c-0.134 0.023-0.245 0.11-0.299 0.228-0.025 0.051-0.039 0.107-0.039 0.167s0.014 0.117 0.039 0.167l0.479 0.698c0.009 0.013 0.014 0.028 0.014 0.045s-0.005 0.032-0.014 0.045l-0.48 0.7c-0.024 0.048-0.038 0.105-0.038 0.165s0.014 0.117 0.039 0.167c0.040 0.11 0.127 0.196 0.236 0.237l0.823 0.301c0.031 0.011 0.054 0.037 0.060 0.069l0 0.841c0.007 0.125 0.072 0.233 0.169 0.299 0.067 0.045 0.147 0.071 0.234 0.071 0.003 0 0.005-0 0.008-0h0.16l0.31-0.070v3.69l1.53-2 1.47 2v-3.69l0.31 0.080h0.11c0.002 0 0.005 0 0.008 0 0.087 0 0.167-0.026 0.234-0.071 0.096-0.066 0.161-0.174 0.168-0.298l0-0.841c0.006-0.033 0.029-0.059 0.059-0.070l0.821-0.3c0.13-0.026 0.236-0.112 0.289-0.227z"></path><path d="M0 1v12h8l-0.11-0.050c-0.282-0.195-0.469-0.508-0.49-0.867l-0-0.083h-6.4v-10h14v10h-1.43v0.080c-0.021 0.361-0.208 0.675-0.486 0.868l-0.084 0.052h3v-12h-16z"></path><path d="M7.43 6.91c0.007-0.377 0.198-0.708 0.486-0.908 0.016-0.005 0.030-0.006 0.044-0.006s0.028 0.001 0.041 0.004l-5.001-0v1h4.43v-0.090z"></path><path d="M6.42 8h-3.42v1h3.36c-0.074-0.136-0.117-0.298-0.117-0.47 0-0.13 0.025-0.253 0.070-0.367 0.014-0.063 0.054-0.122 0.107-0.163z"></path><path d="M3 4h10v1h-10v-1z"></path></g>
<g id="vaadin:disc"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM15 8c0 1.1-0.2 2.1-0.7 3l-2.7-1.2c0.2-0.6 0.4-1.2 0.4-1.8 0-2.2-1.8-4-4-4-0.5 0-0.9 0.1-1.4 0.3l-1.2-2.8c0.6-0.2 1.2-0.4 1.8-0.5l0.3 3h0.5v-3c3.9 0 7 3.1 7 7zM8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM1 8c0-1.1 0.2-2.1 0.7-3l2.7 1.2c-0.2 0.6-0.4 1.2-0.4 1.8 0 2.2 1.8 4 4 4 0.5 0 0.9-0.1 1.4-0.3l1.2 2.8c-0.6 0.2-1.2 0.4-1.8 0.5l-0.3-3h-0.5v3c-3.9 0-7-3.1-7-7z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:doctor-briefcase"><path d="M16 12l-1.4-6.7c-0.2-0.7-0.9-1.3-1.7-1.3h-1.9v-1.2c0-1-0.8-1.8-1.8-1.8h-2.4c-1 0-1.8 0.8-1.8 1.8v1.2h-1.9c-0.8 0-1.5 0.6-1.7 1.3l-1.4 6.7c-0.2 1 0.6 2 1.7 2h12.5c1.2 0 2-1 1.8-2zM6 2.8c0-0.4 0.4-0.8 0.8-0.8h2.4c0.4 0 0.8 0.4 0.8 0.8v1.2h-4v-1.2zM11 10h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"></path></g>
<g id="vaadin:doctor"><path d="M14 11.3c-1-1.9-2-1.6-3.1-1.7 0.1 0.3 0.1 0.6 0.1 1 1.6 0.4 2 2.3 2 3.4v1h-2v-1h1c0 0 0-2.5-1.5-2.5s-1.5 2.4-1.5 2.5h1v1h-2v-1c0-1.1 0.4-3.1 2-3.4 0-0.6-0.1-1.1-0.2-1.3-0.2-0.1-0.4-0.3-0.4-0.6 0-0.6 0.8-0.4 1.4-1.5 0 0 0.9-2.3 0.6-4.3h-1c0-0.2 0.1-0.3 0.1-0.5s0-0.3-0.1-0.5h0.8c-0.3-1-1.3-1.9-3.2-1.9 0 0 0 0 0 0s0 0 0 0 0 0 0 0c-1.9 0-2.9 0.9-3.3 2h0.8c0 0.2-0.1 0.3-0.1 0.5s0 0.3 0.1 0.5h-1c-0.2 2 0.6 4.3 0.6 4.3 0.6 1 1.4 0.8 1.4 1.5 0 0.5-0.5 0.7-1.1 0.8-0.2 0.2-0.4 0.6-0.4 1.4 0 0.4 0 0.8 0 1.2 0.6 0.2 1 0.8 1 1.4 0 0.7-0.7 1.4-1.5 1.4s-1.5-0.7-1.5-1.5c0-0.7 0.4-1.2 1-1.4 0-0.3 0-0.7 0-1.2s0.1-0.9 0.2-1.3c-0.7 0.1-1.5 0.4-2.2 1.7-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0.1 0-0.2-3.6-0.8-4.7zM6.5 2.5c0-0.8 0.7-1.5 1.5-1.5s1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5-1.5-0.7-1.5-1.5z"></path><path d="M5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:dollar"><path d="M8.2 6.8c-0.1 0-0.1-0.1-0.2-0.1v-3.1c1.2 0.1 2.2 0.6 2.2 0.6l0.9-1.8c-0.1 0-1.5-0.8-3.1-0.8v-1.6h-1v1.6c-0.8 0.2-1.4 0.5-2 0.9-0.6 0.6-1 1.4-1 2.3 0 0.7 0.2 2.3 3 3.6v3.9c-0.9-0.2-2-0.7-2.4-0.9l-1 1.7c0.2 0.1 1.8 1 3.4 1.2v1.7h1v-1.7c0 0 0 0 0 0 2.3-0.3 3.6-2.1 3.6-3.8 0-1.5-1-2.7-3.4-3.7zM7 6.2c-0.8-0.5-1-1-1-1.3 0-0.4 0.1-0.7 0.4-0.9 0.2-0.1 0.4-0.2 0.6-0.3v2.5zM8 12.3v-3.4c1.1 0.5 1.6 1.1 1.6 1.6 0 0.6-0.3 1.6-1.6 1.8z"></path></g>
<g id="vaadin:dot-circle"><path d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:download-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 13l5-5h-3v-8h-4v8h-3z"></path></g>
<g id="vaadin:download"><path d="M16 10h-5.5l-2.5 2.5-2.5-2.5h-5.5v6h16v-6zM4 14h-2v-2h2v2z"></path><path d="M10 6v-6h-4v6h-3l5 5 5-5z"></path></g>
<g id="vaadin:drop"><path d="M8 0c0 0-5 8.2-5 11s2.2 5 5 5 5-2.2 5-5-5-11-5-11zM8.9 14.9l-0.2-1c1.4-0.3 2.4-1.7 2.4-3.2 0-0.3-0.1-1.1-0.8-2.6l0.9-0.4c0.6 1.4 0.8 2.4 0.8 3 0 2-1.3 3.8-3.1 4.2z"></path></g>
<g id="vaadin:edit"><path d="M16 4c0 0 0-1-1-2s-1.9-1-1.9-1l-1.1 1.1v-2.1h-12v16h12v-8l4-4zM6.3 11.4l-0.6-0.6 0.3-1.1 1.5 1.5-1.2 0.2zM7.2 9.5l-0.6-0.6 5.2-5.2c0.2 0.1 0.4 0.3 0.6 0.5zM14.1 2.5l-0.9 1c-0.2-0.2-0.4-0.3-0.6-0.5l0.9-0.9c0.1 0.1 0.3 0.2 0.6 0.4zM11 15h-10v-14h10v2.1l-5.9 5.9-1.1 4.1 4.1-1.1 2.9-3v6z"></path></g>
<g id="vaadin:eject"><path d="M1 11h14l-7-10z"></path><path d="M1 12h14v3h-14v-3z"></path></g>
<g id="vaadin:elastic"><path d="M4.7 16v0c-1.7 0-3.1-0.8-4-2.1-1.1-1.7-0.9-4 0.4-5.8 0.9-1.3 2.1-2.1 3.6-2.4 1.2-0.3 2.2-1.1 2.5-2.2 0.2-0.8 0.7-1.5 1.3-2 0.9-1 2.2-1.5 3.5-1.5 1.1 0 2.2 0.4 2.9 1.2 1.5 1.6 1.5 4.2-0.1 6-0.5 0.6-1.2 1.1-2 1.4-1.2 0.5-2.2 1.6-2.6 3-0.3 1-0.8 1.9-1.5 2.6-1.1 1.2-2.6 1.8-4 1.8zM12 1c-1 0-2 0.4-2.8 1.2-0.5 0.5-0.8 1-1 1.6-0.5 1.5-1.8 2.5-3.3 2.9-1.2 0.2-2.2 0.9-3 2-1.1 1.5-1.2 3.3-0.3 4.7 0.6 1 1.8 1.6 3.1 1.6v0c1.2 0 2.4-0.5 3.3-1.4 0.6-0.6 1.1-1.4 1.3-2.2 0.4-1.7 1.6-3 3.2-3.6 0.6-0.2 1.2-0.7 1.6-1.2 1.2-1.4 1.3-3.5 0.1-4.7-0.6-0.6-1.4-0.9-2.2-0.9z"></path></g>
<g id="vaadin:ellipsis-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M4 7h2v2h-2v-2z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 7h2v2h-2v-2z"></path></g>
<g id="vaadin:ellipsis-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 9h-2v-2h2v2zM9 9h-2v-2h2v2zM12 9h-2v-2h2v2z"></path></g>
<g id="vaadin:ellipsis-dots-h"><path d="M4 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M16 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-dots-v"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-h"><path d="M0 6h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path></g>
<g id="vaadin:ellipsis-v"><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path></g>
<g id="vaadin:enter-arrow"><path d="M0 9l7 4v-3h9v-7l-3 2v2h-6v-3l-7 5z"></path></g>
<g id="vaadin:enter"><path d="M4 0v6h-3v10h14v-16h-11zM12 11h-5v2l-3-2.5 3-2.5v2h4v-3h1v4z"></path></g>
<g id="vaadin:envelope-o"><path d="M0 3v11h16v-11h-16zM1 7.1l3.9 2-3.9 3.4v-5.4zM1.9 13l4-3.5 2.1 1.1 2.1-1.1 4 3.5h-12.2zM15 12.5l-3.9-3.5 3.9-2v5.5zM15 5.9l-7 3.5-7-3.5v-1.9h14v1.9z"></path></g>
<g id="vaadin:envelope-open-o"><path d="M14 3.7v-0.7h-1.5l-4.5-3-4.6 3h-1.4v0.7l-2 1.3v11h16v-10.9l-2-1.4zM8 1.2l2.7 1.8h-5.5l2.8-1.8zM3 4h10v3.7l-3.5 1.7-1.5-1.3-1.5 1.4-3.5-1.7v-3.8zM1 5.5l1-0.7v2.4l-1-0.4v-1.3zM1 7.9l4.6 2.3-4.6 4v-6.3zM1.9 15l6.1-5.3 6.1 5.3h-12.2zM15 14.2l-4.7-4.1 4.7-2.3v6.4zM15 6.7l-1 0.5v-2.3l1 0.7v1.1z"></path></g>
<g id="vaadin:envelope-open"><path d="M14 3.7v3.7l2-1v-1.4z"></path><path d="M2 3.8l-2 1.2v1.5l2 1z"></path><path d="M11.2 2l-3.2-2-3.2 2z"></path><path d="M13 3h-10v4.9l3.4 1.7 1.6-1.2 1.6 1.2 3.4-1.7z"></path><path d="M16 7.6l-5.5 2.7 5.5 4.4z"></path><path d="M8 9.6l-8 6.4h16z"></path><path d="M5.5 10.3l-5.5-2.7v7.1z"></path></g>
<g id="vaadin:envelope"><path d="M0 3h16v2.4l-8 4-8-4z"></path><path d="M0 14l5.5-4.8 2.5 1.4 2.5-1.4 5.5 4.8z"></path><path d="M4.6 8.8l-4.6-2.3v6.5z"></path><path d="M11.4 8.8l4.6-2.3v6.5z"></path></g>
<g id="vaadin:envelopes-o"><path d="M14 2h-14v10h14v-10zM5.71 8l1.29 0.55 1.29-0.55 4.71 3h-12zM1 9.83v-4l3.64 1.63zM9.36 7.46l3.64-1.68v4zM13 3v1.68l-6 2.77-6-2.77v-1.68h12z"></path><path d="M15 4v9h-13v1h14v-10h-1z"></path></g>
<g id="vaadin:envelopes"><path d="M16 14h-14v-1h13v-9h1v10z"></path><path d="M14 10.77v-5.48l-4.68 2.18 4.68 3.3z"></path><path d="M8.28 7.96l-1.28 0.59-1.28-0.59-5.72 4.030v0.010l14-0.010-5.72-4.030z"></path><path d="M7 7.45l7-3.27v-2.18h-14v2.18l7 3.27z"></path><path d="M4.68 7.47l-4.68-2.18v5.48l4.68-3.3z"></path></g>
<g id="vaadin:eraser"><path d="M8.1 14l6.4-7.2c0.6-0.7 0.6-1.8-0.1-2.5l-2.7-2.7c-0.3-0.4-0.8-0.6-1.3-0.6h-1.8c-0.5 0-1 0.2-1.4 0.6l-6.7 7.6c-0.6 0.7-0.6 1.9 0.1 2.5l2.7 2.7c0.3 0.4 0.8 0.6 1.3 0.6h11.4v-1h-7.9zM6.8 13.9c0 0 0-0.1 0 0l-2.7-2.7c-0.4-0.4-0.4-0.9 0-1.3l3.4-3.9h-1l-3 3.3c-0.6 0.7-0.6 1.7 0.1 2.4l2.3 2.3h-1.3c-0.2 0-0.4-0.1-0.6-0.2l-2.8-2.8c-0.3-0.3-0.3-0.8 0-1.1l3.5-3.9h1.8l3.5-4h1l-3.5 4 3.1 3.7-3.5 4c-0.1 0.1-0.2 0.1-0.3 0.2z"></path></g>
<g id="vaadin:esc-a"><path d="M8 12c-0.726-0.029-1.409-0.177-2.043-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.85 0.33 2 0.77 1.8 2.080-0.067 0.511-0.364 0.94-0.782 1.186-0.323 0.163-0.696 0.256-1.090 0.256-0.034 0-0.069-0.001-0.103-0.002z"></path><path d="M13.71 12c-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.646-0.548-1.059-1.37-1.059-2.289 0-0.079 0.003-0.157 0.009-0.235-0.011-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.010 0.063-0.016 0.148-0.016 0.234 0 0.599 0.255 1.138 0.663 1.514 0.346 0.177 0.754 0.28 1.185 0.28 0.292 0 0.573-0.047 0.835-0.134l0.331 0.905c-0.383 0.121-0.823 0.19-1.279 0.19-0.004 0-0.008 0-0.012-0z"></path><path d="M5 4v-1h-4v9h4v-1h-3v-3h3v-1h-3v-3h3z"></path></g>
<g id="vaadin:esc"><path d="M0 0v16h16v-16h-16zM5 4h-3v3h3v1h-3v3h3v1h-4v-9h4v1zM10 10.54c-0.067 0.511-0.364 0.94-0.782 1.186-0.333 0.175-0.719 0.276-1.129 0.276-0.031 0-0.062-0.001-0.093-0.002-0.722-0.029-1.405-0.177-2.038-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.83 0.3 2.020 0.75 1.83 2.060zM12.67 10.72c0.345 0.176 0.752 0.279 1.183 0.279 0.292 0 0.573-0.047 0.835-0.134l0.311 0.945c-0.383 0.121-0.823 0.19-1.279 0.19-0 0-0.001 0-0.001 0-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.651-0.548-1.069-1.374-1.069-2.297 0-0.076 0.003-0.152 0.008-0.227-0.010-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.008 0.055-0.013 0.13-0.013 0.206 0 0.592 0.25 1.126 0.65 1.502z"></path></g>
<g id="vaadin:euro"><path d="M10.89 3c1.166 0.009 2.244 0.383 3.127 1.011l-0.017-2.321c-0.918-0.433-1.994-0.686-3.129-0.686-3.606 0-6.616 2.551-7.323 5.947l-1.548 0.049v1h1.41c0 0.17 0 0.33 0 0.5-0.005 0.075-0.008 0.162-0.008 0.25s0.003 0.175 0.008 0.262l-1.411-0.012v1h1.54c0.882 3.353 3.805 5.818 7.331 5.999 1.149-0.002 2.218-0.256 3.175-0.708l-0.045-2.291c-0.866 0.617-1.944 0.991-3.108 1-2.461-0.128-4.512-1.744-5.28-3.959l6.388-0.041v-1h-6.59c-0.006-0.075-0.009-0.162-0.009-0.25s0.003-0.175 0.010-0.261c-0.001-0.159-0.001-0.319-0.001-0.489h6.59v-1h-6.4c0.678-2.325 2.788-3.996 5.29-4z"></path></g>
<g id="vaadin:exchange"><path d="M16 5v2h-13v2l-3-3 3-3v2z"></path><path d="M0 12v-2h13v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:exclamation-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 3h2v7h-2v-7z"></path><path d="M7 11h2v2h-2v-2z"></path></g>
<g id="vaadin:exclamation-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-2h2v2zM9 10h-2v-7h2v7z"></path></g>
<g id="vaadin:exclamation"><path d="M6 0h4v4l-1 7h-2l-1-7z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:exit-o"><path d="M10 0c1.1 0 2 0.9 2 2 0 0.9-0.6 1.7-1.5 1.9 0 0 0 0.1 0 0.1 0.4 0 0.7 0.2 1 0.5l1.3 1.3c0.1 0.1 0.3 0.2 0.5 0.2h1.7v-6h-5z"></path><path d="M11.8 14.5l-3.8-4.5v2.5c0 0.8-0.7 1.5-1.5 1.5h-3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1h2.5c0.3 0 0.5-0.2 0.5-0.5v-2c0-0.7 0.1-1.3 0.4-2l0.7-1.5h-0.8c-0.5 0-0.9 0.2-1.2 0.6l-0.5 0.7c-0.2 0.4-0.7 0.5-1.2 0.3-0.4-0.3-0.6-0.9-0.2-1.3l0.6-0.8c0.7-1 1.9-1.5 3.1-1.5h2l0.1-0.3c-0.6-0.3-1-1-1-1.7 0-1.1 0.9-2 2-2h-7v4.9l-0.6 0.8c-0.3 0.4-0.5 0.9-0.4 1.5 0.1 0.5 0.4 1 0.9 1.3 0 0 0 0 0 0v2.5c-1.1 0-2 0.9-2 2s0.9 2 2 2v1h11.6c-1.1 0-2.1-0.6-2.7-1.5z"></path><path d="M11.4 7.3l-0.7-0.8-0.6 1.5c-0.2 0.5-0.3 0.9 0 1.3l4.9 6.1v-7.4h-2.1c-0.6 0-1.1-0.2-1.5-0.7z"></path></g>
<g id="vaadin:exit"><path d="M14 6h-1.7c-0.2 0-0.4-0.1-0.6-0.2l-1.3-1.3c-0.2-0.3-0.6-0.5-1.1-0.5h-0.3c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7l-0.2 0.3h-2c-1.1 0-2.3 0.5-3 1.5l-0.6 0.8c-0.4 0.4-0.2 1 0.2 1.3 0.4 0.2 0.9 0.1 1.2-0.3l0.5-0.7c0.3-0.4 0.7-0.6 1.2-0.6h0.8l-0.7 1.6c-0.3 0.6-0.4 1.2-0.4 1.9v2c0 0.3-0.2 0.5-0.5 0.5h-2.5c-0.6 0-1 0.4-1 1s0.4 1 1 1h3.5c0.8 0 1.5-0.7 1.5-1.5v-2.5l3.8 4.5c0.6 0.9 1.7 1.5 2.8 1.5h0.9l-5.4-6.7c-0.3-0.4-0.2-0.8 0-1.3l0.6-1.5 0.7 0.8c0.4 0.4 1 0.7 1.6 0.7h2c0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path></g>
<g id="vaadin:expand-full"><path d="M5.3 6.7l1.4-1.4-3-3 1.3-1.3h-4v4l1.3-1.3z"></path><path d="M6.7 10.7l-1.4-1.4-3 3-1.3-1.3v4h4l-1.3-1.3z"></path><path d="M10.7 9.3l-1.4 1.4 3 3-1.3 1.3h4v-4l-1.3 1.3z"></path><path d="M11 1l1.3 1.3-3 3 1.4 1.4 3-3 1.3 1.3v-4z"></path></g>
<g id="vaadin:expand-square"><path d="M11 2h-9v9l1-1v-7h7z"></path><path d="M5 14h9v-9l-1 1v7h-7z"></path><path d="M16 0h-5l1.8 1.8-4.5 4.5 1.4 1.4 4.5-4.5 1.8 1.8z"></path><path d="M7.7 9.7l-1.4-1.4-4.5 4.5-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:expand"><path d="M15 1h-4l1.3 1.3-4.5 4.5 1.4 1.4 4.5-4.5 1.3 1.3z"></path><path d="M6.8 7.8l-4.5 4.5-1.3-1.3v4h4l-1.3-1.3 4.5-4.5z"></path></g>
<g id="vaadin:external-browser"><path d="M11 10l-2.9-3.2-3.3 3.2h2.2v1.8c0 1.7-0.9 4.2-4 4.2 4.8 0 6-1.4 6-4.3v-1.7h2z"></path><path d="M0 0v13h6v-1h-5v-9h14v9h-5v1h6v-13h-16zM2 2h-1v-1h1v1zM13 2h-10v-1h10v1z"></path></g>
<g id="vaadin:external-link"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 0h-5l1.8 1.8-6.8 6.8 1.4 1.4 6.8-6.8 1.8 1.8z"></path></g>
<g id="vaadin:eye-slash"><path d="M12.9 5.2l-0.8 0.8c1.7 0.9 2.5 2.3 2.8 3-0.7 0.9-2.8 3.1-7 3.1-0.7 0-1.2-0.1-1.8-0.2l-0.8 0.8c0.8 0.3 1.7 0.4 2.6 0.4 5.7 0 8.1-4 8.1-4s-0.6-2.4-3.1-3.9z"></path><path d="M12 7.1c0-0.3 0-0.6-0.1-0.8l-4.8 4.7c0.3 0 0.6 0.1 0.9 0.1 2.2 0 4-1.8 4-4z"></path><path d="M15.3 0l-4.4 4.4c-0.8-0.2-1.8-0.4-2.9-0.4-6.7 0-8 5.1-8 5.1s1 1.8 3.3 3l-3.3 3.2v0.7h0.7l15.3-15.3v-0.7h-0.7zM4 11.3c-1.6-0.7-2.5-1.8-2.9-2.3 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 1.1 0.5 2.2 1.3 2.9l-1.3 1.3zM6.2 7.9l-1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.5 0.4-1.5 0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.7c-0.1 0.7 0.1 1.1 0.1 1.1z"></path></g>
<g id="vaadin:eye"><path d="M8 3.9c-6.7 0-8 5.1-8 5.1s2.2 4.1 7.9 4.1 8.1-4 8.1-4-1.3-5.2-8-5.2zM5.3 5.4c0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.6c0 0.7 0.2 1.1 0.2 1.1l-1.1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.4 0.4-1.4zM7.9 12.1c-4.1 0-6.2-2.3-6.8-3.2 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 2.2 1.8 4 4 4s4-1.8 4-4c0-0.5-0.1-0.9-0.2-1.3 2 0.9 2.8 2.5 3.1 3.2-0.7 0.9-2.8 3.2-7 3.2z"></path></g>
<g id="vaadin:eyedropper"><path d="M15 1c-1.8-1.8-3.7-0.7-4.6 0.1-0.4 0.4-0.7 0.9-0.7 1.5v0c0 1.1-1.1 1.8-2.1 1.5l-0.1-0.1-0.7 0.8 0.7 0.7-6 6-0.8 2.3-0.7 0.7 1.5 1.5 0.8-0.8 2.3-0.8 6-6 0.7 0.7 0.7-0.6-0.1-0.2c-0.3-1 0.4-2.1 1.5-2.1v0c0.6 0 1.1-0.2 1.4-0.6 0.9-0.9 2-2.8 0.2-4.6zM3.9 13.6l-2 0.7-0.2 0.1 0.1-0.2 0.7-2 5.8-5.8 1.5 1.5-5.9 5.7z"></path></g>
<g id="vaadin:facebook-square"><path d="M0 0v16h16v-16h-16zM12.9 8.4h-2.1v5.6h-2.1v-5.6h-1.5v-2h1.5c0 0 0-0.8 0-1.7 0-1.5 0.9-2.7 2.9-2.7 0.8 0 1.4 0.1 1.4 0.1v1.9c0 0-0.6 0-1.3 0s-0.8 0.3-0.8 0.9c0 0.1 0 0.1 0 0.1 0 0.2 0 0.5 0 1.4h2.1l-0.1 2z"></path></g>
<g id="vaadin:facebook"><path d="M7.2 16v-7.5h-2v-2.7h2c0 0 0-1.1 0-2.3 0-1.8 1.2-3.5 3.9-3.5 1.1 0 1.9 0.1 1.9 0.1l-0.1 2.5c0 0-0.8 0-1.7 0-1 0-1.1 0.4-1.1 1.2 0 0.6 0-1.3 0 2h2.9l-0.1 2.7h-2.8v7.5h-2.9z"></path></g>
<g id="vaadin:factory"><path d="M4.4 1.3c-0.6 0.3-0.8 1.1-0.4 1.5 0.5-0.9 1.3-0.6 2.5 0.4 0.8 0.7 1.9 0.1 1.9 0.1s0.2 1.2 1.7 1.4c1.7 0.2 2.3-0.8 2.3-0.8s0.4 1 1.9 0.4c1.1-0.4 0.7-1.1 0.7-1.1s1 0 1-0.7c0-0.9-1.1-0.8-1.1-0.8s0.2-1-0.9-1.1c-1-0.1-1.3 0.5-1.3 0.5s-0.3-1.1-1.8-1.1c-1.4 0-1.9 1.3-1.9 1.3s-0.4-0.6-1.6-0.6c-0.9 0-1.3 0.7-1.3 0.7s-1.1-0.5-1.7-0.1z"></path><path d="M12 12.1v-2.1l-4 2.1v-2.1h-2.4l-0.6-7h-2l-0.6 7h-2.4v6h16v-6l-4 2.1zM6 14h-4v-2h4v2z"></path></g>
<g id="vaadin:family"><path d="M9.5 7.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M14.27 4h-2.54c0 0 0 0 0 0-0.955 0-1.73 0.775-1.73 1.73v3.27c0 0.552 0.448 1 1 1v6h4v-6c0.552 0 1-0.448 1-1v-3.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M15 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M4.27 5h-2.54c-0.955 0-1.73 0.775-1.73 1.73s0.775 1.73 1.73 1.73c0.955 0 1.73-0.775 1.73-1.73s-0.775-1.73-1.73-1.73c-0.955 0-1.73 0.775-1.73 1.73v2.27c0 0.552 0.448 1 1 1l-1 3h1v3h4v-3h1l-1-3c0.552 0 1-0.448 1-1v-2.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M5 3c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M7 13v3h2v-3c0.552 0 1-0.448 1-1v-1.54c0-0.806-0.654-1.46-1.46-1.46 0 0 0 0 0 0h-1.080c-0.806 0-1.46 0.654-1.46 1.46 0 0 0 0 0 0v1.54c0 0.552 0.448 1 1 1z"></path></g>
<g id="vaadin:fast-backward"><path d="M16 15v-14l-7 7z"></path><path d="M9 15v-14l-7 7z"></path><path d="M0 1h2v14h-2v-14z"></path></g>
<g id="vaadin:fast-forward"><path d="M0 1v14l7-7z"></path><path d="M7 1v14l7-7z"></path><path d="M14 1h2v14h-2v-14z"></path></g>
<g id="vaadin:female"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8v-1.5l1.8 1.8c0.3 0.3 0.7 0.3 1 0s0.3-0.8 0-1l-2.6-2.6c-0.4-0.5-1-0.7-1.7-0.7h-1c-0.7 0-1.3 0.2-1.7 0.7l-2.6 2.6c-0.3 0.3-0.3 0.8 0 1 0.3 0.3 0.7 0.3 1 0l1.8-1.8v1.5l-4 5h4v3h4v-3h4l-4-5z"></path></g>
<g id="vaadin:file-add"><path d="M12 15h-10v-14h6v4h4v1h1v-2l-4-4h-8v16h12v-2h-1v1zM9 1l3 3h-3v-3z"></path><path d="M13 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:file-code"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6.2 13h-0.7l-2-2.5 2-2.5h0.7l-2 2.5z"></path><path d="M9.8 13h0.7l2-2.5-2-2.5h-0.7l2 2.5z"></path><path d="M6.7 14h0.6l2.1-7h-0.8z"></path></g>
<g id="vaadin:file-font"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M5 7v2h2v5h2v-5h2v-2z"></path></g>
<g id="vaadin:file-movie"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M10 10v-2h-6v5h6v-2l2 2v-5z"></path></g>
<g id="vaadin:file-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path></g>
<g id="vaadin:file-picture"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 11.5v2.5h8v-1.7c0 0 0.1-1.3-1.3-1.5-1.3-0.2-1.5 0.4-2.5 0.5-0.8 0-0.6-1.3-2.2-1.3-1.2 0-2 1.5-2 1.5z"></path><path d="M12 8.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:file-presentation"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M9 6h-2v1h-3v6h2v1h1v-1h2v1h1v-1h2v-6h-3v-1zM11 8v4h-6v-4h6z"></path><path d="M7 9v2l2-1z"></path></g>
<g id="vaadin:file-process"><path d="M12 0h-7v6h0.7l0.2 0.7 0.1 0.1v-5.8h5v4h4v9h-6l0.3 0.5-0.5 0.5h7.2v-11l-4-4zM12 4v-3l3 3h-3z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:file-refresh"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M4.7 7.7l-0.7-0.7v3h3l-1.2-1.2c0.4-0.8 1.3-1.3 2.2-1.3 1.4 0 2.5 1.1 2.5 2.5h1.5c0-2.2-1.8-4-4-4-1.3 0-2.5 0.7-3.3 1.7z"></path><path d="M9.8 11.8c-0.5 0.5-1.1 0.8-1.8 0.7-1 0-1.9-0.6-2.3-1.5h-1.6c0.4 1.7 2 3 3.8 3 1.1 0 2.1-0.5 2.8-1.2l1.3 1.2v-3h-3l0.8 0.8z"></path></g>
<g id="vaadin:file-remove"><path d="M12 15h-10v-14h6v4h4v2.59l1-1v-2.59l-4-4h-8v16h12v-2.59l-1-1v2.59zM9 1l3 3h-3v-3z"></path><path d="M15 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:file-search"><path d="M12 13.47v1.53h-10v-14h6v4h4v0.56c0.386 0.229 0.716 0.504 0.996 0.825l0.004-2.385-4-4h-8v16h12v-1.53zM9 1l3 3h-3v-3z"></path><path d="M14.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM10 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:file-sound"><path d="M11.4 10.5c0 1.2-0.4 2.2-1 3l0.4 0.5c0.7-0.9 1.2-2.1 1.2-3.5s-0.5-2.6-1.2-3.5l-0.4 0.5c0.6 0.8 1 1.9 1 3z"></path><path d="M9.9 8l-0.4 0.5c0.4 0.5 0.7 1.2 0.7 2s-0.3 1.5-0.7 2l0.4 0.5c0.5-0.6 0.8-1.5 0.8-2.5s-0.3-1.8-0.8-2.5z"></path><path d="M9.1 9l-0.4 0.5c0.2 0.3 0.3 0.6 0.3 1s-0.1 0.7-0.3 1l0.4 0.5c0.3-0.4 0.5-0.9 0.5-1.5s-0.2-1.1-0.5-1.5z"></path><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6 9h-2v3h2l2 2v-7z"></path></g>
<g id="vaadin:file-start"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6v6l6-3z"></path></g>
<g id="vaadin:file-table"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7v6h8v-6h-8zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM9 12h-2v-1h2v1zM9 10h-2v-1h2v1zM11 12h-1v-1h1v1zM11 10h-1v-1h1v1z"></path></g>
<g id="vaadin:file-text-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7h8v1h-8v-1z"></path><path d="M4 9h8v1h-8v-1z"></path><path d="M4 11h8v1h-8v-1z"></path></g>
<g id="vaadin:file-text"><path d="M10 0v4h4z"></path><path d="M9 0h-7v16h12v-11h-5v-5zM12 12h-8v-1h8v1zM12 10h-8v-1h8v1zM12 7v1h-8v-1h8z"></path></g>
<g id="vaadin:file-tree-small"><path d="M5 12v2h11v-5h-11v2h-2v-4h9v-5h-12v5h2v5z"></path></g>
<g id="vaadin:file-tree-sub"><path d="M8 11v1h-1v-2h5v-4h-8v1h-1v-2h6v-4h-9v4h2v3h2v2h2v3h2v2h8v-4z"></path></g>
<g id="vaadin:file-tree"><path d="M16 10v-4h-11v1h-2v-3h9v-4h-12v4h2v10h3v2h11v-4h-11v1h-2v-5h2v2z"></path></g>
<g id="vaadin:file-zip"><path d="M10 0h-8v16h12v-12l-4-4zM9 15h-4v-2.8l0.7-2.2h2.4l0.9 2.2v2.8zM13 15h-3v-3l-1-3h-2v-1h-2v1l-1 3v3h-1v-14h4v1h2v1h-2v1h2v1h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6h2v1h-2v-1z"></path><path d="M5 2h2v1h-2v-1z"></path><path d="M5 4h2v1h-2v-1z"></path><path d="M7 5h2v1h-2v-1z"></path><path d="M7 7h2v1h-2v-1z"></path><path d="M6 12h2v2h-2v-2z"></path></g>
<g id="vaadin:file"><path d="M9 5h5v11h-12v-16h7v5zM10 4v-4l4 4h-4z"></path></g>
<g id="vaadin:fill"><path d="M13 14.5c0.468-2.207 0.985-4.050 1.604-5.846 0.411 1.796 0.928 3.638 1.337 5.521 0.059 1.153-0.612 1.825-1.441 1.825s-1.5-0.672-1.5-1.5z"></path><path d="M8 1l-1.44 1.44-2-2c-0.276-0.262-0.649-0.423-1.060-0.423s-0.784 0.161-1.061 0.423c-0.27 0.271-0.438 0.645-0.438 1.059s0.168 0.789 0.439 1.060l2 2-4.44 4.44 7 7 8-8zM8 2.41l5.59 5.59h-11.18l2.75-2.75c0.071 0.042 0.156 0.067 0.247 0.067 0.271 0 0.49-0.219 0.49-0.49 0-0.091-0.025-0.176-0.068-0.249l0.721-0.718 1.54 1.53c0.091 0.091 0.216 0.147 0.355 0.147 0.277 0 0.502-0.225 0.502-0.502 0-0.139-0.056-0.264-0.147-0.355l-1.53-1.53zM3.15 1.85c-0.091-0.091-0.148-0.216-0.148-0.355s0.057-0.264 0.148-0.355c0.092-0.089 0.217-0.144 0.355-0.144s0.263 0.055 0.355 0.144l2 2-0.71 0.71z"></path></g>
<g id="vaadin:film"><path d="M0 0v16h1v-1h1v1h12v-1h1v1h1v-16h-16zM2 14h-1v-1h1v1zM2 12h-1v-1h1v1zM2 10h-1v-1h1v1zM2 8h-1v-1h1v1zM2 6h-1v-1h1v1zM2 4h-1v-1h1v1zM2 2h-1v-1h1v1zM13 15h-10v-6h10v6zM13 7h-10v-6h10v6zM15 14h-1v-1h1v1zM15 12h-1v-1h1v1zM15 10h-1v-1h1v1zM15 8h-1v-1h1v1zM15 6h-1v-1h1v1zM15 4h-1v-1h1v1zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:filter"><path d="M1 2h14v2l-6 5v7l-2-2v-5l-6-5v-2z"></path><path d="M1 0h14v1h-14v-1z"></path></g>
<g id="vaadin:fire"><path d="M4.9 15.8c0 0-3.9-0.4-3.9-5.7 0-4.1 3.1-6.5 3.1-6.5s1.3 1.4 2.3 1.9c1 0.6 1.4-5.5 1.4-5.5s7.2 3.9 7.2 9.8c0 6.1-4 5.9-4 5.9s1.8-2.4 1.8-5.2c0-3-3.9-6.7-3.9-6.7s-0.5 4.4-2.1 5c-1.6-0.9-2.5-2.3-2.5-2.3s-3.7 5.8 0.6 9.3z"></path><path d="M8.2 16.1c-2-0.1-3.7-1.4-3.7-3.2s0.7-2.6 0.7-2.6 0.5 1 1.1 1.5 1.8 0.8 2.4 0.1c0.6-0.6 0.8-2.3 0.8-2.3s1.4 1.1 1.2 3c-0.1 2-0.9 3.5-2.5 3.5z"></path></g>
<g id="vaadin:flag-checkered"><path d="M2 0c-1.1 0-2 0.9-2 2 0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2z"></path><path d="M12 2c-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8c0 0-1.6 1-4 1zM15 4.5c-0.2 0.2-0.8 0.4-2 0.6v-2.2c0.8-0.1 1.5-0.2 2-0.4v2zM5 7.9v-2.6c0.4-0.6 1.1-1.1 2-1.1v-2.1c0.2-0.1 0.4-0.1 0.6-0.1 1.2 0 1.6 0.2 2.1 0.4 0.1 0.1 0.2 0.2 0.3 0.2v2.2c0.5 0.2 1.1 0.4 2 0.4 0.4 0 0.7 0 1-0.1v2.6c-0.3 0-0.6 0.1-1 0.1-1.1 0-1.5-0.2-2-0.5v2.3c-0.7-0.3-1.5-0.6-3-0.6v-2.2c-0.9 0.2-1.5 0.6-2 1.1zM13 9.9v-2.2c1.1-0.2 1.7-0.6 2-0.8v1.8c-0.2 0.3-0.7 1-2 1.2z"></path><path d="M10 7.2v-2.4c0 0-1.2-0.6-3-0.6v2.6c1.7-0.4 3 0.4 3 0.4z"></path></g>
<g id="vaadin:flag-o"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M7.6 2c1.2 0 1.6 0.2 2.1 0.4 0.5 0.3 1.1 0.6 2.3 0.6s2.2-0.2 3-0.5v6.3c-0.2 0.3-0.9 1.2-3 1.2-0.9 0-1.3-0.2-1.9-0.4-0.7-0.3-1.5-0.6-3.1-0.6-0.8 0-1.5 0.2-2 0.5v-5.3c0.2-0.5 1-2.2 2.6-2.2zM16 1c0 0-1.6 1-4 1-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8z"></path></g>
<g id="vaadin:flag"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M4 4c0 0 1-3 3.6-3 2.7 0 2.3 1 4.4 1 2.4 0 4-1 4-1v8c0 0-0.7 2-4 2-2.2 0-2.3-1-5-1-2.3 0-3 2-3 2v-8z"></path></g>
<g id="vaadin:flash"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6z"></path></g>
<g id="vaadin:flask"><path d="M2 16h12l-4-8v-7h1v-1h-6v1h1v7l-4 8zM9 1v7.2l1.9 3.8h-5.8l1.9-3.8v-7.2h2z"></path></g>
<g id="vaadin:flight-landing"><path d="M13.64 7c-0.71-0.2-1.89-0.43-3.23-0.67l-3.82-4.24c-0.209-0.23-0.462-0.416-0.746-0.544l-1.194-0.546c-0.090 0-0.15 0-0.1 0.11s1.45 2.89 2.29 4.59c-1.84-0.29-3.5-0.53-4.23-0.63-0.258-0.047-0.474-0.198-0.608-0.406l-0.722-1.074c-0.115-0.168-0.28-0.294-0.474-0.358l-0.806-0.232 0.61 3.26c0.067 0.34 0.318 0.609 0.644 0.699 1.326 0.381 4.816 1.341 7.526 1.921 6 1.28 6.8 1.28 7.12 0.91s-0.67-2.38-2.26-2.79z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flight-takeoff"><path d="M12.57 2.26c-0.65 0.29-1.66 0.85-2.8 1.5l-5.46-0.76c-0.093-0.014-0.2-0.022-0.309-0.022-0.211 0-0.414 0.030-0.607 0.086l-1.185 0.336c-0.1 0-0.1 0.1 0 0.14l4.56 2c-1.54 0.92-2.91 1.76-3.51 2.14-0.13 0.082-0.288 0.13-0.458 0.13-0.094 0-0.184-0.015-0.268-0.042l-1.194-0.378c-0.086-0.031-0.186-0.049-0.29-0.049s-0.204 0.018-0.296 0.051l-0.754 0.308 2.52 2.1c0.152 0.127 0.349 0.205 0.565 0.205 0.129 0 0.251-0.028 0.361-0.077 1.204-0.538 4.374-1.998 6.734-3.228 5.24-2.78 5.82-3.26 5.82-3.7 0-0.69-2-1.4-3.43-0.74z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flip-h"><path d="M0 15l6-5-6-4.9z"></path><path d="M9 10.1l6 4.9v-10l-6 5.1zM14 12.9l-3.4-2.8 3.4-3v5.8z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M7 7h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M7.5 1v0c1.3 0 2.6 0.7 3.6 1.9l-1.1 1.1h3v-3l-1.2 1.2c-1.2-1.4-2.7-2.2-4.3-2.2 0 0 0 0 0 0-1.9 0-3.6 1-4.9 2.9l0.8 0.6c1.1-1.6 2.5-2.5 4.1-2.5z"></path></g>
<g id="vaadin:flip-v"><path d="M1 1l5 6 4.94-6h-9.94z"></path><path d="M5.94 10l-4.94 6h10zM3.12 15l2.83-3.44 3 3.44h-5.83z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 8.47v0c-0.059 1.485-0.782 2.789-1.879 3.632l-1.121-1.102v3h3l-1.18-1.18c1.293-1.031 2.128-2.588 2.18-4.342l0-0.008c-0.092-2.083-1.223-3.883-2.884-4.905l-0.596 0.805c1.423 0.857 2.383 2.357 2.479 4.087z"></path></g>
<g id="vaadin:folder-add"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14v-1h-13v-9h0.62l1-2h2.57l1.19 2h6.62v1h1z"></path><path d="M14 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:folder-o"><path d="M7 4l-1-2h-4l-1 2h-1v11h16v-11h-9zM15 14h-14v-9h0.6l1-2h2.6l1.2 2h8.6v9z"></path></g>
<g id="vaadin:folder-open-o"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14l2-9h-2zM14.9 7l-1.6 7-11.9-0.1 2.3-6.9h11.2zM1 5h0.6l1-2h2.6l1.2 2h6.6v1h-10l-2 5.9v-6.9z"></path></g>
<g id="vaadin:folder-open"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v9.5l3-7.5z"></path><path d="M3.7 7l-3.2 8h12.8l2.5-8z"></path></g>
<g id="vaadin:folder-remove"><path d="M13 12.41v1.59h-12v-9h0.62l1-2h2.57l1.19 2h6.62v2.59l1-1v-2.59h-7l-1-2h-4l-1 2h-1v11h14v-1.59l-1-1z"></path><path d="M16 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:folder-search"><path d="M13 13.47v0.53h-12v-9h0.62l1-2h2.57l1.19 2h6.62v0.91c0.385 0.179 0.716 0.407 1.001 0.681l-0.001-2.591h-7l-1-2h-4l-1 2h-1v11h14v-0.53z"></path><path d="M15.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM11 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:folder"><path d="M16 15h-16v-11h1l1-2h4l1 2h9z"></path></g>
<g id="vaadin:font"><path d="M12 16h3l-6-16h-2l-6 16h3l1.9-5h4.2l1.9 5zM6.7 9l1.3-3.6 1.3 3.6h-2.6z"></path></g>
<g id="vaadin:form"><path d="M15 2v2h-9v-2h9zM16 1h-11v4h11v-4z"></path><path d="M0 1h4v4h-4v-4z"></path><path d="M15 7v2h-9v-2h9zM16 6h-11v4h11v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M15 12v2h-9v-2h9zM16 11h-11v4h11v-4z"></path><path d="M0 11h4v4h-4v-4z"></path></g>
<g id="vaadin:forward"><path d="M0 1v14l8-7z"></path><path d="M8 1v14l8-7z"></path></g>
<g id="vaadin:frown-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11.3 12.3c-0.7-1.1-2-1.8-3.3-1.8s-2.6 0.7-3.3 1.8l-0.8-0.6c0.9-1.4 2.4-2.2 4.1-2.2s3.2 0.8 4.1 2.2l-0.8 0.6z"></path></g>
<g id="vaadin:funcion"><path d="M10 0c0 0-2.1 0-2.7 3l-0.4 2h-1.9l-0.5 1h2.2l-1.4 7c-0.4 2-1.9 2-1.9 2h-1l-0.4 1h3c0 0 2.1 0 2.7-3l1.4-7h2.4l0.5-1h-2.7l0.4-2c0.4-2 1.8-2 1.8-2h1l0.5-1h-3z"></path></g>
<g id="vaadin:function"><path d="M10 0c0 0-2.1 0-2.7 3l-0.4 2h-1.9l-0.5 1h2.2l-1.4 7c-0.4 2-1.9 2-1.9 2h-1l-0.4 1h3c0 0 2.1 0 2.7-3l1.4-7h2.4l0.5-1h-2.7l0.4-2c0.4-2 1.8-2 1.8-2h1l0.5-1h-3z"></path></g>
<g id="vaadin:funnel"><path d="M6 11h4v4h-4v-4z"></path><path d="M13.6 5l2.4-4h-16l2.4 4h11.2z"></path><path d="M3 6l2.4 4h5.2l2.4-4h-10z"></path></g>
<g id="vaadin:gamepad"><path d="M12.16 2c-1.215 0.603-2.641 0.968-4.149 1-1.53-0.032-2.956-0.397-4.229-1.026-2.611 0.026-3.781 1.196-3.781 3.866v6c0.017 1.197 0.991 2.16 2.19 2.16 0 0 0 0 0 0h0.23c0 0 0.001 0 0.002 0 0.963 0 1.78-0.621 2.074-1.485 0.305-0.915 1.145-2.515 2.085-2.515h2.84c0.94 0 1.78 1.6 2.080 2.5 0.298 0.879 1.116 1.5 2.078 1.5 0.001 0 0.001 0 0.002 0h0.23c1.21 0 2.19-0.98 2.19-2.19v-6c0-2.64-1.17-3.81-3.84-3.81zM5 7h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zM10.060 8.11c-0.585 0-1.060-0.475-1.060-1.060s0.475-1.060 1.060-1.060c0.585 0 1.060 0.475 1.060 1.060s-0.475 1.060-1.060 1.060zM13 8c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:gavel"><path d="M6.4 4.1v0c-0.4-0.4-0.4-0.9-0.1-1.2l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.5c-0.3 0.3-0.9 0.3-1.2 0z"></path><path d="M12 9.7v0c-0.4-0.4-0.4-0.9-0.1-1.3l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.6c-0.4 0.3-0.9 0.3-1.2 0z"></path><path d="M10 7.7l-1.7-1.7c-0.4-0.4-0.4-1 0-1.4l2.3-2.3c0.4-0.4 1-0.4 1.4 0l1.7 1.7c0.4 0.4 0.4 1 0 1.4l-2.3 2.3c-0.4 0.4-1 0.4-1.4 0z"></path><path d="M4 14.2c0.6-0.6 4-5.6 4.5-5.3 0.4 0.2 1-0.5 1-0.5l-1.9-1.9c0 0-0.7 0.6-0.5 1 0.3 0.5-4.7 3.9-5.3 4.5 0 0-2.8 2.2-1.4 3.6s3.6-1.4 3.6-1.4z"></path></g>
<g id="vaadin:gift"><path d="M10.1 5c2-0.3 3.9-1.1 2.2-3.6-0.7-1-1.4-1.4-2-1.4-1 0-1.7 1.1-2.3 2.2-0.6-1.1-1.3-2.2-2.3-2.2-0.6 0-1.3 0.4-2 1.4-1.8 2.5 0.2 3.3 2.2 3.6h-5.9v3h16v-3h-5.9zM10.3 1c0.1 0 0.5 0.1 1.2 1 0.5 0.7 0.6 1.1 0.5 1.3-0.2 0.3-1.3 0.7-3.3 0.8 0-0.2-0.1-0.4-0.2-0.6 0.6-1.4 1.3-2.5 1.8-2.5zM4 3.3c-0.1-0.2 0-0.6 0.5-1.3 0.7-0.9 1.1-1 1.2-1 0.5 0 1.2 1.1 1.8 2.5-0.1 0.2-0.2 0.4-0.2 0.6-2-0.1-3.1-0.5-3.3-0.8zM7 7v-2h2v2h-2z"></path><path d="M9 15h-2v-6h-6v7h14v-7h-6z"></path></g>
<g id="vaadin:glass"><path d="M11 15h-2v-8l6-7h-15l6 7v8h-2c-2 0-2 1-2 1h11c0 0 0-1-2-1zM12.9 1l-1.8 2h-7.2l-1.7-2h10.7zM7 15v-8h1v8h-1z"></path></g>
<g id="vaadin:glasses"><path d="M15.5 7h-0.5c-0.1 0-0.1 0-0.2 0-0.4-1.2-1.5-2-2.8-2s-2.4 0.9-2.8 2.1c-0.3-0.4-0.7-0.6-1.2-0.6s-0.9 0.2-1.2 0.6c-0.4-1.2-1.5-2.1-2.8-2.1s-2.4 0.9-2.8 2c-0.1 0-0.1 0-0.2 0h-0.5c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5h0.5c0 1.7 1.3 3 3 3 1.5 0 2.7-1.1 3-2.5 0 0 0 0 0 0 0.3 0 0.5-0.2 0.5-0.5s0.2-0.5 0.5-0.5 0.5 0.2 0.5 0.5c0 0.3 0.2 0.5 0.5 0.5 0 0 0 0 0 0 0.2 1.4 1.5 2.5 3 2.5 1.7 0 3-1.3 3-3h0.5c0.3 0 0.5-0.2 0.5-0.5s-0.2-0.5-0.5-0.5zM4 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zM12 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"></path></g>
<g id="vaadin:globe-wire"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM14.8 9.5c0 0.5-0.7 0.66-2 1 0.124-0.589 0.206-1.277 0.229-1.98l2.001-0.020c0 0.36-0.080 0.5-0.16 1v0zM1.2 9.5v0c-0.1-0.5-0.15-0.64-0.2-1h2c0.024 0.723 0.106 1.411 0.244 2.079-1.344-0.419-2.044-0.579-2.044-1.079zM1.2 6.5c0-0.5 0.7-0.66 2-1-0.115 0.594-0.187 1.284-0.2 1.989l-2 0.011c0-0.36 0.080-0.5 0.16-1v0zM8.5 5c1.13 0.013 2.226 0.107 3.298 0.277 0.047 0.643 0.165 1.41 0.201 2.199l-3.499 0.025v-2.5zM8.5 4v-2.94c1.17 0.27 2.2 1.47 2.84 3.15-0.836-0.116-1.819-0.192-2.817-0.21zM7.5 1.060v2.94c-1.017 0.015-2.001 0.087-2.968 0.214 0.768-1.684 1.798-2.884 2.968-3.154zM7.5 5v2.5h-3.5c0.031-0.806 0.142-1.571 0.326-2.307 0.932-0.080 2.035-0.177 3.158-0.193zM4 8.5h3.5v2.5c-1.13-0.013-2.226-0.107-3.298-0.277-0.047-0.643-0.165-1.41-0.201-2.199zM7.5 12v2.94c-1.17-0.27-2.2-1.47-2.84-3.15 0.836 0.116 1.819 0.192 2.817 0.21zM8.5 14.94v-2.94c1.017-0.015 2.001-0.087 2.968-0.214-0.768 1.684-1.798 2.884-2.968 3.154zM8.5 11v-2.5h3.5c-0.031 0.806-0.142 1.571-0.326 2.307-0.932 0.080-2.035 0.177-3.158 0.193zM15 7.5h-2c-0.024-0.723-0.106-1.411-0.244-2.079 1.354 0.399 2.014 0.559 2.014 1.079v0c0.13 0.5 0.18 0.64 0.23 1zM14.3 4.91c-0.506-0.204-1.106-0.38-1.726-0.5-0.361-1.019-0.809-1.898-1.389-2.672 1.355 0.726 2.413 1.811 3.067 3.131zM4.84 1.76c-0.568 0.752-1.019 1.631-1.305 2.581-0.699 0.189-1.299 0.365-1.874 0.593 0.751-1.39 1.823-2.475 3.139-3.156zM1.73 11.090c0.506 0.204 1.106 0.38 1.726 0.5 0.361 1.019 0.809 1.898 1.389 2.672-1.367-0.722-2.436-1.807-3.097-3.131zM11.17 14.24c0.564-0.753 1.012-1.631 1.295-2.581 0.699-0.189 1.299-0.365 1.874-0.593-0.751 1.39-1.823 2.475-3.139 3.156z"></path></g>
<g id="vaadin:globe"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13.2 5.3c0.4 0 0.7 0.3 1.1 0.3-0.3 0.4-1.6 0.4-2-0.1 0.3-0.1 0.5-0.2 0.9-0.2zM1 8c0-0.4 0-0.8 0.1-1.3 0.1 0 0.2 0.1 0.3 0.1 0 0 0.1 0.1 0.1 0.2 0 0.3 0.3 0.5 0.5 0.5 0.8 0.1 1.1 0.8 1.8 1 0.2 0.1 0.1 0.3 0 0.5-0.6 0.8-0.1 1.4 0.4 1.9 0.5 0.4 0.5 0.8 0.6 1.4 0 0.7 0.1 1.5 0.4 2.2-2.5-1.2-4.2-3.6-4.2-6.5zM8 15c-0.7 0-1.5-0.1-2.1-0.3-0.1-0.2-0.1-0.4 0-0.6 0.4-0.8 0.8-1.5 1.3-2.2 0.2-0.2 0.4-0.4 0.4-0.7 0-0.2 0.1-0.5 0.2-0.7 0.3-0.5 0.2-0.8-0.2-0.9-0.8-0.2-1.2-0.9-1.8-1.2s-1.2-0.5-1.7-0.2c-0.2 0.1-0.5 0.2-0.5-0.1 0-0.4-0.5-0.7-0.4-1.1-0.1 0-0.2 0-0.3 0.1s-0.2 0.2-0.4 0.1c-0.2-0.2-0.1-0.4-0.1-0.6 0.1-0.2 0.2-0.3 0.4-0.4 0.4-0.1 0.8-0.1 1 0.4 0.3-0.9 0.9-1.4 1.5-1.8 0 0 0.8-0.7 0.9-0.7s0.2 0.2 0.4 0.3c0.2 0 0.3 0 0.3-0.2 0.1-0.5-0.2-1.1-0.6-1.2 0-0.1 0.1-0.1 0.1-0.1 0.3-0.1 0.7-0.3 0.6-0.6 0-0.4-0.4-0.6-0.8-0.6-0.2 0-0.4 0-0.6 0.1-0.4 0.2-0.9 0.4-1.5 0.4 1.1-0.8 2.5-1.2 3.9-1.2 0.3 0 0.5 0 0.8 0-0.6 0.1-1.2 0.3-1.6 0.5 0.6 0.1 0.7 0.4 0.5 0.9-0.1 0.2 0 0.4 0.2 0.5s0.4 0.1 0.5-0.1c0.2-0.3 0.6-0.4 0.9-0.5 0.4-0.1 0.7-0.3 1-0.7 0-0.1 0.1-0.1 0.2-0.2 0.6 0.2 1.2 0.6 1.8 1-0.1 0-0.1 0.1-0.2 0.1-0.2 0.2-0.5 0.3-0.2 0.7 0.1 0.2 0 0.3-0.1 0.4-0.2 0.1-0.3 0-0.4-0.1s-0.1-0.3-0.4-0.3c-0.1 0.2-0.4 0.3-0.4 0.6 0.5 0 0.4 0.4 0.5 0.7-0.6 0.1-0.8 0.4-0.5 0.9 0.1 0.2-0.1 0.3-0.2 0.4-0.4 0.6-0.8 1-0.8 1.7s0.5 1.4 1.3 1.3c0.9-0.1 0.9-0.1 1.2 0.7 0 0.1 0.1 0.2 0.1 0.3 0.1 0.2 0.2 0.4 0.1 0.6-0.3 0.8 0.1 1.4 0.4 2 0.1 0.2 0.2 0.3 0.3 0.4-1.3 1.4-3 2.2-5 2.2z"></path></g>
<g id="vaadin:golf"><path d="M7 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M9.8 1.8c-0.2-0.5-1.7-0.1-2 0.5-0.2 0.3-0.2 1.2-1.2 1.9-0.8 0.5-1.6 0.5-1.6 0.5-0.3 0.6-0.1 1.1 0.2 1.6 0.5 0.9 0.6 1.8 0.7 2.8 0.1 1.3-0.5 2.4-2.3 3.2-0.8 0.3-1.3 0.9-1 1.9 0 0 2-0.3 3.1-1.2 1.5-1.2 1.8-2.3 1.8-2.3s0.1 0.7 0 1.9c-0.1 1-0.2 1.5-0.4 2.2s0.3 1.2 0.9 1.2 1-0.4 1-1l0.3-1.9c0.3-2.1 0-4.3-0.8-6.3 0-0.1-0.1-0.1-0.1-0.2-0.6-1.6 0.2-2.6 0.6-3 0.3-0.4 1.2-1.2 0.8-1.8z"></path><path d="M12 0v10h1v-6l3-2z"></path><path d="M16 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M1 8.4l3.7-3.7-0.7-0.3-3.8 3.6c0 0-0.4 0.7 0.1 1.7s1.6 0.3 1.6 0.3c0.4-0.2 0.2-0.4 0-0.6s-0.9-1-0.9-1z"></path></g>
<g id="vaadin:google-plus-square"><path d="M5 3.4c-0.8 0-1.3 0.8-1.2 1.8 0.1 1.1 0.9 1.9 1.7 2 0.8 0 1.3-0.8 1.2-1.9-0.1-1-0.9-1.9-1.7-1.9z"></path><path d="M5.4 9.3c-1.2 0-2.3 0.7-2.3 1.6s0.9 1.7 2.1 1.7c1.7 0 2.3-0.7 2.3-1.6 0-0.1 0-0.2 0-0.3-0.1-0.5-0.6-0.8-1.3-1.2-0.2-0.2-0.5-0.2-0.8-0.2z"></path><path d="M0 0v16h16v-16h-16zM7.9 5.3c0 0.7-0.4 1.2-0.9 1.6s-0.6 0.6-0.6 0.9c0 0.3 0.5 0.8 0.8 1 0.8 0.6 1.1 1.1 1.1 2 0 1.1-1.1 2.3-3.1 2.3-1.7 0-3.2-0.7-3.2-1.8 0-1.2 1.3-2.3 3.1-2.3 0.2 0 0.4 0 0.5 0-0.2-0.3-0.4-0.6-0.4-0.9 0-0.2 0.1-0.4 0.2-0.6-0.1 0-0.2 0-0.3 0-1.4 0-2.4-1-2.4-2.3 0-1.2 1.3-2.3 2.7-2.3 0.8 0 3.1 0 3.1 0l-0.7 0.6h-1c0.7 0.2 1.1 1 1.1 1.8zM14 5.5h-2.1v2h-0.5v-2h-2v-0.5h2v-2h0.5v2h2.1v0.5z"></path></g>
<g id="vaadin:google-plus"><path d="M16 3.9h-2.8v-2.6h-0.6v2.6h-2.7v0.8h2.7v2.6h0.6v-2.6h2.8z"></path><path d="M6.9 9c-0.4-0.2-1.1-0.9-1.1-1.3s0.1-0.7 0.8-1.2c0.7-0.5 1.2-1.2 1.2-2.1 0-1.1-0.5-2.1-1.3-2.4h1.3l0.9-0.7c0 0-3.1 0-4.2 0-1.9 0-3.6 1.4-3.6 3.1s1.3 3 3.2 3c0.1 0 0.3 0 0.4 0-0.2 0.2-0.2 0.4-0.2 0.7 0 0.5 0.3 0.8 0.6 1.2-0.2 0-0.5 0-0.7 0-2.3 0-4.1 1.5-4.1 3s2 2.5 4.3 2.5c2.6 0 4.1-1.5 4.1-3-0.1-1.3-0.5-2-1.6-2.8zM4.7 6.9c-1.1 0-2.1-1.2-2.3-2.6s0.5-2.5 1.6-2.5c1.1 0 2.1 1.2 2.3 2.6s-0.5 2.6-1.6 2.5zM4.3 14.1c-1.6 0-2.8-1-2.8-2.2s1.4-2.2 3-2.2c0.4 0 0.7 0.1 1 0.2 0.9 0.6 1.5 0.9 1.7 1.6 0 0.1 0.1 0.3 0.1 0.4 0 1.2-0.8 2.2-3 2.2z"></path></g>
<g id="vaadin:grab"><path d="M12.6 4c-0.2 0-0.4 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.5-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.8 0-1.2 0.5-1.4 1-0.1 0-0.3-0.1-0.5-0.1-0.5 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.5v0.4c-0.6 0-1.1 0.2-1.4 0.5-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.5 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM10.5 3.8c0.4 0 0.5 0.4 0.5 0.6v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0 0 0-0.4 0.4-0.3 0.6 0.2 0.7 1.1 0.7 1.3 0 0 0 0 0 0v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.7-1.1-1.1-1.1-2.1 0-0.2 0-0.3 0-0.6 0-1 0-1.8 0.3-2.1 0.1-0.2 0.4-0.3 0.7-0.3v0.8l-0.3 1.2c0 0.1 0 0.1 0.1 0.1 0.1 0.1 0.2 0 0.2 0l1-1.2c0 0 0-0.1 0-0.1v-2c0-0.1 0-0.6 0.2-0.8 0.1-0.1 0.2-0.2 0.4-0.2 0.3 0 0.4 0.2 0.4 0.4v0.4c0 0.2 0.2 0.5 0.5 0.5s0.5-0.3 0.5-0.5v-1.3c0-0.1 0-0.5 0.5-0.5 0.3 0 0.5 0.2 0.5 0.5v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.5c0-0.3 0.2-0.5 0.5-0.5z"></path></g>
<g id="vaadin:grid-bevel"><path d="M14 2v-1h-13v13h1v1h13v-13h-1zM5 13h-3v-3h3v3zM5 9h-3v-3h3v3zM5 5h-3v-3h3v3zM9 13h-3v-3h3v3zM9 9h-3v-3h3v3zM9 5h-3v-3h3v3zM13 13h-3v-3h3v3zM13 9h-3v-3h3v3zM13 5h-3v-3h3v3z"></path></g>
<g id="vaadin:grid-big-o"><path d="M0 7h7v-7h-7v7zM1 1h5v5h-5v-5z"></path><path d="M9 0v7h7v-7h-7zM15 6h-5v-5h5v5z"></path><path d="M0 16h7v-7h-7v7zM1 10h5v5h-5v-5z"></path><path d="M9 16h7v-7h-7v7zM10 10h5v5h-5v-5z"></path></g>
<g id="vaadin:grid-big"><path d="M0 0h7v7h-7v-7z"></path><path d="M9 0h7v7h-7v-7z"></path><path d="M0 9h7v7h-7v-7z"></path><path d="M9 9h7v7h-7v-7z"></path></g>
<g id="vaadin:grid-h"><path d="M0 0v16h16v-16h-16zM5 15h-4v-14h4v14zM10 15h-4v-14h4v14zM15 15h-4v-14h4v14z"></path></g>
<g id="vaadin:grid-small-o"><path d="M0 4h4v-4h-4v4zM1 1h2v2h-2v-2z"></path><path d="M0 10h4v-4h-4v4zM1 7h2v2h-2v-2z"></path><path d="M0 16h4v-4h-4v4zM1 13h2v2h-2v-2z"></path><path d="M6 4h4v-4h-4v4zM7 1h2v2h-2v-2z"></path><path d="M6 10h4v-4h-4v4zM7 7h2v2h-2v-2z"></path><path d="M6 16h4v-4h-4v4zM7 13h2v2h-2v-2z"></path><path d="M12 0v4h4v-4h-4zM15 3h-2v-2h2v2z"></path><path d="M12 10h4v-4h-4v4zM13 7h2v2h-2v-2z"></path><path d="M12 16h4v-4h-4v4zM13 13h2v2h-2v-2z"></path></g>
<g id="vaadin:grid-small"><path d="M0 0h4v4h-4v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M0 12h4v4h-4v-4z"></path><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M12 0h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path><path d="M12 12h4v4h-4v-4z"></path></g>
<g id="vaadin:grid-v"><path d="M16 0h-16v16h16v-16zM1 5v-4h14v4h-14zM1 10v-4h14v4h-14zM1 15v-4h14v4h-14z"></path></g>
<g id="vaadin:grid"><path d="M0 0v16h16v-16h-16zM5 15h-4v-4h4v4zM5 10h-4v-4h4v4zM5 5h-4v-4h4v4zM10 15h-4v-4h4v4zM10 10h-4v-4h4v4zM10 5h-4v-4h4v4zM15 15h-4v-4h4v4zM15 10h-4v-4h4v4zM15 5h-4v-4h4v4z"></path></g>
<g id="vaadin:group"><path d="M5 16v-5.3c-0.6-0.3-1-1-1-1.7v-4c0-0.7 0.4-1.3 1-1.7 0-0.1 0-0.2 0-0.3 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 1.1 0.9 2 2 2h-2c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v5h4z"></path><path d="M15 5h-2c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.1 0 0.2 0 0.3 0.6 0.4 1 1 1 1.7v4c0 0.7-0.4 1.4-1 1.7v5.3h4v-5c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 4h-4c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v6h4v-6c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path></g>
<g id="vaadin:hammer"><path d="M6 2l7 7 3-3-4.48-4.48s-2.97 1.030-4.52-0.52z"></path><path d="M8.8 5.79l-8.53 8.52c-0.165 0.178-0.267 0.417-0.267 0.68s0.101 0.502 0.267 0.681c0.181 0.183 0.433 0.297 0.711 0.297 0.253 0 0.484-0.094 0.66-0.248l8.569-8.519z"></path></g>
<g id="vaadin:hand"><path d="M13.5 2.4c-0.4-0.4-1-0.5-1.5-0.3 0-0.3-0.1-0.6-0.4-0.9-0.2-0.2-0.6-0.4-1.1-0.4-0.3 0-0.5 0.1-0.7 0.1 0-0.2-0.1-0.3-0.2-0.5-0.5-0.6-1.5-0.6-2 0-0.2 0.2-0.4 0.4-0.4 0.6-0.2 0-0.4-0.1-0.6-0.1-0.5 0-0.8 0.2-1.1 0.5-0.5 0.5-0.5 1.3-0.5 1.3v3.8c-0.3-0.3-0.8-0.8-1.5-0.8-0.2 0-0.5 0.1-0.7 0.2-0.4 0.2-0.6 0.5-0.7 0.9-0.3 1 0.6 2.4 0.6 2.5 0.1 0.1 1.2 2.7 2.2 3.8 1 1.2 2.1 1.9 4.9 1.9 2.9 0 4.2-1.6 4.2-5.1v-5.5c0-0.1 0.1-1.3-0.5-2zM8 2c0-0.3-0.1-1 0.5-1 0.5 0 0.5 0.5 0.5 1v4c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-3.8c0 0 0-0.4 0.5-0.4 0.6 0 0.5 0.9 0.5 0.9v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-2.4c0-0.1 0-0.6 0.5-0.6s0.5 1 0.5 1v5.9c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.5-4.1-1.6-0.9-1-2.1-3.6-2.1-3.7-0.3-0.3-0.7-1.2-0.6-1.6 0-0.1 0.1-0.2 0.2-0.3 0.1 0 0.2-0.1 0.2-0.1 0.4 0 0.8 0.5 0.9 0.7l0.6 0.9c0.1 0.2 0.4 0.3 0.6 0.2 0.4 0 0.5-0.2 0.5-0.4v-5.2c0-0.4 0-1 0.5-1 0.4 0 0.5 0.3 0.5 0.8v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5z"></path></g>
<g id="vaadin:handle-corner"><path d="M6.7 16l9.3-9.3v-1.4l-10.7 10.7z"></path><path d="M9.7 16l6.3-6.3v-1.4l-7.7 7.7z"></path><path d="M12.7 16l3.3-3.3v-1.4l-4.7 4.7z"></path><path d="M15.7 16l0.3-0.3v-1.4l-1.7 1.7z"></path></g>
<g id="vaadin:hands-up"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M6 16h1.5v-5h1v5h1.5v-9c-0-0.016-0.001-0.034-0.001-0.052 0-0.521 0.194-0.997 0.513-1.36l3.278-3.318c0.216-0.129 0.358-0.362 0.358-0.628 0-0.403-0.327-0.73-0.73-0.73-0.266 0-0.499 0.142-0.626 0.355l-2.362 2.383c-0.212 0.216-0.508 0.35-0.835 0.35-0.002 0-0.004 0-0.006-0h-3.18c-0.002 0-0.004 0-0.005 0-0.327 0-0.622-0.134-0.834-0.35l-2.32-2.39c-0.129-0.216-0.362-0.358-0.628-0.358-0.403 0-0.73 0.327-0.73 0.73 0 0.266 0.142 0.499 0.355 0.626l3.243 3.332c0.317 0.361 0.511 0.836 0.511 1.358 0 0.018-0 0.037-0.001 0.055l0 8.997z"></path></g>
<g id="vaadin:handshake"><path d="M13 3c-0.538 0.515-1.185 0.92-1.902 1.178-0.748 0.132-2.818-0.828-3.838 0.152-0.17 0.17-0.38 0.34-0.6 0.51-0.48-0.21-1.22-0.53-1.76-0.84s-1.9-1-1.9-1l-3 3.5s0.74 1 1.2 1.66c0.3 0.44 0.67 1.11 0.91 1.56l-0.34 0.4c-0.058 0.115-0.093 0.25-0.093 0.393 0 0.235 0.092 0.449 0.243 0.607 0.138 0.103 0.311 0.165 0.5 0.165s0.362-0.062 0.502-0.167c-0.094 0.109-0.149 0.249-0.149 0.402 0 0.193 0.088 0.365 0.226 0.479 0.144 0.085 0.317 0.135 0.501 0.135s0.357-0.050 0.505-0.137c-0.112 0.139-0.177 0.313-0.177 0.503s0.065 0.364 0.174 0.502c0.099 0.035 0.214 0.056 0.334 0.056 0.207 0 0.399-0.063 0.558-0.17-0.043 0.095-0.065 0.203-0.065 0.317 0 0.234 0.096 0.445 0.252 0.595 0.13 0.059 0.283 0.093 0.443 0.093 0.226 0 0.437-0.068 0.611-0.185l0.516-0.467c0.472 0.47 1.123 0.761 1.842 0.761 0.020 0 0.041-0 0.061-0.001 0.494-0.042 0.908-0.356 1.094-0.791 0.146 0.056 0.312 0.094 0.488 0.094 0.236 0 0.455-0.068 0.64-0.185 0.585-0.387 0.445-0.687 0.445-0.687 0.125 0.055 0.27 0.087 0.423 0.087 0.321 0 0.61-0.142 0.806-0.366 0.176-0.181 0.283-0.427 0.283-0.697 0-0.19-0.053-0.367-0.145-0.518 0.008 0.005 0.015 0.005 0.021 0.005 0.421 0 0.787-0.232 0.978-0.574 0.068-0.171 0.105-0.363 0.105-0.563 0-0.342-0.11-0.659-0.296-0.917l0.003 0.005c0.82-0.16 0.79-0.57 1.19-1.17 0.384-0.494 0.852-0.902 1.387-1.208zM12.95 10.060c-0.44 0.44-0.78 0.25-1.53-0.32s-2.24-1.64-2.24-1.64c0.061 0.305 0.202 0.57 0.401 0.781 0.319 0.359 1.269 1.179 1.719 1.599 0.28 0.26 1 0.78 0.58 1.18s-0.75 0-1.44-0.56-2.23-1.94-2.23-1.94c-0.001 0.018-0.002 0.038-0.002 0.059 0 0.258 0.104 0.491 0.272 0.661 0.17 0.2 1.12 1.12 1.52 1.54s0.75 0.67 0.41 1-1.030-0.19-1.41-0.58c-0.59-0.57-1.76-1.63-1.76-1.63-0.001 0.016-0.001 0.034-0.001 0.053 0 0.284 0.098 0.544 0.263 0.75 0.288 0.378 0.848 0.868 1.188 1.248s0.54 0.7 0 1-1.34-0.44-1.69-0.8c0-0.001 0-0.001 0-0.002 0-0.103-0.038-0.197-0.1-0.269-0.159-0.147-0.374-0.238-0.609-0.238-0.104 0-0.204 0.018-0.297 0.050 0.128-0.114 0.204-0.274 0.204-0.452s-0.076-0.338-0.198-0.45c-0.126-0.095-0.284-0.152-0.455-0.152s-0.33 0.057-0.457 0.153c0.117-0.113 0.189-0.268 0.189-0.441 0-0.213-0.109-0.4-0.274-0.509-0.153-0.097-0.336-0.153-0.532-0.153-0.244 0-0.468 0.088-0.642 0.233 0.095-0.114 0.151-0.26 0.151-0.42 0-0.195-0.085-0.37-0.219-0.491-0.178-0.165-0.417-0.266-0.679-0.266-0.185 0-0.358 0.050-0.507 0.138l-0.665-1.123c-0.46-0.73-1-1.49-1-1.49l2.28-2.77s0.81 0.5 1.48 0.88c0.33 0.19 0.9 0.44 1.33 0.64-0.68 0.51-1.25 1-1.080 1.34 0.297 0.214 0.668 0.343 1.069 0.343 0.376 0 0.726-0.113 1.018-0.307 0.373-0.251 0.84-0.403 1.343-0.403 0.347 0 0.677 0.072 0.976 0.203 0.554 0.374 1.574 1.294 2.504 1.874v0c1.17 0.85 1.4 1.4 1.12 1.68z"></path></g>
<g id="vaadin:harddrive-o"><path d="M2 12h1v1h-1v-1z"></path><path d="M4 12h3v1h-3v-1z"></path><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM3.7 2h8.6l2.7 8h-13.9l2.6-8zM1 14v-3h14v3h-14z"></path></g>
<g id="vaadin:harddrive"><path d="M13 1h-10l-2.7 8h15.4z"></path><path d="M0 10v5h16v-5h-16zM3 13h-1v-1h1v1zM7 13h-3v-1h3v1z"></path></g>
<g id="vaadin:hash"><path d="M15 6v-2h-2.6l0.6-2.8-2-0.4-0.7 3.2h-3l0.7-2.8-2-0.4-0.7 3.2h-3.3v2h2.9l-0.9 4h-3v2h2.6l-0.6 2.8 2 0.4 0.7-3.2h3l-0.7 2.8 2 0.4 0.7-3.2h3.3v-2h-2.9l0.9-4h3zM9 10h-3l1-4h3l-1 4z"></path></g>
<g id="vaadin:header"><path d="M11 0v7h-6v-7h-3v16h3v-7h6v7h3v-16z"></path></g>
<g id="vaadin:headphones"><path d="M14 8.3v-2.3c0-3.3-2.7-6-6-6s-6 2.7-6 6v2.3c-1.2 0.5-2 1.7-2 3.1v1.2c0 1.8 1.3 3.2 3 3.4h2v-8h-1v-2c0-2.2 1.8-4 4-4s4 1.8 4 4v2h-1v8h2c1.7-0.2 3-1.7 3-3.4v-1.2c0-1.4-0.8-2.6-2-3.1zM4 15h-1v-6h1v6zM13 15h-1v-6h1v6z"></path></g>
<g id="vaadin:headset"><path d="M14.82 8c-0.309-0.851-0.969-1.511-1.799-1.813l-0.021-1.687c0-2.5-2.47-4.5-5.5-4.5s-5.5 2-5.5 4.5v1.68c-1.173 0.423-1.996 1.525-2 2.82v1c0 1.657 1.343 3 3 3h1v-7h-1v-1.5c0-1.93 2-3.5 4.5-3.5s4.5 1.57 4.5 3.5v1.5h-1v7h1c1.657 0 3-1.343 3-3v1.73c0 1.806-1.464 3.27-3.27 3.27h-1.73c0-0.552-0.448-1-1-1h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.73c2.358 0 4.27-1.912 4.27-4.27v-3.73h-1.18z"></path></g>
<g id="vaadin:health-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M9 5h5v1h-5v-1z"></path><path d="M9 7h5v1h-5v-1z"></path><path d="M9 9h2v1h-2v-1z"></path><path d="M6.5 5c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path></g>
<g id="vaadin:heart-o"><path d="M11.7 2c-0.9 0-2.7 0.5-3.7 2.1-1-1.6-2.8-2.1-3.8-2.1-2.3 0-4.2 1.9-4.2 4.2 0 4 7.4 8.5 7.7 8.7l0.3 0.2 0.3-0.2c0.3-0.2 7.7-4.8 7.7-8.7 0-2.3-1.9-4.2-4.3-4.2zM8 13.9c-2.2-1.4-7-5-7-7.7 0-1.8 1.5-3.2 3.2-3.2 0.1 0 2.5 0.1 3.3 2.4l0.5 1.4 0.5-1.4c0.8-2.3 3.2-2.4 3.3-2.4 1.7 0 3.2 1.4 3.2 3.2 0 2.7-4.8 6.3-7 7.7z"></path></g>
<g id="vaadin:heart"><path d="M12 2c0 0-3 0-4 3-1-3-4-3-4-3-2.2 0-4 1.8-4 4 0 4.1 8 9 8 9s8-5 8-9c0-2.2-1.8-4-4-4z"></path></g>
<g id="vaadin:home-o"><path d="M16 6.6l-8-5.2-2 1.3v-1.7h-2v3l-4 2.6 1.9 2.7 0.1-0.1v5.8h5v-4h2v4h5v-5.8l0.1 0.1 1.9-2.7zM1.4 6.9l6.6-4.3 6.6 4.3-0.7 1-5.9-3.9-5.9 3.9-0.7-1zM13 14h-3v-4h-4v4h-3v-5.4l5-3.3 5 3.3v5.4z"></path></g>
<g id="vaadin:home"><path d="M8 1.4l-2 1.3v-1.7h-2v3l-4 2.6 0.6 0.8 7.4-4.8 7.4 4.8 0.6-0.8z"></path><path d="M8 4l-6 4v7h5v-3h2v3h5v-7z"></path></g>
<g id="vaadin:hospital"><path d="M15 4v-4h-7v4h-8v12h6v-3h4v3h6v-12h-1zM4 11h-2v-2h2v2zM4 8h-2v-2h2v2zM7 11h-2v-2h2v2zM7 8h-2v-2h2v2zM10 3v-1h1v-1h1v1h1v1h-1v1h-1v-1h-1zM11 11h-2v-2h2v2zM11 8h-2v-2h2v2zM14 11h-2v-2h2v2zM14 8h-2v-2h2v2z"></path></g>
<g id="vaadin:hourglass-empty"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-end"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1s-1.62-3.5-3-3.5-3 3.5-3 3.5h-1v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-start"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.573-0.385 0.984-0.939 1.17-1.589l-5.995-0.020c0.191 0.67 0.603 1.225 1.15 1.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.23-0.199 0.426-0.395 0.609-0.602l-4.874-0.007c0.19 0.214 0.386 0.41 0.593 0.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1.77c-0.7-0.87-1.71-2-2.23-2s-1.53 1.13-2.23 2h-1.77v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:inbox"><path d="M10 6v-6h-4v6h-2l4 5 4-5z"></path><path d="M13 1h-2v1h1.3l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h1.3v-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:indent"><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 4.5v6l4-3z"></path></g>
<g id="vaadin:info-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6h2v7h-2v-7z"></path><path d="M7 3h2v2h-2v-2z"></path></g>
<g id="vaadin:info-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-7h2v7zM9 5h-2v-2h2v2z"></path></g>
<g id="vaadin:info"><path d="M6 5h4v11h-4v-11z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:input"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:insert"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 1.4l-1.4-1.4-6.8 6.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:institution"><path d="M8 0l-8 3v2h16v-2z"></path><path d="M0 14h16v2h-16v-2z"></path><path d="M16 7v-1h-16v1h1v5h-1v1h16v-1h-1v-5h1zM4 12h-1v-5h1v5zM7 12h-1v-5h1v5zM10 12h-1v-5h1v5zM13 12h-1v-5h1v5z"></path></g>
<g id="vaadin:invoice"><path d="M4.4 10.2c-0.6 0.1-1.4-0.3-1.7-0.4l-0.5 0.9c0 0 0.9 0.4 1.7 0.5v0.8h1v-0.9c0.9-0.3 1.4-1.1 1.5-1.8 0-0.8-0.6-1.4-1.9-1.9-0.4-0.2-1.1-0.5-1.1-0.9 0-0.5 0.4-0.8 1-0.8 0.7 0 1.4 0.3 1.4 0.3l0.4-0.9c0 0-0.5-0.2-1.2-0.4v-0.7h-1v0.7c-0.9 0.2-1.5 0.8-1.6 1.7 0 1.2 1.3 1.7 1.8 1.9 0.6 0.2 1.3 0.6 1.3 0.9 0 0.4-0.4 0.9-1.1 1z"></path><path d="M0 2v12h16v-12h-16zM15 13h-14v-10h14v10z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path></g>
<g id="vaadin:italic"><path d="M8 0h3l-3 16h-3z"></path></g>
<g id="vaadin:key-o"><path d="M13 0l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.3 0-0.6-0.1-0.9l1.1-1.1v-2h2v-2h2l1-1v-4h-3zM12 6h-1.7l1.7-1.4v1.4zM15 3.6l-0.4 0.4h-1.9l2.3-2v1.6zM7.3 7.6l0.7 0.4 2-1.7v2.3l-0.8 0.8-0.3 0.4 0.1 0.5c0 0.2 0.1 0.5 0.1 0.7 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c0.3 0 0.5 0 0.8 0.1l0.5 0.1 0.4-0.3 6.6-5.9h1.6l-7.7 6.6z"></path><path d="M6 11.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:key"><path d="M8.1 7c-0.2-0.1-0.4-0.2-0.6-0.3l7.5-6.7h-2l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.6-0.1-1.2-0.3-1.7l1.3-1.3v-2h2v-2h2l1-1v-3l-7.9 7zM4 13.2c-0.7 0-1.2-0.6-1.2-1.2s0.6-1.2 1.2-1.2 1.2 0.6 1.2 1.2-0.5 1.2-1.2 1.2z"></path></g>
<g id="vaadin:keyboard-o"><path d="M15 5v7h-14v-7h14zM16 4h-16v9h16v-9z"></path><path d="M4 10h8v1h-8v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M11 8h1v1h-1v-1z"></path><path d="M9 8h1v1h-1v-1z"></path><path d="M7 8h1v1h-1v-1z"></path><path d="M5 8h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M12 6v1h1v2h1v-3z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path></g>
<g id="vaadin:keyboard"><path d="M0 4v9h16v-9h-16zM10 6h1v1h-1v-1zM8 6h1v1h-1v-1zM10 8v1h-1v-1h1zM6 6h1v1h-1v-1zM8 8v1h-1v-1h1zM4 6h1v1h-1v-1zM6 8v1h-1v-1h1zM2 6h1v1h-1v-1zM3 11h-1v-1h1v1zM3 8h1v1h-1v-1zM12 11h-8v-1h8v1zM12 9h-1v-1h1v1zM14 11h-1v-1h1v1zM14 9h-1v-2h-1v-1h2v3z"></path></g>
<g id="vaadin:laptop"><path d="M14 11v-9h-12v9h-2v2h16v-2h-2zM10 12h-4v-1h4v1zM13 10h-10v-7h10v7z"></path></g>
<g id="vaadin:layout"><path d="M0 0v16h16v-16h-16zM1 3h4v12h-4v-12zM15 15h-9v-12h9v12z"></path></g>
<g id="vaadin:level-down-bold"><path d="M9 16l4-7h-3v-9h-7l2 3h2v6h-3z"></path></g>
<g id="vaadin:level-down"><path d="M5 1h6v11h2l-3 3-3-3h2v-9h-6z"></path></g>
<g id="vaadin:level-left-bold"><path d="M0 7l7-4v3h9v7l-3-2v-2h-6v3z"></path></g>
<g id="vaadin:level-left"><path d="M15 12v-6h-11v-2l-3 3 3 3v-2h9v6z"></path></g>
<g id="vaadin:level-right-bold"><path d="M16 7l-7-4v3h-9v7l3-2v-2h6v3z"></path></g>
<g id="vaadin:level-right"><path d="M1 12v-6h11v-2l3 3-3 3v-2h-9v6z"></path></g>
<g id="vaadin:level-up-bold"><path d="M9 0l4 7h-3v9h-7l2-3h2v-6h-3z"></path></g>
<g id="vaadin:level-up"><path d="M11 15h-6v-11h-2l3-3 3 3h-2v9h6z"></path></g>
<g id="vaadin:lifebuoy"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM4 8c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.2-1.8 4-4 4s-4-1.8-4-4zM12.6 9.8c0.3-0.5 0.4-1.2 0.4-1.8s-0.1-1.3-0.4-1.8l1.5-1.5c0.6 1 0.9 2.1 0.9 3.3s-0.3 2.3-0.8 3.3l-1.6-1.5zM11.3 1.8l-1.5 1.6c-0.5-0.3-1.2-0.4-1.8-0.4s-1.3 0.1-1.8 0.4l-1.5-1.6c1-0.5 2.1-0.8 3.3-0.8s2.3 0.3 3.3 0.8zM1.8 4.7l1.5 1.5c-0.2 0.5-0.3 1.2-0.3 1.8s0.1 1.3 0.4 1.8l-1.5 1.5c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3 0.8-3.3zM4.7 14.2l1.5-1.5c0.5 0.2 1.2 0.3 1.8 0.3s1.3-0.1 1.8-0.4l1.5 1.5c-1 0.6-2.1 0.9-3.3 0.9s-2.3-0.3-3.3-0.8z"></path></g>
<g id="vaadin:lightbulb"><path d="M8 0c-2.761 0-5 2.239-5 5 0.013 1.672 0.878 3.138 2.182 3.989l0.818 2.011c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.41c0.342 0.55 0.915 0.929 1.581 0.999 0.684-0.071 1.258-0.449 1.594-0.99l0.415-0.009c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5l0.8-2c1.322-0.862 2.187-2.328 2.2-3.998 0-2.763-2.239-5.002-5-5.002zM10.25 8.21l-0.25 0.17-0.11 0.29-0.89 2.14c-0.042 0.111-0.147 0.189-0.27 0.19h-1.51c-0.103-0.020-0.186-0.093-0.219-0.188l-0.871-2.142-0.13-0.29-0.25-0.18c-1.045-0.7-1.729-1.868-1.75-3.197-0-2.212 1.791-4.003 4-4.003s4 1.791 4 4c-0.017 1.336-0.702 2.509-1.736 3.201z"></path><path d="M10.29 3c-0.574-0.612-1.387-0.995-2.289-1l-0.001 1c0.585 0.002 1.115 0.238 1.5 0.62 0.278 0.386 0.459 0.858 0.499 1.37l1.001 0.009c-0.045-0.756-0.305-1.443-0.718-2.011z"></path></g>
<g id="vaadin:line-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M16 0.070l-5.68 4.97-5.47-1.7-4.85 3.76v1.9l5.15-4 5.53 1.72 5.32-4.66v-1.99z"></path></g>
<g id="vaadin:line-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M9 8l-3-3-4 4v2l4-4 3 3 7-7v-2z"></path></g>
<g id="vaadin:line-h"><path d="M0 7h16v1h-16v-1z"></path></g>
<g id="vaadin:line-v"><path d="M8 0h1v16h-1v-16z"></path></g>
<g id="vaadin:lines-list"><path d="M0 1h3v2h-3v-2z"></path><path d="M0 5h3v2h-3v-2z"></path><path d="M0 9h3v2h-3v-2z"></path><path d="M0 13h3v2h-3v-2z"></path><path d="M4 1h12v2h-12v-2z"></path><path d="M4 5h12v2h-12v-2z"></path><path d="M4 9h12v2h-12v-2z"></path><path d="M4 13h12v2h-12v-2z"></path></g>
<g id="vaadin:lines"><path d="M0 1h16v2h-16v-2z"></path><path d="M0 5h16v2h-16v-2z"></path><path d="M0 9h16v2h-16v-2z"></path><path d="M0 13h16v2h-16v-2z"></path></g>
<g id="vaadin:link"><path d="M14.9 1.1c-1.4-1.4-3.7-1.4-5.1 0l-4.4 4.3c-1.4 1.5-1.4 3.7 0 5.2 0.1 0.1 0.3 0.2 0.4 0.3l1.5-1.5c-0.1-0.1-0.3-0.2-0.4-0.3-0.6-0.6-0.6-1.6 0-2.2l4.4-4.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-1.3 1.3c0.4 0.8 0.5 1.7 0.4 2.5l2.3-2.3c1.5-1.4 1.5-3.7 0-5.1z"></path><path d="M10.2 5.1l-1.5 1.5c0 0 0.3 0.2 0.4 0.3 0.6 0.6 0.6 1.6 0 2.2l-4.4 4.4c-0.6 0.6-1.6 0.6-2.2 0s-0.6-1.6 0-2.2l1.3-1.3c-0.4-0.8-0.1-1.3-0.4-2.5l-2.3 2.3c-1.4 1.4-1.4 3.7 0 5.1s3.7 1.4 5.1 0l4.4-4.4c1.4-1.4 1.4-3.7 0-5.1-0.2-0.1-0.4-0.3-0.4-0.3z"></path></g>
<g id="vaadin:list-ol"><path d="M4 0h12v4h-12v-4z"></path><path d="M4 6h12v4h-12v-4z"></path><path d="M4 12h12v4h-12v-4z"></path><path d="M1 0l-0.9 0.5 0.2 0.7 0.7-0.3v3.1h1v-4z"></path><path d="M2.2 13.9c0.3-0.2 0.5-0.5 0.5-0.8 0-0.5-0.4-1-1.3-1-0.5 0-1 0.1-1.2 0.3h-0.1l0.2 0.8 0.1-0.1c0.1-0.1 0.4-0.2 0.7-0.2s0.4 0.1 0.4 0.3c0 0.4-0.5 0.4-0.6 0.4h-0.4v0.7h0.4c0.3 0 0.6 0.1 0.6 0.4 0 0.2-0.2 0.4-0.6 0.4s-0.7-0.2-0.8-0.2l-0.1-0.1v0.9h0.1c0.2 0.2 0.6 0.3 1.1 0.3 1 0 1.6-0.5 1.6-1.2 0-0.4-0.2-0.8-0.6-0.9z"></path><path d="M0.1 6.4l0.3 1c0 0 0.7-0.6 1.2-0.3 1.1 0.8-1.6 2.4-1.6 2.4v0.5h3v-1h-1.2c0.6-0.5 1.2-1.2 1-1.9-0.5-1.9-2.7-0.7-2.7-0.7z"></path></g>
<g id="vaadin:list-select"><path d="M1 0h12v2h-12v-2z"></path><path d="M1 8h13v2h-13v-2z"></path><path d="M1 11h11v2h-11v-2z"></path><path d="M1 14h14v2h-14v-2z"></path><path d="M0 3v4h16v-4h-16zM11 6h-10v-2h10v2z"></path></g>
<g id="vaadin:list-ul"><path d="M0 1h3v3h-3v-3z"></path><path d="M0 6h3v3h-3v-3z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:list"><path d="M0 0h4v3h-4v-3z"></path><path d="M0 4h4v3h-4v-3z"></path><path d="M0 12h4v3h-4v-3z"></path><path d="M0 8h4v3h-4v-3z"></path><path d="M5 0h11v3h-11v-3z"></path><path d="M5 4h11v3h-11v-3z"></path><path d="M5 12h11v3h-11v-3z"></path><path d="M5 8h11v3h-11v-3z"></path></g>
<g id="vaadin:location-arrow-circle-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M2 9l10-5-5 10v-5z"></path></g>
<g id="vaadin:location-arrow-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 14v-5h-5l10-5-5 10z"></path></g>
<g id="vaadin:location-arrow"><path d="M0 9l16-9-9 16v-7z"></path></g>
<g id="vaadin:lock"><path d="M12 8v-3.1c0-2.2-1.6-3.9-3.8-3.9h-0.3c-2.1 0-3.9 1.7-3.9 3.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-1zM9 14h-1v-2c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1v3zM10 8h-4v-3.1c0-1.1 0.9-1.9 1.9-1.9h0.3c1 0 1.8 0.8 1.8 1.9v3.1z"></path></g>
<g id="vaadin:magic"><path d="M0 5h3v1h-3v-1z"></path><path d="M5 0h1v3h-1v-3z"></path><path d="M6 11h-1v-2.5l1 1z"></path><path d="M11 6h-1.5l-1-1h2.5z"></path><path d="M3.131 7.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M10.131 0.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M0.836 0.199l3.465 3.465-0.707 0.707-3.465-3.465 0.707-0.707z"></path><path d="M6.1 4.1l-2.1 2 9.8 9.9 2.2-2.1-9.9-9.8zM6.1 5.5l2.4 2.5-0.6 0.6-2.5-2.5 0.7-0.6z"></path></g>
<g id="vaadin:magnet"><path d="M11 0h5v4h-5v-4z"></path><path d="M11 5v3c0 1.6-1.4 3-3 3s-3-1.4-3-3v-3h-5v3c0 4.4 3.6 8 8 8s8-3.6 8-8v-3h-5z"></path><path d="M0 0h5v4h-5v-4z"></path></g>
<g id="vaadin:mailbox"><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM11 10v2h-6v-2h-3.9l2.7-8h8.6l2.7 8h-4.1z"></path></g>
<g id="vaadin:male"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 7.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v9.47h1.5v-5h1v5h1.5v-9.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:map-marker"><path d="M8 0c-2.8 0-5 2.2-5 5s4 11 5 11c1 0 5-8.2 5-11s-2.2-5-5-5zM8 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"></path></g>
<g id="vaadin:margin-bottom"><path d="M0 0v14h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-13h-16zM15 12h-14v-11h14v11z"></path><path d="M0 15h1v1h-1v-1z"></path><path d="M1 14h1v1h-1v-1z"></path><path d="M2 15h1v1h-1v-1z"></path><path d="M3 14h1v1h-1v-1z"></path><path d="M4 15h1v1h-1v-1z"></path><path d="M5 14h1v1h-1v-1z"></path><path d="M6 15h1v1h-1v-1z"></path><path d="M7 14h1v1h-1v-1z"></path><path d="M8 15h1v1h-1v-1z"></path><path d="M9 14h1v1h-1v-1z"></path><path d="M10 15h1v1h-1v-1z"></path><path d="M11 14h1v1h-1v-1z"></path><path d="M12 15h1v1h-1v-1z"></path><path d="M13 14h1v1h-1v-1z"></path><path d="M14 15h1v1h-1v-1z"></path><path d="M15 14h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-left"><path d="M2 0v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h13v-16h-14zM15 15h-11v-14h11v14z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-right"><path d="M14 2v-1h-1v-1h-13v16h14v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1zM12 15h-11v-14h11v14z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-top"><path d="M15 2v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v13h16v-14h-1zM15 15h-14v-11h14v11z"></path><path d="M15 0h1v1h-1v-1z"></path><path d="M14 1h1v1h-1v-1z"></path><path d="M13 0h1v1h-1v-1z"></path><path d="M12 1h1v1h-1v-1z"></path><path d="M11 0h1v1h-1v-1z"></path><path d="M10 1h1v1h-1v-1z"></path><path d="M9 0h1v1h-1v-1z"></path><path d="M8 1h1v1h-1v-1z"></path><path d="M7 0h1v1h-1v-1z"></path><path d="M6 1h1v1h-1v-1z"></path><path d="M5 0h1v1h-1v-1z"></path><path d="M4 1h1v1h-1v-1z"></path><path d="M3 0h1v1h-1v-1z"></path><path d="M2 1h1v1h-1v-1z"></path><path d="M1 0h1v1h-1v-1z"></path><path d="M0 1h1v1h-1v-1z"></path></g>
<g id="vaadin:margin"><path d="M0 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M13 2h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1zM12 12h-8v-8h8v8z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path></g>
<g id="vaadin:medal"><path d="M10 12.2c-0.3 0-0.5-0.1-0.8-0.2l-1.2-0.5-1.2 0.5c-0.2 0.1-0.5 0.2-0.8 0.2-0.2 0-0.3 0-0.5-0.1l-0.5 3.9 3-2 3 2-0.6-3.9c-0.1 0.1-0.3 0.1-0.4 0.1z"></path><path d="M12.9 5.9c-0.1-0.2-0.1-0.5 0-0.7l0.6-1.2c0.2-0.4 0-0.9-0.5-1.1l-1.3-0.5c-0.2-0.1-0.4-0.3-0.5-0.5l-0.5-1.3c-0.1-0.4-0.4-0.6-0.7-0.6-0.1 0-0.3 0-0.4 0.1l-1.3 0.6c-0.1 0-0.2 0-0.3 0s-0.2 0-0.3-0.1l-1.3-0.5c-0.1-0.1-0.3-0.1-0.4-0.1-0.3 0-0.6 0.2-0.8 0.5l-0.5 1.4c0 0.2-0.2 0.4-0.4 0.5l-1.4 0.5c-0.4 0.1-0.6 0.6-0.4 1.1l0.6 1.3c0.1 0.2 0.1 0.5 0 0.7l-0.6 1.2c-0.2 0.4 0 0.9 0.5 1.1l1.3 0.5c0.2 0.1 0.4 0.3 0.5 0.5l0.5 1.3c0.1 0.4 0.4 0.6 0.7 0.6 0.1 0 0.2 0 0.3-0.1l1.3-0.6c0.1 0 0.2-0.1 0.3-0.1s0.2 0 0.3 0.1l1.3 0.6c0.1 0.1 0.2 0.1 0.3 0.1 0.3 0 0.6-0.2 0.8-0.5l0.5-1.3c0.1-0.2 0.3-0.4 0.5-0.5l1.3-0.5c0.4-0.2 0.7-0.7 0.5-1.1l-0.5-1.4zM8 9.6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4c0 2.2-1.8 4-4 4z"></path><path d="M11 5.6c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path></g>
<g id="vaadin:megafone"><path d="M15.5 5.4l-0.5-0.4v-4c0-0.6-0.4-1-1-1s-1 0.4-1 1v0.5c-2 0.9-5 2.5-8 2.5h-2.5c-1.4 0-2.5 1.2-2.5 2.5 0 0.9 0.5 1.7 1.2 2.1l1.1 5.9c0 0.3 0.3 0.5 0.7 0.5 0.1 0 0.1 0 0.2 0l3.6-0.7c0.4-0.1 0.6-0.4 0.5-0.7-0.3-0.6-0.8-1.5-1.2-1.8-0.2-0.1-0.5-0.9-0.7-1.8h0.6v-0.9c2.7 0.3 6 1.6 7 2.4v0.5c0 0.6 0.4 1 1 1s1-0.4 1-1v-4l0.4-0.3c0.4-0.3 0.6-0.7 0.6-1.1v-0.2c0-0.4-0.2-0.7-0.5-1zM2 5h3v1h-3v-1zM5.6 12.6c0.1 0 0.3 0.3 0.5 0.7l-2.8 0.7-1-5h1.9c0.2 1.3 0.6 3.2 1.4 3.6zM13 10.3c-1.6-0.8-4.4-2-7-2.3v-3c2.6-0.3 5.4-1.4 7-2.3v7.6z"></path></g>
<g id="vaadin:megaphone"><path d="M15.5 5.4l-0.5-0.4v-4c0-0.6-0.4-1-1-1s-1 0.4-1 1v0.5c-2 0.9-5 2.5-8 2.5h-2.5c-1.4 0-2.5 1.2-2.5 2.5 0 0.9 0.5 1.7 1.2 2.1l1.1 5.9c0 0.3 0.3 0.5 0.7 0.5 0.1 0 0.1 0 0.2 0l3.6-0.7c0.4-0.1 0.6-0.4 0.5-0.7-0.3-0.6-0.8-1.5-1.2-1.8-0.2-0.1-0.5-0.9-0.7-1.8h0.6v-0.9c2.7 0.3 6 1.6 7 2.4v0.5c0 0.6 0.4 1 1 1s1-0.4 1-1v-4l0.4-0.3c0.4-0.3 0.6-0.7 0.6-1.1v-0.2c0-0.4-0.2-0.7-0.5-1zM2 5h3v1h-3v-1zM5.6 12.6c0.1 0 0.3 0.3 0.5 0.7l-2.8 0.7-1-5h1.9c0.2 1.3 0.6 3.2 1.4 3.6zM13 10.3c-1.6-0.8-4.4-2-7-2.3v-3c2.6-0.3 5.4-1.4 7-2.3v7.6z"></path></g>
<g id="vaadin:meh-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M4 10h8v1h-8v-1z"></path></g>
<g id="vaadin:menu"><path d="M0 1h16v3h-16v-3z"></path><path d="M0 6h16v3h-16v-3z"></path><path d="M0 11h16v3h-16v-3z"></path></g>
<g id="vaadin:microphone"><path d="M8 10v0c-1.7 0-3-1.3-3-3v-4c0-1.6 1.3-3 3-3v0c1.6 0 3 1.3 3 3v4c0 1.6-1.4 3-3 3z"></path><path d="M12 5v2.5c0 1.9-1.8 3.5-3.8 3.5h-0.4c-2 0-3.8-1.6-3.8-3.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 2.2 1.8 4.1 4 4.4v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.6-0.4-1-1-1z"></path></g>
<g id="vaadin:minus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M3 7h10v2h-10v-2z"></path></g>
<g id="vaadin:minus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-10v-2h10v2z"></path></g>
<g id="vaadin:minus-square-o"><path d="M4 7h8v2h-8v-2z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:minus"><path d="M2 7h12v2h-12v-2z"></path></g>
<g id="vaadin:mobile-browser"><path d="M16 0h-13v5h-3v11h7v-3h9v-13zM6 1h9v1h-9v-1zM4 1h1v1h-1v-1zM4 15h-1v-1h1v1zM6 13h-5v-7h5v7zM15 12h-8v-7h-3v-2h11v9z"></path></g>
<g id="vaadin:mobile-retro"><path d="M11 0h-1v2h-6v14h7v-16zM6 14h-1v-1h1v1zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM8 14h-1v-1h1v1zM8 12h-1v-1h1v1zM8 10h-1v-1h1v1zM10 14h-1v-1h1v1zM10 12h-1v-1h1v1zM10 10h-1v-1h1v1zM10 8h-5v-4h5v4z"></path></g>
<g id="vaadin:mobile"><path d="M4 1v14h8v-14h-8zM9 14h-2v-1h2v1zM11 12h-6v-9h6v9z"></path></g>
<g id="vaadin:modal-list"><path d="M3 6h2v1h-2v-1z"></path><path d="M6 6h7v1h-7v-1z"></path><path d="M3 8h2v1h-2v-1z"></path><path d="M6 8h7v1h-7v-1z"></path><path d="M3 10h2v1h-2v-1z"></path><path d="M6 10h7v1h-7v-1z"></path><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:modal"><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:money-deposit"><path d="M8 16l-2-3h1v-2h2v2h1l-2 3z"></path><path d="M15 1v8h-14v-8h14zM16 0h-16v10h16v-10z"></path><path d="M8 2c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 5c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money-exchange"><path d="M16 14l-3 2v-1h-4.75l2-2h2.75v-1l3 2z"></path><path d="M0 2l3-2v1h4.75l-2 2h-2.75v1l-3-2z"></path><path d="M9.74 0l-9.74 9.74 6.26 6.26 9.74-9.74zM1.39 9.74l8.35-8.35 4.87 4.87-8.35 8.35z"></path><path d="M4.17 9.74l-0.7 0.7 2.090 2.090 0.7-0.7 0.74 0.69 2.74-2.78c-0.445 0.445-1.060 0.721-1.74 0.721-1.359 0-2.461-1.102-2.461-2.461 0-0.68 0.275-1.295 0.721-1.74l-2.78 2.74z"></path><path d="M12.52 5.57l-2.090-2.090-0.7 0.7-0.73-0.7-2.74 2.78c0.445-0.445 1.060-0.721 1.74-0.721 1.359 0 2.461 1.102 2.461 2.461 0 0.68-0.275 1.295-0.721 1.74l2.78-2.74-0.7-0.7z"></path></g>
<g id="vaadin:money-withdraw"><path d="M8 0l2 3h-1v2h-2v-2h-1l2-3z"></path><path d="M15 7v8h-14v-8h14zM16 6h-16v10h16v-10z"></path><path d="M8 8c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 11c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money"><path d="M15 4v8h-14v-8h14zM16 3h-16v10h16v-10z"></path><path d="M8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 8c0-1.7 1.3-3 3-3h-5v1h-1v4h1v1h5c-1.7 0-3-1.3-3-3z"></path></g>
<g id="vaadin:moon-o"><path d="M13.2 11.9c-4.5 0-8.1-3.6-8.1-8.1 0-1.4 0.3-2.7 0.9-3.8-3.4 0.9-6 4.1-6 7.9 0 4.5 3.6 8.1 8.1 8.1 3.1 0 5.8-1.8 7.2-4.4-0.6 0.2-1.3 0.3-2.1 0.3zM8.1 15c-3.9 0-7.1-3.2-7.1-7.1 0-2.5 1.3-4.7 3.3-6-0.2 0.6-0.2 1.2-0.2 1.9 0 5 4.1 9.1 9.1 9.2-1.4 1.2-3.2 2-5.1 2z"></path></g>
<g id="vaadin:moon"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 15c-3.9 0-7-3.1-7-7 0-2.4 1.2-4.6 3.2-5.9-0.1 0.6-0.2 1.3-0.2 1.9 0 4.9 4 8.9 8.9 9-1.3 1.3-3 2-4.9 2z"></path></g>
<g id="vaadin:morning"><path d="M14 10l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 10c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:movie"><path d="M12 7v-3h-12v9h12v-3l4 2v-7l-4 2zM9 11h-7v-5h7v5z"></path><path d="M5 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:music"><path d="M4 3v9.4c-0.4-0.2-0.9-0.4-1.5-0.4-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-7.3l7-2.3v5.1c-0.4-0.3-0.9-0.5-1.5-0.5-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-11l-9 3z"></path></g>
<g id="vaadin:mute"><path d="M15.2 0l-4.2 4.2v-1.2c0-1.7-1.3-3-3-3s-3 1.3-3 3v4c0 0.9 0.4 1.7 1 2.2l-0.8 0.8c-0.7-0.6-1.2-1.5-1.2-2.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 1.3 0.6 2.4 1.5 3.2l-4.5 4.6v0.7h0.7l15.3-15.4v-0.6h-0.8z"></path><path d="M12.5 5.1l-0.5 0.5v1.9c0 1.9-1.8 3.5-3.8 3.5h-0.4c-0.3 0-0.6-0.1-0.9-0.1l-0.9 0.7c0.3 0.1 0.6 0.2 1 0.3v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.4-0.2-0.7-0.5-0.9z"></path><path d="M11 7v-0.4l-3.3 3.4c0.1 0 0.2 0 0.3 0 1.7 0 3-1.4 3-3z"></path></g>
<g id="vaadin:native-button"><path d="M15 12h-14c-0.6 0-1-0.4-1-1v-6c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v6c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:newspaper"><path d="M2 4h11v4h-11v-4z"></path><path d="M2 2h11v1h-11v-1z"></path><path d="M8 13h3v1h-3v-1z"></path><path d="M8 11h5v1h-5v-1z"></path><path d="M8 9h5v1h-5v-1z"></path><path d="M2 13h5v1h-5v-1z"></path><path d="M2 11h5v1h-5v-1z"></path><path d="M2 9h5v1h-5v-1z"></path><path d="M15 2v-2h-15v14.5c0 0.828 0.672 1.5 1.5 1.5h13c0.828 0 1.5-0.672 1.5-1.5v-12.5h-1zM1.5 15c-0.276 0-0.5-0.224-0.5-0.5v-13.5h13v12.5c0 1.5 1 1.5 1 1.5h-13.5z"></path></g>
<g id="vaadin:notebook"><path d="M2 0v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v2h12v-15.88h-12zM3.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM12 6h-6v-3h6v3z"></path></g>
<g id="vaadin:nurse"><path d="M15.2 12c-0.658-1.414-2.067-2.376-3.701-2.376-0.077 0-0.154 0.002-0.23 0.006l-3.269 3.9-3.28-3.9c-0.049-0.002-0.106-0.003-0.163-0.003-1.648 0-3.072 0.958-3.746 2.348-0.422 0.9-0.707 1.917-0.808 2.988l1.997 0.037v1h12v-1h2c-0.104-1.107-0.388-2.124-0.824-3.057z"></path><path d="M6.57 8.73c-0.038 0.374-0.322 0.671-0.685 0.729l2.115 2.541 2.12-2.52c-0.368-0.059-0.652-0.356-0.69-0.727-0-0.613 0.8-0.413 1.43-1.453 0-0.030 2.88-7.3-2.86-7.3s-2.86 7.27-2.86 7.27c0.63 1.050 1.44 0.85 1.43 1.46z"></path></g>
<g id="vaadin:office"><path d="M14 15v-11h-3v-3h-9v14h-2v1h7v-3h2v3h7v-1h-2zM6 11h-2v-2h2v2zM6 8h-2v-2h2v2zM6 5h-2v-2h2v2zM9 11h-2v-2h2v2zM9 8h-2v-2h2v2zM9 5h-2v-2h2v2zM13 11h-2v-2h2v2zM13 8h-2v-2h2v2z"></path></g>
<g id="vaadin:open-book"><path d="M15 4.7v-0.7c-1.159-1.163-2.734-1.91-4.484-1.999-0.112-0.012-0.222-0.018-0.334-0.018-0.874 0-1.657 0.394-2.179 1.013-0.556-0.617-1.357-1.007-2.249-1.007-0.090 0-0.178 0.004-0.266 0.012-1.754 0.089-3.33 0.836-4.488 1.999l-0 0.7-1 0.3v10l6.7-1.4 0.3 0.4h2l0.3-0.4 6.7 1.4v-10zM5.48 11.31c-1.275 0.037-2.467 0.358-3.526 0.902l0.046-7.792c0.885-0.835 2.066-1.365 3.369-1.42 0.806 0.054 1.534 0.303 2.159 0.701l-0.019 7.869c-0.555-0.166-1.193-0.262-1.854-0.262-0.062 0-0.124 0.001-0.185 0.003zM14 12.19c-1.013-0.522-2.205-0.843-3.468-0.88-0.056-0.001-0.108-0.002-0.161-0.002-0.66 0-1.297 0.096-1.899 0.274l0.047-7.902c0.601-0.381 1.322-0.627 2.096-0.679 1.324 0.055 2.501 0.586 3.386 1.422l-0.003 7.768z"></path></g>
<g id="vaadin:option-a"><path d="M12.5 10h-1.5v-4h1.5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5c-1.381 0-2.5 1.119-2.5 2.5v1.5h-4v-1.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 1.381 1.119 2.5 2.5 2.5h1.5v4h-1.5c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c1.381 0 2.5-1.119 2.5-2.5v-1.5h4v1.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM11 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5h-1.5v-1.5zM5 12.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5h1.5v1.5zM5 5h-1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5v1.5zM10 10h-4v-4h4v4zM12.5 14c-0.828 0-1.5-0.672-1.5-1.5v-1.5h1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:option"><path d="M4 11c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h-1c-0.552 0-1 0.448-1 1z"></path><path d="M0 0v16h16v-16h-16zM11 9c1.105 0 2 0.895 2 2s-0.895 2-2 2c-1.105 0-2-0.895-2-2v-1h-2v1c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2h1v-2h-1c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2v1h2v-1c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2h-1v2h1z"></path><path d="M12 5c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h1c0.552 0 1-0.448 1-1z"></path><path d="M5 4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v-1c0-0.552-0.448-1-1-1z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 11c0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.552-0.448-1-1-1h-1v1z"></path></g>
<g id="vaadin:options"><path d="M5 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M3.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM3.5 6c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M3.5 8c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM3.5 14c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M8 2h8v3h-8v-3z"></path><path d="M8 10h8v3h-8v-3z"></path></g>
<g id="vaadin:orientation"><path d="M11 2.1c2 0 3 1.3 3 2.9h-1l1.5 2 1.5-2h-1c0-2.2-2-3.9-4-3.9v-1.1l-2 1.5 2 1.5v-0.9z"></path><path d="M9 9h6v6h-7v-15h-8v16h16v-8h-7v1zM7 8h-1v1h1v6h-6v-14h6v7z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path></g>
<g id="vaadin:out"><path d="M3.5 8c0.3 0 0.5 0.2 0.5 0.5v2c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-2c0-0.3 0.2-0.5 0.5-0.5v0zM3.5 7v0c-0.8 0-1.5 0.7-1.5 1.5v2c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-2c0-0.8-0.7-1.5-1.5-1.5v0z"></path><path d="M8 7v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-1v3.5c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-3.5h-1z"></path><path d="M13 7h-3v1h1v4h1v-4h1z"></path><path d="M15 6v-1h-2.4l-3.7-3c0.1-0.2 0.1-0.3 0.1-0.5 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.2 0 0.3 0.1 0.5l-3.7 3h-2.4v9h1v1h15v-9h-1zM6.7 2.8c0.3 0.1 0.5 0.2 0.8 0.2s0.5-0.1 0.8-0.2l2.7 2.2h-7l2.7-2.2zM14 13h-13v-7h13v7z"></path></g>
<g id="vaadin:outbox"><path d="M6 5v6h4v-6h2l-4-5-4 5z"></path><path d="M13 2h-2l0.9 1h0.4l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h0.4l0.9-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:package"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM8 1l2.1 0.5-5.9 1.9-2.3-0.8 6.1-1.6zM8 14.9l-7-3.5v-8.1l3 1v3.4l1 0.3v-3.3l3 1v9.2zM8.5 4.8l-2.7-0.9 6.2-1.9 2.4 0.6-5.9 2.2z"></path></g>
<g id="vaadin:padding-bottom"><path d="M16 16v-16h-16v16h16zM1 13h1v-1h-1v-11h14v12h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-left"><path d="M0 16h16v-16h-16v16zM3 1v1h1v-1h11v14h-12v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-right"><path d="M16 0h-16v16h16v-16zM13 15v-1h-1v1h-11v-14h12v1h1v-1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-top"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v11h-14v-12h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M13 4h1v1h-1v-1z"></path><path d="M12 7h1v1h-1v-1z"></path><path d="M13 6h1v1h-1v-1z"></path><path d="M12 9h1v1h-1v-1z"></path><path d="M13 8h1v1h-1v-1z"></path><path d="M12 11h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M3 4h1v1h-1v-1z"></path><path d="M2 5h1v1h-1v-1z"></path><path d="M3 6h1v1h-1v-1z"></path><path d="M2 7h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M2 9h1v1h-1v-1z"></path><path d="M3 10h1v1h-1v-1z"></path><path d="M2 11h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 11h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path></g>
<g id="vaadin:paint-roll"><path d="M16 6.9v-4.9h-2v-2h-13v1h-1v3h1v1h13v-2h1v3.1l-8 1v1.9h-1v0.9c0 0 0.5 0 0.5 0.9s-0.5 0.6-0.5 1.5v2.8c0 0 0 0.9 1.5 0.9s1.5-0.9 1.5-0.9v-2.8c0-0.9-0.5-0.7-0.5-1.5s0.5-0.9 0.5-0.9v-0.9h-1v-1.1l8-1z"></path></g>
<g id="vaadin:paintbrush"><path d="M5.6 11.6l-1.2-1.2c-0.8-0.2-2-0.1-2.7 1-0.8 1.1-0.3 2.8-1.7 4.6 0 0 3.5 0 4.8-1.3 1.2-1.2 1.2-2.2 1-3l-0.2-0.1z"></path><path d="M5.8 8.1c-0.2 0.3-0.5 0.7-0.7 1 0 0.2-0.1 0.3-0.2 0.4l1.5 1.5c0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.7-0.4 1-0.7 0.4 0 0.6-0.2 0.8-0.4l-2.2-2.2c-0.2 0.2-0.4 0.4-0.6 0.7z"></path><path d="M15.8 0.2c-0.3-0.3-0.7-0.3-1-0.1 0 0-3 2.5-5.9 5.1-0.4 0.4-0.7 0.7-1.1 1-0.2 0.2-0.4 0.4-0.6 0.5l2.1 2.1c0.2-0.2 0.4-0.4 0.5-0.7 0.3-0.4 0.6-0.7 0.9-1.1 2.5-3 5.1-5.9 5.1-5.9 0.3-0.2 0.3-0.6 0-0.9z"></path></g>
<g id="vaadin:palete"><path d="M8.25 0c-6.38 0-9.11 7.38-8.010 9.92 0.82 1.89 2.62 0.080 3.34 1 1.88 2.46-2.11 3.81 0.090 4.68 2.59 1.060 12.33 0.4 12.33-8.53 0-2.69-1.34-7.070-7.75-7.070zM4.47 9c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM6 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5c-0.011 0-0.021-0-0.032-0-0.814-0.017-1.468-0.682-1.468-1.5 0-0 0-0 0-0zM8.47 14c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 11c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 6c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0z"></path></g>
<g id="vaadin:palette"><path d="M8.25 0c-6.38 0-9.11 7.38-8.010 9.92 0.82 1.89 2.62 0.080 3.34 1 1.88 2.46-2.11 3.81 0.090 4.68 2.59 1.060 12.33 0.4 12.33-8.53 0-2.69-1.34-7.070-7.75-7.070zM4.47 9c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM6 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5c-0.011 0-0.021-0-0.032-0-0.814-0.017-1.468-0.682-1.468-1.5 0-0 0-0 0-0zM8.47 14c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 11c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 6c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0z"></path></g>
<g id="vaadin:panel"><path d="M0 0v16h16v-16h-16zM13 15h-12v-12h12v12zM15 15h-1v-1h1v1zM15 13h-1v-8h1v8zM15 4h-1v-1h1v1z"></path></g>
<g id="vaadin:paperclip"><path d="M2.7 15.3c-0.7 0-1.4-0.3-1.9-0.8-0.9-0.9-1.2-2.5 0-3.7l8.9-8.9c1.4-1.4 3.8-1.4 5.2 0s1.4 3.8 0 5.2l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c1-1 1-2.7 0-3.7s-2.7-1-3.7 0l-8.9 8.9c-0.8 0.8-0.6 1.7 0 2.2 0.6 0.6 1.5 0.8 2.2 0l8.9-8.9c0.2-0.2 0.2-0.5 0-0.7s-0.5-0.2-0.7 0l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-8.9 8.9c-0.6 0.4-1.3 0.7-1.9 0.7z"></path></g>
<g id="vaadin:paperplane-o"><path d="M16 0l-16 8 4.7 1.6 0.3 5.4 2.5-2.8 2.5 3.8 6-16zM7.5 10.4l4.3-5.9-6.2 4.3-3-1 11.6-5.8-4.5 11.8-2.2-3.4z"></path></g>
<g id="vaadin:paperplane"><path d="M0 8l4.9 1.4h0.1v-0.1l7.1-5.3-1.1 1.2-6.2 6.6 0.2 3.2 2.9-3.2 2.1 4.2 6-16z"></path></g>
<g id="vaadin:paragraph"><path d="M5.5 0c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h2.5v7h2v-14h1v14h2v-14h2v-2h-9.5z"></path></g>
<g id="vaadin:password"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M6 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:paste"><path d="M13 4h-3v-4h-10v14h6v2h10v-9l-3-3zM3 1h4v1h-4v-1zM15 15h-8v-10h5v3h3v7zM13 7v-2l2 2h-2z"></path></g>
<g id="vaadin:pause"><path d="M0 1h7v14h-7v-14z"></path><path d="M9 1h7v14h-7v-14z"></path></g>
<g id="vaadin:pencil"><path d="M1 11.9l-1 4.1 4.1-1 9.2-9.2-3.1-3.1-9.2 9.2zM1.5 15l-0.4-0.5 0.4-2 2 2-2 0.5zM10.9 4.4l-8.1 8-0.6-0.6 8.1-8 0.6 0.6z"></path><path d="M15.3 0.7c-1.1-1.1-2.6-0.5-2.6-0.5l-1.5 1.5 3.1 3.1 1.5-1.5c0-0.1 0.6-1.5-0.5-2.6zM13.4 1.6l-0.5-0.5c0.6-0.6 1.1-0.1 1.1-0.1l-0.6 0.6z"></path></g>
<g id="vaadin:phone-landline"><path d="M15.88 3.86l-0.61-1.31c-0.155-0.326-0.443-0.568-0.792-0.658-1.938-0.528-4.161-0.851-6.453-0.891-2.342 0.041-4.565 0.363-6.687 0.934-0.165 0.048-0.453 0.29-0.605 0.609l-0.613 1.317c-0.075 0.152-0.119 0.331-0.12 0.52v0.87c-0.001 0.012-0.001 0.026-0.001 0.041 0 0.392 0.318 0.71 0.71 0.71 0.011 0 0.022-0 0.033-0.001l2.518 0c0.412-0.010 0.742-0.346 0.742-0.76 0-0.018-0.001-0.035-0.002-0.053l0-0.838c-0-0.004-0-0.008-0-0.012 0-0.229 0.119-0.43 0.298-0.546 0.947-0.508 2.069-0.806 3.26-0.806 0.156 0 0.31 0.005 0.464 0.015 0.122-0.011 0.288-0.017 0.456-0.017 1.178 0 2.287 0.291 3.261 0.805 0.143 0.099 0.262 0.3 0.262 0.529 0 0.004-0 0.009-0 0.013l0 0.859c-0.001 0.015-0.002 0.033-0.002 0.050 0 0.413 0.33 0.75 0.741 0.76l2.521 0c0.009 0 0.020 0.001 0.031 0.001 0.392 0 0.71-0.318 0.71-0.71 0-0.014-0-0.029-0.001-0.043l0-0.868c-0.001-0.189-0.045-0.368-0.123-0.527z"></path><path d="M12 8.3c-0.624-0.797-1.001-1.815-1.001-2.92 0-0.028 0-0.056 0.001-0.084l-0-0.296h-1v1h-4v-1h-1v0.33c0 0.024 0.001 0.052 0.001 0.080 0 1.105-0.377 2.122-1.009 2.93l-2.992 3.66v3h14v-3zM8 13c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.657 0 3 1.343 3 3s-1.343 3-3 3z"></path><path d="M10 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:phone"><path d="M12.2 10c-1.1-0.1-1.7 1.4-2.5 1.8-1.3 0.7-3.7-1.8-3.7-1.8s-2.5-2.4-1.9-3.7c0.5-0.8 2-1.4 1.9-2.5-0.1-1-2.3-4.6-3.4-3.6-2.4 2.2-2.6 3.1-2.6 4.9-0.1 3.1 3.9 7 3.9 7 0.4 0.4 3.9 4 7 3.9 1.8 0 2.7-0.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z"></path></g>
<g id="vaadin:picture"><path d="M16 14h-16v-12h16v12zM1 13h14v-10h-14v10z"></path><path d="M2 10v2h12v-1c0 0 0.2-1.7-2-2-1.9-0.3-2.2 0.6-3.8 0.6-1.1 0-0.9-1.6-3.2-1.6-1.7 0-3 2-3 2z"></path><path d="M13 6c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:pie-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M5 0c-2.761 0-5 2.239-5 5s2.239 5 5 5c2.761 0 5-2.239 5-5s-2.239-5-5-5zM5 9c-2.209 0-4-1.791-4-4s1.791-4 4-4v4h4c0 2.209-1.791 4-4 4z"></path></g>
<g id="vaadin:pie-chart"><path d="M9 1c3.2 0.2 5.7 2.8 6 6h-6v-6zM8.5 0c-0.2 0-0.3 0-0.5 0v8h8c0-0.2 0-0.3 0-0.5 0-4.1-3.4-7.5-7.5-7.5v0z"></path><path d="M7 9v-8c-3.9 0.3-7 3.5-7 7.5 0 4.1 3.4 7.5 7.5 7.5 4 0 7.2-3.1 7.5-7h-8z"></path></g>
<g id="vaadin:piggy-bank-coin"><path d="M15.93 7.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.411h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 7.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 7c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 9.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.001s0-0.13 0-0.13 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 9.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path><path d="M8 3h-1v-0.17h0.25v-1.090h-0.25l0.55-0.55h0.2v1.64h0.25v0.17z"></path><path d="M7.5 0.75c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5zM7.5 0c-1.243 0-2.25 1.007-2.25 2.25s1.007 2.25 2.25 2.25c1.243 0 2.25-1.007 2.25-2.25s-1.007-2.25-2.25-2.25v0z"></path></g>
<g id="vaadin:piggy-bank"><path d="M15.93 5.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.41h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 5.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 5c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 7.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.011s0-0.14 0-0.14 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 7.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path></g>
<g id="vaadin:pill"><path d="M14.8 1.4l-0.2-0.2c-0.7-0.8-1.8-1.2-2.8-1.2s-2.1 0.4-2.9 1.2l-7.7 7.7c-1.6 1.6-1.6 4.1 0 5.7l0.2 0.2c0.7 0.8 1.8 1.2 2.8 1.2s2.1-0.4 2.9-1.2l7.8-7.8c1.5-1.5 1.5-4.1-0.1-5.6zM14.1 6.4l-3.9 3.9-3.5-3.6-3.8 3.8c-1.1 1.1-1.1 2.5-1 3.5v0c-1.2-1.2-1.2-3.1 0-4.3l7.8-7.8c0.5-0.6 1.3-0.9 2.1-0.9s1.6 0.3 2.2 0.9l0.2 0.2c0.5 0.5 0.8 1.3 0.8 2.1s-0.3 1.6-0.9 2.2z"></path></g>
<g id="vaadin:pills"><path d="M3.5 8l6.3-6.3c0.4-0.4 1-0.7 1.7-0.7s1.3 0.3 1.8 0.7c1 1 1 2.6 0 3.5l-2.8 2.8h1.4l2-2c1.4-1.4 1.4-3.6 0-4.9-0.7-0.7-1.6-1-2.5-1s-1.7 0.2-2.4 0.9l-6.3 6.4c-0.3 0.2-0.5 0.5-0.7 0.9 0.5-0.2 1-0.3 1.5-0.3z"></path><path d="M7.3 5.6l-2.4 2.4h4.7z"></path><path d="M12.5 9h-9c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5h9c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5zM12.5 15h-4.5v-4h-4.5c-1.1 0-2 0.6-2.5 1.2 0.2-1.2 1.2-2.2 2.5-2.2h9c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:pin-post"><path d="M15 4v-1h-6c0-1.69 1-2 1-2v-1h-5v1s1 0.31 1 2h-6v12h2v1h14v-12h-1zM14 14h-13v-10h4v1h2v2h1v-2h2v-1h4v10z"></path></g>
<g id="vaadin:pin"><path d="M11 6.5v-5.5h1v-1h-8v1h1v5.5c0 0-2 1.5-2 3.5 0 0.5 1.9 0.7 4 0.7v2.2c0 0.7 0.2 1.4 0.5 2.1l0.5 1 0.5-1c0.3-0.6 0.5-1.3 0.5-2.1v-2.2c2.1 0 4-0.3 4-0.7 0-2-2-3.5-2-3.5zM7 6.6c0 0-0.5 0.3-1.6 1.4-1 1-1.5 1.9-1.5 1.9s0.1-1 0.8-1.9c0.9-1.1 1.3-1.4 1.3-1.4v-5.6h1v5.6z"></path></g>
<g id="vaadin:play-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6 4v8l6-4z"></path></g>
<g id="vaadin:play-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 12v-8l6 4-6 4z"></path></g>
<g id="vaadin:play"><path d="M2 1v14l12-7z"></path></g>
<g id="vaadin:plug"><path d="M14.7 3.1c-0.4-0.4-1-0.4-1.4 0l-2.8 2.8-1.5-1.4 2.8-2.8c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-2.8 2.8-1.4-1.4-1.4 1.4 0.7 0.7-1.4 1.4c-1.4 1.4-1.5 3.5-0.5 5.1-1.7 1.5-2.6 3.8-2.6 5.7h2c0-1.3 0.4-3.2 2.1-4.4 1.5 0.8 3.4 0.5 4.6-0.7l1.4-1.4 0.7 0.7 1.4-1.4-1.4-1.4 2.8-2.8c0.5-0.5 0.5-1.1 0.1-1.5z"></path></g>
<g id="vaadin:plus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M13 7h-4v-4h-2v4h-4v2h4v4h2v-4h4z"></path></g>
<g id="vaadin:plus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"></path></g>
<g id="vaadin:plus-minus"><path d="M10 7h6v2h-6v-2z"></path><path d="M4 5h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M6 2l3 12h1l-3-12z"></path></g>
<g id="vaadin:plus-square-o"><path d="M12 7h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:plus"><path d="M14 7h-5v-5h-2v5h-5v2h5v5h2v-5h5v-2z"></path></g>
<g id="vaadin:pointer"><path d="M12.6 5c-0.2 0-0.5 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.6-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.2 0-0.4 0-0.5 0.1v-1.7c0-0.6-0.4-1.4-1.4-1.4-0.4 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.4v4.3c-0.6 0.1-1.1 0.3-1.4 0.6-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.4 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM13 7.4v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.8-1.1-1.2-1.1-2.2 0-0.2 0-0.5 0-0.7 0-1 0-1.7 0.3-2.1 0.1-0.1 0.4-0.2 0.7-0.2v0.5l-0.3 1.5c0 0.1 0 0.1 0.1 0.2s0.2 0 0.2 0l1-1.2c0-0.1 0-0.2 0-0.2v-6.2c0-0.1 0-0.5 0.2-0.7 0.1 0 0.2-0.1 0.4-0.1 0.3 0 0.4 0.3 0.4 0.4v3.1c0 0 0 0 0 0v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-1.3c0 0 0 0 0 0 0-0.1 0.1-0.5 0.5-0.5 0.3 0 0.5 0.1 0.5 0.4v1.3c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.7c0-0.1 0.1-0.3 0.5-0.3 0.2 0 0.3 0.1 0.3 0.1 0.2 0.1 0.2 0.4 0.2 0.4v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0-0.1 0.1-0.2 0.2-0.3 0 0 0.1 0 0.2 0 0.6 0.2 0.7 1.2 0.7 1.5 0-0.1 0-0.1 0 0z"></path></g>
<g id="vaadin:power-off"><path d="M10 2.3v3.3c1.2 0.7 2 2 2 3.4 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.5 0.8-2.8 2-3.4v-3.3c-2.9 0.9-5 3.5-5 6.7 0 3.9 3.1 7 7 7s7-3.1 7-7c0-3.2-2.1-5.8-5-6.7z"></path><path d="M7 1h2v7h-2v-7z"></path></g>
<g id="vaadin:presentation"><path d="M16 1h-7v-1h-2v1h-7v11h5l-2 4h2.2l2-4h1.5l2 4h2.3l-2-4h5v-11zM15 11h-14v-9h14v9z"></path><path d="M6 4v5l4-2.5z"></path></g>
<g id="vaadin:print"><path d="M0 10v4h2v2h12v-2h2v-4h-16zM13 15h-10v-3h10v3z"></path><path d="M12 6v-4l-2.7-2h-5.3v6h-4v3h16v-3h-4zM9 1l1.3 1h-1.3v-1zM11 7h-6v-6h3v2h3v4zM15 8h-1v-1h1v1z"></path></g>
<g id="vaadin:progressbar"><path d="M0 5v6h16v-6h-16zM15 10h-14v-4h14v4z"></path><path d="M2 7h7v2h-7v-2z"></path></g>
<g id="vaadin:puzzle-piece"><path d="M14.9 0.9c-1.1-1-2.5-1.3-3.1-0.4-0.7 1.1 0.5 1.7-0.3 2.5-0.5 0.6-2-0.8-2-0.8l-0.8-0.8-1.4 1.4c-0.6 0.7-2.1 1.5-2.6 1.1-0.7-0.6 0.1-1.8-0.5-2.6-0.7-1-2.1-0.8-3 0.3-1 1.1-1.4 2.4-0.5 3 1.1 0.7 1.9-0.3 2.7 0.5 0.4 0.4-0.2 1.7-0.5 2.1l-2.3 2.3 6.5 6.5 1.7-1.7c0.7-0.7 1.5-2 1.1-2.4-0.6-0.7-1.7 0.1-2.5-0.4-1-0.7-0.8-2 0.3-3s2.5-1.3 3.1-0.4c0.7 1.1-0.4 1.8 0.4 2.6 0.4 0.4 1.6-0.2 2-0.6l2.1-2.1-1.1-1.1c-0.6-0.6-1.9-2-1.4-2.5 0.6-0.7 1.7 0.2 2.5-0.4 0.9-0.8 0.6-2.1-0.4-3.1z"></path></g>
<g id="vaadin:pyramid-chart"><path d="M10.29 5l-2.29-4-2.29 4h4.58z"></path><path d="M2.29 11l-2.29 4h16l-2.29-4h-11.42z"></path><path d="M13.14 10l-2.28-4h-5.72l-2.28 4h10.28z"></path></g>
<g id="vaadin:qrcode"><path d="M6 0h-6v6h6v-6zM5 5h-4v-4h4v4z"></path><path d="M2 2h2v2h-2v-2z"></path><path d="M0 16h6v-6h-6v6zM1 11h4v4h-4v-4z"></path><path d="M2 12h2v2h-2v-2z"></path><path d="M10 0v6h6v-6h-6zM15 5h-4v-4h4v4z"></path><path d="M12 2h2v2h-2v-2z"></path><path d="M2 7h-2v2h3v-1h-1z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M3 7h2v1h-2v-1z"></path><path d="M9 12h-2v1h1v1h1v-1z"></path><path d="M6 7v1h-1v1h2v-2z"></path><path d="M8 4h1v2h-1v-2z"></path><path d="M9 8v1h2v-2h-3v1z"></path><path d="M7 6h1v1h-1v-1z"></path><path d="M9 14h2v2h-2v-2z"></path><path d="M7 14h1v2h-1v-2z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M9 3v-2h-1v-1h-1v4h1v-1z"></path><path d="M12 14h1v2h-1v-2z"></path><path d="M12 12h2v1h-2v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M14 10v1h1v1h1v-2h-1z"></path><path d="M15 13h-1v3h2v-2h-1z"></path><path d="M10 10v1h3v-2h-2v1z"></path><path d="M12 7v1h2v1h2v-2h-2z"></path></g>
<g id="vaadin:question-circle-o"><path d="M9 10h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.9 11h2v2h-2v-2z"></path></g>
<g id="vaadin:question-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8.9 13h-2v-2h2v2zM11 8.1c-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3z"></path></g>
<g id="vaadin:question"><path d="M9 11h-3c0-3 1.6-4 2.7-4.6 0.4-0.2 0.7-0.4 0.9-0.6 0.5-0.5 0.3-1.2 0.2-1.4-0.3-0.7-1-1.4-2.3-1.4-2.1 0-2.5 1.9-2.5 2.3l-3-0.4c0.2-1.7 1.7-4.9 5.5-4.9 2.3 0 4.3 1.3 5.1 3.2 0.7 1.7 0.4 3.5-0.8 4.7-0.5 0.5-1.1 0.8-1.6 1.1-0.9 0.5-1.2 1-1.2 2z"></path><path d="M9.5 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:quote-left"><path d="M7 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path><path d="M16 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path></g>
<g id="vaadin:quote-right"><path d="M9 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path><path d="M0 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path></g>
<g id="vaadin:random"><path d="M13 12h-2c-1 0-1.7-1.2-2.4-2.7-0.3 0.7-0.6 1.5-1 2.3 0.8 1.4 1.8 2.4 3.4 2.4h2v2l3-3-3-3v2z"></path><path d="M5.4 6.6c0.3-0.7 0.6-1.5 1-2.2-0.8-1.4-1.9-2.4-3.4-2.4h-3v2h3c1 0 1.7 1.2 2.4 2.6z"></path><path d="M16 3l-3-3v2h-2c-2.7 0-3.9 3-5 5.7-0.8 2.1-1.7 4.3-3 4.3h-3v2h3c2.6 0 3.8-2.8 4.9-5.6 0.9-2.2 1.8-4.4 3.1-4.4h2v2l3-3z"></path></g>
<g id="vaadin:raster-lower-left"><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:raster"><path d="M7 7h1v1h-1v-1z"></path><path d="M5 7h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M5 5h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M6 4h1v1h-1v-1z"></path><path d="M4 4h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M5 3h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M6 2h1v1h-1v-1z"></path><path d="M4 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M9 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M10 4h1v1h-1v-1z"></path><path d="M8 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M11 3h1v1h-1v-1z"></path><path d="M9 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M10 2h1v1h-1v-1z"></path><path d="M8 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M4 10h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M5 9h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:records"><path d="M4 9h4v2h-4v-2z"></path><path d="M16 2h-1v-2h-10v2h-2v1.25l-0.6 0.75h-1.4v1.75l-1 1.25v9h12l4-5v-9zM2 5h8v2h-8v-2zM11 15h-10v-7h10v7zM12 7h-1v-3h-7v-1h8v4zM14 4.5l-1 1.25v-3.75h-7v-1h8v3.5z"></path></g>
<g id="vaadin:recycle"><path d="M8 3.1l1.4 2.2-1.6 1.1 1.3 0.3 2.8 0.6 0.6-2.7 0.4-1.4-1.8 1.1-2-3.3h-2.2l-2.6 4.3 1.7 1z"></path><path d="M16 12l-2.7-4.3-1.7 1 2 3.3h-2.6v-2l-3 3 3 3v-2h3.7z"></path><path d="M2.4 12v0l1.4-2.3 1.7 1.1-0.9-4.2-2.8 0.7-1.3 0.3 1.6 1-2.1 3.4 1.3 2h5.7v-2z"></path></g>
<g id="vaadin:refresh"><path d="M2.6 5.6c0.9-2.1 3-3.6 5.4-3.6 3 0 5.4 2.2 5.9 5h2c-0.5-3.9-3.8-7-7.9-7-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.4-1.4z"></path><path d="M16 9h-4.1l1.5 1.4c-0.9 2.1-3 3.6-5.5 3.6-2.9 0-5.4-2.2-5.9-5h-2c0.5 3.9 3.9 7 7.9 7 3 0 5.6-1.7 7-4.1l1.1 1.1v-4z"></path></g>
<g id="vaadin:reply-all"><path d="M16 8c0-5-4.9-5-4.9-5h-2.1v-3l-6 6 6 6v-3h2.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path><path d="M0 6l6 6v-1.5l-4.5-4.5 4.5-4.5v-1.5z"></path></g>
<g id="vaadin:reply"><path d="M16 8c0-5-4.9-5-4.9-5h-5.1v-3l-6 6 6 6v-3h5.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path></g>
<g id="vaadin:resize-h"><path d="M0 7h16v2h-16v-2z"></path><path d="M7 6h2v-3h2l-3-3-3 3h2z"></path><path d="M9 10h-2v3h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:resize-v"><path d="M7 0h2v16h-2v-16z"></path><path d="M3 5l-3 3 3 3v-2h3v-2h-3z"></path><path d="M16 8l-3-3v2h-3v2h3v2z"></path></g>
<g id="vaadin:retweet"><path d="M2 1h12v5h2l-3 3-3-3h2v-3h-8v2h-2z"></path><path d="M14 14h-12v-5h-2l3-3 3 3h-2v3h8v-2h2z"></path></g>
<g id="vaadin:rhombus"><path d="M8 0l-8 8 8 8 8-8-8-8zM2 8l6-6 6 6-6 6-6-6z"></path></g>
<g id="vaadin:road-branch"><path d="M16 4h-16v3h3.2l3.8 3.6c1.6 1.5 3.6 2.4 5.8 2.4h3.2v-3h-3.2c-1.4 0-2.7-0.5-3.7-1.5l-1.6-1.5h8.5v-3z"></path></g>
<g id="vaadin:road-branches"><path d="M16 4v-3h-16v3h1.7l7.7 9.5c1.3 1.6 3.1 2.5 5 2.5h1.6v-3h-1.5c-1 0-1.9-0.5-2.7-1.4l-1.3-1.6h5.5v-3h-8l-2.4-3h10.4z"></path></g>
<g id="vaadin:road-split"><path d="M14 13v-1c0-0.2 0-4.1-2.8-5.4-2.2-1-2.2-3.5-2.2-3.6v-3h-2v3c0 0.1 0 2.6-2.2 3.6-2.8 1.3-2.8 5.2-2.8 5.4v1h-2l3 3 3-3h-2v-1c0 0 0-2.8 1.7-3.6 1.1-0.5 1.8-1.3 2.3-2 0.5 0.8 1.2 1.5 2.3 2 1.7 0.8 1.7 3.6 1.7 3.6v1h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:road"><path d="M9 11v4h7l-4-14h-3v3h-2v-3h-3l-4 14h7v-4h2zM7 6h2v3h-2v-3z"></path></g>
<g id="vaadin:rocket"><path d="M16 0c0 0-3.5-0.4-6.7 2.8-1.6 1.5-2.9 3.5-3.9 5.3l-2.5-0.6-1.6 1.6 2.8 1.4c-0.3 0.6-0.4 1-0.4 1l0.8 0.8c0 0 0.4-0.2 1-0.4l1.4 2.8 1.6-1.6-0.5-2.5c1.7-1 3.8-2.3 5.3-3.8 3.1-3.2 2.7-6.8 2.7-6.8zM12.8 4.8c-0.4 0.4-1.1 0.4-1.6 0-0.4-0.4-0.4-1.1 0-1.6 0.4-0.4 1.1-0.4 1.6 0 0.4 0.4 0.4 1.1 0 1.6z"></path><path d="M4 14.2c-0.8 0.8-2.6 0.4-2.6 0.4s-0.4-1.8 0.4-2.6c0.8-0.8 1.5-0.9 1.5-0.9s-1.3-0.3-2.1 0.6c-1.6 1.6-1 4.2-1 4.2s2.6 0.6 4.2-1c0.9-0.9 0.6-2.2 0.6-2.2s-0.2 0.7-1 1.5z"></path></g>
<g id="vaadin:rotate-left"><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:rotate-right"><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:rss-square"><path d="M0 0v16h16v-16h-16zM3.6 14c-0.9 0-1.6-0.7-1.6-1.6s0.7-1.6 1.6-1.6 1.6 0.7 1.6 1.6-0.6 1.6-1.6 1.6zM7.6 14c0-3.1-2.5-5.6-5.6-5.6v-2.4c4.4 0 8 3.6 8 8h-2.4zM11.6 14c0-5.3-4.3-9.6-9.6-9.6v-2.4c6.6 0 12 5.4 12 12h-2.4z"></path></g>
<g id="vaadin:rss"><path d="M4.4 13.8c0 1.215-0.985 2.2-2.2 2.2s-2.2-0.985-2.2-2.2c0-1.215 0.985-2.2 2.2-2.2s2.2 0.985 2.2 2.2z"></path><path d="M10.6 16h-3.1c0-4.1-3.4-7.5-7.5-7.5v0-3.1c5.9 0 10.6 4.7 10.6 10.6z"></path><path d="M12.8 16c0-7.1-5.7-12.8-12.8-12.8v-3.2c8.8 0 16 7.2 16 16h-3.2z"></path></g>
<g id="vaadin:safe-lock"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM11.13 14.25l-0.37-0.9-0.92 0.38 0.37 0.9c-0.659 0.23-1.419 0.363-2.21 0.363s-1.551-0.133-2.259-0.378l0.419-0.885-0.92-0.38-0.37 0.9c-1.355-0.69-2.43-1.765-3.102-3.080l0.882-0.41-0.38-0.93-0.9 0.37c-0.23-0.659-0.363-1.419-0.363-2.21s0.133-1.551 0.378-2.259l0.885 0.419 0.38-0.92-0.9-0.37c0.691-1.351 1.766-2.423 3.080-3.092l0.41 0.882 0.92-0.38-0.37-0.9c0.659-0.23 1.419-0.363 2.21-0.363s1.551 0.133 2.259 0.378l-0.419 0.885 0.92 0.38 0.37-0.9c1.355 0.69 2.43 1.765 3.102 3.080l-0.882 0.41 0.38 0.92 0.9-0.37c0.23 0.659 0.363 1.419 0.363 2.21s-0.133 1.551-0.378 2.259l-0.885-0.419-0.38 0.92 0.9 0.37c-0.69 1.355-1.765 2.43-3.080 3.102z"></path><path d="M10.36 3.62l-1.16 2.79c-0.329-0.253-0.746-0.407-1.199-0.41h0.279l1.15-2.77c-0.426-0.14-0.917-0.223-1.427-0.23-0.023-0-0.047-0-0.071-0-2.795 0-5.060 2.265-5.060 5.060s2.265 5.060 5.060 5.060c2.795 0 5.060-2.265 5.060-5.060 0-1.904-1.052-3.563-2.606-4.426z"></path></g>
<g id="vaadin:safe"><path d="M1 0v16h3v-1h8v1h3v-16h-14zM14 10h-1v-5h1v5zM14 3h-1v-1h-10v11h10v-1h1v2h-12v-13h12v2zM8.5 7.5c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2z"></path><path d="M7.5 7.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scale-unbalance"><path d="M15.81 9l-2.47-4.93 0.83-0.15c0.239-0.044 0.418-0.251 0.418-0.5 0-0.281-0.227-0.508-0.508-0.508-0.032 0-0.063 0.003-0.093 0.009l-0.777 0.14c-0.993-0.755-2.25-1.21-3.613-1.21-0.21 0-0.418 0.011-0.623 0.032-0.036-0.5-0.457-0.882-0.967-0.882-0.003 0-0.005 0-0.008 0-0.552 0-1 0.448-1 1v0.2c-1.714 0.336-3.151 1.327-4.066 2.697l-0.754 0.153c-0.257 0.024-0.457 0.239-0.457 0.5 0 0.277 0.225 0.502 0.502 0.502 0.016 0 0.032-0.001 0.047-0.002l0.088 0 0.35-0.050-2.52 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.56-5.12h0.1c0.172-0.031 0.311-0.144 0.379-0.297 0.021-0.093 0.701-1.583 3.271-2.363v10.78h-1v1h-2v1h8v-1h-2v-1h-1v-11.12c0.201-0.031 0.434-0.049 0.67-0.049 1.152 0 2.205 0.419 3.016 1.114l-0.006-0.005-2.49 5.060h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 11h-4l2-3.94zM11 9l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scale"><path d="M15.81 10l-2.5-5h0.69c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.79c-1.056-1.145-2.541-1.881-4.198-1.95l-0.012-0.050c0-0.552-0.448-1-1-1s-1 0.448-1 1v0.050c-1.681 0.073-3.178 0.807-4.247 1.947l-0.753 0.003c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.69l-2.5 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.55-5.090c0.064-0.039 0.118-0.089 0.159-0.148 0.873-1.019 2.148-1.669 3.575-1.702l0.006 10.94h-1v1h-2v1h8v-1h-2v-1h-1v-10.94c1.418 0.030 2.679 0.682 3.524 1.693 0.053 0.084 0.117 0.145 0.193 0.186l-2.527 5.061h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 10h-4l2-3.94zM11 10l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scatter-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M5 11c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M14 5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scissors"><path d="M16 3.1c0 0-2.1-1.1-3.5-1-0.3 0-0.5 0.1-0.7 0.2l-4.3 3.4-1.8-1.5c0.1-0.3 0.2-0.6 0.3-1 0.1-1.8-1.4-3.4-3.3-3.2-1.2 0.1-2.3 1-2.6 2.2-0.3 1.3 0.2 2.5 1.2 3.2l3.3 2.6-3.3 2.6c-1 0.7-1.5 1.9-1.2 3.2 0.3 1.2 1.4 2 2.6 2.2 1.9 0.2 3.4-1.4 3.2-3.2 0-0.3-0.1-0.7-0.3-1l1.8-1.5 4.3 3.4c0.2 0.1 0.4 0.2 0.7 0.2 1.4 0.1 3.5-1 3.5-1l-5.7-4.9 5.8-4.9zM2.8 4.6c-0.9-0.1-1.6-0.9-1.5-1.8s0.9-1.6 1.8-1.5c0.9 0.1 1.6 0.9 1.5 1.8 0 0.9-0.9 1.6-1.8 1.5zM3.1 14.7c-0.9 0.1-1.7-0.6-1.8-1.5s0.6-1.7 1.5-1.8c0.9-0.1 1.7 0.6 1.8 1.5s-0.6 1.7-1.5 1.8zM12.4 3.2c0 0 0.1 0 0.2 0 0.4 0 0.9 0.1 1.4 0.2l-6.8 5.7-0.9-1.1 6.1-4.8zM14 12.6c-0.5 0.2-1 0.3-1.4 0.2-0.1 0-0.2 0-0.2 0l-4-3.2 1-0.9 4.6 3.9z"></path></g>
<g id="vaadin:screwdriver"><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:search-minus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M3 5h6v2h-6v-2z"></path></g>
<g id="vaadin:search-plus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M7 3h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path></g>
<g id="vaadin:search"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path></g>
<g id="vaadin:select"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM12 9l-2-2h4l-2 2z"></path></g>
<g id="vaadin:server"><path d="M3 5v3h10v-3h-10zM7 7h-3v-1h3v1z"></path><path d="M3 4h10l-2-4h-6z"></path><path d="M3 12h10v-3h-10v3zM11 10h1v1h-1v-1zM9 10h1v1h-1v-1z"></path><path d="M3 16h10v-3h-10v3zM4 14h3v1h-3v-1z"></path></g>
<g id="vaadin:share-square"><path d="M11 3h-3.6c0 0-4.4-0.2-4.4 4.3 0 3.5 2 6.7 2 6.7s-0.4-7 2.3-7h3.7v3l5-5-5-5v3z"></path><path d="M14 9v6h-13v-13h9v-1h-10v15h15v-8z"></path></g>
<g id="vaadin:share"><path d="M10 3h-5.1c0 0-4.9 0-4.9 5 0 3.9 3 8 3 8s-1.7-7 1.8-7h5.2v3l6-6-6-6v3z"></path></g>
<g id="vaadin:shield"><path d="M1 0c0 0 0 3.2 0 7 0 5.6 7 9 7 9s7-3.4 7-9c0-3.8 0-7 0-7h-14zM14 7c0 4.2-4.6 7.1-6 7.9v-13.9h6v6z"></path></g>
<g id="vaadin:shift-arrow"><path d="M8 2l-7 7h4v5h6v-5h4zM10 8v5h-4v-5h-2.5l4.5-4.58 4.5 4.58h-2.5z"></path></g>
<g id="vaadin:shift"><path d="M0 2v12h16v-12h-16zM6 8v3h-2v-3h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:shop"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0v6c0.005 0.732 0.401 1.37 0.991 1.715l0.009 6.285h9v-5h3v5h2v-6.28c0.599-0.35 0.995-0.988 1-1.719v-6.001h-16zM4 2h2v4c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4zM2 7c-0.552 0-1-0.448-1-1v-4h2v4c0 0.552-0.448 1-1 1zM8 12h-5v-3h5v3zM9 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM12 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM15 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4z"></path></g>
<g id="vaadin:sign-in-alt"><path d="M0 0h2v16h-2v-16z"></path><path d="M3 10h8v3l5-5-5-5v3h-8z"></path></g>
<g id="vaadin:sign-in"><path d="M7 1v2l1 1v-2h7v12h-7v-2l-1 1v2h9v-14z"></path><path d="M10 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:sign-out-alt"><path d="M14 0h2v16h-2v-16z"></path><path d="M8 6h-8v4h8v3l5-5-5-5z"></path></g>
<g id="vaadin:sign-out"><path d="M9 4v-3h-9v14h9v-3h-1v2h-7v-12h7v2z"></path><path d="M16 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:signal"><path d="M6.9 13.2l1.1 1.1 1.1-1.1c-0.3-0.3-0.7-0.5-1.1-0.5s-0.9 0.2-1.1 0.5z"></path><path d="M8 4.6c2.7 0 5.1 1.1 6.9 2.8l1.1-1.1c-2-2-4.9-3.3-8-3.3s-6 1.3-8 3.3l1.1 1.1c1.8-1.7 4.2-2.8 6.9-2.8z"></path><path d="M2.3 8.6l1.1 1.1c1.2-1.1 2.8-1.8 4.6-1.8s3.4 0.7 4.6 1.9l1.1-1.1c-1.4-1.6-3.5-2.5-5.7-2.5s-4.3 0.9-5.7 2.4z"></path><path d="M4.6 10.9l1.1 1.1c0.6-0.6 1.4-0.9 2.3-0.9s1.7 0.4 2.3 0.9l1.1-1.1c-0.8-0.9-2.1-1.4-3.4-1.4s-2.6 0.5-3.4 1.4z"></path></g>
<g id="vaadin:sitemap"><path d="M14.5 12v-4.5h-6v-3.5h1.5v-4h-4v4h1.5v3.5h-6v4.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4z"></path></g>
<g id="vaadin:slider"><path d="M16 6h-3.6c-0.7-1.2-2-2-3.4-2s-2.8 0.8-3.4 2h-5.6v4h5.6c0.7 1.2 2 2 3.4 2s2.8-0.8 3.4-2h3.6v-4zM1 9v-2h4.1c0 0.3-0.1 0.7-0.1 1s0.1 0.7 0.1 1h-4.1zM9 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c0 1.7-1.3 3-3 3z"></path></g>
<g id="vaadin:sliders"><path d="M7 0h2v3h-2v-3z"></path><path d="M6 4v3h1v9h2v-9h1v-3z"></path><path d="M2 0h2v8h-2v-8z"></path><path d="M1 9v3h1v4h2v-4h1v-3z"></path><path d="M12 0h2v10h-2v-10z"></path><path d="M11 11v3h1v2h2v-2h1v-3z"></path></g>
<g id="vaadin:smiley-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M8 13.2c-2 0-3.8-1.2-4.6-3.1l0.9-0.4c0.6 1.5 2.1 2.4 3.7 2.4s3.1-1 3.7-2.4l0.9 0.4c-0.8 2-2.6 3.1-4.6 3.1z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:sort"><path d="M11 7h-6l3-4z"></path><path d="M5 9h6l-3 4z"></path></g>
<g id="vaadin:sound-disable"><path d="M4 5h-4v6h4l5 4v-14z"></path><path d="M15.9 5.6l-0.8-0.7-2.3 2.4-2.4-2.4-0.8 0.7 2.4 2.4-2.4 2.4 0.8 0.7 2.4-2.4 2.3 2.4 0.8-0.7-2.4-2.4z"></path></g>
<g id="vaadin:spark-line"><path d="M14 6c-1.105 0-2 0.895-2 2 0 0.060 0 0.11 0 0.16l-0.81 0.25-2.3-3.48-1.73 4.32-1.16-5.81-2.3 4.78-1.64-1.31-2.060 1.090v1.080l1.94-1 2.11 1.7 1.56-3.22 1.23 6.19 2.27-5.68 1.68 2.52 1.55-0.48c0.364 0.54 0.973 0.89 1.664 0.89 1.105 0 2-0.895 2-2s-0.895-2-2-2c-0.001 0-0.003 0-0.004 0zM14 9c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:specialist"><path d="M4.1 8c0.2 0.6 0.3 1.1 0.3 1.1 0.8 1.3 1.8 1.1 1.8 1.8 0 0.3-0.2 0.6-0.5 0.7l2.3 1.8 2.3-1.7c-0.3-0.2-0.5-0.4-0.5-0.7 0-0.8 1-0.5 1.8-1.8 0 0 0.2-0.4 0.3-1.1v0c0.3-1.1 0.6-3.1 0.5-4.1h-1.5c0-0.3 0.1-0.6 0.1-1h1.1c-0.3-1.4-1-2-2.2-2.3-0.5-0.4-1.2-0.7-1.9-0.7s-1.4 0.3-1.9 0.7c-1.2 0.3-1.8 0.9-2.2 2.3h1.1c0 0.4 0.1 0.7 0.2 1h-1.6c-0.1 1 0.2 3 0.5 4v0zM11.2 8.5c-0.1 0.1-0.2 0.2-0.3 0.3l-0.5 0.6c-0.4 0.5-0.8 0.8-1.4 0.9l-0.4 0.1c-0.4 0.1-0.9 0.1-1.4 0l-0.4-0.1c-0.6-0.2-1.1-0.5-1.5-1.1l-0.2-0.4c-0.1-0.1-0.2-0.2-0.3-0.3l-0.7-0.5 3.1-0.9c0.5-0.1 1-0.2 1.5 0l3.2 0.9-0.7 0.5zM6 3c0-1.1 0.9-2 2-2s2 0.9 2 2c0 1.1-0.9 2-2 2s-2-0.9-2-2z"></path><path d="M15.5 14.2c-1.3-2.4-2.6-2-3.9-2.2 0 0 0 0-0.1 0l-3.5 2.6-3.5-2.6c0 0 0 0-0.1 0-1.4 0.1-2.6-0.2-3.9 2.2-0.2 0.4-0.4 1.1-0.5 1.8h16c-0.1-0.7-0.3-1.4-0.5-1.8z"></path></g>
<g id="vaadin:spinner-arc"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3-7-7h-1c0 4 3.6 8 8 8s8-3.6 8-8h-1z"></path></g>
<g id="vaadin:spinner-third"><path d="M12.9 3.1c1.3 1.2 2.1 3 2.1 4.9 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.9 0.8-3.7 2.1-4.9l-0.8-0.8c-1.4 1.5-2.3 3.5-2.3 5.7 0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-0.9-4.2-2.3-5.7l-0.8 0.8z"></path></g>
<g id="vaadin:spinner"><path d="M9.9 0.2l-0.2 1c3 0.8 5.3 3.5 5.3 6.8 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.3 2.3-6 5.3-6.8l-0.2-1c-3.5 0.9-6.1 4.1-6.1 7.8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.9-6.1-7.8z"></path></g>
<g id="vaadin:spline-area-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M10 7c-2 0-2.080-1-4-1-2.34 0-4 3-4 3v5h14v-12c-2 0-3.86 5-6 5z"></path></g>
<g id="vaadin:spline-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M12 5c-0.69 1-1.41 2-2 2-0.026 0.001-0.056 0.001-0.087 0.001-0.601 0-1.164-0.16-1.65-0.44-0.623-0.35-1.387-0.562-2.2-0.562-0.022 0-0.045 0-0.067 0-1.6 0.116-3.009 0.864-3.991 1.993l-0.006 2.347c0.77-1.12 2.32-2.84 4-2.84 0.014-0 0.031-0 0.048-0 0.579 0 1.121 0.156 1.587 0.428 0.643 0.358 1.429 0.573 2.264 0.573 0.035 0 0.071-0 0.106-0.001 1.395 0 2.335-1.32 3.245-2.6s1.75-2.4 2.75-2.4v-1.5c-1.81 0-3 1.61-4 3z"></path></g>
<g id="vaadin:split-h"><path d="M0 1v14h16v-14h-16zM1 4h6.5v10h-6.5v-10zM15 14h-6.5v-10h6.5v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:split-v"><path d="M0 1v14h16v-14h-16zM14 2h1v1h-1v-1zM15 4v4.5h-14v-4.5h14zM1 14v-4.5h14v4.5h-14z"></path></g>
<g id="vaadin:split"><path d="M0 11h6v5h-6v-5z"></path><path d="M11 10v-2l-0.64 0.64c-0.851-0.81-1.38-1.952-1.38-3.217 0-0.149 0.007-0.296 0.022-0.441l1.999 0.018v-5h-6v5h2c0.013 0.127 0.020 0.274 0.020 0.423 0 1.265-0.529 2.407-1.378 3.216l-0.642-0.638v2h2l-0.65-0.65c1.028-0.991 1.667-2.38 1.667-3.919 0-0.152-0.006-0.302-0.018-0.45-0.010 0.149-0.016 0.299-0.016 0.45 0 1.539 0.639 2.928 1.665 3.917l-0.648 0.652h2z"></path><path d="M10 11h6v5h-6v-5z"></path></g>
<g id="vaadin:spoon"><path d="M10.5 4.8c0-1.8-0.9-4.8-3-4.8s-3 3-3 4.8c0 1.5 0.8 2.8 2.2 3.1-0.5 1.6-0.7 4.6-0.7 4.6v2c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-2c0-0.6-0.2-3.2-0.7-4.6 1.4-0.3 2.2-1.6 2.2-3.1z"></path></g>
<g id="vaadin:square-shadow"><path d="M14 2v-2h-14v14h2v2h14v-14h-2zM13 13h-12v-12h12v12z"></path></g>
<g id="vaadin:star-half-left-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8v-9.1l1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star-half-left"><path d="M5.6 5.4l-5.5 0.8 3.9 3.8-0.9 5.5 4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-half-right-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM4.4 13.7l0.7-4-2.9-2.8 4-0.6 1.8-3.6v9.1l-3.6 1.9z"></path></g>
<g id="vaadin:star-half-right"><path d="M10.5 5.4l5.5 0.8-4 3.8 0.9 5.5-4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8l-3.6 1.9 0.7-4-2.9-2.8 4-0.6 1.8-3.6 1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star"><path d="M12.9 15.4l-4.9-2.6-4.9 2.6 0.9-5.4-4-3.9 5.5-0.8 2.4-5 2.4 5 5.5 0.8-3.8 3.9 0.9 5.4z"></path></g>
<g id="vaadin:start-cog"><path d="M4 0v6h1.7l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v0.2l6.1-3.4-12-7z"></path><path d="M4.5 10.5c-0.2 0-0.4 0.1-0.5 0.2-0.3 0.2-0.5 0.5-0.5 0.8s0.2 0.7 0.5 0.8c0.1 0.1 0.3 0.2 0.5 0.2 0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path><path d="M9 12v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.3 0.3-0.6 0.4-0.9l1.1-0.3zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:step-backward"><path d="M14 15v-14l-10 7z"></path><path d="M2 1h2v14h-2v-14z"></path></g>
<g id="vaadin:step-forward"><path d="M2 1v14l10-7z"></path><path d="M12 1h2v14h-2v-14z"></path></g>
<g id="vaadin:stethoscope"><path d="M5.7 15.2c0.3 0.3 1 0.8 1.8 0.8 2.7 0 3.3-2 3.4-3.6 0.2-2.3 0.8-2.2 1.1-2.2 0.7 0 0.9 0.4 0.9 1.1-0.6 0.4-1 1-1 1.7 0 1.1 0.9 2 2 2s2-0.9 2-2-0.9-2-2-2c-0.1 0-0.1 0-0.2 0-0.2-0.9-0.7-1.8-1.8-1.8-1.6 0-2 1.4-2.1 2.9-0.1 2.1-0.8 2.9-2.3 2.9-0.4 0-0.8-0.2-1-0.4-0.6-0.5-0.5-2.3-0.5-2.3 2 0 4-1.8 4.7-4.8l-0.2-0.1c0.3-1.2 0.5-2.6 0.5-3.6 0-1.1-0.3-1.9-1-2.5s-1.5-0.8-2.1-0.8c-0.2-0.3-0.5-0.5-0.9-0.5-0.5 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5 0.5 0 1 0.2 1.5 0.6s0.7 0.9 0.7 1.7c0 0.9-0.2 2.2-0.5 3.5l-0.2-0.1c-0.3 1.1-1.3 3.6-3.3 3.6h-1c-2 0-3-2.5-3.3-3.6l-0.2 0.1c-0.3-1.3-0.5-2.6-0.5-3.5 0-0.8 0.2-1.3 0.7-1.7 0.4-0.4 1-0.5 1.5-0.6 0.1 0.3 0.4 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.9 0.5-0.6 0-1.4 0.2-2.1 0.8s-1 1.4-1 2.5c0 1 0.2 2.4 0.5 3.7l-0.2 0.1c0.7 2.9 2.7 4.7 4.7 4.7 0 0-0.1 2.2 0.7 2.9zM14 14c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1-0.5 1-1 1z"></path></g>
<g id="vaadin:stock"><path d="M12 6v-6h-8v6h-4v7h16v-7h-4zM7 12h-6v-5h2v1h2v-1h2v5zM5 6v-5h2v1h2v-1h2v5h-6zM15 12h-6v-5h2v1h2v-1h2v5z"></path><path d="M0 16h3v-1h10v1h3v-2h-16v2z"></path></g>
<g id="vaadin:stop-cog"><path d="M1 0v7.2l0.5-0.5 1.2 0.6c0 0 0.1 0 0.1 0l0.2-0.6 0.3-0.7h2.4l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v2.4l-0.7 0.2-0.6 0.2c0 0 0 0.1 0 0.1l0.6 1.2-0.4 0.7h7.2v-15h-15z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:stop"><path d="M1 1h14v14h-14v-14z"></path></g>
<g id="vaadin:stopwatch"><path d="M8.5 8.14v-3.64h-1v3.64c-0.301 0.176-0.5 0.498-0.5 0.866 0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.368-0.199-0.69-0.495-0.863z"></path><path d="M8 2c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7zM8 14.5c-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5c3.038 0 5.5 2.462 5.5 5.5-0.006 3.035-2.465 5.494-5.499 5.5z"></path><path d="M6 0h4v1.5h-4v-1.5z"></path><path d="M0.005 4.438l2.713-2.939 1.102 1.017-2.713 2.939-1.102-1.017z"></path><path d="M12.186 2.519l1.102-1.017 2.713 2.939-1.102 1.017-2.713-2.939z"></path></g>
<g id="vaadin:storage"><path d="M16 4l-8.060-4-7.94 4v1h1v11h2v-9h10v9h2v-11h1v-1zM4 6v-1h2v1h-2zM7 6v-1h2v1h-2zM10 6v-1h2v1h-2z"></path><path d="M6 9h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M6 13h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M10 13h-1v-1h-1v3h3v-3h-1v1z"></path></g>
<g id="vaadin:strikethrough"><path d="M10.5 7c-0.5-0.3-1-0.5-1.4-0.7-2-0.9-2.1-1.1-2-1.9s0.4-1 0.6-1.2c0.9-0.5 2.8-0.1 3.5 0.2l1.1-2.8c-0.4-0.2-3.7-1.4-6.1 0-0.8 0.5-1.9 1.5-2.1 3.4-0.2 1.3 0.1 2.3 0.7 3h-4.8v1h16v-1h-5.5z"></path><path d="M7.7 9c0 0 0.1 0 0.1 0.1 2 0.9 2.4 1.2 2.2 2.5-0.2 0.9-0.5 1.1-0.8 1.3-1.1 0.6-3.3 0-4.4-0.5l-1.2 2.6c0.3 0.1 2.3 1 4.5 1 0.9 0 1.8-0.2 2.6-0.6 0.9-0.5 2-1.4 2.4-3.4 0.2-1.3 0-2.3-0.4-3.1h-5z"></path></g>
<g id="vaadin:subscript"><path d="M16 15v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:suitcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM4 14h-1v-10h1v10zM10 3h-4v-1h4v1zM13 14h-1v-10h1v10z"></path></g>
<g id="vaadin:sun-down"><path d="M10 3h-1v-2h-2v2h-1l2 3 2-3z"></path><path d="M14 13l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:sun-o"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6zM8 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"></path></g>
<g id="vaadin:sun-rise"><path d="M6 4h1v2h2v-2h1l-2-3-2 3z"></path><path d="M12.42 11.82l0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:superscript"><path d="M16 5v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:sword"><path d="M15.8 0.5l-0.1-0.2-0.2-0.1c-0.1 0-2.5-0.8-4.2 0.9l-6.7 6.6c-0.9-0.6-1.7-1.2-1.8-1l-0.4 0.3c-0.2 0.2 0.9 1.7 1.8 2.7l-2.5 3.4c-0.3-0.3-0.8-0.3-1.1 0l-0.3 0.3c-0.3 0.3-0.3 0.8 0 1.1l1 1c0.3 0.3 0.8 0.3 1.1 0l0.3-0.3c0.3-0.3 0.3-0.8 0-1.1v0l3.5-2.5c1 0.9 2.5 2 2.7 1.8l0.4-0.4c0.1-0.1-0.4-1-1.1-1.8l6.7-6.7c1.7-1.5 0.9-3.9 0.9-4zM7.7 10.5l-0.8-0.8 6.2-6.9-6.9 6.2-0.7-0.7 6.5-6.5c1-1 2.3-0.8 2.9-0.7 0.1 0.6 0.3 1.9-0.7 2.8l-6.5 6.6z"></path></g>
<g id="vaadin:tab-a"><path d="M9 10h-9v-4h9v-2l5 4-5 4v-2z"></path><path d="M14 4h2v8h-2v-8z"></path></g>
<g id="vaadin:tab"><path d="M0 2v12h16v-12h-16zM13 11h-1v-3l-3 3v-2h-6v-2h6v-2l3 3v-3h1v6z"></path></g>
<g id="vaadin:table"><path d="M0 1v15h16v-15h-16zM5 15h-4v-2h4v2zM5 12h-4v-2h4v2zM5 9h-4v-2h4v2zM5 6h-4v-2h4v2zM10 15h-4v-2h4v2zM10 12h-4v-2h4v2zM10 9h-4v-2h4v2zM10 6h-4v-2h4v2zM15 15h-4v-2h4v2zM15 12h-4v-2h4v2zM15 9h-4v-2h4v2zM15 6h-4v-2h4v2z"></path></g>
<g id="vaadin:tablet"><path d="M0 2v12h16v-12h-16zM13 13h-11v-10h11v10zM15 9h-1v-2h1v2z"></path></g>
<g id="vaadin:tabs"><path d="M14 4v-2h-14v12h16v-10h-2zM10 3h3v1h-3v-1zM6 3h3v1h-3v-1zM15 13h-14v-10h4v2h10v8z"></path></g>
<g id="vaadin:tag"><path d="M8 1h-7v7l7 7 7-7zM3.75 5c-0.69 0-1.25-0.56-1.25-1.25s0.56-1.25 1.25-1.25c0.69 0 1.25 0.56 1.25 1.25s-0.56 1.25-1.25 1.25z"></path></g>
<g id="vaadin:tags"><path d="M9 2h-1.5l7 7-5.3 5.2 0.8 0.8 6-6z"></path><path d="M6 2h-6v6l7 7 6-6-7-7zM2.8 6c-0.7 0-1.3-0.6-1.3-1.2s0.6-1.2 1.2-1.2 1.3 0.5 1.3 1.2-0.6 1.2-1.2 1.2z"></path></g>
<g id="vaadin:tasks"><path d="M6 0h10v4h-10v-4z"></path><path d="M6 6h10v4h-10v-4z"></path><path d="M6 12h10v4h-10v-4z"></path><path d="M3 1v2h-2v-2h2zM4 0h-4v4h4v-4z"></path><path d="M3 13v2h-2v-2h2zM4 12h-4v4h4v-4z"></path><path d="M5.3 5.9l-0.6-0.8-0.9 0.9h-3.8v4h4v-2.8l1.3-1.3zM2.7 7l-0.7 0.7-0.8-0.7h1.5zM1 8.2l0.9 0.8h-0.9v-0.8zM3 9h-0.9l0.9-0.9v0.9z"></path></g>
<g id="vaadin:taxi"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-2-1.2h-0.6v-1.3c0-0.4-0.3-0.7-0.7-0.7h-4.6c-0.4 0-0.7 0.3-0.7 0.7v1.3h-0.7c-0.8 0-1.6 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0 1.1 1 1.2v2c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-1.9h8v1.9c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c1-0.1 1-0.6 1-1.2v-3.5c0-0.5-0.4-1-1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:teeth"><path d="M4.6 7.6c-0.1 0.1-0.5 0.4-1.6 0.4 1.1 0 1.5 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.5-0.4-0.9 0-1.3-0.2-1.5-0.4z"></path><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c4.4 0 8-3.6 8-8s-3.6-8-8-8zM13.1 11.6c-1 0-1.4-0.8-1.6-1.6-0.2 0.9-0.6 2-1.8 2-1.1 0-1.5-1.1-1.7-2-0.2 1-0.6 2-1.7 2s-1.6-1.1-1.8-2c-0.2 0.8-0.6 1.6-1.6 1.6-2 0-1.9-3-1.9-3s0.2-0.6 1.7-0.6c-1.5 0-1.7-0.5-1.7-0.5s-0.1-3 1.9-3c1 0 1.4 0.8 1.6 1.6 0.2-0.9 0.6-2 1.8-2 1.1-0.1 1.5 1 1.7 1.9 0.2-1 0.6-2 1.7-2s1.6 1.1 1.8 2c0.2-0.8 0.6-1.6 1.6-1.6 2 0 1.9 3 1.9 3s-0.3 0.6-1.8 0.6c-1.2 0-1.6-0.3-1.8-0.4-0.2 0.2-0.7 0.4-1.6 0.4-1.2 0-1.6-0.2-1.8-0.4-0.1 0.1-0.6 0.4-1.6 0.4 1 0 1.4 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.8-0.4 1 0 1.4 0.2 1.7 0.4 0-0.1 0.5-0.4 1.7-0.4 1.5 0 1.8 0.6 1.8 0.6s0.1 3-1.9 3z"></path></g>
<g id="vaadin:terminal"><path d="M6 12h9v1h-9v-1z"></path><path d="M1.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path></g>
<g id="vaadin:text-height"><path d="M15 3h1l-1.5-3-1.5 3h1v10h-1l1.5 3 1.5-3h-1z"></path><path d="M1 0v3h4v13h3v-13h4v-3z"></path></g>
<g id="vaadin:text-input"><path d="M2 2h1v4h-1v-4z"></path><path d="M1 0c-0.6 0-1 0.4-1 1v14c0 0.6 0.4 1 1 1h15v-16h-15zM13 15h-12v-14h12v14zM15 15v0h-1v-1h1v1zM15 13h-1v-10h1v10zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:text-label"><path d="M12.5 4.9c-1.4 0-2.5 0.8-2.6 0.9l1.2 1.6c0 0 0.7-0.5 1.4-0.5 1.4 0 1.5 1.2 1.5 1.6-0.4-0.1-1.1-0.3-2-0.1-1.4 0.3-2.8 2-2.1 3.9 0.7 1.8 3.1 2.1 4.1 0.6v1h2v-5.3c0-2.7-1.9-3.7-3.5-3.7zM11.5 11.4c-0.1-1.9 1.5-1.9 2.5-1.8v1c0 1.2-2.3 2.3-2.5 0.8z"></path><path d="M6.9 14h2.1l-3.2-12h-2.7l-3.1 12h2.1l1-4h2.7l1.1 4zM3.6 8l0.8-3.2 0.9 3.2h-1.7z"></path></g>
<g id="vaadin:text-width"><path d="M15 14.5l-3-1.5v1h-9v-1l-3 1.5 3 1.5v-1h9v1z"></path><path d="M0 0v3h6v9h3v-9h6v-3z"></path></g>
<g id="vaadin:thin-square"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:thumbs-down-o"><path d="M15.6 7.3c0.1-0.3 0.3-0.7 0.2-1.2 0-0.6-0.3-1.1-0.5-1.3 0.1-0.3 0.1-0.6 0-1.1s-0.4-0.8-0.6-1c0.1-0.3 0.1-0.8-0.3-1.4-0.4-1-1.2-1.3-3.6-1.3-1.7 0-3.3 0.8-4.6 1.5-0.4 0.2-1 0.5-1.2 0.5v0h-5v9h5v-0.9l2.7 2.7 1 2.8c0.2 0.2 0.4 0.4 0.8 0.4h0.1c0 0 0 0 0 0 0.5 0 2-0.1 2.4-1.9 0.2-0.9-0.1-2.2-0.5-3.1h2.3c0.7-0.1 2.1-0.6 2.2-2.1 0-0.7-0.2-1.3-0.4-1.6zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1zM13.8 10h-2.5c-0.3 0-0.5 0.1-0.7 0.4-0.2 0.2-0.2 0.5-0.1 0.8 0.5 1.2 0.7 2.2 0.6 2.8-0.2 0.9-0.9 1.1-1.4 1.1l-1-2.7c0-0.1-0.1-0.2-0.2-0.3l-2.9-2.9c-0.1-0.1-0.3-0.2-0.5-0.2h-0.1v-6c0.4 0 0.8-0.2 1.7-0.6 1.1-0.6 2.7-1.4 4.1-1.4 2.5 0 2.7 0.4 2.9 0.7 0.3 0.5 0.1 0.9 0.1 0.9l-0.2 0.4 0.4 0.3c0 0 0.4 0.2 0.5 0.7 0.1 0.4 0 0.7 0 0.7l-0.3 0.3 0.3 0.3c0 0 0.4 0.3 0.4 0.9 0 0.5-0.2 0.7-0.2 0.7l-0.4 0.3 0.4 0.4c0 0 0.4 0.4 0.3 1.2 0 1.1-1.1 1.2-1.2 1.2z"></path></g>
<g id="vaadin:thumbs-down"><path d="M15.6 7.8c0 0 0.5 0.5 0.4 1.6 0 1.5-1.6 1.6-1.6 1.6h-2.4c-0.2 0-0.3 0.2-0.3 0.4 0.3 0.7 0.8 2.1 0.6 3.1-0.3 1.4-1.5 1.5-1.9 1.5-0.1 0-0.2-0.1-0.2-0.2l-1-2.8c0 0 0-0.1-0.1-0.1l-2.6-2.8c-0.1-0.1-0.2-0.1-0.3-0.1h-0.2v-7h0.2c0.7 0 3.2-2 5.4-2s2.7 0.3 3.1 1c0.4 0.7 0.1 1.3 0.1 1.3s0.5 0.3 0.6 1c0.1 0.7-0.1 1.1-0.1 1.1s0.5 0.4 0.5 1.2c0.1 0.9-0.2 1.2-0.2 1.2z"></path><path d="M0 11h5v-8h-5v8zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:thumbs-up-o"><path d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"></path></g>
<g id="vaadin:thumbs-up"><path d="M15.6 8.2c0 0 0.5-0.5 0.4-1.6 0-1.5-1.6-1.6-1.6-1.6h-2.4c-0.2 0-0.3-0.2-0.3-0.4 0.3-0.7 0.8-2.1 0.6-3.1-0.3-1.4-1.5-1.5-1.9-1.5-0.1 0-0.2 0.1-0.2 0.2l-1 2.8c0 0 0 0.1-0.1 0.1l-2.6 2.8c-0.1 0.1-0.2 0.1-0.3 0.1h-0.2v7h0.2c0.7 0 3.2 2 5.4 2s2.7-0.3 3.1-1c0.4-0.7 0.1-1.3 0.1-1.3s0.5-0.3 0.6-1c0.1-0.7-0.1-1.1-0.1-1.1s0.5-0.4 0.5-1.2c0.1-0.9-0.2-1.2-0.2-1.2z"></path><path d="M0 14h5v-8h-5v8zM2.5 10.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:ticket"><path d="M14 3h-12c0 1.1-0.9 2-2 2v6c1.1 0 2 0.9 2 2h12c0-1.1 0.9-2 2-2v0-6c-1.1 0-2-0.9-2-2zM13 12h-10v-8h10v8z"></path><path d="M4 5h8v6h-8v-6z"></path></g>
<g id="vaadin:time-backward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:time-forward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:timer"><path d="M9.060 9.060c0.271-0.271 0.439-0.646 0.439-1.060s-0.168-0.789-0.439-1.060c-0.59-0.59-6.72-4.6-6.72-4.6s4 6.13 4.59 6.72c0.272 0.274 0.649 0.444 1.065 0.444s0.793-0.17 1.065-0.444z"></path><path d="M8 0v3h1v-1.41c3.153 0.495 5.536 3.192 5.536 6.445 0 3.601-2.919 6.52-6.52 6.52s-6.52-2.919-6.52-6.52c0-1.256 0.355-2.428 0.97-3.423l-0.916-1.322c-0.958 1.303-1.533 2.939-1.533 4.71 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8-0.006 0-0.012 0-0.017 0z"></path></g>
<g id="vaadin:toolbox"><path d="M0 8h6v2h4v-2h6v6h-16z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M11 4v-2h-6v2h-5v3h6v-1h4v1h6v-3h-5zM6 4v-1h4v1h-4z"></path></g>
<g id="vaadin:tools"><path d="M10.3 8.2l-0.9 0.9 0.9 0.9-1.2 1.2 4.3 4.3c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1l-5.2-5.2zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path><path d="M3.6 8l0.9-0.6 1.5-1.7 0.9 0.9 0.9-0.9-0.1-0.1c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.1 1.6 3.7 3.6 4z"></path><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:tooth"><path d="M11.3 16c-1.2 0-1.7-3.9-1.7-4.1-0.1-1.3-1-2.1-1.6-2.2-0.6 0-1.4 0.9-1.6 2.2 0 0.2-0.5 4.1-1.7 4.1s-1.8-4.4-1.9-4.4c-0.2-1.4 0.1-3.4 0.2-4-0.4-1.2-1.8-5.6-0.5-7 0.5-0.4 1.1-0.6 1.9-0.6 0.6 0 1.3 0.1 2 0.3 0.6 0.1 1.1 0.2 1.6 0.2s1-0.1 1.6-0.2c0.7-0.2 1.4-0.3 2-0.3 0.8 0 1.4 0.2 1.8 0.7 1.3 1.4-0.1 5.8-0.5 7 0.1 0.5 0.4 2.5 0.2 3.9 0.1 0-0.5 4.4-1.8 4.4zM8 8.7c1.3 0.1 2.4 1.4 2.6 3.1 0.1 1.2 0.5 2.4 0.7 2.9 0.3-0.6 0.7-2.1 0.9-3.3 0.2-1.4-0.2-3.7-0.2-3.7v-0.2c0.7-2.1 1.4-5.3 0.8-6.1-0.3-0.3-0.7-0.4-1.2-0.4s-1.2 0.1-1.8 0.3c-0.6 0.1-1.2 0.2-1.8 0.2s-1.2-0.1-1.8-0.2c-0.6-0.2-1.3-0.3-1.8-0.3s-0.9 0.1-1.1 0.4c-0.7 0.7 0 4 0.8 6.1v0.2c0 0-0.4 2.3-0.2 3.7 0.2 1.2 0.6 2.7 0.9 3.3 0.2-0.6 0.6-1.7 0.7-2.9 0.1-1.6 1.2-3 2.5-3.1z"></path></g>
<g id="vaadin:touch"><path d="M12.62 6c-0.093-0.023-0.2-0.036-0.31-0.036s-0.217 0.013-0.319 0.038c-0.045-0.33-0.192-0.616-0.402-0.843-0.257-0.259-0.614-0.42-1.008-0.42-0.018 0-0.036 0-0.053 0.001-0-0-0.004-0-0.007-0-0.22 0-0.43 0.044-0.621 0.124-0.062-0.183-0.163-0.336-0.29-0.464-0.261-0.25-0.617-0.403-1.008-0.403-0.036 0-0.072 0.001-0.107 0.004l0.005-0c0.315-0.414 0.505-0.938 0.505-1.506 0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 0.813 0.388 1.535 0.989 1.992l0.006 2.664c-0.554 0.015-1.054 0.233-1.432 0.581-0.568 0.619-0.568 1.579-0.568 2.779 0 0.23 0 0.47 0 0.72 0.032 1.127 0.573 2.121 1.402 2.764l0.358 0.356c1.24 1.27 2.38 1.65 5.020 1.65 2.88 0 4.22-1.61 4.22-5.060v-2.51c0-0.77-0.22-2.12-1.38-2.43zM13 8.35v2.59c0 3.37-1.29 4.060-3.22 4.060-2.6 0-3.4-0.39-4.3-1.33l-0.36-0.37c-0.657-0.468-1.088-1.215-1.12-2.065-0-0.265-0-0.505-0-0.735-0.033-0.178-0.053-0.383-0.053-0.592 0-0.538 0.126-1.047 0.351-1.498 0.186-0.132 0.431-0.228 0.698-0.24l0.003 0.7v-0.22l-0.34 1.5c-0.010 0.022-0.016 0.048-0.016 0.075 0 0.103 0.083 0.186 0.186 0.186 0.075 0 0.14-0.045 0.17-0.11l1-1.211c0.003-0.014 0.005-0.029 0.005-0.045s-0.002-0.031-0.005-0.046l0-5.609c-0-0.012-0.001-0.026-0.001-0.039 0-0.256 0.083-0.492 0.223-0.684 0.091-0.096 0.223-0.158 0.369-0.158 0.010 0 0.020 0 0.030 0.001-0.001-0-0.001-0-0.001-0 0.21 0 0.38 0.17 0.38 0.38 0 0.004-0 0.007-0 0.011l0 3.869c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.32c0.010-0.251 0.217-0.451 0.47-0.451 0.011 0 0.021 0 0.032 0.001 0.023-0.005 0.051-0.008 0.079-0.008 0.232 0 0.42 0.188 0.42 0.42 0 0.010-0 0.020-0.001 0.029l0 1.329c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.64c0.034-0.218 0.22-0.383 0.445-0.383 0.019 0 0.038 0.001 0.057 0.004 0.013-0.002 0.030-0.003 0.047-0.003 0.112 0 0.214 0.043 0.291 0.113 0.1 0.129 0.16 0.294 0.16 0.473 0 0.006-0 0.012-0 0.017l0 0.819c0.003 0.252 0.193 0.459 0.438 0.49 0.021 0.003 0.043 0.004 0.066 0.004 0.241 0 0.442-0.166 0.496-0.39 0.026-0.112 0.082-0.204 0.16-0.273 0.033-0.015 0.071-0.024 0.111-0.024s0.078 0.009 0.112 0.024c0.38 0.249 0.628 0.674 0.628 1.157 0 0.057-0.003 0.113-0.010 0.169l0.001-0.007z"></path></g>
<g id="vaadin:train"><path d="M13 11.2v-7.4c0-1-0.8-1.8-1.8-1.8h-2.2v-1h2v-1h-6v1h2v1h-2.2c-1 0-1.8 0.8-1.8 1.8v7.4c0 1 0.8 1.8 1.8 1.8h0.2l-0.7 1h-1.3v1h0.7l-0.7 1h2l0.6-1h4.9l0.6 1h2l-0.7-1h0.6v-1h-1.3l-0.7-1h0.2c1 0 1.8-0.8 1.8-1.8zM4 3.9c0-0.5 0.4-0.9 0.9-0.9h6.1c0.6 0 1 0.4 1 0.9v2.1c0 0.6-0.4 1-0.9 1h-6.2c-0.5 0-0.9-0.4-0.9-0.9v-2.2zM4 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1zM9.9 14h-3.8l0.6-1h2.6l0.6 1zM10 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1z"></path></g>
<g id="vaadin:trash"><path d="M13 3s0-0.51-2-0.8v-0.7c-0.017-0.832-0.695-1.5-1.53-1.5-0 0-0 0-0 0h-3c-0.815 0.017-1.47 0.682-1.47 1.5 0 0 0 0 0 0v0.7c-0.765 0.068-1.452 0.359-2.007 0.806l-0.993-0.006v1h12v-1h-1zM6 1.5c0.005-0.274 0.226-0.495 0.499-0.5l3.001-0c0 0 0.001 0 0.001 0 0.282 0 0.513 0.22 0.529 0.499l0 0.561c-0.353-0.042-0.763-0.065-1.178-0.065-0.117 0-0.233 0.002-0.349 0.006-0.553-0-2.063-0-2.503 0.070v-0.57z"></path><path d="M2 5v1h1v9c1.234 0.631 2.692 1 4.236 1 0.002 0 0.003 0 0.005 0h1.52c0.001 0 0.003 0 0.004 0 1.544 0 3.002-0.369 4.289-1.025l-0.054-8.975h1v-1h-12zM6 13.92q-0.51-0.060-1-0.17v-6.75h1v6.92zM9 14h-2v-7h2v7zM11 13.72c-0.267 0.070-0.606 0.136-0.95 0.184l-0.050-6.904h1v6.72z"></path></g>
<g id="vaadin:tree-table"><path d="M6 10v-2h-2v-1h1v-2h-3v2h1v6h3v-2h-2v-1z"></path><path d="M0 0v16h16v-16h-16zM7 15h-6v-12h6v12zM11 15h-3v-12h3v12zM15 15h-3v-12h3v12z"></path></g>
<g id="vaadin:trendind-down"><path d="M16 14h-4l1.29-1.29-4.29-4.3-3 3-6-6v-2.82l6 6 3-3 5.71 5.7 1.28-1.29 0.010 4z"></path></g>
<g id="vaadin:trending-down"><path d="M16 14h-4l1.29-1.29-4.29-4.3-3 3-6-6v-2.82l6 6 3-3 5.71 5.7 1.28-1.29 0.010 4z"></path></g>
<g id="vaadin:trending-up"><path d="M16 2h-4l1.29 1.29-4.29 4.3-3-3-6 6v2.82l6-6 3 3 5.71-5.7 1.28 1.29 0.010-4z"></path></g>
<g id="vaadin:trophy"><path d="M11.7 8c4.2-0.3 4.3-2.7 4.3-5h-3v-3h-10v3h-3c0 2.3 0.1 4.7 4.3 5 0.9 1.4 2.1 2 2.7 2v4c-3 0-3 2-3 2h8c0 0 0-2-3-2v-4c0.6 0 1.8-0.6 2.7-2zM13 4h2c-0.1 1.6-0.4 2.7-2.7 2.9 0.3-0.8 0.6-1.7 0.7-2.9zM1 4h2c0.1 1.2 0.4 2.1 0.7 2.9-2.2-0.2-2.6-1.3-2.7-2.9zM4.5 6.1c-0.5-1.7-0.5-3.1-0.5-3.1v-2h1v2c0 0 0 1.7 0.4 3.1 0.5 1.7 1.6 2.9 1.6 2.9s-1.8-0.2-2.5-2.9z"></path></g>
<g id="vaadin:truck"><path d="M6 3h10v7h-10v-7z"></path><path d="M15 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13 11c1.3 0 2.4 0.8 2.8 2h0.2v-2h-3z"></path><path d="M5 5h-4l-1 4v4h1.2c0.4-1.2 1.5-2 2.8-2s2.4 0.8 2.8 2h3.4c0.4-1.2 1.5-2 2.8-2h-8v-6zM4 9h-3l0.8-3h2.2v3z"></path><path d="M6 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:twin-col-select"><path d="M0 2v12h16v-12h-16zM7 13h-6v-10h6v10zM15 13h-6v-10h6v10z"></path><path d="M10 4h4v1h-4v-1z"></path><path d="M2 4h4v1h-4v-1z"></path><path d="M2 6h4v1h-4v-1z"></path><path d="M2 8h4v1h-4v-1z"></path></g>
<g id="vaadin:twitter-square"><path d="M0 0v16h16v-16h-16zM12.8 5.6c0 0.1 0 0.2 0 0.3 0 3.3-2.5 7-7 7-1.4 0-2.7-0.4-3.8-1.1 0.2 0 0.4 0 0.6 0 1.2 0 2.2-0.4 3.1-1.1-1.1 0-2-0.7-2.3-1.7 0.2 0 0.3 0 0.5 0s0.4 0 0.6-0.1c-1.1-0.2-2-1.2-2-2.4 0 0 0 0 0 0 0.3 0.2 0.7 0.3 1.1 0.3-0.7-0.4-1.1-1.2-1.1-2 0-0.5 0.1-0.9 0.3-1.2 1.2 1.5 3.1 2.4 5.1 2.5 0-0.2-0.1-0.4-0.1-0.6 0-1.4 1.1-2.5 2.5-2.5 0.7 0 1.3 0.3 1.8 0.8 0.6-0.1 1.1-0.3 1.6-0.6-0.2 0.6-0.6 1.1-1.1 1.4 0.5-0.1 1-0.2 1.4-0.4-0.3 0.6-0.7 1-1.2 1.4z"></path></g>
<g id="vaadin:twitter"><path d="M16 3c-0.6 0.3-1.2 0.4-1.9 0.5 0.7-0.4 1.2-1 1.4-1.8-0.6 0.4-1.3 0.6-2.1 0.8-0.6-0.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 0.3 0 0.5 0.1 0.7-2.7-0.1-5.2-1.4-6.8-3.4-0.3 0.5-0.4 1-0.4 1.7 0 1.1 0.6 2.1 1.5 2.7-0.5 0-1-0.2-1.5-0.4 0 0 0 0 0 0 0 1.6 1.1 2.9 2.6 3.2-0.3 0.1-0.6 0.1-0.9 0.1-0.2 0-0.4 0-0.6-0.1 0.4 1.3 1.6 2.3 3.1 2.3-1.1 0.9-2.5 1.4-4.1 1.4-0.3 0-0.5 0-0.8 0 1.5 0.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3 0-0.1 0-0.3 0-0.4 0.7-0.5 1.3-1.1 1.7-1.8z"></path></g>
<g id="vaadin:umbrella"><path d="M5.36 0.9l-0.27-0.57c-0.083-0.197-0.275-0.333-0.499-0.333-0.1 0-0.193 0.027-0.274 0.074-0.217 0.074-0.372 0.279-0.372 0.52 0 0.087 0.020 0.169 0.056 0.242l0.319 0.577c-6.2 3.49-3.9 10.59-3.9 10.59h0.060c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21l0.12-0.060c0.477-0.742 0.998-1.387 1.58-1.97l3.37 7.070c0.246 0.619 0.729 1.098 1.334 1.335 0.168 0.053 0.343 0.080 0.524 0.080 0.254 0 0.495-0.053 0.713-0.149l0.359-0.176c0.263-0.145 0.462-0.38 0.558-0.662 0.117-0.276 0.183-0.586 0.183-0.913 0-0.401-0.1-0.778-0.277-1.108-0.102-0.189-0.311-0.324-0.551-0.324-0.076 0-0.149 0.014-0.217 0.038-0.182 0.089-0.308 0.277-0.308 0.495 0 0.093 0.023 0.18 0.064 0.257s0.529 1.067-0.101 1.337-1.19-0.73-1.19-0.73l-3.42-7.060c0.372-0.043 0.803-0.067 1.24-0.067s0.868 0.024 1.292 0.072l0.068-0.065c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21h0.060s-3.98-6.41-10.62-3.58zM7.36 6.36c-1.034 0.399-1.834 1.209-2.211 2.224-0.55-1.082-0.909-2.375-1.007-3.74-0.142-2.244 0.608-2.924 0.608-2.924l0.77-0.32c1.084 0.101 2.052 0.534 2.816 1.195 0.976 0.895 1.747 2.009 2.233 3.265-0.339-0.021-0.752-0.067-1.175-0.067-0.724 0-1.417 0.134-2.054 0.379z"></path></g>
<g id="vaadin:underline"><path d="M2 15h12v1h-12v-1z"></path><path d="M11 0v8.4c0 1.5-1.1 2.6-2.6 2.6h-0.8c-1.5 0-2.6-1.1-2.6-2.6v-8.4h-3v8.4c0 3.1 2.5 5.6 5.6 5.6h0.9c3.1 0 5.6-2.5 5.6-5.6v-8.4h-3.1z"></path></g>
<g id="vaadin:unlink"><path d="M8 0h1v4h-1v-4z"></path><path d="M8 12h1v4h-1v-4z"></path><path d="M7 9h-4c-0.552 0-1-0.448-1-1s0.448-1 1-1h4v-2h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h4v-2z"></path><path d="M13 5h-4v2h4c0.552 0 1 0.448 1 1s-0.448 1-1 1h-4v2h4c1.657 0 3-1.343 3-3s-1.343-3-3-3z"></path><path d="M4.51 15.44l2.49-3.44h-1.23l-2.080 2.88 0.82 0.56z"></path><path d="M12.49 15.44l-2.49-3.44h1.23l2.080 2.88-0.82 0.56z"></path><path d="M12.49 0.99l-2.49 3.010h1.23l2.080-2.66-0.82-0.35z"></path><path d="M4.51 0.99l2.49 3.010h-1.23l-2.080-2.66 0.82-0.35z"></path></g>
<g id="vaadin:unlock"><path d="M8 8v-3.1c0-2.2-1.8-3.9-3.9-3.9h-0.3c-2.2 0-3.8 1.7-3.8 3.9v2.1h2v-2.1c0-1.1 0.7-1.9 1.8-1.9h0.3c1 0 1.9 0.8 1.9 1.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-7zM11 14h-1v-1.8c-0.6 0-1-0.6-1-1.1 0-0.6 0.4-1.1 1-1.1s1 0.4 1 0.9v3.1z"></path></g>
<g id="vaadin:upload-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 0l-5 5h3v8h4v-8h3z"></path></g>
<g id="vaadin:upload"><path d="M11 10v2h-6v-2h-5v6h16v-6h-5zM4 14h-2v-2h2v2z"></path><path d="M13 5l-5-5-5 5h3v6h4v-6z"></path></g>
<g id="vaadin:user-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path><path d="M5.4 7h-0.4v-0.1c0.6-0.2 1-0.8 1-1.4 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.7 0.4 1.2 1 1.4v0.1h-0.4c-0.9 0-1.6 0.7-1.6 1.6v2.4h5v-2.4c0-0.9-0.7-1.6-1.6-1.6z"></path></g>
<g id="vaadin:user-check"><path d="M7.5 14.4c-0.8-0.8-0.8-2 0-2.8s2-0.8 2.8 0l0.6 0.6 1.9-2.1c-0.7-0.4-1.3-0.4-2-0.4-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h8l-1.6-1.6z"></path><path d="M12.8 16h2.1c0 0-0.1-0.9-0.2-2l-1.9 2z"></path><path d="M11 16c-0.3 0-0.5-0.1-0.7-0.3l-2-2c-0.4-0.4-0.4-1 0-1.4s1-0.4 1.4 0l1.3 1.3 3.3-3.6c0.4-0.4 1-0.4 1.4-0.1 0.4 0.4 0.4 1 0.1 1.4l-4 4.3c-0.3 0.3-0.5 0.4-0.8 0.4 0 0 0 0 0 0z"></path></g>
<g id="vaadin:user-clock"><path d="M14 13h-3v-3h1v2h2z"></path><path d="M16 12.5c0-2.5-2-4.5-4.5-4.5-0.7 0-1.4 0.2-2 0.5 0.2-0.3 0.8-0.3 1.4-1.2 0 0 2.7-7.3-2.9-7.3s-2.9 7.3-2.9 7.3c0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h10.4c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5h3.4c0 0 0-0.2 0-0.5 0.6-0.8 1.1-1.8 1.1-3z"></path></g>
<g id="vaadin:user-heart"><path d="M14.2 16h0.6c0 0 0-0.2 0-0.6l-0.6 0.6z"></path><path d="M8.6 13.9c-0.7-0.7-1-1.8-0.8-2.8s0.8-1.8 1.7-2.1c0-0.1-0.1-0.2-0.1-0.2 0-0.6 0.8-0.4 1.4-1.5 0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h9.6l-2.1-2.1z"></path><path d="M14.9 10.1c-0.2-0.1-0.5-0.1-0.7-0.1-0.7 0-1.3 0.6-1.7 1.1-0.4-0.5-1-1.1-1.7-1.1-0.3 0-0.5 0-0.7 0.1-1.2 0.4-1.4 2-0.5 2.9l3 2.9 3-2.9c0.8-0.9 0.5-2.5-0.7-2.9z"></path></g>
<g id="vaadin:user-star"><path d="M8.92 13.67l-1.61-1.53-1.5-1.42 2-0.29 2.25-0.32 0.29-0.57c-0.006 0-0.013 0-0.020 0-0.482 0-0.884-0.34-0.979-0.794-0.001-0.617 0.799-0.417 1.429-1.457 0.080-0.020 2.82-7.29-2.78-7.29s-2.86 7.27-2.86 7.27c0.63 1 1.44 0.85 1.43 1.45s-0.74 0.8-1.43 0.87c-1.14 0.13-2.14-0.13-3.14 1.76-0.6 1.090-0.85 4.65-0.85 4.65h7.36v-0.17z"></path><path d="M11.72 16h0.56l-0.28-0.14-0.28 0.14z"></path><path d="M12 14.73l2.47 1.27-0.47-2.69 2-1.9-2.76-0.39-1.24-2.45-1.24 2.45-2.76 0.39 2 1.9-0.47 2.69 2.47-1.27z"></path></g>
<g id="vaadin:user"><path d="M8 0c-5.6 0-2.9 7.3-2.9 7.3 0.6 1 1.4 0.8 1.4 1.5 0 0.6-0.7 0.8-1.4 0.9-1.1 0-2.1-0.2-3.1 1.6-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0 0-0.3-3.6-0.8-4.7-1-1.9-2-1.6-3.1-1.7-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0.1 2.7-7.2-2.9-7.2z"></path></g>
<g id="vaadin:users"><path d="M5.3 9.7c-0.4 0-0.9-0.2-0.9-0.6s0.5-0.3 0.9-1c0 0 1.8-4.9-1.8-4.9s-1.8 4.9-1.8 4.9c0.4 0.7 0.9 0.6 0.9 1s-0.5 0.6-0.9 0.6c-0.6 0.1-1.1 0-1.7 0.6v5.7h5c0.2-1.7 0.7-5.2 1.1-6.1 0 0 0.1-0.1 0.1-0.1-0.2-0.1-0.5-0.1-0.9-0.1z"></path><path d="M16 9.5c-0.7-0.8-1.3-0.7-2-0.8-0.5-0.1-1.1-0.2-1.1-0.7s0.6-0.3 1.1-1.2c0 0 2.1-5.9-2.2-5.9-4.4 0.1-2.3 6-2.3 6 0.5 0.8 1.1 0.7 1.1 1.1 0 0.5-0.6 0.6-1.1 0.7-0.9 0.1-1.7 0-2.5 1.5-0.4 0.9-1 5.8-1 5.8h10v-6.5z"></path></g>
<g id="vaadin:vaadin-h"><path d="M15.21 0.35c-0.436 0-0.79 0.354-0.79 0.79v0 0.46c0 0.5-0.32 0.85-1.070 0.85h-3.55c-1.61 0-1.73 1.19-1.8 1.83v0c-0.060-0.64-0.18-1.83-1.79-1.83h-3.57c-0.75 0-1.090-0.37-1.090-0.86v-0.45c0-0.006 0-0.013 0-0.020 0-0.425-0.345-0.77-0.77-0.77-0 0-0 0-0 0h0c-0 0-0 0-0 0-0.431 0-0.78 0.349-0.78 0.78 0 0.004 0 0.007 0 0.011v-0.001 1.32c0 1.54 0.7 2.31 2.34 2.31h3.66c1.090 0 1.19 0.46 1.19 0.9 0 0 0 0.090 0 0.13 0.048 0.428 0.408 0.758 0.845 0.758s0.797-0.33 0.845-0.754l0-0.004s0-0.080 0-0.13c0-0.44 0.1-0.9 1.19-0.9h3.61c1.61 0 2.32-0.77 2.32-2.31v-1.32c0-0.436-0.354-0.79-0.79-0.79v0z"></path><path d="M11.21 7.38c-0.012-0-0.026-0.001-0.040-0.001-0.453 0-0.835 0.301-0.958 0.714l-0.002 0.007-2.21 4.21-2.3-4.2c-0.122-0.425-0.507-0.731-0.963-0.731-0.013 0-0.026 0-0.039 0.001l0.002-0c-0.012-0-0.025-0.001-0.039-0.001-0.58 0-1.050 0.47-1.050 1.050 0 0.212 0.063 0.41 0.171 0.575l-0.002-0.004 3.29 6.1c0.15 0.333 0.478 0.561 0.86 0.561s0.71-0.228 0.858-0.555l0.002-0.006 3.34-6.1c0.090-0.152 0.144-0.335 0.144-0.53 0-0.58-0.47-1.050-1.050-1.050-0.005 0-0.010 0-0.014 0h0.001z"></path></g>
<g id="vaadin:vaadin-v"><path d="M5.8 7.16h-0.13c-0.44 0-0.9-0.1-0.9-1.19v-3.62c0-1.64-0.77-2.35-2.31-2.35h-1.32c-0.436 0-0.79 0.354-0.79 0.79v0c0 0.436 0.354 0.79 0.79 0.79v0h0.46c0.5 0 0.85 0.32 0.85 1.070v3.55c0 1.61 1.19 1.73 1.83 1.8v0c-0.64 0.060-1.83 0.18-1.83 1.79v3.55c0 0.75-0.37 1.090-0.86 1.090h-0.45c-0.006-0-0.013-0-0.020-0-0.425 0-0.77 0.345-0.77 0.77 0 0 0 0 0 0v-0c0 0 0 0 0 0 0 0.431 0.349 0.78 0.78 0.78 0.004 0 0.007-0 0.011-0h1.319c1.54 0 2.31-0.7 2.31-2.34v-3.59c0-1.090 0.46-1.19 0.9-1.19h0.13c0.428-0.048 0.758-0.408 0.758-0.845s-0.33-0.797-0.754-0.845l-0.004-0z"></path><path d="M15.1 7.19v0l-6.1-3.32c-0.152-0.090-0.335-0.144-0.53-0.144-0.58 0-1.050 0.47-1.050 1.050 0 0.005 0 0.010 0 0.014v-0.001c-0 0.012-0.001 0.026-0.001 0.040 0 0.453 0.301 0.835 0.714 0.958l0.007 0.002 4.21 2.26-4.24 2.25c-0.425 0.122-0.731 0.507-0.731 0.963 0 0.013 0 0.026 0.001 0.039l-0-0.002c-0 0.012-0.001 0.025-0.001 0.039 0 0.58 0.47 1.050 1.050 1.050 0.212 0 0.41-0.063 0.575-0.171l-0.004 0.002 6.1-3.29c0.333-0.15 0.561-0.478 0.561-0.86s-0.228-0.71-0.555-0.858l-0.006-0.002z"></path></g>
<g id="vaadin:viewport"><path d="M1 4h-1v-4h4v1h-3z"></path><path d="M12 1v-1h4v4h-1v-3z"></path><path d="M15 12h1v4h-4v-1h3z"></path><path d="M4 15v1h-4v-4h1v3z"></path><path d="M13 3v10h-10v-10h10zM14 2h-12v12h12v-12z"></path></g>
<g id="vaadin:vimeo-square"><path d="M0 0v16h16v-16h-16zM13.9 5.3c-0.7 3.8-4.4 7-5.5 7.7s-2.2-0.3-2.5-1.1c-0.4-0.9-1.7-5.7-2-6.1-0.4-0.3-1.4 0.5-1.4 0.5l-0.5-0.7c0 0 2-2.4 3.6-2.7s1.6 2.5 2 4.1c0.4 1.5 0.6 2.4 1 2.4 0.3 0 1-0.9 1.7-2.2s0-2.5-1.4-1.6c0.5-3.3 5.7-4.1 5-0.3z"></path></g>
<g id="vaadin:vimeo"><path d="M15.9 4.4c-0.9 5-5.9 9.3-7.4 10.3s-2.9-0.4-3.4-1.4c-0.5-1.3-2.2-7.6-2.7-8.2-0.4-0.5-1.8 0.6-1.8 0.6l-0.6-0.9c0 0 2.7-3.3 4.8-3.7 2.2-0.4 2.2 3.4 2.7 5.5 0.5 2 0.9 3.2 1.3 3.2s1.3-1.1 2.2-2.9c0.9-1.7 0-3.3-1.9-2.2 0.8-4.3 7.7-5.4 6.8-0.3z"></path></g>
<g id="vaadin:volume-down"><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-off"><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-up"><path d="M15 8.5c0 2.3-0.8 4.5-2 6.2l0.7 0.8c1.5-1.9 2.4-4.4 2.4-7 0-3.1-1.2-5.9-3.2-8l-0.5 1c1.6 1.8 2.6 4.3 2.6 7z"></path><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume"><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:wallet"><path d="M14.5 4h-12.12c-0.057 0.012-0.123 0.018-0.19 0.018-0.552 0-1-0.448-1-1 0-0.006 0-0.013 0-0.019l12.81-0.499v-1.19c0.005-0.041 0.008-0.089 0.008-0.138 0-0.652-0.528-1.18-1.18-1.18-0.049 0-0.097 0.003-0.144 0.009l-11.374 1.849c-0.771 0.289-1.31 1.020-1.31 1.877 0 0.011 0 0.023 0 0.034l-0 10.728c-0 0.003-0 0.006-0 0.010 0 0.828 0.672 1.5 1.5 1.5 0 0 0 0 0 0h13c0 0 0 0 0 0 0.828 0 1.5-0.672 1.5-1.5 0-0.004-0-0.007-0-0.011v-8.999c0-0.012 0.001-0.027 0.001-0.041 0-0.801-0.649-1.45-1.45-1.45-0.018 0-0.036 0-0.053 0.001zM13 11c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:warning"><path d="M8 1l-8 14h16l-8-14zM8 13c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM7 10v-4h2v4h-2z"></path></g>
<g id="vaadin:workplace"><path d="M11,3 L11,0 L2,0 L2,14 L0,14 L0,15 L7,15 L7,10 L9,10 L9,8 L14,8 L14,3 L11,3 Z M6,10 L4,10 L4,8 L6,8 L6,10 Z M6,7 L4,7 L4,5 L6,5 L6,7 Z M6,4 L4,4 L4,2 L6,2 L6,4 Z M9,7 L7,7 L7,5 L9,5 L9,7 Z M9,4 L7,4 L7,2 L9,2 L9,4 Z M13,7 L11,7 L11,5 L13,5 L13,7 Z M14,11 L16,11 L16,16 L8,16 L8,11 L10,11 L10,9 L14,9 L14,11 Z" fill-rule="nonzero"></path></g>
<g id="vaadin:wrench"><path d="M15.5 13.4l-7.8-7.8c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.2 1.8 4 4 4 0.6 0 1.1-0.1 1.6-0.3l7.8 7.8c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1zM6.8 7.6l-1.4-1.4 0.9-0.9 1.4 1.4-0.9 0.9zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path></g>
<g id="vaadin:youtube-square"><path d="M7.9 6c0.2 0 0.3-0.2 0.3-0.5v-1.4c0-0.3-0.1-0.5-0.3-0.5s-0.3 0.2-0.3 0.5v1.4c0 0.3 0.1 0.5 0.3 0.5z"></path><path d="M7.1 11.9c-0.1 0.2-0.3 0.3-0.4 0.3s-0.1 0-0.1-0.1c0 0 0-0.1 0-0.2v-2.5h-0.6v2.6c0 0.2 0 0.4 0.1 0.5 0.1 0.2 0.2 0.2 0.4 0.2s0.4-0.1 0.7-0.4v0.4h0.6v-3.3h-0.7v2.5z"></path><path d="M3.8 8.9h0.7v3.8h0.7v-3.8h0.7v-0.7h-2.1z"></path><path d="M9.4 9.3c-0.2 0-0.4 0.2-0.6 0.4v-1.5h-0.6v4.4h0.6v-0.3c0.2 0.2 0.4 0.4 0.6 0.4s0.4-0.1 0.5-0.4c0-0.1 0.1-0.4 0.1-0.7v-1.3c0-0.3 0-0.5-0.1-0.7-0.1-0.1-0.2-0.3-0.5-0.3zM9.4 11.7c0 0.3-0.1 0.4-0.3 0.4-0.1 0-0.2 0-0.3-0.1v-2c0.1-0.1 0.2-0.1 0.3-0.1 0.2 0 0.3 0.2 0.3 0.5v1.3z"></path><path d="M11.3 9.3c-0.3 0-0.5 0.1-0.7 0.3-0.1 0.2-0.2 0.4-0.2 0.8v1.2c0 0.4 0.1 0.6 0.2 0.8 0.2 0.2 0.4 0.3 0.7 0.3s0.6-0.1 0.7-0.4c0.1-0.1 0.1-0.2 0.1-0.4 0-0.1 0-0.2 0-0.4v-0.1h-0.6c0 0.2 0 0.4 0 0.4 0 0.2-0.1 0.2-0.3 0.2s-0.3-0.2-0.3-0.5v-0.6h1.2v-0.7c0-0.4-0.1-0.6-0.2-0.8 0 0.1-0.3-0.1-0.6-0.1zM11.6 10.6h-0.6v-0.3c0-0.3 0.1-0.5 0.3-0.5s0.3 0.2 0.3 0.5v0.3z"></path><path d="M0 0v16h16v-16h-16zM9.3 3.1h0.6v2.5c0 0.1 0 0.2 0 0.2 0 0.1 0 0.2 0.1 0.2s0.2-0.1 0.4-0.3v-2.6h0.6v3.3h-0.6v-0.3c-0.2 0.3-0.5 0.4-0.7 0.4s-0.3-0.1-0.4-0.2c0-0.1-0.1-0.3-0.1-0.5v-2.7zM7 4.2c0-0.3 0-0.6 0.2-0.8s0.4-0.3 0.7-0.3c0.3 0 0.5 0.1 0.7 0.3 0.1 0.2 0.2 0.4 0.2 0.8v1.2c0 0.4-0.1 0.6-0.2 0.8-0.2 0.2-0.4 0.3-0.7 0.3s-0.5-0.1-0.7-0.3c-0.2-0.2-0.2-0.4-0.2-0.8v-1.2zM5.3 2l0.5 1.8 0.5-1.8h0.7l-0.8 2.7v1.8h-0.7v-1.8c-0.1-0.4-0.2-0.8-0.4-1.5-0.2-0.4-0.3-0.8-0.5-1.2h0.7zM12.8 12.9c-0.1 0.5-0.6 0.9-1.1 1-1.2 0.1-2.5 0.1-3.7 0.1s-2.5 0-3.7-0.1c-0.5-0.1-1-0.4-1.1-1-0.2-0.8-0.2-1.6-0.2-2.4 0-0.7 0-1.5 0.2-2.3 0.1-0.5 0.6-0.9 1.1-1 1.2-0.1 2.5-0.1 3.7-0.1s2.5 0 3.7 0.1c0.5 0.1 1 0.4 1.1 1 0.2 0.8 0.2 1.6 0.2 2.3 0 0.8 0 1.6-0.2 2.4z"></path></g>
<g id="vaadin:youtube"><path d="M6.6 0h-0.9l-0.6 2.3-0.6-2.3h-1c0.2 0.6 0.4 1.1 0.6 1.7 0.3 0.8 0.5 1.5 0.5 1.9v2.4h0.9v-2.4l1.1-3.6zM9 4.5v-1.5c0-0.5-0.1-0.8-0.3-1.1s-0.5-0.4-0.9-0.4c-0.4 0-0.7 0.2-0.9 0.5-0.2 0.2-0.3 0.5-0.3 1v1.6c0 0.5 0.1 0.8 0.3 1 0.2 0.3 0.5 0.4 0.9 0.4s0.7-0.2 0.9-0.5c0.2-0.1 0.3-0.5 0.3-1zM8.2 4.7c0 0.4-0.1 0.6-0.4 0.6s-0.4-0.2-0.4-0.6v-1.9c0-0.4 0.1-0.6 0.4-0.6s0.4 0.2 0.4 0.6v1.9zM12 6v-4.5h-0.8v3.4c-0.2 0.3-0.3 0.4-0.5 0.4-0.1 0-0.2-0.1-0.2-0.2 0 0 0-0.1 0-0.3v-3.3h-0.8v3.5c0 0.3 0 0.5 0.1 0.7 0 0.2 0.2 0.3 0.5 0.3s0.6-0.2 0.9-0.5v0.5h0.8z"></path><path d="M12.4 10.5c-0.3 0-0.4 0.2-0.4 0.6v0.4h0.8v-0.4c0-0.4-0.1-0.6-0.4-0.6z"></path><path d="M9.5 10.5c-0.1 0-0.3 0.1-0.4 0.2v2.7c0.1 0.1 0.3 0.2 0.4 0.2 0.2 0 0.3-0.2 0.3-0.6v-1.9c0-0.4-0.1-0.6-0.3-0.6z"></path><path d="M14.4 8.3c-0.2-0.7-0.8-1.3-1.4-1.3-1.6-0.2-3.3-0.2-5-0.2s-3.3 0-5 0.2c-0.6 0-1.2 0.6-1.4 1.3-0.2 1-0.2 2.1-0.2 3.1s0 2.1 0.2 3.1c0.2 0.7 0.7 1.2 1.4 1.3 1.7 0.2 3.3 0.2 5 0.2s3.3 0 5-0.2c0.7-0.1 1.3-0.6 1.4-1.3 0.2-1 0.2-2.1 0.2-3.1s0-2.1-0.2-3.1zM5.2 9.2h-1v5.1h-0.9v-5.1h-0.9v-0.9h2.8v0.9zM7.6 14.3h-0.8v-0.5c-0.3 0.4-0.6 0.5-0.9 0.5s-0.4-0.1-0.5-0.3c0-0.1-0.1-0.3-0.1-0.7v-3.5h0.8v3.2c0 0.2 0 0.3 0 0.3 0 0.1 0.1 0.2 0.2 0.2 0.2 0 0.3-0.1 0.5-0.4v-3.3h0.8v4.5zM10.6 12.9c0 0.4 0 0.7-0.1 0.9-0.1 0.3-0.3 0.5-0.6 0.5s-0.6-0.2-0.8-0.5v0.4h-0.8v-5.9h0.8v1.9c0.3-0.3 0.5-0.5 0.8-0.5s0.5 0.2 0.6 0.5c0.1 0.2 0.1 0.5 0.1 0.9v1.8zM13.6 12.2h-1.6v0.8c0 0.4 0.1 0.6 0.4 0.6 0.2 0 0.3-0.1 0.4-0.3 0 0 0-0.2 0-0.5h0.8v0.1c0 0.3 0 0.4 0 0.5 0 0.2-0.1 0.3-0.2 0.5-0.2 0.3-0.5 0.5-1 0.5-0.4 0-0.7-0.2-1-0.5-0.2-0.2-0.3-0.6-0.3-1v-1.5c0-0.5 0.1-0.8 0.2-1 0.2-0.3 0.5-0.5 1-0.5 0.4 0 0.7 0.2 0.9 0.5 0.2 0.2 0.2 0.6 0.2 1v0.8z"></path></g>
</defs></svg>
</vaadin-iconset>`;document.head.appendChild(Od.content);const by=O`
  :host {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  [part='backdrop'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
  }

  [part='content'] {
    padding: 0;
  }

  [part='overlay'] {
    background: none;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
    height: 100%;
  }

  [part='card'] {
    width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='brand'] {
    padding: var(--lumo-space-l) var(--lumo-space-xl) var(--lumo-space-l) var(--lumo-space-l);
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
    min-height: calc(var(--lumo-size-m) * 5);
  }

  [part='description'] {
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-tint-70pct);
    margin-bottom: 0;
  }

  [part='content'] {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [part='card'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: var(--lumo-box-shadow-s);
    margin: var(--lumo-space-s);
    height: auto;
  }

  /* Small screen */
  @media only screen and (max-width: 500px) {
    [part='overlay'],
    [part='content'] {
      height: 100%;
    }

    [part='content'] {
      min-height: 100%;
      background: var(--lumo-base-color);
      align-items: flex-start;
    }

    [part='card'],
    [part='overlay'] {
      width: 100%;
      border-radius: 0;
      box-shadow: none;
      margin: 0;
    }

    /* RTL styles */
    :host([dir='rtl']) [part='brand'] {
      padding: var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-xl);
    }
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='card'] {
      flex-direction: row;
      align-items: stretch;
      max-width: calc(var(--lumo-size-m) * 16);
      width: 100%;
    }

    [part='brand'],
    [part='form'] {
      flex: auto;
      flex-basis: 0;
      box-sizing: border-box;
    }

    [part='brand'] {
      justify-content: flex-start;
    }

    [part='form'] {
      padding: var(--lumo-space-l);
      overflow: auto;
    }
  }

  /* Landscape really small screen */
  @media only screen and (max-height: 500px) and (min-width: 600px) and (orientation: landscape),
    only screen and (max-width: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='content'] {
      height: 100vh;
    }

    [part='card'] {
      margin: 0;
      width: 100%;
      max-width: none;
      height: 100%;
      flex: auto;
      border-radius: 0;
      box-shadow: none;
    }

    [part='form'] {
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  /* Handle iPhone X notch */
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    [part='card'] {
      padding-right: constant(safe-area-inset-right);
      padding-right: env(safe-area-inset-right);

      padding-left: constant(safe-area-inset-left);
      padding-left: env(safe-area-inset-left);
    }

    [part='brand'] {
      margin-left: calc(constant(safe-area-inset-left) * -1);
      margin-left: calc(env(safe-area-inset-left) * -1);

      padding-left: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-left: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }

    /* RTL styles */
    :host([dir='rtl']) [part='card'] {
      padding-left: constant(safe-area-inset-right);
      padding-left: env(safe-area-inset-right);
      padding-right: constant(safe-area-inset-left);
      padding-right: env(safe-area-inset-left);
    }

    :host([dir='rtl']) [part='brand'] {
      margin-right: calc(constant(safe-area-inset-left) * -1);
      margin-right: calc(env(safe-area-inset-left) * -1);
      padding-right: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-right: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }
  }
`;R("vaadin-login-overlay-wrapper",[tl,el,by],{moduleId:"vaadin-login-overlay-wrapper-lumo-styles"});const zy=O`
  :host([theme~='with-overlay']) {
    min-height: 100%;
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    :host([theme~='with-overlay']) [part='form'] {
      height: 100%;
      -webkit-overflow-scrolling: touch;
      flex: 1;
      padding: 2px;
    }
  }
`;R("vaadin-login-form-wrapper",[tl,el,zy],{moduleId:"lumo-login-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pd=document.createElement("template");Pd.innerHTML=`<dom-module id="vaadin-login-overlay-wrapper-template">
  <template>
    <style>
      [part="overlay"] {
        outline: none;
      }

      [part="card"] {
        max-width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      [part="brand"] {
        box-sizing: border-box;
        overflow: hidden;
        flex-grow: 1;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      [part="brand"] h1 {
        color: inherit;
        margin: 0;
      }
    </style>
    <section part="card">
      <div part="brand">
        <slot name="title">
          <h1 part="title">[[title]]</h1>
        </slot>
        <p part="description">[[description]]</p>
      </div>
      <div part="form">
        <slot></slot>
      </div>
    </section>
  </template>
</dom-module>`;document.head.appendChild(Pd.content);let Gr;class s1 extends er{static get is(){return"vaadin-login-overlay-wrapper"}static get properties(){return{title:{type:String},description:{type:String}}}static get template(){if(!Gr){Gr=super.template.cloneNode(!0);const t=fu.import(`${this.is}-template`,"template"),e=t.content.querySelector("[part=card]"),a=t.content.querySelector("style"),r=Gr.content.querySelector("#content");r.replaceChild(e,r.children[0]),r.appendChild(a)}return Gr}}customElements.define(s1.is,s1);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class o1 extends gu(rt(X(Y))){static get template(){return V`
      <vaadin-login-overlay-wrapper
        id="vaadinLoginOverlayWrapper"
        opened="{{opened}}"
        focus-trap
        with-backdrop
        title="[[title]]"
        description="[[description]]"
        theme$="[[_theme]]"
      >
        <vaadin-login-form
          theme="with-overlay"
          id="vaadinLoginForm"
          action="{{action}}"
          disabled="{{disabled}}"
          error="{{error}}"
          no-autofocus="[[noAutofocus]]"
          no-forgot-password="{{noForgotPassword}}"
          i18n="{{i18n}}"
          on-login="_retargetEvent"
          on-forgot-password="_retargetEvent"
        ></vaadin-login-form>
      </vaadin-login-overlay-wrapper>
    `}static get is(){return"vaadin-login-overlay"}static get properties(){return{description:{type:String,value:"Application description",notify:!0},opened:{type:Boolean,value:!1,observer:"_onOpenedChange"},title:{type:String,value:"App name"}}}static get observers(){return["__i18nChanged(i18n.header.*)"]}ready(){super.ready(),this._preventClosingLogin=this._preventClosingLogin.bind(this)}connectedCallback(){super.connectedCallback(),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.__restoreOpened&&(this.$.vaadinLoginOverlayWrapper.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.__restoreOpened=this.$.vaadinLoginOverlayWrapper.opened,this.$.vaadinLoginOverlayWrapper.opened=!1}__i18nChanged(t){const e=t.base;!e||(this.title=e.title,this.description=e.description)}_preventClosingLogin(t){t.preventDefault()}_onOpenedChange(){this.opened?(this._undoTeleport=this._teleport(this._getElementsToTeleport()),document.body.style.pointerEvents=this.$.vaadinLoginOverlayWrapper._previousDocumentPointerEvents):(this.$.vaadinLoginForm.$.vaadinLoginUsername.value="",this.$.vaadinLoginForm.$.vaadinLoginPassword.value="",this.disabled=!1,this._undoTeleport&&this._undoTeleport())}_teleport(t){const e=Array.from(t).map(a=>this.$.vaadinLoginOverlayWrapper.appendChild(a));return()=>{for(;e.length>0;)this.appendChild(e.shift())}}_getElementsToTeleport(){return this.querySelectorAll("[slot=title]")}}customElements.define(o1.is,o1);const xy=O`
  :host {
    margin: calc(var(--lumo-space-xs) / 2);
    margin-left: 0;
    border-radius: 0;
  }

  [part='label'] {
    width: 100%;
  }

  /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */
  [part='label'] ::slotted(vaadin-context-menu-item) {
    justify-content: center;
    background-color: transparent;
    height: var(--lumo-button-size);
    margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='small']) [part='label'] ::slotted(vaadin-context-menu-item) {
    min-height: var(--lumo-size-s);
    margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='tertiary']) [part='label'] ::slotted(vaadin-context-menu-item) {
    margin: 0 calc((var(--lumo-button-size) / 6) * -1);
    padding-left: calc(var(--lumo-button-size) / 6);
    padding-right: calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline']) {
    margin-top: calc(var(--lumo-space-xs) / 2);
    margin-bottom: calc(var(--lumo-space-xs) / 2);
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='tertiary-inline']) [part='label'] ::slotted(vaadin-context-menu-item) {
    margin: 0;
    padding: 0;
  }

  :host(:first-of-type) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);

    /* Needed to retain the focus-ring with border-radius */
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host(:nth-last-of-type(2)),
  :host([part='overflow-button']) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
  }

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    border-radius: var(--lumo-border-radius-m);
  }

  :host([part='overflow-button']) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([part='overflow-button']) ::slotted(*) {
    font-size: var(--lumo-font-size-xl);
  }

  :host([part='overflow-button']) [part='prefix'],
  :host([part='overflow-button']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL styles */
  :host([dir='rtl']) {
    margin-left: calc(var(--lumo-space-xs) / 2);
    margin-right: 0;
    border-radius: 0;
  }

  :host([dir='rtl']:first-of-type) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([dir='rtl']:nth-last-of-type(2)),
  :host([dir='rtl'][part='overflow-button']) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);
  }
`;R("vaadin-menu-bar-button",[mu,xy],{moduleId:"lumo-menu-bar-button"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-menu-bar-button",O`
    [part='label'] ::slotted(vaadin-context-menu-item) {
      position: relative;
      z-index: 1;
    }
  `,{moduleId:"vaadin-menu-bar-button-styles"});class h1 extends K1{static get is(){return"vaadin-menu-bar-button"}}customElements.define(h1.is,h1);R("vaadin-context-menu-item",O`
    :host([theme='menu-bar-item']) [part='content'] {
      display: flex;
      /* tweak to inherit centering from menu bar button */
      align-items: inherit;
      justify-content: inherit;
    }

    :host([theme='menu-bar-item']) [part='content'] ::slotted(vaadin-icon),
    :host([theme='menu-bar-item']) [part='content'] ::slotted(iron-icon) {
      display: inline-block;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    :host([theme='menu-bar-item']) [part='content'] ::slotted(vaadin-icon[icon^='vaadin:']),
    :host([theme='menu-bar-item']) [part='content'] ::slotted(iron-icon[icon^='vaadin:']) {
      padding: var(--lumo-space-xs);
      box-sizing: border-box !important;
    }
  `,{moduleId:"lumo-menu-bar-item"});R("vaadin-context-menu-overlay",O`
    :host(:first-of-type) {
      padding-top: var(--lumo-space-xs);
    }
  `,{moduleId:"lumo-menu-bar-overlay"});R("vaadin-menu-bar",O`
    :host([has-single-button]) [part$='button'] {
      border-radius: var(--lumo-border-radius-m);
    }

    :host([theme~='end-aligned']) [part$='button']:first-child,
    :host([theme~='end-aligned'][has-single-button]) [part$='button'] {
      margin-inline-start: auto;
    }
  `,{moduleId:"lumo-menu-bar"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class l1 extends _u{static get is(){return"vaadin-menu-bar-submenu"}constructor(){super(),this.openOn="opensubmenu"}_openedChanged(t){this.$.overlay.opened=t}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}customElements.define(l1.is,l1);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ay=i=>class extends An(i){static get properties(){return{_hasOverflow:{type:Boolean,value:!1}}}static get observers(){return["_menuItemsChanged(items, items.splices)"]}get _observeParent(){return!0}ready(){super.ready(),this.setAttribute("role","menubar")}connectedCallback(){super.connectedCallback(),this._initButtonAttrs(this._overflow)}get _buttons(){return Array.from(this.shadowRoot.querySelectorAll('[part$="button"]'))}get _container(){return this.shadowRoot.querySelector('[part="container"]')}get _overflow(){return this.shadowRoot.querySelector('[part="overflow-button"]')}_menuItemsChanged(t){t!==this._oldItems&&(this._oldItems=t,this.__renderButtons(t))}__getOverflowCount(t){return t.item&&t.item.children&&t.item.children.length||0}__restoreButtons(t){for(let e=0;e<t.length;e++){const a=t[e];a.disabled=a.item&&a.item.disabled||this.disabled,a.style.visibility="",a.style.position="";const r=a.item&&a.item.component;r instanceof HTMLElement&&r.classList.contains("vaadin-menu-item")&&(a.appendChild(r),r.classList.remove("vaadin-menu-item"))}this.__updateOverflow([])}__updateOverflow(t){this._overflow.item={children:t},this._hasOverflow=t.length>0}__setOverflowItems(t,e){const a=this._container;if(a.offsetWidth<a.scrollWidth){this._hasOverflow=!0;const r=this.getAttribute("dir")==="rtl";let n;for(n=t.length;n>0;n--){const o=t[n-1],h=getComputedStyle(o);if(!r&&o.offsetLeft+o.offsetWidth<a.offsetWidth-e.offsetWidth||r&&o.offsetLeft>=e.offsetWidth)break;o.disabled=!0,o.style.visibility="hidden",o.style.position="absolute",o.style.width=h.width}const s=t.filter((o,h)=>h>=n).map(o=>o.item);this.__updateOverflow(s)}}__detectOverflow(){const t=this._overflow,e=this._buttons.filter(s=>s!==t),a=this.__getOverflowCount(t);this.__restoreButtons(e),this.__setOverflowItems(e,t);const r=this.__getOverflowCount(t);a!==r&&this._subMenu.opened&&this._subMenu.close();const n=r===e.length||r===0&&e.length===1;this.toggleAttribute("has-single-button",n)}_removeButtons(){const t=this._container;for(;t.children.length>1;)t.removeChild(t.firstElementChild)}_initButton(t){const e=document.createElement("vaadin-menu-bar-button");e.setAttribute("part","menu-bar-button");const a={...t};if(e.item=a,t.component){const r=this.__getComponent(a);a.component=r,r.item=a,e.appendChild(r)}else t.text&&(e.textContent=t.text);return e}_initButtonAttrs(t){t.setAttribute("role","menuitem"),(t===this._overflow||t.item&&t.item.children)&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"))}_setButtonDisabled(t,e){t.disabled=e,t.setAttribute("tabindex",e?"-1":"0")}_setButtonTheme(t,e){let a=e;const r=t.item&&t.item.theme;r!=null&&(a=Array.isArray(r)?r.join(" "):r),a?t.setAttribute("theme",a):t.removeAttribute("theme")}_appendButton(t){this._container.insertBefore(t,this._overflow)}__getComponent(t){const e=t.component;let a;const r=e instanceof HTMLElement;if(r&&e.localName==="vaadin-context-menu-item"?a=e:(a=document.createElement("vaadin-context-menu-item"),a.appendChild(r?e:document.createElement(e))),t.text){const n=a.firstChild||a;n.textContent=t.text}return a.setAttribute("theme","menu-bar-item"),a}__renderButtons(t=[]){this._removeButtons(),t.length!==0&&(t.forEach(e=>{const a=this._initButton(e);this._appendButton(a),this._setButtonDisabled(a,e.disabled),this._initButtonAttrs(a),this._setButtonTheme(a,this._theme)}),this.__detectOverflow())}_onResize(){this.__detectOverflow()}};/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wy=i=>class extends i{static get properties(){return{openOnHover:{type:Boolean}}}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}static get observers(){return["_itemsChanged(items, items.splices)"]}ready(){super.ready(),this.addEventListener("keydown",r=>this._onKeydown(r)),this.addEventListener("focusin",r=>this._onFocusin(r)),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this));const e=this._subMenu.$.overlay;e.addEventListener("keydown",this.__boundOnContextMenuKeydown),e.addEventListener("vaadin-overlay-open",this.__alignOverlayPosition.bind(this));const a=this._container;a.addEventListener("click",this.__onButtonClick.bind(this)),a.addEventListener("mouseover",r=>this._onMouseOver(r))}get __isRTL(){return this.getAttribute("dir")==="rtl"}_setExpanded(e,a){e.toggleAttribute("expanded",a),e.toggleAttribute("active",a),e.setAttribute("aria-expanded",a?"true":"false")}_setTabindex(e,a){e.setAttribute("tabindex",a?"0":"-1")}_focusButton(e){e.focus(),e.setAttribute("focus-ring",""),this._buttons.forEach(a=>{this._setTabindex(a,a===e)})}_getButtonFromEvent(e){return Array.from(e.composedPath()).filter(a=>a.localName==="vaadin-menu-bar-button")[0]}_getCurrentButton(){return this.shadowRoot.activeElement||this._expandedButton}_onFocusin(){const e=this.shadowRoot.querySelector('[part$="button"][tabindex="0"]');e&&this._buttons.forEach(a=>{this._setTabindex(a,a===e)})}_onKeydown(e){const a=this._getButtonFromEvent(e);a&&(e.keyCode===40?(e.preventDefault(),a===this._expandedButton?this._focusFirstItem():this.__openSubMenu(a,e)):e.keyCode===38?(e.preventDefault(),a===this._expandedButton?this._focusLastItem():this.__openSubMenu(a,e,{focusLast:!0})):e.keyCode===27&&a===this._expandedButton?this._close(!0):this._navigateByKey(e))}_navigateByKey(e){const a=e.key.replace(/^Arrow/,""),r=this._buttons,n=this._getCurrentButton(),s=r.indexOf(n);let o,h;const l=this.__isRTL?-1:1;switch(a){case"Left":h=-l,o=s-l;break;case"Right":h=l,o=s+l;break;case"Home":h=1,o=0;break;case"End":h=-1,o=r.length-1;break}if(o=this._getAvailableIndex(o,h,r),o>=0){e.preventDefault();const c=r[o],d=n===this._expandedButton;d&&this._close(),this._focusButton(c),d&&c.item&&c.item.children&&this.__openSubMenu(c,e,{keepFocus:!0})}}_getAvailableIndex(e,a,r){const n=r.length;let s=e;for(let o=0;typeof s=="number"&&o<n;o++,s+=a||1){s<0?s=n-1:s>=n&&(s=0);const h=r[s];if(!h.disabled&&!h.hasAttribute("hidden"))return s}return-1}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}__alignOverlayPosition(e){if(!this._expandedButton)return;const a=e.target,{width:r,height:n,left:s}=this._expandedButton.getBoundingClientRect();a.hasAttribute("bottom-aligned")&&(a.style.bottom=`${parseInt(getComputedStyle(a).bottom)+n}px`),a.hasAttribute("end-aligned")&&(this.__isRTL?a.style.left=`${s}px`:a.style.right=`${parseInt(getComputedStyle(a).right)-r}px`)}_itemsChanged(){const e=this._subMenu;e&&e.opened&&e.close()}_onMouseOver(e){const a=this._getButtonFromEvent(e);if(a&&a!==this._expandedButton){const r=this._subMenu.opened;a.item.children&&(this.openOnHover||r)?this.__openSubMenu(a,e):r&&this._close()}}__onContextMenuKeydown(e){const a=Array.from(e.composedPath()).filter(r=>r._item)[0];if(a){const r=a.parentNode;if(e.keyCode===38&&a===r.items[0]&&this._close(!0),e.keyCode===37||e.keyCode===39&&!a._item.children){e.stopImmediatePropagation(),this._navigateByKey(e);const n=this.shadowRoot.activeElement;n&&n.item&&n.item.children&&this.__openSubMenu(n,e,{keepFocus:!0})}}}__fireItemSelected(e){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:e}}))}__onButtonClick(e){e.stopPropagation();const a=this._getButtonFromEvent(e);a&&this.__openSubMenu(a,e)}__openSubMenu(e,a,r={}){const n=this._subMenu,s=e.item;if(n.opened&&(this._close(),n.listenOn===e))return;const o=s&&s.children;if(!o||o.length===0){this.__fireItemSelected(s);return}n.items=o,n.listenOn=e;const h=n.$.overlay;h.positionTarget=e,h.noVerticalOverlap=!0,this._expandedButton=e,requestAnimationFrame(()=>{e.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:o}})),this._setExpanded(e,!0)}),r.focusLast&&this.__onceOpened(()=>this._focusLastItem()),r.keepFocus&&this.__onceOpened(()=>{this._focusButton(this._expandedButton)}),this.__onceOpened(()=>{a.type!=="keydown"&&n.$.overlay.$.overlay.focus(),h._updatePosition()})}_focusFirstItem(){this._subMenu.$.overlay.firstElementChild.focus()}_focusLastItem(){const e=this._subMenu.$.overlay.firstElementChild,a=e.items[e.items.length-1];a&&a.focus()}__onceOpened(e){this.style.pointerEvents="auto";const a=this._subMenu.$.overlay,r=()=>{e(),a.removeEventListener("vaadin-overlay-open",r)};a.addEventListener("vaadin-overlay-open",r)}__onItemSelected(e){e.stopPropagation(),this._close(),this.__fireItemSelected(e.detail.value)}__onEscapeClose(){this.__deactivateButton(!0)}__deactivateButton(e){const a=this._expandedButton;a&&a.hasAttribute("expanded")&&(this._setExpanded(a,!1),e&&this._focusButton(a),this._expandedButton=null)}_close(e){this.style.pointerEvents="",this.__deactivateButton(e),this._subMenu.opened&&this._subMenu.close()}};/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class c1 extends Ay(Cn(wy(rt(X(Y))))){static get template(){return V`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          position: relative;
          display: flex;
          width: 100%;
          flex-wrap: nowrap;
          overflow: hidden;
        }

        [part$='button'] {
          flex-shrink: 0;
        }

        [part='overflow-button'] {
          margin-right: 0;
        }

        .dots::before {
          display: block;
          content: '\\00B7\\00B7\\00B7';
          font-size: inherit;
          line-height: inherit;
        }
      </style>

      <div part="container">
        <vaadin-menu-bar-button part="overflow-button" hidden$="[[!_hasOverflow]]" aria-label$="[[i18n.moreOptions]]">
          <div class="dots"></div>
        </vaadin-menu-bar-button>
      </div>
      <vaadin-menu-bar-submenu is-root=""></vaadin-menu-bar-submenu>
    `}static get is(){return"vaadin-menu-bar"}static get properties(){return{items:{type:Array,value:()=>[]},i18n:{type:Object,value:()=>({moreOptions:"More options"})}}}static get observers(){return["_themeChanged(_theme)"]}_disabledChanged(t,e){super._disabledChanged(t,e),e!==t&&this.__updateButtonsDisabled(t)}_themeChanged(t){this.shadowRoot&&(this._buttons.forEach(e=>this._setButtonTheme(e,t)),this.__detectOverflow()),t?this._subMenu.setAttribute("theme",t):this._subMenu.removeAttribute("theme")}__updateButtonsDisabled(t){this._buttons.forEach(e=>{e.disabled=t||e.item&&e.item.disabled})}}customElements.define(c1.is,c1);R("vaadin-message-input",O`
    :host {
      padding: var(--lumo-space-s) var(--lumo-space-m);
    }
  `,{moduleId:"lumo-message-input"});R("vaadin-message-input-text-area",O`
    :host {
      margin: 0 var(--lumo-space-s) 0 0;
    }

    :host([dir='rtl']) {
      margin: 0 0 0 var(--lumo-space-s);
    }
  `,{moduleId:"lumo-message-input-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-message-input-text-area",O`
    :host {
      align-self: stretch;
      flex-grow: 1;
    }

    .textarea-wrapper {
      min-height: 0;
    }
  `,{moduleId:"vaadin-message-input-text-area-styles"});class d1 extends yu{static get is(){return"vaadin-message-input-text-area"}static get properties(){return{ariaLabel:{type:String,observer:"__ariaLabelChanged"}}}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.removeAttribute("aria-labelledby"),t.setAttribute("rows",1),t.style.minHeight="0",this.__updateAriaLabel(this.ariaLabel))}_onKeyDown(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new CustomEvent("enter"))),super._onKeyDown(t)}__updateAriaLabel(t){t?this.inputElement.setAttribute("aria-label",t):this.inputElement.removeAttribute("aria-label")}__ariaLabelChanged(t){!this.inputElement||this.__updateAriaLabel(t)}}customElements.define(d1.is,d1);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-message-input-button",O`
    :host {
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-input-button-styles"});class u1 extends K1{static get is(){return"vaadin-message-input-button"}}customElements.define(u1.is,u1);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class v1 extends rt(X(Y)){static get properties(){return{value:{type:String},i18n:{type:Object,value:()=>({send:"Send",message:"Message"})},disabled:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get template(){return V`
      <style>
        :host {
          align-items: flex-start;
          box-sizing: border-box;
          display: flex;
          max-height: 50vh;
          overflow: hidden;
          flex-shrink: 0;
        }
      </style>
      <vaadin-message-input-text-area
        disabled="[[disabled]]"
        value="{{value}}"
        placeholder="[[i18n.message]]"
        aria-label="[[i18n.message]]"
        on-enter="__submit"
      ></vaadin-message-input-text-area>
      <vaadin-message-input-button disabled="[[disabled]]" theme="primary contained" on-click="__submit"
        >[[i18n.send]]</vaadin-message-input-button
      >
    `}static get is(){return"vaadin-message-input"}__submit(){this.value!==""&&(this.dispatchEvent(new CustomEvent("submit",{detail:{value:this.value}})),this.value=""),this.shadowRoot.querySelector("vaadin-message-input-text-area").focus()}}customElements.define(v1.is,v1);R("vaadin-message-avatar",O`
    :host {
      margin-right: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-top: calc(var(--lumo-space-s) - var(--vaadin-avatar-outline-width));
    }

    :host([dir='rtl']) {
      margin-left: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-right: calc(var(--vaadin-avatar-outline-width) * -1);
    }
  `,{moduleId:"lumo-message-avatar"});R("vaadin-message",O`
    :host {
      color: var(--lumo-body-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-m);
      padding: var(--lumo-space-s) var(--lumo-space-m);
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
    }

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part='header'] {
      min-height: calc(var(--lumo-font-size-m) * var(--lumo-line-height-m));
    }

    [part='name'] {
      margin-right: var(--lumo-space-s);
    }

    [part='name']:empty {
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name'] {
      margin-left: var(--lumo-space-s);
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name']:empty {
      margin-left: 0;
    }

    [part='time'] {
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-s);
    }
  `,{moduleId:"lumo-message"});R("vaadin-message-list",O``,{moduleId:"lumo-message-list"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-message-avatar",O`
    :host {
      --vaadin-avatar-outline-width: 0px; /* stylelint-disable-line length-zero-no-unit */
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-avatar-styles"});class p1 extends C0{static get is(){return"vaadin-message-avatar"}}customElements.define(p1.is,p1);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class W0 extends Qe(rt(X(Y))){static get properties(){return{time:{type:String},userName:{type:String},userAbbr:{type:String},userImg:{type:String},userColorIndex:{type:Number}}}static get template(){return V`
      <style>
        :host {
          display: flex;
          flex-direction: row;
          outline: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        [part='header'] {
          align-items: baseline;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        [part='name'] {
          font-weight: 500;
        }

        [part='message'] {
          white-space: pre-wrap;
        }
      </style>
      <vaadin-message-avatar
        part="avatar"
        name="[[userName]]"
        abbr="[[userAbbr]]"
        img="[[userImg]]"
        color-index="[[userColorIndex]]"
        tabindex="-1"
        aria-hidden="true"
      ></vaadin-message-avatar>
      <div part="content">
        <div part="header">
          <span part="name">[[userName]]</span>
          <span part="time">[[time]]</span>
        </div>
        <div part="message"><slot></slot></div>
      </div>
    `}static get is(){return"vaadin-message"}}customElements.define(W0.is,W0);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class f1 extends rt(X(Y)){static get is(){return"vaadin-message-list"}static get properties(){return{items:{type:Array,value:()=>[],observer:"_itemsChanged"}}}static get template(){return V`
      <style>
        :host {
          display: block;
          overflow: auto;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="list" role="list">
        <template is="dom-repeat" items="[[items]]">
          <vaadin-message
            time="[[item.time]]"
            user-name="[[item.userName]]"
            user-abbr="[[item.userAbbr]]"
            user-img="[[item.userImg]]"
            user-color-index="[[item.userColorIndex]]"
            theme$="[[item.theme]]"
            role="listitem"
            on-focusin="_handleFocusEvent"
            >[[item.text]]</vaadin-message
          >
        </template>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-relevant","additions"),this.setAttribute("role","log"),this.addEventListener("keydown",t=>this._onKeydown(t))}get _messages(){return Array.from(this.shadowRoot.querySelectorAll("vaadin-message"))}_itemsChanged(t,e){const a=this._getIndexOfFocusableElement();if(t&&t.length){const r=!e||t.length>e.length,n=this.scrollHeight<this.clientHeight+this.scrollTop+50;Mu.run(()=>{this._setTabIndexesByIndex(a),r&&n&&this._scrollToLastMessage()})}}_scrollToLastMessage(){this.items.length>0&&(this.scrollTop=this.scrollHeight-this.clientHeight)}_onKeydown(t){if(t.metaKey||t.ctrlKey)return;const e=t.composedPath()[0];let a=this._messages.indexOf(e);switch(t.key){case"ArrowUp":a-=1;break;case"ArrowDown":a+=1;break;case"Home":a=0;break;case"End":a=this._messages.length-1;break;default:return}a<0&&(a=this._messages.length-1),a>this._messages.length-1&&(a=0),this._focus(a),t.preventDefault()}_focus(t){this._messages[t].focus()}_handleFocusEvent(t){const e=t.composedPath().find(a=>a instanceof W0);this._setTabIndexesByMessage(e)}_setTabIndexesByIndex(t){const e=this._messages[t]||this._messages[0];this._setTabIndexesByMessage(e)}_setTabIndexesByMessage(t){this._messages.forEach(e=>{e.tabIndex=e===t?0:-1})}_getIndexOfFocusableElement(){const t=this._messages.findIndex(e=>e.tabIndex===0);return t!==-1?t:0}}customElements.define(f1.is,f1);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ey=O`
  :host {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
    padding: 0.3125em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-body-text-color);
    border-radius: var(--lumo-border-radius-s);
    background-color: var(--lumo-contrast-20pct);
    cursor: var(--lumo-clickable-cursor);
  }

  :host([focused]) {
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
  }

  :host([focused]) [part='remove-button'] {
    color: inherit;
  }

  :host(:not([part~='overflow']):not([readonly]):not([disabled])) {
    padding-inline-end: 0;
  }

  :host([part~='overflow']) {
    position: relative;
    min-width: var(--lumo-size-xxs);
    margin-inline-start: var(--lumo-space-s);
  }

  :host([part~='overflow'])::before,
  :host([part~='overflow'])::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-left: calc(var(--lumo-space-s) / 4) solid;
    border-radius: var(--lumo-border-radius-s);
    border-color: var(--lumo-contrast-30pct);
  }

  :host([part~='overflow'])::before {
    left: calc(-1 * var(--lumo-space-s) / 2);
  }

  :host([part~='overflow'])::after {
    left: calc(-1 * var(--lumo-space-s));
  }

  :host([part~='overflow-two']) {
    margin-inline-start: calc(var(--lumo-space-s) / 2);
  }

  :host([part~='overflow-two'])::after {
    display: none;
  }

  :host([part~='overflow-one']) {
    margin-inline-start: 0;
  }

  :host([part~='overflow-one'])::before,
  :host([part~='overflow-one'])::after {
    display: none;
  }

  [part='label'] {
    font-weight: 500;
    line-height: 1.25;
  }

  [part='remove-button'] {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -0.3125em;
    margin-bottom: -0.3125em;
    margin-inline-start: auto;
    width: 1.25em;
    height: 1.25em;
    font-size: 1.5em;
    transition: none;
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
    pointer-events: none;
  }
`;R("vaadin-multi-select-combo-box-chip",[Q1,Ey],{moduleId:"lumo-multi-select-combo-box-chip"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-multi-select-combo-box-item",O`
    @media (any-hover: hover) {
      :host(:hover[readonly]) {
        background-color: transparent;
        cursor: default;
      }
    }
  `,{moduleId:"lumo-multi-select-combo-box-item"});const Cy=O`
  :host([has-value]) {
    padding-inline-start: 0;
  }

  :host([has-value]) ::slotted(input:placeholder-shown) {
    caret-color: var(--lumo-body-text-color) !important;
  }

  [part~='chip']:not(:last-of-type) {
    margin-inline-end: var(--lumo-space-xs);
  }

  [part~='overflow']:not([hidden]) + :not(:empty) {
    margin-inline-start: var(--lumo-space-xs);
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  :host([readonly][has-value]) [part='toggle-button'] {
    color: var(--lumo-contrast-60pct);
    cursor: var(--lumo-clickable-cursor);
  }
`;R("vaadin-multi-select-combo-box",[K0,Cy],{moduleId:"lumo-multi-select-combo-box"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class g1 extends X(Y){static get is(){return"vaadin-multi-select-combo-box-chip"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},label:{type:String},item:{type:Object}}}static get template(){return V`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          align-self: center;
          white-space: nowrap;
          box-sizing: border-box;
        }

        [part='label'] {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        :host(:is([readonly], [disabled], [part~='overflow'])) [part='remove-button'] {
          display: none !important;
        }
      </style>
      <div part="label">[[label]]</div>
      <div part="remove-button" role="button" on-click="_onRemoveClick"></div>
    `}_onRemoveClick(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("item-removed",{detail:{item:this.item},bubbles:!0,composed:!0}))}}customElements.define(g1.is,g1);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-multi-select-combo-box-container",O`
    #wrapper {
      display: flex;
      width: 100%;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-container-styles"});let $r;class m1 extends bu{static get is(){return"vaadin-multi-select-combo-box-container"}static get template(){if(!$r){$r=super.template.cloneNode(!0);const t=$r.content,e=t.querySelectorAll("slot"),a=document.createElement("div");a.setAttribute("id","wrapper"),t.insertBefore(a,e[2]),a.appendChild(e[0]),a.appendChild(e[1])}return $r}}customElements.define(m1.is,m1);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _1 extends Y1{static get is(){return"vaadin-multi-select-combo-box-item"}}customElements.define(_1.is,_1);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-multi-select-combo-box-overlay",O`
    #overlay {
      width: var(
        --vaadin-multi-select-combo-box-overlay-width,
        var(--_vaadin-multi-select-combo-box-overlay-default-width, auto)
      );
    }
  `,{moduleId:"vaadin-multi-select-combo-box-overlay-styles"});class y1 extends H1{static get is(){return"vaadin-multi-select-combo-box-overlay"}}customElements.define(y1.is,y1);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class M1 extends q1{static get is(){return"vaadin-multi-select-combo-box-scroller"}ready(){super.ready(),this.setAttribute("aria-multiselectable","true")}__getAriaSelected(t,e){const a=this.items[e];return this.__isItemSelected(a,null,this.itemIdPath).toString()}__isItemSelected(t,e,a){return t instanceof J1||this.comboBox.readonly?!1:this.comboBox._findIndex(t,this.comboBox.selectedItems,a)>-1}__updateElement(t,e){super.__updateElement(t,e),t.toggleAttribute("readonly",this.comboBox.readonly)}}customElements.define(M1.is,M1);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class b1 extends zu(X1(X(Y))){static get is(){return"vaadin-multi-select-combo-box-internal"}static get template(){return V`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-multi-select-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_target]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-multi-select-combo-box-overlay>
    `}static get properties(){return{filteredItems:{type:Array,notify:!0},loading:{type:Boolean,notify:!0},size:{type:Number,notify:!0},selectedItems:{type:Array,value:()=>[]},lastFilter:{type:String,notify:!0},_target:{type:Object}}}get clearElement(){return this.querySelector('[part="clear-button"]')}get _tagNamePrefix(){return"vaadin-multi-select-combo-box"}open(){!this.disabled&&!(this.readonly&&this.selectedItems.length===0)&&(this.opened=!0)}ready(){super.ready(),this._target=this,this._toggleElement=this.querySelector(".toggle-button")}_initScroller(){const t=this.getRootNode().host;super._initScroller(t)}clear(){super.clear(),this.inputElement&&(this.inputElement.value="")}_onEnter(t){this.__enterPressed=!0,super._onEnter(t)}_closeOrCommit(){if(this.readonly){this.close();return}if(this.__enterPressed){this.__enterPressed=null;const t=this.filteredItems[this._focusedIndex];this._commitValue(),this._focusedIndex=this.filteredItems.indexOf(t);return}super._closeOrCommit()}_commitValue(){this.lastFilter=this.filter,super._commitValue()}_onArrowDown(){this.readonly?this.opened||this.open():super._onArrowDown()}_onArrowUp(){this.readonly?this.opened||this.open():super._onArrowUp()}_onFocusout(t){this._ignoreCommitValue=!0,super._onFocusout(t),this.readonly&&!this._closeOnBlurIsPrevented&&this.close()}_detectAndDispatchChange(){if(this._ignoreCommitValue){this._ignoreCommitValue=!1,this.selectedItem=null,this._inputElementValue="";return}super._detectAndDispatchChange()}_overlaySelectedItemChanged(t){t.stopPropagation(),!this.readonly&&(t.detail.item instanceof J1||this.opened&&this.dispatchEvent(new CustomEvent("combo-box-item-selected",{detail:{item:t.detail.item}})))}_shouldLoadPage(t){return this.readonly?!1:super._shouldLoadPage(t)}}customElements.define(b1.is,b1);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Iy=O`
  :host {
    --input-min-width: var(--vaadin-multi-select-combo-box-input-min-width, 4em);
  }

  [hidden] {
    display: none !important;
  }

  #chips {
    display: flex;
    align-items: center;
  }

  :host([has-value]) ::slotted(input:placeholder-shown) {
    color: transparent !important;
  }

  ::slotted(input) {
    box-sizing: border-box;
    flex: 1 0 var(--input-min-width);
  }

  [part='chip'] {
    flex: 0 1 auto;
  }

  :host(:is([readonly], [disabled])) ::slotted(input) {
    flex-grow: 0;
    flex-basis: 0;
    padding: 0;
  }
`;R("vaadin-multi-select-combo-box",[ts,Iy],{moduleId:"vaadin-multi-select-combo-box-styles"});class z1 extends An(Z1(X(rt(Y)))){static get is(){return"vaadin-multi-select-combo-box"}static get template(){return V`
      <div class="vaadin-multi-select-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-multi-select-combo-box-internal
          id="comboBox"
          items="[[__effectiveItems]]"
          item-id-path="[[itemIdPath]]"
          item-label-path="[[itemLabelPath]]"
          item-value-path="[[itemValuePath]]"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          allow-custom-value="[[allowCustomValue]]"
          data-provider="[[dataProvider]]"
          filter="{{filter}}"
          last-filter="{{_lastFilter}}"
          loading="{{loading}}"
          size="{{size}}"
          filtered-items="[[__effectiveFilteredItems]]"
          selected-items="[[selectedItems]]"
          opened="{{opened}}"
          renderer="[[renderer]]"
          theme$="[[_theme]]"
          on-combo-box-item-selected="_onComboBoxItemSelected"
          on-change="_onComboBoxChange"
          on-custom-value-set="_onCustomValueSet"
          on-filtered-items-changed="_onFilteredItemsChanged"
        >
          <vaadin-multi-select-combo-box-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <vaadin-multi-select-combo-box-chip
              id="overflow"
              slot="prefix"
              part$="[[_getOverflowPart(_overflowItems.length)]]"
              disabled="[[disabled]]"
              readonly="[[readonly]]"
              label="[[_getOverflowLabel(_overflowItems.length)]]"
              title$="[[_getOverflowTitle(_overflowItems)]]"
              hidden$="[[_isOverflowHidden(_overflowItems.length)]]"
              on-mousedown="_preventBlur"
            ></vaadin-multi-select-combo-box-chip>
            <div id="chips" part="chips" slot="prefix"></div>
            <slot name="input"></slot>
            <div
              id="clearButton"
              part="clear-button"
              slot="suffix"
              on-touchend="_onClearButtonTouchend"
              aria-hidden="true"
            ></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-multi-select-combo-box-container>
        </vaadin-multi-select-combo-box-internal>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{autoOpenDisabled:Boolean,clearButtonVisible:{type:Boolean,reflectToAttribute:!0,observer:"_clearButtonVisibleChanged",value:!1},items:{type:Array},itemLabelPath:{type:String,value:"label"},itemValuePath:{type:String,value:"value"},itemIdPath:{type:String},i18n:{type:Object,value:()=>({cleared:"Selection cleared",focused:"focused. Press Backspace to remove",selected:"added to selection",deselected:"removed from selection",total:"{count} items selected"})},loading:{type:Boolean,value:!1,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,observer:"_readonlyChanged",reflectToAttribute:!0},selectedItems:{type:Array,value:()=>[],notify:!0},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},size:{type:Number},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object},allowCustomValue:{type:Boolean,value:!1},placeholder:{type:String,value:"",observer:"_placeholderChanged"},renderer:Function,filter:{type:String,value:"",notify:!0},filteredItems:Array,value:{type:String},__effectiveItems:{type:Array,computed:"__computeEffectiveItems(items, selectedItems, readonly)"},__effectiveFilteredItems:{type:Array,computed:"__computeEffectiveFilteredItems(items, filteredItems, selectedItems, readonly)"},_overflowItems:{type:Array,value:()=>[]},_focusedChipIndex:{type:Number,value:-1,observer:"_focusedChipIndexChanged"},_lastFilter:{type:String}}}static get observers(){return["_selectedItemsChanged(selectedItems, selectedItems.*)"]}get clearElement(){return this.$.clearButton}get _chips(){return this.shadowRoot.querySelectorAll('[part~="chip"]')}ready(){super.ready(),this.addController(new Q0(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new J0(this.inputElement,this._labelController)),this._inputField=this.shadowRoot.querySelector('[part="input-field"]'),this.__updateChips(),ar(this)}checkValidity(){return this.required&&!this.readonly?this._hasValue:!0}clear(){this.__updateSelection([]),Me(this.i18n.cleared)}clearCache(){this.$&&this.$.comboBox&&this.$.comboBox.clearCache()}requestContentUpdate(){this.$&&this.$.comboBox&&this.$.comboBox.requestContentUpdate()}_disabledChanged(t,e){super._disabledChanged(t,e),(t||e)&&this.__updateChips()}_inputElementChanged(t){super._inputElementChanged(t),t&&this.$.comboBox._setInputElement(t)}_setFocused(t){super._setFocused(t),t||(this._focusedChipIndex=-1,this.validate())}_onResize(){this.__updateChips()}_delegateAttribute(t,e){if(!!this.stateTarget){if(t==="required"){this._delegateAttribute("aria-required",e?"true":!1);return}super._delegateAttribute(t,e)}}_clearButtonVisibleChanged(t,e){(t||e)&&this.__updateChips()}_onFilteredItemsChanged(t){const{value:e}=t.detail;(Array.isArray(e)||e==null)&&(this.filteredItems=e)}_readonlyChanged(t,e){(t||e)&&this.__updateChips()}_pageSizeChanged(t,e){(Math.floor(t)!==t||t<=0)&&(this.pageSize=e,console.error('"pageSize" value must be an integer > 0')),this.$.comboBox.pageSize=this.pageSize}_placeholderChanged(t){const e=this.__tmpA11yPlaceholder;e!==t&&(this.__savedPlaceholder=t,e&&(this.placeholder=e))}_selectedItemsChanged(t){if(this._toggleHasValue(this._hasValue),this._hasValue){const e=this._mergeItemLabels(t);this.__tmpA11yPlaceholder=e,this.placeholder=e}else delete this.__tmpA11yPlaceholder,this.placeholder=this.__savedPlaceholder;this.__updateChips(),this.requestContentUpdate()}_getItemLabel(t){return this.$.comboBox._getItemLabel(t)}_getOverflowLabel(t){return t}_getOverflowPart(t){let e="chip overflow";return t===1?e+=" overflow-one":t===2&&(e+=" overflow-two"),e}_getOverflowTitle(t){return this._mergeItemLabels(t)}_isOverflowHidden(t){return t===0}_mergeItemLabels(t){return t.map(e=>this._getItemLabel(e)).join(", ")}_findIndex(t,e,a){if(a&&t){for(let r=0;r<e.length;r++)if(e[r]&&e[r][a]===t[a])return r;return-1}return e.indexOf(t)}__clearFilter(){this.filter="",this.$.comboBox.clear()}__announceItem(t,e,a){const r=e?"selected":"deselected",n=this.i18n.total.replace("{count}",a||0);Me(`${t} ${this.i18n[r]} ${n}`)}__removeItem(t){const e=[...this.selectedItems];e.splice(e.indexOf(t),1),this.__updateSelection(e);const a=this._getItemLabel(t);this.__announceItem(a,!1,e.length)}__selectItem(t){const e=[...this.selectedItems],a=this._findIndex(t,e,this.itemIdPath),r=this._getItemLabel(t);let n=!1;if(a!==-1){const s=this._lastFilter;if(s&&s.toLowerCase()===r.toLowerCase()){this.__clearFilter();return}e.splice(a,1)}else e.push(t),n=!0;this.__updateSelection(e),this.__clearFilter(),this.__announceItem(r,n,e.length)}__updateSelection(t){this.selectedItems=t,this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__createChip(t){const e=document.createElement("vaadin-multi-select-combo-box-chip");e.setAttribute("part","chip"),e.setAttribute("slot","prefix"),e.item=t,e.disabled=this.disabled,e.readonly=this.readonly;const a=this._getItemLabel(t);return e.label=a,e.setAttribute("title",a),e.addEventListener("item-removed",r=>this._onItemRemoved(r)),e.addEventListener("mousedown",r=>this._preventBlur(r)),e}__getOverflowWidth(){const t=this.$.overflow;t.style.visibility="hidden",t.removeAttribute("hidden"),t.setAttribute("part","chip overflow");const e=getComputedStyle(t),a=t.clientWidth+parseInt(e.marginInlineStart);return t.setAttribute("hidden",""),t.style.visibility="",a}__updateChips(){if(!this._inputField)return;Array.from(this._chips).forEach(n=>{n!==this.$.overflow&&n.remove()});const t=[...this.selectedItems],e=this._inputField.$.wrapper.clientWidth,a=parseInt(getComputedStyle(this.inputElement).flexBasis);let r=e-a;t.length>1&&(r-=this.__getOverflowWidth());for(let n=t.length-1,s=null;n>=0;n--){const o=this.__createChip(t[n]);if(this.$.chips.insertBefore(o,s),this.$.chips.clientWidth>r){o.remove();break}t.pop(),s=o}this._overflowItems=t}_onClearButtonTouchend(t){t.preventDefault(),this.clear()}_onClearButtonClick(t){t.stopPropagation(),this.clear()}_onChange(t){t.stopPropagation()}_onEscape(t){this.clearButtonVisible&&this.selectedItems&&this.selectedItems.length&&(t.stopPropagation(),this.selectedItems=[])}_onKeyDown(t){super._onKeyDown(t);const e=Array.from(this._chips).slice(1);if(!this.readonly&&e.length>0)switch(t.key){case"Backspace":this._onBackSpace(e);break;case"ArrowLeft":this._onArrowLeft(e);break;case"ArrowRight":this._onArrowRight(e);break;default:this._focusedChipIndex=-1;break}}_onArrowLeft(t){if(this.inputElement.value!==""||this.opened)return;const e=this._focusedChipIndex;let a;this.getAttribute("dir")!=="rtl"?e===-1?a=t.length-1:e>0&&(a=e-1):e===t.length-1?a=-1:e>-1&&(a=e+1),a!==void 0&&(this._focusedChipIndex=a)}_onArrowRight(t){if(this.inputElement.value!==""||this.opened)return;const e=this._focusedChipIndex;let a;this.getAttribute("dir")==="rtl"?e===-1?a=t.length-1:e>0&&(a=e-1):e===t.length-1?a=-1:e>-1&&(a=e+1),a!==void 0&&(this._focusedChipIndex=a)}_onBackSpace(t){if(this.inputElement.value!==""||this.opened)return;const e=this._focusedChipIndex;e===-1?this._focusedChipIndex=t.length-1:(this.__removeItem(t[e].item),this._focusedChipIndex=-1)}_focusedChipIndexChanged(t,e){if(t>-1||e>-1){const a=Array.from(this._chips).slice(1);if(a.forEach((r,n)=>{r.toggleAttribute("focused",n===t)}),t>-1){const r=a[t].item,n=this._getItemLabel(r);Me(`${n} ${this.i18n.focused}`)}}}_onComboBoxChange(){const t=this.$.comboBox.selectedItem;t&&this.__selectItem(t)}_onComboBoxItemSelected(t){this.__selectItem(t.detail.item)}_onCustomValueSet(t){t.preventDefault(),t.stopPropagation(),this.__clearFilter(),this.dispatchEvent(new CustomEvent("custom-value-set",{detail:t.detail,composed:!0,bubbles:!0}))}_onItemRemoved(t){this.__removeItem(t.detail.item)}_preventBlur(t){t.preventDefault()}__computeEffectiveItems(t,e,a){return t&&a?e:t}__computeEffectiveFilteredItems(t,e,a,r){return!t&&r?a:e}get _hasValue(){return this.selectedItems&&this.selectedItems.length>0}}customElements.define(z1.is,z1);R("vaadin-notification-card",O`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot\$='stretch']) {
      margin: 0;
    }

    :host([slot\$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot\$='stretch'])) {
        display: flex;
      }

      :host([slot\$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot\$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --_lumo-button-background-color: var(--lumo-contrast-20pct);
      --_lumo-button-color: var(--lumo-base-color);
      --_lumo-button-primary-background-color: var(--lumo-base-color);
      --_lumo-button-primary-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-color: var(--lumo-error-text-color);
    }
  `,{moduleId:"lumo-notification-card"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class x1 extends X(rt(Y)){static get template(){return V`
      <style>
        :host {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          pointer-events: none;
        }

        [region-group] {
          flex: 1 1 0%;
          display: flex;
        }

        [region-group='top'] {
          align-items: flex-start;
        }

        [region-group='bottom'] {
          align-items: flex-end;
        }

        [region-group] > [region] {
          flex: 1 1 0%;
        }

        @media (max-width: 420px) {
          [region-group] {
            flex-direction: column;
            align-items: stretch;
          }

          [region-group='top'] {
            justify-content: flex-start;
          }

          [region-group='bottom'] {
            justify-content: flex-end;
          }

          [region-group] > [region] {
            flex: initial;
          }
        }
      </style>

      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}constructor(){super(),this._boundVaadinOverlayClose=this._onVaadinOverlayClose.bind(this),xu&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_openedChanged(t){t?(document.body.appendChild(this),document.addEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),document.removeEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}_detectIosNavbar(){const t=window.innerHeight,a=window.innerWidth>t,r=document.documentElement.clientHeight;a&&r>t?this.style.bottom=`${r-t}px`:this.style.bottom="0"}_onVaadinOverlayClose(t){const e=t.detail.sourceEvent;e&&e.composedPath().indexOf(this)>=0&&t.preventDefault()}}class A1 extends X(Y){static get template(){return V`
      <style>
        :host {
          display: block;
        }

        [part='overlay'] {
          pointer-events: auto;
        }
      </style>

      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class oe extends as(rt(Y)){static get template(){return V`
      <style>
        :host {
          display: none !important;
        }
      </style>
      <vaadin-notification-card theme$="[[_theme]]"> </vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _card)"]}static show(t,e){return Au(t)?oe._createAndShowNotification(a=>{Gu(t,a)},e):oe._createAndShowNotification(a=>{a.innerText=t},e)}static _createAndShowNotification(t,e){const a=document.createElement(oe.is);return e&&Number.isFinite(e.duration)&&(a.duration=e.duration),e&&e.position&&(a.position=e.position),e&&e.theme&&a.setAttribute("theme",e.theme),a.renderer=t,document.body.appendChild(a),a.opened=!0,a.addEventListener("opened-changed",r=>{r.detail.value||a.remove()}),a}ready(){super.ready(),this._card=this.shadowRoot.querySelector("vaadin-notification-card"),ar(this)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}requestContentUpdate(){!this.renderer||this.renderer(this._card,this)}_rendererChanged(t,e,a){if(!a)return;const r=this._oldRenderer!==t;this._oldRenderer=t,r&&(a.innerHTML="",delete a._$litPart$),e&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}get _container(){return oe._container||(oe._container=document.createElement("vaadin-notification-container"),document.body.appendChild(oe._container)),oe._container}_openedChanged(t){t?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const t=()=>{this._card.removeEventListener("animationend",t),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",t),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){if(!!this._card){if(!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)){console.warn(`Invalid alignment parameter provided: position=${this.position}`);return}this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)}}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const t=getComputedStyle(this._card).getPropertyValue("animation-name");if(t&&t!=="none"){const e=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",e)};this._card.addEventListener("animationend",e)}else this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(t,e){e&&(clearTimeout(this._durationTimeoutId),t>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),t)))}}customElements.define(x1.is,x1);customElements.define(A1.is,A1);customElements.define(oe.is,oe);R("vaadin-progress-bar",O`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const Ld=document.createElement("template");Ld.innerHTML=`
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
`;document.head.appendChild(Ld.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sy=i=>class extends i{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,a,r){const n=this._normalizeValue(e,a,r);this.style.setProperty("--vaadin-progress-value",n)}_valueChanged(e){this.setAttribute("aria-valuenow",e)}_minChanged(e){this.setAttribute("aria-valuemin",e)}_maxChanged(e){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,a,r){let n;return!e&&e!==0?n=0:a>=r?n=1:(n=(e-a)/(r-a),n=Math.min(Math.max(n,0),1)),n}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class w1 extends rt(X(Sy(Y))){static get template(){return V`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          height: 8px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='bar'] {
          height: 100%;
        }

        [part='value'] {
          height: 100%;
          transform-origin: 0 50%;
          transform: scaleX(var(--vaadin-progress-value));
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='value'] {
          transform-origin: 100% 50%;
        }
      </style>

      <div part="bar">
        <div part="value"></div>
      </div>
    `}static get is(){return"vaadin-progress-bar"}}customElements.define(w1.is,w1);R("vaadin-radio-button",O`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    }

    [part='radio'] {
      width: calc(var(--lumo-size-m) / 2);
      height: calc(var(--lumo-size-m) / 2);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: 50%;
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      will-change: transform;
      line-height: 1.2;
      cursor: var(--lumo-clickable-cursor);
    }

    /* Used for activation "halo" */
    [part='radio']::before {
      /* Needed to align the radio-button nicely on the baseline */
      content: '\\2003';
      pointer-events: none;
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
      will-change: transform, opacity;
    }

    /* Used for the dot */
    [part='radio']::after {
      content: '';
      pointer-events: none;
      width: 0;
      height: 0;
      border: 3px solid var(--lumo-primary-contrast-color);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 0.25s transform;
      will-change: transform;
      background-clip: content-box;
    }

    :host([checked]) [part='radio'] {
      background-color: var(--lumo-primary-color);
    }

    :host([checked]) [part='radio']::after {
      transform: translate(-50%, -50%) scale(1);
    }

    :host(:not([checked]):not([disabled]):hover) [part='radio'] {
      background-color: var(--lumo-contrast-30pct);
    }

    :host([active]) [part='radio'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='radio'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='radio']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    :host([focus-ring]) [part='radio'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='radio'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='radio']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }
  `,{moduleId:"lumo-radio-button"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xn extends wu(Eu(q0(Cu(rt(X(is(Y))))))){static get is(){return"vaadin-radio-button"}static get template(){return V`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-radio-button-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        .vaadin-radio-button-wrapper {
          position: relative;
          height: 100%;
        }

        /* visually hidden */
        ::slotted(input) {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }
      </style>
      <div class="vaadin-radio-button-container">
        <div class="vaadin-radio-button-wrapper">
          <div part="radio"></div>
          <slot name="input"></slot>
        </div>

        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
    `}static get properties(){return{name:{type:String,value:""}}}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("radio"),this.value="on"}ready(){super.ready(),this.addController(new Q0(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new J0(this.inputElement,this._labelController)),this.addController(new Iu(this.$.noop,()=>this._labelController.node,()=>this.__warnDeprecated()))}__warnDeprecated(){console.warn(`WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-radio-button> is deprecated.
  Please use <label slot="label"> wrapper or the label property instead.`)}}customElements.define(xn.is,xn);const Ty=O`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-radio-button */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'],
  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;R("vaadin-radio-group",[wn,En,Ty],{moduleId:"lumo-radio-group"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class E1 extends ir(Qe(Cn(H0(rt(X(Y)))))){static get is(){return"vaadin-radio-group"}static get template(){return V`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>
      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:String,notify:!0,value:"",observer:"__valueChanged"},readonly:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__readonlyChanged"},_fieldName:{type:String}}}constructor(){super(),this.__registerRadioButton=this.__registerRadioButton.bind(this),this.__unregisterRadioButton=this.__unregisterRadioButton.bind(this),this.__onRadioButtonCheckedChange=this.__onRadioButtonCheckedChange.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","radiogroup"),this._fieldName=`${this.localName}-${X0()}`,this._observer=new ue(this,({addedNodes:t,removedNodes:e})=>{this.__filterRadioButtons(t).reverse().forEach(this.__registerRadioButton),this.__filterRadioButtons(e).forEach(this.__unregisterRadioButton)})}__filterRadioButtons(t){return t.filter(e=>e instanceof xn)}get __radioButtons(){return this.__filterRadioButtons([...this.children])}get __selectedRadioButton(){return this.__radioButtons.find(t=>t.checked)}get isHorizontalRTL(){return this.getAttribute("dir")==="rtl"&&this._theme!=="vertical"}_onKeyDown(t){super._onKeyDown(t);const e=t.composedPath().find(a=>a instanceof xn);["ArrowLeft","ArrowUp"].includes(t.key)&&(t.preventDefault(),this.__selectNextRadioButton(e)),["ArrowRight","ArrowDown"].includes(t.key)&&(t.preventDefault(),this.__selectPrevRadioButton(e))}_invalidChanged(t){super._invalidChanged(t),t?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")}__selectNextRadioButton(t){const e=this.__radioButtons.indexOf(t);this.__selectIncRadioButton(e,this.isHorizontalRTL?1:-1)}__selectPrevRadioButton(t){const e=this.__radioButtons.indexOf(t);this.__selectIncRadioButton(e,this.isHorizontalRTL?-1:1)}__selectIncRadioButton(t,e){const a=(this.__radioButtons.length+t+e)%this.__radioButtons.length,r=this.__radioButtons[a];r.disabled?this.__selectIncRadioButton(a,e):(r.focusElement.focus(),r.focusElement.click())}__registerRadioButton(t){t.name=this._fieldName,t.addEventListener("checked-changed",this.__onRadioButtonCheckedChange),(this.disabled||this.readonly)&&(t.disabled=!0),t.checked&&this.__selectRadioButton(t)}__unregisterRadioButton(t){t.removeEventListener("checked-changed",this.__onRadioButtonCheckedChange),t.value===this.value&&this.__selectRadioButton(null)}__onRadioButtonCheckedChange(t){t.target.checked&&this.__selectRadioButton(t.target)}__valueChanged(t,e){if(!(e===void 0&&t==="")){if(t){const a=this.__radioButtons.find(r=>r.value===t);a?(this.__selectRadioButton(a),this.toggleAttribute("has-value",!0)):console.warn(`The radio button with the value "${t}" was not found.`)}else this.__selectRadioButton(null),this.removeAttribute("has-value");e!==void 0&&this.validate()}}__readonlyChanged(t,e){!t&&e===void 0||e!==t&&this.__updateRadioButtonsDisabledProperty()}_disabledChanged(t,e){super._disabledChanged(t,e),!(!t&&e===void 0)&&e!==t&&this.__updateRadioButtonsDisabledProperty()}_shouldRemoveFocus(t){return!this.contains(t.relatedTarget)}_setFocused(t){super._setFocused(t),t||this.validate()}__selectRadioButton(t){t?this.value=t.value:this.value="",this.__radioButtons.forEach(e=>{e.checked=e===t}),this.readonly&&this.__updateRadioButtonsDisabledProperty()}__updateRadioButtonsDisabledProperty(){this.__radioButtons.forEach(t=>{this.readonly?t.disabled=t!==this.__selectedRadioButton:t.disabled=this.disabled})}}customElements.define(E1.is,E1);const Ry=O`
  :host {
    outline: none;
  }

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }
`;R("vaadin-scroller",Ry,{moduleId:"lumo-scroller"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class kd{constructor(t,e){this.host=t,this.scrollTarget=e||t,this.__boundOnScroll=this.__onScroll.bind(this)}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){this.__resizeObserver=new ResizeObserver(()=>{this.__debounceOverflow=li.debounce(this.__debounceOverflow,j1,()=>{this.__updateOverflow()})}),this.__resizeObserver.observe(this.host),this.__childObserver=new ue(this.host,t=>{t.addedNodes.forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.observe(e)}),t.removedNodes.forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.unobserve(e)}),this.__updateOverflow()}),this.scrollTarget.addEventListener("scroll",this.__boundOnScroll),this.__updateOverflow()}__onScroll(){this.__updateOverflow()}__updateOverflow(){const t=this.scrollTarget;let e="";t.scrollTop>0&&(e+=" top"),t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom");const a=Math.abs(t.scrollLeft);a>0&&(e+=" start"),a<t.scrollWidth-t.clientWidth&&(e+=" end"),e=e.trim(),e.length>0&&this.host.getAttribute("overflow")!==e?this.host.setAttribute("overflow",e):e.length===0&&this.host.hasAttribute("overflow")&&this.host.removeAttribute("overflow")}}/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class C1 extends Qe(rt(is(X(Y)))){static get template(){return V`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: block;
          overflow: auto;
        }

        :host([scroll-direction='vertical']) {
          overflow-x: hidden;
        }

        :host([scroll-direction='horizontal']) {
          overflow-y: hidden;
        }

        :host([scroll-direction='none']) {
          overflow: hidden;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-scroller"}static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}ready(){super.ready(),this.__overflowController=new kd(this),this.addController(this.__overflowController)}_shouldSetFocus(t){return t.target===this}}customElements.define(C1.is,C1);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oy=O`
  :host(:not([theme*='align'])) ::slotted([slot='value']) {
    text-align: start;
  }

  [part='input-field'] {
    cursor: var(--lumo-clickable-cursor);
  }

  [part='input-field'] ::slotted([slot='value']) {
    font-weight: 500;
  }

  [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-body-text-color);
  }

  :host([readonly]) [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-secondary-text-color);
  }

  /* placeholder styles */
  [part='input-field'] ::slotted([slot='value'][placeholder]) {
    color: inherit;
    transition: opacity 0.175s 0.1s;
    opacity: 0.5;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  /* Highlight the toggle button when hovering over the entire component */
  :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
    color: var(--lumo-contrast-80pct);
  }

  :host([theme~='small']) [part='input-field'] ::slotted([slot='value']) {
    --_lumo-selected-item-height: var(--lumo-size-s);
    --_lumo-selected-item-padding: 0;
  }
`;R("vaadin-select",[K0,Oy],{moduleId:"lumo-select"});R("vaadin-select-value-button",O`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      padding: 0 0.25em;
      --_lumo-selected-item-height: var(--lumo-size-m);
      --_lumo-selected-item-padding: 0.5em;
    }

    ::slotted(*) {
      min-height: var(--_lumo-selected-item-height);
      padding-top: var(--_lumo-selected-item-padding);
      padding-bottom: var(--_lumo-selected-item-padding);
    }

    ::slotted(*:hover) {
      background-color: transparent;
    }
  `,{moduleId:"lumo-select-value-button"});const Py=O`
  :host {
    --_lumo-item-selected-icon-display: block;
  }

  [part~='overlay'] {
    min-width: var(--vaadin-select-text-field-width);
  }

  /* Small viewport adjustment */
  :host([phone]) {
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
    left: 0 !important;
    align-items: stretch;
    justify-content: flex-end;
  }

  :host([theme~='align-left']) {
    text-align: left;
  }

  :host([theme~='align-right']) {
    text-align: right;
  }

  :host([theme~='align-center']) {
    text-align: center;
  }
`;R("vaadin-select-overlay",[Su,Py],{moduleId:"lumo-select-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class I1 extends Tu{static get is(){return"vaadin-select-item"}}customElements.define(I1.is,I1);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class S1 extends V1{static get is(){return"vaadin-select-list-box"}}customElements.define(S1.is,S1);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-select-overlay",O`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,{moduleId:"vaadin-select-overlay-styles"});class T1 extends Z0(er){static get is(){return"vaadin-select-overlay"}requestContentUpdate(){if(super.requestContentUpdate(),this.owner){const t=this._getMenuElement();this.owner._assignMenuElement(t)}}_getMenuElement(){return Array.from(this.children).find(t=>t.localName!=="style")}}customElements.define(T1.is,T1);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class R1 extends Ru(X(Y)){static get is(){return"vaadin-select-value-button"}static get template(){return V`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          min-width: 0;
          width: 0;
        }

        ::slotted(*) {
          padding-left: 0;
          padding-right: 0;
          flex: auto;
        }

        /* placeholder styles */
        ::slotted(*:not([selected])) {
          line-height: 1;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: inherit;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          line-height: inherit;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="label">
          <slot></slot>
        </span>
      </div>
    `}}customElements.define(R1.is,R1);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */R("vaadin-select",[ku,Fu],{moduleId:"vaadin-select-styles"});class O1 extends q0(Ou(ir(rt(X(Y))))){static get is(){return"vaadin-select"}static get template(){return V`
      <style>
        ::slotted([slot='value']) {
          flex-grow: 1;
        }
      </style>

      <div class="vaadin-select-container">
        <div part="label" on-click="_onClick">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-click="_onClick"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-mousedown="_onToggleMouseDown"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-select-overlay
        position-target="[[_inputContainer]]"
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[_theme]]"
      ></vaadin-select-overlay>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,value:{type:String,value:"",notify:!0,observer:"_valueChanged"},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputContainer:Object,_items:Object}}static get delegateAttrs(){return[...super.delegateAttrs,"invalid"]}static get observers(){return["_updateAriaExpanded(opened)","_updateSelectedItem(value, _items, placeholder)","_rendererChanged(renderer, _overlayElement)"]}get _valueButton(){return this._valueButtonController&&this._valueButtonController.node}constructor(){super(),this._fieldId=`${this.localName}-${X0()}`,this._boundOnKeyDown=this._onKeyDown.bind(this)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._valueButtonController=new Pu(this,"value",()=>document.createElement("vaadin-select-value-button"),(t,e)=>{this._setFocusElement(e),this.ariaTarget=e,this.stateTarget=e,e.setAttribute("aria-haspopup","listbox"),e.setAttribute("aria-labelledby",`${this._labelId} ${this._fieldId}`),this._updateAriaExpanded(t.opened),e.addEventListener("keydown",this._boundOnKeyDown)}),this.addController(this._valueButtonController),this.addController(new Lu(this._phoneMediaQuery,t=>{this._phone=t})),ar(this)}requestContentUpdate(){!this._overlayElement||(this._overlayElement.requestContentUpdate(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items))}_requiredChanged(t){super._requiredChanged(t),t===!1&&this.validate()}_rendererChanged(t,e){!e||(e.setProperties({owner:this,renderer:t||this.__defaultRenderer}),this.requestContentUpdate())}__itemsChanged(t,e){(t||e)&&this.requestContentUpdate()}_assignMenuElement(t){t&&t!==this.__lastMenuElement&&(this._menuElement=t,this.__initMenuItems(t),t.addEventListener("items-changed",()=>{this.__initMenuItems(t)}),t.addEventListener("selected-changed",()=>this.__updateValueButton()),t.addEventListener("keydown",e=>this._onKeyDownInside(e),!0),t.addEventListener("click",()=>{this.__userInteraction=!0,this.opened=!1},!0),t.setAttribute("role","listbox"),this.__lastMenuElement=t)}__initMenuItems(t){t.items&&(this._items=t.items,this._items.forEach(e=>e.setAttribute("role","option")))}_valueChanged(t,e){this.toggleAttribute("has-value",Boolean(t)),e!==void 0&&this.validate()}_onClick(t){t.preventDefault(),this.opened=!this.readonly}_onToggleMouseDown(t){t.preventDefault()}_onKeyDown(t){if(!this.readonly&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(t.key))t.preventDefault(),this.opened=!0;else if(/[\p{L}\p{Nd}]/u.test(t.key)&&t.key.length===1){const e=this._menuElement.selected,a=e!==void 0?e:-1,r=this._menuElement._searchKey(a,t.key);r>=0&&(this.__userInteraction=!0,this._updateAriaLive(!0),this._menuElement.selected=r)}}}_onKeyDownInside(t){/^(Tab)$/.test(t.key)&&(this.opened=!1)}_openedChanged(t,e){if(t){if(this._updateAriaLive(!1),!this._overlayElement||!this._menuElement||!this.focusElement||this.disabled||this.readonly){this.opened=!1;return}this._overlayElement.style.setProperty("--vaadin-select-text-field-width",`${this._inputContainer.offsetWidth}px`);const a=this.hasAttribute("focus-ring");this._openedWithFocusRing=a,a&&this.removeAttribute("focus-ring"),this._menuElement.focus()}else e&&(this.focus(),this._openedWithFocusRing&&this.setAttribute("focus-ring",""),this.validate())}_updateAriaExpanded(t){this._valueButton&&this._valueButton.setAttribute("aria-expanded",t?"true":"false")}_updateAriaLive(t){this._valueButton&&(t?this._valueButton.setAttribute("aria-live","polite"):this._valueButton.removeAttribute("aria-live"))}__attachSelectedItem(t){let e;const a=t.getAttribute("label");a?e=this.__createItemElement({label:a}):e=t.cloneNode(!0),e._sourceItem=t,this.__appendValueItemElement(e),e.selected=!0}__createItemElement(t){const e=document.createElement(t.component||"vaadin-select-item");return t.label&&(e.textContent=t.label),t.value&&(e.value=t.value),t.disabled&&(e.disabled=t.disabled),e}__appendValueItemElement(t){t.removeAttribute("tabindex"),t.removeAttribute("role"),t.setAttribute("id",this._fieldId),this._valueButton.appendChild(t)}__updateValueButton(){if(!this._valueButton)return;this._valueButton.innerHTML="";const t=this._items[this._menuElement.selected];if(this._valueButton.removeAttribute("placeholder"),t)this.__attachSelectedItem(t),this._valueChanging||(this._selectedChanging=!0,this.value=t.value||"",this.__userInteraction&&(this.opened=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging);else if(this.placeholder){const e=this.__createItemElement({label:this.placeholder});this.__appendValueItemElement(e),this._valueButton.setAttribute("placeholder","")}}_updateSelectedItem(t,e){if(e){const a=t==null?t:t.toString();this._menuElement.selected=e.reduce((r,n,s)=>r===void 0&&n.value===a?s:r,void 0),this._selectedChanging||(this._valueChanging=!0,this.__updateValueButton(),delete this._valueChanging)}}_shouldRemoveFocus(){return!this.opened}_setFocused(t){super._setFocused(t),t||this.validate()}checkValidity(){return!this.required||this.readonly||!!this.value}__defaultRenderer(t,e){if(!this.items||this.items.length===0){t.textContent="";return}let a=t.firstElementChild;a||(a=document.createElement("vaadin-select-list-box"),t.appendChild(a)),a.textContent="",this.items.forEach(r=>{a.appendChild(this.__createItemElement(r))})}}customElements.define(O1.is,O1);R("vaadin-split-layout",O`
    [part='splitter'] {
      min-width: var(--lumo-space-s);
      min-height: var(--lumo-space-s);
      background-color: var(--lumo-contrast-5pct);
      transition: 0.1s background-color;
    }

    [part='handle'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--lumo-size-m);
      height: var(--lumo-size-m);
    }

    [part='handle']::after {
      content: '';
      display: block;
      width: 4px;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-30pct);
      transition: 0.1s opacity, 0.1s background-color;
    }

    :host([orientation='vertical']) [part='handle']::after {
      width: 100%;
      height: 4px;
    }

    /* Hover style */
    [part='splitter']:hover [part='handle']::after {
      background-color: var(--lumo-contrast-40pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      [part='splitter']:hover [part='handle']::after {
        background-color: var(--lumo-contrast-30pct);
      }
    }

    /* Active style */
    [part='splitter']:active [part='handle']::after {
      background-color: var(--lumo-contrast-50pct);
    }

    /* Small/minimal */
    :host([theme~='small']) > [part='splitter'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    :host([theme~='small']) > [part='splitter'],
    :host([theme~='minimal']) > [part='splitter'] {
      min-width: 0;
      min-height: 0;
      background-color: transparent;
    }

    :host([theme~='small']) > [part='splitter']::after,
    :host([theme~='minimal']) > [part='splitter']::after {
      content: '';
      position: absolute;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    :host([theme~='small']) > [part='splitter'] > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter'] > [part='handle']::after {
      opacity: 0;
    }

    :host([theme~='small']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='small']) > [part='splitter']:active > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:active > [part='handle']::after {
      opacity: 1;
    }

    /* RTL specific styles */
    :host([theme~='small'][dir='rtl']) > [part='splitter'] {
      border-left: auto;
      border-right: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-split-layout"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class P1 extends rt(X(Y)){static get template(){return V`
      <style>
        :host {
          display: flex;
          overflow: hidden !important;
          transform: translateZ(0);
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          flex-direction: column;
        }

        :host ::slotted(*) {
          flex: 1 1 auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='splitter'] {
          flex: none;
          position: relative;
          z-index: 1;
          overflow: visible;
          min-width: 8px;
          min-height: 8px;
        }

        :host(:not([orientation='vertical'])) > [part='splitter'] {
          cursor: ew-resize;
        }

        :host([orientation='vertical']) > [part='splitter'] {
          cursor: ns-resize;
        }

        [part='handle'] {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      </style>
      <slot id="primary" name="primary"></slot>
      <div part="splitter" id="splitter">
        <div part="handle"></div>
      </div>
      <slot id="secondary" name="secondary"></slot>
    `}static get is(){return"vaadin-split-layout"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),this.__observer=new ue(this,e=>{this._cleanupNodes(e.removedNodes),this._processChildren()});const t=this.$.splitter;Hn(t,"track",this._onHandleTrack.bind(this)),Hn(t,"down",this._setPointerEventsNone.bind(this)),Hn(t,"up",this._restorePointerEvents.bind(this))}_cleanupNodes(t){t.forEach(e=>{e.removeAttribute("slot")})}_processChildren(){[...this.children].forEach((t,e)=>{e===0?(this._primaryChild=t,t.setAttribute("slot","primary")):e===1?(this._secondaryChild=t,t.setAttribute("slot","secondary")):t.removeAttribute("slot")})}_setFlexBasis(t,e,a){e=Math.max(0,Math.min(e,a)),e===0&&(e=1e-6),t.style.flex=`1 1 ${e}px`}_setPointerEventsNone(t){!this._primaryChild||!this._secondaryChild||(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",t.preventDefault())}_restorePointerEvents(){!this._primaryChild||!this._secondaryChild||(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(t){if(!this._primaryChild||!this._secondaryChild)return;const e=this.orientation==="vertical"?"height":"width";if(t.detail.state==="start"){this._startSize={container:this.getBoundingClientRect()[e]-this.$.splitter.getBoundingClientRect()[e],primary:this._primaryChild.getBoundingClientRect()[e],secondary:this._secondaryChild.getBoundingClientRect()[e]};return}const a=this.orientation==="vertical"?t.detail.dy:t.detail.dx,n=this.orientation!=="vertical"&&this.getAttribute("dir")==="rtl"?-a:a;this._setFlexBasis(this._primaryChild,this._startSize.primary+n,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-n,this._startSize.container),t.detail.state==="end"&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(P1.is,P1);R("vaadin-tab",O`
    :host {
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      font-weight: 500;
      opacity: 1;
      color: var(--lumo-secondary-text-color);
      transition: 0.15s color, 0.2s transform;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      position: relative;
      cursor: var(--lumo-clickable-cursor);
      transform-origin: 50% 100%;
      outline: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      min-width: var(--lumo-size-m);
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    :host(:not([orientation='vertical'])) {
      text-align: center;
    }

    :host([orientation='vertical']) {
      transform-origin: 0% 50%;
      padding: 0.25rem 1rem;
      min-height: var(--lumo-size-m);
      min-width: 0;
    }

    :host(:hover),
    :host([focus-ring]) {
      color: var(--lumo-body-text-color);
    }

    :host([selected]) {
      color: var(--lumo-primary-text-color);
      transition: 0.6s color;
    }

    :host([active]:not([selected])) {
      color: var(--lumo-primary-text-color);
      transition-duration: 0.1s;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      display: var(--_lumo-tab-marker-display, block);
      bottom: 0;
      left: 50%;
      width: var(--lumo-size-s);
      height: 2px;
      background-color: var(--lumo-contrast-60pct);
      border-radius: var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0 0;
      transform: translateX(-50%) scale(0);
      transform-origin: 50% 100%;
      transition: 0.14s transform cubic-bezier(0.12, 0.32, 0.54, 1);
      will-change: transform;
    }

    :host([selected])::before,
    :host([selected])::after {
      background-color: var(--lumo-primary-color);
    }

    :host([orientation='vertical'])::before,
    :host([orientation='vertical'])::after {
      left: 0;
      bottom: 50%;
      transform: translateY(50%) scale(0);
      width: 2px;
      height: var(--lumo-size-xs);
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      transform-origin: 100% 50%;
    }

    :host::after {
      box-shadow: 0 0 0 4px var(--lumo-primary-color);
      opacity: 0.15;
      transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
    }

    :host([selected])::before,
    :host([selected])::after {
      transform: translateX(-50%) scale(1);
      transition-timing-function: cubic-bezier(0.12, 0.32, 0.54, 1.5);
    }

    :host([orientation='vertical'][selected])::before,
    :host([orientation='vertical'][selected])::after {
      transform: translateY(50%) scale(1);
    }

    :host([selected]:not([active]))::after {
      opacity: 0;
    }

    :host(:not([orientation='vertical'])) ::slotted(a[href]) {
      justify-content: center;
    }

    :host ::slotted(a) {
      display: flex;
      width: 100%;
      align-items: center;
      height: 100%;
      margin: -0.5rem -0.75rem;
      padding: 0.5rem 0.75rem;
      outline: none;

      /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
      text-decoration: none !important;
      color: inherit !important;
    }

    :host ::slotted(vaadin-icon),
    :host ::slotted(iron-icon) {
      margin: 0 4px;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    :host ::slotted(vaadin-icon[icon^='vaadin:']),
    :host ::slotted(iron-icon[icon^='vaadin:']) {
      padding: 0.25rem;
      box-sizing: border-box !important;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:first-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:first-child) {
      margin-left: 0;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:last-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:last-child) {
      margin-right: 0;
    }

    :host([theme~='icon-on-top']) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      padding-bottom: 0.5rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(a) {
      flex-direction: column;
      align-items: center;
      margin-top: -0.25rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(vaadin-icon),
    :host([theme~='icon-on-top']) ::slotted(iron-icon) {
      margin: 0;
    }

    /* Disabled */

    :host([disabled]) {
      pointer-events: none;
      opacity: 1;
      color: var(--lumo-disabled-text-color);
    }

    /* Focus-ring */

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      border-radius: var(--lumo-border-radius-m);
    }

    /* RTL specific styles */

    :host([dir='rtl'])::before,
    :host([dir='rtl'])::after {
      left: auto;
      right: 50%;
      transform: translateX(50%) scale(0);
    }

    :host([dir='rtl'][selected]:not([orientation='vertical']))::before,
    :host([dir='rtl'][selected]:not([orientation='vertical']))::after {
      transform: translateX(50%) scale(1);
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:first-child),
    :host([dir='rtl']) ::slotted(iron-icon:first-child) {
      margin-right: 0;
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:last-child),
    :host([dir='rtl']) ::slotted(iron-icon:last-child) {
      margin-left: 0;
    }

    :host([orientation='vertical'][dir='rtl']) {
      transform-origin: 100% 50%;
    }

    :host([dir='rtl'][orientation='vertical'])::before,
    :host([dir='rtl'][orientation='vertical'])::after {
      left: auto;
      right: 0;
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      transform-origin: 0% 50%;
    }
  `,{moduleId:"lumo-tab"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class L1 extends rt(X(Du(Y))){static get template(){return V`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
    `}static get is(){return"vaadin-tab"}ready(){super.ready(),this.setAttribute("role","tab")}_onKeyUp(t){const e=this.hasAttribute("active");if(super._onKeyUp(t),e){const a=this.querySelector("a");a&&a.click()}}}customElements.define(L1.is,L1);R("vaadin-tabs",O`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([orientation='vertical'])) {
      box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
      position: relative;
      min-height: var(--lumo-size-l);
    }

    :host([orientation='horizontal']) [part='tabs'] ::slotted(vaadin-tab:not([theme~='icon-on-top'])) {
      justify-content: center;
    }

    :host([orientation='vertical']) {
      box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([orientation='horizontal']) [part='tabs'] {
      margin: 0 0.75rem;
    }

    :host([orientation='vertical']) [part='tabs'] {
      width: 100%;
      margin: 0.5rem 0;
    }

    [part='forward-button'],
    [part='back-button'] {
      position: absolute;
      z-index: 1;
      font-family: lumo-icons;
      color: var(--lumo-tertiary-text-color);
      font-size: var(--lumo-icon-size-m);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 100%;
      transition: 0.2s opacity;
      top: 0;
    }

    [part='forward-button']:hover,
    [part='back-button']:hover {
      color: inherit;
    }

    :host(:not([dir='rtl'])) [part='forward-button'] {
      right: 0;
    }

    [part='forward-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    [part='back-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    /* Tabs overflow */

    [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: none;
      -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
      mask-image: var(--_lumo-tabs-overflow-mask-image);
    }

    /* Horizontal tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
    }

    /* Vertical tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
    }

    /* End overflowing */
    :host([overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
    }

    /* Start overflowing */
    :host([overflow~='start'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
    }

    :host [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: var(--lumo-space-m);
    }

    /* Centered */

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:first-of-type) {
      margin-inline-start: auto;
    }

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:last-of-type) {
      margin-inline-end: auto;
    }

    /* Small */

    :host([theme~='small']),
    :host([theme~='small']) [part='tabs'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='small']) [part='tabs'] ::slotted(vaadin-tab) {
      font-size: var(--lumo-font-size-s);
    }

    /* Minimal */

    :host([theme~='minimal']) {
      box-shadow: none;
      --_lumo-tab-marker-display: none;
    }

    /* Hide-scroll-buttons */

    :host([theme~='hide-scroll-buttons']) [part='back-button'],
    :host([theme~='hide-scroll-buttons']) [part='forward-button'] {
      display: none;
    }

    /* prettier-ignore */
    :host([theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
    }

    /* Equal-width tabs */
    :host([theme~='equal-width-tabs']) {
      flex: auto;
    }

    :host([theme~='equal-width-tabs']) [part='tabs'] ::slotted(vaadin-tab) {
      flex: 1 0 0%;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='forward-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    :host([dir='rtl']) [part='back-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    :host([orientation='vertical'][dir='rtl']) {
      box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']) [part='forward-button'] {
      left: 0;
    }

    :host([dir='rtl']) [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: 0;
      margin-right: var(--lumo-space-m);
    }

    /* Both ends overflowing */
    :host([dir='rtl'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([dir='rtl'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([dir='rtl'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical']))
      [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
    }
  `,{moduleId:"lumo-tabs"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class k1 extends An(rt(Nu(X(Y)))){static get template(){return V`
      <style>
        :host {
          display: flex;
          align-items: center;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          display: block;
        }

        :host([orientation='horizontal']) [part='tabs'] {
          flex-grow: 1;
          display: flex;
          align-self: stretch;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
        @-moz-document url-prefix() {
          :host([orientation='horizontal']) [part='tabs'] {
            overflow: hidden;
          }
        }

        :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
          display: none;
        }

        :host([orientation='vertical']) [part='tabs'] {
          height: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='back-button'],
        [part='forward-button'] {
          pointer-events: none;
          opacity: 0;
          cursor: default;
        }

        :host([overflow~='start']) [part='back-button'],
        :host([overflow~='end']) [part='forward-button'] {
          pointer-events: auto;
          opacity: 1;
        }

        [part='back-button']::after {
          content: '◀';
        }

        [part='forward-button']::after {
          content: '▶';
        }

        :host([orientation='vertical']) [part='back-button'],
        :host([orientation='vertical']) [part='forward-button'] {
          display: none;
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='back-button']::after {
          content: '▶';
        }

        :host([dir='rtl']) [part='forward-button']::after {
          content: '◀';
        }
      </style>
      <div on-click="_scrollBack" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div on-click="_scrollForward" part="forward-button" aria-hidden="true"></div>
    `}static get is(){return"vaadin-tabs"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items, items.*)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),U1(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(t){this.__itemsResizeObserver.disconnect(),(t||[]).forEach(e=>{this.__itemsResizeObserver.observe(e)}),this._updateOverflow()}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.getAttribute("dir")==="rtl"?1:-1}_updateOverflow(){const t=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement),e=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let a=t>0?"start":"";a+=t+this._scrollOffset<e?" end":"",this.__direction===1&&(a=a.replace(/start|end/gi,r=>r==="start"?"end":"start")),a?this.setAttribute("overflow",a.trim()):this.removeAttribute("overflow")}}customElements.define(k1.is,k1);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fd=document.createElement("template");Fd.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Fd.content);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class F1 extends Qe(X(Y)){static get template(){return V`
      <style>
        :host {
          display: block;
        }

        [hidden] {
          display: none;
        }

        [part='row'] {
          list-style-type: none;
        }

        button {
          background: transparent;
          padding: 0;
          border: none;
          box-shadow: none;
        }
      </style>

      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!file.complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!file.error]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[file.name]]</div>
            <div part="status" hidden$="[[!file.status]]" id="status">[[file.status]]</div>
            <div part="error" id="error" hidden$="[[!file.error]]">[[file.error]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!file.held]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!file.error]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <vaadin-progress-bar
        part="progress"
        id="progress"
        value$="[[_formatProgressValue(file.progress)]]"
        error$="[[file.error]]"
        indeterminate$="[[file.indeterminate]]"
        uploading$="[[file.uploading]]"
        complete$="[[file.complete]]"
      ></vaadin-progress-bar>
    `}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object,i18n:Object,tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}ready(){super.ready(),this.shadowRoot.addEventListener("focusin",t=>{t.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",t=>{t.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(t){return t.composedPath()[0]===this}_fileAborted(t){t&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(t){return t/100}_fireFileEvent(t){return t.preventDefault(),this.dispatchEvent(new CustomEvent(t.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(t,e){const a=Boolean(t);this.hasAttribute(e)!==a&&(a?this.setAttribute(e,""):this.removeAttribute(e))}}customElements.define(F1.is,F1);R("vaadin-upload",O`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition: background-color 0.6s, border-color 0.6s;
    }

    [part='primary-buttons'] > * {
      display: inline-block;
      white-space: nowrap;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition: background-color 0.1s, border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }

    [part='drop-label-icon'] {
      display: inline-block;
    }

    [part='drop-label-icon']::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }

    [part='file-list'] > *:not(:first-child) > * {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload"});const Ly=O`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  [part='progress'] {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }

  [part='progress'][complete],
  [part='progress'][error] {
    display: none;
  }
`;R("vaadin-upload-file",[Q1,Ly],{moduleId:"lumo-upload-file"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class D1 extends rt(X(Y)){static get template(){return V`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }

        [part='file-list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>

      <div part="primary-buttons">
        <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
          <slot name="add-button">
            <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
              [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
            </vaadin-button>
          </slot>
        </div>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon">
            <div part="drop-label-icon"></div>
          </slot>
          <slot name="drop-label" id="dropLabel"> [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]] </slot>
        </div>
      </div>
      <slot name="file-list">
        <ul id="fileList" part="file-list">
          <template is="dom-repeat" items="[[files]]" as="file">
            <li>
              <vaadin-upload-file file="[[file]]" i18n="[[i18n]]"></vaadin-upload-file>
            </li>
          </template>
        </ul>
      </slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:W1},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[]},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this))}_formatSize(t){if(typeof this.i18n.formatSize=="function")return this.i18n.formatSize(t);const e=this.i18n.units.sizeBase||1e3,a=~~(Math.log(t)/Math.log(e)),r=Math.max(0,Math.min(3,a-1));return`${parseFloat((t/e**a).toFixed(r))} ${this.i18n.units.size[a]}`}_splitTimeByUnits(t){const e=[60,60,24,1/0],a=[0];for(let r=0;r<e.length&&t>0;r++)a[r]=t%e[r],t=Math.floor(t/e[r]);return a}_formatTime(t,e){if(typeof this.i18n.formatTime=="function")return this.i18n.formatTime(t,e);for(;e.length<3;)e.push(0);return e.reverse().map(a=>(a<10?"0":"")+a).join(":")}_formatFileProgress(t){const e=t.loaded>0?this.i18n.uploading.remainingTime.prefix+t.remainingStr:this.i18n.uploading.remainingTime.unknown;return`${t.totalStr}: ${t.progress}% (${e})`}_maxFilesAdded(t,e){return t>=0&&e>=t}_onDragover(t){t.preventDefault(),!this.nodrop&&!this._dragover&&(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),t.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(t){t.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(t){this.nodrop||(t.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(t.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(t){if(typeof this.headers=="string")try{this.headers=JSON.parse(this.headers)}catch{this.headers=void 0}Object.entries(this.headers).forEach(([e,a])=>{t.setRequestHeader(e,a)}),this.timeout&&(t.timeout=this.timeout),t.withCredentials=this.withCredentials}_setStatus(t,e,a,r){t.elapsed=r,t.elapsedStr=this._formatTime(t.elapsed,this._splitTimeByUnits(t.elapsed)),t.remaining=Math.ceil(r*(e/a-1)),t.remainingStr=this._formatTime(t.remaining,this._splitTimeByUnits(t.remaining)),t.speed=~~(e/r/1024),t.totalStr=this._formatSize(e),t.loadedStr=this._formatSize(a),t.status=this._formatFileProgress(t)}uploadFiles(t){t&&!Array.isArray(t)&&(t=[t]),t=t||this.files,t=t.filter(e=>!e.complete),Array.prototype.forEach.call(t,this._uploadFile.bind(this))}_uploadFile(t){if(t.uploading)return;const e=Date.now(),a=t.xhr=this._createXhr();let r,n;a.upload.onprogress=l=>{clearTimeout(r),n=Date.now();const c=(n-e)/1e3,d=l.loaded,u=l.total,v=~~(d/u*100);t.loaded=d,t.progress=v,t.indeterminate=d<=0||d>=u,t.error?t.indeterminate=t.status=void 0:t.abort||(v<100?(this._setStatus(t,u,d,c),r=setTimeout(()=>{t.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(t)},2e3)):(t.loadedStr=t.totalStr,t.status=this.i18n.uploading.status.processing)),this._notifyFileChanges(t),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:t,xhr:a}}))},a.onreadystatechange=()=>{if(a.readyState===4){if(clearTimeout(r),t.indeterminate=t.uploading=!1,t.abort){this._notifyFileChanges(t);return}if(t.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:t,xhr:a},cancelable:!0})))return;a.status===0?t.error=this.i18n.uploading.error.serverUnavailable:a.status>=500?t.error=this.i18n.uploading.error.unexpectedServerError:a.status>=400&&(t.error=this.i18n.uploading.error.forbidden),t.complete=!t.error,this.dispatchEvent(new CustomEvent(`upload-${t.error?"error":"success"}`,{detail:{file:t,xhr:a}})),this._notifyFileChanges(t)}};const s=new FormData;if(t.uploadTarget=t.uploadTarget||this.target||"",t.formDataName=this.formDataName,!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:t,xhr:a},cancelable:!0})))return;s.append(t.formDataName,t,t.name),a.open(this.method,t.uploadTarget,!0),this._configureXhr(a),t.status=this.i18n.uploading.status.connecting,t.uploading=t.indeterminate=!0,t.complete=t.abort=t.error=t.held=!1,a.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:t,xhr:a}})),this._notifyFileChanges(t)},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:t,xhr:a,formData:s},cancelable:!0}))&&a.send(s)}_retryFileUpload(t){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:t,xhr:t.xhr},cancelable:!0}))&&this._uploadFile(t)}_abortFileUpload(t){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:t,xhr:t.xhr},cancelable:!0}))&&(t.abort=!0,t.xhr&&t.xhr.abort(),this._notifyFileChanges(t))}_notifyFileChanges(t){const e=`files.${this.files.indexOf(t)}.`;Object.keys(t).forEach(a=>{this.notifyPath(e+a,t[a])})}_addFiles(t){Array.prototype.forEach.call(t,this._addFile.bind(this))}_addFile(t){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.tooManyFiles}}));return}if(this.maxFileSize>=0&&t.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.fileIsTooBig}}));return}const e=t.name.match(/\.[^.]*$|$/)[0],a=new RegExp(`^(${this.accept.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")})$`,"i");if(this.accept&&!(a.test(t.type)||a.test(e))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.incorrectFileType}}));return}t.loaded=0,t.held=!0,t.status=this.i18n.uploading.status.held,this.files=[t,...this.files],this.noAuto||this._uploadFile(t)}_removeFile(t){this.files.indexOf(t)>-1&&(this.files=this.files.filter(e=>e!==t))}_onAddFilesTouchEnd(t){t.preventDefault(),this._onAddFilesClick(t)}_onAddFilesClick(t){this.maxFilesReached||(t.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(t){this._addFiles(t.target.files)}_onFileStart(t){this._uploadFile(t.detail.file)}_onFileRetry(t){this._retryFileUpload(t.detail.file)}_onFileAbort(t){this._abortFileUpload(t.detail.file)}_onFileRemove(t){this._removeFile(t.detail.file)}_onFileReject(t){Me(`${t.detail.file.name}: ${t.detail.file.error}`,{mode:"alert"})}_onUploadStart(t){Me(`${t.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(t){Me(`${t.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(t){Me(`${t.detail.file.name}: ${t.detail.file.error}`,{mode:"alert"})}_dragoverChanged(t){t?this.setAttribute("dragover",t):this.removeAttribute("dragover")}_dragoverValidChanged(t){t?this.setAttribute("dragover-valid",t):this.removeAttribute("dragover-valid")}_i18nPlural(t,e){return t===1?e.one:e.many}_isMultiple(t){return t!==1}}customElements.define(D1.is,D1);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class N1 extends rt(is(X(Y))){static get template(){return V`
      <style>
        :host {
          display: block;
          height: 400px;
          overflow: auto;
          flex: auto;
          align-self: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([grid])) #items > ::slotted(*) {
          width: 100%;
        }
      </style>

      <div id="items">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-virtual-list"}static get properties(){return{items:{type:Array},renderer:Function,__virtualizer:Object}}static get observers(){return["__itemsOrRendererChanged(items, renderer, __virtualizer)"]}ready(){super.ready(),this.__virtualizer=new Bu({createElements:this.__createElements,updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.shadowRoot.querySelector("#items")}),this.__overflowController=new kd(this),this.addController(this.__overflowController),ar(this)}scrollToIndex(t){this.__virtualizer.scrollToIndex(t)}__createElements(t){return[...Array(t)].map(()=>document.createElement("div"))}__updateElement(t,e){t.__renderer!==this.renderer&&(t.__renderer=this.renderer,this.__clearRenderTargetContent(t)),this.renderer&&this.renderer(t,this,{item:this.items[e],index:e})}__clearRenderTargetContent(t){t.innerHTML="",delete t._$litPart$}__itemsOrRendererChanged(t,e,a){const r=this.childElementCount>0;(e||r)&&a&&(a.size=(t||[]).length,a.update())}get firstVisibleIndex(){return this.__virtualizer.firstVisibleIndex}get lastVisibleIndex(){return this.__virtualizer.lastVisibleIndex}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}}customElements.define(N1.is,N1);const jy=function(i,t=!1){const e=document.createElement("template");e.innerHTML=i,document.head[t?"insertBefore":"appendChild"](e.content,document.head.firstChild)};export{jy as addCssBlock};
