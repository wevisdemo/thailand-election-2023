(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{437:function(t,e,r){var content=r(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(79).default)("421f7c87",content,!0,{sourceMap:!1})},448:function(t,e,r){"use strict";r(437)},449:function(t,e,r){var n=r(78)((function(i){return i[1]}));n.push([t.i,'.tabs[data-v-61cb87d6]{align-items:stretch;display:flex;flex-direction:column;justify-content:stretch}.tabs-nav[data-v-61cb87d6],.tabs-nav ul[data-v-61cb87d6]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}.tabs-nav ul[data-v-61cb87d6]{list-style-type:none;margin:0;padding:0;width:100%}.tabs-nav li[data-v-61cb87d6]{cursor:pointer;flex-grow:1;font-weight:700;padding:10px;position:relative;text-align:center}.tabs-nav li[data-v-61cb87d6]:before{border-color:transparent transparent var(--color-black) transparent;border-radius:0;border-width:0 0 3px;content:"";height:100%;left:0;position:absolute;top:0;width:100%}.tabs-nav li.active[data-v-61cb87d6]:before{border-color:var(--color-black);border-radius:10px 10px 0 0;border-style:solid;border-width:3px 3px 0}.tabs-content[data-v-61cb87d6]{border-color:var(--color-black);border-style:solid;border-width:0 3px 3px;flex:1}',""]),n.locals={},t.exports=n},466:function(t,e,r){"use strict";r.r(e);r(49);var n={name:"Tabs",props:{tabs:{type:Array,required:!0}},data:function(){return{activeTab:0}}},o=(r(448),r(56)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabs"},[e("div",{staticClass:"tabs-nav"},[e("ul",t._l(t.tabs,(function(r,n){return e("li",{key:n,class:{active:t.activeTab===n},on:{click:function(e){t.activeTab=n}}},[t._v("\n        "+t._s(r.label)+"\n      ")])})),0)]),t._v(" "),e("div",{staticClass:"tabs-content"},[t._t(t.tabs[t.activeTab].name)],2)])}),[],!1,null,"61cb87d6",null);e.default=component.exports}}]);