"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2218],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),w=l(n),d=c,f=w["".concat(s,".").concat(d)]||w[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=w;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}w.displayName="MDXCreateElement"},7638:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return w}});var r=n(7462),c=n(3366),o=(n(7294),n(3905)),a=["components"],i={title:"cw20-escrow Spec",sidebar_position:5},s="CW20 Escrow",l={unversionedId:"cw20/cw20-escrow-spec",id:"cw20/cw20-escrow-spec",title:"cw20-escrow Spec",description:"cw20-escrow source",source:"@site/cw-plus/cw20/cw20-escrow-spec.md",sourceDirName:"cw20",slug:"/cw20/cw20-escrow-spec",permalink:"/fr/cw-plus/0.9.0/cw20/cw20-escrow-spec",editUrl:"https://github.com/InterWasm/docs/edit/main/cw-plus/cw20/cw20-escrow-spec.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"cw20-escrow Spec",sidebar_position:5},sidebar:"cwPlus",previous:{title:"cw20-bonding Spec",permalink:"/fr/cw-plus/0.9.0/cw20/cw20-bonding-spec"},next:{title:"cw20-staking Spec",permalink:"/fr/cw-plus/0.9.0/cw20/cw20-staking-spec"}},p=[{value:"Token types",id:"token-types",children:[],level:2}],u={toc:p};function w(e){var t=e.components,n=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cw20-escrow"},"CW20 Escrow"),(0,o.kt)("p",null,"cw20-escrow source\ncode: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/tree/master/contracts/cw20-escrow"},"https://github.com/CosmWasm/cw-plus/tree/master/contracts/cw20-escrow")),(0,o.kt)("p",null,"This is an escrow meta-contract that allows multiple users to create independent escrows. Each escrow has a sender,\nrecipient, and arbiter. It also has a unique id (for future calls to reference it)\nand an optional timeout."),(0,o.kt)("p",null,"The basic function is the sender creates an escrow with funds. The arbiter may at any time decide to release the funds\nto either the intended recipient or the original sender (but no one else), and if it passes with optional timeout,\nanyone can refund the locked tokens to the original sender."),(0,o.kt)("p",null,'We also add a function called "top_up", which allows anyone to add more funds to the contract at any time.'),(0,o.kt)("h2",{id:"token-types"},"Token types"),(0,o.kt)("p",null,'This contract is meant not just to be functional, but also to work as a simple example of an cw20 "Receiver". And\ndemonstrate how the same calls can be fed native tokens (via typical ',(0,o.kt)("inlineCode",{parentName:"p"},"HandleMsg")," route), or cw20 tokens (via ",(0,o.kt)("inlineCode",{parentName:"p"},"Receiver"),"\ninterface)."),(0,o.kt)("p",null,"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"top_up")," can be called directly (with a payload of native tokens), or from a cw20 contract using\nthe ",(0,o.kt)("a",{parentName:"p",href:"/fr/cw-plus/0.9.0/cw20/spec#receiver"},"Receiver Interface"),". This means we can load the escrow with any number of native or cw20 tokens (\nor a mix), allow of which get released when the arbiter decides."))}w.isMDXComponent=!0}}]);