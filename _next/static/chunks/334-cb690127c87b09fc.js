"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{6334:function(e,t,r){r.r(t),r.d(t,{DeployButton:function(){return b},Layout:function(){return M},Nav:function(){return w},default:function(){return N}});var s=r(7458),n=r(6723),o=r(2983),l=r(3474),a=r(2841),i=r(1351),c=r(4109),x=r(7754);function h(e){let{w:t,h:r,x:n,y:o}=e;return(0,s.jsxs)("mesh",{position:[0,o+r/2,-n-t/2],children:[(0,s.jsx)("boxGeometry",{args:[.5,r,t]}),(0,s.jsx)("meshBasicMaterial",{transparent:!0}),(0,s.jsx)(i.w,{})]})}function u(e){let{w:t,h:r,x:n,y:l}=e,a=(0,o.useMemo)(()=>[{w:t-.2,h:r-.2-0,x:n+.1,y:l+.1+0}],[]),x=(0,o.useMemo)(()=>{let e=m(d(t,r,n,l));return a.forEach(t=>{let{w:r,h:s,x:n,y:o}=t,l=d(r,s,n,o);e.holes.push(m(l))}),e},[]);return(0,s.jsx)("group",{children:(0,s.jsxs)(c.WL,{args:[x,{depth:.2,steps:1,bevelEnabled:!1}],position:[0,0,0],rotation:[0,Math.PI/2,0],children:[(0,s.jsx)("meshBasicMaterial",{transparent:!0}),(0,s.jsx)(i.w,{})]})})}function p(e){let{w:t,h:r,x:n,y:l}=e,a=(0,o.useMemo)(()=>[{w:t-.1,h:r-.1-.1,x:n+.05,y:l+.05+.1}],[]),x=(0,o.useMemo)(()=>{let e=m(d(t,r,n,l));return a.forEach(t=>{let{w:r,h:s,x:n,y:o}=t,l=d(r,s,n,o);e.holes.push(m(l))}),e},[]);return(0,s.jsxs)("group",{children:[(0,s.jsxs)(c.WL,{args:[x,{depth:.05,steps:1,bevelEnabled:!1}],position:[.1,0,0],rotation:[0,Math.PI/2,0],children:[(0,s.jsx)("meshBasicMaterial",{transparent:!0}),(0,s.jsx)(i.w,{})]}),(0,s.jsx)(h,{w:t,x:n,y:l,h:.1}),a.map((e,t)=>(0,s.jsx)(u,{...e},t))]})}function d(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return[[r,s],[e+r,s],[e+r,s+t],[r,s+t]]}let m=e=>e.reduce((e,t,r)=>{let[s,n]=t;return e[r>0?"lineTo":"moveTo"](s,n)},new x.Shape);function j(e){let{x:t,y:r,v:n,rotate:l}=e,a=(0,o.useMemo)(()=>n>3?[{w:n-1,h:1,x:.5,y:.5}]:[],[]),x=(0,o.useMemo)(()=>{let e=m(d(n,2));return a.forEach(t=>{let{w:r,h:s,x:n,y:o}=t,l=d(r,s,n,o);e.holes.push(m(l))}),e},[]);return(0,s.jsxs)("group",{position:[t,0,-r],rotation:[0,-l,0],children:[(0,s.jsxs)(c.WL,{args:[x,{depth:.2,steps:1,bevelEnabled:!1}],rotation:[0,Math.PI/2,0],children:[(0,s.jsx)("meshBasicMaterial",{transparent:!0}),(0,s.jsx)(i.w,{})]}),a.map((e,t)=>(0,s.jsx)(p,{...e},t))]})}function f(e){let{edges:t,walls:r}=(0,o.useMemo)(()=>{let e=[[1,5],[-1,5],[-1,4],[-1,2],[1,1],[-1,3]],{edges:t,walls:r}=e.reduce((e,t)=>{let{vector:r,edges:s,walls:n,rotate:o}=e,[l,a]=t;return((e,t,r)=>{let[o,l]=t;return{rotate:r,vector:e,edges:s.concat([[o+a*e[0],l+a*e[1]]]),walls:n.concat([{rotate:r,x:o,y:l,v:a}])}})({0:r,1:[r[1],-1*r[0]],[-1]:[-1*r[1],r[0]]}[l],s.length>0?s[s.length-1]:[0,0],o+l*Math.PI/2)},{rotate:0,vector:[0,1],edges:[],walls:[]});return console.log({vectors:e,edges:t,walls:r}),{edges:t,walls:r}},[]),n=(0,o.useMemo)(()=>m(t),[t]);return(0,s.jsxs)("group",{...e,children:[(0,s.jsxs)(c.WL,{args:[n,{depth:-1,steps:1,bevelEnabled:!1}],rotation:[-Math.PI/2,0,0],children:[(0,s.jsx)("meshBasicMaterial",{transparent:!0}),(0,s.jsx)(i.w,{})]}),r.map((e,t)=>{let{rotate:r,x:n,y:o,v:l}=e;return(0,s.jsx)(j,{rotate:r,x:n,y:o,v:l},t)})]})}function g(e){return(0,s.jsx)("group",{...e,children:(0,s.jsx)(f,{})})}function v(e){let t=(0,o.useRef)(),[r,n]=(0,o.useState)(!1),[l,a]=(0,o.useState)(!1);return(0,s.jsxs)("mesh",{...e,ref:t,scale:l?1.5:1,onClick:e=>a(!l),onPointerOver:e=>n(!0),onPointerOut:e=>n(!1),children:[(0,s.jsx)("boxGeometry",{args:[1,1,1]}),(0,s.jsx)("meshBasicMaterial",{color:r?"hotpink":"orange"})]})}function y(){return(0,s.jsxs)(l.Xz,{children:[(0,s.jsx)("ambientLight",{intensity:.5}),(0,s.jsx)("spotLight",{position:[10,10,10],angle:.15,penumbra:1}),(0,s.jsx)("pointLight",{position:[-10,-10,-10]}),(0,s.jsx)(v,{position:[-1.2,-1.5,0]}),(0,s.jsx)(v,{position:[1.2,-1.5,0]}),(0,s.jsx)(g,{position:[-2,-2,2]}),(0,s.jsx)("gridHelper",{args:[20,20,"#4D089A","#4D089A"],position:[0,-2,0],rotation:[0,0,0]}),(0,s.jsx)(a.z,{makeDefault:!0,dampingFactor:.3})]})}let b=e=>{var t;let r=[["repository-url",e.repositoryUrl],["env",null===(t=e.env)||void 0===t?void 0:t.join(",")],["project-name",e.projectName],["repository-name",e.repositoryName]].reduce((e,t)=>{let[r,s]=t;return s&&e.push("".concat(r,"=").concat(encodeURIComponent(s))),e},[]).join("&");return(0,s.jsx)(n.zx,{Component:"a",href:e.customDeployUrl?e.customDeployUrl:"".concat("https://vercel.com/new/clone").concat(r?"?".concat(r):""),target:"_blank",rel:"noreferrer",children:"Clone & Deploy"})},w=e=>{let{title:t,links:r,path:o,deployButton:l}=e,a=(null==l?void 0:l.repositoryUrl)||"".concat("https://github.com/vercel/examples/tree/main","/").concat(o);return(0,s.jsx)("nav",{className:"border-b border-gray-200 py-5 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]",children:(0,s.jsxs)("div",{className:"flex items-center lg:px-6 px-8 mx-auto max-w-7xl",children:[(0,s.jsxs)("div",{className:"flex flex-row items-center",children:[(0,s.jsx)(n.rU,{href:"/",children:(0,s.jsx)("span",{children:(0,s.jsxs)("svg",{height:"26",viewBox:"0 0 75 65",fill:"#000",children:[(0,s.jsx)("title",{children:t}),(0,s.jsx)("path",{d:"M37.59.25l36.95 64H.64l36.95-64z"})]})})}),(0,s.jsxs)("ul",{className:"flex items-center content-center",children:[(0,s.jsx)("li",{className:"ml-2 text-gray-200",children:(0,s.jsx)("svg",{viewBox:"0 0 24 24",width:"32",height:"32",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:(0,s.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})})}),(0,s.jsx)("li",{className:"font-medium",style:{letterSpacing:".01px"},children:r.map(e=>(0,s.jsx)(n.rU,{href:"/".concat(e),style:{marginRight:".5em"},children:e},e))})]})]}),(0,s.jsx)("div",{className:"flex-1 justify-end hidden md:flex",children:(0,s.jsxs)("nav",{className:"flex-row inline-flex items-center",children:[(0,s.jsx)("span",{className:"ml-2 h-full flex items-center cursor-not-allowed text-accents-5",children:(0,s.jsx)(n.zx,{variant:"ghost",Component:"a",href:"https://github.com/vercel/examples/tree/main",target:"_blank",rel:"noreferrer",children:"More Examples →"})}),(0,s.jsx)("span",{className:"ml-2 h-full flex items-center cursor-not-allowed text-accents-5",children:(0,s.jsx)(b,{...l,repositoryUrl:a,projectName:(null==l?void 0:l.projectName)||o,repositoryName:(null==l?void 0:l.repositoryName)||o})})]})})]})})},M=e=>{let{children:t,...r}=e;return(0,s.jsxs)("div",{className:"mx-auto h-screen flex flex-col",children:[(0,s.jsx)(w,{...r}),(0,s.jsx)("div",{className:"flex flex-auto",children:t})]})};var N=Object.assign(function(){return(0,s.jsx)(y,{})},{Layout:M})}}]);