(this.webpackJsonpbozena=this.webpackJsonpbozena||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),i=c(31),r=c.n(i),s=(c(49),c(50),c(51),c(52),c(53),c(54),c(11)),d=c(10),o=c(24),l=c(2),j=function(){return Object(l.jsxs)("div",{className:"kidsAmount",children:[Object(l.jsx)("label",{htmlFor:"kidsAmount__number"}),Object(l.jsx)("input",{id:"kidsAmount__number",className:"kidsAmount__number",type:"number"})]})},b=c(35),u=Object(b.b)({name:"counter",initialState:{value:[]},reducers:{addMeal:function(e,t){e.value=t.payload,console.log(t.payload)},removeMeal:function(e,t){e.value=t.payload}}}),O=u.actions,m=O.addMeal,h=O.removeMeal,x=u.reducer,p=c(22),y=function(e){var t=e.fa,c=e.clickHandler;return Object(l.jsx)("button",{onClick:c,className:"primaryBtn",children:t})},g=function(e){var t=e.rotate,c=e.clickHandler;return Object(l.jsx)("button",{onClick:c,className:"primaryBtn primaryBtn--more",children:t?Object(l.jsx)("i",{className:"fas fa-caret-down"}):Object(l.jsx)("i",{className:"fas fa-caret-up"})})},f=function(e){var t=e.ingridient,c=e.i,a=e.kids,i=Object(n.useState)(t.quantity*a),r=Object(p.a)(i,2),s=r[0];r[1];return!!t.name&&Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t.name}),Object(l.jsx)("td",{children:t.measure}),t.quantity?Object(l.jsx)("td",{children:s}):Object(l.jsx)("td",{}),t.protein?Object(l.jsx)("td",{children:t.protein.toFixed(2)}):Object(l.jsx)("td",{children:"0"}),t.fat?Object(l.jsx)("td",{children:t.fat.toFixed(2)}):Object(l.jsx)("td",{children:"0"}),t.carbohydrates?Object(l.jsx)("td",{children:t.carbohydrates.toFixed(2)}):Object(l.jsx)("td",{children:"0"}),t.kcal?Object(l.jsx)("td",{children:t.kcal.toFixed(2)}):Object(l.jsx)("td",{children:"0"})]},c)},k=function(e){var t=e.ingredients,c=e.kids;return console.log(t),Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Produkt"}),Object(l.jsx)("th",{children:"Miara"}),Object(l.jsx)("th",{children:"Ilo\u015b\u0107"}),Object(l.jsx)("th",{children:"Bia\u0142ko"}),Object(l.jsx)("th",{children:"T\u0142uszcze"}),Object(l.jsx)("th",{children:"W\u0119glowodany"}),Object(l.jsx)("th",{children:"Kcal"})]})}),Object(l.jsx)("tbody",{children:Object.keys(t).map((function(e,n){return t[e].protein?t[e].protein:0,t[e].fat?t[e].fat:0,t[e].carbohydrates?t[e].carbohydrates:0,t[e].kcal?t[e].kcal:0,Object(l.jsx)(f,{ingridient:t[e],kids:c,i:n},n)}))})]})},v=function(e){var t=e.item,c=e.i,a=e.ingredients,i=e.clickHandler,r=e.fa,s=e.kids,d=Object(n.useState)(!1),o=Object(p.a)(d,2),j=o[0],b=o[1];return Object(l.jsxs)("div",{className:"list__item",children:[Object(l.jsxs)("div",{className:"list__itemUp",children:[Object(l.jsx)("p",{className:"list__itemName",children:t}),Object(l.jsx)(y,{clickHandler:function(){return i(t,a)},fa:r})]}),!!j&&Object(l.jsx)(k,{kids:s,item:t,ingredients:a}),Object(l.jsx)(g,{rotate:!j,clickHandler:function(){return b(!j)}})]},c)},N=function(){var e=0,t=0,c=0,n=0,a=Object(o.c)((function(e){return e.meals.value}));a.forEach((function(a){t+=a.razem.protein,c+=a.razem.fat,n+=a.razem.carbohydrates,e+=a.razem.kcal,console.log(a.razem.protein)}));var i=Object(o.b)(),r=[];Object.keys(a).map((function(e){r.push(a[e])})),console.log(a);return Object(l.jsxs)("div",{className:"addedProducts",children:[Object(l.jsx)(j,{}),Object(l.jsxs)("section",{className:"addedProducts__nutValues",children:[Object(l.jsxs)("h1",{className:"addedProducts__kcal",children:[e.toFixed(2)," Kcal"]}),Object(l.jsxs)("div",{className:"addedProducts__nutWrapper",children:[Object(l.jsxs)("p",{className:"addedProducts__protein",children:["Bia\u0142ko: ",t.toFixed(2)]}),Object(l.jsxs)("p",{className:"addedProducts__fat",children:["T\u0142uszcze: ",c.toFixed(2)]}),Object(l.jsxs)("p",{className:"addedProducts__carbohydrates",children:[" W\u0119glowodany: ",n.toFixed(2)]})]})]}),Object(l.jsx)("section",{className:"list",children:Object.keys(a).map((function(e,t){return Object(l.jsx)(v,{item:a[e].name,ingredients:a[e],kids:10,clickHandler:function(){return t=a[e].name,console.log(a),console.log(r),r=r.filter((function(e){return e.name!==t})),void i(h(r));var t},i:e,fa:Object(l.jsx)("i",{className:"fas fa-minus"})},t)}))})]})},z=c(36),_=c(18),w=c(29),P=(w.a.initializeApp({apiKey:"AIzaSyAJfMD1NikYs8u0QBIg6uv8pV3kCNo36vo",authDomain:"melasplan.firebaseapp.com",projectId:"melasplan",storageBucket:"melasplan.appspot.com",messagingSenderId:"754668588804",appId:"1:754668588804:web:f95c8bb5b8f93c61f4ca51",measurementId:"G-RDRQRD8VVM"}),w.a.database()),I=(w.a.auth(),w.a.storage(),function(e){var t=e.i;return Object(l.jsxs)("div",{className:"ingredient",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"ingredientName",children:"Produkt"}),Object(l.jsx)(_.a,{type:"text",name:"ingridients.[".concat(t,"]ingredientName"),id:"ingredientName"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"ingredientMeasure",children:"Miara"}),Object(l.jsxs)(_.a,{name:"ingridients.[".concat(t,"]ingredientMeasure"),as:"select",id:"ingredientMeasure",children:[Object(l.jsx)("option",{value:"g",children:"g"}),Object(l.jsx)("option",{value:"ml",children:"ml"})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"ingredientQuantity",children:"Ilo\u015b\u0107"}),Object(l.jsx)(_.a,{type:"number",name:"ingridients.[".concat(t,"]ingredientQuantity"),id:"ingredientQuantity"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"ingredientProtein",children:"Bia\u0142ko"}),Object(l.jsx)(_.a,{type:"number",name:"ingridients.[".concat(t,"]ingredientProtein"),id:"ingredientProtein"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"ingredientFat",children:"T\u0142uszcze"}),Object(l.jsx)(_.a,{type:"number",name:"ingridients.[".concat(t,"]ingredientFat"),id:"ingredientFat"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"ingredientCarbohydrates",children:"W\u0119glowodany"}),Object(l.jsx)(_.a,{type:"number",name:"ingridients.[".concat(t,"]ingredientCarbohydrates"),id:"ingredientCarbohydrates"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"ingredientKcal",children:"Kcal"}),Object(l.jsx)(_.a,{type:"number",name:"ingridients.[".concat(t,"]ingredientKcal"),id:"ingredientKcal"})]})]},t)}),C=function(){var e=Object(n.useState)([Object(l.jsx)(I,{i:0},0),Object(l.jsx)(I,{i:1},1)]),t=Object(p.a)(e,2),c=t[0],a=t[1],i=c.length;return Object(l.jsx)("div",{className:"addItem",children:Object(l.jsx)(_.c,{initialValues:{mealName:"",category:"Owoce"},onSubmit:function(e){String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var t=0,c=0,n=0,a=0;P.ref("".concat(e.category,"/").concat(e.mealName)).set({name:e.mealName}),e.ingridients.forEach((function(i){a+=i.ingredientProtein,t+=i.ingredientKcal,c+=i.ingredientFat,n+=i.ingredientCarbohydrates,P.ref("".concat(e.category,"/").concat(e.mealName,"/").concat(i.ingredientName.capitalize())).set({name:i.ingredientName.capitalize(),measure:i.ingredientMeasure?i.ingredientMeasure:"g",quantity:i.ingredientQuantity,protein:i.ingredientProtein,fat:i.ingredientFat,carbohydrates:i.ingredientCarbohydrates,kcal:i.ingredientKcal})})),P.ref("".concat(e.category,"/").concat(e.mealName,"/razem")).set({name:"razem",protein:a,fat:c,carbohydrates:n,kcal:t}),console.log("kcal",t),console.log("fat",c),console.log("protein",a),console.log("carbohydrates",n)},children:Object(l.jsxs)("div",{className:"addItem__wrapper",children:[Object(l.jsx)(y,{clickHandler:function(e){e.target.closest(".addItem").style.display="none"},fa:Object(l.jsx)("i",{className:"fas fa-times"})}),Object(l.jsxs)(_.b,{className:"addItem__form",children:[Object(l.jsxs)("div",{className:"addItem__uperWrapper",children:[Object(l.jsx)("label",{className:"addItem__label",htmlFor:"mealName",children:"Nazwa dania:"}),Object(l.jsx)(_.a,{className:"addItem__longInput",required:!0,type:"text",name:"mealName",id:"mealName"}),Object(l.jsx)("label",{className:"addItem__label",htmlFor:"category",children:"Kategoria:"}),Object(l.jsxs)(_.a,{className:"addItem__longInput",name:"category",as:"select",id:"category",children:[Object(l.jsx)("option",{value:"Zupy mleczne",children:"Zupy mleczne"}),Object(l.jsx)("option",{value:"Picie",children:"Picie"}),Object(l.jsx)("option",{value:"Pasty do pieczywa",children:"Pasty do pieczywa"}),Object(l.jsx)("option",{value:"Dodatki do pieczywa",children:"Dodatki do pieczywa"}),Object(l.jsx)("option",{value:"Pieczywo",children:"Pieczywo"}),Object(l.jsx)("option",{value:"Warzywa do \u015bniadania",children:"Warzywa do \u015bniadania"}),Object(l.jsx)("option",{value:"Owoce",children:"Owoce"}),Object(l.jsx)("option",{value:"Zupy",children:"Zupy"}),Object(l.jsx)("option",{value:"Jarskie",children:"Jarskie"}),Object(l.jsx)("option",{value:"P\xf3\u0142mi\u0119sne",children:"P\xf3\u0142mi\u0119sne"}),Object(l.jsx)("option",{value:"Mi\u0119sne",children:"Mi\u0119sne"}),Object(l.jsx)("option",{value:"Ryby",children:"Ryby"}),Object(l.jsx)("option",{value:"Podwieczorki",children:"Podwieczorki"}),Object(l.jsx)("option",{value:"II Danie-dodatek",children:"II Danie-dodatek"}),Object(l.jsx)("option",{value:"Sur\xf3wki",children:"Sur\xf3wki"})]})]}),Object(l.jsx)("div",{className:"addItem__ingredients",children:c.map((function(e){return e}))}),Object(l.jsxs)("div",{className:"addItem__buttons",children:[Object(l.jsx)("button",{className:"addItem__next",type:"button",onClick:function(){a([].concat(Object(z.a)(c),[Object(l.jsx)(I,{i:i},i)]))},children:"Kolejny sk\u0142adnik"}),Object(l.jsx)("button",{className:"addItem__submit",type:"submit",children:"Dodaj"})]})]})]})})})},F=function(){return Object(l.jsx)("header",{children:Object(l.jsxs)("nav",{className:"nav",children:[Object(l.jsx)(s.b,{className:"nav__item",exact:!0,to:"/",children:"Lista"}),Object(l.jsx)(s.b,{className:"nav__item",to:"/razem",children:"Razem"})]})})},M=function(){var e=function(e){console.log(e.target.parentElement),e.target.parentElement.style.display="none"};return Object(l.jsxs)("div",{className:"menu",children:[Object(l.jsx)(y,{clickHandler:function(e){e.target.closest(".menu").style.display="none"},fa:Object(l.jsx)("i",{className:"fas fa-times"})}),Object(l.jsx)("h1",{children:"Kategorie"}),Object(l.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Zupy-mleczne",children:"Zupy mleczne"}),Object(l.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Picie",children:"Picie"}),Object(l.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Pasty",children:"Pasty do pieczywa"}),Object(l.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Dodatki-do-pieczywa",children:"Dodatki do pieczywa"}),Object(l.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Pieczywo",children:"Pieczywo"}),Object(l.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Warzywa",children:"Warzywa do \u015bniadania"}),Object(l.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Owoce",children:"Owoce"}),Object(l.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Zupy",children:"Zupy"}),Object(l.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Jarskie",children:"Jarskie"}),Object(l.jsx)(s.b,{onClick:function(t){return e(t)},to:"/P\xf3\u0142mi\u0119sne",children:"P\xf3\u0142mi\u0119sne"}),Object(l.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Mi\u0119sne",children:"Mi\u0119sne"}),Object(l.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Ryby",children:"Ryby"}),Object(l.jsx)(s.b,{onClick:function(t){return e(t)},to:"/",children:"Podwieczorki"}),Object(l.jsx)(s.b,{onClick:function(t){return e(t)},to:"/IIdanie-dodatek",children:"II Danie-dodatek"}),Object(l.jsx)(s.b,{onClick:function(t){return e(t)},to:"/sur\xf3wki",children:"Sur\xf3wki"}),Object(l.jsx)("button",{onClick:function(e){document.querySelector(".addItem").style.display="flex",e.target.parentElement.style.display="none"},className:"showAddItem",children:"Dodaj"})]})},D=function(e){var t=e.category,c=Object(o.c)((function(e){return e.meals.value})),a=Object(n.useState)([]),i=Object(p.a)(a,2),r=i[0],s=i[1],d=Object(o.b)();return Object(n.useEffect)((function(){return P.ref(t).on("value",(function(e){var t=e.val();console.log(t),s(t)})),function(){return s("")}}),[]),Object(l.jsxs)("div",{className:"list",children:[Object(l.jsx)(M,{}),Object(l.jsx)("button",{onClick:function(){document.querySelector(".menu").style.display="flex"},className:"list__menuBtn",children:Object(l.jsx)("i",{className:"fas fa-bars"})}),Object(l.jsx)("h1",{children:t}),Object(l.jsx)("input",{type:"text",className:"list__serach"}),Object(l.jsx)("section",{className:"list__items",children:Object.keys(r).map((function(e,t){var n;return n=r[e],Object(l.jsx)(v,{item:e,ingredients:r[e],clickHandler:function(){d(m([].concat(Object(z.a)(c),[n]))),console.log("plus")},kids:1,i:e,fa:Object(l.jsx)("i",{className:"fas fa-plus"})},t)}))})]})};var S=function(){return Object(l.jsxs)(s.a,{children:[Object(l.jsx)(F,{}),Object(l.jsx)(C,{}),Object(l.jsx)(d.a,{exact:!0,path:"/",children:Object(l.jsx)(D,{category:"Podwieczorki"})}),Object(l.jsx)(d.a,{path:"/sur\xf3wki",children:Object(l.jsx)(D,{category:"Sur\xf3wki"})}),Object(l.jsx)(d.a,{path:"/IIdanie-dodatek",children:Object(l.jsx)(D,{category:"II Danie-dodatek"})}),Object(l.jsx)(d.a,{path:"/Ryby",children:Object(l.jsx)(D,{category:"Ryby"})}),Object(l.jsx)(d.a,{path:"/Picie",children:Object(l.jsx)(D,{category:"Picie"})}),Object(l.jsx)(d.a,{path:"/Mi\u0119sne",children:Object(l.jsx)(D,{category:"Mi\u0119sne"})}),Object(l.jsx)(d.a,{path:"/P\xf3\u0142mi\u0119sne",children:Object(l.jsx)(D,{category:"P\xf3\u0142mi\u0119sne"})}),Object(l.jsx)(d.a,{path:"/Jarskie",children:Object(l.jsx)(D,{category:"Jarskie"})}),Object(l.jsx)(d.a,{path:"/Zupy",children:Object(l.jsx)(D,{category:"Zupy"})}),Object(l.jsx)(d.a,{path:"/Owoce",children:Object(l.jsx)(D,{category:"Owoce"})}),Object(l.jsx)(d.a,{path:"/Warzywa",children:Object(l.jsx)(D,{category:"Warzywa do \u015bniadania"})}),Object(l.jsx)(d.a,{path:"/Pieczywo",children:Object(l.jsx)(D,{category:"Pieczywo"})}),Object(l.jsx)(d.a,{path:"/Dodatki-do-pieczywa",children:Object(l.jsx)(D,{category:"Dodatki do pieczywa"})}),Object(l.jsx)(d.a,{path:"/Pasty",children:Object(l.jsx)(D,{category:"Pasty do pieczywa"})}),Object(l.jsx)(d.a,{path:"/Zupy-mleczne",children:Object(l.jsx)(D,{category:"Zupy mleczne"})}),Object(l.jsx)(d.a,{path:"/razem",children:Object(l.jsx)(N,{})})]})},K=Object(b.a)({reducer:{meals:x}});r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(o.a,{store:K,children:Object(l.jsx)(S,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.1dadbbf5.chunk.js.map