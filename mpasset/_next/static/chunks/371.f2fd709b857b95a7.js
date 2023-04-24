"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{8371:function(e,s,l){l.r(s),l.d(s,{default:function(){return b}});var i=l(2322),n=l(5237),a=l.n(n),d=l(2784),r=l(7725),x=l(878),c=l(8996),t=l(2069),o=l(3620),h=l(8879),p=l.n(h);let v=a()(()=>l.e(193).then(l.bind(l,2193)),{loadableGenerated:{webpack:()=>[2193]}}),m=a()(()=>l.e(58).then(l.bind(l,9058)),{loadableGenerated:{webpack:()=>[9058]}}),j=e=>{let{open:s,onToggle:l}=e,[n,a]=d.useState({countGovFund:0,countShareholder:1,countPolShareholder:1,type:"director"}),[h,j]=d.useState(),[f,g]=d.useState(!1),{selectedCompany:b}=(0,r.j)();return d.useEffect(()=>{if(b){let e=Array.isArray(b.company_shareholder)?b.company_shareholder.length:1,s=Array.isArray(b.gov_fund_proj)?b.gov_fund_proj.length:0,l=Array.isArray(b.company_shareholder)?b.company_shareholder.reduce((e,s)=>e+(s.person?1:0),0):1;a({countShareholder:e,countGovFund:s,type:e>0?"shareholder":"director",countPolShareholder:l}),j((0,o.G)(null==b?void 0:b.submit_obj_big_type))}},[b]),console.log(b),(0,i.jsxs)("div",{className:"absolute w-full\n      rounded-[10px] py-[10px] px-[15px]\n      border-black border-[3px]\n      gap-y-[5px] gap-x-[10px]\n      ".concat(s?"top-[58px]":"top-[calc(100%-105px)] desktop:top-[58px]","\n      transition-all\n      h-header\n      bg-white\n      overflow-y-scroll \n      scrollbar-hide\n      pb-[100px]\n      max-w-[480px]\n      "),children:[(0,i.jsxs)("div",{className:"flex flex-row justify-between items-center mb-[10.5px]",children:[(0,i.jsx)("div",{className:"flex-shrink truncate typo-h7 font-bold text-kondolar leadin-[140%]",children:null==b?void 0:b.company_name_th}),(0,i.jsx)("div",{className:"flex-grow desktop:hidden",children:(0,i.jsxs)("div",{className:"flex flex-row flex-nowrap justify-end gap-x-[9px]",children:[(0,i.jsx)("div",{className:"whitespace-nowrap",children:"สองเพิ่มเติม"}),(0,i.jsx)("svg",{className:"cursor-pointer",onClick:()=>l(),width:18,height:21,viewBox:"0 0 18 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("g",{transform:s?"rotate(180 9 10.5)":"",children:(0,i.jsx)("path",{d:"M8.99477 19.5C8.99477 18.6288 9.53505 15.367 9.45186 14.5C9.31774 13.1021 8.82178 12.4134 8.80946 11C8.78908 8.66088 8.75586 8.09703 8.87741 5.77256C8.90547 5.23592 8.93918 5.00754 8.93918 4.5C8.40451 5.0132 7.74585 4.86917 7.21583 5.38947C5.23111 7.33779 -0.544392 13.3727 1.39104 11.3721C2.83864 9.87574 4.19694 8.2418 5.58514 6.6856C6.75868 5.37002 7.89038 3.91503 8.80946 2.39497C9.02275 2.04222 9.16673 1.15737 9.45186 1.64156C10.253 3.00195 11.0273 4.33533 11.9597 5.60656C13.0568 7.10229 14.1073 8.64607 15.1716 10.1653C15.2557 10.2853 15.3779 10.4604 15.5052 10.5357C16.0965 10.8849 16.4117 11.7257 17 12.0297",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})})})]})})]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsxs)("div",{className:"flex flex-row gap-x-[10px] ".concat(s?"none hidden":"visible block","\n          items-center min-h-[50px]"),children:[(0,i.jsxs)("div",{className:"w-[40px] h-[40px] flex flex-col px-[7px] py-[5px] rounded-full border-[2px] border-black items-center text-center",children:[(0,i.jsx)("div",{className:"typo-ibmplex typo-b7 font-bold leading-[100%]",children:n.countShareholder}),(0,i.jsx)("div",{className:"typo-ibmplex typo-b7",children:"คน"})]}),(0,i.jsx)("div",{children:(0,i.jsxs)(i.Fragment,{children:[n.countGovFund>0?(0,i.jsxs)("div",{className:"flex flex-row gap-x-[5px] items-center typo-b7",children:[(0,i.jsx)("svg",{width:11,height:10,viewBox:"0 0 11 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("rect",{x:"0.5",width:10,height:10,rx:2,fill:"#090909"})}),(0,i.jsx)("div",{className:"font-bold",children:"เคย"}),(0,i.jsx)("div",{children:"รับโครงการรัฐ"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"font-bold",children:n.countGovFund})," โครงการ"]})]}):(0,i.jsxs)("div",{className:"flex flex-row gap-x-[5px] items-center typo-b7",children:[(0,i.jsx)("svg",{width:11,height:10,viewBox:"0 0 11 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("rect",{x:1,y:"0.5",width:9,height:9,rx:"1.5",stroke:"#090909"})}),(0,i.jsx)("div",{className:"font-bold",children:"ไม่เคย"}),(0,i.jsx)("div",{children:"รับโครงการรัฐ"})]}),(0,i.jsxs)("div",{className:"inline-flex gap-x-[5px]",children:[(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("svg",{width:15,height:16,viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M13.6082 7.2008C13.535 6.95217 13.301 7.40847 13.1372 7.20957C13.0466 6.4637 12.8828 5.72661 12.5844 5.08896C12.2714 4.41329 11.7888 3.87216 11.2916 3.36322C10.7943 2.85427 10.221 2.39212 9.5629 2.10255C8.90478 1.81297 8.21156 1.5 7.46276 1.5C6.71397 1.5 6.02952 1.83345 5.37432 2.1201C4.71913 2.40675 4.04638 2.73434 3.53158 3.26084C3.01678 3.78734 2.58389 4.37819 2.27091 5.05386C1.95794 5.72953 1.90236 6.48125 1.81169 7.22712C1.64789 7.42602 1.26179 6.91707 1.18574 7.16277C0.940044 7.99347 0.93712 8.09584 1.18282 8.92654C1.25594 9.17516 1.56599 8.73057 1.72686 8.92654C1.81754 9.67241 1.97256 10.389 2.27384 11.0296C2.58681 11.7053 3.01971 12.3312 3.51696 12.8402C4.01421 13.3491 4.7279 13.6416 5.38895 13.9341C6.05 14.2266 6.71689 14.525 7.46569 14.525C8.21449 14.525 8.90771 14.2763 9.56583 13.9868C10.224 13.6972 10.7855 13.2526 11.3003 12.7261C11.8151 12.1996 12.2539 11.6614 12.5698 10.9887C12.8857 10.3159 13.1168 9.67534 13.2104 8.93239C13.3742 8.73349 13.5877 9.15176 13.7456 8.94702C14.2721 8.26257 13.8568 8.02857 13.6111 7.19787L13.6082 7.2008Z",stroke:"#090909",strokeWidth:"1.01144",strokeMiterlimit:10,strokeLinejoin:"round"})}),(0,i.jsx)("div",{className:"absolute text-[6px] font-bold inset-0 top-[4px] left-[5px]",children:n.countPolShareholder})]}),(0,i.jsx)("div",{className:"typo-igmplex typo-b7",children:"= มีนักการเมืองเกี่ยวข้องกับบริษัทนั้นอีกกี่คน"})]})]})})]}),(0,i.jsxs)("div",{children:[n.countGovFund>0?(0,i.jsxs)("div",{className:"flex flex-row gap-x-[5px] items-center typo-b5",children:[(0,i.jsx)("svg",{width:11,height:10,viewBox:"0 0 11 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("rect",{x:"0.5",width:10,height:10,rx:2,fill:"#090909"})}),(0,i.jsx)("div",{className:"font-bold",children:"เคย"}),(0,i.jsx)("div",{children:"รับโครงการรัฐ"}),(0,i.jsxs)("div",{className:"ml-auto",children:[(0,i.jsx)("span",{className:"font-bold",children:n.countGovFund})," โครงการ"]})]}):(0,i.jsxs)("div",{className:"flex flex-row gap-x-[5px] items-center typo-b5",children:[(0,i.jsx)("svg",{width:11,height:10,viewBox:"0 0 11 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("rect",{x:1,y:"0.5",width:9,height:9,rx:"1.5",stroke:"#090909"})}),(0,i.jsx)("div",{className:"font-bold",children:"ไม่เคย"}),(0,i.jsx)("div",{children:"รับโครงการรัฐ"})]}),(0,i.jsxs)("div",{className:"typo-b5 typo-ibmplex flex flex-col",children:[(0,i.jsxs)("div",{className:"inline-flex gap-x-[7px]",children:[(0,i.jsx)("div",{className:"w-1/2",children:"หมวดธุรกิจ"}),(0,i.jsx)("div",{children:null==h?void 0:h.icon}),(0,i.jsx)("div",{className:"font-bold",children:null==h?void 0:h.name})]}),(0,i.jsxs)("div",{className:"inline-flex gap-x-[7px] py-[5px]",children:[(0,i.jsx)("div",{className:"w-1/2",children:"วันที่จดทะเบียน"}),(0,i.jsx)("div",{className:"font-bold text-left",children:p()(null==b?void 0:b.reg_date,["D/M/YYYY","DD/MM/YYYY"]).subtract(543,"year").locale("th").format("D MMMM BBBB")})]}),(0,i.jsxs)("div",{className:"inline-flex gap-x-[7px] py-[5px] border-y-[1px] border-gray-2 border-dashed",children:[(0,i.jsx)("div",{className:"w-1/2",children:"มูลค่าธุรกิจ"}),(0,i.jsx)("div",{className:"font-bold text-left",children:(0,t.B0)((null==b?void 0:b.company_value)||0).replace("B"," พันล้านบาท").replace("M"," ล้านบาท")})]})]}),(0,i.jsxs)("div",{className:"flex flex-col",children:["shareholder"===n.type&&(0,i.jsxs)("div",{className:"py-[17px]",children:[(0,i.jsxs)("div",{className:"inline-flex gap-x-[7px] items-center",children:[(0,i.jsx)(x.xR,{}),(0,i.jsx)("div",{className:"font-bold typo-b5",children:"สัดส่วนหุ้นของบริษัท"})]}),(0,i.jsxs)("div",{className:"inline-flex gap-x-[10px] typo-b7 items-center",children:[(0,i.jsxs)("div",{className:"inline-flex gap-x-[5px] items-center",children:[(0,i.jsx)("div",{className:"w-[10px] h-[10px] rounded-[2px] bg-gray-2"}),(0,i.jsx)("div",{className:"leading-[150%]",children:"เกี่ยวกับนักการเมือง"})]}),(0,i.jsxs)("div",{className:"inline-flex gap-x-[5px] items-center",children:[(0,i.jsx)("div",{className:"w-[10px] h-[10px] rounded-[2px] bg-gray-3"}),(0,i.jsx)("div",{className:"leading-[150%]",children:"ไม่เกี่ยวกับนักการเมือง"})]})]}),(0,i.jsx)("div",{children:(0,i.jsx)(v,{})}),(0,i.jsx)("div",{className:"flex flex-col",children:b&&Array.isArray(b.company_shareholder)&&b.company_shareholder.sort((e,s)=>s.pct_share-e.pct_share).map(e=>{var s;return(0,i.jsxs)("div",{className:"inline-flex justify-between items-center border-b-[2px] border-b-black py-[9.5px] gap-x-[10px]",children:[(0,i.jsx)("div",{className:"flex-shrink-0 w-[40px] h-[40px]  bg-cover bg-center rounded-full",style:{backgroundImage:"url('".concat((null===(s=e.person)||void 0===s?void 0:s.Images)||"/mpasset/design_assets/profile_pic.jpg","')")}}),(0,i.jsxs)("div",{className:"flex-grow typo-b5 text-left",children:[e.Firstname," ",e.Lastname]}),(0,i.jsxs)("div",{className:"whitespace-nowrap font-bold typo-b4",children:[Number(e.pct_share).toFixed(2)," %"]})]},"shareholder-".concat(e.Firstname.replaceAll(" ","-"),"-").concat(e.Lastname.replaceAll(" ","-")))})})]}),(0,i.jsxs)("div",{className:"py-[17px]",children:[(0,i.jsxs)("div",{className:"inline-flex gap-x-[7px] items-center",children:[(0,i.jsx)(x.xR,{}),(0,i.jsx)("div",{className:"font-bold typo-b5",children:"รายได้รวม 4 ปีของบริษัท"})]}),(0,i.jsx)("div",{className:"typo-b7",children:"โดยรายได้ของบริษัทมาจากหลายช่องทาง"}),(0,i.jsx)(m,{}),(0,i.jsxs)("div",{className:"inline-flex gap-x-[10px]",children:[(0,i.jsx)("div",{className:"h-[20px] w-[2px] bg-highlight-2"}),(0,i.jsx)("div",{children:"วันที่ลงนามในสัญญาโครงการรัฐ"})]}),(0,i.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,i.jsxs)("div",{children:["รับโครงการรัฐ ",(0,i.jsx)("span",{className:"font-bold",children:n.countGovFund})," โครงการ"]}),(0,i.jsx)("div",{children:n.countGovFund>0&&(f?(0,i.jsx)(c.UO,{onClick:()=>g(!1)}):(0,i.jsx)(c.M0,{onClick:()=>g(!0)}))})]})]}),f&&(0,i.jsx)("div",{className:"flex flex-col gap-y-[10px] ",children:null==b?void 0:b.gov_fund_proj.map(e=>(0,i.jsxs)("div",{className:"px-[15px] py-[10px] \n                  flex flex-row justify-between border-b-highlight-2 border-b-[1px]",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:" font-bold typo-b5 typo-ibmplex leading-[150%]",children:"โครงการ ".concat(e.ชื่อโครงการฯ)}),(0,i.jsxs)("div",{className:"typo-b7",children:[(0,i.jsxs)("div",{className:"",children:["หน่วยงานที่เกี่ยวข้อง: ",e.ชื่อหน่วยงาน]}),(0,i.jsxs)("div",{className:"",children:["วันที่ลงนามในสัญญา: ",p()(e.วันที่ลงนามในสัญญา,["YYYY-M-D","YYYY-MM-DD"]).add(543,"year").locale("th").format("D MMMM YYYY")]})]})]}),(0,i.jsxs)("div",{className:"whitespace-pre-wrap text-right ",children:[(0,i.jsx)("div",{className:"font-bold typo-b4",children:(0,t.B0)(e.งบประมาณในสัญญา_บาท).slice(0,-1)}),(0,i.jsx)("div",{className:"typo-b7 whitespace-nowrap",children:(0,t.B0)(e.งบประมาณในสัญญา_บาท).slice(-1).replace("B"," พันล้านบาท").replace("M"," ล้านบาท").replace("K"," พันบาท").replace("฿","บาท")})]})]},"gov-fund-proj-".concat(e.เลขที่สัญญา)))})]})]})]}),(0,i.jsx)("div",{className:"flex flex-col divide-y-[1px] divide-gray-2 divide-dashed"})]})},f=a()(()=>l.e(168).then(l.bind(l,6168)),{loadableGenerated:{webpack:()=>[6168]}}),g=e=>{let{selectedCompany:s,setSelectedCompany:l,setSelectedPerson:n}=(0,r.j)(),[a,c]=d.useState(!1);return(0,i.jsxs)("div",{className:"relative w-full h-screen flex flex-col",children:[(0,i.jsxs)("div",{className:"flex flex-row justify-center items-center py-[10px] px-[10px]",children:[(0,i.jsx)("svg",{className:"cursor-pointer",width:20,height:19,onClick:()=>l(null),viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M19 9.50523C18.1288 9.50523 14.867 8.96495 14 9.04814C12.6021 9.18226 11.9134 9.67822 10.5 9.69053C8.16088 9.71092 7.59703 9.74414 5.27256 9.62259C4.73592 9.59453 4.50754 9.56082 4 9.56082C4.5132 10.0955 4.36917 10.7541 4.88947 11.2842C6.83779 13.2689 12.8727 19.0444 10.8721 17.109C9.37574 15.6614 7.7418 14.3031 6.1856 12.9149C4.87002 11.7413 3.41503 10.6096 1.89497 9.69054C1.54222 9.47725 0.657367 9.33327 1.14156 9.04814C2.50195 8.24705 3.83533 7.47274 5.10655 6.54033C6.60229 5.44324 8.14607 4.39268 9.66534 3.32835C9.78533 3.24429 9.96045 3.12214 10.0357 2.9948C10.3849 2.4035 11.2257 2.08825 11.5297 1.5",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})}),(0,i.jsx)("div",{className:"mx-auto",children:(0,i.jsx)("div",{className:"typo-b5",children:"ความเชื่อมโยงกับธุรกิจ"})}),(0,i.jsxs)("div",{className:"flex flex-row gap-x-[5px]",children:[(0,i.jsx)("button",{onClick:()=>{l(null),n(null)},children:(0,i.jsx)(x.aV,{})}),(0,i.jsx)(x.ol,{}),(0,i.jsx)(x.gZ,{})]})]}),(0,i.jsx)("div",{className:"flex-grow-1 h-full",children:s&&(0,i.jsx)(f,{})}),(0,i.jsx)(j,{open:a,onToggle:()=>c(e=>!e)})]})};var b=g}}]);