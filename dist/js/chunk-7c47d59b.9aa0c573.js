(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c47d59b"],{"943d":function(e,t,r){},b15c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"add-container"},[e._m(0),r("div",{staticClass:"add-box"},[r("Form",{ref:"formInline",attrs:{model:e.formData,"label-position":"left","label-width":100,rules:e.ruleInline}},[r("FormItem",{attrs:{label:"收件人",prop:"name"}},[r("i-input",{attrs:{size:"large"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),r("FormItem",{attrs:{label:"收件地区",prop:"address"}},[r("Distpicker",{attrs:{province:e.formData.province,city:e.formData.city,area:e.formData.area},on:{province:e.getProvince,city:e.getCity,area:e.getArea}})],1),r("FormItem",{attrs:{label:"收件地址",prop:"address"}},[r("i-input",{attrs:{size:"large"},model:{value:e.formData.address,callback:function(t){e.$set(e.formData,"address",t)},expression:"formData.address"}})],1),r("FormItem",{attrs:{label:"手机号码",prop:"phone"}},[r("i-input",{attrs:{size:"large"},model:{value:e.formData.phone,callback:function(t){e.$set(e.formData,"phone",t)},expression:"formData.phone"}})],1),r("FormItem",{attrs:{label:"邮政编码",prop:"postalcode"}},[r("i-input",{attrs:{size:"large"},model:{value:e.formData.postalcode,callback:function(t){e.$set(e.formData,"postalcode",t)},expression:"formData.postalcode"}})],1)],1)],1),r("div",{staticClass:"add-submit"},[r("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formInline")}}},[e._v("添加地址")])],1)])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"add-title"},[r("h1",[e._v("添加收货地址")])])}],s=(r("a4d3"),r("4de4"),r("4160"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),n=r("784f"),i=r.n(n),c=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={name:"AddAddress",data:function(){return{formData:{name:"",address:"",phone:"",postalcode:"",province:"广东省",city:"广州市",area:"天河区"},ruleInline:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}],postalcode:[{required:!0,message:"请输入邮政编码",trigger:"blur"}],phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{type:"string",pattern:/^1[3|4|5|7|8][0-9]{9}$/,message:"手机号格式出错",trigger:"blur"}]}}},methods:d({},Object(c["b"])(["addAddress"]),{getProvince:function(e){this.formData.province=e.value},getCity:function(e){this.formData.city=e.value},getArea:function(e){this.formData.area=e.value},handleSubmit:function(e){var t=this;console.log(this.formData.name),this.$refs[e].validate((function(e){e?t.addAddress(t.formData).then((function(e){e?(t.$Message.success("添加成功"),t.$router.push("/home/myAddress")):t.$Message.error("添加失败，请重新尝试")})):t.$Message.error("请填写正确的地址信息")}))}}),components:{Distpicker:i.a}},m=u,f=(r("ef51"),r("2877")),p=Object(f["a"])(m,a,o,!1,null,"bf58fa0e",null);t["default"]=p.exports},ef51:function(e,t,r){"use strict";var a=r("943d"),o=r.n(a);o.a}}]);