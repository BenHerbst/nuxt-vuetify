import{C as E,I as L,R as k,T as q}from"./index.7f4fb2b4.js";import"./entry.8128dbbe.js";function $(t,e){const o=e.modifiers||{},n=e.value,{once:u,immediate:r,...s}=o,i=!Object.keys(s).length,{handler:a,options:f}=typeof n=="object"?n:{handler:n,options:{attributes:(s==null?void 0:s.attr)??i,characterData:(s==null?void 0:s.char)??i,childList:(s==null?void 0:s.child)??i,subtree:(s==null?void 0:s.sub)??i}},c=new MutationObserver(function(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],_=arguments.length>1?arguments[1]:void 0;a==null||a(v,_),u&&l(t,e)});r&&(a==null||a([],c)),t._mutate=Object(t._mutate),t._mutate[e.instance.$.uid]={observer:c},c.observe(t,f)}function l(t,e){var o;(o=t._mutate)!=null&&o[e.instance.$.uid]&&(t._mutate[e.instance.$.uid].observer.disconnect(),delete t._mutate[e.instance.$.uid])}const S={mounted:$,unmounted:l};function p(t,e){var o,n;const u=e.value,r={passive:!((o=e.modifiers)!=null&&o.active)};window.addEventListener("resize",u,r),t._onResize=Object(t._onResize),t._onResize[e.instance.$.uid]={handler:u,options:r},(n=e.modifiers)!=null&&n.quiet||u()}function h(t,e){var o;if(!((o=t._onResize)!=null&&o[e.instance.$.uid]))return;const{handler:n,options:u}=t._onResize[e.instance.$.uid];window.removeEventListener("resize",n,u),delete t._onResize[e.instance.$.uid]}const w={mounted:p,unmounted:h};function d(t,e){const{self:o=!1}=e.modifiers??{},n=e.value,u=typeof n=="object"&&n.options||{passive:!0},r=typeof n=="function"||"handleEvent"in n?n:n.handler,s=o?t:e.arg?document.querySelector(e.arg):window;s&&(s.addEventListener("scroll",r,u),t._onScroll=Object(t._onScroll),t._onScroll[e.instance.$.uid]={handler:r,options:u,target:o?void 0:s})}function m(t,e){var o;if(!((o=t._onScroll)!=null&&o[e.instance.$.uid]))return;const{handler:n,options:u,target:r=t}=t._onScroll[e.instance.$.uid];r.removeEventListener("scroll",n,u),delete t._onScroll[e.instance.$.uid]}function z(t,e){e.value!==e.oldValue&&(m(t,e),d(t,e))}const j={mounted:d,unmounted:m,updated:z};export{E as ClickOutside,L as Intersect,S as Mutate,w as Resize,k as Ripple,j as Scroll,q as Touch};
