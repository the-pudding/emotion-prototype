import{B as u,C as d}from"./paths-b5311ced.js";function h(s){let e=s.baseURI;if(!e){const t=s.getElementsByTagName("base");e=t.length?t[0].href:s.URL}return e}function g(){return{x:pageXOffset,y:pageYOffset}}function m(s){let e,t=null,r=null,a=null;for(const n of s.composedPath())n instanceof Element&&(!e&&n.nodeName.toUpperCase()==="A"&&(e=n),t===null&&(t=l(n,"data-sveltekit-noscroll")),r===null&&(r=l(n,"data-sveltekit-prefetch")),a===null&&(a=l(n,"data-sveltekit-reload")));const o=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:o,options:{noscroll:t,prefetch:r,reload:a}}}function l(s,e){const t=s.getAttribute(e);return t===null?t:t===""?!0:(t==="off",!1)}function f(s){const e=u(s);let t=!0;function r(){t=!0,e.update(n=>n)}function a(n){t=!1,e.set(n)}function o(n){let i;return e.subscribe(c=>{(i===void 0||t&&c!==i)&&n(i=c)})}return{notify:r,set:a,subscribe:o}}function p(){const{set:s,subscribe:e}=u(!1);let t;async function r(){clearTimeout(t);const a=await fetch(`${d}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:o}=await a.json(),n=o!=="1668025597972";return n&&(s(!0),clearTimeout(t)),n}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:e,check:r}}function _(s){s.client}const k={url:f({}),page:f({}),navigating:u(null),updated:p()};export{g as a,m as f,h as g,_ as i,k as s};
