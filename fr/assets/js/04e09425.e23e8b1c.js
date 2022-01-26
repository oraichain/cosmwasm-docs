"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7465],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3391:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},c="Introduction",s={unversionedId:"frontend-dapp/intro",id:"frontend-dapp/intro",title:"Introduction",description:"In this tutorial you will learn how to build a CosmJS based dApp. The example dApp",source:"@site/tutorials/frontend-dapp/intro.md",sourceDirName:"frontend-dapp",slug:"/frontend-dapp/intro",permalink:"/fr/tutorials/frontend-dapp/intro",editUrl:"https://github.com/InterWasm/docs/edit/main/tutorials/frontend-dapp/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorials",previous:{title:"Advanced State Modeling",permalink:"/fr/tutorials/storage/state-modeling"},next:{title:"Cosmic dApp logic",permalink:"/fr/tutorials/frontend-dapp/cosmicdapp-logic"}},p=[{value:"Views",id:"views",children:[{value:"Login",id:"login",children:[],level:3},{value:"Native balance",id:"native-balance",children:[],level:3},{value:"Balance of a CW20 contract",id:"balance-of-a-cw20-contract",children:[],level:3},{value:"Error for address with no contract",id:"error-for-address-with-no-contract",children:[],level:3}],level:2},{value:"Setup environment",id:"setup-environment",children:[],level:2}],u={toc:p};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this tutorial you will learn how to build a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmjs"},"CosmJS")," based dApp. The example dApp\nwill be a balance checker that will allow you to see your native tokens and the CW20 tokens of the contract with the\naddress you enter."),(0,a.kt)("h2",{id:"views"},"Views"),(0,a.kt)("p",null,"It will look like this:"),(0,a.kt)("h3",{id:"login"},"Login"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(3535).Z})),(0,a.kt)("h3",{id:"native-balance"},"Native balance"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(4319).Z})),(0,a.kt)("h3",{id:"balance-of-a-cw20-contract"},"Balance of a CW20 contract"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(8435).Z})),(0,a.kt)("h3",{id:"error-for-address-with-no-contract"},"Error for address with no contract"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(8041).Z})),(0,a.kt)("h2",{id:"setup-environment"},"Setup environment"),(0,a.kt)("p",null,"We recommend to use ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code")," but this tutorial should be easily followed with\nany other text editor."),(0,a.kt)("p",null,"You should download the latest release of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/dApps"},(0,a.kt)("inlineCode",{parentName:"a"},"CosmWasm/dApps"))," monorepo using your\npreferred method."))}d.isMDXComponent=!0},8435:function(e,t,n){t.Z=n.p+"assets/images/balance-cw20-72a7a41bcd6a92e7f9dc28b2b0fe4863.png"},8041:function(e,t,n){t.Z=n.p+"assets/images/balance-error-2b5e1d9e86cfac6405a24d7ab68d3709.png"},4319:function(e,t,n){t.Z=n.p+"assets/images/balance-native-cd51ddbca284098ae81b2365ac4083c5.png"},3535:function(e,t,n){t.Z=n.p+"assets/images/login-7e2c08327a417c05bcf775b0e77490da.png"}}]);