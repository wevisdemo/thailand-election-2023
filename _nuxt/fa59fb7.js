(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{422:function(t,e,r){var content=r(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(100).default)("53f0e59f",content,!0,{sourceMap:!1})},423:function(t,e,r){var content=r(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(100).default)("1af9a5d6",content,!0,{sourceMap:!1})},424:function(t,e,r){var content=r(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(100).default)("b27caece",content,!0,{sourceMap:!1})},431:function(t,e,r){t.exports=r.p+"img/star_label.3f57566.svg"},432:function(t,e,r){"use strict";r(422)},433:function(t,e,r){var n=r(99)((function(i){return i[1]}));n.push([t.i,'.star-label[data-v-45384053]{bottom:0;position:absolute;right:0;transform:rotate(15deg) translate(50%,-50%);width:128px}@media screen and (max-width:767px){.star-label[data-v-45384053]{transform:rotate(15deg) translateY(-20%)}}.star-label .countdown-numbers-wrap[data-v-45384053]{left:50%;position:absolute;text-align:center;top:calc(50% + 3px);transform:translate(-50%,-50%)}.star-label .countdown-numbers-wrap .number[data-v-45384053]{font-family:"Kondolar Thai";font-size:44px;font-weight:700;line-height:1;transform:translateY(3px)}',""]),n.locals={},t.exports=n},434:function(t,e,r){"use strict";r(423)},435:function(t,e,r){var n=r(99)((function(i){return i[1]}));n.push([t.i,".article-card[data-v-43111a29]{cursor:pointer}@media screen and (max-width:767px){.article-card[data-v-43111a29]{max-width:340px}}.article-card:hover .title[data-v-43111a29]{opacity:.6}.img-wrap[data-v-43111a29]{border:4px solid var(--color-black);border-radius:20px;height:160px;overflow:hidden}.text-wrap[data-v-43111a29]{padding:16px}.text-wrap .title[data-v-43111a29]{font-weight:700;margin-bottom:4px;transition:.3s}.text-wrap .date[data-v-43111a29]{opacity:.6}.typo-h7[data-v-43111a29]{font-size:21px}.typo-b6[data-v-43111a29]{font-size:12px}",""]),n.locals={},t.exports=n},436:function(t,e,r){"use strict";r(424)},437:function(t,e,r){var n=r(99)((function(i){return i[1]}));n.push([t.i,".button[data-v-6353dd76]{border:3px solid;border-radius:10px;cursor:pointer;padding:12px 20px;transition:color .3s,background .3s,border .2s}.button.white-color[data-v-6353dd76]{border-color:var(--color-black)}.button.black-color[data-v-6353dd76]{border-color:var(--color-white)}.button[data-v-6353dd76]:hover{background:var(--color-highlight-2);border-color:var(--color-highlight-2);color:var(--color-black)}",""]),n.locals={},t.exports=n},441:function(t,e,r){var content=r(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(100).default)("5af875c4",content,!0,{sourceMap:!1})},449:function(t,e,r){"use strict";r.r(e);r(101);var n=r(427),o=r.n(n),c={props:{election_day:{type:String,default:""}},data:function(){return{star_label:r(431),show_star_label:!0,countdown_timer:0,countdown_unit:"วัน"}},mounted:function(){this.getCountdownTimer(),this.getInterval()},methods:{getInterval:function(){var t=this;setInterval((function(){t.getCountdownTimer()}),1e3)},getCountdownTimer:function(){var t=o()(this.election_day),e=o()(o()().format("YYYY-MM-DD HH:mm:s")),r=t.diff(e,"second"),n=Math.floor(r/60),c=Math.floor(n/60),d=Math.floor(c/24);this.countdown_timer=d,this.countdown_unit="วัน",d<=0&&(this.countdown_timer=c,this.countdown_unit="ชั่วโมง",c<=0&&(this.countdown_timer=n,this.countdown_unit="นาที",n<=0&&(this.countdown_timer=r,this.countdown_unit="วินาที",r<=0&&(this.show_star_label=!1))))}}},d=(r(432),r(57)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return t.show_star_label?e("div",{staticClass:"star-label"},[e("img",{attrs:{src:t.star_label,alt:"star label"}}),t._v(" "),e("div",{staticClass:"countdown-numbers-wrap"},[t._m(0),t._v(" "),e("p",{staticClass:"number"},[t._v(t._s(t.countdown_timer))]),t._v(" "),e("p",{staticClass:"typo-b6"},[e("b",[t._v(t._s(t.countdown_unit))])])])]):t._e()}),[function(){var t=this._self._c;return t("p",{staticClass:"typo-b7"},[t("b",[this._v("เหลืออีก")])])}],!1,null,"45384053",null);e.default=component.exports},450:function(t,e,r){"use strict";r.r(e);r(426);var n={props:{data:{type:Object,default:{}}}},o=(r(434),r(57)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("a",{attrs:{href:t.data.link,target:"_blank",rel:"noopener noreferrer"}},[e("div",{staticClass:"article-card"},[e("div",{staticClass:"img-wrap"},[e("img",{attrs:{src:t.data.image,alt:""}})]),t._v(" "),e("div",{staticClass:"text-wrap"},[e("p",{staticClass:"title typo-h7",domProps:{innerHTML:t._s(t.data.title)}}),t._v(" "),e("p",{staticClass:"date typo-b6"},[t._v(t._s(t.data.date))])])])])}),[],!1,null,"43111a29",null);e.default=component.exports},451:function(t,e,r){"use strict";r.r(e);var n={props:{text:{type:String,default:""},color:{type:String,default:""}}},o=(r(436),r(57)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"button",class:"white"===t.color?"white-color":"black-color"},[e("p",{staticClass:"typo-b4"},[e("b",[t._v(t._s(t.text))])])])}),[],!1,null,"6353dd76",null);e.default=component.exports},452:function(t){t.exports=JSON.parse('[{"ThName":"4 ปีผ่านมา ส.ส. ทำอะไรกันในสภาบ้าง?","EnName":"They Work For Us","Partner":"WeVis","Subtitle":"ทวนความจำกับผลงานการลงมติและการย้ายพรรคของ ส.ส. ชุดล่าสุด","Tag":"ผลงานที่ผ่านมา","Path":"theyworkforus","OrderLaunch":1,"OrderPre":5,"URL":"https://theyworkforus.wevis.info/","ComingSoon":false},{"ThName":"4 ปีผ่านมา พรรคการเมืองทำตามสัญญาอะไรได้บ้าง?","EnName":"Promise Tracker","Partner":"WeVis","Subtitle":"ทวนความจำกับพรรคในสภาชุดล่าสุด เคยขายนโยบายและทำอะไรไปบ้าง","Tag":"ผลงานที่ผ่านมา","Path":"promisetracker","OrderLaunch":2,"OrderPre":6,"URL":"https://promisetracker.wevis.info/","ComingSoon":false},{"ThName":"4 ปีผ่านมา  กฎหมายอะไรผ่านเข้าสภาบ้าง?","EnName":"Law Watch","Partner":"WeVis x 101Pub","Subtitle":"ตรวจงานรัฐสภาชุดล่าสุด เคยเสนอ/ผ่านกฎหมายอะไรให้เรา","Tag":"ผลงานที่ผ่านมา","Path":"lawwatch","OrderLaunch":3,"OrderPre":7,"URL":"https://wevis.info/law-watch","ComingSoon":false},{"ThName":"ส.ส. เขตบ้าน ทำงานตรงกับใจคุณแค่ไหน","EnName":"They Work for You?","Partner":"WeVis","Subtitle":"ลองโหวตกฎหมายที่เข้าสภาช่วง 4 ปีที่ผ่านมา เทียบกับผลโหวต ส.ส. เขตของคุณ","Tag":"ผลงานที่ผ่านมา","Path":"theyworkforyou","OrderLaunch":4,"OrderPre":8,"URL":"/theyworkforyou","ComingSoon":true},{"ThName":"สำรวจความคิด ผู้แทนแบบไหน ที่เราอยากเห็น?","EnName":"Design Your MPs","Partner":"WeVis","Subtitle":"ประชาชนทั้งหลาย มาช่วยกันออกแบบผู้แทนที่เราอยากเห็นกัน","Tag":"เครื่องมืออื่นๆ","Path":"designyourmp","OrderLaunch":5,"OrderPre":9,"URL":"/designyourmp","ComingSoon":false},{"ThName":"เลือกตั้งรอบนี้ มีอะไรให้เลือกบ้าง?","EnName":"Your Candidates","Partner":"WeVis","Subtitle":"เลือกตั้ง 66 มีผู้สมัคร/พรรคการเมืองไหนลงในเขตเรา","Tag":"เตรียมตัวเลือกตั้ง","Path":"yourcandidates","OrderLaunch":6,"OrderPre":1,"URL":"/yourcandidates","ComingSoon":true},{"ThName":"เลือกตั้งรอบนี้ พรรคคุณพี่ขายอะไรคะ?","EnName":"Policy Shop","Partner":"WeVis","Subtitle":"เลือกตั้ง 66 มีนโยบายอะไรน่าสนใจจากแต่ละพรรคการเมืองบ้าง","Tag":"เตรียมตัวเลือกตั้ง","Path":"policyshop","OrderLaunch":7,"OrderPre":2,"URL":"/policyshop","ComingSoon":true},{"ThName":"เลือกตั้งรอบนี้ มาลอง DIY ผลเลือกตั้งกัน","EnName":"Election SIM","Partner":"WeVis x BeyondX","Subtitle":"ลองเล่น! ทำนายผลเลือกตั้ง 66 จากคำตอบของคุณแบบง่ายๆ","Tag":"เตรียมตัวเลือกตั้ง","Path":"electionsim","OrderLaunch":8,"OrderPre":3,"URL":"/electionsim","ComingSoon":true},{"ThName":"เลือกตั้งรอบนี้ ส.ส./ผู้สมัคร เกี่ยวข้องกับธุรกิจไหนบ้าง?","EnName":"Politics & Business","Partner":"WeVis x HANDSE x Creden","Subtitle":"ลองสืบ! คน(จะ)เป็นผู้แทนฯ มีธุรกิจอะไร เกี่ยวข้องกับโครงการรัฐไหนบ้าง","Tag":"เตรียมตัวเลือกตั้ง","Path":"mpsasset","OrderLaunch":9,"OrderPre":4,"URL":"/politicianasset","ComingSoon":true},{"ThName":"ส่องเพจพรรค ที่ผ่านมา โพสต์อะไรกันไว้บ้าง","EnName":"Politics on Social","Partner":"WeVis x Wisesight","Subtitle":"ส่องโลกออนไลน์ของ 6 พรรคการเมืองหลักในสภา","Tag":"เครื่องมืออื่นๆ","Path":"politicsonsocial","OrderLaunch":10,"OrderPre":10,"URL":"https://wevis.info/politics-on-social/","ComingSoon":false}]')},454:function(t,e,r){t.exports=r.p+"img/wevis_election_66_logo.836b2e9.svg"},455:function(t,e,r){"use strict";r(441)},456:function(t,e,r){var n=r(99)((function(i){return i[1]}));n.push([t.i,".container[data-v-f3a4286c]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:0 24px;width:100%}@media screen and (max-width:320px){.container[data-v-f3a4286c]{padding:0 20px}}.cover-section[data-v-f3a4286c]{align-items:center;display:flex;justify-content:center;overflow-x:hidden;padding:100px 0 40px}.cover-section .logo-wrap[data-v-f3a4286c]{width:500px}@media screen and (max-width:767px){.cover-section .logo-wrap[data-v-f3a4286c]{width:270px}}.cover-section .head[data-v-f3a4286c]{margin:18.5px 0 16px;text-align:center}@media screen and (max-width:320px){.cover-section .head[data-v-f3a4286c]{width:200px}}.cover-section .subhead[data-v-f3a4286c]{color:var(--color-black);opacity:.6;text-align:center}@media screen and (max-width:1023px){.cover-section .subhead[data-v-f3a4286c]{width:300px}}@media screen and (max-width:767px){.cover-section .subhead[data-v-f3a4286c]{width:270px}}.cover-section .img-wrap[data-v-f3a4286c]{margin-top:16px;max-width:400px;position:relative;width:100%}.about-section[data-v-f3a4286c],.articles-section[data-v-f3a4286c],.partners-section[data-v-f3a4286c],.projects-section[data-v-f3a4286c]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:64px 0}@media screen and (max-width:767px){.about-section[data-v-f3a4286c],.articles-section[data-v-f3a4286c],.partners-section[data-v-f3a4286c],.projects-section[data-v-f3a4286c]{padding:40px 0}}.about-section .head[data-v-f3a4286c],.articles-section .head[data-v-f3a4286c],.partners-section .head[data-v-f3a4286c],.projects-section .head[data-v-f3a4286c]{margin-bottom:8px;text-align:center}@media screen and (max-width:767px){.about-section .head[data-v-f3a4286c],.articles-section .head[data-v-f3a4286c],.partners-section .head[data-v-f3a4286c],.projects-section .head[data-v-f3a4286c]{width:260px}}.about-section .subhead[data-v-f3a4286c],.articles-section .subhead[data-v-f3a4286c],.partners-section .subhead[data-v-f3a4286c],.projects-section .subhead[data-v-f3a4286c]{opacity:.6;text-align:center}@media screen and (max-width:767px){.about-section .subhead[data-v-f3a4286c],.articles-section .subhead[data-v-f3a4286c],.partners-section .subhead[data-v-f3a4286c],.projects-section .subhead[data-v-f3a4286c]{max-width:308px}}.about-section .article-cards[data-v-f3a4286c],.about-section .project-cards[data-v-f3a4286c],.articles-section .article-cards[data-v-f3a4286c],.articles-section .project-cards[data-v-f3a4286c],.partners-section .article-cards[data-v-f3a4286c],.partners-section .project-cards[data-v-f3a4286c],.projects-section .article-cards[data-v-f3a4286c],.projects-section .project-cards[data-v-f3a4286c]{grid-gap:40px;display:grid;flex-wrap:wrap;gap:40px;grid-template-columns:repeat(3,1fr);max-width:912px}@media screen and (max-width:1023px){.about-section .article-cards[data-v-f3a4286c],.about-section .project-cards[data-v-f3a4286c],.articles-section .article-cards[data-v-f3a4286c],.articles-section .project-cards[data-v-f3a4286c],.partners-section .article-cards[data-v-f3a4286c],.partners-section .project-cards[data-v-f3a4286c],.projects-section .article-cards[data-v-f3a4286c],.projects-section .project-cards[data-v-f3a4286c]{gap:24px}}@media screen and (max-width:767px){.about-section .article-cards[data-v-f3a4286c],.about-section .project-cards[data-v-f3a4286c],.articles-section .article-cards[data-v-f3a4286c],.articles-section .project-cards[data-v-f3a4286c],.partners-section .article-cards[data-v-f3a4286c],.partners-section .project-cards[data-v-f3a4286c],.projects-section .article-cards[data-v-f3a4286c],.projects-section .project-cards[data-v-f3a4286c]{grid-template-columns:repeat(1,1fr)}}.projects-section[data-v-f3a4286c]{background:var(--color-gray-1)}.projects-section .filters-wrap[data-v-f3a4286c]{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:24px 0}@media screen and (max-width:767px){.projects-section .filters-wrap[data-v-f3a4286c]{width:280px}}.projects-section .filters-wrap .filter-btn[data-v-f3a4286c]{background:#fff;border:3px solid var(--color-black);border-radius:24px;cursor:pointer;padding:12px 16px;transition:background .3s,border .2s;width:-moz-fit-content;width:fit-content}.projects-section .filters-wrap .filter-btn.active-filter-btn[data-v-f3a4286c]{background:var(--color-black);color:var(--color-white)}.projects-section .filters-wrap .filter-btn.active-filter-btn[data-v-f3a4286c]:hover{background:var(--color-black);border-color:var(--color-black);color:var(--color-white)}.projects-section .filters-wrap .filter-btn[data-v-f3a4286c]:hover{background:var(--color-highlight-2);border-color:var(--color-highlight-2)}.articles-section .article-cards[data-v-f3a4286c]{margin:24px 0}.partners-section[data-v-f3a4286c]{background:var(--color-gray-2)}.partners-section .head[data-v-f3a4286c]{width:600px}@media screen and (max-width:767px){.partners-section .head[data-v-f3a4286c]{width:200px}}@media screen and (max-width:1023px){.partners-section .subhead[data-v-f3a4286c]{width:475px}}@media screen and (max-width:767px){.partners-section .subhead[data-v-f3a4286c]{width:230px}}.partners-section .logo-partners[data-v-f3a4286c]{grid-gap:72px 192px;display:grid;gap:72px 192px;grid-template-columns:repeat(3,1fr);margin:48px 0 25px}@media screen and (max-width:1023px){.partners-section .logo-partners[data-v-f3a4286c]{gap:72px 125px}}@media screen and (max-width:767px){.partners-section .logo-partners[data-v-f3a4286c]{grid-template-columns:repeat(1,1fr);margin:48px 0 40px}}.partners-section .logo-partners .logo-wrap[data-v-f3a4286c]{background:var(--color-gray-3);border-radius:50%;height:120px;mix-blend-mode:multiply;width:120px}@media screen and (max-width:767px){.partners-section .logo-partners .logo-wrap[data-v-f3a4286c]{height:80px;width:80px}}.about-section[data-v-f3a4286c]{background:var(--color-black);color:var(--color-white)}.about-section .head[data-v-f3a4286c]{margin-bottom:0}.about-section .content-wrap[data-v-f3a4286c]{max-width:592px;padding:30px 0 40px}@media screen and (max-width:767px){.about-section .content-wrap[data-v-f3a4286c]{padding:20px 0 25px}}",""]),n.locals={},t.exports=n},542:function(t,e,r){"use strict";r.r(e);var n,o,c,d,l=r(14),f=(r(79),r(18),r(38),r(39),r(48),r(452)),v=r(24),h=(r(59),r(109),r(110),r(426),r(412)),m=(o=(n={apiRoot:"https://wevis.info/wp-json/wp/v2",electionTagId:41,mediaTargetSize:"small-thumb"}).apiRoot,c=n.electionTagId,d=n.mediaTargetSize,Object(l.a)(regeneratorRuntime.mark((function t(){var e,r,n,f,m,x,_,w,y=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=(e=y.length>0&&void 0!==y[0]?y[0]:{}).limit,n=void 0===r?6:r,f=e.tag,m=void 0===f?"":f,x=function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get(o+e,{params:r});case 2:return n=t.sent,t.next=5,n.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),!m){t.next=8;break}return t.next=5,x("/tags",{search:m,_fields:"id",per_page:1});case 5:t.t0=t.sent[0].id,t.next=9;break;case 8:t.t0=c;case 9:return _=t.t0,t.next=12,x("/posts",{tags:_,_embed:"wp:featuredmedia",_fields:"id,title,link,date,tags,_links.wp:featuredmedia,_embedded.wp:featuredmedia",per_page:n});case 12:return w=t.sent,t.abrupt("return",w.filter((function(t){var e=t.tags;return!m||(null==e?void 0:e.includes(c))})).map((function(t){var e=t.id,title=t.title,link=t.link,r=t.date,n=t._embedded,o=null==n?void 0:n["wp:featuredmedia"],c=Object(v.a)(o,1)[0];return{id:e,title:title.rendered,link:link,date:new Date(r).toLocaleDateString("th-TH",{dateStyle:"long"}),image:c.media_details.sizes[d].source_url}})));case 14:case"end":return t.stop()}}),t)})))),x=r(453),_=r(439),w=r.n(_),y=r(427),C=r.n(y);Promise.all([r.e(11),r.e(12)]).then(r.t.bind(null,541,7));var j={data:function(){return{election_day:"2023-05-07 08:00:00",logo:r(454),filter_buttons:["ทั้งหมด","เตรียมตัวเลือกตั้ง","ผลงานที่ผ่านมา","เครื่องมืออื่นๆ"],active_filter:"ทั้งหมด",project_data:[],lastest_three_posts:[]}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,o,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=C()(t.election_day),o=C()(C()().format("YYYY-MM-DD HH:mm:s")),c=n.diff(o,"day"),d=c>10?"OrderLaunch":"OrderPre",t.project_data=Object(x.orderBy)(f,[d]),e.next=7,m({limit:3});case 7:t.lastest_three_posts=e.sent,w.a.loadAnimation({name:"landing-lottie",container:document.getElementById("landing-lottie"),renderer:"svg",animationData:r(440)});case 9:case"end":return e.stop()}}),e)})))()},computed:{getProjectData:function(){var t=this;return"ทั้งหมด"!==this.active_filter?this.project_data.filter((function(e){return e.Tag===t.active_filter})):this.project_data}}},k=(r(455),r(57)),component=Object(k.a)(j,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("election-header"),t._v(" "),e("div",{staticClass:"cover-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"logo-wrap"},[e("img",{attrs:{src:t.logo,alt:"wevis election 66 logo"}})]),t._v(" "),e("p",{staticClass:"typo-h6 head"},[t._v("เปิดข้อมูลที่ต้องรู้ ก่อนเปิดคูหา")]),t._v(" "),e("p",{staticClass:"typo-b4 subhead"},[t._v("\n        รวมข้อมูลการเมืองและการเลือกตั้ง โดยประชาชนผู้มีหวังในประชาธิปไตย\n      ")]),t._v(" "),e("div",{staticClass:"img-wrap"},[e("div",{attrs:{id:"landing-lottie"}}),t._v(" "),e("StarLabel",{attrs:{election_day:t.election_day}})],1)])]),t._v(" "),e("div",{staticClass:"projects-section"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("p",{staticClass:"typo-b4 subhead"},[t._v("\n        เลือกดูโปรเจกต์ของ WeVis ที่รวบรวมข้อมูล มาตอบคำถามที่คุณคาใจ\n        ให้พร้อมเลือกตั้ง\n      ")]),t._v(" "),e("div",{staticClass:"filters-wrap"},t._l(t.filter_buttons,(function(filter){return e("div",{key:filter,staticClass:"filter-btn",class:{"active-filter-btn":t.active_filter===filter},on:{click:function(e){t.active_filter=filter}}},[e("p",{staticClass:"typo-b5"},[e("b",[t._v(t._s(filter))])])])})),0),t._v(" "),e("div",{staticClass:"project-cards"},t._l(t.getProjectData,(function(t){return e("ProjectCard",{key:t.Path,attrs:{data:t,is_coming_soon:t.ComingSoon}})})),1)])]),t._v(" "),e("div",{staticClass:"articles-section"},[e("div",{staticClass:"container"},[t._m(1),t._v(" "),e("p",{staticClass:"typo-b4 subhead"},[t._v("ติดตามเรื่องราวการเลือกตั้ง’66")]),t._v(" "),e("div",{staticClass:"article-cards"},t._l(t.lastest_three_posts,(function(t){return e("ArticleCard",{key:"election-posts-".concat(t.id),attrs:{data:t}})})),1),t._v(" "),e("a",{attrs:{href:"https://wevis.info/tag/เลือกตั้ง-66",target:"_blank",rel:"noopener noreferrer"}},[e("SquareButton",{attrs:{text:"ดูบทความทั้งหมด",color:"white"}})],1)])]),t._v(" "),e("div",{staticClass:"partners-section"},[e("div",{staticClass:"container"},[t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"logo-partners"},t._l(6,(function(t){return e("div",{key:"logo-".concat(t),staticClass:"logo-wrap"})})),0)])]),t._v(" "),e("election-bottom"),t._v(" "),e("div",{staticClass:"about-section"},[e("div",{staticClass:"container"},[t._m(4),t._v(" "),t._m(5),t._v(" "),e("a",{attrs:{href:"https://wevis.info/",target:"_blank",rel:"noopener noreferrer"}},[e("SquareButton",{attrs:{text:"WeVis.info",color:"black"}})],1)])]),t._v(" "),e("election-footer")],1)}),[function(){var t=this._self._c;return t("p",{staticClass:"typo-h5 head"},[t("b",[this._v(" เตรียมความพร้อม ก่อนไปเลือก ")])])},function(){var t=this._self._c;return t("p",{staticClass:"typo-h5 head"},[t("b",[this._v(" Bite Sized ")])])},function(){var t=this._self._c;return t("p",{staticClass:"typo-h5 head"},[t("b",[this._v("พวกคนมีหวัง ที่มาร่วมสมคบคิด")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"typo-b4 subhead"},[t._v("\n        โปรเจกต์เหล่านี้จะเกิดขึ้นไม่ได้เลย ถ้าขาดกลุ่มคน(ที่ยัง)มีหวัง\n        "),e("span",{staticClass:"word"},[t._v("มาร่วม")]),t._v("ผลักดันให้เกิดงานเหล่านี้\n      ")])},function(){var t=this._self._c;return t("p",{staticClass:"typo-h5 head"},[t("b",[this._v("เกี่ยวกับ WeVis")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-wrap"},[e("p",{staticClass:"typo-b5"},[t._v("\n          WeVis เป็นกลุ่มเทคโนโลยีภาคประชาชนที่เชื่อว่าข้อมูลเปิดและเทคโนโลยี\n          สามารถทำให้พวกเรามีส่วนร่วมในการเมือง การเลือกตั้ง และประชาธิปไตยได้\n          พวกเราจึงรวมตัวกันขึ้นมาเพื่อทำโปรเจกต์เหล่านี้\n          หวังให้ผู้มีสิทธิเลือกตั้งทุกคนและสื่อมวลชน\n          สามารถค้นหาข้อมูลได้สะดวกขึ้น\n          "),e("br"),e("br"),t._v("\n          ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source\n          และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข Creative Commons\n          Attribution-NonCommercial License (CC-BY-NC) โปรดให้เครดิตกับทีม\n          WeVis เพื่อเป็นกำลังใจให้พวกเราสร้างสรรค์งานต่อไป\n        ")])])}],!1,null,"f3a4286c",null);e.default=component.exports;installComponents(component,{StarLabel:r(449).default,ProjectCard:r(540).default,ArticleCard:r(450).default,SquareButton:r(451).default})}}]);