function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(r)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e,n,r){if(t){const s=i(t,e,n,r);return t[0](s)}}function i(t,e,r,s){return t[1]&&s?n(r.ctx.slice(),t[1](s(e))):r.ctx}function u(t,e,n,r,s,o,a){const c=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(c){const s=i(e,n,r,a);t.p(s,c)}}const f="undefined"!=typeof window;let h=f?()=>window.performance.now():()=>Date.now(),p=f?t=>requestAnimationFrame(t):t;const d=new Set;function m(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&p(m)}function g(t){let e;return 0===d.size&&p(m),{promise:new Promise(n=>{d.add(e={c:t,f:n})}),abort(){d.delete(e)}}}function v(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function _(t){return document.createTextNode(t)}function E(){return _(" ")}function x(){return _("")}function A(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function S(t){return function(e){return e.preventDefault(),t.call(this,e)}}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function L(t){return Array.from(t.childNodes)}function C(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?w(e):$(e)}function R(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return _(e)}function P(t){return R(t," ")}function F(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function I(t,e){t.value=null==e?"":e}function N(t,e=document.body){return Array.from(e.querySelectorAll(t))}const U=new Set;let M,O=0;function j(t,e,n,r,s,o,a,c=0){const l=16.666/r;let i="{\n";for(let t=0;t<=1;t+=l){const r=e+(n-e)*o(t);i+=100*t+`%{${a(r,1-r)}}\n`}const u=i+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,h=t.ownerDocument;U.add(h);const p=h.__svelte_stylesheet||(h.__svelte_stylesheet=h.head.appendChild($("style")).sheet),d=h.__svelte_rules||(h.__svelte_rules={});d[f]||(d[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${f} ${r}ms linear ${s}ms 1 both`,O+=1,f}function q(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-r.length;s&&(t.style.animation=r.join(", "),O-=s,O||p(()=>{O||(U.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),U.clear())}))}function D(t){M=t}function H(){if(!M)throw new Error("Function called outside component initialization");return M}function T(t){H().$$.on_mount.push(t)}const B=[],V=[],z=[],J=[],G=Promise.resolve();let K=!1;function W(t){z.push(t)}let Y=!1;const X=new Set;function Q(){if(!Y){Y=!0;do{for(let t=0;t<B.length;t+=1){const e=B[t];D(e),Z(e.$$)}for(B.length=0;V.length;)V.pop()();for(let t=0;t<z.length;t+=1){const e=z[t];X.has(e)||(X.add(e),e())}z.length=0}while(B.length);for(;J.length;)J.pop()();K=!1,Y=!1,X.clear()}}function Z(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}let tt;function et(){return tt||(tt=Promise.resolve(),tt.then(()=>{tt=null})),tt}function nt(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const rt=new Set;let st;function ot(){st={r:0,c:[],p:st}}function at(){st.r||o(st.c),st=st.p}function ct(t,e){t&&t.i&&(rt.delete(t),t.i(e))}function lt(t,e,n,r){if(t&&t.o){if(rt.has(t))return;rt.add(t),st.c.push(()=>{rt.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const it={duration:0};function ut(n,r,s){let o,c,l=r(n,s),i=!1,u=0;function f(){o&&q(n,o)}function p(){const{delay:r=0,duration:s=300,easing:a=e,tick:p=t,css:d}=l||it;d&&(o=j(n,0,1,s,r,a,d,u++)),p(0,1);const m=h()+r,v=m+s;c&&c.abort(),i=!0,W(()=>nt(n,!0,"start")),c=g(t=>{if(i){if(t>=v)return p(1,0),nt(n,!0,"end"),f(),i=!1;if(t>=m){const e=a((t-m)/s);p(e,1-e)}}return i})}let d=!1;return{start(){d||(q(n),a(l)?(l=l(),et().then(p)):p())},invalidate(){d=!1},end(){i&&(f(),i=!1)}}}function ft(n,r,s,c){let l=r(n,s),i=c?0:1,u=null,f=null,p=null;function d(){p&&q(n,p)}function m(t,e){const n=t.b-i;return e*=Math.abs(n),{a:i,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(r){const{delay:s=0,duration:a=300,easing:c=e,tick:v=t,css:y}=l||it,b={start:h()+s,b:r};r||(b.group=st,st.r+=1),u?f=b:(y&&(d(),p=j(n,i,r,a,s,c,y)),r&&v(0,1),u=m(b,a),W(()=>nt(n,r,"start")),g(t=>{if(f&&t>f.start&&(u=m(f,a),f=null,nt(n,u.b,"start"),y&&(d(),p=j(n,i,u.b,u.duration,0,c,l.css))),u)if(t>=u.end)v(i=u.b,1-i),nt(n,u.b,"end"),f||(u.b?d():--u.group.r||o(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;i=u.a+u.d*c(e/u.duration),v(i,1-i)}return!(!u&&!f)}))}return{run(t){a(l)?et().then(()=>{l=l(),v(t)}):v(t)},end(){d(),u=f=null}}}function ht(t,e){lt(t,1,1,()=>{e.delete(t.key)})}function pt(t,e,n,r,s,o,a,c,l,i,u,f){let h=t.length,p=o.length,d=h;const m={};for(;d--;)m[t[d].key]=d;const g=[],v=new Map,y=new Map;for(d=p;d--;){const t=f(s,o,d),c=n(t);let l=a.get(c);l?r&&l.p(t,e):(l=i(c,t),l.c()),v.set(c,g[d]=l),c in m&&y.set(c,Math.abs(d-m[c]))}const b=new Set,$=new Set;function w(t){ct(t,1),t.m(c,u),a.set(t.key,t),u=t.first,p--}for(;h&&p;){const e=g[p-1],n=t[h-1],r=e.key,s=n.key;e===n?(u=e.first,h--,p--):v.has(s)?!a.has(r)||b.has(r)?w(e):$.has(s)?h--:y.get(r)>y.get(s)?($.add(r),w(e)):(b.add(s),h--):(l(n,a),h--)}for(;h--;){const e=t[h];v.has(e.key)||l(e,a)}for(;p;)w(g[p-1]);return g}function dt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function mt(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function vt(t,e){t&&t.l(e)}function yt(t,e,n){const{fragment:s,on_mount:c,on_destroy:l,after_update:i}=t.$$;s&&s.m(e,n),W(()=>{const e=c.map(r).filter(a);l?l.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(W)}function bt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){-1===t.$$.dirty[0]&&(B.push(t),K||(K=!0,G.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function wt(e,n,r,a,c,l,i=[-1]){const u=M;D(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:i};let p=!1;if(h.ctx=r?r(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(h.bound[t]&&h.bound[t](s),p&&$t(e,t)),n}):[],h.update(),p=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=L(n.target);h.fragment&&h.fragment.l(t),t.forEach(b)}else h.fragment&&h.fragment.c();n.intro&&ct(e.$$.fragment),yt(e,n.target,n.anchor),Q()}D(u)}class _t{$destroy(){bt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Et=[];function xt(e,n=t){let r;const s=[];function o(t){if(c(e,t)&&(e=t,r)){const t=!Et.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Et.push(n,e)}if(t){for(let t=0;t<Et.length;t+=2)Et[t][0](Et[t+1]);Et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const l=[a,c];return s.push(l),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const At={},St=()=>({});function kt(t){const e=t-1;return e*e*e+1}function Lt(t,{delay:n=0,duration:r=400,easing:s=e}){const o=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:s,css:t=>"opacity: "+t*o}}function Ct(t,{delay:e=0,duration:n=400,easing:r=kt,x:s=0,y:o=0,opacity:a=0}){const c=getComputedStyle(t),l=+c.opacity,i="none"===c.transform?"":c.transform,u=l*(1-a);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${i} translate(${(1-t)*s}px, ${(1-t)*o}px);\n\t\t\topacity: ${l-u*e}`}}function Rt(t,{delay:e=0,duration:n=400,easing:r=kt}){const s=getComputedStyle(t),o=+s.opacity,a=parseFloat(s.height),c=parseFloat(s.paddingTop),l=parseFloat(s.paddingBottom),i=parseFloat(s.marginTop),u=parseFloat(s.marginBottom),f=parseFloat(s.borderTopWidth),h=parseFloat(s.borderBottomWidth);return{delay:e,duration:n,easing:r,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*o};height: ${t*a}px;padding-top: ${t*c}px;padding-bottom: ${t*l}px;margin-top: ${t*i}px;margin-bottom: ${t*u}px;border-top-width: ${t*f}px;border-bottom-width: ${t*h}px;`}}function Pt(t){let e,n,r;return{c(){e=w("svg"),n=w("g"),r=w("path"),this.h()},l(t){e=C(t,"svg",{xmlns:!0,width:!0,height:!0},1);var s=L(e);n=C(s,"g",{fill:!0,"fill-rule":!0},1);var o=L(n);r=C(o,"path",{d:!0},1),L(r).forEach(b),o.forEach(b),s.forEach(b),this.h()},h(){k(r,"d","M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z"),k(n,"fill","#FFF"),k(n,"fill-rule","evenodd"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","20"),k(e,"height","17")},m(t,s){y(t,e,s),v(e,n),v(n,r)},d(t){t&&b(e)}}}function Ft(t){let e,n;return{c(){e=w("svg"),n=w("path"),this.h()},l(t){e=C(t,"svg",{xmlns:!0,width:!0,height:!0},1);var r=L(e);n=C(r,"path",{fill:!0,"fill-rule":!0,d:!0},1),L(n).forEach(b),r.forEach(b),this.h()},h(){k(n,"fill","#FFF"),k(n,"fill-rule","evenodd"),k(n,"d","M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","18"),k(e,"height","17")},m(t,r){y(t,e,r),v(e,n)},d(t){t&&b(e)}}}function It(t){let e,n,r,s,o,a,c,l,i,u,f,h,p,d,m,g,w,x,S,F,I;return{c(){e=$("div"),n=$("ul"),r=$("li"),s=$("a"),o=_("home"),c=E(),l=$("li"),i=$("a"),u=_("about"),h=E(),p=$("li"),d=$("a"),m=_("contact us"),this.h()},l(t){e=C(t,"DIV",{class:!0});var a=L(e);n=C(a,"UL",{class:!0});var f=L(n);r=C(f,"LI",{class:!0});var g=L(r);s=C(g,"A",{class:!0,"aria-current":!0,href:!0});var v=L(s);o=R(v,"home"),v.forEach(b),g.forEach(b),c=P(f),l=C(f,"LI",{class:!0});var y=L(l);i=C(y,"A",{class:!0,"aria-current":!0,href:!0});var $=L(i);u=R($,"about"),$.forEach(b),y.forEach(b),h=P(f),p=C(f,"LI",{class:!0});var w=L(p);d=C(w,"A",{class:!0,"aria-current":!0,href:!0});var _=L(d);m=R(_,"contact us"),_.forEach(b),w.forEach(b),f.forEach(b),a.forEach(b),this.h()},h(){k(s,"class","t-main-nav t-white"),k(s,"aria-current",a=void 0===t[0]?"page":void 0),k(s,"href","./"),k(r,"class","mobile-nav__item svelte-1y2k3u8"),k(i,"class","t-main-nav t-white"),k(i,"aria-current",f="about"===t[0]?"page":void 0),k(i,"href","./about"),k(l,"class","mobile-nav__item svelte-1y2k3u8"),k(d,"class","t-main-nav t-white button button--contact"),k(d,"aria-current",g="contact"===t[0]?"page":void 0),k(d,"href","./contact"),k(p,"class","mobile-nav__item svelte-1y2k3u8"),k(n,"class","mobile-nav svelte-1y2k3u8"),k(e,"class","mobile-nav-block svelte-1y2k3u8")},m(a,f){y(a,e,f),v(e,n),v(n,r),v(r,s),v(s,o),v(n,c),v(n,l),v(l,i),v(i,u),v(n,h),v(n,p),v(p,d),v(d,m),S=!0,F||(I=A(e,"click",t[2]),F=!0)},p(t,e){(!S||1&e&&a!==(a=void 0===t[0]?"page":void 0))&&k(s,"aria-current",a),(!S||1&e&&f!==(f="about"===t[0]?"page":void 0))&&k(i,"aria-current",f),(!S||1&e&&g!==(g="contact"===t[0]?"page":void 0))&&k(d,"aria-current",g)},i(t){S||(W(()=>{w||(w=ft(n,Ct,{x:200},!0)),w.run(1)}),W(()=>{x||(x=ft(e,Lt,{},!0)),x.run(1)}),S=!0)},o(t){w||(w=ft(n,Ct,{x:200},!1)),w.run(0),x||(x=ft(e,Lt,{},!1)),x.run(0),S=!1},d(t){t&&b(e),t&&w&&w.end(),t&&x&&x.end(),F=!1,I()}}}function Nt(t){let e,n,r,s,o,a,c,l,i,u,f,h,p,d,m,g,w,x,S,F,I,N,U,M,O,j,q,D,H,T;function B(t,e){return t[1]?Ft:Pt}let V=B(t),z=V(t),J=t[1]&&It(t);return{c(){e=$("nav"),n=$("a"),r=$("span"),s=_("site logo"),o=E(),a=$("div"),c=$("img"),i=E(),u=$("ul"),f=$("li"),h=$("a"),p=_("home"),m=E(),g=$("li"),w=$("a"),x=_("about"),F=E(),I=$("li"),N=$("a"),U=_("contact us"),O=E(),j=$("button"),z.c(),q=E(),J&&J.c(),this.h()},l(t){e=C(t,"NAV",{class:!0});var l=L(e);n=C(l,"A",{class:!0,href:!0});var d=L(n);r=C(d,"SPAN",{class:!0});var v=L(r);s=R(v,"site logo"),v.forEach(b),o=P(d),a=C(d,"DIV",{class:!0});var y=L(a);c=C(y,"IMG",{src:!0,alt:!0,class:!0}),y.forEach(b),d.forEach(b),i=P(l),u=C(l,"UL",{class:!0});var $=L(u);f=C($,"LI",{class:!0});var _=L(f);h=C(_,"A",{class:!0,"aria-current":!0,href:!0});var E=L(h);p=R(E,"home"),E.forEach(b),_.forEach(b),m=P($),g=C($,"LI",{class:!0});var A=L(g);w=C(A,"A",{class:!0,"aria-current":!0,href:!0});var S=L(w);x=R(S,"about"),S.forEach(b),A.forEach(b),F=P($),I=C($,"LI",{class:!0});var k=L(I);N=C(k,"A",{class:!0,"aria-current":!0,href:!0});var M=L(N);U=R(M,"contact us"),M.forEach(b),k.forEach(b),$.forEach(b),O=P(l),j=C(l,"BUTTON",{class:!0});var D=L(j);z.l(D),D.forEach(b),q=P(l),J&&J.l(l),l.forEach(b),this.h()},h(){k(r,"class","sr-only"),c.src!==(l="./images/logo.svg")&&k(c,"src","./images/logo.svg"),k(c,"alt","site logo"),k(c,"class","svelte-1y2k3u8"),k(a,"class","site-logo__container svelte-1y2k3u8"),k(n,"class","site-logo svelte-1y2k3u8"),k(n,"href","."),k(h,"class","t-main-nav t-white t-hover-color svelte-1y2k3u8"),k(h,"aria-current",d=void 0===t[0]?"page":void 0),k(h,"href","./"),k(f,"class","desktop-nav__item svelte-1y2k3u8"),k(w,"class","t-main-nav t-white t-hover-color svelte-1y2k3u8"),k(w,"aria-current",S="about"===t[0]?"page":void 0),k(w,"href","./about"),k(g,"class","desktop-nav__item svelte-1y2k3u8"),k(N,"class","t-main-nav t-white button button--contact"),k(N,"aria-current",M="contact"===t[0]?"page":void 0),k(N,"href","./contact"),k(I,"class","desktop-nav__item svelte-1y2k3u8"),k(u,"class","desktop-nav svelte-1y2k3u8"),k(j,"class","button button--burger svelte-1y2k3u8"),k(e,"class","main-nav svelte-1y2k3u8")},m(l,d){y(l,e,d),v(e,n),v(n,r),v(r,s),v(n,o),v(n,a),v(a,c),v(e,i),v(e,u),v(u,f),v(f,h),v(h,p),v(u,m),v(u,g),v(g,w),v(w,x),v(u,F),v(u,I),v(I,N),v(N,U),v(e,O),v(e,j),z.m(j,null),v(e,q),J&&J.m(e,null),D=!0,H||(T=A(j,"click",t[2]),H=!0)},p(t,[n]){(!D||1&n&&d!==(d=void 0===t[0]?"page":void 0))&&k(h,"aria-current",d),(!D||1&n&&S!==(S="about"===t[0]?"page":void 0))&&k(w,"aria-current",S),(!D||1&n&&M!==(M="contact"===t[0]?"page":void 0))&&k(N,"aria-current",M),V!==(V=B(t))&&(z.d(1),z=V(t),z&&(z.c(),z.m(j,null))),t[1]?J?(J.p(t,n),2&n&&ct(J,1)):(J=It(t),J.c(),ct(J,1),J.m(e,null)):J&&(ot(),lt(J,1,1,()=>{J=null}),at())},i(t){D||(ct(J),D=!0)},o(t){lt(J),D=!1},d(t){t&&b(e),z.d(),J&&J.d(),H=!1,T()}}}function Ut(t,e,n){let{segment:r}=e,s=!1;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r,s,function(){n(1,s=!s)}]}class Mt extends _t{constructor(t){super(),wt(this,t,Ut,Nt,c,{segment:0})}}function Ot(e){let n,r,s,o,a,c,l,i,u,f,h,p,d,m,g,x,A,S,F,I,N,U,M,O,j,q,D,H,T,B,V,z,J,G,K,W,Y,X,Q,Z,tt,et,nt,rt,st,ot,at,ct,lt,it,ut,ft,ht,pt,dt,mt;return{c(){n=$("footer"),r=$("div"),s=$("div"),o=$("span"),a=_("site footer logo"),c=E(),l=$("div"),i=$("img"),f=E(),h=$("ul"),p=$("li"),d=$("a"),m=_("home"),g=E(),x=$("li"),A=$("a"),S=_("about"),F=E(),I=$("p"),N=_("987 Hillcrest Lane"),U=$("br"),M=_("\n      Irvine, CA"),O=$("br"),j=_("\n      California 92714"),q=$("br"),D=_("\n      Call Us : 949-833-7432"),H=E(),T=$("ul"),B=$("li"),V=$("a"),z=$("span"),J=_("Facebook"),G=E(),K=w("svg"),W=w("path"),Y=E(),X=$("li"),Q=$("a"),Z=$("span"),tt=_("Pinterest"),et=E(),nt=w("svg"),rt=w("path"),st=E(),ot=$("li"),at=$("a"),ct=$("span"),lt=_("Twitter"),it=E(),ut=w("svg"),ft=w("path"),ht=E(),pt=$("p"),dt=_("Copyright 2020. All Rights Reserved"),this.h()},l(t){n=C(t,"FOOTER",{class:!0,"aria-current":!0});var e=L(n);r=C(e,"DIV",{class:!0});var u=L(r);s=C(u,"DIV",{class:!0});var v=L(s);o=C(v,"SPAN",{class:!0});var y=L(o);a=R(y,"site footer logo"),y.forEach(b),c=P(v),l=C(v,"DIV",{class:!0});var $=L(l);i=C($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(b),v.forEach(b),f=P(u),h=C(u,"UL",{class:!0});var w=L(h);p=C(w,"LI",{class:!0});var _=L(p);d=C(_,"A",{href:!0,class:!0});var E=L(d);m=R(E,"home"),E.forEach(b),_.forEach(b),g=P(w),x=C(w,"LI",{class:!0});var k=L(x);A=C(k,"A",{href:!0,class:!0});var mt=L(A);S=R(mt,"about"),mt.forEach(b),k.forEach(b),w.forEach(b),F=P(u),I=C(u,"P",{class:!0});var gt=L(I);N=R(gt,"987 Hillcrest Lane"),U=C(gt,"BR",{}),M=R(gt,"\n      Irvine, CA"),O=C(gt,"BR",{}),j=R(gt,"\n      California 92714"),q=C(gt,"BR",{}),D=R(gt,"\n      Call Us : 949-833-7432"),gt.forEach(b),H=P(u),T=C(u,"UL",{class:!0});var vt=L(T);B=C(vt,"LI",{class:!0});var yt=L(B);V=C(yt,"A",{href:!0,class:!0});var bt=L(V);z=C(bt,"SPAN",{class:!0});var $t=L(z);J=R($t,"Facebook"),$t.forEach(b),G=P(bt),K=C(bt,"svg",{xmlns:!0,width:!0,height:!0},1);var wt=L(K);W=C(wt,"path",{fill:!0,d:!0,class:!0},1),L(W).forEach(b),wt.forEach(b),bt.forEach(b),yt.forEach(b),Y=P(vt),X=C(vt,"LI",{class:!0});var _t=L(X);Q=C(_t,"A",{href:!0,class:!0});var Et=L(Q);Z=C(Et,"SPAN",{class:!0});var xt=L(Z);tt=R(xt,"Pinterest"),xt.forEach(b),et=P(Et),nt=C(Et,"svg",{xmlns:!0,width:!0,height:!0},1);var At=L(nt);rt=C(At,"path",{fill:!0,d:!0,class:!0},1),L(rt).forEach(b),At.forEach(b),Et.forEach(b),_t.forEach(b),st=P(vt),ot=C(vt,"LI",{class:!0});var St=L(ot);at=C(St,"A",{href:!0,class:!0});var kt=L(at);ct=C(kt,"SPAN",{class:!0});var Lt=L(ct);lt=R(Lt,"Twitter"),Lt.forEach(b),it=P(kt),ut=C(kt,"svg",{xmlns:!0,width:!0,height:!0},1);var Ct=L(ut);ft=C(Ct,"path",{fill:!0,d:!0,class:!0},1),L(ft).forEach(b),Ct.forEach(b),kt.forEach(b),St.forEach(b),vt.forEach(b),ht=P(u),pt=C(u,"P",{class:!0});var Rt=L(pt);dt=R(Rt,"Copyright 2020. All Rights Reserved"),Rt.forEach(b),u.forEach(b),e.forEach(b),this.h()},h(){k(o,"class","sr-only"),i.src!==(u="./images/logo.svg")&&k(i,"src","./images/logo.svg"),k(i,"alt","site footer logo"),k(i,"class","svelte-1nm1b3w"),k(l,"class","footer__logo__container svelte-1nm1b3w"),k(s,"class","footer__logo svelte-1nm1b3w"),k(d,"href","./"),k(d,"class","t-footer-nav t-white"),k(p,"class","footer__nav__item"),k(A,"href","./about"),k(A,"class","t-footer-nav t-white"),k(x,"class","footer__nav__item"),k(h,"class","footer__nav svelte-1nm1b3w"),k(I,"class","footer__site-info t-footer-info t-white svelte-1nm1b3w"),k(z,"class","sr-only"),k(W,"fill","#FFF"),k(W,"d","M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"),k(W,"class","svelte-1nm1b3w"),k(K,"xmlns","http://www.w3.org/2000/svg"),k(K,"width","24"),k(K,"height","24"),k(V,"href","https://www.facebook.com/"),k(V,"class","social__icon svelte-1nm1b3w"),k(B,"class","social svelte-1nm1b3w"),k(Z,"class","sr-only"),k(rt,"fill","#FFF"),k(rt,"d","M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"),k(rt,"class","svelte-1nm1b3w"),k(nt,"xmlns","http://www.w3.org/2000/svg"),k(nt,"width","24"),k(nt,"height","24"),k(Q,"href","https://www.pinterest.com/"),k(Q,"class","social__icon svelte-1nm1b3w"),k(X,"class","social svelte-1nm1b3w"),k(ct,"class","sr-only"),k(ft,"fill","#FFF"),k(ft,"d","M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"),k(ft,"class","svelte-1nm1b3w"),k(ut,"xmlns","http://www.w3.org/2000/svg"),k(ut,"width","24"),k(ut,"height","20"),k(at,"href","https://twitter.com/"),k(at,"class","social__icon svelte-1nm1b3w"),k(ot,"class","social svelte-1nm1b3w"),k(T,"class","footer__socials svelte-1nm1b3w"),k(pt,"class","footer__copyright t-footer-info t-white svelte-1nm1b3w"),k(r,"class","container svelte-1nm1b3w"),k(n,"class","footer svelte-1nm1b3w"),k(n,"aria-current",mt="contact"===e[0]?"contact-margin":void 0)},m(t,e){y(t,n,e),v(n,r),v(r,s),v(s,o),v(o,a),v(s,c),v(s,l),v(l,i),v(r,f),v(r,h),v(h,p),v(p,d),v(d,m),v(h,g),v(h,x),v(x,A),v(A,S),v(r,F),v(r,I),v(I,N),v(I,U),v(I,M),v(I,O),v(I,j),v(I,q),v(I,D),v(r,H),v(r,T),v(T,B),v(B,V),v(V,z),v(z,J),v(V,G),v(V,K),v(K,W),v(T,Y),v(T,X),v(X,Q),v(Q,Z),v(Z,tt),v(Q,et),v(Q,nt),v(nt,rt),v(T,st),v(T,ot),v(ot,at),v(at,ct),v(ct,lt),v(at,it),v(at,ut),v(ut,ft),v(r,ht),v(r,pt),v(pt,dt)},p(t,[e]){1&e&&mt!==(mt="contact"===t[0]?"contact-margin":void 0)&&k(n,"aria-current",mt)},i:t,o:t,d(t){t&&b(n)}}}function jt(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class qt extends _t{constructor(t){super(),wt(this,t,jt,Ot,c,{segment:0})}}function Dt(t){let e,n,r,s,o,a,c;n=new Mt({props:{segment:t[0]}});const i=t[2].default,f=l(i,t,t[1],null);return a=new qt({props:{segment:t[0]}}),{c(){e=$("header"),gt(n.$$.fragment),r=E(),s=$("main"),f&&f.c(),o=E(),gt(a.$$.fragment),this.h()},l(t){e=C(t,"HEADER",{class:!0});var c=L(e);vt(n.$$.fragment,c),c.forEach(b),r=P(t),s=C(t,"MAIN",{class:!0});var l=L(s);f&&f.l(l),l.forEach(b),o=P(t),vt(a.$$.fragment,t),this.h()},h(){k(e,"class","header"),k(s,"class","main")},m(t,l){y(t,e,l),yt(n,e,null),y(t,r,l),y(t,s,l),f&&f.m(s,null),y(t,o,l),yt(a,t,l),c=!0},p(t,[e]){const r={};1&e&&(r.segment=t[0]),n.$set(r),f&&f.p&&2&e&&u(f,i,t,t[1],e,null,null);const s={};1&e&&(s.segment=t[0]),a.$set(s)},i(t){c||(ct(n.$$.fragment,t),ct(f,t),ct(a.$$.fragment,t),c=!0)},o(t){lt(n.$$.fragment,t),lt(f,t),lt(a.$$.fragment,t),c=!1},d(t){t&&b(e),bt(n),t&&b(r),t&&b(s),f&&f.d(t),t&&b(o),bt(a,t)}}}function Ht(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class Tt extends _t{constructor(t){super(),wt(this,t,Ht,Dt,c,{segment:0})}}function Bt(t){let e,n,r=t[1].stack+"";return{c(){e=$("pre"),n=_(r)},l(t){e=C(t,"PRE",{});var s=L(e);n=R(s,r),s.forEach(b)},m(t,r){y(t,e,r),v(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&F(n,r)},d(t){t&&b(e)}}}function Vt(e){let n,r,s,o,a,c,l,i,u,f=e[1].message+"";document.title=n=e[0];let h=e[2]&&e[1].stack&&Bt(e);return{c(){r=E(),s=$("h1"),o=_(e[0]),a=E(),c=$("p"),l=_(f),i=E(),h&&h.c(),u=x(),this.h()},l(t){N('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(b),r=P(t),s=C(t,"H1",{class:!0});var n=L(s);o=R(n,e[0]),n.forEach(b),a=P(t),c=C(t,"P",{class:!0});var p=L(c);l=R(p,f),p.forEach(b),i=P(t),h&&h.l(t),u=x(),this.h()},h(){k(s,"class","svelte-ibl7am"),k(c,"class","svelte-ibl7am")},m(t,e){y(t,r,e),y(t,s,e),v(s,o),y(t,a,e),y(t,c,e),v(c,l),y(t,i,e),h&&h.m(t,e),y(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&F(o,t[0]),2&e&&f!==(f=t[1].message+"")&&F(l,f),t[2]&&t[1].stack?h?h.p(t,e):(h=Bt(t),h.c(),h.m(u.parentNode,u)):h&&(h.d(1),h=null)},i:t,o:t,d(t){t&&b(r),t&&b(s),t&&b(a),t&&b(c),t&&b(i),h&&h.d(t),t&&b(u)}}}function zt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class Jt extends _t{constructor(t){super(),wt(this,t,zt,Vt,c,{status:0,error:1})}}function Gt(t){let e,r,s;const o=[t[4].props];var a=t[4].component;function c(t){let e={};for(let t=0;t<o.length;t+=1)e=n(e,o[t]);return{props:e}}return a&&(e=new a(c())),{c(){e&&gt(e.$$.fragment),r=x()},l(t){e&&vt(e.$$.fragment,t),r=x()},m(t,n){e&&yt(e,t,n),y(t,r,n),s=!0},p(t,n){const s=16&n?dt(o,[mt(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){ot();const t=e;lt(t.$$.fragment,1,0,()=>{bt(t,1)}),at()}a?(e=new a(c()),gt(e.$$.fragment),ct(e.$$.fragment,1),yt(e,r.parentNode,r)):e=null}else a&&e.$set(s)},i(t){s||(e&&ct(e.$$.fragment,t),s=!0)},o(t){e&&lt(e.$$.fragment,t),s=!1},d(t){t&&b(r),e&&bt(e,t)}}}function Kt(t){let e,n;return e=new Jt({props:{error:t[0],status:t[1]}}),{c(){gt(e.$$.fragment)},l(t){vt(e.$$.fragment,t)},m(t,r){yt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(ct(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(t){bt(e,t)}}}function Wt(t){let e,n,r,s;const o=[Kt,Gt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){a[e].m(t,n),y(t,r,n),s=!0},p(t,s){let l=e;e=c(t),e===l?a[e].p(t,s):(ot(),lt(a[l],1,1,()=>{a[l]=null}),at(),n=a[e],n||(n=a[e]=o[e](t),n.c()),ct(n,1),n.m(r.parentNode,r))},i(t){s||(ct(n),s=!0)},o(t){lt(n),s=!1},d(t){a[e].d(t),t&&b(r)}}}function Yt(t){let e,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Wt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=n(o,s[t]);return e=new Tt({props:o}),{c(){gt(e.$$.fragment)},l(t){vt(e.$$.fragment,t)},m(t,n){yt(e,t,n),r=!0},p(t,[n]){const r=12&n?dt(s,[4&n&&{segment:t[2][0]},8&n&&mt(t[3].props)]):{};147&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(ct(e.$$.fragment,t),r=!0)},o(t){lt(e.$$.fragment,t),r=!1},d(t){bt(e,t)}}}function Xt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:l=null}=e,{notify:i}=e;var u,f,h;return u=i,H().$$.after_update.push(u),f=At,h=r,H().$$.context.set(f,h),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,i=t.notify)},[s,o,a,c,l,r,i]}class Qt extends _t{constructor(t){super(),wt(this,t,Xt,Yt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Zt=[],te=[{js:()=>import("./index.4e08356d.js"),css:[]},{js:()=>import("./contact.fb5fa38f.js"),css:[]},{js:()=>import("./about.1d55de1c.js"),css:[]}],ee=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/contact\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]}];const ne="undefined"!=typeof __SAPPER__&&__SAPPER__;let re,se,oe,ae=!1,ce=[],le="{}";const ie={page:function(t){const e=xt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:xt(null),session:xt(ne&&ne.session)};let ue,fe;ie.session.subscribe(async t=>{if(ue=t,!ae)return;fe=!0;const e=be(new URL(location.href)),n=se={},{redirect:r,props:s,branch:o}=await Ee(e);n===se&&await _e(r,o,s,e.page)});let he,pe=null;let de,me=1;const ge="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},ve={};function ye(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function be(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ne.baseUrl))return null;let e=t.pathname.slice(ne.baseUrl.length);if(""===e&&(e="/"),!Zt.some(t=>t.test(e)))for(let n=0;n<ee.length;n+=1){const r=ee[n],s=r.pattern.exec(e);if(s){const n=ye(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function $e(){return{x:pageXOffset,y:pageYOffset}}async function we(t,e,n,r){if(e)de=e;else{const t=$e();ve[de]=t,e=de=++me,ve[de]=n?t:{x:0,y:0}}de=e,re&&ie.preloading.set(!0);const s=pe&&pe.href===t.href?pe.promise:Ee(t);pe=null;const o=se={},{redirect:a,props:c,branch:l}=await s;if(o===se&&(await _e(a,l,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=ve[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}ve[de]=t,t&&scrollTo(t.x,t.y)}}async function _e(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=be(new URL(t,document.baseURI));return n?(ge[e.replaceState?"replaceState":"pushState"]({id:de},"",t),we(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(ie.page.set(r),ie.preloading.set(!1),re)re.$set(n);else{n.stores={page:{subscribe:ie.page.subscribe},preloading:{subscribe:ie.preloading.subscribe},session:ie.session},n.level0={props:await oe},n.notify=ie.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Ae(t.nextSibling);Ae(t),Ae(e)}re=new Qt({target:he,props:n,hydrate:!0})}ce=e,le=JSON.stringify(r.query),ae=!0,fe=!1}async function Ee(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;oe||(oe=ne.preloaded[0]||St.call(a,{host:n.host,path:n.path,query:n.query,params:{}},ue));let l=1;try{const s=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==le)return!0;const s=ce[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,i,s)&&(u=!0),o.segments[l]=r[c+1],!e)return{segment:f};const h=l++;if(!fe&&!u&&ce[c]&&ce[c].part===e.i)return ce[c];u=!1;const{default:p,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(xe);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(te[e.i]);let m;return m=ae||!ne.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ue):{}:ne.preloaded[c+1],o["level"+h]={component:p,props:m,segment:f,match:i,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function xe(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Ae(t){t.parentNode.removeChild(t)}function Se(t){const e=be(new URL(t,document.baseURI));if(e)return pe&&t===pe.href||function(t,e){pe={href:t,promise:e}}(t,Ee(e)),pe.promise}let ke;function Le(t){clearTimeout(ke),ke=setTimeout(()=>{Ce(t)},20)}function Ce(t){const e=Pe(t.target);e&&"prefetch"===e.rel&&Se(e.href)}function Re(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Pe(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=be(s);if(o){we(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),ge.pushState({id:de},"",s.href)}}function Pe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Fe(t){if(ve[de]=$e(),t.state){const e=be(new URL(location.href));e?we(e,t.state.id):location.href=location.href}else me=me+1,function(t){de=t}(me),ge.replaceState({id:de},"",location.href)}var Ie;Ie={target:document.querySelector("#sapper")},"scrollRestoration"in ge&&(ge.scrollRestoration="manual"),addEventListener("beforeunload",()=>{ge.scrollRestoration="auto"}),addEventListener("load",()=>{ge.scrollRestoration="manual"}),function(t){he=t}(Ie.target),addEventListener("click",Re),addEventListener("popstate",Fe),addEventListener("touchstart",Ce),addEventListener("mousemove",Le),Promise.resolve().then(()=>{const{hash:t,href:e}=location;ge.replaceState({id:me},"",e);const n=new URL(location.href);if(ne.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=ne;oe||(oe=o&&o[0]),_e(null,[],{error:c,status:a,session:s,level0:{props:oe},level1:{props:{status:a,error:c},component:Jt},segments:o},{host:e,path:n,query:ye(r),params:{}})}();const r=be(n);return r?we(r,me,!0,t):void 0});export{at as A,T as B,l as C,Ct as D,t as E,F,I as G,A as H,S as I,o as J,ft as K,pt as L,Rt as M,ht as N,_t as S,E as a,P as b,gt as c,b as d,vt as e,y as f,lt as g,bt as h,wt as i,$ as j,_ as k,w as l,yt as m,C as n,L as o,R as p,N as q,k as r,c as s,ct as t,v as u,u as v,W as w,ut as x,x as y,ot as z};
