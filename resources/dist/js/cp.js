!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";r.r(e);function n(t,e,r,n,i,o,s,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}var i=n({props:{title:String,action:String,blueprint:Array,meta:Array,redirectTo:String,values:Array},methods:{saved:function(t){var e=this;setTimeout((function(){return e.redirect(t.data)}),600)},redirect:function(t){window.location.href=this.createEditRoute(t)},createEditRoute:function(t){return this.redirectTo.replace("x-redirect",t)}}},(function(){var t=this.$createElement;return(this._self._c||t)("publish-form",{attrs:{title:this.title,action:this.action,blueprint:this.blueprint,meta:this.meta,values:this.values},on:{saved:this.saved}})}),[],!1,null,null,null).exports,o={data:function(){return{deletingRow:!1}},computed:{deletingModalTitle:function(){return this.deletingModalTitleFromRowKey("source")}},methods:{confirmDeleteRow:function(t,e){this.deletingRow={id:t,index:e}},deletingModalTitleFromRowKey:function(t){return __("Delete")+" "+this.rows[this.deletingRow.index][t]},deleteRow:function(t,e){var r=this,n=this.deletingRow.id;e=e||__("Deleted"),this.$axios.delete(cp_url("".concat(t,"/").concat(n))).then((function(){var t=_.indexOf(r.rows,_.findWhere(r.rows,{id:n}));r.rows.splice(t,1),r.deletingRow=!1,r.$toast.success(e),location.reload()})).catch((function(t){r.$toast.error(t.response?t.response.data.message:__("Something went wrong"))}))},cancelDeleteRow:function(){this.deletingRow=!1}}},s=n({mixins:[o],props:["initial-rows","columns"],data:function(){return{perPage:Statamic.$config.get("paginationSize"),page:1,sortColumn:"source",sortDirection:"asc"}},computed:{rows:function(){var t=_.sortBy(this.initialRows,this.sortColumn);return"desc"===this.sortDirection&&(t=t.reverse()),t.slice((this.page-1)*this.perPage,this.page*this.perPage)}},methods:{selectPage:function(t){this.page=t},setPerPage:function(t){this.perPage=t},resetPage:function(){this.page=1},sorted:function(t,e){this.sortColumn=t,this.sortDirection=e}}},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("data-list",{staticClass:"mb-4",attrs:{columns:t.columns,rows:t.rows,sort:!0,"sort-column":t.sortColumn,"sort-direction":t.sortDirection},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.filteredRows;return r("div",{staticClass:"card p-0"},[r("data-list-table",{attrs:{rows:n},on:{sorted:t.sorted},scopedSlots:t._u([{key:"cell-enabled",fn:function(t){return[t.row.enabled?r("div",{staticClass:"bg-green block h-3 w-2 mx-auto rounded-full"}):r("div",{staticClass:"bg-red block h-3 w-2 mx-auto rounded-full"})]}},{key:"cell-source",fn:function(e){var n=e.row;return[r("a",{attrs:{href:t.cp_url("redirect/redirects/"+n.id)}},[t._v(t._s(n.source))])]}},{key:"actions",fn:function(e){var n=e.row,i=e.index;return[r("dropdown-list",[r("dropdown-item",{attrs:{text:t.__("Edit"),redirect:t.cp_url("redirect/redirects/"+n.id)}}),t._v(" "),r("dropdown-item",{staticClass:"warning",attrs:{text:t.__("Delete")},on:{click:function(e){return t.confirmDeleteRow(n.id,i)}}})],1),t._v(" "),!1!==t.deletingRow?r("confirmation-modal",{attrs:{title:t.deletingModalTitle,bodyText:t.__("Are you sure you want to delete this redirect?"),buttonText:t.__("Delete"),danger:!0},on:{confirm:function(e){return t.deleteRow("/redirect/redirects")},cancel:t.cancelDeleteRow}}):t._e()]}}],null,!0)})],1)}}])}),t._v(" "),r("data-list-pagination",{attrs:{"per-page":this.perPage,"resource-meta":{last_page:Math.ceil(this.initialRows.length/this.perPage),current_page:this.page,total:this.initialRows.length}},on:{"page-selected":t.selectPage,"per-page-changed":t.setPerPage}})],1)}),[],!1,null,null,null).exports,a=n({props:["date"],data:function(){return{text:null}},mounted:function(){this.update()},methods:{update:function(){var t=this;this.text=moment(1e3*this.date).fromNow(),setTimeout((function(){return t.update()}),6e4)}}},(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.text))])}),[],!1,null,null,null),l=n({mixins:[o],props:["initial-rows","columns"],components:{RelativeDate:a.exports},data:function(){return{perPage:10,page:1,sortColumn:"latest",sortDirection:"desc"}},computed:{items:function(){var t=_.sortBy(this.initialRows,this.sortColumn);return"desc"===this.sortDirection&&(t=t.reverse()),t.slice((this.page-1)*this.perPage,this.page*this.perPage)}},methods:{selectPage:function(t){this.page=t},setPerPage:function(t){this.perPage=t},resetPage:function(){this.page=1},sorted:function(t,e){this.sortColumn=t,this.sortDirection=e}}},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("data-list",{staticClass:"mb-4",attrs:{columns:t.columns,rows:t.items,sort:!0,"sort-column":t.sortColumn,"sort-direction":t.sortDirection},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.filteredRows;return r("div",{staticClass:"card p-0"},[r("data-list-table",{attrs:{rows:n},on:{sorted:t.sorted},scopedSlots:t._u([{key:"cell-url",fn:function(e){var n=e.row;return[r("span",{domProps:{innerHTML:t._s(n.url)}})]}},{key:"cell-handled",fn:function(t){return[t.row.handled?r("div",{staticClass:"bg-green block h-3 w-2 mx-auto rounded-full"}):r("div",{staticClass:"bg-red block h-3 w-2 mx-auto rounded-full"})]}},{key:"cell-latest",fn:function(t){var e=t.row;return[r("relative-date",{attrs:{date:e.latest}})]}},{key:"actions",fn:function(e){var n=e.row;e.index;return[n.handled?t._e():r("a",{staticClass:"text-blue inline-block",attrs:{href:t.cp_url("redirect/redirects/create")+"?source="+encodeURI(n.url)}},[r("svg",{staticClass:"w-4 h-4 mr-2",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"plus",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"}},[r("path",{attrs:{fill:"currentColor",d:"M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"}})])])]}}],null,!0)})],1)}}])}),t._v(" "),r("data-list-pagination",{attrs:{"per-page":this.perPage,"resource-meta":{last_page:Math.ceil(this.initialRows.length/this.perPage),current_page:this.page,total:this.initialRows.length}},on:{"page-selected":t.selectPage,"per-page-changed":t.setPerPage}})],1)}),[],!1,null,null,null).exports;Statamic.$components.register("publish-form-redirect",i),Statamic.$components.register("errors-listing",l),Statamic.$components.register("redirect-listing",s)}]);