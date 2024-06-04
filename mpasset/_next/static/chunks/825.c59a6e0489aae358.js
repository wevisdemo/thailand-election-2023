"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[825],{6128:function(e,t,a){var s=a(2322);a(2784);let l=e=>{let{children:t,open:a}=e;return(0,s.jsx)("div",{className:"absolute inset-0 \n      flex flex-col justify-center items-center transition-all duration-500\n      bg-transparent\n      ".concat(a?"visible opacity-100 z-50":"invisible opacity-0 -z-10","\n      "),children:t})};t.Z=l},8825:function(e,t,a){a.r(t),a.d(t,{default:function(){return A}});var s,l,r,n,o=a(2322),c=a(2784),i=a(7725),d=a(1705),p=a(2382);let u="https://sheets.wevis.info";async function f(e,t){let{data:a}=await p.Z.get(`${u}/api/v1/db/public/shared-view/${e}/rows`,{params:t});return{...a,list:a.list.map(h)}}function h(e){return e.Images?{...e,Images:e.Images.map(({path:e,...t})=>e?{...t,url:`${u}/${e}`}:t)}:e}let m=(e,t)=>({fetch:a=>f(e,{...t,...a}),fetchAll:a=>b(e,{...t,...a})});async function b(e,t){let a=[],s=null;do{let l=await f(e,{...t,offset:s?s.page*s.pageSize:0,limit:200});a.push(...l.list),s=l.pageInfo}while(!s?.isLastPage);return a}(s=r||(r={})).Government="ร่วมรัฐบาล",s.Opposition="ฝ่ายค้าน";let x={Parties:m("40065196-c978-4d7a-b3fb-fb84694383a7"),People:m("572c5e5c-a3d8-440f-9a70-3c4c773543ec",{"nested[PeoplePartyHistory][fields]":"Party,EstablishedDate"}),VoteLog:m("e06d1465-2786-4799-9c0f-a20f4cf71ec4"),PeopleVotes:m("e58433cc-f4fd-499b-926d-05431412cbba"),Policies:m("4842fd3b-4f2c-45c7-b7e2-92f7e2e60ab2")};var y=a(8841),g=a(3986),S=a(5237),N=a.n(S),P=a(6128),E=a(8678);let j=e=>{let{title:t,content:a}=e;return(0,o.jsx)("div",{className:"w-[302px] h-[125px] px-[10px] py-[25px]\n      typo-b5 bg-contain bg-center bg-no-repeat bg-transparent",style:{backgroundImage:"url('".concat("/mpasset","/design_assets/step-frame.png')")},children:(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsx)("div",{className:"typo-b6 text-gray-3 mb-[5px]",children:a}),(0,o.jsx)("div",{className:"bg-highlight-2 rounded-[20px] px-[10px] py-[5px]",children:"".concat(t)})]})})},C=[{selector:".tour1-first-step",content:(0,o.jsx)(j,{title:"1. เลือกคนที่สนใจ",content:"นักการเมืองแต่ละคนเกี่ยวข้องกับธุรกิจอะไรบ้าง?"})},{selector:".tour1-second-step",content:(0,o.jsx)(j,{title:"2. คลิกดูธุรกิจต่างๆ",content:"นักการเมืองแต่ละคนเกี่ยวข้องกับธุรกิจอะไรบ้าง?"})},{selector:".tour2-first-step",content:(0,o.jsx)(j,{title:"1. เลือกหมวดธุรกิจ",content:"ธุรกิจที่เกี่ยวกับนักการเมืองแบบไหนรับเงินจากโครงการรัฐเยอะ?"})},{selector:".tour2-second-step",content:(0,o.jsx)(j,{title:"2. ดูตามลำดับ",content:"ธุรกิจที่เกี่ยวกับนักการเมืองแบบไหนรับเงินจากโครงการรัฐเยอะ?"})},{selector:".tour3-first-step",content:(0,o.jsx)(j,{title:"1. เลือกคนที่สนใจ",content:"บริษัทที่รับโครงการรัฐมีใครถือหุ้นบ้าง?"})},{selector:".tour3-second-step",content:(0,o.jsx)(j,{title:"2. เลือกบริษัทที่สนใจ",content:"บริษัทที่รับโครงการรัฐมีใครถือหุ้นบ้าง?"})},{selector:".tour3-third-step",content:(0,o.jsx)(j,{title:"3. ดูรูปหรืออ่านเพิ่มเติม",content:"บริษัทที่รับโครงการรัฐมีใครถือหุ้นบ้าง?"})}],v=e=>{let{children:t}=e;return(0,o.jsx)(E.C1,{steps:C,showBadge:!1,showNavigation:!1,showDots:!1,showCloseButton:!1,styles:{maskArea:e=>({...e,background:"#09090937"}),popover:e=>({...e,padding:0,background:"transparent",boxShadow:"unset"})},position:"center",children:t})},w=N()(()=>Promise.all([a.e(148),a.e(878),a.e(882)]).then(a.bind(a,9882)),{loadableGenerated:{webpack:()=>[9882]},loading:()=>(0,o.jsx)(d.a,{}),ssr:!1}),T=N()(()=>Promise.all([a.e(878),a.e(352)]).then(a.bind(a,352)),{loadableGenerated:{webpack:()=>[352]},loading:()=>(0,o.jsx)(d.a,{}),ssr:!1}),_=N()(()=>Promise.all([a.e(878),a.e(917)]).then(a.bind(a,9917)),{loadableGenerated:{webpack:()=>[9917]},loading:()=>(0,o.jsx)(d.a,{}),ssr:!1});(l=n||(n={}))[l.MAIN_VIEW=0]="MAIN_VIEW",l[l.SELCTED_PERSON_CHART=1]="SELCTED_PERSON_CHART",l[l.SELECTED_COMPANY_CHART=2]="SELECTED_COMPANY_CHART";let D=()=>{c.useEffect(()=>{a.e(303).then(a.bind(a,6303))});let[e,t]=c.useState(!0),{person:s,setPerson:l,yourCandidatePerson:r,setYourCandidatePerson:p,selectedPerson:u,selectedCompany:f,party:h,setParty:m,selectedDataSet:b,selectedBusinessType:S,selectedParty:N,selectedSort:E}=(0,i.j)(),[j,C]=c.useState(n.MAIN_VIEW),D=c.useCallback(async()=>{let e=await x.Parties.fetchAll();m(e)},[m]),A=c.useCallback(async()=>{let e=await (0,y.gy)("/mpasset/data/people-optim2.csv",g.rA8);if(e){let t=e.slice(0,-1);await t.forEach(e=>{e.companyType=JSON.parse(String(e.companyType).replace(/'/g,'"'))}),l(t)}},[l]),I=c.useCallback(async()=>{let e=await (0,y.gy)("/mpasset/data/yourcandidate/people-optim2.csv",g.rA8);if(e){let t=e.slice(0,-1);await t.forEach(e=>{e.Number=Number(e.Number),e.companyType=JSON.parse(String(e.companyType).replace(/'/g,'"')),e.Images=e.ExImage?"/mpasset/candidates/ex/".concat(e.Name.replaceAll(" ","-"),".webp"):"/mpasset/candidates/".concat(e.PartyName,"/").concat(e.Name.replaceAll(" ","-"),".webp")}),p(t)}},[p]),k=c.useCallback(async()=>{await A(),await D(),await I(),t(!1)},[A,I,D,t]);c.useEffect(()=>{let e=!1;return s.length<=0&&h.length<=0&&r.length<=0?e||k():t(!1),()=>{e=!0}},[s,l,h,m,r,k]),c.useLayoutEffect(()=>{f?C(n.SELECTED_COMPANY_CHART):u?C(n.SELCTED_PERSON_CHART):C(n.MAIN_VIEW)},[u,f]);let O=c.useMemo(()=>{if(s.length>0&&r.length>0){let e="นักการเมือง 62"===b?s:r;S&&"all"!==S.code&&(e=e.filter(e=>e.companyType.includes(S.code))),N&&"สภาผู้แทนราษฎร"===N.Name?e=e.filter(e=>!0===e.IsMp):N&&"วุฒิสภา"===N.Name?e=e.filter(e=>!0===e.IsSenator):N&&"คณะรัฐมนตรี"===N.Name?e=e.filter(e=>!0===e.IsCabinet):N&&"ทุกพรรค"!==N.Name&&(e=e.filter(e=>e.PartyName===(null==N?void 0:N.Name)));let t=e.filter(e=>0===e.totalValueShare);return e=e.filter(e=>e.totalValueShare>0||e.totalValueShare<0),e="desc"===E?e.sort((e,t)=>t.totalValueShare-e.totalValueShare):e.sort((e,t)=>e.totalValueShare-t.totalValueShare),t="desc"===E?t.sort((e,t)=>t.countDirector-e.countDirector):t.sort((e,t)=>e.countDirector-t.countDirector),e.concat(t)}return[]},[S,N,E,s,r,b]);return e?(0,o.jsx)(d.a,{}):(0,o.jsx)("div",{className:"h-full inset-0 flex flex-col relative overflow-hidden",children:(0,o.jsxs)(v,{children:[(0,o.jsxs)("div",{className:"relative h-full",children:[(0,o.jsx)("div",{className:"w-full h-full",children:(0,o.jsx)(w,{filteredPerson:O})}),(0,o.jsx)(P.Z,{open:j===n.SELCTED_PERSON_CHART,children:(0,o.jsx)("div",{className:"w-full h-full bg-white bg-opacity-50",children:(0,o.jsx)(T,{})})}),(0,o.jsx)(P.Z,{open:j===n.SELECTED_COMPANY_CHART,children:(0,o.jsx)("div",{className:"w-full h-full bg-white bg-opacity-50",children:(0,o.jsx)(_,{})})}),(0,o.jsx)(P.Z,{open:e,children:(0,o.jsx)(d.a,{})})]}),(0,o.jsx)("div",{className:"z-50",children:(0,o.jsx)("election-footer",{})})]})})};var A=D},7725:function(e,t,a){a.d(t,{j:function(){return l}});var s=a(624);let l=(0,s.Ue)((e,t)=>({person:[],setPerson:t=>e(e=>({...e,person:t})),personOutlier:[],setPersonOutlier:t=>e(e=>({...e,personOutlier:t})),yourCandidatePerson:[],setYourCandidatePerson:t=>e(e=>({...e,yourCandidatePerson:t})),filterPerson:[],setFilterPerson:t=>e(e=>({...e,filterPerson:t})),selectedPerson:void 0,setSelectedPerson:t=>e(e=>({...e,selectedPerson:t})),directorData:[],setDirectorData:t=>e(e=>({...e,directorData:t})),shareholderData:[],setShareholderData:t=>e(e=>({...e,shareholderData:t})),selectedCompany:void 0,setSelectedCompany:t=>e(e=>({...e,selectedCompany:t})),selectedDataSet:"ผู้สมัคร 66",setSelectedDataSet:t=>e(e=>({...e,selectedDataSet:t})),selectedBusinessType:void 0,setSelectedBusinessType:t=>e(e=>({...e,selectedBusinessType:t})),party:[],setParty:t=>e(e=>({...e,party:t})),selectedParty:void 0,setSelectedParty:t=>e(e=>({...e,selectedParty:t})),selectedSort:"desc",toggleSort:()=>e(e=>({...e,selectedSort:"asc"===e.selectedSort?"desc":"asc"})),openTutorial:!0,setOpenTutorial:t=>e(e=>({...e,openTutorial:t}))}))}}]);