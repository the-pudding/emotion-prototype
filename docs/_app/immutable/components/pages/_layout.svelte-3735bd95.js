import{S as b,i as y,s as E,k as _,l as f,m,h as u,B as q,n as c,C as d,b as p,D as h,A as $,E as A,F as H,v as I,a as k,w,c as z,x as C,G as D,H as G,I as M,f as g,t as v,y as S}from"../../chunks/index-68fc1bdd.js";import{b as B}from"../../chunks/paths-6cd3a76e.js";import{e as F}from"../../chunks/misc-93ae4411.js";function L(o){let t,n,s,l;return{c(){t=_("header"),n=_("a"),s=_("img"),this.h()},l(r){t=f(r,"HEADER",{class:!0});var a=m(t);n=f(a,"A",{href:!0,"aria-label":!0,target:!0});var e=m(n);s=f(e,"IMG",{src:!0,class:!0}),e.forEach(u),a.forEach(u),this.h()},h(){q(s.src,l=o[1])||c(s,"src",l),c(s,"class","svelte-10cvznq"),d(s,"visible",o[0]),c(n,"href","https://pudding.cool"),c(n,"aria-label","The Pudding"),c(n,"target","_blank"),c(t,"class","svelte-10cvznq")},m(r,a){p(r,t,a),h(t,n),h(n,s)},p(r,[a]){a&1&&d(s,"visible",r[0])},i:$,o:$,d(r){r&&u(t)}}}function N(o,t,n){let s;A(o,F,r=>n(0,s=r));let l=`${B}/assets/img/logo_small.png`;return[s,l]}class P extends b{constructor(t){super(),y(this,t,N,L,E,{})}}function R(o){let t,n,s,l;t=new P({});const r=o[1].default,a=H(r,o,o[0],null);return{c(){I(t.$$.fragment),n=k(),s=_("main"),a&&a.c(),this.h()},l(e){w(t.$$.fragment,e),n=z(e),s=f(e,"MAIN",{id:!0});var i=m(s);a&&a.l(i),i.forEach(u),this.h()},h(){c(s,"id","content")},m(e,i){C(t,e,i),p(e,n,i),p(e,s,i),a&&a.m(s,null),l=!0},p(e,[i]){a&&a.p&&(!l||i&1)&&D(a,r,e,e[0],l?M(r,e[0],i,null):G(e[0]),null)},i(e){l||(g(t.$$.fragment,e),g(a,e),l=!0)},o(e){v(t.$$.fragment,e),v(a,e),l=!1},d(e){S(t,e),e&&u(n),e&&u(s),a&&a.d(e)}}}function T(o,t,n){let{$$slots:s={},$$scope:l}=t;return o.$$set=r=>{"$$scope"in r&&n(0,l=r.$$scope)},[l,s]}class O extends b{constructor(t){super(),y(this,t,T,R,E,{})}}export{O as default};
