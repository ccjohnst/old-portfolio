(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[678],{9373:function(e,t,n){"use strict";t.Z=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==m(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),a=(r=n(5697))&&r.__esModule?r:{default:r};function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=function(e){var t,n=e.element,r=e.children,a=e.tel,l=e.sms,i=e.facetime,s=e.email,d=e.href,h=e.headers,b=e.obfuscate,g=e.obfuscateChildren,A=e.linkText,v=e.style,E=e.onClick,y=p(e,["element","children","tel","sms","facetime","email","href","headers","obfuscate","obfuscateChildren","linkText","style","onClick"]),w=f((0,o.useState)(!1),2),j=w[0],P=w[1],B=r||a||l||i||s||d,k=n,S=function(){var e,t;if(s)e="mailto:".concat(s),h&&(e+="?".concat((t=h,Object.keys(t).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(t[e]))})).join("&"))));else if(a)e="tel:".concat(a);else if(l)e="sms:".concat(l);else if(i)e="facetime:".concat(i);else if(d)e=d;else{if("object"===m(r))return"";e=r}return e},O=u(u({},v),{},{unicodeBidi:"bidi-override",direction:!0===j||!1===b||!1===g?"ltr":"rtl"}),M=!0===j||!1===b||"object"===m(r)||!1===g?B:void 0!==(t=B)&&t.split("").reverse().join("").replace("(",")").replace(")","("),U="a"===k?{href:!0===j||!1===b?S():A||"obfuscated",onClick:function(){E&&"function"==typeof E&&E(),!1===j&&(window.location.href=S())}}:{};return o.default.createElement(k,c({onFocus:function(){return P(!0)},onMouseOver:function(){return P(!0)},onContextMenu:function(){return P(!0)}},y,U,{style:O}),M)};h.propTypes={element:a.default.string,children:a.default.node,tel:a.default.string,sms:a.default.string,facetime:a.default.string,email:a.default.string,href:a.default.string,headers:a.default.shape({}),obfuscate:a.default.bool,obfuscateChildren:a.default.bool,linkText:a.default.string,style:a.default.shape({}),onClick:a.default.func},h.defaultProps={element:"a",children:void 0,tel:void 0,sms:void 0,facetime:void 0,email:void 0,href:void 0,headers:void 0,obfuscate:void 0,obfuscateChildren:void 0,linkText:void 0,style:{},onClick:void 0};var b=h;t.Z=b},3720:function(e){var t="undefined"!=typeof process&&process.pid?process.pid.toString(36):"";function n(){var e=Date.now(),t=n.last||e;return n.last=e>t?e:t+1}e.exports=e.exports.default=function(e,r){return(e||"")+""+t+n().toString(36)+(r||"")},e.exports.process=function(e,r){return(e||"")+t+n().toString(36)+(r||"")},e.exports.time=function(e,t){return(e||"")+n().toString(36)+(t||"")}},5031:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r={};n.r(r),n.d(r,{A:function(){return l},PX:function(){return s},nC:function(){return a},iV:function(){return u},RJ:function(){return i},MI:function(){return c}});var o=n(7294),a="layout-module--container--YM7Lx",l="layout-module--bio--1YW8x",c="layout-module--weatherContainer--3ZhAl",i="layout-module--technologies--1rPtD",u="layout-module--project--1P7nc",s="layout-module--contact--3XWFL",m=function(e){var t=e.pageTitle,n=e.children;return o.createElement("main",{className:a},o.createElement("head",null,o.createElement("title",null,t)),n)},f="navigation-module--navAnchor--2UP9a",d="navigation-module--activeLink--Pk7TH";var p=function(){var e=o.useState(""),t=e[0],n=e[1],r=o.useState(!0),a=r[0],l=r[1],c=function(){var e=o.useState(0),t=e[0],n=e[1];return o.useEffect((function(){var e=function(){return n(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:t}}().width,i=function(e){n(e),u()},u=function(){c<=820&&l(!1)};return o.createElement("nav",{className:"navigation-module--navigation--tCgAu"},o.createElement("h3",null,"/root/navigation/",o.createElement("button",{className:"navigation-module--hamburgerIcon--2WKnP",onClick:function(){return l(!a),void console.log("click")}},a?"↰":"↴")),a?o.createElement("ul",{className:"navigation-module--linkOptions--1oU-H"},o.createElement("li",{className:"bio"===t?d:null,onClick:function(){return i("bio")}},o.createElement("a",{href:"#layout-module--bio--1YW8x",className:"bio"===t?null:f},"/bio/")),o.createElement("li",{className:"project"===t?d:null,onClick:function(){return i("project")}},o.createElement("a",{href:"#layout-module--project--1P7nc",className:"project"===t?null:f},"/project/")),o.createElement("li",{className:"contact"===t?d:null,onClick:function(){return i("contact")}},o.createElement("a",{href:"#layout-module--contact--3XWFL",className:"contact"===t?null:f},"/contact/"))):null)},h=n(3720),b=n.n(h),g=function(e){var t=e.projectName,n=e.description,r=e.altText,a=e.imgSrc,l=e.techs,c=e.webUrl,i=e.codeUrl,u=l.map((function(e){return o.createElement("li",{key:b()()},e)})),s=o.useState(!1),m=s[0],f=s[1];return o.createElement("div",{className:"cards-module--cardsContainer--ZSPAf"},o.createElement("img",{src:a,alt:r,width:"150",height:"150"}),o.createElement("h3",null,t),o.createElement("p",null,n),o.createElement("button",{onClick:function(){f(!m)}},m?"View less":"View more"),m?o.createElement(o.Fragment,null,o.createElement("a",{href:c,target:"_blank",rel:"noreferrer noopener"},"Website"),o.createElement("a",{href:i,target:"_blank",rel:"noreferrer noopener"},"Code"),o.createElement("p",null,"Technologies used"),o.createElement("ul",null,u)):null)},A=n.p+"static/cv-creator-4c8eaf170484444b381858feb1d5cfd2.png",v=n.p+"static/cc-7c2eb83a884c6adcd4834bf16acfce95.png",E=n.p+"static/portfolio-23a576089a41e295172dfc003db931af.png",y=function(){var e=function(e){var t=(0,o.useState)(null),n=t[0],r=t[1],a=(0,o.useState)(!0),l=a[0],c=a[1];return(0,o.useEffect)((function(){fetch(e).then((function(e){return e.json().then((function(e){var t=e.weather[0].icon;r(t),c(!1)}))}))}),[]),{data:n,loading:l}}("https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=891ddda0b4720fad959806ec96f4a8dd"),t=e.data,n=e.loading,r="https://openweathermap.org/img/wn/"+t+"@2x.png";return o.createElement(o.Fragment,null,n?o.createElement("div",null,"...loading weather"):o.createElement("img",{width:"40px",height:"40px",src:r,alt:"An icon of the current image in London"}))},w=n(9373),j=function(){return o.createElement("div",{className:"contact-module--contactContainer--24ZZy"},o.createElement(w.Z,{email:"christopherjohnston@protonmail.com"},o.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABBCAMAAACZxWaKAAAAM1BMVEVMaXFPUGBPUGBPUGBPUGBPUGBPUGBPUGBPUGBPUGBPUGBPUGBPUGBPUGBPUGBPUGBPUGCTCw4oAAAAEHRSTlMA0KDg8DAQwECAUJCwIGBwofNxkAAAAWNJREFUeNrtlkuSwyAMREGIv+1w/9POoBqXwEaGLLLK9IpSnk03yKqokWz4lVUrSlmXP+mcntkAWDohBBn2ZSA/fsDlIii7QTxTRBl7M4LlQXgxlMpEqXOCMxxtk9KUqZDzbuUi7b2+1jbBOCRHWyYY2zcdvLPJvXvAKNLRn5h8vgeV9DW/dGaaClda5uvP+RZGvMHcBfVqKM9hOy9B6OvWzatJIojP4qWgWQviN4LyrZeZG/+PL+AQBUGHz/WdOLyDg3K4TqOTxqk8Vq1eo7VVJLet0JurbNzr3JvP96POzKg8LaxeMHJgPXfaxsETDZXYzmsygQ1JRoJpbjVWZ1owUtPFvgmolkd05jcR3u6INyPss8NrYr4Cocb4mTghFzBRRrGBY/dXIrsz4wDn67BU87TUz58H0ti2MVoa1VhknNNx603xgnFX1E+4+q1qAP31Y+mzeH4Hz8qZddrU7g/LcuoHudaDpujK2G4AAAAASUVORK5CYII=",width:"23px",height:"32.5px",alt:"Protonmail logo"})," "),o.createElement("a",{href:"https://github.com/ccjohnst",target:"_blank",rel:"noreferrer noopener",alt:"My GitHub logo"},o.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="})),o.createElement("p",null,"Email"),o.createElement("p",null,"GitHub"))},P=function(){return o.createElement(m,{pageTitle:"Chris Johnston - Frontend Developer"},o.createElement(p,null),o.createElement("div",{className:l,id:l},o.createElement("h2",null,"Chris Johnston"),o.createElement("p",null," ","I am a frontend developer from"," ",o.createElement("div",{className:c},o.createElement(y,null),o.createElement("p",{className:r.weatherCity},"London"))),o.createElement("p",null,"Technologies that I use are: "),o.createElement("ul",{className:i},o.createElement("li",null,"Javascript"),o.createElement("li",null,"React"),o.createElement("li",null,"HTML"),o.createElement("li",null,"CSS"))),o.createElement("div",{className:u,id:u},o.createElement("h2",null,"Projects"),o.createElement("p",null,"A selection of recent projects I have made can be seen below:"),o.createElement(g,{projectName:"CV Creator",description:"A CV making tool that makes good use of React's state management and features an option to save the CV as a PDF",imgSrc:A,techs:["Javascript","React","Sass"],webUrl:"https://ccjohnst.github.io/cv-creator/",codeUrl:"https://github.com/ccjohnst/cv-creator"}),o.createElement(g,{projectName:"C Cooperson",description:"A mock Architects Website built with NextJS",imgSrc:v,techs:["Javascript","React","NextJS"],webUrl:"https://cooperson-clarke.vercel.app/",codeUrl:"https://github.com/ccjohnst/cooperson-clarke"}),o.createElement(g,{projectName:"Portfolio",description:"A simple portfolio website built using GatsbyJS",imgSrc:E,techs:["Javascript","React","GatsbyJS"],webUrl:"https://christopherjohnston.co.uk",codeUrl:"https://github.com/ccjohnst/portfolio"})),o.createElement("div",{className:s,id:s},o.createElement("h2",null,"Contact"),"For all enquiries, please feel free to contact me via the links below.",o.createElement(j,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-7b9444c862c8c9e63992.js.map