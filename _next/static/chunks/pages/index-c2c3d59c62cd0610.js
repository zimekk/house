(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7706:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7372)}])},7372:function(e,t,r){"use strict";r.r(t),r.d(t,{DeployButton:function(){return N},Nav:function(){return M},default:function(){return w}});var s=r(7458),n=r(704),o=r(2445),l=r(2983),a=r(8384),i=r(6854),c=r(9773),x=r(4411),h=r(3492);function u(e){let{w:t,h:r,x:n,y:o}=e;return(0,s.jsxs)("mesh",{position:[0,o+r/2,-n-t/2],children:[(0,s.jsx)("boxGeometry",{args:[.5,r,t]}),(0,s.jsx)("meshBasicMaterial",{transparent:!0}),(0,s.jsx)(c.w,{})]})}function m(e){let{w:t,h:r,x:n,y:o}=e,a=(0,l.useMemo)(()=>[{w:t-.2,h:r-.2-0,x:n+.1,y:o+.1+0}],[]),i=(0,l.useMemo)(()=>{let e=d(t,r,n,o),s=j(e);return a.forEach(e=>{let{w:t,h:r,x:n,y:o}=e,l=d(t,r,n,o);s.holes.push(j(l))}),s},[]);return(0,s.jsx)("group",{children:(0,s.jsxs)(x.WL,{args:[i,{depth:.2,steps:1,bevelEnabled:!1}],position:[0,0,0],rotation:[0,Math.PI/2,0],children:[(0,s.jsx)("meshBasicMaterial",{transparent:!0}),(0,s.jsx)(c.w,{})]})})}function p(e){let{w:t,h:r,x:n,y:o}=e,a=(0,l.useMemo)(()=>[{w:t-.1,h:r-.1-.1,x:n+.05,y:o+.05+.1}],[]),i=(0,l.useMemo)(()=>{let e=d(t,r,n,o),s=j(e);return a.forEach(e=>{let{w:t,h:r,x:n,y:o}=e,l=d(t,r,n,o);s.holes.push(j(l))}),s},[]);return(0,s.jsxs)("group",{children:[(0,s.jsxs)(x.WL,{args:[i,{depth:.05,steps:1,bevelEnabled:!1}],position:[.1,0,0],rotation:[0,Math.PI/2,0],children:[(0,s.jsx)("meshBasicMaterial",{transparent:!0}),(0,s.jsx)(c.w,{})]}),(0,s.jsx)(u,{w:t,x:n,y:o,h:.1}),a.map((e,t)=>(0,s.jsx)(m,{...e},t))]})}function d(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return[[r,s],[e+r,s],[e+r,s+t],[r,s+t]]}let j=e=>e.reduce((e,t,r)=>{let[s,n]=t;return e[r>0?"lineTo":"moveTo"](s,n)},new h.Shape);function f(e){let{x:t,y:r,v:n,rotate:o}=e,a=(0,l.useMemo)(()=>n>3?[{w:n-1,h:1,x:.5,y:.5}]:[],[]),i=(0,l.useMemo)(()=>{let e=d(n,2),t=j(e);return a.forEach(e=>{let{w:r,h:s,x:n,y:o}=e,l=d(r,s,n,o);t.holes.push(j(l))}),t},[]);return(0,s.jsxs)("group",{position:[t,0,-r],rotation:[0,-o,0],children:[(0,s.jsxs)(x.WL,{args:[i,{depth:.2,steps:1,bevelEnabled:!1}],rotation:[0,Math.PI/2,0],children:[(0,s.jsx)("meshBasicMaterial",{transparent:!0}),(0,s.jsx)(c.w,{})]}),a.map((e,t)=>(0,s.jsx)(p,{...e},t))]})}function g(e){let{edges:t,walls:r}=(0,l.useMemo)(()=>{let e=[[1,5],[-1,5],[-1,4],[-1,2],[1,1],[-1,3]],{edges:t,walls:r}=e.reduce((e,t)=>{let{vector:r,edges:s,walls:n,rotate:o}=e,[l,a]=t;return((e,t,r)=>{let[o,l]=t;return{rotate:r,vector:e,edges:s.concat([[o+a*e[0],l+a*e[1]]]),walls:n.concat([{rotate:r,x:o,y:l,v:a}])}})({0:r,1:[r[1],-1*r[0]],[-1]:[-1*r[1],r[0]]}[l],s.length>0?s[s.length-1]:[0,0],o+l*Math.PI/2)},{rotate:0,vector:[0,1],edges:[],walls:[]});return console.log({vectors:e,edges:t,walls:r}),{edges:t,walls:r}},[]),n=(0,l.useMemo)(()=>{let e=j(t);return e},[t]);return(0,s.jsxs)("group",{...e,children:[(0,s.jsxs)(x.WL,{args:[n,{depth:-1,steps:1,bevelEnabled:!1}],rotation:[-Math.PI/2,0,0],children:[(0,s.jsx)("meshBasicMaterial",{transparent:!0}),(0,s.jsx)(c.w,{})]}),r.map((e,t)=>{let{rotate:r,x:n,y:o,v:l}=e;return(0,s.jsx)(f,{rotate:r,x:n,y:o,v:l},t)})]})}function v(e){return(0,s.jsx)("group",{...e,children:(0,s.jsx)(g,{})})}function y(e){let t=(0,l.useRef)(),[r,n]=(0,l.useState)(!1),[o,a]=(0,l.useState)(!1);return(0,s.jsxs)("mesh",{...e,ref:t,scale:o?1.5:1,onClick:e=>a(!o),onPointerOver:e=>n(!0),onPointerOut:e=>n(!1),children:[(0,s.jsx)("boxGeometry",{args:[1,1,1]}),(0,s.jsx)("meshBasicMaterial",{color:r?"hotpink":"orange"})]})}function b(){return(0,s.jsxs)(a.Xz,{children:[(0,s.jsx)("ambientLight",{intensity:.5}),(0,s.jsx)("spotLight",{position:[10,10,10],angle:.15,penumbra:1}),(0,s.jsx)("pointLight",{position:[-10,-10,-10]}),(0,s.jsx)(y,{position:[-1.2,-1.5,0]}),(0,s.jsx)(y,{position:[1.2,-1.5,0]}),(0,s.jsx)(v,{position:[-2,-2,2]}),(0,s.jsx)("gridHelper",{args:[20,20,"#4D089A","#4D089A"],position:[0,-2,0],rotation:[0,0,0]}),(0,s.jsx)(i.z,{makeDefault:!0,dampingFactor:.3})]})}function w(){return(0,s.jsx)(b,{})}let N=e=>{var t;let r=[["repository-url",e.repositoryUrl],["env",null===(t=e.env)||void 0===t?void 0:t.join(",")],["project-name",e.projectName],["repository-name",e.repositoryName]],o=r.reduce((e,t)=>{let[r,s]=t;return s&&e.push("".concat(r,"=").concat(encodeURIComponent(s))),e},[]).join("&");return(0,s.jsx)(n.zx,{Component:"a",href:e.customDeployUrl?e.customDeployUrl:"".concat("https://vercel.com/new/clone").concat(o?"?".concat(o):""),target:"_blank",rel:"noreferrer",children:"Clone & Deploy"})},M=e=>{let{title:t,links:r,path:o,deployButton:l}=e,a=(null==l?void 0:l.repositoryUrl)||"".concat("https://github.com/vercel/examples/tree/main","/").concat(o);return(0,s.jsx)("nav",{className:"border-b border-gray-200 py-5 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]",children:(0,s.jsxs)("div",{className:"flex items-center lg:px-6 px-8 mx-auto max-w-7xl",children:[(0,s.jsxs)("div",{className:"flex flex-row items-center",children:[(0,s.jsx)(n.rU,{href:"/",children:(0,s.jsx)("span",{children:(0,s.jsxs)("svg",{height:"26",viewBox:"0 0 75 65",fill:"#000",children:[(0,s.jsx)("title",{children:t}),(0,s.jsx)("path",{d:"M37.59.25l36.95 64H.64l36.95-64z"})]})})}),(0,s.jsxs)("ul",{className:"flex items-center content-center",children:[(0,s.jsx)("li",{className:"ml-2 text-gray-200",children:(0,s.jsx)("svg",{viewBox:"0 0 24 24",width:"32",height:"32",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:(0,s.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})})}),(0,s.jsx)("li",{className:"font-medium",style:{letterSpacing:".01px"},children:r.map(e=>(0,s.jsx)(n.rU,{href:"/".concat(e),style:{marginRight:".5em"},children:e},e))})]})]}),(0,s.jsx)("div",{className:"flex-1 justify-end hidden md:flex",children:(0,s.jsxs)("nav",{className:"flex-row inline-flex items-center",children:[(0,s.jsx)("span",{className:"ml-2 h-full flex items-center cursor-not-allowed text-accents-5",children:(0,s.jsx)(n.zx,{variant:"ghost",Component:"a",href:"https://github.com/vercel/examples/tree/main",target:"_blank",rel:"noreferrer",children:"More Examples →"})}),(0,s.jsx)("span",{className:"ml-2 h-full flex items-center cursor-not-allowed text-accents-5",children:(0,s.jsx)(N,{...l,repositoryUrl:a,projectName:(null==l?void 0:l.projectName)||o,repositoryName:(null==l?void 0:l.repositoryName)||o})})]})})]})})};w.Layout=e=>{let{children:t,...r}=e;return(0,s.jsxs)("div",{className:"mx-auto h-screen flex flex-col",children:[(0,s.jsx)(M,{...r}),(0,s.jsx)("div",{className:"flex-auto",children:t}),(0,s.jsxs)("footer",{className:"py-10 w-full mt-auto border-t flex items-center justify-center bg-accents-1 z-20",children:[(0,s.jsx)("span",{className:"text-primary",children:"Created by"}),(0,s.jsx)("a",{href:"https://vercel.com","aria-label":"Vercel.com Link",target:"_blank",rel:"noreferrer",className:"text-black",children:(0,s.jsx)(o.Z,{className:"inline-block h-6 ml-3 text-primary",alt:"Vercel.com Logo"})})]})]})}}},function(e){e.O(0,[547,537,238,774,888,179],function(){return e(e.s=7706)}),_N_E=e.O()}]);