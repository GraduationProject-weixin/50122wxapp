(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-info/user-info"],{"3d24":function(e,t,n){"use strict";n.r(t);var i=n("bf41"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},"946e":function(e,t,n){},a3e2:function(e,t,n){"use strict";var i=n("946e"),r=n.n(i);r.a},bf41:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,i,r,a,u){try{var s=e[a](u),o=s.value}catch(l){return void n(l)}s.done?t(o):Promise.resolve(o).then(i,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var u=e.apply(t,n);function s(e){a(u,i,r,s,o,"next",e)}function o(e){a(u,i,r,s,o,"throw",e)}s(void 0)}))}}var s={data:function(){return{ruleForm:{},tableName:"",zukexingbieOptions:[],zukexingbieIndex:0,fangdongxingbieOptions:[],fangdongxingbieIndex:0}},onLoad:function(){var t=u(i.default.mark((function t(){var n,r,a=this;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getStorageSync("nowTable"),t.next=3,this.$api.session(n);case 3:r=t.sent,this.ruleForm=r.data,this.tableName=n,"zuke"==this.tableName&&(this.zukexingbieOptions="男,女".split(","),this.zukexingbieOptions.forEach((function(e,t){e==a.ruleForm.xingbie&&(a.zukexingbieIndex=t)}))),"fangdong"==this.tableName&&(this.fangdongxingbieOptions="男,女".split(","),this.fangdongxingbieOptions.forEach((function(e,t){e==a.ruleForm.xingbie&&(a.fangdongxingbieIndex=t)}))),this.styleChange();case 9:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),methods:{zukexingbieChange:function(e){this.zukexingbieIndex=e.target.value,this.ruleForm.xingbie=this.zukexingbieOptions[this.zukexingbieIndex]},fangdongxingbieChange:function(e){this.fangdongxingbieIndex=e.target.value,this.ruleForm.xingbie=this.fangdongxingbieOptions[this.fangdongxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},logout:function(){e.setStorageSync("token",""),this.$utils.jump("../login/login")},update:function(){var t=u(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.yonghuming||"zuke"!=this.tableName){t.next=3;break}return this.$utils.msg("用户名不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima||"zuke"!=this.tableName){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if("zuke"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){t.next=9;break}return this.$utils.msg("身份证应输入身份证格式"),t.abrupt("return");case 9:if("zuke"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){t.next=12;break}return this.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 12:if(this.ruleForm.fangdongzhanghao||"fangdong"!=this.tableName){t.next=15;break}return this.$utils.msg("房东账号不能为空"),t.abrupt("return");case 15:if(this.ruleForm.mima||"fangdong"!=this.tableName){t.next=18;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 18:if("fangdong"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){t.next=21;break}return this.$utils.msg("身份证应输入身份证格式"),t.abrupt("return");case 21:if("fangdong"!=this.tableName||!this.ruleForm.lianxishouji||this.$validate.isMobile(this.ruleForm.lianxishouji)){t.next=24;break}return this.$utils.msg("联系手机应输入手机格式"),t.abrupt("return");case 24:return n=e.getStorageSync("nowTable"),t.next=27,this.$api.update(n,this.ruleForm);case 27:this.$utils.msgBack("修改成功");case 29:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),zuketouxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang=e.$base.url+"upload/"+t.file,e.$forceUpdate()}))},fangdongtouxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang=e.$base.url+"upload/"+t.file,e.$forceUpdate()}))}}};t.default=s}).call(this,n("543d")["default"])},c152:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},c439:function(e,t,n){"use strict";n.r(t);var i=n("c152"),r=n("3d24");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("a3e2");var u,s=n("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"c9fc3f48",null,!1,i["a"],u);t["default"]=o.exports},f276:function(e,t,n){"use strict";(function(e){n("ab4c"),n("921b");i(n("66fd"));var t=i(n("c439"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["f276","common/runtime","common/vendor"]]]);