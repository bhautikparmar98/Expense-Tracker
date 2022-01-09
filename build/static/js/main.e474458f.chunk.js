(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(9),l=n.n(c),s=(n(15),n(5)),i=n(2),r=(n(16),n(17),n(0)),u=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:a}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})},o=(n(19),function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})}),j=(n(20),function(e){return Object(r.jsxs)(o,{className:"expense-item",children:[Object(r.jsx)(u,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})}),d=function(e){return 0===e.items.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"Found no Expenses"}):Object(r.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(r.jsx)(j,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},b=(n(21),n(22),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onSelectYear(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})}),x=n(10),v=(n(23),n(24),function(e){var t="0%";return console.log(e),e.value>0&&(t=Math.round(e.value/e.maxvalue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),O=function(e){return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(t){return Object(r.jsx)(v,{label:t.label,value:t.value,maxvalue:e.maxExpense},t.label)}))})},m=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expensesData);try{for(a.s();!(t=a.n()).done;){var c=t.value;console.log(c),n[c.date.getMonth()].value+=c.amount}}catch(u){a.e(u)}finally{a.f()}var l=n.map((function(e){return e.value})),i=Math.max.apply(Math,Object(s.a)(l));return Object(r.jsx)(O,{maxExpense:i,dataPoints:n})},h=function(e){var t=Object(a.useState)("2020"),n=Object(i.a)(t,2),c=n[0],l=n[1];console.log(c);var s=e.items.filter((function(e){if(e.date.getFullYear().toString()===c)return!0}));return Object(r.jsx)("li",{children:Object(r.jsxs)(o,{className:"expenses",children:[Object(r.jsx)(b,{selected:c,onSelectYear:function(e){l(e)}}),Object(r.jsx)(m,{expensesData:s}),Object(r.jsx)(d,{items:s})]})})},p=n(8),f=n(6),_=(n(25),function(e){var t=Object(f.useState)(""),n=Object(i.a)(t,2),a=n[0],c=n[1],l=Object(f.useState)(""),s=Object(i.a)(l,2),u=s[0],o=s[1],j=Object(f.useState)(""),d=Object(i.a)(j,2),b=d[0],x=d[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+u,date:new Date(b)};e.onSaveExpenseData(n),e.cancelExenpseForm(),c(""),o(""),x("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",value:u,onChange:function(e){o(e.target.value)},min:"0.01",step:"0.01"})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"Date",value:b,onChange:function(e){x(e.target.value)},min:"2019-01-01",max:"2022-12-31"})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:function(){e.cancelExenpseForm()},children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),N=(n(26),function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],l=n[1],s=Object(r.jsx)("button",{onClick:function(){l(!0)},children:"Add New Expenses"});return c&&(s=Object(r.jsx)(_,{cancelExenpseForm:function(){l(!1)},onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)}})),Object(r.jsx)("div",{className:"new-expense",children:s})}),g=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],S=function(){var e=Object(a.useState)(g),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{onAddExpense:function(e){c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(r.jsx)(h,{items:n})]})};l.a.render(Object(r.jsx)(S,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.e474458f.chunk.js.map