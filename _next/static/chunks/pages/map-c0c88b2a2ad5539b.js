(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{51:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/map",function(){return r(7665)}])},9407:(e,t,r)=>{"use strict";r.r(t),r.d(t,{DeployButton:()=>o,Layout:()=>a,Nav:()=>l,default:()=>c});var i=r(1549),s=r(4439);function n(){return(0,i.jsx)("div",{children:(0,i.jsx)("h1",{children:"house"})})}let o=e=>{var t;let r=[["repository-url",e.repositoryUrl],["env",null===(t=e.env)||void 0===t?void 0:t.join(",")],["project-name",e.projectName],["repository-name",e.repositoryName]].reduce((e,t)=>{let[r,i]=t;return i&&e.push("".concat(r,"=").concat(encodeURIComponent(i))),e},[]).join("&");return(0,i.jsx)(s.zx,{Component:"a",href:e.customDeployUrl?e.customDeployUrl:"".concat("https://vercel.com/new/clone").concat(r?"?".concat(r):""),target:"_blank",rel:"noreferrer",children:"Clone & Deploy"})},l=e=>{let{title:t,links:r,path:n,deployButton:l}=e,a=(null==l?void 0:l.repositoryUrl)||"".concat("https://github.com/vercel/examples/tree/main","/").concat(n);return(0,i.jsx)("nav",{className:"border-b border-gray-200 py-5 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]",children:(0,i.jsxs)("div",{className:"flex items-center lg:px-6 px-8 mx-auto max-w-7xl",children:[(0,i.jsxs)("div",{className:"flex flex-row items-center",children:[(0,i.jsx)(s.rU,{href:"/",children:(0,i.jsx)("span",{children:(0,i.jsxs)("svg",{height:"26",viewBox:"0 0 75 65",fill:"#000",children:[(0,i.jsx)("title",{children:t}),(0,i.jsx)("path",{d:"M37.59.25l36.95 64H.64l36.95-64z"})]})})}),(0,i.jsxs)("ul",{className:"flex items-center content-center",children:[(0,i.jsx)("li",{className:"ml-2 text-gray-200",children:(0,i.jsx)("svg",{viewBox:"0 0 24 24",width:"32",height:"32",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:(0,i.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})})}),(0,i.jsxs)("li",{className:"font-medium",style:{letterSpacing:".01px"},children:[r.map(e=>(0,i.jsx)(s.rU,{href:"/".concat(e),style:{marginRight:".5em"},children:e},e)),(0,i.jsx)("a",{href:"tmp/catch-ext.zip",children:"ext"})]})]})]}),(0,i.jsx)("div",{className:"flex-1 justify-end hidden md:flex",children:(0,i.jsxs)("nav",{className:"flex-row inline-flex items-center",children:[(0,i.jsx)("span",{className:"ml-2 h-full flex items-center cursor-not-allowed text-accents-5",children:(0,i.jsx)(s.zx,{variant:"ghost",Component:"a",href:"https://github.com/vercel/examples/tree/main",target:"_blank",rel:"noreferrer",children:"More Examples →"})}),(0,i.jsx)("span",{className:"ml-2 h-full flex items-center cursor-not-allowed text-accents-5",children:(0,i.jsx)(o,{...l,repositoryUrl:a,projectName:(null==l?void 0:l.projectName)||n,repositoryName:(null==l?void 0:l.repositoryName)||n})})]})})]})})},a=e=>{let{children:t,...r}=e;return(0,i.jsxs)("div",{className:"mx-auto h-screen flex flex-col",children:[(0,i.jsx)(l,{...r}),(0,i.jsx)("div",{className:"flex flex-auto",children:t})]})},c=Object.assign(function(){return(0,i.jsx)(n,{})},{Layout:a})},7665:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>A});var i=r(1549),s=r(4194),n=r(2804),o=r(3334),l=r(7308),a=r(5037),c=r(1672),u=r(5922),h=r(5743),d=r(4582),p=r(7702),g=r(4431),m=r(7576),x=r(6289),f=r(6712);class j extends f.Z{constructor(e){super({attributions:void 0!==(e=e||{}).attributions?e.attributions:['&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.'],attributionsCollapsible:!1,cacheSize:e.cacheSize,crossOrigin:void 0!==e.crossOrigin?e.crossOrigin:"anonymous",interpolate:e.interpolate,maxZoom:void 0!==e.maxZoom?e.maxZoom:19,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,transition:e.transition,url:void 0!==e.url?e.url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",wrapX:e.wrapX,zDirection:e.zDirection})}}var _=r(16),v=r(8616);function w(e,t){let r=(""+e).split("."),i=(""+t).split(".");for(let e=0;e<Math.max(r.length,i.length);e++){let t=parseInt(r[e]||"0",10),s=parseInt(i[e]||"0",10);if(t>s)return 1;if(s>t)return -1}return 0}var E=r(8452),y=r(2356);let R="1.3.0";function N(e,t){return Object.assign({REQUEST:t,SERVICE:"WMS",VERSION:R,FORMAT:"image/png",STYLES:"",TRANSPARENT:!0},e)}var b=r(6039),T=r(2186);class S extends _.Z{constructor(e){let t=Object.assign({},(e=e||{}).params);super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileClass:e.tileClass,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition,zDirection:e.zDirection}),this.gutter_=void 0!==e.gutter?e.gutter:0,this.params_=t,this.v13_=!0,this.serverType_=e.serverType,this.hidpi_=void 0===e.hidpi||e.hidpi,this.tmpExtent_=(0,y.lJ)(),this.updateV13_(),this.setKey(this.getKeyForParams_())}getFeatureInfoUrl(e,t,r,i){let s=(0,x.U2)(r),n=this.getProjection()||s,o=this.getTileGrid();o||(o=this.getTileGridForProjection(n));let l=(0,x.vs)(e,s,n),a=(0,b.aA)(n,s,e,t),c=o.getZForResolution(a,this.zDirection),u=o.getResolution(c),h=o.getTileCoordForCoordAndZ(l,c);if(o.getResolutions().length<=h[0])return;let d=o.getTileCoordExtent(h,this.tmpExtent_),p=this.gutter_;0!==p&&(d=(0,y.f3)(d,u*p,d));let g={QUERY_LAYERS:this.params_.LAYERS};Object.assign(g,N(this.params_,"GetFeatureInfo"),i);let m=Math.floor((l[0]-d[0])/u),f=Math.floor((d[3]-l[1])/u);return g[this.v13_?"I":"X"]=m,g[this.v13_?"J":"Y"]=f,this.getRequestUrl_(h,d,1,n||s,g)}getLegendUrl(e,t){if(void 0===this.urls[0])return;let r={SERVICE:"WMS",VERSION:R,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(void 0===t||void 0===t.LAYER){let e=this.params_.LAYERS;if(!(!Array.isArray(e)||1===e.length))return;r.LAYER=e}if(void 0!==e){let t=this.getProjection()?this.getProjection().getMetersPerUnit():1;r.SCALE=e*t/28e-5}return Object.assign(r,t),(0,v.B5)(this.urls[0],r)}getGutter(){return this.gutter_}getParams(){return this.params_}getRequestUrl_(e,t,r,i,s){let n;let o=this.urls;if(o){if(1==o.length)n=o[0];else{let t=(0,E.$W)((0,T.vp)(e),o.length);n=o[t]}return function(e,t,r,i,s,n,o){n=Object.assign({REQUEST:"GetMap"},n);let l=t/r,a=[(0,E.NM)((0,y.dz)(e)/l,4),(0,E.NM)((0,y.Cr)(e)/l,4)];if(1!=r)switch(o){case"geoserver":let c=90*r+.5|0;"FORMAT_OPTIONS"in n?n.FORMAT_OPTIONS+=";dpi:"+c:n.FORMAT_OPTIONS="dpi:"+c;break;case"mapserver":n.MAP_RESOLUTION=90*r;break;case"carmentaserver":case"qgis":n.DPI=90*r;break;default:throw Error("Unknown `serverType` configured")}return function(e,t,r,i,s){s.WIDTH=r[0],s.HEIGHT=r[1];let n=i.getAxisOrientation(),o=w(s.VERSION,"1.3")>=0;s[o?"CRS":"SRS"]=i.getCode();let l=o&&n.startsWith("ne")?[t[1],t[0],t[3],t[2]]:t;return s.BBOX=l.join(","),(0,v.B5)(e,s)}(s,e,a,i,n)}(t,(this.tileGrid||this.getTileGridForProjection(i)).getResolution(e[0]),r,i,n,s,this.serverType_)}}getTilePixelRatio(e){return this.hidpi_&&void 0!==this.serverType_?e:1}getKeyForParams_(){let e=0,t=[];for(let r in this.params_)t[e++]=r+"-"+this.params_[r];return t.join("/")}updateParams(e){Object.assign(this.params_,e),this.updateV13_(),this.setKey(this.getKeyForParams_())}updateV13_(){let e=this.params_.VERSION||R;this.v13_=w(e,"1.3")>=0}tileUrlFunction(e,t,r){let i=this.getTileGrid();if(i||(i=this.getTileGridForProjection(r)),i.getResolutions().length<=e[0])return;1==t||this.hidpi_&&void 0!==this.serverType_||(t=1);let s=i.getResolution(e[0]),n=i.getTileCoordExtent(e,this.tmpExtent_),o=this.gutter_;0!==o&&(n=(0,y.f3)(n,s*o,n));let l=Object.assign({},N(this.params_,"GetMap"));return this.getRequestUrl_(e,n,t,r,l)}}var O=r(6603),P=r(6546),C=r(670),I=r(8183),M=r(3437);r(6989);var F=r(557),L=r.n(F);class Z extends n.Z{handleRotateNorth(){let e=this.getMap();e&&(console.log(e.getView().getRotation()),e.getView().setRotation(-.19))}constructor(e={}){let t=document.createElement("button");t.innerHTML="N";let r=document.createElement("div");r.className="".concat(L().RotateNorth," ol-unselectable ol-control"),r.appendChild(t),Object.assign(e,{element:r}),super(e),t.addEventListener("click",this.handleRotateNorth.bind(this),!1)}}function k(){let[e]=(0,s.useState)(()=>({type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[20.75907447322544,52.13477143461034],[20.75974786143117,52.13469118662698],[20.759971036190713,52.13442983819979],[20.758997907993905,52.134528896721974]]]}}]})),[t,r]=(0,s.useState)(),n=(0,s.useRef)(null),f=(0,s.useRef)();(0,s.useEffect)(()=>{let t=new O.Z({features:new u.Z({featureProjection:"EPSG:3857"}).readFeatures(e)}),r=new g.Z({source:t,style:new P.ZP({fill:new C.Z({color:"rgba(255, 255, 255, 0.2)"}),stroke:new I.Z({color:"#ffcc33",width:2}),image:new M.Z({radius:7,fill:new C.Z({color:"#ffcc33"})})})}),i=new a.Z({target:n.current||void 0,layers:[new m.Z({source:new j}),new m.Z({source:new S({url:"https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow",params:{LAYERS:"dzialki,numery_dzialek,budynki",TILED:!0}})}),r].filter(Boolean),view:new c.ZP({projection:"EPSG:3857",center:(0,x.mi)([20.75854578484479,52.13468296989453]),zoom:18}),controls:(0,o.c)().extend([new Z,new l.Z])}),s=new h.Z({source:t});i.addInteraction(s);let v=new d.ZP({source:t,type:"Polygon"});i.addInteraction(v);let w=new p.Z({source:t});i.addInteraction(w),i.on("click",_),f.current=i},[]),(0,s.useEffect)(()=>{},[e]);let _=e=>{if(!f.current)return;let t=f.current.getCoordinateFromPixel(e.pixel);r((0,x.vs)(t,"EPSG:3857","EPSG:4326"))};return(0,i.jsxs)("div",{className:L().App,children:[(0,i.jsx)("h1",{children:"map"}),(0,i.jsx)("div",{ref:n,className:L().Map}),(0,i.jsx)("div",{children:JSON.stringify(t,null,2)})]})}let A=Object.assign(function(){return(0,i.jsx)(k,{})},{Layout:r(9407).Layout})},557:e=>{e.exports={App:"styles_App___bI2u",Map:"styles_Map__QRxaj",RotateNorth:"styles_RotateNorth__KYoDl"}}},e=>{var t=t=>e(e.s=t);e.O(0,[439,974,888,774,179],()=>t(51)),_N_E=e.O()}]);