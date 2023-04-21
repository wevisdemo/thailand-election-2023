"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[593],{4593:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var r,l,s,o,n=a(2322),i=a(2784),c=a(4640),d=a(8018);let u=e=>(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center gap-y-[20px] flex-grow",children:[(0,n.jsx)(d.r,{}),(0,n.jsx)("div",{className:"typo-b4 typo-ibmplex leading-[150%]",children:"รอสักครู่..."})]}),f=()=>(0,n.jsx)("div",{className:"h-screen flex flex-col",children:(0,n.jsx)(u,{})});var h=a(2382);let p="https://sheets.wevis.info";async function b(e,t){let{data:a}=await h.Z.get(`${p}/api/v1/db/public/shared-view/${e}/rows`,{params:t});return{...a.data,list:a.data.list.map(m)}}function m(e){return e.Images?{...e,Images:e.Images.map(({path:e,...t})=>e?{...t,url:`${p}/${e}`}:t)}:e}let S=(e,t)=>({fetch:a=>b(e,{...t,...a}),fetchAll:a=>E(e,{...t,...a})});async function E(e,t){let a=[],r=null;do{let l=await b(e,{...t,offset:r?r.page*r.pageSize:0,limit:200});a.push(...l.list),r=l.pageInfo}while(!r?.isLastPage);return a}(r=s||(s={})).Government="ร่วมรัฐบาล",r.Opposition="ฝ่ายค้าน";let P={Parties:S("40065196-c978-4d7a-b3fb-fb84694383a7"),People:S("572c5e5c-a3d8-440f-9a70-3c4c773543ec",{"nested[PeoplePartyHistory][fields]":"Party,EstablishedDate"}),VoteLog:S("e06d1465-2786-4799-9c0f-a20f4cf71ec4"),PeopleVotes:S("e58433cc-f4fd-499b-926d-05431412cbba"),Policies:S("4842fd3b-4f2c-45c7-b7e2-92f7e2e60ab2")};var g=a(1322),N=a(5237),x=a.n(N),y=a(5555);let C=x()(()=>Promise.all([a.e(453),a.e(631),a.e(813)]).then(a.bind(a,2813)),{loadableGenerated:{webpack:()=>[2813]},loading:()=>(0,n.jsx)(f,{})}),v=x()(()=>Promise.all([a.e(453),a.e(368)]).then(a.bind(a,8368)),{loadableGenerated:{webpack:()=>[8368]},loading:()=>(0,n.jsx)(f,{})}),_=x()(()=>Promise.all([a.e(453),a.e(631),a.e(236)]).then(a.bind(a,7236)),{loadableGenerated:{webpack:()=>[7236]},loading:()=>(0,n.jsx)(f,{})});(l=o||(o={}))[l.MAIN_VIEW=0]="MAIN_VIEW",l[l.SELCTED_PERSON_CHART=1]="SELCTED_PERSON_CHART",l[l.SELECTED_COMPANY_CHART=2]="SELECTED_COMPANY_CHART";let j=e=>{let[t,a]=i.useState(!0),{person:r,setPerson:l,selectedPerson:s,setPersonOutlier:d,selectedCompany:u,party:h,setParty:p,filterPerson:b,setFilterPerson:m,selectedBusinessType:S,selectedParty:E,selectedSort:N}=(0,c.j)(),[x,j]=i.useState(o.MAIN_VIEW),w=i.useCallback(async()=>{let e=await P.Parties.fetch();p(e.list)},[p]),D=i.useCallback(async()=>{await g.AVB("https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/people.json").then(e=>{if(e){e.forEach(e=>{e.totalValueShare=e.totalValueShare||0,e.countCompShare=e.countCompShare||0,e.countDirector=e.countDirector||0,e.totalPctShare=e.totalPctShare||0});let t=e.sort((e,t)=>t.totalValueShare-e.totalValueShare);t=(0,y.n9)(e,"countCompShare","countDirector"),console.log("fetch from git");let a=t.slice(0,1);d(t.slice(0,1)),l([...a.map(e=>({...e,totalPctShare:30})),...t.slice(1)]),m(t.slice(1))}})},[l,d,m]);return(i.useEffect(()=>{let e=!1;return r.length<=0&&h.length<=0?e||(D(),w()):a(!1),()=>{e=!0}},[r,l,h,p,D,w]),i.useLayoutEffect(()=>{u?j(o.SELECTED_COMPANY_CHART):s?j(o.SELCTED_PERSON_CHART):j(o.MAIN_VIEW)},[s,u]),i.useLayoutEffect(()=>{if(r.length>0){let e=r;S&&"all"!==S.code&&(e=e.filter(e=>e.companyType.includes(S.code))),console.log(e),E&&"สภาผู้แทนราษฎร"===E.Name?e=e.filter(e=>!0===e.IsMp):E&&"วุฒิสภา"===E.Name?e=e.filter(e=>!0===e.IsSenator):E&&"คณะรัฐมนตรี"===E.Name?e=e.filter(e=>!0===e.IsCabinet):E&&"ทุกพรรค"!==E.Name&&(e=e.filter(e=>{var t;return(null===(t=e.Party)||void 0===t?void 0:t.Id)===(null==E?void 0:E.Id)})),e="desc"===N?e.sort((e,t)=>t.totalValueShare-e.totalValueShare):e.sort((e,t)=>e.totalValueShare-t.totalValueShare),m((0,y.n9)(e,"countCompShare","countDirector")),console.log(N)}},[S,E,N,m,r]),i.useEffect(()=>{r.length},[E,m,r]),t)?(0,n.jsx)(f,{}):x===o.MAIN_VIEW?(0,n.jsx)("div",{className:"h-full inset-0 flex flex-col relative overflow-hidden",children:(0,n.jsx)(C,{})}):x===o.SELCTED_PERSON_CHART?(0,n.jsx)("div",{className:"h-full inset-0 flex flex-col relative overflow-hidden",children:(0,n.jsx)(v,{})}):x===o.SELECTED_COMPANY_CHART?(0,n.jsx)("div",{className:"h-full inset-0 flex flex-col relative overflow-hidden",children:(0,n.jsx)(_,{})}):(0,n.jsx)(f,{})};var w=j},5555:function(e,t,a){function r(e,t,a){return e.filter(e=>Number(e[t])>0).concat(e.filter(e=>0==Number(e[t])).sort((e,t)=>Number(t[a])-Number(e[a])))}function l(e){let t=Math.abs(Number(e))>=1e9?(Math.abs(Number(e))/1e9).toFixed(2)+"B":Math.abs(Number(e))>=1e6?(Math.abs(Number(e))/1e6).toFixed(2)+"M":Math.abs(Number(e))>=1e3?(Math.abs(Number(e))/1e3).toFixed(2)+"K":Math.abs(Number(e))+"฿";return e>0?t:"-".concat(t)}function s(e){return e.toString().replace(RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")}a.d(t,{B0:function(){return l},n9:function(){return r},x6:function(){return s}})},4640:function(e,t,a){a.d(t,{j:function(){return s}});var r=a(624),l=a(7832);let s=(0,r.Ue)()((0,l.tJ)((e,t)=>({person:[],setPerson:t=>e(e=>({...e,person:t})),personOutlier:[],setPersonOutlier:t=>e(e=>({...e,personOutlier:t})),filterPerson:[],setFilterPerson:t=>e(e=>({...e,filterPerson:t})),selectedPerson:void 0,setSelectedPerson:t=>e(e=>({...e,selectedPerson:t})),directorData:[],setDirectorData:t=>e(e=>({...e,directorData:t})),shareholderData:[],setShareholderData:t=>e(e=>({...e,shareholderData:t})),selectedCompany:void 0,setSelectedCompany:t=>e(e=>({...e,selectedCompany:t})),selectedBusinessType:void 0,setSelectedBusinessType:t=>e(e=>({...e,selectedBusinessType:t})),party:[],setParty:t=>e(e=>({...e,party:t})),selectedParty:void 0,setSelectedParty:t=>e(e=>({...e,selectedParty:t})),selectedSort:"desc",toggleSort:()=>e(e=>({...e,selectedSort:"asc"===e.selectedSort?"desc":"asc"}))}),{name:"person",storage:(0,l.FL)(()=>sessionStorage),partialize:e=>({...Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return["person","personOutlier","party"].includes(t)})),filterPerson:e.person}),onRehydrateStorage:e=>(console.log("hydration starts"),(e,t)=>{t?console.log("an error happened during hydration",t):console.log("hydration finished")})}))}}]);