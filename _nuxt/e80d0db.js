(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{422:function(t,e,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(101).default)("5a8ee010",content,!0,{sourceMap:!1})},427:function(t,e,n){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",l="quarter",d="year",f="date",h="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},_=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},w={s:_,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+_(r,2,"0")+":"+_(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:o,d:a,D:f,h:u,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",y={};y[g]=m;var p=function(t){return t instanceof x},M=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();y[s]&&(i=s),n&&(y[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;y[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},D=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},S=w;S.l=M,S.i=p,S.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function m(t){this.$L=M(t.locale,null,!0),this.parse(t)}var _=m.prototype;return _.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(v);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return S},_.isValid=function(){return!(this.$d.toString()===h)},_.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},_.isAfter=function(t,e){return D(t)<this.startOf(e)},_.isBefore=function(t,e){return this.endOf(e)<D(t)},_.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,e){var n=this,r=!!S.u(e)||e,l=S.p(t),h=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},v=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,m=this.$M,_=this.$D,w="set"+(this.$u?"UTC":"");switch(l){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case o:var g=this.$locale().weekStart||0,y=($<g?$+7:$)-g;return h(r?_-y:_+(6-y),m);case a:case f:return v(w+"Hours",0);case u:return v(w+"Minutes",1);case s:return v(w+"Seconds",2);case i:return v(w+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,e){var n,o=S.p(t),l="set"+(this.$u?"UTC":""),h=(n={},n[a]=l+"Date",n[f]=l+"Date",n[c]=l+"Month",n[d]=l+"FullYear",n[u]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],v=o===a?this.$D+(e-this.$W):e;if(o===c||o===d){var $=this.clone().set(f,1);$.$d[h](v),$.init(),this.$d=$.set(f,Math.min(this.$D,$.daysInMonth())).$d}else h&&this.$d[h](v);return this.init(),this},_.set=function(t,e){return this.clone().$set(t,e)},_.get=function(t){return this[S.p(t)]()},_.add=function(r,l){var f,h=this;r=Number(r);var v=S.p(l),$=function(t){var e=D(h);return S.w(e.date(e.date()+Math.round(t*r)),h)};if(v===c)return this.set(c,this.$M+r);if(v===d)return this.set(d,this.$y+r);if(v===a)return $(1);if(v===o)return $(7);var m=(f={},f[s]=e,f[u]=n,f[i]=t,f)[v]||1,_=this.$d.getTime()+r*m;return S.w(_,this)},_.subtract=function(t,e){return this.add(-1*t,e)},_.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return S.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:S.s(a+1,2,"0"),MMM:l(n.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,o,2),ddd:l(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:S.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,u,!0),A:f(s,u,!1),m:String(u),mm:S.s(u,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace($,(function(t,e){return e||v[t]||i.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(r,f,h){var v,$=S.p(f),m=D(r),_=(m.utcOffset()-this.utcOffset())*e,w=this-m,g=S.m(this,m);return g=(v={},v[d]=g/12,v[c]=g,v[l]=g/3,v[o]=(w-_)/6048e5,v[a]=(w-_)/864e5,v[u]=w/n,v[s]=w/e,v[i]=w/t,v)[$]||w,h?g:S.a(g)},_.daysInMonth=function(){return this.endOf(c).$D},_.$locale=function(){return y[this.$L]},_.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},_.clone=function(){return S.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},m}(),O=x.prototype;return D.prototype=O,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",d],["$D",f]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,x,D),t.$i=!0),D},D.locale=M,D.isDayjs=p,D.unix=function(t){return D(1e3*t)},D.en=y[g],D.Ls=y,D.p={},D}()},431:function(t,e,n){t.exports=n.p+"img/yellow_star_label.3f57566.svg"},432:function(t,e,n){t.exports=n.p+"img/black_star_label.91a6b4a.svg"},433:function(t,e,n){"use strict";n(422)},434:function(t,e,n){var r=n(100)((function(i){return i[1]}));r.push([t.i,'.star-label-wrap[data-v-c9fed61c]{bottom:0;position:absolute;right:0;transform:rotate(15deg) translateY(-80%);width:128px}@media screen and (max-width:767px){.star-label-wrap[data-v-c9fed61c]{right:22px;transform:rotate(15deg) translateY(-30%)}}.countdown-days-label[data-v-c9fed61c]{position:relative;z-index:1}.countdown-days-label .countdown-numbers-wrap[data-v-c9fed61c]{left:50%;position:absolute;text-align:center;top:calc(50% + 3px);transform:translate(-50%,-50%)}.countdown-days-label .countdown-numbers-wrap .number[data-v-c9fed61c]{font-family:"Kondolar Thai";font-size:44px;font-weight:700;line-height:1;transform:translateY(3px)}.election-day-label[data-v-c9fed61c]{bottom:10px;position:absolute;right:-18px;transform:translate(50%,50%)}.election-day-label .date-wrap[data-v-c9fed61c]{color:var(--color-highlight-3);left:50%;position:absolute;text-align:center;top:calc(50% + 3px);transform:translate(-50%,-50%)}.election-day-label .date-wrap .date[data-v-c9fed61c]{line-height:1.2}.election-day-label .date-wrap .month[data-v-c9fed61c]{transform:translateY(-35%)}.typo-b7[data-v-c9fed61c]{font-size:12px}.typo-b6[data-v-c9fed61c]{font-size:14px}.typo-h6[data-v-c9fed61c]{font-size:32px}',""]),r.locals={},t.exports=r},450:function(t,e,n){"use strict";n.r(e);n(102);var r=n(427),o=n.n(r),c={props:{election_day:{type:String,default:""}},data:function(){return{yellow_star_label:n(431),black_star_label:n(432),show_star_label:!0,countdown_timer:0,countdown_unit:"วัน"}},mounted:function(){this.getCountdownTimer(),this.getInterval()},methods:{getInterval:function(){var t=this;setInterval((function(){t.getCountdownTimer()}),1e3)},getCountdownTimer:function(){var t=o()(this.election_day),e=o()(o()().format("YYYY-MM-DD HH:mm:s")),n=t.diff(e,"second"),r=Math.floor(n/60),c=Math.floor(r/60),l=Math.floor(c/24);this.countdown_timer=l,this.countdown_unit="วัน",l<=0&&(this.countdown_timer=c,this.countdown_unit="ชั่วโมง",c<=0&&(this.countdown_timer=r,this.countdown_unit="นาที",r<=0&&(this.countdown_timer=n,this.countdown_unit="วินาที",n<=0&&(this.show_star_label=!1))))}}},l=(n(433),n(57)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.show_star_label?e("div",{staticClass:"star-label-wrap"},[e("div",{staticClass:"countdown-days-label"},[e("img",{attrs:{src:t.yellow_star_label,alt:"yellow star label"}}),t._v(" "),e("div",{staticClass:"countdown-numbers-wrap"},[t._m(0),t._v(" "),e("p",{staticClass:"number"},[t._v(t._s(t.countdown_timer))]),t._v(" "),e("p",{staticClass:"typo-b6"},[e("b",[t._v(t._s(t.countdown_unit))])])])]),t._v(" "),e("div",{staticClass:"election-day-label"},[e("img",{attrs:{src:t.black_star_label,alt:"black star label"}}),t._v(" "),t._m(1)])]):t._e()}),[function(){var t=this._self._c;return t("p",{staticClass:"typo-b7"},[t("b",[this._v("เหลืออีก")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"date-wrap"},[e("p",{staticClass:"typo-b7"},[e("b",[t._v("เลือกตั้ง")])]),t._v(" "),e("p",{staticClass:"typo-h6 date"},[e("b",[t._v("14")])]),t._v(" "),e("p",{staticClass:"typo-b7 month"},[e("b",[t._v("พ.ค. 66")])])])}],!1,null,"c9fed61c",null);e.default=component.exports}}]);