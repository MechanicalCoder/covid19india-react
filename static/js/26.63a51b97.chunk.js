(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[26],{203:function(e,t,a){"use strict";a.r(t);var i=a(24),n=a(78),r=a(23),c=a(0),l=a.n(c),o=a(90),s=function(e){var t=e.width,a=e.statistic,i=window.innerWidth;t||(t=i>769?480:i);var n=(i>769?.9:1)*t/.885,c=42+r.g+n;return l.a.createElement(o.a,{viewBox:"0 0 ".concat(t," ").concat(c),height:c,width:t,speed:2,backgroundColor:r.b[a]},l.a.createElement("circle",{cx:.4*t,cy:c/2,r:"5"}),l.a.createElement("circle",{cx:.5*t,cy:c/2,r:"5"}),l.a.createElement("circle",{cx:.6*t,cy:c/2,r:"5"}))},d=a(31),m=a(88),u=a(79),p=a.n(u),h=a(82),f=a.n(h),O=a(89),b=a(255),E=a(5),g=a(81),v=a(247),y=Object(c.lazy)((function(){return Promise.all([a.e(1),a.e(8),a.e(27)]).then(a.bind(null,257))}));t.default=l.a.memo((function(e){var t,a=this,o=e.stateCode,u=void 0===o?"TT":o,h=e.data,f=e.regionHighlighted,C=e.setRegionHighlighted,j=e.anchor,T=(e.setAnchor,e.mapStatistic),k=e.setMapStatistic,w=Object(b.a)().t,x=Object(c.useRef)(),N=Object(v.a)().width,S=Object(c.useState)(r.j.DISTRICTS),R=Object(n.a)(S,2),B=R[0],U=R[1],I=Object(c.useState)(r.h[u].mapType===r.i.COUNTRY?r.k.BUBBLES:r.k.CHOROPLETH),H=Object(n.a)(I,2),L=H[0],P=H[1],M=r.h[u],D=M.mapType===r.i.COUNTRY?h:Object(i.a)({},u,h[u]),Y=Object(c.useMemo)((function(){var e,t,a=(f.districtName?null===(e=h[f.stateCode])||void 0===e||null===(t=e.districts)||void 0===t?void 0:t[f.districtName]:h[f.stateCode])||{};return Object(O.a)(a,(function(e){e.name=f.districtName||r.p[f.stateCode]}))}),[h,f.stateCode,f.districtName]),A=function(e){switch(e){case r.k.CHOROPLETH:return P(r.k.CHOROPLETH),void(M.mapType===r.i.COUNTRY&&C({stateCode:f.stateCode,districtName:null}));case r.k.BUBBLES:return void P(r.k.BUBBLES);default:return}},V=Object(c.useMemo)((function(){return l.a.createElement("svg",{width:"314",height:"314",viewBox:"0 0 314 314",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M78.2861 145.778C80.6671 155.387 84.6108 164.28 92.421 170.488C94.5409 174.766 93.7381 180.115 96.2412 184.535C99.7619 190.751 102.898 195.156 110.758 195.156C119.259 195.156 127.582 192.241 132.576 184.963C136.539 179.187 143.562 174.194 150.658 178.968C156.039 182.587 157.864 191.253 161.949 196.312C168.044 203.859 175.962 212.131 184.107 217.339C190.795 221.615 199.602 221.297 207.368 220.551C214.111 219.903 220.088 212.137 223.71 207.189C227.102 202.555 230.602 198.075 233.006 192.843C238.463 180.961 236.721 162.008 225.62 153.958C213.23 144.974 196.881 145.725 183.343 139.654C175.796 136.27 175.843 122.587 174.174 115.758C172.492 108.876 170.655 99.867 164.581 95.3733C155.36 88.5509 146.436 93.7458 137.075 96.444C133.325 97.525 131.816 100.817 129.095 103.424L129.093 103.426C126.105 106.29 121.531 110.674 117.974 112.632C113.709 114.979 111.262 119.456 105.834 119.612C104.487 119.651 98.6801 120.375 97.7693 119.227C94.2704 114.814 92.1979 113.445 86.6906 113.445C83.0636 113.445 77.14 118.241 77.14 122.31C77.14 130.086 76.4094 138.205 78.2861 145.778Z",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"}))}),[]),W=Object(c.useMemo)((function(){return l.a.createElement("svg",{width:"22",height:"27",viewBox:"-1 -5 22 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("circle",{cx:"5.5",cy:"5.5",r:"5.5",fillOpacity:"0.4"}),l.a.createElement("circle",{cx:"5.5",cy:"5.5",r:"5",strokeOpacity:"0.5"}),l.a.createElement("circle",{cx:"6.5",cy:"11.5",r:"3.5",fillOpacity:"0.4"}),l.a.createElement("circle",{cx:"6.5",cy:"11.5",r:"3",strokeOpacity:"0.5"}),l.a.createElement("circle",{cx:"13.5",cy:"9.5",r:"6.5",fillOpacity:"0.4"}),l.a.createElement("circle",{cx:"13.5",cy:"9.5",r:"6",strokeOpacity:"0.5"}))}),[]),q=Object(E.g)(),z=Object(c.useRef)();Object(c.useEffect)((function(){"#MapExplorer"===q.location.hash&&z.current.scrollIntoView()}),[q]);var J=Object(c.useMemo)((function(){var e=[];return[0,0,0,0,0,0,0].map((function(t,a){return e.push({animationDelay:"".concat(250*a,"ms")}),null})),e}),[]),K=Object(g.c)({total:Object(d.j)(Y,"total",T),config:{tension:250,clamp:!0}});return l.a.createElement("div",{className:p()("MapExplorer",{stickied:"mapexplorer"===j},{hidden:j&&"mapexplorer"!==j})},l.a.createElement("div",{className:"panel",ref:z},l.a.createElement("div",{className:"panel-left fadeInUp",style:J[0]},l.a.createElement("h2",{className:p()(T)},w(Y.name),Y.name===r.v&&" [".concat(w(r.p[f.stateCode]),"]")),f.stateCode&&l.a.createElement("h1",{className:p()("district",T)},l.a.createElement(g.a.div,null,K.total.interpolate((function(e){return Object(d.f)(Math.floor(e))}))),l.a.createElement("span",null,w(Object(d.a)(T))))),l.a.createElement("div",{className:p()("panel-right","is-".concat(T))},l.a.createElement("div",{className:"switch-type"},l.a.createElement("div",{className:p()("choropleth fadeInUp",{"is-highlighted":L===r.k.CHOROPLETH}),onClick:A.bind(this,r.k.CHOROPLETH),style:J[1]},V),l.a.createElement("div",{className:p()("bubble fadeInUp",{"is-highlighted":L===r.k.BUBBLES}),onClick:A.bind(this,r.k.BUBBLES),style:J[2]},W),M.mapType===r.i.COUNTRY&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:p()("boundary fadeInUp",{"is-highlighted":B===r.j.DISTRICTS}),onClick:U.bind(this,B===r.j.DISTRICTS?r.j.STATES:r.j.DISTRICTS),style:J[3]},l.a.createElement(m.j,null))),M.mapType===r.i.STATE&&l.a.createElement("div",{className:"back fadeInUp",onClick:function(){q.push("/#MapExplorer")},style:J[4]},l.a.createElement(m.b,null))),N<769&&l.a.createElement("div",{className:"switch-statistic fadeInUp",style:J[5]},r.m.map((function(e){return l.a.createElement("div",{key:e,className:p()("statistic-option","is-".concat(e),{"is-highlighted":T===e}),onClick:k.bind(a,e)},l.a.createElement(m.d,null))}))))),l.a.createElement("div",{ref:x,className:"fadeInUp",style:J[3]},T&&l.a.createElement(c.Suspense,{fallback:l.a.createElement(s,Object.assign({className:"map-loader"},{width:null===(t=x.current)||void 0===t?void 0:t.clientWidth,statistic:T}))},l.a.createElement(y,Object.assign({mapCode:u,mapView:B,mapViz:L},{data:D},{regionHighlighted:f,setRegionHighlighted:C},{statistic:T})))))}),(function(e,t){var a,i,n,r,c,l,o,s,d,m;return!!f()(e.stateCode,t.stateCode)&&(!!f()(e.regionHighlighted,t.regionHighlighted)&&(!!f()(e.mapStatistic,t.mapStatistic)&&(!!f()(e.anchor,t.anchor)&&(!!f()(null===(a=e.data)||void 0===a||null===(i=a.TT)||void 0===i||null===(n=i.meta)||void 0===n?void 0:n.last_updated,null===(r=t.data)||void 0===r||null===(c=r.TT)||void 0===c||null===(l=c.meta)||void 0===l?void 0:l.last_updated)&&!!f()(null===(o=e.data)||void 0===o||null===(s=o.TT)||void 0===s?void 0:s.total,null===(d=t.data)||void 0===d||null===(m=d.TT)||void 0===m?void 0:m.total)))))}))},90:function(e,t,a){"use strict";var i=a(0),n=function(){return(n=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var r=function(e){var t=e.animate,a=e.backgroundColor,r=e.backgroundOpacity,c=e.baseUrl,l=e.children,o=e.foregroundColor,s=e.foregroundOpacity,d=e.gradientRatio,m=e.uniqueKey,u=e.interval,p=e.rtl,h=e.speed,f=e.style,O=e.title,b=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(a[i[n]]=e[i[n]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),E=m||Math.random().toString(36).substring(6),g=E+"-diff",v=E+"-animated-diff",y=E+"-aria",C=p?{transform:"scaleX(-1)"}:null,j="0; "+u+"; 1",T=h+"s";return Object(i.createElement)("svg",n({"aria-labelledby":y,role:"img",style:n(n({},f),C)},b),O?Object(i.createElement)("title",{id:y},O):null,Object(i.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+g+")",style:{fill:"url("+c+"#"+v+")"}}),Object(i.createElement)("defs",{role:"presentation"},Object(i.createElement)("clipPath",{id:g},l),Object(i.createElement)("linearGradient",{id:v},Object(i.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:r},t&&Object(i.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:j,dur:T,repeatCount:"indefinite"})),Object(i.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:s},t&&Object(i.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:j,dur:T,repeatCount:"indefinite"})),Object(i.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:r},t&&Object(i.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:j,dur:T,repeatCount:"indefinite"})))))};r.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(i.createElement)(r,n({},e)):Object(i.createElement)(l,n({},e))},l=function(e){return Object(i.createElement)(c,n({viewBox:"0 0 476 124"},e),Object(i.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(i.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(i.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(i.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(i.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(i.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=26.63a51b97.chunk.js.map