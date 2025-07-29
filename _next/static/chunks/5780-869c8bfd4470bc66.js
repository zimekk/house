"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5780],{663:(e,t,n)=>{n.d(t,{Af:()=>s,Nz:()=>i,u5:()=>l,y3:()=>d});var r=n(6152);function i(e,t,n){if(!e)return;if(!0===n(e))return e;let r=t?e.return:e.child;for(;r;){let e=i(r,t,n);if(e)return e;r=t?null:r.sibling}}function o(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}(()=>{var e,t;return"undefined"!=typeof window&&((null==(e=window.document)?void 0:e.createElement)||(null==(t=window.navigator)?void 0:t.product)==="ReactNative")})()?r.useLayoutEffect:r.useEffect;let a=o(r.createContext(null));class s extends r.Component{render(){return r.createElement(a.Provider,{value:this._reactInternals},this.props.children)}}function l(){let e=r.useContext(a);if(null===e)throw Error("its-fine: useFiber must be called within a <FiberProvider />!");let t=r.useId();return r.useMemo(()=>{for(let n of[e,null==e?void 0:e.alternate]){if(!n)continue;let e=i(n,!1,e=>{let n=e.memoizedState;for(;n;){if(n.memoizedState===t)return!0;n=n.next}});if(e)return e}},[e,t])}let c=Symbol.for("react.context"),u=e=>null!==e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===c;function d(){let e=function(){let e=l(),[t]=r.useState(()=>new Map);t.clear();let n=e;for(;n;){let e=n.type;u(e)&&e!==a&&!t.has(e)&&t.set(e,r.use(o(e))),n=n.return}return t}();return r.useMemo(()=>Array.from(e.keys()).reduce((t,n)=>i=>r.createElement(t,null,r.createElement(n.Provider,{...i,value:e.get(n)})),e=>r.createElement(s,{...e})),[e])}},3203:(e,t,n)=>{e.exports=n(27150)},3625:(e,t,n)=>{e.exports=n(56354)},7616:(e,t,n)=>{n.d(t,{N:()=>v});var r=n(13022),i=n(42324),o=n(6152),a=n(45106),s=Object.defineProperty;class l{constructor(){((e,t,n)=>((e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!=typeof t?t+"":t,n))(this,"_listeners")}addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let n=this._listeners;void 0===n[e]&&(n[e]=[]),-1===n[e].indexOf(t)&&n[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let n=this._listeners;return void 0!==n[e]&&-1!==n[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let n=this._listeners[e];if(void 0!==n){let e=n.indexOf(t);-1!==e&&n.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners[e.type];if(void 0!==t){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}}var c=Object.defineProperty,u=(e,t,n)=>(((e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!=typeof t?t+"":t,n),n);let d=new a.RlV,f=new a.Zcv,p=Math.cos(Math.PI/180*70),h=(e,t)=>(e%t+t)%t;class m extends l{constructor(e,t){super(),u(this,"object"),u(this,"domElement"),u(this,"enabled",!0),u(this,"target",new a.Pq0),u(this,"minDistance",0),u(this,"maxDistance",1/0),u(this,"minZoom",0),u(this,"maxZoom",1/0),u(this,"minPolarAngle",0),u(this,"maxPolarAngle",Math.PI),u(this,"minAzimuthAngle",-1/0),u(this,"maxAzimuthAngle",1/0),u(this,"enableDamping",!1),u(this,"dampingFactor",.05),u(this,"enableZoom",!0),u(this,"zoomSpeed",1),u(this,"enableRotate",!0),u(this,"rotateSpeed",1),u(this,"enablePan",!0),u(this,"panSpeed",1),u(this,"screenSpacePanning",!0),u(this,"keyPanSpeed",7),u(this,"zoomToCursor",!1),u(this,"autoRotate",!1),u(this,"autoRotateSpeed",2),u(this,"reverseOrbit",!1),u(this,"reverseHorizontalOrbit",!1),u(this,"reverseVerticalOrbit",!1),u(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),u(this,"mouseButtons",{LEFT:a.kBv.ROTATE,MIDDLE:a.kBv.DOLLY,RIGHT:a.kBv.PAN}),u(this,"touches",{ONE:a.wtR.ROTATE,TWO:a.wtR.DOLLY_PAN}),u(this,"target0"),u(this,"position0"),u(this,"zoom0"),u(this,"_domElementKeyEvents",null),u(this,"getPolarAngle"),u(this,"getAzimuthalAngle"),u(this,"setPolarAngle"),u(this,"setAzimuthalAngle"),u(this,"getDistance"),u(this,"getZoomScale"),u(this,"listenToKeyEvents"),u(this,"stopListenToKeyEvents"),u(this,"saveState"),u(this,"reset"),u(this,"update"),u(this,"connect"),u(this,"dispose"),u(this,"dollyIn"),u(this,"dollyOut"),u(this,"getScale"),u(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>m.phi,this.getAzimuthalAngle=()=>m.theta,this.setPolarAngle=e=>{let t=h(e,2*Math.PI),r=m.phi;r<0&&(r+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-r);2*Math.PI-i<i&&(t<r?t+=2*Math.PI:r+=2*Math.PI),v.phi=t-r,n.update()},this.setAzimuthalAngle=e=>{let t=h(e,2*Math.PI),r=m.theta;r<0&&(r+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-r);2*Math.PI-i<i&&(t<r?t+=2*Math.PI:r+=2*Math.PI),v.theta=t-r,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",ee),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(r),n.update(),l=s.NONE},this.update=(()=>{let t=new a.Pq0,i=new a.Pq0(0,1,0),o=new a.PTz().setFromUnitVectors(e.up,i),u=o.clone().invert(),h=new a.Pq0,g=new a.PTz,w=2*Math.PI;return function(){let E=n.object.position;o.setFromUnitVectors(e.up,i),u.copy(o).invert(),t.copy(E).sub(n.target),t.applyQuaternion(o),m.setFromVector3(t),n.autoRotate&&l===s.NONE&&I(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(m.theta+=v.theta*n.dampingFactor,m.phi+=v.phi*n.dampingFactor):(m.theta+=v.theta,m.phi+=v.phi);let S=n.minAzimuthAngle,x=n.maxAzimuthAngle;isFinite(S)&&isFinite(x)&&(S<-Math.PI?S+=w:S>Math.PI&&(S-=w),x<-Math.PI?x+=w:x>Math.PI&&(x-=w),S<=x?m.theta=Math.max(S,Math.min(x,m.theta)):m.theta=m.theta>(S+x)/2?Math.max(S,m.theta):Math.min(x,m.theta)),m.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,m.phi)),m.makeSafe(),!0===n.enableDamping?n.target.addScaledVector(y,n.dampingFactor):n.target.add(y),n.zoomToCursor&&M||n.object.isOrthographicCamera?m.radius=B(m.radius):m.radius=B(m.radius*b),t.setFromSpherical(m),t.applyQuaternion(u),E.copy(n.target).add(t),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),!0===n.enableDamping?(v.theta*=1-n.dampingFactor,v.phi*=1-n.dampingFactor,y.multiplyScalar(1-n.dampingFactor)):(v.set(0,0,0),y.set(0,0,0));let j=!1;if(n.zoomToCursor&&M){let r=null;if(n.object instanceof a.ubm&&n.object.isPerspectiveCamera){let e=t.length();r=B(e*b);let i=e-r;n.object.position.addScaledVector(_,i),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let e=new a.Pq0(A.x,A.y,0);e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/b)),n.object.updateProjectionMatrix(),j=!0;let i=new a.Pq0(A.x,A.y,0);i.unproject(n.object),n.object.position.sub(i).add(e),n.object.updateMatrixWorld(),r=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;null!==r&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(r).add(n.object.position):(d.origin.copy(n.object.position),d.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(d.direction))<p?e.lookAt(n.target):(f.setFromNormalAndCoplanarPoint(n.object.up,n.target),d.intersectPlane(f,n.target))))}else n.object instanceof a.qUd&&n.object.isOrthographicCamera&&(j=1!==b)&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/b)),n.object.updateProjectionMatrix());return b=1,M=!1,!!(j||h.distanceToSquared(n.object.position)>c||8*(1-g.dot(n.object.quaternion))>c)&&(n.dispatchEvent(r),h.copy(n.object.position),g.copy(n.object.quaternion),j=!1,!0)}})(),this.connect=e=>{n.domElement=e,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",et),n.domElement.addEventListener("pointerdown",K),n.domElement.addEventListener("pointercancel",Q),n.domElement.addEventListener("wheel",J)},this.dispose=()=>{var e,t,r,i,o,a;n.domElement&&(n.domElement.style.touchAction="auto"),null==(e=n.domElement)||e.removeEventListener("contextmenu",et),null==(t=n.domElement)||t.removeEventListener("pointerdown",K),null==(r=n.domElement)||r.removeEventListener("pointercancel",Q),null==(i=n.domElement)||i.removeEventListener("wheel",J),null==(o=n.domElement)||o.ownerDocument.removeEventListener("pointermove",$),null==(a=n.domElement)||a.ownerDocument.removeEventListener("pointerup",Q),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",ee)};let n=this,r={type:"change"},i={type:"start"},o={type:"end"},s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},l=s.NONE,c=1e-6,m=new a.YHV,v=new a.YHV,b=1,y=new a.Pq0,g=new a.I9Y,w=new a.I9Y,E=new a.I9Y,S=new a.I9Y,x=new a.I9Y,j=new a.I9Y,P=new a.I9Y,O=new a.I9Y,C=new a.I9Y,_=new a.Pq0,A=new a.I9Y,M=!1,L=[],T={};function z(){return Math.pow(.95,n.zoomSpeed)}function I(e){n.reverseOrbit||n.reverseHorizontalOrbit?v.theta+=e:v.theta-=e}function R(e){n.reverseOrbit||n.reverseVerticalOrbit?v.phi+=e:v.phi-=e}let k=(()=>{let e=new a.Pq0;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),y.add(e)}})(),D=(()=>{let e=new a.Pq0;return function(t,r){!0===n.screenSpacePanning?e.setFromMatrixColumn(r,1):(e.setFromMatrixColumn(r,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),y.add(e)}})(),U=(()=>{let e=new a.Pq0;return function(t,r){let i=n.domElement;if(i&&n.object instanceof a.ubm&&n.object.isPerspectiveCamera){let o=n.object.position;e.copy(o).sub(n.target);let a=e.length();k(2*t*(a*=Math.tan(n.object.fov/2*Math.PI/180))/i.clientHeight,n.object.matrix),D(2*r*a/i.clientHeight,n.object.matrix)}else i&&n.object instanceof a.qUd&&n.object.isOrthographicCamera?(k(t*(n.object.right-n.object.left)/n.object.zoom/i.clientWidth,n.object.matrix),D(r*(n.object.top-n.object.bottom)/n.object.zoom/i.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function H(e){n.object instanceof a.ubm&&n.object.isPerspectiveCamera||n.object instanceof a.qUd&&n.object.isOrthographicCamera?b=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(e){if(!n.zoomToCursor||!n.domElement)return;M=!0;let t=n.domElement.getBoundingClientRect(),r=e.clientX-t.left,i=e.clientY-t.top,o=t.width,a=t.height;A.x=r/o*2-1,A.y=-(i/a*2)+1,_.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function B(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function q(e){g.set(e.clientX,e.clientY)}function F(e){S.set(e.clientX,e.clientY)}function Y(){if(1==L.length)g.set(L[0].pageX,L[0].pageY);else{let e=.5*(L[0].pageX+L[1].pageX),t=.5*(L[0].pageY+L[1].pageY);g.set(e,t)}}function W(){if(1==L.length)S.set(L[0].pageX,L[0].pageY);else{let e=.5*(L[0].pageX+L[1].pageX),t=.5*(L[0].pageY+L[1].pageY);S.set(e,t)}}function V(){let e=L[0].pageX-L[1].pageX,t=L[0].pageY-L[1].pageY,n=Math.sqrt(e*e+t*t);P.set(0,n)}function X(e){if(1==L.length)w.set(e.pageX,e.pageY);else{let t=er(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);w.set(n,r)}E.subVectors(w,g).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(I(2*Math.PI*E.x/t.clientHeight),R(2*Math.PI*E.y/t.clientHeight)),g.copy(w)}function G(e){if(1==L.length)x.set(e.pageX,e.pageY);else{let t=er(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);x.set(n,r)}j.subVectors(x,S).multiplyScalar(n.panSpeed),U(j.x,j.y),S.copy(x)}function Z(e){var t;let r=er(e),i=e.pageX-r.x,o=e.pageY-r.y,a=Math.sqrt(i*i+o*o);O.set(0,a),C.set(0,Math.pow(O.y/P.y,n.zoomSpeed)),t=C.y,H(b/t),P.copy(O)}function K(e){var t,r,o;!1!==n.enabled&&(0===L.length&&(null==(t=n.domElement)||t.ownerDocument.addEventListener("pointermove",$),null==(r=n.domElement)||r.ownerDocument.addEventListener("pointerup",Q)),o=e,L.push(o),"touch"===e.pointerType?function(e){switch(en(e),L.length){case 1:switch(n.touches.ONE){case a.wtR.ROTATE:if(!1===n.enableRotate)return;Y(),l=s.TOUCH_ROTATE;break;case a.wtR.PAN:if(!1===n.enablePan)return;W(),l=s.TOUCH_PAN;break;default:l=s.NONE}break;case 2:switch(n.touches.TWO){case a.wtR.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&V(),n.enablePan&&W(),l=s.TOUCH_DOLLY_PAN;break;case a.wtR.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&V(),n.enableRotate&&Y(),l=s.TOUCH_DOLLY_ROTATE;break;default:l=s.NONE}break;default:l=s.NONE}l!==s.NONE&&n.dispatchEvent(i)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case a.kBv.DOLLY:if(!1===n.enableZoom)return;N(e),P.set(e.clientX,e.clientY),l=s.DOLLY;break;case a.kBv.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;F(e),l=s.PAN}else{if(!1===n.enableRotate)return;q(e),l=s.ROTATE}break;case a.kBv.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;q(e),l=s.ROTATE}else{if(!1===n.enablePan)return;F(e),l=s.PAN}break;default:l=s.NONE}l!==s.NONE&&n.dispatchEvent(i)}(e))}function $(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(en(e),l){case s.TOUCH_ROTATE:if(!1===n.enableRotate)return;X(e),n.update();break;case s.TOUCH_PAN:if(!1===n.enablePan)return;G(e),n.update();break;case s.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&Z(e),n.enablePan&&G(e),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&Z(e),n.enableRotate&&X(e),n.update();break;default:l=s.NONE}}(e):function(e){if(!1!==n.enabled)switch(l){case s.ROTATE:if(!1===n.enableRotate)return;w.set(e.clientX,e.clientY),E.subVectors(w,g).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(I(2*Math.PI*E.x/t.clientHeight),R(2*Math.PI*E.y/t.clientHeight)),g.copy(w),n.update();break;case s.DOLLY:var r,i;if(!1===n.enableZoom)return;(O.set(e.clientX,e.clientY),C.subVectors(O,P),C.y>0)?(r=z(),H(b/r)):C.y<0&&(i=z(),H(b*i)),P.copy(O),n.update();break;case s.PAN:if(!1===n.enablePan)return;x.set(e.clientX,e.clientY),j.subVectors(x,S).multiplyScalar(n.panSpeed),U(j.x,j.y),S.copy(x),n.update()}}(e))}function Q(e){var t,r,i;(function(e){delete T[e.pointerId];for(let t=0;t<L.length;t++)if(L[t].pointerId==e.pointerId)return void L.splice(t,1)})(e),0===L.length&&(null==(t=n.domElement)||t.releasePointerCapture(e.pointerId),null==(r=n.domElement)||r.ownerDocument.removeEventListener("pointermove",$),null==(i=n.domElement)||i.ownerDocument.removeEventListener("pointerup",Q)),n.dispatchEvent(o),l=s.NONE}function J(e){if(!1!==n.enabled&&!1!==n.enableZoom&&(l===s.NONE||l===s.ROTATE)){var t,r;e.preventDefault(),n.dispatchEvent(i),(N(e),e.deltaY<0)?(t=z(),H(b*t)):e.deltaY>0&&(r=z(),H(b/r)),n.update(),n.dispatchEvent(o)}}function ee(e){if(!1!==n.enabled&&!1!==n.enablePan){let t=!1;switch(e.code){case n.keys.UP:U(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:U(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:U(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:U(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}}function et(e){!1!==n.enabled&&e.preventDefault()}function en(e){let t=T[e.pointerId];void 0===t&&(t=new a.I9Y,T[e.pointerId]=t),t.set(e.pageX,e.pageY)}function er(e){return T[(e.pointerId===L[0].pointerId?L[1]:L[0]).pointerId]}this.dollyIn=(e=z())=>{H(b*e),n.update()},this.dollyOut=(e=z())=>{H(b/e),n.update()},this.getScale=()=>b,this.setScale=e=>{H(e),n.update()},this.getZoomScale=()=>z(),void 0!==t&&this.connect(t),this.update()}}let v=o.forwardRef(({makeDefault:e,camera:t,regress:n,domElement:a,enableDamping:s=!0,keyEvents:l=!1,onChange:c,onStart:u,onEnd:d,...f},p)=>{let h=(0,i.C)(e=>e.invalidate),v=(0,i.C)(e=>e.camera),b=(0,i.C)(e=>e.gl),y=(0,i.C)(e=>e.events),g=(0,i.C)(e=>e.setEvents),w=(0,i.C)(e=>e.set),E=(0,i.C)(e=>e.get),S=(0,i.C)(e=>e.performance),x=t||v,j=a||y.connected||b.domElement,P=o.useMemo(()=>new m(x),[x]);return(0,i.D)(()=>{P.enabled&&P.update()},-1),o.useEffect(()=>(l&&P.connect(!0===l?j:l),P.connect(j),()=>void P.dispose()),[l,j,n,P,h]),o.useEffect(()=>{let e=e=>{h(),n&&S.regress(),c&&c(e)},t=e=>{u&&u(e)},r=e=>{d&&d(e)};return P.addEventListener("change",e),P.addEventListener("start",t),P.addEventListener("end",r),()=>{P.removeEventListener("start",t),P.removeEventListener("end",r),P.removeEventListener("change",e)}},[c,u,d,P,h,g]),o.useEffect(()=>{if(e){let e=E().controls;return w({controls:P}),()=>w({controls:e})}},[e,P]),o.createElement("primitive",(0,r.A)({ref:p,object:P,enableDamping:s},f))})},13022:(e,t,n)=>{n.d(t,{A:()=>r});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}},14713:(e,t,n)=>{n.d(t,{o8:()=>o});var r=n(13022),i=n(6152);let o=function(e,t){let n=e+"Geometry";return i.forwardRef(({args:e,children:t,...o},a)=>{let s=i.useRef(null);return i.useImperativeHandle(a,()=>s.current),i.useLayoutEffect(()=>void 0),i.createElement("mesh",(0,r.A)({ref:s},o),i.createElement(n,{attach:"geometry",args:e}),t)})}("extrude")},24258:(e,t,n)=>{e.exports=n(30582)},27150:(e,t)=>{t.ConcurrentRoot=1,t.ContinuousEventPriority=8,t.DefaultEventPriority=32,t.DiscreteEventPriority=2},38421:(e,t,n)=>{var r=n(6152),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,a=r.useEffect,s=r.useLayoutEffect,l=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,u=r[1];return s(function(){i.value=n,i.getSnapshot=t,c(i)&&u({inst:i})},[e,n,t]),a(function(){return c(i)&&u({inst:i}),e(function(){c(i)&&u({inst:i})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:u},42324:(e,t,n)=>{let r,i,o,a,s;n.d(t,{B:()=>L,C:()=>ee,D:()=>et,E:()=>T,a:()=>A,b:()=>_,c:()=>ej,d:()=>eO,e:()=>ec,f:()=>eH,i:()=>O,u:()=>M});var l=n(6152),c=n.t(l,2),u=n(3203),d=n(45106),f=n(23793),p=n(91984);let h=e=>{let t,n=new Set,r=(e,r)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=r?r:"object"!=typeof i||null===i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,o={setState:r,getState:i,getInitialState:()=>a,subscribe:e=>(n.add(e),()=>n.delete(e))},a=t=e(r,i,o);return o},{useSyncExternalStoreWithSelector:m}=p,v=(e,t)=>{let n=(e=>e?h(e):h)(e),r=(e,r=t)=>(function(e,t=e=>e,n){let r=m(e.subscribe,e.getState,e.getInitialState,t,n);return l.useDebugValue(r),r})(n,e,r);return Object.assign(r,n),r},b=[];function y(e,t,n=(e,t)=>e===t){if(e===t)return!0;if(!e||!t)return!1;let r=e.length;if(t.length!==r)return!1;for(let i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}function g(e,t=null,n=!1,r={}){for(let i of(null===t&&(t=[e]),b))if(y(t,i.keys,i.equal)){if(n)return;if(Object.prototype.hasOwnProperty.call(i,"error"))throw i.error;if(Object.prototype.hasOwnProperty.call(i,"response"))return r.lifespan&&r.lifespan>0&&(i.timeout&&clearTimeout(i.timeout),i.timeout=setTimeout(i.remove,r.lifespan)),i.response;if(!n)throw i.promise}let i={keys:t,equal:r.equal,remove:()=>{let e=b.indexOf(i);-1!==e&&b.splice(e,1)},promise:("object"==typeof e&&"function"==typeof e.then?e:e(...t)).then(e=>{i.response=e,r.lifespan&&r.lifespan>0&&(i.timeout=setTimeout(i.remove,r.lifespan))}).catch(e=>i.error=e)};if(b.push(i),!n)throw i.promise}var w=n(24258),E=n.n(w),S=n(3625),x=n(72548),j=n(663);function P(e){let t=e.root;for(;t.getState().previousRoot;)t=t.getState().previousRoot;return t}n(41363),c.act;let O=e=>e&&e.hasOwnProperty("current"),C=e=>null!=e&&("string"==typeof e||"number"==typeof e||e.isColor),_=((e,t)=>"undefined"!=typeof window&&((null==(e=window.document)?void 0:e.createElement)||(null==(t=window.navigator)?void 0:t.product)==="ReactNative"))()?l.useLayoutEffect:l.useEffect;function A(e){let t=l.useRef(e);return _(()=>void(t.current=e),[e]),t}function M(){let e=(0,j.u5)(),t=(0,j.y3)();return l.useMemo(()=>({children:n})=>{let r=(0,j.Nz)(e,!0,e=>e.type===l.StrictMode)?l.StrictMode:l.Fragment;return(0,x.jsx)(r,{children:(0,x.jsx)(t,{children:n})})},[e,t])}function L({set:e}){return _(()=>(e(new Promise(()=>null)),()=>e(!1)),[e]),null}let T=(e=>((e=class extends l.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}).getDerivedStateFromError=()=>({error:!0}),e))();function z(e){var t;let n="undefined"!=typeof window?null!=(t=window.devicePixelRatio)?t:2:1;return Array.isArray(e)?Math.min(Math.max(e[0],n),e[1]):e}function I(e){var t;return null==(t=e.__r3f)?void 0:t.root.getState()}let R={obj:e=>e===Object(e)&&!R.arr(e)&&"function"!=typeof e,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,boo:e=>"boolean"==typeof e,und:e=>void 0===e,nul:e=>null===e,arr:e=>Array.isArray(e),equ(e,t,{arrays:n="shallow",objects:r="reference",strict:i=!0}={}){let o;if(typeof e!=typeof t||!!e!=!!t)return!1;if(R.str(e)||R.num(e)||R.boo(e))return e===t;let a=R.obj(e);if(a&&"reference"===r)return e===t;let s=R.arr(e);if(s&&"reference"===n)return e===t;if((s||a)&&e===t)return!0;for(o in e)if(!(o in t))return!1;if(a&&"shallow"===n&&"shallow"===r){for(o in i?t:e)if(!R.equ(e[o],t[o],{strict:i,objects:"reference"}))return!1}else for(o in i?t:e)if(e[o]!==t[o])return!1;if(R.und(o)){if(s&&0===e.length&&0===t.length||a&&0===Object.keys(e).length&&0===Object.keys(t).length)return!0;if(e!==t)return!1}return!0}},k=["children","key","ref"];function D(e,t,n,r){let i=null==e?void 0:e.__r3f;return!i&&(i={root:t,type:n,parent:null,children:[],props:function(e){let t={};for(let n in e)k.includes(n)||(t[n]=e[n]);return t}(r),object:e,eventCount:0,handlers:{},isHidden:!1},e&&(e.__r3f=i)),i}function U(e,t){let n=e[t];if(!t.includes("-"))return{root:e,key:t,target:n};for(let i of(n=e,t.split("-"))){var r;t=i,e=n,n=null==(r=n)?void 0:r[t]}return{root:e,key:t,target:n}}let H=/-\d+$/;function N(e,t){if(R.str(t.props.attach)){if(H.test(t.props.attach)){let n=t.props.attach.replace(H,""),{root:r,key:i}=U(e.object,n);Array.isArray(r[i])||(r[i]=[])}let{root:n,key:r}=U(e.object,t.props.attach);t.previousAttach=n[r],n[r]=t.object}else R.fun(t.props.attach)&&(t.previousAttach=t.props.attach(e.object,t.object))}function B(e,t){if(R.str(t.props.attach)){let{root:n,key:r}=U(e.object,t.props.attach),i=t.previousAttach;void 0===i?delete n[r]:n[r]=i}else null==t.previousAttach||t.previousAttach(e.object,t.object);delete t.previousAttach}let q=[...k,"args","dispose","attach","object","onUpdate","dispose"],F=new Map,Y=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],W=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;function V(e,t){var n,r;let i=e.__r3f,o=i&&P(i).getState(),a=null==i?void 0:i.eventCount;for(let n in t){let a=t[n];if(q.includes(n))continue;if(i&&W.test(n)){"function"==typeof a?i.handlers[n]=a:delete i.handlers[n],i.eventCount=Object.keys(i.handlers).length;continue}if(void 0===a)continue;let{root:s,key:l,target:c}=U(e,n);c instanceof d.zgK&&a instanceof d.zgK?c.mask=a.mask:c instanceof d.Q1f&&C(a)?c.set(a):null!==c&&"object"==typeof c&&"function"==typeof c.set&&"function"==typeof c.copy&&null!=a&&a.constructor&&c.constructor===a.constructor?c.copy(a):null!==c&&"object"==typeof c&&"function"==typeof c.set&&Array.isArray(a)?"function"==typeof c.fromArray?c.fromArray(a):c.set(...a):null!==c&&"object"==typeof c&&"function"==typeof c.set&&"number"==typeof a?"function"==typeof c.setScalar?c.setScalar(a):c.set(a):(s[l]=a,o&&!o.linear&&Y.includes(l)&&null!=(r=s[l])&&r.isTexture&&s[l].format===d.GWd&&s[l].type===d.OUM&&(s[l].colorSpace=d.er$))}if(null!=i&&i.parent&&null!=o&&o.internal&&null!=(n=i.object)&&n.isObject3D&&a!==i.eventCount){let e=i.object,t=o.internal.interaction.indexOf(e);t>-1&&o.internal.interaction.splice(t,1),i.eventCount&&null!==e.raycast&&o.internal.interaction.push(e)}return i&&void 0===i.props.attach&&(i.object.isBufferGeometry?i.props.attach="geometry":i.object.isMaterial&&(i.props.attach="material")),i&&X(i),e}function X(e){var t;if(!e.parent)return;null==e.props.onUpdate||e.props.onUpdate(e.object);let n=null==(t=e.root)||null==t.getState?void 0:t.getState();n&&0===n.internal.frames&&n.invalidate()}let G=e=>null==e?void 0:e.isObject3D;function Z(e){return(e.eventObject||e.object).uuid+"/"+e.index+e.instanceId}function K(e,t,n,r){let i=n.get(t);i&&(n.delete(t),0===n.size&&(e.delete(r),i.target.releasePointerCapture(r)))}let $=e=>!!(null!=e&&e.render),Q=l.createContext(null);function J(){let e=l.useContext(Q);if(!e)throw Error("R3F: Hooks can only be used within the Canvas component!");return e}function ee(e=e=>e,t){return J()(e,t)}function et(e,t=0){let n=J(),r=n.getState().internal.subscribe,i=A(e);return _(()=>r(i,t,n),[t,r,n]),null}let en=new WeakMap;function er(e,t){return function(n,...r){var i;let o;return"function"==typeof n&&(null==n||null==(i=n.prototype)?void 0:i.constructor)===n?(o=en.get(n))||(o=new n,en.set(n,o)):o=n,e&&e(o),Promise.all(r.map(e=>new Promise((n,r)=>o.load(e,e=>{G(null==e?void 0:e.scene)&&Object.assign(e,function(e){let t={nodes:{},materials:{},meshes:{}};return e&&e.traverse(e=>{e.name&&(t.nodes[e.name]=e),e.material&&!t.materials[e.material.name]&&(t.materials[e.material.name]=e.material),e.isMesh&&!t.meshes[e.name]&&(t.meshes[e.name]=e)}),t}(e.scene)),n(e)},t,t=>r(Error(`Could not load ${e}: ${null==t?void 0:t.message}`))))))}}function ei(e,t,n,r){let i=Array.isArray(t)?t:[t],o=g(er(n,r),[e,...i],!1,{equal:R.equ});return Array.isArray(t)?o:o[0]}ei.preload=function(e,t,n){let r,i=Array.isArray(t)?t:[t];g(er(n),[e,...i],!0,r)},ei.clear=function(e,t){var n=[e,...Array.isArray(t)?t:[t]];if(void 0===n||0===n.length)b.splice(0,b.length);else{let e=b.find(e=>y(n,e.keys,e.equal));e&&e.remove()}};let eo={},ea=/^three(?=[A-Z])/,es=e=>`${e[0].toUpperCase()}${e.slice(1)}`,el=0;function ec(e){if("function"==typeof e){let t=`${el++}`;return eo[t]=e,t}Object.assign(eo,e)}function eu(e,t){let n=es(e),r=eo[n];if("primitive"!==e&&!r)throw Error(`R3F: ${n} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if("primitive"===e&&!t.object)throw Error("R3F: Primitives without 'object' are invalid!");if(void 0!==t.args&&!Array.isArray(t.args))throw Error("R3F: The args prop must be an array!")}function ed(e){if(e.isHidden){var t;e.props.attach&&null!=(t=e.parent)&&t.object?N(e.parent,e):G(e.object)&&!1!==e.props.visible&&(e.object.visible=!0),e.isHidden=!1,X(e)}}function ef(e,t,n){let r=t.root.getState();if(e.parent||e.object===r.scene){if(!t.object){var i,o;let e=eo[es(t.type)];t.object=null!=(i=t.props.object)?i:new e(...null!=(o=t.props.args)?o:[]),t.object.__r3f=t}if(V(t.object,t.props),t.props.attach)N(e,t);else if(G(t.object)&&G(e.object)){let r=e.object.children.indexOf(null==n?void 0:n.object);if(n&&-1!==r){let n=e.object.children.indexOf(t.object);-1!==n?(e.object.children.splice(n,1),e.object.children.splice(n<r?r-1:r,0,t.object)):(t.object.parent=e.object,e.object.children.splice(r,0,t.object),t.object.dispatchEvent({type:"added"}),e.object.dispatchEvent({type:"childadded",child:t.object}))}else e.object.add(t.object)}for(let e of t.children)ef(t,e);X(t)}}function ep(e,t){t&&(t.parent=e,e.children.push(t),ef(e,t))}function eh(e,t,n){if(!t||!n)return;t.parent=e;let r=e.children.indexOf(n);-1!==r?e.children.splice(r,0,t):e.children.push(t),ef(e,t,n)}function em(e){if("function"==typeof e.dispose){let t=()=>{try{e.dispose()}catch{}};"undefined"!=typeof IS_REACT_ACT_ENVIRONMENT?t():(0,S.unstable_scheduleCallback)(S.unstable_IdlePriority,t)}}function ev(e,t,n){if(!t)return;t.parent=null;let r=e.children.indexOf(t);-1!==r&&e.children.splice(r,1),t.props.attach?B(e,t):G(t.object)&&G(e.object)&&(e.object.remove(t.object),function(e,t){let{internal:n}=e.getState();n.interaction=n.interaction.filter(e=>e!==t),n.initialHits=n.initialHits.filter(e=>e!==t),n.hovered.forEach((e,r)=>{(e.eventObject===t||e.object===t)&&n.hovered.delete(r)}),n.capturedMap.forEach((e,r)=>{K(n.capturedMap,t,e,r)})}(P(t),t.object));let i=null!==t.props.dispose&&!1!==n;for(let e=t.children.length-1;e>=0;e--){let n=t.children[e];ev(t,n,i)}t.children.length=0,delete t.object.__r3f,i&&"primitive"!==t.type&&"Scene"!==t.object.type&&em(t.object),void 0===n&&X(t)}let eb=[],ey=()=>{},eg={},ew=0,eE=function(e){let t=E()(e);return t.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:l.version}),t}({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:function(e,t,n){var r;return eu(e=es(e)in eo?e:e.replace(ea,""),t),"primitive"===e&&null!=(r=t.object)&&r.__r3f&&delete t.object.__r3f,D(t.object,n,e,t)},removeChild:ev,appendChild:ep,appendInitialChild:ep,insertBefore:eh,appendChildToContainer(e,t){let n=e.getState().scene.__r3f;t&&n&&ep(n,t)},removeChildFromContainer(e,t){let n=e.getState().scene.__r3f;t&&n&&ev(n,t)},insertInContainerBefore(e,t,n){let r=e.getState().scene.__r3f;t&&n&&r&&eh(r,t,n)},getRootHostContext:()=>eg,getChildHostContext:()=>eg,commitUpdate(e,t,n,r,i){var o,a,s;eu(t,r);let l=!1;if("primitive"===e.type&&n.object!==r.object||(null==(o=r.args)?void 0:o.length)!==(null==(a=n.args)?void 0:a.length)?l=!0:null!=(s=r.args)&&s.some((e,t)=>{var r;return e!==(null==(r=n.args)?void 0:r[t])})&&(l=!0),l)eb.push([e,{...r},i]);else{let t=function(e,t){let n={};for(let r in t)if(!q.includes(r)&&!R.equ(t[r],e.props[r]))for(let e in n[r]=t[r],t)e.startsWith(`${r}-`)&&(n[e]=t[e]);for(let r in e.props){if(q.includes(r)||t.hasOwnProperty(r))continue;let{root:i,key:o}=U(e.object,r);if(i.constructor&&0===i.constructor.length){let e=function(e){let t=F.get(e.constructor);try{t||(t=new e.constructor,F.set(e.constructor,t))}catch(e){}return t}(i);R.und(e)||(n[o]=e[o])}else n[o]=0}return n}(e,r);Object.keys(t).length&&(Object.assign(e.props,t),V(e.object,t))}(null===i.sibling||(4&i.flags)==0)&&function(){for(let[e]of eb){let t=e.parent;if(t)for(let n of(e.props.attach?B(t,e):G(e.object)&&G(t.object)&&t.object.remove(e.object),e.children))n.props.attach?B(e,n):G(n.object)&&G(e.object)&&e.object.remove(n.object);e.isHidden&&ed(e),e.object.__r3f&&delete e.object.__r3f,"primitive"!==e.type&&em(e.object)}for(let[r,i,o]of eb){r.props=i;let a=r.parent;if(a){let i=eo[es(r.type)];r.object=null!=(e=r.props.object)?e:new i(...null!=(t=r.props.args)?t:[]),r.object.__r3f=r;var e,t,n=r.object;for(let e of[o,o.alternate])if(null!==e)if("function"==typeof e.ref){null==e.refCleanup||e.refCleanup();let t=e.ref(n);"function"==typeof t&&(e.refCleanup=t)}else e.ref&&(e.ref.current=n);for(let e of(V(r.object,r.props),r.props.attach?N(a,r):G(r.object)&&G(a.object)&&a.object.add(r.object),r.children))e.props.attach?N(r,e):G(e.object)&&G(r.object)&&r.object.add(e.object);X(r)}}eb.length=0}()},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:e=>null==e?void 0:e.object,prepareForCommit:()=>null,preparePortalMount:e=>D(e.getState().scene,e,"",{}),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:function(e){if(!e.isHidden){var t;e.props.attach&&null!=(t=e.parent)&&t.object?B(e.parent,e):G(e.object)&&(e.object.visible=!1),e.isHidden=!0,X(e)}},unhideInstance:ed,createTextInstance:ey,hideTextInstance:ey,unhideTextInstance:ey,scheduleTimeout:"function"==typeof setTimeout?setTimeout:void 0,cancelTimeout:"function"==typeof clearTimeout?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,startSuspendingCommit(){},suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:l.createContext(null),setCurrentUpdatePriority(e){ew=e},getCurrentUpdatePriority:()=>ew,resolveUpdatePriority(){var e;if(0!==ew)return ew;switch("undefined"!=typeof window&&(null==(e=window.event)?void 0:e.type)){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return u.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return u.ContinuousEventPriority;default:return u.DefaultEventPriority}},resetFormInstance(){}}),eS=new Map,ex={objects:"shallow",strict:!1};function ej(e){let t,n,r=eS.get(e),i=null==r?void 0:r.fiber,o=null==r?void 0:r.store;r&&console.warn("R3F.createRoot should only be called once!");let a="function"==typeof reportError?reportError:console.error,s=o||((e,t)=>{let n,r,i=(n=(n,r)=>{let i,o=new d.Pq0,a=new d.Pq0,s=new d.Pq0;function c(e=r().camera,t=a,n=r().size){let{width:i,height:l,top:u,left:d}=n,f=i/l;t.isVector3?s.copy(t):s.set(...t);let p=e.getWorldPosition(o).distanceTo(s);if(e&&e.isOrthographicCamera)return{width:i/e.zoom,height:l/e.zoom,top:u,left:d,factor:1,distance:p,aspect:f};{let t=2*Math.tan(e.fov*Math.PI/180/2)*p,n=i/l*t;return{width:n,height:t,top:u,left:d,factor:i/n,distance:p,aspect:f}}}let u=e=>n(t=>({performance:{...t.performance,current:e}})),f=new d.I9Y;return{set:n,get:r,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(t=1)=>e(r(),t),advance:(e,n)=>t(e,n,r()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new d.zD7,pointer:f,mouse:f,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{let e=r();i&&clearTimeout(i),e.performance.current!==e.performance.min&&u(e.performance.min),i=setTimeout(()=>u(r().performance.max),e.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:c},setEvents:e=>n(t=>({...t,events:{...t.events,...e}})),setSize:(e,t,i=0,o=0)=>{let s=r().camera,l={width:e,height:t,top:i,left:o};n(e=>({size:l,viewport:{...e.viewport,...c(s,a,l)}}))},setDpr:e=>n(t=>{let n=z(e);return{viewport:{...t.viewport,dpr:n,initialDpr:t.viewport.initialDpr||n}}}),setFrameloop:(e="always")=>{let t=r().clock;t.stop(),t.elapsedTime=0,"never"!==e&&(t.start(),t.elapsedTime=0),n(()=>({frameloop:e}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:l.createRef(),active:!1,frames:0,priority:0,subscribe:(e,t,n)=>{let i=r().internal;return i.priority=i.priority+ +(t>0),i.subscribers.push({ref:e,priority:t,store:n}),i.subscribers=i.subscribers.sort((e,t)=>e.priority-t.priority),()=>{let n=r().internal;null!=n&&n.subscribers&&(n.priority=n.priority-(t>0),n.subscribers=n.subscribers.filter(t=>t.ref!==e))}}}}})?v(n,r):v,o=i.getState(),a=o.size,s=o.viewport.dpr,c=o.camera;return i.subscribe(()=>{let{camera:e,size:t,viewport:n,gl:r,set:o}=i.getState();if(t.width!==a.width||t.height!==a.height||n.dpr!==s){a=t,s=n.dpr,function(e,t){!e.manual&&(e&&e.isOrthographicCamera?(e.left=-(t.width/2),e.right=t.width/2,e.top=t.height/2,e.bottom=-(t.height/2)):e.aspect=t.width/t.height,e.updateProjectionMatrix())}(e,t),n.dpr>0&&r.setPixelRatio(n.dpr);let i="undefined"!=typeof HTMLCanvasElement&&r.domElement instanceof HTMLCanvasElement;r.setSize(t.width,t.height,i)}e!==c&&(c=e,o(t=>({viewport:{...t.viewport,...t.viewport.getCurrentViewport(e)}})))}),i.subscribe(t=>e(t)),i})(ek,eD),c=i||eE.createContainer(s,u.ConcurrentRoot,null,!1,null,"",a,a,a,null);r||eS.set(e,{fiber:c,store:s});let p=!1,h=null;return{async configure(r={}){var i,o;let a;h=new Promise(e=>a=e);let{gl:l,size:c,scene:u,events:m,onCreated:v,shadows:b=!1,linear:y=!1,flat:g=!1,legacy:w=!1,orthographic:E=!1,frameloop:S="always",dpr:x=[1,2],performance:j,raycaster:P,camera:O,onPointerMissed:C}=r,_=s.getState(),A=_.gl;if(!_.gl){let t={canvas:e,powerPreference:"high-performance",antialias:!0,alpha:!0},n="function"==typeof l?await l(t):l;A=$(n)?n:new f.WebGLRenderer({...t,...l}),_.set({gl:A})}let M=_.raycaster;M||_.set({raycaster:M=new d.tBo});let{params:L,...T}=P||{};if(R.equ(T,M,ex)||V(M,{...T}),R.equ(L,M.params,ex)||V(M,{params:{...M.params,...L}}),!_.camera||_.camera===n&&!R.equ(n,O,ex)){n=O;let e=null==O?void 0:O.isCamera,t=e?O:E?new d.qUd(0,0,0,0,.1,1e3):new d.ubm(75,0,.1,1e3);!e&&(t.position.z=5,O&&(V(t,O),!t.manual&&("aspect"in O||"left"in O||"right"in O||"bottom"in O||"top"in O)&&(t.manual=!0,t.updateProjectionMatrix())),_.camera||null!=O&&O.rotation||t.lookAt(0,0,0)),_.set({camera:t}),M.camera=t}if(!_.scene){let e;null!=u&&u.isScene?D(e=u,s,"",{}):(D(e=new d.Z58,s,"",{}),u&&V(e,u)),_.set({scene:e})}m&&!_.events.handlers&&_.set({events:m(s)});let I=function(e,t){if(!t&&"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement&&e.parentElement){let{width:t,height:n,top:r,left:i}=e.parentElement.getBoundingClientRect();return{width:t,height:n,top:r,left:i}}return!t&&"undefined"!=typeof OffscreenCanvas&&e instanceof OffscreenCanvas?{width:e.width,height:e.height,top:0,left:0}:{width:0,height:0,top:0,left:0,...t}}(e,c);if(R.equ(I,_.size,ex)||_.setSize(I.width,I.height,I.top,I.left),x&&_.viewport.dpr!==z(x)&&_.setDpr(x),_.frameloop!==S&&_.setFrameloop(S),_.onPointerMissed||_.set({onPointerMissed:C}),j&&!R.equ(j,_.performance,ex)&&_.set(e=>({performance:{...e.performance,...j}})),!_.xr){let e=(e,t)=>{let n=s.getState();"never"!==n.frameloop&&eD(e,!0,n,t)},t=()=>{let t=s.getState();t.gl.xr.enabled=t.gl.xr.isPresenting,t.gl.xr.setAnimationLoop(t.gl.xr.isPresenting?e:null),t.gl.xr.isPresenting||ek(t)},n={connect(){let e=s.getState().gl;e.xr.addEventListener("sessionstart",t),e.xr.addEventListener("sessionend",t)},disconnect(){let e=s.getState().gl;e.xr.removeEventListener("sessionstart",t),e.xr.removeEventListener("sessionend",t)}};"function"==typeof(null==(i=A.xr)?void 0:i.addEventListener)&&n.connect(),_.set({xr:n})}if(A.shadowMap){let e=A.shadowMap.enabled,t=A.shadowMap.type;if(A.shadowMap.enabled=!!b,R.boo(b))A.shadowMap.type=d.Wk7;else if(R.str(b)){let e={basic:d.bTm,percentage:d.QP0,soft:d.Wk7,variance:d.RyA};A.shadowMap.type=null!=(o=e[b])?o:d.Wk7}else R.obj(b)&&Object.assign(A.shadowMap,b);(e!==A.shadowMap.enabled||t!==A.shadowMap.type)&&(A.shadowMap.needsUpdate=!0)}return d.ppV.enabled=!w,p||(A.outputColorSpace=y?d.Zr2:d.er$,A.toneMapping=g?d.y_p:d.FV),_.legacy!==w&&_.set(()=>({legacy:w})),_.linear!==y&&_.set(()=>({linear:y})),_.flat!==g&&_.set(()=>({flat:g})),!l||R.fun(l)||$(l)||R.equ(l,A,ex)||V(A,l),t=v,p=!0,a(),this},render(n){return p||h||this.configure(),h.then(()=>{eE.updateContainer((0,x.jsx)(eP,{store:s,children:n,onCreated:t,rootElement:e}),c,null,()=>void 0)}),s},unmount(){eO(e)}}}function eP({store:e,children:t,onCreated:n,rootElement:r}){return _(()=>{let t=e.getState();t.set(e=>({internal:{...e.internal,active:!0}})),n&&n(t),e.getState().events.connected||null==t.events.connect||t.events.connect(r)},[]),(0,x.jsx)(Q.Provider,{value:e,children:t})}function eO(e,t){let n=eS.get(e),r=null==n?void 0:n.fiber;if(r){let i=null==n?void 0:n.store.getState();i&&(i.internal.active=!1),eE.updateContainer(null,r,null,()=>{i&&setTimeout(()=>{try{null==i.events.disconnect||i.events.disconnect(),null==(n=i.gl)||null==(r=n.renderLists)||null==r.dispose||r.dispose(),null==(o=i.gl)||null==o.forceContextLoss||o.forceContextLoss(),null!=(a=i.gl)&&a.xr&&i.xr.disconnect();var n,r,o,a,s=i.scene;for(let e in"Scene"!==s.type&&(null==s.dispose||s.dispose()),s){let t=s[e];(null==t?void 0:t.type)!=="Scene"&&(null==t||null==t.dispose||t.dispose())}eS.delete(e),t&&t(e)}catch(e){}},500)})}}let eC=new Set,e_=new Set,eA=new Set;function eM(e,t){if(e.size)for(let{callback:n}of e.values())n(t)}function eL(e,t){switch(e){case"before":return eM(eC,t);case"after":return eM(e_,t);case"tail":return eM(eA,t)}}function eT(e,t,n){let o=t.clock.getDelta();"never"===t.frameloop&&"number"==typeof e&&(o=e-t.clock.elapsedTime,t.clock.oldTime=t.clock.elapsedTime,t.clock.elapsedTime=e),r=t.internal.subscribers;for(let e=0;e<r.length;e++)(i=r[e]).ref.current(i.store.getState(),o,n);return!t.internal.priority&&t.gl.render&&t.gl.render(t.scene,t.camera),t.internal.frames=Math.max(0,t.internal.frames-1),"always"===t.frameloop?1:t.internal.frames}let ez=!1,eI=!1;function eR(e){for(let n of(a=requestAnimationFrame(eR),ez=!0,o=0,eL("before",e),eI=!0,eS.values())){var t;(s=n.store.getState()).internal.active&&("always"===s.frameloop||s.internal.frames>0)&&!(null!=(t=s.gl.xr)&&t.isPresenting)&&(o+=eT(e,s))}if(eI=!1,eL("after",e),0===o)return eL("tail",e),ez=!1,cancelAnimationFrame(a)}function ek(e,t=1){var n;if(!e)return eS.forEach(e=>ek(e.store.getState(),t));(null==(n=e.gl.xr)||!n.isPresenting)&&e.internal.active&&"never"!==e.frameloop&&(t>1?e.internal.frames=Math.min(60,e.internal.frames+t):eI?e.internal.frames=2:e.internal.frames=1,ez||(ez=!0,requestAnimationFrame(eR)))}function eD(e,t=!0,n,r){if(t&&eL("before",e),n)eT(e,n,r);else for(let t of eS.values())eT(e,t.store.getState());t&&eL("after",e)}let eU={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function eH(e){let{handlePointer:t}=function(e){function t(e){return e.filter(e=>["Move","Over","Enter","Out","Leave"].some(t=>{var n;return null==(n=e.__r3f)?void 0:n.handlers["onPointer"+t]}))}function n(t){let{internal:n}=e.getState();for(let e of n.hovered.values())if(!t.length||!t.find(t=>t.object===e.object&&t.index===e.index&&t.instanceId===e.instanceId)){let r=e.eventObject.__r3f;if(n.hovered.delete(Z(e)),null!=r&&r.eventCount){let n=r.handlers,i={...e,intersections:t};null==n.onPointerOut||n.onPointerOut(i),null==n.onPointerLeave||n.onPointerLeave(i)}}}function r(e,t){for(let n=0;n<t.length;n++){let r=t[n].__r3f;null==r||null==r.handlers.onPointerMissed||r.handlers.onPointerMissed(e)}}return{handlePointer:function(i){switch(i){case"onPointerLeave":case"onPointerCancel":return()=>n([]);case"onLostPointerCapture":return t=>{let{internal:r}=e.getState();"pointerId"in t&&r.capturedMap.has(t.pointerId)&&requestAnimationFrame(()=>{r.capturedMap.has(t.pointerId)&&(r.capturedMap.delete(t.pointerId),n([]))})}}return function(o){let{onPointerMissed:a,internal:s}=e.getState();s.lastEvent.current=o;let l="onPointerMove"===i,c="onClick"===i||"onContextMenu"===i||"onDoubleClick"===i,u=function(t,n){let r=e.getState(),i=new Set,o=[],a=n?n(r.internal.interaction):r.internal.interaction;for(let e=0;e<a.length;e++){let t=I(a[e]);t&&(t.raycaster.camera=void 0)}r.previousRoot||null==r.events.compute||r.events.compute(t,r);let s=a.flatMap(function(e){let n=I(e);if(!n||!n.events.enabled||null===n.raycaster.camera)return[];if(void 0===n.raycaster.camera){var r;null==n.events.compute||n.events.compute(t,n,null==(r=n.previousRoot)?void 0:r.getState()),void 0===n.raycaster.camera&&(n.raycaster.camera=null)}return n.raycaster.camera?n.raycaster.intersectObject(e,!0):[]}).sort((e,t)=>{let n=I(e.object),r=I(t.object);return n&&r&&r.events.priority-n.events.priority||e.distance-t.distance}).filter(e=>{let t=Z(e);return!i.has(t)&&(i.add(t),!0)});for(let e of(r.events.filter&&(s=r.events.filter(s,r)),s)){let t=e.object;for(;t;){var l;null!=(l=t.__r3f)&&l.eventCount&&o.push({...e,eventObject:t}),t=t.parent}}if("pointerId"in t&&r.internal.capturedMap.has(t.pointerId))for(let e of r.internal.capturedMap.get(t.pointerId).values())i.has(Z(e.intersection))||o.push(e.intersection);return o}(o,l?t:void 0),f=c?function(t){let{internal:n}=e.getState(),r=t.offsetX-n.initialClick[0],i=t.offsetY-n.initialClick[1];return Math.round(Math.sqrt(r*r+i*i))}(o):0;"onPointerDown"===i&&(s.initialClick=[o.offsetX,o.offsetY],s.initialHits=u.map(e=>e.eventObject)),c&&!u.length&&f<=2&&(r(o,s.interaction),a&&a(o)),l&&n(u),!function(e,t,r,i){if(e.length){let o={stopped:!1};for(let a of e){let s=I(a.object);if(s||a.object.traverseAncestors(e=>{let t=I(e);if(t)return s=t,!1}),s){let{raycaster:l,pointer:c,camera:u,internal:f}=s,p=new d.Pq0(c.x,c.y,0).unproject(u),h=e=>{var t,n;return null!=(t=null==(n=f.capturedMap.get(e))?void 0:n.has(a.eventObject))&&t},m=e=>{let n={intersection:a,target:t.target};f.capturedMap.has(e)?f.capturedMap.get(e).set(a.eventObject,n):f.capturedMap.set(e,new Map([[a.eventObject,n]])),t.target.setPointerCapture(e)},v=e=>{let t=f.capturedMap.get(e);t&&K(f.capturedMap,a.eventObject,t,e)},b={};for(let e in t){let n=t[e];"function"!=typeof n&&(b[e]=n)}let y={...a,...b,pointer:c,intersections:e,stopped:o.stopped,delta:r,unprojectedPoint:p,ray:l.ray,camera:u,stopPropagation(){let r="pointerId"in t&&f.capturedMap.get(t.pointerId);(!r||r.has(a.eventObject))&&(y.stopped=o.stopped=!0,f.hovered.size&&Array.from(f.hovered.values()).find(e=>e.eventObject===a.eventObject)&&n([...e.slice(0,e.indexOf(a)),a]))},target:{hasPointerCapture:h,setPointerCapture:m,releasePointerCapture:v},currentTarget:{hasPointerCapture:h,setPointerCapture:m,releasePointerCapture:v},nativeEvent:t};if(i(y),!0===o.stopped)break}}}}(u,o,f,function(e){let t=e.eventObject,n=t.__r3f;if(!(null!=n&&n.eventCount))return;let a=n.handlers;if(l){if(a.onPointerOver||a.onPointerEnter||a.onPointerOut||a.onPointerLeave){let t=Z(e),n=s.hovered.get(t);n?n.stopped&&e.stopPropagation():(s.hovered.set(t,e),null==a.onPointerOver||a.onPointerOver(e),null==a.onPointerEnter||a.onPointerEnter(e))}null==a.onPointerMove||a.onPointerMove(e)}else{let n=a[i];n?(!c||s.initialHits.includes(t))&&(r(o,s.interaction.filter(e=>!s.initialHits.includes(e))),n(e)):c&&s.initialHits.includes(t)&&r(o,s.interaction.filter(e=>!s.initialHits.includes(e)))}})}}}}(e);return{priority:1,enabled:!0,compute(e,t,n){t.pointer.set(e.offsetX/t.size.width*2-1,-(2*(e.offsetY/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)},connected:void 0,handlers:Object.keys(eU).reduce((e,n)=>({...e,[n]:t(n)}),{}),update:()=>{var t;let{events:n,internal:r}=e.getState();null!=(t=r.lastEvent)&&t.current&&n.handlers&&n.handlers.onPointerMove(r.lastEvent.current)},connect:t=>{let{set:n,events:r}=e.getState();if(null==r.disconnect||r.disconnect(),n(e=>({events:{...e.events,connected:t}})),r.handlers)for(let e in r.handlers){let n=r.handlers[e],[i,o]=eU[e];t.addEventListener(i,n,{passive:o})}},disconnect:()=>{let{set:t,events:n}=e.getState();if(n.connected){if(n.handlers)for(let e in n.handlers){let t=n.handlers[e],[r]=eU[e];n.connected.removeEventListener(r,t)}t(e=>({events:{...e.events,connected:void 0}}))}}}}},56354:(e,t)=>{function n(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<o(i,t))e[r]=t,e[n]=i,n=r;else break}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>o(l,n))c<i&&0>o(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else if(c<i&&0>o(u,n))e[r]=u,e[c]=n,r=c;else break}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var a,s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();t.unstable_now=function(){return l.now()-c}}var u=[],d=[],f=1,p=null,h=3,m=!1,v=!1,b=!1,y="function"==typeof setTimeout?setTimeout:null,g="function"==typeof clearTimeout?clearTimeout:null,w="undefined"!=typeof setImmediate?setImmediate:null;function E(e){for(var t=r(d);null!==t;){if(null===t.callback)i(d);else if(t.startTime<=e)i(d),t.sortIndex=t.expirationTime,n(u,t);else break;t=r(d)}}function S(e){if(b=!1,E(e),!v)if(null!==r(u))v=!0,L();else{var t=r(d);null!==t&&T(S,t.startTime-e)}}var x=!1,j=-1,P=5,O=-1;function C(){return!(t.unstable_now()-O<P)}function _(){if(x){var e=t.unstable_now();O=e;var n=!0;try{e:{v=!1,b&&(b=!1,g(j),j=-1),m=!0;var o=h;try{t:{for(E(e),p=r(u);null!==p&&!(p.expirationTime>e&&C());){var s=p.callback;if("function"==typeof s){p.callback=null,h=p.priorityLevel;var l=s(p.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof l){p.callback=l,E(e),n=!0;break t}p===r(u)&&i(u),E(e)}else i(u);p=r(u)}if(null!==p)n=!0;else{var c=r(d);null!==c&&T(S,c.startTime-e),n=!1}}break e}finally{p=null,h=o,m=!1}}}finally{n?a():x=!1}}}if("function"==typeof w)a=function(){w(_)};else if("undefined"!=typeof MessageChannel){var A=new MessageChannel,M=A.port2;A.port1.onmessage=_,a=function(){M.postMessage(null)}}else a=function(){y(_,0)};function L(){x||(x=!0,a())}function T(e,n){j=y(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,L())},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?a+o:a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=0x3fffffff;break;case 4:s=1e4;break;default:s=5e3}return s=o+s,e={id:f++,callback:i,priorityLevel:e,startTime:o,expirationTime:s,sortIndex:-1},o>a?(e.sortIndex=o,n(d,e),null===r(u)&&e===r(d)&&(b?(g(j),j=-1):b=!0,T(S,o-a))):(e.sortIndex=s,n(u,e),v||m||(v=!0,L())),e},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},64230:(e,t,n)=>{var r=n(6152),i=n(95734),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useSyncExternalStore,s=r.useRef,l=r.useEffect,c=r.useMemo,u=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;var p=a(e,(d=c(function(){function e(e){if(!l){if(l=!0,a=e,e=r(e),void 0!==i&&f.hasValue){var t=f.value;if(i(t,e))return s=t}return s=e}if(t=s,o(a,e))return t;var n=r(e);return void 0!==i&&i(t,n)?(a=e,t):(a=e,s=n)}var a,s,l=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,r,i]))[0],d[1]);return l(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}},91984:(e,t,n)=>{e.exports=n(64230)},95734:(e,t,n)=>{e.exports=n(38421)},95739:(e,t,n)=>{n.d(t,{Hl:()=>d});var r=n(42324),i=n(6152),o=n(23793);function a(e,t){let n;return(...r)=>{window.clearTimeout(n),n=window.setTimeout(()=>e(...r),t)}}let s=["x","y","top","bottom","left","right","width","height"];var l=n(663),c=n(72548);function u({ref:e,children:t,fallback:n,resize:l,style:u,gl:d,events:f=r.f,eventSource:p,eventPrefix:h,shadows:m,linear:v,flat:b,legacy:y,orthographic:g,frameloop:w,dpr:E,performance:S,raycaster:x,camera:j,scene:P,onPointerMissed:O,onCreated:C,..._}){i.useMemo(()=>(0,r.e)(o),[]);let A=(0,r.u)(),[M,L]=function({debounce:e,scroll:t,polyfill:n,offsetSize:r}={debounce:0,scroll:!1,offsetSize:!1}){var o,l,c;let u=n||("undefined"==typeof window?class{}:window.ResizeObserver);if(!u)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");let[d,f]=(0,i.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),p=(0,i.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:d,orientationHandler:null}),h=e?"number"==typeof e?e:e.scroll:null,m=e?"number"==typeof e?e:e.resize:null,v=(0,i.useRef)(!1);(0,i.useEffect)(()=>(v.current=!0,()=>void(v.current=!1)));let[b,y,g]=(0,i.useMemo)(()=>{let e=()=>{let e,t;if(!p.current.element)return;let{left:n,top:i,width:o,height:a,bottom:l,right:c,x:u,y:d}=p.current.element.getBoundingClientRect(),h={left:n,top:i,width:o,height:a,bottom:l,right:c,x:u,y:d};p.current.element instanceof HTMLElement&&r&&(h.height=p.current.element.offsetHeight,h.width=p.current.element.offsetWidth),Object.freeze(h),v.current&&(e=p.current.lastBounds,t=h,!s.every(n=>e[n]===t[n]))&&f(p.current.lastBounds=h)};return[e,m?a(e,m):e,h?a(e,h):e]},[f,r,h,m]);function w(){p.current.scrollContainers&&(p.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",g,!0)),p.current.scrollContainers=null),p.current.resizeObserver&&(p.current.resizeObserver.disconnect(),p.current.resizeObserver=null),p.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",p.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",p.current.orientationHandler))}function E(){p.current.element&&(p.current.resizeObserver=new u(g),p.current.resizeObserver.observe(p.current.element),t&&p.current.scrollContainers&&p.current.scrollContainers.forEach(e=>e.addEventListener("scroll",g,{capture:!0,passive:!0})),p.current.orientationHandler=()=>{g()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",p.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",p.current.orientationHandler))}return o=g,l=!!t,(0,i.useEffect)(()=>{if(l)return window.addEventListener("scroll",o,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",o,!0)},[o,l]),c=y,(0,i.useEffect)(()=>(window.addEventListener("resize",c),()=>void window.removeEventListener("resize",c)),[c]),(0,i.useEffect)(()=>{w(),E()},[t,g,y]),(0,i.useEffect)(()=>w,[]),[e=>{e&&e!==p.current.element&&(w(),p.current.element=e,p.current.scrollContainers=function e(t){let n=[];if(!t||t===document.body)return n;let{overflow:r,overflowX:i,overflowY:o}=window.getComputedStyle(t);return[r,i,o].some(e=>"auto"===e||"scroll"===e)&&n.push(t),[...n,...e(t.parentElement)]}(e),E())},d,b]}({scroll:!0,debounce:{scroll:50,resize:0},...l}),T=i.useRef(null),z=i.useRef(null);i.useImperativeHandle(e,()=>T.current);let I=(0,r.a)(O),[R,k]=i.useState(!1),[D,U]=i.useState(!1);if(R)throw R;if(D)throw D;let H=i.useRef(null);(0,r.b)(()=>{let e=T.current;L.width>0&&L.height>0&&e&&(H.current||(H.current=(0,r.c)(e)),async function(){await H.current.configure({gl:d,scene:P,events:f,shadows:m,linear:v,flat:b,legacy:y,orthographic:g,frameloop:w,dpr:E,performance:S,raycaster:x,camera:j,size:L,onPointerMissed:(...e)=>null==I.current?void 0:I.current(...e),onCreated:e=>{null==e.events.connect||e.events.connect(p?(0,r.i)(p)?p.current:p:z.current),h&&e.setEvents({compute:(e,t)=>{let n=e[h+"X"],r=e[h+"Y"];t.pointer.set(n/t.size.width*2-1,-(2*(r/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),null==C||C(e)}}),H.current.render((0,c.jsx)(A,{children:(0,c.jsx)(r.E,{set:U,children:(0,c.jsx)(i.Suspense,{fallback:(0,c.jsx)(r.B,{set:k}),children:null!=t?t:null})})}))}())}),i.useEffect(()=>{let e=T.current;if(e)return()=>(0,r.d)(e)},[]);let N=p?"none":"auto";return(0,c.jsx)("div",{ref:z,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:N,...u},..._,children:(0,c.jsx)("div",{ref:M,style:{width:"100%",height:"100%"},children:(0,c.jsx)("canvas",{ref:T,style:{display:"block"},children:n})})})}function d(e){return(0,c.jsx)(l.Af,{children:(0,c.jsx)(u,{...e})})}n(3203),n(24258),n(3625)},97541:(e,t,n)=>{let r,i;n.d(t,{l:()=>I});var o=n(13022),a=n(6152),s=n(45106),l=n(42324);let c=new s.NRn,u=new s.Pq0;class d extends s.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new s.LuO(t,6,1);return this.setAttribute("instanceStart",new s.eHs(n,3,0)),this.setAttribute("instanceEnd",new s.eHs(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new s.LuO(n,2*t,1);return this.setAttribute("instanceColorStart",new s.eHs(r,t,0)),this.setAttribute("instanceColorEnd",new s.eHs(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new s.XJ7(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new s.NRn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),c.setFromBufferAttribute(t),this.boundingBox.union(c))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new s.iyt),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,o=e.count;i<o;i++)u.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(u)),u.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(u));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var f=n(23793);let p=parseInt(s.sPf.replace(/\D+/g,""));class h extends s.BKk{constructor(e){super({type:"LineMaterial",uniforms:s.LlO.clone(s.LlO.merge([f.UniformsLib.common,f.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${p>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let m=p>=125?"uv1":"uv2",v=new s.IUQ,b=new s.Pq0,y=new s.Pq0,g=new s.IUQ,w=new s.IUQ,E=new s.IUQ,S=new s.Pq0,x=new s.kn4,j=new s.cZY,P=new s.Pq0,O=new s.NRn,C=new s.iyt,_=new s.IUQ;function A(e,t,n){return _.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),_.multiplyScalar(1/_.w),_.x=i/n.width,_.y=i/n.height,_.applyMatrix4(e.projectionMatrixInverse),_.multiplyScalar(1/_.w),Math.abs(Math.max(_.x,_.y))}class M extends s.eaF{constructor(e=new d,t=new h({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,o=t.count;e<o;e++,i+=2)b.fromBufferAttribute(t,e),y.fromBufferAttribute(n,e),r[i]=0===i?0:r[i-1],r[i+1]=r[i]+b.distanceTo(y);let i=new s.LuO(r,2,1);return e.setAttribute("instanceDistanceStart",new s.eHs(i,1,0)),e.setAttribute("instanceDistanceEnd",new s.eHs(i,1,1)),this}raycast(e,t){let n,o,a=this.material.worldUnits,l=e.camera;null!==l||a||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let c=void 0!==e.params.Line2&&e.params.Line2.threshold||0;r=e.ray;let u=this.matrixWorld,d=this.geometry,f=this.material;if(i=f.linewidth+c,null===d.boundingSphere&&d.computeBoundingSphere(),C.copy(d.boundingSphere).applyMatrix4(u),a)n=.5*i;else{let e=Math.max(l.near,C.distanceToPoint(r.origin));n=A(l,e,f.resolution)}if(C.radius+=n,!1!==r.intersectsSphere(C)){if(null===d.boundingBox&&d.computeBoundingBox(),O.copy(d.boundingBox).applyMatrix4(u),a)o=.5*i;else{let e=Math.max(l.near,O.distanceToPoint(r.origin));o=A(l,e,f.resolution)}O.expandByScalar(o),!1!==r.intersectsBox(O)&&(a?function(e,t){let n=e.matrixWorld,o=e.geometry,a=o.attributes.instanceStart,l=o.attributes.instanceEnd,c=Math.min(o.instanceCount,a.count);for(let o=0;o<c;o++){j.start.fromBufferAttribute(a,o),j.end.fromBufferAttribute(l,o),j.applyMatrix4(n);let c=new s.Pq0,u=new s.Pq0;r.distanceSqToSegment(j.start,j.end,u,c),u.distanceTo(c)<.5*i&&t.push({point:u,pointOnLine:c,distance:r.origin.distanceTo(u),object:e,face:null,faceIndex:o,uv:null,[m]:null})}}(this,t):function(e,t,n){let o=t.projectionMatrix,a=e.material.resolution,l=e.matrixWorld,c=e.geometry,u=c.attributes.instanceStart,d=c.attributes.instanceEnd,f=Math.min(c.instanceCount,u.count),p=-t.near;r.at(1,E),E.w=1,E.applyMatrix4(t.matrixWorldInverse),E.applyMatrix4(o),E.multiplyScalar(1/E.w),E.x*=a.x/2,E.y*=a.y/2,E.z=0,S.copy(E),x.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<f;t++){if(g.fromBufferAttribute(u,t),w.fromBufferAttribute(d,t),g.w=1,w.w=1,g.applyMatrix4(x),w.applyMatrix4(x),g.z>p&&w.z>p)continue;if(g.z>p){let e=g.z-w.z,t=(g.z-p)/e;g.lerp(w,t)}else if(w.z>p){let e=w.z-g.z,t=(w.z-p)/e;w.lerp(g,t)}g.applyMatrix4(o),w.applyMatrix4(o),g.multiplyScalar(1/g.w),w.multiplyScalar(1/w.w),g.x*=a.x/2,g.y*=a.y/2,w.x*=a.x/2,w.y*=a.y/2,j.start.copy(g),j.start.z=0,j.end.copy(w),j.end.z=0;let c=j.closestPointToPointParameter(S,!0);j.at(c,P);let f=s.cj9.lerp(g.z,w.z,c),h=f>=-1&&f<=1,v=S.distanceTo(P)<.5*i;if(h&&v){j.start.fromBufferAttribute(u,t),j.end.fromBufferAttribute(d,t),j.start.applyMatrix4(l),j.end.applyMatrix4(l);let i=new s.Pq0,o=new s.Pq0;r.distanceSqToSegment(j.start,j.end,o,i),n.push({point:o,pointOnLine:i,distance:r.origin.distanceTo(o),object:e,face:null,faceIndex:t,uv:null,[m]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(v),this.material.uniforms.resolution.value.set(v.z,v.w))}}class L extends d{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(3===t)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class T extends M{constructor(e=new L,t=new h({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let z=a.forwardRef(function({points:e,color:t=0xffffff,vertexColors:n,linewidth:r,lineWidth:i,segments:c,dashed:u,...f},p){var m,v;let b=(0,l.C)(e=>e.size),y=a.useMemo(()=>c?new M:new T,[c]),[g]=a.useState(()=>new h),w=(null==n||null==(m=n[0])?void 0:m.length)===4?4:3,E=a.useMemo(()=>{let r=c?new d:new L,i=e.map(e=>{let t=Array.isArray(e);return e instanceof s.Pq0||e instanceof s.IUQ?[e.x,e.y,e.z]:e instanceof s.I9Y?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=0xffffff;let e=n.map(e=>e instanceof s.Q1f?e.toArray():e);r.setColors(e.flat(),w)}return r},[e,c,n,w]);return a.useLayoutEffect(()=>{y.computeLineDistances()},[e,y]),a.useLayoutEffect(()=>{u?g.defines.USE_DASH="":delete g.defines.USE_DASH,g.needsUpdate=!0},[u,g]),a.useEffect(()=>()=>{E.dispose(),g.dispose()},[E]),a.createElement("primitive",(0,o.A)({object:y,ref:p},f),a.createElement("primitive",{object:E,attach:"geometry"}),a.createElement("primitive",(0,o.A)({object:g,attach:"material",color:t,vertexColors:!!n,resolution:[b.width,b.height],linewidth:null!=(v=null!=r?r:i)?v:1,dashed:u,transparent:4===w},f)))}),I=a.forwardRef(({threshold:e=15,geometry:t,...n},r)=>{let i=a.useRef(null);a.useImperativeHandle(r,()=>i.current,[]);let l=a.useMemo(()=>[0,0,0,1,0,0],[]),c=a.useRef(null),u=a.useRef(null);return a.useLayoutEffect(()=>{let n=i.current.parent,r=null!=t?t:null==n?void 0:n.geometry;if(!r||c.current===r&&u.current===e)return;c.current=r,u.current=e;let o=new s.TDQ(r,e).attributes.position.array;i.current.geometry.setPositions(o),i.current.geometry.attributes.instanceStart.needsUpdate=!0,i.current.geometry.attributes.instanceEnd.needsUpdate=!0,i.current.computeLineDistances()}),a.createElement(z,(0,o.A)({segments:!0,points:l,ref:i,raycast:()=>null},n))})}}]);