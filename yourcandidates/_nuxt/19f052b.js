(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{474:function(t,e,l){var content=l(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(79).default)("4b40924e",content,!0,{sourceMap:!1})},493:function(t,e,l){"use strict";l(474)},494:function(t,e,l){var o=l(78)((function(i){return i[1]}));o.push([t.i,".popup[data-v-5a1e6de8]{background-color:rgba(0,0,0,.6);height:100%;left:0;position:fixed;top:0;width:100%;z-index:41}.party-list-container[data-v-5a1e6de8]{align-items:flex-start;background:var(--color-white);border-radius:10px;display:flex;flex-direction:column;gap:5px;isolation:isolate;overflow-y:overlay;padding:20px}.party-list-box[data-v-5a1e6de8]{border-bottom:1px solid var(--color-gray-2);box-sizing:border-box;text-align:left}.scrollbar[data-v-5a1e6de8]::-webkit-scrollbar{width:5px}.scrollbar[data-v-5a1e6de8]::-webkit-scrollbar-button{height:5px}.scrollbar[data-v-5a1e6de8]::-webkit-scrollbar-track{background:transparent;position:absolute}.scrollbar[data-v-5a1e6de8]::-webkit-scrollbar-thumb{background-color:var(--color-gray-2);border-radius:10px}.col-name[data-v-5a1e6de8]{color:var(--color-gray-3);font-weight:700;text-align:left}",""]),o.locals={},t.exports=o},511:function(t,e,l){"use strict";l.r(e);var o={props:{open:{type:Boolean,required:!0},partyList:[],nameParty:""},methods:{closePopup:function(){this.$emit("closePopup")}}},r=(l(493),l(56)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"popup flex flex-col justify-center items-center",on:{click:function(e){return e.target!==e.currentTarget?null:t.closePopup.apply(null,arguments)}}},[e("div",{staticClass:"party-list-container w-4/5 h-4/5 overflow-y-scroll scrollbar",staticStyle:{"max-width":"450px"}},[e("div",{staticClass:"w-full relative"},[t._t("close")],2),t._v(" "),e("div",{staticClass:"flex flex-col items-start pt-4"},[e("b",[t._v("บัญชีรายชื่อพรรค"+t._s(t.nameParty))])]),t._v(" "),e("table",{staticClass:"w-full"},[t._m(0),t._v(" "),t._l(t.partyList,(function(l,o){return e("tr",{key:o,staticClass:"party-list-box"},[e("td",[t._v(t._s(o))]),t._v(" "),e("td",{staticStyle:{"padding-left":"14px"}},[t._v(t._s(l.Name))])])}))],2)])])}),[function(){var t=this,e=t._self._c;return e("tr",{staticClass:"col-name"},[e("th",{staticStyle:{"table-layout":"fixed",width:"1%"}},[t._v("ลำดับ")]),t._v(" "),e("th",{staticStyle:{"padding-left":"14px"}},[t._v("ชื่อ")])])}],!1,null,"5a1e6de8",null);e.default=component.exports}}]);