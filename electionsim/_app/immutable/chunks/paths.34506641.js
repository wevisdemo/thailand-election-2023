import{H as l,a0 as m,M as y,s as w,R as z}from"./index.21148eee.js";const u=[];function A(e,i){return{subscribe:T(e,i).subscribe}}function T(e,i=l){let o;const n=new Set;function a(t){if(w(e,t)&&(e=t,o)){const r=!u.length;for(const s of n)s[1](),u.push(s,e);if(r){for(let s=0;s<u.length;s+=2)u[s][0](u[s+1]);u.length=0}}}function f(t){a(t(e))}function b(t,r=l){const s=[t,r];return n.add(s),n.size===1&&(o=i(a)||l),t(e),()=>{n.delete(s),n.size===0&&(o(),o=null)}}return{set:a,update:f,subscribe:b}}function M(e,i,o){const n=!Array.isArray(e),a=n?[e]:e,f=i.length<2;return A(o,b=>{let t=!1;const r=[];let s=0,_=l;const p=()=>{if(s)return;_();const c=i(n?r[0]:r,b);f?b(c):_=z(c)?c:l},q=a.map((c,d)=>m(c,k=>{r[d]=k,s&=~(1<<d),t&&p()},()=>{s|=1<<d}));return t=!0,p(),function(){y(q),_()}})}var h;const x=((h=globalThis.__sveltekit_hlq4k6)==null?void 0:h.base)??"/electionsim";var g;const R=((g=globalThis.__sveltekit_hlq4k6)==null?void 0:g.assets)??x;export{R as a,x as b,M as d,T as w};
