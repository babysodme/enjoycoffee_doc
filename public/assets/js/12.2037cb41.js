(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{278:function(e,r,t){},282:function(e,r,t){"use strict";var s=t(278);t.n(s).a},317:function(e,r,t){"use strict";t.r(r);var s={data:function(){return{ruleForm:{username:"",pass:""},rules:{username:[{required:!0,message:"请输入咖啡师姓名",trigger:"blur"}],pass:[{validator:function(e,r,t){"63329880"!==r?t(new Error("口令不正确")):t()},trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;localStorage.setItem("ms_username",r.ruleForm.username),r.$router.push("/serve/"),alert("欢迎"+r.ruleForm.username+"查阅悦咖啡学习手册！")})}}},o=(t(282),t(1)),a=Object(o.a)(s,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login-wrap"},[t("div",{staticClass:"ms-title"},[e._v("悦咖啡员工手册")]),t("div",{staticClass:"ms-login"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"0px"}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{type:"username","auto-complete":"off",placeholder:"咖啡师姓名"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),t("el-form-item",{attrs:{prop:"pass"}},[t("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"口令"},model:{value:e.ruleForm.pass,callback:function(r){e.$set(e.ruleForm,"pass",r)},expression:"ruleForm.pass"}})],1),t("el-form-item",[t("div",{staticClass:"login-btn"},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("登录")])],1)])],1)],1)])},[],!1,null,"61f49c2e",null);r.default=a.exports}}]);