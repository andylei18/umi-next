(function(){var e={768:function(e,r,a){var u=a(43);function shouldSetZeroBasis(e){if(!e){return false}return e==="0"||e.replace(/\s/g,"")==="0px"}function properBasis(e){if(shouldSetZeroBasis(e)){return"0%"}return e}e.exports=function(e){if(e.prop==="flex"){var r=u.list.space(e.value);var a="0";var n="1";var t="0%";if(r[0]){a=r[0]}if(r[1]){if(!isNaN(r[1])){n=r[1]}else{t=r[1]}}if(r[2]){t=r[2]}e.value=a+" "+n+" "+properBasis(t)}}},295:function(e,r,a){var u=a(43);e.exports=function(e){if(e.prop==="flex"){var r=u.list.space(e.value);var a=r[0];var n=r[1]||"1";var t=r[2]||"0%";if(t==="0%")t=null;e.value=a+" "+n+(t?" "+t:"")}}},556:function(e,r,a){var u=a(43);e.exports=function(e){var r=/(\d{1,}) (\d{1,}) (calc\(.*\))/g;var a=r.exec(e.value);if(e.prop==="flex"&&a){var n=u.decl({prop:"flex-grow",value:a[1],source:e.source});var t=u.decl({prop:"flex-shrink",value:a[2],source:e.source});var i=u.decl({prop:"flex-basis",value:a[3],source:e.source});e.parent.insertBefore(e,n);e.parent.insertBefore(e,t);e.parent.insertBefore(e,i);e.remove()}}},495:function(e,r,a){var u=a(768);var n=a(295);var t=a(556);var i=["none","auto","content","inherit","initial","unset"];e.exports=function(e){var r=Object.assign({bug4:true,bug6:true,bug81a:true},e);return{postcssPlugin:"postcss-flexbugs-fixes",Once:function(e,a){e.walkDecls((function(e){if(e.value.indexOf("var(")>-1){return}if(e.value==="none"){return}var s=a.list.space(e.value);if(i.indexOf(e.value)>0&&s.length===1){return}if(r.bug4){u(e)}if(r.bug6){n(e)}if(r.bug81a){t(e)}}))}}};e.exports.postcss=true},43:function(e){"use strict";e.exports=require("postcss")}};var r={};function __nccwpck_require__(a){var u=r[a];if(u!==undefined){return u.exports}var n=r[a]={exports:{}};var t=true;try{e[a](n,n.exports,__nccwpck_require__);t=false}finally{if(t)delete r[a]}return n.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var a=__nccwpck_require__(495);module.exports=a})();