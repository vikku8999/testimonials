(this.webpackJsonpreactslickyt=this.webpackJsonpreactslickyt||[]).push([[0],{65:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(15),a=n.n(s),i=n(24),o=n.n(i),l=n(30),j=n(36),d=n(31),x=n.n(d),b=n(90),m=n(89),u=(n(63),n(64),n(65),n(91)),p=n(86),O=n(87),h=n(2),g=function(e){console.log(e);var t=e.className,n=e.onClick;return Object(h.jsx)("div",{className:t,onClick:n,children:Object(h.jsx)(p.a,{style:{color:"gray",fontSize:"45px"}})})},y=function(e){var t=e.className,n=e.onClick;return Object(h.jsx)("div",{className:t,onClick:n,children:Object(h.jsx)(O.a,{style:{color:"gray",fontSize:"45px"}})})},f=function(e){return Object(h.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",textAlign:"center",color:"gray"},children:[Object(h.jsx)(u.a,{imgProps:{style:{borderRadius:"50%"}},src:e.avatar,style:{width:120,height:120,border:"1px solid lightgray",padding:7,marginBottom:20}}),Object(h.jsx)("p",{children:e.message}),Object(h.jsx)("p",{children:e.lorem}),Object(h.jsx)(m.a,{component:"fieldset",mb:3,borderColor:"transparent",children:Object(h.jsx)(b.a,{name:"read-only",value:e.rating,readOnly:!0})}),Object(h.jsxs)("p",{style:{fontStyle:"italic",marginTop:25},children:[Object(h.jsx)("span",{style:{fontWeight:500,color:"green"},children:e.name})," ,",Object(h.jsx)("span",{children:e.designation})]}),Object(h.jsx)("p",{children:e.location}),Object(h.jsx)("audio",{controls:!0,children:Object(h.jsx)("source",{src:e.audio,type:"audio/mp3"})})]})},v=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://testimonialapi.toolcarton.com/api");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)}))),[]),Object(h.jsx)("div",{className:"testimonial",style:{display:"flex",justifyContent:"center",marginTop:60,marginBottom:52},children:Object(h.jsxs)("div",{style:{height:"50",width:"40%",textAlign:"center"},children:[Object(h.jsx)("h1",{style:{marginBottom:60},children:"TESTIMONIALS"}),Object(h.jsx)(x.a,{prevArrow:Object(h.jsx)(g,{}),nextArrow:Object(h.jsx)(y,{}),dots:!0,children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(h.jsx)(f,{id:e.id,name:e.name,avatar:e.avatar,designation:e.designation,message:e.message,lorem:e.lorem,rating:e.rating,audio:e.audio,location:e.location})}))})]})})};var k=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(v,{})})};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.335e96b9.chunk.js.map