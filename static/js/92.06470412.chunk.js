"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[92],{92:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var i,o,l,a,s,r,f,h,c,p,d,g,x,m=e(683),u=e(439),y=e(791),Z=e(540),b=e(168),w=e(867),j=e(87),k=w.ZP.div(i||(i=(0,b.Z)(["\n  display: block;\n  width: auto;\n  height: auto;\n"]))),P=w.ZP.ul(o||(o=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  margin-left: 40px;\n  margin-top: 20px;\n  gap: 40px;\n"]))),v=(w.ZP.nav(l||(l=(0,b.Z)(["\n  display: flex;\n  margin-top: 20px;\n  margin-left: 20px;\n"]))),(0,w.ZP)(j.OL)(a||(a=(0,b.Z)(["\n  display: flex;\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.2;\n  letter-spacing: 0.06em;\n  color: black;\n"]))),w.ZP.li(s||(s=(0,b.Z)(["\n  display: block;\n"])))),_=w.ZP.p(r||(r=(0,b.Z)(["\n  display: flex;\n  width: auto;\n  height: auto;\n  margin-top: 10px;\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.2;\n  letter-spacing: 0.06em;\n  color: black;\n"]))),R=w.ZP.p(f||(f=(0,b.Z)(["\n  display: flex;\n  width: auto;\n  height: auto;\n  margin-top: 10px;\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.2;\n  letter-spacing: 0.06em;\n  color: black;\n"]))),z=w.ZP.p(h||(h=(0,b.Z)(["\n  display: flex;\n  width: auto;\n  height: auto;\n  margin-top: 10px;\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.2;\n  letter-spacing: 0.06em;\n  color: black;\n"]))),L=w.ZP.p(c||(c=(0,b.Z)(["\n  display: flex;\n  width: auto;\n  height: auto;\n  margin-top: 10px;\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.2;\n  letter-spacing: 0.06em;\n  color: black;\n"]))),C=w.ZP.p(p||(p=(0,b.Z)(["\n  display: flex;\n  width: auto;\n  height: auto;\n  margin-top: 10px;\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.2;\n  letter-spacing: 0.06em;\n  color: black;\n"]))),S=w.ZP.p(d||(d=(0,b.Z)(["\n  display: flex;\n  width: auto;\n  height: auto;\n  margin-top: 10px;\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.2;\n  letter-spacing: 0.06em;\n  color: black;\n"]))),A=e(184),E=w.ZP.div(g||(g=(0,b.Z)(["\n  display: flex;\n  width: auto;\n  height: auto;\n  margin-top: 20p;\n  margin-left: 20px;\n"]))),I=w.ZP.p(x||(x=(0,b.Z)(["\n  display: flex;\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 1.2;\n  letter-spacing: 0.06;\n  color: #000;\n"]))),O=function(){return(0,A.jsx)(E,{children:(0,A.jsx)(I,{children:"There are no reviews for this movie"})})};function T(n){var t=n.filmId,e=(0,y.useState)({films:[],isLoading:!0}),i=(0,u.Z)(e,2),o=i[0],l=i[1];return(0,y.useEffect)((function(){(0,Z.X)("/3/movie/".concat(t,"/reviews?api_key=d0e55d9c3b81e26ea2922058fa861ca2&language=en-US")).then((function(n){l((function(t){return(0,m.Z)((0,m.Z)({},t),{},{films:[n.data.results],isLoading:!1})}))}))}),[o.films,t]),(0,A.jsx)(k,{children:(0,A.jsxs)(P,{children:[!o.isLoading&&o.films[0].map((function(n){return function(n){var t=n.id,e=n.author_details,i=n.content,o=n.created_at,l=n.updated_at,a=n.url;return(0,A.jsxs)(v,{children:[(0,A.jsxs)(_,{children:[(0,A.jsx)("b",{children:"Author: \xa0"}),e.name]}),(0,A.jsxs)(R,{children:[(0,A.jsx)("b",{children:"Rating: \xa0"}),e.rating]}),(0,A.jsxs)(z,{children:[(0,A.jsx)("b",{children:"Content:\xa0 "}),i]}),(0,A.jsxs)(L,{children:[(0,A.jsx)("b",{children:"created at:\xa0 "}),o]}),(0,A.jsxs)(C,{children:[(0,A.jsx)("b",{children:"updated at: \xa0"}),l]}),(0,A.jsxs)(S,{children:[(0,A.jsx)("b",{children:"url: \xa0"}),a]})]},t)}(n)})),!o.isLoading&&!o.films[0].length&&(0,A.jsx)(O,{})]})})}}}]);
//# sourceMappingURL=92.06470412.chunk.js.map