(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[865],{6386:function(e){function t(e,t,s){function l(){var c=Date.now()-n;c<t&&c>=0?r=setTimeout(l,t-c):(r=null,s||(o=e.apply(i,a),i=a=null))}null==t&&(t=100);var r,a,i,n,o,c=function(){i=this,a=arguments,n=Date.now();var c=s&&!r;return r||(r=setTimeout(l,t)),c&&(o=e.apply(i,a),i=a=null),o};return c.clear=function(){r&&(clearTimeout(r),r=null)},c.flush=function(){r&&(o=e.apply(i,a),i=a=null,clearTimeout(r),r=null)},c}t.debounce=t,e.exports=t},1892:function(e,t,s){"use strict";var l=s(2322),r=s(2784),a=s(7725);let i=e=>{let{open:t,onClose:s}=e,{person:i,yourCandidatePerson:n,selectedDataSet:o,setSelectedPerson:c}=(0,a.j)(),[d,x]=r.useState(""),[p,h]=r.useState(i);return r.useEffect(()=>{if(i.length>0&&n.length>0){let e="นักการเมือง 62"===o?i:n;if(""!==d){let t=e.filter(e=>e.Name.includes(d));"object"==typeof t&&h(t)}else h(e)}},[d,i,n,o]),(0,l.jsx)("div",{className:"absolute inset-0 overflow-x-hidden overflow-y-scroll \n      bg-white\n      ".concat(t?"visible opacity-100 z-50":"invisible opacity-0 z-0"," transition-all"),children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("svg",{className:"absolute left-4 top-6 w-[20px] h-[18px] hidden desktop:block cursor-pointer",onClick:()=>s(),viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M19 9.00523C18.1288 9.00523 14.867 8.46495 14 8.54814C12.6021 8.68226 11.9134 9.17822 10.5 9.19053C8.16088 9.21092 7.59703 9.24414 5.27256 9.12259C4.73592 9.09453 4.50754 9.06082 4 9.06082C4.5132 9.59549 4.36917 10.2541 4.88947 10.7842C6.83779 12.7689 12.8727 18.5444 10.8721 16.609C9.37574 15.1614 7.7418 13.8031 6.1856 12.4149C4.87002 11.2413 3.41503 10.1096 1.89497 9.19054C1.54222 8.97725 0.657367 8.83327 1.14156 8.54814C2.50195 7.74705 3.83533 6.97274 5.10655 6.04033C6.60229 4.94324 8.14607 3.89268 9.66534 2.82835C9.78533 2.74429 9.96045 2.62214 10.0357 2.4948C10.3849 1.9035 11.2257 1.58825 11.5297 1",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})}),(0,l.jsxs)("div",{className:"max-w-[743px] mx-auto pt-4",children:[(0,l.jsxs)("div",{className:"flex flex-row items-center px-[10px] gap-x-[8px] py-[5px]",children:[(0,l.jsx)("svg",{className:"w-[20px] h-[18px] desktop:hidden cursor-pointer hover:-translate-x-1 transition-all",onClick:()=>s(),viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M19 9.00523C18.1288 9.00523 14.867 8.46495 14 8.54814C12.6021 8.68226 11.9134 9.17822 10.5 9.19053C8.16088 9.21092 7.59703 9.24414 5.27256 9.12259C4.73592 9.09453 4.50754 9.06082 4 9.06082C4.5132 9.59549 4.36917 10.2541 4.88947 10.7842C6.83779 12.7689 12.8727 18.5444 10.8721 16.609C9.37574 15.1614 7.7418 13.8031 6.1856 12.4149C4.87002 11.2413 3.41503 10.1096 1.89497 9.19054C1.54222 8.97725 0.657367 8.83327 1.14156 8.54814C2.50195 7.74705 3.83533 6.97274 5.10655 6.04033C6.60229 4.94324 8.14607 3.89268 9.66534 2.82835C9.78533 2.74429 9.96045 2.62214 10.0357 2.4948C10.3849 1.9035 11.2257 1.58825 11.5297 1",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})}),(0,l.jsxs)("div",{className:"px-[15px] py-[5px] inline-flex gap-x-[5px] items-center border-[3px] rounded-[50px] border-black w-full cursor-pointer",children:[(0,l.jsx)("input",{type:"text",className:" border-transparent focus:border-transparent focus:ring-0 p-0 flex-grow typo-ibmplex typo-b5 leading-[150%]",placeholder:"ค้นหาชื่อนักการเมือง",value:d,onChange:e=>x(e.target.value)}),(0,l.jsxs)("svg",{width:19,height:21,viewBox:"0 0 19 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M1.83471 9.59463C1.23317 5.256 2.84023 1 7.54379 1C10.8817 1 12.8956 2.14215 14.0071 3.83806C15.3957 5.95668 16 10.5 12 13.4261C9.00001 15 7.5693 14.574 5.50001 14C4.15877 13.6279 2.09016 11.437 1.83471 9.59463Z",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M11.7864 12.761C12.6911 13.2133 13.1092 13.8446 13.7142 14.5168C14.3766 15.2528 14.7908 16.667 15.5316 17.2597C16.4331 17.9809 17.1718 19.0385 17.8033 19.9857",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})]})]})]}),(0,l.jsx)("div",{className:"flex flex-col divide-y-2 divide-gray-3 divide-dashed",children:p.map((e,t)=>(0,l.jsxs)("button",{className:"py-[5.5px] px-[20px] w-full text-left",onClick:()=>{s(),c(e)},children:[(0,l.jsx)("div",{className:"typo-b4 typo-ibmplex leading-[150%]",children:e.Name}),(0,l.jsxs)("div",{className:"typo-b7 typo-ibmplex text-gray-3 leading-[150%] inline-flex gap-x-[5px]",children:[!e.IsCabinet&&!e.IsSenator&&(0,l.jsxs)("div",{children:["นักการเมือง 62"===o?"ส.ส. 62":"ผู้สมัคร 66"," ",e.Party?"พรรค ".concat(e.Party.Name):""," แบบ",e.MpType," ","แบ่งเขต"===e.MpType?"จังหวัด".concat(e.MpProvince," เขต ").concat(e.MpZone):""," "]}),e.IsPmCandidate&&(0,l.jsx)("div",{children:"แคนดิเดตนายก"}),e.IsCabinet&&(0,l.jsx)("div",{children:"ค.ร.ม."}),e.IsSenator&&(0,l.jsx)("div",{children:"ส.ว."})]})]},"search-result-".concat(e.Id,"-").concat(t)))})]})]})})};t.Z=i},6865:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return _}});var l=s(2322),r=s(6386),a=s(2784),i=s(7725),n=s(8996),o=s(878);let c=e=>(0,l.jsxs)("div",{className:"flex flex-row items-center justify-center px-[10px] py-[5px] gap-x-[5px] bg-[#090909] bg-opacity-50 rounded-[20px] w-fit mx-auto text-white",children:[(0,l.jsx)(n.oF,{}),(0,l.jsx)("div",{className:"typo-b6 typo-ibmplex leading-[150%",children:"คลิกดูแต่ละคน"})]});var d=s(6128),x=s(8678),p=s(3620),h=s(5536),u=s(7673);let m=e=>{let{open:t,onClose:s}=e,[r,n]=a.useState(""),[o,c]=a.useState([]),[d,m]=a.useState([]),[C,f]=a.useState(100),{selectedDataSet:g,setSelectedBusinessType:v}=(0,i.j)(),j=a.useCallback(async()=>{await u.gyn("https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/company_type_count.csv").then(e=>{let t=e.slice(0,e.length);if(t){t.forEach(e=>{e.type=String(e.type),e.count=Number(e.count)});let e=u.Fp7(t,e=>e.count)||100;f(e);let s=p._.map(s=>{var l;let r=(null===(l=t.find(e=>e.type===s.code))||void 0===l?void 0:l.count)||0;return{...s,count:r,percentage:r/e*100}});c(s.sort((e,t)=>t.count-e.count)),m(s)}})},[]),w=a.useCallback(async()=>{await u.gyn("/mpasset/data/yourcandidate/company_type_count.csv").then(e=>{let t=e.slice(0,e.length);if(t){t.forEach(e=>{e.type=String(e.type),e.count=Number(e.count)});let e=u.Fp7(t,e=>e.count)||100;f(e);let s=p._.map(s=>{var l;let r=(null===(l=t.find(e=>e.type===s.code))||void 0===l?void 0:l.count)||0;return{...s,count:r,percentage:r/e*100}}),l=[...s.slice(0,1),...s.slice(1).sort((e,t)=>t.count-e.count)];c(l),m(l)}})},[]);a.useEffect(()=>{if(""!==r&&o.length>0){let e=o.filter(e=>e.name.includes(r));"object"==typeof e&&m(e)}else m(o)},[r,o]),a.useEffect(()=>{"นักการเมือง 62"===g?j():w()},[j,w,g]);let{isOpen:y,setIsOpen:b}=(0,x.rN)();return(0,l.jsx)("div",{className:"absolute inset-0 overflow-x-hidden overflow-y-scroll \n      bg-white z-30\n      flex flex-col\n      ".concat(t?"visible opacity-100 z-50":"hidden opacity-0 z-0"," transition-all"),children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("svg",{className:"absolute left-4 top-6 w-[20px] h-[18px] hidden desktop:block cursor-pointer",onClick:()=>s(),viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M19 9.00523C18.1288 9.00523 14.867 8.46495 14 8.54814C12.6021 8.68226 11.9134 9.17822 10.5 9.19053C8.16088 9.21092 7.59703 9.24414 5.27256 9.12259C4.73592 9.09453 4.50754 9.06082 4 9.06082C4.5132 9.59549 4.36917 10.2541 4.88947 10.7842C6.83779 12.7689 12.8727 18.5444 10.8721 16.609C9.37574 15.1614 7.7418 13.8031 6.1856 12.4149C4.87002 11.2413 3.41503 10.1096 1.89497 9.19054C1.54222 8.97725 0.657367 8.83327 1.14156 8.54814C2.50195 7.74705 3.83533 6.97274 5.10655 6.04033C6.60229 4.94324 8.14607 3.89268 9.66534 2.82835C9.78533 2.74429 9.96045 2.62214 10.0357 2.4948C10.3849 1.9035 11.2257 1.58825 11.5297 1",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})}),(0,l.jsxs)("div",{className:"max-w-[743px] mx-auto w-screen pt-4",children:[(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"flex flex-row items-center px-[10px] gap-x-[8px] py-[5px]",children:[(0,l.jsx)("svg",{className:"w-[20px] h-[18px] desktop:hidden cursor-pointer",onClick:()=>s(),viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M19 9.00523C18.1288 9.00523 14.867 8.46495 14 8.54814C12.6021 8.68226 11.9134 9.17822 10.5 9.19053C8.16088 9.21092 7.59703 9.24414 5.27256 9.12259C4.73592 9.09453 4.50754 9.06082 4 9.06082C4.5132 9.59549 4.36917 10.2541 4.88947 10.7842C6.83779 12.7689 12.8727 18.5444 10.8721 16.609C9.37574 15.1614 7.7418 13.8031 6.1856 12.4149C4.87002 11.2413 3.41503 10.1096 1.89497 9.19054C1.54222 8.97725 0.657367 8.83327 1.14156 8.54814C2.50195 7.74705 3.83533 6.97274 5.10655 6.04033C6.60229 4.94324 8.14607 3.89268 9.66534 2.82835C9.78533 2.74429 9.96045 2.62214 10.0357 2.4948C10.3849 1.9035 11.2257 1.58825 11.5297 1",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})}),(0,l.jsxs)("div",{className:"px-[15px] py-[5px] inline-flex gap-x-[5px] items-center border-[3px] rounded-[50px] border-black w-full tour2-second-step",children:[(0,l.jsx)("input",{type:"text",className:" border-transparent focus:border-transparent focus:ring-0 p-0 flex-grow typo-ibmplex typo-b5 leading-[150%]",placeholder:"ค้นหาหมวดธุรกิจ",value:r,onChange:e=>n(e.target.value),onFocus:()=>{y&&b(!1)}}),(0,l.jsxs)("svg",{width:19,height:21,viewBox:"0 0 19 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M1.83471 9.59463C1.23317 5.256 2.84023 1 7.54379 1C10.8817 1 12.8956 2.14215 14.0071 3.83806C15.3957 5.95668 16 10.5 12 13.4261C9.00001 15 7.5693 14.574 5.50001 14C4.15877 13.6279 2.09016 11.437 1.83471 9.59463Z",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M11.7864 12.761C12.6911 13.2133 13.1092 13.8446 13.7142 14.5168C14.3766 15.2528 14.7908 16.667 15.5316 17.2597C16.4331 17.9809 17.1718 19.0385 17.8033 19.9857",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})]})]})]})}),(0,l.jsx)("div",{className:"flex flex-col divide-y-2 divide-gray-3 divide-dashed h-full overflow-scroll",children:d.length>0?d.map(e=>(0,l.jsxs)("button",{className:" w-full text-left py-[16px] px-[20px] relative",onClick:()=>{s(),v(e)},children:["all"!==e.code&&(0,l.jsx)("div",{className:"absolute inset-0 -z-10 bg-highlight-1",style:{width:"".concat(e.percentage,"%")}}),(0,l.jsxs)("div",{className:" flex flex-row justify-between ",children:[(0,l.jsxs)("div",{className:"flex flex-row",children:[e.icon,(0,l.jsx)("div",{className:"typo-b4 typo-ibmplex leading-[150%] ml-[12px]",children:e.name})]}),"all"!==e.code&&(0,l.jsx)("div",{children:e.count})]})]},"search-result-".concat(e.code))):(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center gap-y-[20px]",children:[(0,l.jsx)("div",{className:"w-[116.57px] h-[138.45px]",children:(0,l.jsx)(h.u,{})}),(0,l.jsxs)("div",{className:"typo-ibmplex text-center",children:[(0,l.jsx)("div",{className:"typo-b4 ",children:"ไม่พบสิ่งที่ค้นหา"}),(0,l.jsx)("div",{className:"typo-b6",children:"ลองตรวจสอบตัวสะกด หรือ หาคำใกล้เคียง"})]})]})})]})]})})},C=e=>{let{open:t,onClose:s}=e,{party:r,setSelectedParty:n,selectedDataSet:o}=(0,i.j)(),[c,d]=a.useState(""),[x,u]=a.useState(r);return a.useEffect(()=>{let e=r;if("ผู้สมัคร 66"===o&&(e=r.slice(3)),""!==c&&p._.length>0){let t=e.filter(e=>e.Name.includes(c));"object"==typeof t&&u(t)}else u(e)},[c,r,o]),(0,l.jsx)("div",{className:"absolute inset-0 overflow-x-hidden overflow-y-scroll \n      bg-white z-30 flex flex-col\n      ".concat(t?"visible opacity-100 z-50":"hidden opacity-0 z-0"," transition-all"),children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("svg",{className:"absolute left-4 top-6 w-[20px] h-[18px] hidden desktop:block cursor-pointer",onClick:()=>s(),viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M19 9.00523C18.1288 9.00523 14.867 8.46495 14 8.54814C12.6021 8.68226 11.9134 9.17822 10.5 9.19053C8.16088 9.21092 7.59703 9.24414 5.27256 9.12259C4.73592 9.09453 4.50754 9.06082 4 9.06082C4.5132 9.59549 4.36917 10.2541 4.88947 10.7842C6.83779 12.7689 12.8727 18.5444 10.8721 16.609C9.37574 15.1614 7.7418 13.8031 6.1856 12.4149C4.87002 11.2413 3.41503 10.1096 1.89497 9.19054C1.54222 8.97725 0.657367 8.83327 1.14156 8.54814C2.50195 7.74705 3.83533 6.97274 5.10655 6.04033C6.60229 4.94324 8.14607 3.89268 9.66534 2.82835C9.78533 2.74429 9.96045 2.62214 10.0357 2.4948C10.3849 1.9035 11.2257 1.58825 11.5297 1",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})}),(0,l.jsxs)("div",{className:"max-w-[743px] mx-auto w-screen pt-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex flex-row items-center px-[10px] gap-x-[8px] py-[5px]",children:[(0,l.jsx)("svg",{className:"w-[20px] h-[18px] desktop:hidden",onClick:()=>s(),viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M19 9.00523C18.1288 9.00523 14.867 8.46495 14 8.54814C12.6021 8.68226 11.9134 9.17822 10.5 9.19053C8.16088 9.21092 7.59703 9.24414 5.27256 9.12259C4.73592 9.09453 4.50754 9.06082 4 9.06082C4.5132 9.59549 4.36917 10.2541 4.88947 10.7842C6.83779 12.7689 12.8727 18.5444 10.8721 16.609C9.37574 15.1614 7.7418 13.8031 6.1856 12.4149C4.87002 11.2413 3.41503 10.1096 1.89497 9.19054C1.54222 8.97725 0.657367 8.83327 1.14156 8.54814C2.50195 7.74705 3.83533 6.97274 5.10655 6.04033C6.60229 4.94324 8.14607 3.89268 9.66534 2.82835C9.78533 2.74429 9.96045 2.62214 10.0357 2.4948C10.3849 1.9035 11.2257 1.58825 11.5297 1",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})}),(0,l.jsxs)("div",{className:"px-[15px] py-[5px] inline-flex gap-x-[5px] items-center border-[3px] rounded-[50px] border-black w-full",children:[(0,l.jsx)("input",{type:"text",className:" border-transparent focus:border-transparent focus:ring-0 p-0 flex-grow typo-ibmplex typo-b5 leading-[150%]",placeholder:"ค้นหาพรรคการเมือง",value:c,onChange:e=>d(e.target.value)}),(0,l.jsxs)("svg",{width:19,height:21,viewBox:"0 0 19 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M1.83471 9.59463C1.23317 5.256 2.84023 1 7.54379 1C10.8817 1 12.8956 2.14215 14.0071 3.83806C15.3957 5.95668 16 10.5 12 13.4261C9.00001 15 7.5693 14.574 5.50001 14C4.15877 13.6279 2.09016 11.437 1.83471 9.59463Z",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M11.7864 12.761C12.6911 13.2133 13.1092 13.8446 13.7142 14.5168C14.3766 15.2528 14.7908 16.667 15.5316 17.2597C16.4331 17.9809 17.1718 19.0385 17.8033 19.9857",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})]})]})]}),(0,l.jsx)("div",{className:"px-[10px] py-[5px] typo-b7 leading-[150%] typo-ibmplex text-right text-gray-3",children:"*แสดงสีพรรคเฉพาะพรรคที่อยู่ในสภาสมัยล่าสุด"})]}),(0,l.jsxs)("div",{className:"flex flex-col divide-y-2 divide-gray-3 divide-dashed h-full overflow-scroll",children:[(0,l.jsx)("button",{className:" w-full text-left py-[16px] px-[20px] relative",onClick:()=>{s(),setTimeout(()=>n(null),100)},children:(0,l.jsx)("div",{className:" flex flex-row justify-between ",children:(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsx)("div",{className:"w-[20px] h-[20px] rounded-full bg-center bg-contain"}),(0,l.jsx)("div",{className:"typo-b4 typo-ibmplex leading-[150%] ml-[12px]",children:"ทุกพรรค"})]})})},"search-result-party-ทุกพรรค"),x.length>0?x.map(e=>(0,l.jsx)("button",{className:" w-full text-left py-[16px] px-[20px] relative",onClick:()=>{s(),setTimeout(()=>n(e),100)},children:(0,l.jsxs)("div",{className:" flex flex-row justify-between ",children:[(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsx)("div",{className:"w-[20px] h-[20px] rounded-full bg-center bg-contain",style:{backgroundImage:"url(".concat(e.Images&&e.Images[0].url,")")}}),(0,l.jsx)("div",{className:"typo-b4 typo-ibmplex leading-[150%] ml-[12px]",children:e.Name})]}),(0,l.jsx)("div",{className:"w-[20px] h-[20px] rounded-full",style:{backgroundColor:"".concat("ทุกพรรค"!==e.Name&&("ไม่สังกัดพรรค"!==e.Name?e.IsActive?e.Color:"#9A948C":"#000000"))}})]})},"search-result-party-".concat(e.Name))):(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center gap-y-[20px]",children:[(0,l.jsx)("div",{className:"w-[116.57px] h-[138.45px]"}),(0,l.jsx)(h.u,{}),(0,l.jsxs)("div",{className:"typo-ibmplex text-center",children:[(0,l.jsx)("div",{className:"typo-b4 ",children:"ไม่พบสิ่งที่ค้นหา"}),(0,l.jsx)("div",{className:"typo-b6",children:"ลองตรวจสอบตัวสะกด หรือ หาคำใกล้เคียง"})]})]})]})]})]})})},f=e=>{let{open:t,onClose:s}=e;return(0,l.jsx)("div",{className:"absolute inset-0 bg-white transition-all z-30\n      ".concat(t?"visible opacity-100":"invisible opacity-0","\n      flex flex-col justify-center items-center px-[10px]"),children:(0,l.jsxs)("div",{className:"p-[20px] rounded-[10px] border-black border-[3px]",children:[(0,l.jsx)("div",{className:"flex flex-row justify-end",children:(0,l.jsx)("button",{onClick:()=>s(),children:(0,l.jsx)(o.jm,{})})}),(0,l.jsxs)("div",{className:"typo-b5 typo-ibmplex text-center",children:[(0,l.jsx)("div",{className:"font-bold",children:"มูลค่าหุ้นธุรกิจ"}),"คือ มูลค่าหุ้นของผู้ถือหุ้นแต่ละคน โดย วิธีการคำนวณข้อมูลของผู้ถือหุ้นว่ามีมูลค่าหุ้นเท่าไหร่ จะคิดจาก",(0,l.jsx)("div",{className:"font-bold",children:"เปอร์เซ็นต์หุ้น x ส่วนของผู้ถือหุ้นในงบการเงิน"}),"ซึ่งส่วนของผู้ถือหุ้นเป็นส่วนที่เหลือจากสินทรัพย์หักด้วยหนี้สิน"]})]})})},g=e=>{let{wording:t,onClick:s}=e;return(0,l.jsx)("button",{className:"truncate max-w-[160px] shrink-0 bg-highlight-2 text-black px-[10px] py-[5px] typo-ibmplex typo-b6 leading-[150%] rounded-[100px]",onClick:()=>{s&&s()},children:t})},v=e=>{let{onOpenSeachDialog:t}=e,[s,r]=a.useState(!1),[c,d]=a.useState(!1),[h,u]=a.useState(!1),{selectedBusinessType:v,selectedParty:j,selectedSort:w,setSelectedParty:y,selectedDataSet:b,setSelectedDataSet:k,toggleSort:N,setSelectedBusinessType:_}=(0,i.j)(),{setCurrentStep:S,isOpen:M}=(0,x.rN)();return(0,l.jsxs)("div",{className:"flex flex-col gap-y-[5px]  py-[5px]",children:[(0,l.jsxs)("div",{className:"flex flex-row gap-x-[5px] px-[10px]",children:[(0,l.jsxs)("div",{className:"px-[15px] py-[5px] inline-flex gap-x-[5px] items-center border-[3px] rounded-[50px] border-black w-full cursor-pointer",children:[(0,l.jsx)("div",{className:" border-transparent focus:border-transparent focus:ring-0 p-0 flex-grow typo-ibmplex typo-b5 leading-[150%]",onClick:()=>t(!0),children:"ค้นหาชื่อนักการเมือง"}),(0,l.jsxs)("svg",{width:19,height:21,viewBox:"0 0 19 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M1.83471 9.59463C1.23317 5.256 2.84023 1 7.54379 1C10.8817 1 12.8956 2.14215 14.0071 3.83806C15.3957 5.95668 16 10.5 12 13.4261C9.00001 15 7.5693 14.574 5.50001 14C4.15877 13.6279 2.09016 11.437 1.83471 9.59463Z",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M11.7864 12.761C12.6911 13.2133 13.1092 13.8446 13.7142 14.5168C14.3766 15.2528 14.7908 16.667 15.5316 17.2597C16.4331 17.9809 17.1718 19.0385 17.8033 19.9857",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})]})]}),(0,l.jsx)("button",{onClick:()=>{_(p._[0]),y(null)},children:(0,l.jsx)(o.UZ,{})})]}),(0,l.jsxs)("div",{className:"flex flex-col tablet:flex-row gap-y-[5px] typo-b5 typo-ibmplex ml-[10px]",children:[(0,l.jsxs)("div",{className:"flex flex-row gap-x-[5px] items-center w-auto overflow-x-scroll scrollbar-hide pr-[10px]",children:[(0,l.jsx)("div",{className:"shrink-0",children:"รายชื่อของ"}),(0,l.jsx)(g,{wording:b,onClick:()=>{"นักการเมือง 62"===b&&k("ผู้สมัคร 66"),"ผู้สมัคร 66"===b&&k("นักการเมือง 62")}}),(0,l.jsx)("div",{className:"shrink-0",children:"ที่มีมูลค่าหุ้น"}),(0,l.jsx)("button",{onClick:()=>r(!0),children:(0,l.jsx)(o.d,{})}),(0,l.jsx)(g,{wording:"desc"===w?(0,l.jsxs)("div",{className:"flex flex-row items-center gap-x-[5px]",children:[(0,l.jsx)(n.tX,{}),(0,l.jsx)("span",{children:"สูงสุด"})]}):(0,l.jsxs)("div",{className:"flex flex-row items-center gap-x-[5px]",children:[(0,l.jsx)(n.Hz,{}),(0,l.jsx)("span",{children:"ต่ำสุด"})]}),onClick:()=>{N()}})]}),(0,l.jsxs)("div",{className:"flex flex-row gap-x-[5px] items-center",children:[(0,l.jsx)("div",{children:"จาก"}),(0,l.jsx)("div",{className:"tour2-first-step",children:(0,l.jsx)(g,{wording:(null==v?void 0:v.name)||"ทุกหมวดธุรกิจ",onClick:()=>{M&&S(3),d(!0)}})}),(0,l.jsx)("div",{children:"จาก"}),(0,l.jsx)(g,{wording:(null==j?void 0:j.Name)||"ทุกพรรค",onClick:()=>u(!0)})]})]}),(0,l.jsx)(f,{open:s,onClose:()=>r(!1)}),(0,l.jsx)(m,{open:c,onClose:()=>d(!1)}),(0,l.jsx)(C,{open:h,onClose:()=>u(!1)})]})};var j=s(1892);let w=e=>{let{children:t,onClick:s}=e;return(0,l.jsx)("button",{className:"w-[300px] h-[60px] typo-b5 bg-contain bg-center bg-no-repeat",style:{backgroundImage:"url('".concat("/mpasset","/design_assets/frame.jpg')")},onClick:()=>s&&s(),children:t})},y=e=>{let{setOpenTutorial:t}=(0,i.j)(),{setIsOpen:s,setCurrentStep:r}=(0,x.rN)();return(0,l.jsx)("div",{className:"w-full h-full relative bg-[#FFFFFFc7] flex flex-col justify-center items-center",children:(0,l.jsx)("div",{className:"flex w-[340px] justify-center items-center",children:(0,l.jsxs)("div",{className:"flex flex-col gap-y-[20px] justify-center w-full",children:[(0,l.jsxs)("div",{className:"relative flex flex-col justify-center gap-y-[10px] bg-white border-black border-[3px] rounded-[10px] p-[20px]",children:[(0,l.jsx)("button",{className:"absolute top-[20px] right-[20px]",onClick:()=>t(!1),children:(0,l.jsxs)("svg",{width:24,height:25,viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M5.04285 5.40186C5.06834 5.63132 5.32104 5.80992 5.46317 5.97132C6.2289 6.84088 7.07345 7.6021 7.91053 8.39835C8.60455 9.05852 9.31582 9.70481 10.0054 10.3644C11.1353 11.4452 12.2969 12.4796 13.3951 13.5778C14.4638 14.6466 15.6373 15.5513 16.6627 16.6557C17.0587 17.0821 17.5241 17.4321 17.9305 17.8624C18.1782 18.1246 18.8273 18.8251 19.1982 18.8251",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M4.43274 19.9235C7.56015 16.7961 10.6629 13.6072 14.0188 10.7306C14.8977 9.97732 15.7934 9.24822 16.6357 8.45275C16.9917 8.11647 17.367 7.51746 17.8559 7.35449",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})]})}),(0,l.jsxs)("div",{className:"flex flex-row justify-center items-center gap-x-[10.24px]",children:[(0,l.jsxs)("svg",{width:38,height:27,viewBox:"0 0 38 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M17.5555 13.4871C17.5555 15.4053 18.0169 17.2451 18.696 18.832C19.4447 20.602 20.6375 22.0494 21.9956 23.1218C23.4495 24.2728 25.1559 24.761 27.0103 24.761C28.8647 24.761 30.5276 24.2117 31.9815 23.0608C33.3397 21.9883 34.6891 20.6456 35.4379 18.8756C36.1169 17.2887 36.5 15.4053 36.5 13.4784C36.5 11.5514 35.9515 9.74656 35.2724 8.15967C34.5237 6.38967 33.5225 4.75046 32.1644 3.66928C30.7104 2.51834 28.8647 2.00391 27.0103 2.00391C25.1559 2.00391 23.3538 2.57937 21.8999 3.73031C20.5417 4.80277 19.6363 6.4507 18.8875 8.2207C18.2085 9.8076 17.5555 11.5602 17.5555 13.4871Z",fill:"white",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M26.8973 13.4868C26.8973 14.9691 27.4371 16.338 28.1771 17.3581C29.0303 18.5178 30.2927 19.1979 31.6682 19.1979C33.0438 19.1979 34.2365 18.4742 35.0897 17.3146C35.8385 16.2944 36.2563 14.9691 36.2563 13.4955C36.2563 12.022 35.7862 10.7228 35.0375 9.7114C34.1843 8.55175 33.0351 7.81934 31.6595 7.81934C30.284 7.81934 29.0129 8.45584 28.1597 9.62421C27.4109 10.6444 26.8886 12.022 26.8886 13.5043L26.8973 13.4868Z",fill:"#090909",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M1.6408 13.487C1.6408 15.4053 2.346 17.1317 3.01637 18.7273C3.76509 20.4973 4.67053 22.1016 6.02868 23.1741C7.4826 24.325 9.23252 25.1272 11.0869 25.1272C12.9413 25.1272 14.6564 24.2727 16.1104 23.1218C17.4685 22.0493 18.6525 20.5932 19.41 18.8319C20.089 17.245 20.6201 15.4053 20.6201 13.487C20.6201 11.5688 20.1761 9.69418 19.497 8.10728C18.7483 6.33728 17.5817 4.77654 16.2322 3.70408C14.7783 2.55315 12.95 1.87305 11.0956 1.87305C9.24123 1.87305 7.53483 2.71881 6.08091 3.86103C4.72276 4.93349 3.41685 6.32856 2.65941 8.09856C1.98034 9.68546 1.64951 11.5775 1.64951 13.4958L1.6408 13.487Z",fill:"white",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M10.9999 13.4874C10.9999 14.9696 11.4961 16.3473 12.2449 17.3674C13.0981 18.5271 14.3692 19.2159 15.7447 19.2159C17.1203 19.2159 18.4262 18.5445 19.2707 17.3849C20.0194 16.3647 20.3938 14.9609 20.3938 13.4874C20.3938 12.0138 19.8801 10.706 19.1401 9.6858C18.2869 8.52615 17.1116 7.76758 15.7447 7.76758C14.3779 7.76758 13.2287 8.54359 12.3755 9.70324C11.6267 10.7234 10.9999 12.0051 10.9999 13.4874Z",fill:"#090909",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"})]}),(0,l.jsx)("div",{className:"typo-b4 font-bold",children:"ดูอะไรดี?"}),(0,l.jsxs)("svg",{width:38,height:27,viewBox:"0 0 38 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M20.4445 13.4871C20.4445 15.4053 19.9831 17.2451 19.304 18.832C18.5553 20.602 17.3625 22.0494 16.0044 23.1218C14.5505 24.2728 12.8441 24.761 10.9897 24.761C9.13526 24.761 7.47239 24.2117 6.01847 23.0608C4.66032 21.9883 3.31087 20.6456 2.56215 18.8756C1.88307 17.2887 1.5 15.4053 1.5 13.4784C1.5 11.5514 2.04848 9.74656 2.72756 8.15967C3.47629 6.38967 4.47749 4.75046 5.83564 3.66928C7.28956 2.51834 9.13526 2.00391 10.9897 2.00391C12.8441 2.00391 14.6462 2.57937 16.1001 3.73031C17.4583 4.80277 18.3637 6.4507 19.1125 8.2207C19.7915 9.8076 20.4445 11.5602 20.4445 13.4871Z",fill:"white",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M11.1027 13.4868C11.1027 14.9691 10.5629 16.338 9.82292 17.3581C8.96972 18.5178 7.70734 19.1979 6.33177 19.1979C4.95621 19.1979 3.76347 18.4742 2.91027 17.3146C2.16155 16.2944 1.74365 14.9691 1.74365 13.4955C1.74365 12.022 2.21378 10.7228 2.96251 9.7114C3.81571 8.55175 4.96491 7.81934 6.34048 7.81934C7.71604 7.81934 8.98713 8.45584 9.84033 9.62421C10.5891 10.6444 11.1114 12.022 11.1114 13.5043L11.1027 13.4868Z",fill:"#090909",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M36.3592 13.487C36.3592 15.4053 35.654 17.1317 34.9836 18.7273C34.2349 20.4973 33.3295 22.1016 31.9713 23.1741C30.5174 24.325 28.7675 25.1272 26.9131 25.1272C25.0587 25.1272 23.3436 24.2727 21.8896 23.1218C20.5315 22.0493 19.3475 20.5932 18.59 18.8319C17.911 17.245 17.3799 15.4053 17.3799 13.487C17.3799 11.5688 17.8239 9.69418 18.503 8.10728C19.2517 6.33728 20.4183 4.77654 21.7678 3.70408C23.2217 2.55315 25.05 1.87305 26.9044 1.87305C28.7588 1.87305 30.4652 2.71881 31.9191 3.86103C33.2772 4.93349 34.5832 6.32856 35.3406 8.09856C36.0197 9.68546 36.3505 11.5775 36.3505 13.4958L36.3592 13.487Z",fill:"white",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M27.0001 13.4874C27.0001 14.9696 26.5039 16.3473 25.7551 17.3674C24.9019 18.5271 23.6308 19.2159 22.2553 19.2159C20.8797 19.2159 19.5738 18.5445 18.7293 17.3849C17.9806 16.3647 17.6062 14.9609 17.6062 13.4874C17.6062 12.0138 18.1199 10.706 18.8599 9.6858C19.7131 8.52615 20.8884 7.76758 22.2553 7.76758C23.6221 7.76758 24.7713 8.54359 25.6245 9.70324C26.3733 10.7234 27.0001 12.0051 27.0001 13.4874Z",fill:"#090909",stroke:"#090909",strokeWidth:2,strokeMiterlimit:10,strokeLinejoin:"round"})]})]}),(0,l.jsx)(w,{onClick:()=>{t(!1),r(0),s(!0)},children:(0,l.jsxs)("span",{children:["นักการเมืองแต่ละคน",(0,l.jsx)("br",{})," เกี่ยวข้องกับธุรกิจอะไรบ้าง?"]})}),(0,l.jsx)(w,{onClick:()=>{t(!1),r(2),s(!0)},children:(0,l.jsxs)("span",{children:["ที่เกี่ยวกับนักการเมืองแบบไหน",(0,l.jsx)("br",{}),"รับเงินจากโครงการรัฐเยอะ?"]})}),(0,l.jsx)(w,{onClick:()=>{t(!1),r(4),s(!0)},children:(0,l.jsxs)("span",{children:["บริษัทที่รับโครงการรัฐ",(0,l.jsx)("br",{}),"มีใครถือหุ้นบ้าง?"]})})]}),(0,l.jsxs)("button",{className:"flex flex-row items-center gap-x-[9px] py-[10.5px] px-[20px] w-fit mx-auto bg-white rounded-[40px] border-black border-[3px]",onClick:()=>{let e=document.getElementById("display-area");null==e||e.scrollTo({top:0})},children:["กลับไปด้านบน",(0,l.jsx)("svg",{width:18,height:20,viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M8.99477 19C8.99477 18.1288 9.53505 14.867 9.45186 14C9.31774 12.6021 8.82178 11.9134 8.80946 10.5C8.78908 8.16088 8.75586 7.59703 8.87741 5.27256C8.90547 4.73592 8.93918 4.50754 8.93918 4C8.40451 4.5132 7.74585 4.36917 7.21583 4.88947C5.23111 6.83779 -0.544392 12.8727 1.39104 10.8721C2.83864 9.37574 4.19694 7.7418 5.58514 6.1856C6.75868 4.87002 7.89038 3.41503 8.80946 1.89497C9.02275 1.54222 9.16673 0.657367 9.45186 1.14156C10.253 2.50195 11.0273 3.83533 11.9597 5.10656C13.0568 6.60229 14.1073 8.14607 15.1716 9.66534C15.2557 9.78533 15.3779 9.96045 15.5052 10.0357C16.0965 10.3849 16.4117 11.2257 17 11.5297",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})})]})]})})})};var b=s(2069);let k=e=>{let{width:t,height:s,onScroll:r}=e,{filterPerson:n,setSelectedPerson:o,party:c}=(0,i.j)(),{currentStep:d,setCurrentStep:p}=(0,x.rN)(),h=e=>{r({scrollHeight:e.currentTarget.scrollHeight,scrollTop:e.currentTarget.scrollTop,clientHeight:e.currentTarget.clientHeight})},m=a.useCallback(e=>{let t=c.find(t=>t.Name===e.PartyName);t?o({...e,Party:{Id:t.Id,Name:t.Name,Color:t.Color,Images:Array.isArray(t.Images)?t.Images[0].url:null}}):o(e),0===d?p(1):p(5)},[d,c,p,o]);return a.useLayoutEffect(()=>{if(n.length>0){let e=n.length+2,l=u.Ys(".chart-main").attr("width",t).attr("height",Math.max(40*e,s)),r=[...n.map(e=>({...e}))],a=u.tiA().domain(r.map((e,t)=>"".concat(t))).range([0,40*e]).paddingInner(.5).paddingOuter(.2),i=u.BYU().domain([-10,30]).range([0,t]);l.selectAll("defs").remove();let o=u.Ys("#tooltip-main-nav").style("position","absolute").style("visibility","hidden").style("background-color","white").style("border","solid").style("border-width","1px").style("border-radius","5px").style("padding","10px"),d=l.selectAll("g").data(r).join("g").attr("transform",(e,t)=>"translate(0, ".concat(a("".concat(t)),")")).attr("class","cursor-pointer").on("click",(e,t)=>m(t)).on("mouseover",function(e,t){o.style("visibility","visible"),o.html(t.Name)}).on("mousemove",function(e){return o.style("top",e.offsetY+10+"px").style("left",e.offsetX+10+"px")}).on("mouseout",function(){return o.style("visibility","hidden")});d.selectAll("rect").remove(),d.selectAll("text").remove();let x=e=>e<=0?i(0)-i(e):i(e)-i(0);d.append("rect").attr("x",e=>e.totalPctShare<0?i(e.totalPctShare):i(0)).attr("y",0).attr("width",e=>x(e.totalPctShare)).attr("height",e=>a.bandwidth()).attr("fill",e=>e.PartyName?"url(#pattern_party_color_".concat(e.PartyName,")"):"black"),d.selectAll("defs").remove();let p=d.filter(e=>"string"==typeof e.Images&&""!==e.Images).append("svg:defs");p.append("svg:pattern").attr("id",e=>"pattern_person_avatar_"+e.Name.replaceAll(" ","-")).attr("width",1).attr("height",1).attr("patternContentUnits","objectBoundingBox").append("use").attr("xlink:href",(e,t)=>"#person_avatar"+t).attr("transform","scale(0.0025)"),p.append("svg:image").attr("id",(e,t)=>"person_avatar"+t).attr("xlink:href",e=>String(e.Images)).attr("width",400).attr("height",400).attr("x",0).attr("y",0),d.selectAll("circle").remove(),d.append("circle").attr("cx",e=>e.totalPctShare<25?e.totalPctShare<0?i(0)+15+5:i(0)-15-5:i(e.totalPctShare)-17).attr("cy",.5*a.bandwidth()).attr("r",15).attr("fill",e=>"string"==typeof e.Images&&""!==e.Images?"url(#pattern_person_avatar_".concat(e.Name.replaceAll(" ","-"),")"):"url(#pattern_person_avatar_default)").attr("stroke","black"),d.filter(e=>"string"==typeof e.PartyName).append("circle").attr("cx",e=>e.totalPctShare<25?e.totalPctShare<0?i(0)+5:i(0)-30-5:i(e.totalPctShare)-30+2.5).attr("cy",a.bandwidth()).attr("r",5).attr("fill",e=>e.PartyName?"url(#pattern_party_".concat(e.PartyName,")"):"none"),d.append("text").attr("x",e=>e.totalPctShare<25?e.totalPctShare<0?i(0)+30+10:i(e.totalPctShare)+7.5:i(e.totalPctShare)-30-5).attr("y",.5*a.bandwidth()).attr("rx","2").attr("fill",e=>e.totalPctShare<25?"black":"white").attr("text-anchor",e=>e.totalPctShare<25?"start":"end").attr("alignment-baseline","middle").attr("class","typo-b7").text(e=>0!==e.totalValueShare?(0,b.B0)(e.totalValueShare):e.countDirector>0?"เกี่ยวข้องกับธุรกิจแต่ไม่มีหุ้นอยู่":"ไม่เกี่ยวข้องกับธุรกิจ");let h=l.append("svg:defs");h.append("svg:pattern").attr("id","pattern_person_avatar_default").attr("width",1).attr("height",1).attr("patternContentUnits","objectBoundingBox").append("use").attr("xlink:href","#person_avatar_default").attr("transform","scale(0.0025)"),h.append("svg:image").attr("id","person_avatar_default").attr("xlink:href","/mpasset/design_assets/profile_pic.jpg").attr("width",400).attr("height",400).attr("x",0).attr("y",0);let C=h.selectAll(null).data(c),f=C.enter();f.append("svg:pattern").attr("id",e=>"pattern_party_".concat(e.Name)).attr("width",1).attr("height",1).attr("patternContentUnits","objectBoundingBox").append("use").attr("xlink:href",e=>"#party_avatar_".concat(e.Name)).attr("transform","scale(0.0025)"),f.append("svg:image").attr("id",e=>"party_avatar_".concat(e.Name)).attr("xlink:href",e=>e.Images?String(e.Images[0].url):"").attr("width",400).attr("height",400).attr("x",0).attr("y",0),f.append("linearGradient").attr("id",e=>"pattern_party_color_".concat(e.Name)).append("stop").attr("stop-color",e=>e.Color)}},[n,s,t,o,d,p,c,m]),(0,l.jsxs)("div",{className:"overflow-y-scroll overflow-x-hidden relative",style:{maxHeight:"".concat(s,"px")},onScroll:e=>h(e),children:[(0,l.jsx)("div",{className:"absolute top-0 inset-x-0 h-1/2 pointer-events-none tour1-first-step  tour3-first-step"}),(0,l.jsx)("svg",{className:"chart-main"}),(0,l.jsx)("div",{id:"tooltip-main-nav"})]})},N=e=>{let[t,s]=a.useState(!1),{filterPerson:x,openTutorial:p,setOpenTutorial:h}=(0,i.j)(),u=a.useRef(null),[m,C]=a.useState({width:0,height:0}),[f,g]=a.useState({scrollTop:0,scrollHeight:0,clientHeight:0});return a.useEffect(()=>{u.current&&(console.log(u.current.clientHeight),C({width:u.current.clientWidth,height:u.current.clientHeight}))},[u]),a.useLayoutEffect(()=>{function e(){u.current&&C({width:u.current.clientWidth,height:u.current.clientHeight})}return window.addEventListener("resize",(0,r.debounce)(e,1e3)),e(),()=>window.removeEventListener("resize",e)},[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"h-full max-w-[743px] mx-auto flex flex-col pt-4",children:[(0,l.jsx)(v,{onOpenSeachDialog:()=>s(!0)}),(0,l.jsxs)("div",{className:"flex flex-row justify-between px-[10px]",children:[(0,l.jsx)("div",{className:"typo-b7 text-gray-3 typo-ibmplex",children:"*แสดงสีเฉพาะพรรคที่อยู่ในสภาสมัยล่าสุด"}),(0,l.jsx)("div",{className:"typo-b7 text-right",children:"ล้านบาท"})]}),(0,l.jsxs)("div",{className:"w-full h-full flex-grow-1 relative",ref:u,children:[x.length>0?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(k,{width:m.width,height:m.height,onScroll:g}),(0,l.jsx)("div",{className:"absolute bottom-0 inset-x-0",children:(0,l.jsx)("div",{className:"pb-[1rem]",children:(0,l.jsx)(c,{})})})]}):(0,l.jsx)("div",{className:"py-28",children:(0,l.jsx)(n.TX,{})}),(0,l.jsx)("div",{className:"absolute bottom-[10px] right-[10px]",children:(0,l.jsx)("div",{className:"flex flex-col gap-[5px]",children:(0,l.jsx)("button",{onClick:()=>h(!0),children:(0,l.jsx)(o.HN,{})})})})]}),(0,l.jsx)(d.Z,{open:p,onClose:()=>h(!1),children:(0,l.jsx)(y,{})}),(0,l.jsx)(j.Z,{open:t,onClose:()=>s(!1)})]})})};var _=N}}]);