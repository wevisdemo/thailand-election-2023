(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[168],{6386:function(t){function a(t,a,e){function r(){var d=Date.now()-s;d<a&&d>=0?n=setTimeout(r,a-d):(n=null,e||(i=t.apply(l,o),l=o=null))}null==a&&(a=100);var n,o,l,s,i,d=function(){l=this,o=arguments,s=Date.now();var d=e&&!n;return n||(n=setTimeout(r,a)),d&&(i=t.apply(l,o),l=o=null),i};return d.clear=function(){n&&(clearTimeout(n),n=null)},d.flush=function(){n&&(i=t.apply(l,o),l=o=null,clearTimeout(n),n=null)},d}a.debounce=a,t.exports=a},6168:function(t,a,e){"use strict";e.r(a);var r=e(2322),n=e(2784),o=e(7355),l=e(7725),s=e(6386);let i=t=>{let{selectedPerson:a,selectedCompany:e,selectedDataSet:i}=(0,l.j)(),d=n.useRef(null),c=n.useRef(null),[p,h]=n.useState(),[u,v]=n.useState("director"),[m,y]=n.useState({width:0,height:0});return n.useEffect(()=>{if(p&&a){let t=o.Ys(c.current),a=Number(m.width),e=Number(m.height);t.attr("width",a),t.attr("height",e);let r={TOP:10,RIGHT:10,BOTTOM:10,LEFT:10},n=a-r.LEFT-r.RIGHT,l=e-r.TOP-r.BOTTOM;t.select(".chart-margin").attr("width",n).attr("height",l).attr("transform","translate(".concat(r.LEFT,", ").concat(r.TOP,")"));let s=o.G_s().size([2*Math.PI,.35*n]).separation((t,a)=>(t.parent==a.parent?1:2)/t.depth),i=o.eRy().duration(500).tween("resize",()=>()=>t.dispatch("toggle")),d=t.select(".chart-area").attr("transform","translate(".concat(.5*n,",").concat(.5*l,")"));s(p).links();let h=(t,a)=>[(a=+a)*Math.cos(t-=Math.PI/2),a*Math.sin(t)],v=d.select(".node-layer");v.selectAll("g").remove();let y=o.Ys("#tooltip-c3-nav").style("position","absolute").style("visibility","hidden").style("background-color","white").style("border","solid").style("border-width","1px").style("border-radius","5px").style("padding","10px"),g=v.selectAll("g").data(p.descendants()),f=g.enter().append("g").attr("fill-opacity",0).attr("stroke-opacity",0).attr("cursor","help").attr("pointer-events","all").on("mouseover",(t,a)=>{var e,r,n,o;y.style("visibility","visible"),0===a.height?"shareholder"===u?y.html("".concat(String(null===(e=a.data.shareholderData)||void 0===e?void 0:e.Firstname)," ").concat(String(null===(r=a.data.shareholderData)||void 0===r?void 0:r.Lastname))):y.html("".concat(String(null===(n=a.data.personData)||void 0===n?void 0:n.Name))):y.html(String(null===(o=a.data.companyData)||void 0===o?void 0:o.company_name_th))}).on("mousemove",t=>y.style("top",t.offsetY+10+"px").style("left",t.offsetX+10+"px")).on("mouseout",()=>y.style("visibility","hidden"));p.descendants().length>10?f.attr("transform",(t,a)=>"rotate(".concat(180*t.x/Math.PI-90,") translate(").concat((t.y-20)*(a%2==0?.65:1),", ").concat(-20,")")):f.attr("transform",t=>"rotate(".concat(180*t.x/Math.PI-90,") translate(").concat(t.y-20,", ").concat(-20,")")),f.append("g"),f.select("defs").remove();let x=f.append("svg:defs");x.append("svg:pattern").attr("id",(t,a)=>"c3pattern_person_avatar"+a).attr("width",1).attr("height",1).attr("patternContentUnits","objectBoundingBox").append("use").attr("xlink:href",(t,a)=>"#c3person_avatar"+a).attr("transform","scale(0.01)"),x.append("svg:image").attr("id",(t,a)=>"c3person_avatar"+a).attr("xlink:href",t=>{var a,e,r,n,o,l,s;return"string"==typeof(null===(a=t.data.shareholderData)||void 0===a?void 0:null===(e=a.person)||void 0===e?void 0:e.Images)&&(null===(r=t.data.shareholderData)||void 0===r?void 0:null===(n=r.person)||void 0===n?void 0:n.Images)!==""?"".concat(null===(o=t.data.shareholderData)||void 0===o?void 0:o.person.Images):"string"==typeof(null===(l=t.data.personData)||void 0===l?void 0:l.Images)?"".concat(null===(s=t.data.personData)||void 0===s?void 0:s.Images):"/mpasset/design_assets/profile_pic.jpg"}).attr("width",100).attr("height",100).attr("x",0).attr("y",0),x.append("svg:pattern").attr("id",(t,a)=>"c3pattern_party_avatar"+a).attr("width",1).attr("height",1).attr("patternContentUnits","objectBoundingBox").append("use").attr("xlink:href",(t,a)=>"#c3party_avatar"+a).attr("transform","scale(0.01)"),x.append("svg:image").attr("id",(t,a)=>"c3party_avatar"+a).attr("xlink:href",t=>{var a,e,r,n,o,l,s,i,d;return"string"==typeof(null===(a=t.data.shareholderData)||void 0===a?void 0:null===(e=a.person)||void 0===e?void 0:null===(r=e.Party)||void 0===r?void 0:r.Images)&&(null===(n=t.data.shareholderData)||void 0===n?void 0:null===(o=n.person)||void 0===o?void 0:null===(l=o.Party)||void 0===l?void 0:l.Images)!==""?"".concat(null===(s=t.data.shareholderData)||void 0===s?void 0:null===(i=s.person)||void 0===i?void 0:null===(d=i.Party)||void 0===d?void 0:d.Images):""}).attr("width",100).attr("height",100).attr("x",0).attr("y",0),f.append("rect").attr("rx",(t,a)=>0==a?"5":"49").attr("width",40).attr("height",40).attr("transform",t=>"rotate(".concat(-((180*t.x/Math.PI-90)*1)," ").concat(20," ").concat(20,")")).attr("fill",(t,a)=>{var e,r;return 0==a?Array.isArray(null===(e=t.data.companyData)||void 0===e?void 0:e.gov_fund_proj)?"black":"white":(null===(r=t.data.companyData)||void 0===r?void 0:r.gov_fund_proj)?"#000":"url(#c3pattern_person_avatar"+a+")"}).attr("stroke","#000").attr("stroke-weight","2px").transition(i).attr("fill-opacity",1).attr("stroke-opacity",1),f.append("rect").attr("x",20).attr("y",20).attr("transform",t=>"rotate(".concat(-((180*t.x/Math.PI-90)*1)," ").concat(20," ").concat(20,")")).attr("width",20).attr("height",20).attr("rx",49).attr("stroke",t=>{var a,e,r,n,o,l;return"string"==typeof(null===(a=t.data.shareholderData)||void 0===a?void 0:null===(e=a.person)||void 0===e?void 0:null===(r=e.Party)||void 0===r?void 0:r.Images)&&(null===(n=t.data.shareholderData)||void 0===n?void 0:null===(o=n.person)||void 0===o?void 0:null===(l=o.Party)||void 0===l?void 0:l.Images)!==""?"#000":"transparent"}).attr("stroke-width","2px").attr("fill",(t,a)=>"url(#c3pattern_party_avatar"+a+")").attr("fill-opacity",1);let _=d.select(".link-layer");_.selectAll("line").remove();let w=_.selectAll(".link").data(p.links()),k=w.enter().append("line").transition(i).attr("class","link").attr("stroke","#ccc").attr("stroke-opacity",1).attr("x1",t=>h(t.source.x,t.source.y)[0]).attr("y1",t=>h(t.source.x,t.source.y)[1]);p.descendants().length>10?(k.attr("x2",(t,a)=>h(t.target.x,t.target.y)[0]*(a%2!=0?.65:1)),k.attr("y2",(t,a)=>h(t.target.x,t.target.y)[1]*(a%2!=0?.65:1))):(k.attr("x2",t=>h(t.target.x,t.target.y)[0]),k.attr("y2",t=>h(t.target.x,t.target.y)[1]));let I=d.select(".person-icon").attr("transform","translate(".concat(-50," ").concat(-50,")"));I.selectAll("rect").remove(),p.eachBefore(t=>{t.parent&&(t.x0=t.parent.x,t.y0=t.parent.y)})}},[c,p,m,a,u]),n.useEffect(()=>{if(e&&a){let t=[{id:"company-".concat(e.company_id),parentId:"",companyData:e}];Array.isArray(e.company_shareholder)&&e.company_shareholder.length>0?(t=[...t,...e.company_shareholder.filter(t=>{var e;return"".concat(t.Firstname," ").concat(t.Lastname).includes(a.Name)||"string"==typeof(null===(e=t.person)||void 0===e?void 0:e.Images)}).map(t=>({id:"".concat(t.Firstname.replaceAll(" ","-"),"-").concat(t.Lastname.replaceAll(" ","-")),parentId:"company-".concat(e.company_id),shareholderData:t}))],v("shareholder")):(t=[...t,{id:"company-".concat(a.Id),parentId:"company-".concat(e.company_id),personData:a}],v("director"));let r=o.QP8().id(t=>t.id).parentId(t=>t.parentId),n=r(t);n.descendants().forEach((t,a)=>{t._children=t.children,t.depth>0&&(t.children=void 0)}),h(n)}},[a,e]),n.useEffect(()=>{function t(){d.current&&y({width:d.current.clientWidth,height:d.current.clientHeight})}return window.addEventListener("resize",(0,s.debounce)(t,1e3)),t(),()=>window.removeEventListener("resize",t)},[]),(0,r.jsxs)("div",{id:"third-chart",className:"w-full h-full max-w-[800px] mx-auto relative desktop:ml-[calc(95vw-800px)]",ref:d,children:[(0,r.jsx)("div",{className:"absolute top-0 inset-x-0 h-[95%] pointer-events-none tour3-third-step"}),(0,r.jsx)("svg",{ref:c,children:(0,r.jsxs)("g",{className:"chart-margin",children:[(0,r.jsx)("g",{className:"x-axis"}),(0,r.jsx)("g",{className:"y-axis"}),(0,r.jsx)("g",{className:"x-label",children:(0,r.jsx)("text",{})}),(0,r.jsx)("g",{className:"y-label",children:(0,r.jsx)("text",{})}),(0,r.jsxs)("g",{className:"chart-area",children:[(0,r.jsx)("g",{className:"link-layer"}),(0,r.jsx)("g",{className:"node-layer"}),(0,r.jsx)("g",{className:"person-icon"})]})]})}),(0,r.jsx)("div",{id:"tooltip-c3-nav"})]})};a.default=i}}]);