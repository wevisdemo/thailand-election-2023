function w(){}function W(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(T)}function q(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function ot(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function G(t){return Object.keys(t).length===0}function B(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t){let n;return B(t,e=>n=e)(),n}function at(t,n,e){t.$$.on_destroy.push(B(n,e))}function _t(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?W(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],u=Math.max(n.dirty.length,r.length);for(let s=0;s<u;s+=1)o[s]=n.dirty[s]|r[s];return o}return n.dirty|r}return n.dirty}function ht(t,n,e,i,r,o){if(r){const u=O(n,e,i,o);t.p(u,r)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let v=!1;function J(){v=!0}function K(){v=!1}function Q(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const l=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=l?r+1:Q(1,r,g=>n[e[g]].claim_order,l))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const o=[],u=[];let s=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(o.push(n[c-1]);s>=c;s--)u.push(n[s]);s--}for(;s>=0;s--)u.push(n[s]);o.reverse(),u.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<u.length;c++){for(;l<o.length&&u[c].claim_order>=o[l].claim_order;)l++;const a=l<o.length?o[l]:null;t.insertBefore(u[c],a)}}function U(t,n){if(v){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function pt(t,n,e){v&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function gt(){return A(" ")}function xt(){return A("")}function bt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Z(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $t(t,n,e){n in t?t[n]=typeof t[n]=="boolean"&&e===""?!0:e:Z(t,n,e)}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){nt(t);const o=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const s=t[u];if(n(s)){const c=e(s);return c===void 0?t.splice(u,1):t[u]=c,r||(t.claim_info.last_index=u),s}}for(let u=t.claim_info.last_index-1;u>=0;u--){const s=t[u];if(n(s)){const c=e(s);return c===void 0?t.splice(u,1):t[u]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function z(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const o=[];for(let u=0;u<r.attributes.length;u++){const s=r.attributes[u];e[s.name]||o.push(s.name)}o.forEach(u=>r.removeAttribute(u))},()=>i(n))}function wt(t,n,e){return z(t,n,e,X)}function vt(t,n,e){return z(t,n,e,Y)}function et(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function Et(t){return et(t," ")}function Nt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function jt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function St(t,n,e){t.classList[e?"add":"remove"](n)}function At(t,n){return new t(n)}let p;function m(t){p=t}function D(){if(!p)throw new Error("Function called outside component initialization");return p}function kt(t){D().$$.on_mount.push(t)}function Ct(t){D().$$.after_update.push(t)}const h=[],L=[],b=[],N=[],F=Promise.resolve();let j=!1;function H(){j||(j=!0,F.then(I))}function Mt(){return H(),F}function S(t){b.push(t)}function Lt(t){N.push(t)}const E=new Set;let d=0;function I(){if(d!==0)return;const t=p;do{try{for(;d<h.length;){const n=h[d];d++,m(n),it(n.$$)}}catch(n){throw h.length=0,d=0,n}for(m(null),h.length=0,d=0;L.length;)L.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(h.length);for(;N.length;)N.pop()();j=!1,E.clear(),m(t)}function it(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const $=new Set;let _;function Tt(){_={r:0,c:[],p:_}}function qt(){_.r||y(_.c),_=_.p}function rt(t,n){t&&t.i&&($.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Ot(t,n){const e={},i={},r={$$scope:1};let o=t.length;for(;o--;){const u=t[o],s=n[o];if(s){for(const c in u)c in s||(i[c]=1);for(const c in s)r[c]||(e[c]=s[c],r[c]=1);t[o]=s}else for(const c in u)r[c]=1}for(const u in i)u in e||(e[u]=void 0);return e}function Pt(t){return typeof t=="object"&&t!==null?t:{}}function zt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Dt(t){t&&t.c()}function Ft(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||S(()=>{const u=t.$$.on_mount.map(T).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...u):y(u),t.$$.on_mount=[]}),o.forEach(S)}function ut(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){t.$$.dirty[0]===-1&&(h.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ht(t,n,e,i,r,o,u,s=[-1]){const c=p;m(t);const l=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:n.target||c.$$.root};u&&u(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,g,...k)=>{const C=k.length?k[0]:g;return l.ctx&&r(l.ctx[f],l.ctx[f]=C)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](C),a&&st(t,f)),g}):[],l.update(),a=!0,y(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){J();const f=tt(n.target);l.fragment&&l.fragment.l(f),f.forEach(V)}else l.fragment&&l.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),K(),I()}m(c)}class It{$destroy(){ut(this,1),this.$destroy=w}$on(n,e){if(!q(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{ct as A,ut as B,_t as C,ht as D,mt as E,dt as F,U as G,w as H,at as I,ot as J,$t as K,bt as L,y as M,Y as N,vt as O,q as P,yt as Q,St as R,It as S,W as T,zt as U,Ot as V,Pt as W,Lt as X,ft as Y,B as Z,gt as a,pt as b,Et as c,Bt as d,xt as e,qt as f,rt as g,V as h,Ht as i,Ct as j,X as k,wt as l,tt as m,Z as n,kt as o,jt as p,A as q,et as r,lt as s,Mt as t,Nt as u,Tt as v,L as w,At as x,Dt as y,Ft as z};
