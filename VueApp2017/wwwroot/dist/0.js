webpackJsonp([0],{11:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(78),n=o.n(r);for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);var i=o(80),s=!1,l=o(8),c=l(n.a,i.a,!1,null,null,null);c.options.__file="src\\components\\shared\\Header.vue",function(){var e=o(3);e.install(o(0),!1),e.compatible&&(t.hot.accept(),t.hot.data?e.reload("data-v-deb6a378",c.options):e.createRecord("data-v-deb6a378",c.options),t.hot.dispose(function(t){s=!0}))}(),e.default=c.exports},78:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{rootUrl:""}},beforeCreate:function(){console.log("Nothing gets called before me!")},created:function(){this.rootUrl=window.site.getRootUrl(),console.log("Created: this.rootUrl is now reactive. "+this.rootUrl)},beforeMount:function(){console.log("Before Mount")},mounted:function(){console.log("Mounted")}}},80:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{border:"1px solid #000"}},[o("h1",[t._v("Header")]),t._v(" "),o("a",{attrs:{href:this.rootUrl}},[t._v("Main App")]),t._v(" | "),o("a",{attrs:{href:this.rootUrl+"reports"}},[t._v("Reports App")]),t._v(" | "),o("a",{attrs:{href:this.rootUrl+"profile"}},[t._v("Profile App")])])},n=[];r._withStripped=!0;var a={render:r,staticRenderFns:n};e.a=a,t.hot.accept(),t.hot.data&&o(3).rerender("data-v-deb6a378",a)}});