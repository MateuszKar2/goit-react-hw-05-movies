"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[891],{225:function(n,t,e){e.d(t,{Fg:function(){return h},HC:function(){return x},NZ:function(){return d},PP:function(){return p},aV:function(){return l}});var r,a,o,c,i,u=e(168),s=e(867),f=e(87),p=s.ZP.section(r||(r=(0,u.Z)(["\n    padding-right: 50px;\n    padding-left: 50px;\n    "]))),d=s.ZP.h2(a||(a=(0,u.Z)(["\n    margin-top: 30px;\n    margin-bottom: 30px;\n    padding-left: 5px;\n    font-size: 30px;\n    font-weight: 600;\n    text-align: left;\n    "]))),l=s.ZP.ul(o||(o=(0,u.Z)(["\n    list-style: circle;\n    color: #0d57aa;\n    "]))),x=s.ZP.li(c||(c=(0,u.Z)(["\n    &:not(:last-child) {\n        margin-bottom: 8px;\n    }\n    "]))),h=(0,s.ZP)(f.rU)(i||(i=(0,u.Z)(["\n    font-size: 18px;\n    color: #Od57aa;\n    transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;\n    text-decoration: none;\n    &:hover,\n    &:focus {\n        background-color: lightblue;\n        color: darkblue;\n        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n        border-bottom: 2px solid #1c85ff;\n    }\n"])))},755:function(n,t,e){e.d(t,{T:function(){return o}});var r=e(598),a=e(184),o=function(){return(0,a.jsxs)(r.xg,{children:[(0,a.jsx)(r.oT,{delay:"0s"}),(0,a.jsx)(r.oT,{delay:".2s"}),(0,a.jsx)(r.oT,{delay:".4s"})]})}},598:function(n,t,e){e.d(t,{eb:function(){return p},hX:function(){return d},oT:function(){return h},xg:function(){return x}});var r,a,o,c,i,u=e(168),s=e(867),f=e(87),p=s.ZP.header(r||(r=(0,u.Z)(["\n  padding: 20px 30px;\n  text-align: left;\n  box-shadow: 0px 1px 10px #8aa4b7;\n"]))),d=(0,s.ZP)(f.OL)(a||(a=(0,u.Z)(["\n  display: inline-block;\n  font-size: 24px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: color 0.2s ease-in-out;\n  color: #000000;\n\n  &:not(:last-child) {\n    margin-right: 40px;\n  }\n\n  &.active,\n  &:hover,\n  &:focus {\n    color: #1c85ff;\n    text-decoration: underline;\n  }\n"]))),l=(0,s.F4)(o||(o=(0,u.Z)(["\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n"]))),x=s.ZP.div(c||(c=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]))),h=s.ZP.div(i||(i=(0,u.Z)(["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  border-radius: 50%;\n  background-color: #1c72ff;\n  animation: "," 1s infinite ease-in-out;\n  animation-delay: ",";\n"])),l,(function(n){return n.delay}))},891:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(861),a=e(439),o=e(757),c=e.n(o),i=e(791),u=e(390),s=e(225),f=e(184),p=function(n){var t=n.trendingMovies;return(0,f.jsxs)(s.PP,{children:[(0,f.jsx)(s.NZ,{children:"Trending today"}),(0,f.jsx)(s.aV,{children:t.map((function(n){return(0,f.jsx)(s.HC,{children:(0,f.jsx)(s.Fg,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})},d=e(755),l=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],o=t[1],s=(0,i.useState)(!0),l=(0,a.Z)(s,2),x=l[0],h=l[1],g=(0,i.useState)(!1),v=(0,a.Z)(g,2),m=v[0],Z=v[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!1),h(!0),n.next=5,(0,u._k)();case 5:t=n.sent,o(t.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),Z(!0);case 12:return n.prev=12,h(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsx)(f.Fragment,{children:x?(0,f.jsx)(d.T,{}):m?(0,f.jsx)("p",{children:"Sorry, we could not fetch the trending movies. Please try again later."}):(0,f.jsx)(p,{trendingMovies:e||[]})})}},390:function(n,t,e){e.d(t,{E3:function(){return f},Hx:function(){return l},Mc:function(){return p},_k:function(){return s},uV:function(){return d}});var r=e(861),a=e(757),o=e.n(a),c=e(294),i="https://api.themoviedb.org",u="3453ae595a5d53cbc877c6d05de8a002",s=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/3/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/3/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/3/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/3/movie/").concat(t,"}/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=891.56fe24e6.chunk.js.map