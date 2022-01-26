"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[930],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3922:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:3},s="Cosmic dApp design",p={unversionedId:"frontend-dapp/cosmicdapp-design",id:"frontend-dapp/cosmicdapp-design",title:"Cosmic dApp design",description:"The @cosmicdapp/design package provides two kinds of",source:"@site/tutorials/frontend-dapp/cosmicdapp-design.md",sourceDirName:"frontend-dapp",slug:"/frontend-dapp/cosmicdapp-design",permalink:"/tutorials/frontend-dapp/cosmicdapp-design",editUrl:"https://github.com/InterWasm/docs/edit/main/tutorials/frontend-dapp/cosmicdapp-design.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorials",previous:{title:"Cosmic dApp logic",permalink:"/tutorials/frontend-dapp/cosmicdapp-logic"},next:{title:"Bootstrap dApp",permalink:"/tutorials/frontend-dapp/bootstrap-dapp"}},c=[{value:"Theme",id:"theme",children:[],level:2},{value:"Components",id:"components",children:[{value:"Layout primitives",id:"layout-primitives",children:[{value:"Stack",id:"stack",children:[],level:4},{value:"PageLayout",id:"pagelayout",children:[],level:4}],level:3},{value:"Components with logic",id:"components-with-logic",children:[{value:"Login",id:"login",children:[],level:4},{value:"YourAccount",id:"youraccount",children:[],level:4}],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cosmic-dapp-design"},"Cosmic dApp design"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/dApps/tree/master/packages/design"},(0,i.kt)("inlineCode",{parentName:"a"},"@cosmicdapp/design"))," package provides two kinds of\nresources: theme and components. The theme provides global styles for visual consistency across the dApps, whereas the\ncomponents will give us layout primitives and reusable React components with internal logic."),(0,i.kt)("p",null,"The example balance checker dApp will make use of some resources from this package, so let's take a look at them."),(0,i.kt)("h2",{id:"theme"},"Theme"),(0,i.kt)("p",null,"We'll use the exported ",(0,i.kt)("inlineCode",{parentName:"p"},"GlobalStyle")," in order to have visual consistency with the rest of the dApps. This React\ncomponent includes a CSS reset; spacing, colors, and fonts CSS Custom Properties; and an override for some Ant Design\nclasses. This is seen at first glance if you look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"GlobalStyle")," code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"export function GlobalStyle(): JSX.Element {\n  return (\n    <>\n      <GlobalReset/>\n      <GlobalSpacing/>\n      <GlobalColors/>\n      <GlobalFonts/>\n      <GlobalAntOverride/>\n    </>\n  );\n}\n")),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("h3",{id:"layout-primitives"},"Layout primitives"),(0,i.kt)("p",null,"This resource offers some primitives based on the ",(0,i.kt)("a",{parentName:"p",href:"https://every-layout.dev"},"Every Layout")," book."),(0,i.kt)("h4",{id:"stack"},"Stack"),(0,i.kt)("p",null,"This React component displays its children as a stack with a configurable gap between them."),(0,i.kt)("h4",{id:"pagelayout"},"PageLayout"),(0,i.kt)("p",null,"This React component is used as the wrapper for every view. It establishes a max width of page and centers the stacked\nchildren inside."),(0,i.kt)("h3",{id:"components-with-logic"},"Components with logic"),(0,i.kt)("h4",{id:"login"},"Login"),(0,i.kt)("p",null,"The first view of the balance checker application. It offers three options for logging in: localStorage burner wallet,\nledger wallet, or Keplr wallet."),(0,i.kt)("h4",{id:"youraccount"},"YourAccount"),(0,i.kt)("p",null,"A useful component that lets the user copy their own address to clipboard, and optionally show their current native\nbalance."))}u.isMDXComponent=!0}}]);