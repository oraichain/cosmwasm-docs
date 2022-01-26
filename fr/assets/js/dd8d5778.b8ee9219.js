"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3306],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7771:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="CW4 Spec: Group Members",c={unversionedId:"cw4/spec",id:"cw4/spec",title:"CW4 Spec: Group Members",description:"cw4 package source",source:"@site/cw-plus/cw4/spec.md",sourceDirName:"cw4",slug:"/cw4/spec",permalink:"/fr/cw-plus/0.9.0/cw4/spec",editUrl:"https://github.com/InterWasm/docs/edit/main/cw-plus/cw4/spec.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"cwPlus",previous:{title:"CW3 Flexible Multisig",permalink:"/fr/cw-plus/0.9.0/cw3/cw3-flex-spec"},next:{title:"CW4 Group",permalink:"/fr/cw-plus/0.9.0/cw4/cw4-group-spec"}},p=[{value:"Messages",id:"messages",children:[],level:2},{value:"Queries",id:"queries",children:[{value:"Smart",id:"smart",children:[],level:3},{value:"Raw",id:"raw",children:[],level:3}],level:2},{value:"Hooks",id:"hooks",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cw4-spec-group-members"},"CW4 Spec: Group Members"),(0,o.kt)("p",null,"cw4 package source\ncode: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/master/packages/cw4/README.md"},"https://github.com/CosmWasm/cw-plus/blob/master/packages/cw4/README.md")),(0,o.kt)("p",null,"cw4 is a spec for storing group membership, which can be combined with cw3 multisigs. The purpose is to store a set of\nmembers/voters that can be accessed to determine permissions in another section."),(0,o.kt)("p",null,"Since this is often deployed as a contract pair, we expect this contract to often be queried with ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRaw")," and the\ninternal layout of some of the data structures becomes part of the public API. Implementations may add more data\nstructures, but at least the ones laid out here should be under the specified keys and in the same format."),(0,o.kt)("p",null,"In this case, a cw3 contract could ",(0,o.kt)("em",{parentName:"p"},"read")," an external group contract with no significant cost more than reading local\nstorage. However, updating that group contract (if allowed), would be an external message and charged the instantiation\noverhead for each contract."),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("p",null,"We define an ",(0,o.kt)("inlineCode",{parentName:"p"},"InitMsg{admin, members}")," to make it easy to set up a group as part of another flow. Implementations should\nwork with this setup, but may add extra ",(0,o.kt)("inlineCode",{parentName:"p"},"Option<T>")," fields for non-essential extensions to configure in the ",(0,o.kt)("inlineCode",{parentName:"p"},"init"),"\nphase."),(0,o.kt)("p",null,"There are three messages supported by a group contract:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UpdateAdmin{admin}")," - changes (or clears) the admin for the contract"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AddHook{addr}")," - adds a contract address to be called upon every\n",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateMembers")," call. This can only be called by the admin, and care must be taken. A contract returning an error or\nrunning out of gas will revert the membership change (see more in Hooks section below)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RemoveHook{addr}")," - unregister a contract address that was previously set by ",(0,o.kt)("inlineCode",{parentName:"p"},"AddHook"),"."),(0,o.kt)("p",null,"Only the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," may execute any of these function. Thus, by omitting an\n",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),", we end up with a similar functionality ad ",(0,o.kt)("inlineCode",{parentName:"p"},"cw3-fixed-multisig"),". If we include one, it may often be desired to\nbe a ",(0,o.kt)("inlineCode",{parentName:"p"},"cw3")," contract that uses this group contract as a group. This leads to a bit of chicken-and-egg problem, but we\ncover how to instantiate that in\n",(0,o.kt)("a",{parentName:"p",href:"/fr/cw-plus/0.9.0/cw3/cw3-flex-spec"},(0,o.kt)("inlineCode",{parentName:"a"},"cw3-flexible-multisig"))),(0,o.kt)("h2",{id:"queries"},"Queries"),(0,o.kt)("h3",{id:"smart"},"Smart"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TotalWeight{}"),' - Returns the total weight of all current members, this is very useful if some conditions are defined on\na "percentage of members".'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Member{addr, height}")," - Returns the weight of this voter if they are a member of the group (may be 0), or ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," if\nthey are not a member of the group. If height is set and the cw4 implementation supports snapshots, this will return the\nweight of that member at the beginning of the block with the given height."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MemberList{start_after, limit}")," - Allows us to paginate over the list of all members. 0-weight members will be\nincluded. Removed members will not."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Admin{}")," - Returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," address, or ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," if unset."),(0,o.kt)("h3",{id:"raw"},"Raw"),(0,o.kt)("p",null,'In addition to the above "SmartQueries", which make up the public API, we define two raw queries that are designed for\nmore efficiency in contract-contract calls. These use keys exported by ',(0,o.kt)("inlineCode",{parentName:"p"},"cw4")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TOTAL_KEY")," - making a raw query with this key (",(0,o.kt)("inlineCode",{parentName:"p"},'b"total"'),") will return a JSON-encoded ",(0,o.kt)("inlineCode",{parentName:"p"},"u64")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"members_key()")," - takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"CanonicalAddr")," and returns a key that can be used for raw query (",(0,o.kt)("inlineCode",{parentName:"p"},'"\\x00\\x07members" || addr'),")\n. This will return empty bytes if the member is not inside the group, otherwise a JSON-encoded ",(0,o.kt)("inlineCode",{parentName:"p"},"u64")),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,"One special feature of the ",(0,o.kt)("inlineCode",{parentName:"p"},"cw4")," contracts is they allow the admin to register multiple hooks. These are special\ncontracts that need to react to changes in the group membership, and this allows them stay in sync. Again, note this is\na powerful ability and you should only set hooks to contracts you fully trust, generally some contracts you deployed\nalongside the group."),(0,o.kt)("p",null,"If a contract is registered as a hook on a cw4 contract, then anytime\n",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateMembers")," is successfully executed, the hook will receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"handle"),"\ncall with the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "member_changed_hook": {\n    "diffs": [\n      {\n        "addr": "cosmos1y3x7q772u8s25c5zve949fhanrhvmtnu484l8z",\n        "old_weight": 20,\n        "new_weight": 24\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/master/packages/cw4/src/hook.rs"},"hook.rs")," for full details. Note\nthat this example shows an update or an existing member. ",(0,o.kt)("inlineCode",{parentName:"p"},"old_weight")," will be missing if the address was added for the\nfirst time. And\n",(0,o.kt)("inlineCode",{parentName:"p"},"new_weight")," will be missing if the address was removed."),(0,o.kt)("p",null,"The receiving contract must be able to handle the ",(0,o.kt)("inlineCode",{parentName:"p"},"MemberChangedHookMsg"),"\nand should only return an error if it wants to change the functionality of the group contract (eg. a multisig that wants\nto prevent membership changes while there is an open proposal). However, such cases are quite rare and often point to\nfragile code."),(0,o.kt)("p",null,"Note that the message sender will be the group contract that was updated. Make sure you check this when handling, so\nexternal actors cannot call this hook, only the trusted group."))}d.isMDXComponent=!0}}]);