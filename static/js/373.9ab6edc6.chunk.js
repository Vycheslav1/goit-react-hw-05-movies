"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[373],{373:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var i,a,o,l,s,r,f,p=t(433),g=t(683),c=t(439),d=t(791),h=t(540),m=t(168),u=t(867),x=t(87),Z=u.ZP.div(i||(i=(0,m.Z)(["\n  margin-top: 20px;\n  margin-left: 20px;\n"]))),y=u.ZP.h1(a||(a=(0,m.Z)(["\n  display: flex;\n  margin-left: 20px;\n  margin-top: 20px;\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 1.2;\n  letter-spacing: 0.02em;\n  color: black;\n"]))),v=(u.ZP.nav(o||(o=(0,m.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),(0,u.ZP)(x.OL)(l||(l=(0,m.Z)(["\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.2;\n  letter-spacing: 0.06em;\n  color: black;\n"]))),u.ZP.nav(s||(s=(0,m.Z)(["\n  display: block;\n  margin-top: 10px;\n  margin-left: 20px;\n  gap: 10px;\n"]))),t(106)),_=u.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n"]))),b=u.ZP.p(f||(f=(0,m.Z)(["\ndisplay:flex;\nmargin-left:20px;\nmargin-top:50px;\nfony-family:'Roboto';\nfont-style:normal;\nfont-weight:500;\nfont-size:24px;\nline-height:1.2\nletter-spacing:0.06em;\ncolor:#000;\n"]))),w=t(184),k=function(){return(0,w.jsx)(_,{children:(0,w.jsx)(b,{children:"There are no data for this request"})})};function P(){var n=(0,d.useState)({films:[],isLoading:!0}),e=(0,c.Z)(n,2),t=e[0],i=e[1];return(0,d.useEffect)((function(){(0,h.X)("/3/trending/all/day?api_key=d0e55d9c3b81e26ea2922058fa861ca2&language=en-US&include_adult=false&page=1").then((function(n){i((function(e){return(0,g.Z)((0,g.Z)({},e),{},{films:(0,p.Z)(n.data.results),isLoading:!1})}))}))}),[t.films]),(0,w.jsxs)(Z,{children:[!JSON.parse(localStorage.getItem("response"))&&(0,w.jsx)(k,{}),(0,w.jsx)(y,{children:"Trending today"}),!t.isLoading&&(0,w.jsx)(v.O,{response:t.films})]})}}}]);
//# sourceMappingURL=373.9ab6edc6.chunk.js.map