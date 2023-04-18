"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[593],{4593:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var r,s,o,n,l=a(2322),i=a(2784),c=a(4640),d=a(8018);let u=e=>(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center gap-y-[20px] flex-grow",children:[(0,l.jsx)(d.r,{}),(0,l.jsx)("div",{className:"typo-b4 typo-ibmplex leading-[150%]",children:"รอสักครู่..."})]}),h=()=>(0,l.jsx)("div",{className:"h-screen flex flex-col",children:(0,l.jsx)(u,{})});var f=a(2382);let p="https://sheets.wevis.info";async function b(e,t){let{data:a}=await f.Z.get(`${p}/api/v1/db/public/shared-view/${e}/rows`,{params:t});return{...a.data,list:a.data.list.map(P)}}function P(e){return e.Images?{...e,Images:e.Images.map(({path:e,...t})=>e?{...t,url:`${p}/${e}`}:t)}:e}let m=(e,t)=>({fetch:a=>b(e,{...t,...a}),fetchAll:a=>y(e,{...t,...a})});async function y(e,t){let a=[],r=null;do{let s=await b(e,{...t,offset:r?r.page*r.pageSize:0,limit:200});a.push(...s.list),r=s.pageInfo}while(!r?.isLastPage);return a}(r=o||(o={})).Government="ร่วมรัฐบาล",r.Opposition="ฝ่ายค้าน";let E={Parties:m("40065196-c978-4d7a-b3fb-fb84694383a7"),People:m("572c5e5c-a3d8-440f-9a70-3c4c773543ec",{"nested[PeoplePartyHistory][fields]":"Party,EstablishedDate"}),VoteLog:m("e06d1465-2786-4799-9c0f-a20f4cf71ec4"),PeopleVotes:m("e58433cc-f4fd-499b-926d-05431412cbba"),Policies:m("d930acb2-b1f8-4a85-9ed9-04c2b1edc951")};var S=a(5579),g=a(5237),N=a.n(g),C=a(5555);let x=N()(()=>Promise.all([a.e(453),a.e(631),a.e(21)]).then(a.bind(a,2021)),{loadableGenerated:{webpack:()=>[2021]},loading:()=>(0,l.jsx)(h,{})}),_=N()(()=>Promise.all([a.e(453),a.e(368)]).then(a.bind(a,8368)),{loadableGenerated:{webpack:()=>[8368]},loading:()=>(0,l.jsx)(h,{})}),v=N()(()=>Promise.all([a.e(453),a.e(631),a.e(236)]).then(a.bind(a,7236)),{loadableGenerated:{webpack:()=>[7236]},loading:()=>(0,l.jsx)(h,{})});(s=n||(n={}))[s.MAIN_VIEW=0]="MAIN_VIEW",s[s.SELCTED_PERSON_CHART=1]="SELCTED_PERSON_CHART",s[s.SELECTED_COMPANY_CHART=2]="SELECTED_COMPANY_CHART";let A=e=>{let[t,a]=i.useState(!0),{person:r,setPerson:s,selectedPerson:o,setPersonOutlier:d,selectedCompany:u,party:f,setParty:p,setTheyWorkPerson:b}=(0,c.j)(),[P,m]=i.useState(n.MAIN_VIEW),y=i.useCallback(async()=>{await S.AVB("https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/people.json").then(e=>{if(e){e.forEach(e=>{e.totalValueShare=e.totalValueShare||0,e.countCompShare=e.countCompShare||0,e.countDirector=e.countDirector||0,e.totalPctShare=e.totalPctShare||0});let t=e.sort((e,t)=>t.totalValueShare-e.totalValueShare);t=(0,C.n9)(e,"countCompShare","countDirector"),console.log("fetch from git"),d(t.slice(0,1)),s(t.slice(1))}})},[s,d]),g=i.useCallback(async()=>{let e=await E.People.fetchAll({fields:"Id,Name,Title,IsMP,IsSenator,IsActive,Images,PeoplePartyHistory","nested[PeoplePartyHistory][fields]":"Party,EstablishedDate"});b(e)},[b]);return(i.useEffect(()=>{let e=!1;return r.length<=0&&f.length<=0?e||(g(),y()):a(!1),()=>{e=!0}},[r,s,f,p,y,g]),i.useLayoutEffect(()=>{u?m(n.SELECTED_COMPANY_CHART):o?m(n.SELCTED_PERSON_CHART):m(n.MAIN_VIEW)},[o,u]),t)?(0,l.jsx)(h,{}):(0,l.jsx)("div",{className:"h-full inset-0 flex flex-col relative overflow-hidden",children:(e=>{switch(e){case n.MAIN_VIEW:return(0,l.jsx)(x,{});case n.SELCTED_PERSON_CHART:return(0,l.jsx)(_,{});case n.SELECTED_COMPANY_CHART:return(0,l.jsx)(v,{})}})(P)})};var T=A},5555:function(e,t,a){function r(e,t,a){return e.filter(e=>Number(e[t])>0).concat(e.filter(e=>0==Number(e[t])).sort((e,t)=>Number(t[a])-Number(e[a])))}function s(e){let t=Math.abs(Number(e))>=1e9?(Math.abs(Number(e))/1e9).toFixed(2)+"B":Math.abs(Number(e))>=1e6?(Math.abs(Number(e))/1e6).toFixed(2)+"M":Math.abs(Number(e))>=1e3?(Math.abs(Number(e))/1e3).toFixed(2)+"K":Math.abs(Number(e))+"฿";return e>0?t:"-".concat(t)}function o(e){return e.toString().replace(RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")}a.d(t,{B0:function(){return s},n9:function(){return r},x6:function(){return o}})},4640:function(e,t,a){a.d(t,{j:function(){return o}});var r=a(624),s=a(7832);let o=(0,r.Ue)()((0,s.tJ)((e,t)=>({theyWorkPerson:[],setTheyWorkPerson:t=>e(e=>({...e,theyWorkPerson:t})),person:[],setPerson:t=>e(e=>({...e,person:t})),personOutlier:[],setPersonOutlier:t=>e(e=>({...e,personOutlier:t})),filterPerson:[],setFilterPerson:t=>e(e=>({...e,filterPerson:t})),selectedPerson:void 0,setSelectedPerson:t=>e(e=>({...e,selectedPerson:t})),directorData:[],setDirectorData:t=>e(e=>({...e,directorData:t})),shareholderData:[],setShareholderData:t=>e(e=>({...e,shareholderData:t})),selectedCompany:void 0,setSelectedCompany:t=>e(e=>({...e,selectedCompany:t})),selectedBusinessType:void 0,setSelectedBusinessType:t=>e(e=>({...e,selectedBusinessType:t})),party:[],setParty:t=>e(e=>({...e,party:t})),selectedParty:void 0,setSelectedParty:t=>e(e=>({...e,selectedParty:t}))}),{name:"person",storage:(0,s.FL)(()=>sessionStorage),partialize:e=>Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return["theyWorkPerson","person","personOutlier","party"].includes(t)})),onRehydrateStorage:e=>(console.log("hydration starts"),(e,t)=>{t?console.log("an error happened during hydration",t):console.log("hydration finished")})}))}}]);