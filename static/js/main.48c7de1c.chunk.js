(this["webpackJsonprandom-option"]=this["webpackJsonprandom-option"]||[]).push([[0],{43:function(e,t,n){e.exports=n(53)},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),l=n(39),i=n(27),u=n(84),m=n(85),d=n(90),f=n(89),p=n(86),s=n(83),E=n(87),b=n(24),v=n(79),h=n(80),y=n(82),O=n(81),j=n(37),g=n.n(j);function k(e){var t=e.payload,n=e.handleRemove;return r.a.createElement(v.a,null,t.map((function(e){return r.a.createElement(h.a,{key:e.id,button:!0,role:void 0},r.a.createElement(O.a,{id:e.id,primary:e.body}),r.a.createElement(y.a,{onClick:function(){return n(e.id)}},r.a.createElement(s.a,{color:"secondary",edge:"end","aria-label":"comments"},r.a.createElement(g.a,null))))})))}var S=n(38),x=n.n(S),C=n(88),R=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([]),v=Object(i.a)(c,2),h=v[0],y=v[1],O=Object(a.useState)(""),j=Object(i.a)(O,2),g=j[0],S=j[1],R=Object(a.useRef)(),w=function(e){e.preventDefault(),n&&(y([].concat(Object(l.a)(h),[{id:Object(C.a)(),body:n}])),o(""),console.log(h))};return r.a.createElement(u.a,{maxWidth:"xs"},r.a.createElement("form",{onSubmit:function(e){return w(e)}},r.a.createElement(m.a,{fullWidth:!0},r.a.createElement(d.a,null,"Add new item"),r.a.createElement(f.a,{inputRef:R,autoFocus:!0,value:n,onChange:function(e){return function(e){o(e.target.value)}(e)},endAdornment:r.a.createElement(p.a,{position:"end"},r.a.createElement(s.a,{onClick:function(e){w(e),R.current.focus()}},r.a.createElement(x.a,null)))}))),r.a.createElement(k,{payload:h,handleRemove:function(e){var t=h.map((function(e){return e.id})).indexOf(e),n=h.map((function(e){return e}));n.splice(t,1),y(n)}}),r.a.createElement(E.a,{variant:"contained",color:"primary",size:"large",onClick:function(e){return function(e){if(e.preventDefault(),h.length){var t=Math.floor(Math.random()*h.length);S(h[t].body)}}(e)}},"Generate random option"),r.a.createElement(b.a,{variant:"h2"},g))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.48c7de1c.chunk.js.map