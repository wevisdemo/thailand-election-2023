(window.webpackJsonp=window.webpackJsonp||[]).push([[6,8,11],{419:function(t,e,r){var content=r(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(79).default)("7fd60008",content,!0,{sourceMap:!1})},424:function(t,e,r){"use strict";r.r(e);var n=r(56),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{width:"10",height:"9",viewBox:"0 0 10 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M1 5C1.5 6 1.94856 6.349 2.42867 7.2405C3.11796 8.52046 3.47974 7.07209 4.38774 6.349C5.22977 5.67844 5.87038 4.55528 6.664 3.83299C7.5 2.5 8 2 8.5 1",stroke:"#00EAA4","stroke-width":"2","stroke-linecap":"round"}})])}),[],!1,null,null,null);e.default=component.exports},427:function(t,e,r){"use strict";r(419)},428:function(t,e,r){var n=r(78)((function(i){return i[1]}));n.push([t.i,".card[data-v-1530c699]{align-items:flex-start;border-top:1px dashed var(--color-black);padding:0}.card[data-v-1530c699],.number-candidate[data-v-1530c699]{display:flex;flex-direction:column}.number-candidate[data-v-1530c699]{align-items:center;background-color:var(--color-black);border-radius:0 0 5px 0;flex:none;flex-grow:0;gap:10px;height:50px;justify-content:center;order:0;padding:10px;width:80px}.card>.detail>.header[data-v-1530c699]{display:flex;flex-direction:column}@media (min-width:770px){.number-candidate[data-v-1530c699]{height:70px;width:100px}.card>.detail>.header[data-v-1530c699]{align-items:center;flex-direction:row;gap:20px;padding:0}}.card>.detail[data-v-1530c699]{align-items:flex-start;align-self:stretch;display:flex;flex:none;flex-direction:column;flex-grow:0;gap:10px;padding:15px 18px 25px}.image-candidate[data-v-1530c699]{background:var(--color-gray-2);border:1px solid var(--color-black);border-radius:50px;box-sizing:border-box;flex:none;flex-grow:0;height:50px;margin-left:0;margin-top:0;order:0;width:50px}.image-party[data-v-1530c699]{background:var(--color-white);border:1px solid var(--color-gray-2);border-radius:50px;box-sizing:border-box;height:30px;margin-left:40px;margin-top:20px;position:absolute;width:30px}.name[data-v-1530c699]{flex:none;flex-grow:0;font-weight:700;order:1}.history[data-v-1530c699]{align-items:center;background:var(--color-highlight-1);border-radius:5px;display:flex;flex:none;flex-direction:row;flex-grow:0;gap:4px;order:2;padding:0 5px}",""]),n.locals={},t.exports=n},429:function(t,e,r){"use strict";r.r(e);r(49);var n=r(424),o={props:{candidate:{type:Object,default:{}}},components:{CheckMark:n.default}},c=(r(427),r(56)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("div",{staticClass:"number-candidate"},[e("p",{staticClass:"text-white typo-h3",staticStyle:{"font-weight":"700"}},[t._v("\n            "+t._s(t.candidate.number)+"\n        ")])]),t._v(" "),e("div",{staticClass:"detail"},[e("div",{staticClass:"header"},[t._m(0),t._v(" "),e("div",[e("div",{staticClass:"name typo-h5"},[t._v("\n                    "+t._s(t.candidate.name)+"\n                ")]),t._v(" "),t.candidate.partyGroup?e("div",{staticClass:"inline-block"},[e("div",{staticClass:"history"},[e("span",{staticClass:"flex flex-row"},[e("CheckMark"),t._v(" "),"2"==t.candidate.numberPartyGroup?e("CheckMark",{staticClass:"pl-0"}):t._e()],1),t._v("\n                            "+t._s(t.candidate.partyGroup)+"\n                        \n                    ")])]):t._e()])]),t._v(" "),t._t("infomation")],2)])}),[function(){var t=this._self._c;return t("div",{staticClass:"image-candidate"},[t("div",{staticClass:"image-party"})])}],!1,null,"1530c699",null);e.default=component.exports},550:function(t,e,r){"use strict";r.r(e);r(48),r(37),r(47),r(17),r(80),r(38),r(81);var n=r(31);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=r(429),d={props:{parties:{type:Object,default:{}}},components:{TemplateCard:l.default}},v=r(56),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("TemplateCard",{key:t.parties.number,attrs:{candidate:c({},t.parties)},scopedSlots:t._u([{key:"infomation",fn:function(){return[e("table",{staticClass:"table-container"},[e("tbody",[e("tr",[e("td",{staticStyle:{color:"var(--color-gray-3)"}},[t._v("สังกัด")]),t._v(" "),e("td",{staticClass:"pl-2"},[t._v(t._s(t.parties.party))])]),t._v(" "),e("tr",[e("td",{staticStyle:{color:"var(--color-gray-3)"}},[t._v("อายุ")]),t._v(" "),e("td",{staticClass:"pl-2"},[t._v(t._s(t.parties.age))])]),t._v(" "),e("tr",[e("td",{staticStyle:{color:"var(--color-gray-3)"}},[t._v("การศึกษา")]),t._v(" "),e("td",{staticClass:"pl-2"},[t._v(t._s(t.parties.education))])]),t._v(" "),e("tr",[e("td",{staticStyle:{color:"var(--color-gray-3)"}},[t._v("อาชีพเดิม")]),t._v(" "),e("td",{staticClass:"pl-2"},[t._v(t._s(t.parties.occupation))])])])])]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports}}]);