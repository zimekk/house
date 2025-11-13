(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7305],{1961:t=>{function e(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(Error("Failed to load "+this.src),t)}}t.exports=function(t,a,i){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("script");"function"==typeof a&&(i=a,a={}),i=i||function(){},n.type=(a=a||{}).type||"text/javascript",n.charset=a.charset||"utf8",n.async=!("async"in a)||!!a.async,n.src=t,a.attrs&&function(t,e){for(var a in e)t.setAttribute(a,e[a])}(n,a.attrs),a.text&&(n.text=""+a.text),("onload"in n?e:function(t,e){t.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&(this.onreadystatechange=null,e(null,t))}})(n,i),n.onload||e(n,i),o.appendChild(n)}},16782:t=>{"use strict";t.exports=function(){var t={},e={};return t.on=function(t,a){var i={name:t,handler:a};return e[t]=e[t]||[],e[t].unshift(i),i},t.off=function(t){var a=e[t.name].indexOf(t);-1!==a&&e[t.name].splice(a,1)},t.trigger=function(t,a){var i,o=e[t];if(o)for(i=o.length;i--;)o[i].handler(a)},t}},23536:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],t.exports=e.default},31628:(t,e,a)=>{let i;var o=a(496);e.formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;let a="color: "+this.color;e.splice(1,0,a,"color: inherit");let i=0,o=0;e[0].replace(/%[a-zA-Z%]/g,t=>{"%%"!==t&&(i++,"%c"===t&&(o=i))}),e.splice(o,0,a)},e.save=function(t){try{t?e.storage.setItem("debug",t):e.storage.removeItem("debug")}catch(t){}},e.load=function(){let t;try{t=e.storage.getItem("debug")||e.storage.getItem("DEBUG")}catch(t){}return!t&&void 0!==o&&"env"in o&&(t=o.env.DEBUG),t},e.useColors=function(){let t;return"undefined"!=typeof window&&!!window.process&&("renderer"===window.process.type||!!window.process.__nwjs)||!("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&(t=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(t[1],10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},e.storage=function(){try{return localStorage}catch(t){}}(),i=!1,e.destroy=()=>{i||(i=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))},e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.log=console.debug||console.log||(()=>{}),t.exports=a(82401)(e);let{formatters:n}=t.exports;n.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}},45015:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=(i=a(1961))&&i.__esModule?i:{default:i};e.default=t=>new Promise(e=>{if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)return void e(window.YT);{let e="http:"===window.location.protocol?"http:":"https:";(0,o.default)(e+"//www.youtube.com/iframe_api",e=>{e&&t.trigger("error",e)})}let a=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{a&&a(),e(window.YT)}}),t.exports=e.default},48849:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},t.exports=e.default},53665:t=>{t.exports={Table:"styles_Table__pwReO"}},54279:t=>{t.exports={Player:"styles_Player__sox_j"}},55539:(t,e,a)=>{"use strict";a.r(e),a.d(e,{DeployButton:()=>l,Layout:()=>r,Nav:()=>s,default:()=>m});var i=a(45182),o=a(9072);function n(){return(0,i.jsx)("div",{children:(0,i.jsx)("h1",{children:"house"})})}let l=t=>{let e=[["repository-url",t.repositoryUrl],["env",t.env?.join(",")],["project-name",t.projectName],["repository-name",t.repositoryName]].reduce((t,[e,a])=>(a&&t.push(`${e}=${encodeURIComponent(a)}`),t),[]).join("&");return(0,i.jsx)(o.$n,{Component:"a",href:t.customDeployUrl?t.customDeployUrl:`https://vercel.com/new/clone${e?`?${e}`:""}`,target:"_blank",rel:"noreferrer",children:"Clone & Deploy"})},s=({title:t,links:e,path:a,deployButton:n})=>{let s=n?.repositoryUrl||`https://github.com/vercel/examples/tree/main/${a}`;return(0,i.jsx)("nav",{className:"border-b border-gray-200 py-5 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]",children:(0,i.jsxs)("div",{className:"flex items-center lg:px-6 px-8 mx-auto max-w-7xl",children:[(0,i.jsxs)("div",{className:"flex flex-row items-center",children:[(0,i.jsx)(o.N_,{href:"/",children:(0,i.jsx)("span",{children:(0,i.jsxs)("svg",{height:"26",viewBox:"0 0 75 65",fill:"#000",children:[(0,i.jsx)("title",{children:t}),(0,i.jsx)("path",{d:"M37.59.25l36.95 64H.64l36.95-64z"})]})})}),(0,i.jsxs)("ul",{className:"flex items-center content-center",children:[(0,i.jsx)("li",{className:"ml-2 text-gray-200",children:(0,i.jsx)("svg",{viewBox:"0 0 24 24",width:"32",height:"32",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:(0,i.jsx)("path",{d:"M16.88 3.549L7.12 20.451"})})}),(0,i.jsxs)("li",{className:"font-medium",style:{letterSpacing:".01px"},children:[e.map(t=>(0,i.jsx)(o.N_,{href:`/${t}`,style:{marginRight:".5em"},children:t},t)),(0,i.jsx)("a",{href:"tmp/catch-ext.zip",style:{marginRight:".5em"},children:"ext"}),(0,i.jsx)("a",{href:"api/inspirations",style:{marginRight:".5em"},children:"zip"})]})]})]}),(0,i.jsx)("div",{className:"flex-1 justify-end hidden md:flex",children:(0,i.jsxs)("nav",{className:"flex-row inline-flex items-center",children:[(0,i.jsx)("span",{className:"ml-2 h-full flex items-center cursor-not-allowed text-accents-5",children:(0,i.jsx)(o.$n,{variant:"ghost",Component:"a",href:"https://github.com/vercel/examples/tree/main",target:"_blank",rel:"noreferrer",children:"More Examples →"})}),(0,i.jsx)("span",{className:"ml-2 h-full flex items-center cursor-not-allowed text-accents-5",children:(0,i.jsx)(l,{...n,repositoryUrl:s,projectName:n?.projectName||a,repositoryName:n?.repositoryName||a})})]})})]})})},r=({children:t,...e})=>(0,i.jsxs)("div",{className:"mx-auto h-screen flex flex-col",children:[(0,i.jsx)(s,{...e}),(0,i.jsx)("div",{className:"flex flex-auto",children:t})]}),m=Object.assign(function(){return(0,i.jsx)(n,{})},{Layout:r})},64812:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(a(31628)),o=s(a(88961)),n=s(a(23536)),l=s(a(74312));function s(t){return t&&t.__esModule?t:{default:t}}let r=(0,i.default)("youtube-player"),m={};m.proxyEvents=t=>{let e={};for(let a of n.default){let i="on"+a.slice(0,1).toUpperCase()+a.slice(1);e[i]=e=>{r('event "%s"',i,e),t.trigger(a,e)}}return e},m.promisifyPlayer=(t,e=!1)=>{let a={};for(let i of l.default)e&&o.default[i]?a[i]=(...e)=>t.then(t=>{let a=o.default[i],n=t.getPlayerState(),l=t[i].apply(t,e);return a.stateChangeRequired||Array.isArray(a.acceptableStates)&&!a.acceptableStates.includes(n)?new Promise(e=>{let i=()=>{let o,n=t.getPlayerState();"number"==typeof a.timeout&&(o=setTimeout(()=>{t.removeEventListener("onStateChange",i),e()},a.timeout)),Array.isArray(a.acceptableStates)&&a.acceptableStates.includes(n)&&(t.removeEventListener("onStateChange",i),clearTimeout(o),e())};t.addEventListener("onStateChange",i)}).then(()=>l):l}):a[i]=(...e)=>t.then(t=>t[i].apply(t,e));return a},e.default=m,t.exports=e.default},65856:(t,e,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/video",function(){return a(70268)}])},66800:t=>{function e(t,e,a,i){return Math.round(t/a)+" "+i+(e>=1.5*a?"s":"")}t.exports=function(t,a){a=a||{};var i,o,n,l,s=typeof t;if("string"===s&&t.length>0){var r=t;if(!((r=String(r)).length>100)){var m=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r);if(m){var c=parseFloat(m[1]);switch((m[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*c;case"weeks":case"week":case"w":return 6048e5*c;case"days":case"day":case"d":return 864e5*c;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*c;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*c;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*c;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:break}}}return}if("number"===s&&isFinite(t)){return a.long?(o=Math.abs(i=t))>=864e5?e(i,o,864e5,"day"):o>=36e5?e(i,o,36e5,"hour"):o>=6e4?e(i,o,6e4,"minute"):o>=1e3?e(i,o,1e3,"second"):i+" ms":(l=Math.abs(n=t))>=864e5?Math.round(n/864e5)+"d":l>=36e5?Math.round(n/36e5)+"h":l>=6e4?Math.round(n/6e4)+"m":l>=1e3?Math.round(n/1e3)+"s":n+"ms"}throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},70268:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>C});var i=a(45182),o=a(39950),n=a(41680),l=a(49364),s=a(21698),r=a(51450),m=a(87484),c=a.n(m),w=a(54279),u=a.n(w);function k({videoId:t,markers:e}){let a=(0,o.useRef)(null),n=(0,o.useRef)(null),l=(0,o.useRef)(null),{inView:s}=function(t){let[e,a]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(t.current instanceof HTMLElement){let e=new IntersectionObserver(([{isIntersecting:t}])=>{t&&a(!0)},{root:null,rootMargin:"0px",threshold:1});return e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}}},[t]),{inView:e}}(a);return(0,o.useEffect)(()=>{if(n.current&&s){let e=c()(n.current,{videoId:t,playerVars:{controls:1,fs:1,rel:0,origin:"http://localhost:8080",start:0}});l.current=e,e.on("stateChange",async t=>{2===t.data&&console.log(`time: ${await e.getCurrentTime()}/${await e.getDuration()}`)})}},[s,n,l]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{children:["[",(0,i.jsx)("a",{href:"#",onClick:(0,o.useCallback)(t=>{if(t.preventDefault(),a.current){let t=a.current.querySelector("iframe");if(t){let e=t.querySelector("video");console.log({ref:a,frame:t,video:e})}}},[a]),children:"skip"}),"]"]}),(0,i.jsx)("div",{ref:a,className:u().Player,children:(0,i.jsx)("div",{ref:n})}),(0,i.jsx)("div",{className:u().Markers,children:e.map(({text:t,time:e},a)=>(0,i.jsx)("div",{children:(0,i.jsx)("a",{href:"#",onClick:(0,o.useCallback)(t=>(t.preventDefault(),l.current.seekTo(e)),[l]),children:t})},a))})]})}let x=t=>t.split("\n").map(t=>t.trim().match(/^((\d+):)?(\d+):(\d+)\s(.*)$/)).map(t=>t?{time:(60*Number(t[2]||0)+Number(t[3]))*60+Number(t[4]),text:t[5]}:null).filter(t=>null!==t),h=[{url:"https://www.youtube.com/watch?v=_2qBe9S1ecY",markers:x(`
0:05 jadalnia
0:15 kuchnia
2:46 konsola
2:54 korytarz
3:32 salon
3:18 ogr\xf3d
4:03 kuchnia
5:5 jadalnia
6:35 taras
6:2 sypialnia
7:06 łazienka
8:53 gabinet
11:55 korytarz
13:11 salon
18:46 kuchnia
19:26 okap
20:03 jadalnia
25:38 sypialnia
27:55 łazienka
29:15 gabinet
32:3 salon
32:24 kuchnia
33:1 jadalnia
34:08 sypialnia
35:08 łazienka
36:54 gabinet
37:3 salon
37:58 korytarz
       `)},{url:"https://www.youtube.com/watch?v=cKCupN1gVtU",markers:x(`
1:12 wejście +
1:46 kuchnia
2:12 salon
2:23 kuchnia ogrodowa
2:42 elewacja +
2:51 sypialnia
2:58 toaleta
3:03 łazienka
3:56 kącik
      `)},{url:"https://www.youtube.com/watch?v=Ti71fevr_ws",markers:x(`
0:30 wejście +
0:33 kuchnia +
0:49 rzut
1:15 salon
1:34 jadalnia +
3:27 toaleta +
3:50 łazienka +
4:25 sypialnia
      `)},{url:"https://www.youtube.com/watch?v=UMS3jzbdkgE",markers:x(`
      0:58 podjazd +
      2:22 wejście
      2:35 rzut
3:15 konsola +
3:22 gabinet
4:20 kącik, wiatrak +
5:05 łazienka
5:55 garderoba
7:28 garderoba
9:23 garderoba
9:40 toaleta
10:25 konsola +
10:49 sypialnia
10:58 wiatrak +
12:26 łazienka
14:02 garderoba
15:48 jadalnia
16:25 kuchnia
17:53 salon
20:00 spiżarnia
20:45 pralnia
21:20 toaleta
22:10 garaż
23:15 taras
      27:05 podjazd
32:55 jadalnia
33:25 pralnia
      `)},{url:"https://www.youtube.com/watch?v=Wnw4PEvBavQ",markers:x(`
      0:00 wejście
0:10 rzut
1:00 podjazd +
2:44 rzut
3:29 toaleta
4:13 kuchnia +
4:34 jadalnia
7:53 salon
9:08 pralnia
10:25 toaleta
11:21 gabinet
12:13 toaleta
13:12 sypialnia
13:44 garderoba
13:58 toaleta
15:12 garderoba
15:27 toaleta
16:14 toaleta
17:23 garderoba
17:36 toaleta
18:10 konsola +
18:40 sypialnia
19:24 łazienka
20:59 garderoba
21:26 garderoba
      `)},{url:"https://www.youtube.com/watch?v=MNYgOPWb8WQ",markers:x(`
0:04 podjazd
0:26 wejście
1:08 schody
1:15 jadalnia
1:25 kominek
1:50 salon
10:34 ściany
10:34 ściany
11:17 listwy
12:10 garderoba
13:02 wanna
13:44 sypialnia
15:31 świetlik +
15:51 kuchnia ++
16:20 kącik kawowy +
18:05 brama garażowa +
20:43 elewacja
20:59 rzut
21:41 ogr\xf3d
27:45 rzut
28:48 prysznic
      `)},{url:"https://www.youtube.com/watch?v=F5gBWs1KBl0",markers:x(`
0:09 lukarna
0:17 podjazd
0:57 wejście
15:04 ogr\xf3d
16:10 kuchnia ogrodowa
16:18 lukarna
      `)},{url:"https://www.youtube.com/watch?v=9zxRK1swlzY",markers:x(`
0:45 rzut
2:54 kort
3:15 elewacja
4:29 konsola
5:52 kominek
6:13 salon
7:54 gabinet
9:15 siłownia
10:10 toaleta
10:23 sauna
11:26 łazienka
12:43 kuchnia
15:0 jadalnia
18:41 toaleta
19:21 sypialnia
19:44 łazienka
20:11 sypialnia
20:32 sypialnia
21:20 kącik
21:34 garderoba
22:40 łazienka
2:50 łazienka
2:58 sypialnia
3:05 schody
3:24 sypialnia
3:37 gabinet
3:50 sypialnia
4:04 pok\xf3j
4:35 taras
      `)},{url:"https://www.youtube.com/watch?v=I0vhvZxNeKg",markers:x(`
0:11 ogr\xf3d
0:39 wejście
1:22 kuchnia
1:32 salon
2:29 sypialnia
2:50 łazienka
2:58 sypialnia
3:05 schody
3:24 sypialnia
3:37 gabinet
3:50 sypialnia
4:04 pok\xf3j
4:35 taras
      `)},{url:"https://www.youtube.com/watch?v=p5JQj-mMFUM",markers:x(`
0:12 elewacja +
0:25 podjazd
      `)},{url:"https://www.youtube.com/watch?v=NpYLfeM-4a8",markers:x(`
0:05 podjazd
0:27 wejście
0:46 jadalnia
0:56 kuchnia
1:21 salon
1:38 schody
1:54 kącik
2:06 sypialnia
2:11 łazienka
2:25 sypialnia
2:50 ogr\xf3d
2:59 elewacja
3:19 gabinet
4:38 oświetlenie
      `)},{url:"https://www.youtube.com/watch?v=YSaChDhIz94",markers:x(`
0:22 elewacja
0:52 brama garażowa
1:05 brama wjazdowa, ogrodzenie +
      `)},{url:"https://www.youtube.com/watch?v=Uhr9Zb-gJHc",markers:x(`
0:02 wejście
0:06 schody
0:31 jadalnia
0:36 kuchnia
0:44 salon
0:58 sypialnia
1:06 konsola
1:14 łazienka
1:27 gabinet
1:38 sypialnia
1:51 basen
      `)},{url:"https://www.youtube.com/watch?v=Tii5Ptf2iVQ",markers:x(`
0:53 elewacja
1:24 panele
1:40 wejście
2:20 jadalnia
2:24 salon
2:40 oświetlenie +
2:46 rtv, wentylacja +
3:44 kuchnia
4:15 schody +
4:47 kącik +
4:57 kącik
5:10 sypialnia
5:20 taras
5:36 kącik
5:40 łazienka
6:12 sypialnia
6:18 sypialnia
6:36 kuchnia ogrodowa
7:32 basen
      `)},{url:"https://www.youtube.com/watch?v=6Y3PnuYD4HE",markers:x(`
1:13 elewacja
2:02 panele +
2:12 schody +
2:22 kącik
2:26 sypialnia
2:30 toaleta
2:36 schody +
2:40 jadalnia
2:48 salon
3:13 kuchnia
3:24 drzwi +
3:36 sypialnia
4:24 basen
      `)},{url:"https://www.youtube.com/watch?v=5Kmkmmg9tWE",markers:x(`
0:18 elewacja +
0:52 elewacja / okiennice +
1:03 wejście ++
1:17 kuchnia
1:20 salon / rtv
1:22 jadalnia
1:28 drzwi +
1:31 sypialnia
1:44 toaleta
1:57 kuchnia
2:41 elewacja +
4:44 panele
      `)},{url:"https://www.youtube.com/watch?v=D0ozxrCPgdo",markers:x(`
1:27 furtka +
2:14 kuchnia +
3:06 toaleta
4:19 okno +
      `)},{url:"https://www.youtube.com/watch?v=EVBYr7KmP4o",markers:x(`
0:29 kącik
2:29 drzwi +
2:41 toaleta
3:18 kuchnia
4:57 sypialnia / wentylacja +
5:12 toaleta +
5:32 toaleta
      `)},{url:"https://www.youtube.com/watch?v=yPYi-3YLzfo",markers:x(`
1:08 kuchnia +
1:26 wentylacja +
1:42 kącik
1:56 toaleta
2:29 salon / rtv +
2:46 drzwi +
2:57 drzwi +
3:01 sypialnia
3:19 toaleta +
3:44 oświetlenie +
4:12 okiennice
      `)},{url:"https://www.youtube.com/watch?v=YorK6DTL4Mw",markers:x(`
1:35 ogrodzenie
1:40 wejście
2:19 schody
2:44 salon / rtv
2:46 kuchnia
2:51 jadalnia
2:57 drzwi +
3:13 elewacja +
3:16 sypialnia
3:23 łazienka
3:35 elewacja +
3:54 schody
4:08 sauna
4:19 sauna +
4:29 schody
4:53 elewacja
6:14 basen
      `)},{url:"https://www.youtube.com/watch?v=yq0QL5vcje8",markers:x(`
1:15 kuchnia +
1:21 schody / kącik +
1:30 salon / rtv
1:33 bar
1:43 jadalnia / kredens +
1:55 kącik / podłoga +
2:16 drzwi / podłoga +
2:21 toaleta
2:27 kuchnia +
2:30 bar
2:35 schody +
2:59 kino
3:36 kuchnia ogrodowa
3:44 sauna +
3:49 ogr\xf3d
      `)},{url:"https://www.youtube.com/watch?v=9LDcQf_Q6mU",markers:x(`
0:37 elewacja +
1:10 schody
1:16 wejście
1:38 kuchnia
1:48 drzwi
1:55 schody +
2:55 ogrodzenie +
2:58 schody +
3:29 ogrodzenie +
3:39 elewacja / wejście +
4:19 okno +
      `)},{url:"https://www.youtube.com/watch?v=qGZbFz5b2CE",markers:x(`
0:41 sypialnia
0:45 kuchnia
1:23 wiatrak
1:32 rolety
1:51 jacuzzi
1:56 basen
2:04 wejście
2:12 kuchnia
2:36 jadalnia
2:39 szafa / drzwi
2:48 rtv +
3:32 kuchnia / wentylacja
3:55 sypialnia
4:02 łazienka
4:26 garderoba
4:30 świetlik
5:08 toaleta
5:14 drzwi
5:19 świetlik
6:14 panele
      `)},{url:"https://www.youtube.com/watch?v=fNZXQN7JHV0",markers:x(`
1:00 szafa
1:18 salon / rtv
1:34 jadalnia / oświetlenie
1:36 kuchnia
1:43 toaleta
1:49 toaleta
1:57 sauna
3:33 kuchnia / oświetlenie
3:47 schody +
4:18 rolety
      `)},{url:"https://www.youtube.com/watch?v=d5cl79f6OQI",markers:x(`
0:44 kominek
0:47 wejście
0:56 salon / oświetlenie
1:01 kuchnia / oświetlenie
1:03 drzwi
1:15 podłoga
1:20 salon
1:32 oświetlenie
1:50 kuchnia
2:21 salon
3:24 toaleta
3:30 sypialnia
3:47 toaleta
3:59 kącik / rtv
4:14 basen
      `)},{url:"https://www.youtube.com/watch?v=AzyqNnuXB6U",markers:x(`
4:13 pralnia
4:37 salon
5:46 kącik / biuro
6:14 schody
7:00 sypialnia
8:00 toaleta
9:15 łazienka
      `)},{url:"https://www.youtube.com/watch?v=D1d-Ho9FcyY",markers:x(`
1:17 biuro
1:44 sypialnia
2:20 toaleta
3:08 sypialnia
3:24 kącik
4:10 łącznik
5:12 kuchnia +
7:50 pralnia
8:30 łazienka +
10:10 sypialnia
11:10 patio
11:25 salon
12:45 wejście
13:25 kuchnia +
      `)},{url:"https://www.youtube.com/watch?v=caqjJZNNhzM",markers:x(`
0:25 elewacja +
0:40 wejście +
0:55 schody
1:11 kuchnia +
1:52 spiżarnia
2:08 drzwi +
2:10 pralnia
2:25 jadalnia +
2:50 salon
3:30 basen
4:12 kuchnia +
4:23 toaleta
4:38 kącik
5:08 szatnia
5:23 schody
5:40 kącik
5:43 sypialnia
6:04 łazienka +
6:48 garderoba +
7:20 sypialnia
7:25 toaleta
7:42 sypialnia
7:44 toaleta
8:00 sypialnia
8:14 toaleta
9:27 elewacja +
      `)},{url:"https://www.youtube.com/watch?v=vAZZNu-u4K8",markers:x(`
0:13 elewacja ++
0:27 wejście +
0:42 sypialnia
0:48 zasłony
1:12 garderoba
1:19 łazienka +
2:48 toaleta
3:05 schody +
3:06 szatnia
3:09 jadalnia
3:27 jadalnia
3:46 kuchnia +
5:10 świetlik / wentylacja +
6:22 salon / kominek ++
7:53 basen +
8:28 drzwi +
8:35 pralnia / świetlik
8:53 schody +
9:17 kącik +
9:20 sypialnia
9:28 szafa +
9:37 toaleta +
10:02 kącik / rtv
10:28 sypialnia
10:33 szafa +
10:56 sypialnia
10:59 toaleta
12:03 kuchnia / wentylacja +
12:11 bar
13:28 schody +
13:34 sypialnia
13:56 elewacja +
      `)},{url:"https://www.youtube.com/watch?v=vZlP5JCp2Ek",markers:x(`
0:29 elewacja +
0:42 wejście
1:08 sypialnia
1:30 garderoba
1:35 łazienka
2:24 drzwi +
2:40 kącik
2:45 bar
3:15 kuchnia +
3:45 spiżarnia +
3:55 jadalnia
4:15 salon / kominek +
4:40 wentylacja ++
5:15 toaleta
5:22 pralnia
5:30 schody
5:50 kącik
6:00 sypialnia
6:15 toaleta
6:45 kącik
7:05 sypialnia
7:10 toaleta
7:24 sypialnia
7:27 toaleta
8:06 elewacja +
      `)},{url:"https://www.youtube.com/watch?v=MIsQ8LfG5Zk",markers:x(`
0:44 wejście +
1:58 łazienka +
3:10 schody +
3:48 kuchnia
4:51 salon / kominek +
5:13 kominek / wentylacja +
6:30 pralnia
6:40 drzwi +
7:03 schody +
7:15 kącik / skosy +
7:30 rtv / wentylacja +
7:32 sypialnia / szafa
7:45 toaleta
8:15 sypialnia / toaletka
8:29 toaleta
8:39 schody +
9:19 basen
9:24 elewacja +
      `)},{url:"https://www.youtube.com/watch?v=SwhaRzVgPe8",markers:x(`
0:40 elewacja +
0:52 wejście +
1:23 gabinet +
2:26 bar
3:25 pralnia
4:35 salon
5:30 kuchnia
6:55 spiżarnia
7:35 toaleta
8:15 sypialnia
8:55 łazienka ++
10:10 garderoba +
10:40 kuchnia ogrodowa
10:50 schody +
11:15 kącik +
11:45 sypialnia / szafa
11:55 toaleta
12:20 sypialnia
12:40 toaleta
14:30 elewacja +
      `)},{url:"https://www.youtube.com/watch?v=Co-UmzEXfsA",markers:x(`
0:35 elewacja +
0:54 wejście +
1:25 kącik +
2:25 sypialnia
2:40 toaleta
3:28 toaleta
3:40 szatnia
3:50 pralnia
4:05 spiżarnia
4:15 kuchnia
5:50 salon
6:30 prysznic ogrodowy
7:20 kuchnia ogrodowa
7:45 schody ++
8:25 sypialnia
8:35 toaleta
10:10 garderoba
10:25 łazienka
11:15 kącik
12:52 elewacja +
      `)},{url:"https://www.youtube.com/watch?v=5vdNKhc2GFE",markers:x(`
0:06 elewacja
0:29 elewacja
0:36 elewacja / lukarna +
0:48 elewacja +
0:51 balkon / balustrada +
      `)},{url:"https://www.youtube.com/watch?v=H-4pEnCbKfA",markers:x(`
1:11 wiatrołap
1:22 schody
1:30 szatnia
1:37 konsola
2:36 salon / kominek
4:08 jadalnia
4:40 oświetlenie / wentylacja
4:48 kredens / bufet
6:00 gabinet
7:28 kuchnia
9:31 kącik / rtv
11:19 sypialnia
      `)},{url:"https://www.youtube.com/watch?v=UCfdaFulfus",markers:x(`
1:37 elewacja
2:05 wejście
2:14 konsola / lustro
2:19 salon / rtv
2:31 schody
2:37 konsola / lustro
2:46 kuchnia
2:54 salon / kominek
2:57 jadalnia
3:00 sypialnia
3:03 łazienka
7:50 spiżarnia
10:20 szatnia
10:54 toaleta
11:59 sypialnia / zasłony
12:20 ekspres ++
12:39 sypialnia / zasłony
12:50 garderoba
13:36 łazienka
15:38 pralnia
16:47 łazienka
      `)},{url:"https://www.youtube.com/watch?v=LR_uuo5JWuA",markers:x(`
0:45 wejście
1:08 pergola
1:11 sypialnia
1:16 salon
1:20 elewacja
1:24 wejście
2:27 salon
4:18 jadalnia
4:52 kuchnia
5:27 pralnia
11:46 toaleta
12:18 sypialnia
13:35 sypialnia
14:44 łazienka
      `)},{url:"https://www.youtube.com/watch?v=wYzWe6wcRI0",markers:x(`
0:55 wejście
1:58 kuchnia
4:24 panele
5:30 schody
8:57 panele
      `)},{url:"https://www.youtube.com/watch?v=HyH3wc5wjdk",markers:x(`
1:05 schody
      `)},{url:"https://www.youtube.com/watch?v=wMR5Ayn2Bwk",markers:x(`
3:45 kuchnia +
      `)},{url:"https://www.youtube.com/watch?v=lVqY-5qN5Fk",markers:x(`
0:28 elewacja
6:20 schody
7:00 sypialnia / skosy
      `)},{url:"https://www.youtube.com/watch?v=X7aA29Mcx1s",markers:x(`
      `)},{url:"https://www.youtube.com/watch?v=wRoeDf8S7_4",markers:x(`
4:45 schody +
5:59 schody
      `)},{url:"https://www.youtube.com/watch?v=ZPaaI5aB-LA",markers:x(`
0:34 elewacja
1:07 wejście
1:10 salon
1:54 kuchnia
5:09 elewacja
      `)},{url:"https://www.youtube.com/watch?v=8_RxHV7XAjc",markers:x(`
0:27 elewacja ++
1:18 schody
1:21 łazienka +
1:58 elewacja +
2:13 wejście +
2:27 kuchnia +
2:37 salon
2:49 kącik / zasłony
2:55 zasłony +
3:03 elewacja +
3:54 panele
4:44 jadalnia / wentylacja ++
7:15 drzwi / toaletka
7:24 sypialnia / wentylacja ++
      `)},{url:"https://www.youtube.com/watch?v=WBFJ5qVPwxA",markers:x(`
0:09 elewacja +
0:12 kuchnia +
2:37 salon
2:49 kącik / zasłony
2:55 zasłony +
3:03 elewacja +
3:54 panele
4:44 jadalnia / wentylacja ++
7:15 drzwi / toaletka
7:24 sypialnia / wentylacja ++
      `)},{url:"https://www.youtube.com/watch?v=v1RT6r6SL90",markers:x(`
1:49 schody
11:18 panele
      `)},{url:"https://www.youtube.com/watch?v=ZCTXLZh542w",markers:x(`
1:00 elewacja
1:14 panele
      `)},{url:"https://www.youtube.com/watch?v=TWNHhESVuUg",markers:x(`
0:05 elewacja
0:09 panele
      `)},{url:"https://www.youtube.com/watch?v=_0Mx8UBDMdM",markers:x(`
0:39 szopa
1:13 palenisko
1:53 ogr\xf3d
3:35 kucnia ogrodowa
      `)},{url:"https://www.youtube.com/watch?v=XKUuRPiQiDs",markers:x(`
0:33 ogrodzenie
0:44 elewacja
0:58 wejście
1:08 schody
9:57 sypialnia / skosy
10:24 sypialnia / skosy
      `)},{url:"https://www.youtube.com/watch?v=uYq5uaHx59I",markers:x(`
0:04 elewacja / panele
0:14 wejście
10:40 schody
      `)},{url:"https://www.youtube.com/watch?v=GYaXrzcFkNg",markers:x(`
0:11 elewacja
2:40 wejście
2:46 szatnia
3:22 toaleta
3:30 salon
3:44 elewacja
3:57 elewacja
4:48 jadalnia
4:54 kuchnia
6:28 schody ++
6:48 łazienka
7:28 sypialnia / skosy
8:10 kącik
8:37 sypialnia / skosy
      `)},{url:"https://www.youtube.com/watch?v=cNGArAUt8Ow",markers:[{text:"oświetlenie",time:29},{text:"oświetlenie",time:105},{text:"basen",time:393},{text:"bilard",time:453},{text:"szafa rack",time:671},{text:"schody",time:809},{text:"siłownia",time:867},{text:"garderoba",time:1060},{text:"oświetlenie",time:1118},{text:"balkon",time:1148},{text:"toaleta",time:1200},{text:"toaleta",time:1275}]},{url:"https://www.youtube.com/watch?v=a9W0CT7dwDc",markers:[{text:"kuchnia ogrodowa",time:659},{text:"bilard",time:1110},{text:"kino",time:1166},{text:"siłownia",time:1208},{text:"sauna",time:1254},{text:"oświetlenie",time:1464},{text:"oświetlenie",time:1493},{text:"szafy",time:1517},{text:"toaleta",time:1525},{text:"balkon",time:1551},{text:"biurko",time:1594},{text:"biurko",time:1607},{text:"toaletka",time:1624},{text:"garderoba",time:1628},{text:"prysznic",time:1634},{text:"wanna",time:1636},{text:"balkon",time:1640},{text:"kącik kawowy",time:1713},{text:"garderoba",time:1749},{text:"łazienka",time:1778},{text:"kuchnia ogrodowa",time:1851}]},{url:"https://www.youtube.com/watch?v=bRjHkZQW-jg",markers:[{text:"schody",time:61},{text:"kuchnia",time:132},{text:"łącznik",time:321},{text:"toaleta",time:470},{text:"pralnia",time:482},{text:"kotłownia",time:528},{text:"skosy",time:626},{text:"balkon",time:665},{text:"garderoba",time:691},{text:"wanna",time:716},{text:"łazienka",time:772},{text:"toaleta",time:813}]},{url:"https://www.youtube.com/watch?v=QuIn59ONdpA",markers:[{text:"kuchnia",time:70},{text:"kuchnia ogrodowa",time:103},{text:"jadalnia",time:140},{text:"balkon",time:185},{text:"łazienka",time:189},{text:"garderoba",time:202},{text:"toaleta",time:234},{text:"toaleta",time:264},{text:"sauna",time:379},{text:"kino",time:393}]},{url:"https://www.youtube.com/watch?v=V2WKynZkjdM",markers:[{text:"schody",time:63},{text:"kuchnia",time:63},{text:"toaleta",time:107},{text:"schody",time:725},{text:"toaleta",time:890}]},{url:"https://www.youtube.com/watch?v=udQWw7qAJJo",markers:[{text:"wejście",time:115},{text:"kuchnia",time:135},{text:"jadalnia",time:167},{text:"oświetlenie",time:187},{text:"basen",time:209},{text:"toaleta",time:520},{text:"wanna",time:559},{text:"kucnia ogrodowa",time:651}]},{url:"https://www.youtube.com/watch?v=jv7Tgk2Hxvg",markers:[{text:"schody",time:429},{text:"sypialnia",time:448},{text:"sypialnia",time:472},{text:"sypialnia",time:502}]},{url:"https://www.youtube.com/watch?v=sDHvXDVJfUQ",markers:[{text:"okno",time:790},{text:"toaleta",time:917},{text:"łazienka",time:1168},{text:"kuchnia ogrodowa",time:1402}]},{url:"https://www.youtube.com/watch?v=NaBIz7JiNCs"},{url:"https://www.youtube.com/watch?v=e3HWPmXsNrI"},{url:"https://www.youtube.com/watch?v=jcxXGeXuDAs",markers:[{text:"pralnia",time:191},{text:"szopa",time:244},{text:"jadalnia",time:475},{text:"szopa",time:870}]},{url:"https://www.youtube.com/watch?v=TVsyoGU8a1Y"},{url:"https://www.youtube.com/watch?v=bYDHzGF75bc",markers:[{text:"toaleta",time:39},{text:"wentylacja",time:293},{text:"toaleta",time:428},{text:"łazienka",time:435},{text:"taras",time:581}]},{url:"https://www.youtube.com/watch?v=ICTzMaVLqfA",markers:[{text:"oświetlenie",time:21},{text:"wentylacja",time:28},{text:"bar",time:118},{text:"kuchnia",time:180},{text:"garderoba",time:391},{text:"łazienka",time:452},{text:"gabinet",time:702},{text:"smart",time:774},{text:"oświetlenie",time:796},{text:"sypialnia",time:833},{text:"tialeta",time:877},{text:"tialeta",time:973}]},{url:"https://www.youtube.com/watch?v=KAySrmPZnd0",markers:[{text:"pralnia",time:846},{text:"garderoba",time:1185}]},{url:"https://www.youtube.com/watch?v=zW1cVmU91dM",markers:[{text:"zabudowa tv",time:1980},{text:"zabudowa tv",time:88},{text:"kuchnia",time:141},{text:"garderoba",time:190},{text:"łazienka",time:204},{text:"sypialnia",time:222},{text:"garderoba",time:248},{text:"sypialnia",time:255},{text:"toaleta",time:279},{text:"pralnia",time:296},{text:"toaleta",time:311},{text:"sypialnia",time:315}]},{url:"https://www.youtube.com/watch?v=Dy8xoHPO-6A",markers:[{text:"kuchnia",time:207},{text:"spiżarnia",time:277},{text:"pralnia",time:384},{text:"łazienka",time:497},{text:"schody",time:534}]},{url:"https://www.youtube.com/watch?v=ByeOhF5FLGI",markers:[{text:"kuchnia",time:178},{text:"taras",time:221},{text:"basen",time:228},{text:"sypialnia",time:303},{text:"toaleta",time:306},{text:"garderoba",time:343},{text:"łazienka",time:362},{text:"wanna",time:381},{text:"toaleta",time:386},{text:"sypialnia",time:394},{text:"toaletka",time:409},{text:"siłownia",time:419},{text:"toaleta",time:435},{text:"taras",time:444}]},{url:"https://www.youtube.com/watch?v=diXIpoB2AOs",markers:[{text:"sypialnia",time:533},{text:"sypialnia",time:565},{text:"schody",time:624},{text:"sypialnia",time:685},{text:"toaletka",time:715},{text:"toaleta",time:764}]},{url:"https://www.youtube.com/watch?v=VQWN_YxGQC4",markers:[{text:"konsola",time:30},{text:"sypialnia",time:235},{text:"toaleta",time:294},{text:"łazienka",time:313},{text:"toaleta",time:346},{text:"sypialnia",time:350},{text:"sypialnia",time:380},{text:"toaleta",time:387},{text:"sypialnia",time:442},{text:"jadalnia",time:471},{text:"kuchnia",time:499},{text:"toaleta",time:525},{text:"pralnia",time:531}]},{url:"https://www.youtube.com/watch?v=55q22MncaUY",markers:[{text:"schody",time:29},{text:"toaleta",time:41},{text:"oświetlenie",time:90},{text:"kuchnia",time:142},{text:"kino",time:206},{text:"toaleta",time:260},{text:"siłownia",time:265},{text:"toaleta",time:283},{text:"schody",time:314},{text:"łazienka",time:364},{text:"wanna",time:373},{text:"toaletka",time:440},{text:"łazienka",time:459}]},{url:"https://www.youtube.com/watch?v=foTjwFxUlDA",markers:[{text:"wejście",time:85},{text:"pralnia",time:334},{text:"kino",time:512}]},{url:"https://www.youtube.com/watch?v=p8x7sX4q-T0",markers:[{text:"elewacja",time:56},{text:"balkon",time:161},{text:"kuchnia",time:170},{text:"kuchnia ogrodowa",time:313},{text:"wentylacja",time:382},{text:"toaleta",time:418},{text:"pralnia",time:428},{text:"sypialnia",time:440},{text:"łazienka",time:504},{text:"wanna",time:566},{text:"balkon",time:597},{text:"schody",time:621},{text:"pralnia",time:689},{text:"sauna",time:774}]},{url:"https://www.youtube.com/watch?v=bKs5YEHQ0cc",markers:[{text:"chodnik",time:16},{text:"oświetlenie",time:53},{text:"wejście",time:55},{text:"schody",time:65},{text:"kuchnia",time:116},{text:"bar",time:156},{text:"oświetlenie",time:212},{text:"spiżarnia",time:326},{text:"toaleta",time:353},{text:"elewacja",time:474},{text:"sauna",time:481},{text:"toaleta",time:487},{text:"garderoba",time:596},{text:"schody",time:624},{text:"garderoba",time:655},{text:"wanna",time:701},{text:"łazienka",time:724},{text:"gabinet",time:780},{text:"łazienka",time:846},{text:"balkon",time:858}]},{url:"https://www.youtube.com/watch?v=KBIcPrWK4kM",markers:[{text:"elewacja",time:21},{text:"wejście",time:165},{text:"kominek",time:241},{text:"bar",time:316},{text:"kino",time:380},{text:"gabinet",time:428},{text:"konsola",time:509},{text:"kuchnia",time:528},{text:"oświetlenie",time:533},{text:"ekspres",time:546},{text:"basen",time:610},{text:"kuchnia ogrodowa",time:690},{text:"siłownia",time:837},{text:"rtv",time:927},{text:"sypialnia",time:943},{text:"toaleta",time:947},{text:"garderoba",time:982},{text:"toaleta",time:986},{text:"toaleta",time:1008},{text:"garderoba",time:1012},{text:"sypialnia",time:1014},{text:"toaleta",time:1057},{text:"sypialnia",time:1097},{text:"wentylacja",time:1108},{text:"garderoba",time:1123},{text:"łazienka",time:1146},{text:"łazienka",time:1175},{text:"garderoba",time:1199},{text:"siłownia",time:1236},{text:"oświetlenie",time:1248},{text:"szafa / listwy",time:1278},{text:"kuchnia",time:1286},{text:"pralnia",time:1307},{text:"garaż",time:1316}]},{url:"https://www.youtube.com/watch?v=YsKt0DOzXWo",markers:[{text:"elewacja",time:15},{text:"wejście",time:26},{text:"jadalnia",time:45},{text:"oświetlenie",time:54},{text:"salon",time:72},{text:"rtv",time:80},{text:"kominek",time:81},{text:"kuchnia",time:105},{text:"bar",time:119},{text:"ekspres",time:135},{text:"kuchnia ogrodowa",time:157},{text:"szafa",time:190},{text:"toaleta",time:199},{text:"sypialnia / zasłony / wentylacja",time:211},{text:"garderoba",time:231},{text:"łazienka",time:245},{text:"drzwi",time:265},{text:"siłownia",time:270},{text:"świetlik",time:280},{text:"kino +",time:287},{text:"gabinet",time:297},{text:"pralnia +",time:332},{text:"szatnia",time:348},{text:"elewacja / ogrodzenie",time:365},{text:"schody +",time:369},{text:"gabinet +",time:384},{text:"pralnia / wentylacja +",time:399},{text:"sypialnia",time:405},{text:"toaleta",time:408},{text:"salon",time:413},{text:"toaleta",time:437},{text:"drzwi",time:445}]},{url:"https://www.youtube.com/watch?v=Zlddt7frCg0",markers:[{text:"bar",time:665},{text:"kuchnia ogrodowa",time:838},{text:"boisko",time:1046},{text:"szopa",time:1054},{text:"siłownia",time:1074},{text:"świetlik",time:1077},{text:"boisko",time:1058},{text:"ekspres",time:1369},{text:"balkon",time:1653},{text:"bar",time:1701}]},{url:"https://www.youtube.com/watch?v=I5ZouUctFTI",markers:[{text:"wejście",time:81},{text:"basen",time:267},{text:"sauna",time:310},{text:"siłownia",time:323},{text:"kino",time:386},{text:"toaleta",time:451},{text:"schody",time:516},{text:"balkon",time:583},{text:"wanna",time:597},{text:"pralnia",time:691}]},{url:"https://www.youtube.com/watch?v=IRffovBXIUE",markers:[{text:"wejście",time:4},{text:"oświetlenie / wentylacja",time:153},{text:"bar",time:159},{text:"kuchnia",time:185},{text:"spiżarnia / pralnia",time:272},{text:"salon",time:307},{text:"rtv / kominek",time:313},{text:"basen",time:410},{text:"sypialnia",time:512},{text:"toaletka",time:516},{text:"łazienka",time:527},{text:"toaletka",time:555},{text:"kino",time:601},{text:"garaż",time:677},{text:"bawialnia",time:728},{text:"sypialnia",time:800},{text:"sypialnia",time:835},{text:"łazienka",time:863},{text:"sypialnia",time:872},{text:"łazienka",time:936},{text:"garderoba",time:1011},{text:"sypialnia",time:1099},{text:"balkon",time:1169}]},{url:"https://www.youtube.com/watch?v=e1KOwce3RTM",markers:[{text:"kuchnia",time:74},{text:"kuchnia",time:281},{text:"gabinet",time:362},{text:"bar",time:662},{text:"spiżarnia",time:740},{text:"pralnia",time:775},{text:"bar",time:811}]},{url:"https://www.youtube.com/watch?v=lBbwU1QyUD4",markers:[{text:"wejście",time:1},{text:"kuchnia",time:18},{text:"ekspres",time:90},{text:"jadalnia",time:116},{text:"salon +",time:153},{text:"kominek",time:162},{text:"schody",time:238},{text:"szatnia +",time:290},{text:"bawialnia +",time:343},{text:"łazienka",time:361},{text:"sypialnia",time:400},{text:"gabinet",time:403},{text:"szafa",time:435},{text:"toaleta",time:439},{text:"elewacja",time:454}]},{url:"https://www.youtube.com/watch?v=Bh1JyYKNmGs",markers:[{text:"elewacja",time:13},{text:"wejście",time:18},{text:"rolety",time:131},{text:"kuchnia",time:140},{text:"wentylacja",time:243},{text:"jadalnia",time:334},{text:"basen",time:414},{text:"bar",time:482},{text:"sypialnia",time:528},{text:"szafa / wentylacja",time:540},{text:"toaleta",time:556},{text:"toaleta",time:597},{text:"balkon",time:40},{text:"rtv",time:86},{text:"oświetlenie / wentylacja",time:88},{text:"balkon",time:323},{text:"łazienka",time:338},{text:"elewacja",time:454}]},{url:"https://www.youtube.com/watch?v=Plw9zsGn4yI",markers:x(`
0:30 kuchnia
0:39 oświetlenie
1:54 jadalnia
2:23 zasłony
2:32 konsola
2:52 salon
3:19 rtv
3:36 kominek
4:29 konsola
4:32 szafa / wentylacja
4:42 toaletka
5:03 sypialnia
5:27 garderoba
5:58 łazienka
7:25 balkon
7:57 sypialnia
8:00 szafa
8:18 toaletka
8:28 sypialnia
9:10 konsola / wentylacja
9:26 łazienka
10:14 toaleta
10:41 toaleta
      `)},{url:"https://www.youtube.com/watch?v=i1oTgYo3_ow",markers:x(`
1:24 wejście
1:37 konsola / oświetlenie
1:57 konsola
2:22 drzwi
2:30 konsola
2:40 kuchnia / wentylacja
3:43 oświetlenie +
4:06 kącik +
4:15 jadalnia +
4:35 salon
4:55 szafa
5:05 kącik
5:19 balkon
5:52 pralnia
5:58 toaleta
6:03 wentylacja
6:12 sypialnia
6:33 konsola / wentylacja
6:44 garderoba +
6:54 łazienka
7:05 oświetlenie
7:50 sypialnia
7:59 toaletka
8:18 toaleta
      `)},{url:"https://www.youtube.com/watch?v=jF7ncqj3PtU",markers:x(`
0:37 brama
0:57 elewacja
1:14 wejście
1:45 schody
2:06 kącik +
2:15 konsola
2:51 basen
2:54 kuchnia
3:26 jadalnia
4:14 kuchnia / wentylacja
5:33 rtv
6:21 kuchnia ogrodowa
6:56 toaleta
7:00  basen
9:56 garderoba
9:59 toaleta
10:12 garaż
10:56 toaleta
11:23 gabinet
11:39 sypialnia +
11:56 garderoba
11:59 toaleta
12:02 konsola
12:33 kącik / wentylacja
12:38 sypialnia
12:47 konsola / wentylacja
13:27 łazienka
14:03 toaleta
      `)},{url:"https://www.youtube.com/watch?v=TQplPcsWIWQ",markers:x(`
0:22 wejście
1:16 konsola
5:01 konsola
8:16 kotłownia / szafa jack
9:32 sypialnia / skosy
10:38 szafa / skosy
10:53 łazienka / skosy
12:04 szafa / skosy
12:11 łazienka / skosy
13:24 sypialnia / skosy
13:34 toaleta / skosy
13:57 korytarz / skosy
14:07 sypialnia / skosy
14:42 toaleta / skosy
15:09 prysznic ogrodowy
      `)},{url:"https://www.youtube.com/watch?v=ysKW4N9zNXA",markers:x(`
0:16 elewacja
1:25 wejście / brama
1:32 konsola / drzwi
2:33 kuchnia
2:55 oświetlenie
4:34 spiżarnia
5:44 jadalnia
6:27 szatnia / prysznic
6:38 salon
6:42 kominek
7:30 schody
7:35 toaleta
9:27 toaleta
9:49 gabinet
9:56 kino
10:01 pralnia
11:24 sypialnia
11:55 łazienka
12:39 balkon
13:19 pralnia
13:35 toaleta
13:48 sypialnia / szafa
14:08 sypialnia
14:25 toaleta
14:45 świetlik
15:29 sypialnia / skosy
15:36 toaleta
15:55 szafa / skosy
16:19 toaleta
16:34 gabinet / skosy
17:08 kącik / skosy
      `)},{url:"https://www.youtube.com/watch?v=t_cW76UNt_c",markers:x(`
0:59 wejście
1:02 kącik
1:05 konsola
1:08 szafa / wentylacja
1:09 toaleta
1:34 kuchnia
2:18 jadalnia
3:15 taras
4:00 salon
4:03 kominek
4:51 toaleta
4:57 jadalnia
5:05 bar
5:37 sypialnia / wentylacja
5:47 balkon
6:10 garderoba
6:17 łazienka / wentylacja +
6:29 wanna +
6:50 sypialnia / wentylacja
6:56 toaletka
7:06 toaleta
7:18 sypialnia
7:33 toaleta
7:59 kącik
8:00 gabinet / wentylacja
9:05 pralnia
9:28 świetlik
      `)},{url:"https://www.youtube.com/watch?v=tjaeQ2wUIUc",markers:x(`
3:16 barek
4:05 salon
4:25 kącik / jadalnia
4:31 kuchnia
4:41 oświetlenie / wentylacja
5:26 gabinet
5:52 szatnia
6:05 smart
6:50 kotłownia
6:57 pralnia
7:29 świetlik
9:17 kuchnia ogrodowa
10:28 sypialnia
11:00 garderoba
12:13 sypialnia / skosy
12:18 świetlik / wentylacja 
13:06 sypialnia
13:15 szafa / wentylacja 
13:42 kuchnia ogrodowa
      `)},{url:"https://www.youtube.com/watch?v=cAKFnpgyYwQ",markers:x(`
1:22 rewizja
4:42 jadalnia / kredens +
5:12 sypialnia
7:40 kącik / biurko
8:38 jadalnia
8:43 konsola / lustro
8:46 wejście / szafa
8:48 pralnia
      `)},{url:"https://www.youtube.com/watch?v=o_NFKowx8CA",markers:x(`
2:20 wejście
2:40 toaleta
3:15 kuchnia / okap
9:35 pralnia
14:32 łazienka / wanna +
15:53 toaleta
16:30 gabinet / skosy
      `)},{url:"https://www.youtube.com/watch?v=R_9-JElwV2A",markers:x(`
1:03 podjazd / brama
1:13 garaż / brama
1:58 wejście
2:32 salon
2:40 kominek
3:13 smart / oświetlenie +
3:18 jadalnia +
3:22 kredens
3:30 elewacja
3:44 kuchnia / wentylacja
5:06 salon / rtv
5:44 toaleta
5:50 pralnia
5:53 garaż
7:27 konsola
7:36 sypialnia
7:50 wentylacja / oświetlenie ++
8:35 konsola
9:07 łazienka
10:14 kącik / gabinet
13:20 kuchnia ogrodowa
13:45 toaleta
      `)},{url:"https://www.youtube.com/watch?v=2aVDki0LfkQ",markers:x(`
20:37 pralnia
22:36 sypialnia / skosy
22:50 toaleta / skosy
      `)},{url:"https://www.youtube.com/watch?v=7v4RulDkr-o",markers:x(`
2:25 konsola / lustro
2:48 salon / kominek
3:48 jadalnia +
3:55 konsola / lustro
4:19 kącik
4:35 kuchnia
5:18 kącik / kominek
7:00 salon / wentylacja
7:37 gabinet / wentylacja
8:26 kącik / wentylacja
9:25 sypialnia / wentylacja
9:56 roleta
10:41 łazienka
11:33 łazienka / wentylacja
12:05 kącik
12:37 sypialnia / wentylacja
12:57 łazienka
13:05 sypialnia / biurko
13:25 łazienka
13:55 sypialnia / biurko
14:12 łazienka
14:18 sypialnia
14:38 kącik
15:03 toaleta
16:06 basen / spa
      `)},{url:"https://www.youtube.com/watch?v=6ipQrXy-Ry8",markers:x(`
1:02 kuchnia / wentylacja
1:31 konsola
1:33 sypialnia
1:37 plan
4:00 jadalnia
4:53 toaleta
4:57 drzwi
5:43 kącik / oświetlenie
8:37 sypialnia / wentylacja
10:00 łazienka
10:46 szafa
11:10 drzwi
11:14 toaleta
11:42 toaleta
11:45 pralnia
11:57 konsola +
12:07 drzwi
12:30 sypialnia +
13:14 toaleta / oświetlenie
13:45 szafa / rolety
      `)},{url:"https://www.youtube.com/watch?v=-4JvfrZCDdI",markers:x(`
0:42 konsola
1:43 konsola / lustro
1:52 szatnia
2:13 salon
3:48 kącik
5:05 rtv
9:13 jadalnia / kredens
12:10 kuchnia
13:28 sypialnia / toaletka
15:05 szafa
      `)},{url:"https://www.youtube.com/watch?v=MKklxO0PgU0",markers:x(`
1:05 wejście
1:09 konsola / lustro
1:50 drzwi
1:55 toaleta
2:05 kuchnia
3:06 jadalnia
3:38 kącik / wentylacja
3:50 schody +
5:02 plan
6:10 schody +
6:23 salon
6:26 rtv / kominek
7:25 gabinet
7:53 szatnia
7:55 pralnia
8:23 salon / kominek
9:47 sypialnia / szafa
11:40 łazienka / skosy
      `)},{url:"https://www.youtube.com/watch?v=zMqIWPo58AE",markers:x(`
1:02 furtka
2:18 wejście
2:40 konsola
2:45 kącik / wentylacja
3:41 jadalnia
4:11 sypialnia / toaleta
4:20 gabinet
5:14 salon / rtv
5:27 drzwi / wentylacja
7:43 kuchnia
8:14 spiżarnia
8:19 pralnia
8:54 smart
9:19 kuchnia ogrodowa
10:12 garaż
12:01 kącik
12:47 gabinet
15:25 kino / rtv
      `)},{url:"https://www.youtube.com/watch?v=X0P-TrDrA6Y",markers:x(`
3:54 sypialnia
4:09 toaleta
4:33 szafa
4:54 toaleta
5:00 sypialnia
5:06 oświetlenie +
5:14 szafa
5:19 sypialnia
5:36 toaleta +
6:08 sypialnia
6:50 łazienka
7:39 toaleta
7:57 toaletka
8:00 garderoba
8:14 smart
8:48 salon
9:00 gabinet
9:06 oświetlenie / wentylacja +
9:23 toaleta +
14:57 toaleta
15:00 spa
15:23 bar
15:35 sauna
15:59 kino
17:48 toaleta
18:30 sauna
21:56 łazienka
23:01 sypialnia
23:04 wentylacja / oświetlenie +
23:07 szafa
24:39 toaleta
25:01 toaleta
25:39 kuchnia +
26:09 świetlik
26:33 jadalnia +
26:40 salon +
      `)},{url:"https://www.youtube.com/watch?v=lIiMDDdKXZ8",markers:[{text:"elewacja",time:2},{text:"wejście",time:33},{text:"wentylacja",time:43},{text:"konsola",time:47},{text:"salon",time:75},{text:"jadalnia",time:209},{text:"bar",time:219},{text:"kuchnia",time:252},{text:"oświetlenie",time:335},{text:"jadalnia",time:356},{text:"salon",time:380},{text:"oświetlenie / wentylacja",time:431},{text:"basen",time:454},{text:"toaletka",time:494},{text:"toaleta",time:523},{text:"pok\xf3j",time:546},{text:"sypialnia",time:578},{text:"szafa",time:580},{text:"drzwi",time:584},{text:"toaleta",time:595},{text:"elewacja",time:600},{text:"garaż",time:612},{text:"schody",time:620},{text:"bawialnia",time:656},{text:"drzwi / wentylacja",time:665},{text:"sypialnia",time:675},{text:"szafa",time:684},{text:"toaleta",time:688},{text:"pralnia",time:699},{text:"sypialnia / wentylacja",time:706},{text:"sypialnia",time:716},{text:"garderoba",time:780},{text:"łazienka",time:804},{text:"sauna",time:812},{text:"łazienka",time:827},{text:"sauna",time:837},{text:"schody",time:854},{text:"salon",time:865},{text:"siłownia / spa +",time:912},{text:"basen",time:937},{text:"łazienka",time:964},{text:"sauna +",time:968},{text:"kino",time:981},{text:"toaleta",time:1013},{text:"sypialnia",time:1033},{text:"kuchnia ogrodowa",time:1083},{text:"kuchnia",time:1124},{text:"wentylacja",time:1136},{text:"sypialnia",time:1145}]},{url:"https://www.youtube.com/watch?v=Skc4eh7efA4",markers:[{text:"balkon",time:40},{text:"rtv",time:86},{text:"oświetlenie / wentylacja",time:88},{text:"sypialnia",time:269},{text:"balkon",time:323},{text:"łazienka",time:338},{text:"toaleta",time:383},{text:"kuchnia",time:423},{text:"sauna",time:670},{text:"toaleta",time:705},{text:"gabinet",time:710},{text:"toaleta",time:730}]},{url:"https://www.youtube.com/watch?v=Lh67DMwZ2MY",markers:[{text:"kuchnia ogrodowa",time:868},{text:"oświetlenie",time:982},{text:"sypialnia",time:1042},{text:"toaleta",time:1059},{text:"garderoba",time:1072},{text:"pralnia",time:1078},{text:"sypialnia",time:1085},{text:"sauna",time:1110},{text:"sypialnia",time:1143},{text:"garderoba",time:1167},{text:"toaleta",time:1170},{text:"smart",time:1200},{text:"siłownia",time:1226},{text:"garderoba",time:1292},{text:"sypialnia",time:1350},{text:"łazienka",time:1405}]},{url:"https://www.youtube.com/watch?v=L8OmA1P7bB8",markers:[{text:"elewacja",time:5},{text:"kominek",time:75},{text:"jadalnia / wentylacja",time:224},{text:"kuchnia",time:236},{text:"ekspres",time:255},{text:"gabinet",time:300},{text:"toaleta",time:447},{text:"sypialnia",time:482},{text:"łazienka",time:493},{text:"sypialnia",time:513},{text:"sypialnia",time:582},{text:"łazienka",time:598},{text:"kuchnia",time:664},{text:"kominek",time:791},{text:"łazienka",time:919}]},{url:"https://www.youtube.com/watch?v=xBey-_2IMrI",markers:[{text:"elewacja",time:10},{text:"wejście",time:30},{text:"kuchnia",time:37},{text:"salon",time:165},{text:"warsztat",time:220},{text:"toaleta",time:260},{text:"gabinet",time:272},{text:"sypialnia",time:335},{text:"łazienka",time:351},{text:"konsola",time:381},{text:"świetlik",time:384},{text:"sypialnia",time:392},{text:"drzwi",time:409},{text:"sypialnia",time:452}]},{url:"https://www.youtube.com/watch?v=6NwVQKrKZIU",markers:[{text:"elewacja",time:16},{text:"wejście",time:40},{text:"szatnia",time:50},{text:"pralnia",time:52},{text:"kuchnia",time:83},{text:"ekspres",time:128},{text:"gabinet",time:159},{text:"jadalnia",time:181},{text:"kominek",time:193},{text:"balkon",time:243},{text:"schody",time:297},{text:"toaleta",time:390},{text:"sypialnia",time:400},{text:"kino",time:467},{text:"sauna",time:504},{text:"salon",time:530},{text:"sypialnia",time:570},{text:"sypialnia",time:648},{text:"balkon",time:650},{text:"łazienka",time:694},{text:"świetlik",time:735},{text:"sypialnia",time:751},{text:"sypialnia",time:787},{text:"toaleta",time:835},{text:"świetlik",time:839},{text:"pergola",time:865}]},{url:"https://www.youtube.com/watch?v=EAvY_2znQfw",markers:[{text:"elewacja",time:30},{text:"wejście",time:117},{text:"schody",time:124},{text:"szafa",time:155},{text:"garderoba",time:165},{text:"toaleta",time:169},{text:"gabinet",time:172},{text:"konsola",time:190},{text:"kuchnia",time:217},{text:"ekspres",time:247},{text:"pralnia",time:293},{text:"toaleta",time:340},{text:"kuchnia ogrodowa",time:502},{text:"łazienka",time:542},{text:"szafa",time:594},{text:"sypialnia",time:655},{text:"toaletka",time:660}]},{url:"https://www.youtube.com/watch?v=r9F_U3gUyQ0",markers:[{text:"wejście",time:48},{text:"kuchnia",time:53},{text:"sypialnia",time:412},{text:"toaleta",time:471}]},{url:"https://www.youtube.com/watch?v=7EJWbR2Np1Q",markers:[{text:"wejście",time:5},{text:"elewacja",time:12},{text:"konsola",time:40},{text:"gabinet",time:44},{text:"kino",time:89},{text:"toaleta",time:158},{text:"kuchnia",time:190},{text:"ekspres",time:268},{text:"pralnia",time:345},{text:"jadalnia",time:369},{text:"kominek",time:416},{text:"konsola",time:562},{text:"sypialnia",time:566},{text:"sypialnia",time:600},{text:"łazienka",time:625},{text:"sypialnia",time:700},{text:"łazienka",time:803},{text:"garderoba",time:847}]},{url:"https://www.youtube.com/watch?v=QU6IVgQAKYo",markers:[{text:"elewacja",time:102},{text:"wejście",time:210},{text:"kuchnia",time:287},{text:"bar",time:399},{text:"jadalnia",time:405},{text:"kominek",time:462},{text:"rtv",time:474},{text:"spa",time:563},{text:"gabinet",time:676},{text:"toaleta",time:684},{text:"sypialnia",time:710},{text:"toaleta",time:733},{text:"sypialnia",time:816},{text:"łazienka",time:828},{text:"świetlik",time:832},{text:"ekspres",time:863},{text:"sypialnia",time:878},{text:"toaleta",time:923},{text:"sypialnia",time:938},{text:"toaleta",time:971}]},{url:"https://www.youtube.com/watch?v=bhG5G_Ljx2k",markers:[{text:"wejście",time:127},{text:"kuchnia",time:210},{text:"toaleta",time:333},{text:"smart",time:336},{text:"toaleta",time:341},{text:"łazienka",time:485}]},{url:"https://www.youtube.com/watch?v=xcc-ix8E8y8",markers:[{text:"szatnia",time:153},{text:"toaleta",time:155},{text:"audio / smart",time:199},{text:"smart",time:199},{text:"salon",time:224},{text:"jadalnia",time:230},{text:"rtv",time:234},{text:"kuchnia",time:253},{text:"gabinet",time:295},{text:"schody",time:335},{text:"sypialnia",time:384},{text:"garderoba",time:420},{text:"łazienka",time:450},{text:"sauna",time:454},{text:"smart",time:508},{text:"siłownia",time:530},{text:"toaleta",time:576},{text:"sypialnia",time:584},{text:"łazienka",time:589},{text:"pralnia",time:657},{text:"kotłownia",time:662},{text:"wejście",time:665}]},{url:"https://www.youtube.com/watch?v=UL4iRlUuHUY",markers:[{text:"kuchnia",time:180},{text:"jadalnia",time:247},{text:"gabinet",time:280},{text:"toaleta",time:298},{text:"sypialnia",time:309},{text:"łazienka",time:318},{text:"garderoba",time:322},{text:"bar",time:335},{text:"konsola",time:360},{text:"basen",time:365},{text:"spa",time:434},{text:"siłownia",time:446},{text:"kino",time:497},{text:"sypialnia",time:536},{text:"toaleta",time:541},{text:"garderoba",time:543},{text:"toaletka",time:544},{text:"sypialnia",time:597},{text:"toaleta",time:601},{text:"sypialnia",time:606},{text:"toaleta",time:608}]},{url:"https://www.youtube.com/watch?v=FSsRaoamxhM",markers:[{text:"elewacja",time:43},{text:"schody",time:130},{text:"kominek",time:136},{text:"wejście",time:179},{text:"szopa",time:207},{text:"kominek",time:381},{text:"kuchnia",time:383},{text:"rtv",time:428},{text:"szatnia",time:438},{text:"toaleta",time:440},{text:"pergola",time:465},{text:"balia",time:560},{text:"świetlik",time:571},{text:"tenis",time:631},{text:"sypialnia",time:655},{text:"szafa",time:660},{text:"balkon / lukarna",time:672},{text:"łazienka",time:678},{text:"sypialnia",time:690},{text:"łazienka",time:692},{text:"sypialnia",time:705},{text:"toaleta",time:715},{text:"schody",time:746},{text:"pok\xf3j gościnny",time:756},{text:"toaleta",time:763},{text:"sypialnia",time:766},{text:"basen",time:789}]},{url:"https://www.youtube.com/watch?v=2r2_4ifBXis",markers:[{text:"garaż",time:40},{text:"wejście",time:90},{text:"szafa",time:105},{text:"wiatrołap",time:130},{text:"kuchnia",time:135},{text:"schody",time:192},{text:"balkon",time:252},{text:"szafa",time:322},{text:"sypialnia",time:327},{text:"toaletka",time:334},{text:"łazienka",time:346},{text:"smart / schody",time:376},{text:"świetlik / lukarna",time:399},{text:"sypialnia",time:417},{text:"świetlik / lukarna",time:457},{text:"łazienka",time:469},{text:"konsola",time:499},{text:"sypialnia",time:502},{text:"toaleta",time:524},{text:"gabinet",time:562},{text:"sypialnia",time:570},{text:"konsola",time:574},{text:"garderoba",time:579},{text:"toaleta",time:585},{text:"konsola",time:600},{text:"rtv",time:610}]},{url:"https://www.youtube.com/watch?v=voowzG28gzo",markers:[{text:"wejście",time:83},{text:"jadalnia",time:145},{text:"kuchnia",time:150},{text:"rtv",time:255},{text:"oświetlenie / wentylacja",time:174},{text:"toaleta",time:285},{text:"salon",time:302},{text:"kominek",time:336},{text:"spa",time:481},{text:"sauna",time:487},{text:"toaleta",time:502},{text:"kino",time:543},{text:"sypialnia",time:608},{text:"gabinet",time:613},{text:"drzwi",time:683},{text:"garderoba",time:703},{text:"wanna",time:707},{text:"sypialnia",time:721},{text:"łazienka",time:763},{text:"toaleta",time:796},{text:"świetlik",time:815},{text:"toaleta",time:844},{text:"toaletka",time:845},{text:"sypialnia",time:848},{text:"sypialnia",time:881},{text:"toaleta",time:901},{text:"schody",time:924}]},{url:"https://www.youtube.com/watch?v=1uPnhDgXgYk",markers:[{text:"elewacja",time:12},{text:"panele",time:21},{text:"elewacja",time:58},{text:"wejście",time:65},{text:"ławka",time:68},{text:"salon",time:88},{text:"kuchnia",time:90},{text:"oświetlenie",time:159},{text:"spiżarnia",time:184},{text:"jadalnia",time:196},{text:"kominek",time:200},{text:"salon",time:207},{text:"pok\xf3j",time:215},{text:"oświetlenie",time:328},{text:"toaleta",time:336},{text:"sypialnia",time:375},{text:"łazienka",time:405},{text:"garderoba",time:476},{text:"sypialnia",time:498},{text:"toaleta",time:508},{text:"sypialnia",time:543},{text:"toaleta",time:557},{text:"pok\xf3j",time:570},{text:"świetlik",time:575},{text:"pralnia",time:615},{text:"sypialnia",time:658},{text:"łazienka",time:672},{text:"toaleta",time:698},{text:"sypialnia",time:699},{text:"gabinet",time:701},{text:"pok\xf3j",time:763}]},{url:"https://www.youtube.com/watch?v=UfnPKvN3DY8",markers:[{text:"wejście",time:16},{text:"smart",time:56},{text:"schody",time:66},{text:"kuchnia",time:88},{text:"jadalnia",time:153},{text:"bar",time:165},{text:"salon",time:257},{text:"rtv",time:263},{text:"pralnia",time:285},{text:"kino",time:335},{text:"toaleta",time:366},{text:"salon",time:398},{text:"kominek",time:427},{text:"bar",time:449},{text:"garderoba",time:477},{text:"łazienka",time:494},{text:"sypialnia",time:537},{text:"wentylacja",time:553},{text:"sypialnia",time:575},{text:"toaletka",time:593},{text:"łazienka",time:623},{text:"świetlik",time:640},{text:"szafa",time:700},{text:"smart",time:713},{text:"toaleta",time:720},{text:"świetlik",time:730},{text:"sypialnia",time:733}]},{url:"https://www.youtube.com/watch?v=6U-fIY4ykFc",markers:[{text:"wejście",time:167},{text:"smart",time:178},{text:"kuchnia",time:233},{text:"jadalnia",time:293},{text:"oświetlenie",time:309},{text:"świetlik",time:332},{text:"kuchnia",time:358},{text:"schody",time:423},{text:"toaleta",time:488},{text:"pralnia",time:629},{text:"gabinet",time:715},{text:"sypialnia",time:850},{text:"toaleta",time:881},{text:"sypialnia",time:917},{text:"szopa",time:940},{text:"łazienka",time:965},{text:"sypialnia",time:987},{text:"szopa",time:1064},{text:"kuchnia ogrodowa",time:1164},{text:"basen",time:1239},{text:"siłownia",time:1314},{text:"toaleta",time:1340},{text:"sauna",time:1348}]},{url:"https://www.youtube.com/watch?v=GYHz1hL8VTI",markers:[{text:"panele",time:30},{text:"wejście",time:83},{text:"schody",time:118},{text:"garderoba",time:138},{text:"toaleta",time:157},{text:"schody",time:268},{text:"kuchnia",time:331},{text:"smart",time:1105},{text:"garderoba",time:1143},{text:"łazienka",time:1174},{text:"okno",time:1213},{text:"lukarna",time:1391}]},{url:"https://www.youtube.com/watch?v=E3mxJ11JUmg",markers:[{text:"elewacja",time:40},{text:"wejście",time:223},{text:"kuchnia",time:241},{text:"jadalnia",time:374},{text:"gabinet",time:432},{text:"siłownia",time:451},{text:"toaleta",time:471},{text:"balkon",time:518},{text:"elewacja",time:557},{text:"basen",time:752},{text:"schody",time:766},{text:"sypialnia",time:773},{text:"wentylacja",time:810},{text:"garderoba",time:818},{text:"wentylacja",time:846},{text:"toaleta",time:854},{text:"sypialnia",time:910},{text:"szafa",time:922},{text:"toaleta",time:927},{text:"sypialnia",time:1020},{text:"szafa",time:1029},{text:"wentylacja",time:1035},{text:"toaleta",time:1050},{text:"pralnia",time:1072},{text:"łazienka",time:1075},{text:"sauna",time:1082},{text:"sypialnia",time:1157},{text:"toaleta",time:1200},{text:"sypialnia",time:1205},{text:"toaletka",time:1210},{text:"szafa",time:1215}]},{url:"https://www.youtube.com/watch?v=bSTcm99Lr3E",markers:[{text:"elewacja",time:43},{text:"kuchnia",time:81},{text:"jadalnia",time:102},{text:"ekspres / spiżarnia",time:160},{text:"kominek",time:212},{text:"jadalnia",time:267},{text:"sypialnia",time:297},{text:"łazienka",time:342}]},{url:"https://www.youtube.com/watch?v=nXYuXCxLmN8",markers:[{text:"elewacja",time:30},{text:"wejście",time:68},{text:"schody",time:99},{text:"oświetlenie",time:107},{text:"lustro",time:112},{text:"jadalnia",time:70},{text:"kominek",time:150},{text:"rtv",time:189},{text:"kuchnia",time:265},{text:"ekspres",time:322},{text:"garderoba",time:345}]},{url:"https://www.youtube.com/watch?v=O9vc6vySiXk",markers:[{text:"lustro / konsola",time:10},{text:"kominek",time:110},{text:"kuchnia",time:192},{text:"toaleta",time:325},{text:"łazienka",time:349},{text:"toaleta",time:393}]},{url:"https://www.youtube.com/watch?v=hH-RSt1Oqhs",markers:[]},{url:"https://www.youtube.com/watch?v=j2Zl1BQ6Mi8",markers:[]},{url:"https://www.youtube.com/watch?v=AuaSm4QNJjk",markers:[{text:"salon",time:10},{text:"kuchnia",time:170},{text:"spiżarnia",time:205},{text:"lustro / konsola",time:228},{text:"sypialnia",time:258},{text:"garderoba",time:304},{text:"toaleta",time:340},{text:"spiżarnia",time:372},{text:"toaleta",time:404},{text:"balkon",time:445}]},{url:"https://www.youtube.com/watch?v=pHVs032EI9Y",markers:[{text:"elewacja",time:40},{text:"elewacja",time:55},{text:"łazienka",time:168},{text:"jadalnia",time:177},{text:"pralnia",time:188},{text:"kominek",time:242},{text:"kuchnia",time:253},{text:"sypialnia",time:349},{text:"łazienka",time:371},{text:"sypialnia",time:402},{text:"sypialnia",time:410},{text:"kuchnia ogrodowa",time:432}]},{url:"https://www.youtube.com/watch?v=VltmMbeEyY4",markers:[]},{url:"https://www.youtube.com/watch?v=v3c04jFy8AM",markers:[{text:"kuchnia",time:48},{text:"lustro / konsola",time:70},{text:"rtv",time:127},{text:"kuchnia",time:264},{text:"sypialnia",time:335},{text:"łazienka",time:380},{text:"sypialnia",time:406},{text:"toaleta",time:438}]},{url:"https://www.youtube.com/watch?v=q1RIm2lS_P4",markers:x(`
0:09 elewacja
1:35 elewacja
2:03 toaleta
2:43 kuchnia
2:47 pok\xf3j
3:05 garaż
3:20 wejście
3:27 schody
4:05 kącik / rtv
4:50 kuchnia ogrodowa ++
5:06 salon
      `)},{url:"https://www.youtube.com/watch?v=4Rr42pKtlhw",markers:x(`
1:14 balkon
1:29 schody
1:51 kuchnia ogrodowa
1:55 schody
2:24 toaleta +
2:30 kuchnia
4:39 kącik / rtv
      `)},{url:"https://www.youtube.com/watch?v=jmvfhjlFLFQ",markers:x(`
1:33 elewacja ++
4:12 salon / rtv
4:18 łazienka +
5:40 schody
5:57 salon / kominek
6:52 schody
      `)},{url:"https://www.youtube.com/watch?v=smbbWe2JvqA",markers:x(`
0:11 kuchnia
0:54 elewacja
2:11 kuchnia
2:26 bar
3:02 schody
3:22 toaleta
3:39 szatnia
3:46 sypialnia
5:09 elewacja
5:38 ogr\xf3d
      `)},{url:"https://www.youtube.com/watch?v=8TJ4lFWrJks",markers:x(`
0:52 elewacja +
1:36 kącik / rtv
1:53 łazienka +
2:10 sypialnia
2:37 jadalnia
2:45 kuchnia
2:51 kącik / kominek
3:08 gabinet
3:20 ogr\xf3d
3:30 sypialnia
3:53 sypialnia
4:02 toaleta
4:23 balkon
4:29 kuchnia
4:33 schody
4:41 elewacja
5:16 kominek
5:46 elewacja
      `)},{url:"https://www.youtube.com/watch?v=5_r5IWWeYk0",markers:x(`
0:12 elewacja +
1:18 salon / kominek
1:23 elewacja +
2:57 palenisko
3:18 sypialnia
3:33 sypialnia
4:14 łazienka
5:13 salon / kominek
5:58 kuchnia
6:12 sypialnia
      `)},{url:"https://www.youtube.com/watch?v=Qe4l5anx3rU",markers:x(`
1:14 elewacja +
1:36 kuchnia
1:39 ogrodzenie ++
1:50 łazienka
1:52 sypialnia
2:11 elewacja
2:56 salon / kominek
3:06 kuchnia
3:12 kuchnia ogrodowa
3:45 basen
3:48 ogrodzenie ++
5:09 patio
      `)},{url:"https://www.youtube.com/watch?v=incmD0ZiRWE",markers:x(`
1:38 kuchnia
1:41 sypialnia
2:14 elewacja
3:11 kuchnia ogrodowa
3:18 salon / kominek
3:21 jadalnia
3:34 sypialnia
3:38 łazienka
      `)},{url:"https://www.youtube.com/watch?v=-_CW3KnLczg",markers:x(`
1:27 elewacja
1:42 schody
2:14 basen
2:26 salon / rtv
2:30 wentylacja +
3:01 kuchnia
3:29 łazienka
3:36 sypialnia
5:09 kącik / salon
      `)},{url:"https://www.youtube.com/watch?v=v7IsTZKw6G4",markers:x(`
0:53 elewacja
1:37 jadalnia
1:57 brama garażowa
2:01 elewacja +
2:09 kuchnia
2:13 kuchnia ogrodowa
2:25 kącik
2:29 drzwi
2:36 łazienka
3:31 elewacja
5:22 łazienka
      `)},{url:"https://www.youtube.com/watch?v=v1TXZkNYUIY",markers:x(`
0:07 schody ++
0:10 elewacja
0:17 szopa
0:24 jadalnia
0:43 kuchnia
0:47 kącik / pok\xf3j
0:50 wejście
1:11 jadalnia
1:19 rtv
1:22 schody ++
1:27 sypialnia
1:31 sypialnia
1:35 toaleta
2:06 łazienka
2:14 salon / rtv
2:40 sypialnia
2:57 toaleta
3:23 basen
3:49 świetlik
3:59 gabinet
4:50 łazienka
      `)},{url:"https://www.youtube.com/watch?v=l9VDdD0d_1w",markers:x(`
0:13 elewacja
0:46 jadalnia
1:09 elewacja
1:18 wejście
1:29 szatnia
1:47 elewacja
2:11 salon / kominek
2:23 elewacja
3:09 kuchnia ogrodowa
3:13 toaleta +
3:40 elewacja +
      `)},{url:"https://www.youtube.com/watch?v=UGjN8VXMyHg",markers:x(`
0:16 elewacja +
1:31 brama garażowa +
1:38 wejście
1:59 toaleta
2:04 brama garażowa +
2:16 sypialnia
2:18 sypialnia
2:23 toaleta
2:26 kącik
2:42 łazienka
2:46 kuchnia
2:49 jadalnia
3:08 elewacja +
      `)},{url:"https://www.youtube.com/watch?v=SvAOtgMmAkg",markers:x(`
0:08 elewacja +
0:15 schody +
0:20 elewacja +
1:07 elewacja +
1:44 kuchnia
1:57 brama garażowa +
2:09 wejście
2:12 kotłownia
2:20 elewacja / balustrada +
2:23 panele
2:30 drzwi ++
2:31 toaleta
2:37 pok\xf3j / rtv
3:08 schody
3:22 łazienka
3:29 sypialnia
3:34 balkon
3:47 elewacja
4:06 kotłownia
      `)},{url:"https://www.youtube.com/watch?v=FzDunpHJLo8",markers:x(`
1:22 schody +
1:28 gabinet / pracownia
1:34 kuchnia
1:51 salon / rtv
2:03 wejście
2:41 gabinet / pracownia
2:49 balkon
3:37 drzwi +
3:44 toaleta +
3:46 sypialnia +
4:12 kącik / pok\xf3j
      `)},{url:"https://www.youtube.com/watch?v=lqh_HK8MsYA",markers:x(`
2:52 elewacja +
3:25 kuchnia
3:36 toaleta
3:42 sypialnia
3:48 toaleta
3:50 basen
3:54 sypialnia
4:45 kuchnia
4:56 kominek
      `)},{url:"https://www.youtube.com/watch?v=z5-lIA7BuwQ",markers:x(`
0:23 elewacja +
1:34 szopa ++
      `)},{url:"https://www.youtube.com/watch?v=PtShECOgRrw",markers:x(`
1:04 lukarna
1:15 ogrodzenie +
      `)},{url:"https://www.youtube.com/watch?v=MIJ8BxBIufA",markers:x(`
3:00 lukarna ++
3:35 elewacja
      `)},{url:"https://www.youtube.com/watch?v=JV4PP2Cq8uo",markers:x(`
0:39 elewacja
      `)},{url:"https://www.youtube.com/watch?v=yJb80E-yma0",markers:x(`
0:40 elewacja +
1:07 pergola
1:30 elewacja +
3:29 pralnia
4:47 elewacja +
      `)},{url:"https://www.youtube.com/watch?v=jQdXn-GSb5A",markers:x(`
0:16 schody ++
0:20 kominek / rtv
0:33 elewacja
0:22 schody
1:35 kącik / skosy
1:45 kuchnia
2:13 salon
2:55 kuchnia
3:09 elewacja
3:56 toaleta
5:33 kuchnia ogrodowa
      `)},{url:"https://www.youtube.com/watch?v=3-SsmCHYduY",markers:x(`
      `)},{url:"https://www.youtube.com/watch?v=mY13Slnc4uQ",markers:x(`
      `)},{url:"https://www.youtube.com/watch?v=i6c0Pvei3F4",markers:x(`
      `)},{url:"https://www.youtube.com/watch?v=uD1ti4o2ch4",markers:x(`
      `)},{url:"https://www.youtube.com/watch?v=L1ZRlRXEtxs",markers:x(`
      `)},{url:"https://www.youtube.com/watch?v=nxPBfkEMmt0",markers:x(`
      `)},{url:"https://www.youtube.com/watch?v=dLYdNB3jNi4",markers:x(`
      `)},{url:"https://www.youtube.com/watch?v=nrCWBxyokIA",markers:x(`
0:29 elewacja
0:43 elewacja / lukarna +
0:52 elewacja
1:00 elewacja +
1:18 elewacja
22:14 schody
23:16 elewacja
27:47 elewacja
31:44 toaleta / drzwi
36:53 elewacja
1:05:02 elewacja / lukarna +
1:12:40 elewacja
1:20:27 elewacja
1:23:58 schody
      `)},{url:"https://www.youtube.com/watch?v=RMiMVbHmPc8",markers:x(`
0:01 elewacja
1:55 schody
      `)},{url:"https://www.youtube.com/watch?v=DgzdfakzqQA",markers:x(`
4:23 smart
5:06 kuchnia ogrodowa
7:07 szafa rack
10:21 smart
      `)},{url:"https://www.youtube.com/watch?v=ccTeO326mCU",markers:x(`
2:15 smart
8:57 szafa rack
      `)},{url:"https://www.youtube.com/watch?v=Q_LiZoknXq8",markers:x(`
3:03 schody
6:05 smart
8:05 smart
10:44 szafa rack
18:59 kuchnia ogrodowa
      `)},{url:"https://www.youtube.com/watch?v=rCBspLFFVcg",markers:x(`
0:32 elewacja
      `)},{url:"https://www.youtube.com/watch?v=PCAKIF6djis",markers:x(`
0:52 elewacja
1:31 elewacja +
4:03 spiżarnia
8:15 smart
      `)},{url:"https://www.youtube.com/watch?v=JDFAQkHD9JQ",markers:x(`
0:23 elewacja
      `)},{url:"https://www.youtube.com/watch?v=Tu-7ZrzOoPY",markers:x(`
0:01 elewacja
3:06 kuchnia
6:43 sypialnia
7:23 sypialnia
      `)},{url:"https://www.youtube.com/watch?v=a-t0Q_YQpAQ",markers:x(`
0:38 elewacja
1:56 kuchnia
1:56 kuchnia
2:30 spiżarnia
3:50 sypialnia
4:08 łazienka
5:42 sypialnia
6:00 sypialnia
      `)},{url:"https://www.youtube.com/watch?v=UdoKwimjUsQ",markers:x(`
0:01 elewacja
0:13 kuchnia
      `)},{url:"https://www.youtube.com/watch?v=VljkrsVHi14",markers:x(`
0:20 kominek ++
      `)},{url:"https://www.youtube.com/watch?v=FfyzlH6bpZA",markers:x(`
1:01 kominek ++
1:36 kominek ++
2:07 kominek ++
      `)},{url:"https://www.youtube.com/watch?v=WVu-lH0rmPA",markers:x(`
0:08 sauna +
      `)},{url:"https://www.youtube.com/watch?v=SlJstiYyfmw",markers:x(`
0:01 sauna
      `)},{url:"https://www.youtube.com/watch?v=E-2Ym1Dyk08",markers:x(`
2:36 elewacja
3:26 wejście
4:47 toaleta
10:42 toaleta
12:56 patio / elewacja
13:36 gabinet
14:22 kino
14:50 sypialnia
15:47 smart
15:52 toaleta
16:35 wanna
17:34 garderoba
17:58 pralnia
19:35 toaleta
30:45 kuchnia ogrodowa
34:05 toaleta
34:21 kącik
36:57 szatnia
38:40 sypialnia
40:07 garderoba
40:44 pralnia
41:40 sypialnia
42:05 łazienka
42:37 basen
      `)},{url:"https://www.youtube.com/watch?v=yyKAOARkSZE",markers:x(`
0:05 sauna ogrodowa
15:00 sauna
      `)},{url:"https://www.youtube.com/watch?v=Z3HTFT7iL0E",markers:x(`
0:27 sauna ogrodowa
0:43 sauna
      `)},{url:"https://www.youtube.com/watch?v=8fxRzu_Qvt0",markers:x(`
0:09 sauna ogrodowa
0:56 sauna
      `)},{url:"https://www.youtube.com/watch?v=yAME1ZK7tDY",markers:x(`
0:15 sauna ogrodowa
1:02 sauna
      `)},{url:"https://www.youtube.com/watch?v=ONwXbWfhvZg",markers:x(`
0:07 sauna ogrodowa
0:19 sauna
      `)},{url:"https://www.youtube.com/watch?v=p7nNJ0kPyAc",markers:x(`
0:14 sauna ogrodowa
0:32 sauna
      `)},{url:"https://www.youtube.com/watch?v=Shv1936yvW0",markers:x(`
0:09 sauna ogrodowa
0:11 sauna
      `)},{url:"https://www.youtube.com/watch?v=pmRFn_Ptk_Y",markers:x(`
0:01 sauna ogrodowa
      `)},{url:"https://www.youtube.com/watch?v=V6yZuAUuslU",markers:x(`
0:04 szopa
      `)},{url:"https://www.youtube.com/watch?v=8MYIL0R4mh0",markers:x(`
0:14 szopa
      `)},{url:"https://www.youtube.com/watch?v=GE3aywLPRUg",markers:x(`
0:40 szopa / sauna
      `)},{url:"https://www.youtube.com/watch?v=927BvkIZglw",markers:x(`
0:15 szopa
1:21 sauna
      `)},{url:"https://www.youtube.com/watch?v=qMyWh25_CsM",markers:x(`
0:22 wejście
0:40 schody
1:37 kino
2:18 szatnia
2:35 gabinet
3:29 toaleta
3:40 kącik / pok\xf3j
6:37 kącik / salon
8:12 jadalnia
9:06 kuchnia
11:16 spiżarnia +
11:53 ekspres
13:35 kotłownia
15:02 sypialnia
16:05 sypialnia
16:17 toaleta +
16:24 łazienka
16:53 toaleta +
17:00 pralnia
17:41 szafa +
19:29 toaletka
      `)},{url:"https://www.youtube.com/watch?v=0MqDbN0S8Ms",markers:x(`
0:34 elewacja
3:08 elewacja
6:47 szopa
      `)},{url:"https://www.youtube.com/watch?v=h2_sXdU8SQA",markers:x(`
3:24 szopa
3:37 kuchnia ogrodowa
5:43 basen
7:47 sauna
8:28 toaleta
      `)}];var y=a(53665),p=a.n(y);let d={search:""};function b({label:t,...e}){return(0,i.jsxs)("label",{children:[(0,i.jsx)("span",{children:t}),(0,i.jsx)("input",{...e})]})}function j({filters:t,setFilters:e}){return(0,i.jsx)("fieldset",{children:(0,i.jsx)("div",{children:(0,i.jsx)(b,{type:"search",label:"Search",value:t.search,onChange:(0,o.useCallback)(({target:t})=>e(e=>({...e,search:t.value})),[])})})})}let g=t=>t.split("=")[1];function v({onAdd:t}){let[e,a]=(0,o.useState)(()=>""),[n,l]=(0,o.useState)(()=>""),s=(0,o.useCallback)(()=>{console.log({url:e});let i=e.trim();i.match(/https:\/\/www.youtube.com\/watch\?v=(.+)/)?(l(""),a(""),t(i)):""===i?l("Empty Url"):l(`Invalid Url: ${i}`)},[e]);return(0,i.jsx)("fieldset",{children:(0,i.jsxs)("div",{children:[(0,i.jsx)(b,{type:"text",label:"New Url",value:e,onChange:(0,o.useCallback)(({target:t})=>a(t.value),[]),onFocus:(0,o.useCallback)(({target:t})=>t.select(),[])}),(0,i.jsx)("button",{onClick:s,children:"Add"}),n&&(0,i.jsx)("span",{style:{backgroundColor:"lemonchiffon",color:"red",marginLeft:"1em",padding:".25em .5em"},children:n})]})})}function f({list:t,queries:e}){let[a,n]=(0,o.useState)(()=>t.filter(()=>!1).map(({url:t})=>t)),l=(0,o.useMemo)(()=>t.filter(t=>""===e.search||t.url.toLowerCase().includes(e.search)||t.markers.find(({text:t})=>t.toLowerCase().includes(e.search))),[e,t]),s=(0,o.useCallback)(({target:t})=>{let e;return e=t.value,n(a=>a.filter(t=>t!==e).concat(t.checked?e:[]))},[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("small",{children:l.length===t.length?`Showing all of ${t.length}`:`Found ${l.length} items out of a total of ${t.length}`}),(0,i.jsxs)("table",{className:p().Table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{width:20}}),(0,i.jsx)("th",{align:"left",children:"url"})]})}),(0,i.jsx)("tbody",{children:l.map(t=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("label",{children:(0,i.jsx)("input",{type:"checkbox",value:t.url,checked:a.includes(t.url),onChange:s})})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("div",{children:(0,i.jsx)("a",{href:t.url,onClick:t=>{let e,a=document.createRange();t.preventDefault(),a.selectNode(t.target),(e=window.getSelection())&&(e.removeAllRanges(),e.addRange(a))},children:t.url})}),(0,i.jsx)("div",{children:(0,i.jsx)(k,{videoId:t.id,markers:t.markers})})]})]},t.url))})]})]})}function z(){let[t,e]=(0,o.useState)(()=>d),[a,m]=(0,o.useState)(()=>h.map(({url:t,markers:e=[]})=>({url:t,id:g(t),markers:e}))),[c,w]=(0,o.useState)(()=>t),u=(0,o.useMemo)(()=>new n.B,[]),k=(0,o.useCallback)(t=>m(e=>[{url:t,id:g(t),markers:[]}].concat(e)),[a]);return(0,o.useEffect)(()=>{let t=u.pipe((0,l.T)(({search:t,...e})=>JSON.stringify({...c,...e,search:t.toLowerCase().trim()})),(0,s.F)(),(0,r.B)(400)).subscribe(t=>w(e=>({...e,...JSON.parse(t)})));return()=>t.unsubscribe()},[u]),(0,o.useEffect)(()=>{u.next(t)},[t]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"video"}),(0,i.jsx)(j,{filters:t,setFilters:e}),(0,i.jsx)(v,{onAdd:k}),(0,i.jsx)(f,{list:a,queries:c})]})}let C=Object.assign(function(){return(0,i.jsx)(z,{})},{Layout:a(55539).Layout})},74312:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe","getSphericalProperties","setSphericalProperties"],t.exports=e.default},82401:(t,e,a)=>{t.exports=function(t){function e(t){let a,o,n,l=null;function s(...t){if(!s.enabled)return;let i=Number(new Date);s.diff=i-(a||i),s.prev=a,s.curr=i,a=i,t[0]=e.coerce(t[0]),"string"!=typeof t[0]&&t.unshift("%O");let o=0;t[0]=t[0].replace(/%([a-zA-Z%])/g,(a,i)=>{if("%%"===a)return"%";o++;let n=e.formatters[i];if("function"==typeof n){let e=t[o];a=n.call(s,e),t.splice(o,1),o--}return a}),e.formatArgs.call(s,t),(s.log||e.log).apply(s,t)}return s.namespace=t,s.useColors=e.useColors(),s.color=e.selectColor(t),s.extend=i,s.destroy=e.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==l?l:(o!==e.namespaces&&(o=e.namespaces,n=e.enabled(t)),n),set:t=>{l=t}}),"function"==typeof e.init&&e.init(s),s}function i(t,a){let i=e(this.namespace+(void 0===a?":":a)+t);return i.log=this.log,i}function o(t,e){let a=0,i=0,o=-1,n=0;for(;a<t.length;)if(i<e.length&&(e[i]===t[a]||"*"===e[i]))"*"===e[i]?(o=i,n=a):a++,i++;else{if(-1===o)return!1;i=o+1,a=++n}for(;i<e.length&&"*"===e[i];)i++;return i===e.length}return e.debug=e,e.default=e,e.coerce=function(t){return t instanceof Error?t.stack||t.message:t},e.disable=function(){let t=[...e.names,...e.skips.map(t=>"-"+t)].join(",");return e.enable(""),t},e.enable=function(t){for(let a of(e.save(t),e.namespaces=t,e.names=[],e.skips=[],("string"==typeof t?t:"").trim().replace(/\s+/g,",").split(",").filter(Boolean)))"-"===a[0]?e.skips.push(a.slice(1)):e.names.push(a)},e.enabled=function(t){for(let a of e.skips)if(o(t,a))return!1;for(let a of e.names)if(o(t,a))return!0;return!1},e.humanize=a(66800),e.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(t).forEach(a=>{e[a]=t[a]}),e.names=[],e.skips=[],e.formatters={},e.selectColor=function(t){let a=0;for(let e=0;e<t.length;e++)a=(a<<5)-a+t.charCodeAt(e)|0;return e.colors[Math.abs(a)%e.colors.length]},e.enable(e.load()),e}},87484:(t,e,a)=>{"use strict";let i;Object.defineProperty(e,"__esModule",{value:!0});var o=s(a(16782)),n=s(a(64812)),l=s(a(45015));function s(t){return t&&t.__esModule?t:{default:t}}e.default=(t,e={},a=!1)=>{let s=(0,o.default)();if(i||(i=(0,l.default)(s)),e.events)throw Error("Event handlers cannot be overwritten.");if("string"==typeof t&&!document.getElementById(t))throw Error('Element "'+t+'" does not exist.');e.events=n.default.proxyEvents(s);let r=new Promise(a=>{"object"==typeof t&&t.playVideo instanceof Function?a(t):i.then(i=>{let o=new i.Player(t,e);return s.on("ready",()=>{a(o)}),null})}),m=n.default.promisifyPlayer(r,a);return m.on=s.on,m.off=s.off,m},t.exports=e.default},88961:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=(i=a(48849))&&i.__esModule?i:{default:i};e.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},t.exports=e.default}},t=>{t.O(0,[9072,4553,636,6593,8792],()=>t(t.s=65856)),_N_E=t.O()}]);