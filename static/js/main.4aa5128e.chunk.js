(this.webpackJsonpbozena=this.webpackJsonpbozena||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),i=c(32),r=c.n(i),s=(c(50),c(51),c(52),c(53),c(54),c(55),c(9)),d=c(10),o=c(16),l=c(36),j=Object(l.b)({name:"counter",initialState:{kids:1,value:[]},reducers:{addMeal:function(e,t){e.value=t.payload},removeMeal:function(e,t){e.value=t.payload},kidsAmount:function(e,t){e.kids=t.payload,console.log(e.kids)}}}),b=j.actions,u=b.addMeal,m=b.removeMeal,O=b.kidsAmount,x=j.reducer,h=c(2),p=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.meals.kids}));return Object(h.jsxs)("div",{className:"kidsAmount",children:[Object(h.jsx)("label",{htmlFor:"kidsAmount__number",children:"Ilo\u015b\u0107 dzieci:"}),Object(h.jsx)("input",{onChange:function(t){return function(t){t.target.value>=0?e(O(t.target.value)):e(O(0))}(t)},value:t,id:"kidsAmount__number",className:"kidsAmount__number",type:"number",pattern:"[0-9]*",min:1})]})},f=function(e){var t=e.kcal,c=e.protein,a=e.fat,n=e.carbohydrates;return Object(h.jsxs)("section",{className:"addedProducts__nutValues",children:[Object(h.jsxs)("h1",{className:"addedProducts__kcal",children:[t," Kcal"]}),Object(h.jsxs)("div",{className:"addedProducts__nutWrapper",children:[Object(h.jsxs)("p",{className:"addedProducts__protein",children:["Bia\u0142ko: ",c]}),Object(h.jsxs)("p",{className:"addedProducts__fat",children:["T\u0142uszcze: ",a]}),Object(h.jsxs)("p",{className:"addedProducts__carbohydrates",children:[" W\u0119glowodany: ",n]})]})]})},k=c(38),y=c(13),g=c(15),v=function(e){var t=e.fa,c=e.clickHandler;return Object(h.jsx)("button",{onClick:c,className:"primaryBtn",children:t})},z=c(30),_=(z.a.initializeApp({apiKey:"AIzaSyAJfMD1NikYs8u0QBIg6uv8pV3kCNo36vo",authDomain:"melasplan.firebaseapp.com",projectId:"melasplan",storageBucket:"melasplan.appspot.com",messagingSenderId:"754668588804",appId:"1:754668588804:web:f95c8bb5b8f93c61f4ca51",measurementId:"G-RDRQRD8VVM"}),z.a.database()),N=(z.a.auth(),z.a.storage(),function(e){var t,c=e.arr,n=Object(a.useState)(""),i=Object(y.a)(n,2),r=i[0],s=i[1],d=Object(a.useState)(""),o=Object(y.a)(d,2),l=o[0],j=(o[1],document.querySelector(".addItem--decaders"));return Object(a.useEffect)((function(){_.ref("dekadowki").on("value",(function(e){var t=e.val();t&&s(Object.keys(t))}))}),[r.length]),Object(h.jsxs)("div",{className:"addItem addItem--decaders",children:["&&",Object(h.jsx)(g.c,{initialValues:{decaderName:r?r[r.length-1]:"nowa",date:l},onSubmit:function(e){"nowa"===e.decaderName?c.forEach((function(t){_.ref("dekadowki/Dekad\xf3wka".concat(r.length+1,"/").concat(e.date,"/").concat(t.name)).set(t),e.decaderName=r[r.length-1]})):c.forEach((function(t){_.ref("dekadowki/Dekad\xf3wka".concat(r.length,"/").concat(e.date,"/").concat(t.name)).set(t)})),alert("Dodano do dekad\xf3wki"),j.style.display="none"},children:Object(h.jsxs)("div",{className:"addItem__wrapper",children:[Object(h.jsx)(v,{clickHandler:function(e){e.target.closest(".addItem").style.display="none"},fa:Object(h.jsx)("i",{className:"fas fa-times"})}),Object(h.jsxs)(g.b,{className:"addItem__form",children:[Object(h.jsxs)("div",{className:"addItem__uperWrapper",children:[Object(h.jsx)("label",{className:"addItem__label",htmlFor:"decaderName",children:"Dekad\xf3wka:"}),Object(h.jsxs)(g.a,{className:"addItem__longInput",name:"decaderName",as:"select",id:"decaderName",children:["Nowa"!==r[0]&&r&&r.map((function(e){return Object(h.jsx)("option",{value:e,children:e})})),Object(h.jsx)("option",{value:"nowa",children:"Nowa"})]}),Object(h.jsx)("label",{className:"addItem__label",htmlFor:"date",children:"Data:"}),Object(h.jsx)(g.a,{className:"addItem__longInput",required:!0,type:"date",name:"date",id:"date"})]}),Object(h.jsx)("div",{className:"addItem__buttons",children:Object(h.jsx)("button",(t={type:"submit",className:"addItem__submit"},Object(k.a)(t,"type","submit"),Object(k.a)(t,"children","Dodaj"),t))})]})]})})]})}),w=function(e){var t=e.rotate,c=e.clickHandler;return Object(h.jsx)("button",{onClick:c,className:"primaryBtn primaryBtn--more",children:t?Object(h.jsx)("i",{className:"fas fa-caret-down"}):Object(h.jsx)("i",{className:"fas fa-caret-up"})})},P=function(e){var t=e.ingridient,c=e.i,n=e.kids,i=Object(a.useState)(t.quantity*n),r=Object(y.a)(i,2),s=r[0],d=r[1];return Object(a.useEffect)((function(){return d(t.quantity*n),function(){d(1)}}),[n,t.quantity]),!!t.name&&Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.name}),Object(h.jsx)("td",{children:t.measure}),t.quantity?Object(h.jsx)("td",{children:s}):Object(h.jsx)("td",{}),t.protein?Object(h.jsx)("td",{children:t.protein.toFixed(2)}):Object(h.jsx)("td",{children:"0"}),t.fat?Object(h.jsx)("td",{children:t.fat.toFixed(2)}):Object(h.jsx)("td",{children:"0"}),t.carbohydrates?Object(h.jsx)("td",{children:t.carbohydrates.toFixed(2)}):Object(h.jsx)("td",{children:"0"}),t.kcal?Object(h.jsx)("td",{children:t.kcal.toFixed(2)}):Object(h.jsx)("td",{children:"0"})]},c)},I=function(e){var t=e.ingredients,c=e.kids;return Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Produkt"}),Object(h.jsx)("th",{children:"Miara"}),Object(h.jsx)("th",{children:"Ilo\u015b\u0107"}),Object(h.jsx)("th",{children:"Bia\u0142ko"}),Object(h.jsx)("th",{children:"T\u0142uszcze"}),Object(h.jsx)("th",{children:"W\u0119glowodany"}),Object(h.jsx)("th",{children:"Kcal"})]})}),Object(h.jsx)("tbody",{children:Object.keys(t).map((function(e,a){return t[e].protein?t[e].protein:0,t[e].fat?t[e].fat:0,t[e].carbohydrates?t[e].carbohydrates:0,t[e].kcal?t[e].kcal:0,Object(h.jsx)(P,{ingridient:t[e],kids:c,i:a},a)}))})]})},F=function(e){var t=e.item,c=e.i,n=e.ingredients,i=e.clickHandler,r=e.fa,s=e.kids,d=e.searchValue,o=Object(a.useState)(!1),l=Object(y.a)(o,2),j=l[0],b=l[1];return d?-1!==t.toLowerCase().search(d.toLowerCase())&&Object(h.jsxs)("div",{className:"list__item",children:[Object(h.jsxs)("div",{className:"list__itemUp",children:[Object(h.jsx)("p",{className:"list__itemName",children:t}),r&&Object(h.jsx)(v,{clickHandler:function(){return i(t,n)},fa:r})]}),!!j&&Object(h.jsx)(I,{kids:s,item:t,ingredients:n}),Object(h.jsx)(w,{rotate:!j,clickHandler:function(){return b(!j)}})]},c):Object(h.jsxs)("div",{className:"list__item",children:[Object(h.jsxs)("div",{className:"list__itemUp",children:[Object(h.jsx)("p",{className:"list__itemName",children:t}),r&&Object(h.jsx)(v,{clickHandler:function(){return i(t,n)},fa:r})]}),!!j&&Object(h.jsx)(I,{kids:s,item:t,ingredients:n}),Object(h.jsx)(w,{rotate:!j,clickHandler:function(){return b(!j)}})]},c)},C=function(){var e=0,t=0,c=0,a=0,n=Object(o.c)((function(e){return e.meals.value})),i=Object(o.c)((function(e){return e.meals.kids}));n.forEach((function(n){t+=n.razem.protein,c+=n.razem.fat,a+=n.razem.carbohydrates,e+=n.razem.kcal}));var r=Object(o.b)(),s=[],d=[],l=0,j=0,b=0,u=0,O=[],x=0,k=0,y=0,g=0,v=[],z=0,_=0,w=0,P=0;Object.keys(n).map((function(e){return s.push(n[e])})),Object.keys(n).map((function(e){"\u015bniadania"===n[e].rodzaj?(d.push(n[e]),j+=n[e].razem.protein,b+=n[e].razem.fat,u+=n[e].razem.carbohydrates,l+=n[e].razem.kcal):"obiady"===n[e].rodzaj?(O.push(n[e]),k+=n[e].razem.protein,y+=n[e].razem.fat,g+=n[e].razem.carbohydrates,x+=n[e].razem.kcal):"podwieczorki"===n[e].rodzaj&&(v.push(n[e]),_+=n[e].razem.protein,w+=n[e].razem.fat,P+=n[e].razem.carbohydrates,z+=n[e].razem.kcal)}));var I=function(e){s=s.filter((function(t){return t.name!==e})),r(m(s))};return Object(h.jsxs)("div",{className:"addedProducts",children:[Object(h.jsx)(p,{}),Object(h.jsx)(f,{kcal:e.toFixed(2),protein:t.toFixed(2),fat:c.toFixed(2),carbohydrates:a.toFixed(2)}),Object(h.jsxs)("section",{className:"list",children:[Object(h.jsx)("h1",{children:"\u015aniadanie"}),Object(h.jsxs)("p",{className:"addedProducts__p",children:["Kcal ",l.toFixed(2)," Bia\u0142ko: ",j.toFixed(2)," T\u0142uszcz: ",b.toFixed(2)," W\u0119glowodany: ",u.toFixed(2)]}),Object.keys(d).map((function(e,t){return Object(h.jsx)(F,{item:n[e].name,ingredients:n[e],kids:i,clickHandler:function(){return I(n[e].name)},i:e,fa:Object(h.jsx)("i",{className:"fas fa-minus"})},t)})),Object(h.jsx)("h1",{children:"Obiad"}),Object(h.jsxs)("p",{className:"addedProducts__p",children:["Kcal ",x.toFixed(2)," Bia\u0142ko: ",k.toFixed(2)," T\u0142uszcz: ",y.toFixed(2)," W\u0119glowodany: ",g.toFixed(2)]}),Object.keys(O).map((function(e,t){return Object(h.jsx)(F,{item:n[e].name,ingredients:n[e],kids:i,clickHandler:function(){return I(n[e].name)},i:e,fa:Object(h.jsx)("i",{className:"fas fa-minus"})},t)})),Object(h.jsx)("h1",{children:"Podwiczorek"}),Object(h.jsxs)("p",{className:"addedProducts__p",children:["Kcal ",z.toFixed(2)," Bia\u0142ko: ",_.toFixed(2)," T\u0142uszcz: ",w.toFixed(2)," W\u0119glowodany: ",P.toFixed(2)]}),Object.keys(v).map((function(e,t){return Object(h.jsx)(F,{item:n[e].name,ingredients:n[e],kids:i,clickHandler:function(){return I(n[e].name)},i:e,fa:Object(h.jsx)("i",{className:"fas fa-minus"})},t)})),s.length>0&&Object(h.jsx)("button",{className:"addedProducts__addToDecaders",onClick:function(e){document.querySelector(".addItem--decaders").style.display="flex"},children:"Dodaj do dekad\xf3wki"})]}),Object(h.jsx)(N,{arr:s})]})},S=c(27),D=function(e){var t=e.i;return Object(h.jsxs)("div",{className:"ingredient",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"ingredientName",children:"Produkt"}),Object(h.jsx)(g.a,{type:"text",name:"ingridients.[".concat(t,"]ingredientName"),id:"ingredientName"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"ingredientMeasure",children:"Miara"}),Object(h.jsxs)(g.a,{name:"ingridients.[".concat(t,"]ingredientMeasure"),as:"select",id:"ingredientMeasure",children:[Object(h.jsx)("option",{value:"g",children:"g"}),Object(h.jsx)("option",{value:"ml",children:"ml"})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"ingredientQuantity",children:"Ilo\u015b\u0107"}),Object(h.jsx)(g.a,{type:"number",name:"ingridients.[".concat(t,"]ingredientQuantity"),id:"ingredientQuantity"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"ingredientProtein",children:"Bia\u0142ko"}),Object(h.jsx)(g.a,{type:"number",name:"ingridients.[".concat(t,"]ingredientProtein"),id:"ingredientProtein"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"ingredientFat",children:"T\u0142uszcze"}),Object(h.jsx)(g.a,{type:"number",name:"ingridients.[".concat(t,"]ingredientFat"),id:"ingredientFat"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"ingredientCarbohydrates",children:"W\u0119glowodany"}),Object(h.jsx)(g.a,{type:"number",name:"ingridients.[".concat(t,"]ingredientCarbohydrates"),id:"ingredientCarbohydrates"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"ingredientKcal",children:"Kcal"}),Object(h.jsx)(g.a,{type:"number",name:"ingridients.[".concat(t,"]ingredientKcal"),id:"ingredientKcal"})]})]},t)},M=function(){var e=Object(a.useState)([Object(h.jsx)(D,{i:0},0),Object(h.jsx)(D,{i:1},1)]),t=Object(y.a)(e,2),c=t[0],n=t[1],i=c.length;return Object(h.jsx)("div",{className:"addItem",children:Object(h.jsx)(g.c,{initialValues:{mealName:"",category:"Owoce"},onSubmit:function(e){String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var t=0,c=0,a=0,n=0;_.ref("".concat(e.category,"/").concat(e.mealName)).set({name:e.mealName}),e.ingridients.forEach((function(i){n+=i.ingredientProtein,t+=i.ingredientKcal,c+=i.ingredientFat,a+=i.ingredientCarbohydrates,_.ref("".concat(e.category,"/").concat(e.mealName,"/").concat(i.ingredientName.capitalize())).set({name:i.ingredientName.capitalize(),measure:i.ingredientMeasure?i.ingredientMeasure:"g",quantity:i.ingredientQuantity,protein:i.ingredientProtein,fat:i.ingredientFat,carbohydrates:i.ingredientCarbohydrates,kcal:i.ingredientKcal})})),_.ref("".concat(e.category,"/").concat(e.mealName,"/razem")).set({name:"razem",protein:n,fat:c,carbohydrates:a,kcal:t})},children:Object(h.jsxs)("div",{className:"addItem__wrapper",children:[Object(h.jsx)(v,{clickHandler:function(e){e.target.closest(".addItem").style.display="none"},fa:Object(h.jsx)("i",{className:"fas fa-times"})}),Object(h.jsxs)(g.b,{className:"addItem__form",children:[Object(h.jsxs)("div",{className:"addItem__uperWrapper",children:[Object(h.jsx)("label",{className:"addItem__label",htmlFor:"mealName",children:"Nazwa dania:"}),Object(h.jsx)(g.a,{className:"addItem__longInput",required:!0,type:"text",name:"mealName",id:"mealName"}),Object(h.jsx)("label",{className:"addItem__label",htmlFor:"category",children:"Kategoria:"}),Object(h.jsxs)(g.a,{className:"addItem__longInput",name:"category",as:"select",id:"category",children:[Object(h.jsx)("option",{value:"Zupy mleczne",children:"Zupy mleczne"}),Object(h.jsx)("option",{value:"Picie",children:"Picie"}),Object(h.jsx)("option",{value:"Pasty do pieczywa",children:"Pasty do pieczywa"}),Object(h.jsx)("option",{value:"Dodatki do pieczywa",children:"Dodatki do pieczywa"}),Object(h.jsx)("option",{value:"Pieczywo",children:"Pieczywo"}),Object(h.jsx)("option",{value:"Warzywa do \u015bniadania",children:"Warzywa do \u015bniadania"}),Object(h.jsx)("option",{value:"Owoce",children:"Owoce"}),Object(h.jsx)("option",{value:"Zupy",children:"Zupy"}),Object(h.jsx)("option",{value:"Jarskie",children:"Jarskie"}),Object(h.jsx)("option",{value:"P\xf3\u0142mi\u0119sne",children:"P\xf3\u0142mi\u0119sne"}),Object(h.jsx)("option",{value:"Mi\u0119sne",children:"Mi\u0119sne"}),Object(h.jsx)("option",{value:"Ryby",children:"Ryby"}),Object(h.jsx)("option",{value:"Podwieczorki",children:"Podwieczorki"}),Object(h.jsx)("option",{value:"II Danie-dodatek",children:"II Danie-dodatek"}),Object(h.jsx)("option",{value:"Sur\xf3wki",children:"Sur\xf3wki"})]})]}),Object(h.jsx)("div",{className:"addItem__ingredients",children:c.map((function(e){return e}))}),Object(h.jsxs)("div",{className:"addItem__buttons",children:[Object(h.jsx)("button",{className:"addItem__next",type:"button",onClick:function(){n([].concat(Object(S.a)(c),[Object(h.jsx)(D,{i:i},i)]))},children:"Kolejny sk\u0142adnik"}),Object(h.jsx)("button",{className:"addItem__submit",type:"submit",children:"Dodaj"})]})]})]})})})},K=function(){var e=Object(d.e)().id,t=Object(a.useState)(""),c=Object(y.a)(t,2),n=c[0],i=c[1],r=Object(a.useState)(null),o=Object(y.a)(r,2),l=(o[0],o[1]);return Object(a.useEffect)((function(){return _.ref("dekadowki/".concat(e)).on("value",(function(e){var t=e.val();t&&(l(t),i(Object.keys(t)))})),function(){i("")}}),[e]),Object(h.jsx)("div",{className:"decadersList",children:n&&n.map((function(t){return Object(h.jsx)(s.b,{className:"decadersList__link",to:"".concat(e,"/").concat(t),children:t},t)}))})},W=function(){var e=Object(a.useState)([]),t=Object(y.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){return _.ref("dekadowki").on("value",(function(e){var t=e.val();n(t),t&&n(t)})),function(){return n("")}}),[]),Object(h.jsxs)("div",{className:"decadersList",children:[Object(h.jsx)("h1",{children:"Dekad\xf3wki"}),c&&Object.keys(c).map((function(e){var t=Object.keys(c[e]);return Object(h.jsxs)(s.b,{className:"decadersList__link",to:"dekadowki/".concat(e),children:[Object(h.jsx)("h2",{children:e}),Object(h.jsx)("p",{children:"".concat(t[0]," -  ").concat(t[t.length-1])})]},e)}))]})},B=function(){var e=decodeURI(window.location.href),t=e.indexOf("dekadowki"),c=e.slice(t),n=Object(a.useState)([]),i=Object(y.a)(n,2),r=i[0],s=i[1],l=0,j=0,b=0,u=0,m=Object(o.c)((function(e){return e.meals.kids}));Object(a.useEffect)((function(){_.ref(c).on("value",(function(e){var t=e.val();t&&s(t)}))}),[]),Object.keys(r).forEach((function(e){j+=r[e].razem.protein,b+=r[e].razem.fat,u+=r[e].razem.carbohydrates,l+=r[e].razem.kcal}));var O=[],x=[],k=0,g=0,v=0,z=0,N=[],w=0,P=0,I=0,C=0,S=[],D=0,M=0,K=0,W=0;Object.keys(r).map((function(e){return O.push(r[e])})),Object.keys(r).map((function(e){"\u015bniadania"===r[e].rodzaj?(x.push(r[e]),g+=r[e].razem.protein,v+=r[e].razem.fat,z+=r[e].razem.carbohydrates,k+=r[e].razem.kcal):"obiady"===r[e].rodzaj?(N.push(r[e]),P+=r[e].razem.protein,I+=r[e].razem.fat,C+=r[e].razem.carbohydrates,w+=r[e].razem.kcal):"podwieczorki"===r[e].rodzaj&&(S.push(r[e]),M+=r[e].razem.protein,K+=r[e].razem.fat,W+=r[e].razem.carbohydrates,D+=r[e].razem.kcal)})),console.log(r),console.log(x);var B=Object(d.e)();return!!r&&Object(h.jsxs)("div",{className:"addedProducts",children:[Object(h.jsx)(p,{}),Object(h.jsx)("h1",{className:"addedProducts__title",children:B.id}),Object(h.jsx)(f,{kcal:l.toFixed(2),protein:j.toFixed(2),fat:b.toFixed(2),carbohydrates:u.toFixed(2)}),Object(h.jsxs)("section",{className:"list",children:[Object(h.jsx)("h1",{children:"\u015aniadanie"}),Object(h.jsxs)("p",{className:"addedProducts__p",children:["Kcal ",k.toFixed(2)," Bia\u0142ko: ",g.toFixed(2)," T\u0142uszcz: ",v.toFixed(2)," W\u0119glowodany: ",z.toFixed(2)]}),Object.keys(x).map((function(e,t){return Object(h.jsx)(F,{item:x[e].name,ingredients:r[e],kids:m,i:e},t)})),Object(h.jsx)("h1",{children:"Obiad"}),Object(h.jsxs)("p",{className:"addedProducts__p",children:["Kcal ",w.toFixed(2)," Bia\u0142ko: ",P.toFixed(2)," T\u0142uszcz: ",I.toFixed(2)," W\u0119glowodany: ",C.toFixed(2)]}),Object.keys(N).map((function(e,t){return Object(h.jsx)(F,{item:N[e].name,ingredients:r[e],kids:m,i:e},t)})),Object(h.jsx)("h1",{children:"Podwiczorek"}),Object(h.jsxs)("p",{className:"addedProducts__p",children:["Kcal ",D.toFixed(2)," Bia\u0142ko: ",M.toFixed(2)," T\u0142uszcz: ",K.toFixed(2)," W\u0119glowodany: ",W.toFixed(2)]}),Object.keys(S).map((function(e,t){return Object(h.jsx)(F,{item:S[e].name,ingredients:r[e],kids:m,i:e},t)}))]})]})},E=function(){return Object(h.jsx)("header",{children:Object(h.jsxs)("nav",{className:"nav",children:[Object(h.jsx)(s.b,{className:"nav__item",exact:!0,to:"/",children:"Lista"}),Object(h.jsx)(s.b,{className:"nav__item",to:"/razem",children:"Razem"}),Object(h.jsx)(s.b,{className:"nav__item",to:"/dekadowki",children:"Dekad\xf3wki"})]})})},H=function(){var e=function(e){console.log(e.target.parentElement),e.target.parentElement.style.display="none"};return Object(h.jsxs)("div",{className:"menu",children:[Object(h.jsx)(v,{clickHandler:function(e){e.target.closest(".menu").style.display="none"},fa:Object(h.jsx)("i",{className:"fas fa-times"})}),Object(h.jsx)("h1",{children:"Kategorie"}),Object(h.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Zupy-mleczne",children:"Zupy mleczne"}),Object(h.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Picie",children:"Picie"}),Object(h.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Pasty",children:"Pasty do pieczywa"}),Object(h.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Dodatki-do-pieczywa",children:"Dodatki do pieczywa"}),Object(h.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Pieczywo",children:"Pieczywo"}),Object(h.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Warzywa",children:"Warzywa do \u015bniadania"}),Object(h.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Owoce",children:"Owoce"}),Object(h.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Zupy",children:"Zupy"}),Object(h.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Jarskie",children:"Jarskie"}),Object(h.jsx)(s.b,{onClick:function(t){return e(t)},to:"/P\xf3\u0142mi\u0119sne",children:"P\xf3\u0142mi\u0119sne"}),Object(h.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Mi\u0119sne",children:"Mi\u0119sne"}),Object(h.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Ryby",children:"Ryby"}),Object(h.jsx)(s.b,{onClick:function(t){return e(t)},to:"/",children:"Podwieczorki"}),Object(h.jsx)(s.b,{onClick:function(t){return e(t)},to:"/IIdanie-dodatek",children:"II Danie-dodatek"}),Object(h.jsx)(s.b,{onClick:function(t){return e(t)},to:"/sur\xf3wki",children:"Sur\xf3wki"}),Object(h.jsx)("button",{onClick:function(e){document.querySelector(".addItem").style.display="flex",e.target.parentElement.style.display="none"},className:"showAddItem",children:"Dodaj"})]})},q=function(e){var t=e.category,c=Object(o.c)((function(e){return e.meals.value})),n=Object(a.useState)([]),i=Object(y.a)(n,2),r=i[0],s=i[1],d=Object(a.useState)(""),l=Object(y.a)(d,2),j=l[0],b=l[1],m=Object(o.b)();Object(a.useEffect)((function(){return _.ref(t).on("value",(function(e){var t=e.val();s(t)})),function(){return s("")}}),[]);var O=Object(o.c)((function(e){return e.meals.value})),x=[];Object.keys(O).map((function(e){return x.push(O[e].name)}));var p=Object(a.useState)(),f=Object(y.a)(p,2),k=f[0],g=f[1],v=document.querySelector(".typePicker"),z=function(e){k.rodzaj=e,m(u([].concat(Object(S.a)(c),[k]))),v.style.display="none"};return Object(h.jsxs)("section",{className:"list",children:[Object(h.jsx)(H,{}),Object(h.jsx)("button",{onClick:function(){document.querySelector(".menu").style.display="flex"},className:"list__menuBtn",children:Object(h.jsx)("i",{className:"fas fa-bars"})}),Object(h.jsx)("h1",{children:t}),Object(h.jsx)("input",{type:"text",className:"list__serach",value:j,onChange:function(e){return b(e.target.value)}}),Object(h.jsx)("section",{className:"list__items",children:Object.keys(r).map((function(e,t){var c,a=x.some((function(t){return e.includes(t)}));c=a?Object(h.jsx)("i",{className:"fas fa-check"}):Object(h.jsx)("i",{className:"fas fa-plus"});var n;return n=r[e],Object(h.jsx)(F,{searchValue:j,item:e,canAdd:!a,ingredients:r[e],clickHandler:function(){return function(e){v.style.display="flex",e.rodzaj="\u015bniadania",g(e)}(n)},kids:1,i:e,fa:c},t)}))}),Object(h.jsx)("div",{className:"typePicker",children:Object(h.jsxs)("div",{className:"typePicker__wrapper",children:[Object(h.jsx)("button",{onClick:function(){return z("\u015bniadania")},className:"typePicker__button",children:"\u015aniadnaie"}),Object(h.jsx)("button",{onClick:function(){return z("obiady")},className:"typePicker__button",children:"Obiad"}),Object(h.jsx)("button",{onClick:function(){return z("podwieczorki")},className:"typePicker__button",children:"Podwieczorek"})]})})]})};var A=function(){return Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)(E,{}),Object(h.jsx)(M,{}),Object(h.jsx)(d.a,{exact:!0,path:"/",children:Object(h.jsx)(q,{category:"Podwieczorki"})}),Object(h.jsx)(d.a,{path:"/sur\xf3wki",children:Object(h.jsx)(q,{category:"Sur\xf3wki"})}),Object(h.jsx)(d.a,{path:"/IIdanie-dodatek",children:Object(h.jsx)(q,{category:"II Danie-dodatek"})}),Object(h.jsx)(d.a,{path:"/Ryby",children:Object(h.jsx)(q,{category:"Ryby"})}),Object(h.jsx)(d.a,{path:"/Picie",children:Object(h.jsx)(q,{category:"Picie"})}),Object(h.jsx)(d.a,{path:"/Mi\u0119sne",children:Object(h.jsx)(q,{category:"Mi\u0119sne"})}),Object(h.jsx)(d.a,{path:"/P\xf3\u0142mi\u0119sne",children:Object(h.jsx)(q,{category:"P\xf3\u0142mi\u0119sne"})}),Object(h.jsx)(d.a,{path:"/Jarskie",children:Object(h.jsx)(q,{category:"Jarskie"})}),Object(h.jsx)(d.a,{path:"/Zupy",children:Object(h.jsx)(q,{category:"Zupy"})}),Object(h.jsx)(d.a,{path:"/Owoce",children:Object(h.jsx)(q,{category:"Owoce"})}),Object(h.jsx)(d.a,{path:"/Warzywa",children:Object(h.jsx)(q,{category:"Warzywa do \u015bniadania"})}),Object(h.jsx)(d.a,{path:"/Pieczywo",children:Object(h.jsx)(q,{category:"Pieczywo"})}),Object(h.jsx)(d.a,{path:"/Dodatki-do-pieczywa",children:Object(h.jsx)(q,{category:"Dodatki do pieczywa"})}),Object(h.jsx)(d.a,{path:"/Pasty",children:Object(h.jsx)(q,{category:"Pasty do pieczywa"})}),Object(h.jsx)(d.a,{path:"/Zupy-mleczne",children:Object(h.jsx)(q,{category:"Zupy mleczne"})}),Object(h.jsx)(d.a,{path:"/razem",children:Object(h.jsx)(C,{})}),Object(h.jsx)(d.a,{exact:!0,path:"/dekadowki",children:Object(h.jsx)(W,{})}),Object(h.jsx)(d.a,{exact:!0,path:"/dekadowki/:id",children:Object(h.jsx)(K,{})}),Object(h.jsx)(d.a,{path:"/dekadowki/:id/:id",children:Object(h.jsx)(B,{id2:"dekad\xf3wlo/:id/:id"})})]})})},Z=Object(l.a)({reducer:{meals:x}});r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(o.a,{store:Z,children:Object(h.jsx)(A,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.4aa5128e.chunk.js.map