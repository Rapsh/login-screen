import{t as p}from"./index.71d54abb.js";import{t as v,c as l}from"./iframe.1c2bb03f.js";import{l as _,r as m}from"./index.be63cc3e.js";import"./index.2e610c8f.js";var u={},n={};Object.defineProperty(n,"__esModule",{value:!0});n.mswDecorator=n.getWorker=n.initializeWorker=n.initialize=void 0;var w=_.exports,b=!(0,w.isNodeProcess)(),t;function f(a){var c;if(b){var i=m().setupWorker,r=i();r.start(a),t=r}else{var o=typeof process<"u"&&((c=process.versions)===null||c===void 0?void 0:c.node),e=o?typeof __webpack_require__=="function"?__non_webpack_require__:v:void 0,s=e("msw/node").setupServer,d=s();d.listen(a),t=d}return t}n.initialize=f;function g(a){return console.warn('[MSW] "initializeWorker" is now deprecated, please use "initialize" instead. This method will be removed in future releases.'),f(a)}n.initializeWorker=g;function y(){if(t===void 0)throw new Error('[MSW] Failed to retrieve the worker: no active worker found. Did you forget to call "initialize"?');return t}n.getWorker=y;var h=function(a,c){var i=c.parameters.msw;if(t&&(t.resetHandlers(),i)){if(Array.isArray(i)&&i.length>0)t.use.apply(t,i);else if("handlers"in i&&i.handlers){var r=Object.values(i.handlers).filter(Boolean).reduce(function(o,e){return o.concat(e)},[]);r.length>0&&t.use.apply(t,r)}}return a()};n.mswDecorator=h;(function(a){var c=l&&l.__createBinding||(Object.create?function(r,o,e,s){s===void 0&&(s=e),Object.defineProperty(r,s,{enumerable:!0,get:function(){return o[e]}})}:function(r,o,e,s){s===void 0&&(s=e),r[s]=o[e]}),i=l&&l.__exportStar||function(r,o){for(var e in r)e!=="default"&&!Object.prototype.hasOwnProperty.call(o,e)&&c(o,r,e)};Object.defineProperty(a,"__esModule",{value:!0}),i(n,a)})(u);u.initialize();const k=[u.mswDecorator],D={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{theme:p.dark}};export{k as decorators,D as parameters};
//# sourceMappingURL=preview.621ad8b5.js.map
