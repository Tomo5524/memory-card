(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(0),c=t.n(r),o=t(3),l=t.n(o);t(10);var i=function(e){return console.log(e,"proops in nav"),c.a.createElement("div",{className:"d-flex justify-content-between align-items-center py-4 text-white"},c.a.createElement("h1",null,"Stacks Memory Card"),c.a.createElement("div",null,c.a.createElement("h4",null,"Game: ",e.playNum),c.a.createElement("h4",null,"Turn: ",e.turn)))};var u=function(e){return console.log(e,"props in ShowCards ///////////////"),c.a.createElement("div",{className:"m-2 radius card-box "+(e.value.flipped?(a=e.value.name,("React"===a?"react-img":"Vue"===a?"vue-img":"Javascript"===a?"js-img":"Python"===a?"py-img":"Angular"===a?"angular-img":void 0)+" border flip"):"card-bg border"),onClick:function(){e.onClick(e.value)},id:e.value.name},c.a.createElement("p",{className:"d-flex justify-content-center align-items-center h-100 text-size"},e.value.flipped?"":"\ud83d\ude1b"));var a};var s=function(e){return console.log(e,"props value in Footer///"),c.a.createElement("div",{style:{display:e.gameDone?"block":"none"},className:"text-center py-5 mt-3 text-white"},c.a.createElement("h1",null," It took you ",e.turn," turns to finish"),c.a.createElement("button",{className:"mt-3 btn btn-dark",onClick:e.onClick},"play again?"))};var d=function(e){console.log(e,"props value in Card///");var a=e.value.cards_arr.map((function(a){return c.a.createElement(u,{key:a.id,value:a,onClick:e.onClick})}));return c.a.createElement("div",{className:"d-flex flex-wrap cards-container"},a)},m=t(4),p=t.n(m);function f(){var e=Object(r.useState)({cards_arr:[]}),a=Object(n.a)(e,2),t=a[0],o=a[1],l=Object(r.useState)({name:"",id:""}),u=Object(n.a)(l,2),m=u[0],f=u[1],v=Object(r.useState)(!1),b=Object(n.a)(v,2),g=b[0],j=b[1],O=Object(r.useState)(0),h=Object(n.a)(O,2),E=h[0],y=h[1],k=Object(r.useState)(0),C=Object(n.a)(k,2),x=C[0],S=C[1],N=Object(r.useState)(0),_=Object(n.a)(N,2),w=_[0],J=_[1],M=Object(r.useState)(0),P=Object(n.a)(M,2),T=P[0],A=P[1],D=Object(r.useState)(!1),I=Object(n.a)(D,2),R=I[0],V=I[1];return Object(r.useEffect)((function(){for(var e=[],a=0;a<5;a++){var t=void 0;0===a?t="Python":1===a?t="Javascript":2===a?t="React":3===a?t="Vue":4===a&&(t="Angular");for(var n=0;n<2;n++){var r={id:p()(),flipped:!1,name:t,paired:!1};e.push(r)}}e=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}(e),o({cards_arr:e})}),[E]),Object(r.useEffect)((function(){5===x&&(console.log("job done took you"+T+"turns"),j(!0))}),[x]),c.a.createElement("div",{className:"container"},c.a.createElement(i,{turn:T,playNum:E}),c.a.createElement(d,{value:t,onClick:function(e){if(!e.paired&&!e.flipped&&!R){var a=function(e){return console.log("//// flip executed"),t.cards_arr.map((function(a){var t=Object.assign({},a);return a.id===e.id&&(t.flipped=!t.flipped),t}))}(e);o({cards_arr:a}),1===w?(V(!0),console.log(m,e.name,"//firstCard, props.name in count 1"),m.name===e.name?(setTimeout((function(){!function(e){console.log("//// hanldePaired executed");var a=t.cards_arr.map((function(a){var t=Object.assign({},a);return a.name===e&&(t.paired=!0,t.flipped=!0),t}));V(!1),o({cards_arr:a})}(e.name)}),1200),S(x+1)):(setTimeout((function(){!function(e,a){console.log("//// unflipChosenCard executed");var n=t.cards_arr.map((function(t){var n=Object.assign({},t);return t.id!==e&&t.id!==a||(n.flipped=!1),n}));V(!1),o({cards_arr:n})}(m.id,e.id)}),1200),f({name:"",id:""})),A(T+1),J(0),console.log(T,w,"count==2")):(console.log(m,e.name,"//firstCard, props.name in count 0"),f({name:e.name,id:e.id}),J(w+1),console.log(w,"count!==2"))}}}),c.a.createElement(s,{turn:T,gameDone:g,onClick:function(){S(0),y(E+1),A(0),j(!1)}}))}a.default=f;l.a.render(c.a.createElement(f,null),document.getElementById("root"))},5:function(e,a,t){e.exports=t(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.4b0ecc14.chunk.js.map