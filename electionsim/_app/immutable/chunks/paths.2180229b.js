import{H as b,a0 as q,M as k,s as w,R as z}from"./index.21148eee.js";const u=[];function A(e,i){return{subscribe:T(e,i).subscribe}}function T(e,i=b){let c;const n=new Set;function a(t){if(w(e,t)&&(e=t,c)){const r=!u.length;for(const s of n)s[1](),u.push(s,e);if(r){for(let s=0;s<u.length;s+=2)u[s][0](u[s+1]);u.length=0}}}function f(t){a(t(e))}function l(t,r=b){const s=[t,r];return n.add(s),n.size===1&&(c=i(a)||b),t(e),()=>{n.delete(s),n.size===0&&(c(),c=null)}}return{set:a,update:f,subscribe:l}}function M(e,i,c){const n=!Array.isArray(e),a=n?[e]:e,f=i.length<2;return A(c,l=>{let t=!1;const r=[];let s=0,_=b;const p=()=>{if(s)return;_();const o=i(n?r[0]:r,l);f?l(o):_=z(o)?o:b},m=a.map((o,d)=>q(o,y=>{r[d]=y,s&=~(1<<d),t&&p()},()=>{s|=1<<d}));return t=!0,p(),function(){k(m),_()}})}var g;const x=((g=globalThis.__sveltekit_cue36m)==null?void 0:g.base)??"/electionsim";var h;const R=((h=globalThis.__sveltekit_cue36m)==null?void 0:h.assets)??x;export{R as a,x as b,M as d,T as w};
