(this.webpackJsonpbozena=this.webpackJsonpbozena||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),i=c(31),r=c.n(i),s=(c(49),c(50),c(51),c(52),c(53),c(54),c(11)),d=c(10),o=c(24),l=c(35),j=Object(l.b)({name:"counter",initialState:{value:[]},reducers:{addMeal:function(e,t){e.value=t.payload,console.log(t.payload)},removeMeal:function(e,t){e.value=t.payload}}}),b=j.actions,u=b.addMeal,O=b.removeMeal,h=j.reducer,x=c(22),m=c(2),p=function(e){var t=e.fa,c=e.clickHandler;return Object(m.jsx)("button",{onClick:c,className:"primaryBtn",children:t})},y=function(e){var t=e.rotate,c=e.clickHandler;return Object(m.jsx)("button",{onClick:c,className:"primaryBtn primaryBtn--more",children:t?Object(m.jsx)("i",{className:"fas fa-caret-down"}):Object(m.jsx)("i",{className:"fas fa-caret-up"})})},g=function(e){var t=e.ingridient,c=e.i,a=e.kids,i=Object(n.useState)(t.quantity*a),r=Object(x.a)(i,2),s=r[0];r[1];return!!t.name&&Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t.name}),Object(m.jsx)("td",{children:t.measure}),t.quantity?Object(m.jsx)("td",{children:s}):Object(m.jsx)("td",{}),t.protein?Object(m.jsx)("td",{children:t.protein.toFixed(2)}):Object(m.jsx)("td",{children:"0"}),t.fat?Object(m.jsx)("td",{children:t.fat.toFixed(2)}):Object(m.jsx)("td",{children:"0"}),t.carbohydrates?Object(m.jsx)("td",{children:t.carbohydrates.toFixed(2)}):Object(m.jsx)("td",{children:"0"}),t.kcal?Object(m.jsx)("td",{children:t.kcal.toFixed(2)}):Object(m.jsx)("td",{children:"0"})]},c)},f=function(e){var t=e.ingredients,c=e.kids;return console.log(t),Object(m.jsxs)("table",{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Produkt"}),Object(m.jsx)("th",{children:"Miara"}),Object(m.jsx)("th",{children:"Ilo\u015b\u0107"}),Object(m.jsx)("th",{children:"Bia\u0142ko"}),Object(m.jsx)("th",{children:"T\u0142uszcze"}),Object(m.jsx)("th",{children:"W\u0119glowodany"}),Object(m.jsx)("th",{children:"Kcal"})]})}),Object(m.jsx)("tbody",{children:Object.keys(t).map((function(e,n){return t[e].protein?t[e].protein:0,t[e].fat?t[e].fat:0,t[e].carbohydrates?t[e].carbohydrates:0,t[e].kcal?t[e].kcal:0,Object(m.jsx)(g,{ingridient:t[e],kids:c,i:n},n)}))})]})},k=function(e){var t=e.item,c=e.i,a=e.ingredients,i=e.clickHandler,r=e.fa,s=e.kids,d=Object(n.useState)(!1),o=Object(x.a)(d,2),l=o[0],j=o[1];return Object(m.jsxs)("div",{className:"list__item",children:[Object(m.jsxs)("div",{className:"list__itemUp",children:[Object(m.jsx)("p",{className:"list__itemName",children:t}),Object(m.jsx)(p,{clickHandler:function(){return i(t,a)},fa:r})]}),!!l&&Object(m.jsx)(f,{kids:s,item:t,ingredients:a}),Object(m.jsx)(y,{rotate:!l,clickHandler:function(){return j(!l)}})]},c)},v=function(){var e=0,t=0,c=0,n=0,a=Object(o.c)((function(e){return e.meals.value}));a.forEach((function(a){t+=a.razem.protein,c+=a.razem.fat,n+=a.razem.carbohydrates,e+=a.razem.kcal,console.log(a.razem.protein)}));var i=Object(o.b)(),r=[];Object.keys(a).map((function(e){r.push(a[e])})),console.log(a);return Object(m.jsxs)("div",{className:"addedProducts",children:[Object(m.jsxs)("section",{className:"addedProducts__nutValues",children:[Object(m.jsxs)("h1",{className:"addedProducts__kcal",children:[e.toFixed(2)," Kcal"]}),Object(m.jsxs)("div",{className:"addedProducts__nutWrapper",children:[Object(m.jsxs)("p",{className:"addedProducts__protein",children:["Bia\u0142ko: ",t.toFixed(2)]}),Object(m.jsxs)("p",{className:"addedProducts__fat",children:["T\u0142uszcze: ",c.toFixed(2)]}),Object(m.jsxs)("p",{className:"addedProducts__carbohydrates",children:[" W\u0119glowodany: ",n.toFixed(2)]})]})]}),Object(m.jsx)("section",{className:"list",children:Object.keys(a).map((function(e,t){return Object(m.jsx)(k,{item:a[e].name,ingredients:a[e],kids:10,clickHandler:function(){return t=a[e].name,console.log(a),console.log(r),r=r.filter((function(e){return e.name!==t})),void i(O(r));var t},i:e,fa:Object(m.jsx)("i",{className:"fas fa-minus"})},t)}))})]})},N=c(36),z=c(18),_=c(29),w=(_.a.initializeApp({apiKey:"AIzaSyAJfMD1NikYs8u0QBIg6uv8pV3kCNo36vo",authDomain:"melasplan.firebaseapp.com",projectId:"melasplan",storageBucket:"melasplan.appspot.com",messagingSenderId:"754668588804",appId:"1:754668588804:web:f95c8bb5b8f93c61f4ca51",measurementId:"G-RDRQRD8VVM"}),_.a.database()),P=(_.a.auth(),_.a.storage(),function(e){var t=e.i;return Object(m.jsxs)("div",{className:"ingredient",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"ingredientName",children:"Produkt"}),Object(m.jsx)(z.a,{type:"text",name:"ingridients.[".concat(t,"]ingredientName"),id:"ingredientName"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"ingredientMeasure",children:"Miara"}),Object(m.jsxs)(z.a,{name:"ingridients.[".concat(t,"]ingredientMeasure"),as:"select",id:"ingredientMeasure",children:[Object(m.jsx)("option",{value:"g",children:"g"}),Object(m.jsx)("option",{value:"ml",children:"ml"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"ingredientQuantity",children:"Ilo\u015b\u0107"}),Object(m.jsx)(z.a,{type:"number",name:"ingridients.[".concat(t,"]ingredientQuantity"),id:"ingredientQuantity"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"ingredientProtein",children:"Bia\u0142ko"}),Object(m.jsx)(z.a,{type:"number",name:"ingridients.[".concat(t,"]ingredientProtein"),id:"ingredientProtein"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"ingredientFat",children:"T\u0142uszcze"}),Object(m.jsx)(z.a,{type:"number",name:"ingridients.[".concat(t,"]ingredientFat"),id:"ingredientFat"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"ingredientCarbohydrates",children:"W\u0119glowodany"}),Object(m.jsx)(z.a,{type:"number",name:"ingridients.[".concat(t,"]ingredientCarbohydrates"),id:"ingredientCarbohydrates"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"ingredientKcal",children:"Kcal"}),Object(m.jsx)(z.a,{type:"number",name:"ingridients.[".concat(t,"]ingredientKcal"),id:"ingredientKcal"})]})]},t)}),I=function(){var e=Object(n.useState)([Object(m.jsx)(P,{i:0},0),Object(m.jsx)(P,{i:1},1)]),t=Object(x.a)(e,2),c=t[0],a=t[1],i=c.length;return Object(m.jsx)("div",{className:"addItem",children:Object(m.jsx)(z.c,{initialValues:{mealName:"",category:"Owoce"},onSubmit:function(e){String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var t=0,c=0,n=0,a=0;w.ref("".concat(e.category,"/").concat(e.mealName)).set({name:e.mealName}),e.ingridients.forEach((function(i){a+=i.ingredientProtein,t+=i.ingredientKcal,c+=i.ingredientFat,n+=i.ingredientCarbohydrates,w.ref("".concat(e.category,"/").concat(e.mealName,"/").concat(i.ingredientName.capitalize())).set({name:i.ingredientName.capitalize(),measure:i.ingredientMeasure?i.ingredientMeasure:"g",quantity:i.ingredientQuantity,protein:i.ingredientProtein,fat:i.ingredientFat,carbohydrates:i.ingredientCarbohydrates,kcal:i.ingredientKcal})})),w.ref("".concat(e.category,"/").concat(e.mealName,"/razem")).set({name:"razem",protein:a,fat:c,carbohydrates:n,kcal:t}),console.log("kcal",t),console.log("fat",c),console.log("protein",a),console.log("carbohydrates",n)},children:Object(m.jsxs)("div",{className:"addItem__wrapper",children:[Object(m.jsx)(p,{clickHandler:function(e){e.target.closest(".addItem").style.display="none"},fa:Object(m.jsx)("i",{className:"fas fa-times"})}),Object(m.jsxs)(z.b,{className:"addItem__form",children:[Object(m.jsxs)("div",{className:"addItem__uperWrapper",children:[Object(m.jsx)("label",{className:"addItem__label",htmlFor:"mealName",children:"Nazwa dania:"}),Object(m.jsx)(z.a,{className:"addItem__longInput",required:!0,type:"text",name:"mealName",id:"mealName"}),Object(m.jsx)("label",{className:"addItem__label",htmlFor:"category",children:"Kategoria:"}),Object(m.jsxs)(z.a,{className:"addItem__longInput",name:"category",as:"select",id:"category",children:[Object(m.jsx)("option",{value:"Zupy mleczne",children:"Zupy mleczne"}),Object(m.jsx)("option",{value:"Picie",children:"Picie"}),Object(m.jsx)("option",{value:"Pasty do pieczywa",children:"Pasty do pieczywa"}),Object(m.jsx)("option",{value:"Dodatki do pieczywa",children:"Dodatki do pieczywa"}),Object(m.jsx)("option",{value:"Pieczywo",children:"Pieczywo"}),Object(m.jsx)("option",{value:"Warzywa do \u015bniadania",children:"Warzywa do \u015bniadania"}),Object(m.jsx)("option",{value:"Owoce",children:"Owoce"}),Object(m.jsx)("option",{value:"Zupy",children:"Zupy"}),Object(m.jsx)("option",{value:"Jarskie",children:"Jarskie"}),Object(m.jsx)("option",{value:"P\xf3\u0142mi\u0119sne",children:"P\xf3\u0142mi\u0119sne"}),Object(m.jsx)("option",{value:"Mi\u0119sne",children:"Mi\u0119sne"}),Object(m.jsx)("option",{value:"Ryby",children:"Ryby"}),Object(m.jsx)("option",{value:"Podwieczorki",children:"Podwieczorki"}),Object(m.jsx)("option",{value:"II Danie-dodatek",children:"II Danie-dodatek"}),Object(m.jsx)("option",{value:"Sur\xf3wki",children:"Sur\xf3wki"})]})]}),Object(m.jsx)("div",{className:"addItem__ingredients",children:c.map((function(e){return e}))}),Object(m.jsxs)("div",{className:"addItem__buttons",children:[Object(m.jsx)("button",{className:"addItem__next",type:"button",onClick:function(){a([].concat(Object(N.a)(c),[Object(m.jsx)(P,{i:i},i)]))},children:"Kolejny sk\u0142adnik"}),Object(m.jsx)("button",{className:"addItem__submit",type:"submit",children:"Dodaj"})]})]})]})})})},C=function(){return Object(m.jsx)("header",{children:Object(m.jsxs)("nav",{className:"nav",children:[Object(m.jsx)(s.b,{className:"nav__item",exact:!0,to:"/",children:"Lista"}),Object(m.jsx)(s.b,{className:"nav__item",to:"/razem",children:"Razem"})]})})},F=function(){var e=function(e){console.log(e.target.parentElement),e.target.parentElement.style.display="none"};return Object(m.jsxs)("div",{className:"menu",children:[Object(m.jsx)(p,{clickHandler:function(e){e.target.closest(".menu").style.display="none"},fa:Object(m.jsx)("i",{className:"fas fa-times"})}),Object(m.jsx)("h1",{children:"Kategorie"}),Object(m.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Zupy-mleczne",children:"Zupy mleczne"}),Object(m.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Picie",children:"Picie"}),Object(m.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Pasty",children:"Pasty do pieczywa"}),Object(m.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Dodatki-do-pieczywa",children:"Dodatki do pieczywa"}),Object(m.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Pieczywo",children:"Pieczywo"}),Object(m.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Warzywa",children:"Warzywa do \u015bniadania"}),Object(m.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Owoce",children:"Owoce"}),Object(m.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Zupy",children:"Zupy"}),Object(m.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Jarskie",children:"Jarskie"}),Object(m.jsx)(s.b,{onClick:function(t){return e(t)},to:"/P\xf3\u0142mi\u0119sne",children:"P\xf3\u0142mi\u0119sne"}),Object(m.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Mi\u0119sne",children:"Mi\u0119sne"}),Object(m.jsx)(s.b,{onClick:function(t){return e(t)},to:"/Ryby",children:"Ryby"}),Object(m.jsx)(s.b,{onClick:function(t){return e(t)},to:"/",children:"Podwieczorki"}),Object(m.jsx)(s.b,{onClick:function(t){return e(t)},to:"/IIdanie-dodatek",children:"II Danie-dodatek"}),Object(m.jsx)(s.b,{onClick:function(t){return e(t)},to:"/sur\xf3wki",children:"Sur\xf3wki"}),Object(m.jsx)("button",{onClick:function(e){document.querySelector(".addItem").style.display="flex",e.target.parentElement.style.display="none"},className:"showAddItem",children:"Dodaj"})]})},M=function(e){var t=e.category,c=Object(o.c)((function(e){return e.meals.value})),a=Object(n.useState)([]),i=Object(x.a)(a,2),r=i[0],s=i[1],d=Object(o.b)();return Object(n.useEffect)((function(){return w.ref(t).on("value",(function(e){var t=e.val();console.log(t),s(t)})),function(){return s("")}}),[]),Object(m.jsxs)("div",{className:"list",children:[Object(m.jsx)(F,{}),Object(m.jsx)("button",{onClick:function(){document.querySelector(".menu").style.display="flex"},className:"list__menuBtn",children:Object(m.jsx)("i",{className:"fas fa-bars"})}),Object(m.jsx)("h1",{children:t}),Object(m.jsx)("input",{type:"text",className:"list__serach"}),Object(m.jsx)("section",{className:"list__items",children:Object.keys(r).map((function(e,t){var n;return n=r[e],Object(m.jsx)(k,{item:e,ingredients:r[e],clickHandler:function(){d(u([].concat(Object(N.a)(c),[n]))),console.log("plus")},kids:1,i:e,fa:Object(m.jsx)("i",{className:"fas fa-plus"})},t)}))})]})};var D=function(){return Object(m.jsxs)(s.a,{children:[Object(m.jsx)(C,{}),Object(m.jsx)(I,{}),Object(m.jsx)(d.a,{exact:!0,path:"/",children:Object(m.jsx)(M,{category:"Podwieczorki"})}),Object(m.jsx)(d.a,{path:"/sur\xf3wki",children:Object(m.jsx)(M,{category:"Sur\xf3wki"})}),Object(m.jsx)(d.a,{path:"/IIdanie-dodatek",children:Object(m.jsx)(M,{category:"II Danie-dodatek"})}),Object(m.jsx)(d.a,{path:"/Ryby",children:Object(m.jsx)(M,{category:"Ryby"})}),Object(m.jsx)(d.a,{path:"/Picie",children:Object(m.jsx)(M,{category:"Picie"})}),Object(m.jsx)(d.a,{path:"/Mi\u0119sne",children:Object(m.jsx)(M,{category:"Mi\u0119sne"})}),Object(m.jsx)(d.a,{path:"/P\xf3\u0142mi\u0119sne",children:Object(m.jsx)(M,{category:"P\xf3\u0142mi\u0119sne"})}),Object(m.jsx)(d.a,{path:"/Jarskie",children:Object(m.jsx)(M,{category:"Jarskie"})}),Object(m.jsx)(d.a,{path:"/Zupy",children:Object(m.jsx)(M,{category:"Zupy"})}),Object(m.jsx)(d.a,{path:"/Owoce",children:Object(m.jsx)(M,{category:"Owoce"})}),Object(m.jsx)(d.a,{path:"/Warzywa",children:Object(m.jsx)(M,{category:"Warzywa do \u015bniadania"})}),Object(m.jsx)(d.a,{path:"/Pieczywo",children:Object(m.jsx)(M,{category:"Pieczywo"})}),Object(m.jsx)(d.a,{path:"/Dodatki-do-pieczywa",children:Object(m.jsx)(M,{category:"Dodatki do pieczywa"})}),Object(m.jsx)(d.a,{path:"/Pasty",children:Object(m.jsx)(M,{category:"Pasty do pieczywa"})}),Object(m.jsx)(d.a,{path:"/Zupy-mleczne",children:Object(m.jsx)(M,{category:"Zupy mleczne"})}),Object(m.jsx)(d.a,{path:"/razem",children:Object(m.jsx)(v,{})})]})},S=Object(l.a)({reducer:{meals:h}});r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(o.a,{store:S,children:Object(m.jsx)(D,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.3350262f.chunk.js.map