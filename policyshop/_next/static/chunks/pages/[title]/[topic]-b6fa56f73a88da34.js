(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[865],{533:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[title]/[topic]",function(){return r(4517)}])},5328:function(e,t,r){"use strict";var l=r(2322),a=r(3244),n=r(2784);let c=e=>{let t,{options:r,currentOption:c,onSelect:o,placeholder:s,outline:i,disabled:d}=e,u=(0,n.useRef)(null),[p,f]=(0,n.useState)(!1);(0,n.useEffect)(()=>{function e(e){u.current&&!u.current.contains(e.target)&&f(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[u]);let x=e=>{d||(o(e),f(!1))};return(0,l.jsxs)("div",{className:"relative w-full",ref:u,children:[(0,l.jsxs)("div",{className:"flex items-center justify-between hover:".concat(d?"cursor-unset":"cursor-pointer"," ").concat(i?"p-[8px] border-b-[3px]":"px-[16px] py-[10px] bg-[var(--color-white)] border-[3px] rounded-[50px]"),onClick:()=>{d||f(!p)},style:{borderColor:(t="var(--color-black)",d&&(t="var(--color-gray-2)"),t)},children:[(0,l.jsx)("span",{className:d?"text-[var(--color-gray-2)]":null!==c?"text-[var(--color-black)]":"text-[var(--color-gray-3)]",children:c?c.label:s||"เลือกตัวเลือก"}),(0,l.jsx)("img",{className:"".concat(d&&"[filter:invert(88%) sepia(9%) saturate(416%) hue-rotate(17deg) brightness(83%) contrast(87%)]"),src:"".concat(a.E,"/Chevron.svg"),alt:"dropdown-arrow",style:{transform:"".concat(p?"rotate(180deg)":"none"),filter:"".concat(d?"invert(88%) sepia(9%) saturate(416%) hue-rotate(17deg) brightness(83%) contrast(87%)":"unset")}})]}),p&&(0,l.jsx)("div",{className:"absolute w-full max-h-[300px] overflow-y-auto z-50 mt-[12px] p-[15px] bg-[var(--color-white)] border-[3px] border-[var(--color-black)] rounded-[10px]",children:r.map((e,t)=>(0,l.jsx)("div",{className:"[&:not(:first-child)]:border-t-[1px] border-[var(--color-black)] py-[5px] hover:cursor-pointer hover:bg-[var(--color-gray-1)]",onClick:()=>x(e),children:e.label},"option-".concat(t)))})]})};t.Z=c},1415:function(e,t,r){"use strict";var l=r(2322),a=r(2784),n=r(1664),c=r.n(n),o=r(3244);let s=e=>{let{title:t,children:n}=e;return(0,a.useEffect)(()=>{r.e(303).then(r.bind(r,6303))},[]),(0,l.jsxs)("div",{className:"main-component",children:[(0,l.jsx)("election-header",{}),(0,l.jsxs)("div",{className:"max-w-[420px]   m-auto ".concat("landing"!=t?" md:max-w-[728px] px-4":" md:max-w-none"),children:["landing"!=t&&(0,l.jsxs)(c(),{href:"/",className:"flex mt-[16px]",children:[(0,l.jsx)("img",{src:"".concat(o.E,"/arrow.svg"),alt:"arrow"}),(0,l.jsx)("p",{className:"ml-[8px] typo-b2 font-kondolar font-bold",children:t})]}),(0,l.jsx)("div",{children:n})]})]})};t.Z=s},9248:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var l=r(2322);let a=e=>{let{policyInfo:t}=e;var a=r(3054)();return(0,l.jsx)("div",{className:"bg-[var(--color-white)] border-[1px] border-[var(--color-gray-2)] rounded-[10px] overflow-hidden h-fit",children:(0,l.jsxs)("div",{className:"p-[12px] ",children:[(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsx)("span",{className:"ml-[4px] typo-b7 font-bold",children:t.Party.Name})}),(0,l.jsx)("div",{className:"relative mt-[8px] w-full pb-[100%] h-0 rounded-[5px] bg-red-400",children:(0,l.jsx)("span",{className:"absolute px-[4px] top-[50%] left-[50%] w-full translate-x-[-50%] translate-y-[-50%] text-center typo-b4 text-[var(--color-white)] font-bold",children:t.Title})}),t.Explain&&(0,l.jsx)("div",{className:"mt-[8px] typo-b5 list",dangerouslySetInnerHTML:{__html:a.render(t.Explain||"-")}})]})})},n=e=>{let{policyList:t,secondList:r}=e;return(0,l.jsxs)("div",{className:"grid ".concat(r?"grid-cols-2 gap-[16px]":"grid-cols-1"),children:[(0,l.jsx)("div",{className:"grid ".concat(r?"grid-cols-1":"grid-cols-2 gap-[16px]"),children:t.map((e,t)=>(0,l.jsx)(a,{policyInfo:e},"first-card-".concat(t)))}),r&&(0,l.jsx)("div",{className:"grid-cols-1",children:r.map((e,t)=>(0,l.jsx)(a,{policyInfo:e},"second-card-".concat(t)))})]})};var c=n},5180:function(e,t,r){"use strict";var l=r(2322),a=r(9248);let n=e=>{let{policyList:t,children:r}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"grid gap-[8px]",children:r}),(0,l.jsx)("div",{className:"mt-[16px]",children:(0,l.jsx)(a.Z,{policyList:t})})]})};t.Z=n},4517:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return u}});var l=r(2322),a=r(2784),n=r(1163),c=r(1415),o=r(5180),s=r(1612),i=r(5328);let d=()=>{let e=(0,n.useRouter)(),{title:t,topic:r,party:d}=e.query,[u,p]=(0,a.useState)([]),[f,x]=(0,a.useState)([]),[v,b]=(0,a.useState)([]),[h,m]=(0,a.useState)([]),[w,g]=(0,a.useState)(null),[y,j]=(0,a.useState)(null),N=async()=>{let e=await (0,s.Yo)();await p(e);let t=(0,s.kE)(Object.keys((0,s.vM)(e,"Topic")),"policies");await m([{label:"นโยบายทั้งหมด"},...t])},E=async()=>{let e=await (0,s.xr)(),t=(0,s.kE)(e,"parties");await b([{label:"ดูของทุกพรรค"},...t])};return(0,a.useEffect)(()=>{N(),E()},[]),(0,a.useEffect)(()=>{r&&j({label:"".concat(r)}),d&&g({label:"".concat(d)})},[r,d]),(0,a.useEffect)(()=>{u&&x((0,s.ix)(u,w,y)),(t&&y||w)&&(0,s.mj)(e,t,null==y?void 0:y.label,null==w?void 0:w.label)},[u,w,y]),(0,l.jsx)(c.Z,{title:t,children:r&&f&&(0,l.jsxs)(o.Z,{policyList:f,children:[(0,l.jsx)(i.Z,{options:v,currentOption:w,onSelect:g}),(0,l.jsx)(i.Z,{options:h,currentOption:y,onSelect:j})]})})};var u=!0;t.default=(0,a.memo)(d)},1612:function(e,t,r){"use strict";r.d(t,{xr:function(){return s},Yo:function(){return i},kE:function(){return c},ix:function(){return n},vM:function(){return l},mj:function(){return a}});let l=(e,t)=>e.reduce(function(e,r){return(e[r[t]]=e[r[t]]||[]).push(r),e},{}),a=(e,t,r,l)=>{e.push("/".concat(t,"/").concat(r,"/").concat(l?"?party="+l:""),void 0,{shallow:!0})},n=(e,t,r)=>{let l=null==e?void 0:e.filter(l=>t&&r&&(null==t?void 0:t.label)!="ดูของทุกพรรค"&&(null==r?void 0:r.label)!="นโยบายทั้งหมด"?l.Party.Name==(null==t?void 0:t.label)&&l.Topic===(null==r?void 0:r.label):t&&(null==t?void 0:t.label)!="ดูของทุกพรรค"?l.Party.Name==(null==t?void 0:t.label):r&&(null==r?void 0:r.label)!="นโยบายทั้งหมด"?l.Topic===(null==r?void 0:r.label):e);return l},c=(e,t)=>e.map(e=>({label:"parties"===t?e.Name:e}));var o=r(3871);let s=async()=>{let e=await o.U.Parties.fetchAll({where:"(PartyType,eq,พรรค)"});return e},i=async()=>{let e=await o.U.Policies.fetchAll({});return e}},3244:function(e,t,r){"use strict";r.d(t,{E:function(){return l}});let l="/policyshop"},1163:function(e,t,r){e.exports=r(387)},3871:function(e,t,r){"use strict";r.d(t,{U:function(){return o}});var l=r(2382);async function a(e,t){let{data:r}=await l.Z.get(`https://sheets.wevis.info/api/v1/db/public/shared-view/${e}/rows`,{params:t});return r.data}let n=(e,t)=>({fetch:r=>a(e,{...t,...r}),fetchAll:r=>c(e,{...t,...r})});async function c(e,t){let r=[],l=null;do{let n=await a(e,{...t,offset:l?l.page*l.pageSize:0,limit:200});r.push(...n.list),l=n.pageInfo}while(!l?.isLastPage);return r}let o={Parties:n("40065196-c978-4d7a-b3fb-fb84694383a7"),People:n("572c5e5c-a3d8-440f-9a70-3c4c773543ec",{"nested[PeoplePartyHistory][fields]":"Party,EstablishedDate"}),VoteLog:n("e06d1465-2786-4799-9c0f-a20f4cf71ec4"),PeopleVotes:n("e58433cc-f4fd-499b-926d-05431412cbba"),Policies:n("d930acb2-b1f8-4a85-9ed9-04c2b1edc951")}}},function(e){e.O(0,[664,54,382,774,888,179],function(){return e(e.s=533)}),_N_E=e.O()}]);