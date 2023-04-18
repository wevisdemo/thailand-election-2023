"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{1219:function(t,a,e){e.r(a);var r=e(2322),n=e(2784),s=e(5579),l=e(4640);let o=t=>{let{selectedPerson:a,selectedCompany:e}=(0,l.j)(),o=n.useRef(null),i=n.useRef(null),[c,d]=n.useState(),[p,h]=n.useState("director"),[g,u]=n.useState({width:0,height:0});return n.useEffect(()=>{if(c&&a){let t=s.Ys(i.current),e=Number(g.width),r=Number(g.height);t.attr("width",e),t.attr("height",r);let n={TOP:10,RIGHT:10,BOTTOM:10,LEFT:10},l=e-n.LEFT-n.RIGHT,o=r-n.TOP-n.BOTTOM;t.select(".chart-margin").attr("width",l).attr("height",o).attr("transform","translate(".concat(n.LEFT,", ").concat(n.TOP,")"));let d=l>400?40:20,p=s.G_s().size([2*Math.PI,.4*l]).separation((t,a)=>(t.parent==a.parent?1:2)/t.depth),h=s.eRy().duration(500).tween("resize",()=>()=>t.dispatch("toggle")),u=t.select(".chart-area").attr("transform","translate(".concat(.5*l,",").concat(.5*o,")"));p(c).links();let v=(t,a)=>[(a=+a)*Math.cos(t-=Math.PI/2),a*Math.sin(t)],m=u.select(".node-layer");m.selectAll("g").remove();let y=m.selectAll("g").data(c.descendants()),f=y.enter().append("g").attr("fill-opacity",0).attr("stroke-opacity",0).attr("cursor","pointer").attr("pointer-events","all").attr("transform",t=>"rotate(".concat(180*t.x/Math.PI-90,") translate(").concat(t.y-.5*d,", ").concat(-(.5*d),")"));f.append("g"),f.select("defs").remove(),console.log(c.descendants());let x=f.append("svg:defs");x.append("svg:pattern").attr("id",(t,a)=>"pattern_person_avatar"+a).attr("width",1).attr("height",1).attr("patternContentUnits","objectBoundingBox").append("use").attr("xlink:href",(t,a)=>"#person_avatar"+a).attr("transform","scale(0.01)"),x.append("svg:image").attr("id",(t,a)=>"person_avatar"+a).attr("xlink:href",t=>{var a,e,r,n,s;return"string"==typeof(null===(a=t.data.shareholderData)||void 0===a?void 0:null===(e=a.person)||void 0===e?void 0:e.Images)?null===(r=t.data.shareholderData)||void 0===r?void 0:r.person.Images:"string"==typeof(null===(n=t.data.personData)||void 0===n?void 0:n.Images)?null===(s=t.data.personData)||void 0===s?void 0:s.Images:"/mpasset/design_assets/profile_pic.jpg"}).attr("width",100).attr("height",100).attr("x",0).attr("y",0),x.append("svg:pattern").attr("id",(t,a)=>"pattern_party_avatar"+a).attr("width",1).attr("height",1).attr("patternContentUnits","objectBoundingBox").append("use").attr("xlink:href",(t,a)=>"#party_avatar"+a).attr("transform","scale(0.0025)"),x.append("svg:image").attr("id",(t,a)=>"party_avatar"+a).attr("xlink:href",t=>{var a,e,r,n,s,l;return"string"==typeof(null===(a=t.data.shareholderData)||void 0===a?void 0:null===(e=a.person)||void 0===e?void 0:null===(r=e.Party)||void 0===r?void 0:r.Images)?null===(n=t.data.shareholderData)||void 0===n?void 0:null===(s=n.person)||void 0===s?void 0:null===(l=s.Party)||void 0===l?void 0:l.Images:"/mpasset/design_assets/profile_pic.jpg"}).attr("width",100).attr("height",100).attr("x",0).attr("y",0),f.append("rect").attr("rx",(t,a)=>0==a?"5":"49").attr("width",d).attr("height",d).attr("fill",(t,a)=>{var e,r;return 0==a?Array.isArray(null===(e=t.data.companyData)||void 0===e?void 0:e.gov_fund_proj)?"black":"white":(null===(r=t.data.companyData)||void 0===r?void 0:r.gov_fund_proj)?"#000":"url(#pattern_person_avatar"+a+")"}).attr("stroke","#000").attr("stroke-weight","2px").transition(h).attr("fill-opacity",1).attr("stroke-opacity",1);let _=u.select(".link-layer");_.selectAll("line").remove();let k=_.selectAll(".link").data(c.links());k.enter().append("line").transition(h).attr("class","link").attr("stroke","#ccc").attr("stroke-opacity",1).attr("x1",t=>v(t.source.x,t.source.y)[0]).attr("y1",t=>v(t.source.x,t.source.y)[1]).attr("x2",t=>v(t.target.x,t.target.y)[0]).attr("y2",t=>v(t.target.x,t.target.y)[1]);let w=u.select(".person-icon").attr("transform","translate(".concat(-50," ").concat(-50,")"));w.selectAll("rect").remove(),c.eachBefore(t=>{t.parent&&(t.x0=t.parent.x,t.y0=t.parent.y)})}},[i,c,g,a]),n.useEffect(()=>{if(e&&a){let t=[{id:"company-".concat(e.company_id),parentId:"",companyData:e}];Array.isArray(e.company_shareholder)&&e.company_shareholder.length>0?(t=[...t,...e.company_shareholder.map(t=>({id:"".concat(t.Firstname.replaceAll(" ","-"),"-").concat(t.Lastname.replaceAll(" ","-")),parentId:"company-".concat(e.company_id),shareholderData:t}))],h("shareholder")):(t=[...t,{id:"company-".concat(a.Id),parentId:"company-".concat(e.company_id),personData:a}],h("director"));let r=s.QP8().id(t=>t.id).parentId(t=>t.parentId),n=r(t);n.descendants().forEach((t,a)=>{t._children=t.children,t.depth>0&&(t.children=void 0)}),console.log(n),d(n)}},[a,e]),n.useEffect(()=>{function t(){o.current&&u({width:o.current.clientWidth,height:o.current.clientHeight})}return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),(0,r.jsx)("div",{className:"w-full h-full max-w-[800px] mx-auto",ref:o,children:(0,r.jsx)("svg",{ref:i,children:(0,r.jsxs)("g",{className:"chart-margin",children:[(0,r.jsx)("g",{className:"x-axis"}),(0,r.jsx)("g",{className:"y-axis"}),(0,r.jsx)("g",{className:"x-label",children:(0,r.jsx)("text",{})}),(0,r.jsx)("g",{className:"y-label",children:(0,r.jsx)("text",{})}),(0,r.jsxs)("g",{className:"chart-area",children:[(0,r.jsx)("g",{className:"link-layer"}),(0,r.jsx)("g",{className:"node-layer"}),(0,r.jsx)("g",{className:"person-icon"})]})]})})})};a.default=o}}]);