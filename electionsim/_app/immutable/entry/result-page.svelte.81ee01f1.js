import{R as at,S as ct,i as ut,s as lt,k as Se,q as Oe,l as Ae,m as Te,r as ge,h as Y,n as ft,b as dt,G as Z,H as Q,I as ee,o as pt}from"../chunks/index.f98e629c.js";import{w as Ie,d as ht}from"../chunks/index.28db0802.js";import{b as mt}from"../chunks/paths.83cd28a2.js";var Pe={},te={},ne=34,U=10,re=13;function He(e){return new Function("d","return {"+e.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function yt(e,t){var n=He(e);return function(r,s){return t(n(r),s,e)}}function Ce(e){var t=Object.create(null),n=[];return e.forEach(function(r){for(var s in r)s in t||n.push(t[s]=s)}),n}function S(e,t){var n=e+"",r=n.length;return r<t?new Array(t-r+1).join(0)+n:n}function Et(e){return e<0?"-"+S(-e,6):e>9999?"+"+S(e,6):S(e,4)}function wt(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":Et(e.getUTCFullYear())+"-"+S(e.getUTCMonth()+1,2)+"-"+S(e.getUTCDate(),2)+(s?"T"+S(t,2)+":"+S(n,2)+":"+S(r,2)+"."+S(s,3)+"Z":r?"T"+S(t,2)+":"+S(n,2)+":"+S(r,2)+"Z":n||t?"T"+S(t,2)+":"+S(n,2)+"Z":"")}function bt(e){var t=new RegExp('["'+e+`
\r]`),n=e.charCodeAt(0);function r(l,m){var y,f,p=s(l,function(R,w){if(y)return y(R,w-1);f=R,y=m?yt(R,m):He(R)});return p.columns=f||[],p}function s(l,m){var y=[],f=l.length,p=0,R=0,w,A=f<=0,O=!1;l.charCodeAt(f-1)===U&&--f,l.charCodeAt(f-1)===re&&--f;function I(){if(A)return te;if(O)return O=!1,Pe;var M,q=p,F;if(l.charCodeAt(q)===ne){for(;p++<f&&l.charCodeAt(p)!==ne||l.charCodeAt(++p)===ne;);return(M=p)>=f?A=!0:(F=l.charCodeAt(p++))===U?O=!0:F===re&&(O=!0,l.charCodeAt(p)===U&&++p),l.slice(q+1,M-1).replace(/""/g,'"')}for(;p<f;){if((F=l.charCodeAt(M=p++))===U)O=!0;else if(F===re)O=!0,l.charCodeAt(p)===U&&++p;else if(F!==n)continue;return l.slice(q,M)}return A=!0,l.slice(q,f)}for(;(w=I())!==te;){for(var H=[];w!==Pe&&w!==te;)H.push(w),w=I();m&&(H=m(H,R++))==null||y.push(H)}return y}function o(l,m){return l.map(function(y){return m.map(function(f){return d(y[f])}).join(e)})}function i(l,m){return m==null&&(m=Ce(l)),[m.map(d).join(e)].concat(o(l,m)).join(`
`)}function c(l,m){return m==null&&(m=Ce(l)),o(l,m).join(`
`)}function h(l){return l.map(u).join(`
`)}function u(l){return l.map(d).join(e)}function d(l){return l==null?"":l instanceof Date?wt(l):t.test(l+="")?'"'+l.replace(/"/g,'""')+'"':l}return{parse:r,parseRows:s,format:i,formatBody:c,formatRows:h,formatRow:u,formatValue:d}}var Rt=bt(","),St=Rt.parse;function Ot(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function At(e,t){return fetch(e,t).then(Ot)}function Tt(e){return function(t,n,r){return arguments.length===2&&typeof n=="function"&&(r=n,n=void 0),At(t,n).then(function(s){return e(s,r)})}}var gt=Tt(St);function Me(e,t){return function(){return e.apply(t,arguments)}}const{toString:qe}=Object.prototype,{getPrototypeOf:he}=Object,me=(e=>t=>{const n=qe.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),P=e=>(e=e.toLowerCase(),t=>me(t)===e),W=e=>t=>typeof t===e,{isArray:_}=Array,B=W("undefined");function Pt(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&N(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ve=P("ArrayBuffer");function Ct(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ve(e.buffer),t}const Nt=W("string"),N=W("function"),ze=W("number"),ye=e=>e!==null&&typeof e=="object",xt=e=>e===!0||e===!1,v=e=>{if(me(e)!=="object")return!1;const t=he(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},_t=P("Date"),Ft=P("File"),Ut=P("Blob"),Dt=P("FileList"),Lt=e=>ye(e)&&N(e.pipe),Bt=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||qe.call(e)===t||N(e.toString)&&e.toString()===t)},jt=P("URLSearchParams"),kt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),_(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Je(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ve=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),$e=e=>!B(e)&&e!==Ve;function ce(){const{caseless:e}=$e(this)&&this||{},t={},n=(r,s)=>{const o=e&&Je(t,s)||s;v(t[o])&&v(r)?t[o]=ce(t[o],r):v(r)?t[o]=ce({},r):_(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&j(arguments[r],n);return t}const It=(e,t,n,{allOwnKeys:r}={})=>(j(t,(s,o)=>{n&&N(s)?e[o]=Me(s,n):e[o]=s},{allOwnKeys:r}),e),Ht=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Mt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},qt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&he(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},vt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},zt=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!ze(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Jt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&he(Uint8Array)),Vt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},$t=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Wt=P("HTMLFormElement"),Kt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ne=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Gt=P("RegExp"),We=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},Xt=e=>{We(e,(t,n)=>{if(N(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(N(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Yt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return _(e)?r(e):r(String(e).split(t)),n},Zt=()=>{},Qt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),se="abcdefghijklmnopqrstuvwxyz",xe="0123456789",Ke={DIGIT:xe,ALPHA:se,ALPHA_DIGIT:se+se.toUpperCase()+xe},en=(e=16,t=Ke.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function tn(e){return!!(e&&N(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const nn=e=>{const t=new Array(10),n=(r,s)=>{if(ye(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=_(r)?[]:{};return j(r,(i,c)=>{const h=n(i,s+1);!B(h)&&(o[c]=h)}),t[s]=void 0,o}}return r};return n(e,0)},a={isArray:_,isArrayBuffer:ve,isBuffer:Pt,isFormData:Bt,isArrayBufferView:Ct,isString:Nt,isNumber:ze,isBoolean:xt,isObject:ye,isPlainObject:v,isUndefined:B,isDate:_t,isFile:Ft,isBlob:Ut,isRegExp:Gt,isFunction:N,isStream:Lt,isURLSearchParams:jt,isTypedArray:Jt,isFileList:Dt,forEach:j,merge:ce,extend:It,trim:kt,stripBOM:Ht,inherits:Mt,toFlatObject:qt,kindOf:me,kindOfTest:P,endsWith:vt,toArray:zt,forEachEntry:Vt,matchAll:$t,isHTMLForm:Wt,hasOwnProperty:Ne,hasOwnProp:Ne,reduceDescriptors:We,freezeMethods:Xt,toObjectSet:Yt,toCamelCase:Kt,noop:Zt,toFiniteNumber:Qt,findKey:Je,global:Ve,isContextDefined:$e,ALPHABET:Ke,generateString:en,isSpecCompliantForm:tn,toJSONObject:nn};function E(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(E,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ge=E.prototype,Xe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Xe[e]={value:e}});Object.defineProperties(E,Xe);Object.defineProperty(Ge,"isAxiosError",{value:!0});E.from=(e,t,n,r,s,o)=>{const i=Object.create(Ge);return a.toFlatObject(e,i,function(h){return h!==Error.prototype},c=>c!=="isAxiosError"),E.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const rn=null;function ue(e){return a.isPlainObject(e)||a.isArray(e)}function Ye(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function _e(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ye(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function sn(e){return a.isArray(e)&&!e.some(ue)}const on=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function K(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,R){return!a.isUndefined(R[p])});const r=n.metaTokens,s=n.visitor||d,o=n.dots,i=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!h&&a.isBlob(f))throw new E("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?h&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function d(f,p,R){let w=f;if(f&&!R&&typeof f=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&sn(f)||(a.isFileList(f)||a.endsWith(p,"[]"))&&(w=a.toArray(f)))return p=Ye(p),w.forEach(function(O,I){!(a.isUndefined(O)||O===null)&&t.append(i===!0?_e([p],I,o):i===null?p:p+"[]",u(O))}),!1}return ue(f)?!0:(t.append(_e(R,p,o),u(f)),!1)}const l=[],m=Object.assign(on,{defaultVisitor:d,convertValue:u,isVisitable:ue});function y(f,p){if(!a.isUndefined(f)){if(l.indexOf(f)!==-1)throw Error("Circular reference detected in "+p.join("."));l.push(f),a.forEach(f,function(w,A){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(A)?A.trim():A,p,m))===!0&&y(w,p?p.concat(A):[A])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Fe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ee(e,t){this._pairs=[],e&&K(e,this,t)}const Ze=Ee.prototype;Ze.append=function(t,n){this._pairs.push([t,n])};Ze.toString=function(t){const n=t?function(r){return t.call(this,r,Fe)}:Fe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function an(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Qe(e,t,n){if(!t)return e;const r=n&&n.encode||an,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new Ee(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class cn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ue=cn,et={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},un=typeof URLSearchParams<"u"?URLSearchParams:Ee,ln=typeof FormData<"u"?FormData:null,fn=typeof Blob<"u"?Blob:null,dn=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),pn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),T={isBrowser:!0,classes:{URLSearchParams:un,FormData:ln,Blob:fn},isStandardBrowserEnv:dn,isStandardBrowserWebWorkerEnv:pn,protocols:["http","https","file","blob","url","data"]};function hn(e,t){return K(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function mn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function yn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function tt(e){function t(n,r,s,o){let i=n[o++];const c=Number.isFinite(+i),h=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,h?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=yn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(mn(r),s,n,0)}),n}return null}const En={"Content-Type":void 0};function wn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const G={transitional:et,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(tt(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return hn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return K(c?{"files[]":t}:t,h&&new h,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),wn(t)):t}],transformResponse:[function(t){const n=this.transitional||G.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?E.from(c,E.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){G.headers[t]={}});a.forEach(["post","put","patch"],function(t){G.headers[t]=a.merge(En)});const we=G,bn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Rn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&bn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},De=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function z(e){return e===!1||e==null?e:a.isArray(e)?e.map(z):String(e)}function Sn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function On(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function oe(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function An(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Tn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class X{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,h,u){const d=D(h);if(!d)throw new Error("header name must be a non-empty string");const l=a.findKey(s,d);(!l||s[l]===void 0||u===!0||u===void 0&&s[l]!==!1)&&(s[l||h]=z(c))}const i=(c,h)=>a.forEach(c,(u,d)=>o(u,d,h));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!On(t)?i(Rn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=D(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Sn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=D(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||oe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=D(i),i){const c=a.findKey(r,i);c&&(!n||oe(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||oe(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=z(s),delete n[o];return}const c=t?An(o):String(o).trim();c!==o&&delete n[o],n[c]=z(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[De]=this[De]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=D(i);r[c]||(Tn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}X.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(X.prototype);a.freezeMethods(X);const g=X;function ie(e,t){const n=this||we,r=t||n,s=g.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function nt(e){return!!(e&&e.__CANCEL__)}function k(e,t,n){E.call(this,e??"canceled",E.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(k,E,{__CANCEL__:!0});function gn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new E("Request failed with status code "+n.status,[E.ERR_BAD_REQUEST,E.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Pn=T.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,c){const h=[];h.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&h.push("expires="+new Date(s).toGMTString()),a.isString(o)&&h.push("path="+o),a.isString(i)&&h.push("domain="+i),c===!0&&h.push("secure"),document.cookie=h.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Cn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Nn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function rt(e,t){return e&&!Cn(t)?Nn(e,t):t}const xn=T.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function _n(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Fn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(h){const u=Date.now(),d=r[o];i||(i=u),n[s]=h,r[s]=u;let l=o,m=0;for(;l!==s;)m+=n[l++],l=l%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const y=d&&u-d;return y?Math.round(m*1e3/y):void 0}}function Le(e,t){let n=0;const r=Fn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,h=r(c),u=o<=i;n=o;const d={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:h||void 0,estimated:h&&i&&u?(i-o)/h:void 0,event:s};d[t?"download":"upload"]=!0,e(d)}}const Un=typeof XMLHttpRequest<"u",Dn=Un&&function(e){return new Promise(function(n,r){let s=e.data;const o=g.from(e.headers).normalize(),i=e.responseType;let c;function h(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&(T.isStandardBrowserEnv||T.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+f))}const d=rt(e.baseURL,e.url);u.open(e.method.toUpperCase(),Qe(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function l(){if(!u)return;const y=g.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),p={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};gn(function(w){n(w),h()},function(w){r(w),h()},p),u=null}if("onloadend"in u?u.onloadend=l:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(l)},u.onabort=function(){u&&(r(new E("Request aborted",E.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new E("Network Error",E.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||et;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new E(f,p.clarifyTimeoutError?E.ETIMEDOUT:E.ECONNABORTED,e,u)),u=null},T.isStandardBrowserEnv){const y=(e.withCredentials||xn(d))&&e.xsrfCookieName&&Pn.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in u&&a.forEach(o.toJSON(),function(f,p){u.setRequestHeader(p,f)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Le(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Le(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=y=>{u&&(r(!y||y.type?new k(null,e,u):y),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const m=_n(d);if(m&&T.protocols.indexOf(m)===-1){r(new E("Unsupported protocol "+m+":",E.ERR_BAD_REQUEST,e));return}u.send(s||null)})},J={http:rn,xhr:Dn};a.forEach(J,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ln={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?J[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new E(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(J,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:J};function ae(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function Be(e){return ae(e),e.headers=g.from(e.headers),e.data=ie.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ln.getAdapter(e.adapter||we.adapter)(e).then(function(r){return ae(e),r.data=ie.call(e,e.transformResponse,r),r.headers=g.from(r.headers),r},function(r){return nt(r)||(ae(e),r&&r.response&&(r.response.data=ie.call(e,e.transformResponse,r.response),r.response.headers=g.from(r.response.headers))),Promise.reject(r)})}const je=e=>e instanceof g?e.toJSON():e;function x(e,t){t=t||{};const n={};function r(u,d,l){return a.isPlainObject(u)&&a.isPlainObject(d)?a.merge.call({caseless:l},u,d):a.isPlainObject(d)?a.merge({},d):a.isArray(d)?d.slice():d}function s(u,d,l){if(a.isUndefined(d)){if(!a.isUndefined(u))return r(void 0,u,l)}else return r(u,d,l)}function o(u,d){if(!a.isUndefined(d))return r(void 0,d)}function i(u,d){if(a.isUndefined(d)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function c(u,d,l){if(l in t)return r(u,d);if(l in e)return r(void 0,u)}const h={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,d)=>s(je(u),je(d),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(d){const l=h[d]||s,m=l(e[d],t[d],d);a.isUndefined(m)&&l!==c||(n[d]=m)}),n}const st="1.3.4",be={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{be[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ke={};be.transitional=function(t,n,r){function s(o,i){return"[Axios v"+st+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new E(s(i," has been removed"+(n?" in "+n:"")),E.ERR_DEPRECATED);return n&&!ke[i]&&(ke[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Bn(e,t,n){if(typeof e!="object")throw new E("options must be an object",E.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],h=c===void 0||i(c,o,e);if(h!==!0)throw new E("option "+o+" must be "+h,E.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new E("Unknown option "+o,E.ERR_BAD_OPTION)}}const le={assertOptions:Bn,validators:be},C=le.validators;class ${constructor(t){this.defaults=t,this.interceptors={request:new Ue,response:new Ue}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=x(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&le.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!==void 0&&le.assertOptions(s,{encode:C.function,serialize:C.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=g.concat(i,o);const c=[];let h=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(h=h&&p.synchronous,c.unshift(p.fulfilled,p.rejected))});const u=[];this.interceptors.response.forEach(function(p){u.push(p.fulfilled,p.rejected)});let d,l=0,m;if(!h){const f=[Be.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,u),m=f.length,d=Promise.resolve(n);l<m;)d=d.then(f[l++],f[l++]);return d}m=c.length;let y=n;for(l=0;l<m;){const f=c[l++],p=c[l++];try{y=f(y)}catch(R){p.call(this,R);break}}try{d=Be.call(this,y)}catch(f){return Promise.reject(f)}for(l=0,m=u.length;l<m;)d=d.then(u[l++],u[l++]);return d}getUri(t){t=x(this.defaults,t);const n=rt(t.baseURL,t.url);return Qe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){$.prototype[t]=function(n,r){return this.request(x(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(x(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}$.prototype[t]=n(),$.prototype[t+"Form"]=n(!0)});const V=$;class Re{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new k(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Re(function(s){t=s}),cancel:t}}}const jn=Re;function kn(e){return function(n){return e.apply(null,n)}}function In(e){return a.isObject(e)&&e.isAxiosError===!0}const fe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fe).forEach(([e,t])=>{fe[t]=e});const Hn=fe;function ot(e){const t=new V(e),n=Me(V.prototype.request,t);return a.extend(n,V.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ot(x(e,s))},n}const b=ot(we);b.Axios=V;b.CanceledError=k;b.CancelToken=jn;b.isCancel=nt;b.VERSION=st;b.toFormData=K;b.AxiosError=E;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=kn;b.isAxiosError=In;b.mergeConfig=x;b.AxiosHeaders=g;b.formToJSON=e=>tt(a.isHTMLForm(e)?new FormData(e):e);b.HttpStatusCode=Hn;b.default=b;const Mn=b,qn="https://sheets.wevis.info";async function it(e,t){const{data:n}=await Mn.get(`${qn}/api/v1/db/public/shared-view/${e}/rows`,{params:t});return n.data}const vn=200,L=(e,t)=>({fetch:n=>it(e,{...t,...n}),fetchAll:n=>zn(e,{...t,...n})});async function zn(e,t){let n=[],r=null;do{const s=await it(e,{...t,offset:r?r.page*r.pageSize:0,limit:vn});n.push(...s.list),r=s.pageInfo}while(!(r!=null&&r.isLastPage));return n}const Jn={Parties:L("40065196-c978-4d7a-b3fb-fb84694383a7"),People:L("572c5e5c-a3d8-440f-9a70-3c4c773543ec",{"nested[PeoplePartyHistory][fields]":"Party,EstablishedDate"}),VoteLog:L("e06d1465-2786-4799-9c0f-a20f4cf71ec4"),PeopleVotes:L("e58433cc-f4fd-499b-926d-05431412cbba"),Policies:L("d930acb2-b1f8-4a85-9ed9-04c2b1edc951")},Vn="#CCCCCC",$n=()=>{const{subscribe:e,update:t}=Ie({list:[],map:new Map});return{subscribe:e,load:async()=>{const n=(await Jn.Parties.fetchAll({fields:"Name,Color,PartyGroup",where:"(PartyType,eq,พรรค)"})).map(({Color:s,...o})=>({...o,Color:s||Vn})),r=new Map(n.map(s=>[s.Name,s]));t(()=>({list:n,map:r}))}}},de=$n(),Wn=`${mt}/data/popularity-2562.csv`,Kn=()=>{const{subscribe:e,update:t}=Ie({});return{subscribe:e,load:async()=>{const n=at(de),s=(await gt(Wn)).reduce((o,{province:i,electorialDistrictNumber:c,party:h,points:u})=>(o[i]||(o[i]={}),o[i][c]||(o[i][c]=[]),o[i][c].push({party:n.map.get(h),points:+u}),o),{});t(()=>s)},calculate(){}}},pe=Kn(),Gn=ht(pe,e=>{const t={};return Object.values(e).forEach(n=>Object.values(n).forEach(r=>{const{party:s}=r[0];s&&(t[s.Name]||(t[s.Name]={party:s,fromDistrict:0,fromPartylist:0,total:0}),t[s.Name].fromDistrict++,t[s.Name].total++)})),Object.values(t).sort((n,r)=>r.total-n.total)});function Xn(e){let t,n,r,s;return{c(){t=Se("div"),n=Se("h1"),r=Oe("Result page"),s=Oe(`
	Check console for example of districtPopularity and representatives stores`),this.h()},l(o){t=Ae(o,"DIV",{class:!0});var i=Te(t);n=Ae(i,"H1",{});var c=Te(n);r=ge(c,"Result page"),c.forEach(Y),s=ge(i,`
	Check console for example of districtPopularity and representatives stores`),i.forEach(Y),this.h()},h(){ft(t,"class","h-full flex flex-col")},m(o,i){dt(o,t,i),Z(t,n),Z(n,r),Z(t,s)},p:Q,i:Q,o:Q,d(o){o&&Y(t)}}}function Yn(e,t,n){let r,s,o;return ee(e,Gn,i=>n(0,r=i)),ee(e,pe,i=>n(1,s=i)),ee(e,de,i=>n(2,o=i)),pt(async()=>{await de.load(),console.log(o),await pe.load(),console.log(s),console.log(r)}),[]}class tr extends ct{constructor(t){super(),ut(this,t,Yn,Xn,lt,{})}}export{tr as default};
