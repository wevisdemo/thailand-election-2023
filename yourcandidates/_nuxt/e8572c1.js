(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,6,12],{415:function(t,n,e){var content=e(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(79).default)("21a4844c",content,!0,{sourceMap:!1})},416:function(t,n,e){var content=e(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(79).default)("a95ed4a8",content,!0,{sourceMap:!1})},417:function(t,n,e){t.exports=e.p+"img/good-ballots.0af93cc.png"},418:function(t,n,e){t.exports=e.p+"img/spoiled-ballots.b76cadf.png"},419:function(t,n,e){"use strict";e(415)},420:function(t,n,e){var o=e(78)((function(i){return i[1]}));o.push([t.i,".ballot-container{align-items:center;display:flex;flex-direction:column;gap:3px;padding:0}.ballot-container>.label{align-items:center;align-self:stretch;border-radius:100px;display:flex;flex:none;flex-direction:row;flex-grow:0;gap:10px;justify-content:center;order:0;padding:2px 0 0}.ballot-container>img{border:1px solid var(--color-highlight-2);border-radius:2px;width:64px}.ballot-good{background:var(--color-highlight-2)}.ballot-spoiled{background:var(--color-red)}",""]),o.locals={},t.exports=o},421:function(t,n,e){"use strict";e.r(n);var o=e(56),component=Object(o.a)({},(function(){var t=this,n=t._self._c;return n("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6.42801 5.33171C6.42801 5.69343 6.31809 6.07834 6.26836 6.43571C6.19764 6.94384 6.07448 7.46468 6.06114 7.97791C6.0536 8.2684 6 9.13811 6 8.84753",stroke:"#090909","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M6.51972 3.28337C6.4033 3.41273 6.53266 3.55416 6.68617 3.52625C6.8452 3.49733 6.79336 3.26248 6.67258 3.22222",stroke:"#090909","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M7.36297 1.12085C7.12486 1.12085 6.8801 1.09063 6.63623 1.09063C6.18757 1.09063 5.75244 1.16162 5.30915 1.21148C4.84618 1.26356 4.41394 1.39714 3.98206 1.55052C3.6472 1.66945 3.19611 1.74561 2.92356 1.98355C2.57655 2.28649 2.30889 2.60045 2.02655 2.96039C1.75643 3.30475 1.45902 3.61926 1.33141 4.04632C1.29341 4.17348 1.24622 4.29458 1.19448 4.41725C1.10417 4.63141 1.09069 4.89788 1.05756 5.12555C1.03216 5.30015 1.0531 5.47621 1.02772 5.65089C0.995905 5.86992 0.985285 6.12845 1.02948 6.34575C1.15835 6.97944 0.994194 7.75333 1.39811 8.31118C1.57939 8.56154 1.75701 8.77099 1.99846 8.98087C2.26788 9.21505 2.52746 9.49579 2.81999 9.70091C3.09283 9.89222 3.34291 10.1087 3.62923 10.2867C4.00705 10.5215 4.50156 10.5476 4.89487 10.7449C5.31468 10.9554 5.97655 11 6.44314 11C6.88623 11 7.28277 10.9146 7.71405 10.8322C8.02895 10.7719 8.3806 10.668 8.64442 10.4864C9.04654 10.2096 9.4512 9.86741 9.75032 9.48607C10.0845 9.05999 10.3253 8.60918 10.5367 8.11816C10.8168 7.46783 10.9967 6.72437 10.9967 6.01511C10.9967 5.65284 11.0226 5.28353 10.9299 4.92917C10.8938 4.79096 10.8306 4.65781 10.793 4.51796C10.7521 4.36562 10.7068 4.20841 10.6245 4.0715C10.3439 3.60438 10.0861 3.07107 9.68712 2.67842C9.5749 2.56795 9.44044 2.49073 9.31498 2.39476C9.24097 2.33815 9.20126 2.25184 9.11486 2.20678C8.98123 2.13709 8.86551 1.99376 8.74974 1.90299C8.60807 1.79192 8.44551 1.70124 8.29684 1.59752C7.927 1.33947 7.51457 1.19332 7.11019 1",stroke:"#090909","stroke-linecap":"round"}})])}),[],!1,null,null,null);n.default=component.exports},422:function(t,n,e){"use strict";e.r(n);var o={props:["isGood"],data:function(){return{type:"true"==this.isGood?"บัตรดี":"บัตรเสีย",imageSource:this.isGood?e(417):e(418)}}},r=(e(419),e(56)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"ballot-container"},[n("div",{class:"true"==t.isGood?"label ballot-good":"label ballot-spoiled"},[n("p",{staticClass:"typo-b7"},[n("b",[t._v(t._s(t.type))])])]),t._v(" "),n("img",{attrs:{src:t.imageSource,alt:""}})])}),[],!1,null,null,null);n.default=component.exports},424:function(t,n,e){"use strict";e(416)},425:function(t,n,e){var o=e(78)((function(i){return i[1]}));o.push([t.i,".intruction-container{align-items:center;background:var(--color-gray-1);border:1px solid var(--color-gray-2);border-radius:10px;display:flex;flex-direction:column;gap:20px;padding:20px;text-align:center}.intruction-container>.body{align-items:center;display:flex;flex-direction:column;gap:10px;padding:0}.intruction-container>.body>.ballot-type-container>div{align-items:center;display:flex;flex:1;flex-direction:column;gap:10px}.ballot-mark-example-container{align-items:center}.ballot-mark-example-container,.intruction-container>.body>.ballot-type-container{display:flex;flex-direction:column;gap:10px}.intruction-container>.body>.ballot-type-container>.vline{display:none}.intruction-container>.body>.ballot-mark-example-container>.ballot-example-container{order:1}.intruction-container>.body>.ballot-mark-example-container>p{order:2}@media (min-width:560px){.intruction-container>.body>.ballot-type-container{flex-direction:row;gap:20px}.intruction-container>.body>.ballot-type-container>.vline{border:1px dashed var(--color-gray-3);display:block}.intruction-container>.body>.ballot-mark-example-container>p{order:1}.intruction-container>.body>.ballot-mark-example-container>.ballot-example-container{order:2}}.intruction-container>.header{align-items:center;display:flex;flex-direction:row;gap:5px;padding:0}.img-80-80{background:var(--color-gray-2);height:80px;width:80px}.image-container{margin:auto}.ballot-example-container{align-items:flex-start;display:flex;gap:14px;padding:0}",""]),o.locals={},t.exports=o},426:function(t,n,e){"use strict";e.r(n);e(424);var o=e(56),component=Object(o.a)({},(function(){var t=this,n=t._self._c;return n("div",{staticClass:"intruction-container"},[n("div",{staticClass:"header"},[n("IconsInformation"),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"body"},[n("p",[t._v("เมื่อเข้าคูหา ประชาชนจะได้รับบัตรเลือกตั้งสองใบ ที่มีสีที่ต่างกัน")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"ballot-mark-example-container"},[n("div",{staticClass:"ballot-example-container"},[n("BallotExample",{attrs:{isGood:"true"}}),t._v(" "),n("BallotExample",{attrs:{isGood:"false"}})],1),t._v(" "),t._m(2)]),t._v(" "),t._m(3)])])}),[function(){var t=this._self._c;return t("p",{staticClass:"typo-b4"},[t("b",[this._v("รอบนี้มีบัตร 2 ใบนะ รู้ยัง?")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"ballot-type-container"},[n("div",[n("div",{staticClass:"img-80-80"}),t._v(" "),n("p",[n("b",[t._v("บัตรใบแรก")]),t._v(" เราจะต้องเลือกผู้สมัคร ส.ส. เขต 1\n          คนให้เป็นผู้แทนเขตเลือกตั้งของตนเอง\n        ")])]),t._v(" "),n("span",{staticClass:"vline"}),t._v(" "),n("div",[n("div",{staticClass:"img-80-80"}),t._v(" "),n("p",[n("b",[t._v("บัตรใบที่สอง")]),t._v(" เราจะต้องเลือกพรรคการเมือง\n          โดยคะแนนที่แต่ละพรรคได้รับ จะนำไปถูกคิดคำนวณเพื่อจัดสรรที่นั่ง ส.ส.\n          บัญชีรายชื่อตามสัดส่วนต่อไป\n        ")])])])},function(){var t=this,n=t._self._c;return n("p",[t._v("\n        บัตรทั้งสองใบ ต้องเลือกผ่านการทำ"),n("b",[t._v("เครื่องหมายกากบาทเท่านั้น")]),t._v("\n        หากพบเครื่องหมายอื่นจะถือว่าเป็นบัตรเสียโดยทันที\n      ")])},function(){var t=this,n=t._self._c;return n("p",[n("b",[t._v("อ่านเพิ่ม")]),t._v(" "),n("a",{attrs:{href:"https://ilaw.or.th/node/6294",target:"_blank"}},[t._v("https://ilaw.or.th/node/6294")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{IconsInformation:e(421).default,BallotExample:e(422).default})},429:function(t,n,e){var content=e(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(79).default)("227d52a6",content,!0,{sourceMap:!1})},437:function(t,n,e){t.exports=e.p+"img/candidate-look-up.6b92bc3.png"},438:function(t,n,e){"use strict";e(429)},439:function(t,n,e){var o=e(78)((function(i){return i[1]}));o.push([t.i,".cover-section{padding:40px 0 20px}.cover-section .header-text{text-align:center}.cover-section>.image>img{margin:auto}",""]),o.locals={},t.exports=o},448:function(t,n,e){"use strict";e.r(n);var o={name:"IndexPage",data:function(){return{heroMedia:e(437)}}},r=(e(438),e(56)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"main-container"},[n("div",{staticClass:"cover-section"},[t._m(0),t._v(" "),n("div",{staticClass:"image"},[n("img",{attrs:{src:t.heroMedia,alt:"a person look into a hole"}})])]),t._v(" "),n("div",{staticClass:"search"},[n("DistrictSearch")],1),t._v(" "),n("div",[n("VoteInstruction")],1)])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"header-text"},[n("h6",{staticClass:"typo-h7"},[t._v("Look Up Your Candidates")]),t._v(" "),n("h2",{staticClass:"typo-h2"},[t._v("เลือกตั้งรอบนี้มีอะไรให้เลือกบ้าง?")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{DistrictSearch:e(447).default,VoteInstruction:e(426).default})}}]);