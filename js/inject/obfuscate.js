(function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=9)})({9:function(e,r,t){e.exports=t("9e6a")},"9e6a":function(e,r){var t=function(e){var r=["角","分"],t=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],n=[["元","万","亿"],["","拾","佰","仟"]],o=e<0?"欠":"";e=Math.abs(e);for(var l="",u=0;u<r.length;u++)l+=(t[Math.floor(10*e*Math.pow(10,u))%10]+r[u]).replace(/零./,"");l=l||"整",e=Math.floor(e);for(u=0;u<n[0].length&&e>0;u++){for(var a="",f=0;f<n[1].length&&e>0;f++)a=t[e%10]+n[1][f]+a,e=Math.floor(e/10);l=a.replace(/(零.)*零$/,"").replace(/^$/,"零")+n[0][u]+l}return o+l.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")};console.log(t())}});
//# sourceMappingURL=obfuscate.js.map