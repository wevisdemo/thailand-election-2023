"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{7354:function(e,s,l){var r=l(2322),i=l(2784),a=l(4640);let n=e=>{let{open:s,onClose:l}=e,{person:n,setSelectedPerson:t}=(0,a.j)(),[d,o]=i.useState(""),[c,x]=i.useState(n);return i.useEffect(()=>{if(n.length>0){if(""!==d){let e=n.filter(e=>e.Name.includes(d));"object"==typeof e&&x(e)}else x(n)}},[d,n]),(0,r.jsxs)("div",{className:"absolute inset-0 overflow-x-hidden overflow-y-scroll \n      bg-white\n      ".concat(s?"visible opacity-100":"invisible opacity-0"," transition-all"),children:[(0,r.jsxs)("div",{className:"flex flex-row items-center px-[10px] gap-x-[8px] py-[5px]",children:[(0,r.jsx)("svg",{width:20,height:18,className:"cursor-pointer hover:-translate-x-1 transition-all",onClick:()=>l(),viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M19 9.00523C18.1288 9.00523 14.867 8.46495 14 8.54814C12.6021 8.68226 11.9134 9.17822 10.5 9.19053C8.16088 9.21092 7.59703 9.24414 5.27256 9.12259C4.73592 9.09453 4.50754 9.06082 4 9.06082C4.5132 9.59549 4.36917 10.2541 4.88947 10.7842C6.83779 12.7689 12.8727 18.5444 10.8721 16.609C9.37574 15.1614 7.7418 13.8031 6.1856 12.4149C4.87002 11.2413 3.41503 10.1096 1.89497 9.19054C1.54222 8.97725 0.657367 8.83327 1.14156 8.54814C2.50195 7.74705 3.83533 6.97274 5.10655 6.04033C6.60229 4.94324 8.14607 3.89268 9.66534 2.82835C9.78533 2.74429 9.96045 2.62214 10.0357 2.4948C10.3849 1.9035 11.2257 1.58825 11.5297 1",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})}),(0,r.jsxs)("div",{className:"px-[15px] py-[5px] inline-flex gap-x-[5px] items-center border-[3px] rounded-[50px] border-black w-full cursor-pointer",children:[(0,r.jsx)("input",{type:"text",className:" border-transparent focus:border-transparent focus:ring-0 p-0 flex-grow typo-ibmplex typo-b5 leading-[150%]",placeholder:"ค้นหาชื่อนักการเมือง",value:d,onChange:e=>o(e.target.value)}),(0,r.jsxs)("svg",{width:19,height:21,viewBox:"0 0 19 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M1.83471 9.59463C1.23317 5.256 2.84023 1 7.54379 1C10.8817 1 12.8956 2.14215 14.0071 3.83806C15.3957 5.95668 16 10.5 12 13.4261C9.00001 15 7.5693 14.574 5.50001 14C4.15877 13.6279 2.09016 11.437 1.83471 9.59463Z",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M11.7864 12.761C12.6911 13.2133 13.1092 13.8446 13.7142 14.5168C14.3766 15.2528 14.7908 16.667 15.5316 17.2597C16.4331 17.9809 17.1718 19.0385 17.8033 19.9857",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})]})]})]}),(0,r.jsx)("div",{className:"flex flex-col divide-y-2 divide-gray-3 divide-dashed",children:c.map(e=>(0,r.jsxs)("button",{className:"py-[5.5px] px-[20px] w-full text-left",onClick(){t(e),l()},children:[(0,r.jsx)("div",{className:"typo-b4 typo-ibmplex leading-[150%]",children:e.Name}),(0,r.jsxs)("div",{className:"typo-b7 typo-ibmplex text-gray-3 leading-[150%] inline-flex gap-x-[5px]",children:[!e.IsCabinet&&!e.IsSenator&&(0,r.jsxs)("div",{children:["ส.ส. 62"," ",e.Party?"พรรค".concat(e.Party.Name):""," แบบ",e.MpType," ","แบ่งเขต"===e.MpType?"จังหวัด".concat(e.MpProvince," เขต ").concat(e.MpZone):""," "]}),e.IsCabinet&&(0,r.jsx)("div",{children:"ค.ร.ม."}),e.IsSenator&&(0,r.jsx)("div",{children:"ส.ว."})]})]},"search-result-".concat(e.Id)))})]})};s.Z=n},8368:function(e,s,l){l.r(s),l.d(s,{default:function(){return u}});var r=l(2322),i=l(5237),a=l.n(i),n=l(2784),t=l(4640),d=l(5867),o=l(1322),c=l(5555),x=l(5400);let p=e=>{let{type:s,companyData:l,selectedPerson:i}=e,{setSelectedCompany:a}=(0,t.j)(),[o,p]=n.useState(!1);return(0,r.jsx)("div",{children:Array.isArray(l)&&l.length>0&&(0,r.jsxs)("div",{className:"pt-[15px] pb-[7px] flex flex-col gap-y-[5px]",children:["shareholder"===s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between typo-b5 typo-ibmplex items-center",children:[(0,r.jsxs)("div",{className:"inline-flex gap-x-[5px] items-center",children:[(0,r.jsx)(d.xR,{}),(0,r.jsx)("div",{className:"font-bold",children:"มูลค่าหุ้นทั้งหมด"})]}),(0,r.jsxs)("div",{className:"flex flex-row gap-x-[5px] ",children:[(0,r.jsx)("div",{className:"font-bold",children:(0,c.x6)(Number(null==i?void 0:i.totalValueShare))}),(0,r.jsx)("div",{children:"ล้านบาท"})]})]}),(0,r.jsxs)("div",{className:"flex flex-row justify-between typo-b5 typo-ibmplex items-center",children:[(0,r.jsx)("div",{className:"font-bold",children:"ถือหุ้นด้วยตนเอง"}),(0,r.jsxs)("div",{className:"flex flex-row gap-x-[5px] ",children:[(0,r.jsx)("div",{className:"font-bold",children:(0,c.x6)(Number(null==i?void 0:i.countCompShare))}),(0,r.jsx)("div",{children:"บริษัท"}),o?(0,r.jsx)(x.UO,{className:"cursor-pointer",onClick:()=>p(!1)}):(0,r.jsx)(x.M0,{className:"cursor-pointer",onClick:()=>p(!0)})]})]})]}):(0,r.jsxs)("div",{className:"flex flex-row justify-between typo-b5 typo-ibmplex items-center",children:[(0,r.jsx)("div",{className:"font-bold",children:"เป็นกรรมการบริษัท (ไม่ได้ถือหุ้น)"}),(0,r.jsxs)("div",{className:"flex flex-row gap-x-[5px] ",children:[(0,r.jsx)("div",{className:"font-bold",children:(0,c.x6)(Number(null==i?void 0:i.countDirector))}),(0,r.jsx)("div",{children:"บริษัท"}),o?(0,r.jsx)(x.UO,{className:"cursor-pointer",onClick:()=>p(!1)}):(0,r.jsx)(x.M0,{className:"cursor-pointer",onClick:()=>p(!0)})]})]}),(0,r.jsxs)("div",{className:"flex flex-row gap-x-[5px] items-center",children:[(0,r.jsx)("div",{className:"w-[10px] h-[10px] bg-black rounded-[2px]"}),(0,r.jsx)("div",{className:"font-bold",children:"เคย"}),(0,r.jsx)("div",{children:"รับโครงการรัฐ"}),(0,r.jsxs)("div",{className:"flex flex-row gap-x-[5px] ",children:[(0,r.jsx)("div",{className:"font-bold",children:Array.isArray(l)?l.reduce((e,s)=>e+(Array.isArray(s.gov_fund_proj)?1:0),0):0}),(0,r.jsx)("div",{children:"บริษัท"})]})]}),(0,r.jsxs)("div",{className:"flex flex-row gap-x-[5px] items-center",children:[(0,r.jsx)("div",{className:"w-[10px] h-[10px] bg-white border-black border-[2px] rounded-[2px]"}),(0,r.jsx)("div",{className:"font-bold",children:"ไม่เคย"}),(0,r.jsx)("div",{children:"รับโครงการรัฐ"}),(0,r.jsxs)("div",{className:"flex flex-row gap-x-[5px] ",children:[(0,r.jsx)("div",{children:Array.isArray(l)?l.reduce((e,s)=>e+(Array.isArray(s.gov_fund_proj)?0:1),0):0}),(0,r.jsx)("div",{children:"บริษัท"})]})]}),o&&(0,r.jsx)("div",{className:"max-h-[50vh] overflow-y-scroll pb-[150px] scrollbar-hide",children:(0,r.jsx)("div",{className:"flex flex-col gap-y-[10px] overflow-y-scroll",children:l.map(e=>(0,r.jsxs)("div",{className:"px-[15px] py-[10px] \n                    ".concat(Array.isArray(e.gov_fund_proj)?"bg-black text-white border-[3px] border-transparent":" text-black bg-white border-[3px] border-black ","\n                    flex flex-row rounded-[5px] justify-between items-center"),children:[(0,r.jsx)("div",{className:"truncate text-ellipsis typo-b5 typo-ibmplex leading-[150%]",children:"บริษัท ".concat(e.company_name_th)}),(0,r.jsxs)("div",{className:" flex flex-row gap-x-[12px] items-center flex-nowrap justify-end text-end",children:["shareholder"===s&&(0,r.jsx)("div",{className:"typo-b4 typo-ibmplex whitespace-nowrap",children:"".concat(Number(e.pct_share).toFixed(2)," %")}),(0,r.jsx)("svg",{className:"cursor-pointer hover:translate-x-2 transition-all",onClick:()=>a(e),width:20,height:18,viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M1 8.99477C1.87122 8.99477 5.13296 9.53505 6 9.45186C7.39793 9.31774 8.08663 8.82178 9.5 8.80946C11.8391 8.78908 12.403 8.75586 14.7274 8.87741C15.2641 8.90547 15.4925 8.93918 16 8.93918C15.4868 8.40451 15.6308 7.74585 15.1105 7.21583C13.1622 5.23111 7.12732 -0.544392 9.12792 1.39104C10.6243 2.83864 12.2582 4.19694 13.8144 5.58514C15.13 6.75868 16.585 7.89038 18.105 8.80946C18.4578 9.02275 19.3426 9.16673 18.8584 9.45186C17.498 10.253 16.1647 11.0273 14.8934 11.9597C13.3977 13.0568 11.8539 14.1073 10.3347 15.1716C10.2147 15.2557 10.0396 15.3779 9.96434 15.5052C9.61507 16.0965 8.77431 16.4117 8.47028 17",stroke:e.gov_fund_proj?"white":"black",strokeWidth:2,strokeLinecap:"round"})})]})]},"comp-data-".concat(e.company_id)))})})]})})},h=e=>{let{children:s}=e;return(0,r.jsx)("div",{className:"rounded-[100px] bg-gray-2 px-[10px] py-[5px]",children:s})},v=e=>{var s,l;let{open:i,onToggle:a}=e,[d,c]=n.useState({total:0,related:0,notRelated:0}),[x,v]=n.useState(!1),{selectedPerson:m,setDirectorData:j,directorData:f,setShareholderData:u,shareholderData:b}=(0,t.j)(),g=n.useCallback(async e=>{if(m){let s=[];m.countDirector>0&&s.push(o.AVB("https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/creden/director/".concat(e,".json"))),m.countCompShare>0&&s.push(o.AVB("https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/creden/shareholder/".concat(e,".json"))),await Promise.all(s).then(e=>{let s=e[0],l=e[1];j(s||[]),u(l||[])}).catch(e=>console.log(e))}},[j,u,m]);return n.useEffect(()=>{m&&g(m.Name.replaceAll(" ","-"))},[m,g]),n.useEffect(()=>{let e=(Array.isArray(f)?f.length:0)+(Array.isArray(b)?b.length:0),s=(Array.isArray(f)?f.reduce((e,s)=>e+(Array.isArray(s.gov_fund_proj)?1:0),0):0)+(Array.isArray(b)?b.reduce((e,s)=>e+(Array.isArray(s.gov_fund_proj)?1:0),0):0);c({total:e,related:s,notRelated:e-s})},[f,b]),console.log(m),(0,r.jsxs)("div",{className:"absolute w-full\n      rounded-[10px] py-[10px] px-[15px]\n      border-black border-[3px]\n      gap-y-[5px] gap-x-[10px]\n      ".concat(i?"top-[58px]":"top-[calc(100%-105px)]","\n      transition-all\n      h-header\n      bg-white\n      "),children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center mb-[10.5px]",children:[(0,r.jsx)("div",{className:"typo-h7 font-bold text-kondolar leadin-[140%]",children:null==m?void 0:m.Name}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"flex flex-row gap-x-[9px]",children:[(0,r.jsx)("div",{children:"สองเพิ่มเติม"}),(0,r.jsx)("svg",{className:"cursor-pointer",onClick:()=>a(),width:18,height:21,viewBox:"0 0 18 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("g",{transform:i?"rotate(180 9 10.5)":"",children:(0,r.jsx)("path",{d:"M8.99477 19.5C8.99477 18.6288 9.53505 15.367 9.45186 14.5C9.31774 13.1021 8.82178 12.4134 8.80946 11C8.78908 8.66088 8.75586 8.09703 8.87741 5.77256C8.90547 5.23592 8.93918 5.00754 8.93918 4.5C8.40451 5.0132 7.74585 4.86917 7.21583 5.38947C5.23111 7.33779 -0.544392 13.3727 1.39104 11.3721C2.83864 9.87574 4.19694 8.2418 5.58514 6.6856C6.75868 5.37002 7.89038 3.91503 8.80946 2.39497C9.02275 2.04222 9.16673 1.15737 9.45186 1.64156C10.253 3.00195 11.0273 4.33533 11.9597 5.60656C13.0568 7.10229 14.1073 8.64607 15.1716 10.1653C15.2557 10.2853 15.3779 10.4604 15.5052 10.5357C16.0965 10.8849 16.4117 11.7257 17 12.0297",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})})})]})})]}),(0,r.jsxs)("div",{className:"min-h-[54px] flex flex-row gap-x-[10px] ".concat(i?"none hidden":"visible block"),children:[(0,r.jsxs)("div",{className:"flex flex-col px-[7px] py-[5px] rounded-[5px] border-[2px] border-black items-center text-center h-fit",children:[(0,r.jsx)("div",{className:"typo-ibmplex typo-b7 font-bold",children:d.total}),(0,r.jsx)("div",{className:"typo-ibmplex typo-b7",children:"บริษัท"})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex flex-row gap-x-[5px] items-center typo-b7",children:[(0,r.jsx)("svg",{width:11,height:10,viewBox:"0 0 11 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("rect",{x:"0.5",width:10,height:10,rx:2,fill:"#090909"})}),(0,r.jsx)("div",{className:"font-bold",children:"เคย"}),(0,r.jsx)("div",{children:"รับโครงการรัฐ"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"font-bold",children:d.related})," บริษัท"]})]}),(0,r.jsxs)("div",{className:"flex flex-row gap-x-[5px] items-center typo-b7",children:[(0,r.jsx)("svg",{width:11,height:10,viewBox:"0 0 11 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("rect",{x:1,y:"0.5",width:9,height:9,rx:"1.5",stroke:"#090909"})}),(0,r.jsx)("div",{className:"font-bold",children:"ไม่เคย"}),(0,r.jsx)("div",{children:"รับโครงการรัฐ"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"font-bold",children:d.notRelated})," บริษัท"]})]})]})]})]}),(0,r.jsxs)("div",{className:"flex flex-row border-b-[1px] border-dashed border-b-gray-2 pb-[10px] gap-x-[10px]",children:[(0,r.jsx)("div",{className:"w-[70px] h-[70px] rounded-full border-[2px] border-black bg-cover bg-center",style:{backgroundImage:"url(".concat(null==m?void 0:m.Images)}}),(0,r.jsxs)("div",{className:"flex flex-col gap-y-[5px]",children:[(0,r.jsxs)("div",{className:"flex flex-row gap-x-[5px]",children:[(null==m?void 0:m.IsActive)&&!m.IsSenator&&!m.IsCabinet&&(0,r.jsx)(h,{children:"ผู้สมัคร 66"}),(null==m?void 0:m.IsCabinet)&&(0,r.jsx)(h,{children:"ค.ร.ม."}),(null==m?void 0:m.IsMp)&&(0,r.jsx)(h,{children:"ส.ส.62"}),(null==m?void 0:m.IsSenator)&&(0,r.jsx)(h,{children:"ส.ว."})]}),(0,r.jsxs)("div",{className:"flex flex-row gap-[5px] typo-b5",children:[(0,r.jsx)("div",{children:"พรรค"}),(null==m?void 0:m.Party)?(0,r.jsx)("div",{className:"font-bold",children:null==m?void 0:null===(s=m.Party)||void 0===s?void 0:s.Name}):(0,r.jsx)("div",{className:"font-bold",children:"ไม่มีสังกัด"}),(null==m?void 0:m.Party)&&(0,r.jsx)("div",{className:"w-[20px] h-[20px] rounded-full bg-cover bg-center",style:{backgroundImage:"url(".concat(null==m?void 0:null===(l=m.Party)||void 0===l?void 0:l.Images)}})]}),!(null==m?void 0:m.IsCabinet)&&!(null==m?void 0:m.IsSenator)&&(0,r.jsxs)("div",{className:"typo-b5",children:[" ","แบบ".concat(null==m?void 0:m.MpType," ").concat((null==m?void 0:m.MpType)==="แบ่งเขต"?"จังหวัด".concat(null==m?void 0:m.MpProvince," เขต").concat(null==m?void 0:m.MpZone):"")]})]})]}),(0,r.jsxs)("div",{className:"flex flex-col divide-y-[1px] divide-gray-2 divide-dashed",children:[(0,r.jsx)(p,{type:"shareholder",companyData:b,selectedPerson:m}),(0,r.jsx)(p,{type:"director",companyData:f,selectedPerson:m})]})]})};var m=l(7354);let j=a()(()=>l.e(383).then(l.bind(l,6383)),{loadableGenerated:{webpack:()=>[6383]}}),f=e=>{let{setSelectedPerson:s,setSelectedCompany:l}=(0,t.j)(),[i,a]=n.useState(!1),[o,c]=n.useState(!1);return(0,r.jsxs)("div",{className:"relative w-full h-screen flex flex-col",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-center items-center py-[10px] px-[10px]",children:[(0,r.jsx)("svg",{className:"cursor-pointer",width:20,height:19,onClick:()=>s(null),viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M19 9.50523C18.1288 9.50523 14.867 8.96495 14 9.04814C12.6021 9.18226 11.9134 9.67822 10.5 9.69053C8.16088 9.71092 7.59703 9.74414 5.27256 9.62259C4.73592 9.59453 4.50754 9.56082 4 9.56082C4.5132 10.0955 4.36917 10.7541 4.88947 11.2842C6.83779 13.2689 12.8727 19.0444 10.8721 17.109C9.37574 15.6614 7.7418 14.3031 6.1856 12.9149C4.87002 11.7413 3.41503 10.6096 1.89497 9.69054C1.54222 9.47725 0.657367 9.33327 1.14156 9.04814C2.50195 8.24705 3.83533 7.47274 5.10655 6.54033C6.60229 5.44324 8.14607 4.39268 9.66534 3.32835C9.78533 3.24429 9.96045 3.12214 10.0357 2.9948C10.3849 2.4035 11.2257 2.08825 11.5297 1.5",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})}),(0,r.jsx)("div",{className:"mx-auto",children:(0,r.jsx)("div",{className:"typo-b5",children:"ความเชื่อมโยงกับธุรกิจ"})}),(0,r.jsxs)("div",{className:"flex flex-row gap-x-[5px]",children:[(0,r.jsx)("button",{onClick(){l(null),s(null)},children:(0,r.jsx)(d.aV,{})}),(0,r.jsx)("button",{onClick(){c(!0)},children:(0,r.jsx)(d.ol,{})}),(0,r.jsx)(d.gZ,{})]})]}),(0,r.jsx)("div",{className:"flex-grow-1 h-full",children:(0,r.jsx)(j,{})}),(0,r.jsx)(v,{open:i,onToggle:()=>a(e=>!e)}),(0,r.jsx)(m.Z,{open:o,onClose:()=>c(!1)})]})};var u=f}}]);