(this["webpackJsonpstar-wars-planets"]=this["webpackJsonpstar-wars-planets"]||[]).push([[0],{25:function(e,t,a){var n={"./planet 1.jpg":54,"./planet 10.jpg":55,"./planet 2.jpg":56,"./planet 3.jpg":57,"./planet 4.jpg":58,"./planet 5.jpg":59,"./planet 6.jpg":60,"./planet 7.jpg":61,"./planet 8.jpg":62,"./planet 9.jpg":63};function s(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=c,e.exports=s,s.id=25},34:function(e,t,a){},35:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/planet 1.59222c29.jpg"},55:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/planet 10.09e14a34.jpg"},56:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/planet 2.939a9eca.jpg"},57:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/planet 3.b87aa626.jpg"},58:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/planet 4.4cafcf0e.jpg"},59:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/planet 5.2a7496d1.jpg"},60:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/planet 6.875863b0.jpg"},61:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/planet 7.84b6062c.jpg"},62:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/planet 8.906a853f.jpg"},63:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/planet 9.a49dc980.jpg"},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),i=a(27),l=a.n(i),r=(a(34),a(7)),p=(a(35),a(11)),o=a.n(p),j=(a(53),function(e){var t=e.message,a=e.cancel;return Object(n.jsx)("div",{className:"popup__background",children:Object(n.jsxs)("div",{className:"popup",children:[Object(n.jsx)("p",{className:"popup__message",children:t}),Object(n.jsx)("button",{type:"button",onClick:a,className:"popup__cancel",children:"ok"})]})})}),d=a.p+"static/media/arrow-right.bf6c8e9a.png",u=a.p+"static/media/arrow-left.72bee785.png",m=a(12),f=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1],l=Object(s.useState)([]),p=Object(r.a)(l,2),f=p[0],b=p[1],_=Object(s.useState)(""),h=Object(r.a)(_,2),O=h[0],g=h[1],x=Object(s.useState)(!0),N=Object(r.a)(x,2),v=N[0],w=N[1],S=Object(s.useState)(1),W=Object(r.a)(S,2),k=W[0],E=W[1],C=Object(s.useState)(0),y=Object(r.a)(C,2),P=y[0],L=y[1],B=function(e){o.a.get("https://swapi.dev/api/planets/?page=".concat(e)).then((function(e){var t,a;i(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.results),L(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.count),e&&e.data&&e.data.results||g("Error. Something was wrong :("),w(!1)})).catch((function(e){w(!1),g("Error. Something was wrong :(")}))};Object(s.useEffect)((function(){B(1);var e;b((e=a(25)).keys().map(e))}),[]);return Object(n.jsxs)("article",{className:"planets",children:[Object(n.jsx)("div",{className:"planets__cardsWrapper",children:c.map((function(e,t){return Object(n.jsxs)(m.b,{to:"/planet/".concat(1===k?t+1:(k-1)*c.length+(t+1)),className:"planets__card",children:[Object(n.jsx)("img",{src:k%2===0?f[t].default:f[9-t].default,alt:e.name,className:"planets__img"}),Object(n.jsxs)("div",{className:"planets__infoWrapper",children:[Object(n.jsx)("p",{className:"planets__infoName",children:"Name: "}),Object(n.jsxs)("p",{className:"planets__info",children:[e.name," "]})]}),Object(n.jsxs)("div",{className:"planets__infoWrapper",children:[Object(n.jsx)("p",{className:"planets__infoName",children:"Climate: "}),Object(n.jsxs)("p",{className:"planets__info",children:[e.climate," "]})]}),Object(n.jsxs)("div",{className:"planets__infoWrapper",children:[Object(n.jsx)("p",{className:"planets__infoName",children:"Population: "}),Object(n.jsxs)("p",{className:"planets__info",children:[e.population," "]})]})]},e.name)}))}),Object(n.jsxs)("div",{className:"planets__nextPrevButtonsWrapper",children:[k>1?Object(n.jsx)("button",{className:"planets__nextPrevButton",onClick:function(){k>1&&(w(!0),E(k-1),B(k-1))},children:Object(n.jsx)("img",{src:u,alt:"previous"})}):null,Object(n.jsxs)("p",{children:[1===k?1:k-1+"1"," ... ",k*c.length]}),10*k<P?Object(n.jsx)("button",{className:"planets__nextPrevButton",onClick:function(){10*k<P&&(w(!0),E(k+1),B(k+1))},children:Object(n.jsx)("img",{src:d,alt:"next"})}):null]}),O?Object(n.jsx)(j,{message:O,cancel:function(){return g("")}}):null,v?Object(n.jsx)("div",{className:"planets__preLoader",children:Object(n.jsx)("div",{className:"loader"})}):null]})},b=a(2),_=(a(69),function(){var e,t=Object(s.useState)(""),c=Object(r.a)(t,2),i=c[0],l=c[1],p=Object(s.useState)(!0),d=Object(r.a)(p,2),u=d[0],m=d[1],f=Object(s.useState)([]),b=Object(r.a)(f,2),_=b[0],h=b[1],O=Object(s.useState)([]),g=Object(r.a)(O,2),x=g[0],N=g[1],v=Object(s.useState)([]),w=Object(r.a)(v,2),S=w[0],W=w[1],k=window.location.href.match(/(\/\d+)/g)?window.location.href.match(/(\/\d+)/g)[0].match(/(\d+)/g)[0]:0;window.addEventListener("hashchange",(function(){window.location.reload()})),Object(s.useEffect)((function(){!function(e){o.a.get("https://swapi.dev/api/planets/".concat(e,"/")).then((function(e){h(null===e||void 0===e?void 0:e.data),e&&e.data||l("Error. Something was wrong :("),m(!1),e.data.residents.length>0&&function(){m(!0);for(var t=[],a=0;a<e.data.residents.length;a++)o.a.get(e.data.residents[a]).then((function(a){t.push(a.data.name),t.length===e.data.residents.length&&(W(t),m(!1)),a&&a.data||l("Error. Something was wrong :(")})).catch((function(e){m(!1),l("Error. Something was wrong :(")}))}()})).catch((function(e){m(!1),l("Error. Something was wrong :(")}))}(k);var e;N((e=a(25)).keys().map(e))}),[k]);var E=k.toString().length>1&&(+k.toString()[0]+1)%2===0,C=k.toString()[k.toString().length-1]-1;return C<0&&(C=0),Object(n.jsxs)("article",{className:"planetInfo",children:[Object(n.jsxs)("div",{className:"planetInfo__infoWrapper",children:[Object(n.jsx)("img",{src:null===(e=x[E?C:9-C])||void 0===e?void 0:e.default,alt:_.name,className:"planetInfo__image"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"planets__infoWrapper",children:[Object(n.jsx)("p",{className:"planets__infoName",children:"Name: "}),Object(n.jsxs)("p",{className:"planets__info",children:[_.name," "]})]}),Object(n.jsxs)("div",{className:"planets__infoWrapper",children:[Object(n.jsx)("p",{className:"planets__infoName",children:"Rotation period: "}),Object(n.jsxs)("p",{className:"planets__info",children:[_.rotation_period," "]})]}),Object(n.jsxs)("div",{className:"planets__infoWrapper",children:[Object(n.jsx)("p",{className:"planets__infoName",children:"Diameter: "}),Object(n.jsxs)("p",{className:"planets__info",children:[_.diameter," "]})]}),Object(n.jsxs)("div",{className:"planets__infoWrapper",children:[Object(n.jsx)("p",{className:"planets__infoName",children:"Climate: "}),Object(n.jsxs)("p",{className:"planets__info",children:[_.climate," "]})]}),Object(n.jsxs)("div",{className:"planets__infoWrapper",children:[Object(n.jsx)("p",{className:"planets__infoName",children:"Gravity: "}),Object(n.jsxs)("p",{className:"planets__info",children:[_.gravity," "]})]}),Object(n.jsxs)("div",{className:"planets__infoWrapper",children:[Object(n.jsx)("p",{className:"planets__infoName",children:"Terrain: "}),Object(n.jsxs)("p",{className:"planets__info",children:[_.terrain," "]})]}),Object(n.jsxs)("div",{className:"planets__infoWrapper",children:[Object(n.jsx)("p",{className:"planets__infoName",children:"Population: "}),Object(n.jsxs)("p",{className:"planets__info",children:[_.population," "]})]}),Object(n.jsxs)("div",{className:"planets__infoWrapper",children:[Object(n.jsx)("p",{className:"planets__infoName",children:"Residents: "}),Object(n.jsx)("p",{className:"planets__info",children:S.length>0?S.join(", "):_.name?"unknown":""})]})]})]}),i?Object(n.jsx)(j,{message:i,cancel:function(){return l("")}}):null,u?Object(n.jsx)("div",{className:"planets__preLoader",children:Object(n.jsx)("div",{className:"loader"})}):null]})});var h=function(){return Object(n.jsxs)(m.a,{children:[Object(n.jsx)(b.a,{path:"/",exact:!0,children:Object(n.jsx)(f,{})}),Object(n.jsx)(b.a,{path:"/planet",children:Object(n.jsx)(_,{})})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root")),O()}},[[70,1,2]]]);
//# sourceMappingURL=main.3710d892.chunk.js.map