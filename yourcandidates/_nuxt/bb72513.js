(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{423:function(o,t,l){var content=l(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,l(79).default)("21a4844c",content,!0,{sourceMap:!1})},433:function(o,t,l){o.exports=l.p+"img/good-ballots.0af93cc.png"},434:function(o,t,l){o.exports=l.p+"img/spoiled-ballots.b76cadf.png"},435:function(o,t,l){"use strict";l(423)},436:function(o,t,l){var e=l(78)((function(i){return i[1]}));e.push([o.i,".ballot-container{align-items:center;display:flex;flex-direction:column;gap:3px;padding:0}.ballot-container>.label{align-items:center;align-self:stretch;border-radius:100px;display:flex;flex:none;flex-direction:row;flex-grow:0;gap:10px;justify-content:center;order:0;padding:2px 0 0}.ballot-container>img{border:1px solid var(--color-highlight-2);border-radius:2px;width:64px}.ballot-good{background:var(--color-highlight-2)}.ballot-spoiled{background:var(--color-red)}",""]),e.locals={},o.exports=e},440:function(o,t,l){"use strict";l.r(t);var e={props:["isGood"],data:function(){return{type:"true"==this.isGood?"บัตรดี":"บัตรเสีย",imageSource:this.isGood?l(433):l(434)}}},r=(l(435),l(56)),component=Object(r.a)(e,(function(){var o=this,t=o._self._c;return t("div",{staticClass:"ballot-container"},[t("div",{class:"true"==o.isGood?"label ballot-good":"label ballot-spoiled"},[t("p",{staticClass:"typo-b7"},[t("b",[o._v(o._s(o.type))])])]),o._v(" "),t("img",{attrs:{src:o.imageSource,alt:""}})])}),[],!1,null,null,null);t.default=component.exports}}]);