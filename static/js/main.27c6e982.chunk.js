(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){},28:function(e,t,a){e.exports=a(56)},33:function(e,t,a){},43:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(24),l=a.n(o),r=(a(33),a(1)),i=a(2),u=a(9),s=a(10),m=a(12),p=a(4),f=a.n(p),h=a(5),d=a.n(h),b=a(57),v=new b.a(window.localStorage.getItem("token")||null);function E(e){e?window.localStorage.setItem("token",e):window.localStorage.removeItem("token"),v.next(e)}var w=new b.a(window.localStorage.getItem("path")||"");var N=new b.a(JSON.parse(window.localStorage.getItem("favorite")||"[]"));function g(e){e?window.localStorage.setItem("favorite",JSON.stringify(e)):window.localStorage.removeItem("favorite"),N.next(e)}function _(){new f.a.Dropbox({fetch:d.a,accessToken:v.value}).authTokenRevoke().then(function(e){return E(null)}).catch(function(e){return console.log(e)})}function j(e){var t=window.location.pathname;new f.a.Dropbox({fetch:d.a,accessToken:v.value}).filesListFolder({path:w.value}).then(function(a){t===window.location.pathname&&e(a.entries)}).catch(function(e){return E(null)})}function O(e,t){var a="/"===window.location.pathname?"":window.location.pathname.slice(5);new f.a.Dropbox({fetch:d.a,accessToken:v.value}).filesUpload({path:"".concat(w.value,"/").concat(e.name),contents:e,autorename:!0}).then(function(e){a===w.value&&j(t)}).catch(function(e){return console.log(e)})}function k(e,t){var a=window.location.pathname;new f.a.Dropbox({fetch:d.a,accessToken:v.value}).filesSearch({path:"",query:t}).then(function(t){if(a===window.location.pathname){var n=[];t.matches.map(function(e){return n.push(e.metadata)}),e(n)}})}function y(e,t,a){var n=window.location.pathname;new f.a.Dropbox({fetch:d.a,accessToken:v.value}).filesMove({from_path:e,to_path:t,autorename:!0}).then(function(e){"/search"!==n&&"/favorites"!==n&&j(a);var t=Object(m.a)(N.value);t.map(function(a,n){a.id===e.id&&(t.splice(n,1,e),g(t))})}).catch(function(e){return console.log(e)})}a(43);var C=function(){if(v.value)return c.a.createElement(u.a,{to:"/"});var e=new f.a.Dropbox({fetch:d.a,clientId:"kvms35pmp4vwz5n"}).getAuthenticationUrl("http://localhost:3000/auth-done");return c.a.createElement("div",{className:"login"},c.a.createElement(s.Helmet,null,c.a.createElement("title",null,"Login")),c.a.createElement("img",{src:"https://www.mktv.mx/wp-content/uploads/2017/07/letter_sending.gif",width:400,alt:"Dropbox Logo"}),c.a.createElement("a",{href:e,className:"login_link"},c.a.createElement("button",{className:"login_link_button"},"Login using Dropbox ")))};var S=function(){return c.a.createElement("button",{className:"logout-button",onClick:_},"Log out")};a(22);var x=function(e){var t,a=Object(n.useState)(e.file.name),o=Object(r.a)(a,2),l=o[0],i=o[1],u=Object(n.useState)(null),s=Object(r.a)(u,2),p=s[0],h=s[1],b=e.file,E=e.cb,w=e.showState,_=Object(n.useState)(""),O=Object(r.a)(_,2),k=O[0],C=O[1];function S(){w(!1)}return"rename"===e.sendId?c.a.createElement("div",{className:"popUp"},c.a.createElement("div",{className:"popUp-content"},c.a.createElement("button",{onClick:S,className:"popUp-content-btn"},"\xd7"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=b.path_lower.split("/");t.pop(),function(e,t,a,n){var c=window.location.pathname;new f.a.Dropbox({fetch:d.a,accessToken:v.value}).filesMove({from_path:e,to_path:t}).then(function(e){"/search"!==c&&"/favorites"!==c&&j(a);var t=Object(m.a)(N.value);t.map(function(a,n){a.id===e.id&&(t.splice(n,1,e),g(t))})}).catch(function(e){n(e)})}(b.path_lower,"".concat(t.join("/"),"/").concat(l),E,C),S()},className:"popUp-content-box"},k?c.a.createElement("p",{style:{color:"red"}},"Filename has already been taken"):c.a.createElement("p",null,"Rename item"),c.a.createElement("p",null,b.name),c.a.createElement("input",{onChange:function(e){i(e.target.value)},placeholder:"New name"}),c.a.createElement("button",{type:"submit"},"Ok")))):"move"===e.sendId?c.a.createElement("div",{className:"popUp"},c.a.createElement("div",{className:"popUp-content"},c.a.createElement("button",{onClick:S,className:"popUp-content-btn"},"\xd7"),c.a.createElement("div",{className:"popUp-content-box move-div"},c.a.createElement("h4",null,b.name),c.a.createElement("p",null,"Select where to move item"),c.a.createElement("ul",{className:"move-ul"},c.a.createElement("li",{className:"move-li move-fileName",onClick:function(){return y(b.path_lower,"/".concat(b.name),E)}},"AmazingBox"),p?p.map(function(e){return b.name===e.name?null:c.a.createElement("li",{className:"move-li",key:e.id,onClick:function(){return y(b.path_lower,"".concat(e.path_lower,"/").concat(b.name),E)}},function(e){var t=e.path_display.split("/");return t.pop(),1===t.length?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"move-filePathLower"},"/"),c.a.createElement("p",{className:"move-fileName"},e.name)):c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"move-filePathLower"},"".concat(t.join("/"),"/")),c.a.createElement("p",{className:"move-fileName"},e.name))}(e))}):(t=h,void new f.a.Dropbox({fetch:d.a,accessToken:v.value}).filesListFolder({path:"",recursive:!0}).then(function(e){var a=e.entries;t(a.filter(function(e){return"folder"===e[".tag"]}).sort(function(e,t){return e.path_lower.localeCompare(t.path_lower)}))}).catch(function(e){return console.log(e)})))))):"remove"===e.sendId?c.a.createElement("div",{className:"popUp"},c.a.createElement("div",{className:"popUp-content"},c.a.createElement("button",{onClick:S,className:"popUp-content-btn"},"\xd7"),c.a.createElement("div",{className:"popUp-content-box"},c.a.createElement("p",null,"Are you sure you wanna delete this item?"),c.a.createElement("button",{onClick:function(){return function(e,t){var a=window.location.pathname;new f.a.Dropbox({fetch:d.a,accessToken:v.value}).filesDelete({path:e}).then(function(n){"/search"!==a&&"/favorites"!==a&&j(t);var c=Object(m.a)(N.value);c.map(function(t,a){t.path_lower===e&&(c.splice(a,1),g(c))})}).catch(function(e){return console.log(e)})}(b.path_lower,E)}},"Yes"),c.a.createElement("button",{onClick:S},"Cancel")))):"copy"===e.sendId?c.a.createElement("div",{className:"popUp"},c.a.createElement("div",{className:"popUp-content"},c.a.createElement("button",{onClick:S,className:"popUp-content-btn"},"\xd7"),c.a.createElement("div",{className:"popUp-content-box"},c.a.createElement("p",null,"Are you sure you wanna copy this item?"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e,t,a){var n=window.location.pathname;new f.a.Dropbox({fetch:d.a,accessToken:v.value}).filesCopy({from_path:e,to_path:t,autorename:!0}).then(function(e){"/search"!==n&&"/favorites"!==n&&j(a)})}(b.path_lower,b.path_lower,E),S()}},c.a.createElement("span",null,c.a.createElement("button",{className:"copyButtons",type:"submit"},"Copy")))))):void 0};a(52);var U=function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(!1),u=Object(r.a)(i,2),s=u[0],m=u[1];function p(e){l(e.target.id),m(!s)}return c.a.createElement("div",null,c.a.createElement("div",{className:"itemMenu"},c.a.createElement("button",{onClick:p,className:"itemMenu-button openfirst",id:"rename"},"Rename"),c.a.createElement("button",{onClick:p,className:"itemMenu-button opensecond",id:"move"},"Move"),c.a.createElement("button",{onClick:p,className:"itemMenu-button openthird",id:"remove"},"Remove"),c.a.createElement("button",{onClick:p,className:"itemMenu-button openfourth",id:"copy"},"Copy")),s?c.a.createElement(x,{className:"showPop",file:e.file,cb:e.cb,showState:m,sendId:o}):null)};var I=function(e){var t,a=Object(n.useState)(N.value),o=Object(r.a)(a,2),l=o[0],u=o[1],s=Object(n.useState)(!1),p=Object(r.a)(s,2),h=p[0],b=p[1],E=Object(n.useState)(""),w=Object(r.a)(E,2),_=w[0],j=w[1],O=e.file,k=O[".tag"];return Object(n.useEffect)(function(){var e,t,a=N.subscribe(function(e){u(e)});return function(e){var t=e.split("."),a=t[t.length-1];return"png"===a||"jpg"===a||"jpeg"===a||"tiff"===a||"tif"===a||"gif"===a||"bmp"===a}(O.name)?(e=function(e){return j(e)},t=O.path_lower,new f.a.Dropbox({fetch:d.a,accessToken:v.value}).filesGetThumbnail({path:t}).then(function(t){e(c.a.createElement("img",{className:"thumbnail",src:window.URL.createObjectURL(t.fileBlob),alt:""}))}).catch(function(t){e("photo")})):j("folder"===k?"folder":"insert_drive_file"),function(){a.unsubscribe()}},[O]),c.a.createElement(c.a.Fragment,null,c.a.createElement("td",null,c.a.createElement("button",{className:"favorite-Button material-icons",onClick:function(){var e=Object(m.a)(l);e.find(function(e){return e.id===O.id})?e=e.filter(function(e){return e.id!==O.id}):e.push(O),g(e)}},l&&l.find(function(e){return e.id===O.id})?"star":"star_border")),c.a.createElement("td",{className:"td-type material-icons"},_),c.a.createElement("td",{className:"td-name"},"folder"===k?c.a.createElement(i.b,{to:"/home".concat(O.path_display)},O.name):O.name),c.a.createElement("td",{className:"td-lastUpdate"},"folder"!==k?(t=O.server_modified,new Date(t).toLocaleString("sv-SE")):null),c.a.createElement("td",{className:"td-size"},"folder"!==k?function(e){var t=["Bytes","KB","MB","GB","TB"];if(0===e)return"n/a";var a=parseInt(Math.floor(Math.log(e)/Math.log(1024)),10);return 0===a?"".concat(e," ").concat(t[a]):"".concat((e/Math.pow(1024,a)).toFixed(1)," ").concat(t[a])}(O.size):null),c.a.createElement("td",{className:"td-download material-icons"},"file"===k?c.a.createElement("span",{onClick:function(){return e=O.path_lower,void new f.a.Dropbox({fetch:d.a,accessToken:v.value}).filesGetTemporaryLink({path:e}).then(function(e){window.location.href=e.link}).catch(function(e){return console.log(e)});var e}},"cloud_download"):null),c.a.createElement("td",{className:"td-menuButton"},c.a.createElement("button",{onClick:function(){return b(!h)},className:"td-menuButton material-icons"},"more_horiz")),c.a.createElement("td",{className:"td-menu"},h?c.a.createElement(U,{file:O,cb:e.cb}):null))};var B=function(e){var t=e.files,a=e.cb;return c.a.createElement("div",{className:"ItemList"},c.a.createElement("table",{className:"item-table",cellSpacing:"0",cellPadding:"0"},c.a.createElement("thead",null,c.a.createElement("tr",{className:"head-row"},c.a.createElement("th",{className:"th-empty"}),c.a.createElement("th",{className:"th-type"},"Type"),c.a.createElement("th",{className:"th-name"},"Name"),c.a.createElement("th",{className:"th-lastUpdate"},"Last Updated"),c.a.createElement("th",{className:"th-size"},"Size"),c.a.createElement("th",{className:"th-empty2"}),c.a.createElement("th",{className:"th-empty3"}))),c.a.createElement("tbody",null,t.map(function(e){return c.a.createElement("tr",{className:"file-row",key:e.path_lower},c.a.createElement(I,{file:e,cb:a}))}))))};a(53);var D=function(){var e=w.value.split("/");return c.a.createElement("div",{className:"path-list"},e.map(function(t,a){var n=e.slice(0,a+1).join("/");return n?c.a.createElement(i.b,{key:n,to:"/home".concat(n)}," ","> ",t):c.a.createElement(i.b,{key:n,to:"/"},"> amazingbox")}))},F=a(13);function M(e,t){switch(t.type){case"showMenu":return Object(F.a)({},e,{showMenu:!e.showMenu,showCreateFolder:!1,inputValue:""});case"show_create_folder":return console.log(e),Object(F.a)({},e,{showCreateFolder:!0});case"cancel_folder":return Object(F.a)({},e,{showCreateFolder:!1,inputValue:""});default:return void console.log("ITS BROKEN!")}}var T=function(e){var t=Object(n.useReducer)(M,{showMenu:!1,showCreateFolder:!1,inputValue:""}),a=Object(r.a)(t,2),o=a[0],l=a[1],i=e.cb;return c.a.createElement("div",{className:"add-menuContainer"},o.showCreateFolder?c.a.createElement("div",{className:"popUp"},c.a.createElement("div",{className:"popUp-inputfield modal__shadow__container"},c.a.createElement("input",{className:"modal__shadow__input",type:"text",spellCheck:"false",onChange:function(e){return o.inputValue=e.target.value},required:!0}),c.a.createElement("span",{className:"modal__shadow__container__buttonBox"},c.a.createElement("button",{className:"modal__shadow__container__buttonBox__button",onClick:function(){!function(e,t){var a=window.location.pathname;new f.a.Dropbox({fetch:d.a,accessToken:v.value}).filesCreateFolder({path:"".concat(w.value,"/").concat(e),autorename:!0}).then(function(e){a===w.value&&j(t)}).catch(function(e){return console.log(e)})}(o.inputValue,i),l({type:"cancel_folder"})}},"Create"),c.a.createElement("button",{className:"modal__shadow__container__buttonBox__button",onClick:function(){return l({type:"cancel_folder"})}},"Cancel")))):null,o.showMenu?c.a.createElement("div",{className:"add-popupMenu"},c.a.createElement("input",{className:"add-fileButton material-icons",type:"file",multiple:!0,onChange:function(e){for(var t=0,a=Array.from(e.target.files);t<a.length;t++)O(a[t],i)}}),c.a.createElement("label",{className:"custom-file-label material-icons opensecond",htmlFor:"inputGroupFile01"},"insert_drive_file"),c.a.createElement("button",{className:"add-folderButton material-icons opensecond",onClick:function(){return l({type:"show_create_folder"})}},"create_new_folder")):null,c.a.createElement("button",{className:"add-button add-icon material-icons",onClick:function(){return l({type:"showMenu"})}},"add_circle_outline"))};var L=function(e){var t=Object(n.useState)(v.value),a=Object(r.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)([]),s=Object(r.a)(i,2),m=s[0],p=s[1];function f(e){p(e)}return Object(n.useEffect)(function(){var t,a=v.subscribe(function(e){l(e)}),n="/"===e.location.pathname?"":e.location.pathname.slice(5);(t=n)?window.localStorage.setItem("path",t):window.localStorage.removeItem("path"),w.next(t),j(f);var c=setInterval(function(){return j(f)},5e3);return function(){clearInterval(c),a.unsubscribe()}},[e.location.pathname]),o?c.a.createElement(c.a.Fragment,null,c.a.createElement("main",null,c.a.createElement(D,null),c.a.createElement(B,{files:m,cb:f}),c.a.createElement(T,{cb:f}))):c.a.createElement(u.a,{to:"/auth"})},z=a(27);a(55);var A=function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),o=a[0],l=a[1],u=Object(z.useDebounce)(o,500),s=Object(r.a)(u,1)[0],m=e.cb;return Object(n.useEffect)(function(){k(m,s);var e=setInterval(function(){return k(m,s)},1e3);return function(){clearInterval(e)}},[s]),c.a.createElement("div",{className:"search-bar"},c.a.createElement("input",{className:"search-bar__text-input",onChange:function(e){l(e.target.value)},placeholder:"Search",value:o}),c.a.createElement(i.b,{to:"/"},c.a.createElement("button",{className:"search-bar__clear-button"},"\xd7")))};var R=function(){var e=Object(n.useState)(v.value),t=Object(r.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)([]),i=Object(r.a)(l,2),s=i[0],m=i[1];return Object(n.useEffect)(function(){var e=v.subscribe(function(e){o(e)});return function(){e.unsubscribe()}},[]),a?c.a.createElement(c.a.Fragment,null,c.a.createElement(A,{cb:m}),c.a.createElement(B,{files:s})):c.a.createElement(u.a,{to:"/auth"})};var V=function(e){var t=Object(n.useState)(v.value),a=Object(r.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(N.value),m=Object(r.a)(i,2),p=m[0],f=m[1];return Object(n.useEffect)(function(){var e=N.subscribe(function(e){f(e)}),t=v.subscribe(function(e){l(e)});return function(){t.unsubscribe(),e.unsubscribe()}},[]),o?c.a.createElement(c.a.Fragment,null,c.a.createElement(s.Helmet,null,c.a.createElement("title",null,"AmazingBox/Favorites")),c.a.createElement(B,{files:p})):c.a.createElement(u.a,{to:"/auth"})},G=function(){var e=Object(n.useState)(v.value),t=Object(r.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(function(){var e=v.subscribe(function(e){o(e)});return E(function(e){var t=Object.create(null);return"string"!==typeof e?t:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var a=e.replace(/\+/g," ").split("="),n=a.shift(),c=a.length>0?a.join("="):void 0;n=decodeURIComponent(n),c=void 0===c?null:decodeURIComponent(c),void 0===t[n]?t[n]=c:Array.isArray(t[n])?t[n].push(c):t[n]=[t[n],c]}),t):t}(window.location.hash).access_token),function(){e.unsubscribe()}},[]),a?c.a.createElement(u.a,{to:"/"}):c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:"https://www.mktv.mx/wp-content/uploads/2017/07/letter_sending.gif",width:400,alt:"Dropbox Logo"}))};var J=function(){var e=Object(n.useState)(v.value),t=Object(r.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(function(){var e=v.subscribe(function(e){o(e)});return function(){e.unsubscribe()}},[]),c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},a?c.a.createElement("header",{className:"nav-header"},c.a.createElement(s.Helmet,null,c.a.createElement("title",null,"AmazingBox")),c.a.createElement(i.b,{className:"home-icon material-icons",to:"/"},"home"),c.a.createElement(i.b,{className:"favorites",to:"/favorites"},c.a.createElement("i",{className:"favorites-icon material-icons"},"star")," ",c.a.createElement("span",{className:"favorites-text"},"Favorites")),c.a.createElement(i.b,{className:"search-icon material-icons",to:"/search"},"search"),c.a.createElement(S,null)):null,c.a.createElement(u.b,{exact:!0,path:"/",component:L}),c.a.createElement(u.b,{path:"/home",component:L}),c.a.createElement(u.b,{path:"/favorites",component:V}),c.a.createElement(u.b,{path:"/search",component:R}),c.a.createElement(u.b,{path:"/auth",component:C}),c.a.createElement(u.b,{path:"/auth-done",component:G})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.27c6e982.chunk.js.map