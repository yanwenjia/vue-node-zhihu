webpackJsonp([1],{"23S2":function(t,e){},DgAZ:function(t,e){},LqDh:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("/5sW"),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.TypeFlag,expression:"TypeFlag"}],staticClass:"box"},[i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("div",{staticClass:"index",on:{click:function(e){t.HideTypeList("首页")}}},[i("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/index"}},[i("span",{staticClass:"tab-link"},[t._v("首页")])])],1),t._v(" "),i("ul",t._l(t.typelist,function(e,s){return i("li",{key:s,on:{click:function(i){t.HideTypeList(e.name)}}},[i("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:{name:"theme",params:{id:e.id}}}},[i("span",{staticClass:"tab-link"},[t._v(t._s(e.name))])])],1)}))]),t._v(" "),i("div",{staticClass:"mask",on:{click:t.HideTypeList}})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"logo"},[this._v("请登陆")]),this._v(" "),e("div",{staticClass:"down"},[this._v("我的收藏   离线下载")])])}]},a=i("VU/8")({data:function(){return{typelist:[],TypeFlag:!1}},created:function(){var t=this;this.$axios.get("zhihuAPI",{params:{url:"/api/4/themes"}}).then(function(e){t.typelist=e.data.others})},methods:{HideTypeList:function(t){this.TypeFlag=!1,this.$emit("close",this.TypeFlag),this.$store.state.titleName=t}}},n,!1,function(t){i("LqDh")},"data-v-7e02334a",null).exports,o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"menu",on:{click:this.showtypelist}},[e("div",{staticClass:"top"}),this._v(" "),e("div",{staticClass:"middle"}),this._v(" "),e("div",{staticClass:"bottom"})]),this._v(" "),e("div",{staticClass:"title"},[this._v("\n    "+this._s(this.titleName)+"\n  ")])])},staticRenderFns:[]},r={name:"app",components:{TopHeader:i("VU/8")({name:"TopHeader",computed:{titleName:function(){return this.$store.state.titleName}},methods:{showtypelist:function(){this.$emit("showtypelist")}}},o,!1,function(t){i("XfqL")},"data-v-1abbf165",null).exports,TypeList:a},methods:{show:function(){this.$refs.typelist.TypeFlag=!0}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("top-header",{ref:"header",on:{showtypelist:this.show}}),this._v(" "),e("type-list",{ref:"typelist"}),this._v(" "),e("router-view")],1)},staticRenderFns:[]},c=i("VU/8")(r,l,!1,function(t){i("DgAZ")},null,null).exports,d=i("/ocq"),h={name:"HelloWorld",mounted:function(){this.$refs.helloImg.style.height=window.innerHeight+"px",this.$refs.helloImg.style.width=window.innerWidth+"px";var t=this;window.onresize=function(){t.$refs.helloImg.style.height=window.innerHeight+"px",t.$refs.helloImg.style.width=window.innerWidth+"px"},setTimeout(function(){t.$router.push({path:"/index"})},2e3)},destroyed:function(){window.onresize=function(){}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("img",{ref:"helloImg",attrs:{src:i("cs7C")}})])},staticRenderFns:[]},f=i("VU/8")(h,u,!1,function(t){i("23S2")},"data-v-61acffaa",null).exports,p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",{staticClass:"title"},[t._v("今日热闻")]),t._v(" "),i("ul",t._l(t.datalist,function(e,s){return i("li",{key:s},[i("div",{staticClass:"left"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"right"},[i("img",{attrs:{src:e.images[0],alt:""}})])])}))])},staticRenderFns:[]},v=i("VU/8")({data:function(){return{datalist:[]}},created:function(){var t=this;this.$axios.get("/api/4/news/latest").then(function(e){t.datalist=e.data.stories})}},p,!1,function(t){i("Ti3a")},"data-v-6a62fc82",null).exports,m={props:{offset:{type:Number,default:40},enableInfinite:{type:Boolean,default:!0},enableRefresh:{type:Boolean,default:!0},onRefresh:{type:Function,default:void 0,required:!1},onInfinite:{type:Function,default:void 0,require:!1},showFooter:{type:Boolean,default:!0,require:!1}},data:function(){return{top:0,state:0,startY:0,touching:!1,infiniteLoading:!1,scrolltop:0}},methods:{touchStart:function(t){this.startY=t.targetTouches[0].pageY,this.startScroll=this.$el.scrollTop||0,this.touching=!0},touchMove:function(t){if(this.enableRefresh&&!(this.$el.scrollTop>0)&&this.touching){var e=t.targetTouches[0].pageY-this.startY-this.startScroll;e>0&&t.preventDefault(),this.top=Math.pow(e,.8)+(2===this.state?this.offset:0),2!==this.state&&(this.top>=this.offset?this.state=1:this.state=0)}},touchEnd:function(t){if(this.enableRefresh){if(this.touching=!1,2===this.state)return this.state=2,void(this.top=this.offset);this.top>=this.offset?this.refresh():(this.state=0,this.top=0)}},refresh:function(){this.state=2,this.top=this.offset,this.onRefresh(this.refreshDone)},refreshDone:function(){this.state=0,this.top=0},infinite:function(){this.infiniteLoading=!0,this.onInfinite(this.infiniteDone)},infiniteDone:function(){this.infiniteLoading=!1},onScroll:function(t){if(this.enableInfinite&&!this.infiniteLoading){var e=this.$el.clientHeight,i=this.$el.querySelector(".inner").clientHeight,s=this.$el.scrollTop;this.$emit("scroll",s);i-e-s-(this.onRefresh?this.$el.querySelector(".pull-refresh").clientHeight:0)<this.$el.querySelector(".load-more").clientHeight&&this.infinite(),this.scrolltop=s}}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"yo-scroll",class:{down:0===t.state,up:1==t.state,refresh:2===t.state,touch:t.touching},on:{touchstart:function(e){t.touchStart(e)},touchmove:function(e){t.touchMove(e)},touchend:function(e){t.touchEnd(e)},scroll:function(e){(t.onInfinite||t.infiniteLoading)&&t.onScroll(e)}}},[i("section",{staticClass:"inner",style:{transform:"translate3d(0, "+t.top+"px, 0)"}},[i("header",{staticClass:"pull-refresh"},[t._t("pull-refresh",[i("span",{staticClass:"down-tip"},[t._v("下拉更新")]),t._v(" "),i("span",{staticClass:"up-tip"},[t._v("松开更新")]),t._v(" "),i("span",{staticClass:"refresh-tip"},[t._v("更新中")])])],2),t._v(" "),t._t("default"),t._v(" "),i("footer",{directives:[{name:"show",rawName:"v-show",value:t.showFooter,expression:"showFooter"}],staticClass:"load-more"},[t._t("load-more",[i("span",[t._v("加载中……")])])],2)],2)])},staticRenderFns:[]},_=i("VU/8")(m,g,!1,function(t){i("zT2e")},null,null).exports,w=i("bOdI"),y=i.n(w),C=i("7QTg"),$=i.n(C),b={name:"carrousel",data:function(){var t;return{swiperOption:(t={spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},prevButton:".swiper-button-prev",nextButton:".swiper-button-next",scrollbar:".swiper-scrollbar",mousewheelControl:!0,observeParents:!0,notNextTick:!0,direction:"horizontal",grabCursor:!0,setWrapperSize:!0,autoHeight:!0,paginationClickable:!0},y()(t,"mousewheelControl",!0),y()(t,"observeParents",!0),y()(t,"debugger",!0),y()(t,"onTransitionStart",function(t){console.log(t)}),y()(t,"loop",!0),y()(t,"pagination",{el:".swiper-pagination",clickable:!0}),t),slider:[]}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},components:{swiper:C.swiper,swiperSlide:C.swiperSlide},mounted:function(){},created:function(){var t=this;this.$axios.get("/zhihuAPI",{params:{url:"/api/4/news/latest"}}).then(function(e){t.slider=e.data.top_stories,console.log(t.slider)})},methods:{toDetail:function(t){console.log("dddddd"),this.$router.push({name:"detail",params:{id:t}})}}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.slider,function(e,s){return i("swiper-slide",{key:s},[i("img",{attrs:{src:e.image,alt:""},on:{click:function(i){t.toDetail(e.id)}}}),t._v(" "),i("div",{staticClass:"title"},[t._v(t._s(e.title))])])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]},k={data:function(){return{listdata:[],downdata:[],timestamp:(new Date).getTime()}},created:function(){this.getList()},methods:{toDetail:function(t){this.$router.push({name:"detail",params:{id:t}}),this.setHeader()},setHeader:function(){this.$store.state.titleName=""},getTopTitle:function(){console.log(this.$el.children[0].scrollTop)},getTopTitle2:function(){var t=this.$refs.scroll.scrolltop-200,e=120*this.listdata.length+50,i=void 0,s=void 0;-200<t&&t<=0?s="首页":0<t&&t<=e?(i=0,s="今日热闻"):e<t&&(i=Math.ceil((t-e)/1970),s=this.downdata[i-1].week),this.$store.state.titleName=s},getUrlDate:function(t){var e=new Date(t);return(e.getFullYear()<10?"0"+e.getFullYear():e.getFullYear().toString())+(Number(e.getMonth())+1>=10?(Number(e.getMonth())+1).toString():"0"+(Number(e.getMonth())+1))+(e.getDate()<10?"0"+e.getDate():e.getDate().toString())},getWeek:function(t){var e,i=t.slice(0,4),s=t.slice(4,6),n=t.slice(6,8),a=new Date(i,s,n),o=a.getMonth()-1;switch(a.setMonth(o),a.getDay()){case 0:e="星期日";break;case 1:e="星期一";break;case 2:e="星期二";break;case 3:e="星期三";break;case 4:e="星期四";break;case 5:e="星期五";break;case 6:e="星期六";break;default:e="没有"}return s+"月"+n+"日 "+e},getList:function(){var t=this;this.$axios.get("/zhihuAPI",{params:{url:"/api/4/news/latest"}}).then(function(e){console.log(e.data),t.listdata=e.data.stories},function(t){console.log("error")})},onRefresh:function(t){this.getList(),t()},onInfinite:function(t){var e=this,i="/api/4/news/before/"+this.getUrlDate(this.timestamp);this.$axios.get("/zhihuAPI",{params:{url:i}}).then(function(i){i.data.week=e.getWeek(i.data.date),e.titleName=e.getWeek(i.data.date),e.downdata.push(i.data),e.timestamp-=864e5,t()},function(t){console.log("error")})}},components:{"v-scroll":_,Slider:i("VU/8")(b,x,!1,function(t){i("zNI9")},"data-v-2b0011b2",null).exports}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("v-scroll",{ref:"scroll",attrs:{"on-refresh":t.onRefresh,"on-infinite":t.onInfinite},on:{scroll:t.getTopTitle2}},[i("keep-alive",[i("slider")],1),t._v(" "),i("div",{staticClass:"main"},[i("ul",[i("li",{staticClass:"title"},[t._v("今日热闻")]),t._v(" "),t._l(t.listdata,function(e,s){return i("li",{key:s,on:{click:t.setHeader}},[i("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:{name:"detail",params:{id:e.id}}}},[i("div",{staticClass:"left"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"right"},[i("img",{attrs:{src:e.images[0],alt:""}})]),t._v(" "),i("div",{staticClass:"clearfix"})])],1)})],2),t._v(" "),t._l(t.downdata,function(e,s){return i("ul",{key:s},[i("li",{staticClass:"title"},[t._v("\n          "+t._s(e.week))]),t._v(" "),t._l(e.stories,function(e,s){return i("li",{on:{click:function(i){t.toDetail(e.id)}}},[i("div",{staticClass:"left"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"right"},[i("img",{attrs:{src:e.images[0],alt:""}})])])})],2)})],2)],1)],1)},staticRenderFns:[]},D={name:"Test",data:function(){return{counter:1,num:15,pageStart:0,pageEnd:0,listdata:[],downdata:[]}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;t.$axios.get("https://api.github.com/repos/typecho-fans/plugins/contents/").then(function(e){t.listdata=e.data.slice(0,15)},function(t){console.log("error")})},onRefresh:function(t){this.getList(),t()},onInfinite:function(t){var e=this,i=this;i.$axios.get("https://api.github.com/repos/typecho-fans/plugins/contents/").then(function(s){i.counter++,console.log(i.counter),i.pageEnd=i.num*i.counter,i.pageStart=i.pageEnd-i.num;for(var n=s.data,a=i.pageStart,o=i.pageEnd;a<o;a++){var r={};if(r.name=n[a].name,i.downdata.push(r),a+1>=s.data.length)return void(e.$el.querySelector(".load-more").style.display="none")}t()},function(t){console.log("error")})}},components:{"v-scroll":_}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-scroll",{attrs:{"on-refresh":t.onRefresh,"on-infinite":t.onInfinite}},[i("ul",[t._l(t.listdata,function(e,s){return i("li",[t._v(t._s(e.name))])}),t._v(" "),t._l(t.downdata,function(e,s){return i("li",[t._v(t._s(e.name))])})],2)])],1)},staticRenderFns:[]},F={components:{DataList:v,DataList2:i("VU/8")(k,T,!1,function(t){i("OfYn")},"data-v-116c111c",null).exports,Test:i("VU/8")(D,I,!1,function(t){i("jnyk")},"data-v-6f7e35ef",null).exports},methods:{setHeaderTitleName:function(t){this.$refs.header.titleName=t}}},H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("data-list2",{on:{titleName:this.setHeaderTitleName}})],1)},staticRenderFns:[]},S=i("VU/8")(F,H,!1,function(t){i("UMCG")},"data-v-618d3472",null).exports,N={data:function(){return{pagedata:{},routerId:""}},methods:{toDetail:function(t){this.$router.push({name:"detail",params:{id:t}}),this.setHeader()},show:function(){this.$refs.typelist.TypeFlag=!0},setHeader:function(){this.$store.state.titleName=""},getData:function(){var t=this;this.$axios.get("zhihuAPI",{params:{url:"/api/4/theme/"+this.routerId}}).then(function(e){t.pagedata=e.data})}},created:function(){this.routerId=this.$route.params.id,this.getData()},watch:{"$route.params.id":function(t,e){this.routerId=t,this.getData()}},components:{"v-scroll":_}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("v-scroll",{attrs:{showFooter:!1}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.pagedata.image,alt:""}}),t._v(" "),i("div",{staticClass:"description"},[t._v(t._s(t.pagedata.description))])]),t._v(" "),i("div",{staticClass:"editors"},[i("div",{staticClass:"text"},[t._v("主编")]),t._v(" "),t._l(t.pagedata.editors,function(t,e){return i("div",{key:e,staticClass:"editor"},[i("img",{attrs:{src:t.avatar,alt:""}})])})],2),t._v(" "),i("div",{staticClass:"main"},[i("ul",t._l(t.pagedata.stories,function(e,s){return i("li",{key:s,on:{click:function(i){t.toDetail(e.id)}}},[i("div",{staticClass:"left",style:{width:e.images?"65%":"100%"}},[t._v(t._s(e.title))]),t._v(" "),e.images?i("div",{staticClass:"right"},[i("img",{attrs:{src:e.images,alt:""}})]):t._e()])}))])])],1)},staticRenderFns:[]},R=i("VU/8")(N,L,!1,function(t){i("r4+d")},"data-v-7a8cdfe6",null).exports,E={data:function(){return{pagedata:"",detailID:0}},created:function(){this.detailID=this.$route.params.id,this.getData()},methods:{getData:function(){var t=this,e="/api/4/news/"+this.detailID;this.$axios.get("zhihuAPI",{params:{url:e}}).then(function(e){t.pagedata=e.data}).catch(function(t){console.log(t)})}}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[this.pagedata.image?e("div",{staticClass:"img"},[e("img",{attrs:{src:this.pagedata.image,alt:""}}),this._v(" "),e("div",{staticClass:"title"},[this._v(this._s(this.pagedata.title))])]):this._e(),this._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:this._s(this.pagedata.body)}})])},staticRenderFns:[]},z=i("VU/8")(E,U,!1,function(t){i("ofHk")},"data-v-d9e3b9f6",null).exports;s.a.use(d.a);var M=new d.a({routes:[{path:"/",name:"HelloWorld",component:f},{path:"/index",name:"index",component:S},{path:"/theme/:id",name:"theme",component:R},{path:"/detail/:id",name:"detail",component:z}]}),q=i("mtWM"),V=i.n(q),Y=(i("v2ns"),i("NYxO"));s.a.use(Y.a);var P=new Y.a.Store({state:{titleName:"首页"}});s.a.use($.a),s.a.use(Y.a),s.a.config.productionTip=!1,s.a.prototype.$axios=s.a.axios=V.a,new s.a({el:"#app",router:M,store:P,render:function(t){return t(c)}})},OfYn:function(t,e){},Ti3a:function(t,e){},UMCG:function(t,e){},XfqL:function(t,e){},cs7C:function(t,e,i){t.exports=i.p+"static/img/hello.3197650.png"},jnyk:function(t,e){},ofHk:function(t,e){},"r4+d":function(t,e){},v2ns:function(t,e){},zNI9:function(t,e){},zT2e:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8774ab40cbe7ef478c7e.js.map