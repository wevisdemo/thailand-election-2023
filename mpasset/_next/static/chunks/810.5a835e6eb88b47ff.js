(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[810],{6386:function(e){function t(e,t,l){function a(){var c=Date.now()-n;c<t&&c>=0?r=setTimeout(a,t-c):(r=null,l||(o=e.apply(i,s),i=s=null))}null==t&&(t=100);var r,s,i,n,o,c=function(){i=this,s=arguments,n=Date.now();var c=l&&!r;return r||(r=setTimeout(a,t)),c&&(o=e.apply(i,s),i=s=null),o};return c.clear=function(){r&&(clearTimeout(r),r=null)},c.flush=function(){r&&(o=e.apply(i,s),i=s=null,clearTimeout(r),r=null)},c}t.debounce=t,e.exports=t},1892:function(e,t,l){"use strict";var a=l(2322),r=l(2784),s=l(7725);let i=e=>{let{open:t,onClose:l}=e,{person:i,yourCandidatePerson:n,selectedDataSet:o,setSelectedPerson:c}=(0,s.j)(),[d,x]=r.useState(""),[p,h]=r.useState(i);return r.useEffect(()=>{if(i.length>0&&n.length>0){let e="นักการเมือง 62"===o?i:n;if(""!==d){let t=e.filter(e=>e.Name.includes(d));"object"==typeof t&&h(t)}else h(e)}},[d,i,n,o]),(0,a.jsxs)("div",{className:"absolute inset-0 overflow-x-hidden overflow-y-scroll \n      bg-white\n      ".concat(t?"visible opacity-100":"invisible opacity-0"," transition-all"),children:[(0,a.jsxs)("div",{className:"flex flex-row items-center px-[10px] gap-x-[8px] py-[5px]",children:[(0,a.jsx)("svg",{width:20,height:18,className:"cursor-pointer hover:-translate-x-1 transition-all",onClick:()=>l(),viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M19 9.00523C18.1288 9.00523 14.867 8.46495 14 8.54814C12.6021 8.68226 11.9134 9.17822 10.5 9.19053C8.16088 9.21092 7.59703 9.24414 5.27256 9.12259C4.73592 9.09453 4.50754 9.06082 4 9.06082C4.5132 9.59549 4.36917 10.2541 4.88947 10.7842C6.83779 12.7689 12.8727 18.5444 10.8721 16.609C9.37574 15.1614 7.7418 13.8031 6.1856 12.4149C4.87002 11.2413 3.41503 10.1096 1.89497 9.19054C1.54222 8.97725 0.657367 8.83327 1.14156 8.54814C2.50195 7.74705 3.83533 6.97274 5.10655 6.04033C6.60229 4.94324 8.14607 3.89268 9.66534 2.82835C9.78533 2.74429 9.96045 2.62214 10.0357 2.4948C10.3849 1.9035 11.2257 1.58825 11.5297 1",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})}),(0,a.jsxs)("div",{className:"px-[15px] py-[5px] inline-flex gap-x-[5px] items-center border-[3px] rounded-[50px] border-black w-full cursor-pointer",children:[(0,a.jsx)("input",{type:"text",className:" border-transparent focus:border-transparent focus:ring-0 p-0 flex-grow typo-ibmplex typo-b5 leading-[150%]",placeholder:"ค้นหาชื่อนักการเมือง",value:d,onChange:e=>x(e.target.value)}),(0,a.jsxs)("svg",{width:19,height:21,viewBox:"0 0 19 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M1.83471 9.59463C1.23317 5.256 2.84023 1 7.54379 1C10.8817 1 12.8956 2.14215 14.0071 3.83806C15.3957 5.95668 16 10.5 12 13.4261C9.00001 15 7.5693 14.574 5.50001 14C4.15877 13.6279 2.09016 11.437 1.83471 9.59463Z",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"}),(0,a.jsx)("path",{d:"M11.7864 12.761C12.6911 13.2133 13.1092 13.8446 13.7142 14.5168C14.3766 15.2528 14.7908 16.667 15.5316 17.2597C16.4331 17.9809 17.1718 19.0385 17.8033 19.9857",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})]})]})]}),(0,a.jsx)("div",{className:"flex flex-col divide-y-2 divide-gray-3 divide-dashed",children:p.map((e,t)=>(0,a.jsxs)("button",{className:"py-[5.5px] px-[20px] w-full text-left",onClick:()=>{l(),c(e)},children:[(0,a.jsx)("div",{className:"typo-b4 typo-ibmplex leading-[150%]",children:e.Name}),(0,a.jsxs)("div",{className:"typo-b7 typo-ibmplex text-gray-3 leading-[150%] inline-flex gap-x-[5px]",children:[!e.IsCabinet&&!e.IsSenator&&(0,a.jsxs)("div",{children:["นักการเมือง 62"===o?"ส.ส. 62":"ผู้สมัคร 66"," ",e.Party?"พรรค ".concat(e.Party.Name):""," แบบ",e.MpType," ","แบ่งเขต"===e.MpType?"จังหวัด".concat(e.MpProvince," เขต ").concat(e.MpZone):""," "]}),e.IsPmCandidate&&(0,a.jsx)("div",{children:"แคนดิเดตนายก"}),e.IsCabinet&&(0,a.jsx)("div",{children:"ค.ร.ม."}),e.IsSenator&&(0,a.jsx)("div",{children:"ส.ว."})]})]},"search-result-".concat(e.Id,"-").concat(t)))})]})};t.Z=i},2810:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return _}});var a=l(2322),r=l(2784),s=l(8996);let i=e=>(0,a.jsxs)("div",{className:"flex flex-row items-center justify-center px-[10px] py-[5px] gap-x-[5px] bg-[#090909] bg-opacity-50 rounded-[20px] w-fit mx-auto text-white",children:[(0,a.jsx)(s.oF,{}),(0,a.jsx)("div",{className:"typo-b6 typo-ibmplex leading-[150%",children:"คลิกดูแต่ละคน"})]});var n=l(7673),o=l(7725);let c=e=>{let{width:t,height:l,scrollControl:s}=e,{filterPerson:i}=(0,o.j)();return r.useEffect(()=>{if(i.length>0){let e=n.Ys(".chart-nav").attr("width",t).attr("height",l),a=n.tiA().domain(i.map((e,t)=>"".concat(t))).range([0,l]),[r,s]=n.Wem(i,e=>e.totalPctShare),o=n.BYU().domain([r||-20,s||100]).range([0,t]);e.selectAll("rect").data(i).join("rect").attr("x",e=>e.totalPctShare<=0?o(e.totalPctShare):o(0)).attr("y",(e,t)=>a("".concat(t))).attr("width",e=>e.totalPctShare<=0?o(0)-o(e.totalPctShare):o(e.totalPctShare)-o(0)).attr("height",a.bandwidth()).attr("fill",e=>e.Party?e.Party.Color:"black")}},[i,l,t]),r.useLayoutEffect(()=>{if(i.length>0){if(0===s.scrollHeight&&0===s.clientHeight&&0===s.scrollTop)return;let e=n.Ys(".chart-nav"),a=n.BYU().domain([0,s.scrollHeight]).range([0,l]);e.select(".scroll-control").remove(),e.append("rect").attr("class","scroll-control").attr("width",t).attr("height",a(s.clientHeight)).attr("fill","#F6FF94").attr("opacity",".5").attr("stroke","black").attr("stroke-weight","2px").attr("x",0).attr("y",a(s.scrollTop))}},[i,s,l,t]),r.useEffect(()=>{i.length>0&&n.Ys(".chart-nav")},[i,s]),(0,a.jsx)("div",{className:"w-full h-full",children:(0,a.jsx)("svg",{className:"chart-nav",children:(0,a.jsx)("rect",{className:"scroll-control"})})})};var d=l(2069),x=l(8678);let p=e=>{let{width:t,height:l,onScroll:s}=e,{filterPerson:i,setSelectedPerson:c,party:p}=(0,o.j)(),{currentStep:h,setCurrentStep:u}=(0,x.rN)(),m=e=>{s({scrollHeight:e.currentTarget.scrollHeight,scrollTop:e.currentTarget.scrollTop,clientHeight:e.currentTarget.clientHeight})},f=r.useCallback(e=>{let t=p.find(t=>t.Name===e.PartyName);t?c({...e,Party:{Id:t.Id,Name:t.Name,Color:t.Color,Images:Array.isArray(t.Images)?t.Images[0].url:null}}):c(e),0===h?u(1):u(5)},[h,p,u,c]);return r.useLayoutEffect(()=>{if(i.length>0){let e=i.length+2,a=40*e,r=n.Ys(".chart-main").attr("width",t).attr("height",Math.max(a,l)),s=[...i.map(e=>({...e}))],o=n.tiA().domain(s.map((e,t)=>"".concat(t))).range([0,40*e]).paddingInner(.5).paddingOuter(.2),c=n.BYU().domain([-10,30]).range([0,t]);r.selectAll("line").remove(),r.append("line").attr("x1",c(0)).attr("y1",0).attr("x2",c(0)).attr("y2",Math.max(a,l)).attr("stroke","black"),r.selectAll("defs").remove();let x=n.Ys("#tooltip-main-nav").style("position","absolute").style("visibility","hidden").style("background-color","white").style("border","solid").style("border-width","1px").style("border-radius","5px").style("padding","10px"),h=r.selectAll("g").data(s).join("g").attr("transform",(e,t)=>"translate(0, ".concat(o("".concat(t)),")")).attr("class","cursor-pointer").on("click",(e,t)=>f(t)).on("mouseover",function(e,t){x.style("visibility","visible"),x.html(t.Name)}).on("mousemove",function(e){return x.style("top",e.offsetY+10+"px").style("left",e.offsetX+10+"px")}).on("mouseout",function(){return x.style("visibility","hidden")});h.selectAll("rect").remove(),h.selectAll("text").remove();let u=e=>e<=0?c(0)-c(e):c(e)-c(0);h.append("rect").attr("x",e=>e.totalPctShare<0?c(e.totalPctShare):c(0)).attr("y",0).attr("width",e=>u(e.totalPctShare)).attr("height",e=>o.bandwidth()).attr("fill",e=>e.PartyName?"url(#pattern_party_color_".concat(e.PartyName,")"):"black"),h.selectAll("defs").remove();let m=h.filter(e=>"string"==typeof e.Images&&""!==e.Images).append("svg:defs");m.append("svg:pattern").attr("id",e=>"pattern_person_avatar_"+e.Name.replaceAll(" ","-")).attr("width",1).attr("height",1).attr("patternContentUnits","objectBoundingBox").append("use").attr("xlink:href",(e,t)=>"#person_avatar"+t).attr("transform","scale(0.0025)"),m.append("svg:image").attr("id",(e,t)=>"person_avatar"+t).attr("xlink:href",e=>String(e.Images)).attr("width",400).attr("height",400).attr("x",0).attr("y",0),h.selectAll("circle").remove(),h.append("circle").attr("cx",e=>e.totalPctShare<25?e.totalPctShare<0?c(0)+15+5:c(0)-15-5:c(e.totalPctShare)-17).attr("cy",.5*o.bandwidth()).attr("r",15).attr("fill",e=>"string"==typeof e.Images&&""!==e.Images?"url(#pattern_person_avatar_".concat(e.Name.replaceAll(" ","-"),")"):"url(#pattern_person_avatar_default)").attr("stroke","black"),h.filter(e=>"string"==typeof e.PartyName).append("circle").attr("cx",e=>e.totalPctShare<25?e.totalPctShare<0?c(0)+5:c(0)-30-5:c(e.totalPctShare)-30+2.5).attr("cy",o.bandwidth()).attr("r",5).attr("fill",e=>e.PartyName?"url(#pattern_party_".concat(e.PartyName,")"):"none"),h.append("text").attr("x",e=>e.totalPctShare<25?e.totalPctShare<0?c(0)+30+10:c(e.totalPctShare)+7.5:c(e.totalPctShare)-30-5).attr("y",.5*o.bandwidth()).attr("rx","2").attr("fill",e=>e.totalPctShare<25?"black":"white").attr("text-anchor",e=>e.totalPctShare<25?"start":"end").attr("alignment-baseline","middle").attr("class","typo-b7").text(e=>0!==e.totalValueShare?(0,d.B0)(e.totalValueShare):e.countDirector>0?"เกี่ยวข้องกับธุรกิจแต่ไม่มีหุ้นอยู่":"ไม่เกี่ยวข้องกับธุรกิจ");let g=r.append("svg:defs");g.append("svg:pattern").attr("id","pattern_person_avatar_default").attr("width",1).attr("height",1).attr("patternContentUnits","objectBoundingBox").append("use").attr("xlink:href","#person_avatar_default").attr("transform","scale(0.0025)"),g.append("svg:image").attr("id","person_avatar_default").attr("xlink:href","/mpasset/design_assets/profile_pic.jpg").attr("width",400).attr("height",400).attr("x",0).attr("y",0);let v=g.selectAll(null).data(p),y=v.enter();y.append("svg:pattern").attr("id",e=>"pattern_party_".concat(e.Name)).attr("width",1).attr("height",1).attr("patternContentUnits","objectBoundingBox").append("use").attr("xlink:href",e=>"#party_avatar_".concat(e.Name)).attr("transform","scale(0.0025)"),y.append("svg:image").attr("id",e=>"party_avatar_".concat(e.Name)).attr("xlink:href",e=>e.Images?String(e.Images[0].url):"").attr("width",400).attr("height",400).attr("x",0).attr("y",0),y.append("linearGradient").attr("id",e=>"pattern_party_color_".concat(e.Name)).append("stop").attr("stop-color",e=>e.Color)}},[i,l,t,c,h,u,p,f]),(0,a.jsxs)("div",{className:"overflow-y-scroll overflow-x-hidden relative\n      border-l-[1px] border-l-black \n      ",style:{maxHeight:"".concat(l,"px")},onScroll:e=>m(e),children:[(0,a.jsx)("div",{className:"absolute top-0 inset-x-0 h-1/2 pointer-events-none tour1-first-step  tour3-first-step"}),(0,a.jsx)("svg",{className:"chart-main"}),(0,a.jsx)("div",{id:"tooltip-main-nav"})]})};var h=l(1892),u=l(3620),m=l(878),f=l(5536);let g=e=>{let{open:t,onClose:l}=e,[s,i]=r.useState(""),[c,d]=r.useState([]),[p,h]=r.useState([]),[m,g]=r.useState(100),{selectedDataSet:v,setSelectedBusinessType:y}=(0,o.j)(),j=r.useCallback(async()=>{await n.gyn("https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/company_type_count.csv").then(e=>{let t=e.slice(0,e.length);if(t){t.forEach(e=>{e.type=String(e.type),e.count=Number(e.count)});let e=n.Fp7(t,e=>e.count)||100;g(e);let l=u._.map(l=>{var a;let r=(null===(a=t.find(e=>e.type===l.code))||void 0===a?void 0:a.count)||0;return{...l,count:r,percentage:r/e*100}});d(l.sort((e,t)=>t.count-e.count)),h(l)}})},[]),b=r.useCallback(async()=>{await n.gyn("https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/yourcandidate/company_type_count.csv").then(e=>{let t=e.slice(0,e.length);if(t){t.forEach(e=>{e.type=String(e.type),e.count=Number(e.count)});let e=n.Fp7(t,e=>e.count)||100;g(e);let l=u._.map(l=>{var a;let r=(null===(a=t.find(e=>e.type===l.code))||void 0===a?void 0:a.count)||0;return{...l,count:r,percentage:r/e*100}}),a=[...l.slice(0,1),...l.slice(1).sort((e,t)=>t.count-e.count)];d(a),h(a)}})},[]);r.useEffect(()=>{if(""!==s&&c.length>0){let e=c.filter(e=>e.name.includes(s));"object"==typeof e&&h(e)}else h(c)},[s,c]),r.useEffect(()=>{"นักการเมือง 62"===v?j():b()},[j,b,v]);let{isOpen:w,setIsOpen:N}=(0,x.rN)();return(0,a.jsxs)("div",{className:"absolute inset-0 overflow-x-hidden overflow-y-scroll \n      bg-white z-30\n      flex flex-col\n      ".concat(t?"visible opacity-100":"hidden opacity-0"," transition-all"),children:[(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"flex flex-row items-center px-[10px] gap-x-[8px] py-[5px]",children:[(0,a.jsx)("svg",{width:20,height:18,onClick:()=>l(),viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M19 9.00523C18.1288 9.00523 14.867 8.46495 14 8.54814C12.6021 8.68226 11.9134 9.17822 10.5 9.19053C8.16088 9.21092 7.59703 9.24414 5.27256 9.12259C4.73592 9.09453 4.50754 9.06082 4 9.06082C4.5132 9.59549 4.36917 10.2541 4.88947 10.7842C6.83779 12.7689 12.8727 18.5444 10.8721 16.609C9.37574 15.1614 7.7418 13.8031 6.1856 12.4149C4.87002 11.2413 3.41503 10.1096 1.89497 9.19054C1.54222 8.97725 0.657367 8.83327 1.14156 8.54814C2.50195 7.74705 3.83533 6.97274 5.10655 6.04033C6.60229 4.94324 8.14607 3.89268 9.66534 2.82835C9.78533 2.74429 9.96045 2.62214 10.0357 2.4948C10.3849 1.9035 11.2257 1.58825 11.5297 1",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})}),(0,a.jsxs)("div",{className:"px-[15px] py-[5px] inline-flex gap-x-[5px] items-center border-[3px] rounded-[50px] border-black w-full tour2-second-step",children:[(0,a.jsx)("input",{type:"text",className:" border-transparent focus:border-transparent focus:ring-0 p-0 flex-grow typo-ibmplex typo-b5 leading-[150%]",placeholder:"ค้นหาหมวดธุรกิจ",value:s,onChange:e=>i(e.target.value),onFocus:()=>{w&&N(!1)}}),(0,a.jsxs)("svg",{width:19,height:21,viewBox:"0 0 19 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M1.83471 9.59463C1.23317 5.256 2.84023 1 7.54379 1C10.8817 1 12.8956 2.14215 14.0071 3.83806C15.3957 5.95668 16 10.5 12 13.4261C9.00001 15 7.5693 14.574 5.50001 14C4.15877 13.6279 2.09016 11.437 1.83471 9.59463Z",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"}),(0,a.jsx)("path",{d:"M11.7864 12.761C12.6911 13.2133 13.1092 13.8446 13.7142 14.5168C14.3766 15.2528 14.7908 16.667 15.5316 17.2597C16.4331 17.9809 17.1718 19.0385 17.8033 19.9857",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})]})]})]})}),(0,a.jsx)("div",{className:"flex flex-col divide-y-2 divide-gray-3 divide-dashed h-full overflow-scroll",children:p.length>0?p.map(e=>(0,a.jsxs)("button",{className:" w-full text-left py-[16px] px-[20px] relative",onClick:()=>{l(),y(e)},children:["all"!==e.code&&(0,a.jsx)("div",{className:"absolute inset-0 -z-10 bg-highlight-1",style:{width:"".concat(e.percentage,"%")}}),(0,a.jsxs)("div",{className:" flex flex-row justify-between ",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[e.icon,(0,a.jsx)("div",{className:"typo-b4 typo-ibmplex leading-[150%] ml-[12px]",children:e.name})]}),"all"!==e.code&&(0,a.jsx)("div",{children:e.count})]})]},"search-result-".concat(e.code))):(0,a.jsxs)("div",{className:"flex flex-col justify-center items-center gap-y-[20px]",children:[(0,a.jsx)("div",{className:"w-[116.57px] h-[138.45px]",children:(0,a.jsx)(f.u,{})}),(0,a.jsxs)("div",{className:"typo-ibmplex text-center",children:[(0,a.jsx)("div",{className:"typo-b4 ",children:"ไม่พบสิ่งที่ค้นหา"}),(0,a.jsx)("div",{className:"typo-b6",children:"ลองตรวจสอบตัวสะกด หรือ หาคำใกล้เคียง"})]})]})})]})},v=e=>{let{open:t,onClose:l}=e,{party:s,setSelectedParty:i,selectedDataSet:n}=(0,o.j)(),[c,d]=r.useState(""),[x,p]=r.useState(s);return r.useEffect(()=>{let e=s;if("ผู้สมัคร 66"===n&&(e=s.slice(3)),""!==c&&u._.length>0){let t=e.filter(e=>e.Name.includes(c));"object"==typeof t&&p(t)}else p(e)},[c,s,n]),(0,a.jsxs)("div",{className:"absolute inset-0 overflow-x-hidden overflow-y-scroll \n      bg-white z-30 flex flex-col\n      ".concat(t?"visible opacity-100":"hidden opacity-0"," transition-all"),children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex flex-row items-center px-[10px] gap-x-[8px] py-[5px]",children:[(0,a.jsx)("svg",{width:20,height:18,onClick:()=>l(),viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M19 9.00523C18.1288 9.00523 14.867 8.46495 14 8.54814C12.6021 8.68226 11.9134 9.17822 10.5 9.19053C8.16088 9.21092 7.59703 9.24414 5.27256 9.12259C4.73592 9.09453 4.50754 9.06082 4 9.06082C4.5132 9.59549 4.36917 10.2541 4.88947 10.7842C6.83779 12.7689 12.8727 18.5444 10.8721 16.609C9.37574 15.1614 7.7418 13.8031 6.1856 12.4149C4.87002 11.2413 3.41503 10.1096 1.89497 9.19054C1.54222 8.97725 0.657367 8.83327 1.14156 8.54814C2.50195 7.74705 3.83533 6.97274 5.10655 6.04033C6.60229 4.94324 8.14607 3.89268 9.66534 2.82835C9.78533 2.74429 9.96045 2.62214 10.0357 2.4948C10.3849 1.9035 11.2257 1.58825 11.5297 1",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})}),(0,a.jsxs)("div",{className:"px-[15px] py-[5px] inline-flex gap-x-[5px] items-center border-[3px] rounded-[50px] border-black w-full",children:[(0,a.jsx)("input",{type:"text",className:" border-transparent focus:border-transparent focus:ring-0 p-0 flex-grow typo-ibmplex typo-b5 leading-[150%]",placeholder:"ค้นหาพรรคการเมือง",value:c,onChange:e=>d(e.target.value)}),(0,a.jsxs)("svg",{width:19,height:21,viewBox:"0 0 19 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M1.83471 9.59463C1.23317 5.256 2.84023 1 7.54379 1C10.8817 1 12.8956 2.14215 14.0071 3.83806C15.3957 5.95668 16 10.5 12 13.4261C9.00001 15 7.5693 14.574 5.50001 14C4.15877 13.6279 2.09016 11.437 1.83471 9.59463Z",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"}),(0,a.jsx)("path",{d:"M11.7864 12.761C12.6911 13.2133 13.1092 13.8446 13.7142 14.5168C14.3766 15.2528 14.7908 16.667 15.5316 17.2597C16.4331 17.9809 17.1718 19.0385 17.8033 19.9857",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})]})]})]}),(0,a.jsx)("div",{className:"px-[10px] py-[5px] typo-b7 leading-[150%] typo-ibmplex text-right text-gray-3",children:"*แสดงสีพรรคเฉพาะพรรคที่อยู่ในสภาสมัยล่าสุด"})]}),(0,a.jsxs)("div",{className:"flex flex-col divide-y-2 divide-gray-3 divide-dashed h-full overflow-scroll",children:[(0,a.jsx)("button",{className:" w-full text-left py-[16px] px-[20px] relative",onClick:()=>{l(),i(null)},children:(0,a.jsx)("div",{className:" flex flex-row justify-between ",children:(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("div",{className:"w-[20px] h-[20px] rounded-full bg-center bg-contain"}),(0,a.jsx)("div",{className:"typo-b4 typo-ibmplex leading-[150%] ml-[12px]",children:"ทุกพรรค"})]})})},"search-result-party-ทุกพรรค"),x.length>0?x.map(e=>(0,a.jsx)("button",{className:" w-full text-left py-[16px] px-[20px] relative",onClick:()=>{l(),i(e)},children:(0,a.jsxs)("div",{className:" flex flex-row justify-between ",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("div",{className:"w-[20px] h-[20px] rounded-full bg-center bg-contain",style:{backgroundImage:"url(".concat(e.Images&&e.Images[0].url,")")}}),(0,a.jsx)("div",{className:"typo-b4 typo-ibmplex leading-[150%] ml-[12px]",children:e.Name})]}),(0,a.jsx)("div",{className:"w-[20px] h-[20px] rounded-full",style:{backgroundColor:"".concat("ทุกพรรค"!==e.Name&&("ไม่สังกัดพรรค"!==e.Name?e.IsActive?e.Color:"#9A948C":"#000000"))}})]})},"search-result-party-".concat(e.Name))):(0,a.jsxs)("div",{className:"flex flex-col justify-center items-center gap-y-[20px]",children:[(0,a.jsx)("div",{className:"w-[116.57px] h-[138.45px]"}),(0,a.jsx)(f.u,{}),(0,a.jsxs)("div",{className:"typo-ibmplex text-center",children:[(0,a.jsx)("div",{className:"typo-b4 ",children:"ไม่พบสิ่งที่ค้นหา"}),(0,a.jsx)("div",{className:"typo-b6",children:"ลองตรวจสอบตัวสะกด หรือ หาคำใกล้เคียง"})]})]})]})]})},y=e=>{let{children:t,selected:l}=e;return(0,a.jsx)("div",{className:l||void 0===l?"rounded-[100px] bg-highlight-2 px-[10px] py-[5px] border-highlight-2 border-[3px]":"rounded-[100px] bg-white px-[10px] py-[5px] border-black border-[3px]",children:t})},j=e=>{let{open:t,onClose:l}=e,{selectedDataSet:r,setSelectedDataSet:s}=(0,o.j)();return(0,a.jsxs)("div",{className:"absolute inset-0 overflow-x-hidden overflow-y-scroll \n      bg-white \n      h-header tablet:h-tablet-header\n      z-30\n      ".concat(t?"visible opacity-100":"invisible opacity-0"," transition-all"),children:[(0,a.jsx)("div",{className:"flex flex-row justify-end px-[10px]",children:(0,a.jsx)("button",{onClick:()=>l(),children:(0,a.jsx)(m.x8,{})})}),(0,a.jsxs)("div",{className:"flex flex-row items-center px-[10px] gap-x-[8px] py-[5px]",children:[(0,a.jsx)("button",{onClick:async()=>{l(),setTimeout(()=>s("นักการเมือง 62"),100)},children:(0,a.jsx)(y,{selected:"นักการเมือง 62"===r,children:"นักการเมือง 62"})}),(0,a.jsx)("button",{onClick:async()=>{l(),setTimeout(()=>s("ผู้สมัคร 66"),100)},children:(0,a.jsx)(y,{selected:"ผู้สมัคร 66"===r,children:"ผู้สมัคร 66"})})]})]})};var b=l(9686);let w=e=>{let{open:t,onClose:l}=e;return(0,a.jsx)("div",{className:"absolute inset-0 bg-white transition-all z-30\n      ".concat(t?"visible opacity-100":"invisible opacity-0","\n      flex flex-col justify-center items-center px-[10px]"),children:(0,a.jsxs)("div",{className:"p-[20px] rounded-[10px] border-black border-[3px]",children:[(0,a.jsx)("div",{className:"flex flex-row justify-end",children:(0,a.jsx)("button",{onClick:()=>l(),children:(0,a.jsx)(m.jm,{})})}),(0,a.jsxs)("div",{className:"typo-b5 typo-ibmplex text-center",children:[(0,a.jsx)("div",{className:"font-bold",children:"มูลค่าหุ้นธุรกิจ"}),"คือ มูลค่าหุ้นของผู้ถือหุ้นแต่ละคน โดย วิธีการคำนวณข้อมูลของผู้ถือหุ้นว่ามีมูลค่าหุ้นเท่าไหร่ จะคิดจาก",(0,a.jsx)("div",{className:"font-bold",children:"เปอร์เซ็นต์หุ้น x ส่วนของผู้ถือหุ้นในงบการเงิน"}),"ซึ่งส่วนของผู้ถือหุ้นเป็นส่วนที่เหลือจากสินทรัพย์หักด้วยหนี้สิน"]})]})})},N=e=>{let{wording:t,onClick:l}=e;return(0,a.jsx)("button",{className:"truncate max-w-[160px] shrink-0 bg-highlight-2 text-black px-[10px] py-[5px] typo-ibmplex typo-b6 leading-[150%] rounded-[100px]",onClick:()=>{l&&l()},children:t})},C=e=>{let{onOpenSeachDialog:t}=e,[l,i]=r.useState(!1),[n,c]=r.useState(!1),[d,p]=r.useState(!1),[h,f]=r.useState(!1),{selectedBusinessType:y,selectedParty:C,selectedSort:k,party:S,setSelectedParty:_,selectedDataSet:P,toggleSort:I,setSelectedBusinessType:A}=(0,o.j)(),{setCurrentStep:B,isOpen:M}=(0,x.rN)();return(0,a.jsxs)("div",{className:"flex flex-col gap-y-[5px]  py-[5px]",children:[(0,a.jsxs)("div",{className:"flex flex-row gap-x-[5px] px-[10px]",children:[(0,a.jsxs)("div",{className:"px-[15px] py-[5px] inline-flex gap-x-[5px] items-center border-[3px] rounded-[50px] border-black w-full cursor-pointer",children:[(0,a.jsx)("div",{className:" border-transparent focus:border-transparent focus:ring-0 p-0 flex-grow typo-ibmplex typo-b5 leading-[150%]",onClick:()=>t(!0),children:"ค้นหาชื่อนักการเมือง"}),(0,a.jsxs)("svg",{width:19,height:21,viewBox:"0 0 19 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M1.83471 9.59463C1.23317 5.256 2.84023 1 7.54379 1C10.8817 1 12.8956 2.14215 14.0071 3.83806C15.3957 5.95668 16 10.5 12 13.4261C9.00001 15 7.5693 14.574 5.50001 14C4.15877 13.6279 2.09016 11.437 1.83471 9.59463Z",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"}),(0,a.jsx)("path",{d:"M11.7864 12.761C12.6911 13.2133 13.1092 13.8446 13.7142 14.5168C14.3766 15.2528 14.7908 16.667 15.5316 17.2597C16.4331 17.9809 17.1718 19.0385 17.8033 19.9857",stroke:"#090909",strokeWidth:2,strokeLinecap:"round"})]})]}),(0,a.jsx)(b.Z,{}),(0,a.jsx)("button",{onClick:()=>{A(u._[0]),_(null)},children:(0,a.jsx)(m.UZ,{})})]}),(0,a.jsxs)("div",{className:"flex flex-col tablet:flex-row gap-y-[5px] typo-b5 typo-ibmplex ml-[10px]",children:[(0,a.jsxs)("div",{className:"flex flex-row gap-x-[5px] items-center w-auto overflow-x-scroll scrollbar-hide pr-[10px]",children:[(0,a.jsx)("div",{className:"shrink-0",children:"รายชื่อของ"}),(0,a.jsx)(N,{wording:P,onClick:()=>f(!0)}),(0,a.jsx)("div",{className:"shrink-0",children:"ที่มีมูลค่าหุ้น"}),(0,a.jsx)("button",{onClick:()=>i(!0),children:(0,a.jsx)(m.d,{})}),(0,a.jsx)(N,{wording:"desc"===k?(0,a.jsxs)("div",{className:"flex flex-row items-center gap-x-[5px]",children:[(0,a.jsx)(s.tX,{}),(0,a.jsx)("span",{children:"สูงสุด"})]}):(0,a.jsxs)("div",{className:"flex flex-row items-center gap-x-[5px]",children:[(0,a.jsx)(s.Hz,{}),(0,a.jsx)("span",{children:"ต่ำสุด"})]}),onClick:()=>{I()}})]}),(0,a.jsxs)("div",{className:"flex flex-row gap-x-[5px] items-center",children:[(0,a.jsx)("div",{children:"จาก"}),(0,a.jsx)("div",{className:"tour2-first-step",children:(0,a.jsx)(N,{wording:(null==y?void 0:y.name)||"ทุกหมวดธุรกิจ",onClick:()=>{M&&B(3),c(!0)}})}),(0,a.jsx)("div",{children:"จาก"}),(0,a.jsx)(N,{wording:(null==C?void 0:C.Name)||"ทุกพรรค",onClick:()=>p(!0)})]})]}),(0,a.jsx)(w,{open:l,onClose:()=>i(!1)}),(0,a.jsx)(g,{open:n,onClose:()=>c(!1)}),(0,a.jsx)(v,{open:d,onClose:()=>p(!1)}),(0,a.jsx)(j,{open:h,onClose:()=>f(!1)})]})};var k=l(6386);let S=e=>{let[t,l]=r.useState(!1),{filterPerson:n}=(0,o.j)(),d=r.useRef(null),[x,u]=r.useState({width:0,height:0}),[m,f]=r.useState({scrollTop:0,scrollHeight:0,clientHeight:0});return r.useEffect(()=>{d.current&&u({width:d.current.clientWidth,height:d.current.clientHeight})},[d]),r.useLayoutEffect(()=>{function e(){d.current&&u({width:d.current.clientWidth,height:d.current.clientHeight})}return window.addEventListener("resize",(0,k.debounce)(e,1e3)),e(),()=>window.removeEventListener("resize",e)},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{onOpenSeachDialog:()=>l(!0)}),(0,a.jsxs)("div",{className:"flex flex-row justify-between px-[10px]",children:[(0,a.jsx)("div",{className:"typo-b7 text-gray-3 typo-ibmplex",children:"*แสดงสีเฉพาะพรรคที่อยู่ในสภาสมัยล่าสุด"}),(0,a.jsx)("div",{className:"typo-b7 text-right",children:"ล้านบาท"})]}),(0,a.jsx)("div",{className:"px-0 w-full h-full flex-grow-1",children:(0,a.jsx)("div",{className:"w-full h-full flex-grow-1 relative",ref:d,children:n.length>0?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"w-full h-full flex flex-row",children:[(0,a.jsx)("div",{className:"w-1/6 h-full",children:(0,a.jsx)(c,{width:.1666*x.width,height:x.height,scrollControl:m})}),(0,a.jsx)("div",{className:"w-5/6 h-full",children:(0,a.jsx)(p,{width:.83333*x.width,height:x.height,onScroll:f})})]}),(0,a.jsx)("div",{className:"absolute bottom-[10px] inset-x-0",children:(0,a.jsx)(i,{})})]}):(0,a.jsx)("div",{className:"py-28",children:(0,a.jsx)(s.TX,{})})})}),(0,a.jsx)(h.Z,{open:t,onClose:()=>l(!1)})]})};var _=S}}]);