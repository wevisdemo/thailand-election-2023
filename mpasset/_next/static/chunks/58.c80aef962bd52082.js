(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58],{6386:function(t){function e(t,e,a){function r(){var o=Date.now()-c;o<e&&o>=0?l=setTimeout(r,e-o):(l=null,a||(i=t.apply(s,n),s=n=null))}null==e&&(e=100);var l,n,s,c,i,o=function(){s=this,n=arguments,c=Date.now();var o=a&&!l;return l||(l=setTimeout(r,e)),o&&(i=t.apply(s,n),s=n=null),i};return o.clear=function(){l&&(clearTimeout(l),l=null)},o.flush=function(){l&&(i=t.apply(s,n),s=n=null,clearTimeout(l),l=null)},o}e.debounce=e,t.exports=e},9058:function(t,e,a){"use strict";a.r(e);var r=a(2322),l=a(2784),n=a(3986),s=a(7725),c=a(6386);let i=()=>{let{selectedCompany:t}=(0,s.j)(),e=l.useRef(null),a=l.useRef(null),[i,o]=l.useState({width:0,height:0});return n.Z1g("%Y"),l.useEffect(()=>{if(t){let e=t.financial,r=n.Ys(a.current),l=Number(i.width),s=Number(i.height);r.attr("width",l),r.attr("height",s);let c={TOP:10,RIGHT:12,BOTTOM:20,LEFT:12},o=l-c.LEFT-c.RIGHT,u=s-c.TOP-c.BOTTOM;r.select(".chart-margin").attr("width",o).attr("height",u).attr("transform","translate(".concat(c.LEFT,", ").concat(c.TOP,")"));let h=n.Xf().domain([new Date(2018,0,1),new Date(2020,12,31)]).range([c.LEFT,o-c.RIGHT]),[d,f]=n.Wem(e,t=>Number(t.income)),m=n.BYU().domain([d||0,f||1e5]).range([u-c.TOP,c.BOTTOM]),p=n.eRy().duration(100),x=n.i$Z("%Y"),k=n.LLu(h).ticks(n.jBk.every(1)).tickFormat(t=>"".concat(Number(x(t))+543));r.select(".x-axis").attr("transform","translate(0,".concat(u,")")).transition(p).call(k).call(t=>t.select(".domain").attr("stroke-width","3px").attr("stroke","black")).call(t=>t.selectAll(".tick").select("line").attr("stroke-width","3px").attr("stroke","black")).call(t=>t.selectAll(".tick").select("text").attr("font-size","10px").attr("fill","black"));let g=n.WUZ(".2s"),w=t=>{let e=g(t);switch(e[e.length-1]){case"G":return e.slice(0,-1)+"B";case"k":return e.slice(0,-1)+"K"}return e},T=n.y4O(m).offset(20).tickFormat(t=>"".concat(w(t)));r.select(".y-axis").transition(p).call(T).attr("transform","translate(".concat(c.LEFT+20,",-").concat(c.BOTTOM+6,")")).call(t=>t.select(".domain").remove()).call(t=>t.selectAll(".tick").select("line").remove()).call(t=>t.selectAll(".tick").select("text").attr("font-size","10px").attr("fill","black"));let v=r.select(".chart-area");v.selectAll("line").remove(),v.selectAll("line").data(m.ticks()).enter().append("line").attr("class","horizontalGrid").attr("x1",0).attr("x2",o).attr("y1",t=>m(t)).attr("y2",t=>m(t)).attr("stroke","black").attr("stroke-width","1px").attr("stroke-dasharray","2 2");let y=n.jvg().x(t=>h(new Date(Number(t.year)-543,0,1))).y(t=>m(t.income)),b=r.select(".chart-area");b.selectAll("path").remove(),b.append("path").attr("class","line").attr("fill","none").attr("stroke","black").attr("stroke-width","3px").transition(p).attr("d",y(e)),Array.isArray(t.gov_fund_proj)&&t.gov_fund_proj.length>0&&v.append("g").selectAll("line").data(t.gov_fund_proj).enter().append("line").attr("class","plot-gov-fund").attr("x1",t=>h(new Date(t.วันที่ลงนามในสัญญา))).attr("x2",t=>h(new Date(t.วันที่ลงนามในสัญญา))).attr("y1",0).attr("y2",u).attr("stroke","#00EAA4").attr("stroke-width","2px")}},[a,t,i]),l.useEffect(()=>{function t(){e.current&&o({width:e.current.clientWidth,height:e.current.clientHeight})}return window.addEventListener("resize",(0,c.debounce)(t,1e3)),t(),()=>window.removeEventListener("resize",t)},[]),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"w-full h-[228px] mx-auto relative",ref:e,children:(0,r.jsx)("svg",{ref:a,children:(0,r.jsxs)("g",{className:"chart-margin",children:[(0,r.jsx)("g",{className:"x-axis"}),(0,r.jsx)("g",{className:"y-axis"}),(0,r.jsx)("g",{className:"chart-area"}),(0,r.jsx)("g",{className:"tooltip-area"}),(0,r.jsx)("g",{className:"legend"})]})})})})};e.default=i}}]);