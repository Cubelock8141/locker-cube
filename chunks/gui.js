var GUI=(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[4],{1303:function(t,e,n){(e=t.exports=n(9)(!1)).push([t.i,"html,\r\nbody,\r\n.index_app_2mqDO {\r\n    /* probably unecessary, transitional until layout is refactored */\r\n    width: 100%; \r\n    height: 100%;\r\n    margin: 0;\r\n\r\n    /* Setting min height/width makes the UI scroll below those sizes */\r\n    min-width: 1024px;\r\n    min-height: 640px; /* Min height to fit sprite/backdrop button */\r\n}\r\n\r\n/* @todo: move globally? Safe / side FX, for blocks particularly? */\r\n\r\n* { -webkit-box-sizing: border-box; box-sizing: border-box; }\r\n",""]),e.locals={app:"index_app_2mqDO"}},1304:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),r=n(45),i=n.n(r),c=n(42),l=n(105),s=n(114),p=n(135),d=n(26);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var f=function(){window.location="https://scratch.mit.edu"},m=function(){Object(d.a)("User canceled telemetry modal")},b=function(){Object(d.a)("User opted into telemetry")},h=function(){Object(d.a)("User opted out of telemetry")};e.default=function(t){s.a.setAppElement(t);var e,n=Object(c.d)(l.a,p.a)(s.a),o=window.location.href.match(/[?&]backpack_host=([^&]*)&?/),r=o?o[1]:null,d=window.location.href.match(/[?&]isScratchDesktop=([^&]+)/);if(d)try{e=JSON.parse(d[1])}catch(t){e=d[1]}"object"===("undefined"==typeof window?"undefined":u(window))&&(window.onbeforeunload=function(){return!0}),i.a.render(e?a.a.createElement(n,{canEditTitle:!0,isScratchDesktop:!0,showTelemetryModal:!0,canSave:!1,onTelemetryModalCancel:m,onTelemetryModalOptIn:b,onTelemetryModalOptOut:h}):a.a.createElement(n,{canEditTitle:!0,backpackVisible:!0,showComingsSoon:!0,backpackHost:r,canSave:!1,onClickLogo:f}),t)}},662:function(t,e,n){var o=n(1303);"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(10)(o,a);o.locals&&(t.exports=o.locals)},902:function(t,e,n){"use strict";n.r(e);n(903),n(905),n(917),n(934);var o=n(1),a=n.n(o),r=n(45),i=n.n(r),c=n(78),l=n(105),s=n(213),p=n(214),d=n(662),u=n.n(d);c.a.pageview("/");var f=document.getElementById("scratch");if(f.className=u.a.app,Object(p.a)())n(1304).default(f);else{s.a.setAppElement(f);var m=Object(l.a)(s.a,!0);i.a.render(a.a.createElement(m,{onBack:function(){}}),f)}},936:function(t,e){}},[[902,0]]]);
