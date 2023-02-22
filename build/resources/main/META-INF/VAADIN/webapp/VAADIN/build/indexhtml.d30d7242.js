(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.spreadsheetComponent=!1;window.Vaadin.featureFlags.hillaPush=!1;window.Vaadin.featureFlags.hillaEngine=!1;window.Vaadin.featureFlags.oldLicenseChecker=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.webpackForFrontendBuild=!1;window.Vaadin.featureFlags.enforceFieldValidation=!1;const hr="modulepreload",fr=function(r,e){return new URL(r,e).href},ct={},qe=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=fr(n,o),n in ct)return;ct[n]=!0;const i=n.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":hr,i||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),i)return new Promise((s,l)=>{c.addEventListener("load",s),c.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};function Ee(r){return r=r||[],Array.isArray(r)?r:[r]}function L(r){return`[Vaadin.Router] ${r}`}function gr(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const $e="module",Ce="nomodule",Ge=[$e,Ce];function dt(r){if(!r.match(/.+\.[m]?js$/))throw new Error(L(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function Dt(r){if(!r||!R(r.path))throw new Error(L('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!U(r.action)&&!Array.isArray(r.children)&&!U(r.children)&&!Ae(e)&&!t.some(o=>R(r[o])))throw new Error(L(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(R(e))dt(e);else if(Ge.some(o=>o in e))Ge.forEach(o=>o in e&&dt(e[o]));else throw new Error(L('Expected route bundle to include either "'+Ce+'" or "'+$e+'" keys, or both'));r.redirect&&["bundle","component"].forEach(o=>{o in r&&console.warn(L(`Route config "${r.path}" has both "redirect" and "${o}" properties, and "redirect" will always override the latter. Did you mean to only use "${o}"?`))})}function mt(r){Ee(r).forEach(e=>Dt(e))}function ut(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===$e?t.setAttribute("type",$e):e===Ce&&t.setAttribute(Ce,""),t.async=!0),new Promise((o,n)=>{t.onreadystatechange=t.onload=i=>{t.__dynamicImportLoaded=!0,o(i)},t.onerror=i=>{t.parentNode&&t.parentNode.removeChild(t),n(i)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&o()})}function vr(r){return R(r)?ut(r):Promise.race(Ge.filter(e=>e in r).map(e=>ut(r[e],e)))}function ne(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function Ae(r){return typeof r=="object"&&!!r}function U(r){return typeof r=="function"}function R(r){return typeof r=="string"}function Ut(r){const e=new Error(L(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const J=new class{};function xr(r){const e=r.port,t=r.protocol,i=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${i}`}function pt(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let c=0;c<t.length;c++){const s=t[c];if(s.nodeName&&s.nodeName.toLowerCase()==="a"){e=s;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||xr(e))!==window.location.origin)return;const{pathname:n,search:i,hash:a}=e;ne("go",{pathname:n,search:i,hash:a})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const yr={activate(){window.document.addEventListener("click",pt)},inactivate(){window.document.removeEventListener("click",pt)}},br=/Trident/.test(navigator.userAgent);br&&!U(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,Boolean(e.bubbles),Boolean(e.cancelable)),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function ht(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:o}=window.location;ne("go",{pathname:e,search:t,hash:o})}const wr={activate(){window.addEventListener("popstate",ht)},inactivate(){window.removeEventListener("popstate",ht)}};var ee=qt,_r=Ze,Sr=Ar,Er=Ht,$r=Wt,Ft="/",jt="./",Cr=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ze(r,e){for(var t=[],o=0,n=0,i="",a=e&&e.delimiter||Ft,c=e&&e.delimiters||jt,s=!1,l;(l=Cr.exec(r))!==null;){var h=l[0],p=l[1],u=l.index;if(i+=r.slice(n,u),n=u+h.length,p){i+=p[1],s=!0;continue}var f="",k=r[n],A=l[2],ue=l[3],Oe=l[4],C=l[5];if(!s&&i.length){var O=i.length-1;c.indexOf(i[O])>-1&&(f=i[O],i=i.slice(0,O))}i&&(t.push(i),i="",s=!1);var j=f!==""&&k!==void 0&&k!==f,H=C==="+"||C==="*",ke=C==="?"||C==="*",P=f||a,pe=ue||Oe;t.push({name:A||o++,prefix:f,delimiter:P,optional:ke,repeat:H,partial:j,pattern:pe?Tr(pe):"[^"+N(P)+"]+?"})}return(i||n<r.length)&&t.push(i+r.substr(n)),t}function Ar(r,e){return Ht(Ze(r,e))}function Ht(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(o,n){for(var i="",a=n&&n.encode||encodeURIComponent,c=0;c<r.length;c++){var s=r[c];if(typeof s=="string"){i+=s;continue}var l=o?o[s.name]:void 0,h;if(Array.isArray(l)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(l.length===0){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(h=a(l[p],s),!e[c].test(h))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');i+=(p===0?s.prefix:s.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=a(String(l),s),!e[c].test(h))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+h+'"');i+=s.prefix+h;continue}if(s.optional){s.partial&&(i+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}return i}}function N(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Tr(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Bt(r){return r&&r.sensitive?"":"i"}function zr(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var o=0;o<t.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function Rr(r,e,t){for(var o=[],n=0;n<r.length;n++)o.push(qt(r[n],e,t).source);return new RegExp("(?:"+o.join("|")+")",Bt(t))}function Lr(r,e,t){return Wt(Ze(r,t),e,t)}function Wt(r,e,t){t=t||{};for(var o=t.strict,n=t.start!==!1,i=t.end!==!1,a=N(t.delimiter||Ft),c=t.delimiters||jt,s=[].concat(t.endsWith||[]).map(N).concat("$").join("|"),l=n?"^":"",h=r.length===0,p=0;p<r.length;p++){var u=r[p];if(typeof u=="string")l+=N(u),h=p===r.length-1&&c.indexOf(u[u.length-1])>-1;else{var f=u.repeat?"(?:"+u.pattern+")(?:"+N(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=N(u.prefix)+"("+f+")?":l+="(?:"+N(u.prefix)+"("+f+"))?":l+=N(u.prefix)+"("+f+")"}}return i?(o||(l+="(?:"+a+")?"),l+=s==="$"?"$":"(?="+s+")"):(o||(l+="(?:"+a+"(?="+s+"))?"),h||(l+="(?="+a+"|"+s+")")),new RegExp(l,Bt(t))}function qt(r,e,t){return r instanceof RegExp?zr(r,e):Array.isArray(r)?Rr(r,e,t):Lr(r,e,t)}ee.parse=_r;ee.compile=Sr;ee.tokensToFunction=Er;ee.tokensToRegExp=$r;const{hasOwnProperty:Or}=Object.prototype,Ke=new Map;Ke.set("|false",{keys:[],pattern:/(?:)/});function ft(r){try{return decodeURIComponent(r)}catch{return r}}function kr(r,e,t,o,n){t=!!t;const i=`${r}|${t}`;let a=Ke.get(i);if(!a){const l=[];a={keys:l,pattern:ee(r,l,{end:t,strict:r===""})},Ke.set(i,a)}const c=a.pattern.exec(e);if(!c)return null;const s=Object.assign({},n);for(let l=1;l<c.length;l++){const h=a.keys[l-1],p=h.name,u=c[l];(u!==void 0||!Or.call(s,p))&&(h.repeat?s[p]=u?u.split(h.delimiter).map(ft):[]:s[p]=u&&ft(u))}return{path:c[0],keys:(o||[]).concat(a.keys),params:s}}function Gt(r,e,t,o,n){let i,a,c=0,s=r.path||"";return s.charAt(0)==="/"&&(t&&(s=s.substr(1)),t=!0),{next(l){if(r===l)return{done:!0};const h=r.__children=r.__children||r.children;if(!i&&(i=kr(s,e,!h,o,n),i))return{done:!1,value:{route:r,keys:i.keys,params:i.params,path:i.path}};if(i&&h)for(;c<h.length;){if(!a){const u=h[c];u.parent=r;let f=i.path.length;f>0&&e.charAt(f)==="/"&&(f+=1),a=Gt(u,e.substr(f),t,i.keys,i.params)}const p=a.next(l);if(!p.done)return{done:!1,value:p.value};a=null,c++}return{done:!0}}}}function Pr(r){if(U(r.route.action))return r.route.action(r)}function Ir(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function Nr(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Mr(r,e){const{route:t,path:o}=e;if(t&&!t.__synthetic){const n={path:o,route:t};if(!r.chain)r.chain=[];else if(t.parent){let i=r.chain.length;for(;i--&&r.chain[i].route&&r.chain[i].route!==t.parent;)r.chain.pop()}r.chain.push(n)}}class ae{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Pr,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){mt(e);const t=[...Ee(e)];this.root.__children=t}addRoutes(e){return mt(e),this.root.__children.push(...Ee(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,R(e)?{pathname:e}:e),o=Gt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute;let i=null,a=null,c=t;function s(l,h=i.value.route,p){const u=p===null&&i.value.route;return i=a||o.next(u),a=null,!l&&(i.done||!Ir(h,i.value.route))?(a=i,Promise.resolve(J)):i.done?Promise.reject(Ut(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,i.value),Mr(c,i.value),Promise.resolve(n(c)).then(f=>f!=null&&f!==J?(c.result=f.result||f,c):s(l,h,f)))}return t.next=s,Promise.resolve().then(()=>s(!0,this.root)).catch(l=>{const h=Nr(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,o=this.constructor.__createUrl(e,t).href;if(o.slice(0,t.length)===t)return o.slice(t.length)}}ae.pathToRegexp=ee;const{pathToRegexp:gt}=ae,vt=new Map;function Kt(r,e,t){const o=e.name||e.component;if(o&&(r.has(o)?r.get(o).push(e):r.set(o,[e])),Array.isArray(t))for(let n=0;n<t.length;n++){const i=t[n];i.parent=e,Kt(r,i,i.__children||i.children)}}function xt(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function yt(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Vr(r,e={}){if(!(r instanceof ae))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(o,n)=>{let i=xt(t,o);if(!i&&(t.clear(),Kt(t,r.root,r.root.__children),i=xt(t,o),!i))throw new Error(`Route "${o}" not found`);let a=vt.get(i.fullPath);if(!a){let s=yt(i),l=i.parent;for(;l;){const f=yt(l);f&&(s=f.replace(/\/$/,"")+"/"+s.replace(/^\//,"")),l=l.parent}const h=gt.parse(s),p=gt.tokensToFunction(h),u=Object.create(null);for(let f=0;f<h.length;f++)R(h[f])||(u[h[f].name]=!0);a={toPath:p,keys:u},vt.set(s,a),i.fullPath=s}let c=a.toPath(n,e)||"/";if(e.stringifyQueryParams&&n){const s={},l=Object.keys(n);for(let p=0;p<l.length;p++){const u=l[p];a.keys[u]||(s[u]=n[u])}const h=e.stringifyQueryParams(s);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let bt=[];function Dr(r){bt.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),bt=r}const Ur=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},Fr=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function wt(r,e){return r.classList.add(e),new Promise(t=>{if(Ur(r)){const o=r.getBoundingClientRect(),n=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;r.setAttribute("style",`position: absolute; ${n}`),Fr(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const jr=256;function Me(r){return r!=null}function Hr(r){const e=Object.assign({},r);return delete e.next,e}function T({pathname:r="",search:e="",hash:t="",chain:o=[],params:n={},redirectFrom:i,resolver:a},c){const s=o.map(l=>l.route);return{baseUrl:a&&a.baseUrl||"",pathname:r,search:e,hash:t,routes:s,route:c||s.length&&s[s.length-1]||null,params:n,redirectFrom:i,getUrl:(l={})=>we(V.pathToRegexp.compile(Jt(s))(Object.assign({},n,l)),a)}}function _t(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function Br(r,e){e.location=T(r);const t=r.chain.map(o=>o.route).indexOf(r.route);return r.chain[t].element=e,e}function be(r,e,t){if(U(r))return r.apply(t,e)}function St(r,e,t){return o=>{if(o&&(o.cancel||o.redirect))return o;if(t)return be(t[r],e,t)}}function Wr(r,e){if(!Array.isArray(r)&&!Ae(r))throw new Error(L(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=Ee(r);for(let o=0;o<t.length;o++)Dt(t[o]),e.__children.push(t[o])}function xe(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function we(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function Jt(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class V extends ae{constructor(e,t){const o=document.head.querySelector("base"),n=o&&o.getAttribute("href");super([],Object.assign({baseUrl:n&&ae.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=a=>this.__resolveRoute(a);const i=V.NavigationTrigger;V.setTriggers.apply(V,Object.keys(i).map(a=>i[a])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=T({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let o=Promise.resolve();U(t.children)&&(o=o.then(()=>t.children(Hr(e))).then(i=>{!Me(i)&&!U(t.children)&&(i=t.children),Wr(i,t)}));const n={redirect:i=>_t(e,i),component:i=>{const a=document.createElement(i);return this.__createdByRouter.set(a,!0),a}};return o.then(()=>{if(this.__isLatestRender(e))return be(t.action,[e,n],t)}).then(i=>{if(Me(i)&&(i instanceof HTMLElement||i.redirect||i===J))return i;if(R(t.redirect))return n.redirect(t.redirect);if(t.bundle)return vr(t.bundle).then(()=>{},()=>{throw new Error(L(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(i=>{if(Me(i))return i;if(R(t.component))return n.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const o=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},R(e)?{pathname:e}:e,{__renderId:o});return this.ready=this.resolve(n).then(i=>this.__fullyResolveChain(i)).then(i=>{if(this.__isLatestRender(i)){const a=this.__previousContext;if(i===a)return this.__updateBrowserHistory(a,!0),this.location;if(this.location=T(i),t&&this.__updateBrowserHistory(i,o===1),ne("location-changed",{router:this,location:this.location}),i.__skipAttach)return this.__copyUnchangedElements(i,a),this.__previousContext=i,this.location;this.__addAppearingContent(i,a);const c=this.__animateIfNeeded(i);return this.__runOnAfterEnterCallbacks(i),this.__runOnAfterLeaveCallbacks(i,a),c.then(()=>{if(this.__isLatestRender(i))return this.__removeDisappearingContent(),this.__previousContext=i,this.location})}}).catch(i=>{if(o===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),xe(this.__outlet&&this.__outlet.children),this.location=T(Object.assign(n,{resolver:this})),ne("error",Object.assign({router:this,error:i},n)),i}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(o=>{const i=o!==t?o:e,c=we(Jt(o.chain),o.resolver)===o.pathname,s=(l,h=l.route,p)=>l.next(void 0,h,p).then(u=>u===null||u===J?c?l:h.parent!==null?s(l,h.parent,u):u:u);return s(o).then(l=>{if(l===null||l===J)throw Ut(i);return l&&l!==J&&l!==o?this.__fullyResolveChain(i,l):this.__amendWithOnBeforeCallbacks(o)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Br(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(o=>this.__findComponentContextAfterAllRedirects(o)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(L(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${gr(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},o=t.chain||[],n=e.chain;let i=Promise.resolve();const a=()=>({cancel:!0}),c=s=>_t(e,s);if(e.__divergedChainIndex=0,e.__skipAttach=!1,o.length){for(let s=0;s<Math.min(o.length,n.length)&&!(o[s].route!==n[s].route||o[s].path!==n[s].path&&o[s].element!==n[s].element||!this.__isReusableElement(o[s].element,n[s].element));s=++e.__divergedChainIndex);if(e.__skipAttach=n.length===o.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let s=n.length-1;s>=0;s--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:a},o[s]);for(let s=0;s<n.length;s++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:a,redirect:c},n[s]),o[s].element.location=T(e,o[s].route)}else for(let s=o.length-1;s>=e.__divergedChainIndex;s--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:a},o[s])}if(!e.__skipAttach)for(let s=0;s<n.length;s++)s<e.__divergedChainIndex?s<o.length&&o[s].element&&(o[s].element.location=T(e,o[s].route)):(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:a,redirect:c},n[s]),n[s].element&&(n[s].element.location=T(e,n[s].route)));return i.then(s=>{if(s){if(s.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(s.redirect)return this.__redirect(s.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,o,n){const i=T(t);return e.then(a=>{if(this.__isLatestRender(t))return St("onBeforeLeave",[i,o,this],n.element)(a)}).then(a=>{if(!(a||{}).redirect)return a})}__runOnBeforeEnterCallbacks(e,t,o,n){const i=T(t,n.route);return e.then(a=>{if(this.__isLatestRender(t))return St("onBeforeEnter",[i,o,this],n.element)(a)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,o){if(t>jr)throw new Error(L(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:o})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(L(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:o=""},n){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==o){const i=n?"replaceState":"pushState";window.history[i](null,document.title,e+t+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let o=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){const i=t&&t.chain[n].element;if(i)if(i.parentNode===o)e.chain[n].element=i,o=i;else break}return o}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const o=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(o.children).filter(i=>this.__addedByRouter.get(i)&&i!==e.result);let n=o;for(let i=e.__divergedChainIndex;i<e.chain.length;i++){const a=e.chain[i].element;a&&(n.appendChild(a),this.__addedByRouter.set(a,!0),n===o&&this.__appearingContent.push(a),n=a)}}__removeDisappearingContent(){this.__disappearingContent&&xe(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(xe(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(!!t)for(let o=t.chain.length-1;o>=e.__divergedChainIndex&&this.__isLatestRender(e);o--){const n=t.chain[o].element;if(!!n)try{const i=T(e);be(n.onAfterLeave,[i,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&xe(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const o=e.chain[t].element||{},n=T(e,e.chain[t].route);be(o.onAfterEnter,[n,{},e.resolver],o)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],o=(this.__appearingContent||[])[0],n=[],i=e.chain;let a;for(let c=i.length;c>0;c--)if(i[c-1].route.animate){a=i[c-1].route.animate;break}if(t&&o&&a){const c=Ae(a)&&a.leave||"leaving",s=Ae(a)&&a.enter||"entering";n.push(wt(t,c)),n.push(wt(o,s))}return Promise.all(n).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:o,hash:n}=e?e.detail:window.location;R(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:o,hash:n},!0))}static setTriggers(...e){Dr(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Vr(this)),we(this.__urlForName(e,t),this)}urlForPath(e,t){return we(V.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:o,hash:n}=R(e)?this.__createUrl(e,"http://a"):e;return ne("go",{pathname:t,search:o,hash:n})}}const qr=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,_e=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Gr(){function r(){return!0}return Xt(r)}function Kr(){try{return Jr()?!0:Xr()?_e?!Zr():!Gr():!1}catch{return!1}}function Jr(){return localStorage.getItem("vaadin.developmentmode.force")}function Xr(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Zr(){return!!(_e&&Object.keys(_e).map(e=>_e[e]).filter(e=>e.productionMode).length>0)}function Xt(r,e){if(typeof r!="function")return;const t=qr.exec(r.toString());if(t)try{r=new Function(t[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return r(e)}window.Vaadin=window.Vaadin||{};const Et=function(r,e){if(window.Vaadin.developmentMode)return Xt(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Kr());function Qr(){}const Yr=function(){if(typeof Et=="function")return Et(Qr)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Yr();V.NavigationTrigger={POPSTATE:wr,CLICK:yr};var Ve,x;(function(r){r.CONNECTED="connected",r.LOADING="loading",r.RECONNECTING="reconnecting",r.CONNECTION_LOST="connection-lost"})(x||(x={}));class eo{constructor(e){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=e,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(t=>{var o;(o=t==null?void 0:t.active)===null||o===void 0||o.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(e){this.stateChangeListeners.add(e)}removeStateChangeListener(e){this.stateChangeListeners.delete(e)}loadingStarted(){this.state=x.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(x.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(x.CONNECTION_LOST)}decreaseLoadingCount(e){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=e))}get state(){return this.connectionState}set state(e){if(e!==this.connectionState){const t=this.connectionState;this.connectionState=e,this.loadingCount=0;for(const o of this.stateChangeListeners)o(t,this.connectionState)}}get online(){return this.connectionState===x.CONNECTED||this.connectionState===x.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(e){typeof e.data=="object"&&e.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(e.data.result===!0&&(this.state=x.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const ye=window;!((Ve=ye.Vaadin)===null||Ve===void 0)&&Ve.connectionState||(ye.Vaadin=ye.Vaadin||{},ye.Vaadin.connectionState=new eo(navigator.onLine?x.CONNECTED:x.CONNECTION_LOST));function E(r,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,e,t,o);else for(var c=r.length-1;c>=0;c--)(a=r[c])&&(i=(n<3?a(i):n>3?a(e,t,i):a(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=window,Qe=Se.ShadowRoot&&(Se.ShadyCSS===void 0||Se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ye=Symbol(),$t=new WeakMap;class et{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Qe&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=$t.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&$t.set(t,e))}return e}toString(){return this.cssText}}const to=r=>new et(typeof r=="string"?r:r+"",void 0,Ye),I=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((o,n,i)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[i+1],r[0]);return new et(t,r,Ye)},ro=(r,e)=>{Qe?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const o=document.createElement("style"),n=Se.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=t.cssText,r.appendChild(o)})},Ct=Qe?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return to(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var De;const Te=window,At=Te.trustedTypes,oo=At?At.emptyScript:"",Tt=Te.reactiveElementPolyfillSupport,Je={toAttribute(r,e){switch(e){case Boolean:r=r?oo:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Zt=(r,e)=>e!==r&&(e==e||r==r),Ue={attribute:!0,type:String,converter:Je,reflect:!1,hasChanged:Zt};class K extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,o)=>{const n=this._$Ep(o,t);n!==void 0&&(this._$Ev.set(n,o),e.push(n))}),e}static createProperty(e,t=Ue){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ue}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of o)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const n of o)t.unshift(Ct(n))}else e!==void 0&&t.push(Ct(e));return t}static _$Ep(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ro(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=Ue){var n;const i=this.constructor._$Ep(e,o);if(i!==void 0&&o.reflect===!0){const a=(((n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?o.converter:Je).toAttribute(t,o.type);this._$El=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(e,t){var o;const n=this.constructor,i=n._$Ev.get(e);if(i!==void 0&&this._$El!==i){const a=n.getPropertyOptions(i),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?a.converter:Je;this._$El=i,this[i]=c.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,o){let n=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||Zt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,i)=>this[i]=n),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(o)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$EO(o,this[o],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}K.finalized=!0,K.elementProperties=new Map,K.elementStyles=[],K.shadowRootOptions={mode:"open"},Tt==null||Tt({ReactiveElement:K}),((De=Te.reactiveElementVersions)!==null&&De!==void 0?De:Te.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fe;const ze=window,Z=ze.trustedTypes,zt=Z?Z.createPolicy("lit-html",{createHTML:r=>r}):void 0,M=`lit$${(Math.random()+"").slice(9)}$`,Qt="?"+M,no=`<${Qt}>`,Q=document,se=(r="")=>Q.createComment(r),le=r=>r===null||typeof r!="object"&&typeof r!="function",Yt=Array.isArray,io=r=>Yt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rt=/-->/g,Lt=/>/g,D=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ot=/'/g,kt=/"/g,er=/^(?:script|style|textarea|title)$/i,tr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),ao=tr(1),Ho=tr(2),F=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Pt=new WeakMap,so=(r,e,t)=>{var o,n;const i=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:e;let a=i._$litPart$;if(a===void 0){const c=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=a=new me(e.insertBefore(se(),c),c,void 0,t!=null?t:{})}return a._$AI(r),a},X=Q.createTreeWalker(Q,129,null,!1),lo=(r,e)=>{const t=r.length-1,o=[];let n,i=e===2?"<svg>":"",a=te;for(let s=0;s<t;s++){const l=r[s];let h,p,u=-1,f=0;for(;f<l.length&&(a.lastIndex=f,p=a.exec(l),p!==null);)f=a.lastIndex,a===te?p[1]==="!--"?a=Rt:p[1]!==void 0?a=Lt:p[2]!==void 0?(er.test(p[2])&&(n=RegExp("</"+p[2],"g")),a=D):p[3]!==void 0&&(a=D):a===D?p[0]===">"?(a=n!=null?n:te,u=-1):p[1]===void 0?u=-2:(u=a.lastIndex-p[2].length,h=p[1],a=p[3]===void 0?D:p[3]==='"'?kt:Ot):a===kt||a===Ot?a=D:a===Rt||a===Lt?a=te:(a=D,n=void 0);const k=a===D&&r[s+1].startsWith("/>")?" ":"";i+=a===te?l+no:u>=0?(o.push(h),l.slice(0,u)+"$lit$"+l.slice(u)+M+k):l+M+(u===-2?(o.push(void 0),s):k)}const c=i+(r[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[zt!==void 0?zt.createHTML(c):c,o]};class ce{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,a=0;const c=e.length-1,s=this.parts,[l,h]=lo(e,t);if(this.el=ce.createElement(l,o),X.currentNode=this.el.content,t===2){const p=this.el.content,u=p.firstChild;u.remove(),p.append(...u.childNodes)}for(;(n=X.nextNode())!==null&&s.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const p=[];for(const u of n.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(M)){const f=h[a++];if(p.push(u),f!==void 0){const k=n.getAttribute(f.toLowerCase()+"$lit$").split(M),A=/([.?@])?(.*)/.exec(f);s.push({type:1,index:i,name:A[2],strings:k,ctor:A[1]==="."?mo:A[1]==="?"?po:A[1]==="@"?ho:Re})}else s.push({type:6,index:i})}for(const u of p)n.removeAttribute(u)}if(er.test(n.tagName)){const p=n.textContent.split(M),u=p.length-1;if(u>0){n.textContent=Z?Z.emptyScript:"";for(let f=0;f<u;f++)n.append(p[f],se()),X.nextNode(),s.push({type:2,index:++i});n.append(p[u],se())}}}else if(n.nodeType===8)if(n.data===Qt)s.push({type:2,index:i});else{let p=-1;for(;(p=n.data.indexOf(M,p+1))!==-1;)s.push({type:7,index:i}),p+=M.length-1}i++}}static createElement(e,t){const o=Q.createElement("template");return o.innerHTML=e,o}}function Y(r,e,t=r,o){var n,i,a,c;if(e===F)return e;let s=o!==void 0?(n=t._$Cl)===null||n===void 0?void 0:n[o]:t._$Cu;const l=le(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==l&&((i=s==null?void 0:s._$AO)===null||i===void 0||i.call(s,!1),l===void 0?s=void 0:(s=new l(r),s._$AT(r,t,o)),o!==void 0?((a=(c=t)._$Cl)!==null&&a!==void 0?a:c._$Cl=[])[o]=s:t._$Cu=s),s!==void 0&&(e=Y(r,s._$AS(r,e.values),s,o)),e}class co{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:o},parts:n}=this._$AD,i=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Q).importNode(o,!0);X.currentNode=i;let a=X.nextNode(),c=0,s=0,l=n[0];for(;l!==void 0;){if(c===l.index){let h;l.type===2?h=new me(a,a.nextSibling,this,e):l.type===1?h=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(h=new fo(a,this,e)),this.v.push(h),l=n[++s]}c!==(l==null?void 0:l.index)&&(a=X.nextNode(),c++)}return i}m(e){let t=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class me{constructor(e,t,o,n){var i;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$C_=(i=n==null?void 0:n.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$C_}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),le(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==F&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):io(e)?this.O(e):this.$(e)}S(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}$(e){this._$AH!==y&&le(this._$AH)?this._$AA.nextSibling.data=e:this.k(Q.createTextNode(e)),this._$AH=e}T(e){var t;const{values:o,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ce.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.m(o);else{const a=new co(i,this),c=a.p(this.options);a.m(o),this.k(c),this._$AH=a}}_$AC(e){let t=Pt.get(e.strings);return t===void 0&&Pt.set(e.strings,t=new ce(e)),t}O(e){Yt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new me(this.S(se()),this.S(se()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$C_=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Re{constructor(e,t,o,n,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const i=this.strings;let a=!1;if(i===void 0)e=Y(this,e,t,0),a=!le(e)||e!==this._$AH&&e!==F,a&&(this._$AH=e);else{const c=e;let s,l;for(e=i[0],s=0;s<i.length-1;s++)l=Y(this,c[o+s],t,s),l===F&&(l=this._$AH[s]),a||(a=!le(l)||l!==this._$AH[s]),l===y?e=y:e!==y&&(e+=(l!=null?l:"")+i[s+1]),this._$AH[s]=l}a&&!n&&this.P(e)}P(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class mo extends Re{constructor(){super(...arguments),this.type=3}P(e){this.element[this.name]=e===y?void 0:e}}const uo=Z?Z.emptyScript:"";class po extends Re{constructor(){super(...arguments),this.type=4}P(e){e&&e!==y?this.element.setAttribute(this.name,uo):this.element.removeAttribute(this.name)}}class ho extends Re{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=(o=Y(this,e,t,0))!==null&&o!==void 0?o:y)===F)return;const n=this._$AH,i=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==y&&(n===y||i);i&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}}class fo{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const It=ze.litHtmlPolyfillSupport;It==null||It(ce,me),((Fe=ze.litHtmlVersions)!==null&&Fe!==void 0?Fe:ze.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var je,He;class ie extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=so(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return F}}ie.finalized=!0,ie._$litElement$=!0,(je=globalThis.litElementHydrateSupport)===null||je===void 0||je.call(globalThis,{LitElement:ie});const Nt=globalThis.litElementPolyfillSupport;Nt==null||Nt({LitElement:ie});((He=globalThis.litElementVersions)!==null&&He!==void 0?He:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const go=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}};function $(r){return(e,t)=>t!==void 0?((o,n,i)=>{n.constructor.createProperty(i,o)})(r,e,t):go(r,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Be;((Be=window.HTMLSlotElement)===null||Be===void 0?void 0:Be.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xo=r=>(...e)=>({_$litDirective$:r,values:e});class yo{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bo=xo(class extends yo{constructor(r){var e;if(super(r),r.type!==vo.ATTRIBUTE||r.name!=="class"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var t,o;if(this.nt===void 0){this.nt=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!(!((t=this.st)===null||t===void 0)&&t.has(i))&&this.nt.add(i);return this.render(e)}const n=r.element.classList;this.nt.forEach(i=>{i in e||(n.remove(i),this.nt.delete(i))});for(const i in e){const a=!!e[i];a===this.nt.has(i)||((o=this.st)===null||o===void 0?void 0:o.has(i))||(a?(n.add(i),this.nt.add(i)):(n.remove(i),this.nt.delete(i)))}return F}}),We="css-loading-indicator";var z;(function(r){r.IDLE="",r.FIRST="first",r.SECOND="second",r.THIRD="third"})(z||(z={}));class b extends ie{constructor(){super(),this.firstDelay=300,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=z.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=x.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}static create(){var e,t;const o=window;return!((e=o.Vaadin)===null||e===void 0)&&e.connectionIndicator||(o.Vaadin=o.Vaadin||{},o.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(o.Vaadin.connectionIndicator)),(t=o.Vaadin)===null||t===void 0?void 0:t.connectionIndicator}render(){return ao`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${bo({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var e;super.connectedCallback();const t=window;!((e=t.Vaadin)===null||e===void 0)&&e.connectionState&&(this.connectionStateStore=t.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(e){e!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=e,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var e;const t=(e=this.connectionStateStore)===null||e===void 0?void 0:e.state;return this.offline=t===x.CONNECTION_LOST,this.reconnecting=t===x.RECONNECTING,this.updateLoading(t===x.LOADING),this.loading?!1:t!==this.lastMessageState?(this.lastMessageState=t,!0):!1}updateLoading(e){this.loading=e,this.loadingBarState=z.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,e,()=>{this.loadingBarState=z.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,e,()=>{this.loadingBarState=z.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,e,()=>{this.loadingBarState=z.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(We)){const e=document.createElement("style");e.id=We,e.textContent=this.getDefaultStyle(),document.head.appendChild(e)}}else{const e=document.getElementById(We);e&&document.head.removeChild(e)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case z.IDLE:return"display: none";case z.FIRST:case z.SECOND:case z.THIRD:return"display: block";default:return""}}timeoutFor(e,t,o,n){return e!==0&&window.clearTimeout(e),t?window.setTimeout(o,n):0}static get instance(){return b.create()}}E([$({type:Number})],b.prototype,"firstDelay",void 0);E([$({type:Number})],b.prototype,"secondDelay",void 0);E([$({type:Number})],b.prototype,"thirdDelay",void 0);E([$({type:Number})],b.prototype,"expandedDuration",void 0);E([$({type:String})],b.prototype,"onlineText",void 0);E([$({type:String})],b.prototype,"offlineText",void 0);E([$({type:String})],b.prototype,"reconnectingText",void 0);E([$({type:Boolean,reflect:!0})],b.prototype,"offline",void 0);E([$({type:Boolean,reflect:!0})],b.prototype,"reconnecting",void 0);E([$({type:Boolean,reflect:!0})],b.prototype,"expanded",void 0);E([$({type:Boolean,reflect:!0})],b.prototype,"loading",void 0);E([$({type:String})],b.prototype,"loadingBarState",void 0);E([$({type:Boolean})],b.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",b);b.instance;const de=window;de.Vaadin=de.Vaadin||{};de.Vaadin.registrations=de.Vaadin.registrations||[];de.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.17"});class Mt extends Error{}const re=window.document.body,v=window;class wo{constructor(e){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,re.$=re.$||[],this.config=e||{},v.Vaadin=v.Vaadin||{},v.Vaadin.Flow=v.Vaadin.Flow||{},v.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const t=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||t&&t.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,v.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,v.Vaadin.connectionState.loadingFinished()}get action(){return async e=>{if(this.pathname=e.pathname,v.Vaadin.connectionState.online)try{await this.flowInit()}catch(t){if(t instanceof Mt)return v.Vaadin.connectionState.state=x.CONNECTION_LOST,this.offlineStubAction();throw t}else return this.offlineStubAction();return this.container.onBeforeEnter=(t,o)=>this.flowNavigate(t,o),this.container.onBeforeLeave=(t,o)=>this.flowLeave(t,o),this.container}}async flowLeave(e,t){const{connectionState:o}=v.Vaadin;return this.pathname===e.pathname||!this.isFlowClientLoaded()||o.offline?Promise.resolve({}):new Promise(n=>{this.loadingStarted(),this.container.serverConnected=i=>{n(t&&i?t.prevent():{}),this.loadingFinished()},re.$server.leaveNavigation(this.getFlowRoute(e))})}async flowNavigate(e,t){return this.response?new Promise(o=>{this.loadingStarted(),this.container.serverConnected=(n,i)=>{t&&n?o(t.prevent()):t&&t.redirect&&i?o(t.redirect(i.pathname)):(this.container.style.display="",o(this.container)),this.loadingFinished()},re.$server.connectClient(this.container.localName,this.container.id,this.getFlowRoute(e),this.appShellTitle,history.state)}):Promise.resolve(this.container)}getFlowRoute(e){return(e.pathname+(e.search||"")).replace(this.baseRegex,"")}async flowInit(e=!1){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi(e),this.response.appConfig.clientRouting=!e;const{pushScript:t,appConfig:o}=this.response;typeof t=="string"&&await this.loadScript(t);const{appId:n}=o;await(await qe(()=>import("./FlowBootstrap.0b77bed3.js"),[],import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(n),await this.config.imports());const a=await qe(()=>import("./FlowClient.947c8d40.js"),[],import.meta.url);if(await this.flowInitClient(a),!e){const c=`flow-container-${n.toLowerCase()}`;this.container=document.createElement(c),re.$[n]=this.container,this.container.id=n}this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(e){return new Promise((t,o)=>{const n=document.createElement("script");n.onload=()=>t(),n.onerror=o,n.src=e,document.body.appendChild(n)})}injectAppIdScript(e){const t=e.substring(0,e.lastIndexOf("-")),o=document.createElement("script");o.type="module",o.setAttribute("data-app-id",t),document.body.append(o)}async flowInitClient(e){return e.init(),new Promise(t=>{const o=setInterval(()=>{Object.keys(v.Vaadin.Flow.clients).filter(i=>i!=="TypeScript").reduce((i,a)=>i||v.Vaadin.Flow.clients[a].isActive(),!1)||(clearInterval(o),t())},5)})}async flowInitUi(e){const t=v.Vaadin&&v.Vaadin.TypeScript&&v.Vaadin.TypeScript.initial;return t?(v.Vaadin.TypeScript.initial=void 0,Promise.resolve(t)):new Promise((o,n)=>{const a=new XMLHttpRequest,c=e?"&serverSideRouting":"",s=`?v-r=init&location=${encodeURIComponent(this.getFlowRoute(location))}${c}`;a.open("GET",s),a.onerror=()=>n(new Mt(`Invalid server response when initializing Flow UI.
        ${a.status}
        ${a.responseText}`)),a.onload=()=>{const l=a.getResponseHeader("content-type");l&&l.indexOf("application/json")!==-1?o(JSON.parse(a.responseText)):a.onerror()},a.send()})}addConnectionIndicator(){b.create(),v.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){v.Vaadin.connectionState.state=x.RECONNECTING;const e=new XMLHttpRequest;e.open("HEAD","sw.js"),e.onload=()=>{v.Vaadin.connectionState.state=x.CONNECTED},e.onerror=()=>{v.Vaadin.connectionState.state=x.CONNECTION_LOST},setTimeout(()=>e.send(),50)}}),v.addEventListener("offline",()=>{this.isFlowClientLoaded()||(v.Vaadin.connectionState.state=x.CONNECTION_LOST)})}async offlineStubAction(){const e=document.createElement("iframe"),t="./offline-stub.html";e.setAttribute("src",t),e.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let o;const n=()=>{o!==void 0&&(v.Vaadin.connectionState.removeStateChangeListener(o),o=void 0)};return e.onBeforeEnter=(i,a,c)=>{o=()=>{v.Vaadin.connectionState.online&&(n(),c.render(i,!1))},v.Vaadin.connectionState.addStateChangeListener(o)},e.onBeforeLeave=(i,a,c)=>{n()},e}isFlowClientLoaded(){return this.response!==void 0}}const{serverSideRoutes:_o}=new wo({imports:()=>qe(()=>import("./generated-flow-imports.2fbe5ef1.js").then(r=>r.aN),[],import.meta.url)}),So=[..._o],Eo=new V(document.querySelector("#outlet"));Eo.setRoutes(So);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var r="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),t=new WeakMap,o=typeof DOMException=="object"?Error:DOMException,n=Object.defineProperty,i=Array.prototype.forEach,a=/@import.+?;?$/gm;function c(d){var m=d.replace(a,"");return m!==d&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),m.trim()}function s(d){return"isConnected"in d?d.isConnected:document.contains(d)}function l(d){return d.filter(function(m,g){return d.indexOf(m)===g})}function h(d,m){return d.filter(function(g){return m.indexOf(g)===-1})}function p(d){d.parentNode.removeChild(d)}function u(d){return d.shadowRoot||t.get(d)}var f=["addRule","deleteRule","insertRule","removeRule"],k=CSSStyleSheet,A=k.prototype;A.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},A.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function ue(d){return typeof d=="object"?B.isPrototypeOf(d)||A.isPrototypeOf(d):!1}function Oe(d){return typeof d=="object"?A.isPrototypeOf(d):!1}var C=new WeakMap,O=new WeakMap,j=new WeakMap,H=new WeakMap;function ke(d,m){var g=document.createElement("style");return j.get(d).set(m,g),O.get(d).push(m),g}function P(d,m){return j.get(d).get(m)}function pe(d,m){j.get(d).delete(m),O.set(d,O.get(d).filter(function(g){return g!==m}))}function rt(d,m){requestAnimationFrame(function(){m.textContent=C.get(d).textContent,H.get(d).forEach(function(g){return m.sheet[g.method].apply(m.sheet,g.args)})})}function he(d){if(!C.has(d))throw new TypeError("Illegal invocation")}function Pe(){var d=this,m=document.createElement("style");e.body.appendChild(m),C.set(d,m),O.set(d,[]),j.set(d,new WeakMap),H.set(d,[])}var B=Pe.prototype;B.replace=function(m){try{return this.replaceSync(m),Promise.resolve(this)}catch(g){return Promise.reject(g)}},B.replaceSync=function(m){if(he(this),typeof m=="string"){var g=this;C.get(g).textContent=c(m),H.set(g,[]),O.get(g).forEach(function(_){_.isConnected()&&rt(g,P(g,_))})}},n(B,"cssRules",{configurable:!0,enumerable:!0,get:function(){return he(this),C.get(this).sheet.cssRules}}),n(B,"media",{configurable:!0,enumerable:!0,get:function(){return he(this),C.get(this).sheet.media}}),f.forEach(function(d){B[d]=function(){var m=this;he(m);var g=arguments;H.get(m).push({method:d,args:g}),O.get(m).forEach(function(S){if(S.isConnected()){var w=P(m,S).sheet;w[d].apply(w,g)}});var _=C.get(m).sheet;return _[d].apply(_,g)}}),n(Pe,Symbol.hasInstance,{configurable:!0,value:ue});var ot={childList:!0,subtree:!0},nt=new WeakMap;function W(d){var m=nt.get(d);return m||(m=new st(d),nt.set(d,m)),m}function it(d){n(d.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return W(this).sheets},set:function(m){W(this).update(m)}})}function Ie(d,m){for(var g=document.createNodeIterator(d,NodeFilter.SHOW_ELEMENT,function(S){return u(S)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),_=void 0;_=g.nextNode();)m(u(_))}var fe=new WeakMap,q=new WeakMap,ge=new WeakMap;function ur(d,m){return m instanceof HTMLStyleElement&&q.get(d).some(function(g){return P(g,d)})}function at(d){var m=fe.get(d);return m instanceof Document?m.body:m}function Ne(d){var m=document.createDocumentFragment(),g=q.get(d),_=ge.get(d),S=at(d);_.disconnect(),g.forEach(function(w){m.appendChild(P(w,d)||ke(w,d))}),S.insertBefore(m,null),_.observe(S,ot),g.forEach(function(w){rt(w,P(w,d))})}function st(d){var m=this;m.sheets=[],fe.set(m,d),q.set(m,[]),ge.set(m,new MutationObserver(function(g,_){if(!document){_.disconnect();return}g.forEach(function(S){r||i.call(S.addedNodes,function(w){w instanceof Element&&Ie(w,function(G){W(G).connect()})}),i.call(S.removedNodes,function(w){w instanceof Element&&(ur(m,w)&&Ne(m),r||Ie(w,function(G){W(G).disconnect()}))})})}))}if(st.prototype={isConnected:function(){var d=fe.get(this);return d instanceof Document?d.readyState!=="loading":s(d.host)},connect:function(){var d=at(this);ge.get(this).observe(d,ot),q.get(this).length>0&&Ne(this),Ie(d,function(m){W(m).connect()})},disconnect:function(){ge.get(this).disconnect()},update:function(d){var m=this,g=fe.get(m)===document?"Document":"ShadowRoot";if(!Array.isArray(d))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+g+": Iterator getter is not callable.");if(!d.every(ue))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+g+": Failed to convert value to 'CSSStyleSheet'");if(d.some(Oe))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+g+": Can't adopt non-constructed stylesheets");m.sheets=d;var _=q.get(m),S=l(d),w=h(_,S);w.forEach(function(G){p(P(G,m)),pe(G,m)}),q.set(m,S),m.isConnected()&&S.length>0&&Ne(m)}},window.CSSStyleSheet=Pe,it(Document),"ShadowRoot"in window){it(ShadowRoot);var lt=Element.prototype,pr=lt.attachShadow;lt.attachShadow=function(m){var g=pr.call(this,m);return m.mode==="closed"&&t.set(this,g),g}}var ve=W(document);ve.isConnected()?ve.connect():document.addEventListener("DOMContentLoaded",ve.connect.bind(ve))})();const $o=I`@media all and (max-width: 1100px){.list-view.editing .toolbar,.list-view.editing .contact-grid{display:none}}.sr-only{border-width:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.bg-base{background-color:var(--lumo-base-color)}.bg-transparent{background-color:transparent}.bg-contrast-5{background-color:var(--lumo-contrast-5pct)}.bg-contrast-10{background-color:var(--lumo-contrast-10pct)}.bg-contrast-20{background-color:var(--lumo-contrast-20pct)}.bg-contrast-30{background-color:var(--lumo-contrast-30pct)}.bg-contrast-40{background-color:var(--lumo-contrast-40pct)}.bg-contrast-50{background-color:var(--lumo-contrast-50pct)}.bg-contrast-60{background-color:var(--lumo-contrast-60pct)}.bg-contrast-70{background-color:var(--lumo-contrast-70pct)}.bg-contrast-80{background-color:var(--lumo-contrast-80pct)}.bg-contrast-90{background-color:var(--lumo-contrast-90pct)}.bg-contrast{background-color:var(--lumo-contrast)}.bg-primary{background-color:var(--lumo-primary-color)}.bg-primary-50{background-color:var(--lumo-primary-color-50pct)}.bg-primary-10{background-color:var(--lumo-primary-color-10pct)}.bg-error{background-color:var(--lumo-error-color)}.bg-error-50{background-color:var(--lumo-error-color-50pct)}.bg-error-10{background-color:var(--lumo-error-color-10pct)}.bg-success{background-color:var(--lumo-success-color)}.bg-success-50{background-color:var(--lumo-success-color-50pct)}.bg-success-10{background-color:var(--lumo-success-color-10pct)}.border-0{border:none}.border{border:1px solid}.border-b{border-bottom:1px solid}.border-l{border-left:1px solid}.border-r{border-right:1px solid}.border-t{border-top:1px solid}.border-contrast-5{border-color:var(--lumo-contrast-5pct)}.border-contrast-10{border-color:var(--lumo-contrast-10pct)}.border-contrast-20{border-color:var(--lumo-contrast-20pct)}.border-contrast-30{border-color:var(--lumo-contrast-30pct)}.border-contrast-40{border-color:var(--lumo-contrast-40pct)}.border-contrast-50{border-color:var(--lumo-contrast-50pct)}.border-contrast-60{border-color:var(--lumo-contrast-60pct)}.border-contrast-70{border-color:var(--lumo-contrast-70pct)}.border-contrast-80{border-color:var(--lumo-contrast-80pct)}.border-contrast-90{border-color:var(--lumo-contrast-90pct)}.border-contrast{border-color:var(--lumo-contrast)}.border-primary{border-color:var(--lumo-primary-color)}.border-primary-50{border-color:var(--lumo-primary-color-50pct)}.border-primary-10{border-color:var(--lumo-primary-color-10pct)}.border-error{border-color:var(--lumo-error-color)}.border-error-50{border-color:var(--lumo-error-color-50pct)}.border-error-10{border-color:var(--lumo-error-color-10pct)}.border-success{border-color:var(--lumo-success-color)}.border-success-50{border-color:var(--lumo-success-color-50pct)}.border-success-10{border-color:var(--lumo-success-color-10pct)}.rounded-none{border-radius:0}.rounded-s{border-radius:var(--lumo-border-radius-s)}.rounded-m{border-radius:var(--lumo-border-radius-m)}.rounded-l{border-radius:var(--lumo-border-radius-l)}.content-center{align-content:center}.content-end{align-content:flex-end}.content-start{align-content:flex-start}.content-around{align-content:space-around}.content-between{align-content:space-between}.content-evenly{align-content:space-evenly}.content-stretch{align-content:stretch}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.self-auto{align-self:auto}.self-baseline{align-self:baseline}.self-center{align-self:center}.self-end{align-self:flex-end}.self-start{align-self:flex-start}.self-stretch{align-self:stretch}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.justify-around{justify-content:space-around}.justify-between{justify-content:space-between}.justify-evenly{justify-content:space-evenly}.shadow-xs{box-shadow:var(--lumo-box-shadow-xs)}.shadow-s{box-shadow:var(--lumo-box-shadow-s)}.shadow-m{box-shadow:var(--lumo-box-shadow-m)}.shadow-l{box-shadow:var(--lumo-box-shadow-l)}.shadow-xl{box-shadow:var(--lumo-box-shadow-xl)}.flex-auto{flex:auto}.flex-none{flex:none}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-grow-0{flex-grow:0}.flex-grow{flex-grow:1}.flex-shrink-0{flex-shrink:0}.flex-shrink{flex-shrink:1}.flex-nowrap{flex-wrap:nowrap}.flex-wrap{flex-wrap:wrap}.flex-wrap-reverse{flex-wrap:wrap-reverse}@media (min-width: 640px){.sm\\:flex-col{flex-direction:column}.sm\\:flex-row{flex-direction:row}}@media (min-width: 768px){.md\\:flex-col{flex-direction:column}.md\\:flex-row{flex-direction:row}}@media (min-width: 1024px){.lg\\:flex-col{flex-direction:column}.lg\\:flex-row{flex-direction:row}}@media (min-width: 1280px){.xl\\:flex-col{flex-direction:column}.xl\\:flex-row{flex-direction:row}}@media (min-width: 1536px){.\\32xl\\:flex-col{flex-direction:column}.\\32xl\\:flex-row{flex-direction:row}}.gap-xs{gap:var(--lumo-space-xs)}.gap-s{gap:var(--lumo-space-s)}.gap-m{gap:var(--lumo-space-m)}.gap-l{gap:var(--lumo-space-l)}.gap-xl{gap:var(--lumo-space-xl)}.gap-x-xs{column-gap:var(--lumo-space-xs)}.gap-x-s{column-gap:var(--lumo-space-s)}.gap-x-m{column-gap:var(--lumo-space-m)}.gap-x-l{column-gap:var(--lumo-space-l)}.gap-x-xl{column-gap:var(--lumo-space-xl)}.gap-y-xs{row-gap:var(--lumo-space-xs)}.gap-y-s{row-gap:var(--lumo-space-s)}.gap-y-m{row-gap:var(--lumo-space-m)}.gap-y-l{row-gap:var(--lumo-space-l)}.gap-y-xl{row-gap:var(--lumo-space-xl)}.grid-flow-col{grid-auto-flow:column}.grid-flow-row{grid-auto-flow:row}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.grid-cols-10{grid-template-columns:repeat(10,minmax(0,1fr))}.grid-cols-11{grid-template-columns:repeat(11,minmax(0,1fr))}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}.grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.col-span-1{grid-column:span 1 / span 1}.col-span-2{grid-column:span 2 / span 2}.col-span-3{grid-column:span 3 / span 3}.col-span-4{grid-column:span 4 / span 4}.col-span-5{grid-column:span 5 / span 5}.col-span-6{grid-column:span 6 / span 6}.col-span-7{grid-column:span 7 / span 7}.col-span-8{grid-column:span 8 / span 8}.col-span-9{grid-column:span 9 / span 9}.col-span-10{grid-column:span 10 / span 10}.col-span-11{grid-column:span 11 / span 11}.col-span-12{grid-column:span 12 / span 12}.row-span-1{grid-row:span 1 / span 1}.row-span-2{grid-row:span 2 / span 2}.row-span-3{grid-row:span 3 / span 3}.row-span-4{grid-row:span 4 / span 4}.row-span-5{grid-row:span 5 / span 5}.row-span-6{grid-row:span 6 / span 6}@media (min-width: 640px){.sm\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.sm\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.sm\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.sm\\:grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.sm\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.sm\\:grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.sm\\:grid-cols-10{grid-template-columns:repeat(10,minmax(0,1fr))}.sm\\:grid-cols-11{grid-template-columns:repeat(11,minmax(0,1fr))}.sm\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}}@media (min-width: 768px){.md\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.md\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.md\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.md\\:grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.md\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.md\\:grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.md\\:grid-cols-10{grid-template-columns:repeat(10,minmax(0,1fr))}.md\\:grid-cols-11{grid-template-columns:repeat(11,minmax(0,1fr))}.md\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}}@media (min-width: 1024px){.lg\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.lg\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.lg\\:grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.lg\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.lg\\:grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.lg\\:grid-cols-10{grid-template-columns:repeat(10,minmax(0,1fr))}.lg\\:grid-cols-11{grid-template-columns:repeat(11,minmax(0,1fr))}.lg\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}}@media (min-width: 1280px){.xl\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.xl\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.xl\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.xl\\:grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.xl\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.xl\\:grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.xl\\:grid-cols-10{grid-template-columns:repeat(10,minmax(0,1fr))}.xl\\:grid-cols-11{grid-template-columns:repeat(11,minmax(0,1fr))}.xl\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}}@media (min-width: 1536px){.\\32xl\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.\\32xl\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.\\32xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.\\32xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.\\32xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.\\32xl\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.\\32xl\\:grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.\\32xl\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.\\32xl\\:grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.\\32xl\\:grid-cols-10{grid-template-columns:repeat(10,minmax(0,1fr))}.\\32xl\\:grid-cols-11{grid-template-columns:repeat(11,minmax(0,1fr))}.\\32xl\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}}.box-border{box-sizing:border-box}.box-content{box-sizing:content-box}.block{display:block}.flex{display:flex}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-grid{display:inline-grid}.grid{display:grid}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.absolute{position:absolute}.fixed{position:fixed}.static{position:static}.sticky{position:sticky}.relative{position:relative}@media (min-width: 640px){.sm\\:flex{display:flex}.sm\\:hidden{display:none}}@media (min-width: 768px){.md\\:flex{display:flex}.md\\:hidden{display:none}}@media (min-width: 1024px){.lg\\:flex{display:flex}.lg\\:hidden{display:none}}@media (min-width: 1280px){.xl\\:flex{display:flex}.xl\\:hidden{display:none}}@media (min-width: 1536px){.\\32xl\\:flex{display:flex}.\\32xl\\:hidden{display:none}}.h-0{height:0}.h-xs{height:var(--lumo-size-xs)}.h-s{height:var(--lumo-size-s)}.h-m{height:var(--lumo-size-m)}.h-l{height:var(--lumo-size-l)}.h-xl{height:var(--lumo-size-xl)}.h-auto{height:auto}.h-full{height:100%}.h-screen{height:100vh}.max-h-full{max-height:100%}.max-h-screen{max-height:100vh}.min-h-0{min-height:0}.min-h-full{min-height:100%}.min-h-screen{min-height:100vh}.icon-s{height:var(--lumo-icon-size-s);width:var(--lumo-icon-size-s)}.icon-m{height:var(--lumo-icon-size-m);width:var(--lumo-icon-size-m)}.icon-l{height:var(--lumo-icon-size-l);width:var(--lumo-icon-size-l)}.w-xs{width:var(--lumo-size-xs)}.w-s{width:var(--lumo-size-s)}.w-m{width:var(--lumo-size-m)}.w-l{width:var(--lumo-size-l)}.w-xl{width:var(--lumo-size-xl)}.w-auto{width:auto}.w-full{width:100%}.max-w-full{max-width:100%}.max-w-max{max-width:max-content}.max-w-min{max-width:min-content}.max-w-screen-sm{max-width:640px}.max-w-screen-md{max-width:768px}.max-w-screen-lg{max-width:1024px}.max-w-screen-xl{max-width:1280px}.max-w-screen-2xl{max-width:1536px}.min-w-0{min-width:0}.min-w-full{min-width:100%}.min-w-max{min-width:max-content}.min-w-min{min-width:min-content}.m-auto{margin:auto}.m-0{margin:0}.m-xs{margin:var(--lumo-space-xs)}.m-s{margin:var(--lumo-space-s)}.m-m{margin:var(--lumo-space-m)}.m-l{margin:var(--lumo-space-l)}.m-xl{margin:var(--lumo-space-xl)}.mb-auto{margin-bottom:auto}.mb-0{margin-bottom:0}.mb-xs{margin-bottom:var(--lumo-space-xs)}.mb-s{margin-bottom:var(--lumo-space-s)}.mb-m{margin-bottom:var(--lumo-space-m)}.mb-l{margin-bottom:var(--lumo-space-l)}.mb-xl{margin-bottom:var(--lumo-space-xl)}.me-auto{margin-inline-end:auto}.me-0{margin-inline-end:0}.me-xs{margin-inline-end:var(--lumo-space-xs)}.me-s{margin-inline-end:var(--lumo-space-s)}.me-m{margin-inline-end:var(--lumo-space-m)}.me-l{margin-inline-end:var(--lumo-space-l)}.me-xl{margin-inline-end:var(--lumo-space-xl)}.mx-auto{margin-left:auto;margin-right:auto}.mx-0{margin-left:0;margin-right:0}.mx-xs{margin-left:var(--lumo-space-xs);margin-right:var(--lumo-space-xs)}.mx-s{margin-left:var(--lumo-space-s);margin-right:var(--lumo-space-s)}.mx-m{margin-left:var(--lumo-space-m);margin-right:var(--lumo-space-m)}.mx-l{margin-left:var(--lumo-space-l);margin-right:var(--lumo-space-l)}.mx-xl{margin-left:var(--lumo-space-xl);margin-right:var(--lumo-space-xl)}.ml-auto{margin-left:auto}.ml-0{margin-left:0}.ml-xs{margin-left:var(--lumo-space-xs)}.ml-s{margin-left:var(--lumo-space-s)}.ml-m{margin-left:var(--lumo-space-m)}.ml-l{margin-left:var(--lumo-space-l)}.ml-xl{margin-left:var(--lumo-space-xl)}.mr-auto{margin-right:auto}.mr-0{margin-right:0}.mr-xs{margin-right:var(--lumo-space-xs)}.mr-s{margin-right:var(--lumo-space-s)}.mr-m{margin-right:var(--lumo-space-m)}.mr-l{margin-right:var(--lumo-space-l)}.mr-xl{margin-right:var(--lumo-space-xl)}.ms-auto{margin-inline-start:auto}.ms-0{margin-inline-start:0}.ms-xs{margin-inline-start:var(--lumo-space-xs)}.ms-s{margin-inline-start:var(--lumo-space-s)}.ms-m{margin-inline-start:var(--lumo-space-m)}.ms-l{margin-inline-start:var(--lumo-space-l)}.ms-xl{margin-inline-start:var(--lumo-space-xl)}.mt-auto{margin-top:auto}.mt-0{margin-top:0}.mt-xs{margin-top:var(--lumo-space-xs)}.mt-s{margin-top:var(--lumo-space-s)}.mt-m{margin-top:var(--lumo-space-m)}.mt-l{margin-top:var(--lumo-space-l)}.mt-xl{margin-top:var(--lumo-space-xl)}.my-auto{margin-bottom:auto;margin-top:auto}.my-0{margin-bottom:0;margin-top:0}.my-xs{margin-bottom:var(--lumo-space-xs);margin-top:var(--lumo-space-xs)}.my-s{margin-bottom:var(--lumo-space-s);margin-top:var(--lumo-space-s)}.my-m{margin-bottom:var(--lumo-space-m);margin-top:var(--lumo-space-m)}.my-l{margin-bottom:var(--lumo-space-l);margin-top:var(--lumo-space-l)}.my-xl{margin-bottom:var(--lumo-space-xl);margin-top:var(--lumo-space-xl)}.p-0{padding:0}.p-xs{padding:var(--lumo-space-xs)}.p-s{padding:var(--lumo-space-s)}.p-m{padding:var(--lumo-space-m)}.p-l{padding:var(--lumo-space-l)}.p-xl{padding:var(--lumo-space-xl)}.pb-0{padding-bottom:0}.pb-xs{padding-bottom:var(--lumo-space-xs)}.pb-s{padding-bottom:var(--lumo-space-s)}.pb-m{padding-bottom:var(--lumo-space-m)}.pb-l{padding-bottom:var(--lumo-space-l)}.pb-xl{padding-bottom:var(--lumo-space-xl)}.pe-0{padding-inline-end:0}.pe-xs{padding-inline-end:var(--lumo-space-xs)}.pe-s{padding-inline-end:var(--lumo-space-s)}.pe-m{padding-inline-end:var(--lumo-space-m)}.pe-l{padding-inline-end:var(--lumo-space-l)}.pe-xl{padding-inline-end:var(--lumo-space-xl)}.px-0{padding-left:0;padding-right:0}.px-xs{padding-left:var(--lumo-space-xs);padding-right:var(--lumo-space-xs)}.px-s{padding-left:var(--lumo-space-s);padding-right:var(--lumo-space-s)}.px-m{padding-left:var(--lumo-space-m);padding-right:var(--lumo-space-m)}.px-l{padding-left:var(--lumo-space-l);padding-right:var(--lumo-space-l)}.px-xl{padding-left:var(--lumo-space-xl);padding-right:var(--lumo-space-xl)}.pl-0{padding-left:0}.pl-xs{padding-left:var(--lumo-space-xs)}.pl-s{padding-left:var(--lumo-space-s)}.pl-m{padding-left:var(--lumo-space-m)}.pl-l{padding-left:var(--lumo-space-l)}.pl-xl{padding-left:var(--lumo-space-xl)}.pr-0{padding-right:0}.pr-xs{padding-right:var(--lumo-space-xs)}.pr-s{padding-right:var(--lumo-space-s)}.pr-m{padding-right:var(--lumo-space-m)}.pr-l{padding-right:var(--lumo-space-l)}.pr-xl{padding-right:var(--lumo-space-xl)}.ps-0{padding-inline-start:0}.ps-xs{padding-inline-start:var(--lumo-space-xs)}.ps-s{padding-inline-start:var(--lumo-space-s)}.ps-m{padding-inline-start:var(--lumo-space-m)}.ps-l{padding-inline-start:var(--lumo-space-l)}.ps-xl{padding-inline-start:var(--lumo-space-xl)}.pt-0{padding-top:0}.pt-xs{padding-top:var(--lumo-space-xs)}.pt-s{padding-top:var(--lumo-space-s)}.pt-m{padding-top:var(--lumo-space-m)}.pt-l{padding-top:var(--lumo-space-l)}.pt-xl{padding-top:var(--lumo-space-xl)}.py-0{padding-bottom:0;padding-top:0}.py-xs{padding-bottom:var(--lumo-space-xs);padding-top:var(--lumo-space-xs)}.py-s{padding-bottom:var(--lumo-space-s);padding-top:var(--lumo-space-s)}.py-m{padding-bottom:var(--lumo-space-m);padding-top:var(--lumo-space-m)}.py-l{padding-bottom:var(--lumo-space-l);padding-top:var(--lumo-space-l)}.py-xl{padding-bottom:var(--lumo-space-xl);padding-top:var(--lumo-space-xl)}.space-xs>*:not(:last-child){margin:var(--lumo-space-xs)}.space-s>*:not(:last-child){margin:var(--lumo-space-s)}.space-m>*:not(:last-child){margin:var(--lumo-space-m)}.space-l>*:not(:last-child){margin:var(--lumo-space-l)}.space-xl>*:not(:last-child){margin:var(--lumo-space-xl)}.spacing-b-xs>*:not(:last-child){margin-bottom:var(--lumo-space-xs)}.spacing-b-s>*:not(:last-child){margin-bottom:var(--lumo-space-s)}.spacing-b-m>*:not(:last-child){margin-bottom:var(--lumo-space-m)}.spacing-b-l>*:not(:last-child){margin-bottom:var(--lumo-space-l)}.spacing-b-xl>*:not(:last-child){margin-bottom:var(--lumo-space-xl)}.spacing-e-xs>*:not(:last-child){margin-inline-end:var(--lumo-space-xs)}.spacing-e-s>*:not(:last-child){margin-inline-end:var(--lumo-space-s)}.spacing-e-m>*:not(:last-child){margin-inline-end:var(--lumo-space-m)}.spacing-e-l>*:not(:last-child){margin-inline-end:var(--lumo-space-l)}.spacing-e-xl>*:not(:last-child){margin-inline-end:var(--lumo-space-xl)}.spacing-x-xs>*:not(:last-child){margin-left:var(--lumo-space-xs);margin-right:var(--lumo-space-xs)}.spacing-x-s>*:not(:last-child){margin-left:var(--lumo-space-s);margin-right:var(--lumo-space-s)}.spacing-x-m>*:not(:last-child){margin-left:var(--lumo-space-m);margin-right:var(--lumo-space-m)}.spacing-x-l>*:not(:last-child){margin-left:var(--lumo-space-l);margin-right:var(--lumo-space-l)}.spacing-x-xl>*:not(:last-child){margin-left:var(--lumo-space-xl);margin-right:var(--lumo-space-xl)}.spacing-l-xs>*:not(:last-child){margin-left:var(--lumo-space-xs)}.spacing-l-s>*:not(:last-child){margin-left:var(--lumo-space-s)}.spacing-l-m>*:not(:last-child){margin-left:var(--lumo-space-m)}.spacing-l-l>*:not(:last-child){margin-left:var(--lumo-space-l)}.spacing-l-xl>*:not(:last-child){margin-left:var(--lumo-space-xl)}.spacing-r-xs>*:not(:last-child){margin-right:var(--lumo-space-xs)}.spacing-r-s>*:not(:last-child){margin-right:var(--lumo-space-s)}.spacing-r-m>*:not(:last-child){margin-right:var(--lumo-space-m)}.spacing-r-l>*:not(:last-child){margin-right:var(--lumo-space-l)}.spacing-r-xl>*:not(:last-child){margin-right:var(--lumo-space-xl)}.spacing-s-xs>*:not(:last-child){margin-inline-start:var(--lumo-space-xs)}.spacing-s-s>*:not(:last-child){margin-inline-start:var(--lumo-space-s)}.spacing-s-m>*:not(:last-child){margin-inline-start:var(--lumo-space-m)}.spacing-s-l>*:not(:last-child){margin-inline-start:var(--lumo-space-l)}.spacing-s-xl>*:not(:last-child){margin-inline-start:var(--lumo-space-xl)}.spacing-t-xs>*:not(:last-child){margin-top:var(--lumo-space-xs)}.spacing-t-s>*:not(:last-child){margin-top:var(--lumo-space-s)}.spacing-t-m>*:not(:last-child){margin-top:var(--lumo-space-m)}.spacing-t-l>*:not(:last-child){margin-top:var(--lumo-space-l)}.spacing-t-xl>*:not(:last-child){margin-top:var(--lumo-space-xl)}.spacing-y-xs>*:not(:last-child){margin-bottom:var(--lumo-space-xs);margin-top:var(--lumo-space-xs)}.spacing-y-s>*:not(:last-child){margin-bottom:var(--lumo-space-s);margin-top:var(--lumo-space-s)}.spacing-y-m>*:not(:last-child){margin-bottom:var(--lumo-space-m);margin-top:var(--lumo-space-m)}.spacing-y-l>*:not(:last-child){margin-bottom:var(--lumo-space-l);margin-top:var(--lumo-space-l)}.spacing-y-xl>*:not(:last-child){margin-bottom:var(--lumo-space-xl);margin-top:var(--lumo-space-xl)}.text-2xs{font-size:var(--lumo-font-size-xxs)}.text-xs{font-size:var(--lumo-font-size-xs)}.text-s{font-size:var(--lumo-font-size-s)}.text-m{font-size:var(--lumo-font-size-m)}.text-l{font-size:var(--lumo-font-size-l)}.text-xl{font-size:var(--lumo-font-size-xl)}.text-2xl{font-size:var(--lumo-font-size-xxl)}.text-3xl{font-size:var(--lumo-font-size-xxxl)}.font-thin{font-weight:100}.font-extralight{font-weight:200}.font-light{font-weight:300}.font-normal{font-weight:400}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-black{font-weight:900}.leading-none{line-height:1}.leading-xs{line-height:var(--lumo-line-height-xs)}.leading-s{line-height:var(--lumo-line-height-s)}.leading-m{line-height:var(--lumo-line-height-m)}.list-none{list-style-type:none}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-justify{text-align:justify}.text-header{color:var(--lumo-header-text-color)}.text-body{color:var(--lumo-body-text-color)}.text-secondary{color:var(--lumo-secondary-text-color)}.text-tertiary{color:var(--lumo-tertiary-text-color)}.text-disabled{color:var(--lumo-disabled-text-color)}.text-primary{color:var(--lumo-primary-text-color)}.text-primary-contrast{color:var(--lumo-primary-contrast-color)}.text-error{color:var(--lumo-error-text-color)}.text-error-contrast{color:var(--lumo-error-contrast-color)}.text-success{color:var(--lumo-success-text-color)}.text-success-contrast{color:var(--lumo-success-contrast-color)}.overflow-clip{text-overflow:clip}.overflow-ellipsis{text-overflow:ellipsis}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre{white-space:pre}.whitespace-pre-line{white-space:pre-line}.whitespace-pre-wrap{white-space:pre-wrap}@media (min-width: 640px){.sm\\:text-2xs{font-size:var(--lumo-font-size-xxs)}.sm\\:text-xs{font-size:var(--lumo-font-size-xs)}.sm\\:text-s{font-size:var(--lumo-font-size-s)}.sm\\:text-m{font-size:var(--lumo-font-size-m)}.sm\\:text-l{font-size:var(--lumo-font-size-l)}.sm\\:text-xl{font-size:var(--lumo-font-size-xl)}.sm\\:text-2xl{font-size:var(--lumo-font-size-xxl)}.sm\\:text-3xl{font-size:var(--lumo-font-size-xxxl)}}@media (min-width: 768px){.md\\:text-2xs{font-size:var(--lumo-font-size-xxs)}.md\\:text-xs{font-size:var(--lumo-font-size-xs)}.md\\:text-s{font-size:var(--lumo-font-size-s)}.md\\:text-m{font-size:var(--lumo-font-size-m)}.md\\:text-l{font-size:var(--lumo-font-size-l)}.md\\:text-xl{font-size:var(--lumo-font-size-xl)}.md\\:text-2xl{font-size:var(--lumo-font-size-xxl)}.md\\:text-3xl{font-size:var(--lumo-font-size-xxxl)}}@media (min-width: 1024px){.lg\\:text-2xs{font-size:var(--lumo-font-size-xxs)}.lg\\:text-xs{font-size:var(--lumo-font-size-xs)}.lg\\:text-s{font-size:var(--lumo-font-size-s)}.lg\\:text-m{font-size:var(--lumo-font-size-m)}.lg\\:text-l{font-size:var(--lumo-font-size-l)}.lg\\:text-xl{font-size:var(--lumo-font-size-xl)}.lg\\:text-2xl{font-size:var(--lumo-font-size-xxl)}.lg\\:text-3xl{font-size:var(--lumo-font-size-xxxl)}}@media (min-width: 1280px){.xl\\:text-2xs{font-size:var(--lumo-font-size-xxs)}.xl\\:text-xs{font-size:var(--lumo-font-size-xs)}.xl\\:text-s{font-size:var(--lumo-font-size-s)}.xl\\:text-m{font-size:var(--lumo-font-size-m)}.xl\\:text-l{font-size:var(--lumo-font-size-l)}.xl\\:text-xl{font-size:var(--lumo-font-size-xl)}.xl\\:text-2xl{font-size:var(--lumo-font-size-xxl)}.xl\\:text-3xl{font-size:var(--lumo-font-size-xxxl)}}@media (min-width: 1536px){.\\32xl\\:text-2xs{font-size:var(--lumo-font-size-xxs)}.\\32xl\\:text-xs{font-size:var(--lumo-font-size-xs)}.\\32xl\\:text-s{font-size:var(--lumo-font-size-s)}.\\32xl\\:text-m{font-size:var(--lumo-font-size-m)}.\\32xl\\:text-l{font-size:var(--lumo-font-size-l)}.\\32xl\\:text-xl{font-size:var(--lumo-font-size-xl)}.\\32xl\\:text-2xl{font-size:var(--lumo-font-size-xxl)}.\\32xl\\:text-3xl{font-size:var(--lumo-font-size-xxxl)}}a[highlight]{font-weight:700;text-decoration:underline}*{font-size:1.2rem}
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Co extends HTMLElement{static get version(){return"23.2.0"}}customElements.define("vaadin-lumo-styles",Co);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ao=r=>class extends r{static get properties(){return{theme:{type:String,reflectToAttribute:!0,observer:"__deprecatedThemePropertyChanged"},_theme:{type:String,readOnly:!0}}}__deprecatedThemePropertyChanged(t){this._set_theme(t)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rr=[];function Le(r,e,t={}){r&&ko(r)&&console.warn(`The custom element definition for "${r}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),e=Ro(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(r,e,t):rr.push({themeFor:r,styles:e,include:t.include,moduleId:t.moduleId})}function Xe(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():rr}function To(r,e){return(r||"").split(" ").some(t=>new RegExp(`^${t.split("*").join(".*")}$`).test(e))}function zo(r=""){let e=0;return r.startsWith("lumo-")||r.startsWith("material-")?e=1:r.startsWith("vaadin-")&&(e=2),e}function Ro(r=[]){return[r].flat(1/0).filter(e=>e instanceof et?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function or(r){const e=[];return r.include&&[].concat(r.include).forEach(t=>{const o=Xe().find(n=>n.moduleId===t);o?e.push(...or(o),...o.styles):console.warn(`Included moduleId ${t} not found in style registry`)},r.styles),e}function Lo(r,e){const t=document.createElement("style");t.innerHTML=r.map(o=>o.cssText).join(`
`),e.content.appendChild(t)}function Oo(r){const e=`${r}-default-theme`,t=Xe().filter(o=>o.moduleId!==e&&To(o.themeFor,r)).map(o=>({...o,styles:[...or(o),...o.styles],includePriority:zo(o.moduleId)})).sort((o,n)=>n.includePriority-o.includePriority);return t.length>0?t:Xe().filter(o=>o.moduleId===e)}function ko(r){return nr(customElements.get(r))}function nr(r){return r&&Object.prototype.hasOwnProperty.call(r,"__themes")}const Wo=r=>class extends Ao(r){static finalize(){if(super.finalize(),this.elementStyles)return;const t=this.prototype._template;!t||nr(this)||Lo(this.getStylesForThis(),t)}static finalizeStyles(t){const o=this.getStylesForThis();return t?[...super.finalizeStyles(t),...o]:o}static getStylesForThis(){const t=Object.getPrototypeOf(this.prototype),o=(t?t.constructor.__themes:[])||[];this.__themes=[...o,...Oo(this.is)];const n=this.__themes.flatMap(i=>i.styles);return n.filter((i,a)=>a===n.lastIndexOf(i))}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Po=I`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,ir=I`
  html,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Le("",ir,{moduleId:"lumo-typography"});const ar=document.createElement("template");ar.innerHTML=`<style>${Po.toString().replace(":host","html")}</style>`;document.head.appendChild(ar.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Io=I`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,sr=document.createElement("template");sr.innerHTML=`<style>${Io.toString().replace(":host","html")}</style>`;document.head.appendChild(sr.content);const tt=I`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;Le("",tt,{moduleId:"lumo-color"});const No=I`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;Le("",[tt,No],{moduleId:"lumo-color-legacy"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lr=I`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,cr=document.createElement("template");cr.innerHTML=`<style>${lr.toString().replace(":host","html")}</style>`;document.head.appendChild(cr.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mo=I`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`,dr=document.createElement("template");dr.innerHTML=`<style>${Mo.toString().replace(":host","html")}</style>`;document.head.appendChild(dr.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mr=I`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon,
  [theme~='badge'] iron-icon {
    margin: -0.25em 0;
    --iron-icon-width: 1.5em;
    --iron-icon-height: 1.5em;
  }

  [theme~='badge'] vaadin-icon:first-child,
  [theme~='badge'] iron-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child,
  [theme~='badge'] iron-icon:last-child {
    margin-right: -0.375em;
  }

  iron-icon[theme~='badge'][icon],
  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  iron-icon[theme~='badge'][icon][theme~='small'],
  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child,
  [dir='rtl'][theme~='badge'] iron-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child,
  [dir='rtl'][theme~='badge'] iron-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;Le("",mr,{moduleId:"lumo-badge"});const Vo=(r,e)=>{const t=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;for(var o,n=r;(o=t.exec(r))!==null;){n=n.replace(o[0],"");const i=document.createElement("link");i.rel="stylesheet",i.href=o[2]||o[4];const a=o[1]||o[5];a&&(i.media=a),e===document?document.head.appendChild(i):e.appendChild(i)}return n},oe=(r,e,t)=>{if(e===document){const n=Do(r);if(window.Vaadin.theme.injectedGlobalCss.indexOf(n)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(n)}const o=new CSSStyleSheet;o.replaceSync(Vo(r,e)),t?e.adoptedStyleSheets=[o,...e.adoptedStyleSheets]:e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function Vt(r){let e,t,o=2166136261;for(e=0,t=r.length;e<t;e++)o^=r.charCodeAt(e),o+=(o<<1)+(o<<4)+(o<<7)+(o<<8)+(o<<24);return("0000000"+(o>>>0).toString(16)).substr(-8)}function Do(r){let e=Vt(r);return e+Vt(e+r)}const Uo=r=>{oe($o.toString(),r),document._vaadintheme_makmurjayacrm_componentCss||(document._vaadintheme_makmurjayacrm_componentCss=!0),oe(ir.cssText,r,!0),oe(tt.cssText,r,!0),oe(lr.cssText,r,!0),oe(mr.cssText,r,!0)},Fo=Uo;Fo(document);export{so as A,Wo as T,qe as _,Ao as a,rr as b,tt as c,to as d,yo as e,y as f,vo as g,xo as h,I as i,Le as r,ir as t,Ho as w,F as x,ao as y};
