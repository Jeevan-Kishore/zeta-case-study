(this["webpackJsonpzeta-case-study"]=this["webpackJsonpzeta-case-study"]||[]).push([[0],[,,function(e,t,n){e.exports={resetMargin:"style_resetMargin__2SeCj",listContainer:"style_listContainer__1OCdb",listItem:"style_listItem__2g2K8",intersector:"style_intersector__1Bf7J",headerOptions:"style_headerOptions__25jMQ",headerItems:"style_headerItems__1kWA1"}},,,,function(e,t,n){e.exports={itemContainer:"style_itemContainer__2oMdq"}},,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),o=(n(16),n(17),n(5)),l=n.n(o),s=n(10),u=n(9),m=n(1),d=function(e){var t=e.width,n=void 0===t?44:t,a=e.height,c=void 0===a?44:a,i=e.color,o=void 0===i?"#c3c3c3":i;return r.a.createElement("svg",{width:n,height:c,viewBox:" 0 0 ".concat(n," ").concat(c),xmlns:"http://www.w3.org/2000/svg",stroke:o},r.a.createElement("g",{fill:"none",fillRule:"evenodd",strokeWidth:"2"},r.a.createElement("circle",{cx:n/2,cy:c/2,r:"1"},r.a.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:n/2,cy:c/2,r:"1"},r.a.createElement("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"}))))},f=n(6),v=n.n(f),b=function(e){var t=e.data,n=void 0===t?{}:t,c=(e.width,e.height,n.url),i=n.type,o=Object(a.useState)(!0),l=Object(m.a)(o,2),s=l[0],u=l[1],f=function(){u(!1)};return"video"===i?r.a.createElement("video",{className:v.a.itemContainer,controls:!0},r.a.createElement("source",{src:c})):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{alt:"",onError:f,className:v.a.itemContainer,onLoad:f,src:c}),s&&r.a.createElement(d,{color:"blue"}))},p=n(2),h=n.n(p),E=function(e){var t=Object(a.useRef)(null),n=function(e){var t=Object(a.useState)(e),n=Object(m.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(null),o=Object(m.a)(i,2),l=o[0],s=o[1],u=Object(a.useRef)(null),d=function(e){var t=Object(m.a)(e,1)[0];t&&s(t)};return Object(a.useEffect)((function(){var e;return u.current&&u.current.unobserve(r),u.current=new window.IntersectionObserver(d,{rootMargin:"0px",threshold:.5}),r&&(null===u||void 0===u||null===(e=u.current)||void 0===e||e.observe(r)),function(){var e;r&&(null===u||void 0===u||null===(e=u.current)||void 0===e||e.unobserve(r))}}),[r]),[l,c]}(null===t||void 0===t?void 0:t.current),c=Object(m.a)(n,2),i=c[0],o=c[1],d=Object(a.useState)(null),f=Object(m.a)(d,2),v=f[0],p=f[1],E=Object(a.useState)([]),g=Object(m.a)(E,2),y=g[0],O=g[1],j=Object(a.useRef)({}),k=function(e){var t=e.target.getAttribute("data-animal");O([]),j.current={},p(t)};Object(a.useEffect)((function(){var e=function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/get-animal/".concat(v)).then((function(e){return e.json()}));case 2:if(n=t.sent,null===j||void 0===j?void 0:j.current[n.url]){t.next=7;break}return O([].concat(Object(s.a)(y),[n])),j.current[n.url]=!0,t.abrupt("return",!0);case 7:return t.abrupt("return",e());case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();v&&i&&i.isIntersecting&&e()}),[v,i,y]);return Object(a.useEffect)((function(){o(t.current)}),[o,i]),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("ul",{className:"".concat(h.a.resetMargin," ").concat(h.a.headerOptions)},r.a.createElement("li",{className:h.a.headerItems,"data-animal":"dog",onClick:k},"Load Dog"),r.a.createElement("li",{className:h.a.headerItems,"data-animal":"cat",onClick:k},"Load Cat"),r.a.createElement("li",{className:h.a.headerItems,"data-animal":"wolf",onClick:k},"Load Wolf")),r.a.createElement("ul",{className:"".concat(h.a.resetMargin," ").concat(h.a.listContainer)},y.map((function(e,t){return r.a.createElement("li",{className:h.a.listItem,key:"".concat(e.url,"-").concat(t)},r.a.createElement(b,{data:e})," ")}))),r.a.createElement("div",{ref:t,className:h.a.intersector})))},g=function(){return r.a.createElement("div",null,r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.fc5a68fa.chunk.js.map