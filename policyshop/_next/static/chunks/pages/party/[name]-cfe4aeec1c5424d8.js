(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[117],{6521:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/party/[name]",function(){return r(8869)}])},5328:function(e,t,r){"use strict";var l=r(2322),s=r(3244),a=r(2784);let n=e=>{let t,{options:r,currentOption:n,onSelect:c,placeholder:o,outline:i,disabled:d}=e,u=(0,a.useRef)(null),[x,p]=(0,a.useState)(!1);(0,a.useEffect)(()=>{function e(e){u.current&&!u.current.contains(e.target)&&p(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[u]);let f=e=>{d||(c(e),p(!1))};return(0,l.jsxs)("div",{className:"relative w-full",ref:u,children:[(0,l.jsxs)("div",{className:"flex items-center justify-between hover:".concat(d?"cursor-unset":"cursor-pointer"," ").concat(i?"p-[8px] border-b-[3px]":"px-[16px] py-[10px] bg-[var(--color-white)] border-[3px] rounded-[50px]"),onClick:()=>{d||p(!x)},style:{borderColor:(t="var(--color-black)",d&&(t="var(--color-gray-2)"),t)},children:[(0,l.jsx)("span",{className:d?"text-[var(--color-gray-2)]":null!==n?"text-[var(--color-black)]":"text-[var(--color-gray-3)]",children:n?n.label:o||"เลือกตัวเลือก"}),(0,l.jsx)("img",{className:"".concat(d&&"[filter:invert(88%) sepia(9%) saturate(416%) hue-rotate(17deg) brightness(83%) contrast(87%)]"),src:"".concat(s.E,"/Chevron.svg"),alt:"dropdown-arrow",style:{transform:"".concat(x?"rotate(180deg)":"none"),filter:"".concat(d?"invert(88%) sepia(9%) saturate(416%) hue-rotate(17deg) brightness(83%) contrast(87%)":"unset")}})]}),x&&(0,l.jsx)("div",{className:"absolute w-full max-h-[300px] overflow-y-auto z-50 mt-[12px] p-[15px] bg-[var(--color-white)] border-[3px] border-[var(--color-black)] rounded-[10px]",children:r.map((e,t)=>(0,l.jsx)("div",{className:"[&:not(:first-child)]:border-t-[1px] border-[var(--color-black)] py-[5px] hover:cursor-pointer hover:bg-[var(--color-gray-1)]",onClick:()=>f(e),children:e.label},"option-".concat(t)))})]})};t.Z=n},1415:function(e,t,r){"use strict";var l=r(2322),s=r(2784),a=r(1664),n=r.n(a),c=r(3244);let o=e=>{let{title:t,children:a}=e;return(0,s.useEffect)(()=>{r.e(303).then(r.bind(r,6303))},[]),(0,l.jsxs)("div",{className:"main-component",children:[(0,l.jsx)("election-header",{}),(0,l.jsxs)("div",{className:"max-w-[420px]   m-auto ".concat("landing"!=t?" md:max-w-[728px] px-4":" md:max-w-none"),children:["landing"!=t&&(0,l.jsxs)(n(),{href:"/",className:"flex mt-[16px]",children:[(0,l.jsx)("img",{src:"".concat(c.E,"/arrow.svg"),alt:"arrow"}),(0,l.jsx)("p",{className:"ml-[8px] typo-b2 font-kondolar font-bold",children:t})]}),(0,l.jsx)("div",{children:a})]})]})};t.Z=o},9248:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var l=r(2322);let s=e=>{let{policyInfo:t}=e;var s=r(3054)();return(0,l.jsx)("div",{className:"bg-[var(--color-white)] border-[1px] border-[var(--color-gray-2)] rounded-[10px] overflow-hidden h-fit",children:(0,l.jsxs)("div",{className:"p-[12px] ",children:[(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsx)("span",{className:"ml-[4px] typo-b7 font-bold",children:t.Party.Name})}),(0,l.jsx)("div",{className:"relative mt-[8px] w-full pb-[100%] h-0 rounded-[5px] bg-red-400",children:(0,l.jsx)("span",{className:"absolute px-[4px] top-[50%] left-[50%] w-full translate-x-[-50%] translate-y-[-50%] text-center typo-b4 text-[var(--color-white)] font-bold",children:t.Title})}),t.Explain&&(0,l.jsx)("div",{className:"mt-[8px] typo-b5 list",dangerouslySetInnerHTML:{__html:s.render(t.Explain||"-")}})]})})},a=e=>{let{policyList:t,secondList:r}=e;return(0,l.jsxs)("div",{className:"grid ".concat(r?"grid-cols-2 gap-[16px]":"grid-cols-1"),children:[(0,l.jsx)("div",{className:"grid ".concat(r?"grid-cols-1":"grid-cols-2 gap-[16px]"),children:t.map((e,t)=>(0,l.jsx)(s,{policyInfo:e},"first-card-".concat(t)))}),r&&(0,l.jsx)("div",{className:"grid-cols-1",children:r.map((e,t)=>(0,l.jsx)(s,{policyInfo:e},"second-card-".concat(t)))})]})};var n=a},5180:function(e,t,r){"use strict";var l=r(2322),s=r(9248);let a=e=>{let{policyList:t,children:r}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"grid gap-[8px]",children:r}),(0,l.jsx)("div",{className:"mt-[16px]",children:(0,l.jsx)(s.Z,{policyList:t})})]})};t.Z=a},8869:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return p},default:function(){return f}});var l=r(2322),s=r(2784),a=r(1163),n=r(1415),c=r(1612);let o=e=>{let{party:t}=e;return(0,l.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,l.jsxs)("div",{className:"flex items-center justify-center",children:[(0,l.jsx)("div",{className:"w-[70px] h-[70px] mr-4   ",children:t&&t.Images&&t.Images[0]&&(0,l.jsx)("img",{src:t.Images[0].url,alt:"party-logo",className:"rounded-full"})}),(0,l.jsx)("p",{className:"font-bold typo-h3",children:null==t?void 0:t.Name})]}),(0,l.jsx)("button",{className:"typo-b4 border-[3px] mt-4 border-black rounded-full w-fit mx-auto py-2 px-4",children:"รู้จักพรรคนี้เพิ่มเติม"}),(0,l.jsxs)("div",{className:"mt-8 text-center typo-b5",children:[(0,l.jsx)("p",{children:"ข้อมูลนี้อัปเดตในวันที่ xx/xx/xxxx"}),(0,l.jsx)("p",{className:"ml-4 ",children:"ส่งข้อมูลให้ทีมงานเพื่ออัปเดตเพิ่มเติมที่"}),(0,l.jsx)("p",{children:"team@punchup.world"})]})]})},i=()=>(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"mt-5 ",children:[(0,l.jsx)("p",{className:"font-bold typo-h5",children:"นโยบาย 66"}),(0,l.jsx)("p",{className:"font-bold typo-h7",children:"แบ่งตามประเด็น"})]})});var d=r(5180),u=r(5328);let x=()=>{let e=(0,a.useRouter)(),{name:t}=e.query,[r,x]=(0,s.useState)(),[p,f]=(0,s.useState)([]),[h,m]=(0,s.useState)([]),[v,b]=(0,s.useState)([]),[j,y]=(0,s.useState)(null),N=(0,s.useCallback)(async()=>{let e=await (0,c.xr)(),r=e.filter(e=>e.Name===t);x(r[0])},[t]),g=(0,s.useCallback)(async()=>{let e=await (0,c.Yo)(),r=e.filter(e=>e.Party.Name===t);f(r),m(r.slice(0,1));let l=(0,c.kE)(Object.keys((0,c.vM)(r,"Topic")),"policies");await b([{label:"นโยบายทั้งหมด"},...l])},[t]),w=()=>{m(p)};return(0,s.useEffect)(()=>{t&&(N(),g())},[t]),(0,l.jsx)(n.Z,{title:"พรรคนี้มีอะไรมาขายบ้าง",children:(0,l.jsxs)("div",{id:"header",children:[(0,l.jsx)(o,{party:r}),(0,l.jsx)(i,{}),(0,l.jsxs)("div",{className:"py-10 mt-10 border-y border-highlight-2",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between ",children:[(0,l.jsx)("p",{className:"font-bold typo-h7",children:"นโยบายไฮไลท์"}),(0,l.jsx)("button",{className:"typo-b4",onClick:w,children:"ดูทั้งหมด"})]}),(0,l.jsx)(d.Z,{policyList:h})]}),(0,l.jsx)("p",{className:"mt-10 font-bold typo-h6",children:"นโยบายตามประเด็น"}),(0,l.jsx)(d.Z,{policyList:p,children:(0,l.jsx)(u.Z,{options:v,currentOption:j,onSelect:y})})]})})};var p=!0,f=x},1612:function(e,t,r){"use strict";r.d(t,{xr:function(){return o},Yo:function(){return i},kE:function(){return n},ix:function(){return a},vM:function(){return l},mj:function(){return s}});let l=(e,t)=>e.reduce(function(e,r){return(e[r[t]]=e[r[t]]||[]).push(r),e},{}),s=(e,t,r,l)=>{e.push("/".concat(t,"/").concat(r,"/").concat(l?"?party="+l:""),void 0,{shallow:!0})},a=(e,t,r)=>{let l=null==e?void 0:e.filter(l=>t&&r&&(null==t?void 0:t.label)!="ดูของทุกพรรค"&&(null==r?void 0:r.label)!="นโยบายทั้งหมด"?l.Party.Name==(null==t?void 0:t.label)&&l.Topic===(null==r?void 0:r.label):t&&(null==t?void 0:t.label)!="ดูของทุกพรรค"?l.Party.Name==(null==t?void 0:t.label):r&&(null==r?void 0:r.label)!="นโยบายทั้งหมด"?l.Topic===(null==r?void 0:r.label):e);return l},n=(e,t)=>e.map(e=>({label:"parties"===t?e.Name:e}));var c=r(3871);let o=async()=>{let e=await c.U.Parties.fetchAll({where:"(PartyType,eq,พรรค)"});return e},i=async()=>{let e=await c.U.Policies.fetchAll({});return e}},3244:function(e,t,r){"use strict";r.d(t,{E:function(){return l}});let l="/policyshop"},1163:function(e,t,r){e.exports=r(387)},3871:function(e,t,r){"use strict";r.d(t,{U:function(){return c}});var l=r(2382);async function s(e,t){let{data:r}=await l.Z.get(`https://sheets.wevis.info/api/v1/db/public/shared-view/${e}/rows`,{params:t});return r.data}let a=(e,t)=>({fetch:r=>s(e,{...t,...r}),fetchAll:r=>n(e,{...t,...r})});async function n(e,t){let r=[],l=null;do{let a=await s(e,{...t,offset:l?l.page*l.pageSize:0,limit:200});r.push(...a.list),l=a.pageInfo}while(!l?.isLastPage);return r}let c={Parties:a("40065196-c978-4d7a-b3fb-fb84694383a7"),People:a("572c5e5c-a3d8-440f-9a70-3c4c773543ec",{"nested[PeoplePartyHistory][fields]":"Party,EstablishedDate"}),VoteLog:a("e06d1465-2786-4799-9c0f-a20f4cf71ec4"),PeopleVotes:a("e58433cc-f4fd-499b-926d-05431412cbba"),Policies:a("d930acb2-b1f8-4a85-9ed9-04c2b1edc951")}}},function(e){e.O(0,[664,54,382,774,888,179],function(){return e(e.s=6521)}),_N_E=e.O()}]);