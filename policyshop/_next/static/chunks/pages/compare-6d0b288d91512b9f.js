(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427],{7858:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/compare",function(){return r(6968)}])},8117:function(e,t,r){"use strict";var l=r(2322),a=r(3244);let n=e=>{let{styles:t}=e;return(0,l.jsxs)("div",{className:"text-center typo-b6 mb-9 ".concat(t),children:[(0,l.jsx)("p",{children:"ส่งข้อมูลให้ทีมงานเพื่ออัปเดตเพิ่มเติมที่อีเมล"}),(0,l.jsxs)("div",{className:"flex mx-auto items-center w-fit space-x-[16px] mt-1",children:[(0,l.jsx)("p",{className:"font-bold ",children:"team@punchup.world"}),(0,l.jsxs)("button",{className:" bg-gray-2 flex items-center rounded-[20px] px-2 py-1",onClick:()=>{navigator.clipboard.writeText("team@punchup.world")},children:[(0,l.jsx)("img",{src:"".concat(a.E,"/clipboard.svg"),alt:"child",className:"mr-1 "}),(0,l.jsx)("p",{className:"typo-b7",children:"ก็อปปี้"})]})]})]})};t.Z=n},5328:function(e,t,r){"use strict";var l=r(2322),a=r(3244),n=r(2784);let s=e=>{let t,{options:r,currentOption:s,onSelect:c,placeholder:o,outline:i,disabled:d}=e,p=(0,n.useRef)(null),[u,x]=(0,n.useState)(!1);(0,n.useEffect)(()=>{function e(e){p.current&&!p.current.contains(e.target)&&x(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[p]);let f=e=>{d||(c(e),x(!1))};return(0,l.jsxs)("div",{className:"relative w-full",ref:p,children:[(0,l.jsxs)("div",{className:"flex items-center justify-between hover:".concat(d?"cursor-unset":"cursor-pointer"," ").concat(i?"p-[8px] border-b-[3px]":"px-[16px] py-[10px] bg-[var(--color-white)] border-[3px] rounded-[50px]"),onClick:()=>{d||x(!u)},style:{borderColor:(t="var(--color-black)",d&&(t="var(--color-gray-2)"),t)},children:[(0,l.jsx)("span",{className:d?"text-[var(--color-gray-2)]":null!==s?"text-[var(--color-black)]":"text-[var(--color-gray-3)]",children:s?s.label:o||"เลือกตัวเลือก"}),(0,l.jsx)("img",{className:"".concat(d&&"[filter:invert(88%) sepia(9%) saturate(416%) hue-rotate(17deg) brightness(83%) contrast(87%)]"),src:"".concat(a.E,"/Chevron.svg"),alt:"dropdown-arrow",style:{transform:"".concat(u?"rotate(180deg)":"none"),filter:"".concat(d?"invert(88%) sepia(9%) saturate(416%) hue-rotate(17deg) brightness(83%) contrast(87%)":"unset")}})]}),u&&(0,l.jsx)("div",{className:"absolute w-full max-h-[300px] overflow-y-auto z-50 mt-[12px] p-[15px] bg-[var(--color-white)] border-[3px] border-[var(--color-black)] rounded-[10px]",children:r.map((e,t)=>(0,l.jsx)("div",{className:"[&:not(:first-child)]:border-t-[1px] border-[var(--color-black)] py-[5px] hover:cursor-pointer hover:bg-[var(--color-gray-1)]",onClick:()=>f(e),children:e.label},"option-".concat(t)))})]})};t.Z=s},1415:function(e,t,r){"use strict";var l=r(2322),a=r(2784),n=r(1664),s=r.n(n),c=r(3244);let o=e=>{let{title:t,children:n}=e;return(0,a.useEffect)(()=>{r.e(303).then(r.bind(r,6303))},[]),(0,l.jsxs)("div",{className:"main-component",children:[(0,l.jsx)("election-header",{}),(0,l.jsxs)("div",{className:"max-w-[420px]   m-auto ".concat("landing"!=t?" md:max-w-[728px] px-4":" md:max-w-none"),children:["landing"!=t&&(0,l.jsxs)(s(),{href:"/",className:"flex mt-[16px]",children:[(0,l.jsx)("img",{src:"".concat(c.E,"/arrow.svg"),alt:"arrow"}),(0,l.jsx)("p",{className:"ml-[8px] typo-h6 font-bold",children:t})]}),(0,l.jsx)("div",{children:n})]})]})};t.Z=o},9774:function(e,t,r){"use strict";var l=r(2322);let a=e=>{let{policyInfo:t}=e;var a=r(3054)();return(0,l.jsx)("div",{className:"bg-[var(--color-white)] border-[1px] border-[var(--color-gray-2)] rounded-[10px] overflow-hidden h-fit w-full max-w-[155px] md:max-w-[232px] mx-auto",children:(0,l.jsxs)("div",{className:"p-[12px] ",children:[(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsx)("span",{className:"ml-[4px] typo-b7 font-bold",children:t.Party.Name})}),(0,l.jsx)("div",{className:"relative mt-[8px] w-full pb-[100%] h-0 rounded-[5px] bg-red-400",children:(0,l.jsx)("span",{className:"card-title absolute px-[4px] top-[50%] left-[50%] w-full translate-x-[-50%] translate-y-[-50%] text-center typo-b4 text-[var(--color-white)] font-bold",children:t.Title})}),t.Explain&&(0,l.jsx)("div",{className:"mt-[8px] typo-b5 list",dangerouslySetInnerHTML:{__html:a.render(t.Explain||"-")}})]})})};t.Z=a},4383:function(e,t,r){"use strict";var l=r(2322),a=r(3244);let n=e=>{let{onClick:t}=e;return(0,l.jsxs)("div",{className:"flex justify-between items-center w-fit py-[8px] px-[16px] border-[1px] border-[var(--color-black)] rounded-[16px] hover:cursor-pointer",onClick:t,children:[(0,l.jsx)("p",{className:"typo-b4",children:"แรนด้อมใหม่"}),(0,l.jsx)("img",{src:"".concat(a.E,"/shuffle.svg"),alt:"shuffle",className:"ml-[8px]"})]})};t.Z=n},6968:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return f},default:function(){return m}});var l=r(2322),a=r(8117),n=r(2784),s=r(5328);let c=e=>{let{policies:t,setDisplayPolicies1:r,setDisplayPolicies2:a}=e,c=t.reduce((e,t)=>{let r=e.find(e=>e.label===t.Party.Name);return r||(e=[...e,{label:t.Party.Name,value:t.Party.Name}]),e},[]),o=t.reduce((e,t)=>{let r=e.find(e=>e.label===t.Topic);return r||(e=[...e,{label:t.Topic,value:t.Topic}]),e},[]),[i,d]=(0,n.useState)({party1:c,party2:c,topic:o}),[p,u]=(0,n.useState)({party1:null,party2:null,topic:null}),x=(e,t,r)=>e.filter(e=>e.Party.Name===t&&e.Topic===r);return(0,n.useEffect)(()=>{let e=p.party1,l=p.party2,n=p.topic;e&&d(t=>{let r=c.filter(t=>t.label!=e.label);return{...t,party2:r}}),l&&d(e=>{let t=c.filter(e=>e.label!=l.label);return{...e,party1:t}}),n&&(r(x(t,(null==e?void 0:e.value)||"",n.value||"")),a(x(t,(null==l?void 0:l.value)||"",n.value||"")))},[p]),(0,l.jsxs)("div",{className:"flex flex-col w-full",children:[(0,l.jsxs)("div",{className:"flex gap-[16px]",children:[(0,l.jsx)(s.Z,{options:i.party1,currentOption:p.party1,onSelect:e=>{u(t=>({...t,party1:e}))},placeholder:"เลือกพรรคที่1"}),(0,l.jsx)(s.Z,{options:i.party2,currentOption:p.party2,onSelect:e=>{u(t=>({...t,party2:e}))},placeholder:"เลือกพรรคที่2"})]}),(0,l.jsx)("div",{className:"mt-[24px]",children:(0,l.jsx)(s.Z,{options:i.topic,currentOption:p.topic,onSelect:e=>{u(t=>({...t,topic:e}))},disabled:!p.party1&&!p.party2,placeholder:"เลือกนโยบาย"})})]})};var o=r(9774);let i=e=>{let{policyList:t,secondList:r}=e;return(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("div",{className:"grid grid-cols-1 gap-[16px] w-[50%] h-fit",children:t.map((e,t)=>(0,l.jsx)(o.Z,{policyInfo:e},"first-card-".concat(t)))}),(0,l.jsx)("div",{className:"grid grid-cols-1 gap-[16px] w-[50%] h-fit",children:r.map((e,t)=>(0,l.jsx)(o.Z,{policyInfo:e},"second-card-".concat(t)))})]})};var d=r(1415),p=r(4383),u=r(7147);let x=e=>{let{policies:t}=e,[r,s]=(0,n.useState)([]),[o,x]=(0,n.useState)([]),f=()=>{s(e=>[...(0,u.Uy)(e)]),x(e=>[...(0,u.Uy)(e)])};return(0,l.jsxs)(d.Z,{title:"เปรียบเทียบนโยบาย",children:[(0,l.jsx)(a.Z,{styles:"mt-[32px]"}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{policies:t,setDisplayPolicies1:s,setDisplayPolicies2:x}),(0,l.jsxs)("div",{className:"flex justify-between items-center mt-[24px]",children:[(0,l.jsx)("p",{children:"เรียงตาม"}),(0,l.jsx)(p.Z,{onClick:f})]}),(0,l.jsx)("div",{className:"mt-[16px]",children:(0,l.jsx)(i,{policyList:r,secondList:o})})]})]})};var f=!0,m=x},7147:function(e,t,r){"use strict";r.d(t,{xr:function(){return o},Yo:function(){return i},kE:function(){return s},ix:function(){return n},vM:function(){return l},mj:function(){return a},Uy:function(){return d}});let l=(e,t)=>e.reduce(function(e,r){return(e[r[t]]=e[r[t]]||[]).push(r),e},{}),a=(e,t,r,l)=>{e.push("/".concat(t,"/").concat(r,"/").concat(l?"?party="+l:""),void 0,{shallow:!0})},n=(e,t,r)=>{let l=null==e?void 0:e.filter(l=>t&&r&&(null==t?void 0:t.label)!="ดูของทุกพรรค"&&(null==r?void 0:r.label)!="นโยบายทั้งหมด"?l.Party.Name==(null==t?void 0:t.label)&&l.Topic===(null==r?void 0:r.label):t&&(null==t?void 0:t.label)!="ดูของทุกพรรค"?l.Party.Name==(null==t?void 0:t.label):r&&(null==r?void 0:r.label)!="นโยบายทั้งหมด"?l.Topic===(null==r?void 0:r.label):e);return l},s=(e,t)=>e.map(e=>({label:"parties"===t?e.Name:e}));var c=r(4714);let o=async()=>{let e=await c.U.Parties.fetchAll({where:"(PartyType,eq,พรรค)"});return e},i=async()=>{let e=await c.U.Policies.fetchAll({});return e},d=e=>{let t=e.sort(()=>Math.random()-.5);return t}},3244:function(e,t,r){"use strict";r.d(t,{E:function(){return l}});let l="/policyshop"},4714:function(e,t,r){"use strict";r.d(t,{U:function(){return i}});var l,a,n=r(2382);async function s(e,t){let{data:r}=await n.Z.get(`https://sheets.wevis.info/api/v1/db/public/shared-view/${e}/rows`,{params:t});return r.data}let c=(e,t)=>({fetch:r=>s(e,{...t,...r}),fetchAll:r=>o(e,{...t,...r})});async function o(e,t){let r=[],l=null;do{let a=await s(e,{...t,offset:l?l.page*l.pageSize:0,limit:200});r.push(...a.list),l=a.pageInfo}while(!l?.isLastPage);return r}(l=a||(a={})).Government="ร่วมรัฐบาล",l.Opposition="ฝ่ายค้าน";let i={Parties:c("40065196-c978-4d7a-b3fb-fb84694383a7"),People:c("572c5e5c-a3d8-440f-9a70-3c4c773543ec",{"nested[PeoplePartyHistory][fields]":"Party,EstablishedDate"}),VoteLog:c("e06d1465-2786-4799-9c0f-a20f4cf71ec4"),PeopleVotes:c("e58433cc-f4fd-499b-926d-05431412cbba"),Policies:c("d930acb2-b1f8-4a85-9ed9-04c2b1edc951")}}},function(e){e.O(0,[844,54,774,888,179],function(){return e(e.s=7858)}),_N_E=e.O()}]);