(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zuke/add-or-update"],{"1ca2":function(e,n,t){"use strict";(function(e){t("ab4c"),t("921b");i(t("66fd"));var n=i(t("bab9"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"621f":function(e,n,t){"use strict";var i,r=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return i}))},7021:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,i,r,u,a){try{var o=e[u](a),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(i,r)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var a=e.apply(n,t);function o(e){u(a,i,r,o,s,"next",e)}function s(e){u(a,i,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("9b8b"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{yonghuming:"",mima:"",zukexingming:"",xingbie:"",touxiang:"",nianling:"",zhiye:"",shenfenzheng:"",shouji:"",jiatingdizhi:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{yonghuming:!1,mima:!1,zukexingming:!1,xingbie:!1,touxiang:!1,nianling:!1,zhiye:!1,shenfenzheng:!1,shouji:!1,jiatingdizhi:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=a(i.default.mark((function n(t){var r,u,a,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:if(u=n.sent,this.user=u.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=14;break}return this.ruleForm.id=t.id,n.next=12,this.$api.info("zuke",this.ruleForm.id);case 12:u=n.sent,this.ruleForm=u.data;case 14:if(!t.cross){n.next=61;break}a=e.getStorageSync("crossObj"),n.t0=i.default.keys(a);case 17:if((n.t1=n.t0()).done){n.next=61;break}if(o=n.t1.value,"yonghuming"!=o){n.next=23;break}return this.ruleForm.yonghuming=a[o],this.ro.yonghuming=!0,n.abrupt("continue",17);case 23:if("mima"!=o){n.next=27;break}return this.ruleForm.mima=a[o],this.ro.mima=!0,n.abrupt("continue",17);case 27:if("zukexingming"!=o){n.next=31;break}return this.ruleForm.zukexingming=a[o],this.ro.zukexingming=!0,n.abrupt("continue",17);case 31:if("xingbie"!=o){n.next=35;break}return this.ruleForm.xingbie=a[o],this.ro.xingbie=!0,n.abrupt("continue",17);case 35:if("touxiang"!=o){n.next=39;break}return this.ruleForm.touxiang=a[o],this.ro.touxiang=!0,n.abrupt("continue",17);case 39:if("nianling"!=o){n.next=43;break}return this.ruleForm.nianling=a[o],this.ro.nianling=!0,n.abrupt("continue",17);case 43:if("zhiye"!=o){n.next=47;break}return this.ruleForm.zhiye=a[o],this.ro.zhiye=!0,n.abrupt("continue",17);case 47:if("shenfenzheng"!=o){n.next=51;break}return this.ruleForm.shenfenzheng=a[o],this.ro.shenfenzheng=!0,n.abrupt("continue",17);case 51:if("shouji"!=o){n.next=55;break}return this.ruleForm.shouji=a[o],this.ro.shouji=!0,n.abrupt("continue",17);case 55:if("jiatingdizhi"!=o){n.next=59;break}return this.ruleForm.jiatingdizhi=a[o],this.ro.jiatingdizhi=!0,n.abrupt("continue",17);case 59:n.next=17;break;case 61:this.styleChange();case 62:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.yonghuming){e.next=3;break}return this.$utils.msg("用户名不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){e.next=9;break}return this.$utils.msg("身份证应输入身份证格式"),e.abrupt("return");case 9:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=12;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 12:if(!this.ruleForm.id){e.next=17;break}return e.next=15,this.$api.update("zuke",this.ruleForm);case 15:e.next=19;break;case 17:return e.next=19,this.$api.add("zuke",this.ruleForm);case 19:this.$utils.msgBack("提交成功");case 20:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},7059:function(e,n,t){"use strict";var i=t("8cdc"),r=t.n(i);r.a},"8cdc":function(e,n,t){},bab9:function(e,n,t){"use strict";t.r(n);var i=t("621f"),r=t("f733");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("7059");var a,o=t("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"208f8987",null,!1,i["a"],a);n["default"]=s.exports},f733:function(e,n,t){"use strict";t.r(n);var i=t("7021"),r=t.n(i);for(var u in i)"default"!==u&&function(e){t.d(n,e,(function(){return i[e]}))}(u);n["default"]=r.a}},[["1ca2","common/runtime","common/vendor"]]]);