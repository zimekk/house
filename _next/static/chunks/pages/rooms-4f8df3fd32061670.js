(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[110],{7223:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rooms",function(){return n(175)}])},175:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return z}});var i=n(1549),s=n(4194),t=n(4738),r=n.n(t);let l=e=>new Intl.NumberFormat("pl-PL",{maximumFractionDigits:2}).format(e),c=e=>"".concat(l(e.reduce((e,a)=>e*a,1)),"m2"),m=e=>"".concat(e.map(l).join("x"),"m");function d(e){let{list:a}=e,[n,t]=(0,s.useState)(()=>a.map((e,a)=>a)),l=(0,s.useMemo)(()=>a,[a]),d=(0,s.useCallback)(e=>{let a,{target:n}=e;return a=Number(n.value),t(e=>e.filter(e=>e!==a).concat(n.checked?a:[]))},[]),h=(0,s.useCallback)(e=>{let n,{target:i}=e;return n=a.map((e,a)=>a),t(e=>e.filter(e=>!n.includes(e)).concat(i.checked?n:[]))},[a]);return(0,i.jsxs)("table",{className:r().Table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{width:20}}),(0,i.jsx)("th",{align:"left",children:"name"}),(0,i.jsx)("th",{align:"right",style:{width:120},children:"size"}),(0,i.jsx)("th",{align:"right",style:{width:120},children:"area"})]})}),(0,i.jsx)("tbody",{children:l.map((e,a)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("label",{children:(0,i.jsx)("input",{type:"checkbox",value:a,checked:n.includes(a),onChange:d})})}),(0,i.jsx)("td",{children:e.name}),(0,i.jsx)("td",{align:"right",children:m(e.size)}),(0,i.jsx)("td",{align:"right",children:c(e.size)})]},a))}),(0,i.jsx)("tfoot",{children:[l.filter((e,a)=>n.includes(a)).reduce((e,a)=>Object.assign(e,{area:e.area+a.size.reduce((e,a)=>e*a,1)}),{area:0})].map((e,s)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("label",{children:(0,i.jsx)("input",{type:"checkbox",checked:a.length>0&&n.length===a.length,disabled:0===a.length,onChange:h})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{align:"right"}),(0,i.jsx)("td",{align:"right",children:c([e.area,1])})]},s))})]})}function h(){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"rooms"}),(0,i.jsxs)("div",{className:r().Columns,children:[(0,i.jsx)("div",{children:(0,i.jsx)(d,{list:[{name:"Sypialnia 1",size:[4,3.5]},{name:"Sypialnia 2",size:[4,3.5]},{name:"Łazienka",size:[3,2]},{name:"Sypialnia",size:[4,3.5]},{name:"Garderoba",size:[2.5,2]},{name:"Łazienka",size:[2.5,2]},{name:"Pralnia",size:[2.5,2]},{name:"Schody",size:[2,2]},{name:"Korytarz",size:[1.5,4]},{name:"Salon",size:[5,5]},{name:"Jadalnia",size:[3,4]},{name:"Kuchnia",size:[3,4]},{name:"Spiżarnia",size:[2.5,2]},{name:"Gabinet",size:[4,3]},{name:"Prysznic",size:[1.5,2]},{name:"Korytarz",size:[1.5,4]},{name:"Garderoba",size:[1.5,2]},{name:"Kotłownia",size:[1.5,2]},{name:"Wiatrołap",size:[2,2]},{name:"Garaż",size:[6,7]}]})}),(0,i.jsx)("div",{children:(0,i.jsx)(d,{list:[{name:"Sypialnia 1",size:[3.25,2.95]},{name:"",size:[0,0]},{name:"",size:[0,0]},{name:"Sypialnia",size:[3.55,2.95]},{name:"Garderoba",size:[2,.6]},{name:"Łazienka",size:[1.85,2.18]},{name:"Pralnia",size:[1.2,.65]},{name:"",size:[0,0]},{name:"Korytarz",size:[1.2,4.95]},{name:"Salon",size:[5.25,5]},{name:"Jadalnia",size:[0,0]},{name:"Kuchnia",size:[3.1,3.45]},{name:"",size:[0,0]},{name:"",size:[0,0]},{name:"Prysznic",size:[1.95,1.5]},{name:"Korytarz",size:[2.9,2]},{name:"Szafa",size:[1.85,.65]},{name:"",size:[0,0]},{name:"",size:[0,0]},{name:"",size:[0,0]}]})})]})]})}var z=Object.assign(function(){return(0,i.jsx)(h,{})},{Layout:n(5455).Layout})},4738:function(e){e.exports={Table:"styles_Table__oKw37",Columns:"styles_Columns___7AVZ"}}},function(e){e.O(0,[138,809,455,888,774,179],function(){return e(e.s=7223)}),_N_E=e.O()}]);