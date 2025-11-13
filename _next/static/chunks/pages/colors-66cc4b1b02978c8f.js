(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2196],{7511:e=>{e.exports={Color:"styles_Color__Nl1S6"}},17211:function(e,o,r){var n,l;void 0===(l="function"==typeof(n=function(){var e=/^(?:NCS|NCS\sS)\s(\d{2})(\d{2})-(N|R|G|B|Y)(\d{2})?(R|G|B|Y)?$/;function o(o){if(null===(o=o.trim().toUpperCase().match(e)))return!1;var r=parseInt(o[1],10),n=parseInt(o[2],10),l=o[3],A=parseInt(o[4],10)||0;if("N"!==l){var a,i,s,c,R,d,t,L,m=1.05*r-5.25;return"Y"===l&&A<=60?a=1:"Y"===l&&A>60||"R"===l&&A<=80?a=(Math.sqrt(14884-Math.pow("Y"===l?A-60:A+40,2))-22)/100:"R"===l&&A>80||"B"===l?a=0:"G"===l&&(a=(Math.sqrt(33800-Math.pow(A-170,2))-70)/100),"Y"===l&&A<=80?i=0:"Y"===l&&A>80||"R"===l&&A<=60?i=(104-Math.sqrt(11236-Math.pow(s="Y"===l?A-80+20.5:A+20+20.5,2)))/100:"R"===l&&A>60||"B"===l&&A<=80?i=(Math.sqrt(1e4-Math.pow("R"===l?A-60-60:A+40-60,2))-10)/100:"B"===l&&A>80||"G"===l&&A<=40?i=(122-Math.sqrt(19881-Math.pow("B"===l?A-80-131:A+20-131,2)))/100:"G"===l&&A>40&&(i=0),"Y"===l?c=(85-.85*A)/100:"R"===l&&A<=60?c=0:"R"===l&&A>60?c=(67.5-Math.sqrt(5776-Math.pow(A-60+35,2)))/100:"B"===l&&A<=60?c=(6.5+Math.sqrt(7044.5-Math.pow(A-68.5,2)))/100:"B"===l&&A>60||"G"===l&&A<=60?c=.9:"G"===l&&A>60&&(c=(90-1/8*(A-60))/100),L=1/Math.max(R=((s=(a+c+i)/3)-a)*(100-n)/100+a,d=(s-c)*(100-n)/100+c,t=(s-i)*(100-n)/100+i),{R:parseInt(R*L*(100-m)/100*255,10),G:parseInt(d*L*(100-m)/100*255,10),B:parseInt(t*L*(100-m)/100*255,10)}}var C=parseInt((1-r/100)*255,10);return{R:C,G:C,B:C}}function r(e){return e.toString(16).length>1?e.toString(16):"0"+e.toString(16)}return{hex:function(e){var n;return e&&o(e)?"#"+r((n=o(e)).R)+r(n.G)+r(n.B):null},rgb:function(e){var r;return e&&o(e)?"rgb("+[(r=o(e)).R,r.G,r.B].join(",")+")":null}}})?n.call(o,r,o,e):n)||(e.exports=l)},29540:(e,o,r)=>{"use strict";r.r(o),r.d(o,{default:()=>y});var n=r(45182),l=r(39950),A=r(7511),a=r.n(A);function i({color:e="",...o}){return(0,n.jsx)("div",{className:a().Color,style:{background:e}})}var s=r(73304),c=r.n(s),R=r(17211),d=r.n(R);let t=e=>{var o,r;let n,l;return e.match(/RAL/)?{ral:n=(o=e.match(/RAL (\d+)/))?o[1]:"",rgb:c()(n)}:{ral:l=(r=e.match(/(NCS S \d+)\s*-\s*(\S+)/))?`${r[1]}-${r[2]}`:"",rgb:d().hex(l)}};var L=r(60789),m=r.n(L);function C({checked:e,onCheck:o,ral:r,rgb:l}){return(0,n.jsxs)("div",{className:m().Samples,children:[(0,n.jsx)("span",{style:{backgroundColor:t(r).rgb},children:(0,n.jsxs)("label",{children:[o&&(0,n.jsx)("input",{type:"checkbox",checked:e,onClick:({target:e})=>e instanceof HTMLInputElement&&o(e.checked)}),r]})}),(0,n.jsx)("span",{style:{backgroundColor:l},children:l})]})}function h({list:e}){let[o,r]=(0,l.useState)(()=>["RAL 7036","RAL 7037","RAL 8022","RAL 7016","RAL 7022","RAL 7031","RAL 6022","RAL 5008","RAL 5011","RAL 9005","RAL 9011","RAL 7021","RAL 5004"]),A=(0,l.useMemo)(()=>e.filter(({name:e})=>o.includes(e)),[e,o]);return(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Rockpanel Colours - Wybrane pr\xf3bki"}),(0,n.jsxs)("div",{className:m().Columns,style:{position:"relative"},children:[(0,n.jsxs)("div",{className:m().Overflow,children:[(0,n.jsx)(C,{ral:"RAL 9007",rgb:"#4d4d4d"}),(0,n.jsx)(C,{ral:"RAL 9007",rgb:"#434343"}),(0,n.jsx)(C,{ral:"RAL 9007",rgb:"#494a52"}),A.map(({name:e,color:l})=>(0,n.jsx)(C,{ral:e,rgb:l,checked:o.includes(e),onCheck:o=>r(r=>o?r.concat(e):r.filter(o=>e!==o))}))]}),(0,n.jsx)("div",{className:m().Overflow,children:e.map(({name:e,color:l})=>(0,n.jsx)(C,{ral:e,rgb:l,checked:o.includes(e),onCheck:o=>r(r=>o?r.concat(e):r.filter(o=>e!==o))}))})]})]})}let B=[{id:"35",color:"#E1DAC7",name:"RAL 1013"},{id:"36",color:"#E3D3B5",name:"RAL 1015"},{id:"37",color:"#1E2B3D",name:"RAL 5011"},{id:"38",color:"#27362A",name:"RAL 6009"},{id:"39",color:"#8E969D",name:"RAL 7001"},{id:"40",color:"#9B9B9B",name:"RAL 7004"},{id:"41",color:"#585D5E",name:"RAL 7012"},{id:"42",color:"#383E42",name:"RAL 7016"},{id:"43",color:"#303234",name:"RAL 7021"},{id:"44",color:"#4C4A44",name:"RAL 7022"},{id:"45",color:"#918E85",name:"RAL 7030"},{id:"46",color:"#5D686D",name:"RAL 7031"},{id:"47",color:"#C5C7C4",name:"RAL 7035"},{id:"48",color:"#7A7B7A",name:"RAL 7037"},{id:"49",color:"#6A665E",name:"RAL 7039"},{id:"50",color:"#4F3A2A",name:"RAL 8028"},{id:"51",color:"#E7E1D2",name:"RAL 9001"},{id:"52",color:"#D6D5CB",name:"RAL 9002"},{id:"53",color:"#ECECE7",name:"RAL 9003"},{id:"54",color:"#0E0E10",name:"RAL 9005"},{id:"55",color:"#F0EDE1",name:"RAL 9010"},{id:"56",color:"#F0F1EA",name:"RAL 9016"},{id:"57",color:"#CDAA6D",name:"RAL 1002"},{id:"58",color:"#CC5D29",name:"RAL 2010"},{id:"59",color:"#982323",name:"RAL 3001"},{id:"60",color:"#691B23",name:"RAL 3004"},{id:"61",color:"#663029",name:"RAL 3009"},{id:"62",color:"#A43C30",name:"RAL 3016"},{id:"63",color:"#004E7C",name:"RAL 5010"},{id:"64",color:"#7CADAC",name:"RAL 6034"},{id:"65",color:"#756A5E",name:"RAL 7006"},{id:"66",color:"#46494F",name:"RAL 7024"},{id:"67",color:"#979392",name:"RAL 7036"},{id:"68",color:"#AFB1A9",name:"RAL 7038"},{id:"69",color:"#1A1719",name:"RAL 8022"},{id:"70",color:"#A05729",name:"RAL 8023"},{id:"71",color:"#27292B",name:"RAL 9011"},{id:"72",color:"#9A3D28",name:"RAL 040 40 50"},{id:"73",color:"#7E7370",name:"RAL 040 50 05"},{id:"74",color:"#7E756E",name:"RAL 060 50 05"},{id:"75",color:"#B95C00",name:"RAL 060 50 70"},{id:"76",color:"#B4ABA4",name:"RAL 060 70 05"},{id:"77",color:"#E39B3C",name:"RAL 070 70 60"},{id:"78",color:"#CCC7BD",name:"RAL 080 80 05"},{id:"79",color:"#847712",name:"RAL 095 50 50"},{id:"80",color:"#B0AB98",name:"RAL 095 70 10"},{id:"81",color:"#C7C7BC",name:"RAL 100 80 05"},{id:"82",color:"#5D7E48",name:"RAL 130 50 30"},{id:"83",color:"#B7CCD7",name:"RAL 240 80 10"},{id:"84",color:"#476175",name:"RAL 250 40 15"},{id:"140",color:"#767675",name:"RAL 000 50 00"},{id:"141",color:"#482029",name:"RAL 010 20 20"},{id:"142",color:"#34292A",name:"RAL 020 20 05"},{id:"143",color:"#CD462D",name:"RAL 040 50 70"},{id:"144",color:"#513E35",name:"RAL 050 30 10"},{id:"145",color:"#8C4826",name:"RAL 050 40 40"},{id:"146",color:"#583D29",name:"RAL 060 30 20"},{id:"147",color:"#9A6C4A",name:"RAL 060 50 30"},{id:"148",color:"#C5A38A",name:"RAL 060 70 20"},{id:"149",color:"#CB7B03",name:"RAL 070 60 75"},{id:"150",color:"#71542A",name:"RAL 075 40 30"},{id:"151",color:"#48433B",name:"RAL 080 30 05"},{id:"152",color:"#4A4031",name:"RAL 080 30 10"},{id:"153",color:"#625D54",name:"RAL 080 40 05"},{id:"154",color:"#D0C49E",name:"RAL 090 80 20"},{id:"155",color:"#BBAB00",name:"RAL 095 70 70"},{id:"156",color:"#605E3B",name:"RAL 100 40 20"},{id:"157",color:"#EBE5BB",name:"RAL 100 90 20"},{id:"158",color:"#EBE57C",name:"RAL 100 90 50"},{id:"159",color:"#A8AE86",name:"RAL 110 70 20"},{id:"160",color:"#A3B44F",name:"RAL 110 70 50"},{id:"161",color:"#BECDA5",name:"RAL 120 80 20"},{id:"162",color:"#789864",name:"RAL 130 60 30"},{id:"163",color:"#C0CAB7",name:"RAL 130 80 10"},{id:"164",color:"#B7CDA8",name:"RAL 130 80 20"},{id:"165",color:"#839382",name:"RAL 140 60 10"},{id:"166",color:"#BACCBD",name:"RAL 150 80 10"},{id:"167",color:"#557F68",name:"RAL 160 50 20"},{id:"168",color:"#4B6157",name:"RAL 170 40 10"},{id:"169",color:"#283330",name:"RAL 180 20 05"},{id:"170",color:"#3D6561",name:"RAL 190 40 15"},{id:"171",color:"#6A7777",name:"RAL 200 50 05"},{id:"172",color:"#00505A",name:"RAL 210 30 30"},{id:"173",color:"#0E666D",name:"RAL 210 40 25"},{id:"174",color:"#CDEAE7",name:"RAL 210 90 10"},{id:"175",color:"#1C3238",name:"RAL 220 20 10"},{id:"176",color:"#4C6267",name:"RAL 220 40 10"},{id:"177",color:"#7D959B",name:"RAL 220 60 10"},{id:"178",color:"#374953",name:"RAL 240 30 10"},{id:"179",color:"#BDC8CC",name:"RAL 240 80 05"},{id:"180",color:"#697986",name:"RAL 250 50 10"},{id:"181",color:"#15324A",name:"RAL 260 20 20"},{id:"182",color:"#3A465C",name:"RAL 270 30 15"},{id:"183",color:"#D6B025",name:"RAL 1012"},{id:"184",color:"#DBA400",name:"RAL 1032"},{id:"185",color:"#D1654E",name:"RAL 2012"},{id:"186",color:"#3D2022",name:"RAL 3007"},{id:"187",color:"#D7A0A6",name:"RAL 3015"},{id:"188",color:"#C92B26",name:"RAL 3028"},{id:"189",color:"#641D39",name:"RAL 4004"},{id:"190",color:"#47243C",name:"RAL 4007"},{id:"191",color:"#384E6F",name:"RAL 5000"},{id:"192",color:"#1D4C64",name:"RAL 5001"},{id:"193",color:"#263855",name:"RAL 5003"},{id:"194",color:"#1A1E28",name:"RAL 5004"},{id:"195",color:"#2D3A44",name:"RAL 5008"},{id:"196",color:"#007577",name:"RAL 5021"},{id:"197",color:"#2B2C5A",name:"RAL 5022"},{id:"198",color:"#316834",name:"RAL 6001"},{id:"199",color:"#7A765A",name:"RAL 6013"},{id:"200",color:"#3C3D36",name:"RAL 6015"},{id:"201",color:"#393327",name:"RAL 6022"},{id:"202",color:"#305442",name:"RAL 6028"},{id:"203",color:"#5C6058",name:"RAL 7009"},{id:"204",color:"#585C56",name:"RAL 7010"},{id:"205",color:"#7E8274",name:"RAL 7033"},{id:"206",color:"#99632B",name:"RAL 8001"},{id:"207",color:"#765038",name:"RAL 8024"},{id:"208",color:"#F6CBCE",name:"NCS S 0520 - R10B"},{id:"209",color:"#62CABF",name:"NCS S 1040 - B70G"},{id:"210",color:"#AAC1BD",name:"NCS S 2010 - B70G"},{id:"211",color:"#2294BD",name:"NCS S 2050 - B"},{id:"212",color:"#CAAC48",name:"NCS S 2050 - Y"},{id:"213",color:"#009B76",name:"NCS S 2060 - B90G"},{id:"214",color:"#5B9A2F",name:"NCS S 2070 - G30Y"},{id:"215",color:"#BD9D64",name:"NCS S 3030 - Y10R"},{id:"216",color:"#268FA0",name:"NCS S 3040 - B20G"},{id:"217",color:"#88688E",name:"NCS S 4030 - R50B"},{id:"218",color:"#8B734F",name:"NCS S 5020 - Y10R"},{id:"219",color:"#EF5C59",name:"NCS S 0570 - Y90R"}].filter(({name:e})=>!e.match(/RAL \d{3} \d{2} \d{2}/));var x=r(45747),D=r.n(x);let E=e=>e.split("\n").filter(Boolean).map(e=>(([e,o=e])=>({name:e,...t(o)}))(e.split("	")));function u({list:e}){let o=(0,l.useMemo)(()=>e,[e]);return(0,n.jsxs)("table",{className:D().Table,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{style:{width:50}}),(0,n.jsx)("th",{}),(0,n.jsx)("th",{style:{width:150},children:"RAL"}),(0,n.jsx)("th",{style:{width:150},children:"RGB"})]})}),(0,n.jsx)("tbody",{children:o.map(({name:e,ral:o,rgb:r},l)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i,{color:r})}),(0,n.jsx)("td",{children:e}),(0,n.jsx)("td",{children:o}),(0,n.jsx)("td",{children:r})]},l))})]})}function j(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"colors"}),(0,n.jsx)("div",{className:D().Columns,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Galeco - Kolorystyka / Typ rynny / Rozmiar rury - Kolor RAL 125 / 70x80"}),(0,n.jsx)(u,{list:E(`
Grafitowy	RAL 7015
Czarny	RAL 9005
Ciemnosrebrny	RAL 9007`)})]})}),(0,n.jsx)("div",{className:D().Columns,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Galeco - Kolorystyka maskownic - Kolor RAL"}),(0,n.jsx)(u,{list:E(`
Grafitowy	RAL 7015
Grafitowy MAT	RAL 7016
Czarny	RAL 9005
Czarny MAT	RAL 9005
Ciemnosrebrny	RAL 9007`)})]})}),(0,n.jsx)("div",{className:D().Columns,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Siba Modern - Dostępne kolory maskownic"}),(0,n.jsx)(u,{list:E(`
Czarny	RAL 9005
Antracytowy	RAL 7021
Grafitowy	RAL 7024
Szary	RAL 7045`)})]})}),(0,n.jsx)("div",{className:D().Columns,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"H\xf6rmann - Kolory bram segmentowych ze stali"}),(0,n.jsx)(u,{list:E(`
czarny ***	RAL 9005
szary łupkowy ***	RAL 7015
antracytowy metallic ***	CH 703
bazaltowy ***	RAL 7012
szary kwarcowy ***	RAL 7039
szare aluminium	RAL 9007
białe aluminium	RAL 9006
szary ***	RAL 7040
szary kamienny ***	RAL 7030
jasnoszary ***	RAL 7035
antracytowy ***	RAL 7016
brązowy ***	RAL 8028
ciemnozielony	RAL 6009
zielony	RAL 6005
jasna kość słoniowa	RAL 1015`)})]})}),(0,n.jsx)("div",{className:D().Columns,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Selt - Kolory konstrukcji"}),(0,n.jsx)(u,{list:E(`
MAT	RAL 9016
MAT	RAL 9010
MAT	RAL 9001
MAT	RAL 1013
MAT	RAL 1015
MAT	RAL 7035
MAT	RAL 7001
MAT	RAL 7022
MAT	RAL 7037
MAT	RAL 7012
MAT	RAL 7015
MAT	RAL 7024
MAT	RAL 7016
MAT	RAL 7021
MAT	RAL 9005
MAT	RAL 9006
MAT	RAL 9007
MAT	DB 703
MAT	FSM 71319
MAT	RAL 8014
MAT	RAL 8016
satyna	VSR 240
MAT	VSR 780
MAT	RAL 7039
MAT	RAL 7043
MAT	RAL 8003`)})]})}),(0,n.jsx)("div",{className:D().Columns,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Lamele Z90 - Dostępne kolory"}),(0,n.jsx)(u,{list:E(`
Kość słoniowa	RAL 1015
Szary Antracyt	RAL 7016
Jasny Szary	RAL 7035
Szary	RAL 7038
Mysi Szary	RAL 7048
Czarny	RAL 9005
Srebrny	RAL 9006
Szare aluminium	RAL 9007
Ultra Biały	RAL 9016
Miedziany brąz	VSR 780`)})]})}),(0,n.jsx)("div",{className:D().Columns,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Velux - Nowy kołnierz EDT do dach\xf3wki płaskiej"}),(0,n.jsx)(u,{list:E(`
szary	RAL 7043
              `)})]})}),(0,n.jsx)("div",{className:D().Columns,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Rockpanel Colours - Dostępne pr\xf3bki"}),(0,n.jsx)(u,{list:E(`
RAL 1013
RAL 1015
RAL 5011
RAL 6009
RAL 7001
RAL 7004
RAL 7012
RAL 7016
RAL 7021
RAL 7022
RAL 7030
RAL 7031
RAL 7035
RAL 7037
RAL 7039
RAL 8028
RAL 9001
RAL 9002
RAL 9003
RAL 9005
RAL 9010
RAL 9016
RAL 1002
RAL 2010
RAL 3001
RAL 3004
RAL 3009
RAL 3016
RAL 5010
RAL 6034
RAL 7006
RAL 7024
RAL 7036
RAL 7038
RAL 8022
RAL 8023
RAL 9011
RAL 1012
RAL 1032
RAL 2012
RAL 3007
RAL 3015
RAL 3028
RAL 4004
RAL 4007
RAL 5000
RAL 5001
RAL 5003
RAL 5004
RAL 5008
RAL 5021
RAL 5022
RAL 6001
RAL 6013
RAL 6015
RAL 6022
RAL 6028
RAL 7009
RAL 7010
RAL 7033
RAL 8001
RAL 8024
NCS S 0520 - R10B
NCS S 1040 - B70G
NCS S 2010 - B70G
NCS S 2050 - B
NCS S 2050 - Y
NCS S 2060 - B90G
NCS S 2070 - G30Y
NCS S 3030 - Y10R
NCS S 3040 - B20G
NCS S 4030 - R50B
NCS S 5020 - Y10R
NCS S 0570 - Y90R`)})]})}),(0,n.jsx)("div",{className:D().Columns,children:(0,n.jsx)(h,{list:B})})]})}let y=Object.assign(function(){return(0,n.jsx)(j,{})},{Layout:r(46704).Layout})},45747:e=>{e.exports={Table:"styles_Table__Zl00H",Name:"styles_Name__9uyae",Columns:"styles_Columns___L7Yc"}},46704:(e,o,r)=>{"use strict";r.r(o),r.d(o,{DeployButton:()=>a,Layout:()=>s,Nav:()=>i,default:()=>c});var n=r(45182),l=r(21192);function A(){return(0,n.jsx)("div",{children:(0,n.jsx)("h1",{children:"house"})})}let a=e=>{let o=[["repository-url",e.repositoryUrl],["env",e.env?.join(",")],["project-name",e.projectName],["repository-name",e.repositoryName]].reduce((e,[o,r])=>(r&&e.push(`${o}=${encodeURIComponent(r)}`),e),[]).join("&");return(0,n.jsx)(l.$n,{Component:"a",href:e.customDeployUrl?e.customDeployUrl:`https://vercel.com/new/clone${o?`?${o}`:""}`,target:"_blank",rel:"noreferrer",children:"Clone & Deploy"})},i=({title:e,links:o,path:r,deployButton:A})=>{let i=A?.repositoryUrl||`https://github.com/vercel/examples/tree/main/${r}`;return(0,n.jsx)("nav",{className:"border-b border-gray-200 py-5 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]",children:(0,n.jsxs)("div",{className:"flex items-center lg:px-6 px-8 mx-auto max-w-7xl",children:[(0,n.jsxs)("div",{className:"flex flex-row items-center",children:[(0,n.jsx)(l.N_,{href:"/",children:(0,n.jsx)("span",{children:(0,n.jsxs)("svg",{height:"26",viewBox:"0 0 75 65",fill:"#000",children:[(0,n.jsx)("title",{children:e}),(0,n.jsx)("path",{d:"M37.59.25l36.95 64H.64l36.95-64z"})]})})}),(0,n.jsxs)("ul",{className:"flex items-center content-center",children:[(0,n.jsx)("li",{className:"ml-2 text-gray-200",children:(0,n.jsx)("svg",{viewBox:"0 0 24 24",width:"32",height:"32",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:(0,n.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})})}),(0,n.jsxs)("li",{className:"font-medium",style:{letterSpacing:".01px"},children:[o.map(e=>(0,n.jsx)(l.N_,{href:`/${e}`,style:{marginRight:".5em"},children:e},e)),(0,n.jsx)("a",{href:"tmp/catch-ext.zip",style:{marginRight:".5em"},children:"ext"}),(0,n.jsx)("a",{href:"api/inspirations",style:{marginRight:".5em"},children:"zip"})]})]})]}),(0,n.jsx)("div",{className:"flex-1 justify-end hidden md:flex",children:(0,n.jsxs)("nav",{className:"flex-row inline-flex items-center",children:[(0,n.jsx)("span",{className:"ml-2 h-full flex items-center cursor-not-allowed text-accents-5",children:(0,n.jsx)(l.$n,{variant:"ghost",Component:"a",href:"https://github.com/vercel/examples/tree/main",target:"_blank",rel:"noreferrer",children:"More Examples →"})}),(0,n.jsx)("span",{className:"ml-2 h-full flex items-center cursor-not-allowed text-accents-5",children:(0,n.jsx)(a,{...A,repositoryUrl:i,projectName:A?.projectName||r,repositoryName:A?.repositoryName||r})})]})})]})})},s=({children:e,...o})=>(0,n.jsxs)("div",{className:"mx-auto h-screen flex flex-col",children:[(0,n.jsx)(i,{...o}),(0,n.jsx)("div",{className:"flex flex-auto",children:e})]}),c=Object.assign(function(){return(0,n.jsx)(A,{})},{Layout:s})},60789:e=>{e.exports={Columns:"styles_Columns__tdX8c",Overflow:"styles_Overflow__Y3ecE",Samples:"styles_Samples__IlEX3"}},61021:(e,o,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/colors",function(){return r(29540)}])},73304:(e,o,r)=>{"use strict";let n=r(83749);e.exports=e=>{if(e&&n[e+""])return n[e+""];throw Error(`Unknown RAL code: '${e}'`)}},83749:e=>{"use strict";e.exports=JSON.parse('{"1000":"#BEBD7F","1001":"#C2B078","1002":"#C6A664","1003":"#E5BE01","1004":"#CDA434","1005":"#A98307","1006":"#E4A010","1007":"#DC9D00","1011":"#8A6642","1012":"#C7B446","1013":"#EAE6CA","1014":"#E1CC4F","1015":"#E6D690","1016":"#EDFF21","1017":"#F5D033","1018":"#F8F32B","1019":"#9E9764","1020":"#999950","1021":"#F3DA0B","1023":"#FAD201","1024":"#AEA04B","1026":"#FFFF00","1027":"#9D9101","1028":"#F4A900","1032":"#D6AE01","1033":"#F3A505","1034":"#EFA94A","1035":"#6A5D4D","1036":"#705335","1037":"#F39F18","2000":"#ED760E","2001":"#C93C20","2002":"#CB2821","2003":"#FF7514","2004":"#F44611","2005":"#FF2301","2007":"#FFA420","2008":"#F75E25","2009":"#F54021","2010":"#D84B20","2011":"#EC7C26","2012":"#E55137","2013":"#C35831","3000":"#AF2B1E","3001":"#A52019","3002":"#A2231D","3003":"#9B111E","3004":"#75151E","3005":"#5E2129","3007":"#412227","3009":"#642424","3011":"#781F19","3012":"#C1876B","3013":"#A12312","3014":"#D36E70","3015":"#EA899A","3016":"#B32821","3017":"#E63244","3018":"#D53032","3020":"#CC0605","3022":"#D95030","3024":"#F80000","3026":"#FE0000","3027":"#C51D34","3028":"#CB3234","3031":"#B32428","3032":"#721422","3033":"#B44C43","4001":"#6D3F5B","4002":"#922B3E","4003":"#DE4C8A","4004":"#641C34","4005":"#6C4675","4006":"#A03472","4007":"#4A192C","4008":"#924E7D","4009":"#A18594","4010":"#CF3476","4011":"#8673A1","4012":"#6C6874","5000":"#354D73","5001":"#1F3438","5002":"#20214F","5003":"#1D1E33","5004":"#18171C","5005":"#1E2460","5007":"#3E5F8A","5008":"#26252D","5009":"#025669","5010":"#0E294B","5011":"#231A24","5012":"#3B83BD","5013":"#1E213D","5014":"#606E8C","5015":"#2271B3","5017":"#063971","5018":"#3F888F","5019":"#1B5583","5020":"#1D334A","5021":"#256D7B","5022":"#252850","5023":"#49678D","5024":"#5D9B9B","5025":"#2A6478","5026":"#102C54","6000":"#316650","6001":"#287233","6002":"#2D572C","6003":"#424632","6004":"#1F3A3D","6005":"#2F4538","6006":"#3E3B32","6007":"#343B29","6008":"#39352A","6009":"#31372B","6010":"#35682D","6011":"#587246","6012":"#343E40","6013":"#6C7156","6014":"#47402E","6015":"#3B3C36","6016":"#1E5945","6017":"#4C9141","6018":"#57A639","6019":"#BDECB6","6020":"#2E3A23","6021":"#89AC76","6022":"#25221B","6024":"#308446","6025":"#3D642D","6026":"#015D52","6027":"#84C3BE","6028":"#2C5545","6029":"#20603D","6032":"#317F43","6033":"#497E76","6034":"#7FB5B5","6035":"#1C542D","6036":"#193737","6037":"#008F39","6038":"#00BB2D","7000":"#78858B","7001":"#8A9597","7002":"#7E7B52","7003":"#6C7059","7004":"#969992","7005":"#646B63","7006":"#6D6552","7008":"#6A5F31","7009":"#4D5645","7010":"#4C514A","7011":"#434B4D","7012":"#4E5754","7013":"#464531","7015":"#434750","7016":"#293133","7021":"#23282B","7022":"#332F2C","7023":"#686C5E","7024":"#474A51","7026":"#2F353B","7030":"#8B8C7A","7031":"#474B4E","7032":"#B8B799","7033":"#7D8471","7034":"#8F8B66","7035":"#D7D7D7","7036":"#7F7679","7037":"#7D7F7D","7038":"#B5B8B1","7039":"#6C6960","7040":"#9DA1AA","7042":"#8D948D","7043":"#4E5452","7044":"#CAC4B0","7045":"#909090","7046":"#82898F","7047":"#D0D0D0","7048":"#898176","8000":"#826C34","8001":"#955F20","8002":"#6C3B2A","8003":"#734222","8004":"#8E402A","8007":"#59351F","8008":"#6F4F28","8011":"#5B3A29","8012":"#592321","8014":"#382C1E","8015":"#633A34","8016":"#4C2F27","8017":"#45322E","8019":"#403A3A","8022":"#212121","8023":"#A65E2E","8024":"#79553D","8025":"#755C48","8028":"#4E3B31","8029":"#763C28","9001":"#FDF4E3","9002":"#E7EBDA","9003":"#F4F4F4","9004":"#282828","9005":"#0A0A0A","9006":"#A5A5A5","9007":"#8F8F8F","9010":"#FFFFFF","9011":"#1C1C1C","9016":"#F6F6F6","9017":"#1E1E1E","9018":"#D7D7D7","9022":"#9C9C9C","9023":"#828282"}')}},e=>{e.O(0,[1192,636,6593,8792],()=>e(e.s=61021)),_N_E=e.O()}]);