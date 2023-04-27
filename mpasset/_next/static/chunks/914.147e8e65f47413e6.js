"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[914],{9914:function(t,a,e){e.r(a);var r=e(2322),n=e(2784),s=e(1322),i=e(7725);let l=()=>{let{selectedPerson:t,directorData:a,shareholderData:e,setSelectedCompany:l}=(0,i.j)(),o=n.useRef(null),c=n.useRef(null),[d,p]=n.useState(),[h,y]=n.useState({width:0,height:0}),u=n.useCallback(t=>{l(t.data.companyData),0!==t.height&&(t.children=t.children?void 0:t._children)},[l]);return n.useEffect(()=>{if(d){let l=s.Ys(c.current),o=Number(h.width),p=Number(h.height);l.attr("width",o),l.attr("height",p),l.attr("fill","none");let y={TOP:10,RIGHT:10,BOTTOM:10,LEFT:10},v=o-y.LEFT-y.RIGHT,m=p-y.TOP-y.BOTTOM;l.select(".chart-margin").attr("width",v).attr("height",m).attr("transform","translate(".concat(y.LEFT,", ").concat(y.TOP,")"));let g=v>400?40:20,f=s.G_s().size([2*Math.PI,.35*v]).separation((t,a)=>(t.parent==a.parent?1:2)/t.depth),x=s.eRy().duration(500).tween("resize",()=>()=>l.dispatch("toggle")),_=l.select(".chart-area").attr("transform","translate(".concat(.5*v,",").concat(.5*m,")"));f(d).links();let k=(t,a)=>[(a=+a)*Math.cos(t-=Math.PI/2),a*Math.sin(t)],w=s.Ys("#tooltip-main-nav").style("position","absolute").style("visibility","hidden").style("background-color","white").style("border","solid").style("border-width","1px").style("border-radius","5px").style("padding","10px"),I=_.select(".node-layer");I.selectAll("g").remove();let b=I.selectAll("g").data(d.descendants()),j=b.enter().append("g").attr("transform",t=>"rotate(".concat(180*t.x/Math.PI-90,") translate(").concat(t.y-.5*g,", ").concat(-(.5*g),")")).attr("cursor","pointer").attr("pointer-events","all").on("click",(t,a)=>{u(a)}).on("mouseover",function(t,a){var e;w.style("visibility","visible"),w.html(String(null===(e=a.data.companyData)||void 0===e?void 0:e.company_name_th))}).on("mousemove",function(t){return w.style("top",t.offsetY+10+"px").style("left",t.offsetX+10+"px")}).on("mouseout",function(){return w.style("visibility","hidden")});j.append("rect").attr("rx","5").attr("width",g).attr("height",g).attr("fill",t=>{var a;return(null===(a=t.data.companyData)||void 0===a?void 0:a.gov_fund_proj)?"#000":"white"}).attr("stroke","#000").attr("stroke-weight","2px").transition(x).attr("fill-opacity",1).attr("stroke-opacity",1),j.append("g").attr("transform",t=>"rotate(".concat(-((180*t.x/Math.PI-90)*1)," ").concat(.5*g," ").concat(.5*g,")")).append("text").attr("x",.5*g).attr("y",.5*g+4).attr("text-anchor","middle").attr("class","typo-b5 text-black fill-black").append("tspan").attr("font-size","10px").attr("fill",t=>{var a;return Array.isArray(null===(a=t.data.companyData)||void 0===a?void 0:a.gov_fund_proj)?"white":"black"}).attr("fill-opacity",t=>{var a;return t.data.companyData&&Array.isArray(null===(a=t.data.companyData)||void 0===a?void 0:a.company_shareholder)&&t.data.companyData.company_shareholder.reduce((t,a)=>t+(a.person?1:0),0)>1?"1":"0"}).text(t=>{var a;return t.data.companyData&&Array.isArray(null===(a=t.data.companyData)||void 0===a?void 0:a.company_shareholder)?t.data.companyData.company_shareholder.reduce((t,a)=>t+(a.person?1:0),0):1});let P=_.select(".link-layer");P.selectAll("line").remove();let D=P.selectAll(".link").data(d.links());D.enter().append("line").transition(x).attr("class","link").attr("stroke","#ccc").attr("stroke-opacity",1).attr("x1",t=>k(t.source.x,t.source.y)[0]).attr("y1",t=>k(t.source.x,t.source.y)[1]).attr("x2",t=>k(t.target.x,t.target.y)[0]).attr("y2",t=>k(t.target.x,t.target.y)[1]),_.selectAll("defs").remove();let N=_.select(".person-icon").append("svg:defs"),A=d.descendants()[0].data.personData;if(A){var t,a,e,r,n,i;N.append("svg:pattern").attr("id","pattern_person_avatar"+A.Id).attr("width",1).attr("height",1).attr("patternContentUnits","objectBoundingBox").append("use").attr("xlink:href","#person_avatar"+A.Id).attr("transform","scale(0.01)"),N.append("svg:image").attr("id","person_avatar"+A.Id).attr("xlink:href","string"==typeof A.Images&&""!==A.Images?A.Images:"/mpasset/design_assets/profile_pic.jpg").attr("width",100).attr("height",100).attr("x",0).attr("y",0),A.Party&&(N.append("svg:pattern").attr("id","pattern_party_avatar"+(null===(a=A.Party)||void 0===a?void 0:a.Id)).attr("width",1).attr("height",1).attr("patternContentUnits","objectBoundingBox").append("use").attr("xlink:href","#party_avatar"+(null===(e=A.Party)||void 0===e?void 0:e.Id)).attr("transform","scale(0.01)"),N.append("svg:image").attr("id","party_avatar"+(null===(r=A.Party)||void 0===r?void 0:r.Id)).attr("xlink:href","string"==typeof(null===(n=A.Party)||void 0===n?void 0:n.Images)?null===(i=A.Party)||void 0===i?void 0:i.Images:"/mpasset/design_assets/profile_pic.jpg").attr("width",100).attr("height",100).attr("x",0).attr("y",0));let s=_.select(".person-icon").attr("transform","translate(".concat(-50," ").concat(-50,")"));s.selectAll("rect").remove(),s.append("rect").attr("width",100).attr("height",100).attr("rx",49).attr("stroke","#000").attr("stroke-width","2").attr("fill","url(#pattern_person_avatar"+A.Id+")").attr("stroke","black"),s.append("rect").attr("x",70).attr("y",70).attr("width",30).attr("height",30).attr("rx",49).attr("stroke",A.Party?"#000":"transparent").attr("stroke-width","2").attr("fill","url(#pattern_party_avatar"+(null===(t=A.Party)||void 0===t?void 0:t.Id)+")")}d.eachBefore(t=>{t.parent&&(t.x0=t.parent.x,t.y0=t.parent.y)})}},[c,d,h,u]),n.useEffect(()=>{if(t&&a&&e){let r=[{id:"pol-".concat(t.Id),parentId:"",personData:t},...a.map(a=>({id:"".concat(a.tsic),parentId:"pol-".concat(t.Id),companyData:a})),...e.map(a=>({id:"".concat(a.tsic),parentId:"pol-".concat(t.Id),companyData:a}))],n=s.QP8().id(t=>t.id).parentId(t=>t.parentId),i=n(r);i.descendants().forEach((t,a)=>{t._children=t.children,t.depth>0&&(t.children=void 0)}),p(i)}t&&void 0!==t||p(void 0)},[t,a,e]),n.useEffect(()=>{function t(){o.current&&y({width:o.current.clientWidth,height:o.current.clientHeight})}return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),(0,r.jsxs)("div",{className:"w-full h-full max-w-[800px] mx-auto relative desktop:ml-[calc(95vw-800px)]",ref:o,children:[(0,r.jsx)("svg",{ref:c,children:(0,r.jsxs)("g",{className:"chart-margin",children:[(0,r.jsx)("g",{className:"x-axis"}),(0,r.jsx)("g",{className:"y-axis"}),(0,r.jsx)("g",{className:"x-label",children:(0,r.jsx)("text",{})}),(0,r.jsx)("g",{className:"y-label",children:(0,r.jsx)("text",{})}),(0,r.jsxs)("g",{className:"chart-area",children:[(0,r.jsx)("g",{className:"link-layer"}),(0,r.jsx)("g",{className:"node-layer"}),(0,r.jsx)("g",{className:"person-icon"})]})]})}),(0,r.jsx)("div",{id:"tooltip-main-nav"})]})};a.default=l}}]);