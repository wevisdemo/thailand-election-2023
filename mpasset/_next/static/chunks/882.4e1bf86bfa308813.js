"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[882],{1892:function(e,t,s){var r=s(2322),i=s(2784),l=s(7725);let n=e=>{let{open:t,onClose:s}=e,{party:n,person:o,yourCandidatePerson:a,selectedDataSet:d,setSelectedPerson:c}=(0,l.j)(),[x,h]=i.useState(""),[p,C]=i.useState(o);return i.useEffect(()=>{if(o.length>0&&a.length>0){let e="นักการเมือง 62"===d?o:a;if(""!==x){let t=e.filter(e=>e.Name.includes(x));"object"==typeof t&&C(t)}else C(e)}},[x,o,a,d]),(0,r.jsx)("div",{className:"absolute inset-0 overflow-x-hidden overflow-y-scroll \n      bg-white\n      ".concat(t?"visible opacity-100 z-50":"invisible opacity-0 z-0"," transition-all"),children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("svg",{className:"absolute left-4 top-6 w-[20px] h-[18px] hidden desktop:block cursor-pointer",onClick:()=>s(),viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M19 9.00523C18.1288 9.00523 14.867 8.46495 14 8.54814C12.6021 8.68226 11.9134 9.17822 10.5 9.19053C8.16088 9.21092 7.59703 9.24414 5.27256 9.12259C4.73592 9.09453 4.50754 9.06082 4 9.06082C4.5132 9.59549 4.36917 10.2541 4.88947 10.7842C6.83779 12.7689 12.8727 18.5444 10.8721 16.609C9.37574 15.1614 7.7418 13.8031 6.1856 12.4149C4.87002 11.2413 3.41503 10.1096 1.89497 9.19054C1.54222 8.97725 0.657367 8.83327 1.14156 8.54814C2.50195 7.74705 3.83533 6.97274 5.10655 6.04033C6.60229 4.94324 8.14607 3.89268 9.66534 2.82835C9.78533 2.74429 9.96045 2.62214 10.0357 2.4948C10.3849 1.9035 11.2257 1.58825 11.5297 1",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})}),(0,r.jsxs)("div",{className:"max-w-[743px] mx-auto pt-4",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center px-[10px] gap-x-[8px] py-[5px]",children:[(0,r.jsx)("svg",{className:"w-[20px] h-[18px] desktop:hidden cursor-pointer hover:-translate-x-1 transition-all",onClick:()=>s(),viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M19 9.00523C18.1288 9.00523 14.867 8.46495 14 8.54814C12.6021 8.68226 11.9134 9.17822 10.5 9.19053C8.16088 9.21092 7.59703 9.24414 5.27256 9.12259C4.73592 9.09453 4.50754 9.06082 4 9.06082C4.5132 9.59549 4.36917 10.2541 4.88947 10.7842C6.83779 12.7689 12.8727 18.5444 10.8721 16.609C9.37574 15.1614 7.7418 13.8031 6.1856 12.4149C4.87002 11.2413 3.41503 10.1096 1.89497 9.19054C1.54222 8.97725 0.657367 8.83327 1.14156 8.54814C2.50195 7.74705 3.83533 6.97274 5.10655 6.04033C6.60229 4.94324 8.14607 3.89268 9.66534 2.82835C9.78533 2.74429 9.96045 2.62214 10.0357 2.4948C10.3849 1.9035 11.2257 1.58825 11.5297 1",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})}),(0,r.jsxs)("div",{className:"px-[15px] py-[5px] inline-flex gap-x-[5px] items-center border-[3px] rounded-[50px] border-black w-full cursor-pointer",children:[(0,r.jsx)("input",{type:"text",className:" border-transparent focus:border-transparent focus:ring-0 p-0 flex-grow typo-ibmplex typo-b5 leading-[150%]",placeholder:"ค้นหาชื่อนักการเมือง",value:x,onChange:e=>h(e.target.value)}),(0,r.jsxs)("svg",{width:19,height:21,viewBox:"0 0 19 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M1.83471 9.59463C1.23317 5.256 2.84023 1 7.54379 1C10.8817 1 12.8956 2.14215 14.0071 3.83806C15.3957 5.95668 16 10.5 12 13.4261C9.00001 15 7.5693 14.574 5.50001 14C4.15877 13.6279 2.09016 11.437 1.83471 9.59463Z",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M11.7864 12.761C12.6911 13.2133 13.1092 13.8446 13.7142 14.5168C14.3766 15.2528 14.7908 16.667 15.5316 17.2597C16.4331 17.9809 17.1718 19.0385 17.8033 19.9857",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})]})]})]}),(0,r.jsx)("div",{className:"flex flex-col divide-y-2 divide-gray-3 divide-dashed",children:p.map((e,t)=>(0,r.jsxs)("button",{className:"py-[5.5px] px-[20px] w-full text-left",onClick:()=>{s();let t=n.find(t=>t.Name===e.PartyName);t?c({...e,Party:{Id:t.Id,Name:t.Name,Color:t.Color,Images:Array.isArray(t.Images)?"/mpasset/party/".concat(t.Name,".webp"):null}}):c(e)},children:[(0,r.jsx)("div",{className:"typo-b4 typo-ibmplex leading-[150%]",children:e.Name}),(0,r.jsxs)("div",{className:"typo-b7 typo-ibmplex text-gray-3 leading-[150%] inline-flex gap-x-[5px]",children:[!e.IsCabinet&&!e.IsSenator&&(0,r.jsxs)("div",{children:["นักการเมือง 62"===d?"ส.ส. 62":"ผู้สมัคร 66"," ",e.Party?"พรรค ".concat(e.Party.Name):""," แบบ",e.MpType," ","แบ่งเขต"===e.MpType?"จังหวัด".concat(e.MpProvince," เขต ").concat(e.MpZone):""," "]}),e.IsPmCandidate&&(0,r.jsx)("div",{children:"แคนดิเดตนายก"}),e.IsCabinet&&(0,r.jsx)("div",{children:"ค.ร.ม."}),e.IsSenator&&(0,r.jsx)("div",{children:"ส.ว."})]})]},"search-result-".concat(e.Id,"-").concat(t)))})]})]})})};t.Z=n},9882:function(e,t,s){s.r(t),s.d(t,{default:function(){return L}});var r=s(2322),i=s(6386),l=s(2784),n=s(7725),o=s(8996),a=s(878);let d=e=>(0,r.jsxs)("div",{className:"flex flex-row items-center justify-center px-[10px] py-[5px] gap-x-[5px] bg-[#090909] bg-opacity-50 rounded-[20px] w-fit mx-auto text-white",children:[(0,r.jsx)(o.oF,{}),(0,r.jsx)("div",{className:"typo-b6 typo-ibmplex leading-[150%",children:"คลิกดูแต่ละคน"})]});var c=s(6128),x=s(8678),h=s(5237),p=s.n(h);let C=p()(()=>Promise.all([s.e(620),s.e(766)]).then(s.bind(s,4766)),{loadableGenerated:{webpack:()=>[4766]}}),u=p()(()=>Promise.all([s.e(620),s.e(761)]).then(s.bind(s,2761)),{loadableGenerated:{webpack:()=>[2761]}}),m=p()(()=>s.e(458).then(s.bind(s,3458)),{loadableGenerated:{webpack:()=>[3458]}}),j=e=>{let{wording:t,onClick:s}=e;return(0,r.jsx)("button",{className:"truncate max-w-[160px] shrink-0 bg-highlight-2 text-black px-[10px] py-[5px] typo-ibmplex typo-b6 leading-[150%] rounded-[100px]",onClick:()=>{s&&s()},children:t})},g=e=>{let{onOpenSeachDialog:t}=e,[s,i]=l.useState(!1),[d,c]=l.useState(!1),[h,p]=l.useState(!1),{selectedBusinessType:g,selectedParty:k,selectedSort:w,setSelectedParty:f,selectedDataSet:v,setSelectedDataSet:b,toggleSort:y,setSelectedBusinessType:N}=(0,n.j)(),{setCurrentStep:M,isOpen:L}=(0,x.rN)();return(0,r.jsxs)("div",{className:"flex flex-col gap-y-[5px]  py-[5px]",children:[(0,r.jsxs)("div",{className:"flex flex-row gap-x-[5px] px-[10px]",children:[(0,r.jsxs)("div",{className:"px-[15px] py-[5px] inline-flex gap-x-[5px] items-center border-[3px] rounded-[50px] border-black w-full cursor-pointer",children:[(0,r.jsx)("div",{className:" border-transparent focus:border-transparent focus:ring-0 p-0 flex-grow typo-ibmplex typo-b5 leading-[150%]",onClick:()=>t(!0),children:"ค้นหาชื่อนักการเมือง"}),(0,r.jsxs)("svg",{width:19,height:21,viewBox:"0 0 19 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M1.83471 9.59463C1.23317 5.256 2.84023 1 7.54379 1C10.8817 1 12.8956 2.14215 14.0071 3.83806C15.3957 5.95668 16 10.5 12 13.4261C9.00001 15 7.5693 14.574 5.50001 14C4.15877 13.6279 2.09016 11.437 1.83471 9.59463Z",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M11.7864 12.761C12.6911 13.2133 13.1092 13.8446 13.7142 14.5168C14.3766 15.2528 14.7908 16.667 15.5316 17.2597C16.4331 17.9809 17.1718 19.0385 17.8033 19.9857",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})]})]}),(0,r.jsx)("button",{onClick:()=>{N({code:"all",name:"ทั้งหมด"}),f(null)},children:(0,r.jsx)(a.UZ,{})})]}),(0,r.jsxs)("div",{className:"flex flex-col tablet:flex-row gap-y-[5px] typo-b5 typo-ibmplex ml-[10px]",children:[(0,r.jsxs)("div",{className:"flex flex-row gap-x-[5px] items-center w-auto overflow-x-scroll scrollbar-hide pr-[10px]",children:[(0,r.jsx)("div",{className:"shrink-0",children:"รายชื่อของ"}),(0,r.jsx)(j,{wording:v,onClick:()=>{"นักการเมือง 62"===v&&b("ผู้สมัคร 66"),"ผู้สมัคร 66"===v&&b("นักการเมือง 62")}}),(0,r.jsx)("div",{className:"shrink-0",children:"ที่มีมูลค่าหุ้น"}),(0,r.jsx)("button",{onClick:()=>i(!0),children:(0,r.jsx)(a.d,{})}),(0,r.jsx)(j,{wording:"desc"===w?(0,r.jsxs)("div",{className:"flex flex-row items-center gap-x-[5px]",children:[(0,r.jsx)(o.tX,{}),(0,r.jsx)("span",{children:"สูงสุด"})]}):(0,r.jsxs)("div",{className:"flex flex-row items-center gap-x-[5px]",children:[(0,r.jsx)(o.Hz,{}),(0,r.jsx)("span",{children:"ต่ำสุด"})]}),onClick:()=>{y()}})]}),(0,r.jsxs)("div",{className:"flex flex-row gap-x-[5px] items-center",children:[(0,r.jsx)("div",{children:"จาก"}),(0,r.jsx)("div",{className:"tour2-first-step",children:(0,r.jsx)(j,{wording:(null==g?void 0:g.name)||"ทุกหมวดธุรกิจ",onClick:()=>{L&&M(3),c(!0)}})}),(0,r.jsx)("div",{children:"จาก"}),(0,r.jsx)(j,{wording:(null==k?void 0:k.Name)||"ทุกพรรค",onClick:()=>p(!0)})]})]}),(0,r.jsx)(m,{open:s,onClose:()=>i(!1)}),(0,r.jsx)(C,{open:d,onClose:()=>c(!1)}),(0,r.jsx)(u,{open:h,onClose:()=>p(!1)})]})};var k=s(1892);let w=e=>{let{children:t,onClick:s}=e;return(0,r.jsx)("button",{className:"w-[300px] h-[60px] typo-b5 bg-contain bg-center bg-no-repeat",style:{backgroundImage:"url('".concat("/mpasset","/design_assets/frame.jpg')")},onClick:()=>s&&s(),children:t})},f=e=>{let{setOpenTutorial:t}=(0,n.j)(),{setIsOpen:s,setCurrentStep:i}=(0,x.rN)();return(0,r.jsx)("div",{className:"w-full h-full relative bg-[#FFFFFFc7] flex flex-col justify-center items-center",children:(0,r.jsx)("div",{className:"flex w-[340px] justify-center items-center",children:(0,r.jsxs)("div",{className:"flex flex-col gap-y-[20px] justify-center w-full",children:[(0,r.jsxs)("div",{className:"relative flex flex-col justify-center gap-y-[10px] bg-white border-black border-[3px] rounded-[10px] p-[20px]",children:[(0,r.jsx)("button",{className:"absolute top-[20px] right-[20px]",onClick:()=>t(!1),children:(0,r.jsxs)("svg",{width:24,height:25,viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M5.04285 5.40186C5.06834 5.63132 5.32104 5.80992 5.46317 5.97132C6.2289 6.84088 7.07345 7.6021 7.91053 8.39835C8.60455 9.05852 9.31582 9.70481 10.0054 10.3644C11.1353 11.4452 12.2969 12.4796 13.3951 13.5778C14.4638 14.6466 15.6373 15.5513 16.6627 16.6557C17.0587 17.0821 17.5241 17.4321 17.9305 17.8624C18.1782 18.1246 18.8273 18.8251 19.1982 18.8251",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M4.43274 19.9235C7.56015 16.7961 10.6629 13.6072 14.0188 10.7306C14.8977 9.97732 15.7934 9.24822 16.6357 8.45275C16.9917 8.11647 17.367 7.51746 17.8559 7.35449",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})]})}),(0,r.jsxs)("div",{className:"flex flex-row justify-center items-center gap-x-[10.24px]",children:[(0,r.jsxs)("svg",{width:38,height:27,viewBox:"0 0 38 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M17.5555 13.4871C17.5555 15.4053 18.0169 17.2451 18.696 18.832C19.4447 20.602 20.6375 22.0494 21.9956 23.1218C23.4495 24.2728 25.1559 24.761 27.0103 24.761C28.8647 24.761 30.5276 24.2117 31.9815 23.0608C33.3397 21.9883 34.6891 20.6456 35.4379 18.8756C36.1169 17.2887 36.5 15.4053 36.5 13.4784C36.5 11.5514 35.9515 9.74656 35.2724 8.15967C34.5237 6.38967 33.5225 4.75046 32.1644 3.66928C30.7104 2.51834 28.8647 2.00391 27.0103 2.00391C25.1559 2.00391 23.3538 2.57937 21.8999 3.73031C20.5417 4.80277 19.6363 6.4507 18.8875 8.2207C18.2085 9.8076 17.5555 11.5602 17.5555 13.4871Z",fill:"white",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M26.8973 13.4868C26.8973 14.9691 27.4371 16.338 28.1771 17.3581C29.0303 18.5178 30.2927 19.1979 31.6682 19.1979C33.0438 19.1979 34.2365 18.4742 35.0897 17.3146C35.8385 16.2944 36.2563 14.9691 36.2563 13.4955C36.2563 12.022 35.7862 10.7228 35.0375 9.7114C34.1843 8.55175 33.0351 7.81934 31.6595 7.81934C30.284 7.81934 29.0129 8.45584 28.1597 9.62421C27.4109 10.6444 26.8886 12.022 26.8886 13.5043L26.8973 13.4868Z",fill:"#090909",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M1.6408 13.487C1.6408 15.4053 2.346 17.1317 3.01637 18.7273C3.76509 20.4973 4.67053 22.1016 6.02868 23.1741C7.4826 24.325 9.23252 25.1272 11.0869 25.1272C12.9413 25.1272 14.6564 24.2727 16.1104 23.1218C17.4685 22.0493 18.6525 20.5932 19.41 18.8319C20.089 17.245 20.6201 15.4053 20.6201 13.487C20.6201 11.5688 20.1761 9.69418 19.497 8.10728C18.7483 6.33728 17.5817 4.77654 16.2322 3.70408C14.7783 2.55315 12.95 1.87305 11.0956 1.87305C9.24123 1.87305 7.53483 2.71881 6.08091 3.86103C4.72276 4.93349 3.41685 6.32856 2.65941 8.09856C1.98034 9.68546 1.64951 11.5775 1.64951 13.4958L1.6408 13.487Z",fill:"white",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M10.9999 13.4874C10.9999 14.9696 11.4961 16.3473 12.2449 17.3674C13.0981 18.5271 14.3692 19.2159 15.7447 19.2159C17.1203 19.2159 18.4262 18.5445 19.2707 17.3849C20.0194 16.3647 20.3938 14.9609 20.3938 13.4874C20.3938 12.0138 19.8801 10.706 19.1401 9.6858C18.2869 8.52615 17.1116 7.76758 15.7447 7.76758C14.3779 7.76758 13.2287 8.54359 12.3755 9.70324C11.6267 10.7234 10.9999 12.0051 10.9999 13.4874Z",fill:"#090909",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"})]}),(0,r.jsx)("div",{className:"typo-b4 font-bold",children:"ดูอะไรดี?"}),(0,r.jsxs)("svg",{width:38,height:27,viewBox:"0 0 38 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M20.4445 13.4871C20.4445 15.4053 19.9831 17.2451 19.304 18.832C18.5553 20.602 17.3625 22.0494 16.0044 23.1218C14.5505 24.2728 12.8441 24.761 10.9897 24.761C9.13526 24.761 7.47239 24.2117 6.01847 23.0608C4.66032 21.9883 3.31087 20.6456 2.56215 18.8756C1.88307 17.2887 1.5 15.4053 1.5 13.4784C1.5 11.5514 2.04848 9.74656 2.72756 8.15967C3.47629 6.38967 4.47749 4.75046 5.83564 3.66928C7.28956 2.51834 9.13526 2.00391 10.9897 2.00391C12.8441 2.00391 14.6462 2.57937 16.1001 3.73031C17.4583 4.80277 18.3637 6.4507 19.1125 8.2207C19.7915 9.8076 20.4445 11.5602 20.4445 13.4871Z",fill:"white",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M11.1027 13.4868C11.1027 14.9691 10.5629 16.338 9.82292 17.3581C8.96972 18.5178 7.70734 19.1979 6.33177 19.1979C4.95621 19.1979 3.76347 18.4742 2.91027 17.3146C2.16155 16.2944 1.74365 14.9691 1.74365 13.4955C1.74365 12.022 2.21378 10.7228 2.96251 9.7114C3.81571 8.55175 4.96491 7.81934 6.34048 7.81934C7.71604 7.81934 8.98713 8.45584 9.84033 9.62421C10.5891 10.6444 11.1114 12.022 11.1114 13.5043L11.1027 13.4868Z",fill:"#090909",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M36.3592 13.487C36.3592 15.4053 35.654 17.1317 34.9836 18.7273C34.2349 20.4973 33.3295 22.1016 31.9713 23.1741C30.5174 24.325 28.7675 25.1272 26.9131 25.1272C25.0587 25.1272 23.3436 24.2727 21.8896 23.1218C20.5315 22.0493 19.3475 20.5932 18.59 18.8319C17.911 17.245 17.3799 15.4053 17.3799 13.487C17.3799 11.5688 17.8239 9.69418 18.503 8.10728C19.2517 6.33728 20.4183 4.77654 21.7678 3.70408C23.2217 2.55315 25.05 1.87305 26.9044 1.87305C28.7588 1.87305 30.4652 2.71881 31.9191 3.86103C33.2772 4.93349 34.5832 6.32856 35.3406 8.09856C36.0197 9.68546 36.3505 11.5775 36.3505 13.4958L36.3592 13.487Z",fill:"white",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M27.0001 13.4874C27.0001 14.9696 26.5039 16.3473 25.7551 17.3674C24.9019 18.5271 23.6308 19.2159 22.2553 19.2159C20.8797 19.2159 19.5738 18.5445 18.7293 17.3849C17.9806 16.3647 17.6062 14.9609 17.6062 13.4874C17.6062 12.0138 18.1199 10.706 18.8599 9.6858C19.7131 8.52615 20.8884 7.76758 22.2553 7.76758C23.6221 7.76758 24.7713 8.54359 25.6245 9.70324C26.3733 10.7234 27.0001 12.0051 27.0001 13.4874Z",fill:"#090909",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"})]})]}),(0,r.jsx)(w,{onClick:()=>{t(!1),i(0),s(!0)},children:(0,r.jsxs)("span",{children:["นักการเมืองแต่ละคน",(0,r.jsx)("br",{})," เกี่ยวข้องกับธุรกิจอะไรบ้าง?"]})}),(0,r.jsx)(w,{onClick:()=>{t(!1),i(2),s(!0)},children:(0,r.jsxs)("span",{children:["ธุรกิจที่เกี่ยวกับนักการเมืองแบบไหน",(0,r.jsx)("br",{}),"รับเงินจากโครงการรัฐเยอะ?"]})}),(0,r.jsx)(w,{onClick:()=>{t(!1),i(4),s(!0)},children:(0,r.jsxs)("span",{children:["บริษัทที่รับโครงการรัฐ",(0,r.jsx)("br",{}),"มีใครถือหุ้นบ้าง?"]})})]}),(0,r.jsxs)("button",{className:"flex flex-row items-center gap-x-[9px] py-[10.5px] px-[20px] w-fit mx-auto bg-white rounded-[40px] border-black border-[3px]",onClick:()=>{let e=document.getElementById("display-area");null==e||e.scrollTo({top:0})},children:["กลับไปด้านบน",(0,r.jsx)("svg",{width:18,height:20,viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M8.99477 19C8.99477 18.1288 9.53505 14.867 9.45186 14C9.31774 12.6021 8.82178 11.9134 8.80946 10.5C8.78908 8.16088 8.75586 7.59703 8.87741 5.27256C8.90547 4.73592 8.93918 4.50754 8.93918 4C8.40451 4.5132 7.74585 4.36917 7.21583 4.88947C5.23111 6.83779 -0.544392 12.8727 1.39104 10.8721C2.83864 9.37574 4.19694 7.7418 5.58514 6.1856C6.75868 4.87002 7.89038 3.41503 8.80946 1.89497C9.02275 1.54222 9.16673 0.657367 9.45186 1.14156C10.253 2.50195 11.0273 3.83533 11.9597 5.10656C13.0568 6.60229 14.1073 8.14607 15.1716 9.66534C15.2557 9.78533 15.3779 9.96045 15.5052 10.0357C16.0965 10.3849 16.4117 11.2257 17 11.5297",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})})]})]})})})};var v=s(3986),b=s(3808),y=s(2069);let N=e=>{let{width:t,height:s,filteredPerson:i}=e,[o,a]=(0,l.useState)({currentPage:0,itemPerPage:40,totalPage:1,items:[],hasMore:!0});(0,l.useMemo)(()=>{a(e=>({...e,currentPage:0,totalPage:Math.round(i.length/e.itemPerPage),items:i.slice(0,e.itemPerPage),hasMore:!0}))},[i]);let{xScale:d,xZero:c,getWidth:h}=(0,l.useMemo)(()=>{let e=v.BYU().domain([-10,30]).range([0,t]),s=e(0);return{xScale:e,xZero:s,getWidth:t=>t<=0?s-e(t):e(t)-s}},[t]),p=()=>a(e=>o.items.length>=i.length?{...e,hasMore:!1}:{...e,currentPage:e.currentPage+1,items:e.items.concat(i.splice((e.currentPage+1)*e.itemPerPage,e.itemPerPage))}),{setSelectedPerson:C,party:u}=(0,n.j)(),{currentStep:m,setCurrentStep:j}=(0,x.rN)(),g=(0,l.useRef)(null),k=(0,l.useRef)(null),w=(0,l.useCallback)(e=>{let t=u.find(t=>t.Name===e.PartyName);C(t?{...e,Party:{Id:t.Id,Name:t.Name,Color:t.Color,Images:Array.isArray(t.Images)?"/mpasset/party/".concat(t.Name,".webp"):null}}:e),j(0===m?1:5)},[m,u,j,C]);return(0,r.jsxs)("div",{className:"relative",ref:k,children:[(0,r.jsx)(b.Z,{className:"tour1-first-step tour3-first-step",dataLength:o.items.length,next:p,hasMore:o.hasMore,loader:(0,r.jsx)("h4",{children:"Loading..."}),height:s,children:(0,r.jsx)("div",{className:"flex flex-col gap-y-[2px]",children:o.items.map((e,t)=>{let s=e.totalPctShare<25,i=e.totalValueShare<0,l=d(e.totalPctShare),n=u.find(t=>t.Name===e.PartyName),o=(null==n?void 0:n.Color)||"black";return(0,r.jsx)("div",{className:"flex flex-row relative cursor-pointer",onClick:()=>w(e),onMouseOver:()=>{g.current&&(g.current.style.visibility="visible",g.current.innerText=e.Name)},onMouseLeave:()=>{g.current&&(g.current.style.visibility="hidden")},onMouseMove:e=>{let{nativeEvent:{pageX:t,pageY:s}}=e;if(!g.current||!k.current)return;let{left:r,top:i}=k.current.getBoundingClientRect();g.current.style.left="".concat(t-r+10,"px"),g.current.style.top="".concat(s-i+10,"px")},children:(0,r.jsxs)("div",{className:"relative h-[30px]",children:[(0,r.jsxs)("div",{className:"absolute",style:{left:i?c+30+5:c-30-5},children:[(0,r.jsx)("div",{className:" w-[30px] h-[30px] bg-cover bg-top rounded-full border-[1px] border-black",style:{backgroundImage:"url(".concat(e.Images||"/mpasset/design_assets/profile_pic.jpg",")")}}),(0,r.jsx)("div",{className:"absolute w-[11.25px] h-[11.25px] bg-cover bg-top rounded-full",style:{backgroundImage:e.PartyName?"url(/mpasset/party/".concat(e.PartyName,".webp)"):void 0,bottom:0}})]}),(0,r.jsx)("div",{className:"h-[20px] my-[5px]",style:{width:h(e.totalPctShare),marginLeft:i?l:c,...e.totalPctShare<30?{backgroundColor:o}:{background:"linear-gradient(90deg, ".concat(o," 95%, rgba(0,0,0,0) 100%)")}}}),(0,r.jsx)("div",{className:"typo-b7 my-auto absolute whitespace-nowrap",style:{color:s?"black":"white",textAlign:s?"start":"end",top:"8px",left:s?i?c+75:l+5:l-65},children:0!==e.totalValueShare?(0,y.B0)(e.totalValueShare):e.countDirector>0||e.countCompShare>0?"เกี่ยวข้องกับธุรกิจแต่ไม่มีหุ้นอยู่":"ไม่เกี่ยวข้องกับธุรกิจ"})]})},t)})})}),(0,r.jsx)("div",{ref:g,style:{position:"absolute",backgroundColor:"white",border:"solid",borderWidth:"1px",borderRadius:"5px",padding:"10px",visibility:"hidden"}})]})},M=e=>{let{filteredPerson:t}=e,[s,x]=l.useState(!1),{openTutorial:h,setOpenTutorial:p}=(0,n.j)(),C=l.useRef(null),[u,m]=l.useState({width:0,height:0});return l.useEffect(()=>{C.current&&m({width:C.current.clientWidth,height:C.current.clientHeight})},[C]),l.useLayoutEffect(()=>{function e(){C.current&&m({width:C.current.clientWidth,height:C.current.clientHeight})}return window.addEventListener("resize",(0,i.debounce)(e,1e3)),()=>window.removeEventListener("resize",e)},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"h-full max-w-[743px] mx-auto flex flex-col pt-4",children:[(0,r.jsx)(g,{onOpenSeachDialog:()=>x(!0)}),(0,r.jsxs)("div",{className:"flex flex-row justify-between px-[10px]",children:[(0,r.jsx)("div",{className:"typo-b7 text-gray-3 typo-ibmplex",children:"*แสดงสีเฉพาะพรรคที่อยู่ในสภาสมัยล่าสุด"}),(0,r.jsx)("div",{className:"typo-b7 text-right",children:"ล้านบาท"})]}),(0,r.jsxs)("div",{className:"w-full h-full flex-grow-1 relative",ref:C,children:[t.length>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N,{width:u.width,height:u.height,filteredPerson:t}),(0,r.jsx)("div",{className:"absolute bottom-0 inset-x-0",children:(0,r.jsx)("div",{className:"pb-[1rem]",children:(0,r.jsx)(d,{})})})]}):(0,r.jsx)("div",{className:"py-28",children:(0,r.jsx)(o.TX,{})}),(0,r.jsx)("div",{className:"absolute bottom-[10px] right-[10px]",children:(0,r.jsx)("div",{className:"flex flex-col gap-[5px]",children:(0,r.jsx)("button",{onClick:()=>p(!0),children:(0,r.jsx)(a.HN,{})})})})]}),(0,r.jsx)(c.Z,{open:h,onClose:()=>p(!1),children:(0,r.jsx)(f,{})}),(0,r.jsx)(k.Z,{open:s,onClose:()=>x(!1)})]})})};var L=M},8996:function(e,t,s){s.d(t,{Hz:function(){return d},M0:function(){return l},TX:function(){return c},UO:function(){return n},oF:function(){return o},tX:function(){return a}});var r=s(2322),i=s(5536);let l=e=>(0,r.jsxs)("svg",{...e,onClick:()=>e.onClick(),width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M2.68115 10.2786C3.34851 10.0359 4.23237 10.1161 4.92857 10.0934C6.23672 10.0509 7.54997 9.90829 8.85769 9.90829C10.4993 9.90829 12.1414 9.81572 13.7794 9.81572C14.8411 9.81572 15.896 9.72314 16.9371 9.72314",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M9 3C9.17146 3.1929 9.08897 3.53527 9.09771 3.77142C9.12569 4.52668 9.22379 5.29462 9.31886 6.04455C9.50372 7.50292 9.648 8.87412 9.648 10.344C9.648 12.2473 9.648 14.145 9.648 16.0525",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})]}),n=e=>(0,r.jsx)("svg",{...e,onClick:()=>e.onClick(),width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M3.45239 10.0008C6.10758 10.0008 8.761 9.9082 11.4186 9.9082C12.4881 9.9082 13.5626 10.0008 14.638 10.0008C15.1372 10.0008 15.665 10.0647 16.1346 9.9082",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})}),o=()=>(0,r.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M7.58846 21.483C6.0591 20.336 6.0591 19.5713 6.04565 18.4243C6.05904 17.2773 6.04566 16.7613 6.04566 15.6903C6.04566 15.0986 6.46818 14.3867 6.90163 13.9966C8.35313 13.0715 9.11781 14.8312 9.11781 15.3656",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M8.71021 16.9347C8.79488 16.3843 9.02751 15.8467 9.14701 15.3004C9.27721 14.7052 9.23437 14.0865 9.32023 13.4854C9.47805 12.3807 9.75158 11.273 9.86247 10.1642C9.8987 9.80191 9.88243 9.24777 9.88243 8.86543C9.88243 8.48309 9.83335 8.29704 9.88243 8.10075C10.2648 6.57142 11.5056 7.14141 11.7941 7.71842C12.0354 8.20098 12.1765 8.91302 12.1765 9.24778C12.2765 9.98173 12.1765 10.7971 12.1765 11.5418C12.1765 12.2236 12.1348 13.1005 11.926 13.7566C11.6336 14.6756 11.6247 15.8646 11.6247 16.7991",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M12.3704 13.207C13.0657 13.3545 13.7982 13.7183 14.3812 14.1258C15.3278 14.7876 14.8313 16.1953 14.6749 17.1383C14.5184 18.0818 14.1676 18.9243 13.6732 19.7365C13.6255 19.815 13.5184 19.9808 13.4548 19.9173",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M15.0816 15.5791C16.2573 15.9274 16.8306 16.4827 16.9268 17.6728C16.9994 18.572 16.8816 19.5104 16.3996 20.2936C16.0972 20.785 15.8303 21.2643 15.4582 21.7245C14.9846 22.3102 14.5094 22.2893 13.8616 22.5604C13.3604 22.7703 12.7674 22.8771 12.2349 22.9521C11.5311 23.0512 11.0114 22.9995 10.3596 22.7638C9.97666 22.6253 9.58959 22.5033 9.24503 22.2818C8.93185 22.0805 8.35306 21.865 8.35306 21.865L7.58838 21.4826",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M7.80718 7.42138C7.29281 7.19277 6.21289 6.56446 6 5.92578",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M10.3621 4.80424C10.3515 3.86915 10.2998 2.93526 10.2998 2",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M13.3364 6.12981C13.6806 5.5041 14.3209 5.0083 14.7697 4.44727",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M14.6907 8.68488C15.5635 8.65162 16.4348 8.63711 17.308 8.62256",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"})]}),a=()=>(0,r.jsxs)("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M4.37213 12.5C4.37213 12.016 4.66759 10.2039 4.6221 9.72222C4.54875 8.9456 4.27752 8.56298 4.27079 7.77778C4.25964 6.47827 4.24147 6.16502 4.30794 4.87365C4.32329 4.57551 4.34172 4.44864 4.34172 4.16667C4.04932 4.45178 3.68912 4.37176 3.39927 4.66082C2.31388 5.74322 0.405396 7.84593 1.46383 6.73449C2.25549 5.90319 1.74831 6.24544 2.50748 5.38089C3.14927 4.65001 3.76816 3.84168 4.27079 2.99721C4.38743 2.80124 4.46617 2.30965 4.6221 2.57864C5.06019 3.33442 5.48364 4.07518 5.99356 4.78142C6.59352 5.61239 6.29291 6.03096 6.87497 6.875",stroke:"#000000",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M9.12183 3.91222C9.49963 3.94656 9.72509 3.89098 10.0981 3.77065C10.3441 3.69129 10.5956 3.79474 10.8401 3.82191C11.1103 3.85193 11.3381 3.69255 11.6016 3.69255C12.0298 3.69255 12.4443 3.63486 12.8585 3.71452C13.0779 3.75671 13.315 3.82435 13.5371 3.82435C13.7271 3.82435 14.0512 3.85174 14.218 3.92198",stroke:"#000000",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M9.16577 7.69079C9.65763 7.69079 10.1458 7.64686 10.6375 7.64686C10.8289 7.64686 11.0135 7.59773 11.2111 7.60292C11.3808 7.60739 11.5521 7.6867 11.7236 7.69079C11.8722 7.69433 12.0106 7.66047 12.1312 7.75425C12.2001 7.8078 12.2724 7.85644 12.3558 7.88849C12.5694 7.97065 12.7841 7.86652 12.9879 7.86652",stroke:"#000000",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M9.07788 11.5566C9.4158 11.5566 9.71652 11.5815 10.0444 11.5542C10.3122 11.5318 10.5762 11.4248 10.8352 11.4248",stroke:"#000000",strokeLinecap:"round"})]}),d=()=>(0,r.jsxs)("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M4.37213 2.5C4.37213 2.98401 4.66759 4.79609 4.6221 5.27778C4.54875 6.0544 4.27752 6.43702 4.27079 7.22222C4.25964 8.52173 4.24147 8.83498 4.30794 10.1264C4.32329 10.4245 4.34172 10.5514 4.34172 10.8333C4.04932 10.5482 3.68912 10.6282 3.39927 10.3392C2.31388 9.25678 0.405396 7.15407 1.46383 8.26551C2.25549 9.09681 1.74831 8.75456 2.50748 9.61911C3.14927 10.35 3.76816 11.1583 4.27079 12.0028C4.38743 12.1988 4.46617 12.6904 4.6221 12.4214C5.06019 11.6656 5.48364 10.9248 5.99356 10.2186C6.59352 9.38761 6.29291 8.96904 6.87497 8.125",stroke:"#000000",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M8.75 11.4899C9.12781 11.5242 9.35326 11.4686 9.72628 11.3483C9.97231 11.2689 10.2237 11.3724 10.4683 11.3995C10.7384 11.4296 10.9663 11.2702 11.2298 11.2702C11.658 11.2702 12.0725 11.2125 12.4867 11.2922C12.7061 11.3343 12.9431 11.402 13.1652 11.402C13.3552 11.402 13.6794 11.4294 13.8462 11.4996",stroke:"#000000",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M8.75 7.58825C9.24186 7.58825 9.73004 7.54432 10.2217 7.54432C10.4131 7.54432 10.5978 7.49519 10.7953 7.50039C10.965 7.50485 11.1363 7.58417 11.3079 7.58825C11.4565 7.59179 11.5949 7.55793 11.7155 7.65171C11.7843 7.70526 11.8567 7.7539 11.94 7.78595C12.1536 7.86811 12.3684 7.76398 12.5721 7.76398",stroke:"#000000",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M8.75 3.88184C9.08792 3.88184 9.38864 3.90672 9.71652 3.8794C9.98433 3.85708 10.2483 3.75004 10.5073 3.75004",stroke:"#000000",strokeLinecap:"round"})]}),c=()=>(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center gap-y-[20px]",children:[(0,r.jsx)("div",{className:"w-[116.57px] h-[138.45px]",children:(0,r.jsx)(i.u,{})}),(0,r.jsxs)("div",{className:"typo-ibmplex text-center",children:[(0,r.jsx)("div",{className:"typo-b4 ",children:"ไม่พบสิ่งที่ค้นหา"}),(0,r.jsx)("div",{className:"typo-b6",children:"ลองตรวจสอบตัวสะกด หรือ หาคำใกล้เคียง"})]})]})},2069:function(e,t,s){s.d(t,{B0:function(){return r}});function r(e){let t=Math.abs(Number(e))>=1e9?(Math.abs(Number(e))/1e9).toFixed(2)+"B":Math.abs(Number(e))>=1e6?(Math.abs(Number(e))/1e6).toFixed(2)+"M":Math.abs(Number(e))>=1e3?(Math.abs(Number(e))/1e3).toFixed(2)+"K":Math.abs(Number(e))+"฿";return e>0?t:"-".concat(t)}}}]);