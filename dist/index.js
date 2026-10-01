"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var d=c(function(f,s){
var g=require('@stdlib/ndarray-base-numel-dimension/dist'),u=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),n=require('@stdlib/ndarray-base-data-buffer/dist'),l=require('@stdlib/blas-ext-base-gwaxpb/dist').ndarray,q=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function o(e){var r,t,a,i;return a=e[0],i=e[1],r=q(e[2]),t=q(e[3]),l(g(a,0),r,t,n(a),u(a,0),v(a),n(i),u(i,0),v(i)),i}s.exports=o
});var p=d();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
