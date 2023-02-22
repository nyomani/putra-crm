import{r as T,i as E,T as R,a as Lo,A as Bs,y as Fo,c as Us,t as Ws,b as kt,d as No,e as Ro,f as je,g as $o,x as Ho,h as Vo,w as Bo,_ as Uo}from"./indexhtml.d30d7242.js";T("vaadin-app-layout",E`
    [part='navbar']::before {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {
      border-right: 1px solid var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']:not([overlay])) [part='drawer'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
    }

    [part='navbar']::before,
    :host([overlay]) [part='drawer']::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
      height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }

    @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
      [part='navbar']::before {
        opacity: 0.8;
      }

      [part='navbar'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }

      :host([overlay]) [part='drawer']::before {
        opacity: 0.9;
      }

      :host([overlay]) [part='drawer'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }
    }
  `,{moduleId:"lumo-app-layout"});const qs=document.createElement("template");qs.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(qs.content);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zt=r=>r.test(navigator.userAgent),xi=r=>r.test(navigator.platform),Wo=r=>r.test(navigator.vendor),qo=Zt(/Android/),Yo=Zt(/Chrome/)&&Wo(/Google Inc/),Ys=Zt(/Firefox/),Go=xi(/^iPad/)||xi(/^Mac/)&&navigator.maxTouchPoints>1,jo=xi(/^iPhone/),It=jo||Go,Gs=Zt(/^((?!chrome|android).)*safari/i),ft=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function js(){if(It){const r=window.innerHeight,e=window.innerWidth>r,i=document.documentElement.clientHeight;e&&i>r?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${i-r}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}js();window.addEventListener("resize",js);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(r,t){return r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function tt(r,t,e){return{index:r,removed:t,addedCount:e}}const Ks=0,Qs=1,Ai=2,Ei=3;function Ko(r,t,e,i,s,n){let o=n-s+1,a=e-t+1,l=new Array(o);for(let d=0;d<o;d++)l[d]=new Array(a),l[d][0]=d;for(let d=0;d<a;d++)l[0][d]=d;for(let d=1;d<o;d++)for(let c=1;c<a;c++)if(Ui(r[t+c-1],i[s+d-1]))l[d][c]=l[d-1][c-1];else{let u=l[d-1][c]+1,m=l[d][c-1]+1;l[d][c]=u<m?u:m}return l}function Qo(r){let t=r.length-1,e=r[0].length-1,i=r[t][e],s=[];for(;t>0||e>0;){if(t==0){s.push(Ai),e--;continue}if(e==0){s.push(Ei),t--;continue}let n=r[t-1][e-1],o=r[t-1][e],a=r[t][e-1],l;o<a?l=o<n?o:n:l=a<n?a:n,l==n?(n==i?s.push(Ks):(s.push(Qs),i=n),t--,e--):l==o?(s.push(Ei),t--,i=o):(s.push(Ai),e--,i=a)}return s.reverse(),s}function Xo(r,t,e,i,s,n){let o=0,a=0,l,d=Math.min(e-t,n-s);if(t==0&&s==0&&(o=Jo(r,i,d)),e==r.length&&n==i.length&&(a=Zo(r,i,d-o)),t+=o,s+=o,e-=a,n-=a,e-t==0&&n-s==0)return[];if(t==e){for(l=tt(t,[],0);s<n;)l.removed.push(i[s++]);return[l]}else if(s==n)return[tt(t,[],e-t)];let c=Qo(Ko(r,t,e,i,s,n));l=void 0;let u=[],m=t,y=s;for(let A=0;A<c.length;A++)switch(c[A]){case Ks:l&&(u.push(l),l=void 0),m++,y++;break;case Qs:l||(l=tt(m,[],0)),l.addedCount++,m++,l.removed.push(i[y]),y++;break;case Ai:l||(l=tt(m,[],0)),l.addedCount++,m++;break;case Ei:l||(l=tt(m,[],0)),l.removed.push(i[y]),y++;break}return l&&u.push(l),u}function Jo(r,t,e){for(let i=0;i<e;i++)if(!Ui(r[i],t[i]))return i;return e}function Zo(r,t,e){let i=r.length,s=t.length,n=0;for(;n<e&&Ui(r[--i],t[--s]);)n++;return n}function ea(r,t){return Xo(r,0,r.length,t,0,t.length)}function Ui(r,t){return r===t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ta=0,Xs=0,We=[],ia=0,Ti=!1,Js=document.createTextNode("");new window.MutationObserver(ra).observe(Js,{characterData:!0});function ra(){Ti=!1;const r=We.length;for(let t=0;t<r;t++){let e=We[t];if(e)try{e()}catch(i){setTimeout(()=>{throw i})}}We.splice(0,r),Xs+=r}const _t={after(r){return{run(t){return window.setTimeout(t,r)},cancel(t){window.clearTimeout(t)}}},run(r,t){return window.setTimeout(r,t)},cancel(r){window.clearTimeout(r)}},sa={run(r){return window.requestAnimationFrame(r)},cancel(r){window.cancelAnimationFrame(r)}},na={run(r){return window.requestIdleCallback?window.requestIdleCallback(r):window.setTimeout(r,16)},cancel(r){window.cancelIdleCallback?window.cancelIdleCallback(r):window.clearTimeout(r)}},ei={run(r){return Ti||(Ti=!0,Js.textContent=ia++),We.push(r),ta++},cancel(r){const t=r-Xs;if(t>=0){if(!We[t])throw new Error("invalid async handle: "+r);We[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const D=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?r=>ShadyDOM.patch(r):r=>r;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Re(r){return r.localName==="slot"}let X=class{static getFlattenedNodes(r){const t=D(r);return Re(r)?(r=r,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>Re(e)?(e=e,D(e).assignedNodes({flatten:!0})):[e]).reduce((e,i)=>e.concat(i),[])}constructor(r,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=r,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Re(this._target)?this._listenSlots([this._target]):D(this._target).children&&(this._listenSlots(D(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,r=>{this._processMutations(r)}):(this._nativeChildrenObserver=new MutationObserver(r=>{this._processMutations(r)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Re(this._target)?this._unlistenSlots([this._target]):D(this._target).children&&(this._unlistenSlots(D(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,ei.run(()=>this.flush()))}_processMutations(r){this._processSlotMutations(r),this.flush()}_processSlotMutations(r){if(r)for(let t=0;t<r.length;t++){let e=r[t];e.addedNodes&&this._listenSlots(e.addedNodes),e.removedNodes&&this._unlistenSlots(e.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let r={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),e=ea(t,this._effectiveNodes);for(let s=0,n;s<e.length&&(n=e[s]);s++)for(let o=0,a;o<n.removed.length&&(a=n.removed[o]);o++)r.removedNodes.push(a);for(let s=0,n;s<e.length&&(n=e[s]);s++)for(let o=n.index;o<n.index+n.addedCount;o++)r.addedNodes.push(t[o]);this._effectiveNodes=t;let i=!1;return(r.addedNodes.length||r.removedNodes.length)&&(i=!0,this.callback.call(this._target,r)),i}_listenSlots(r){for(let t=0;t<r.length;t++){let e=r[t];Re(e)&&e.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(r){for(let t=0;t<r.length;t++){let e=r[t];Re(e)&&e.removeEventListener("slotchange",this._boundSchedule)}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Vt=!1,Zs=[],en=[];function tn(){Vt=!0,requestAnimationFrame(function(){Vt=!1,oa(Zs),setTimeout(function(){aa(en)})})}function oa(r){for(;r.length;)rn(r.shift())}function aa(r){for(let t=0,e=r.length;t<e;t++)rn(r.shift())}function rn(r){const t=r[0],e=r[1],i=r[2];try{e.apply(t,i)}catch(s){setTimeout(()=>{throw s})}}function sn(r,t,e){Vt||tn(),Zs.push([r,t,e])}function Wi(r,t,e){Vt||tn(),en.push([r,t,e])}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let la=/(url\()([^)]*)(\))/g,da=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Ot,ee;function ht(r,t){if(r&&da.test(r)||r==="//")return r;if(Ot===void 0){Ot=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",Ot=e.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),Ot)try{return new URL(r,t).href}catch{return r}return ee||(ee=document.implementation.createHTMLDocument("temp"),ee.base=ee.createElement("base"),ee.head.appendChild(ee.base),ee.anchor=ee.createElement("a"),ee.body.appendChild(ee.anchor)),ee.base.href=t,ee.anchor.href=r,ee.anchor.href||r}function qi(r,t){return r.replace(la,function(e,i,s,n){return i+"'"+ht(s.replace(/["']/g,""),t)+"'"+n})}function Yi(r){return r.substring(0,r.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const nn=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const ca=nn&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const r=new CSSStyleSheet;r.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[r],t.shadowRoot.adoptedStyleSheets[0]===r}catch{return!1}})();let ha=window.Polymer&&window.Polymer.rootPath||Yi(document.baseURI||window.location.href),Bt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Mu=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,mt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ua=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,on=window.Polymer&&window.Polymer.legacyOptimizations||!1,an=window.Polymer&&window.Polymer.legacyWarnings||!1,pa=window.Polymer&&window.Polymer.syncInitialRender||!1,Ii=window.Polymer&&window.Polymer.legacyUndefined||!1,fa=window.Polymer&&window.Polymer.orderedComputed||!1,_a=!0;const ma=function(r){_a=r};let wr=window.Polymer&&window.Polymer.removeNestedTemplates||!1,ln=window.Polymer&&window.Polymer.fastDomIf||!1,Si=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Lu=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,ga=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let va=0;const V=function(r){let t=r.__mixinApplications;t||(t=new WeakMap,r.__mixinApplications=t);let e=va++;function i(s){let n=s.__mixinSet;if(n&&n[e])return s;let o=t,a=o.get(s);if(!a){a=r(s),o.set(s,a);let l=Object.create(a.__mixinSet||n||null);l[e]=!0,a.__mixinSet=l}return a}return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Gi={},dn={};function Cr(r,t){Gi[r]=dn[r.toLowerCase()]=t}function xr(r){return Gi[r]||dn[r.toLowerCase()]}function ba(r){r.querySelector("style")&&console.warn("dom-module %s has style outside template",r.id)}class Ke extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=xr(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,s){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=ht(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Yi(e)}return this.__assetpath}register(t){if(t=t||this.id,t){if(mt&&xr(t)!==void 0)throw Cr(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Cr(t,this),ba(this)}}}Ke.prototype.modules=Gi;customElements.define("dom-module",Ke);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ya="link[rel=import][type~=css]",wa="include",Ar="shady-unscoped";function ji(r){return Ke.import(r)}function Er(r){let t=r.body?r.body:r;const e=qi(t.textContent,r.baseURI),i=document.createElement("style");return i.textContent=e,i}function Ca(r){const t=r.trim().split(/\s+/),e=[];for(let i=0;i<t.length;i++)e.push(...xa(t[i]));return e}function xa(r){const t=ji(r);if(!t)return console.warn("Could not find style data in module named",r),[];if(t._styles===void 0){const e=[];e.push(...Ki(t));const i=t.querySelector("template");i&&e.push(...ti(i,t.assetpath)),t._styles=e}return t._styles}function ti(r,t){if(!r._styles){const e=[],i=r.content.querySelectorAll("style");for(let s=0;s<i.length;s++){let n=i[s],o=n.getAttribute(wa);o&&e.push(...Ca(o).filter(function(a,l,d){return d.indexOf(a)===l})),t&&(n.textContent=qi(n.textContent,t)),e.push(n)}r._styles=e}return r._styles}function Aa(r){let t=ji(r);return t?Ki(t):[]}function Ki(r){const t=[],e=r.querySelectorAll(ya);for(let i=0;i<e.length;i++){let s=e[i];if(s.import){const n=s.import,o=s.hasAttribute(Ar);if(o&&!n._unscopedStyle){const a=Er(n);a.setAttribute(Ar,""),n._unscopedStyle=a}else n._style||(n._style=Er(n));t.push(o?n._unscopedStyle:n._style)}}return t}function Fu(r){let t=r.trim().split(/\s+/),e="";for(let i=0;i<t.length;i++)e+=Ea(t[i]);return e}function Ea(r){let t=ji(r);if(t&&t._cssText===void 0){let e=Ia(t),i=t.querySelector("template");i&&(e+=Ta(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",r),t&&t._cssText||""}function Ta(r,t){let e="";const i=ti(r,t);for(let s=0;s<i.length;s++){let n=i[s];n.parentNode&&n.parentNode.removeChild(n),e+=n.textContent}return e}function Ia(r){let t="",e=Ki(r);for(let i=0;i<e.length;i++)t+=e[i].textContent;return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Pi(r){return r.indexOf(".")>=0}function pe(r){let t=r.indexOf(".");return t===-1?r:r.slice(0,t)}function cn(r,t){return r.indexOf(t+".")===0}function gt(r,t){return t.indexOf(r+".")===0}function vt(r,t,e){return t+e.slice(r.length)}function Sa(r,t){return r===t||cn(r,t)||gt(r,t)}function dt(r){if(Array.isArray(r)){let t=[];for(let e=0;e<r.length;e++){let i=r[e].toString().split(".");for(let s=0;s<i.length;s++)t.push(i[s])}return t.join(".")}else return r}function hn(r){return Array.isArray(r)?dt(r).split("."):r.toString().split(".")}function J(r,t,e){let i=r,s=hn(t);for(let n=0;n<s.length;n++){if(!i)return;let o=s[n];i=i[o]}return e&&(e.path=s.join(".")),i}function Tr(r,t,e){let i=r,s=hn(t),n=s[s.length-1];if(s.length>1){for(let o=0;o<s.length-1;o++){let a=s[o];if(i=i[a],!i)return}i[n]=e}else i[t]=e;return s.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ut={},Pa=/-[a-z]/g,Da=/([A-Z])/g;function un(r){return Ut[r]||(Ut[r]=r.indexOf("-")<0?r:r.replace(Pa,t=>t[1].toUpperCase()))}function ii(r){return Ut[r]||(Ut[r]=r.replace(Da,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ka=ei,pn=V(r=>{class t extends r{static createProperties(i){const s=this.prototype;for(let n in i)n in s||s._createPropertyAccessor(n)}static attributeNameForProperty(i){return i.toLowerCase()}static typeForProperty(i){}_createPropertyAccessor(i,s){this._addPropertyToAttributeMap(i),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[i]||(this.__dataHasAccessor[i]=!0,this._definePropertyAccessor(i,s))}_addPropertyToAttributeMap(i){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let s=this.__dataAttributes[i];return s||(s=this.constructor.attributeNameForProperty(i),this.__dataAttributes[s]=i),s}_definePropertyAccessor(i,s){Object.defineProperty(this,i,{get(){return this.__data[i]},set:s?function(){}:function(n){this._setPendingProperty(i,n,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let i in this.__dataHasAccessor)this.hasOwnProperty(i)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[i]=this[i],delete this[i])}_initializeInstanceProperties(i){Object.assign(this,i)}_setProperty(i,s){this._setPendingProperty(i,s)&&this._invalidateProperties()}_getProperty(i){return this.__data[i]}_setPendingProperty(i,s,n){let o=this.__data[i],a=this._shouldPropertyChange(i,s,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(i in this.__dataOld)&&(this.__dataOld[i]=o),this.__data[i]=s,this.__dataPending[i]=s),a}_isPropertyPending(i){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(i))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,ka.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const i=this.__data,s=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(i,s,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(i,s,n)),this.__dataCounter--}_shouldPropertiesChange(i,s,n){return Boolean(s)}_propertiesChanged(i,s,n){}_shouldPropertyChange(i,s,n){return n!==s&&(n===n||s===s)}attributeChangedCallback(i,s,n,o){s!==n&&this._attributeToProperty(i,n),super.attributeChangedCallback&&super.attributeChangedCallback(i,s,n,o)}_attributeToProperty(i,s,n){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[i]||i;this[a]=this._deserializeValue(s,n||this.constructor.typeForProperty(a))}}_propertyToAttribute(i,s,n){this.__serializing=!0,n=arguments.length<3?this[i]:n,this._valueToNodeAttribute(this,n,s||this.constructor.attributeNameForProperty(i)),this.__serializing=!1}_valueToNodeAttribute(i,s,n){const o=this._serializeValue(s);(n==="class"||n==="name"||n==="slot")&&(i=D(i)),o===void 0?i.removeAttribute(n):i.setAttribute(n,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(i){switch(typeof i){case"boolean":return i?"":void 0;default:return i!=null?i.toString():void 0}}_deserializeValue(i,s){switch(s){case Boolean:return i!==null;case Number:return Number(i);default:return i}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const fn={};let zt=HTMLElement.prototype;for(;zt;){let r=Object.getOwnPropertyNames(zt);for(let t=0;t<r.length;t++)fn[r[t]]=!0;zt=Object.getPrototypeOf(zt)}const Oa=(()=>window.trustedTypes?r=>trustedTypes.isHTML(r)||trustedTypes.isScript(r)||trustedTypes.isScriptURL(r):()=>!1)();function za(r,t){if(!fn[t]){let e=r[t];e!==void 0&&(r.__data?r._setPendingProperty(t,e):(r.__dataProto?r.hasOwnProperty(JSCompiler_renameProperty("__dataProto",r))||(r.__dataProto=Object.create(r.__dataProto)):r.__dataProto={},r.__dataProto[t]=e))}}const Ma=V(r=>{const t=pn(r);class e extends t{static createPropertiesForAttributes(){let s=this.observedAttributes;for(let n=0;n<s.length;n++)this.prototype._createPropertyAccessor(un(s[n]))}static attributeNameForProperty(s){return ii(s)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(s){for(let n in s)this._setProperty(n,s[n])}_ensureAttribute(s,n){const o=this;o.hasAttribute(s)||this._valueToNodeAttribute(o,n,s)}_serializeValue(s){switch(typeof s){case"object":if(s instanceof Date)return s.toString();if(s){if(Oa(s))return s;try{return JSON.stringify(s)}catch{return""}}default:return super._serializeValue(s)}}_deserializeValue(s,n){let o;switch(n){case Object:try{o=JSON.parse(s)}catch{o=s}break;case Array:try{o=JSON.parse(s)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${s}`)}break;case Date:o=isNaN(s)?String(s):Number(s),o=new Date(o);break;default:o=super._deserializeValue(s,n);break}return o}_definePropertyAccessor(s,n){za(this,s),super._definePropertyAccessor(s,n)}_hasAccessor(s){return this.__dataHasAccessor&&this.__dataHasAccessor[s]}_isPropertyPending(s){return Boolean(this.__dataPending&&s in this.__dataPending)}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const La={"dom-if":!0,"dom-repeat":!0};let Ir=!1,Sr=!1;function Fa(){if(!Ir){Ir=!0;const r=document.createElement("textarea");r.placeholder="a",Sr=r.placeholder===r.textContent}return Sr}function Na(r){Fa()&&r.localName==="textarea"&&r.placeholder&&r.placeholder===r.textContent&&(r.textContent=null)}const Ra=(()=>{const r=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,e,i)=>{const s=e.getAttribute(i);if(r&&i.startsWith("on-")){t.setAttribute(i,r.createScript(s,i));return}t.setAttribute(i,s)}})();function $a(r){let t=r.getAttribute("is");if(t&&La[t]){let e=r;for(e.removeAttribute("is"),r=e.ownerDocument.createElement(t),e.parentNode.replaceChild(r,e),r.appendChild(e);e.attributes.length;){const{name:i}=e.attributes[0];Ra(r,e,i),e.removeAttribute(i)}}return r}function _n(r,t){let e=t.parentInfo&&_n(r,t.parentInfo);if(e){for(let i=e.firstChild,s=0;i;i=i.nextSibling)if(t.parentIndex===s++)return i}else return r}function Ha(r,t,e,i){i.id&&(t[i.id]=e)}function Va(r,t,e){if(e.events&&e.events.length)for(let i=0,s=e.events,n;i<s.length&&(n=s[i]);i++)r._addMethodEventListenerToNode(t,n.name,n.value,r)}function Ba(r,t,e,i){e.templateInfo&&(t._templateInfo=e.templateInfo,t._parentTemplateInfo=i)}function Ua(r,t,e){return r=r._methodHost||r,function(s){r[e]?r[e](s,s.detail):console.warn("listener method `"+e+"` not defined")}}const Wa=V(r=>{class t extends r{static _parseTemplate(i,s){if(!i._templateInfo){let n=i._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=Boolean(s),n.stripWhiteSpace=s&&s.stripWhiteSpace||i.hasAttribute&&i.hasAttribute("strip-whitespace"),this._parseTemplateContent(i,n,{parent:null})}return i._templateInfo}static _parseTemplateContent(i,s,n){return this._parseTemplateNode(i.content,s,n)}static _parseTemplateNode(i,s,n){let o=!1,a=i;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,s,n)||o:a.localName==="slot"&&(s.hasInsertionPoint=!0),Na(a),a.firstChild&&this._parseTemplateChildNodes(a,s,n),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,s,n)||o),o||n.noted}static _parseTemplateChildNodes(i,s,n){if(!(i.localName==="script"||i.localName==="style"))for(let o=i.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=$a(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)o.textContent+=c.textContent,l=c.nextSibling,i.removeChild(c),c=l;if(s.stripWhiteSpace&&!o.textContent.trim()){i.removeChild(o);continue}}let d={parentIndex:a,parentInfo:n};this._parseTemplateNode(o,s,d)&&(d.infoIndex=s.nodeInfoList.push(d)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(i,s,n){let o=i,a=this._parseTemplate(o,s);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),n.templateInfo=a,!0}static _parseTemplateNodeAttributes(i,s,n){let o=!1,a=Array.from(i.attributes);for(let l=a.length-1,d;d=a[l];l--)o=this._parseTemplateNodeAttribute(i,s,n,d.name,d.value)||o;return o}static _parseTemplateNodeAttribute(i,s,n,o,a){return o.slice(0,3)==="on-"?(i.removeAttribute(o),n.events=n.events||[],n.events.push({name:o.slice(3),value:a}),!0):o==="id"?(n.id=a,!0):!1}static _contentForTemplate(i){let s=i._templateInfo;return s&&s.content||i.content}_stampTemplate(i,s){i&&!i.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(i),s=s||this.constructor._parseTemplate(i);let n=s.nodeInfoList,o=s.content||i.content,a=document.importNode(o,!0);a.__noInsertionPoint=!s.hasInsertionPoint;let l=a.nodeList=new Array(n.length);a.$={};for(let d=0,c=n.length,u;d<c&&(u=n[d]);d++){let m=l[d]=_n(a,u);Ha(this,a.$,m,u),Ba(this,m,u,s),Va(this,m,u)}return a=a,a}_addMethodEventListenerToNode(i,s,n,o){o=o||i;let a=Ua(o,s,n);return this._addEventListenerToNode(i,s,a),a}_addEventListenerToNode(i,s,n){i.addEventListener(s,n)}_removeEventListenerFromNode(i,s,n){i.removeEventListener(s,n)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let bt=0;const yt=[],z={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},mn="__computeInfo",qa=/[A-Z]/;function ci(r,t,e){let i=r[t];if(!i)i=r[t]={};else if(!r.hasOwnProperty(t)&&(i=r[t]=Object.create(r[t]),e))for(let s in i){let n=i[s],o=i[s]=Array(n.length);for(let a=0;a<n.length;a++)o[a]=n[a]}return i}function ct(r,t,e,i,s,n){if(t){let o=!1;const a=bt++;for(let l in e){let d=s?pe(l):l,c=t[d];if(c)for(let u=0,m=c.length,y;u<m&&(y=c[u]);u++)(!y.info||y.info.lastRun!==a)&&(!s||Qi(l,y.trigger))&&(y.info&&(y.info.lastRun=a),y.fn(r,l,e,i,y.info,s,n),o=!0)}return o}return!1}function Ya(r,t,e,i,s,n,o,a){let l=!1,d=o?pe(i):i,c=t[d];if(c)for(let u=0,m=c.length,y;u<m&&(y=c[u]);u++)(!y.info||y.info.lastRun!==e)&&(!o||Qi(i,y.trigger))&&(y.info&&(y.info.lastRun=e),y.fn(r,i,s,n,y.info,o,a),l=!0);return l}function Qi(r,t){if(t){let e=t.name;return e==r||!!(t.structured&&cn(e,r))||!!(t.wildcard&&gt(e,r))}else return!0}function Pr(r,t,e,i,s){let n=typeof s.method=="string"?r[s.method]:s.method,o=s.property;n?n.call(r,r.__data[o],i[o]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function Ga(r,t,e,i,s){let n=r[z.NOTIFY],o,a=bt++;for(let d in t)t[d]&&(n&&Ya(r,n,a,d,e,i,s)||s&&ja(r,d,e))&&(o=!0);let l;o&&(l=r.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function ja(r,t,e){let i=pe(t);if(i!==t){let s=ii(i)+"-changed";return gn(r,s,e[t],t),!0}return!1}function gn(r,t,e,i){let s={value:e,queueProperty:!0};i&&(s.path=i),D(r).dispatchEvent(new CustomEvent(t,{detail:s}))}function Ka(r,t,e,i,s,n){let a=(n?pe(t):t)!=t?t:null,l=a?J(r,a):r.__data[t];a&&l===void 0&&(l=e[t]),gn(r,s.eventName,l,a)}function Qa(r,t,e,i,s){let n,o=r.detail,a=o&&o.path;a?(i=vt(e,i,a),n=o&&o.value):n=r.currentTarget[e],n=s?!n:n,(!t[z.READ_ONLY]||!t[z.READ_ONLY][i])&&t._setPendingPropertyOrPath(i,n,!0,Boolean(a))&&(!o||!o.queueProperty)&&t._invalidateProperties()}function Xa(r,t,e,i,s){let n=r.__data[t];Bt&&(n=Bt(n,s.attrName,"attribute",r)),r._propertyToAttribute(t,s.attrName,n)}function Ja(r,t,e,i){let s=r[z.COMPUTE];if(s)if(fa){bt++;const n=el(r),o=[];for(let l in t)Dr(l,s,o,n,i);let a;for(;a=o.shift();)vn(r,"",t,e,a)&&Dr(a.methodInfo,s,o,n,i);Object.assign(e,r.__dataOld),Object.assign(t,r.__dataPending),r.__dataPending=null}else{let n=t;for(;ct(r,s,n,e,i);)Object.assign(e,r.__dataOld),Object.assign(t,r.__dataPending),n=r.__dataPending,r.__dataPending=null}}const Za=(r,t,e)=>{let i=0,s=t.length-1,n=-1;for(;i<=s;){const o=i+s>>1,a=e.get(t[o].methodInfo)-e.get(r.methodInfo);if(a<0)i=o+1;else if(a>0)s=o-1;else{n=o;break}}n<0&&(n=s+1),t.splice(n,0,r)},Dr=(r,t,e,i,s)=>{const n=s?pe(r):r,o=t[n];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==bt&&(!s||Qi(r,l.trigger))&&(l.info.lastRun=bt,Za(l.info,e,i))}};function el(r){let t=r.constructor.__orderedComputedDeps;if(!t){t=new Map;const e=r[z.COMPUTE];let{counts:i,ready:s,total:n}=tl(r),o;for(;o=s.shift();){t.set(o,t.size);const a=e[o];a&&a.forEach(l=>{const d=l.info.methodInfo;--n,--i[d]===0&&s.push(d)})}n!==0&&console.warn(`Computed graph for ${r.localName} incomplete; circular?`),r.constructor.__orderedComputedDeps=t}return t}function tl(r){const t=r[mn],e={},i=r[z.COMPUTE],s=[];let n=0;for(let o in t){const a=t[o];n+=e[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in i)t[o]||s.push(o);return{counts:e,ready:s,total:n}}function vn(r,t,e,i,s){let n=Di(r,t,e,i,s);if(n===yt)return!1;let o=s.methodInfo;return r.__dataHasAccessor&&r.__dataHasAccessor[o]?r._setPendingProperty(o,n,!0):(r[o]=n,!1)}function il(r,t,e){let i=r.__dataLinkedPaths;if(i){let s;for(let n in i){let o=i[n];gt(n,t)?(s=vt(n,o,t),r._setPendingPropertyOrPath(s,e,!0,!0)):gt(o,t)&&(s=vt(o,n,t),r._setPendingPropertyOrPath(s,e,!0,!0))}}}function hi(r,t,e,i,s,n,o){e.bindings=e.bindings||[];let a={kind:i,target:s,parts:n,literal:o,isCompound:n.length!==1};if(e.bindings.push(a),al(a)){let{event:d,negate:c}=a.parts[0];a.listenerEvent=d||ii(s)+"-changed",a.listenerNegate=c}let l=t.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let c=a.parts[d];c.compoundIndex=d,rl(r,t,a,c,l)}}function rl(r,t,e,i,s){if(!i.literal)if(e.kind==="attribute"&&e.target[0]==="-")console.warn("Cannot set attribute "+e.target+' because "-" is not a valid attribute starting character');else{let n=i.dependencies,o={index:s,binding:e,part:i,evaluator:r};for(let a=0;a<n.length;a++){let l=n[a];typeof l=="string"&&(l=yn(l),l.wildcard=!0),r._addTemplatePropertyEffect(t,l.rootProperty,{fn:sl,info:o,trigger:l})}}}function sl(r,t,e,i,s,n,o){let a=o[s.index],l=s.binding,d=s.part;if(n&&d.source&&t.length>d.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let c=e[t];t=vt(d.source,l.target,t),a._setPendingPropertyOrPath(t,c,!1,!0)&&r._enqueueClient(a)}else{let c=s.evaluator._evaluateBinding(r,d,t,e,i,n);c!==yt&&nl(r,a,l,d,c)}}function nl(r,t,e,i,s){if(s=ol(t,s,e,i),Bt&&(s=Bt(s,e.target,e.kind,t)),e.kind=="attribute")r._valueToNodeAttribute(t,s,e.target);else{let n=e.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[n]?(!t[z.READ_ONLY]||!t[z.READ_ONLY][n])&&t._setPendingProperty(n,s)&&r._enqueueClient(t):r._setUnmanagedPropertyToNode(t,n,s)}}function ol(r,t,e,i){if(e.isCompound){let s=r.__dataCompoundStorage[e.target];s[i.compoundIndex]=t,t=s.join("")}return e.kind!=="attribute"&&(e.target==="textContent"||e.target==="value"&&(r.localName==="input"||r.localName==="textarea"))&&(t=t==null?"":t),t}function al(r){return Boolean(r.target)&&r.kind!="attribute"&&r.kind!="text"&&!r.isCompound&&r.parts[0].mode==="{"}function ll(r,t){let{nodeList:e,nodeInfoList:i}=t;if(i.length)for(let s=0;s<i.length;s++){let n=i[s],o=e[s],a=n.bindings;if(a)for(let l=0;l<a.length;l++){let d=a[l];dl(o,d),cl(o,r,d)}o.__dataHost=r}}function dl(r,t){if(t.isCompound){let e=r.__dataCompoundStorage||(r.__dataCompoundStorage={}),i=t.parts,s=new Array(i.length);for(let o=0;o<i.length;o++)s[o]=i[o].literal;let n=t.target;e[n]=s,t.literal&&t.kind=="property"&&(n==="className"&&(r=D(r)),r[n]=t.literal)}}function cl(r,t,e){if(e.listenerEvent){let i=e.parts[0];r.addEventListener(e.listenerEvent,function(s){Qa(s,t,e.target,i.source,i.negate)})}}function kr(r,t,e,i,s,n){n=t.static||n&&(typeof n!="object"||n[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:s,dynamicFn:n};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||r._addPropertyEffect(l.rootProperty,e,{fn:i,info:o,trigger:l});return n&&r._addPropertyEffect(t.methodName,e,{fn:i,info:o}),o}function Di(r,t,e,i,s){let n=r._methodHost||r,o=n[s.methodName];if(o){let a=r._marshalArgs(s.args,t,e);return a===yt?yt:o.apply(n,a)}else s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const hl=[],bn="(?:[a-zA-Z_$][\\w.:$\\-*]*)",ul="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",pl="(?:'(?:[^'\\\\]|\\\\.)*')",fl='(?:"(?:[^"\\\\]|\\\\.)*")',_l="(?:"+pl+"|"+fl+")",Or="(?:("+bn+"|"+ul+"|"+_l+")\\s*)",ml="(?:"+Or+"(?:,\\s*"+Or+")*)",gl="(?:\\(\\s*(?:"+ml+"?)\\)\\s*)",vl="("+bn+"\\s*"+gl+"?)",bl="(\\[\\[|{{)\\s*",yl="(?:]]|}})",wl="(?:(!)\\s*)?",Cl=bl+wl+vl+yl,zr=new RegExp(Cl,"g");function Mr(r){let t="";for(let e=0;e<r.length;e++)t+=r[e].literal||"";return t}function ui(r){let t=r.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let i={methodName:t[1],static:!0,args:hl};if(t[2].trim()){let s=t[2].replace(/\\,/g,"&comma;").split(",");return xl(s,i)}else return i}return null}function xl(r,t){return t.args=r.map(function(e){let i=yn(e);return i.literal||(t.static=!1),i},this),t}function yn(r){let t=r.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),e={name:t,value:"",literal:!1},i=t[0];switch(i==="-"&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':e.value=t.slice(1,-1),e.literal=!0;break;case"#":e.value=Number(t),e.literal=!0;break}return e.literal||(e.rootProperty=pe(t),e.structured=Pi(t),e.structured&&(e.wildcard=t.slice(-2)==".*",e.wildcard&&(e.name=t.slice(0,-2)))),e}function Lr(r,t,e){let i=J(r,e);return i===void 0&&(i=t[e]),i}function wn(r,t,e,i){const s={indexSplices:i};Ii&&!r._overrideLegacyUndefined&&(t.splices=s),r.notifyPath(e+".splices",s),r.notifyPath(e+".length",t.length),Ii&&!r._overrideLegacyUndefined&&(s.indexSplices=[])}function it(r,t,e,i,s,n){wn(r,t,e,[{index:i,addedCount:s,removed:n,object:t,type:"splice"}])}function Al(r){return r[0].toUpperCase()+r.substring(1)}const Xi=V(r=>{const t=Wa(Ma(r));class e extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return z}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(rt.length){let s=rt[rt.length-1];s._enqueueClient(this),this.__dataHost=s}}_initializeProtoProperties(s){this.__data=Object.create(s),this.__dataPending=Object.create(s),this.__dataOld={}}_initializeInstanceProperties(s){let n=this[z.READ_ONLY];for(let o in s)(!n||!n[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=s[o])}_addPropertyEffect(s,n,o){this._createPropertyAccessor(s,n==z.READ_ONLY);let a=ci(this,n,!0)[s];a||(a=this[n][s]=[]),a.push(o)}_removePropertyEffect(s,n,o){let a=ci(this,n,!0)[s],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(s,n){let o=this[n];return Boolean(o&&o[s])}_hasReadOnlyEffect(s){return this._hasPropertyEffect(s,z.READ_ONLY)}_hasNotifyEffect(s){return this._hasPropertyEffect(s,z.NOTIFY)}_hasReflectEffect(s){return this._hasPropertyEffect(s,z.REFLECT)}_hasComputedEffect(s){return this._hasPropertyEffect(s,z.COMPUTE)}_setPendingPropertyOrPath(s,n,o,a){if(a||pe(Array.isArray(s)?s[0]:s)!==s){if(!a){let l=J(this,s);if(s=Tr(this,s,n),!s||!super._shouldPropertyChange(s,n,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(s,n,o))return il(this,s,n),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[s])return this._setPendingProperty(s,n,o);this[s]=n}return!1}_setUnmanagedPropertyToNode(s,n,o){(o!==s[n]||typeof o=="object")&&(n==="className"&&(s=D(s)),s[n]=o)}_setPendingProperty(s,n,o){let a=this.__dataHasPaths&&Pi(s),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(s,n,l[s])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),s in this.__dataOld||(this.__dataOld[s]=this.__data[s]),a?this.__dataTemp[s]=n:this.__data[s]=n,this.__dataPending[s]=n,(a||this[z.NOTIFY]&&this[z.NOTIFY][s])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[s]=o),!0):!1}_setProperty(s,n){this._setPendingProperty(s,n,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(s){this.__dataPendingClients=this.__dataPendingClients||[],s!==this&&this.__dataPendingClients.push(s)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let s=this.__dataPendingClients;if(s){this.__dataPendingClients=null;for(let n=0;n<s.length;n++){let o=s[n];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(s,n){for(let o in s)(n||!this[z.READ_ONLY]||!this[z.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,s[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(s,n,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Ja(this,n,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(n,o,a),this._flushClients(),ct(this,this[z.REFLECT],n,o,a),ct(this,this[z.OBSERVE],n,o,a),l&&Ga(this,l,n,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(s,n,o){this[z.PROPAGATE]&&ct(this,this[z.PROPAGATE],s,n,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,s,n,o)}_runEffectsForTemplate(s,n,o,a){const l=(d,c)=>{ct(this,s.propertyEffects,d,o,c,s.nodeList);for(let u=s.firstChild;u;u=u.nextSibling)this._runEffectsForTemplate(u,d,o,c)};s.runEffects?s.runEffects(l,n,a):l(n,a)}linkPaths(s,n){s=dt(s),n=dt(n),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[s]=n}unlinkPaths(s){s=dt(s),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[s]}notifySplices(s,n){let o={path:""},a=J(this,s,o);wn(this,a,o.path,n)}get(s,n){return J(n||this,s)}set(s,n,o){o?Tr(o,s,n):(!this[z.READ_ONLY]||!this[z.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,n,!0)&&this._invalidateProperties()}push(s,...n){let o={path:""},a=J(this,s,o),l=a.length,d=a.push(...n);return n.length&&it(this,a,o.path,l,n.length,[]),d}pop(s){let n={path:""},o=J(this,s,n),a=Boolean(o.length),l=o.pop();return a&&it(this,o,n.path,o.length,0,[l]),l}splice(s,n,o,...a){let l={path:""},d=J(this,s,l);n<0?n=d.length-Math.floor(-n):n&&(n=Math.floor(n));let c;return arguments.length===2?c=d.splice(n):c=d.splice(n,o,...a),(a.length||c.length)&&it(this,d,l.path,n,a.length,c),c}shift(s){let n={path:""},o=J(this,s,n),a=Boolean(o.length),l=o.shift();return a&&it(this,o,n.path,0,0,[l]),l}unshift(s,...n){let o={path:""},a=J(this,s,o),l=a.unshift(...n);return n.length&&it(this,a,o.path,0,n.length,[]),l}notifyPath(s,n){let o;if(arguments.length==1){let a={path:""};n=J(this,s,a),o=a.path}else Array.isArray(s)?o=dt(s):o=s;this._setPendingPropertyOrPath(o,n,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(s,n){this._addPropertyEffect(s,z.READ_ONLY),n&&(this["_set"+Al(s)]=function(o){this._setProperty(s,o)})}_createPropertyObserver(s,n,o){let a={property:s,method:n,dynamicFn:Boolean(o)};this._addPropertyEffect(s,z.OBSERVE,{fn:Pr,info:a,trigger:{name:s}}),o&&this._addPropertyEffect(n,z.OBSERVE,{fn:Pr,info:a,trigger:{name:n}})}_createMethodObserver(s,n){let o=ui(s);if(!o)throw new Error("Malformed observer expression '"+s+"'");kr(this,o,z.OBSERVE,Di,null,n)}_createNotifyingProperty(s){this._addPropertyEffect(s,z.NOTIFY,{fn:Ka,info:{eventName:ii(s)+"-changed",property:s}})}_createReflectedProperty(s){let n=this.constructor.attributeNameForProperty(s);n[0]==="-"?console.warn("Property "+s+" cannot be reflected to attribute "+n+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(s,z.REFLECT,{fn:Xa,info:{attrName:n}})}_createComputedProperty(s,n,o){let a=ui(n);if(!a)throw new Error("Malformed computed expression '"+n+"'");const l=kr(this,a,z.COMPUTE,vn,s,o);ci(this,mn)[s]=l}_marshalArgs(s,n,o){const a=this.__data,l=[];for(let d=0,c=s.length;d<c;d++){let{name:u,structured:m,wildcard:y,value:A,literal:g}=s[d];if(!g)if(y){const v=gt(u,n),C=Lr(a,o,v?n:u);A={path:v?n:u,value:C,base:v?J(a,u):C}}else A=m?Lr(a,o,u):a[u];if(Ii&&!this._overrideLegacyUndefined&&A===void 0&&s.length>1)return yt;l[d]=A}return l}static addPropertyEffect(s,n,o){this.prototype._addPropertyEffect(s,n,o)}static createPropertyObserver(s,n,o){this.prototype._createPropertyObserver(s,n,o)}static createMethodObserver(s,n){this.prototype._createMethodObserver(s,n)}static createNotifyingProperty(s){this.prototype._createNotifyingProperty(s)}static createReadOnlyProperty(s,n){this.prototype._createReadOnlyProperty(s,n)}static createReflectedProperty(s){this.prototype._createReflectedProperty(s)}static createComputedProperty(s,n,o){this.prototype._createComputedProperty(s,n,o)}static bindTemplate(s){return this.prototype._bindTemplate(s)}_bindTemplate(s,n){let o=this.constructor._parseTemplate(s),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(n)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=s._parentTemplateInfo||this.__templateInfo,d=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=d,d?d.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(s,n,o){let a=s.hostProps=s.hostProps||{};a[n]=!0;let l=s.propertyEffects=s.propertyEffects||{};(l[n]=l[n]||[]).push(o)}_stampTemplate(s,n){n=n||this._bindTemplate(s,!0),rt.push(this);let o=super._stampTemplate(s,n);if(rt.pop(),n.nodeList=o.nodeList,!n.wasPreBound){let a=n.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=n,ll(this,n),this.__dataClientsReady&&(this._runEffectsForTemplate(n,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(s){const n=s.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=n;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),n.nextSibling=n.previousSibling=null;let d=n.childNodes;for(let c=0;c<d.length;c++){let u=d[c];D(D(u).parentNode).removeChild(u)}}static _parseTemplateNode(s,n,o){let a=t._parseTemplateNode.call(this,s,n,o);if(s.nodeType===Node.TEXT_NODE){let l=this._parseBindings(s.textContent,n);l&&(s.textContent=Mr(l)||" ",hi(this,n,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(s,n,o,a,l){let d=this._parseBindings(l,n);if(d){let c=a,u="property";qa.test(a)?u="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),u="attribute");let m=Mr(d);return m&&u=="attribute"&&(a=="class"&&s.hasAttribute("class")&&(m+=" "+s.getAttribute(a)),s.setAttribute(a,m)),u=="attribute"&&c=="disable-upgrade$"&&s.setAttribute(a,""),s.localName==="input"&&c==="value"&&s.setAttribute(c,""),s.removeAttribute(c),u==="property"&&(a=un(a)),hi(this,n,o,u,a,d,m),!0}else return t._parseTemplateNodeAttribute.call(this,s,n,o,a,l)}static _parseTemplateNestedTemplate(s,n,o){let a=t._parseTemplateNestedTemplate.call(this,s,n,o);const l=s.parentNode,d=o.templateInfo,c=l.localName==="dom-if",u=l.localName==="dom-repeat";wr&&(c||u)&&(l.removeChild(s),o=o.parentInfo,o.templateInfo=d,o.noted=!0,a=!1);let m=d.hostProps;if(ln&&c)m&&(n.hostProps=Object.assign(n.hostProps||{},m),wr||(o.parentInfo.noted=!0));else{let y="{";for(let A in m){let g=[{mode:y,source:A,dependencies:[A],hostProp:!0}];hi(this,n,o,"property","_host_"+A,g)}}return a}static _parseBindings(s,n){let o=[],a=0,l;for(;(l=zr.exec(s))!==null;){l.index>a&&o.push({literal:s.slice(a,l.index)});let d=l[1][0],c=Boolean(l[2]),u=l[3].trim(),m=!1,y="",A=-1;d=="{"&&(A=u.indexOf("::"))>0&&(y=u.substring(A+2),u=u.substring(0,A),m=!0);let g=ui(u),v=[];if(g){let{args:C,methodName:w}=g;for(let O=0;O<C.length;O++){let S=C[O];S.literal||v.push(S)}let x=n.dynamicFns;(x&&x[w]||g.static)&&(v.push(w),g.dynamicFn=!0)}else v.push(u);o.push({source:u,mode:d,negate:c,customEvent:m,signature:g,dependencies:v,event:y}),a=zr.lastIndex}if(a&&a<s.length){let d=s.substring(a);d&&o.push({literal:d})}return o.length?o:null}static _evaluateBinding(s,n,o,a,l,d){let c;return n.signature?c=Di(s,o,a,l,n.signature):o!=n.source?c=J(s,n.source):d&&Pi(o)?c=J(s,o):c=s.__data[o],n.negate&&(c=!c),c}}return e}),rt=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Nu(r){}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function El(r){const t={};for(let e in r){const i=r[e];t[e]=typeof i=="function"?{type:i}:i}return t}const Tl=V(r=>{const t=pn(r);function e(n){const o=Object.getPrototypeOf(n);return o.prototype instanceof s?o:null}function i(n){if(!n.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",n))){let o=null;if(n.hasOwnProperty(JSCompiler_renameProperty("properties",n))){const a=n.properties;a&&(o=El(a))}n.__ownProperties=o}return n.__ownProperties}class s extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=e(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=i(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=e(this);this.__properties=Object.assign({},o&&o._properties,i(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Il="3.5.1",Fr=window.ShadyCSS&&window.ShadyCSS.cssBuild,Cn=V(r=>{const t=Tl(Xi(r));function e(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let c in d){let u=d[c];"value"in u&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=u)}}return l.__propertyDefaults}function i(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function s(l,d,c,u){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,c.computed,u)),c.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):c.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),c.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):c.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),c.observer&&l._createPropertyObserver(d,c.observer,u[c.observer]),l._addPropertyToAttributeMap(d)}function n(l,d,c,u){if(!Fr){const m=d.content.querySelectorAll("style"),y=ti(d),A=Aa(c),g=d.content.firstElementChild;for(let C=0;C<A.length;C++){let w=A[C];w.textContent=l._processStyleText(w.textContent,u),d.content.insertBefore(w,g)}let v=0;for(let C=0;C<y.length;C++){let w=y[C],x=m[v];x!==w?(w=w.cloneNode(!0),x.parentNode.insertBefore(w,x)):v++,w.textContent=l._processStyleText(w.textContent,u)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,c),ga&&Fr&&ca){const m=d.content.querySelectorAll("style");if(m){let y="";Array.from(m).forEach(A=>{y+=A.textContent,A.parentNode.removeChild(A)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(y)}}}function o(l){let d=null;if(l&&(!mt||ua)&&(d=Ke.import(l,"template"),mt&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class a extends t{static get polymerElementVersion(){return Il}static _finalizeClass(){t._finalizeClass.call(this);const d=i(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):on||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let c in d)s(this.prototype,c,d[c],d)}static createObservers(d,c){const u=this.prototype;for(let m=0;m<d.length;m++)u._createMethodObserver(d[m],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const d=this.importMeta;if(d)this._importPath=Yi(d.url);else{const c=Ke.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ha,this.importPath=this.constructor.importPath;let d=e(this.constructor);if(!!d)for(let c in d){let u=d[c];if(this._canApplyPropertyDefault(c)){let m=typeof u.value=="function"?u.value.call(this):u.value;this._hasAccessor(c)?this._setPendingProperty(c,m,!0):this[c]=m}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,c){return qi(d,c)}static _finalizeTemplate(d){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const u=this.importPath,m=u?ht(u):"";n(this,c,d,m),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){const c=D(this);if(c.attachShadow)return d?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:d}),c.shadowRoot.appendChild(d),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),pa&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,c){return!c&&this.importPath&&(c=ht(this.importPath)),ht(d,c)}static _parseTemplateContent(d,c,u){return c.dynamicFns=c.dynamicFns||this._properties,t._parseTemplateContent.call(this,d,c,u)}static _addTemplatePropertyEffect(d,c,u){return an&&!(c in this._properties)&&!(u.info.part.signature&&u.info.part.signature.static)&&!u.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,d,c,u)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Nr=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:r=>r});class xn{constructor(t,e){En(t,e);const i=e.reduce((s,n,o)=>s+An(n)+t[o+1],t[0]);this.value=i.toString()}toString(){return this.value}}function An(r){if(r instanceof xn)return r.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${r}`)}function Sl(r){if(r instanceof HTMLTemplateElement)return r.innerHTML;if(r instanceof xn)return An(r);throw new Error(`non-template value passed to Polymer's html function: ${r}`)}const M=function(t,...e){En(t,e);const i=document.createElement("template");let s=e.reduce((n,o,a)=>n+Sl(o)+t[a+1],t[0]);return Nr&&(s=Nr.createHTML(s)),i.innerHTML=s,i},En=(r,t)=>{if(!Array.isArray(r)||!Array.isArray(r.raw)||t.length!==r.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const k=Cn(HTMLElement);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const de=V(r=>class extends r{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(e=>{e.hostConnected&&e.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(e=>{e.hostDisconnected&&e.hostDisconnected()})}addController(e){this.__controllers.add(e),this.$!==void 0&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}}),Pl=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Ht=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Dl(){function r(){return!0}return Tn(r)}function kl(){try{return Ol()?!0:zl()?Ht?!Ml():!Dl():!1}catch{return!1}}function Ol(){return localStorage.getItem("vaadin.developmentmode.force")}function zl(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Ml(){return!!(Ht&&Object.keys(Ht).map(t=>Ht[t]).filter(t=>t.productionMode).length>0)}function Tn(r,t){if(typeof r!="function")return;const e=Pl.exec(r.toString());if(e)try{r=new Function(e[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return r(t)}window.Vaadin=window.Vaadin||{};const Rr=function(r,t){if(window.Vaadin.developmentMode)return Tn(r,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=kl());function Ll(){}const Fl=function(){if(typeof Rr=="function")return Rr(Ll)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let $r=0,In=0;const qe=[];let Hr=0,ki=!1;const Sn=document.createTextNode("");new window.MutationObserver(Nl).observe(Sn,{characterData:!0});function Nl(){ki=!1;const r=qe.length;for(let t=0;t<r;t++){const e=qe[t];if(e)try{e()}catch(i){setTimeout(()=>{throw i})}}qe.splice(0,r),In+=r}const re={after(r){return{run(t){return window.setTimeout(t,r)},cancel(t){window.clearTimeout(t)}}},run(r,t){return window.setTimeout(r,t)},cancel(r){window.clearTimeout(r)}},wt={run(r){return window.requestAnimationFrame(r)},cancel(r){window.cancelAnimationFrame(r)}},Pn={run(r){return window.requestIdleCallback?window.requestIdleCallback(r):window.setTimeout(r,16)},cancel(r){window.cancelIdleCallback?window.cancelIdleCallback(r):window.clearTimeout(r)}},Ct={run(r){ki||(ki=!0,Sn.textContent=Hr,Hr+=1),qe.push(r);const t=$r;return $r+=1,t},cancel(r){const t=r-In;if(t>=0){if(!qe[t])throw new Error(`invalid async handle: ${r}`);qe[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class U{static debounce(t,e,i){return t instanceof U?t._cancelAsync():t=new U,t.setConfig(e,i),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,xt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),xt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}let xt=new Set;function Dn(r){xt.add(r)}function Rl(){const r=Boolean(xt.size);return xt.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),r}const He=()=>{let r;do r=Rl();while(r)};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ye{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,i){const{scrollLeft:s}=i;if(e!=="rtl"||!t)return s;switch(t){case"negative":return i.scrollWidth-i.clientWidth+s;case"reverse":return i.scrollWidth-i.clientWidth-s;default:return s}}static setNormalizedScrollLeft(t,e,i,s){if(e!=="rtl"||!t){i.scrollLeft=s;return}switch(t){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+s;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-s;break;default:i.scrollLeft=s;break}}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ge=[];function $l(){const r=zi();ge.forEach(t=>{Oi(t,r)})}let Mt;const Hl=new MutationObserver($l);Hl.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});function Oi(r,t,e=r.getAttribute("dir")){t?r.setAttribute("dir",t):e!=null&&r.removeAttribute("dir")}function zi(){return document.documentElement.getAttribute("dir")}const be=r=>class extends r{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>e===""?null:e}}}}static finalize(){super.finalize(),Mt||(Mt=Ye.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),Oi(this,zi(),null))}attributeChangedCallback(e,i,s){if(super.attributeChangedCallback(e,i,s),e!=="dir")return;const n=zi(),o=s===n&&ge.indexOf(this)===-1,a=!s&&i&&ge.indexOf(this)===-1;o||a?(this.__subscribe(),Oi(this,n,s)):s!==n&&i===n&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}_valueToNodeAttribute(e,i,s){s==="dir"&&i===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,i,s)}_attributeToProperty(e,i,s){e==="dir"&&!i?this.dir="":super._attributeToProperty(e,i,s)}__subscribe(e=!0){e?ge.includes(this)||ge.push(this):ge.includes(this)&&ge.splice(ge.indexOf(this),1)}__getNormalizedScrollLeft(e){return Ye.getNormalizedScrollLeft(Mt,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,i){return Ye.setNormalizedScrollLeft(Mt,this.getAttribute("dir")||"ltr",e,i)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ma(!1);window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Fl()};let pi;const Vr=new Set,K=r=>class extends be(r){static get version(){return"23.2.0"}static finalize(){super.finalize();const{is:e}=this;e&&!Vr.has(e)&&(window.Vaadin.registrations.push(this),Vr.add(e),window.Vaadin.developmentModeCallback&&(pi=U.debounce(pi,Pn,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Dn(pi)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Ji=!1;window.addEventListener("keydown",()=>{Ji=!0},{capture:!0});window.addEventListener("mousedown",()=>{Ji=!1},{capture:!0});function Vl(){return Ji}function Bl(r){const t=r.style;if(t.visibility==="hidden"||t.display==="none")return!0;const e=window.getComputedStyle(r);return e.visibility==="hidden"||e.display==="none"}function Ul(r){if(!Yl(r))return-1;const t=r.getAttribute("tabindex")||0;return Number(t)}function Wl(r,t){const e=Math.max(r.tabIndex,0),i=Math.max(t.tabIndex,0);return e===0||i===0?i>e:e>i}function ql(r,t){const e=[];for(;r.length>0&&t.length>0;)Wl(r[0],t[0])?e.push(t.shift()):e.push(r.shift());return e.concat(r,t)}function Mi(r){const t=r.length;if(t<2)return r;const e=Math.ceil(t/2),i=Mi(r.slice(0,e)),s=Mi(r.slice(e));return ql(i,s)}function kn(r,t){if(r.nodeType!==Node.ELEMENT_NODE||Bl(r))return!1;const e=r,i=Ul(e);let s=i>0;i>=0&&t.push(e);let n=[];return e.localName==="slot"?n=e.assignedNodes({flatten:!0}):n=(e.shadowRoot||e).children,[...n].forEach(o=>{s=kn(o,t)||s}),s}function Yl(r){return r.matches('[tabindex="-1"]')?!1:r.matches("input, select, textarea, button, object")?r.matches(":not([disabled])"):r.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function ri(r){return r.getRootNode().activeElement===r}function Gl(r){const t=[];return kn(r,t)?Mi(t):t}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fi=[];class On{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");fi.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,fi.pop()}__onKeyDown(t){if(!!this.__trapNode&&this===Array.from(fi).pop()&&t.key==="Tab"){t.preventDefault();const e=t.shiftKey;this.__focusNextElement(e)}}__focusNextElement(t=!1){const e=this.__focusableElements,i=t?-1:1,s=this.__focusedElementIndex,n=(e.length+s+i)%e.length,o=e[n];o.focus(),o.localName==="input"&&o.select()}get __focusableElements(){return Gl(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(ri).pop())}}/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Br extends K(R(de(k))){static get template(){return M`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-top: var(--vaadin-app-layout-navbar-offset-top);
          padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
          padding-left: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([dir='rtl']) {
          padding-left: 0;
          padding-right: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'],
        [part='navbar']::before {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          right: 0;
          left: 0;
          transition: left var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host(:not([dir='rtl'])[primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          left: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([dir='rtl'][primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          right: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          right: auto;
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          left: var(--vaadin-app-layout-navbar-offset-left, 0);
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          left: auto;
          right: var(--vaadin-app-layout-navbar-offset-start, 0);
          transform: translateX(100%);
        }

        :host([dir='rtl']) [part='navbar'],
        :host([dir='rtl']) [part='navbar']::before {
          transition: right var(--vaadin-app-layout-transition);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host(:not([dir='rtl'])[drawer-opened]:not([overlay])) {
          padding-left: var(--vaadin-app-layout-drawer-offset-left);
        }

        :host([dir='rtl'][drawer-opened]:not([overlay])) {
          padding-right: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
          }

          [part='drawer'] {
            width: 20em;
          }
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar"></slot>
      </div>
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
      <div part="drawer" id="drawer" on-keydown="__onDrawerKeyDown">
        <slot name="drawer" id="drawerSlot"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new On(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),sn(this,this._afterFirstRender),this._updateTouchOptimizedMode();const t=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new X(t,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new X(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new X(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}__primarySectionChanged(t){["navbar","drawer"].includes(t)||this.set("primarySection","navbar")}__drawerOpenedChanged(t,e){this.overlay&&(t?(this._updateDrawerHeight(),this.__trapFocusInDrawer()):e&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const t=this.querySelector("vaadin-drawer-toggle");t&&t.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,e=this.$.drawer;t===0?e.setAttribute("hidden",""):e.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const e=this.$.navbarTop.getBoundingClientRect(),s=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${e.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${s.height}px`);const o=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${o.width}px`)}_updateDrawerHeight(){const{scrollHeight:t,offsetHeight:e}=this.$.drawer,i=t>e?`${t}px`:"100%";this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",i)}_updateOverlayMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this._updateDrawerHeight(),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const t=this.$.drawer;this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.i18n.drawer)):(t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(t=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){t();return}this.$.drawer.addEventListener("transitionend",t,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const t=this.querySelector("vaadin-drawer-toggle");t&&(t.focus(),t.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(t){t.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(t,e){e&&window.removeEventListener(e,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(t){t.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach(i=>{i.getAttribute("slot").indexOf("touch-optimized")>-1&&(i.__touchOptimized=!0),t&&i.__touchOptimized?i.setAttribute("slot","navbar-bottom"):i.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),t?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),Wi(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(Br.is,Br);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zn=document.createElement("template");zn.innerHTML=`
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
`;document.head.appendChild(zn.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jl=E`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,Mn=document.createElement("template");Mn.innerHTML=`<style>${jl.toString().replace(":host","html")}</style>`;document.head.appendChild(Mn.content);const Zi=E`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don’t affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;T("vaadin-button",Zi,{moduleId:"lumo-button"});const Kl=E`
  :host {
    width: var(--lumo-size-l);
    height: var(--lumo-size-l);
    min-width: auto;
    margin: 0 var(--lumo-space-s);
    padding: 0;
    background: transparent;
  }

  [part='icon'],
  [part='icon']::after,
  [part='icon']::before {
    position: inherit;
    height: auto;
    width: auto;
    background: transparent;
    top: auto;
  }

  [part='icon']::before {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    content: var(--lumo-icons-menu);
  }
`;T("vaadin-drawer-toggle",[Zi,Kl],{moduleId:"lumo-drawer-toggle"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ql=!1,Xl=r=>r,er=typeof document.head.style.touchAction=="string",Wt="__polymerGestures",_i="__polymerGesturesHandled",Li="__polymerGesturesTouchAction",Ur=25,Wr=5,Jl=2,Zl=["mousedown","mousemove","mouseup","click"],ed=[0,1,4,2],td=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function tr(r){return Zl.indexOf(r)>-1}let Ln=!1;(function(){try{const r=Object.defineProperty({},"passive",{get(){Ln=!0}});window.addEventListener("test",null,r),window.removeEventListener("test",null,r)}catch{}})();function Fn(r){if(!(tr(r)||r==="touchend")&&er&&Ln&&Ql)return{passive:!0}}const id=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),rd={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function ke(r){const t=r.type;if(!tr(t))return!1;if(t==="mousemove"){let i=r.buttons===void 0?1:r.buttons;return r instanceof window.MouseEvent&&!td&&(i=ed[r.which]||0),Boolean(i&1)}return(r.button===void 0?0:r.button)===0}function sd(r){if(r.type==="click"){if(r.detail===0)return!0;const t=ve(r);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const e=t.getBoundingClientRect(),i=r.pageX,s=r.pageY;return!(i>=e.left&&i<=e.right&&s>=e.top&&s<=e.bottom)}return!1}const ce={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function nd(r){let t="auto";const e=Rn(r);for(let i=0,s;i<e.length;i++)if(s=e[i],s[Li]){t=s[Li];break}return t}function Nn(r,t,e){r.movefn=t,r.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function Ge(r){document.removeEventListener("mousemove",r.movefn),document.removeEventListener("mouseup",r.upfn),r.movefn=null,r.upfn=null}const Rn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:r=>r.composedPath&&r.composedPath()||[],ue={},De=[];function od(r,t){let e=document.elementFromPoint(r,t),i=e;for(;i&&i.shadowRoot&&!window.ShadyDOM;){const s=i;if(i=i.shadowRoot.elementFromPoint(r,t),s===i)break;i&&(e=i)}return e}function ve(r){const t=Rn(r);return t.length>0?t[0]:r.target}function $n(r){const t=r.type,i=r.currentTarget[Wt];if(!i)return;const s=i[t];if(!s)return;if(!r[_i]&&(r[_i]={},t.startsWith("touch"))){const o=r.changedTouches[0];if(t==="touchstart"&&r.touches.length===1&&(ce.touch.id=o.identifier),ce.touch.id!==o.identifier)return;er||(t==="touchstart"||t==="touchmove")&&ad(r)}const n=r[_i];if(!n.skip){for(let o=0,a;o<De.length;o++)a=De[o],s[a.name]&&!n[a.name]&&a.flow&&a.flow.start.indexOf(r.type)>-1&&a.reset&&a.reset();for(let o=0,a;o<De.length;o++)a=De[o],s[a.name]&&!n[a.name]&&(n[a.name]=!0,a[t](r))}}function ad(r){const t=r.changedTouches[0],e=r.type;if(e==="touchstart")ce.touch.x=t.clientX,ce.touch.y=t.clientY,ce.touch.scrollDecided=!1;else if(e==="touchmove"){if(ce.touch.scrollDecided)return;ce.touch.scrollDecided=!0;const i=nd(r);let s=!1;const n=Math.abs(ce.touch.x-t.clientX),o=Math.abs(ce.touch.y-t.clientY);r.cancelable&&(i==="none"?s=!0:i==="pan-x"?s=o>n:i==="pan-y"&&(s=n>o)),s?r.preventDefault():Qe("track")}}function Z(r,t,e){return ue[t]?(ld(r,t,e),!0):!1}function Hn(r,t,e){return ue[t]?(dd(r,t,e),!0):!1}function ld(r,t,e){const i=ue[t],s=i.deps,n=i.name;let o=r[Wt];o||(r[Wt]=o={});for(let a=0,l,d;a<s.length;a++)l=s[a],!(id&&tr(l)&&l!=="click")&&(d=o[l],d||(o[l]=d={_count:0}),d._count===0&&r.addEventListener(l,$n,Fn(l)),d[n]=(d[n]||0)+1,d._count=(d._count||0)+1);r.addEventListener(t,e),i.touchAction&&Vn(r,i.touchAction)}function dd(r,t,e){const i=ue[t],s=i.deps,n=i.name,o=r[Wt];if(o)for(let a=0,l,d;a<s.length;a++)l=s[a],d=o[l],d&&d[n]&&(d[n]=(d[n]||1)-1,d._count=(d._count||1)-1,d._count===0&&r.removeEventListener(l,$n,Fn(l)));r.removeEventListener(t,e)}function si(r){De.push(r);for(let t=0;t<r.emits.length;t++)ue[r.emits[t]]=r}function cd(r){for(let t=0,e;t<De.length;t++){e=De[t];for(let i=0,s;i<e.emits.length;i++)if(s=e.emits[i],s===r)return e}return null}function Vn(r,t){er&&r instanceof HTMLElement&&Ct.run(()=>{r.style.touchAction=t}),r[Li]=t}function ir(r,t,e){const i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=e,Xl(r).dispatchEvent(i),i.defaultPrevented){const s=e.preventer||e.sourceEvent;s&&s.preventDefault&&s.preventDefault()}}function Qe(r){const t=cd(r);t.info&&(t.info.prevent=!0)}si({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Ge(this.info)},mousedown(r){if(!ke(r))return;const t=ve(r),e=this,i=n=>{ke(n)||(st("up",t,n),Ge(e.info))},s=n=>{ke(n)&&st("up",t,n),Ge(e.info)};Nn(this.info,i,s),st("down",t,r)},touchstart(r){st("down",ve(r),r.changedTouches[0],r)},touchend(r){st("up",ve(r),r.changedTouches[0],r)}});function st(r,t,e,i){!t||ir(t,r,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i,prevent(s){return Qe(s)}})}si({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(r){this.moves.length>Jl&&this.moves.shift(),this.moves.push(r)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ge(this.info)},mousedown(r){if(!ke(r))return;const t=ve(r),e=this,i=n=>{const o=n.clientX,a=n.clientY;qr(e.info,o,a)&&(e.info.state=e.info.started?n.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&Qe("tap"),e.info.addMove({x:o,y:a}),ke(n)||(e.info.state="end",Ge(e.info)),t&&mi(e.info,t,n),e.info.started=!0)},s=n=>{e.info.started&&i(n),Ge(e.info)};Nn(this.info,i,s),this.info.x=r.clientX,this.info.y=r.clientY},touchstart(r){const t=r.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(r){const t=ve(r),e=r.changedTouches[0],i=e.clientX,s=e.clientY;qr(this.info,i,s)&&(this.info.state==="start"&&Qe("tap"),this.info.addMove({x:i,y:s}),mi(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend(r){const t=ve(r),e=r.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),mi(this.info,t,e))}});function qr(r,t,e){if(r.prevent)return!1;if(r.started)return!0;const i=Math.abs(r.x-t),s=Math.abs(r.y-e);return i>=Wr||s>=Wr}function mi(r,t,e){if(!t)return;const i=r.moves[r.moves.length-2],s=r.moves[r.moves.length-1],n=s.x-r.x,o=s.y-r.y;let a,l=0;i&&(a=s.x-i.x,l=s.y-i.y),ir(t,"track",{state:r.state,x:e.clientX,y:e.clientY,dx:n,dy:o,ddx:a,ddy:l,sourceEvent:e,hover(){return od(e.clientX,e.clientY)}})}si({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(r){ke(r)&&(this.info.x=r.clientX,this.info.y=r.clientY)},click(r){ke(r)&&Yr(this.info,r)},touchstart(r){const t=r.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(r){Yr(this.info,r.changedTouches[0],r)}});function Yr(r,t,e){const i=Math.abs(t.clientX-r.x),s=Math.abs(t.clientY-r.y),n=ve(e||t);!n||rd[n.localName]&&n.hasAttribute("disabled")||(isNaN(i)||isNaN(s)||i<=Ur&&s<=Ur||sd(t))&&(r.prevent||ir(n,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ni=V(r=>class extends r{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oi=V(r=>class extends r{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rr=r=>class extends ni(oi(r)){get _activeKeys(){return[" "]}ready(){super.ready(),Z(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),Z(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",i=>{this._activeKeys.includes(i.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ai=V(r=>class extends r{get _keyboardActive(){return Vl()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sr=r=>class extends ni(r){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,i){super._disabledChanged(e,i),e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):i&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&e!==-1&&(this._lastTabIndex=e,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hd=r=>class extends rr(sr(ai(r))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qt extends hd(K(R(k))){static get is(){return"vaadin-button"}static get template(){return M`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `}}customElements.define(qt.is,qt);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Gr extends qt{static get template(){return M`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: default;
          position: relative;
          outline: none;
          height: 24px;
          width: 24px;
          padding: 4px;
        }

        [part='icon'],
        [part='icon']::after,
        [part='icon']::before {
          position: absolute;
          top: 8px;
          height: 3px;
          width: 24px;
          background-color: #000;
        }

        [part='icon']::after,
        [part='icon']::before {
          content: '';
        }

        [part='icon']::after {
          top: 6px;
        }

        [part='icon']::before {
          top: 12px;
        }
      </style>
      <slot>
        <div part="icon"></div>
      </slot>
    `}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:{type:String,value:"Toggle navigation panel",reflectToAttribute:!0}}}constructor(){super(),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}}customElements.define(Gr.is,Gr);T("vaadin-checkbox",E`
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

    [part='checkbox'] {
      width: calc(var(--lumo-size-m) / 2);
      height: calc(var(--lumo-size-m) / 2);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      line-height: 1.2;
      cursor: var(--lumo-clickable-cursor);
      flex: none;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Needed to align the checkbox nicely on the baseline */
    [part='checkbox']::before {
      content: '\\2003';
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-checkmark);
      color: var(--lumo-primary-contrast-color);
      font-size: calc(var(--lumo-size-m) / 2 + 2px);
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: '';
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
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
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bn=V(r=>class extends r{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((i,s)=>{this._delegateAttribute(i,e[s])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((i,s)=>{this._delegateProperty(i,e[s])})}_delegateAttribute(e,i){!this.stateTarget||(e==="invalid"&&this._delegateAttribute("aria-invalid",i?"true":!1),typeof i=="boolean"?this.stateTarget.toggleAttribute(e,i):i?this.stateTarget.setAttribute(e,i):this.stateTarget.removeAttribute(e))}_delegateProperty(e,i){!this.stateTarget||(this.stateTarget[e]=i)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nr=V(r=>class extends r{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){!this.inputElement||(e!=null?this.inputElement.value=e:this.inputElement.value="")}_inputElementChanged(e,i){e?this._addInputListeners(e):i&&this._removeInputListeners(i)}_hasInputValueChanged(e,i){(e||i)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){const i=e.composedPath()[0];this._hasInputValue=i.value.length>0,this._onInput(e)}_onInput(e){const i=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=i.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,i){this._toggleHasValue(this._hasValue),!(e===""&&i===void 0)&&(this.__userInput||this._forwardInputValue(e))}get _hasValue(){return this.value!=null&&this.value!==""}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ud=V(r=>class extends Bn(ni(nr(r))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){const i=e.target;this._toggleChecked(i.checked),ri(i)||i.focus()}_toggleChecked(e){this.checked=e}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const or=V(r=>class extends ai(sr(r)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){!this.focusElement||this.disabled||(this.focusElement.focus(),this._setFocused(!0))}blur(){!this.focusElement||(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,i){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):i&&this._removeFocusListeners(i)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_disabledChanged(e,i){super._disabledChanged(e,i),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let pd=0;function ar(){return pd++}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ye extends EventTarget{static generateId(t,e){return`${t||"default"}-${e.localName}-${ar()}`}constructor(t,e,i,s,n){super(),this.host=t,this.slotName=e,this.slotFactory=i,this.slotInitializer=s,n&&(this.defaultId=ye.generateId(e,t))}hostConnected(){if(!this.initialized){let t=this.getSlotChild();t?(this.node=t,this.initCustomNode(t)):t=this.attachDefaultNode(),this.initNode(t),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:t,slotName:e,slotFactory:i}=this;let s=this.defaultNode;return!s&&i&&(s=i(t),s instanceof Element&&(e!==""&&s.setAttribute("slot",e),this.node=s,this.defaultNode=s)),s&&t.appendChild(s),s}getSlotChild(){const{slotName:t}=this;return Array.from(this.host.childNodes).find(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&t==="")}initNode(t){const{slotInitializer:e}=this;e&&e(this.host,t)}initCustomNode(t){}teardownNode(t){}observe(){const{slotName:t}=this,e=t===""?"slot:not([name])":`slot[name=${t}]`,i=this.host.shadowRoot.querySelector(e);this.__slotObserver=new X(i,s=>{const n=this.node,o=s.addedNodes.find(a=>a!==n);s.removedNodes.length&&s.removedNodes.forEach(a=>{this.teardownNode(a)}),o&&(n&&n.isConnected&&this.host.removeChild(n),this.node=o,o!==this.defaultNode&&(this.initCustomNode(o),this.initNode(o)))})}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class St extends ye{constructor(t,e){super(t,"input",()=>document.createElement("input"),(i,s)=>{i.value&&s.setAttribute("value",i.value),i.type&&s.setAttribute("type",i.type),s.id=this.defaultId,typeof e=="function"&&e(s)},!0)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class fd extends ye{constructor(t){super(t,"label",()=>document.createElement("label"),(e,i)=>{this.__updateLabelId(i),this.__updateDefaultLabel(this.label),this.__observeLabel(i)},!0)}get labelId(){return this.node.id}initCustomNode(t){this.__updateLabelId(t);const e=this.__hasLabel(t);this.__toggleHasLabel(e)}teardownNode(t){this.__labelObserver&&this.__labelObserver.disconnect();let e=this.getSlotChild();!e&&t!==this.defaultNode&&(e=this.attachDefaultNode(),this.initNode(e));const i=this.__hasLabel(e);this.__toggleHasLabel(i)}setLabel(t){this.label=t,this.__updateDefaultLabel(t)}__hasLabel(t){return t?t.children.length>0||this.__isNotEmpty(t.textContent):!1}__isNotEmpty(t){return Boolean(t&&t.trim()!=="")}__observeLabel(t){this.__labelObserver=new MutationObserver(e=>{e.forEach(i=>{const s=i.target,n=s===this.node;if(i.type==="attributes")n&&s.id!==this.defaultId&&this.__updateLabelId(s);else if(n||s.parentElement===this.node){const o=this.__hasLabel(this.node);this.__toggleHasLabel(o)}})}),this.__labelObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(t){this.host.toggleAttribute("has-label",t),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:t,node:this.node}}))}__updateDefaultLabel(t){if(this.defaultNode&&(this.defaultNode.textContent=t,this.defaultNode===this.node)){const e=this.__isNotEmpty(t);this.__toggleHasLabel(e)}}__updateLabelId(t){t.id||(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Un=V(r=>class extends de(r){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new fd(this)}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Je{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("label-changed",i=>{this.__initLabel(i.detail.node)}),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _d{constructor(t,e,i){this.sourceSlot=t,this.targetFactory=e,this.copyCallback=i,t&&t.addEventListener("slotchange",()=>{this.__copying?this.__copying=!1:this.__checkAndCopyNodesToSlotTarget()})}hostConnected(){this.__sourceSlotObserver=new MutationObserver(()=>this.__checkAndCopyNodesToSlotTarget()),this.__copying||this.__checkAndCopyNodesToSlotTarget()}__checkAndCopyNodesToSlotTarget(){this.__sourceSlotObserver.disconnect();const t=this.targetFactory();if(!t)return;this.__slotTargetClones&&(this.__slotTargetClones.forEach(i=>{i.parentElement===t&&t.removeChild(i)}),delete this.__slotTargetClones);const e=this.sourceSlot.assignedNodes({flatten:!0}).filter(i=>!(i.nodeType===Node.TEXT_NODE&&i.textContent.trim()===""));e.length>0&&(t.innerHTML="",this.__copying=!0,this.__copyNodesToSlotTarget(e,t))}__copyNodesToSlotTarget(t,e){this.__slotTargetClones=this.__slotTargetClones||[],t.forEach(i=>{const s=i.cloneNode(!0);this.__slotTargetClones.push(s),e.appendChild(s),this.__sourceSlotObserver.observe(i,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}),typeof this.copyCallback=="function"&&this.copyCallback(t)}}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class jr extends Un(ud(or(rr(K(R(de(k))))))){static get is(){return"vaadin-checkbox"}static get template(){return M`
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

        .vaadin-checkbox-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        .vaadin-checkbox-wrapper {
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
      <div class="vaadin-checkbox-container">
        <div class="vaadin-checkbox-wrapper">
          <div part="checkbox"></div>
          <slot name="input"></slot>
        </div>

        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
    `}static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new St(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Je(this.inputElement,this._labelController)),this.addController(new _d(this.$.noop,()=>this._labelController.node,()=>this.__warnDeprecated()))}__warnDeprecated(){console.warn(`WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-checkbox> is deprecated.
Please use <label slot="label"> wrapper or the label property instead.`)}_shouldSetActive(t){return t.target.localName==="a"?!1:super._shouldSetActive(t)}_toggleChecked(t){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(t)}}customElements.define(jr.is,jr);T("vaadin-input-container",E`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Kr extends R(be(k)){static get is(){return"vaadin-input-container"}static get template(){return M`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          /* See the workaround at the end of this file. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",t=>{t.target===this&&t.preventDefault()}),this.addEventListener("click",t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(e=>e.focus&&e.focus())})}}customElements.define(Kr.is,Kr);const md=E`
  /* Needed for Safari, where ::slotted(...)::placeholder does not work */
  :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
    font: inherit;
    color: inherit;
  }
`,Wn=document.createElement("template");Wn.innerHTML=`<style>${md.toString()}</style>`;document.head.appendChild(Wn.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const li=E`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;T("",li,{moduleId:"lumo-overlay"});T("vaadin-overlay",li,{moduleId:"lumo-vaadin-overlay"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function lr(r,t,e,i,s){let n;s&&(n=typeof e=="object"&&e!==null,n&&(i=r.__dataTemp[t]));let o=i!==e&&(i===i||e===e);return n&&o&&(r.__dataTemp[t]=e),o}const dr=V(r=>{class t extends r{_shouldPropertyChange(i,s,n){return lr(this,i,s,n,!0)}}return t}),gd=V(r=>{class t extends r{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(i,s,n){return lr(this,i,s,n,this.mutableData)}}return t});dr._mutablePropertyChange=lr;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Fi=null;function Ni(){return Fi}Ni.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Ni,writable:!0}});const qn=Xi(Ni),vd=dr(qn);function bd(r,t){Fi=r,Object.setPrototypeOf(r,t.prototype),new t,Fi=null}const yd=Xi(class{});function Yn(r,t){for(let e=0;e<t.length;e++){let i=t[e];if(Boolean(r)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)r?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if(i.localName==="slot")if(r)i.__polymerReplaced__=document.createComment("hidden-slot"),D(D(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const s=i.__polymerReplaced__;s&&D(D(s).parentNode).replaceChild(i,s)}else i.style&&(r?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=r,i._showHideChildren&&i._showHideChildren(r)}}class we extends yd{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let s=this.root.firstChild;s;s=s.nextSibling)e.push(s),s.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let i in this.__hostProps)this._setPendingProperty(i,this.__dataHost["_host_"+i]);for(let i in t)this._setPendingProperty(i,t[i])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,s=>{s.model=this,i(s)});else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(t,e,i)}}_showHideChildren(t){Yn(t,this.children)}_setUnmanagedPropertyToNode(t,e,i){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&e=="textContent"?t.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(t,e,i)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do t=t.__dataHost.__dataHost;while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}we.prototype.__dataHost;we.prototype.__templatizeOptions;we.prototype._methodHost;we.prototype.__templatizeOwner;we.prototype.__hostProps;const wd=dr(we);function Qr(r){let t=r.__dataHost;return t&&t._methodHost||t}function Cd(r,t,e){let i=e.mutableData?wd:we;ze.mixin&&(i=ze.mixin(i));let s=class extends i{};return s.prototype.__templatizeOptions=e,s.prototype._bindTemplate(r),Ed(s,r,t,e),s}function xd(r,t,e,i){let s=e.forwardHostProp;if(s&&t.hasHostProps){const n=r.localName=="template";let o=t.templatizeTemplateClass;if(!o){if(n){let l=e.mutableData?vd:qn;class d extends l{}o=t.templatizeTemplateClass=d}else{const l=r.constructor;class d extends l{}o=t.templatizeTemplateClass=d}let a=t.hostProps;for(let l in a)o.prototype._addPropertyEffect("_host_"+l,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Ad(l,s)}),o.prototype._createNotifyingProperty("_host_"+l);an&&i&&Sd(t,e,i)}if(r.__dataProto&&Object.assign(r.__data,r.__dataProto),n)bd(r,o),r.__dataTemp={},r.__dataPending=null,r.__dataOld=null,r._enableProperties();else{Object.setPrototypeOf(r,o.prototype);const a=t.hostProps;for(let l in a)if(l="_host_"+l,l in r){const d=r[l];delete r[l],r.__data[l]=d}}}}function Ad(r,t){return function(i,s,n){t.call(i.__templatizeOwner,s.substring(6),n[s])}}function Ed(r,t,e,i){let s=e.hostProps||{};for(let n in i.instanceProps){delete s[n];let o=i.notifyInstanceProp;o&&r.prototype._addPropertyEffect(n,r.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Td(n,o)})}if(i.forwardHostProp&&t.__dataHost)for(let n in s)e.hasHostProps||(e.hasHostProps=!0),r.prototype._addPropertyEffect(n,r.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Id()})}function Td(r,t){return function(i,s,n){t.call(i.__templatizeOwner,i,s,n[s])}}function Id(){return function(t,e,i){t.__dataHost._setPendingPropertyOrPath("_host_"+e,i[e],!0,!0)}}function ze(r,t,e){if(mt&&!Qr(r))throw new Error("strictTemplatePolicy: template owner not trusted");if(e=e||{},r.__templatizeOwner)throw new Error("A <template> can only be templatized once");r.__templatizeOwner=t;let s=(t?t.constructor:we)._parseTemplate(r),n=s.templatizeInstanceClass;n||(n=Cd(r,s,e),s.templatizeInstanceClass=n);const o=Qr(r);xd(r,s,e,o);let a=class extends n{};return a.prototype._methodHost=o,a.prototype.__dataHost=r,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=s.hostProps,a=a,a}function Sd(r,t,e){const i=e.constructor._properties,{propertyEffects:s}=r,{instanceProps:n}=t;for(let o in s)if(!i[o]&&!(n&&n[o])){const a=s[o];for(let l=0;l<a.length;l++){const{part:d}=a[l].info;if(!(d.signature&&d.signature.static)){console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function Pd(r,t){let e;for(;t;)if(e=t.__dataHost?t:t.__templatizeInstance)if(e.__dataHost!=r)t=e.__dataHost;else return e;else t=D(t).parentNode;return null}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ne extends R(be(de(k))){static get template(){return M`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new X(this,t=>{this._setTemplateFromNodes(t.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),It&&(this._boundIosResizeListener=()=>this._detectIosNavbar()),this.__focusTrapController=new On(this)}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addController(this.__focusTrapController)}_detectIosNavbar(){if(!this.opened)return;const t=window.innerHeight,i=window.innerWidth>t,s=document.documentElement.clientHeight;i&&s>t?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${s-t}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(t){this.template=t.filter(e=>e.localName&&e.localName==="template")[0]||this.template}close(t){const e=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),e.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_ironOverlayCanceled(t){t.preventDefault()}_mouseDownListener(t){this._mouseDownInside=t.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(t){this._mouseUpInside=t.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(t){if(t.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._last)return;const e=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}_keydownListener(t){if(!!this._last&&!(this.modeless&&!t.composedPath().includes(this.$.overlay))&&t.key==="Escape"){const e=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(t,e){this._instance||this._ensureTemplatized(),t?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),Wi(this,()=>{this.focusTrap&&this.__focusTrapController.trapFocus(this.$.overlay);const i=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(i)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):e&&(this.focusTrap&&this.__focusTrapController.releaseFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(t){t&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const t=getComputedStyle(this).getPropertyValue("animation-name");return!(getComputedStyle(this).getPropertyValue("display")==="none")&&t&&t!=="none"}_enqueueAnimation(t,e){const i=`__${t}Handler`,s=n=>{n&&n.target!==this||(e(),this.removeEventListener("animationend",s),delete this[i])};this[i]=s,this.addEventListener("animationend",s)}_flushAnimation(t){const e=`__${t}Handler`;typeof this[e]=="function"&&this[e]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")}_finishClosing(){document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing")}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this._exitModalState();const t=this.restoreFocusNode||this.__restoreFocusNode;if(this.restoreFocusOnClose&&t){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&setTimeout(()=>t.focus()),this.__restoreFocusNode=null}this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(t=>t instanceof ne&&!t.hasAttribute("closing")).sort((t,e)=>t.__zIndex-e.__zIndex||0)}get _last(){return this===ne.__attachedInstances.pop()}_modelessChanged(t){t?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),ne.__attachedInstances.forEach(t=>{t!==this&&(t.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const t=ne.__attachedInstances;let e;for(;(e=t.pop())&&!(e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),!e.modeless)););}_removeOldContent(){!this.content||!this._contentNodes||(this._observer.disconnect(),this._contentNodes.forEach(t=>{t.parentNode===this.content&&this.content.removeChild(t)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(t){this._removeOldContent(),t._Templatizer||(t._Templatizer=ze(t,this,{forwardHostProp(i,s){this._instance&&this._instance.forwardHostProp(i,s)}})),this._instance=new t._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const e=t._templateRoot||(t._templateRoot=t.getRootNode());if(e!==document){this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let i=Array.from(e.querySelectorAll("style")).reduce((s,n)=>s+n.textContent,"");if(i=i.replace(/:host/g,":host-nomatch"),i){const s=document.createElement("style");s.textContent=i,this.$.content.shadowRoot.appendChild(s),this._contentNodes.unshift(s)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(t,e,i,s){t!==e?this.template=void 0:i!==s&&(this.renderer=void 0)}_templateOrRendererChanged(t,e,i,s,n){if(t&&e)throw this._removeNewRendererOrTemplate(t,this._oldTemplate,e,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const o=this._oldOwner!==i||this._oldModel!==s;this._oldModel=s,this._oldOwner=i;const a=this._oldTemplate!==t;this._oldTemplate=t;const l=this._oldRenderer!==e;this._oldRenderer=e;const d=this._oldOpened!==n;this._oldOpened=n,l&&(this.content=this,this.content.innerHTML="",delete this.content._$litPart$),t&&a?this._stampOverlayTemplate(t):e&&(l||d||o)&&n&&this.requestContentUpdate()}_getActiveElement(){let t=document.activeElement||document.body;for(;t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}_deepContains(t){if(this.contains(t))return!0;let e=t;const i=t.ownerDocument;for(;e&&e!==i&&e!==this;)e=e.parentNode||e.host;return e===this}bringToFront(){let t="";const e=ne.__attachedInstances.filter(i=>i!==this).pop();e&&(t=e.__zIndex+1),this.style.zIndex=t,this.__zIndex=t||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(ne.is,ne);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dd=E`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation: 1s linear infinite lumo-loader-rotate, 0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cr=E`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;T("",cr,{moduleId:"lumo-menu-overlay-core"});const kd=E`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,hr=[li,cr,kd];T("",hr,{moduleId:"lumo-menu-overlay"});const Od=E`
  [part='content'] {
    padding: 0;
  }

  :host {
    --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
    --_vaadin-combo-box-items-container-border-style: solid;
    --_vaadin-combo-box-items-container-border-color: transparent;
  }

  /* Loading state */

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  [part~='loader'] {
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;T("vaadin-combo-box-overlay",[li,cr,Od,Dd],{moduleId:"lumo-combo-box-overlay"});const Gn=E`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--lumo-primary-text-color);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    :host([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon),
  :host ::slotted(iron-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;T("vaadin-item",Gn,{moduleId:"lumo-item"});const zd=E`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }
`;T("vaadin-combo-box-item",[Gn,zd],{moduleId:"lumo-combo-box-item"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ur=E`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;T("",ur,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Md=E`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jn=E`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;T("",jn,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ld=E`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,Ce=[jn,ur,Md,Ld];T("",Ce,{moduleId:"lumo-input-field-shared-styles"});const Fd=E`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;T("vaadin-combo-box",[Ce,Fd],{moduleId:"lumo-combo-box"});/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xr extends R(be(k)){static get template(){return M`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,_oldRenderer:Function}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback(),this._comboBox=this.parentNode.comboBox;const t=this._comboBox.getAttribute("dir");t&&this.setAttribute("dir",t)}requestContentUpdate(){if(!this.renderer)return;const t={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._comboBox,t)}__rendererOrItemChanged(t,e,i){i===void 0||e===void 0||(this._oldRenderer!==t&&(this.innerHTML="",delete this._$litPart$),t&&(this._oldRenderer=t,this.requestContentUpdate()))}__updateLabel(t,e){e||(this.textContent=t)}}customElements.define(Xr.is,Xr);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Nd(r){const t=[];for(;r;){if(r.nodeType===Node.DOCUMENT_NODE){t.push(r);break}if(r.nodeType===Node.DOCUMENT_FRAGMENT_NODE){t.push(r),r=r.host;continue}if(r.assignedSlot){r=r.assignedSlot;continue}r=r.parentNode}return t}function Kn(r){return r?new Set(r.split(" ")):new Set}function Qn(r){return[...r].join(" ")}function Xn(r,t,e){const i=Kn(r.getAttribute(t));i.add(e),r.setAttribute(t,Qn(i))}function Jn(r,t,e){const i=Kn(r.getAttribute(t));if(i.delete(e),i.size===0){r.removeAttribute(t);return}r.setAttribute(t,Qn(i))}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jr={start:"top",end:"bottom"},Zr={start:"left",end:"right"},pr=r=>class extends r{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=Nd(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this._updatePosition,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this._updatePosition,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,i){if(this.__removeUpdatePositionEventListeners(),e&&i&&this.__addUpdatePositionEventListeners(),e){const s=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(n=>{this.__margins[n]=parseInt(s[n],10)})),this.setAttribute("dir",s.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}get __isRTL(){return this.getAttribute("dir")==="rtl"}__positionSettingsChanged(){this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),i=this.__shouldAlignStartVertically(e);this.style.justifyContent=i?"flex-start":"flex-end";const s=this.__shouldAlignStartHorizontally(e,this.__isRTL),n=!this.__isRTL&&s||this.__isRTL&&!s;this.style.alignItems=n?"flex-start":"flex-end";const o=this.getBoundingClientRect(),a=this.__calculatePositionInOneDimension(e,o,this.noVerticalOverlap,Jr,this,i),l=this.__calculatePositionInOneDimension(e,o,this.noHorizontalOverlap,Zr,this,s);Object.assign(this.style,a,l),this.toggleAttribute("bottom-aligned",!i),this.toggleAttribute("top-aligned",i),this.toggleAttribute("end-aligned",!n),this.toggleAttribute("start-aligned",n)}__shouldAlignStartHorizontally(e,i){const s=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const n=Math.min(window.innerWidth,document.documentElement.clientWidth),o=!i&&this.horizontalAlign==="start"||i&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,s,n,this.__margins,o,this.noHorizontalOverlap,Zr)}__shouldAlignStartVertically(e){const i=Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const s=Math.min(window.innerHeight,document.documentElement.clientHeight),n=this.verticalAlign==="top";return this.__shouldAlignStart(e,i,s,this.__margins,n,this.noVerticalOverlap,Jr)}__shouldAlignStart(e,i,s,n,o,a,l){const d=s-e[a?l.end:l.start]-n[l.end],c=e[a?l.start:l.end]-n[l.start],u=o?d:c,y=u>(o?c:d)||u>i;return o===y}__calculatePositionInOneDimension(e,i,s,n,o,a){const l=a?n.start:n.end,d=a?n.end:n.start,c=parseFloat(o.style[l]||getComputedStyle(o)[l]),u=i[a?n.start:n.end]-e[s===a?n.end:n.start];return{[l]:`${c+u*(a?-1:1)}px`,[d]:""}}};/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */T("vaadin-combo-box-overlay",E`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});let Lt;class es extends pr(ne){static get is(){return"vaadin-combo-box-overlay"}static get template(){return Lt||(Lt=super.template.cloneNode(!0),Lt.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),Lt}static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}connectedCallback(){super.connectedCallback();const t=this._comboBox,e=t&&t.getAttribute("dir");e&&this.setAttribute("dir",e)}ready(){super.ready();const t=document.createElement("div");t.setAttribute("part","loader");const e=this.shadowRoot.querySelector('[part~="content"]');e.parentNode.insertBefore(t,e)}_outsideClickListener(t){const e=t.composedPath();!e.includes(this.positionTarget)&&!e.includes(this)&&this.close()}_setOverlayWidth(t,e){if(t&&e){const i=this.localName;this.style.setProperty(`--_${i}-default-width`,`${t.clientWidth}px`);const s=getComputedStyle(this._comboBox).getPropertyValue(`--${i}-width`);s===""?this.style.removeProperty(`--${i}-width`):this.style.setProperty(`--${i}-width`,s),this._updatePosition()}}}customElements.define(es.is,es);/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const ts=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),Rd=ts&&ts[1]>=8,is=3,$d={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const r=this._virtualCount;return Math.max(0,r-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(r){r=this._clamp(r,0,this._maxVirtualStart),this._virtualStartVal=r},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(r){r%=this._physicalCount,r<0&&(r=this._physicalCount+r),this._physicalStartVal=r},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(r){this._physicalCountVal=r},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let r=this._firstVisibleIndexVal;if(r==null){let t=this._physicalTop+this._scrollOffset;r=this._iterateItems((e,i)=>{if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return i})||0,this._firstVisibleIndexVal=r}return r},get lastVisibleIndex(){let r=this._lastVisibleIndexVal;if(r==null){let t=this._physicalTop+this._scrollOffset;this._iterateItems((e,i)=>{t<this._scrollBottom&&(r=i),t+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=r}return r},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const r=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=r-this._scrollPosition;const e=t>=0;if(this._scrollPosition=r,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const i=Math.round(t/this._physicalAverage);this._virtualStart+=i,this._physicalStart+=i,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const i=this._getReusables(e);e?(this._physicalTop=i.physicalTop,this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length):(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length),this._update(i.indexes,e?null:i.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Ct)}},_getReusables(r){let t,e,i;const s=[],n=this._hiddenContentSize*this._ratio,o=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const c=this._physicalBottom+this._scrollOffset,u=this._scrollPosition,m=this._scrollBottom;for(r?(t=this._physicalStart,e=u-d):(t=this._physicalEnd,e=c-m);i=this._getPhysicalSizeIncrement(t),e-=i,!(s.length>=l||e<=n);)if(r){if(a+s.length+1>=this._virtualCount||d+i>=u-this._scrollOffset)break;s.push(t),d+=i,t=(t+1)%l}else{if(o-s.length<=0||d+this._physicalSize-i<=m)break;s.push(t),d-=i,t=t===0?l-1:t-1}return{indexes:s,physicalTop:d-this._scrollOffset}},_update(r,t){if(!(r&&r.length===0||this._physicalCount===0)){if(this._assignModels(r),this._updateMetrics(r),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(r){const e=this._clamp(this._physicalCount+r,is,this._virtualCount-this._virtualStart)-this._physicalCount;let i=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){const s=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let n=0;n<e;n++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-s)/e,i=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||i===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,i)),Pn):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,i),Ct))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const r=this._getReusables(!0);this._physicalTop=r.physicalTop,this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length,this._update(r.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(is))},_itemsChanged(r){r.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,wt))},_iterateItems(r,t){let e,i,s,n;if(arguments.length===2&&t){for(n=0;n<t.length;n++)if(e=t[n],i=this._computeVidx(e),(s=r.call(this,e,i))!=null)return s}else{for(e=this._physicalStart,i=this._virtualStart;e<this._physicalCount;e++,i++)if((s=r.call(this,e,i))!=null)return s;for(e=0;e<this._physicalStart;e++,i++)if((s=r.call(this,e,i))!=null)return s}},_computeVidx(r){return r>=this._physicalStart?this._virtualStart+(r-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+r},_updateMetrics(r){He();let t=0,e=0;const i=this._physicalAverageCount,s=this._physicalAverage;this._iterateItems((n,o)=>{e+=this._physicalSizes[n],this._physicalSizes[n]=this._physicalItems[n].offsetHeight,t+=this._physicalSizes[n],this._physicalAverageCount+=this._physicalSizes[n]?1:0},r),this._physicalSize=this._physicalSize+t-e,this._physicalAverageCount!==i&&(this._physicalAverage=Math.round((s*i+t)/this._physicalAverageCount))},_positionItems(){this._adjustScrollPosition();let r=this._physicalTop;this._iterateItems(t=>{this.translate3d(0,`${r}px`,0,this._physicalItems[t]),r+=this._physicalSizes[t]})},_getPhysicalSizeIncrement(r){return this._physicalSizes[r]},_adjustScrollPosition(){const r=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(r!==0){this._physicalTop-=r;const t=this._scrollPosition;!Rd&&t>0&&this._resetScrollPosition(t-r)}},_resetScrollPosition(r){this.scrollTarget&&r>=0&&(this._scrollTop=r,this._scrollPosition=this._scrollTop)},_updateScrollerSize(r){this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,r=r||this._scrollHeight===0,r=r||this._scrollPosition>=this._estScrollHeight-this._physicalSize,(r||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${this._estScrollHeight}px`,this._scrollHeight=this._estScrollHeight)},scrollToIndex(r){if(typeof r!="number"||r<0||r>this.items.length-1||(He(),this._physicalCount===0))return;r=this._clamp(r,0,this._virtualCount-1),(!this._isIndexRendered(r)||r>=this._maxVirtualStart)&&(this._virtualStart=r-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let t=this._physicalStart,e=this._virtualStart,i=0;const s=this._hiddenContentSize;for(;e<r&&i<=s;)i+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},wt)},_isIndexRendered(r){return r>=this._virtualStart&&r<=this._virtualEnd},_getPhysicalIndex(r){return(this._physicalStart+(r-this._virtualStart))%this._physicalCount},_clamp(r,t,e){return Math.min(e,Math.max(t,r))},_debounce(r,t,e){this._debouncers=this._debouncers||{},this._debouncers[r]=U.debounce(this._debouncers[r],e,t.bind(this)),Dn(this._debouncers[r])}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hd=1e5,gi=1e3;class Zn{constructor({createElements:t,updateElement:e,scrollTarget:i,scrollContainer:s,elementsContainer:n,reorderElements:o}){this.isAttached=!0,this._vidxOffset=0,this.createElements=t,this.updateElement=e,this.scrollTarget=i,this.scrollContainer=s,this.elementsContainer=n||s,this.reorderElements=o,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",a=>this.__onWheel(a)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(t){if(typeof t!="number"||isNaN(t)||this.size===0||!this.scrollTarget.offsetHeight)return;t=this._clamp(t,0,this.size-1);const e=this.__getVisibleElements().length;let i=Math.floor(t/this.size*this._virtualCount);this._virtualCount-i<e?(i=this._virtualCount-(this.size-t),this._vidxOffset=this.size-this._virtualCount):i<e?t<gi?(i=t,this._vidxOffset=0):(i=gi,this._vidxOffset=t-i):this._vidxOffset=t-i,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(i),this.adjustedFirstVisibleIndex!==t&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(t)||0),this._scrollHandler()}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),He(),this._scrollHandler(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(t=0,e=this.size-1){this.__getVisibleElements().forEach(i=>{i.__virtualIndex>=t&&i.__virtualIndex<=e&&this.__updateElement(i,i.__virtualIndex,!0)})}__updateElement(t,e,i){t.style.paddingTop&&(t.style.paddingTop=""),!this.__preventElementUpdates&&(t.__lastUpdatedIndex!==e||i)&&(this.updateElement(t,e),t.__lastUpdatedIndex=e);const s=t.offsetHeight;if(s===0)t.style.paddingTop=`${this.__placeholderHeight}px`;else{this.__elementHeightQueue.push(s),this.__elementHeightQueue.shift();const n=this.__elementHeightQueue.filter(o=>o!==void 0);this.__placeholderHeight=Math.round(n.reduce((o,a)=>o+a,0)/n.length)}}__getIndexScrollOffset(t){const e=this.__getVisibleElements().find(i=>i.__virtualIndex===t);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(t){if(t===this.size)return;this.__preventElementUpdates=!0;let e,i;if(t>0&&(e=this.adjustedFirstVisibleIndex,i=this.__getIndexScrollOffset(e)),this.__size=t,He(),this._itemsChanged({path:"items"}),He(),t>0){e=Math.min(e,t-1),this.scrollToIndex(e);const s=this.__getIndexScrollOffset(e);i!==void 0&&s!==void 0&&(this._scrollTop+=i-s)}this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this.__preventElementUpdates=!1,this._resizeHandler(),He()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(t){this.scrollTarget.scrollTop=t}get items(){return{length:Math.min(this.size,Hd)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const t=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=Boolean(t.direction==="rtl"),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(t){const e=this.createElements(t),i=document.createDocumentFragment();return e.forEach(s=>{s.style.position="absolute",i.appendChild(s),this.__resizeObserver.observe(s)}),this.elementsContainer.appendChild(i),e}_assignModels(t){this._iterateItems((e,i)=>{const s=this._physicalItems[e];s.hidden=i>=this.size,s.hidden?delete s.__lastUpdatedIndex:(s.__virtualIndex=i+(this._vidxOffset||0),this.__updateElement(s,s.__virtualIndex))},t)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(t,e,i,s){s.style.transform=`translateY(${e})`}toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const t=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const e=t>=0,i=this._getReusables(!e);i.indexes.length&&(this._physicalTop=i.physicalTop,e?(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length):(this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length),this._resizeHandler())}this.reorderElements&&(this.__scrollReorderDebouncer=U.debounce(this.__scrollReorderDebouncer,re.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop}__onWheel(t){if(t.ctrlKey||this._hasScrolledAncestor(t.target,t.deltaX,t.deltaY))return;let e=t.deltaY;if(t.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:t.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc=this._deltaYAcc||0,this._wheelAnimationFrame){this._deltaYAcc+=e,t.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=U.debounce(this.__debouncerWheelAnimationFrame,wt,()=>{this._wheelAnimationFrame=!1});const i=Math.abs(t.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,t.deltaX,e)?(t.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=t.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=U.debounce(this._debouncerIgnoreNewWheel,re.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&i<=this._previousMomentum||this._ignoreNewWheel?t.preventDefault():i>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=i}_hasScrolledAncestor(t,e,i){if(t===this.scrollTarget||t===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(t,e,i)&&["auto","scroll"].indexOf(getComputedStyle(t).overflow)!==-1)return!0;if(t!==this&&t.parentElement)return this._hasScrolledAncestor(t.parentElement,e,i)}_canScroll(t,e,i){return i>0&&t.scrollTop<t.scrollHeight-t.offsetHeight||i<0&&t.scrollTop>0||e>0&&t.scrollLeft<t.scrollWidth-t.offsetWidth||e<0&&t.scrollLeft>0}_getScrollLineHeight(){const t=document.createElement("div");t.style.fontSize="initial",t.style.display="none",document.body.appendChild(t);const e=window.getComputedStyle(t).fontSize;return document.body.removeChild(t),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(t=>!t.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const t=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),s=e.find(a=>a.contains(this.elementsContainer.getRootNode().activeElement)||a.contains(this.scrollTarget.getRootNode().activeElement))||e[0];if(!s)return;const n=s.__virtualIndex-t,o=e.indexOf(s)-n;if(o>0)for(let a=0;a<o;a++)this.elementsContainer.appendChild(e[a]);else if(o<0)for(let a=e.length+o;a<e.length;a++)this.elementsContainer.insertBefore(e[a],e[0]);if(Gs){const{transform:a}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=a})}}_adjustVirtualIndexOffset(t){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(t)>1e4){const e=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),i=e*this.size;this._vidxOffset=Math.round(i-e*this._virtualCount)}else{const e=this._vidxOffset,i=gi,s=100;this._scrollTop===0?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<i&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,s),super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)));const n=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=n,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-i&&this._vidxOffset<n&&(this._vidxOffset+=Math.min(n-this._vidxOffset,s),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)))}}}Object.setPrototypeOf(Zn.prototype,$d);class eo{constructor(t){this.__adapter=new Zn(t)}get size(){return this.__adapter.size}set size(t){this.__adapter.size=t}scrollToIndex(t){this.__adapter.scrollToIndex(t)}update(t=0,e=this.size-1){this.__adapter.update(t,e)}flush(){this.__adapter.flush()}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}}/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Me=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class rs extends k{static get is(){return"vaadin-combo-box-scroller"}static get template(){return M`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object,observer:"__selectedItemChanged"},itemIdPath:{type:String},comboBox:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}__openedChanged(t){t&&this.requestContentUpdate()}ready(){super.ready(),this.id=`${this.localName}-${ar()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.setAttribute("role","listbox"),this.addEventListener("click",t=>t.stopPropagation()),this.__patchWheelOverScrolling(),this.__virtualizer=new eo({createElements:this.__createElements.bind(this),updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(t){if(!(this.opened&&t>=0))return;const e=this._visibleItemsCount();let i=t;t>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(t),i=t-e+1):t>this.__virtualizer.firstVisibleIndex&&(i=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,i));const s=[...this.children].find(l=>!l.hidden&&l.index===this.__virtualizer.lastVisibleIndex);if(!s||t!==s.index)return;const n=s.getBoundingClientRect(),o=this.getBoundingClientRect(),a=n.bottom-o.bottom+this._viewportTotalPaddingBottom;a>0&&(this.scrollTop+=a)}__getAriaRole(t){return t!==void 0?"option":!1}__getAriaSelected(t,e){return this.__isItemFocused(t,e).toString()}__isItemFocused(t,e){return!this.loading&&t===e}__isItemSelected(t,e,i){return t instanceof Me?!1:i&&t!==void 0&&e!==void 0?this.get(i,t)===this.get(i,e):t===e}__itemsChanged(t){this.__virtualizer&&t&&(this.__virtualizer.size=t.length,this.__virtualizer.flush(),this.setAttribute("aria-setsize",t.length),this.requestContentUpdate())}__loadingChanged(){this.__virtualizer&&setTimeout(()=>this.requestContentUpdate())}__selectedItemChanged(){this.__virtualizer&&this.requestContentUpdate()}__focusedIndexChanged(t,e){!this.__virtualizer||(t!==e&&this.requestContentUpdate(),t>=0&&!this.loading&&this.scrollIntoView(t))}__rendererChanged(t,e){(t||e)&&this.requestContentUpdate()}__createElements(t){return[...Array(t)].map(()=>{const e=document.createElement(`${this.__hostTagName}-item`);return e.addEventListener("click",this.__boundOnItemClick),e.tabIndex="-1",e.style.width="100%",e})}__updateElement(t,e){const i=this.items[e],s=this.focusedIndex;t.setProperties({item:i,index:this.__requestItemByIndex(i,e),label:this.getItemLabel(i),selected:this.__isItemSelected(i,this.selectedItem,this.itemIdPath),renderer:this.renderer,focused:this.__isItemFocused(s,e)}),t.id=`${this.__hostTagName}-item-${e}`,t.setAttribute("role",this.__getAriaRole(e)),t.setAttribute("aria-selected",this.__getAriaSelected(s,e)),t.setAttribute("aria-posinset",e+1),this.theme?t.setAttribute("theme",this.theme):t.removeAttribute("theme")}__onItemClick(t){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:t.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",t=>{const e=this.scrollTop===0,i=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(e&&t.deltaY<0||i&&t.deltaY>0)&&t.preventDefault()})}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const t=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[t.paddingBottom,t.borderBottomWidth].map(e=>parseInt(e,10)).reduce((e,i)=>e+i)}return this._cachedViewportTotalPaddingBottom}__requestItemByIndex(t,e){return t instanceof Me&&e!==void 0&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:e,currentScrollerPos:this._oldScrollerPosition}})),e}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}}customElements.define(rs.is,rs);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vd extends ye{constructor(t){super(t,"error-message",()=>document.createElement("div"),(e,i)=>{this.__updateErrorId(i),this.__updateHasError()},!0)}get errorId(){return this.node&&this.node.id}setErrorMessage(t){this.errorMessage=t,this.__updateHasError()}setInvalid(t){this.invalid=t,this.__updateHasError()}initCustomNode(t){this.__updateErrorId(t),t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),this.__updateHasError()}teardownNode(t){let e=this.getSlotChild();!e&&t!==this.defaultNode&&(e=this.attachDefaultNode(),this.initNode(e)),this.__updateHasError()}__isNotEmpty(t){return Boolean(t&&t.trim()!=="")}__updateHasError(){const t=this.node,e=Boolean(this.invalid&&this.__isNotEmpty(this.errorMessage));t&&(t.textContent=e?this.errorMessage:"",t.hidden=!e,e?t.setAttribute("role","alert"):t.removeAttribute("role")),this.host.toggleAttribute("has-error-message",e)}__updateErrorId(t){t.id||(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bd{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setLabelId(t){this.__setLabelIdToAriaAttribute(t,this.__labelId),this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}get __isGroupField(){return this.__target===this.host}__setLabelIdToAriaAttribute(t,e){this.__setAriaAttributeId("aria-labelledby",t,e)}__setErrorIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setHelperIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setAriaRequiredAttribute(t){!this.__target||["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required"))}__setAriaAttributeId(t,e,i){!this.__target||(i&&Jn(this.__target,t,i),e&&Xn(this.__target,t,e))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ud extends ye{constructor(t){super(t,"helper",null,null,!0)}get helperId(){return this.node&&this.node.id}initCustomNode(t){this.__updateHelperId(t),this.__observeHelper(t);const e=this.__hasHelper(t);this.__toggleHasHelper(e)}teardownNode(t){this.__helperIdObserver&&this.__helperIdObserver.disconnect();const e=this.getSlotChild();if(e&&e!==this.defaultNode){const i=this.__hasHelper(e);this.__toggleHasHelper(i)}else this.__applyDefaultHelper(this.helperText,e)}setHelperText(t){this.helperText=t;const e=this.getSlotChild();(!e||e===this.defaultNode)&&this.__applyDefaultHelper(t,e)}__hasHelper(t){return t?t.children.length>0||this.__isNotEmpty(t.textContent):!1}__isNotEmpty(t){return t&&t.trim()!==""}__applyDefaultHelper(t,e){const i=this.__isNotEmpty(t);i&&!e&&(this.slotFactory=()=>document.createElement("div"),e=this.attachDefaultNode(),this.__updateHelperId(e),this.__observeHelper(e)),e&&(e.textContent=t),this.__toggleHasHelper(i)}__observeHelper(t){this.__helperObserver=new MutationObserver(e=>{e.forEach(i=>{const s=i.target,n=s===this.node;if(i.type==="attributes")n&&s.id!==this.defaultId&&this.__updateHelperId(s);else if(n||s.parentElement===this.node){const o=this.__hasHelper(this.node);this.__toggleHasHelper(o)}})}),this.__helperObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasHelper(t){this.host.toggleAttribute("has-helper",t),this.dispatchEvent(new CustomEvent("helper-changed",{detail:{hasHelper:t,node:this.node}}))}__updateHelperId(t){t.id||(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const to=V(r=>class extends r{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wd=r=>class extends to(Un(de(r))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}get _errorId(){return this._errorController.errorId}get _errorNode(){return this._errorController.node}get _helperId(){return this._helperController.helperId}get _helperNode(){return this._helperController.node}constructor(){super(),this._fieldAriaController=new Bd(this),this._helperController=new Ud(this),this._errorController=new Vd(this),this._labelController.addEventListener("label-changed",e=>{const{hasLabel:i,node:s}=e.detail;this.__labelChanged(i,s)}),this._helperController.addEventListener("helper-changed",e=>{const{hasHelper:i,node:s}=e.detail;this.__helperChanged(i,s)})}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,i){e?this._fieldAriaController.setHelperId(i.id):this._fieldAriaController.setHelperId(null)}__labelChanged(e,i){e?this._fieldAriaController.setLabelId(i.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{e?this._fieldAriaController.setErrorId(this._errorController.errorId):this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fr=V(r=>class extends Bn(to(nr(r))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(i=>this.__isValidConstraint(i))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...i){if(!e)return;const s=this._hasValidConstraints(i),n=this.__previousHasConstraints&&!s;(this._hasValue||this.invalid)&&s?this.validate():n&&this._setInvalid(!1),this.__previousHasConstraints=s}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return Boolean(e)||e===0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _r=r=>class extends or(fr(Wd(oi(r)))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.__clear()}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&!!this.value&&(e.stopPropagation(),this.__clear())}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__clear(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=U.debounce(this._preventInputDebouncer,re.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const i=e.clipboardData.getData("text");this.__allowedTextRegExp.test(i)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const i=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(i)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`),this.__allowedTextRegExp=new RegExp(`^${e}*$`)}catch(i){console.error(i)}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mr=r=>class extends fr(r){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean,observer:"_preventInvalidInputChanged"}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){const e=this.inputElement;e&&e.value.length>0&&!this.checkValidity()&&(e.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=U.debounce(this._inputDebouncer,re.after(200),()=>{this.removeAttribute("input-prevented")}))}}_onInput(e){this._checkInputValue(),super._onInput(e)}_preventInvalidInputChanged(e){e&&console.warn('WARNING: Since Vaadin 23.2, "preventInvalidInput" is deprecated. Please use "allowedCharPattern" instead.')}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qd=E`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yd=E`
  :host {
    display: inline-flex;
    outline: none;
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

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gd=E`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pt=[Yd,Gd,qd];/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jd=r=>class extends r{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new Me},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}ready(){super.ready(),this._scroller.addEventListener("index-requested",e=>{const i=e.detail.index,s=e.detail.currentScrollerPos,n=Math.floor(this.pageSize*1.5);if(!this._shouldSkipIndex(i,n,s)&&i!==void 0){const o=this._getPageForIndex(i);this._shouldLoadPage(o)&&this._loadPage(o)}})}_dataProviderFilterChanged(e){if(this.__previousDataProviderFilter===void 0&&e===""){this.__previousDataProviderFilter=e;return}this.__previousDataProviderFilter!==e&&(this.__previousDataProviderFilter=e,this._pendingRequests={},this.loading=this._shouldFetchData(),this.size=void 0,this.clearCache())}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,i,s){return s!==0&&e>=s-i&&e<=s+i}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const i=this.filteredItems[e*this.pageSize];return i!==void 0?i instanceof Me:this.size===void 0}_loadPage(e){if(this._pendingRequests[e]||!this.dataProvider)return;const i={page:e,pageSize:this.pageSize,filter:this.filter},s=(n,o)=>{if(this._pendingRequests[e]!==s)return;const a=this.filteredItems?[...this.filteredItems]:[];a.splice(i.page*i.pageSize,n.length,...n),this.filteredItems=a,!this.opened&&!this._isInputFocused()&&this._commitValue(),o!==void 0&&(this.size=o),delete this._pendingRequests[e],Object.keys(this._pendingRequests).length===0&&(this.loading=!1)};this._pendingRequests[e]=s,this.loading=!0,this.dataProvider(i,s)}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let i=0;i<(this.size||0);i++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?(this._forceNextRequest=!1,this._loadPage(0)):this._forceNextRequest=!0}_sizeChanged(e=0){const i=(this.filteredItems||[]).slice(0,e);for(let s=0;s<e;s++)i[s]=i[s]!==void 0?i[s]:this.__placeHolder;this.filteredItems=i,this._flushPendingRequests(e)}_pageSizeChanged(e,i){if(Math.floor(e)!==e||e<1)throw this.pageSize=i,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,i){this._ensureItemsOrDataProvider(()=>{this.dataProvider=i}),this.clearCache()}_ensureItemsOrDataProvider(e){if(this.items!==void 0&&this.dataProvider!==void 0)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,i){if(e&&i!==""&&(this.selectedItem===void 0||this.selectedItem===null)){const s=this.__getItemIndexByValue(this.filteredItems,i);(s<0||!this._getItemLabel(this.filteredItems[s]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests){const i=Math.ceil(e/this.pageSize),s=Object.keys(this._pendingRequests);for(let n=0;n<s.length;n++){const o=parseInt(s[n]);o>=i&&this._pendingRequests[o]([],e)}}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function di(r){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(r);return}r.querySelector("template")&&console.warn(`WARNING: <template> inside <${r.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class io{constructor(t){this.host=t,t.addEventListener("opened-changed",()=>{t.opened||this.__setVirtualKeyboardEnabled(!1)}),t.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),t.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(t){this.host.inputElement&&(this.host.inputElement.inputMode=t?"":"none")}}/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ss(r){return r!=null}function ns(r,t){return r.findIndex(e=>e instanceof Me?!1:t(e))}const Kd=r=>class extends de(oi(nr(ni(r)))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged"},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean,_scroller:Object,_overlayOpened:{type:Boolean,observer:"_overlayOpenedChanged"}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, filteredItems, loading)","_updateScroller(_scroller, filteredItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _inputElementValue(){return this.inputElement?this.inputElement[this._propertyForValue]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._propertyForValue]=e)}get _nativeInput(){return this.inputElement}_inputElementChanged(e){super._inputElementChanged(e);const i=this._nativeInput;i&&(i.autocomplete="off",i.autocapitalize="off",i.setAttribute("role","combobox"),i.setAttribute("aria-autocomplete","list"),i.setAttribute("aria-expanded",!!this.opened),i.setAttribute("spellcheck","false"),i.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame(()=>{this.$.overlay.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),di(this),this.addController(new io(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){!this._scroller||(this._scroller.requestContentUpdate(),this._getItemElements().forEach(e=>{e.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(e,i,s){super._propertiesChanged(e,i,s),i.filter!==void 0&&this._filterChanged(i.filter)}_initOverlay(){const e=this.$.overlay;e._comboBox=this,e.addEventListener("touchend",this._boundOnOverlayTouchAction),e.addEventListener("touchmove",this._boundOnOverlayTouchAction),e.addEventListener("mousedown",i=>i.preventDefault()),e.addEventListener("opened-changed",i=>{this._overlayOpened=i.detail.value})}_initScroller(e){const i=`${this._tagNamePrefix}-scroller`,s=this.$.overlay;s.renderer=o=>{o.firstChild||o.appendChild(document.createElement(i))},s.requestContentUpdate();const n=s.querySelector(i);n.comboBox=e||this,n.getItemLabel=this._getItemLabel.bind(this),n.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this._scroller=n}_updateScroller(e,i,s,n,o,a,l,d,c){e&&(s&&(e.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),e.setProperties({items:s?i:[],opened:s,loading:n,selectedItem:o,itemIdPath:a,focusedIndex:l,renderer:d,theme:c}))}_openedOrItemsChanged(e,i,s){this._overlayOpened=!!(e&&(s||i&&i.length))}_overlayOpenedChanged(e,i){e?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):i&&this.filteredItems&&this.filteredItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(e,i){i!==void 0&&this._updateActiveDescendant(e)}_isInputFocused(){return this.inputElement&&ri(this.inputElement)}_updateActiveDescendant(e){const i=this._nativeInput;if(!i)return;const s=this._getItemElements().find(n=>n.index===e);s?i.setAttribute("aria-activedescendant",s.id):i.removeAttribute("aria-activedescendant")}_openedChanged(e,i){if(i===void 0)return;e?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),!this._isInputFocused()&&!ft&&this.focus(),this.$.overlay.restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this._isInputFocused()&&this.setAttribute("focus-ring",""));const s=this._nativeInput;s&&(s.setAttribute("aria-expanded",!!e),e?s.setAttribute("aria-controls",this._scroller.id):s.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_handleClearButtonClick(e){e.preventDefault(),this._clear(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(e){e.preventDefault(),this.opened?this.close():this.open()}_onHostClick(e){this.autoOpenDisabled||(e.preventDefault(),this.open())}_onClick(e){const i=e.composedPath();this._isClearButton(e)?this._handleClearButtonClick(e):i.indexOf(this._toggleElement)>-1?this._onToggleButtonClick(e):this._onHostClick(e)}_onKeyDown(e){super._onKeyDown(e),e.key==="Tab"?this.$.overlay.restoreFocusOnClose=!1:e.key==="ArrowDown"?(this._onArrowDown(),e.preventDefault()):e.key==="ArrowUp"&&(this._onArrowUp(),e.preventDefault())}_getItemLabel(e){let i=e&&this.itemLabelPath?this.get(this.itemLabelPath,e):void 0;return i==null&&(i=e?e.toString():""),i}_getItemValue(e){let i=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return i===void 0&&(i=e?e.toString():""),i}_onArrowDown(){if(this.opened){const e=this.filteredItems;e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this.filteredItems;e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const e=this.filteredItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(e),this._markAllSelectionRange()}}_setSelectionRange(e,i){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(e,i)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(e){if(!this.allowCustomValue&&this._inputElementValue!==""&&this._focusedIndex<0){e.preventDefault(),e.stopPropagation();return}this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_onEscape(e){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&!!this.value&&(e.stopPropagation(),this._clear()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&!!this.value&&(e.stopPropagation(),this._clear())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",i=>i.preventDefault()),e.addEventListener("click",()=>{ft&&!this._isInputFocused()&&document.activeElement.blur()}))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){requestAnimationFrame(()=>{this._scrollIntoView(this._focusedIndex),this._updateActiveDescendant(this._focusedIndex)}),this._lastCommittedValue=this.value}_onClosed(){(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const e=this.filteredItems[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=[...this.filteredItems||[],this.selectedItem],i=e[this.__getItemIndexByLabel(e,this._inputElementValue)];if(this.allowCustomValue&&!i){const s=this._inputElementValue;this._lastCustomValue=s;const n=new CustomEvent("custom-value-set",{detail:s,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(n),n.defaultPrevented||(this.value=s)}else!this.allowCustomValue&&!this.opened&&i?this.value=this._getItemValue(i):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}get _propertyForValue(){return"value"}_onInput(e){const i=this._inputElementValue,s={};this.filter===i?this._filterChanged(this.filter):s.filter=i,!this.opened&&!this._isClearButton(e)&&!this.autoOpenDisabled&&(s.opened=!0),this.setProperties(s)}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){typeof e!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(e==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const i=this._getItemValue(e);if(this.value!==i&&(this.value=i,this.value!==i))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}this.filteredItems&&(this._focusedIndex=this.filteredItems.indexOf(e))}_valueChanged(e,i){e===""&&i===void 0||(ss(e)?(this._getItemValue(this.selectedItem)!==e&&this._selectItemForValue(e),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,i){this._ensureItemsOrDataProvider(()=>{this.items=i}),e?this.filteredItems=e.slice(0):i&&(this.filteredItems=null)}_filteredItemsChanged(e,i){const s=i?i[this._focusedIndex]:null,n=this.__getItemIndexByValue(e,this.value);(this.selectedItem===null||this.selectedItem===void 0)&&n>=0&&(this.selectedItem=e[n]);const o=this.__getItemIndexByValue(e,this._getItemValue(s));o>-1?this._focusedIndex=o:this.__setInitialFocusedIndex()}__setInitialFocusedIndex(){const e=this._inputElementValue;e===void 0||e===this._getItemLabel(this.selectedItem)?this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this._getItemLabel(this.selectedItem)):this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this.filter)}_filterItems(e,i){return e&&e.filter(n=>(i=i?i.toString().toLowerCase():"",this._getItemLabel(n).toString().toLowerCase().indexOf(i)>-1))}_selectItemForValue(e){const i=this.__getItemIndexByValue(this.filteredItems,e),s=this.selectedItem;i>=0?this.selectedItem=this.filteredItems[i]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&s===null&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(e){!this._scroller||this._scroller.scrollIntoView(e)}__getItemIndexByValue(e,i){return!e||!ss(i)?-1:ns(e,s=>this._getItemValue(s)===i)}__getItemIndexByLabel(e,i){return!e||!i?-1:ns(e,s=>this._getItemLabel(s).toString().toLowerCase()===i.toString().toLowerCase())}_overlaySelectedItemChanged(e){e.stopPropagation(),!(e.detail.item instanceof Me)&&this.opened&&(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close())}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onFocusout(e){if(!(e.relatedTarget&&e.relatedTarget.localName===`${this._tagNamePrefix}-item`)){if(e.relatedTarget===this.$.overlay){e.composedPath()[0].focus();return}if(!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}this._closeOrCommit()}}}_onTouchend(e){!this.clearElement||e.composedPath()[0]!==this.clearElement||(e.preventDefault(),this._clear())}};/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */T("vaadin-combo-box",Pt,{moduleId:"vaadin-combo-box-styles"});class os extends jd(Kd(mr(_r(R(K(k)))))){static get is(){return"vaadin-combo-box"}static get template(){return M`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

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
          <div id="toggleButton" part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-combo-box-overlay>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new St(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Je(this.inputElement,this._labelController)),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_setFocused(t){super._setFocused(t),t||this.validate()}_shouldRemoveFocus(t){return t.relatedTarget===this.$.overlay?(t.composedPath()[0].focus(),!1):!0}_onClearButtonClick(t){t.stopPropagation(),this._handleClearButtonClick(t)}_onHostClick(t){const e=t.composedPath();(e.includes(this._labelNode)||e.includes(this._positionTarget))&&super._onHostClick(t)}}customElements.define(os.is,os);const Qd=E`
  :host([phone]) {
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom) !important;
    left: 0 !important;
    align-items: stretch;
    justify-content: flex-end;
  }

  /* TODO These style overrides should not be needed.
   We should instead offer a way to have non-selectable items inside the context menu. */

  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;T("vaadin-context-menu-overlay",[hr,Qd],{moduleId:"lumo-context-menu-overlay"});T("vaadin-context-menu-list-box",E`
    :host(.vaadin-menu-list-box) {
      --_lumo-list-box-item-selected-icon-display: block;
    }

    /* Normal item */
    [part='items'] ::slotted(.vaadin-menu-item) {
      -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
      cursor: default;
    }

    [part='items'] ::slotted(.vaadin-menu-item) {
      outline: none;
      border-radius: var(--lumo-border-radius-m);
      padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
      padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    }

    :host(.vaadin-menu-list-box) [part='items'] ::slotted(.vaadin-menu-item) {
      padding-left: calc(var(--lumo-border-radius-m) / 4);
      padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    }

    /* Hovered item */
    /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
    [part='items'] ::slotted(.vaadin-menu-item:hover:not([disabled])),
    [part='items'] ::slotted(.vaadin-menu-item[expanded]:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    /* RTL styles */
    :host([dir='rtl'])[part='items'] ::slotted(.vaadin-menu-item) {
      padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
      padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    }

    :host([dir='rtl'].vaadin-menu-list-box) [part='items'] ::slotted(.vaadin-menu-item) {
      padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
      padding-right: calc(var(--lumo-border-radius-m) / 4);
    }

    /* Focused item */
    @media (pointer: coarse) {
      [part='items'] ::slotted(.vaadin-menu-item:hover:not([expanded]):not([disabled])) {
        background-color: transparent;
      }
    }
  `,{moduleId:"lumo-context-menu-list-box"});T("vaadin-context-menu-item",E`
    /* :hover needed to workaround https://github.com/vaadin/web-components/issues/3133 */
    :host(:hover) {
      user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
    }

    :host(.vaadin-menu-item[menu-item-checked]) [part='checkmark']::before {
      opacity: 1;
    }

    :host(.vaadin-menu-item.vaadin-context-menu-parent-item)::after {
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-xs);
      content: var(--lumo-icons-angle-right);
      color: var(--lumo-tertiary-text-color);
    }

    :host(:not([dir='rtl']).vaadin-menu-item.vaadin-context-menu-parent-item)::after {
      margin-right: calc(var(--lumo-space-m) * -1);
      padding-left: var(--lumo-space-m);
    }

    :host([expanded]) {
      background-color: var(--lumo-primary-color-10pct);
    }

    /* RTL styles */
    :host([dir='rtl'].vaadin-menu-item.vaadin-context-menu-parent-item)::after {
      content: var(--lumo-icons-angle-left);
      margin-left: calc(var(--lumo-space-m) * -1);
      padding-right: var(--lumo-space-m);
    }
  `,{moduleId:"lumo-context-menu-item"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xd=r=>class extends rr(ai(r)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");e!==null&&(this.value=e)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(e){return!this.disabled&&!(e.type==="keydown"&&e.defaultPrevented)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){super._disabledChanged(e),e&&(this.selected=!1,this.blur())}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yt extends Xd(R(be(k))){static get template(){return M`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-item"}constructor(){super(),this.value}}customElements.define(Yt.is,Yt);T("vaadin-list-box",E`
    :host {
      -webkit-tap-highlight-color: transparent;
      --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
    }

    /* Dividers */
    [part='items'] ::slotted(hr) {
      height: 1px;
      border: 0;
      padding: 0;
      margin: var(--lumo-space-s) var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-list-box"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jd=r=>class extends r{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("click",e=>this._onClick(e)),this._observer=new X(this,()=>{this._setItems(this._filterItems(X.getFlattenedNodes(this)))})}_enhanceItems(e,i,s,n){if(!n&&e){this.setAttribute("aria-orientation",i||"vertical"),this.items.forEach(a=>{i?a.setAttribute("orientation",i):a.removeAttribute("orientation")}),this._setFocusable(s||0);const o=e[s];e.forEach(a=>{a.selected=a===o}),o&&!o.disabled&&this._scrollToItem(s)}}get focused(){return(this.items||[]).find(ri)}_filterItems(e){return e.filter(i=>i._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const i=this._filterItems(e.composedPath())[0];let s;i&&!i.disabled&&(s=this.items.indexOf(i))>=0&&(this.selected=s)}_searchKey(e,i){this._searchReset=U.debounce(this._searchReset,re.after(500),()=>{this._searchBuf=""}),this._searchBuf+=i.toLowerCase();const s=1,n=a=>!(a.disabled||this._isItemHidden(a))&&a.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().indexOf(this._searchBuf)===0;this.items.some(a=>a.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().indexOf(this._searchBuf)===0)||(this._searchBuf=i.toLowerCase());const o=this._searchBuf.length===1?e+1:e;return this._getAvailableIndex(o,s,n)}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}_onKeydown(e){if(e.metaKey||e.ctrlKey)return;const i=e.key,s=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(i)&&i.length===1){const d=this._searchKey(s,i);d>=0&&this._focus(d);return}const n=d=>!(d.disabled||this._isItemHidden(d));let o,a;const l=this._isRTL?-1:1;this._vertical&&i==="ArrowUp"||!this._vertical&&i==="ArrowLeft"?(a=-l,o=s-l):this._vertical&&i==="ArrowDown"||!this._vertical&&i==="ArrowRight"?(a=l,o=s+l):i==="Home"?(a=1,o=0):i==="End"&&(a=-1,o=this.items.length-1),o=this._getAvailableIndex(o,a,n),o>=0&&(this._focus(o),e.preventDefault())}_getAvailableIndex(e,i,s){const n=this.items.length;for(let o=0;typeof e=="number"&&o<n;o++,e+=i||1){e<0?e=n-1:e>=n&&(e=0);const a=this.items[e];if(s(a))return e}return-1}_isItemHidden(e){return getComputedStyle(e).display==="none"}_setFocusable(e){e=this._getAvailableIndex(e,1,s=>!s.disabled);const i=this.items[e];this.items.forEach(s=>{s.tabIndex=s===i?0:-1})}_focus(e){const i=this.items[e];this.items.forEach(s=>{s.focused=s===i}),this._setFocusable(e),this._scrollToItem(e),this._focusItem(i)}_focusItem(e){e&&(e.focus(),e.setAttribute("focus-ring",""))}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);this._focusItem(e)}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}_scrollToItem(e){const i=this.items[e];if(!i)return;const s=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],n=this._scrollerElement.getBoundingClientRect(),o=(this.items[e+1]||i).getBoundingClientRect(),a=(this.items[e-1]||i).getBoundingClientRect();let l=0;!this._isRTL&&o[s[1]]>=n[s[1]]||this._isRTL&&o[s[1]]<=n[s[1]]?l=o[s[1]]-n[s[1]]:(!this._isRTL&&a[s[0]]<=n[s[0]]||this._isRTL&&a[s[0]]>=n[s[0]])&&(l=a[s[0]]-n[s[0]]),this._scroll(l)}get _vertical(){return this.orientation!=="horizontal"}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const i=this.getAttribute("dir")||"ltr",s=Ye.detectScrollType(),n=Ye.getNormalizedScrollLeft(s,i,this._scrollerElement)+e;Ye.setNormalizedScrollLeft(s,i,this._scrollerElement,n)}}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zd=r=>class extends Jd(r){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:()=>[]}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,i,s,n){if(!(!e||!i)){if(n){const o=n.map(a=>e[a]);e.forEach(a=>{a.selected=o.includes(a)})}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){const e=this.selectedValues.slice(-1)[0];e&&!e.disabled&&this._scrollToItem(e)}_onMultipleClick(e){const i=this._filterItems(e.composedPath())[0],s=i&&!i.disabled?this.items.indexOf(i):-1;s<0||!this.multiple||(e.preventDefault(),this.selectedValues.includes(s)?this.selectedValues=this.selectedValues.filter(n=>n!==s):this.selectedValues=this.selectedValues.concat(s))}_multipleChanged(e,i){!e&&i&&(this.selectedValues=[],this.items.forEach(s=>{s.selected=!1})),e&&!i&&this.selected!==void 0&&(this.selectedValues=[...this.selectedValues,this.selected],this.selected=void 0)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ri extends K(Zd(R(de(k)))){static get template(){return M`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-list-box"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list"),setTimeout(this._checkImport.bind(this),2e3)}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}_checkImport(){const t=this.querySelector("vaadin-item");t&&!(t instanceof k)&&console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(Ri.is,Ri);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */si({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null},reset(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},_setSourceEvent(r){this.info.sourceEvent=r;const t=r.composedPath();this.info.sourceEvent.__composedPath=t},touchstart(r){this._setSourceEvent(r),this.info.touchStartCoords={x:r.changedTouches[0].clientX,y:r.changedTouches[0].clientY};const t=r.composedPath()[0]||r.target;this._timerId=setTimeout(()=>{const e=r.changedTouches[0];r.shiftKey||(It&&(this._fired=!0,this.fire(t,e.clientX,e.clientY)),Qe("tap"))},500)},touchmove(r){const e=this.info.touchStartCoords;(Math.abs(e.x-r.changedTouches[0].clientX)>15||Math.abs(e.y-r.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend(r){this._fired&&r.preventDefault(),this._cancelTimer()},contextmenu(r){r.shiftKey||(this._setSourceEvent(r),this.fire(r.target,r.clientX,r.clientY),Qe("tap"))},fire(r,t,e){const i=this.info.sourceEvent,s=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});s.detail={x:t,y:e,sourceEvent:i},r.dispatchEvent(s),s.defaultPrevented&&i&&i.preventDefault&&i.preventDefault()}});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */T("vaadin-context-menu-overlay",E`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }

    :host([right-aligned]),
    :host([end-aligned]) {
      align-items: flex-end;
    }

    :host([bottom-aligned]) {
      justify-content: flex-end;
    }

    [part='overlay'] {
      background-color: #fff;
    }
  `,{moduleId:"vaadin-context-menu-overlay-styles"});class as extends pr(ne){static get is(){return"vaadin-context-menu-overlay"}static get properties(){return{parentOverlay:{type:Object,readOnly:!0}}}static get observers(){return["_themeChanged(_theme)"]}ready(){super.ready(),this.addEventListener("keydown",t=>{if(!t.defaultPrevented&&t.composedPath()[0]===this.$.overlay&&[38,40].indexOf(t.keyCode)>-1){const e=this.getFirstChild();e&&Array.isArray(e.items)&&e.items.length&&(t.preventDefault(),t.keyCode===38?e.items[e.items.length-1].focus():e.focus())}})}getFirstChild(){return this.content.querySelector(":not(style):not(slot)")}_themeChanged(){this.close()}getBoundaries(){const t=this.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect();let i=t.bottom-e.height;const s=this.parentOverlay;if(s&&s.hasAttribute("bottom-aligned")){const n=getComputedStyle(s);i=i-parseFloat(n.bottom)-parseFloat(n.height)}return{xMax:t.right-e.width,xMin:t.left+e.width,yMax:i}}_updatePosition(){if(super._updatePosition(),this.positionTarget&&this.parentOverlay){const t=this.$.content,e=getComputedStyle(t);!!this.style.left?this.style.left=`${parseFloat(this.style.left)+parseFloat(e.paddingLeft)}px`:this.style.right=`${parseFloat(this.style.right)+parseFloat(e.paddingRight)}px`,!!this.style.bottom?this.style.bottom=`${parseFloat(this.style.bottom)-parseFloat(e.paddingBottom)}px`:this.style.top=`${parseFloat(this.style.top)-parseFloat(e.paddingTop)}px`}}}customElements.define(as.is,as);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gr{constructor(t,e){this.query=t,this.callback=e,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(t){typeof this.callback=="function"&&this.callback(t.matches)}}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ls extends Yt{static get is(){return"vaadin-context-menu-item"}}customElements.define(ls.is,ls);class ds extends Ri{static get is(){return"vaadin-context-menu-list-box"}}customElements.define(ds.is,ds);const ec=r=>class extends r{static get properties(){return{items:Array}}ready(){super.ready(),this.__itemsOutsideClickListener=e=>{e.composedPath().filter(i=>i.localName==="vaadin-context-menu-overlay")[0]||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",()=>this.items&&this.close())}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}get __isRTL(){return this.getAttribute("dir")==="rtl"}__forwardFocus(){const e=this.$.overlay,i=e.getFirstChild();if(e.parentOverlay){const s=e.parentOverlay.querySelector("[expanded]");s&&s.hasAttribute("focused")&&i?i.focus():e.$.overlay.focus()}else i&&i.focus()}__openSubMenu(e,i){e.items=i._item.children,e.listenOn=i;const s=this.$.overlay,n=e.$.overlay;n.positionTarget=i,n.noHorizontalOverlap=!0,n._setParentOverlay(s),s.hasAttribute("theme")?e.setAttribute("theme",s.getAttribute("theme")):e.removeAttribute("theme");const o=e.$.overlay.$.content;o.style.minWidth="",i.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:i._item.children}}))}__itemsRenderer(e,i,s){this.__initMenu(e,i);const n=e.querySelector(this.constructor.is);n.closeOn=i.closeOn;const o=e.querySelector("vaadin-context-menu-list-box");o.innerHTML="",Array.from(s.detail.children||i.items).forEach(l=>{let d;l.component instanceof HTMLElement?d=l.component:d=document.createElement(l.component||"vaadin-context-menu-item"),d instanceof Yt?(d.setAttribute("role","menuitem"),d.classList.add("vaadin-menu-item")):d.localName==="hr"&&d.setAttribute("role","separator"),this._setMenuItemTheme(d,l,this._theme),d._item=l,l.text&&(d.textContent=l.text),this.__toggleMenuComponentAttribute(d,"menu-item-checked",l.checked),this.__toggleMenuComponentAttribute(d,"disabled",l.disabled),d.setAttribute("aria-haspopup","false"),d.classList.remove("vaadin-context-menu-parent-item"),l.children&&l.children.length&&(d.classList.add("vaadin-context-menu-parent-item"),d.setAttribute("aria-haspopup","true"),d.setAttribute("aria-expanded","false"),d.removeAttribute("expanded")),o.appendChild(d)})}_setMenuItemTheme(e,i,s){let n=e.getAttribute("theme")||s;i.theme!=null&&(n=Array.isArray(i.theme)?i.theme.join(" "):i.theme),n?e.setAttribute("theme",n):e.removeAttribute("theme")}__toggleMenuComponentAttribute(e,i,s){s?(e.setAttribute(i,""),e[`__has-${i}`]=!0):e[`__has-${i}`]&&(e.removeAttribute(i),e[`__has-${i}`]=!1)}__initMenu(e,i){if(e.firstElementChild){const s=e.querySelector("vaadin-context-menu-list-box");this._theme?s.setAttribute("theme",this._theme):s.removeAttribute("theme")}else{const s=document.createElement("vaadin-context-menu-list-box");e.appendChild(s),this._theme&&s.setAttribute("theme",this._theme),s.classList.add("vaadin-menu-list-box"),requestAnimationFrame(()=>s.setAttribute("role","menu"));const n=document.createElement(this.constructor.is);n.setAttribute("hidden",""),e.appendChild(n),n.$.overlay.modeless=!0,n.openOn="opensubmenu",i.addEventListener("opened-changed",a=>!a.detail.value&&n.close()),n.addEventListener("opened-changed",a=>{if(!a.detail.value){const l=s.querySelector("[expanded]");l&&(l.setAttribute("aria-expanded","false"),l.removeAttribute("expanded"))}}),s.addEventListener("selected-changed",a=>{if(typeof a.detail.value=="number"){const l=a.target.items[a.detail.value]._item;if(!l.children){const d={value:l};i.dispatchEvent(new CustomEvent("item-selected",{detail:d}))}s.selected=null}}),n.addEventListener("item-selected",a=>{i.dispatchEvent(new CustomEvent("item-selected",{detail:a.detail}))}),n.addEventListener("close-all-menus",()=>{i.dispatchEvent(new CustomEvent("close-all-menus"))}),i.addEventListener("close-all-menus",i.close),i.addEventListener("item-selected",i.close),i.$.overlay.$.backdrop.addEventListener("click",()=>i.close()),i.$.overlay.addEventListener("keydown",a=>{const l=this.__isRTL;!l&&a.keyCode===37||l&&a.keyCode===39?(i.close(),i.listenOn.focus()):(a.key==="Escape"||a.key==="Tab")&&i.dispatchEvent(new CustomEvent("close-all-menus"))}),requestAnimationFrame(()=>{this.__openListenerActive=!0});const o=(a,l=a.composedPath().filter(d=>d.localName==="vaadin-context-menu-item")[0])=>{if(!!this.__openListenerActive){if(i.$.overlay.hasAttribute("opening")){requestAnimationFrame(()=>o(a,l));return}if(l){if(n.items!==l._item.children&&n.close(),!i.opened)return;l._item.children&&l._item.children.length?(l.setAttribute("aria-expanded","true"),l.setAttribute("expanded",""),this.__openSubMenu(n,l)):n.listenOn.focus()}}};i.$.overlay.addEventListener(ft?"click":"mouseover",o),i.$.overlay.addEventListener("keydown",a=>{const l=this.__isRTL;(!l&&a.keyCode===39||l&&a.keyCode===37||a.keyCode===13||a.keyCode===32)&&o(a)})}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cs extends de(K(Lo(ec(k)))){static get template(){return M`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>

      <vaadin-context-menu-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-vaadin-overlay-open="_onVaadinOverlayOpen"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        model="[[_context]]"
        theme$="[[_theme]]"
      >
      </vaadin-context-menu-overlay>
    `}static get is(){return"vaadin-context-menu"}static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu"},listenOn:{type:Object,value(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged"},renderer:{type:Function},_context:Object,_boundClose:Object,_boundOpen:Object,_phone:{type:Boolean},_touch:{type:Boolean,value:ft},_wide:{type:Boolean},_wideMediaQuery:{type:String,value:"(min-device-width: 750px)"}}}static get observers(){return["_openedChanged(opened)","_targetOrOpenOnChanged(listenOn, openOn)","_rendererChanged(renderer, items)","_touchOrWideChanged(_touch, _wide)"]}constructor(){super(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.close()}ready(){super.ready(),this.addController(new gr(this._wideMediaQuery,t=>{this._wide=t})),di(this)}_onOverlayOpened(t){this._setOpened(t.detail.value),this.__alignOverlayPosition()}_onVaadinOverlayOpen(){this.__alignOverlayPosition(),this.$.overlay.style.opacity="",this.__forwardFocus()}_targetOrOpenOnChanged(t,e){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),t&&e&&(this._listen(t,e,this._boundOpen),this._oldListenOn=t,this._oldOpenOn=e)}_touchOrWideChanged(t,e){this._phone=!e&&t}_setListenOnUserSelect(t){this.listenOn.style.webkitTouchCallout=t,this.listenOn.style.webkitUserSelect=t,this.listenOn.style.userSelect=t,document.getSelection().removeAllRanges()}_closeOnChanged(t,e){const i="vaadin-overlay-outside-click";e&&(this._unlisten(this.$.overlay,e,this._boundClose),this._unlisten(this.$.overlay.root,e,this._boundClose)),t?(this._listen(this.$.overlay,t,this._boundClose),this._listen(this.$.overlay.root,t,this._boundClose),this._unlisten(this.$.overlay,i,this._preventDefault)):this._listen(this.$.overlay,i,this._preventDefault)}_preventDefault(t){t.preventDefault()}_openedChanged(t){t?(document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this.$.overlay.opened=t}requestContentUpdate(){this.$.overlay.requestContentUpdate()}_rendererChanged(t,e){if(e){if(t)throw new Error("The items API cannot be used together with a renderer");this.closeOn==="click"&&(this.closeOn=""),t=this.__itemsRenderer}this.$.overlay.setProperties({owner:this,renderer:t})}close(){this._setOpened(!1)}_contextTarget(t){if(this.selector){const e=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(e,i=>t.composedPath().indexOf(i)>-1)[0]}return t.target}open(t){t&&!this.opened&&(this._context={detail:t.detail,target:this._contextTarget(t)},this._context.target&&(this._preventDefault(t),t.stopPropagation(),this.__x=this._getEventCoordinate(t,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(t,"y"),this.__pageYOffset=window.pageYOffset,this.$.overlay.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(!this.opened)return;const t=window.pageYOffset-this.__pageYOffset,e=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-e),this.__adjustPosition("right",e),this.__adjustPosition("top",-t),this.__adjustPosition("bottom",t),this.__pageYOffset+=t,this.__pageXOffset+=e}__adjustPosition(t,e){const s=this.$.overlay.style;s[t]=`${(parseInt(s[t])||0)+e}px`}__alignOverlayPosition(){const t=this.$.overlay;if(t.positionTarget)return;const e=t.style;["top","right","bottom","left"].forEach(c=>e.removeProperty(c)),["right-aligned","end-aligned","bottom-aligned"].forEach(c=>t.removeAttribute(c));const{xMax:i,xMin:s,yMax:n}=t.getBoundaries(),o=this.__x,a=this.__y,l=document.documentElement.clientWidth,d=document.documentElement.clientHeight;this.__isRTL?o>l/2||o>s?e.right=`${Math.max(0,l-o)}px`:(e.left=`${o}px`,this._setEndAligned(t)):o<l/2||o<i?e.left=`${o}px`:(e.right=`${Math.max(0,l-o)}px`,this._setEndAligned(t)),a<d/2||a<n?e.top=`${a}px`:(e.bottom=`${Math.max(0,d-a)}px`,t.setAttribute("bottom-aligned",""))}_setEndAligned(t){t.setAttribute("end-aligned",""),this.__isRTL||t.setAttribute("right-aligned","")}_getEventCoordinate(t,e){if(t.detail instanceof Object){if(t.detail[e])return t.detail[e];if(t.detail.sourceEvent)return this._getEventCoordinate(t.detail.sourceEvent,e)}else{const i=`client${e.toUpperCase()}`,s=t.changedTouches?t.changedTouches[0][i]:t[i];if(s===0){const n=t.target.getBoundingClientRect();return e==="x"?n.left:n.top+n.height}return s}}_listen(t,e,i){ue[e]?Z(t,e,i):t.addEventListener(e,i)}_unlisten(t,e,i){ue[e]?Hn(t,e,i):t.removeEventListener(e,i)}_onGlobalContextMenu(t){t.shiftKey||(t.preventDefault(),this.close())}}customElements.define(cs.is,cs);const tc=E`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overlay'] {
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`;T("vaadin-date-picker-overlay",[hr,tc],{moduleId:"lumo-date-picker-overlay"});T("vaadin-date-picker-overlay-content",E`
    :host {
      position: relative;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    /* Month scroller */

    [part='months'] {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 20%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    /* Year scroller */
    [part='years'] {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    [part='year-number']:not([current]),
    [part='year-separator'] {
      opacity: 0.7;
      transition: 0.2s opacity;
    }

    [part='years']:hover [part='year-number'],
    [part='years']:hover [part='year-separator'] {
      opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
    #scrollers[desktop] [part='months'] {
      right: auto;
    }

    /* Year scroller position indicator */
    [part='years']::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='years'] [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '•';
    }

    /* Current year */

    [part='years'] [part='year-number'][current] {
      color: var(--lumo-primary-text-color);
    }

    /* Toolbar (footer) */

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    /* Today and Cancel buttons */

    [part='toolbar'] [part\$='button'] {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='years'] {
        background-color: var(--lumo-shade-5pct);
      }

      [part='toolbar'],
      [part='months'] {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      [part='years'] {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
      }

      :host([years-visible]) [part='months'] {
        padding-left: 50px;
      }
    }
  `,{moduleId:"lumo-date-picker-overlay-content"});T("vaadin-month-calendar",E`
    :host {
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part='date'] {
      transition: color 0.1s;
    }

    [part='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    :host([week-numbers]) [part='weekday']:not(:empty),
    :host([week-numbers]) [part='date'] {
      width: calc((100% - var(--lumo-size-xs)) / 7);
    }

    /* Today date */

    [part='date'][today] {
      color: var(--lumo-primary-text-color);
    }

    /* Focused date */

    [part='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part='date'][focused]::before {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host(:not([focused])) [part='date'][focused]::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px transparent;
      }
    }

    [part='date']:not(:empty):not([disabled]):not([selected]):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part='date'][selected] {
      color: var(--lumo-primary-contrast-color);
    }

    [part='date'][selected]::before {
      background-color: var(--lumo-primary-color);
    }

    [part='date'][disabled] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part='date']:hover:not([selected])::before,
      [part='date'][focused]:not([selected])::before {
        display: none;
      }

      [part='date']:not(:empty):not([disabled]):active::before {
        display: block;
      }

      [part='date'][selected]::before {
        box-shadow: none;
      }
    }

    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `,{moduleId:"lumo-month-calendar"});const ro=document.createElement("template");ro.innerHTML=`
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
`;document.head.appendChild(ro.content);const ic=E`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;T("vaadin-date-picker",[Ce,ic],{moduleId:"lumo-date-picker"});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const vi="disable-upgrade",rc=r=>{for(;r;){const t=Object.getOwnPropertyDescriptor(r,"observedAttributes");if(t)return t.get;r=Object.getPrototypeOf(r.prototype).constructor}return()=>[]},sc=V(r=>{const t=Cn(r);let e=rc(t);class i extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return e.call(this).concat(vi)}_initializeProperties(){this.hasAttribute(vi)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(n){return super._canApplyPropertyDefault(n)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(n))}attributeChangedCallback(n,o,a,l){n==vi?this.__isUpgradeDisabled&&a==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,D(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(n,o,a,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return i});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nc=E`
  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='value']::placeholder {
    direction: rtl;
    text-align: left;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`,oc=E`
  [part='overlay'] {
    display: flex;
    flex: auto;
  }

  [part~='content'] {
    flex: auto;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */T("vaadin-date-picker-overlay",oc,{moduleId:"vaadin-date-picker-overlay-styles"});let Ft;class hs extends sc(pr(ne)){static get is(){return"vaadin-date-picker-overlay"}static get template(){return Ft||(Ft=super.template.cloneNode(!0),Ft.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),Ft}}customElements.define(hs.is,hs);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class oe{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,At.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),At.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,e,i){return t instanceof oe?t._cancelAsync():t=new oe,t.setConfig(e,i),t}}let At=new Set;const so=function(r){At.add(r)},ac=function(){const r=Boolean(At.size);return At.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const no=function(){let r,t;do r=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=ac();while(r||t)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let us=!1;function oo(){if(on&&!nn){if(!us){us=!0;const r=document.createElement("style");r.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(r)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const lc=gd(k);class ps extends lc{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Si,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),oo()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=D(D(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let s=new MutationObserver(()=>{if(this.querySelector("template"))s.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return s.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=ze(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(s,n){let o=this.__instances;for(let a=0,l;a<o.length&&(l=o[a]);a++)l.forwardHostProp(s,n)},notifyInstanceProp:function(s,n,o){if(Sa(this.as,n)){let a=s[this.itemsIndexAs];n==this.as&&(this.items[a]=o);let l=vt(this.as,`${JSCompiler_renameProperty("items",this)}.${a}`,n);this.notifyPath(l,o)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if(typeof t=="string"){let e=t,i=this.__getMethodHost();return function(){return i[e].apply(i,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn){if(!t)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let e=this.__observePaths;for(let i=0;i<e.length;i++)t.indexOf(e[i])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(t.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=oe.debounce(this.__renderDebouncer,e>0?_t.after(e):ei,t.bind(this)),so(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),no()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),i=this.__calculateLimit(e.length);this.__updateInstances(t,i,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!Si||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let i=0;i<t.length;i++)e[i]=i;return this.__filterFn&&(e=e.filter((i,s,n)=>this.__filterFn(t[i],s,n))),this.__sortFn&&e.sort((i,s)=>this.__sortFn(t[i],t[s])),e}__calculateLimit(t){let e=t;const i=this.__instances.length;if(this.initialCount){let s;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),s=Math.max(e-i,0),this.__chunkCount=s||1):(s=Math.min(Math.max(t-i,0),this.__chunkCount),e=Math.min(i+s,t)),this.__shouldMeasureChunk=s===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,i){const s=this.__itemsIdxToInstIdx={};let n;for(n=0;n<e;n++){let o=this.__instances[n],a=i[n],l=t[a];s[a]=n,o?(o._setPendingProperty(this.as,l),o._setPendingProperty(this.indexAs,n),o._setPendingProperty(this.itemsIndexAs,a),o._flushProperties()):this.__insertInstance(l,n,a)}for(let o=this.__instances.length-1;o>=n;o--)this.__detachAndRemoveInstance(o)}__detachInstance(t){let e=this.__instances[t];const i=D(e.root);for(let s=0;s<e.children.length;s++){let n=e.children[s];i.appendChild(n)}return e}__attachInstance(t,e){let i=this.__instances[t];e.insertBefore(i.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,i){let s={};return s[this.as]=t,s[this.indexAs]=e,s[this.itemsIndexAs]=i,new this.__ctor(s)}__insertInstance(t,e,i){const s=this.__stampInstance(t,e,i);let n=this.__instances[e+1],o=n?n.children[0]:this;return D(D(this).parentNode).insertBefore(s.root,o),this.__instances[e]=s,s}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let i=t.slice(6),s=i.indexOf("."),n=s<0?i:i.substring(0,s);if(n==parseInt(n,10)){let o=s<0?"":i.substring(s+1);this.__handleObservedPaths(o);let a=this.__itemsIdxToInstIdx[n],l=this.__instances[a];if(l){let d=this.as+(o?"."+o:"");l._setPendingPropertyOrPath(d,e,!1,!0),l._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return Pd(this.template,t)}}customElements.define(ps.is,ps);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function dc(r){let t=r.getDay();t===0&&(t=7);const e=4-t,i=new Date(r.getTime()+e*24*3600*1e3),s=new Date(0,0);s.setFullYear(i.getFullYear());const n=i.getTime()-s.getTime(),o=Math.round(n/(24*3600*1e3));return Math.floor(o/7+1)}function he(r,t){return r instanceof Date&&t instanceof Date&&r.getFullYear()===t.getFullYear()&&r.getMonth()===t.getMonth()&&r.getDate()===t.getDate()}function ut(r,t,e){return(!t||r>=t)&&(!e||r<=e)}function ao(r,t){return t.filter(e=>e!==void 0).reduce((e,i)=>{if(!i)return e;if(!e)return i;const s=Math.abs(r.getTime()-i.getTime()),n=Math.abs(e.getTime()-r.getTime());return s<n?i:e})}function lo(r){return{day:r.getDate(),month:r.getMonth(),year:r.getFullYear()}}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class fs extends ai(R(k)){static get template(){return M`
      <style>
        :host {
          display: block;
        }

        #monthGrid {
          width: 100%;
          border-collapse: collapse;
        }

        #days-container tr,
        #weekdays-container tr {
          display: flex;
        }

        [part='date'] {
          outline: none;
        }

        [part='week-number'][hidden],
        [part='weekday'][hidden] {
          display: none;
        }

        [part='weekday'],
        [part='date'] {
          width: calc(100% / 7);
          padding: 0;
          font-weight: normal;
        }

        [part='weekday']:empty,
        [part='week-number'] {
          width: 12.5%;
          flex-shrink: 0;
          padding: 0;
        }

        :host([week-numbers]) [part='weekday']:not(:empty),
        :host([week-numbers]) [part='date'] {
          width: 12.5%;
        }
      </style>

      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n.monthNames)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th
              part="weekday"
              aria-hidden="true"
              hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
            ></th>
            <template
              is="dom-repeat"
              items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]"
            >
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]">[[item.weekDayShort]]</th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td
                part="week-number"
                aria-hidden="true"
                hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
              >
                [[__getWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part="date"
                  date="[[item]]"
                  today$="[[_isToday(item)]]"
                  focused$="[[__isDayFocused(item, focusedDate)]]"
                  tabindex$="[[__getDayTabindex(item, focusedDate)]]"
                  selected$="[[__isDaySelected(item, selectedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate)]]"
                  aria-selected$="[[__getDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__getDayAriaDisabled(item, minDate, maxDate)]]"
                  aria-label$="[[__getDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},_weeks:{type:Array,computed:"_getWeeks(_days)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)","__focusedDateChanged(focusedDate, _days)"]}ready(){super.ready(),Z(this.$.monthGrid,"tap",this._handleTap.bind(this))}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part=date]")].find(t=>he(t.date,this.focusedDate))}_isDisabled(t,e,i){const s=new Date(0,0);s.setFullYear(t.getFullYear()),s.setMonth(t.getMonth()),s.setDate(1);const n=new Date(0,0);return n.setFullYear(t.getFullYear()),n.setMonth(t.getMonth()+1),n.setDate(0),e&&i&&e.getMonth()===i.getMonth()&&e.getMonth()===t.getMonth()&&i.getDate()-e.getDate()>=0?!1:!ut(s,e,i)&&!ut(n,e,i)}_getTitle(t,e){if(!(t===void 0||e===void 0))return this.i18n.formatTitle(e[t.getMonth()],t.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300)}_dateAdd(t,e){t.setDate(t.getDate()+e)}_applyFirstDayOfWeek(t,e){if(!(t===void 0||e===void 0))return t.slice(e).concat(t.slice(0,e))}_getWeekDayNames(t,e,i,s){if(!(t===void 0||e===void 0||i===void 0||s===void 0))return t=this._applyFirstDayOfWeek(t,s),e=this._applyFirstDayOfWeek(e,s),t=t.map((n,o)=>({weekDay:n,weekDayShort:e[o]})),t}__focusedDateChanged(t,e){e.some(i=>he(i,t))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(t){return t?t.getDate():""}_showWeekNumbersChanged(t,e){t&&e===1?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(t,e){return t&&e===1}_isToday(t){return he(new Date,t)}_getDays(t,e){if(t===void 0||e===void 0)return;const i=new Date(0,0);for(i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()),i.setDate(1);i.getDay()!==e;)this._dateAdd(i,-1);const s=[],n=i.getMonth(),o=t.getMonth();for(;i.getMonth()===o||i.getMonth()===n;)s.push(i.getMonth()===o?new Date(i.getTime()):null),this._dateAdd(i,1);return s}_getWeeks(t){return t.reduce((e,i,s)=>(s%7===0&&e.push([]),e[e.length-1].push(i),e),[])}_handleTap(t){!this.ignoreTaps&&!this._notTapping&&t.target.date&&!t.target.hasAttribute("disabled")&&(this.selectedDate=t.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:t.target.date},bubbles:!0,composed:!0})))}_preventDefault(t){t.preventDefault()}__getWeekNumber(t){const e=t.reduce((i,s)=>!i&&s?s:i);return dc(e)}__isDayFocused(t,e){return he(t,e)}__isDaySelected(t,e){return he(t,e)}__getDayAriaSelected(t,e){if(this.__isDaySelected(t,e))return"true"}__isDayDisabled(t,e,i){return!ut(t,e,i)}__getDayAriaDisabled(t,e,i){if(!(t===void 0||e===void 0||i===void 0)&&this.__isDayDisabled(t,e,i))return"true"}__getDayAriaLabel(t){if(!t)return"";let e=`${this._getDate(t)} ${this.i18n.monthNames[t.getMonth()]} ${t.getFullYear()}, ${this.i18n.weekdays[t.getDay()]}`;return this._isToday(t)&&(e+=`, ${this.i18n.today}`),e}__getDayTabindex(t,e){return this.__isDayFocused(t,e)?"0":"-1"}__getWeekNumbers(t){return t.map(e=>this.__getWeekNumber(e,t)).filter((e,i,s)=>s.indexOf(e)===i)}}customElements.define(fs.is,fs);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Et extends k{static get template(){return M`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 500px;
        }

        #scroller {
          position: relative;
          height: 100%;
          overflow: auto;
          outline: none;
          margin-right: -40px;
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }

        #scroller.notouchscroll {
          -webkit-overflow-scrolling: auto;
        }

        #scroller::-webkit-scrollbar {
          display: none;
        }

        .buffer {
          position: absolute;
          width: var(--vaadin-infinite-scroller-buffer-width, 100%);
          box-sizing: border-box;
          padding-right: 40px;
          top: var(--vaadin-infinite-scroller-buffer-offset, 0);
          animation: fadein 0.2s;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      </style>

      <div id="scroller" on-scroll="_scroll">
        <div class="buffer"></div>
        <div class="buffer"></div>
        <div id="fullHeight"></div>
      </div>
    `}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer")),this.$.fullHeight.style.height=`${this._initialScroll*2}px`;const t=this.querySelector("template");this._TemplateClass=ze(t,this,{forwardHostProp(e,i){e!=="index"&&this._buffers.forEach(s=>{[].forEach.call(s.children,n=>{n._itemWrapper.instance[e]=i})})}}),Ys&&(this.$.scroller.tabIndex=-1)}_activated(t){t&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(t=>{[].forEach.call(t.children,e=>this._ensureStampedInstance(e._itemWrapper))}),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(t){const e=t?1:0;this._buffers[e].translateY=this._buffers[e?0:1].translateY+this._bufferHeight*(e?-1:1),this._buffers[e].style.transform=`translate3d(0, ${this._buffers[e].translateY}px, 0)`,this._buffers[e].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const t=this.$.scroller.scrollTop;(t<this._bufferHeight||t>this._initialScroll*2-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const e=this.itemHeight+this.bufferOffset,i=t>this._buffers[1].translateY+e,s=t<this._buffers[0].translateY+e;(i||s)&&(this._translateBuffer(s),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=U.debounce(this._debouncerScrollFinish,re.after(200),()=>{const n=this.$.scroller.getBoundingClientRect();!this._isVisible(this._buffers[0],n)&&!this._isVisible(this._buffers[1],n)&&(this.position=this.position)})}get bufferOffset(){return this._buffers[0].offsetTop}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(t){this._preventScrollEvent=!0,t>this._firstIndex&&t<this._firstIndex+this.bufferSize*2?this.$.scroller.scrollTop=this.itemHeight*(t-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~t,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=t%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}get itemHeight(){if(!this._itemHeightVal){const t=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),e="background-position";this.$.fullHeight.style.setProperty(e,t);const i=getComputedStyle(this.$.fullHeight).getPropertyValue(e);this.$.fullHeight.style.removeProperty(e),this._itemHeightVal=parseFloat(i)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(t=>{t.style.transform=`translate3d(0, ${t.translateY}px, 0)`}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=U.debounce(this._debouncerUpdateClones,re.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const t=this.getBoundingClientRect();this._buffers.forEach(e=>{for(let i=0;i<this.bufferSize;i++){const s=document.createElement("div");s.style.height=`${this.itemHeight}px`,s.instance={};const o=`vaadin-infinite-scroller-item-content-${Et._contentIndex=Et._contentIndex+1||0}`,a=document.createElement("slot");a.setAttribute("name",o),a._itemWrapper=s,e.appendChild(a),s.setAttribute("slot",o),this.appendChild(s),setTimeout(()=>{this._isVisible(s,t)&&this._ensureStampedInstance(s)},1)}}),setTimeout(()=>{Wi(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(t){if(t.firstElementChild)return;const e=t.instance;t.instance=new this._TemplateClass({}),t.appendChild(t.instance.root),Object.keys(e).forEach(i=>{t.instance.set(i,e[i])})}_updateClones(t){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;const e=t?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((i,s)=>{if(!i.updated){const n=this._firstIndex+this.bufferSize*s;[].forEach.call(i.children,(o,a)=>{const l=o._itemWrapper;(!t||this._isVisible(l,e))&&(l.instance.index=n+a)}),i.updated=!0}})}_isVisible(t,e){const i=t.getBoundingClientRect();return i.bottom>e.top&&i.top<e.bottom}}customElements.define(Et.is,Et);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _s extends de(R(be(k))){static get template(){return M`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          outline: none;
        }

        [part='overlay-header'] {
          display: flex;
          flex-shrink: 0;
          flex-wrap: nowrap;
          align-items: center;
        }

        :host(:not([fullscreen])) [part='overlay-header'] {
          display: none;
        }

        [part='label'] {
          flex-grow: 1;
        }

        [hidden] {
          display: none !important;
        }

        [part='years-toggle-button'] {
          display: flex;
        }

        #scrollers {
          display: flex;
          height: 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        [part='months'],
        [part='years'] {
          height: 100%;
        }

        [part='months'] {
          --vaadin-infinite-scroller-item-height: 270px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        #scrollers[desktop] [part='months'] {
          right: 50px;
          transform: none !important;
        }

        [part='years'] {
          --vaadin-infinite-scroller-item-height: 80px;
          width: 50px;
          position: absolute;
          right: 0;
          transform: translateX(100%);
          -webkit-tap-highlight-color: transparent;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          /* Center the year scroller position. */
          --vaadin-infinite-scroller-buffer-offset: 50%;
        }

        #scrollers[desktop] [part='years'] {
          position: absolute;
          transform: none !important;
        }

        [part='years']::before {
          content: '';
          display: block;
          background: transparent;
          width: 0;
          height: 0;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px;
          border-style: solid;
          border-color: transparent;
          border-left-color: #000;
        }

        :host(.animate) [part='months'],
        :host(.animate) [part='years'] {
          transition: all 200ms;
        }

        [part='toolbar'] {
          display: flex;
          justify-content: space-between;
          z-index: 2;
          flex-shrink: 0;
        }
      </style>

      <div part="overlay-header" on-touchend="_preventDefault" desktop$="[[_desktopMode]]" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
        <div part="clear-button" hidden$="[[!selectedDate]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" hidden$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers" desktop$="[[_desktopMode]]">
        <vaadin-infinite-scroller
          id="monthScroller"
          on-custom-scroll="_onMonthScroll"
          on-touchstart="_onMonthScrollTouchStart"
          buffer-size="3"
          active="[[initialPosition]]"
          part="months"
        >
          <template>
            <vaadin-month-calendar
              i18n="[[i18n]]"
              month="[[_dateAfterXMonths(index)]]"
              selected-date="{{selectedDate}}"
              focused-date="[[focusedDate]]"
              ignore-taps="[[_ignoreTaps]]"
              show-week-numbers="[[showWeekNumbers]]"
              min-date="[[minDate]]"
              max-date="[[maxDate]]"
              part="month"
              theme$="[[_theme]]"
              on-keydown="__onMonthCalendarKeyDown"
            >
            </vaadin-month-calendar>
          </template>
        </vaadin-infinite-scroller>
        <vaadin-infinite-scroller
          id="yearScroller"
          on-custom-scroll="_onYearScroll"
          on-touchstart="_onYearScrollTouchStart"
          buffer-size="12"
          active="[[initialPosition]]"
          part="years"
          aria-hidden="true"
        >
          <template>
            <div
              part="year-number"
              current$="[[_isCurrentYear(index)]]"
              selected$="[[_isSelectedYear(index, selectedDate)]]"
            >
              [[_yearAfterXYears(index)]]
            </div>
            <div part="year-separator" aria-hidden="true"></div>
          </template>
        </vaadin-infinite-scroller>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <vaadin-button
          id="todayButton"
          part="today-button"
          theme="tertiary"
          disabled="[[!_isTodayAllowed(minDate, maxDate)]]"
          on-keydown="__onTodayButtonKeyDown"
        >
          [[i18n.today]]
        </vaadin-button>
        <vaadin-button id="cancelButton" part="cancel-button" theme="tertiary" on-keydown="__onCancelButtonKeyDown">
          [[i18n.cancel]]
        </vaadin-button>
      </div>
    `}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{scrollDuration:{type:Number,value:300},selectedDate:{type:Date,value:null},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,label:String}}get __isRTL(){return this.getAttribute("dir")==="rtl"}get calendars(){return[...this.shadowRoot.querySelectorAll("vaadin-month-calendar")]}get focusableDateElement(){return this.calendars.map(t=>t.focusableDateElement).find(Boolean)}ready(){super.ready(),this.setAttribute("role","dialog"),Z(this.$.scrollers,"track",this._track.bind(this)),Z(this.shadowRoot.querySelector('[part="clear-button"]'),"tap",this._clear.bind(this)),Z(this.shadowRoot.querySelector('[part="today-button"]'),"tap",this._onTodayTap.bind(this)),Z(this.shadowRoot.querySelector('[part="cancel-button"]'),"tap",this._cancel.bind(this)),Z(this.shadowRoot.querySelector('[part="toggle-button"]'),"tap",this._cancel.bind(this)),Z(this.shadowRoot.querySelector('[part="years"]'),"tap",this._onYearTap.bind(this)),Z(this.shadowRoot.querySelector('[part="years-toggle-button"]'),"tap",this._toggleYearScroller.bind(this)),this.addController(new gr(this._desktopMediaQuery,t=>{this._desktopMode=t}))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),Vn(this.$.scrollers,"pan-y")}focusCancel(){this.$.cancelButton.focus()}scrollToDate(t,e){this._scrollToPosition(this._differenceInMonths(t,this._originDate),e)}_selectDate(t){this.selectedDate=t,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:t},bubbles:!0,composed:!0}))}_focusedDateChanged(t){this.revealDate(t)}_isCurrentYear(t){return t===0}_isSelectedYear(t,e){if(e)return e.getFullYear()===this._originDate.getFullYear()+t}revealDate(t,e=!0){if(t){const i=this._differenceInMonths(t,this._originDate),s=this.$.monthScroller.position>i,o=Math.max(this.$.monthScroller.itemHeight,this.$.monthScroller.clientHeight-this.$.monthScroller.bufferOffset*2)/this.$.monthScroller.itemHeight,a=this.$.monthScroller.position+o-1<i;s?this._scrollToPosition(i,e):a&&this._scrollToPosition(i-o+1,e)}}_initialPositionChanged(t){this.scrollToDate(t)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=this.$.yearScroller.position*12-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=U.debounce(this._debouncer,re.after(300),()=>{this._ignoreTaps=!1})}_formatDisplayed(t,e,i){return t?e(lo(t)):i}_onTodayTap(){const t=new Date;Math.abs(this.$.monthScroller.position-this._differenceInMonths(t,this._originDate))<.001?(this._selectDate(t),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_onYearTap(t){if(!this._ignoreTaps&&!this._notTapping){const i=(t.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2))/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+i*12,!0)}}_scrollToPosition(t,e){if(this._targetPosition!==void 0){this._targetPosition=t;return}if(!e){this.$.monthScroller.position=t,this._targetPosition=void 0,this._repositionYearScroller(),this.__tryFocusDate();return}this._targetPosition=t;let i;this._revealPromise=new Promise(l=>{i=l});const s=(l,d,c,u)=>(l/=u/2,l<1?c/2*l*l+d:(l-=1,-c/2*(l*(l-2)-1)+d));let n=0;const o=this.$.monthScroller.position,a=l=>{n=n||l;const d=l-n;if(d<this.scrollDuration){const c=s(d,o,this._targetPosition-o,this.scrollDuration);this.$.monthScroller.position=c,window.requestAnimationFrame(a)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:o}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0,i(),this._revealPromise=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(a)}_limit(t,e){return Math.min(e.max,Math.max(e.min,t))}_handleTrack(t){if(Math.abs(t.detail.dx)<10||Math.abs(t.detail.ddy)>10)return;Math.abs(t.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);const e=this._translateX+t.detail.ddx;this._translateX=this._limit(e,{min:0,max:this._yearScrollerWidth})}_track(t){if(!this._desktopMode)switch(t.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(t);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller();break}}_toggleAnimateClass(t){t?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(t){this._desktopMode||(this.$.monthScroller.style.transform=`translateX(${t-this._yearScrollerWidth}px)`,this.$.yearScroller.style.transform=`translateX(${t}px)`)}_yearAfterXYears(t){const e=new Date(this._originDate);return e.setFullYear(parseInt(t)+this._originDate.getFullYear()),e.getFullYear()}_yearAfterXMonths(t){return this._dateAfterXMonths(t).getFullYear()}_dateAfterXMonths(t){const e=new Date(this._originDate);return e.setDate(1),e.setMonth(parseInt(t)+this._originDate.getMonth()),e}_differenceInMonths(t,e){return(t.getFullYear()-e.getFullYear())*12-e.getMonth()+t.getMonth()}_differenceInYears(t,e){return this._differenceInMonths(t,e)/12}_clear(){this._selectDate("")}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(t){t.preventDefault()}__toggleDate(t){he(t,this.selectedDate)?(this._clear(),this.focusedDate=t):this._selectDate(t)}__onMonthCalendarKeyDown(t){let e=!1;switch(t.key){case"ArrowDown":this._moveFocusByDays(7),e=!0;break;case"ArrowUp":this._moveFocusByDays(-7),e=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),e=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),e=!0;break;case"Enter":this._selectDate(this.focusedDate),this._close(),e=!0;break;case" ":this.__toggleDate(this.focusedDate),e=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),e=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),e=!0;break;case"PageDown":this._moveFocusByMonths(t.shiftKey?12:1),e=!0;break;case"PageUp":this._moveFocusByMonths(t.shiftKey?-12:-1),e=!0;break;case"Tab":this._onTabKeyDown(t,"calendar");break}e&&(t.preventDefault(),t.stopPropagation())}_onTabKeyDown(t,e){switch(t.stopPropagation(),e){case"calendar":t.shiftKey&&(t.preventDefault(),this.hasAttribute("fullscreen")?this.$.cancelButton.focus():this.__focusInput());break;case"today":t.shiftKey&&(t.preventDefault(),this.focusDateElement());break;case"cancel":t.shiftKey||(t.preventDefault(),this.hasAttribute("fullscreen")?this.focusDateElement():this.__focusInput());break}}__onTodayButtonKeyDown(t){t.key==="Tab"&&this._onTabKeyDown(t,"today")}__onCancelButtonKeyDown(t){t.key==="Tab"&&this._onTabKeyDown(t,"cancel")}__focusInput(){this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}__tryFocusDate(){if(this.__pendingDateFocus){const e=this.focusableDateElement;e&&he(e.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,e.focus())}}async focusDate(t,e){const i=t||this.selectedDate||this.initialPosition||new Date;this.focusedDate=i,e||(this._focusedMonthDate=i.getDate()),await this.focusDateElement(!1)}async focusDateElement(t=!0){this.__pendingDateFocus=this.focusedDate,this.calendars.length||await new Promise(e=>{setTimeout(e)}),t&&this.revealDate(this.focusedDate),this._revealPromise&&await this._revealPromise,this.__tryFocusDate()}_focusClosestDate(t){this.focusDate(ao(t,[this.minDate,this.maxDate]))}_moveFocusByDays(t){const e=this.focusedDate,i=new Date(0,0);i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(e.getDate()+t),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusDate(i):this._dateAllowed(e,this.minDate,this.maxDate)?t>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(e)}_moveFocusByMonths(t){const e=this.focusedDate,i=new Date(0,0);i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()+t);const s=i.getMonth();i.setDate(this._focusedMonthDate||(this._focusedMonthDate=e.getDate())),i.getMonth()!==s&&i.setDate(0),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusDate(i,!0):this._dateAllowed(e,this.minDate,this.maxDate)?t>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(e)}_moveFocusInsideMonth(t,e){const i=new Date(0,0);i.setFullYear(t.getFullYear()),e==="minDate"?(i.setMonth(t.getMonth()),i.setDate(1)):(i.setMonth(t.getMonth()+1),i.setDate(0)),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusDate(i):this._dateAllowed(t,this.minDate,this.maxDate)?this.focusDate(this[e]):this._focusClosestDate(t)}_dateAllowed(t,e,i){return(!e||t>=e)&&(!i||t<=i)}_isTodayAllowed(t,e){const i=new Date,s=new Date(0,0);return s.setFullYear(i.getFullYear()),s.setMonth(i.getMonth()),s.setDate(i.getDate()),this._dateAllowed(s,t,e)}}customElements.define(_s.is,_s);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cc=r=>class extends de(or(fr(oi(r)))){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,notify:!0,value:""},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean},_fullscreen:{type:Boolean,value:!1},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",today:"Today",cancel:"Cancel",formatDate:e=>{const i=String(e.year).replace(/\d+/,s=>"0000".substr(s.length)+s);return[e.month+1,e.day,i].join("/")},parseDate:e=>{const i=e.split("/"),s=new Date;let n,o=s.getMonth(),a=s.getFullYear();if(i.length===3?(a=parseInt(i[2]),i[2].length<3&&a>=0&&(a+=a<50?2e3:1900),o=parseInt(i[0])-1,n=parseInt(i[1])):i.length===2?(o=parseInt(i[0])-1,n=parseInt(i[1])):i.length===1&&(n=parseInt(i[0])),n!==void 0)return{day:n,month:o,year:a}},formatTitle:(e,i)=>`${e} ${i}`})},min:{type:String},max:{type:String},_minDate:{type:Date,computed:"__computeMinOrMaxDate(min)"},_maxDate:{type:Date,computed:"__computeMinOrMaxDate(max)"},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:It},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)"]}static get constraints(){return[...super.constraints,"min","max"]}get clearElement(){return null}get _inputValue(){return this.inputElement?this.inputElement.value:void 0}set _inputValue(e){this.inputElement&&(this.inputElement.value=e)}get _nativeInput(){return this.inputElement?this.inputElement.focusElement||this.inputElement:null}constructor(){super(),this._boundOnClick=this._onClick.bind(this),this._boundOnScroll=this._onScroll.bind(this)}_onFocus(e){super._onFocus(e),this._noInput&&e.target.blur()}_onBlur(e){if(super._onBlur(e),!this.opened){if(this.autoOpenDisabled){const i=this._getParsedDate();this._isValidDate(i)&&this._selectDate(i)}this.validate(),this._inputValue===""&&this.value!==""&&(this.value="")}}ready(){super.ready(),this.addEventListener("click",this._boundOnClick),this.addController(new gr(this._fullscreenMediaQuery,e=>{this._fullscreen=e})),this.addController(new io(this))}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_propertiesChanged(e,i,s){super._propertiesChanged(e,i,s),"value"in i&&this.__dispatchChange&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__dispatchChange=!1)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){(this._overlayInitialized||this.autoOpenDisabled)&&this.$.overlay.close()}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade"),this._overlayInitialized=!0,this.$.overlay.addEventListener("opened-changed",e=>{this.opened=e.detail.value}),this.$.overlay.addEventListener("vaadin-overlay-escape-press",()=>{this._focusedDate=this._selectedDate,this._close()}),this._overlayContent.addEventListener("close",()=>{this._close()}),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this._overlayContent.addEventListener("date-tap",e=>{this.__userConfirmedDate=!0,this._selectDate(e.detail.date),this._close()}),this._overlayContent.addEventListener("date-selected",e=>{this.__userConfirmedDate=!0,this._selectDate(e.detail.date)}),this._overlayContent.addEventListener("focusin",()=>{this._keyboardActive&&this._setFocused(!0)}),this.addEventListener("mousedown",()=>this.__bringToFront()),this.addEventListener("touchstart",()=>this.__bringToFront())}checkValidity(){const e=!this._inputValue||!!this._selectedDate&&this._inputValue===this._getFormattedDate(this.i18n.formatDate,this._selectedDate),i=!this._selectedDate||ut(this._selectedDate,this._minDate,this._maxDate);let s=!0;return this.inputElement&&(this.inputElement.checkValidity?s=this.inputElement.checkValidity():this.inputElement.validate&&(s=this.inputElement.validate())),e&&i&&s}_shouldSetFocus(e){return!this._shouldKeepFocusRing}_shouldRemoveFocus(e){return!this.opened}_setFocused(e){super._setFocused(e),this._shouldKeepFocusRing=e&&this._keyboardActive}_selectDate(e){const i=this._formatISO(e);this.value!==i&&(this.__dispatchChange=!0),this._selectedDate=e}_close(){this._focus(),this.close()}__bringToFront(){requestAnimationFrame(()=>{this.$.overlay.bringToFront()})}_parseDate(e){const i=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(e);if(!i)return;const s=new Date(0,0);return s.setFullYear(parseInt(i[1],10)),s.setMonth(parseInt(i[2],10)-1),s.setDate(parseInt(i[3],10)),s}_isNoInput(e,i,s,n,o,a){return!e||i&&(!a||o)||s&&o||!n.parseDate}_formatISO(e){if(!(e instanceof Date))return"";const i=(c,u="00")=>(u+c).substr((u+c).length-u.length);let s="",n="0000",o=e.getFullYear();o<0?(o=-o,s="-",n="000000"):e.getFullYear()>=1e4&&(s="+",n="000000");const a=s+i(o,n),l=i(e.getMonth()+1),d=i(e.getDate());return[a,l,d].join("-")}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.setAttribute("role","combobox"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(e){e&&!this._overlayInitialized&&this._initOverlay(),this._overlayInitialized&&(this.$.overlay.opened=e),this.inputElement&&this.inputElement.setAttribute("aria-expanded",e)}_selectedDateChanged(e,i){if(e===void 0||i===void 0)return;const s=this._formatISO(e);this.__keepInputValue||this._applyInputValue(e),s!==this.value&&(this.validate(),this.value=s),this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1}_focusedDateChanged(e,i){e===void 0||i===void 0||!this._ignoreFocusedDateChange&&!this._noInput&&this._applyInputValue(e)}__getOverlayTheme(e,i){if(i)return e}_valueChanged(e,i){const s=this._parseDate(e);if(e&&!s){this.value=i;return}e?he(this._selectedDate,s)||(this._selectedDate=s,i!==void 0&&this.validate()):this._selectedDate=null,this._toggleHasValue(this._hasValue)}_onOverlayOpened(){const e=this._parseDate(this.initialPosition),i=this._selectedDate||this._overlayContent.initialPosition||e||new Date;e||ut(i,this._minDate,this._maxDate)?this._overlayContent.initialPosition=i:this._overlayContent.initialPosition=ao(i,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._focusOverlayOnOpen?(this._overlayContent.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&(this.focusElement.blur(),this._overlayContent.focusDateElement())}_selectParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){const e=this._inputValue||"",i=this._getParsedDate(e);this._isValidDate(i)?this._selectDate(i):(this.__keepInputValue=!0,this._selectDate(null),this._selectedDate=null,this.__keepInputValue=!1)}else this._focusedDate&&this._selectDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){window.removeEventListener("scroll",this._boundOnScroll,!0),this.__userConfirmedDate?this.__userConfirmedDate=!1:this._selectParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.value||this.validate()}_onScroll(e){(e.target===window||!this._overlayContent.contains(e.target))&&this._overlayContent._repositionYearScroller()}_focus(){this._noInput||this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_applyInputValue(e){this._inputValue=e?this._getFormattedDate(this.i18n.formatDate,e):""}_getFormattedDate(e,i){return e(lo(i))}_setSelectionRange(e,i){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,i)}_isValidDate(e){return e&&!isNaN(e.getTime())}_onChange(e){this._inputValue===""&&(this.__dispatchChange=!0),e.stopPropagation()}_onClick(e){this._isClearButton(e)||this._onHostClick(e)}_onHostClick(e){(!this.autoOpenDisabled||this._noInput)&&(e.preventDefault(),this.open())}_onClearButtonClick(e){e.preventDefault(),this.value="",this._inputValue="",this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_onKeyDown(e){switch(super._onKeyDown(e),this._noInput&&[9].indexOf(e.keyCode)===-1&&e.preventDefault(),e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Tab":this.opened&&(e.preventDefault(),e.stopPropagation(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDateElement());break}}_onEnter(e){const i=this._getParsedDate(),s=this._isValidDate(i);if(this.opened)this._overlayInitialized&&this._overlayContent.focusedDate&&s&&this._selectDate(this._overlayContent.focusedDate),this.close();else if(!s&&this.inputElement.value!=="")this.validate();else{const n=this.value;this._selectParsedOrFocusedDate(),n===this.value&&this.validate()}}_onEscape(e){if(!this.opened){if(this.clearButtonVisible&&!!this.value){e.stopPropagation(),this._onClearButtonClick(e);return}this.autoOpenDisabled?(this.inputElement.value===""&&this._selectDate(null),this._applyInputValue(this._selectedDate)):(this._focusedDate=this._selectedDate,this._selectParsedOrFocusedDate())}}_getParsedDate(e=this._inputValue){const i=this.i18n.parseDate&&this.i18n.parseDate(e);return i&&this._parseDate(`${i.year}-${i.month+1}-${i.day}`)}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_onInput(){!this.opened&&this.inputElement.value&&!this.autoOpenDisabled&&this.open(),this._userInputValueChanged()}_userInputValueChanged(){if(this.opened&&this._inputValue){const e=this._getParsedDate();this._isValidDate(e)&&(this._ignoreFocusedDateChange=!0,he(e,this._focusedDate)||(this._focusedDate=e),this._ignoreFocusedDateChange=!1)}}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}__computeMinOrMaxDate(e){return this._parseDate(e)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */T("vaadin-date-picker",[Pt,nc],{moduleId:"vaadin-date-picker-styles"});class ms extends cc(_r(R(K(k)))){static get is(){return"vaadin-date-picker"}static get template(){return M`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

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
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[__getOverlayTheme(_theme, _overlayInitialized)]]"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-closing="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
        disable-upgrade
      >
        <template>
          <vaadin-date-picker-overlay-content
            id="overlay-content"
            i18n="[[i18n]]"
            fullscreen$="[[_fullscreen]]"
            label="[[label]]"
            selected-date="[[_selectedDate]]"
            focused-date="{{_focusedDate}}"
            show-week-numbers="[[showWeekNumbers]]"
            min-date="[[_minDate]]"
            max-date="[[_maxDate]]"
            part="overlay-content"
            theme$="[[__getOverlayTheme(_theme, _overlayInitialized)]]"
          ></vaadin-date-picker-overlay-content>
        </template>
      </vaadin-date-picker-overlay>
    `}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new St(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Je(this.inputElement,this._labelController)),this.shadowRoot.querySelector('[part="toggle-button"]').addEventListener("mousedown",e=>e.preventDefault())}_initOverlay(){super._initOverlay(),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}_onVaadinOverlayClose(t){t.detail.sourceEvent&&t.detail.sourceEvent.composedPath().includes(this)&&t.preventDefault()}_toggle(t){t.stopPropagation(),this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_openedChanged(t){super._openedChanged(t),this.$.overlay.positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.$.overlay.noVerticalOverlap=!0}}customElements.define(ms.is,ms);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */T("vaadin-text-field",Ce,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vr=r=>class extends _r(r){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.value&&e.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),e.value=""),this.value&&(e.value=this.value))}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}_setFocused(e){super._setFocused(e),e||this.validate()}_onInput(e){super._onInput(e),this.invalid&&this.validate()}_valueChanged(e,i){super._valueChanged(e,i),i!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */T("vaadin-text-field",Pt,{moduleId:"vaadin-text-field-styles"});class Gt extends mr(vr(R(K(k)))){static get is(){return"vaadin-text-field"}static get template(){return M`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new St(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Je(this.inputElement,this._labelController))}}customElements.define(Gt.is,Gt);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hc=E`
  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;T("vaadin-email-field",[Ce,hc],{moduleId:"lumo-email-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */T("vaadin-email-field",E`
    :host([dir='rtl']) [part='input-field'] {
      direction: ltr;
    }

    :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
      direction: rtl;
      text-align: left;
    }
  `,{moduleId:"vaadin-email-field-styles"});class uc extends Gt{static get is(){return"vaadin-email-field"}constructor(){super(),this._setType("email"),this.pattern="^([a-zA-Z0-9_\\.\\-+])+@[a-zA-Z0-9-.]+\\.[a-zA-Z0-9-]{2,}$"}ready(){super.ready(),this.inputElement&&(this.inputElement.autocapitalize="off")}}customElements.define("vaadin-email-field",uc);(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Combo Box")};window.Vaadin.Flow.comboBoxConnector={initLazy:t=>r(function(e){if(e.$connector)return;e.$connector={};function i(){return e.localName==="vaadin-multi-select-combo-box"?e.$.comboBox:e}const s={};let n={},o="";const a=new window.Vaadin.ComboBoxPlaceholder,l=Math.max(e.pageSize*2,500),d=(()=>{let g="",v=!1;return{needsDataCommunicatorReset:()=>v=!0,getLastFilterSentToServer:()=>g,requestData:(O,S,Y)=>{const te=S-O,se=Y.filter;e.$server.setRequestedRange(O,te,se),g=se,v&&(e.$server.resetDataCommunicator(),v=!1)}}})(),c=(g=Object.keys(s))=>{const v=i();g.forEach(C=>{s[C]([],v.size),delete s[C];const w=parseInt(C)*v.pageSize,x=w+v.pageSize,O=Math.min(x,v.filteredItems.length);for(let S=w;S<O;S++)v.filteredItems[S]=a})};e.dataProvider=function(g,v){if(g.pageSize!=e.pageSize)throw"Invalid pageSize";if(e._clientSideFilter)if(n[0]){A(n[0],v);return}else g.filter="";if(g.filter!==o){n={},o=g.filter,this._debouncer=oe.debounce(this._debouncer,_t.after(500),()=>{if(d.getLastFilterSentToServer()===g.filter&&d.needsDataCommunicatorReset(),g.filter!==o)throw new Error("Expected params.filter to be '"+o+"' but was '"+g.filter+"'");c(),e.dataProvider(g,v)});return}if(n[g.page])y(g.page,v);else{s[g.page]=v;const w=Object.keys(s).map(S=>parseInt(S)),x=Math.min(...w),O=Math.max(...w);if(w.length*g.pageSize>l)g.page===x?c([String(O)]):c([String(x)]),e.dataProvider(g,v);else if(O-x+1!==w.length)c();else{const S=g.pageSize*x,Y=g.pageSize*(O+1);!this._debouncer||!this._debouncer.isActive()?d.requestData(S,Y,g):this._debouncer=oe.debounce(this._debouncer,_t.after(200),()=>d.requestData(S,Y,g))}}},e.$connector.clear=r((g,v)=>{const C=Math.floor(g/e.pageSize),w=Math.ceil(v/e.pageSize);for(let x=C;x<C+w;x++)delete n[x]}),e.$connector.filter=r(function(g,v){return v=v?v.toString().toLowerCase():"",e._getItemLabel(g,e.itemLabelPath).toString().toLowerCase().indexOf(v)>-1}),e.$connector.set=r(function(g,v,C){if(C!=d.getLastFilterSentToServer())return;if(g%e.pageSize!=0)throw"Got new data to index "+g+" which is not aligned with the page size of "+e.pageSize;if(g===0&&v.length===0&&s[0]){n[0]=[];return}const w=g/e.pageSize,x=Math.ceil(v.length/e.pageSize);for(let O=0;O<x;O++){let S=w+O,Y=v.slice(O*e.pageSize,(O+1)*e.pageSize);n[S]=Y}}),e.$connector.updateData=r(function(g){const v=i(),C=new Map(g.map(w=>[w.key,w]));v.filteredItems=v.filteredItems.map(w=>C.get(w.key)||w)}),e.$connector.updateSize=r(function(g){e._clientSideFilter||(e.size=g)}),e.$connector.reset=r(function(){const g=i();c(),n={},g.clearCache()}),e.$connector.confirm=r(function(g,v){if(v!=d.getLastFilterSentToServer())return;let C=Object.getOwnPropertyNames(s);for(let w=0;w<C.length;w++){let x=C[w];n[x]&&y(x,s[x])}e.$server.confirmUpdate(g)}),e.$connector.enableClientValidation=r(function(g){e.$?(g?m(e):u(e),e.validate()):setTimeout(function(){e.$connector.enableClientValidation(g)},10)});const u=r(function(g){typeof g.$checkValidity>"u"&&(g.$checkValidity=g.checkValidity,g.checkValidity=function(){return!e.invalid}),typeof g.$validate>"u"&&(g.$validate=g.validate,g.validate=function(){return!(e.focusElement.invalid=e.invalid)})}),m=r(function(g){g.$checkValidity&&(g.checkValidity=g.$checkValidity,delete g.$checkValidity),g.$validate&&(g.validate=g.$validate,delete g.$validate)}),y=r(function(g,v){let C=n[g];e._clientSideFilter?A(C,v):(delete n[g],v(C,e.size))}),A=r(function(g,v){const C=i();let w=g;C.filter&&(w=g.filter(x=>e.$connector.filter(x,C.filter))),v(w,w.length)});e.addEventListener("custom-value-set",r(g=>g.preventDefault()))})(t)}})();window.Vaadin.ComboBoxPlaceholder=Me;(function(){function r(o){return window.Vaadin.Flow.tryCatchWrapper(o,"Vaadin Context Menu")}function t(o,a){try{return window.Vaadin.Flow.clients[o].getByNodeId(a)}catch(l){console.error("Could not get node %s from app %s",a,o),console.error(l)}}function e(o,a){o.$connector||(o.$connector={generateItems:r(l=>{const d=i(a,l);o.items=d})})}function i(o,a){const l=t(o,a);if(!!l)return Array.from(l.children).map(d=>{const c={component:d,checked:d._checked,theme:d.__theme};return d.localName=="vaadin-context-menu-item"&&d._containerNodeId&&(c.children=i(o,d._containerNodeId)),d._item=c,c})}function s(o,a){o._item&&(o._item.checked=a)}function n(o,a){o._item&&(o._item.theme=a)}window.Vaadin.Flow.contextMenuConnector={initLazy(...o){return r(e)(...o)},generateItemsTree(...o){return r(i)(...o)},setChecked(...o){return r(s)(...o)},setTheme(...o){return r(n)(...o)}}})();(function(){function r(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Context Menu Target")}function t(e){e.$contextMenuTargetConnector||(e.$contextMenuTargetConnector={openOnHandler:r(function(i){i.preventDefault(),i.stopPropagation(),this.$contextMenuTargetConnector.openEvent=i;let s={};e.getContextMenuBeforeOpenDetail&&(s=e.getContextMenuBeforeOpenDetail(i)),e.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:s}))}),updateOpenOn:r(function(i){this.removeListener(),this.openOnEventType=i,customElements.whenDefined("vaadin-context-menu").then(r(()=>{ue[i]?Z(e,i,this.openOnHandler):e.addEventListener(i,this.openOnHandler)}))}),removeListener:r(function(){this.openOnEventType&&(ue[this.openOnEventType]?Hn(e,this.openOnEventType,this.openOnHandler):e.removeEventListener(this.openOnEventType,this.openOnHandler))}),openMenu:r(function(i){i.open(this.openEvent)}),removeConnector:r(function(){this.removeListener(),e.$contextMenuTargetConnector=void 0})})}window.Vaadin.Flow.contextMenuTargetConnector={init(...e){return r(t)(...e)}}})();function W(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function pc(r){return W(1,arguments),r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Q(r){W(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||typeof r=="object"&&t==="[object Date]"?new Date(r.getTime()):typeof r=="number"||t==="[object Number]"?new Date(r):((typeof r=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function co(r){if(W(1,arguments),!pc(r)&&typeof r!="number")return!1;var t=Q(r);return!isNaN(Number(t))}var fc={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},_c=function(r,t,e){var i,s=fc[r];return typeof s=="string"?i=s:t===1?i=s.one:i=s.other.replace("{{count}}",t.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+i:i+" ago":i};const mc=_c;function bi(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,i=r.formats[e]||r.formats[r.defaultWidth];return i}}var gc={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},vc={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},bc={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},yc={date:bi({formats:gc,defaultWidth:"full"}),time:bi({formats:vc,defaultWidth:"full"}),dateTime:bi({formats:bc,defaultWidth:"full"})};const wc=yc;var Cc={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},xc=function(r,t,e,i){return Cc[r]};const Ac=xc;function nt(r){return function(t,e){var i=e||{},s=i.context?String(i.context):"standalone",n;if(s==="formatting"&&r.formattingValues){var o=r.defaultFormattingWidth||r.defaultWidth,a=i.width?String(i.width):o;n=r.formattingValues[a]||r.formattingValues[o]}else{var l=r.defaultWidth,d=i.width?String(i.width):r.defaultWidth;n=r.values[d]||r.values[l]}var c=r.argumentCallback?r.argumentCallback(t):t;return n[c]}}var Ec={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Tc={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ic={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Sc={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Pc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Dc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},kc=function(r,t){var e=Number(r),i=e%100;if(i>20||i<10)switch(i%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},Oc={ordinalNumber:kc,era:nt({values:Ec,defaultWidth:"wide"}),quarter:nt({values:Tc,defaultWidth:"wide",argumentCallback:function(r){return r-1}}),month:nt({values:Ic,defaultWidth:"wide"}),day:nt({values:Sc,defaultWidth:"wide"}),dayPeriod:nt({values:Pc,defaultWidth:"wide",formattingValues:Dc,defaultFormattingWidth:"wide"})};const zc=Oc;function ot(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=t.match(s);if(!n)return null;var o=n[0],a=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(a)?Lc(a,function(u){return u.test(o)}):Mc(a,function(u){return u.test(o)}),d;d=r.valueCallback?r.valueCallback(l):l,d=e.valueCallback?e.valueCallback(d):d;var c=t.slice(o.length);return{value:d,rest:c}}}function Mc(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function Lc(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function Fc(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.match(r.matchPattern);if(!i)return null;var s=i[0],n=t.match(r.parsePattern);if(!n)return null;var o=r.valueCallback?r.valueCallback(n[0]):n[0];o=e.valueCallback?e.valueCallback(o):o;var a=t.slice(s.length);return{value:o,rest:a}}}var Nc=/^(\d+)(th|st|nd|rd)?/i,Rc=/\d+/i,$c={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Hc={any:[/^b/i,/^(a|c)/i]},Vc={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Bc={any:[/1/i,/2/i,/3/i,/4/i]},Uc={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Wc={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},qc={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Yc={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Gc={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},jc={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Kc={ordinalNumber:Fc({matchPattern:Nc,parsePattern:Rc,valueCallback:function(r){return parseInt(r,10)}}),era:ot({matchPatterns:$c,defaultMatchWidth:"wide",parsePatterns:Hc,defaultParseWidth:"any"}),quarter:ot({matchPatterns:Vc,defaultMatchWidth:"wide",parsePatterns:Bc,defaultParseWidth:"any",valueCallback:function(r){return r+1}}),month:ot({matchPatterns:Uc,defaultMatchWidth:"wide",parsePatterns:Wc,defaultParseWidth:"any"}),day:ot({matchPatterns:qc,defaultMatchWidth:"wide",parsePatterns:Yc,defaultParseWidth:"any"}),dayPeriod:ot({matchPatterns:Gc,defaultMatchWidth:"any",parsePatterns:jc,defaultParseWidth:"any"})};const Qc=Kc;var Xc={code:"en-US",formatDistance:mc,formatLong:wc,formatRelative:Ac,localize:zc,match:Qc,options:{weekStartsOn:0,firstWeekContainsDate:1}};const ho=Xc;function H(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function Jc(r,t){W(2,arguments);var e=Q(r).getTime(),i=H(t);return new Date(e+i)}function uo(r,t){W(2,arguments);var e=H(t);return Jc(r,-e)}var Zc=864e5;function eh(r){W(1,arguments);var t=Q(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var i=t.getTime(),s=e-i;return Math.floor(s/Zc)+1}function Xe(r){W(1,arguments);var t=1,e=Q(r),i=e.getUTCDay(),s=(i<t?7:0)+i-t;return e.setUTCDate(e.getUTCDate()-s),e.setUTCHours(0,0,0,0),e}function po(r){W(1,arguments);var t=Q(r),e=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(e+1,0,4),i.setUTCHours(0,0,0,0);var s=Xe(i),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var o=Xe(n);return t.getTime()>=s.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function th(r){W(1,arguments);var t=po(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var i=Xe(e);return i}var ih=6048e5;function fo(r){W(1,arguments);var t=Q(r),e=Xe(t).getTime()-th(t).getTime();return Math.round(e/ih)+1}function Oe(r,t){W(1,arguments);var e=t||{},i=e.locale,s=i&&i.options&&i.options.weekStartsOn,n=s==null?0:H(s),o=e.weekStartsOn==null?n:H(e.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var a=Q(r),l=a.getUTCDay(),d=(l<o?7:0)+l-o;return a.setUTCDate(a.getUTCDate()-d),a.setUTCHours(0,0,0,0),a}function br(r,t){W(1,arguments);var e=Q(r),i=e.getUTCFullYear(),s=t||{},n=s.locale,o=n&&n.options&&n.options.firstWeekContainsDate,a=o==null?1:H(o),l=s.firstWeekContainsDate==null?a:H(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(i+1,0,l),d.setUTCHours(0,0,0,0);var c=Oe(d,t),u=new Date(0);u.setUTCFullYear(i,0,l),u.setUTCHours(0,0,0,0);var m=Oe(u,t);return e.getTime()>=c.getTime()?i+1:e.getTime()>=m.getTime()?i:i-1}function rh(r,t){W(1,arguments);var e=t||{},i=e.locale,s=i&&i.options&&i.options.firstWeekContainsDate,n=s==null?1:H(s),o=e.firstWeekContainsDate==null?n:H(e.firstWeekContainsDate),a=br(r,t),l=new Date(0);l.setUTCFullYear(a,0,o),l.setUTCHours(0,0,0,0);var d=Oe(l,t);return d}var sh=6048e5;function _o(r,t){W(1,arguments);var e=Q(r),i=Oe(e,t).getTime()-rh(e,t).getTime();return Math.round(i/sh)+1}function L(r,t){for(var e=r<0?"-":"",i=Math.abs(r).toString();i.length<t;)i="0"+i;return e+i}var nh={y:function(r,t){var e=r.getUTCFullYear(),i=e>0?e:1-e;return L(t==="yy"?i%100:i,t.length)},M:function(r,t){var e=r.getUTCMonth();return t==="M"?String(e+1):L(e+1,2)},d:function(r,t){return L(r.getUTCDate(),t.length)},a:function(r,t){var e=r.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h:function(r,t){return L(r.getUTCHours()%12||12,t.length)},H:function(r,t){return L(r.getUTCHours(),t.length)},m:function(r,t){return L(r.getUTCMinutes(),t.length)},s:function(r,t){return L(r.getUTCSeconds(),t.length)},S:function(r,t){var e=t.length,i=r.getUTCMilliseconds(),s=Math.floor(i*Math.pow(10,e-3));return L(s,t.length)}};const _e=nh;var $e={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},oh={G:function(r,t,e){var i=r.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(i,{width:"abbreviated"});case"GGGGG":return e.era(i,{width:"narrow"});case"GGGG":default:return e.era(i,{width:"wide"})}},y:function(r,t,e){if(t==="yo"){var i=r.getUTCFullYear(),s=i>0?i:1-i;return e.ordinalNumber(s,{unit:"year"})}return _e.y(r,t)},Y:function(r,t,e,i){var s=br(r,i),n=s>0?s:1-s;if(t==="YY"){var o=n%100;return L(o,2)}return t==="Yo"?e.ordinalNumber(n,{unit:"year"}):L(n,t.length)},R:function(r,t){var e=po(r);return L(e,t.length)},u:function(r,t){var e=r.getUTCFullYear();return L(e,t.length)},Q:function(r,t,e){var i=Math.ceil((r.getUTCMonth()+1)/3);switch(t){case"Q":return String(i);case"QQ":return L(i,2);case"Qo":return e.ordinalNumber(i,{unit:"quarter"});case"QQQ":return e.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,t,e){var i=Math.ceil((r.getUTCMonth()+1)/3);switch(t){case"q":return String(i);case"qq":return L(i,2);case"qo":return e.ordinalNumber(i,{unit:"quarter"});case"qqq":return e.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,t,e){var i=r.getUTCMonth();switch(t){case"M":case"MM":return _e.M(r,t);case"Mo":return e.ordinalNumber(i+1,{unit:"month"});case"MMM":return e.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(i,{width:"wide",context:"formatting"})}},L:function(r,t,e){var i=r.getUTCMonth();switch(t){case"L":return String(i+1);case"LL":return L(i+1,2);case"Lo":return e.ordinalNumber(i+1,{unit:"month"});case"LLL":return e.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(i,{width:"wide",context:"standalone"})}},w:function(r,t,e,i){var s=_o(r,i);return t==="wo"?e.ordinalNumber(s,{unit:"week"}):L(s,t.length)},I:function(r,t,e){var i=fo(r);return t==="Io"?e.ordinalNumber(i,{unit:"week"}):L(i,t.length)},d:function(r,t,e){return t==="do"?e.ordinalNumber(r.getUTCDate(),{unit:"date"}):_e.d(r,t)},D:function(r,t,e){var i=eh(r);return t==="Do"?e.ordinalNumber(i,{unit:"dayOfYear"}):L(i,t.length)},E:function(r,t,e){var i=r.getUTCDay();switch(t){case"E":case"EE":case"EEE":return e.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(i,{width:"short",context:"formatting"});case"EEEE":default:return e.day(i,{width:"wide",context:"formatting"})}},e:function(r,t,e,i){var s=r.getUTCDay(),n=(s-i.weekStartsOn+8)%7||7;switch(t){case"e":return String(n);case"ee":return L(n,2);case"eo":return e.ordinalNumber(n,{unit:"day"});case"eee":return e.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(s,{width:"short",context:"formatting"});case"eeee":default:return e.day(s,{width:"wide",context:"formatting"})}},c:function(r,t,e,i){var s=r.getUTCDay(),n=(s-i.weekStartsOn+8)%7||7;switch(t){case"c":return String(n);case"cc":return L(n,t.length);case"co":return e.ordinalNumber(n,{unit:"day"});case"ccc":return e.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(s,{width:"narrow",context:"standalone"});case"cccccc":return e.day(s,{width:"short",context:"standalone"});case"cccc":default:return e.day(s,{width:"wide",context:"standalone"})}},i:function(r,t,e){var i=r.getUTCDay(),s=i===0?7:i;switch(t){case"i":return String(s);case"ii":return L(s,t.length);case"io":return e.ordinalNumber(s,{unit:"day"});case"iii":return e.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(i,{width:"short",context:"formatting"});case"iiii":default:return e.day(i,{width:"wide",context:"formatting"})}},a:function(r,t,e){var i=r.getUTCHours(),s=i/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,t,e){var i=r.getUTCHours(),s;switch(i===12?s=$e.noon:i===0?s=$e.midnight:s=i/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,t,e){var i=r.getUTCHours(),s;switch(i>=17?s=$e.evening:i>=12?s=$e.afternoon:i>=4?s=$e.morning:s=$e.night,t){case"B":case"BB":case"BBB":return e.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,t,e){if(t==="ho"){var i=r.getUTCHours()%12;return i===0&&(i=12),e.ordinalNumber(i,{unit:"hour"})}return _e.h(r,t)},H:function(r,t,e){return t==="Ho"?e.ordinalNumber(r.getUTCHours(),{unit:"hour"}):_e.H(r,t)},K:function(r,t,e){var i=r.getUTCHours()%12;return t==="Ko"?e.ordinalNumber(i,{unit:"hour"}):L(i,t.length)},k:function(r,t,e){var i=r.getUTCHours();return i===0&&(i=24),t==="ko"?e.ordinalNumber(i,{unit:"hour"}):L(i,t.length)},m:function(r,t,e){return t==="mo"?e.ordinalNumber(r.getUTCMinutes(),{unit:"minute"}):_e.m(r,t)},s:function(r,t,e){return t==="so"?e.ordinalNumber(r.getUTCSeconds(),{unit:"second"}):_e.s(r,t)},S:function(r,t){return _e.S(r,t)},X:function(r,t,e,i){var s=i._originalDate||r,n=s.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return vs(n);case"XXXX":case"XX":return Pe(n);case"XXXXX":case"XXX":default:return Pe(n,":")}},x:function(r,t,e,i){var s=i._originalDate||r,n=s.getTimezoneOffset();switch(t){case"x":return vs(n);case"xxxx":case"xx":return Pe(n);case"xxxxx":case"xxx":default:return Pe(n,":")}},O:function(r,t,e,i){var s=i._originalDate||r,n=s.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+gs(n,":");case"OOOO":default:return"GMT"+Pe(n,":")}},z:function(r,t,e,i){var s=i._originalDate||r,n=s.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+gs(n,":");case"zzzz":default:return"GMT"+Pe(n,":")}},t:function(r,t,e,i){var s=i._originalDate||r,n=Math.floor(s.getTime()/1e3);return L(n,t.length)},T:function(r,t,e,i){var s=i._originalDate||r,n=s.getTime();return L(n,t.length)}};function gs(r,t){var e=r>0?"-":"+",i=Math.abs(r),s=Math.floor(i/60),n=i%60;if(n===0)return e+String(s);var o=t||"";return e+String(s)+o+L(n,2)}function vs(r,t){if(r%60===0){var e=r>0?"-":"+";return e+L(Math.abs(r)/60,2)}return Pe(r,t)}function Pe(r,t){var e=t||"",i=r>0?"-":"+",s=Math.abs(r),n=L(Math.floor(s/60),2),o=L(s%60,2);return i+n+e+o}const ah=oh;function bs(r,t){switch(r){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function mo(r,t){switch(r){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}function lh(r,t){var e=r.match(/(P+)(p+)?/)||[],i=e[1],s=e[2];if(!s)return bs(r,t);var n;switch(i){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"});break}return n.replace("{{date}}",bs(i,t)).replace("{{time}}",mo(s,t))}var dh={p:mo,P:lh};const go=dh;function vo(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}var ch=["D","DD"],hh=["YY","YYYY"];function bo(r){return ch.indexOf(r)!==-1}function yo(r){return hh.indexOf(r)!==-1}function jt(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://git.io/fxCyr"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://git.io/fxCyr"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://git.io/fxCyr"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://git.io/fxCyr"))}var uh=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ph=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,fh=/^'([^]*?)'?$/,_h=/''/g,mh=/[a-zA-Z]/;function gh(r,t,e){W(2,arguments);var i=String(t),s=e||{},n=s.locale||ho,o=n.options&&n.options.firstWeekContainsDate,a=o==null?1:H(o),l=s.firstWeekContainsDate==null?a:H(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=n.options&&n.options.weekStartsOn,c=d==null?0:H(d),u=s.weekStartsOn==null?c:H(s.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!n.localize)throw new RangeError("locale must contain localize property");if(!n.formatLong)throw new RangeError("locale must contain formatLong property");var m=Q(r);if(!co(m))throw new RangeError("Invalid time value");var y=vo(m),A=uo(m,y),g={firstWeekContainsDate:l,weekStartsOn:u,locale:n,_originalDate:m},v=i.match(ph).map(function(C){var w=C[0];if(w==="p"||w==="P"){var x=go[w];return x(C,n.formatLong,g)}return C}).join("").match(uh).map(function(C){if(C==="''")return"'";var w=C[0];if(w==="'")return vh(C);var x=ah[w];if(x)return!s.useAdditionalWeekYearTokens&&yo(C)&&jt(C,t,r),!s.useAdditionalDayOfYearTokens&&bo(C)&&jt(C,t,r),x(A,C,n.localize,g);if(w.match(mh))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");return C}).join("");return v}function vh(r){return r.match(fh)[1].replace(_h,"'")}function bh(r,t){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");t=t||{};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e]);return r}function yi(r,t,e){W(2,arguments);var i=e||{},s=i.locale,n=s&&s.options&&s.options.weekStartsOn,o=n==null?0:H(n),a=i.weekStartsOn==null?o:H(i.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=Q(r),d=H(t),c=l.getUTCDay(),u=d%7,m=(u+7)%7,y=(m<a?7:0)+d-c;return l.setUTCDate(l.getUTCDate()+y),l}function yh(r,t){W(2,arguments);var e=H(t);e%7===0&&(e=e-7);var i=1,s=Q(r),n=s.getUTCDay(),o=e%7,a=(o+7)%7,l=(a<i?7:0)+e-n;return s.setUTCDate(s.getUTCDate()+l),s}function wh(r,t){W(2,arguments);var e=Q(r),i=H(t),s=fo(e)-i;return e.setUTCDate(e.getUTCDate()-s*7),e}function Ch(r,t,e){W(2,arguments);var i=Q(r),s=H(t),n=_o(i,e)-s;return i.setUTCDate(i.getUTCDate()-n*7),i}var xh=36e5,Ah=6e4,Eh=1e3,B={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},ae={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function N(r,t,e){var i=t.match(r);if(!i)return null;var s=parseInt(i[0],10);return{value:e?e(s):s,rest:t.slice(i[0].length)}}function le(r,t){var e=t.match(r);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};var i=e[1]==="+"?1:-1,s=e[2]?parseInt(e[2],10):0,n=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:i*(s*xh+n*Ah+o*Eh),rest:t.slice(e[0].length)}}function ys(r,t){return N(B.anyDigitsSigned,r,t)}function $(r,t,e){switch(r){case 1:return N(B.singleDigit,t,e);case 2:return N(B.twoDigits,t,e);case 3:return N(B.threeDigits,t,e);case 4:return N(B.fourDigits,t,e);default:return N(new RegExp("^\\d{1,"+r+"}"),t,e)}}function Nt(r,t,e){switch(r){case 1:return N(B.singleDigitSigned,t,e);case 2:return N(B.twoDigitsSigned,t,e);case 3:return N(B.threeDigitsSigned,t,e);case 4:return N(B.fourDigitsSigned,t,e);default:return N(new RegExp("^-?\\d{1,"+r+"}"),t,e)}}function wi(r){switch(r){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function ws(r,t){var e=t>0,i=e?t:1-t,s;if(i<=50)s=r||100;else{var n=i+50,o=Math.floor(n/100)*100,a=r>=n%100;s=r+o-(a?100:0)}return e?s:1-s}var Th=[31,28,31,30,31,30,31,31,30,31,30,31],Ih=[31,29,31,30,31,30,31,31,30,31,30,31];function Cs(r){return r%400===0||r%4===0&&r%100!==0}var Sh={G:{priority:140,parse:function(r,t,e,i){switch(t){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"})||e.era(r,{width:"narrow"});case"GGGGG":return e.era(r,{width:"narrow"});case"GGGG":default:return e.era(r,{width:"wide"})||e.era(r,{width:"abbreviated"})||e.era(r,{width:"narrow"})}},set:function(r,t,e,i){return t.era=e,r.setUTCFullYear(e,0,1),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["R","u","t","T"]},y:{priority:130,parse:function(r,t,e,i){var s=function(n){return{year:n,isTwoDigitYear:t==="yy"}};switch(t){case"y":return $(4,r,s);case"yo":return e.ordinalNumber(r,{unit:"year",valueCallback:s});default:return $(t.length,r,s)}},validate:function(r,t,e){return t.isTwoDigitYear||t.year>0},set:function(r,t,e,i){var s=r.getUTCFullYear();if(e.isTwoDigitYear){var n=ws(e.year,s);return r.setUTCFullYear(n,0,1),r.setUTCHours(0,0,0,0),r}var o=!("era"in t)||t.era===1?e.year:1-e.year;return r.setUTCFullYear(o,0,1),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["Y","R","u","w","I","i","e","c","t","T"]},Y:{priority:130,parse:function(r,t,e,i){var s=function(n){return{year:n,isTwoDigitYear:t==="YY"}};switch(t){case"Y":return $(4,r,s);case"Yo":return e.ordinalNumber(r,{unit:"year",valueCallback:s});default:return $(t.length,r,s)}},validate:function(r,t,e){return t.isTwoDigitYear||t.year>0},set:function(r,t,e,i){var s=br(r,i);if(e.isTwoDigitYear){var n=ws(e.year,s);return r.setUTCFullYear(n,0,i.firstWeekContainsDate),r.setUTCHours(0,0,0,0),Oe(r,i)}var o=!("era"in t)||t.era===1?e.year:1-e.year;return r.setUTCFullYear(o,0,i.firstWeekContainsDate),r.setUTCHours(0,0,0,0),Oe(r,i)},incompatibleTokens:["y","R","u","Q","q","M","L","I","d","D","i","t","T"]},R:{priority:130,parse:function(r,t,e,i){return Nt(t==="R"?4:t.length,r)},set:function(r,t,e,i){var s=new Date(0);return s.setUTCFullYear(e,0,4),s.setUTCHours(0,0,0,0),Xe(s)},incompatibleTokens:["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]},u:{priority:130,parse:function(r,t,e,i){return Nt(t==="u"?4:t.length,r)},set:function(r,t,e,i){return r.setUTCFullYear(e,0,1),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["G","y","Y","R","w","I","i","e","c","t","T"]},Q:{priority:120,parse:function(r,t,e,i){switch(t){case"Q":case"QQ":return $(t.length,r);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"})||e.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(r,{width:"wide",context:"formatting"})||e.quarter(r,{width:"abbreviated",context:"formatting"})||e.quarter(r,{width:"narrow",context:"formatting"})}},validate:function(r,t,e){return t>=1&&t<=4},set:function(r,t,e,i){return r.setUTCMonth((e-1)*3,1),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]},q:{priority:120,parse:function(r,t,e,i){switch(t){case"q":case"qq":return $(t.length,r);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"})||e.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(r,{width:"wide",context:"standalone"})||e.quarter(r,{width:"abbreviated",context:"standalone"})||e.quarter(r,{width:"narrow",context:"standalone"})}},validate:function(r,t,e){return t>=1&&t<=4},set:function(r,t,e,i){return r.setUTCMonth((e-1)*3,1),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]},M:{priority:110,parse:function(r,t,e,i){var s=function(n){return n-1};switch(t){case"M":return N(B.month,r,s);case"MM":return $(2,r,s);case"Mo":return e.ordinalNumber(r,{unit:"month",valueCallback:s});case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"})||e.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(r,{width:"wide",context:"formatting"})||e.month(r,{width:"abbreviated",context:"formatting"})||e.month(r,{width:"narrow",context:"formatting"})}},validate:function(r,t,e){return t>=0&&t<=11},set:function(r,t,e,i){return r.setUTCMonth(e,1),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]},L:{priority:110,parse:function(r,t,e,i){var s=function(n){return n-1};switch(t){case"L":return N(B.month,r,s);case"LL":return $(2,r,s);case"Lo":return e.ordinalNumber(r,{unit:"month",valueCallback:s});case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"})||e.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(r,{width:"wide",context:"standalone"})||e.month(r,{width:"abbreviated",context:"standalone"})||e.month(r,{width:"narrow",context:"standalone"})}},validate:function(r,t,e){return t>=0&&t<=11},set:function(r,t,e,i){return r.setUTCMonth(e,1),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]},w:{priority:100,parse:function(r,t,e,i){switch(t){case"w":return N(B.week,r);case"wo":return e.ordinalNumber(r,{unit:"week"});default:return $(t.length,r)}},validate:function(r,t,e){return t>=1&&t<=53},set:function(r,t,e,i){return Oe(Ch(r,e,i),i)},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","i","t","T"]},I:{priority:100,parse:function(r,t,e,i){switch(t){case"I":return N(B.week,r);case"Io":return e.ordinalNumber(r,{unit:"week"});default:return $(t.length,r)}},validate:function(r,t,e){return t>=1&&t<=53},set:function(r,t,e,i){return Xe(wh(r,e,i),i)},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]},d:{priority:90,subPriority:1,parse:function(r,t,e,i){switch(t){case"d":return N(B.date,r);case"do":return e.ordinalNumber(r,{unit:"date"});default:return $(t.length,r)}},validate:function(r,t,e){var i=r.getUTCFullYear(),s=Cs(i),n=r.getUTCMonth();return s?t>=1&&t<=Ih[n]:t>=1&&t<=Th[n]},set:function(r,t,e,i){return r.setUTCDate(e),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["Y","R","q","Q","w","I","D","i","e","c","t","T"]},D:{priority:90,subPriority:1,parse:function(r,t,e,i){switch(t){case"D":case"DD":return N(B.dayOfYear,r);case"Do":return e.ordinalNumber(r,{unit:"date"});default:return $(t.length,r)}},validate:function(r,t,e){var i=r.getUTCFullYear(),s=Cs(i);return s?t>=1&&t<=366:t>=1&&t<=365},set:function(r,t,e,i){return r.setUTCMonth(0,e),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]},E:{priority:90,parse:function(r,t,e,i){switch(t){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"})||e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return e.day(r,{width:"wide",context:"formatting"})||e.day(r,{width:"abbreviated",context:"formatting"})||e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"})}},validate:function(r,t,e){return t>=0&&t<=6},set:function(r,t,e,i){return r=yi(r,e,i),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["D","i","e","c","t","T"]},e:{priority:90,parse:function(r,t,e,i){var s=function(n){var o=Math.floor((n-1)/7)*7;return(n+i.weekStartsOn+6)%7+o};switch(t){case"e":case"ee":return $(t.length,r,s);case"eo":return e.ordinalNumber(r,{unit:"day",valueCallback:s});case"eee":return e.day(r,{width:"abbreviated",context:"formatting"})||e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"});case"eeeee":return e.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return e.day(r,{width:"wide",context:"formatting"})||e.day(r,{width:"abbreviated",context:"formatting"})||e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"})}},validate:function(r,t,e){return t>=0&&t<=6},set:function(r,t,e,i){return r=yi(r,e,i),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]},c:{priority:90,parse:function(r,t,e,i){var s=function(n){var o=Math.floor((n-1)/7)*7;return(n+i.weekStartsOn+6)%7+o};switch(t){case"c":case"cc":return $(t.length,r,s);case"co":return e.ordinalNumber(r,{unit:"day",valueCallback:s});case"ccc":return e.day(r,{width:"abbreviated",context:"standalone"})||e.day(r,{width:"short",context:"standalone"})||e.day(r,{width:"narrow",context:"standalone"});case"ccccc":return e.day(r,{width:"narrow",context:"standalone"});case"cccccc":return e.day(r,{width:"short",context:"standalone"})||e.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return e.day(r,{width:"wide",context:"standalone"})||e.day(r,{width:"abbreviated",context:"standalone"})||e.day(r,{width:"short",context:"standalone"})||e.day(r,{width:"narrow",context:"standalone"})}},validate:function(r,t,e){return t>=0&&t<=6},set:function(r,t,e,i){return r=yi(r,e,i),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]},i:{priority:90,parse:function(r,t,e,i){var s=function(n){return n===0?7:n};switch(t){case"i":case"ii":return $(t.length,r);case"io":return e.ordinalNumber(r,{unit:"day"});case"iii":return e.day(r,{width:"abbreviated",context:"formatting",valueCallback:s})||e.day(r,{width:"short",context:"formatting",valueCallback:s})||e.day(r,{width:"narrow",context:"formatting",valueCallback:s});case"iiiii":return e.day(r,{width:"narrow",context:"formatting",valueCallback:s});case"iiiiii":return e.day(r,{width:"short",context:"formatting",valueCallback:s})||e.day(r,{width:"narrow",context:"formatting",valueCallback:s});case"iiii":default:return e.day(r,{width:"wide",context:"formatting",valueCallback:s})||e.day(r,{width:"abbreviated",context:"formatting",valueCallback:s})||e.day(r,{width:"short",context:"formatting",valueCallback:s})||e.day(r,{width:"narrow",context:"formatting",valueCallback:s})}},validate:function(r,t,e){return t>=1&&t<=7},set:function(r,t,e,i){return r=yh(r,e,i),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]},a:{priority:80,parse:function(r,t,e,i){switch(t){case"a":case"aa":case"aaa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})||e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"})}},set:function(r,t,e,i){return r.setUTCHours(wi(e),0,0,0),r},incompatibleTokens:["b","B","H","k","t","T"]},b:{priority:80,parse:function(r,t,e,i){switch(t){case"b":case"bb":case"bbb":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})||e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"})}},set:function(r,t,e,i){return r.setUTCHours(wi(e),0,0,0),r},incompatibleTokens:["a","B","H","k","t","T"]},B:{priority:80,parse:function(r,t,e,i){switch(t){case"B":case"BB":case"BBB":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})||e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"})}},set:function(r,t,e,i){return r.setUTCHours(wi(e),0,0,0),r},incompatibleTokens:["a","b","t","T"]},h:{priority:70,parse:function(r,t,e,i){switch(t){case"h":return N(B.hour12h,r);case"ho":return e.ordinalNumber(r,{unit:"hour"});default:return $(t.length,r)}},validate:function(r,t,e){return t>=1&&t<=12},set:function(r,t,e,i){var s=r.getUTCHours()>=12;return s&&e<12?r.setUTCHours(e+12,0,0,0):!s&&e===12?r.setUTCHours(0,0,0,0):r.setUTCHours(e,0,0,0),r},incompatibleTokens:["H","K","k","t","T"]},H:{priority:70,parse:function(r,t,e,i){switch(t){case"H":return N(B.hour23h,r);case"Ho":return e.ordinalNumber(r,{unit:"hour"});default:return $(t.length,r)}},validate:function(r,t,e){return t>=0&&t<=23},set:function(r,t,e,i){return r.setUTCHours(e,0,0,0),r},incompatibleTokens:["a","b","h","K","k","t","T"]},K:{priority:70,parse:function(r,t,e,i){switch(t){case"K":return N(B.hour11h,r);case"Ko":return e.ordinalNumber(r,{unit:"hour"});default:return $(t.length,r)}},validate:function(r,t,e){return t>=0&&t<=11},set:function(r,t,e,i){var s=r.getUTCHours()>=12;return s&&e<12?r.setUTCHours(e+12,0,0,0):r.setUTCHours(e,0,0,0),r},incompatibleTokens:["h","H","k","t","T"]},k:{priority:70,parse:function(r,t,e,i){switch(t){case"k":return N(B.hour24h,r);case"ko":return e.ordinalNumber(r,{unit:"hour"});default:return $(t.length,r)}},validate:function(r,t,e){return t>=1&&t<=24},set:function(r,t,e,i){var s=e<=24?e%24:e;return r.setUTCHours(s,0,0,0),r},incompatibleTokens:["a","b","h","H","K","t","T"]},m:{priority:60,parse:function(r,t,e,i){switch(t){case"m":return N(B.minute,r);case"mo":return e.ordinalNumber(r,{unit:"minute"});default:return $(t.length,r)}},validate:function(r,t,e){return t>=0&&t<=59},set:function(r,t,e,i){return r.setUTCMinutes(e,0,0),r},incompatibleTokens:["t","T"]},s:{priority:50,parse:function(r,t,e,i){switch(t){case"s":return N(B.second,r);case"so":return e.ordinalNumber(r,{unit:"second"});default:return $(t.length,r)}},validate:function(r,t,e){return t>=0&&t<=59},set:function(r,t,e,i){return r.setUTCSeconds(e,0),r},incompatibleTokens:["t","T"]},S:{priority:30,parse:function(r,t,e,i){var s=function(n){return Math.floor(n*Math.pow(10,-t.length+3))};return $(t.length,r,s)},set:function(r,t,e,i){return r.setUTCMilliseconds(e),r},incompatibleTokens:["t","T"]},X:{priority:10,parse:function(r,t,e,i){switch(t){case"X":return le(ae.basicOptionalMinutes,r);case"XX":return le(ae.basic,r);case"XXXX":return le(ae.basicOptionalSeconds,r);case"XXXXX":return le(ae.extendedOptionalSeconds,r);case"XXX":default:return le(ae.extended,r)}},set:function(r,t,e,i){return t.timestampIsSet?r:new Date(r.getTime()-e)},incompatibleTokens:["t","T","x"]},x:{priority:10,parse:function(r,t,e,i){switch(t){case"x":return le(ae.basicOptionalMinutes,r);case"xx":return le(ae.basic,r);case"xxxx":return le(ae.basicOptionalSeconds,r);case"xxxxx":return le(ae.extendedOptionalSeconds,r);case"xxx":default:return le(ae.extended,r)}},set:function(r,t,e,i){return t.timestampIsSet?r:new Date(r.getTime()-e)},incompatibleTokens:["t","T","X"]},t:{priority:40,parse:function(r,t,e,i){return ys(r)},set:function(r,t,e,i){return[new Date(e*1e3),{timestampIsSet:!0}]},incompatibleTokens:"*"},T:{priority:20,parse:function(r,t,e,i){return ys(r)},set:function(r,t,e,i){return[new Date(e),{timestampIsSet:!0}]},incompatibleTokens:"*"}};const Ph=Sh;var Dh=10,kh=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Oh=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,zh=/^'([^]*?)'?$/,Mh=/''/g,Lh=/\S/,Fh=/[a-zA-Z]/;function Nh(r,t,e,i){W(3,arguments);var s=String(r),n=String(t),o=i||{},a=o.locale||ho;if(!a.match)throw new RangeError("locale must contain match property");var l=a.options&&a.options.firstWeekContainsDate,d=l==null?1:H(l),c=o.firstWeekContainsDate==null?d:H(o.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=a.options&&a.options.weekStartsOn,m=u==null?0:H(u),y=o.weekStartsOn==null?m:H(o.weekStartsOn);if(!(y>=0&&y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(n==="")return s===""?Q(e):new Date(NaN);var A={firstWeekContainsDate:c,weekStartsOn:y,locale:a},g=[{priority:Dh,subPriority:-1,set:Rh,index:0}],v,C=n.match(Oh).map(function(h){var p=h[0];if(p==="p"||p==="P"){var f=go[p];return f(h,a.formatLong,A)}return h}).join("").match(kh),w=[];for(v=0;v<C.length;v++){var x=C[v];!o.useAdditionalWeekYearTokens&&yo(x)&&jt(x,n,r),!o.useAdditionalDayOfYearTokens&&bo(x)&&jt(x,n,r);var O=x[0],S=Ph[O];if(S){var Y=S.incompatibleTokens;if(Array.isArray(Y)){for(var te=void 0,se=0;se<w.length;se++){var Ze=w[se].token;if(Y.indexOf(Ze)!==-1||Ze===O){te=w[se];break}}if(te)throw new RangeError("The format string mustn't contain `".concat(te.fullToken,"` and `").concat(x,"` at the same time"))}else if(S.incompatibleTokens==="*"&&w.length)throw new RangeError("The format string mustn't contain `".concat(x,"` and any other token at the same time"));w.push({token:O,fullToken:x});var xe=S.parse(s,x,a.match,A);if(!xe)return new Date(NaN);g.push({priority:S.priority,subPriority:S.subPriority||0,set:S.set,validate:S.validate,value:xe.value,index:g.length}),s=xe.rest}else{if(O.match(Fh))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");if(x==="''"?x="'":O==="'"&&(x=$h(x)),s.indexOf(x)===0)s=s.slice(x.length);else return new Date(NaN)}}if(s.length>0&&Lh.test(s))return new Date(NaN);var Ae=g.map(function(h){return h.priority}).sort(function(h,p){return p-h}).filter(function(h,p,f){return f.indexOf(h)===p}).map(function(h){return g.filter(function(p){return p.priority===h}).sort(function(p,f){return f.subPriority-p.subPriority})}).map(function(h){return h[0]}),Le=Q(e);if(isNaN(Le))return new Date(NaN);var fe=uo(Le,vo(Le)),Ee={};for(v=0;v<Ae.length;v++){var Te=Ae[v];if(Te.validate&&!Te.validate(fe,Te.value,A))return new Date(NaN);var Ie=Te.set(fe,Ee,Te.value,A);Ie[0]?(fe=Ie[0],bh(Ee,Ie[1])):fe=Ie}return fe}function Rh(r,t){if(t.timestampIsSet)return r;var e=new Date(0);return e.setFullYear(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()),e.setHours(r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds(),r.getUTCMilliseconds()),e}function $h(r){return r.match(zh)[1].replace(Mh,"'")}(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Date Picker")};class t{constructor(i){this.initial=i,this.index=0,this.value=0}static compare(i,s){return i.index<s.index?-1:i.index>s.index?1:0}}window.Vaadin.Flow.datepickerConnector={initLazy:e=>r(function(i){if(i.$connector)return;i.$connector={},i.$connector.dayPart=new t("22"),i.$connector.monthPart=new t("11"),i.$connector.yearPart=new t("1987"),i.$connector.parts=[i.$connector.dayPart,i.$connector.monthPart,i.$connector.yearPart],i.addEventListener("blur",r(a=>{!a.target.value&&a.target.invalid&&console.warn("Invalid value in the DatePicker.")}));const s=r(function(a){return a.replace(/[^\x00-\x7F]/g,"")});r(function(){let a="";try{a=i._inputValue}catch{a=i.value||""}return a});const n=r(function(a){try{new Date().toLocaleDateString(a)}catch{a="en-US",console.warn("The locale is not supported, using default locale setting(en-US).")}let l=new Date(Date.UTC(i.$connector.yearPart.initial,i.$connector.monthPart.initial-1,i.$connector.dayPart.initial)),d=s(l.toLocaleDateString(a,{timeZone:"UTC"}));i.$connector.parts.forEach(function(m){m.index=d.indexOf(m.initial)}),i.$connector.parts.sort(t.compare),i.$connector.regex=d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&").replace(i.$connector.dayPart.initial,"(\\d{1,2})").replace(i.$connector.monthPart.initial,"(\\d{1,2})").replace(i.$connector.yearPart.initial,"(\\d{1,4})");function c(m){let y=i._parseDate(`${m.year}-${m.month+1}-${m.day}`);return y.setHours(12),s(y.toLocaleDateString(a))}function u(m){if(m=s(m),m.length==0)return;let y=m.match(i.$connector.regex);if(y&&y.length==4){for(let A=1;A<4;A++)i.$connector.parts[A-1].value=parseInt(y[A]);return{day:i.$connector.dayPart.value,month:i.$connector.monthPart.value-1,year:i.$connector.yearPart.value}}else return!1}return{formatDate:c,parseDate:u}}),o=r(function(a){if(!a||a.length===0)throw new Error("Array of custom date formats is null or empty");function l(c){const u=a[0],m=i._parseDate(`${c.year}-${c.month+1}-${c.day}`);return gh(m,u)}function d(c){for(let u of a){const m=Nh(c,u,new Date);if(co(m))return{day:m.getDate(),month:m.getMonth(),year:m.getFullYear()}}return!1}return{formatDate:l,parseDate:d}});i.$connector.updateI18n=r(function(a,l){const c=l&&l.dateFormats&&l.dateFormats.length>0?o(l.dateFormats):a?n(a):null;i.i18n=Object.assign({},i.i18n,l,c)})})(e)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.Flow=window.Vaadin.Flow||{};window.Vaadin.Flow.dndConnector={__ondragenterListener:function(r){const t=r.currentTarget.__dropEffect;r.currentTarget.hasAttribute("disabled")||(t&&(r.dataTransfer.dropEffect=t),t&&t!=="none"&&(r.currentTarget.classList.contains("v-drag-over-target")?r.currentTarget["__skip-leave"]=!0:r.currentTarget.classList.add("v-drag-over-target"),r.preventDefault(),r.stopPropagation()))},__ondragoverListener:function(r){if(!r.currentTarget.hasAttribute("disabled")){const t=r.currentTarget.__dropEffect;t&&(r.dataTransfer.dropEffect=t),r.preventDefault(),r.stopPropagation()}},__ondragleaveListener:function(r){r.currentTarget["__skip-leave"]?r.currentTarget["__skip-leave"]=!1:r.currentTarget.classList.remove("v-drag-over-target"),r.stopPropagation()},__ondropListener:function(r){const t=r.currentTarget.__dropEffect;t&&(r.dataTransfer.dropEffect=t),r.currentTarget.classList.remove("v-drag-over-target"),r.preventDefault(),r.stopPropagation()},updateDropTarget:function(r){r.__active?(r.addEventListener("dragenter",this.__ondragenterListener,!1),r.addEventListener("dragover",this.__ondragoverListener,!1),r.addEventListener("dragleave",this.__ondragleaveListener,!1),r.addEventListener("drop",this.__ondropListener,!1)):(r.removeEventListener("dragenter",this.__ondragenterListener,!1),r.removeEventListener("dragover",this.__ondragoverListener,!1),r.removeEventListener("dragleave",this.__ondragleaveListener,!1),r.removeEventListener("drop",this.__ondropListener,!1),r.classList.remove("v-drag-over-target"))},__dragstartListener:function(r){r.stopPropagation(),r.dataTransfer.setData("text/plain",""),r.currentTarget.hasAttribute("disabled")?r.preventDefault():(r.currentTarget.__effectAllowed&&(r.dataTransfer.effectAllowed=r.currentTarget.__effectAllowed),r.currentTarget.classList.add("v-dragged"))},__dragendListener:function(r){r.currentTarget.classList.remove("v-dragged")},updateDragSource:function(r){r.draggable?(r.addEventListener("dragstart",this.__dragstartListener,!1),r.addEventListener("dragend",this.__dragendListener,!1)):(r.removeEventListener("dragstart",this.__dragstartListener,!1),r.removeEventListener("dragend",this.__dragendListener,!1))}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class wo extends k{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=oe.debounce(this.__renderDebouncer,ei,()=>this.__render()),so(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=D(this).parentNode;(!t||t.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!D(t).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),oo()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:D(t).querySelector("template");if(!e){let i=new MutationObserver(()=>{if(D(this).querySelector("template"))i.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return i.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=D(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length&&D(this).previousSibling!==e[e.length-1])for(let s=0,n;s<e.length&&(n=e[s]);s++)D(t).insertBefore(n,this)}else{if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){no()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!Si||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}class Hh extends wo{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(mt&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=e._bindTemplate(this.__template,!0);i.runEffects=(s,n,o)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),n=Object.assign(a.changedProps,n)),s(n,o);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:s,changedProps:{}}),o)for(const l in n){const d=pe(l);a.changedProps[d]=this.__dataHost[d]}else Object.assign(a.changedProps,n)},this.__instance=e._stampTemplate(this.__template,i),D(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,Yn(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}class Vh extends wo{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=ze(this.__template,this,{mutableData:!0,forwardHostProp:function(e,i){this.__instance&&(this.if?this.__instance.forwardHostProp(e,i):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[pe(e)]=!0))}})),this.__instance=new this.__ctor,D(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=D(t[0]).parentNode;if(e){e=D(e);for(let i=0,s;i<t.length&&(s=t[i]);i++)e.removeChild(s)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}}const xs=ln?Hh:Vh;customElements.define(xs.is,xs);class As extends k{static get template(){return M`
      <style>
        :host {
          animation: 1ms flow-component-renderer-appear;
        }

        @keyframes flow-component-renderer-appear {
          to {
            opacity: 1;
          }
        }
      </style>
      <slot></slot>
    `}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}ready(){super.ready(),this.addEventListener("click",function(t){this.firstChild&&typeof this.firstChild.click=="function"&&t.target===this&&(t.stopPropagation(),this.firstChild.click())}),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=oe.debounce(this._debouncer,na,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(!this.nodeid||!this.appid)return;const t=this._getRenderedComponent();this.firstChild?t?this.firstChild!==t?(this.replaceChild(t,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble():t?(this.appendChild(t),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(t){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(t)}return null}onComponentRendered(){}_defineFocusTarget(){var t=this._getFirstFocusableDescendant(this.firstChild);t!==null&&t.setAttribute("focus-target","true")}_getFirstFocusableDescendant(t){if(this._isFocusable(t))return t;if(t.hasAttribute&&(t.hasAttribute("disabled")||t.hasAttribute("hidden"))||!t.children)return null;for(var e=0;e<t.children.length;e++){var i=this._getFirstFocusableDescendant(t.children[e]);if(i!==null)return i}return null}_isFocusable(t){return t.hasAttribute&&typeof t.hasAttribute=="function"&&(t.hasAttribute("disabled")||t.hasAttribute("hidden"))?!1:t.tabIndex===0}_onAnimationEnd(t){t.animationName.indexOf("flow-component-renderer-appear")===0&&this._attachRenderedComponentIfAble()}}window.customElements.define(As.is,As);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Co=r=>class extends r{static get properties(){return{resizable:{type:Boolean,value(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1},frozenToEnd:{type:Boolean,value:!1},hidden:{type:Boolean,value:!1},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_firstFrozenToEnd:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:Function,_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:Function,_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _cells.*, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{!this._grid||this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),di(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(i=>{i.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(i=>{i.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(i=>{i.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(i=>i.toggleAttribute("frozen",e)),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(i=>{this._grid&&i.parentElement===this._grid.$.sizer||i.toggleAttribute("frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(i=>i.toggleAttribute("last-frozen",e)),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(i=>{this._grid&&i.parentElement===this._grid.$.sizer||i.toggleAttribute("first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,i=>i.toUpperCase())}_reorderStatusChanged(e){this._allCells.forEach(i=>i.setAttribute("reorder-status",e))}_resizableChanged(e,i){e===void 0||i===void 0||i&&[i].concat(this._emptyCells).forEach(s=>{if(s){const n=s.querySelector('[part~="resize-handle"]');if(n&&s.removeChild(n),e){const o=document.createElement("div");o.setAttribute("part","resize-handle"),s.appendChild(o)}}})}_textAlignChanged(e){if(e===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let i;getComputedStyle(this._grid).direction==="ltr"?e==="start"?i="left":e==="end"&&(i="right"):e==="start"?i="right":e==="end"&&(i="left"),this._allCells.forEach(s=>{s._content.style.textAlign=e,getComputedStyle(s._content).textAlign!==e&&(s._content.style.textAlign=i)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(i=>{i._content.parentNode&&i._content.parentNode.removeChild(i._content)}),this._grid._debouncerHiddenChanged=U.debounce(this._grid._debouncerHiddenChanged,wt,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._updateFrozenColumn&&this._grid._updateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,i,s){const n=[i._content,this];s&&s.item&&n.push(s),e.apply(this,n)}__renderCellsContent(e,i){this.hidden||!this._grid||i.forEach(s=>{if(!s.parentElement)return;const n=this._grid.__getRowModel(s.parentElement);!e||(s._renderer!==e&&this._clearCellContent(s),s._renderer=e,(n.item||e===this._headerRenderer||e===this._footerRenderer)&&this._runRenderer(e,s,n))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,i){!i||!e||(this.__renderCellsContent(e,[i]),this._grid&&this._grid.__updateHeaderFooterRowVisibility(i.parentElement))}_onHeaderRendererOrBindingChanged(e,i,...s){this._renderHeaderCellContent(e,i)}_renderBodyCellsContent(e,i){!i||!e||this.__renderCellsContent(e,i)}_onRendererOrBindingChanged(e,i,...s){this._renderBodyCellsContent(e,i)}_renderFooterCellContent(e,i){!i||!e||(this.__renderCellsContent(e,[i]),this._grid&&this._grid.__updateHeaderFooterRowVisibility(i.parentElement))}_onFooterRendererOrBindingChanged(e,i){this._renderFooterCellContent(e,i)}__setTextContent(e,i){e.textContent!==i&&(e.textContent=i)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){!this.path||this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,i,{item:s}){!this.path||this.__setTextContent(e,this.get(this.path,s))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,i){return e||(i!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}};class $i extends Co(be(k)){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String},autoWidth:{type:Boolean,value:!1},_cells:Array}}}customElements.define($i.is,$i);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */T("vaadin-grid",E`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host([all-rows-visible]) #items {
      min-height: 1px;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 100%;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen],
    [frozen-to-end] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    [frozen-to-end] [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    [frozen-to-end] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    [first-frozen-to-end] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
    }

    /* Hide resize handle if scrolled to end */
    :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
      display: none;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
      right: 0;
      left: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
      right: 0;
      left: auto;
    }
  `,{moduleId:"vaadin-grid-styles"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bh=r=>class extends r{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter(i=>i.some(s=>s.headerRenderer||s.path||s.header)).length}_a11yGetFooterRowCount(e){return e.filter(i=>i.some(s=>s.headerRenderer)).length}_a11yUpdateGridSize(e,i){if(e===void 0||i===void 0)return;const s=i[i.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(i)+this._a11yGetFooterRowCount(i)),this.$.table.setAttribute("aria-colcount",s&&s.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((e,i)=>e.setAttribute("aria-rowindex",i+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((e,i)=>e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+i+1))}_a11yUpdateRowRowindex(e,i){e.setAttribute("aria-rowindex",i+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,i){e.setAttribute("aria-selected",Boolean(i)),Array.from(e.children).forEach(s=>s.setAttribute("aria-selected",Boolean(i)))}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,i){i>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",i+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,i){Array.from(e.children).forEach(s=>{s!==i&&s.setAttribute("aria-controls",i.id)})}_a11yUpdateCellColspan(e,i){e.setAttribute("aria-colspan",Number(i))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let i=e.parentNode;for(;i&&i.localName!=="vaadin-grid-cell-content";)i=i.parentNode;i&&i.assignedSlot&&i.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Uh=r=>class extends r{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const i=e.detail.model,s=i?i.item:null;s&&(this.activeItem=this._itemsEqual(this.activeItem,s)?null:s)}_onClick(e){if(e.defaultPrevented)return;const i=e.composedPath(),s=i[i.indexOf(this.$.table)-3];if(!s||s.getAttribute("part").indexOf("details-cell")>-1)return;const n=s._content,o=this.getRootNode().activeElement;!n.contains(o)&&!this._isFocusable(e.target)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(s.parentElement)}}))}_isFocusable(e){return xo(e)}},xo=r=>{if(!r.parentNode)return!1;const e=Array.from(r.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter(i=>i.getAttribute("part")!=="cell body-cell").includes(r);return!r.disabled&&e};function Ve(r,t){return r.split(".").reduce((e,i)=>e[i],t)}function Es(r,t,e){if(e.length===0)return!1;let i=!0;return r.forEach(({path:s})=>{if(!s||s.indexOf(".")===-1)return;const n=s.replace(/\.[^.]*$/,"");Ve(n,e[0])===void 0&&(console.warn(`Path "${s}" used for ${t} does not exist in all of the items, ${t} is disabled.`),i=!1)}),i}function Wh(r,t){return r.sort((e,i)=>t.map(s=>s.direction==="asc"?Ts(Ve(s.path,e),Ve(s.path,i)):s.direction==="desc"?Ts(Ve(s.path,i),Ve(s.path,e)):0).reduce((s,n)=>s!==0?s:n,0))}function Kt(r){return[void 0,null].indexOf(r)>=0?"":isNaN(r)?r.toString():r}function Ts(r,t){return r=Kt(r),t=Kt(t),r<t?-1:r>t?1:0}function qh(r,t){return r.filter(e=>t.every(i=>{const s=Kt(Ve(i.path,e)),n=Kt(i.value).toString().toLowerCase();return s.toString().toLowerCase().includes(n)}))}const Yh=r=>(t,e)=>{let i=r?[...r]:[];t.filters&&Es(t.filters,"filtering",i)&&(i=qh(i,t.filters)),Array.isArray(t.sortOrders)&&t.sortOrders.length&&Es(t.sortOrders,"sorting",i)&&(i=Wh(i,t.sortOrders));const s=Math.min(i.length,t.pageSize),n=t.page*s,o=n+s,a=i.slice(n,o);e(a,i.length)};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gh=r=>class extends r{static get properties(){return{items:Array}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"]}__setArrayDataProvider(e){const i=Yh(this.items);i.__items=e,this.setProperties({_arrayDataProvider:i,size:e.length,dataProvider:i})}__dataProviderOrItemsChanged(e,i,s){!s||(this._arrayDataProvider?e!==this._arrayDataProvider?this.setProperties({_arrayDataProvider:void 0,items:void 0}):i?this._arrayDataProvider.__items===i?(this.clearCache(),this.size=this._effectiveSize):this.__setArrayDataProvider(i):(this.setProperties({_arrayDataProvider:void 0,dataProvider:void 0,size:0}),this.clearCache()):i&&this.__setArrayDataProvider(i))}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ao(r,t,e){let i=1;r.forEach(s=>{i%10===0&&(i+=1),s._order=e+i*t,i+=1})}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jh=r=>class extends r{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready(),Z(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&e.preventDefault()}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const i=e.composedPath(),s=i[i.indexOf(this.$.header)-2];if(!s||!s._content||s._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const i=e.composedPath&&e.composedPath();if(i&&i.filter(n=>n.hasAttribute&&n.hasAttribute("draggable"))[0])return;const s=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!s||s.getAttribute("part").indexOf("header-cell")===-1)){for(this.toggleAttribute("reordering",!0),this._draggedColumn=s._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(s),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(!i)return;const s=this._getTargetColumn(i,this._draggedColumn);this._isSwapAllowed(this._draggedColumn,s)&&this._isSwappableByPosition(s,e.detail.x)&&this._swapColumnOrders(this._draggedColumn,s),this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){!this._draggedColumn||(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter(e=>!e.hidden).sort((e,i)=>e._order-i._order)}_cellFromPoint(e,i){e=e||0,i=i||0,this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const s=this.shadowRoot.elementFromPoint(e,i);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),s&&s._column)return s}_updateGhostPosition(e,i){const s=this._reorderGhost.getBoundingClientRect(),n=e-s.width/2,o=i-s.height/2,a=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=a-(s.left-n),this._reorderGhost._top=l-(s.top-o),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const i=this._reorderGhost;i.textContent=e._content.innerText;const s=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(n=>{i.style[n]=s[n]}),i}_updateOrders(e,i){e===void 0||i===void 0||(e[0].forEach(s=>{s._order=0}),Ao(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,i){Array.from(e.parentNode.children).filter(s=>/column/.test(s.localName)&&this._isSwapAllowed(s,e)).forEach(s=>{s._reorderStatus=i})}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,i=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:i>0&&(this.$.table.scrollLeft-=i/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,i){if(e&&i){const s=e!==i,n=e.parentElement===i.parentElement,o=e.frozen&&i.frozen||e.frozenToEnd&&i.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!i.frozen&&!i.frozenToEnd;return s&&n&&o}}_isSwappableByPosition(e,i){const s=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter(a=>e.contains(a._column))[0],n=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),o=s.getBoundingClientRect();return o.left>n.left?i>o.right-n.width:i<o.left+n.width}_swapColumnOrders(e,i){const s=e._order;e._order=i._order,i._order=s,this._updateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,i){if(e&&i){let s=e._column;for(;s.parentElement!==i.parentElement&&s!==this;)s=s.parentElement;return s.parentElement===i.parentElement?s:e._column}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kh=r=>class extends r{ready(){super.ready();const e=this.$.scroller;Z(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",i=>e.hasAttribute("column-resizing")&&i.preventDefault()),e.addEventListener("contextmenu",i=>i.target.getAttribute("part")==="resize-handle"&&i.preventDefault()),e.addEventListener("mousedown",i=>i.target.getAttribute("part")==="resize-handle"&&i.preventDefault())}_onHeaderTrack(e){const i=e.target;if(i.getAttribute("part")==="resize-handle"){let n=i.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);n.localName==="vaadin-grid-column-group";)n=n._childColumns.slice(0).sort((c,u)=>c._order-u._order).filter(c=>!c.hidden).pop();const o=e.detail.x,a=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),l=a.filter(c=>c._column===n)[0];if(l.offsetWidth){const c=getComputedStyle(l._content),u=10+parseInt(c.paddingLeft)+parseInt(c.paddingRight)+parseInt(c.borderLeftWidth)+parseInt(c.borderRightWidth)+parseInt(c.marginLeft)+parseInt(c.marginRight);let m;const y=l.offsetWidth,A=l.getBoundingClientRect();l.hasAttribute("frozen-to-end")?m=y+(this.__isRTL?o-A.right:A.left-o):m=y+(this.__isRTL?A.left-o:o-A.right),n.width=`${Math.max(u,m)}px`,n.flexGrow=0}a.sort((c,u)=>c._column._order-u._column._order).forEach((c,u,m)=>{u<m.indexOf(l)&&(c._column.width=`${c.offsetWidth}px`,c._column.flexGrow=0)});const d=this._frozenToEndCells[0];if(d&&this.$.table.scrollWidth>this.$.table.offsetWidth){const c=d.getBoundingClientRect(),u=o-(this.__isRTL?c.right:c.left);(this.__isRTL&&u<=0||!this.__isRTL&&u>=0)&&(this.$.table.scrollLeft+=u)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:n}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ie=class Eo{constructor(t,e,i){this.grid=t,this.parentCache=e,this.parentItem=i,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(t=>this.itemCaches[t].isLoading())[0])}getItemForIndex(t){const{cache:e,scaledIndex:i}=this.getCacheAndIndex(t);return e.items[i]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((t,e)=>{const i=this.itemCaches[e];return i.updateSize(),t+i.effectiveSize},0):0}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){const e=new Eo(this.grid,this,this.items[t]);this.itemCaches[t]=e,this.grid._loadPage(0,e)}}getCacheAndIndex(t){let e=t;const i=Object.keys(this.itemCaches);for(let s=0;s<i.length;s++){const n=Number(i[s]),o=this.itemCaches[n];if(e<=n)return{cache:this,scaledIndex:e};if(e<=n+o.effectiveSize)return o.getCacheAndIndex(e-n-1);e-=o.effectiveSize}return{cache:this,scaledIndex:e}}},Qh=r=>class extends r{static get properties(){return{size:{type:Number,notify:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value(){return new ie(this)}},_hasData:{type:Boolean,value:!1},itemHasChildrenPath:{type:String,value:"children"},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems.*)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){const i=e-this._cache.size;this._cache.size+=i,this._cache.effectiveSize+=i,this._effectiveSize=this._cache.effectiveSize}_getItem(e,i){if(e>=this._effectiveSize)return;i.index=e;const{cache:s,scaledIndex:n}=this._cache.getCacheAndIndex(e),o=s.items[n];o?(i.toggleAttribute("loading",!1),this._updateItem(i,o),this._isExpanded(o)&&s.ensureSubCacheForScaledIndex(n)):(i.toggleAttribute("loading",!0),this._loadPage(this._getPageForIndex(n),s))}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this.__updateVisibleRows()}__computeExpandedKeys(e,i){const s=i.base||[],n=new Set;return s.forEach(o=>{n.add(this.getItemId(o))}),n}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(i=>!this._itemsEqual(i,e)))}_getIndexLevel(e){let{cache:i}=this._cache.getCacheAndIndex(e),s=0;for(;i.parentCache;)i=i.parentCache,s+=1;return s}_loadPage(e,i){if(!i.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),i.pendingRequests[e]=!0;const s={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:i.parentItem};this.dataProvider(s,(n,o)=>{o!==void 0?i.size=o:s.parentItem&&(i.size=n.length);const a=Array.from(this.$.items.children).map(l=>l._item);n.forEach((l,d)=>{const c=e*this.pageSize+d;i.items[c]=l,this._isExpanded(l)&&a.indexOf(l)>-1&&i.ensureSubCacheForScaledIndex(c)}),this._hasData=!0,delete i.pendingRequests[e],this._debouncerApplyCachedData=U.debounce(this._debouncerApplyCachedData,re.after(0),()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter(l=>!l.hidden).forEach(l=>{this._cache.getItemForIndex(l.index)&&this._getItem(l.index,l)}),this.__scrollToPendingIndex()}),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived()})}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new ie(this),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this.__updateVisibleRows(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(e,i){i!==void 0&&e!==i&&this.clearCache()}_checkSize(){this.size===void 0&&this._effectiveSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`\u2019s `callback` call.")}_dataProviderChanged(e,i){i!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=U.debounce(this._debouncerCheckSize,re.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(e,i){return this.getItemId(e)===this.getItemId(i)}_getItemIndexInArray(e,i){let s=-1;return i.forEach((n,o)=>{this._itemsEqual(n,e)&&(s=o)}),s}scrollToIndex(e){super.scrollToIndex(e),!isNaN(e)&&(this._cache.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndex=e)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){const e=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this.scrollToIndex(e)}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const at={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},me={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},Xh=r=>class extends r{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){let i=e.target;if(i.localName==="vaadin-grid-cell-content"&&(i=i.assignedSlot.parentNode.parentNode),i.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const a=i.style.transform;i.style.top=/translateY\((.*)\)/.exec(a)[1],i.style.transform="none",requestAnimationFrame(()=>{i.style.top="",i.style.transform=a})}const s=i.getBoundingClientRect();this._ios?e.dataTransfer.setDragImage(i):e.dataTransfer.setDragImage(i,e.clientX-s.left,e.clientY-s.top);let n=[i];this._isSelected(i._item)&&(n=this.__getViewportRows().filter(a=>this._isSelected(a._item)).filter(a=>!this.dragFilter||this.dragFilter(this.__getRowModel(a)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(n)),i.setAttribute("dragstart",n.length>1?n.length:""),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-s.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-s.top+10}px`),requestAnimationFrame(()=>{i.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})});const o=new CustomEvent("grid-dragstart",{detail:{draggedItems:n.map(a=>a._item),setDragData:(a,l)=>e.dataTransfer.setData(a,l),setDraggedItemsCount:a=>i.setAttribute("dragstart",a)}});o.originalEvent=e,this.dispatchEvent(o)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const i=new CustomEvent("grid-dragend");i.originalEvent=e,this.dispatchEvent(i)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let i=e.composedPath().filter(s=>s.localName==="tr")[0];if(!this._effectiveSize||this.dropMode===at.ON_GRID)this._dropLocation=me.EMPTY;else if(!i||i.parentNode!==this.$.items){if(i)return;if(this.dropMode===at.BETWEEN||this.dropMode===at.ON_TOP_OR_BETWEEN)i=Array.from(this.$.items.children).filter(s=>!s.hidden).pop(),this._dropLocation=me.BELOW;else return}else{const s=i.getBoundingClientRect();if(this._dropLocation=me.ON_TOP,this.dropMode===at.BETWEEN){const n=e.clientY-s.top<s.bottom-e.clientY;this._dropLocation=n?me.ABOVE:me.BELOW}else this.dropMode===at.ON_TOP_OR_BETWEEN&&(e.clientY-s.top<s.height/3?this._dropLocation=me.ABOVE:e.clientY-s.top>s.height/3*2&&(this._dropLocation=me.BELOW))}if(i&&i.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===me.EMPTY?this.toggleAttribute("dragover",!0):i?(this._dragOverItem=i._item,i.getAttribute("dragover")!==this._dropLocation&&i.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const i=this.$.header.getBoundingClientRect().bottom,s=this.$.footer.getBoundingClientRect().top,n=i-e+this.__dndAutoScrollThreshold,o=e-s+this.__dndAutoScrollThreshold;let a=0;if(o>0?a=o*2:n>0&&(a=-n*2),a){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=a,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(s=>{const n=s.getBoundingClientRect();return n.bottom>e&&n.top<i})}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach(e=>e.removeAttribute("dragover"))}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const i=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(n=>({type:n,data:e.dataTransfer.getData(n)}));this._clearDragStyles();const s=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:i}});s.originalEvent=e,this.dispatchEvent(s)}}__formatDefaultTransferData(e){return e.map(i=>Array.from(i.children).filter(s=>!s.hidden&&s.getAttribute("part").indexOf("details-cell")===-1).sort((s,n)=>s._column._order>n._column._order?1:-1).map(s=>s._content.textContent.trim()).filter(s=>s).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>{this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,i){const s=this.loading||e.hasAttribute("loading"),n=!this.rowsDraggable||s||this.dragFilter&&!this.dragFilter(i),o=!this.dropMode||s||this.dropFilter&&!this.dropFilter(i);Array.from(e.children).map(l=>l._content).forEach(l=>{n?l.removeAttribute("draggable"):l.setAttribute("draggable",!0)}),e.toggleAttribute("drag-disabled",!!n),e.toggleAttribute("drop-disabled",!!o)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function To(r,t){if(!r||!t||r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]instanceof Array&&t[e]instanceof Array){if(!To(r[e],t[e]))return!1}else if(r[e]!==t[e])return!1;return!0}const Jh=r=>class extends r{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){for(let i=0;i<e.length;i++)if(e[i].localName==="vaadin-grid-column-group")return!0;return!1}_getChildColumns(e){return X.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map(i=>i.localName==="vaadin-grid-column-group"?this._getChildColumns(i):[i]).reduce((i,s)=>i.concat(s),[])}_getColumnTree(){const e=X.getFlattenedNodes(this).filter(this._isColumnElement),i=[e];let s=e;for(;this._hasColumnGroups(s);)s=this._flattenColumnGroups(s),i.push(s);return i}_updateColumnTree(){const e=this._getColumnTree();To(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new X(this,e=>{const i=s=>s.filter(this._isColumnElement).length>0;if(i(e.addedNodes)||i(e.removedNodes)){const s=e.removedNodes.flatMap(o=>o._allCells),n=o=>s.filter(a=>a._content.contains(o)).length;this.__removeSorters(this._sorters.filter(n)),this.__removeFilters(this._filters.filter(n)),this._updateColumnTree()}this._debouncerCheckImports=U.debounce(this._debouncerCheckImports,re.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{const i=this.querySelector(e);i&&!(i instanceof k)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((i,s)=>i._column._order-s._column._order).forEach((i,s,n)=>{i.toggleAttribute("first-column",s===0),i.toggleAttribute("last-column",s===n.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zh=r=>class extends r{getEventContext(e){const i={},s=e.__composedPath||e.composedPath(),n=s[s.indexOf(this.$.table)-3];return n&&(i.section=["body","header","footer","details"].filter(o=>n.getAttribute("part").indexOf(o)>-1)[0],n._column&&(i.column=n._column),(i.section==="body"||i.section==="details")&&Object.assign(i,this.__getRowModel(n.parentElement))),i}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const eu=r=>class extends r{static get properties(){return{_filters:{type:Array,value:()=>[]}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(i=>e.indexOf(i)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tu=r=>class extends r{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(i=>{e&&this.__isCell(this[i])?this[i]=this[i].parentElement:!e&&this.__isRow(this[i])&&(this[i]=this[i].firstElementChild)})}_focusableChanged(e,i){i&&i.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getVisibleRows().forEach(i=>{if(i.index===this._focusedItemIndex){if(this.__rowFocusMode)this._itemsFocusable=i;else if(this._itemsFocusable.parentElement){const s=[...this._itemsFocusable.parentElement.children].indexOf(this._itemsFocusable);this._itemsFocusable=i.children[s]}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const i=e.key;let s;switch(i){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":s="Navigation";break;case"Enter":case"Escape":case"F2":s="Interaction";break;case"Tab":s="Tab";break;case" ":s="Space";break}this._detectInteracting(e),this.interacting&&s!=="Interaction"&&(s=void 0),s&&this[`_on${s}KeyDown`](e,i)}_ensureScrolledToIndex(e){[...this.$.items.children].find(s=>s.index===e)?this.__scrollIntoViewport(e):this.scrollToIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const i=e._item;return i&&this.get(this.itemHasChildrenPath,i)&&!this._isExpanded(i)}}__isRowCollapsible(e){return this._isExpanded(e._item)}__isDetailsCell(e){return e.matches('[part~="details-cell"]')}__isCell(e){return e instanceof HTMLTableCellElement}__isRow(e){return e instanceof HTMLTableRowElement}__getIndexOfChildElement(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}_onNavigationKeyDown(e,i){e.preventDefault();const s=this._lastVisibleIndex-this._firstVisibleIndex-1;let n=0,o=0;switch(i){case"ArrowRight":n=this.__isRTL?-1:1;break;case"ArrowLeft":n=this.__isRTL?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?o=-1/0:n=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?o=1/0:n=1/0;break;case"ArrowDown":o=1;break;case"ArrowUp":o=-1;break;case"PageDown":o=s;break;case"PageUp":o=-s;break}const a=e.composedPath().find(u=>this.__isRow(u)),l=e.composedPath().find(u=>this.__isCell(u));if(this.__rowFocusMode&&!a||!this.__rowFocusMode&&!l)return;const d=this.__isRTL?"ArrowLeft":"ArrowRight",c=this.__isRTL?"ArrowRight":"ArrowLeft";if(i===d){if(this.__rowFocusMode){if(this.__isRowExpandable(a)){this.expandItem(a._item);return}this.__rowFocusMode=!1,this._onCellNavigation(a.firstElementChild,0,0);return}}else if(i===c)if(this.__rowFocusMode){if(this.__isRowCollapsible(a)){this.collapseItem(a._item);return}}else{const u=[...a.children].sort((m,y)=>m._order-y._order);if(l===u[0]||this.__isDetailsCell(l)){this.__rowFocusMode=!0,this._onRowNavigation(a,0);return}}this.__rowFocusMode?this._onRowNavigation(a,o):this._onCellNavigation(l,n,o)}_onRowNavigation(e,i){const{dstRow:s}=this.__navigateRows(i,e);s&&s.focus()}__getIndexInGroup(e,i){return e.parentNode===this.$.items?i!==void 0?i:e.index:this.__getIndexOfChildElement(e)}__navigateRows(e,i,s){const n=this.__getIndexInGroup(i,this._focusedItemIndex),o=i.parentNode,a=(o===this.$.items?this._effectiveSize:o.children.length)-1;let l=Math.max(0,Math.min(n+e,a));if(o!==this.$.items){if(l>n)for(;l<a&&o.children[l].hidden;)l+=1;else if(l<n)for(;l>0&&o.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:o.children[l]}}let d=!1;if(s){const c=this.__isDetailsCell(s);if(o===this.$.items){const u=i._item,m=this._cache.getItemForIndex(l);c?d=e===0:d=e===1&&this._isDetailsOpened(u)||e===-1&&l!==n&&this._isDetailsOpened(m),d!==c&&(e===1&&d||e===-1&&!d)&&(l=n)}}return this._ensureScrolledToIndex(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...o.children].find(c=>!c.hidden&&c.index===l),dstIsRowDetails:d}}_onCellNavigation(e,i,s){const n=e.parentNode,{dstRow:o,dstIsRowDetails:a}=this.__navigateRows(s,n,e);if(!o)return;const l=this.__getIndexOfChildElement(e),d=this.__isDetailsCell(e),c=n.parentNode,u=this.__getIndexInGroup(n,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(d?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(c,u).filter(m=>!m.hidden)[l]._order),a)[...o.children].find(y=>this.__isDetailsCell(y)).focus();else{const m=this.__getIndexInGroup(o,this._focusedItemIndex),y=this._getColumns(c,m).filter(S=>!S.hidden),A=y.map(S=>S._order).sort((S,Y)=>S-Y),g=A.length-1,v=A.indexOf(A.slice(0).sort((S,Y)=>Math.abs(S-this._focusedColumnOrder)-Math.abs(Y-this._focusedColumnOrder))[0]),C=s===0&&d?v:Math.max(0,Math.min(v+i,g));C!==v&&(this._focusedColumnOrder=void 0);const x=y.reduce((S,Y,te)=>(S[Y._order]=te,S),{})[A[C]],O=o.children[x];this._scrollHorizontallyToCell(O),O.focus()}}_onInteractionKeyDown(e,i){const s=e.composedPath()[0],n=s.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(s.type);let o;switch(i){case"Enter":o=this.interacting?!n:!0;break;case"Escape":o=!1;break;case"F2":o=!this.interacting;break}const{cell:a}=this._getGridEventLocation(e);if(this.interacting!==o&&a!==null)if(o){const l=a._content.querySelector("[focus-target]")||[...a._content.querySelectorAll("*")].find(d=>this._isFocusable(d));l&&(e.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,a.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0)}_predictFocusStepTarget(e,i){const s=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let n=s.indexOf(e);for(n+=i;n>=0&&n<=s.length-1;){let o=s[n];if(o&&!this.__rowFocusMode&&(o=s[n].parentNode),!o||o.hidden)n+=i;else break}return s[n]}_onTabKeyDown(e){const i=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(!!i){if(e.stopPropagation(),i===this.$.table)this.$.table.focus();else if(i===this.$.focusexit)this.$.focusexit.focus();else if(i===this._itemsFocusable){let s=i;const n=this.__isRow(i)?i:i.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),n.index!==this._focusedItemIndex&&this.__isCell(i)){const o=Array.from(n.children).indexOf(this._itemsFocusable),a=Array.from(this.$.items.children).find(l=>!l.hidden&&l.index===this._focusedItemIndex);a&&(s=a.children[o])}e.preventDefault(),s.focus()}else e.preventDefault(),i.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(e){e.preventDefault();const i=e.composedPath()[0],s=this.__isRow(i);(s||!i._content||!i._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(s?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(s?i:i.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/.test(e.key)||this.interacting)return;e.preventDefault();const i=e.composedPath()[0];if(i._content&&i._content.firstElementChild){const s=this.hasAttribute("navigating");i._content.firstElementChild.click(),this.toggleAttribute("navigating",s)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const i=e.composedPath()[0];i===this.$.table||i===this.$.focusexit?(this._predictFocusStepTarget(i,i===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e)}_onContentFocusIn(e){const{section:i,cell:s,row:n}=this._getGridEventLocation(e);if(this._detectInteracting(e),i&&(s||n)&&(this._activeRowGroup=i,this.$.header===i?this._headerFocusable=this.__rowFocusMode?n:s:this.$.items===i?this._itemsFocusable=this.__rowFocusMode?n:s:this.$.footer===i&&(this._footerFocusable=this.__rowFocusMode?n:s),s)){const o=this.getEventContext(e);s.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:o}}))}this._detectFocusedItemIndex(e)}_detectInteracting(e){const i=e.composedPath().some(s=>s.localName==="vaadin-grid-cell-content");this._setInteracting(i),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(e){const{section:i,row:s}=this._getGridEventLocation(e);i===this.$.items&&(this._focusedItemIndex=s.index)}_updateGridSectionFocusTarget(e){if(!e)return;const i=this._getGridSectionFromFocusTarget(e),s=this.interacting&&i===this._activeRowGroup;e.tabIndex=s?-1:0}_preventScrollerRotatingCellFocus(e,i){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),i===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(e,i){let s=this._columnTree.length-1;return e===this.$.header?s=i:e===this.$.footer&&(s=this._columnTree.length-1-i),this._columnTree[s]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const i=[...this.$[e].children].find(n=>n.offsetHeight),s=i?[...i.children].find(n=>!n.hidden):null;i&&s&&(this[`_${e}Focusable`]=this.__rowFocusMode?i:s)}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),i=e?[...e.children].find(s=>!s.hidden):null;i&&e&&(delete this._focusedColumnOrder,this._itemsFocusable=this.__rowFocusMode?e:i)}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||this.__isDetailsCell(e))return;const i=e.getBoundingClientRect(),s=e.parentNode,n=Array.from(s.children).indexOf(e),o=this.$.table.getBoundingClientRect();let a=o.left,l=o.right;for(let d=n-1;d>=0;d--){const c=s.children[d];if(!(c.hasAttribute("hidden")||this.__isDetailsCell(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){a=c.getBoundingClientRect().right;break}}for(let d=n+1;d<s.children.length;d++){const c=s.children[d];if(!(c.hasAttribute("hidden")||this.__isDetailsCell(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){l=c.getBoundingClientRect().left;break}}i.left<a&&(this.$.table.scrollLeft+=Math.round(i.left-a)),i.right>l&&(this.$.table.scrollLeft+=Math.round(i.right-l))}_getGridEventLocation(e){const i=e.composedPath(),s=i.indexOf(this.$.table),n=s>=1?i[s-1]:null,o=s>=2?i[s-2]:null,a=s>=3?i[s-3]:null;return{section:n,row:o,cell:a}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const iu=r=>class extends r{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[]},rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:i})=>{this._updateDetailsCellHeight(i.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){!e||this._columnTree&&Array.from(this.$.items.children).forEach(i=>{if(!i.querySelector("[part~=details-cell]")){this._updateRow(i,this._columnTree[this._columnTree.length-1]);const s=this._isDetailsOpened(i._item);this._toggleDetailsCell(i,s)}})}_detailsOpenedItemsChanged(e,i){e.path==="detailsOpenedItems.length"||!e.value||[...this.$.items.children].forEach(s=>{if(s.hasAttribute("details-opened")){this._updateItem(s,s._item);return}i&&this._isDetailsOpened(s._item)&&this._updateItem(s,s._item)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,i){const s=e.querySelector('[part~="details-cell"]');!s||(s.hidden=!i,!s.hidden&&this.rowDetailsRenderer&&(s._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const i=e.querySelector('[part~="details-cell"]');!i||(i.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${i.offsetHeight}px`))}_updateDetailsCellHeights(){[...this.$.items.children].forEach(e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(i=>!this._itemsEqual(i,e)))}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rt=new ResizeObserver(r=>{setTimeout(()=>{r.forEach(t=>{t.target.resizables?t.target.resizables.forEach(e=>{e._onResize(t.contentRect)}):t.target._onResize(t.contentRect)})})}),yr=V(r=>class extends r{connectedCallback(){if(super.connectedCallback(),Rt.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,Rt.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),Rt.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const i=e.resizables;i&&(i.delete(this),i.size===0&&Rt.unobserve(e)),this.__parent=null}}get _observeParent(){return!1}_onResize(e){}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ru={SCROLLING:500},su=r=>class extends yr(r){static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _scrollLeft(){return this.$.table.scrollLeft}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const i=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[i-1]}),this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){this._updateOverflow(),this.__updateHorizontalScrollPosition()}scrollToIndex(e){e=Math.min(this._effectiveSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const i=[...this.$.items.children].find(s=>s.index===e);if(i){const s=i.getBoundingClientRect(),n=this.$.footer.getBoundingClientRect().top,o=this.$.header.getBoundingClientRect().bottom;s.bottom>n?this.$.table.scrollTop+=s.bottom-n:s.top<o&&(this.$.table.scrollTop-=o-s.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=U.debounce(this._debounceScrolling,re.after(ru.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this._updateOverflow()}_updateOverflow(){let e="";const i=this.$.table;i.scrollTop<i.scrollHeight-i.clientHeight&&(e+=" bottom"),i.scrollTop>0&&(e+=" top");const s=this.__getNormalizedScrollLeft(i);s>0&&(e+=" start"),s<i.scrollWidth-i.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/gi,n=>n==="start"?"end":"start")),i.scrollLeft<i.scrollWidth-i.clientWidth&&(e+=" right"),i.scrollLeft>0&&(e+=" left"),this._debounceOverflow=U.debounce(this._debounceOverflow,wt,()=>{const n=e.trim();n.length>0&&this.getAttribute("overflow")!==n?this.setAttribute("overflow",n):n.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")})}_frozenCellsChanged(){this._debouncerCacheElements=U.debounce(this._debouncerCacheElements,Ct,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._updateFrozenColumn()}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((n,o)=>n._order-o._order);let i,s;for(let n=0;n<e.length;n++){const o=e[n];o._lastFrozen=!1,o._firstFrozenToEnd=!1,s===void 0&&o.frozenToEnd&&!o.hidden&&(s=n),o.frozen&&!o.hidden&&(i=n)}i!==void 0&&(e[i]._lastFrozen=!0),s!==void 0&&(e[s]._firstFrozenToEnd=!0)}__updateHorizontalScrollPosition(){const e=this.$.table.scrollWidth,i=this.$.table.clientWidth,s=Math.max(0,this.$.table.scrollLeft),n=this.__getNormalizedScrollLeft(this.$.table),o=`translate(${-s}px, 0)`;this.$.header.style.transform=o,this.$.footer.style.transform=o,this.$.items.style.transform=o;const a=this.__isRTL?n+i-e:s,l=`translate(${a}px, 0)`;for(let u=0;u<this._frozenCells.length;u++)this._frozenCells[u].style.transform=l;const c=`translate(${this.__isRTL?n:s+i-e}px, 0)`;for(let u=0;u<this._frozenToEndCells.length;u++)this._frozenToEndCells[u].style.transform=c;this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-a}px`)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nu=r=>class extends r{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems.*)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems.*)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(i=>!this._itemsEqual(i,e)))}_toggleItem(e){this._isSelected(e)?this.deselectItem(e):this.selectItem(e)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,i){const s=i.base||[],n=new Set;return s.forEach(o=>{n.add(this.getItemId(o))}),n}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Is="prepend";const ou=r=>class extends r{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>Is},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){Is=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const i=e.target;e.stopPropagation(),i._grid=this,this.__updateSorter(i),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(i=>e.indexOf(i)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e,i)=>{e._order=this._sorters.length>1?i:null})}__appendSorter(e){e.direction?this._sorters.includes(e)||this._sorters.push(e):this._removeArrayItem(this._sorters,e),this.__updateSortOrders()}__prependSorter(e){this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders()}__updateSorter(e){if(!(!e.direction&&this._sorters.indexOf(e)===-1)){if(e._order=null,this.multiSort)this.multiSortPriority==="append"?this.__appendSorter(e):this.__prependSorter(e);else if(e.direction){const i=this._sorters.filter(s=>s!==e);this._sorters=[e],i.forEach(s=>{s._order=null,s.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,i){const s=e.indexOf(i);s>-1&&e.splice(s,1)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const au=r=>class extends r{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter(e=>!e.hidden&&!e.hasAttribute("loading")).forEach(e=>this._generateCellClassNames(e,this.__getRowModel(e)))}_generateCellClassNames(e,i){Array.from(e.children).forEach(s=>{if(s.__generatedClasses&&s.__generatedClasses.forEach(n=>s.classList.remove(n)),this.cellClassNameGenerator){const n=this.cellClassNameGenerator(s._column,i);s.__generatedClasses=n&&n.split(" ").filter(o=>o.length>0),s.__generatedClasses&&s.__generatedClasses.forEach(o=>s.classList.add(o))}})}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class pt extends K(R(Qh(Gh(Jh(Uh(su(nu(ou(iu(tu(Bh(eu(jh(Kh(Zh(Xh(au(sr(k))))))))))))))))))){static get template(){return M`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)","_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:Gs},_ios:{type:Boolean,value:It},_firefox:{type:Boolean,value:Ys},_android:{type:Boolean,value:qo},_touchDevice:{type:Boolean,value:ft},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1}__getFirstVisibleItem(){return this._getVisibleRows().find(t=>this._isInViewport(t))}get _firstVisibleIndex(){const t=this.__getFirstVisibleItem();return t?t.index:void 0}__getLastVisibleItem(){return this._getVisibleRows().reverse().find(t=>this._isInViewport(t))}get _lastVisibleIndex(){const t=this.__getLastVisibleItem();return t?t.index:void 0}_isInViewport(t){const e=this.$.table.getBoundingClientRect(),i=t.getBoundingClientRect(),s=this.$.header.getBoundingClientRect().height,n=this.$.footer.getBoundingClientRect().height;return i.bottom>e.top+s&&i.top<e.bottom-n}_getVisibleRows(){return Array.from(this.$.items.children).filter(t=>!t.hidden).sort((t,e)=>t.index-e.index)}ready(){super.ready(),this.__virtualizer=new eo({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>this.__updateFooterPositioning())).observe(this.$.footer),di(this)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t==="dir"&&(this.__isRTL=i==="rtl")}__getBodyCellCoordinates(t){if(this.$.items.contains(t)&&t.localName==="td")return{item:t.parentElement._item,column:t._column}}__focusBodyCell({item:t,column:e}){const i=this._getVisibleRows().find(n=>n._item===t),s=i&&[...i.children].find(n=>n._column===e);s&&s.focus()}_effectiveSizeChanged(t,e,i,s){if(e&&i&&s){const n=this.shadowRoot.activeElement,o=this.__getBodyCellCoordinates(n);e.size=t,e.update(),e.flush(),o&&n.parentElement.hidden&&this.__focusBodyCell(o),this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(t=>t.clientHeight).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}__getIntrinsicWidth(t){const e=t.width,i=t.flexGrow;t.width="auto",t.flexGrow=0;const s=t._allCells.filter(n=>!this.$.items.contains(n)||this._isInViewport(n.parentElement)).reduce((n,o)=>Math.max(n,o.offsetWidth+1),0);return t.flexGrow=i,t.width=e,s}__getDistributedWidth(t,e){if(t==null||t===this)return 0;const i=Math.max(this.__getIntrinsicWidth(t),this.__getDistributedWidth(t.parentElement,t));if(!e)return i;const s=t,n=i,o=s._visibleChildColumns.map(c=>this.__getIntrinsicWidth(c)).reduce((c,u)=>c+u,0),a=Math.max(0,n-o),d=this.__getIntrinsicWidth(e)/o*a;return this.__getIntrinsicWidth(e)+d}_recalculateColumnWidths(t){this.__virtualizer.flush(),t.forEach(e=>{e.width=`${this.__getDistributedWidth(e)}px`})}recalculateColumnWidths(){if(!!this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const t=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(t)}}_createScrollerRows(t){const e=[];for(let i=0;i<t;i++){const s=document.createElement("tr");s.setAttribute("part","row"),s.setAttribute("role","row"),s.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(s,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(s)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(i=>i.isConnected&&i.notifyPath&&i.notifyPath("_cells.*",i._cells)),sn(this,()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._afterScroll(),this.__itemsReceived()}),e}_createCell(t){const i=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,s=document.createElement("vaadin-grid-cell-content");s.setAttribute("slot",i);const n=document.createElement(t);n.id=i.replace("-content-","-"),n.setAttribute("tabindex","-1"),n.setAttribute("role",t==="td"?"gridcell":"columnheader");const o=document.createElement("slot");return o.setAttribute("name",i),n.appendChild(o),n._content=s,s.addEventListener("mousedown",()=>{if(Yo){const a=l=>{const d=s.contains(this.getRootNode().activeElement),c=l.composedPath().includes(s);!d&&c&&n.focus(),document.removeEventListener("mouseup",a,!0)};document.addEventListener("mouseup",a,!0)}else setTimeout(()=>{s.contains(this.getRootNode().activeElement)||n.focus()})}),n}_updateRow(t,e,i,s,n){i=i||"body";const o=document.createDocumentFragment();Array.from(t.children).forEach(a=>{a._vacant=!0}),t.innerHTML="",e.filter(a=>!a.hidden).forEach((a,l,d)=>{let c;if(i==="body"){if(a._cells=a._cells||[],c=a._cells.filter(u=>u._vacant)[0],c||(c=this._createCell("td"),a._cells.push(c)),c.setAttribute("part","cell body-cell"),t.appendChild(c),l===d.length-1&&this.rowDetailsRenderer){this._detailsCells=this._detailsCells||[];const u=this._detailsCells.filter(m=>m._vacant)[0]||this._createCell("td");this._detailsCells.indexOf(u)===-1&&this._detailsCells.push(u),u._content.parentElement||o.appendChild(u._content),this._configureDetailsCell(u),t.appendChild(u),this._a11ySetRowDetailsCell(t,u),u._vacant=!1}a.notifyPath&&!n&&a.notifyPath("_cells.*",a._cells)}else{const u=i==="header"?"th":"td";s||a.localName==="vaadin-grid-column-group"?(c=a[`_${i}Cell`]||this._createCell(u),c._column=a,t.appendChild(c),a[`_${i}Cell`]=c):(a._emptyCells=a._emptyCells||[],c=a._emptyCells.filter(m=>m._vacant)[0]||this._createCell(u),c._column=a,t.appendChild(c),a._emptyCells.indexOf(c)===-1&&a._emptyCells.push(c)),c.setAttribute("part",`cell ${i}-cell`),this.__updateHeaderFooterRowVisibility(t)}c._content.parentElement||o.appendChild(c._content),c._vacant=!1,c._column=a}),this.appendChild(o),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(t)}__updateHeaderFooterRowVisibility(t){if(!t)return;const e=Array.from(t.children).filter(i=>{const s=i._column;if(s._emptyCells&&s._emptyCells.indexOf(i)>-1)return!1;if(t.parentElement===this.$.header){if(s.headerRenderer)return!0;if(s.header===null)return!1;if(s.path||s.header!==void 0)return!0}else if(s.footerRenderer)return!0;return!1});t.hidden!==!e.length&&(t.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(t,e){this._preventScrollerRotatingCellFocus(t,e),this._columnTree&&(t.toggleAttribute("first",e===0),t.toggleAttribute("last",e===this._effectiveSize-1),t.toggleAttribute("odd",e%2),this._a11yUpdateRowRowindex(t,e),this._getItem(e,t))}_columnTreeChanged(t){this._renderColumnTree(t),this.recalculateColumnWidths()}_renderColumnTree(t){for(Array.from(this.$.items.children).forEach(e=>this._updateRow(e,t[t.length-1],null,!1,!0));this.$.header.children.length<t.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const i=document.createElement("tr");i.setAttribute("part","row"),i.setAttribute("role","row"),i.setAttribute("tabindex","-1"),this.$.footer.appendChild(i)}for(;this.$.header.children.length>t.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach((e,i)=>this._updateRow(e,t[i],"header",i===t.length-1)),Array.from(this.$.footer.children).forEach((e,i)=>this._updateRow(e,t[t.length-1-i],"footer",i===0)),this._updateRow(this.$.sizer,t[t.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning(),this.generateCellClassNames()}__updateFooterPositioning(){this._firefox&&parseFloat(navigator.userAgent.match(/Firefox\/(\d{2,3}.\d)/)[1])<99&&(this.$.items.style.paddingBottom=0,this.allRowsVisible||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`))}_updateItem(t,e){t._item=e;const i=this.__getRowModel(t);this._toggleDetailsCell(t,i.detailsOpened),this._a11yUpdateRowLevel(t,i.level),this._a11yUpdateRowSelected(t,i.selected),t.toggleAttribute("expanded",i.expanded),t.toggleAttribute("selected",i.selected),t.toggleAttribute("details-opened",i.detailsOpened),this._generateCellClassNames(t,i),this._filterDragAndDrop(t,i),Array.from(t.children).forEach(s=>{if(s._renderer){const n=s._column||this;s._renderer.call(n,s._content,n,i)}}),this._updateDetailsCellHeight(t),this._a11yUpdateRowExpanded(t,i.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateFooterPositioning(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(t){t.animationName.indexOf("vaadin-grid-appear")===0&&(t.stopPropagation(),this.__itemsReceived(),requestAnimationFrame(()=>{this.__scrollToPendingIndex()}))}__getRowModel(t){return{index:t.index,item:t._item,level:this._getIndexLevel(t.index),expanded:this._isExpanded(t._item),selected:this._isSelected(t._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(t._item)}}requestContentUpdate(){this._columnTree&&(this._columnTree.forEach(t=>{t.forEach(e=>{e._renderHeaderAndFooter()})}),this.__updateVisibleRows())}__updateVisibleRows(t,e){this.__virtualizer&&this.__virtualizer.update(t,e)}notifyResize(){console.warn("WARNING: Since Vaadin 22, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(pt.is,pt);(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Grid")};let t=!1;window.Vaadin.Flow.gridConnector={initLazy:e=>r(function(i){if(i.$connector)return;t||(t=!0,ie.prototype.ensureSubCacheForScaledIndexOriginal=ie.prototype.ensureSubCacheForScaledIndex,ie.prototype.ensureSubCacheForScaledIndex=r(function(h){if(!this.grid.$connector){this.ensureSubCacheForScaledIndexOriginal(h);return}this.itemCaches[h]||this.grid.$connector.beforeEnsureSubCacheForScaledIndex(this,h)}),ie.prototype.isLoadingOriginal=ie.prototype.isLoading,ie.prototype.isLoading=r(function(){return this.grid.$connector?Boolean(this.grid.$connector.hasEnsureSubCacheQueue()||Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(h=>this.itemCaches[h].isLoading())[0]):this.isLoadingOriginal()}),ie.prototype.doEnsureSubCacheForScaledIndex=r(function(h){if(!this.itemCaches[h]){const p=new ie.prototype.constructor(this.grid,this,this.items[h]);p.itemkeyCaches={},this.itemkeyCaches||(this.itemkeyCaches={}),this.itemCaches[h]=p,this.itemkeyCaches[this.grid.getItemId(p.parentItem)]=p,this.grid._loadPage(0,p)}}),ie.prototype.getCacheAndIndexByKey=r(function(h){for(let f in this.items)if(this.grid.getItemId(this.items[f])===h)return{cache:this,scaledIndex:f};const p=Object.keys(this.itemkeyCaches);for(let f=0;f<p.length;f++){const _=p[f];let I=this.itemkeyCaches[_].getCacheAndIndexByKey(h);if(I)return I}}),ie.prototype.getLevel=r(function(){let h=this,p=0;for(;h.parentCache;)h=h.parentCache,p++;return p}));const s={},n={},o={},a=50,l=20;let d=[],c,u=[],m;const y=150;let A,g={};const v="null";g[v]=[0,0];const C=["SINGLE","NONE","MULTI"];let w={},x="SINGLE",O=!1;i.size=0,i.itemIdPath="key",i.$connector={},i.$connector.hasEnsureSubCacheQueue=r(()=>u.length>0),i.$connector.hasParentRequestQueue=r(()=>d.length>0),i.$connector.hasRootRequestQueue=r(()=>Object.keys(s).length>0||A&&A.isActive()),i.$connector.beforeEnsureSubCacheForScaledIndex=r(function(h,p){u.push({cache:h,scaledIndex:p,itemkey:i.getItemId(h.items[p]),level:h.getLevel()}),m=oe.debounce(m,sa,()=>{for(;u.length;)i.$connector.flushEnsureSubCache()})}),i.$connector.doSelection=r(function(h,p){if(x==="NONE"||!h.length||p&&i.hasAttribute("disabled"))return;x==="SINGLE"&&(i.selectedItems=[],w={});const f=h.filter(_=>_!==null);i.selectedItems=i.selectedItems.concat(f),h.forEach(_=>{_&&(w[_.key]=_,p&&(_.selected=!0,i.$server.select(_.key)));const b=!i.activeItem||!_||_.key!=i.activeItem.key;!p&&x==="SINGLE"&&b&&(i.activeItem=_)})}),i.$connector.doDeselection=r(function(h,p){if(x==="NONE"||!h.length||p&&i.hasAttribute("disabled"))return;const f=i.selectedItems.slice();for(;h.length;){const _=h.shift();for(let b=0;b<f.length;b++){const I=f[b];if(_&&_.key===I.key){f.splice(b,1);break}}_&&(delete w[_.key],p&&(delete _.selected,i.$server.deselect(_.key)))}i.selectedItems=f}),i.__activeItemChanged=r(function(h,p){x=="SINGLE"&&(h?w[h.key]||i.$connector.doSelection([h],!0):p&&w[p.key]&&(i.__deselectDisallowed?i.activeItem=p:i.$connector.doDeselection([p],!0)))}),i._createPropertyObserver("activeItem","__activeItemChanged",!0),i.__activeItemChangedDetails=r(function(h,p){i.__disallowDetailsOnClick||h==null&&p===void 0||(h&&!h.detailsOpened?i.$server.setDetailsVisible(h.key):i.$server.setDetailsVisible(null))}),i._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),i.$connector._getPageIfSameLevel=r(function(h,p,f){let _=i._cache.getCacheAndIndex(p),b=_.cache.parentItem,I=b?i.getItemId(b):v;return h!==I?f:i._getPageForIndex(_.scaledIndex)}),i.$connector.getCacheByKey=r(function(h){let p=i._cache.getCacheAndIndexByKey(h);if(p)return p.cache}),i.$connector.flushEnsureSubCache=r(function(){let h=u.splice(0,1)[0],p=h.itemkey;const f=i._getVisibleRows();let _=f[0].index,b=f[f.length-1].index,I=b-_,P=Math.max(0,_-I),q=Math.min(b+I,i._effectiveSize);for(let F=P;F<=q;F++){let G=i._cache.getItemForIndex(F);if(i.getItemId(G)===p){if(i._isExpanded(G))return h.cache.doEnsureSubCacheForScaledIndex(h.scaledIndex),!0;break}}return!1}),i.$connector.flushParentRequests=r(function(){let h=d.splice(0,l);return h.length?(i.$server.setParentRequestedRanges(h),!0):!1}),i.$connector.beforeParentRequest=r(function(h,p,f){d.push({firstIndex:h,size:p,parentKey:f}),c=oe.debounce(c,_t.after(a),()=>{for(;d.length;)i.$connector.flushParentRequests()})}),i.$connector.fetchPage=r(function(h,p,f){const _=i._getVisibleRows();let b=_.length>0?_[0].index:0,I=_.length>0?_[_.length-1].index:0,P=I-b,q=Math.max(0,b-P),F=Math.min(I+P,i._effectiveSize),G=p,j=p;for(let Ne=q;Ne<=F;Ne++)G=Math.min(G,i.$connector._getPageIfSameLevel(f,Ne,G)),j=Math.max(j,i.$connector._getPageIfSameLevel(f,Ne,j));let Se=Math.max(0,G),et=f!==v?j:Math.min(j,Math.floor(i.size/i.pageSize)),Fe=g[f];if(Fe||(Fe=[-1,-1]),Fe[0]!=Se||Fe[1]!=et){Fe=[Se,et],g[f]=Fe;let Ne=et-Se+1;h(Se*i.pageSize,Ne*i.pageSize)}}),i.dataProvider=r(function(h,p){if(h.pageSize!=i.pageSize)throw"Invalid pageSize";let f=h.page;if(h.parentItem){let _=i.getItemId(h.parentItem);n[_]||(n[_]={});let b=i.$connector.getCacheByKey(_),I=b&&b.itemkeyCaches?b.itemkeyCaches[_]:void 0;o[_]&&o[_][f]&&I?(f=Math.min(f,Math.floor(o[_].size/i.pageSize)),u=[],p(o[_][f],o[_].size),xe(),u=[],i.requestContentUpdate()):(n[_][f]=p,i.$connector.fetchPage((P,q)=>i.$connector.beforeParentRequest(P,q,h.parentItem.key),f,_))}else f=Math.min(f,Math.floor(i.size/i.pageSize)),o[v]&&o[v][f]?p(o[v][f]):(s[f]=p,A=oe.debounce(A,_t.after(i._hasData?y:0),()=>{i.$connector.fetchPage((_,b)=>i.$server.setRequestedRange(_,b),f,v)}))});const S=r(function(h,p){p!==void 0&&!O&&i.$server.sortersChanged(i._sorters.map(function(f){return{path:f.path,direction:f.direction}}))});i.$connector.setSorterDirections=r(function(h){O=!0,setTimeout(r(()=>{try{const p=Array.from(i.querySelectorAll("vaadin-grid-sorter"));i._sorters.forEach(f=>{p.includes(f)||p.push(f)}),p.forEach(f=>{h.filter(_=>_.column===f.getAttribute("path"))[0]||(f.direction=null)}),h.reverse().forEach(({column:f,direction:_})=>{p.forEach(b=>{b.getAttribute("path")===f&&b.direction!==_&&(b.direction=_)})})}finally{O=!1}}))}),i._createPropertyObserver("_previousSorters",S),i._updateItem=r(function(h,p){pt.prototype._updateItem.call(i,h,p),h.hidden||Array.from(h.children).forEach(f=>{f._content&&f._content.__templateInstance&&f._content.__templateInstance.children&&Array.from(f._content.__templateInstance.children).forEach(_=>{_._attachRenderedComponentIfAble&&_._attachRenderedComponentIfAble(),_.children&&Array.from(_.children).forEach(b=>{b._attachRenderedComponentIfAble&&b._attachRenderedComponentIfAble()})})}),x===C[1]&&(h.removeAttribute("aria-selected"),Array.from(h.children).forEach(f=>f.removeAttribute("aria-selected")))});const Y=r(function(h,p){if(h==null||i.$server.updateExpandedState==null)return;let f=i.getItemId(h);if(i.$server.updateExpandedState(f,p),!p){delete o[f];let _=i.$connector.getCacheByKey(f);_&&_.itemkeyCaches&&_.itemkeyCaches[f]&&delete _.itemkeyCaches[f],_&&_.itemkeyCaches&&Object.keys(_.itemCaches).filter(b=>_.items[b].key===f).forEach(b=>delete _.itemCaches[b]),delete g[f]}});i.expandItem=r(function(h){Y(h,!0),pt.prototype.expandItem.call(i,h)}),i.collapseItem=r(function(h){Y(h,!1),pt.prototype.collapseItem.call(i,h)});const te=function(h){if(!h||!Array.isArray(h))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(h);let p=Array.from(i.detailsOpenedItems),f=!1;for(let _=0;_<h.length;++_){const b=h[_];!b||(b.detailsOpened?i._getItemIndexInArray(b,p)<0&&p.push(b):i._getItemIndexInArray(b,p)>=0&&p.splice(i._getItemIndexInArray(b,p),1),w[b.key]&&(w[b.key]=b,b.selected=!0,f=!0))}i.detailsOpenedItems=p,f&&(i.selectedItems=Object.keys(w).map(function(_){return w[_]}))},se=function(h,p){let f;if((p||v)!==v){f=o[p][h];let _=i.$connector.getCacheByKey(p);if(_&&_.itemkeyCaches){let b=_.itemkeyCaches[p];const I=n[p],P=I&&I[h];Ze(h,f,P,b)}}else f=o[v][h],Ze(h,f,s[h],i._cache);return f},Ze=function(h,p,f,_){if(!f){let b=h*i.pageSize,I=b+i.pageSize;if(p){if(_&&_.items)for(let P=b;P<I;P++)_.items[P]&&(_.items[P]=p[P-b])}else if(_&&_.items)for(let P=b;P<I;P++)delete _.items[P]}},xe=function(){i._cache.updateSize(),i._effectiveSize=i._cache.effectiveSize,i.__updateVisibleRows()},Ae=function(h){if(!h||!i.$||i.$.items.childElementCount===0)return;const p=h.map(_=>_.key),f=i._getVisibleRows().filter(_=>_._item&&p.includes(_._item.key)).map(_=>_.index);f.length>0&&i.__updateVisibleRows(f[0],f[f.length-1])};i.$connector.set=r(function(h,p,f){if(h%i.pageSize!=0)throw"Got new data to index "+h+" which is not aligned with the page size of "+i.pageSize;let _=f||v;const b=h/i.pageSize,I=Math.ceil(p.length/i.pageSize);for(let P=0;P<I;P++){let q=b+P,F=p.slice(P*i.pageSize,(P+1)*i.pageSize);o[_]||(o[_]={}),o[_][q]=F,i.$connector.doSelection(F.filter(j=>j.selected&&!fe(j))),i.$connector.doDeselection(F.filter(j=>!j.selected&&(w[j.key]||fe(j))));const G=se(q,_);G&&(te(G),Ae(G))}});const Le=function(h){let p=h.parentUniqueKey||v;if(o[p]){for(let f in o[p])for(let _ in o[p][f])if(i.getItemId(o[p][f][_])===i.getItemId(h))return{page:f,index:_,parentKey:p}}return null};i.$connector.updateHierarchicalData=r(function(h){let p=[];for(let _=0;_<h.length;_++){let b=Le(h[_]);if(b){o[b.parentKey][b.page][b.index]=h[_];let I=b.parentKey+":"+b.page;p[I]||(p[I]={parentKey:b.parentKey,page:b.page})}}let f=Object.keys(p);for(let _=0;_<f.length;_++){let b=p[f[_]];const I=se(b.page,b.parentKey);I&&(te(I),Ae(I))}}),i.$connector.updateFlatData=r(function(h){for(let p=0;p<h.length;p++){let f=Le(h[p]);if(f){o[f.parentKey][f.page][f.index]=h[p];const _=parseInt(f.page)*i.pageSize+parseInt(f.index);i._cache.items[_]&&(i._cache.items[_]=h[p])}}te(h),Ae(h)}),i.$connector.clearExpanded=r(function(){i.expandedItems=[],u=[],d=[]}),i.$connector.clear=r(function(h,p,f){let _=f||v;if(!o[_]||Object.keys(o[_]).length===0)return;if(h%i.pageSize!=0)throw"Got cleared data for index "+h+" which is not aligned with the page size of "+i.pageSize;let b=Math.floor(h/i.pageSize),I=Math.ceil(p/i.pageSize);for(let F=0;F<I;F++){let G=b+F,j=o[_][G];i.$connector.doDeselection(j.filter(et=>w[et.key])),delete o[_][G];const Se=se(G,f);Se&&te(Se),Ae(j)}let P=i._cache;if(f){const F=i._cache.getCacheAndIndexByKey(_);P=F.cache.itemCaches[F.scaledIndex]}const q=h+I*i.pageSize;for(let F=h;F<q;F++){delete P.items[F];const G=P.itemCaches[F];delete P.itemCaches[F];const j=G&&G.parentItem.key;j&&delete P.itemkeyCaches[j]}i._cache.updateSize()});const fe=function(h){const p=i.selectedItems;for(let f=0;f<p;f++)if(p[f].key===h.key)return!0;return!1};i.$connector.reset=r(function(){i.size=0,Ee(o),Ee(i._cache.items),Ee(g),m&&m.cancel(),c&&c.cancel(),A&&A.cancel(),m=void 0,c=void 0,u=[],d=[],xe()});const Ee=h=>Object.keys(h).forEach(p=>delete h[p]);i.$connector.updateSize=h=>i.size=h,i.$connector.updateUniqueItemIdPath=h=>i.itemIdPath=h,i.$connector.expandItems=r(function(h){let p=Array.from(i.expandedItems);h.filter(f=>!i._isExpanded(f)).forEach(f=>p.push(f)),i.expandedItems=p}),i.$connector.collapseItems=r(function(h){let p=Array.from(i.expandedItems);h.forEach(f=>{let _=i._getItemIndexInArray(f,p);_>=0&&p.splice(_,1)}),i.expandedItems=p,h.forEach(f=>i.$connector.removeFromQueue(f))}),i.$connector.removeFromQueue=r(function(h){let p=i.getItemId(h);delete n[p],i.$connector.removeFromArray(u,f=>f.itemkey===p),i.$connector.removeFromArray(d,f=>f.parentKey===p)}),i.$connector.removeFromArray=r(function(h,p){if(h.length)for(let f=h.length-1;f--;)p(h[f])&&h.splice(f,1)}),i.$connector.confirmParent=r(function(h,p,f){o[p]||(o[p]={}),o[p].size=f,f===0&&(o[p][0]=[]);let _=Object.getOwnPropertyNames(n[p]||{});for(let b=0;b<_.length;b++){let I=_[b],P=g[p]||[0,0];const q=n[p][I];if(o[p]&&o[p][I]||I<P[0]||I>P[1]){delete n[p][I];let F=o[p][I]||new Array(f);q(F,f)}else q&&f===0&&(delete n[p][I],q([],f))}i.$server.confirmParentUpdate(h,p),i.loading||i.__updateVisibleRows()}),i.$connector.confirm=r(function(h){let p=Object.getOwnPropertyNames(s);for(let f=0;f<p.length;f++){let _=p[f],b=g[v]||[0,0];const I=i.size?Math.ceil(i.size/i.pageSize)-1:0,P=Math.min(b[1],I),q=s[_];o[v]&&o[v][_]||_<b[0]||+_>P?(delete s[_],o[v][_]?q(o[v][_]):(q(new Array(i.pageSize)),i.requestContentUpdate()),i._debounceIncreasePool&&i._debounceIncreasePool.flush()):q&&i.size===0&&(delete s[_],q([]))}i.$server.confirmUpdate(h)}),i.$connector.ensureHierarchy=r(function(){for(let h in o)h!==v&&delete o[h];Ee(g),i._cache.itemCaches={},i._cache.itemkeyCaches={},xe()}),i.$connector.setSelectionMode=r(function(h){if((typeof h=="string"||h instanceof String)&&C.indexOf(h)>=0)x=h,w={},i.$connector.updateMultiSelectable();else throw"Attempted to set an invalid selection mode"}),i.$connector.updateMultiSelectable=r(function(){!i.$||(x===C[0]?i.$.table.setAttribute("aria-multiselectable",!1):x===C[1]?i.$.table.removeAttribute("aria-multiselectable"):i.$.table.setAttribute("aria-multiselectable",!0))}),i._createPropertyObserver("isAttached",()=>i.$connector.updateMultiSelectable()),i.$connector.setVerticalScrollingEnabled=r(function(h){Te(i.$.table,h)});const Te=function(h,p){h.style.overflowY=p?"":"hidden",h.removeEventListener("wheel",h.__wheelListener),!p&&h.addEventListener("wheel",h.__wheelListener=r(f=>{f.deltaX?Object.defineProperty(f,"deltaY",{value:0}):f.stopImmediatePropagation()}))};i.addEventListener("vaadin-context-menu-before-open",r(function(h){const{key:p,columnId:f}=h.detail;i.$server.updateContextMenuTargetItem(p,f)})),i.getContextMenuBeforeOpenDetail=r(function(h){const p=h.detail.sourceEvent||h,f=i.getEventContext(p),_=f.item&&f.item.key||"",b=f.column&&f.column.id||"";return{key:_,columnId:b}}),i.addEventListener("click",r(h=>Ie(h,"item-click"))),i.addEventListener("dblclick",r(h=>Ie(h,"item-double-click"))),i.addEventListener("column-resize",r(h=>{i._getColumnsInOrder().filter(f=>!f.hidden).forEach(f=>{f.dispatchEvent(new CustomEvent("column-drag-resize"))}),i.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:h.detail.resizedColumn._flowId}}))})),i.addEventListener("column-reorder",r(h=>{const p=i._columnTree.slice(0).pop().filter(f=>f._flowId).sort((f,_)=>f._order-_._order).map(f=>f._flowId);i.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:p}}))})),i.addEventListener("cell-focus",r(h=>{const p=i.getEventContext(h);["header","body","footer"].indexOf(p.section)!==-1&&i.dispatchEvent(new CustomEvent("grid-cell-focus",{detail:{itemKey:p.item?p.item.key:null,internalColumnId:p.column?p.column._flowId:null,section:p.section}}))}));function Ie(h,p){if(h.defaultPrevented)return;const f=h.target,_=i.getEventContext(h),b=_.section;_.item&&!xo(f)&&b!=="details"&&(h.itemKey=_.item.key,_.column&&(h.internalColumnId=_.column._flowId),i.dispatchEvent(new CustomEvent(p,{detail:h})))}i.cellClassNameGenerator=r(function(h,p){const f=p.item.style;if(!!f)return(f.row||"")+" "+(h&&f[h._flowId]||"")}),i.dropFilter=r(h=>!h.item.dropDisabled),i.dragFilter=r(h=>!h.item.dragDisabled),i.addEventListener("grid-dragstart",r(h=>{i._isSelected(h.detail.draggedItems[0])?(i.__selectionDragData?Object.keys(i.__selectionDragData).forEach(p=>{h.detail.setDragData(p,i.__selectionDragData[p])}):(i.__dragDataTypes||[]).forEach(p=>{h.detail.setDragData(p,h.detail.draggedItems.map(f=>f.dragData[p]).join(`
`))}),i.__selectionDraggedItemsCount>1&&h.detail.setDraggedItemsCount(i.__selectionDraggedItemsCount)):(i.__dragDataTypes||[]).forEach(p=>{h.detail.setDragData(p,h.detail.draggedItems[0].dragData[p])})}))})(e)}})();const Qt=window;Qt.Vaadin=Qt.Vaadin||{};Qt.Vaadin.setLitRenderer=(r,t,e,i,s,n)=>{const o=Function(`
    "use strict";

    const [render, html, returnChannel] = arguments;

    return (root, {item, index}, itemKey) => {
      ${s.map(l=>`
          const ${l} = (...args) => {
            if (itemKey !== undefined) {
              returnChannel('${l}', itemKey, args[0] instanceof Event ? [] : [...args]);
            }
          }`).join("")}

      render(html\`${e}\`, root)
    }
  `)(Bs,Fo,i),a=(l,d,{index:c,item:u})=>{l.__litRenderer!==a&&(l.innerHTML="",delete l._$litPart$,l.__litRenderer=a);const m={};for(const y in u)y.startsWith(n)&&(m[y.replace(n,"")]=u[y]);o(l,{index:c,item:m},u.key)};a.__rendererId=n,r[t]=a};Qt.Vaadin.unsetLitRenderer=(r,t,e)=>{var i;((i=r[t])==null?void 0:i.__rendererId)===e&&(r[t]=void 0)};const Io=document.createElement("template");Io.innerHTML=`<style>
  ${Us.cssText}
  ${Ws.cssText}
</style>`;document.head.appendChild(Io.content);{class r extends $i{static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},indeterminate:{type:Boolean,value:!1,notify:!0},selectAllHidden:Boolean}}constructor(){super(),this._boundOnSelectEvent=this._onSelectEvent.bind(this),this._boundOnDeselectEvent=this._onDeselectEvent.bind(this)}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, indeterminate, selectAllHidden)"]}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("select",this._boundOnSelectEvent),this._grid.addEventListener("deselect",this._boundOnDeselectEvent))}disconnectedCallback(){super.disconnectedCallback(),this._grid&&(this._grid.removeEventListener("select",this._boundOnSelectEvent),this._grid.removeEventListener("deselect",this._boundOnDeselectEvent))}_defaultHeaderRenderer(e,i){let s=e.firstElementChild;s||(s=document.createElement("vaadin-checkbox"),s.id="selectAllCheckbox",s.setAttribute("aria-label","Select All"),s.classList.add("vaadin-grid-select-all-checkbox"),s.addEventListener("click",this._onSelectAllClick.bind(this)),e.appendChild(s));const n=this.selectAll;s.hidden=this.selectAllHidden,s.checked=n,s.indeterminate=this.indeterminate}_defaultRenderer(e,i,{item:s,selected:n}){let o=e.firstElementChild;o||(o=document.createElement("vaadin-checkbox"),o.setAttribute("aria-label","Select Row"),o.addEventListener("click",this._onSelectClick.bind(this)),e.appendChild(o)),o.__item=s,o.checked=n}_onSelectClick(e){e.currentTarget.checked?this._grid.$connector.doDeselection([e.currentTarget.__item],!0):this._grid.$connector.doSelection([e.currentTarget.__item],!0)}_onSelectAllClick(e){if(e.preventDefault(),this._grid.hasAttribute("disabled")){e.currentTarget.checked=!e.currentTarget.checked;return}this.selectAll?this.$server.deselectAll():this.$server.selectAll()}_onSelectEvent(e){}_onDeselectEvent(e){e.detail.userOriginated&&(this.selectAll=!1)}}customElements.define(r.is,r),Vaadin.GridFlowSelectionColumnElement=r}T("vaadin-form-item",E`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }

    [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '•');
      transition: opacity 0.2s;
      opacity: 0;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      position: relative;
      width: 1em;
      text-align: center;
    }

    :host([required]) [part='required-indicator']::after {
      opacity: 1;
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }
  `,{moduleId:"lumo-form-item"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ss extends R(k){static get template(){return M`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;
          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width, 8em);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing, 1em);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="__onLabelClick">
        <slot name="label" id="labelSlot" on-slotchange="__onLabelSlotChange"></slot>
        <span part="required-indicator" aria-hidden="true"></span>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot" on-slotchange="__onContentSlotChange"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}constructor(){super(),this.__updateInvalidState=this.__updateInvalidState.bind(this),this.__fieldNodeObserver=new MutationObserver(()=>this.__updateRequiredState(this.__fieldNode.required)),this.__labelNode=null,this.__fieldNode=null}_getFieldAriaTarget(t){return t.ariaTarget||t}__linkLabelToField(t){Xn(this._getFieldAriaTarget(t),"aria-labelledby",this.__labelId)}__unlinkLabelFromField(t){Jn(this._getFieldAriaTarget(t),"aria-labelledby",this.__labelId)}__onLabelClick(){const t=this.__fieldNode;t&&(t.focus(),t.click())}__getValidateFunction(t){return t.validate||t.checkValidity}__onLabelSlotChange(){this.__labelNode&&(this.__labelNode=null,this.__fieldNode&&this.__unlinkLabelFromField(this.__fieldNode));const t=this.$.labelSlot.assignedElements()[0];t&&(this.__labelNode=t,this.__labelNode.id?this.__labelId=this.__labelNode.id:(this.__labelId=`label-${this.localName}-${ar()}`,this.__labelNode.id=this.__labelId),this.__fieldNode&&this.__linkLabelToField(this.__fieldNode))}__onContentSlotChange(){this.__fieldNode&&(this.__unlinkLabelFromField(this.__fieldNode),this.__updateRequiredState(!1),this.__fieldNodeObserver.disconnect(),this.__fieldNode=null);const t=this.$.contentSlot.assignedElements();t.length>1&&console.warn(`WARNING: Since Vaadin 23, placing multiple fields directly to a <vaadin-form-item> is deprecated.
Please wrap fields with a <vaadin-custom-field> instead.`);const e=t.find(i=>!!this.__getValidateFunction(i));e&&(this.__fieldNode=e,this.__updateRequiredState(this.__fieldNode.required),this.__fieldNodeObserver.observe(this.__fieldNode,{attributes:!0,attributeFilter:["required"]}),this.__labelNode&&this.__linkLabelToField(this.__fieldNode))}__updateRequiredState(t){t?(this.setAttribute("required",""),this.__fieldNode.addEventListener("blur",this.__updateInvalidState),this.__fieldNode.addEventListener("change",this.__updateInvalidState)):(this.removeAttribute("invalid"),this.removeAttribute("required"),this.__fieldNode.removeEventListener("blur",this.__updateInvalidState),this.__fieldNode.removeEventListener("change",this.__updateInvalidState))}__updateInvalidState(){const t=this.__getValidateFunction(this.__fieldNode).call(this.__fieldNode);this.toggleAttribute("invalid",t===!1)}}customElements.define(Ss.is,Ss);T("vaadin-form-layout",E`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ps extends yr(K(R(k))){static get template(){return M`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>this._selectResponsiveStep()),requestAnimationFrame(()=>this._updateLayout()),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const t={attributes:!0};this.__mutationObserver=new MutationObserver(e=>{e.forEach(i=>{i.type==="attributes"&&(i.attributeName==="colspan"||i.attributeName==="hidden")&&this._updateLayout()})}),this.__childObserver=new X(this,e=>{const i=this._getObservableNodes(e.addedNodes),s=this._getObservableNodes(e.removedNodes);i.forEach(n=>{this.__mutationObserver.observe(n,t)}),(i.length>0||s.length>0)&&this._updateLayout()})}_getObservableNodes(t){const e=["template","style","dom-repeat","dom-if"];return Array.from(t).filter(i=>i.nodeType===Node.ELEMENT_NODE&&e.indexOf(i.localName.toLowerCase())===-1)}_naturalNumberOrOne(t){return typeof t=="number"&&t>=1&&t<1/0?Math.floor(t):1}_isValidCSSLength(t){return t==="inherit"||t==="normal"?!1:(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${t}; }`,this._styleElement.sheet?["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0:!0)}_responsiveStepsChanged(t,e){try{if(!Array.isArray(t))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(t.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');t.forEach(i=>{if(this._naturalNumberOrOne(i.columns)!==i.columns)throw new Error(`Invalid 'columns' value of ${i.columns}, a natural number is required.`);if(i.minWidth!==void 0&&!this._isValidCSSLength(i.minWidth))throw new Error(`Invalid 'minWidth' value of ${i.minWidth}, a valid CSS length required.`);if(i.labelsPosition!==void 0&&["aside","top"].indexOf(i.labelsPosition)===-1)throw new Error(`Invalid 'labelsPosition' value of ${i.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(i){e&&e!==t?(console.warn(`${i.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=e):(console.warn(`${i.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(t){t.animationName.indexOf("vaadin-form-layout-appear")===0&&this._selectResponsiveStep()}_selectResponsiveStep(){let t;const e="background-position";this.responsiveSteps.forEach(i=>{this.$.layout.style.setProperty(e,i.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue(e))<=this.offsetWidth&&(t=i)}),this.$.layout.style.removeProperty(e),t&&(this._columnCount=t.columns,this._labelsOnTop=t.labelsPosition==="top")}_invokeUpdateLayout(){this._updateLayout()}updateStyles(t={}){console.warn("WARNING: Since Vaadin 23, updateStyles() is deprecated. Use the native element.style.setProperty API to set custom CSS property values."),Object.entries(t).forEach(([e,i])=>{this.style.setProperty(e,i)}),this._updateLayout()}_updateLayout(){const t=getComputedStyle(this),e=t.getPropertyValue("--vaadin-form-layout-column-spacing"),i=t.direction,s=`margin-${i==="ltr"?"left":"right"}`,n=`margin-${i==="ltr"?"right":"left"}`,o=this.offsetWidth;let a=0;Array.from(this.children).filter(l=>l.localName==="br"||getComputedStyle(l).display!=="none").forEach((l,d,c)=>{if(l.localName==="br"){a=0;return}let u;u=this._naturalNumberOrOne(parseFloat(l.getAttribute("colspan"))),u=Math.min(u,this._columnCount);const m=u/this._columnCount;l.style.width=`calc(${m*99.9}% - ${1-m} * ${e})`,a+u>this._columnCount&&(a=0),a===0?l.style.setProperty(s,"0px"):l.style.removeProperty(s);const y=d+1,A=y<c.length&&c[y].localName==="br";if(a+u===this._columnCount)l.style.setProperty(n,"0px");else if(A){const g=(this._columnCount-a-u)/this._columnCount;l.style.setProperty(n,`calc(${g*o}px + ${g} * ${e})`)}else l.style.removeProperty(n);a=(a+u)%this._columnCount,l.localName==="vaadin-form-item"&&(this._labelsOnTop?l.getAttribute("label-position")!=="top"&&(l.__useLayoutLabelPosition=!0,l.setAttribute("label-position","top")):l.__useLayoutLabelPosition&&(delete l.__useLayoutLabelPosition,l.removeAttribute("label-position")))})}_onResize(){this._selectResponsiveStep()}}customElements.define(Ps.is,Ps);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ds extends Co(k){static get is(){return"vaadin-grid-column-group"}static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(t,e){t==="hidden"&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/.test(t)&&this._updateFlexAndWidth(),t==="frozen"&&(this.frozen=this.frozen||e),t==="lastFrozen"&&(this._lastFrozen=this._lastFrozen||e),t==="frozenToEnd"&&(this.frozenToEnd=this.frozenToEnd||e),t==="firstFrozenToEnd"&&(this._firstFrozenToEnd=this._firstFrozenToEnd||e)}_groupOrderChanged(t,e){if(e){const i=e.slice(0);if(!t){i.forEach(a=>{a._order=0});return}const s=/(0+)$/.exec(t).pop().length,n=~~(Math.log(e.length)/Math.LN10)+1,o=10**(s-n);i[0]&&i[0]._order&&i.sort((a,l)=>a._order-l._order),Ao(i,o,t)}}_groupReorderStatusChanged(t,e){t===void 0||e===void 0||e.forEach(i=>{i._reorderStatus=t})}_groupResizableChanged(t,e){t===void 0||e===void 0||e.forEach(i=>{i.resizable=t})}_updateVisibleChildColumns(t){this._visibleChildColumns=Array.prototype.filter.call(t,e=>!e.hidden),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(!!this._visibleChildColumns){if(this._visibleChildColumns.length>0){const t=this._visibleChildColumns.reduce((e,i)=>(e+=` + ${(i.width||"0px").replace("calc","")}`,e),"").substring(3);this._setWidth(`calc(${t})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(t,e)=>t+e.flexGrow,0))}}_groupFrozenChanged(t,e){e===void 0||t===void 0||t!==!1&&Array.from(e).forEach(i=>{i.frozen=t})}_groupFrozenToEndChanged(t,e){e===void 0||t===void 0||t!==!1&&Array.from(e).forEach(i=>{i.frozenToEnd=t})}_groupHiddenChanged(t){(t||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){const t=this._autoHidden;this._autoHidden=(this._visibleChildColumns||[]).length===0,(t||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach(t=>{t.hidden=this.hidden})}_colSpanChanged(t,e,i){e&&(e.setAttribute("colspan",t),this._grid&&this._grid._a11yUpdateCellColspan(e,t)),i&&(i.setAttribute("colspan",t),this._grid&&this._grid._a11yUpdateCellColspan(i,t))}_getChildColumns(t){return X.getFlattenedNodes(t).filter(this._isColumnElement)}_addNodeObserver(){this._observer=new X(this,t=>{(t.addedNodes.filter(this._isColumnElement).length>0||t.removedNodes.filter(this._isColumnElement).length>0)&&(this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,Ct.run(()=>{this._grid&&this._grid._updateColumnTree&&this._grid._updateColumnTree()}))}),this._observer.flush()}_isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(t.localName)}}customElements.define(Ds.is,Ds);T("vaadin-grid-sorter",E`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--lumo-primary-text-color);
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const So=document.createElement("template");So.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(So.content);class ks extends R(be(k)){static get template(){return M`
      <style>
        :host {
          display: inline-flex;
          cursor: pointer;
          max-width: 100%;
        }

        [part='content'] {
          flex: 1 1 auto;
        }

        [part='indicators'] {
          position: relative;
          align-self: center;
          flex: none;
        }

        [part='order'] {
          display: inline;
          vertical-align: super;
        }

        [part='indicators']::before {
          font-family: 'vaadin-grid-sorter-icons';
          display: inline-block;
        }

        :host(:not([direction])) [part='indicators']::before {
          content: '\\e901';
        }

        :host([direction='asc']) [part='indicators']::before {
          content: '\\e900';
        }

        :host([direction='desc']) [part='indicators']::before {
          content: '\\e902';
        }
      </style>

      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(t,e){e!==!1&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this._isConnected||this.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}_getDisplayOrder(t){return t===null?"":t+1}_onClick(t){const e=this.getRootNode().activeElement;this!==e&&this.contains(e)||(t.preventDefault(),this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}}customElements.define(ks.is,ks);T("vaadin-grid",E`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='row'][last][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    [ios] [part~='row'][dragstart] [part~='cell'] {
      background: var(--lumo-primary-color-50pct);
    }

    #scroller:not([ios]) [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});const lu=E`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;T("vaadin-horizontal-layout",lu,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Os extends K(R(k)){static get template(){return M`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}customElements.define(Os.is,Os);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const du=E`
  :host {
    width: 8em;
  }

  :host([has-controls]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([has-controls]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;T("vaadin-number-field",[Ce,ur,du],{moduleId:"lumo-number-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ci=new WeakMap;function cu(r){return Ci.has(r)||Ci.set(r,new Set),Ci.get(r)}function hu(r,t){const e=document.createElement("style");e.textContent=r,t===document?document.head.appendChild(e):t.insertBefore(e,t.firstChild)}const Po=V(r=>class extends r{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),i=cu(e);this.slotStyles.forEach(s=>{i.has(s)||(hu(s,e),i.add(s))})}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */T("vaadin-number-field",Pt,{moduleId:"vaadin-number-field-styles"});class Hi extends vr(Po(R(K(k)))){static get is(){return"vaadin-number-field"}static get template(){return M`
      <style>
        :host([readonly]) [part$='button'] {
          pointer-events: none;
        }

        [part='decrease-button']::before {
          content: '−';
        }

        [part='increase-button']::before {
          content: '+';
        }

        [part='decrease-button'],
        [part='increase-button'] {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <div
            disabled$="[[!_allowed(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_decreaseValue"
            on-touchend="_decreaseButtonTouchend"
            hidden$="[[!hasControls]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_allowed(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_increaseValue"
            on-touchend="_increaseButtonTouchend"
            hidden$="[[!hasControls]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number},max:{type:Number},step:{type:Number}}}static get observers(){return["_stepChanged(step, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"min","max"]}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number")}get slotStyles(){const t=this.localName;return[`
        ${t} input[type="number"]::-webkit-outer-spin-button,
        ${t} input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        ${t} input[type="number"] {
          -moz-appearance: textfield;
        }

        ${t}[dir='rtl'] input[type="number"]::placeholder {
          direction: rtl;
        }

        ${t}[dir='rtl']:not([has-controls]) input[type="number"]::placeholder {
          text-align: left;
        }
      `]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new St(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Je(this.inputElement,this._labelController))}checkValidity(){return this.inputElement&&this.inputElement.validity.badInput?!1:super.checkValidity()}_decreaseButtonTouchend(t){t.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(t){t.preventDefault(),this._increaseValue()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(t){if(this.disabled||this.readonly)return;const e=this.step||1;let i=parseFloat(this.value);this.value?i<this.min?(t=0,i=this.min):i>this.max&&(t=0,i=this.max):this.min===0&&t<0||this.max===0&&t>0||this.max===0&&this.min===0?(t=0,i=0):(this.max==null||this.max>=0)&&(this.min==null||this.min<=0)?i=0:this.min>0?(i=this.min,this.max<0&&t<0&&(i=this.max),t=0):this.max<0&&(i=this.max,t<0?t=0:this._getIncrement(1,i-e)>this.max?i-=2*e:i-=e);const s=this._getIncrement(t,i);(!this.value||t===0||this._incrementIsInsideTheLimits(t,i))&&this._setValue(s)}_setValue(t){this.value=this.inputElement.value=String(parseFloat(t)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(t,e){let i=this.step||1,s=this.min||0;const n=Math.max(this._getMultiplier(e),this._getMultiplier(i),this._getMultiplier(s));i*=n,e=Math.round(e*n),s*=n;const o=(e-s)%i;return t>0?(e-o+i)/n:t<0?(e-(o||i))/n:e/n}_getDecimalCount(t){const e=String(t),i=e.indexOf(".");return i===-1?1:e.length-i-1}_getMultiplier(t){if(!isNaN(t))return 10**this._getDecimalCount(t)}_incrementIsInsideTheLimits(t,e){return t<0?this.min==null||this._getIncrement(t,e)>=this.min:t>0?this.max==null||this._getIncrement(t,e)<=this.max:this._getIncrement(t,e)<=this.max&&this._getIncrement(t,e)>=this.min}_allowed(t){const e=t*(this.step||1),i=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(e,i)}_stepChanged(t,e){e&&(e.step=t||"any")}_valueChanged(t,e){t&&isNaN(parseFloat(t))?this.value="":typeof this.value!="string"&&(this.value=String(this.value)),super._valueChanged(this.value,e)}_onKeyDown(t){t.key==="ArrowUp"?(t.preventDefault(),this._increaseValue()):t.key==="ArrowDown"&&(t.preventDefault(),this._decreaseValue()),super._onKeyDown(t)}}customElements.define(Hi.is,Hi);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zs extends Hi{static get is(){return"vaadin-integer-field"}constructor(){super(),this.allowedCharPattern="[-+\\d]"}_valueChanged(t,e){if(t!==""&&!this.__isInteger(t)){console.warn(`Trying to set non-integer value "${t}" to <vaadin-integer-field>. Clearing the value.`),this.value="";return}super._valueChanged(t,e)}_stepChanged(t,e){if(t!=null&&!this.__hasOnlyDigits(t)){console.warn(`<vaadin-integer-field> The \`step\` property must be a positive integer but \`${t}\` was provided, so the property was reset to \`null\`.`),this.step=null;return}super._stepChanged(t,e)}__isInteger(t){return/^(-\d)?\d*$/.test(String(t))}__hasOnlyDigits(t){return/^\d+$/.test(String(t))}}customElements.define(zs.is,zs);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const uu=E`
  :host {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: auto;
    background: transparent;
    outline: none;
  }
`;T("vaadin-password-field-button",[Zi,uu],{moduleId:"lumo-password-field-button"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pu=E`
  [part='reveal-button']::before {
    content: var(--lumo-icons-eye);
  }

  :host([password-visible]) [part='reveal-button']::before {
    content: var(--lumo-icons-eye-disabled);
  }

  /* Make it easy to hide the button across the whole app */
  [part='reveal-button'] {
    position: relative;
    display: var(--lumo-password-field-reveal-button-display, block);
  }

  [part='reveal-button'][hidden] {
    display: none !important;
  }
`;T("vaadin-password-field",[Ce,pu],{moduleId:"lumo-password-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ms extends qt{static get is(){return"vaadin-password-field-button"}static get template(){return M`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
    `}}customElements.define(Ms.is,Ms);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fu=M`
  <div part="reveal-button" slot="suffix">
    <slot name="reveal"></slot>
  </div>
`;let $t;class Ls extends Po(Gt){static get is(){return"vaadin-password-field"}static get template(){if(!$t){$t=super.template.cloneNode(!0);const t=fu.content.querySelector('[part="reveal-button"]');$t.content.querySelector('[part="input-field"]').appendChild(t)}return $t}static get properties(){return{revealButtonHidden:{type:Boolean,observer:"_revealButtonHiddenChanged",value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChanged",readOnly:!0},i18n:{type:Object,value:()=>({reveal:"Show password"})}}}static get observers(){return["__i18nChanged(i18n.*)"]}get slotStyles(){return[`
        ${this.localName} [slot="input"]::-ms-reveal {
          display: none;
        }
      `]}get _revealNode(){return this._revealButtonController&&this._revealButtonController.node}constructor(){super(),this._setType("password"),this.__boundRevealButtonClick=this._onRevealButtonClick.bind(this),this.__boundRevealButtonTouchend=this._onRevealButtonTouchend.bind(this)}ready(){super.ready(),this._revealPart=this.shadowRoot.querySelector('[part="reveal-button"]'),this._revealButtonController=new ye(this,"reveal",()=>document.createElement("vaadin-password-field-button"),(t,e)=>{e.disabled=t.disabled,e.addEventListener("click",t.__boundRevealButtonClick),e.addEventListener("touchend",t.__boundRevealButtonTouchend)}),this.addController(this._revealButtonController),this.__updateAriaLabel(this.i18n),this._updateToggleState(!1),this._toggleRevealHidden(this.revealButtonHidden),this.inputElement&&(this.inputElement.autocapitalize="off")}_shouldSetFocus(t){return t.target===this.inputElement||t.target===this._revealNode}_shouldRemoveFocus(t){return!(t.relatedTarget===this._revealNode||t.relatedTarget===this.inputElement&&t.target===this._revealNode)}_setFocused(t){if(super._setFocused(t),!t)this._setPasswordVisible(!1);else{const e=this.getRootNode().activeElement===this._revealNode;this.toggleAttribute("focus-ring",this._keyboardActive&&!e)}}__updateAriaLabel(t){t.reveal&&this._revealNode&&this._revealNode.setAttribute("aria-label",t.reveal)}__i18nChanged(t){this.__updateAriaLabel(t.base)}_revealButtonHiddenChanged(t){this._toggleRevealHidden(t)}_togglePasswordVisibility(){this._setPasswordVisible(!this.passwordVisible)}_onRevealButtonClick(){this._togglePasswordVisibility()}_onRevealButtonTouchend(t){t.preventDefault(),this._togglePasswordVisibility(),this.inputElement.focus()}_toggleRevealHidden(t){this._revealNode&&(t?(this._revealPart.setAttribute("hidden",""),this._revealNode.setAttribute("tabindex","-1"),this._revealNode.setAttribute("aria-hidden","true")):(this._revealPart.removeAttribute("hidden"),this._revealNode.setAttribute("tabindex","0"),this._revealNode.removeAttribute("aria-hidden")))}_updateToggleState(t){this._revealNode&&this._revealNode.setAttribute("aria-pressed",t?"true":"false")}_passwordVisibleChanged(t){this._setType(t?"text":"password"),this._updateToggleState(t)}_disabledChanged(t,e){super._disabledChanged(t,e),this._revealNode&&(this._revealNode.disabled=t)}}customElements.define(Ls.is,Ls);const _u=E`
  :host {
    max-width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='form'] {
    padding: var(--lumo-space-l);
  }

  [part='form-title'] {
    margin-top: calc(var(--lumo-font-size-xxxl) - var(--lumo-font-size-xxl));
  }

  #forgotPasswordButton {
    margin: var(--lumo-space-s) auto;
  }

  [part='error-message'] {
    background-color: var(--lumo-error-color-10pct);
    padding: var(--lumo-space-m);
    border-radius: var(--lumo-border-radius-m);
    margin-top: var(--lumo-space-m);
    margin-bottom: var(--lumo-space-s);
    color: var(--lumo-error-text-color);
  }

  :host(:not([dir='rtl'])) [part='error-message'] {
    padding-left: var(--lumo-size-m);
  }

  :host([dir='rtl']) [part='error-message'] {
    padding-right: var(--lumo-size-m);
  }

  [part='error-message']::before {
    content: var(--lumo-icons-error);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    position: absolute;
    width: var(--lumo-size-m);
    height: 1em;
    line-height: 1;
    text-align: center;
  }

  :host(:not([dir='rtl'])) [part='error-message']::before {
    /* Visual centering */
    margin-left: calc(var(--lumo-size-m) * -0.95);
  }

  :host([dir='rtl']) [part='error-message']::before {
    /* Visual centering */
    margin-right: calc(var(--lumo-size-m) * -0.95);
  }

  [part='error-message-title'] {
    margin: 0 0 0.25em;
    color: inherit;
  }

  [part='error-message-description'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
    margin: 0;
    opacity: 0.9;
  }

  [part='footer'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-secondary-text-color);
  }
`;T("vaadin-login-form-wrapper",[Us,Ws,_u],{moduleId:"lumo-login-form-wrapper"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Do=r=>class extends r{static get properties(){return{action:{type:String,value:null,notify:!0},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1,notify:!0},noAutofocus:{type:Boolean,value:!1},i18n:{type:Object,value(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again."}}},notify:!0},_preventAutoEnable:{type:Boolean,value:!1}}}_retargetEvent(e){e.stopPropagation();const{detail:i,composed:s,cancelable:n,bubbles:o}=e;this.dispatchEvent(new CustomEvent(e.type,{bubbles:o,cancelable:n,composed:s,detail:i}))||e.preventDefault()}};/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fs extends Do(K(R(k))){static get template(){return M`
      <style>
        :host {
          overflow: hidden;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='form'] {
          flex: 1;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        [part='form-title'] {
          margin: 0;
        }

        [part='error-message'] {
          position: relative;
        }
      </style>
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form"></slot>

        <vaadin-button
          id="forgotPasswordButton"
          theme="tertiary small forgot-password"
          on-click="_forgotPassword"
          hidden$="[[noForgotPassword]]"
          >[[i18n.form.forgotPassword]]</vaadin-button
        >

        <div part="footer">
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
    `}static get is(){return"vaadin-login-form-wrapper"}_forgotPassword(){this.dispatchEvent(new CustomEvent("forgot-password"))}}customElements.define(Fs.is,Fs);T("vaadin-login-form",E`
    vaadin-button[part='vaadin-login-submit'] {
      margin-top: var(--lumo-space-l);
      margin-bottom: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-login-form"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ns extends Do(K(R(k))){static get template(){return M`
      <style>
        [part='vaadin-login-native-form'] * {
          width: 100%;
        }
      </style>
      <vaadin-login-form-wrapper
        theme$="[[_theme]]"
        part="vaadin-login-native-form-wrapper"
        action="{{action}}"
        disabled="{{disabled}}"
        error="{{error}}"
        no-forgot-password="{{noForgotPassword}}"
        i18n="{{i18n}}"
        on-login="_retargetEvent"
        on-forgot-password="_retargetEvent"
      >
        <form part="vaadin-login-native-form" method="POST" action$="[[action]]" slot="form">
          <input id="csrf" type="hidden" />
          <vaadin-text-field
            name="username"
            label="[[i18n.form.username]]"
            id="vaadinLoginUsername"
            required
            on-keydown="_handleInputKeydown"
            autocapitalize="none"
            autocorrect="off"
            spellcheck="false"
          >
            <input type="text" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-text-field>

          <vaadin-password-field
            name="password"
            label="[[i18n.form.password]]"
            id="vaadinLoginPassword"
            required
            on-keydown="_handleInputKeydown"
            spellcheck="false"
            autocomplete="current-password"
          >
            <input type="password" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-password-field>

          <vaadin-button part="vaadin-login-submit" theme="primary contained" on-click="submit" disabled$="[[disabled]]"
            >[[i18n.form.submit]]</vaadin-button
          >
        </form>
      </vaadin-login-form-wrapper>
    `}static get is(){return"vaadin-login-form"}connectedCallback(){super.connectedCallback(),this._handleInputKeydown=this._handleInputKeydown.bind(this),this.noAutofocus||this.$.vaadinLoginUsername.focus()}_attachDom(t){this.appendChild(t)}static get observers(){return["_errorChanged(error)"]}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){if(this.disabled||!(this.__isValid(this.$.vaadinLoginUsername)&&this.__isValid(this.$.vaadinLoginPassword)))return;this.error=!1,this.disabled=!0;const t={bubbles:!0,cancelable:!0,detail:{username:this.$.vaadinLoginUsername.value,password:this.$.vaadinLoginPassword.value}},e=this.dispatchEvent(new CustomEvent("login",t));if(this.action&&e){const i=document.querySelector("meta[name=_csrf_parameter]"),s=document.querySelector("meta[name=_csrf]");i&&s&&(this.$.csrf.name=i.content,this.$.csrf.value=s.content),this.querySelector('[part="vaadin-login-native-form"]').submit()}}__isValid(t){return t.validate&&t.validate()||t.checkValidity&&t.checkValidity()}_isEnterKey(t){return t.key==="Enter"||t.keyCode===13}_handleInputKeydown(t){if(this._isEnterKey(t)){const{currentTarget:e}=t,i=e.id==="vaadinLoginUsername"?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;this.__isValid(e)&&(this.__isValid(i)?this.submit():i.focus())}}_handleInputKeyup(t){const e=t.key==="Tab"||t.keyCode===9,i=t.currentTarget;e&&i&&i.select&&(i.select(),setTimeout(()=>i.setSelectionRange(0,9999)))}}customElements.define(Ns.is,Ns);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Rs=0;function ko(r,t=[],e={}){const i=e.moduleId||`custom-style-module-${Rs}`;Rs+=1;const s=document.createElement("dom-module");r&&s.setAttribute("theme-for",r);const n=!!(t.length&&e.moduleId),o=[].concat(e.include||[]);o.length===0?s.__allStyles=t:n||(s.__partialStyles=t),s.innerHTML=`
    <template>
      ${o.map(a=>`<style include=${a}></style>`)}
      ${n?`<style>${t.map(a=>a.cssText).join(`
`)}</style>`:""}
    </template>
  `,s.register(i)}function mu(r){return ti(r.querySelector("template")).map(t=>No(t.textContent))}function gu(){const t=Ke.prototype.modules;return Object.keys(t).map(e=>{const i=t[e],s=i.getAttribute("theme-for");return i.__allStyles=i.__allStyles||mu(i).concat(i.__partialStyles||[]),{themeFor:s,moduleId:e,styles:i.__allStyles}})}window.Vaadin=window.Vaadin||{};window.Vaadin.styleModules={getAllThemes:gu,registerStyles:ko};kt&&kt.length>0&&(kt.forEach(r=>{ko(r.themeFor,r.styles,{moduleId:r.moduleId,include:r.include})}),kt.length=0);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xt extends k{static create(t,e){const i=new this;return i.__template=e,i.__component=t,i}static get is(){return"vaadin-template-renderer-templatizer"}constructor(){super(),this.__template=null,this.__component=null,this.__TemplateClass=null,this.__templateInstances=new Set}render(t,e={}){let i=t.__templateInstance;if(this.__hasTemplateInstance(i)&&this.__isTemplateInstanceAttachedToDOM(i)){this.__updateProperties(i,e);return}this.__hasTemplateInstance(i)&&this.__disposeOfTemplateInstance(i),i=this.__createTemplateInstance(e),t.__templateInstance=i,t.innerHTML="",t.appendChild(i.root)}__updateProperties(t,e){t.item===e.item&&t._setPendingProperty("item"),t.__properties=e,t.setProperties(e)}__createTemplateInstance(t){this.__createTemplateClass(t);const e=new this.__TemplateClass(t);return e.__properties=t,this.__templateInstances.add(e),e}__disposeOfTemplateInstance(t){this.__templateInstances.delete(t)}__hasTemplateInstance(t){return this.__templateInstances.has(t)}__isTemplateInstanceAttachedToDOM(t){return t.children.length===0?!1:!!t.children[0].parentElement}__createTemplateClass(t){if(this.__TemplateClass)return;const e=Object.keys(t).reduce((i,s)=>({...i,[s]:!0}),{});this.__TemplateClass=ze(this.__template,this,{parentModel:!0,instanceProps:e,forwardHostProp(i,s){this.__templateInstances.forEach(n=>{n.forwardHostProp(i,s)})},notifyInstanceProp(i,s,n){let o;o=s.split(".")[0],o=o[0].toUpperCase()+o.slice(1);const a=`_on${o}PropertyChanged`;this[a]&&this[a](i,s,n)}})}}customElements.define(Xt.is,Xt);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Tt extends Xt{static get is(){return"vaadin-template-renderer-grid-templatizer"}_onItemPropertyChanged(t,e,i){if(e==="item"||!Array.isArray(this.__grid.items))return;const s=this.__grid.items.indexOf(t.item);e=e.replace(/^item\./,""),e=`items.${s}.${e}`,this.__grid.notifyPath(e,i)}_onExpandedPropertyChanged(t,e,i){t.__properties.expanded!==i&&(i?this.__grid.expandItem(t.item):this.__grid.collapseItem(t.item))}_onSelectedPropertyChanged(t,e,i){t.__properties.selected!==i&&(i?this.__grid.selectItem(t.item):this.__grid.deselectItem(t.item))}_onDetailsOpenedPropertyChanged(t,e,i){t.__properties.detailsOpened!==i&&(i?this.__grid.openItemDetails(t.item):this.__grid.closeItemDetails(t.item))}get __grid(){return this.__component.__gridElement?this.__component:this.__component._grid}}customElements.define(Tt.is,Tt);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Be(r,t,e=Xt){const i=e.create(r,t),s=(n,o,a)=>{i.render(n,a)};return t.__templatizer=i,s.__templatized=!0,s}function Ue(r,t,e){const i=r[t];if(i&&!i.__templatized){const s=r.localName;throw new Error(`Cannot use both a template and a renderer for <${s} />.`)}r[t]=e}function vu(r){r.__suppressTemplateWarning||r.hasAttribute("suppress-template-warning")||(console.warn(`WARNING: <template> inside <${r.localName}> is deprecated. Use a renderer function instead (see https://vaad.in/template-renderer)`),r.__suppressTemplateWarning=!0)}function bu(r,t){if(t.matches(".row-details")){const e=Be(r,t,Tt);Ue(r,"rowDetailsRenderer",e)}}function yu(r,t){if(t.matches(".header")){const i=Be(r,t);Ue(r,"headerRenderer",i);return}if(t.matches(".footer")){const i=Be(r,t);Ue(r,"footerRenderer",i);return}if(t.matches(".editor")){const i=Be(r,t,Tt);Ue(r,"editModeRenderer",i);return}const e=Be(r,t,Tt);Ue(r,"renderer",e)}function wu(r,t){if(vu(r),r.__gridElement){bu(r,t);return}if(r.__gridColumnElement){yu(r,t);return}const e=Be(r,t);Ue(r,"renderer",e)}function Oo(r){X.getFlattenedNodes(r).filter(t=>t instanceof HTMLTemplateElement).forEach(t=>{t.__templatizer||wu(r,t)})}function Cu(r){r.__templateObserver||(r.__templateObserver=new X(r,()=>{Oo(r)}))}window.Vaadin=window.Vaadin||{};window.Vaadin.templateRendererCallback=r=>{Oo(r),Cu(r)};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xu=E`
  [part='input-field'],
  [part='input-field'] ::slotted(textarea) {
    height: auto;
    box-sizing: border-box;
  }

  [part='input-field'] {
    /* Equal to the implicit padding in vaadin-text-field */
    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    transition: background-color 0.1s;
    line-height: var(--lumo-line-height-s);
  }

  :host(:not([readonly])) [part='input-field']::after {
    display: none;
  }

  :host([readonly]) [part='input-field'] {
    border: 1px dashed var(--lumo-contrast-30pct);
  }

  :host([readonly]) [part='input-field']::after {
    border: none;
  }

  :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
    background-color: var(--lumo-contrast-20pct);
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field'] {
      background-color: var(--lumo-contrast-20pct);
    }
  }

  [part='input-field'] ::slotted(textarea) {
    line-height: inherit;
    --_lumo-text-field-overflow-mask-image: none;
  }

  /* Vertically align icon prefix/suffix with the first line of text */
  [part='input-field'] ::slotted(iron-icon),
  [part='input-field'] ::slotted(vaadin-icon) {
    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
  }
`;T("vaadin-text-area",[Ce,xu],{moduleId:"lumo-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Au extends ye{constructor(t,e){super(t,"textarea",()=>document.createElement("textarea"),(i,s)=>{const n=i.getAttribute("value");n&&(s.value=n);const o=i.getAttribute("name");o&&s.setAttribute("name",o),s.id=this.defaultId,typeof e=="function"&&e(s)},!0)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */T("vaadin-text-area",Pt,{moduleId:"vaadin-text-area-styles"});class $s extends yr(mr(vr(R(K(k))))){static get is(){return"vaadin-text-area"}static get template(){return M`
      <style>
        :host {
          animation: 1ms vaadin-text-area-appear;
        }

        .vaadin-text-area-container {
          flex: auto;
        }

        /* The label, helper text and the error message should neither grow nor shrink. */
        [part='label'],
        [part='helper-text'],
        [part='error-message'] {
          flex: none;
        }

        [part='input-field'] {
          flex: auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        ::slotted(textarea) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          resize: none;
          margin: 0;
          padding: 0 0.25em;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          font-size: 1em;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        /* Override styles from <vaadin-input-container> */
        [part='input-field'] ::slotted(textarea) {
          align-self: stretch;
          white-space: pre-wrap;
        }

        [part='input-field'] ::slotted(:not(textarea)) {
          align-self: flex-start;
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }

        @keyframes vaadin-text-area-appear {
          to {
            opacity: 1;
          }
        }
      </style>

      <div class="vaadin-text-area-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-scroll="__scrollPositionUpdated"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="textarea"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}get clearElement(){return this.$.clearButton}_onResize(){this.__scrollPositionUpdated()}ready(){super.ready(),this.addController(new Au(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Je(this.inputElement,this._labelController)),this.addEventListener("animationend",this._onAnimationEnd),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",t=>{const e=this._inputField.scrollTop;this._inputField.scrollTop+=t.deltaY,e!==this._inputField.scrollTop&&(t.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",`${this._inputField.scrollTop}px`)}_onAnimationEnd(t){t.animationName.indexOf("vaadin-text-area-appear")===0&&this._updateHeight()}_valueChanged(t,e){super._valueChanged(t,e),this._updateHeight()}_updateHeight(){const t=this.inputElement,e=this._inputField;if(!t||!e)return;const i=e.scrollTop,s=this.value?this.value.length:0;if(this._oldValueLength>=s){const o=getComputedStyle(e).height,a=getComputedStyle(t).width;e.style.display="block",e.style.height=o,t.style.maxWidth=a,t.style.height="auto"}this._oldValueLength=s;const n=t.scrollHeight;n>t.clientHeight&&(t.style.height=`${n}px`),t.style.removeProperty("max-width"),e.style.removeProperty("display"),e.style.removeProperty("height"),e.scrollTop=i}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const t=this.inputElement.value.match(this.pattern);return t?t[0]===t.input:!1}catch{return!0}}}customElements.define($s.is,$s);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eu={HTML:1,SVG:2},Tu=(r,t)=>t===void 0?(r==null?void 0:r._$litType$)!==void 0:(r==null?void 0:r._$litType$)===t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vi extends Ro{constructor(t){if(super(t),this.it=je,t.type!==$o.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===je||t==null)return this._t=void 0,this.it=t;if(t===Ho)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Vi.directiveName="unsafeHTML",Vi.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Bi extends Vi{}Bi.directiveName="unsafeSVG",Bi.resultType=2;const Iu=Vo(Bi);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Su(r){let t=je;if(r){const e=r.cloneNode(!0);e.removeAttribute("id"),t=Bo`${Iu(e.outerHTML)}`}return t}function Pu(r){return Tu(r,Eu.SVG)||r===je}function Du(r){let t=r==null||r===""?je:r;return Pu(t)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),t=je),t}function Mp(r,t){const e=Du(r);Bs(e,t)}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lt={};class Jt extends K(k){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static getIconset(t){let e=lt[t];return e||(e=document.createElement("vaadin-iconset"),e.name=t,lt[t]=e),e}connectedCallback(){super.connectedCallback(),this.style.display="none"}applyIcon(t){this._icons=this._icons||this.__createIconMap();const e=this._icons[this.__getIconId(t)];return{svg:Su(e),size:this.size,viewBox:e?e.getAttribute("viewBox"):null}}__createIconMap(){const t={};return this.querySelectorAll("[id]").forEach(e=>{t[this.__getIconId(e.id)]=e}),t}__getIconId(t){return(t||"").replace(`${this.name}:`,"")}__nameChanged(t,e){e&&(lt[t]=Jt.getIconset(e),delete lt[e]),t&&(lt[t]=this,document.dispatchEvent(new CustomEvent("vaadin-iconset-registered",{detail:t})))}}customElements.define(Jt.is,Jt);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zo=document.createElement("template");zo.innerHTML=`<vaadin-iconset name="lumo" size="1000">
<svg xmlns="http://www.w3.org/2000/svg">
<defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs>
</svg>
</vaadin-iconset>`;document.head.appendChild(zo.content);const ku=E`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;T("vaadin-vertical-layout",ku,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Hs extends K(R(k)){static get template(){return M`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}customElements.define(Hs.is,Hs);const Ou=function(r,t=!1){const e=document.createElement("template");e.innerHTML=r,document.head[t?"insertBefore":"appendChild"](e.content,document.head.firstChild)};let Dt;const Vs=document.getElementsByTagName("script");for(let r=0;r<Vs.length;r++){const t=Vs[r];if(t.getAttribute("type")=="module"&&t.getAttribute("data-app-id")&&!t["vaadin-bundle"]){Dt=t;break}}if(!Dt)throw new Error("Could not find the bundle script to identify the application id");Dt["vaadin-bundle"]=!0;window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});const Mo=window.Vaadin.Flow.fallbacks;Mo[Dt.getAttribute("data-app-id")]={};Mo[Dt.getAttribute("data-app-id")].loadFallback=function(){return Uo(()=>import("./generated-flow-imports-fallback.8b8731b0.js"),["generated-flow-imports-fallback.8b8731b0.js","indexhtml.d30d7242.js"],import.meta.url)};const Lp=Object.freeze(Object.defineProperty({__proto__:null,addCssBlock:Ou},Symbol.toStringTag,{value:"Module"}));export{ft as $,Sa as A,vt as B,or as C,oe as D,Cn as E,X as F,ar as G,K as H,ai as I,li as J,oi as K,cr as L,dr as M,Ri as N,gd as O,Ma as P,pr as Q,ne as R,U as S,wt as T,yr as U,Wi as V,jn as W,Md as X,Wd as Y,ni as Z,jr as _,on as a,di as a0,Ce as a1,Xr as a2,rs as a3,es as a4,Kd as a5,mr as a6,_r as a7,St as a8,Je as a9,_d as aA,hr as aB,Yt as aC,hd as aD,Bn as aE,ye as aF,gr as aG,Yd as aH,Gd as aI,Z as aJ,Xd as aK,Jd as aL,eo as aM,Lp as aN,Pt as aa,ms as ab,he as ac,be as ad,re as ae,xo as af,Jt as ag,Du as ah,Mp as ai,Ke as aj,Do as ak,Zi as al,qt as am,cs as an,$s as ao,Ct as ap,ur as aq,Kr as ar,Me as as,jd as at,It as au,Tu as av,Un as aw,ud as ax,rr as ay,de as az,Fr as b,_a as c,V as d,ze as e,rc as f,J as g,Pd as h,Xi as i,oo as j,k,Lu as l,ei as m,ea as n,Fu as o,Mu as p,M as q,Nu as r,mt as s,_t as t,nn as u,sa as v,D as w,na as x,no as y,so as z};
