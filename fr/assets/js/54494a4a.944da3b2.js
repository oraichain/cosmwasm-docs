"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3612],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,u=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6806:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={title:"Contract Composition",sidebar_position:6},l="Contract Composition",c={unversionedId:"architecture/composition",id:"version-0.14/architecture/composition",title:"Contract Composition",description:"Given the Actor model of dispatching messages, and synchronous queries implemented in CosmWasm",source:"@site/docs_versioned_docs/version-0.14/03-architecture/06-composition.md",sourceDirName:"03-architecture",slug:"/architecture/composition",permalink:"/fr/docs/0.14/architecture/composition",editUrl:"https://github.com/InterWasm/docs/edit/main/docs_versioned_docs/version-0.14/03-architecture/06-composition.md",tags:[],version:"0.14",sidebarPosition:6,frontMatter:{title:"Contract Composition",sidebar_position:6},sidebar:"version-0.14/docsSidebar",previous:{title:"Serialization",permalink:"/fr/docs/0.14/architecture/serialization"},next:{title:"Comparison with Solidity Contracts",permalink:"/fr/docs/0.14/architecture/smart-contracts"}},d=[{value:"Terminology",id:"terminology",children:[],level:2},{value:"Messages",id:"messages",children:[],level:2},{value:"Queries",id:"queries",children:[],level:2},{value:"Modules",id:"modules",children:[],level:2},{value:"Customization",id:"customization",children:[],level:2},{value:"Design Considerations",id:"design-considerations",children:[{value:"Portability",id:"portability",children:[],level:3},{value:"Immutability",id:"immutability",children:[],level:3},{value:"Extensibility",id:"extensibility",children:[],level:3}],level:2},{value:"Usability",id:"usability",children:[{value:"Checking for Support",id:"checking-for-support",children:[],level:3},{value:"Type-Safe Wrappers",id:"type-safe-wrappers",children:[],level:3}],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contract-composition"},"Contract Composition"),(0,i.kt)("p",null,"Given the ",(0,i.kt)("a",{parentName:"p",href:"./actor"},"Actor model")," of dispatching messages, and ",(0,i.kt)("a",{parentName:"p",href:"./query"},"synchronous queries")," implemented in CosmWasm\nv0.8, we have all the raw components to enable arbitrary composition of contracts with both other contracts and native\nmodules. Here we will explain how the components fit together and how they can be extended."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note")," The text below applies to CosmWasm 0.8, release May 25, 2020. Please upgrade if you wish to take advantage of\nthe power of composition."),(0,i.kt)("h2",{id:"terminology"},"Terminology"),(0,i.kt)("p",null,'For the remainder of this article, I will make a key distinction between "Contracts" and "Native Modules". "Contracts"\nare CosmWasm code that is dynamically uploaded to the blockchain at a given address. This can be added after the fact\nand is not tied to any runtime implementation.\n"Native Modules" are basically Go Cosmos SDK modules, which are compiled into the blockchain binary. These are\nrelatively static (requiring a soft or hard fork to be added or modified) and will differ between different blockchains\nrunning CosmWasm.'),(0,i.kt)("p",null,'We support composition between both types, but we must look more deeply at the integration with "Native Modules", as\nusing those can cause ',(0,i.kt)("a",{parentName:"p",href:"#portability"},"Portability"),' issues. To minimize this issue, we provide some abstractions around "\nModules"'),(0,i.kt)("h2",{id:"messages"},"Messages"),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"handle")," can return an arbitrary number of\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/08717b4c589bbfe59f44bb8cccffb08f63696413/packages/std/src/init_handle.rs#L11-L31"},(0,i.kt)("inlineCode",{parentName:"a"},"CosmosMsg")),"\nobjects, which will be re-dispatched in the same transaction (thus providing atomic success/rollback with the contract\nexecution). There are 3 classes of messages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Contract")," - This will call a given contract address with a given message (provided in serialized form). It assumes\nthe caller has access to the API format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#modules"},"Module interfaces")," - These are standardized interfaces that can be supported by any chain to expose native\nmodules under a ",(0,i.kt)("em",{parentName:"li"},"portable")," interface."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#customization"},(0,i.kt)("inlineCode",{parentName:"a"},"Custom"))," - This encapsulates a chain-dependent extension to the message types to call into custom\nnative modules. Ideally they should be ",(0,i.kt)("em",{parentName:"li"},"immutable")," on the same chain over time, but they make no portability\nguarantees.")),(0,i.kt)("h2",{id:"queries"},"Queries"),(0,i.kt)("p",null,"As of CosmWasm v0.8, we now allow the contracts to make synchronous ",(0,i.kt)("em",{parentName:"p"},"read-only")," queries to the surrounding runtime. As\nwith ",(0,i.kt)("a",{parentName:"p",href:"#messages"},"Messages"),", we have three fundamental types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Contract")," - This will query a given contract address with a given message (provided in serialized form). It assumes\nthe caller has access to the API format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#modules"},"Module interfaces")," - These are standardized interfaces that can be supported by any chain to expose native\nmodules under a ",(0,i.kt)("em",{parentName:"li"},"portable")," interface."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#customization"},(0,i.kt)("inlineCode",{parentName:"a"},"Custom"))," - This encapsulates a chain-dependent extension to to query custom native modules. Ideally\nthey should be ",(0,i.kt)("em",{parentName:"li"},"immutable")," on the same chain over time, but they make no portability guarantees.")),(0,i.kt)("p",null,"Cross-Contract queries take the address of the contract and a serialized ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryMsg")," in the contract-specific format, and\nsynchronously get a binary serialized return value in the contract-specific format. It is up to the calling contract to\nunderstand the appropriate formats. In order to simplify this, we can provide some contract-specific type-safe wrappers,\nmuch in the way we provide a simple\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/08717b4c589bbfe59f44bb8cccffb08f63696413/packages/std/src/traits.rs#L95-L105"},(0,i.kt)("inlineCode",{parentName:"a"},"query_balance")),"\nmethod as a wrapper around the ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," implementation provided by the Trait."),(0,i.kt)("h2",{id:"modules"},"Modules"),(0,i.kt)("p",null,"In order to enable better integrations with the native blockchain, we are providing a set of standardized module\ninterfaces that should work consistently among all CosmWasm chain. The most basic one is to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Bank")," module, which\nprovides access to the underlying native tokens. This gives us ",(0,i.kt)("inlineCode",{parentName:"p"},"BankMsg::Send")," as well as\n",(0,i.kt)("inlineCode",{parentName:"p"},"BankQuery::Balance")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BankQuery::AllBalances")," to check balances and move tokens."),(0,i.kt)("p",null,"The second standardized module is ",(0,i.kt)("inlineCode",{parentName:"p"},"staking"),", which provides some standardized messages for ",(0,i.kt)("inlineCode",{parentName:"p"},"Delegate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Undelegate"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"Redelegate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Withdraw"),", as well as querying ",(0,i.kt)("inlineCode",{parentName:"p"},"Validators")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Delegations"),". These interfaces are designed to\nsupport most PoS systems and able to be supported on any PoS system, not just with the current staking module of the\nCosmos SDK.\n(So, if you fork that for your chain, the contracts should still work)."),(0,i.kt)("p",null,"This provides a clean design, where one can develop a contract that eg. issues staking derivatives using the ",(0,i.kt)("inlineCode",{parentName:"p"},"staking"),"\nmodule interface, and have confidence that that same contract will run on two different blockchains, even if they are\nboth heavily customized and one is on Cosmos SDK 0.38 and the other on Cosmos SDK 0.39 (with many breaking changes). The\ndownside here is that every module interface must be added to all layers of the stack, which provides some delay to\nsupporting custom features, and we cannot easily add support for every custom module in every Cosmos SDK-based\nblockchain."),(0,i.kt)("p",null,"That said, we highly recommend using the module interface when possible, and using ",(0,i.kt)("a",{parentName:"p",href:"#customization"},"custom types")," as a\ntemporary measure to keep a fast release cycle. We are happy to work with projects with concrete use cases that can be\nre-used between many different chains to add new standardized module interfaces. Perhaps for governance, or for\nIBC/light client related features."),(0,i.kt)("p",null,"Note, that theoretically these module interfaces can also be implemented by contracts, not just native code. Eg. if we\nmade a standard ",(0,i.kt)("inlineCode",{parentName:"p"},"swap")," interface, and your blockchain has no native ",(0,i.kt)("inlineCode",{parentName:"p"},"swap")," module, we could upload a UniSwap-inspired\ncontract and register that somehow with the Go blockchain. Then the blockchain would know to take the swap message and\ndispatch it to this custom contract.\n(Note that this is not implemented at all, just an idea of future directions)."),(0,i.kt)("h2",{id:"customization"},"Customization"),(0,i.kt)("p",null,"Many chains will want to allow contracts to execute with their custom go modules, without going through all the work to\ntry to turn it into a standardized ",(0,i.kt)("a",{parentName:"p",href:"#modules"},"Module Interface")," and wait for a new CosmWasm release. For this case, we\nintroduce the ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom")," variant on both ",(0,i.kt)("inlineCode",{parentName:"p"},"CosmosMsg")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryRequest"),". The idea here is that the contract can define the\ntype to be include in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom")," variants, and it just needs to be agreed upon by the Cosmos SDK app\n(in Golang) on the other side. All the code between the contract and the blockchain codec treats it as opaque json\nbytes."),(0,i.kt)("p",null,'The demo "reflect" contract in the standard CosmWasm repo,\n',(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/71f643f577184a23b2f1f122531c944f0de94c34/contracts/reflect/src/msg.rs#L30-L64"},"shows how to use ",(0,i.kt)("inlineCode",{parentName:"a"},"CustomMsg")," and ",(0,i.kt)("inlineCode",{parentName:"a"},"CustomQuery")),"\n. You can see how the\ncontract ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/master/contracts/reflect/src/contract.rs#L94-L101"},"uses a ",(0,i.kt)("inlineCode",{parentName:"a"},"CustomQuery")),'\nto call out to some "runtime-provided" code. For unit tests, we\ncan ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/master/contracts/reflect/src/testing.rs#L20-L37"},"mock out the runtime querier"),"\n, but in a deployed system, this should be provided by native Go code in your Cosmos SDK application."),(0,i.kt)("p",null,"Beyond trivial cases, we are working with Terra to expose their ",(0,i.kt)("inlineCode",{parentName:"p"},"swap"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"oracle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"treasury")," modules to CosmWasm\ncontracts on their chains. These features need to be exposed in an immutable format that will work forever on their\nchain, but there is no need for portability. More interesting is the ability to quickly expose new features of their\nnative modules to contracts on their chain. In fact, this concrete use case inspired all the refactoring to make sure\ncustom messages and queries possible."),(0,i.kt)("h2",{id:"design-considerations"},"Design Considerations"),(0,i.kt)("p",null,"In producing a solid design, we want the API to fulfill all these requirements (or strike a good balance if truly\nimpossible to achieve them all):"),(0,i.kt)("h3",{id:"portability"},"Portability"),(0,i.kt)("p",null,"The same contract should run on two distinct blockchains, with differing Golang modules, different versions of the\nCosmos SDK, or ideally, even based on different frameworks (eg. running on Substrate). This should be possible when\navoiding ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom")," messages, and checking the optional features one uses. The features are currently ",(0,i.kt)("inlineCode",{parentName:"p"},"staking"),", which\nassumes a PoS system, and ",(0,i.kt)("inlineCode",{parentName:"p"},"iterator"),", which assumes we can do prefix scans over the storage (ie. it is a Merkle ",(0,i.kt)("strong",{parentName:"p"},"Tree"),"\n, not a Merkle ",(0,i.kt)("strong",{parentName:"p"},"Trie"),")."),(0,i.kt)("h3",{id:"immutability"},"Immutability"),(0,i.kt)("p",null,"Contracts are immutable and encode the query and message formats in their bytecode. If we allowed dispatching ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.Msg"),"\nin the native format\n(be it json, amino or protobuf), and the format of native messages change, then the contracts would break. This may mean\nthat a staking module could never undelegate the tokens. If you think this is a theoretical issue, please note that\nevery major update of the Cosmos SDK has produced such breaking changes and has migrations for them. Migrations that\ncannot be performed on immutable contracts. Thus, we need to ensure that our design provides an immutable API to a\npotentially mutable runtime, which is a primary design criteria when designing the\nstandard ",(0,i.kt)("a",{parentName:"p",href:"#modules"},"module interfaces"),"."),(0,i.kt)("h3",{id:"extensibility"},"Extensibility"),(0,i.kt)("p",null,"We should be able to add new interfaces to a contract and blockchain without needing to update any of the intermediate\nlayers. That is, if you are building a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"superd")," blockchain app, which imports ",(0,i.kt)("inlineCode",{parentName:"p"},"x/wasm")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd"),", and want to\ndevelop contracts on it that call into your custom ",(0,i.kt)("inlineCode",{parentName:"p"},"superd")," modules, then in an ideal world, you could add those message\ntypes to an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"cw-superd")," library that you can import in your contracts and add the callbacks to them\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"superd")," Go code. ",(0,i.kt)("em",{parentName:"p"},"Without any changes")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmwasm-std"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmwasm-vm"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"go-cosmwasm"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," repositories (which have a different release cycle than your app)."),(0,i.kt)("p",null,"We provide the ",(0,i.kt)("a",{parentName:"p",href:"#customization"},(0,i.kt)("inlineCode",{parentName:"a"},"Custom"))," variants to ",(0,i.kt)("inlineCode",{parentName:"p"},"CosmosMsg")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryRequest")," to enable such cases. They can\nprovide immutability but not portability."),(0,i.kt)("h2",{id:"usability"},"Usability"),(0,i.kt)("p",null,"We also want to make it not just secure and ",(0,i.kt)("em",{parentName:"p"},"possible")," to compose contracts into a larger whole, but make it simple from\nthe developer's perspective. This applies to both the contract authors, as well as the blockchain developers integrating\nCosmWasm into their custom blockchain. And we want to make it easy to build client side applications using the\ncontracts."),(0,i.kt)("p",null,"We are using JSON encoding for the CosmWasm messages to make this simple and\nexport ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-examples/tree/master/erc20/schema"},"JSON schemas")," for every contract to\nallow auto-generation of client-side codecs. We also provide ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmjs"},"CosmJS"),"\nas a easy-to-use TypeScript client library allowing access to all contracts (and bank module) on a CosmWasm-based chain."),(0,i.kt)("h3",{id:"checking-for-support"},"Checking for Support"),(0,i.kt)("p",null,"If we want to call some extensions, say to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Staking")," modules, we can compile our contract to handle that. But how do\nwe detect if the blockchain can support it? We want to fail on upload or instantiation of a contract, and not discover\nsome key functionality doesn't work on this chain, when there is value stored in the contract."),(0,i.kt)("p",null,'The design decision was to you use feature flags, exposed as wasm export functions, to configure which extra features\nare required by the contract. This lets the host chain inspect compatibility before allowing an upload. To do so, we\nmake some "ghost" exports like\n',(0,i.kt)("inlineCode",{parentName:"p"},"requires_staking()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"requires_terra()"),". This would only pass compatibility check if the runtime also exposed such\nfeatures. When instantiating ",(0,i.kt)("inlineCode",{parentName:"p"},"x/wasm.NewKeeper()")," you can specify which features are supported."),(0,i.kt)("h3",{id:"type-safe-wrappers"},"Type-Safe Wrappers"),(0,i.kt)("p",null,'When querying or calling into other contracts, we give up all the type-checks we get with native module interfaces. They\nrequire the caller to know the details of the caller. This is the same as Ethereum. However, we can provide some "\ninterface"\nwrappers that a contract could export, such that other contracts can easily call into it.'),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct NameService(CanonicalAddr);\n\nimpl NameService {\n  pub fn query_name(deps: &Extern, name: &str) -> CanonicalAddr { /* .. */ }\n  pub fn register(api: &Api, name: &str) -> CosmosMsg { /* .. */ }\n}\n")),(0,i.kt)("p",null,"Rather than storing just the ",(0,i.kt)("inlineCode",{parentName:"p"},"CanonicalAddr")," of the other contract in our configuration, we could store ",(0,i.kt)("inlineCode",{parentName:"p"},"NameService"),",\nwhich is a zero-cost ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/stable/rust-by-example/generics/new_types.html"},'"newtype"'),"\nover the original address, with the same serialization format. However, it would provide us some type-safe helpers to\nmake queries against the contract, as well as produce ",(0,i.kt)("inlineCode",{parentName:"p"},"CosmosMsg")," for registration."),(0,i.kt)("p",null,"Note that these type-safe wrappers are not tied to an ",(0,i.kt)("em",{parentName:"p"},"implementation")," of a contract, but rather the contract's ",(0,i.kt)("em",{parentName:"p"},"\ninterface"),'. Thus, we could create a small library with a list of standard/popular interfaces (like the ERCxxx specs)\nrepresented with such\n"newtypes". A contract creator could import one of these wrappers and then easily call the contract, regardless of\nimplementation, as long as it supported the proper interface'))}m.isMDXComponent=!0}}]);