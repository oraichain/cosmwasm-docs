"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[458],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||s;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7580:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),o=n(3366),s=(n(7294),n(3905)),r=["components"],i={sidebar_position:2},l="Basics of Smart Contract Interactions",c={unversionedId:"smart-contract-interaction/interact",id:"smart-contract-interaction/interact",title:"Basics of Smart Contract Interactions",description:"As mentioned before, smart contracts are executable codes.",source:"@site/dev-academy/smart-contract-interaction/02-interact.md",sourceDirName:"smart-contract-interaction",slug:"/smart-contract-interaction/interact",permalink:"/dev-academy/smart-contract-interaction/interact",editUrl:"https://github.com/InterWasm/docs/edit/main/dev-academy/smart-contract-interaction/02-interact.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devAcademy",previous:{title:"What are Smart Contracts?",permalink:"/dev-academy/smart-contract-interaction/what-is-smart-contracts"},next:{title:"Challenge",permalink:"/dev-academy/smart-contract-interaction/challenge"}},d=[{value:"Where to find smart contracts?",id:"where-to-find-smart-contracts",children:[],level:2},{value:"Download",id:"download",children:[],level:2},{value:"wasmd",id:"wasmd",children:[{value:"Store",id:"store",children:[],level:3},{value:"Instantiate",id:"instantiate",children:[],level:3}],level:2},{value:"CosmJS",id:"cosmjs",children:[{value:"Setup Client",id:"setup-client",children:[],level:3},{value:"Reloading your Wallet",id:"reloading-your-wallet",children:[],level:3},{value:"Example: STAR",id:"example-star",children:[],level:3},{value:"Spin New Contract",id:"spin-new-contract",children:[],level:3},{value:"Using Contract",id:"using-contract",children:[],level:3}],level:2}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"basics-of-smart-contract-interactions"},"Basics of Smart Contract Interactions"),(0,s.kt)("p",null,"As mentioned before, smart contracts are executable codes.\nIn the next lessons, we will learn how to write one. Until then, it's best to use what's already written to keep things simple.\nWe will dive into two options for deploying and interacting with contracts: ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmd")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmJS")),(0,s.kt)("h2",{id:"where-to-find-smart-contracts"},"Where to find smart contracts?"),(0,s.kt)("p",null,"Normally, we compile smart contracts using rust compilers then code optimizers.\nNow we will just download a precompiled one by cosmwasm team."),(0,s.kt)("h2",{id:"download"},"Download"),(0,s.kt)("p",null,"We provide smart contract binary executable\nat ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/"},"cw-plus")," repo alongside the code.\ncw-plus repository is a collection of production-grade smart contracts that has been heavily tested on real mainnets.\nYou will see a list of available contracts on the repository page.\nGo click ",(0,s.kt)("strong",{parentName:"p"},"Releases")," button to see tagged binary executables. You can download binaries and deploy to\ncompatible blockchains."),(0,s.kt)("p",null,"We will use cw20 prebuilt binary for this course: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/releases/download/v0.8.0/cw20_base.wasm"},"cw20-base")),(0,s.kt)("p",null,"Please don't pay attention to cw20-base details for now, just focus on getting a contract on a testnet."),(0,s.kt)("h2",{id:"wasmd"},"wasmd"),(0,s.kt)("h3",{id:"store"},"Store"),(0,s.kt)("p",null,"We will deploy the code using ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmd")," CLI we installed earlier."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"curl -LJO https://github.com/CosmWasm/cw-plus/releases/download/v0.8.0/cw20_base.wasm\nRES=$(wasmd tx wasm store cw20_base.wasm --from wallet $TXFLAG -y)\n\n# get code id\nCODE_ID=$(echo $RES | jq -r '.logs[0].events[1].attributes[0].value')\n\n# print code id\necho $CODE_ID\n\n# no contracts yet, this should return an empty list\nwasmd query wasm list-contract-by-code $CODE_ID $NODE --output json\n\n")),(0,s.kt)("p",null,"Now the code stored on the network. ",(0,s.kt)("inlineCode",{parentName:"p"},"CODE_ID")," is the identifier of the code."),(0,s.kt)("h3",{id:"instantiate"},"Instantiate"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Smart contract code != usable smart contract instance")),(0,s.kt)("p",null,"Smart contract code is just a blueprint of a smart contract. We ",(0,s.kt)("em",{parentName:"p"},"instantiate")," a smart contract based on smart\ncontract code."),(0,s.kt)("p",null,"Here is the instantiation message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Golden Stars",\n  "symbol": "STAR",\n  "decimals": "2",\n  "initial_balances": [\n    {"address": "wasm1ez03me7uljk7qerswdp935vlaa4dlu48mys3mq", "amount": "10000"},\n    {"address": "wasm1tx7ga0lsnumd5hfsh2py0404sztnshwqaqjwy8", "amount": "10000"},\n    {"address": "wasm1mvjtezrn8dpateu0435trlw5062qy76gf738n0", "amount": "10000"}\n  ],\n  "mint": {\n    "minter": "wasm1mvjtezrn8dpateu0435trlw5062qy76gf738n0"\n  }\n}\n')),(0,s.kt)("p",null,"This message contains initial state of the contract."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'INIT=$(jq -n --arg wallet $(wasmd keys show -a wallet) \'{"name":"Golden Stars","symbol":"STAR","decimals":2,"initial_balances":[{"address":"wasm1n8aqd9jq9glhj87cn0nkmd5mslz3df8zm86hrh","amount":"10000"},{"address":"wasm13y4tpsgxza44yq76qvj69sakq4jmeyqudwgwpk","amount":"10000"},{"address":$wallet,"amount":"10000"}],"mint":{"minter":$wallet}}\')\n\nwasmd tx wasm instantiate $CODE_ID "$INIT" --from wallet $TXFLAG --label "first cw20"\n')),(0,s.kt)("p",null,"You will see this output indicating that instantiation transaction is success:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "height": "1350700",\n  "txhash": "82D7240A35BDC6DE307AA725FE52590E83B60D4B682ABB0B0F6DCA28A66212D9",\n  "data": "0A3C0A0B696E7374616E7469617465122D0A2B7761736D3170657A74676C397661677768346B3574677765366E367475397338686A7779716D6C6D72686B",\n  "raw_log": "[{\\"events\\":[{\\"type\\":\\"message\\",\\"attributes\\":[{\\"key\\":\\"action\\",\\"value\\":\\"instantiate\\"},{\\"key\\":\\"module\\",\\"value\\":\\"wasm\\"},{\\"key\\":\\"signer\\",\\"value\\":\\"wasm10qhh60sexwtzd6nqr4r34z6t2d7nfrqp684twu\\"},{\\"key\\":\\"code_id\\",\\"value\\":\\"135\\"},{\\"key\\":\\"contract_address\\",\\"value\\":\\"wasm1peztgl9vagwh4k5tgwe6n6tu9s8hjwyqmlmrhk\\"}]},{\\"type\\":\\"wasm\\",\\"attributes\\":[{\\"key\\":\\"contract_address\\",\\"value\\":\\"wasm1peztgl9vagwh4k5tgwe6n6tu9s8hjwyqmlmrhk\\"}]}]}]",\n  "logs": [\n    {\n      "events": [\n        {\n          "type": "message",\n          "attributes": [\n            {\n              "key": "action",\n              "value": "instantiate"\n            },\n            {\n              "key": "module",\n              "value": "wasm"\n            },\n            {\n              "key": "signer",\n              "value": "wasm10qhh60sexwtzd6nqr4r34z6t2d7nfrqp684twu"\n            },\n            {\n              "key": "code_id",\n              "value": "135"\n            },\n            {\n              "key": "contract_address",\n              "value": "wasm1peztgl9vagwh4k5tgwe6n6tu9s8hjwyqmlmrhk"\n            }\n          ]\n        },\n        {\n          "type": "wasm",\n          "attributes": [\n            {\n              "key": "contract_address",\n              "value": "wasm1peztgl9vagwh4k5tgwe6n6tu9s8hjwyqmlmrhk"\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "gas_wanted": "185650",\n  "gas_used": "155257"\n}\n')),(0,s.kt)("p",null,"This command from before should now output the instantiated contract address."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "contracts": [\n    "wasm1peztgl9vagwh4k5tgwe6n6tu9s8hjwyqmlmrhk"\n  ],\n  "pagination": {}\n}\n')),(0,s.kt)("p",null,"Now we have a ready to use instantiated contract. As you can see, you need a lot of shell JSON manipulation for\ncommand line interaction. This is just dirty work... Luckily we have a better option."),(0,s.kt)("h2",{id:"cosmjs"},"CosmJS"),(0,s.kt)("p",null,"CosmJS is the Swiss Army knife to power JavaScript based client solutions ranging from Web apps/explorers over\nbrowser extensions to server-side clients like faucets/scrapers in the Cosmos ecosystem."),(0,s.kt)("p",null,"CosmJS contains all the functions you need to interact with Cosmos SDK clients. Its use ranges from exchanges, block\nexplorers to basic scripts, including smart contract execution."),(0,s.kt)("p",null,"For this tutorial, we will explore CosmWasm side of CosmJS."),(0,s.kt)("h3",{id:"setup-client"},"Setup Client"),(0,s.kt)("p",null,"The first step before doing anything is ensuring we can create an account and connect to the chain. You will always use\nthe following command to start up the ",(0,s.kt)("inlineCode",{parentName:"p"},"@cosmjs/cli")," with some cw20-specific helpers preloaded\n(in addition to all the general helpers it has)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npx @cosmjs/cli@^0.26 --init https://raw.githubusercontent.com/InterWasm/cw-plus-helpers/main/base.ts --init https://raw.githubusercontent.com/InterWasm/cw-plus-helpers/main/cw20-base.ts\n")),(0,s.kt)("p",null,"Now you will see a REPL client."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const [addr, client] = await useOptions(pebblenetOptions).setup('password');\nclient.getAccount(addr);\n")),(0,s.kt)("p",null,"This will take a few seconds as we hit the faucet the first time to ensure you have some tokens in your account to pay\nfees. When it returns, you should see something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"{\n  address: 'wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp',\n  pubkey: {\n    type: 'tendermint/PubKeySecp256k1',\n    value: 'AkjSrJA0XT612qHvnHieHAebZ+cIA2jq3LRj0g4V/lOF'\n  },\n  accountNumber: 323,\n  sequence: 4\n}\n")),(0,s.kt)("h3",{id:"reloading-your-wallet"},"Reloading your Wallet"),(0,s.kt)("p",null,"You can keep typing in the shell, or close it and run some sections later. Always start off with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const [addr, client] = await useOptions(pebblenetOptions).setup(PASSWORD_HERE);\n")),(0,s.kt)("p",null,"to set up your client. ",(0,s.kt)("inlineCode",{parentName:"p"},"useOptions")," takes the pebblenet configuration from everything from URLs to tokens to\nbech32prefix. When you call ",(0,s.kt)("inlineCode",{parentName:"p"},"setup")," with a password, it checks for\n",(0,s.kt)("inlineCode",{parentName:"p"},"~/.pebblenet.key")," and creates a new key if it is not there, otherwise it loads the key from the file. Your private key (\nactually mnemonic) is stored encrypted, and you need the same password to use it again. Try ",(0,s.kt)("inlineCode",{parentName:"p"},"cat ~/.pebblenet.key")," to prove\nto yourself that it is indeed encrypted, or try reloading with a different password."),(0,s.kt)("p",null,"If you want the mnemonic, you can recover it at anytime, as long as you still have the file and the password. You could\nuse this later to recover, or use the same mnemonic to import the key into the ",(0,s.kt)("inlineCode",{parentName:"p"},"pebblenet")," cli tool."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"useOptions(pebblenetOptions).recoverMnemonic(YOUR_PASSWORD_HERE)\n")),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This command saves the key to ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.pebblenet.key")," encrypted. If you forget the password, either delete it or pass\na\n",(0,s.kt)("inlineCode",{parentName:"p"},"filename")," along with a password to create a new key."))),(0,s.kt)("p",null,"Also, try this with a invalid password and see how it fails."),(0,s.kt)("p",null,"Now that you feel a bit more secure about your keys (and ability to load them later), let's get into working with some\ncontracts."),(0,s.kt)("h3",{id:"example-star"},"Example: STAR"),(0,s.kt)("p",null,'The first contract I uploaded was STAR tokens, or "Golden Stars" to be distribute to the\n',(0,s.kt)("a",{parentName:"p",href:"https://block-explorer.pebblenet.cosmwasm.com/validators"},"first 3 validators")," on the network."),(0,s.kt)("p",null,"Please do not copy this verbatim, but look to see how such a contract is set up and deployed the first time."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const [addr, client] = await useOptions(pebblenetOptions).setup(PASSWORD_HERE);\n\nconst cw20 = CW20(client, pebblenetOptions.fees);\nconst codeId = await cw20.upload(addr);\nconsole.log(`CodeId: ${codeId}`);\n// output: 55\n\n// enable REPL editor mode to edit multiline code then execute\n.editor\nconst initMsg = {\n  name: "Golden Stars",\n  symbol: "STAR",\n  decimals: 2,\n  // list of all validator self-delegate addresses - 100 STARs each!\n  initial_balances: [\n    {address: "wasm13krn38qhu83y5xvmjgydnk5vjau2u3c0tv5jsu", amount: "10000"},\n    {address: "wasm1ppgpwep3yzh8w3d89xlzlens3420j5vs5q3p4j", amount: "10000"},\n    {address: "wasm1fnx5jzqsdkntlq2nspjgswtezf45u5ug3kq9sw", amount: "10000"},\n  ],\n  mint: {\n    minter: addr,\n  },\n};\n// exit editor using `^D` and execute entered code\n^\nD\n\nconst contract = await cw20.instantiate(addr, codeId, initMsg, "STAR");\nconsole.log(`Contract: ${contract.contractAddress}`);\n// Contract: wasm14wm5jvsm6r896tcqsx9dlxc8h0w2mg5de39dsm\n\nconsole.log(await contract.balance("wasm13krn38qhu83y5xvmjgydnk5vjau2u3c0tv5jsu"));\n// 10000\nconsole.log(await contract.balance(contract.contractAddress));\n// 0\n')),(0,s.kt)("h3",{id:"spin-new-contract"},"Spin New Contract"),(0,s.kt)("p",null,"Now that we have that uploaded, we can easily make a second contract. This one, please do run through and customize the\nfield names and token amounts before entering them."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const [addr, client] = await useOptions(pebblenetOptions).setup(PASSWORD_HERE);\nconst cw20 = CW20(client, pebblenetOptions.fees);\n\n.editor\nconst initMsg = {\n  name: "My Coin",\n  symbol: "MINE",\n  decimals: 6,\n  initial_balances: [\n    {address: addr, amount: "12345678000"},\n  ],\n  mint: {\n    minter: addr,\n    cap: "99900000000"\n  },\n};\n^\nD\n\nconst codeId = 55;\nconst mine = await cw20.instantiate(addr, codeId, initMsg, "MINE");\nconsole.log(`Contract: ${mine.contractAddress}`);\n// Contract: wasm10ajume5hphs9gcrpl9mw2m96fv7qu0q7esznj2\n\n// now, check the configuration\nmine.balance(addr);\nmine.tokenInfo()\nmine.minter()\n')),(0,s.kt)("p",null,"Look, you're rich now! Time to share the wealth."),(0,s.kt)("h3",{id:"using-contract"},"Using Contract"),(0,s.kt)("p",null,"In this section, we will show you how to use your newly constructed token. You can keep typing along in the same REPL\nthat you used to create the ",(0,s.kt)("inlineCode",{parentName:"p"},"MINE"),"\ntokens (or whatever better name you invented), but if you closed it down and come back, here's how to re-connect:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const [addr, client] = await useOptions(pebblenetOptions).setup(PASSWORD_HERE);\nconst cw20 = CW20(client, pebblenetOptions.fees);\n\n// if you forgot your address, but remember your label, you can find it again\nconst contracts = await client.getContracts(55)\ncontracts\nconst contractAddress = contracts.filter(x => x.label === 'MINE')[0].address;\n\n// otherwise, you can just cut and paste from before\nconst contractAddress = \"wasm14wm5jvsm6r896tcqsx9dlxc8h0w2mg5de39dsm\"\n\n// now, connect to that contract and make sure it is yours\nconst mine = cw20.use(contractAddress);\nmine.tokenInfo()\nmine.minter()\nmine.balance(addr)\n")),(0,s.kt)("p",null,"Okay, you are connected to your contract. Let's see what cw20 is capable of. Here I will show you how you can mint\ntokens (you did give yourself that special permission on init, right?) and transfer tokens to other users."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const someone = "wasm13nt9rxj7v2ly096hm8qsyfjzg5pr7vn56p3cay";\nconst other = "wasm1ve2n9dd4uy48hzjgx8wamkc7dp7sfdv82u585d";\n\n// right now, only you have tokens\nmine.balance(addr)\nmine.balance(someone)\nmine.balance(other)\n// and watch the total\nmine.tokenInfo()\n\n// let\'s mint some tokens for someone\nmine.mint(addr, someone, "999888000")\n// Bonus, take the tx hash printed out and cut-paste that into https://bigdipper.wasmnet.cosmwasm.com\n// eg 26D5514CF437EE584793768B56CB4E605F1F6E61FC0123030DC64E08E2EE97FA\n\n// See balances updated\nmine.balance(someone)\nmine.balance(addr)\n// and the supply goes up\nmine.tokenInfo()\n\n// Okay, now let\'s transfer some tokens... that is the more normal one, right?\nmine.transfer(addr, other, "4567000");\n// eg. 4A76EFFEB09C82D0FEB97C3B5A9D5BADB6E9BD71F4EF248A3EF8B232C2F7262A\nmine.balance(other)\nmine.balance(addr)\n')))}u.isMDXComponent=!0}}]);