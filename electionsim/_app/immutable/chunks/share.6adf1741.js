var je=Object.defineProperty;var Me=(l,t,e)=>t in l?je(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var De=(l,t,e)=>(Me(l,typeof t!="symbol"?t+"":t,e),e);import{w as Oe,d as qe}from"./index.9e773dc6.js";import{b as Ne}from"./paths.6d595aae.js";import{p as wt,S as j,a as ne,i as Ae}from"./party.876b217d.js";import{R as bt,S as ze,i as Be,s as Ge,k as g,N as tt,q as x,a as P,l as _,m as p,O as et,h,r as S,c as D,n as o,J as yt,b as N,G as a,L as Ue,P as Ze,u as vt,H as Ht,Q as xe,p as Ft}from"./index.495c775b.js";import{b as Ye}from"./byx-mobile.fa54e4c2.js";var Se={},ce={},ue=34,_t=10,fe=13;function Te(l){return new Function("d","return {"+l.map(function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'}).join(",")+"}")}function Je(l,t){var e=Te(l);return function(s,r){return t(e(s),r,l)}}function Re(l){var t=Object.create(null),e=[];return l.forEach(function(s){for(var r in s)r in t||e.push(t[r]=r)}),e}function T(l,t){var e=l+"",s=e.length;return s<t?new Array(t-s+1).join(0)+e:e}function Qe(l){return l<0?"-"+T(-l,6):l>9999?"+"+T(l,6):T(l,4)}function We(l){var t=l.getUTCHours(),e=l.getUTCMinutes(),s=l.getUTCSeconds(),r=l.getUTCMilliseconds();return isNaN(l)?"Invalid Date":Qe(l.getUTCFullYear())+"-"+T(l.getUTCMonth()+1,2)+"-"+T(l.getUTCDate(),2)+(r?"T"+T(t,2)+":"+T(e,2)+":"+T(s,2)+"."+T(r,3)+"Z":s?"T"+T(t,2)+":"+T(e,2)+":"+T(s,2)+"Z":e||t?"T"+T(t,2)+":"+T(e,2)+"Z":"")}function Ke(l){var t=new RegExp('["'+l+`
\r]`),e=l.charCodeAt(0);function s(u,E){var V,n,f=r(u,function(v,R){if(V)return V(v,R-1);n=v,V=E?Je(v,E):Te(v)});return f.columns=n||[],f}function r(u,E){var V=[],n=u.length,f=0,v=0,R,F=n<=0,H=!1;u.charCodeAt(n-1)===_t&&--n,u.charCodeAt(n-1)===fe&&--n;function rt(){if(F)return ce;if(H)return H=!1,Se;var M,U=f,q;if(u.charCodeAt(U)===ue){for(;f++<n&&u.charCodeAt(f)!==ue||u.charCodeAt(++f)===ue;);return(M=f)>=n?F=!0:(q=u.charCodeAt(f++))===_t?H=!0:q===fe&&(H=!0,u.charCodeAt(f)===_t&&++f),u.slice(U+1,M-1).replace(/""/g,'"')}for(;f<n;){if((q=u.charCodeAt(M=f++))===_t)H=!0;else if(q===fe)H=!0,u.charCodeAt(f)===_t&&++f;else if(q!==e)continue;return u.slice(U,M)}return F=!0,u.slice(U,n)}for(;(R=rt())!==ce;){for(var G=[];R!==Se&&R!==ce;)G.push(R),R=rt();E&&(G=E(G,v++))==null||V.push(G)}return V}function c(u,E){return u.map(function(V){return E.map(function(n){return y(V[n])}).join(l)})}function i(u,E){return E==null&&(E=Re(u)),[E.map(y).join(l)].concat(c(u,E)).join(`
`)}function d(u,E){return E==null&&(E=Re(u)),c(u,E).join(`
`)}function m(u){return u.map(w).join(`
`)}function w(u){return u.map(y).join(l)}function y(u){return u==null?"":u instanceof Date?We(u):t.test(u+="")?'"'+u.replace(/"/g,'""')+'"':u}return{parse:s,parseRows:r,format:i,formatBody:d,formatRows:m,formatRow:w,formatValue:y}}var Xe=Ke(","),$e=Xe.parse;function tr(l){if(!l.ok)throw new Error(l.status+" "+l.statusText);return l.text()}function er(l,t){return fetch(l,t).then(tr)}function rr(l){return function(t,e,s){return arguments.length===2&&typeof e=="function"&&(s=e,e=void 0),er(t,e).then(function(r){return l(r,s)})}}var lr=rr($e);class sr{constructor(){De(this,"matrix");const t=bt(wt);this.matrix=this.createVoteFlowMatrix(t.list)}createVoteFlowMatrix(t){return t.reduce((e,s)=>({...e,[s.Name]:t.reduce((r,c)=>({...r,[c.Name]:s.Name===c.Name?1:0}),{})}),{})}updateVoteFlow(t,e,s){const r=s<this.matrix[t][t]?s:this.matrix[t][t];this.matrix[t][e]+=s,this.matrix[t][t]-=r}updateVoteFlowBetweenGroups(t,e,s){const[r,c]=s>0?[t,e]:[e,t];r.forEach(i=>{const d=Math.min(Math.abs(s),this.matrix[i][i])/(r.length+c.length);c.forEach(m=>{this.updateVoteFlow(i,m,Math.min(d))})})}applyVoteFlow(t){const e=bt(wt),s=Object.keys(this.matrix),r=s.reduce((i,d)=>{var m;return{...i,[d]:((m=t.find(({party:w})=>d===w.Name))==null?void 0:m.points)||0}},{}),c=t.reduce((i,{points:d})=>i+d,0);return s.map(i=>({party:e.map.get(i),points:s.reduce((d,m)=>d+r[m]*this.matrix[m][i],0)*c})).filter(({points:i})=>i>0).sort((i,d)=>d.points-i.points)}calculateVoteFlowResult(t){return Object.entries(t).reduce((e,[s,r])=>({...e,[s]:Object.entries(r).reduce((c,[i,d])=>d?{...c,[i]:this.applyVoteFlow(d)}:c,{})}),{})}}const ar={[j.Scale0]:0,[j.Scale10]:.1,[j.Scale30]:.3,[j.Scale50]:.5,[j.Scale70]:.7,[j.Scale90]:.9,[j.Scale100]:1},St={[j.Scale0]:-.3,[j.Scale10]:-.2,[j.Scale30]:-.1,[j.Scale50]:0,[j.Scale70]:.1,[j.Scale90]:.2,[j.Scale100]:.3},or=`${Ne}/data/popularity-projection-2566.csv`;let he;const ir=()=>{const{subscribe:l,update:t}=Oe({});return{subscribe:l,load:async()=>{const e=bt(wt);he=(await lr(or)).reduce((r,{province:c,electorialDistrictNumber:i,party:d,points:m})=>(r[c]||(r[c]={}),r[c][+i]||(r[c][+i]=[]),e.map.get(d)||wt.add({Name:d}),r[c][+i].push({party:e.map.get(d),points:+m}),r),{}),t(()=>he)},calculate(){var c,i,d;const{input:e}=bt(Ae),s=bt(wt),r=new sr;if(e.quiz2&&r.updateVoteFlow("พลังประชารัฐ","รวมไทยสร้างชาติ",ar[e.quiz2]),e.quiz3){const m=St[e.quiz3];m>0?r.updateVoteFlow("ก้าวไกล","เพื่อไทย",m):m<0&&r.updateVoteFlow("เพื่อไทย","ก้าวไกล",-m)}if(e.quiz4){const m=St[e.quiz4];if(m!==0){const w=["พลังประชารัฐ","รวมไทยสร้างชาติ"],y=s.list.filter(({Name:u,PartyGroup:E})=>E===ne.Government&&!w.includes(u)).map(({Name:u})=>u);r.updateVoteFlowBetweenGroups(y,w,m)}}if(e.quiz5){const m=St[e.quiz5];if(m!==0){const w=s.list.filter(({PartyGroup:u})=>u===ne.Opposition).map(({Name:u})=>u),y=s.list.filter(({PartyGroup:u})=>u===ne.Government).map(({Name:u})=>u);r.updateVoteFlowBetweenGroups(w,y,m)}}e.quiz7&&((c=e.quiz8)!=null&&c.percent)&&((i=e.quiz8)!=null&&i.from)&&((d=e.quiz8)!=null&&d.to)&&r.updateVoteFlow(e.quiz8.from,e.quiz8.to,St[e.quiz8.percent]),t(()=>r.calculateVoteFlowResult(he))}}},nr=ir(),yr=qe(nr,l=>{const t={};return Object.values(l).forEach(e=>Object.values(e).forEach(s=>{const{party:r}=s[0];r&&(t[r.Name]||(t[r.Name]={party:r,fromDistrict:0,fromPartylist:0,total:0}),t[r.Name].fromDistrict++,t[r.Name].fromPartylist++,t[r.Name].total+=2)})),Object.values(t).sort((e,s)=>s.total-e.total)});function He(l,t,e){const s=l.slice();return s[11]=t[e].party,s[12]=t[e].total,s}function Fe(l,t,e){const s=l.slice();return s[11]=t[e].party,s[12]=t[e].total,s}function cr(l){let t,e,s,r,c;return{c(){t=g("div"),e=P(),s=g("div"),r=P(),c=g("div"),this.h()},l(i){t=_(i,"DIV",{class:!0}),p(t).forEach(h),e=D(i),s=_(i,"DIV",{class:!0}),p(s).forEach(h),r=D(i),c=_(i,"DIV",{class:!0}),p(c).forEach(h),this.h()},h(){o(t,"class","w-1 h-1 bg-white rounded-full"),o(s,"class","w-1 h-1 bg-white rounded-full"),o(c,"class","w-1 h-1 bg-white rounded-full")},m(i,d){N(i,t,d),N(i,e,d),N(i,s,d),N(i,r,d),N(i,c,d)},p:Ht,d(i){i&&h(t),i&&h(e),i&&h(s),i&&h(r),i&&h(c)}}}function ur(l){let t,e,s;return{c(){t=g("img"),this.h()},l(r){t=_(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){o(t,"class","w-16 h-16"),yt(t.src,e=l[11].Images[0].url)||o(t,"src",e),o(t,"alt",s=l[11].Images[0].title)},m(r,c){N(r,t,c)},p(r,c){c&8&&!yt(t.src,e=r[11].Images[0].url)&&o(t,"src",e),c&8&&s!==(s=r[11].Images[0].title)&&o(t,"alt",s)},d(r){r&&h(t)}}}function ke(l){let t,e,s,r,c=l[11].Name+"",i,d,m,w=l[12]+"",y,u;function E(f,v){return f[11].Images?ur:cr}let V=E(l),n=V(l);return{c(){t=g("div"),e=g("div"),n.c(),s=P(),r=g("h6"),i=x(c),d=P(),m=g("h6"),y=x(w),u=P(),this.h()},l(f){t=_(f,"DIV",{class:!0});var v=p(t);e=_(v,"DIV",{class:!0,style:!0});var R=p(e);n.l(R),R.forEach(h),s=D(v),r=_(v,"H6",{class:!0});var F=p(r);i=S(F,c),F.forEach(h),d=D(v),m=_(v,"H6",{class:!0});var H=p(m);y=S(H,w),H.forEach(h),u=D(v),v.forEach(h),this.h()},h(){o(e,"class","w-16 h-16 flex items-center justify-center gap-x-1"),Ft(e,"background-color",l[11].Color),o(r,"class","typo-b6 mt-1"),o(m,"class","typo-b6"),o(t,"class","flex flex-col items-center")},m(f,v){N(f,t,v),a(t,e),n.m(e,null),a(t,s),a(t,r),a(r,i),a(t,d),a(t,m),a(m,y),a(t,u)},p(f,v){V===(V=E(f))&&n?n.p(f,v):(n.d(1),n=V(f),n&&(n.c(),n.m(e,null))),v&8&&Ft(e,"background-color",f[11].Color),v&8&&c!==(c=f[11].Name+"")&&vt(i,c),v&8&&w!==(w=f[12]+"")&&vt(y,w)},d(f){f&&h(t),n.d()}}}function fr(l){let t,e,s,r,c;return{c(){t=g("div"),e=P(),s=g("div"),r=P(),c=g("div"),this.h()},l(i){t=_(i,"DIV",{class:!0}),p(t).forEach(h),e=D(i),s=_(i,"DIV",{class:!0}),p(s).forEach(h),r=D(i),c=_(i,"DIV",{class:!0}),p(c).forEach(h),this.h()},h(){o(t,"class","w-1 h-1 bg-white rounded-full"),o(s,"class","w-1 h-1 bg-white rounded-full"),o(c,"class","w-1 h-1 bg-white rounded-full")},m(i,d){N(i,t,d),N(i,e,d),N(i,s,d),N(i,r,d),N(i,c,d)},p:Ht,d(i){i&&h(t),i&&h(e),i&&h(s),i&&h(r),i&&h(c)}}}function hr(l){let t,e,s;return{c(){t=g("img"),this.h()},l(r){t=_(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){o(t,"class","w-16 h-16"),yt(t.src,e=l[11].Images[0].url)||o(t,"src",e),o(t,"alt",s=l[11].Images[0].title)},m(r,c){N(r,t,c)},p(r,c){c&4&&!yt(t.src,e=r[11].Images[0].url)&&o(t,"src",e),c&4&&s!==(s=r[11].Images[0].title)&&o(t,"alt",s)},d(r){r&&h(t)}}}function Le(l){let t,e,s,r,c=l[11].Name+"",i,d,m,w=l[12]+"",y,u;function E(f,v){return f[11].Images?hr:fr}let V=E(l),n=V(l);return{c(){t=g("div"),e=g("div"),n.c(),s=P(),r=g("h6"),i=x(c),d=P(),m=g("h6"),y=x(w),u=P(),this.h()},l(f){t=_(f,"DIV",{class:!0});var v=p(t);e=_(v,"DIV",{class:!0,style:!0});var R=p(e);n.l(R),R.forEach(h),s=D(v),r=_(v,"H6",{class:!0});var F=p(r);i=S(F,c),F.forEach(h),d=D(v),m=_(v,"H6",{class:!0});var H=p(m);y=S(H,w),H.forEach(h),u=D(v),v.forEach(h),this.h()},h(){o(e,"class","w-16 h-16 flex items-center justify-center gap-x-1"),Ft(e,"background-color",l[11].Color),o(r,"class","typo-b6 mt-1"),o(m,"class","typo-b6"),o(t,"class","flex flex-col items-center")},m(f,v){N(f,t,v),a(t,e),n.m(e,null),a(t,s),a(t,r),a(r,i),a(t,d),a(t,m),a(m,y),a(t,u)},p(f,v){V===(V=E(f))&&n?n.p(f,v):(n.d(1),n=V(f),n&&(n.c(),n.m(e,null))),v&4&&Ft(e,"background-color",f[11].Color),v&4&&c!==(c=f[11].Name+"")&&vt(i,c),v&4&&w!==(w=f[12]+"")&&vt(y,w)},d(f){f&&h(t),n.d()}}}function dr(l){let t,e,s,r,c,i,d,m,w,y,u,E,V,n,f,v,R,F,H,rt,G,M,U,q,kt,Lt,W,Nt,Z,lt,Tt,jt,Y,Mt,pt=l[4]-l[0]+"",Et,Ot,qt,K,At,A,O,J,st,zt,at,Bt,Gt,ot,Ut,Zt,z,Yt,it,Jt,Qt,Wt,Kt,Xt,Q,nt,$t,te,ct,de,ee,ut,X,gt,re,le,se,me,ft=l[3],k=[];for(let I=0;I<ft.length;I+=1)k[I]=ke(Fe(l,ft,I));let ht=l[2],L=[];for(let I=0;I<ht.length;I+=1)L[I]=Le(He(l,ht,I));return{c(){t=g("div"),e=g("div"),s=g("a"),r=tt("svg"),c=tt("path"),i=x(`
			ย้อนกลับ`),d=P(),m=g("a"),w=tt("svg"),y=tt("path"),u=x(`
			หน้าแรก`),E=P(),V=g("h4"),n=x("โฉมหน้า #สภา66 "),f=g("br"),v=x("จากการวิเคราะห์ของคุณ"),R=P(),F=g("div"),H=g("h6"),rt=x("ฝ่ายรัฐบาล"),G=P(),M=g("h6"),U=x("("),q=x(l[0]),kt=x(")"),Lt=P(),W=g("div");for(let I=0;I<k.length;I+=1)k[I].c();Nt=P(),Z=g("div"),lt=g("h6"),Tt=x("ฝ่ายค้าน"),jt=P(),Y=g("h6"),Mt=x("("),Et=x(pt),Ot=x(")"),qt=P(),K=g("div");for(let I=0;I<L.length;I+=1)L[I].c();At=P(),A=g("div"),O=tt("svg"),J=tt("rect"),st=tt("path"),zt=P(),at=g("h5"),Bt=x("ต้องการเสียงสนับสนุนจาก ส.ว. เพื่อเลือกนายกฯ อีก"),Gt=P(),ot=g("h5"),Ut=x("122+"),Zt=P(),z=g("h4"),Yt=x("ไม่ว่าคุณจะชอบผลวิเคราะห์ที่ออกมา หรือไม่ ก็"),it=g("span"),Jt=x("ต้องไม่ลืมออกไปเลือกตั้ง"),Qt=P(),Wt=g("br"),Kt=x(`
		กำหนดชะตาประเทศไทย 14 พ.ค. 66 นี้`),Xt=P(),Q=g("div"),nt=g("h4"),$t=x("ร่วมพัฒนาโดย"),te=P(),ct=g("img"),ee=P(),ut=g("div"),X=g("p"),gt=g("b"),re=x("Disclaimer"),le=x(`: ผลการวิเคราะห์นี้เป็นเพียงการ ทดลองประมาณการแบบคร่าวๆ
			บนฐานข้อมูลผลการ
			เลือกตั้งเดิมบนกติกาเลือกตั้งใหม่และข้อสันนิษฐานที่กำหนดไว้เท่านั้น
			อาจมีปัจจัยอื่นที่ส่งผลต่อ ผลลัพธ์ในการเลือกตั้ง
			และไม่ได้มีเจตนาในการชี้นำผลการเลือกตั้งแต่อย่างใด`),this.h()},l(I){t=_(I,"DIV",{class:!0});var C=p(t);e=_(C,"DIV",{class:!0});var b=p(e);s=_(b,"A",{class:!0});var B=p(s);r=et(B,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var ve=p(r);c=et(ve,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),p(c).forEach(h),ve.forEach(h),i=S(B,`
			ย้อนกลับ`),B.forEach(h),d=D(b),m=_(b,"A",{href:!0,class:!0});var ae=p(m);w=et(ae,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,class:!0});var pe=p(w);y=et(pe,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),p(y).forEach(h),pe.forEach(h),u=S(ae,`
			หน้าแรก`),ae.forEach(h),b.forEach(h),E=D(C),V=_(C,"H4",{class:!0});var Vt=p(V);n=S(Vt,"โฉมหน้า #สภา66 "),f=_(Vt,"BR",{class:!0}),v=S(Vt,"จากการวิเคราะห์ของคุณ"),Vt.forEach(h),R=D(C),F=_(C,"DIV",{class:!0});var Ct=p(F);H=_(Ct,"H6",{class:!0});var ge=p(H);rt=S(ge,"ฝ่ายรัฐบาล"),ge.forEach(h),G=D(Ct),M=_(Ct,"H6",{class:!0});var It=p(M);U=S(It,"("),q=S(It,l[0]),kt=S(It,")"),It.forEach(h),Ct.forEach(h),Lt=D(C),W=_(C,"DIV",{class:!0});var _e=p(W);for(let $=0;$<k.length;$+=1)k[$].l(_e);_e.forEach(h),Nt=D(C),Z=_(C,"DIV",{class:!0});var Pt=p(Z);lt=_(Pt,"H6",{class:!0});var we=p(lt);Tt=S(we,"ฝ่ายค้าน"),we.forEach(h),jt=D(Pt),Y=_(Pt,"H6",{class:!0});var Dt=p(Y);Mt=S(Dt,"("),Et=S(Dt,pt),Ot=S(Dt,")"),Dt.forEach(h),Pt.forEach(h),qt=D(C),K=_(C,"DIV",{class:!0});var be=p(K);for(let $=0;$<L.length;$+=1)L[$].l(be);be.forEach(h),At=D(C),A=_(C,"DIV",{class:!0});var dt=p(A);O=et(dt,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,class:!0});var oe=p(O);J=et(oe,"rect",{width:!0,height:!0,rx:!0,fill:!0}),p(J).forEach(h),st=et(oe,"path",{d:!0,fill:!0}),p(st).forEach(h),oe.forEach(h),zt=D(dt),at=_(dt,"H5",{class:!0});var ye=p(at);Bt=S(ye,"ต้องการเสียงสนับสนุนจาก ส.ว. เพื่อเลือกนายกฯ อีก"),ye.forEach(h),Gt=D(dt),ot=_(dt,"H5",{class:!0});var Ee=p(ot);Ut=S(Ee,"122+"),Ee.forEach(h),dt.forEach(h),Zt=D(C),z=_(C,"H4",{class:!0});var mt=p(z);Yt=S(mt,"ไม่ว่าคุณจะชอบผลวิเคราะห์ที่ออกมา หรือไม่ ก็"),it=_(mt,"SPAN",{class:!0});var Ve=p(it);Jt=S(Ve,"ต้องไม่ลืมออกไปเลือกตั้ง"),Ve.forEach(h),Qt=D(mt),Wt=_(mt,"BR",{}),Kt=S(mt,`
		กำหนดชะตาประเทศไทย 14 พ.ค. 66 นี้`),mt.forEach(h),Xt=D(C),Q=_(C,"DIV",{class:!0});var xt=p(Q);nt=_(xt,"H4",{class:!0});var Ce=p(nt);$t=S(Ce,"ร่วมพัฒนาโดย"),Ce.forEach(h),te=D(xt),ct=_(xt,"IMG",{src:!0,alt:!0}),xt.forEach(h),ee=D(C),ut=_(C,"DIV",{class:!0});var Ie=p(ut);X=_(Ie,"P",{class:!0});var ie=p(X);gt=_(ie,"B",{});var Pe=p(gt);re=S(Pe,"Disclaimer"),Pe.forEach(h),le=S(ie,`: ผลการวิเคราะห์นี้เป็นเพียงการ ทดลองประมาณการแบบคร่าวๆ
			บนฐานข้อมูลผลการ
			เลือกตั้งเดิมบนกติกาเลือกตั้งใหม่และข้อสันนิษฐานที่กำหนดไว้เท่านั้น
			อาจมีปัจจัยอื่นที่ส่งผลต่อ ผลลัพธ์ในการเลือกตั้ง
			และไม่ได้มีเจตนาในการชี้นำผลการเลือกตั้งแต่อย่างใด`),ie.forEach(h),Ie.forEach(h),C.forEach(h),this.h()},h(){o(c,"fill-rule","evenodd"),o(c,"clip-rule","evenodd"),o(c,"d","M8.16098 12.98L15.362 5.77999L16.3701 6.78799L10.1773 12.98L16.3701 19.172L15.362 20.18L8.16098 12.98Z"),o(c,"fill","#0000FF"),o(r,"width","25"),o(r,"height","25"),o(r,"viewBox","0 0 25 25"),o(r,"fill","none"),o(r,"xmlns","http://www.w3.org/2000/svg"),o(s,"class","flex items-center typo-b5 text-byx-blue mb-5 cursor-pointer mr-4"),o(y,"fill-rule","evenodd"),o(y,"clip-rule","evenodd"),o(y,"d","M10.3847 1.88124C10.1575 1.70174 9.83682 1.70174 9.60967 1.88124L0.628418 8.88749L1.40342 9.87499L2.50342 9.01249V16.75C2.50342 17.4403 3.06306 18 3.75342 18H16.2534C16.9438 18 17.5034 17.4403 17.5034 16.75V9.01874L18.6034 9.87499L19.3784 8.89374L10.3847 1.88124ZM11.2534 16.75H8.75342V11.75H11.2534V16.75ZM12.5034 16.75V11.75C12.5034 11.0596 11.9438 10.5 11.2534 10.5H8.75342C8.06306 10.5 7.50342 11.0596 7.50342 11.75V16.75H3.75342V8.03749L10.0034 3.16874L16.2534 8.04374V16.75H12.5034Z"),o(y,"fill","#0000FF"),o(w,"width","21"),o(w,"height","21"),o(w,"viewBox","0 0 21 21"),o(w,"fill","none"),o(w,"xmlns","http://www.w3.org/2000/svg"),o(w,"class","mr-1"),o(m,"href",Ne+"/"),o(m,"class","flex items-center typo-b5 text-byx-blue mb-5 cursor-pointer"),o(e,"class","flex w-full"),o(f,"class","hidden md:inline"),o(V,"class","typo-h4 font-bold beyonx-text-gradient text-center"),o(H,"class","typo-h6 font-bold"),o(M,"class","typo-h6"),o(F,"class","flex w-full justify-center mt-10 mb-[10px]"),o(W,"class","flex justify-center flex-wrap gap-x-6"),o(lt,"class","typo-h7 font-bold"),o(Y,"class","typo-h7"),o(Z,"class","flex w-full justify-center mt-5 mb-[10px]"),o(K,"class","flex justify-center flex-wrap gap-x-6"),o(J,"width","24"),o(J,"height","24"),o(J,"rx","12"),o(J,"fill","#D09D03"),o(st,"d","M11.5778 13.42L10.9198 9.444V6.728H13.1038V9.444L12.4598 13.42H11.5778ZM11.9978 16.668C11.5498 16.668 11.2278 16.5653 11.0318 16.36C10.8451 16.1547 10.7518 15.9027 10.7518 15.604V15.268C10.7518 14.9693 10.8451 14.7173 11.0318 14.512C11.2278 14.3067 11.5498 14.204 11.9978 14.204C12.4458 14.204 12.7631 14.3067 12.9498 14.512C13.1458 14.7173 13.2438 14.9693 13.2438 15.268V15.604C13.2438 15.9027 13.1458 16.1547 12.9498 16.36C12.7631 16.5653 12.4458 16.668 11.9978 16.668Z"),o(st,"fill","#231F20"),o(O,"width","24"),o(O,"height","24"),o(O,"viewBox","0 0 24 24"),o(O,"fill","none"),o(O,"xmlns","http://www.w3.org/2000/svg"),o(O,"class","mr-[10px]"),o(at,"class","typo-b5 flex-1"),o(ot,"class","typo-b4 font-bold ml-2"),o(A,"class","py-3 px-5 flex items-center my-5 bg-gray-4"),o(it,"class","beyonx-text-gradient font-bold"),o(z,"class","typo-b4 text-center"),o(nt,"class","typo-b4 mr-4"),yt(ct.src,de=Ye)||o(ct,"src",de),o(ct,"alt","beyondx"),o(Q,"class","flex items-center mt-10 mb-5"),o(X,"class","typo-b6 py-2 px-4"),o(ut,"class","w-full bg-gray-4"),o(t,"class","flex flex-col items-center w-[312px] md:w-[650px] py-10")},m(I,C){N(I,t,C),a(t,e),a(e,s),a(s,r),a(r,c),a(s,i),a(e,d),a(e,m),a(m,w),a(w,y),a(m,u),a(t,E),a(t,V),a(V,n),a(V,f),a(V,v),a(t,R),a(t,F),a(F,H),a(H,rt),a(F,G),a(F,M),a(M,U),a(M,q),a(M,kt),a(t,Lt),a(t,W);for(let b=0;b<k.length;b+=1)k[b].m(W,null);a(t,Nt),a(t,Z),a(Z,lt),a(lt,Tt),a(Z,jt),a(Z,Y),a(Y,Mt),a(Y,Et),a(Y,Ot),a(t,qt),a(t,K);for(let b=0;b<L.length;b+=1)L[b].m(K,null);a(t,At),a(t,A),a(A,O),a(O,J),a(O,st),a(A,zt),a(A,at),a(at,Bt),a(A,Gt),a(A,ot),a(ot,Ut),a(t,Zt),a(t,z),a(z,Yt),a(z,it),a(it,Jt),a(z,Qt),a(z,Wt),a(z,Kt),a(t,Xt),a(t,Q),a(Q,nt),a(nt,$t),a(Q,te),a(Q,ct),a(t,ee),a(t,ut),a(ut,X),a(X,gt),a(gt,re),a(X,le),se||(me=Ue(s,"click",function(){Ze(l[1])&&l[1].apply(this,arguments)}),se=!0)},p(I,[C]){if(l=I,C&1&&vt(q,l[0]),C&8){ft=l[3];let b;for(b=0;b<ft.length;b+=1){const B=Fe(l,ft,b);k[b]?k[b].p(B,C):(k[b]=ke(B),k[b].c(),k[b].m(W,null))}for(;b<k.length;b+=1)k[b].d(1);k.length=ft.length}if(C&17&&pt!==(pt=l[4]-l[0]+"")&&vt(Et,pt),C&4){ht=l[2];let b;for(b=0;b<ht.length;b+=1){const B=He(l,ht,b);L[b]?L[b].p(B,C):(L[b]=Le(B),L[b].c(),L[b].m(K,null))}for(;b<L.length;b+=1)L[b].d(1);L.length=ht.length}},i:Ht,o:Ht,d(I){I&&h(t),xe(k,I),xe(L,I),se=!1,me()}}}const Rt=5;function mr(l,t,e){let s,r,c,i,d,{representativeRecord:m}=t,{governmentParties:w}=t,{oppositionParties:y}=t,{governmentPoints:u}=t,{toggleIsShare:E}=t;const V={Name:"อื่นๆ",Color:"#CCCCCC"};return l.$$set=n=>{"representativeRecord"in n&&e(5,m=n.representativeRecord),"governmentParties"in n&&e(6,w=n.governmentParties),"oppositionParties"in n&&e(7,y=n.oppositionParties),"governmentPoints"in n&&e(0,u=n.governmentPoints),"toggleIsShare"in n&&e(1,E=n.toggleIsShare)},l.$$.update=()=>{l.$$.dirty&32&&e(4,s=m.reduce((n,f)=>n+f.total,0)),l.$$.dirty&64&&e(9,r=w.reduce((n,{fromDistrict:f,fromPartylist:v,total:R})=>(R<=Rt&&(n.fromDistrict+=f,n.fromPartylist+=v,n.total+=R),n),{party:V,fromDistrict:0,fromPartylist:0,total:0})),l.$$.dirty&128&&e(8,c=y.reduce((n,{fromDistrict:f,fromPartylist:v,total:R})=>(R<=Rt&&(n.fromDistrict+=f,n.fromPartylist+=v,n.total+=R),n),{party:V,fromDistrict:0,fromPartylist:0,total:0})),l.$$.dirty&576&&e(3,i=[...w.sort((n,f)=>f.total-n.total).filter(n=>n.total>Rt),r].filter(n=>n.total>0)),l.$$.dirty&384&&e(2,d=[...y.sort((n,f)=>f.total-n.total).filter(n=>n.total>Rt),c].filter(n=>n.total>0))},[u,E,d,i,s,m,w,y,c,r]}class Er extends ze{constructor(t){super(),Be(this,t,mr,dr,Ge,{representativeRecord:5,governmentParties:6,oppositionParties:7,governmentPoints:0,toggleIsShare:1})}}export{Er as S,lr as c,nr as d,yr as r};
