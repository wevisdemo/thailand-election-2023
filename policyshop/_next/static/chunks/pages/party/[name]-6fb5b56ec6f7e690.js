(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[117],{6521:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/party/[name]",function(){return s(3283)}])},8117:function(e,t,s){"use strict";var r=s(2322),l=s(3244);let n=e=>{let{styles:t}=e;return(0,r.jsxs)("div",{className:"text-center typo-b6 mb-9 ".concat(t),children:[(0,r.jsx)("p",{children:"ส่งข้อมูลให้ทีมงานเพื่ออัปเดตเพิ่มเติมที่อีเมล"}),(0,r.jsxs)("div",{className:"flex mx-auto items-center w-fit space-x-[16px] mt-1",children:[(0,r.jsx)("p",{className:"font-bold ",children:"team@punchup.world"}),(0,r.jsxs)("button",{className:" bg-gray-2 flex items-center rounded-[20px] px-2 py-1",onClick:()=>{navigator.clipboard.writeText("team@punchup.world")},children:[(0,r.jsx)("img",{src:"".concat(l.E,"/clipboard.svg"),alt:"child",className:"mr-1 "}),(0,r.jsx)("p",{className:"typo-b7",children:"ก็อปปี้"})]})]})]})};t.Z=n},5328:function(e,t,s){"use strict";var r=s(2322),l=s(3244),n=s(2784);let c=e=>{let t,{options:s,currentOption:c,onSelect:a,placeholder:o,outline:i,disabled:d}=e,x=(0,n.useRef)(null),[p,u]=(0,n.useState)(!1);(0,n.useEffect)(()=>{function e(e){x.current&&!x.current.contains(e.target)&&u(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[x]);let m=e=>{d||(a(e),u(!1))};return(0,r.jsxs)("div",{className:"relative w-full",ref:x,children:[(0,r.jsxs)("div",{className:"flex items-center justify-between hover:".concat(d?"cursor-unset":"cursor-pointer"," ").concat(i?"p-[8px] border-b-[3px]":"px-[16px] py-[10px] bg-[var(--color-white)] border-[3px] rounded-[50px]"),onClick:()=>{d||u(!p)},style:{borderColor:(t="var(--color-black)",d&&(t="var(--color-gray-2)"),t)},children:[(0,r.jsx)("span",{className:d?"text-[var(--color-gray-2)]":null!==c?"text-[var(--color-black)]":"text-[var(--color-gray-3)]",children:c?c.label:o||"เลือกตัวเลือก"}),(0,r.jsx)("img",{className:"".concat(d&&"[filter:invert(88%) sepia(9%) saturate(416%) hue-rotate(17deg) brightness(83%) contrast(87%)]"),src:"".concat(l.E,"/Chevron.svg"),alt:"dropdown-arrow",style:{transform:"".concat(p?"rotate(180deg)":"none"),filter:"".concat(d?"invert(88%) sepia(9%) saturate(416%) hue-rotate(17deg) brightness(83%) contrast(87%)":"unset")}})]}),p&&(0,r.jsx)("div",{className:"absolute w-full max-h-[300px] overflow-y-auto z-50 mt-[12px] p-[15px] bg-[var(--color-white)] border-[3px] border-[var(--color-black)] rounded-[10px]",children:s.map((e,t)=>(0,r.jsx)("div",{className:"[&:not(:first-child)]:border-t-[1px] border-[var(--color-black)] py-[5px] hover:cursor-pointer hover:bg-[var(--color-gray-1)]",onClick:()=>m(e),children:e.label},"option-".concat(t)))})]})};t.Z=c},9821:function(e,t,s){"use strict";var r=s(2322),l=s(3244),n=s(8714);let c=()=>(0,r.jsxs)("div",{className:"flex items-center justify-between py-3 px-4  font-bold typo-b5 bg-highlight-3 mb-8 mt-2 rounded-[10px]",children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("img",{src:"".concat(l.E,"/child.svg"),alt:"child",className:"mr-2 "}),(0,r.jsx)("p",{children:"ดูยังไงว่านโยบายไหนจะทำได้จริง "})]}),(0,r.jsx)("button",{className:"underline ",onClick:()=>(0,n.rV)(),children:"อ่านต่อ"})]});t.Z=c},9774:function(e,t,s){"use strict";var r=s(2322),l=s(3244);let n=e=>{let{policyInfo:t,partyInfo:n}=e;var c=s(3054)();let a=()=>(null==n?void 0:n.Images)&&0!==n.Images.length?n.Images[0].url:"";return(0,r.jsxs)("div",{className:"bg-[var(--color-white)] border-[1px] border-[var(--color-gray-2)] rounded-[10px] overflow-hidden h-fit w-full max-w-[155px] md:max-w-[232px] mx-auto",children:[(0,r.jsxs)("div",{className:"p-[12px] ",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[a()&&(0,r.jsx)("img",{className:"w-[22px] rounded-full",src:a(),alt:"party-logo"}),(0,r.jsx)("span",{className:"ml-[4px] typo-b7 font-bold",children:t.Party.Name})]}),(0,r.jsx)("div",{className:"relative mt-[8px] w-full pb-[100%] h-0 rounded-[5px] bg-red-400",style:{backgroundColor:(null==n?void 0:n.Color)||"var(---color-grey-3)"},children:(0,r.jsx)("span",{className:"card-title absolute px-[4px] top-[50%] left-[50%] w-full translate-x-[-50%] translate-y-[-50%] text-center typo-b4 text-[var(--color-white)] font-bold",children:t.Title})}),t.Explain&&(0,r.jsx)("div",{className:"mt-[8px] typo-b5 list",dangerouslySetInnerHTML:{__html:c.render(t.Explain||"-")}})]}),(0,r.jsxs)("div",{className:"py-[8px] px-[16px] flex items-center bg-[var(--color-highlight-1)]",children:[(0,l.V)(t.Topic)&&(0,r.jsx)("img",{className:"w-[20px]",src:(0,l.V)(t.Topic),alt:"cat-icon"}),(0,r.jsx)("span",{className:"ml-[4px] typo-b7",children:t.Topic})]})]})};t.Z=n},4383:function(e,t,s){"use strict";var r=s(2322),l=s(3244);let n=e=>{let{onClick:t}=e;return(0,r.jsxs)("div",{className:"flex justify-between items-center w-fit py-[8px] px-[16px] border-[1px] border-[var(--color-black)] rounded-[16px] hover:cursor-pointer",onClick:t,children:[(0,r.jsx)("p",{className:"typo-b4",children:"แรนด้อมใหม่"}),(0,r.jsx)("img",{src:"".concat(l.E,"/shuffle.svg"),alt:"shuffle",className:"ml-[8px]"})]})};t.Z=n},1693:function(e,t,s){"use strict";s.d(t,{Z:function(){return h}});var r=s(2322),l=s(9774),n=s(2784);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var o=function(e){function t(){return e.apply(this,arguments)||this}(s=t).prototype=Object.create(e.prototype),s.prototype.constructor=s,a(s,e);var s,r=t.prototype;return r.getColumns=function(){var e=this.props,t=e.children,s=e.columnsCount,r=Array.from({length:s},function(){return[]});return n.Children.forEach(t,function(e,t){e&&n.isValidElement(e)&&r[t%s].push(e)}),r},r.renderColumns=function(){var e=this.props.gutter;return this.getColumns().map(function(t,s){return n.createElement("div",{key:s,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:e}},t.map(function(e){return e}))})},r.render=function(){var e=this.props,t=e.gutter,s=e.className,r=e.style;return n.createElement("div",{style:c({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:t},r),className:s},this.renderColumns())},t}(n.Component);o.propTypes={},o.defaultProps={columnsCount:3,gutter:"0",className:null,style:{}};var i="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,d=function(){var e=(0,n.useState)(!1),t=e[0],s=e[1];return i(function(){s(!0)},[]),t},x=function(){var e=d(),t=(0,n.useState)(0),s=t[0],r=t[1],l=(0,n.useCallback)(function(){e&&r(window.innerWidth)},[e]);return i(function(){if(e)return window.addEventListener("resize",l),l(),function(){return window.removeEventListener("resize",l)}},[e,l]),s},p=function(e){var t=e.columnsCountBreakPoints,s=void 0===t?{350:1,750:2,900:3}:t,r=e.children,l=e.className,c=e.style,a=x(),o=(0,n.useMemo)(function(){var e=Object.keys(s).sort(function(e,t){return e-t}),t=e.length>0?s[e[0]]:1;return e.forEach(function(e){e<a&&(t=s[e])}),t},[a,s]);return n.createElement("div",{className:void 0===l?null:l,style:void 0===c?null:c},n.Children.map(r,function(e,t){return n.cloneElement(e,{key:t,columnsCount:o})}))};p.propTypes={};let u=e=>{let{policyList:t,partyList:s}=e,n=e=>{let t=s.find(t=>t.Name===e);return t||null};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(p,{columnsCountBreakPoints:{360:2,900:3},children:(0,r.jsx)(o,{className:"!gap-[16px] [&>*]:!gap-[16px]",children:t.map((e,t)=>(0,r.jsx)(l.Z,{policyInfo:e,partyInfo:n(e.Party.Name)},"first-card-".concat(t)))})})})},m=e=>{let{policyList:t,children:s,partyList:l}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"grid gap-[8px]",children:s}),(0,r.jsx)("div",{className:"mt-[16px]",children:(0,r.jsx)(u,{policyList:t,partyList:l})})]})};var h=m},3283:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return k},default:function(){return C}});var r=s(2322),l=s(2784),n=s(1163),c=s(2898),a=s(8714),o=s(1664),i=s.n(o),d=s(8117),x=s(9821);let p=e=>{let{party:t}=e,s=()=>{let e=document.getElementById("ModalInfo");e&&(e.style.display="block")};return(0,r.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,r.jsxs)("div",{className:"flex items-center justify-center",children:[(0,r.jsx)("div",{className:"w-[70px] h-[70px] mr-4   ",children:t&&t.Images&&t.Images[0]&&(0,r.jsx)("img",{src:t.Images[0].url,alt:"party-logo",className:"rounded-full"})}),(0,r.jsx)("p",{className:"font-bold typo-h3",children:null==t?void 0:t.Name})]}),(0,r.jsxs)("div",{className:"flex mx-auto mb-10 space-x-3 w-fit",children:[(0,r.jsx)("button",{className:"typo-b4 border-[3px] mt-4 border-black rounded-full w-fit mx-auto py-2 px-4",onClick:()=>s(),children:"รู้จักพรรคนี้เพิ่มเติม"}),(0,r.jsx)(i(),{href:"/compare",className:"typo-b4 border-[3px] mt-4 border-black rounded-full w-fit mx-auto py-2 px-4",children:"เทียบนโยบาย"})]}),(0,r.jsx)(x.Z,{}),(0,r.jsxs)("div",{className:"mt-2 text-center typo-b5",children:[(0,r.jsx)("p",{children:"ข้อมูลนี้อัปเดตในวันที่ xx/xx/xxxx"}),(0,r.jsx)(d.Z,{})]})]})};var u=s(3244);let m=e=>{let{item:t}=e;return(0,r.jsxs)("div",{className:"flex justify-between w-full",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{src:"".concat(u.E,"/plus.svg"),alt:"plus-icon",className:"mr-[4px] w-[24px] h-[24px]"}),(0,r.jsxs)("p",{className:"typo-b6",children:[t.topic," (",t.count,")"]})]}),(0,r.jsxs)("div",{className:"flex items-center ml-[14px]",children:[(0,r.jsx)("div",{className:"relative h-[14px] w-[95px] bg-[#d9d9d9]",children:(0,r.jsx)("div",{className:"absolute h-[14px]",style:{backgroundColor:t.color,width:"".concat(t.percent,"%")}})}),(0,r.jsxs)("p",{className:"ml-[12px] typo-b6 w-[40px] text-right",children:[t.percent,"%"]})]})]})},h=e=>{let{items:t}=e;return(0,r.jsx)("div",{className:"grid grid-cols-1 gap-[8px]",children:t.map((e,t)=>(0,r.jsx)(m,{item:e},"category-".concat(t)))})},f=(e,t)=>0===t?0:Math.ceil(e/t*100),v=e=>{let{policies:t}=e;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"mt-5 ",children:[(0,r.jsx)("p",{className:"font-bold typo-h5",children:"นโยบาย 66"}),(0,r.jsx)("p",{className:"font-bold typo-h7",children:"แบ่งตามประเด็น"})]}),(0,r.jsx)(h,{items:t.reduce((e,t)=>{let s=e.findIndex(e=>e.topic===t.Topic);if(-1!=s)e[s].count++;else{let s={topic:t.Topic,count:1,percent:0,color:"var(--color-black)"};e=[...e,s]}return e},[]).map(e=>({...e,percent:f(e.count,t.length)}))})]})};var j=s(1693),b=s(5328),y=s(4383),g=s(5839);let N=e=>{let{party:t}=e,s=e=>{let{children:t}=e;return(0,r.jsxs)("button",{className:" border-b-[2px] border-gray-2 w-full mt-4 flex  items-center justify-between  ",children:[t,(0,r.jsx)(g.nv,{})]})},l=()=>{let e=document.getElementById("ModalInfo");e&&(e.style.display="none")};return(0,r.jsxs)("div",{className:"fixed w-full  py-12  inset-0 z-[99] h-auto overflow-scroll hidden ",id:"ModalInfo",children:[(0,r.jsx)("div",{className:"fixed inset-0 opacity-60 z-[-1]",onClick:()=>l(),style:{background:"linear-gradient(0deg, rgba(9, 9, 9, 0.6), rgba(9, 9, 9, 0.6)), #FBF8F4"}}),(0,r.jsxs)("div",{className:"typo-b4 border-[3px] border-black rounded-[10px] relative mx-2   md:mx-auto  bg-white md:max-w-[650px] p-5 bg-[var(--color-gray-1)]",children:[(0,r.jsx)("button",{className:"absolute top-0 right-0 m-3 ",onClick:()=>l(),children:(0,r.jsx)("img",{src:"".concat(u.E,"/close.svg"),alt:"close"})}),t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:" text-start",children:[t.Images&&(0,r.jsx)("div",{className:"w-[70px] h-[70px] bg-white border border-black rounded-full overflow-hidden object-cover p-2",children:(0,r.jsx)("img",{src:t.Images[0].url,alt:"party-logo"})}),(0,r.jsx)("p",{className:"mt-2 typo-h5 font-bold",children:t.Name}),(0,r.jsxs)("div",{className:"flex items-center bg-[var(--color-highlight-1)] px-[5px] w-fit mt-[8px]",children:[(0,r.jsx)("img",{className:"w-[12px] h-[12px]",src:"".concat(u.E,"/green-check.svg"),alt:"green-check"}),(0,r.jsx)("span",{className:"ml-[4px] typo-b5",children:t.PartyGroup})]}),(0,r.jsx)("div",{className:"my-[20px]",children:(0,r.jsx)("p",{className:"typo-b5 text-gray-3",children:"แคนดิเดตนายก"})})]}),(0,r.jsxs)("div",{className:"flex flex-col items-start",children:[(0,r.jsx)(s,{children:(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("img",{src:"".concat(u.E,"/icon-link-1.svg"),alt:"icon-link-1"}),(0,r.jsx)("p",{className:"ml-2 font-bold typo-b5",children:"นโยบายที่เคยขายไว้ ทำได้จริงแค่ไหน"})]})}),(0,r.jsx)(s,{children:(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("img",{src:"".concat(u.E,"/icon-link-2.svg"),alt:"icon-link-2"}),(0,r.jsx)("p",{className:"ml-2 font-bold typo-b5",children:"เคยเสนอร่างกฏหมายอะไรบ้าง"})]})}),(0,r.jsx)(s,{children:(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("img",{src:"".concat(u.E,"/icon-link-3.svg"),alt:"icon-link-3"}),(0,r.jsx)("p",{className:"ml-2 font-bold typo-b5",children:"ข้อมูลอื่นๆ"})]})})]})]})]})]})},w=e=>{let{parties:t,policies:s}=e,o=(0,n.useRouter)(),{name:i}=o.query,[d,x]=(0,l.useState)(),[u,m]=(0,l.useState)(s),[h,f]=(0,l.useState)([]),[g,w]=(0,l.useState)([]),[k,C]=(0,l.useState)(null),E=(0,l.useCallback)(async()=>{let e=t.filter(e=>e.Name===i);x(e[0])},[i]),_=(0,l.useCallback)(async()=>{let e=s.filter(e=>e.Party.Name===i),t=(0,a.kE)(Object.keys((0,a.vM)(e,"Topic")),"policies");m(e),f(e.slice(0,1)),await w([{label:"นโยบายทั้งหมด"},...t])},[i]),I=()=>{f(u)},Z=()=>{m(e=>[...(0,a.Uy)(e)])};return(0,l.useEffect)(()=>{i&&(E(),_())},[i]),(0,r.jsx)(c.Z,{title:"พรรคนี้มีอะไรมาขายบ้าง",children:(0,r.jsxs)("div",{className:"relative ",children:[(0,r.jsx)(N,{party:d}),(0,r.jsx)(p,{party:d}),(0,r.jsx)("div",{className:"mt-[10px]",children:(0,r.jsx)(v,{policies:u})}),(0,r.jsxs)("div",{className:"py-10 mt-10 border-y border-highlight-2",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between ",children:[(0,r.jsx)("p",{className:"font-bold typo-h7",children:"นโยบายไฮไลท์"}),(0,r.jsx)("button",{className:"typo-b4",onClick:I,children:"ดูทั้งหมด"})]}),(0,r.jsx)(j.Z,{policyList:h,partyList:t})]}),(0,r.jsx)("p",{className:"mt-10 font-bold typo-h6",children:"นโยบายตามประเด็น"}),(0,r.jsxs)(j.Z,{policyList:u,partyList:t,children:[(0,r.jsx)(b.Z,{options:g,currentOption:k,onSelect:C}),(0,r.jsxs)("div",{className:"flex justify-between items-center mt-[32px]",children:[(0,r.jsx)("p",{children:"เรียงตาม"}),(0,r.jsx)(y.Z,{onClick:Z})]})]})]})})};var k=!0,C=w},1163:function(e,t,s){e.exports=s(387)}},function(e){e.O(0,[844,54,898,774,888,179],function(){return e(e.s=6521)}),_N_E=e.O()}]);