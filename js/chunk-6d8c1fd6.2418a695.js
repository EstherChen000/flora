(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d8c1fd6"],{"498a":function(t,a,o){"use strict";var r=o("23e7"),i=o("58a8").trim,c=o("c8d2");r({target:"String",proto:!0,forced:c("trim")},{trim:function(){return i(this)}})},"99af":function(t,a,o){"use strict";var r=o("23e7"),i=o("d039"),c=o("e8b5"),s=o("861d"),n=o("7b0b"),e=o("50c4"),u=o("8418"),d=o("65f0"),l=o("1dde"),p=o("b622"),f=o("2d00"),h=p("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",m=f>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),C=l("concat"),y=function(t){if(!s(t))return!1;var a=t[h];return void 0!==a?!!a:c(t)},_=!m||!C;r({target:"Array",proto:!0,forced:_},{concat:function(t){var a,o,r,i,c,s=n(this),l=d(s,0),p=0;for(a=-1,r=arguments.length;a<r;a++)if(c=-1===a?s:arguments[a],y(c)){if(i=e(c.length),p+i>v)throw TypeError(g);for(o=0;o<i;o++,p++)o in c&&u(l,p,c[o])}else{if(p>=v)throw TypeError(g);u(l,p++,c)}return l.length=p,l}})},c8d2:function(t,a,o){var r=o("d039"),i=o("5899"),c="​᠎";t.exports=function(t){return r((function(){return!!i[t]()||c[t]()!=c||i[t].name!==t}))}},ea25:function(t,a,o){"use strict";o.r(a);var r=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),o("div",{staticClass:"my-5 row justify-content-center w-100"},[o("div",{staticClass:"col-md-5 col-11"},[o("div",{staticClass:"orderlist"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!1===t.isCart,expression:"isCart === false"}]},[t._v(" 購物車現在是空的喔！ "),o("router-link",{staticClass:"btn btn-primary ml-3 btn-sm",attrs:{to:"/shop/product_show"}},[t._v("前往購物 ")])],1),t._l(t.cart,(function(a){return o("div",{key:a.id,staticClass:"card mt-2"},[o("h5",{staticClass:"card-header"},[t._v(" "+t._s(a.title)+" "),o("button",{staticClass:"btn btn-outline-danger btn-sm float-right",attrs:{type:"button"},on:{click:function(o){return t.removeCartItem(a.id)}}},[o("i",{staticClass:"far fa-trash-alt"})])]),o("div",{staticClass:"card-body p-3"},[o("div",{staticClass:"float-left",staticStyle:{height:"100px",width:"75px","background-size":"contain","background-repeat":"no-repeat","background-position":"left top"},style:{backgroundImage:"url("+a.imageUrl+")"}}),o("div",{staticClass:"float-right w-50"},[o("div",{staticClass:"input-group h6"},[o("div",{staticClass:"input-group-prepend"},[o("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(o){return t.productQty("reduce",a.id)}}},[o("i",{staticClass:"fas fa-minus"})])]),a.qty==a.qtyN?o("label",{staticClass:"form-control text-center",attrs:{for:"button"}},[t._v(t._s(a.qtyN))]):t._e(),a.qty!==a.qtyN?o("label",{staticClass:"form-control text-center",attrs:{for:"button"}},[t._v(t._s(a.qty))]):t._e(),o("div",{staticClass:"input-group-append"},[o("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(o){return t.productQty("add",a.id)}}},[o("i",{staticClass:"fas fa-plus"})])])]),o("div",{staticClass:"h6"},[t._v("優惠價 NT."+t._s(t._f("currency")(a.price)))]),o("div",{staticClass:"h5 text-danger"},[t._v(" 小計 NT."+t._s(t._f("currency")(a.price*a.qty))+" ")])])])])}))],2),t.isCoupon?t._e():o("div",{staticClass:"input-group mt-3 input-group-sm"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(a){a.target.composing||(t.coupon_code=a.target.value)}}}),o("div",{staticClass:"input-group-append"},[o("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v(" 套用優惠碼 ")])])]),o("div",{staticClass:"mt-1",class:{"text-danger":t.isWarrning}},[t._v(t._s(t.codeValidate))])]),o("div",{staticClass:"col-md-5 col-11"},[o("div",{staticClass:"card mt-2"},[o("h5",{staticClass:"card-header"},[t._v(" 購物車資訊 ")]),o("div",{staticClass:"card-body"},[o("div",{staticClass:"text-right py-3"},[o("div",{staticClass:"h6 "},[t._v("小計 NT."+t._s(t._f("currency")(t.total)))]),t.finalTotal!==t.total?o("div",{staticClass:"h6 text-info"},[t._v(" 折扣價 NT."+t._s(t._f("currency")(t.finalTotal))+" ")]):t._e(),o("div",{staticClass:"h6 "},[t._v("運費 NT.0")]),o("hr"),o("div",{staticClass:"h5 text-danger"},[t._v(" 總計 NT."+t._s(t._f("currency")(t.finalTotal))+" ")])]),o("button",{directives:[{name:"show",rawName:"v-show",value:!0===t.isCart,expression:"isCart === true"}],staticClass:"btn btn-primary float-right",on:{click:t.addCartAPIandCoupon}},[t._v("下一步 ")])])])])])],1)},i=[],c=(o("159b"),o("498a"),o("99af"),{data:function(){return{status:{loadingItem:""},isLoading:!1,coupon_code:"",isCart:!1,cartStorage:JSON.parse(localStorage.getItem("cartList"))||[],cart:[],finalTotal:0,total:0,discount:1,coupon:[{title:"振興特優價",code:"3jvpd9",percent:.85,expiry:[2030,9,31]},{title:"新會員特惠",code:"newmember",percent:.8,expiry:[2030,11,31]}],isCoupon:!1,isWarrning:!1}},methods:{removeCartItem:function(t){var a=this,o=[],r=[],i=0;a.isLoading=!0,a.cart.forEach((function(i){if(i.id!==t){var c={product_id:i.id,qty:i.qty,coupon:a.coupon_code,off:a.discount};o.push(c),r.push(i)}})),a.cart=r,a.cartStorage=o,localStorage.removeItem("cartList"),localStorage.setItem("cartList",JSON.stringify(a.cartStorage)),a.isLoading=!1,0===r.length?a.isCart=!1:a.isCart=!0,a.cart.forEach((function(t){i+=t.price*t.qty})),a.total=i,a.finalTotal=i*a.discount},addCouponCode:function(){var t=this;if(t.coupon.forEach((function(a){t.coupon_code.trim()===a.code&&!1===t.isCoupon&&(t.discount=a.percent)})),!1===t.isCoupon){var a={};t.total*=t.discount,t.finalTotal*=t.discount,t.cart.forEach((function(o){o.price*=t.discount,a={product_id:o.id,qty:o.qty,coupon:t.coupon_code,off:t.discount}})),t.cartStorage=[],t.cartStorage.push(a),localStorage.removeItem("cartList"),localStorage.setItem("cartList",JSON.stringify(t.cartStorage)),t.isCoupon=!0}},storageToCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("flora","/products/all"),o=[];t.$http.get(a).then((function(a){if(o=a.data.products,0===t.cartStorage.length)t.isCart=!1;else{var r=[],i=0;t.isCart=!0,t.cartStorage.forEach((function(a){r.push(a.product_id),a.coupon&&(t.isCoupon=!0,t.discount=a.off,t.coupon_code=a.coupon)}));var c=[];o.forEach((function(t){r.forEach((function(a){t.id===a&&c.push(t)}))})),t.cart=c,t.cart.forEach((function(a){t.cartStorage.forEach((function(t){a.id===t.product_id&&(a.qty=t.qty)})),i+=a.price*a.qty})),t.total=i,t.finalTotal=i*t.discount}}))},addCartAPIandCoupon:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("flora","/cart"),a="".concat("https://vue-course-api.hexschool.io","/api/").concat("flora","/coupon"),o=this,r={},i={code:o.coupon_code};o.isLoading=!0,o.cartStorage.forEach((function(a){r={product_id:a.product_id,qty:a.qty},o.$http.post(t,{data:r}).then((function(){o.$bus.$emit("message:push","已加入購物車","success")}))})),o.$http.post(a,{data:i}).then((function(){o.isLoading=!1,localStorage.removeItem("cartList"),o.$router.push("/cart/cart_checkout")}))},productQty:function(t,a){var o=this,r=[],i=0;"add"===t?o.cart.forEach((function(t,i){t.id===a&&(t.qty+=1,o.$bus.$emit("message:push","商品數目已變更","success"),o.$set(o.cart[i],"qtyN",t.qty));var c={product_id:t.id,qty:t.qty};r.push(c)})):"reduce"===t&&o.cart.forEach((function(t,i){t.id===a&&(t.qty-=1,o.$bus.$emit("message:push","商品數目已變更","success"),o.$set(o.cart[i],"qtyN",t.qty));var c={product_id:t.id,qty:t.qty};r.push(c)})),o.cartStorage=r,localStorage.removeItem("cartList"),localStorage.setItem("cartList",JSON.stringify(o.cartStorage)),o.cart.forEach((function(t){i+=t.price*t.qty})),o.total=i,o.finalTotal=i*o.discount}},computed:{codeValidate:function(){var t=this,a="";return"3jvpd9"===t.coupon_code.trim()?(a="可使用優惠券 振興特優價",t.isWarrning=!1):"newmember"===t.coupon_code.trim()?(a="可使用優惠券 新會員特惠",t.isWarrning=!1):""===t.coupon_code.trim()&&!1===t.isCoupon?(a="請輸入優惠券",t.isWarrning=!1):!0===t.isCoupon?(a="購物車商品已經套用優惠券囉",t.isWarrning=!0):(a="請輸入有效優惠券",t.isWarrning=!0),a}},created:function(){var t=this;t.storageToCart()}}),s=c,n=o("2877"),e=Object(n["a"])(s,r,i,!1,null,null,null);a["default"]=e.exports}}]);
//# sourceMappingURL=chunk-6d8c1fd6.2418a695.js.map