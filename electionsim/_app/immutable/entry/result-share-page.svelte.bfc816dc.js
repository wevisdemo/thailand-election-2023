import{S as C,i as D,s as N,k as g,a as P,y as R,l as b,m as v,h as _,c as I,z as x,n as O,K as y,b as G,G as p,A as L,g as V,d as w,B as A,I as T}from"../chunks/index.495c775b.js";import{b as S}from"../chunks/paths.0f519406.js";import{P as B,p as j}from"../chunks/party.3237a9b1.js";import{S as k,r as q}from"../chunks/share.54a83c3e.js";function z(n){let e,s,u,c,h,o,a,i,l,E,m,d;return a=new k({props:{representativeRecord:n[0],governmentParties:n[3],oppositionParties:n[2],governmentPoints:n[1]}}),{c(){e=g("div"),s=g("election-header"),u=P(),c=g("div"),h=P(),o=g("div"),R(a.$$.fragment),i=P(),l=g("election-bottom"),E=P(),m=g("election-footer"),this.h()},l(r){e=b(r,"DIV",{class:!0});var t=v(e);s=b(t,"ELECTION-HEADER",{}),v(s).forEach(_),u=I(t),c=b(t,"DIV",{class:!0}),v(c).forEach(_),h=I(t),o=b(t,"DIV",{class:!0});var f=v(o);x(a.$$.fragment,f),f.forEach(_),i=I(t),l=b(t,"ELECTION-BOTTOM",{"index-path":!0,"about-path":!0}),v(l).forEach(_),E=I(t),m=b(t,"ELECTION-FOOTER",{}),v(m).forEach(_),t.forEach(_),this.h()},h(){O(c,"class","w-full h-1 beyondx-gradient-bg"),O(o,"class","flex-1 flex justify-center items-center"),y(l,"index-path",S),y(l,"about-path",S+"/about"),O(e,"class","h-full flex flex-col")},m(r,t){G(r,e,t),p(e,s),p(e,u),p(e,c),p(e,h),p(e,o),L(a,o,null),p(e,i),p(e,l),p(e,E),p(e,m),d=!0},p(r,[t]){const f={};t&1&&(f.representativeRecord=r[0]),t&8&&(f.governmentParties=r[3]),t&4&&(f.oppositionParties=r[2]),t&2&&(f.governmentPoints=r[1]),a.$set(f)},i(r){d||(V(a.$$.fragment,r),d=!0)},o(r){w(a.$$.fragment,r),d=!1},d(r){r&&_(e),A(a)}}}function F(n,e,s){let u,c,h,o,a;return T(n,j,i=>s(4,o=i)),T(n,q,i=>s(0,a=i)),n.$$.update=()=>{n.$$.dirty&17&&s(3,[u,c,h]=a.reduce(([i,l,E],m)=>{var d;return((d=o.list.find(({Name:r})=>m.party.Name===r))==null?void 0:d.PartyGroup)===B.Government?[[...i,m],l,E+m.total]:[i,[m,...l],E]},[[],[],0]),u,(s(2,c),s(0,a),s(4,o)),(s(1,h),s(0,a),s(4,o)))},[a,h,c,u,o]}class Q extends C{constructor(e){super(),D(this,e,F,z,N,{})}}export{Q as default};
