"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1326],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(n),u=o,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||s;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var m=2;m<s;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5889:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return p}});var a=n(7462),o=n(3366),s=(n(7294),n(3905)),r=["components"],i={sidebar_position:2},l="Joining Testnets",m={unversionedId:"testnets/testnets",id:"testnets/testnets",title:"Joining Testnets",description:"In this section we will explain how to join testnets, where to find testnet configurations, and some scripts to make the",source:"@site/ecosystem/02-testnets/02-testnets.md",sourceDirName:"02-testnets",slug:"/testnets/",permalink:"/fr/ecosystem/testnets/",editUrl:"https://github.com/InterWasm/docs/edit/main/ecosystem/02-testnets/02-testnets.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Build Requirements",permalink:"/fr/ecosystem/testnets/build-requirements"},next:{title:"Hall of Fame",permalink:"/fr/ecosystem/hall-of-fame"}},c=[{value:"Select Your Network",id:"select-your-network",children:[],level:2},{value:"Setup",id:"setup",children:[{value:"Manual Setup",id:"manual-setup",children:[],level:3}],level:2},{value:"Joining Live Testnets",id:"joining-live-testnets",children:[{value:"Run wasmd Full Node",id:"run-wasmd-full-node",children:[],level:3},{value:"Become A Validator(optional)",id:"become-a-validatoroptional",children:[],level:3},{value:"Run the Light Client Daemon",id:"run-the-light-client-daemon",children:[],level:3}],level:2},{value:"Joining To Be Launched Testnets",id:"joining-to-be-launched-testnets",children:[],level:2},{value:"Deploying Contracts to Testnet",id:"deploying-contracts-to-testnet",children:[],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"joining-testnets"},"Joining Testnets"),(0,s.kt)("p",null,"In this section we will explain how to join testnets, where to find testnet configurations, and some scripts to make the\nprocess faster."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Sandynet validators is run by confio and not open for external validators. The documentation here is for reference and\nwill be updated when long living CosmWasm network is released. If you want to start practicing validator operation skills, join upcoming CosmWasm testnets. But they are\nvery far from production environments. For near mainnet conditions, try validating in 30+ node networks, where network\nload is high."),(0,s.kt)("p",{parentName:"div"},"Try Terra: ",(0,s.kt)("a",{parentName:"p",href:"https://docs.terra.money/node/join-network.html"},"https://docs.terra.money/node/join-network.html")),(0,s.kt)("p",{parentName:"div"},"Or Juno: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmosContracts/testnets"},"https://github.com/CosmosContracts/testnets")),(0,s.kt)("p",{parentName:"div"},"Both Terra and Juno integrates CosmWasm smart contract engine."))),(0,s.kt)("h2",{id:"select-your-network"},"Select Your Network"),(0,s.kt)("p",null,"You can find active and in-active testnet information such as configs and endpoints\non ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/testnets"},"CosmWasm/testnets"),"."),(0,s.kt)("h2",{id:"setup"},"Setup"),(0,s.kt)("p",null,"Let's start rolling your node and start producing blocks in testnet environment."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Before starting"),", you can use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/testnets/tree/master/devops"},"CosmWasm/tesnets/devops")," that\ncontains easy setup scripts for wasmd node, faucet, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/big-dipper"},"block explorer"),", lcd, nginx\netc. Scripts below does the some thing as ",(0,s.kt)("strong",{parentName:"p"},"devops repo")," in essence, just more manual and excludes nginx and system\nsupervisor. Feel free to use them. We use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/master/cosmovisor"},"cosmovisor"),"\nupgrade manager to handle network upgrades. Our installation scripts can help you with both setting up cosmovisor and\nwasmd: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/testnets/tree/master/devops/node/cosmovisor"},"wasmd w/cosmovisor setup scripts")),(0,s.kt)("h3",{id:"manual-setup"},"Manual Setup"),(0,s.kt)("p",null,"First of all make sure you followed the installation steps in ",(0,s.kt)("a",{parentName:"p",href:"/fr/ecosystem/testnets/build-requirements"},"build requirements section"),". You\nshould have the required binaries. If you just want to copy and execute the scripts below, make sure to set up\nenvironment variables:"),(0,s.kt)("p",null,"Below is the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/testnets/blob/master/sandynet-1/defaults.env"},"sandynet configuration"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'export CHAIN_ID="sandynet-1"\nexport TESTNET_NAME="sandynet-1"\nexport FEE_DENOM="ubay"\nexport STAKE_DENOM="umaya"\nexport BECH32_HRP="wasm"\nexport WASMD_VERSION="v0.21.0"\nexport CONFIG_DIR=".wasmd"\nexport BINARY="wasmd"\n\nexport COSMJS_VERSION="v0.26.0"\nexport GENESIS_URL="https://raw.githubusercontent.com/CosmWasm/testnets/master/sandynet-1/config/genesis.json"\nexport APP_CONFIG_URL="https://raw.githubusercontent.com/CosmWasm/testnets/master/sandynet-1/config/app.toml"\nexport CONFIG_URL="https://raw.githubusercontent.com/CosmWasm/testnets/master/sandynet-1/config/config.toml"\n\nexport RPC="https://rpc.sandynet.cosmwasm.com:443"\nexport LCD="https://lcd.sandynet.cosmwasm.com"\nexport FAUCET="https://faucet.sandynet.cosmwasm.com"\n\nexport COSMOVISOR_VERSION="v0.42.10"\nexport COSMOVISOR_HOME=/root/.wasmd\nexport COSMOVISOR_NAME=wasmd\n\nexport NODE=(--node $RPC)\nexport TXFLAG=($NODE --chain-id $CHAIN_ID --gas-prices 0.001usandy --gas auto --gas-adjustment 1.3)\n')),(0,s.kt)("p",null,"For running these scripts seamlessly, We recommend you to create a directory for CosmWasm tooling:\n",(0,s.kt)("inlineCode",{parentName:"p"},"mkdir CosmWasm && cd CosmWasm && export CW_DIR=$(pwd)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'cd $CW_DIR\ngit clone https://github.com/CosmWasm/wasmd\ncd wasmd\n# Check which version to use on 02-testnets repo\ngit checkout $WASMD_VERSION\n# build wasmd\nmake build\n# add the executables to path\nexport PATH="${PATH}:$(pwd)/build"\n')),(0,s.kt)("p",null,"Initialize wallet using command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# create wallet\nwasmd keys add mywallet\n")),(0,s.kt)("h2",{id:"joining-live-testnets"},"Joining Live Testnets"),(0,s.kt)("h3",{id:"run-wasmd-full-node"},"Run wasmd Full Node"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'export MONIKER=new_validator\n# initialize wasmd configuration\nwasmd init $MONIKER\n\n# get the 02-testnets genesis file\ncurl -sSL $GENESIS_URL > ~/.wasmd/config/genesis.json\n\n# get app.toml. Minimum gas prices must be 0.025usponge\ncurl -sSL $APP_CONFIG_URL > ~/.wasmd/config/app.toml\n\n# You need to configure p2p seeds\n# Either you can insert the seed addresses in $HOME/.wasmd/config/config.toml to "seeds"\n# For simplicity we will pass the seed ID and domain as argument\n# You can get the seed it using command:\n## Start wasmd\nwasmd start --p2p.seeds $SEED_NODE\n')),(0,s.kt)("p",null,"Now you should be seeing blocks being replayed and your node is catching up with the testnet. This could take a while."),(0,s.kt)("h3",{id:"become-a-validatoroptional"},"Become A Validator(optional)"),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Command below is for demonstration, sandynet is not open for external validators."))),(0,s.kt)("p",null,"For those interested in validator stack, here is a good reading source on validator\narchitectures: ",(0,s.kt)("a",{parentName:"p",href:"https://kb.certus.one/"},"certus one blog")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note"),": make sure your validator is synced before upgrading to validator"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'wasmd tx staking create-validator \\\n  --amount=1000000ustar \\\n  --pubkey=$(wasmd tendermint show-validator) \\\n  --moniker=$MONIKER \\\n  --chain-id=$CHAIN_ID \\\n  --commission-rate="0.10" \\\n  --commission-max-rate="0.20" \\\n  --commission-max-change-rate="0.01" \\\n  --min-self-delegation="1" \\\n  --node $RPC \\\n  --fees=5000usponge \\\n  --from=mywallet\n')),(0,s.kt)("h3",{id:"run-the-light-client-daemon"},"Run the Light Client Daemon"),(0,s.kt)("p",null,"With wasmd version v0.13 lcd client and node merged. To enable light client, change ",(0,s.kt)("inlineCode",{parentName:"p"},"app.toml/api")," value to true."),(0,s.kt)("h2",{id:"joining-to-be-launched-testnets"},"Joining To Be Launched Testnets"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You need to have your address and informations defined in networks genesis file to join not yet launched\ntestnets. Here is the script you can run to take care of it automatically."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'cd $CW_DIR\n## Fork github.com:CosmWasm/02-testnets to your account and clone.\n## You cannot push directly to CosmWasm/02-testnets repo\ngit clone git@github.com:<your-name>/02-testnets\ncd 02-testnets\ngit checkout -b add-gen-acc-<validator-name>\ncd $TESTNET_NAME\n\nwasmd keys add validator\n\nwasmd add-genesis-account --home . $(wasmd keys show -a validator) 100000000ustar,100000000usponge\n\n# please sort the genesis file, so the diff makes sense\nSORTED=$(jq -S . < ./config/genesis.json) && echo "$SORTED" > ./config/genesis.json\n\ngit add ./config/genesis.json\ngit commit -m "Add <myvalidator> account to network genesis"\ngit push\n\n# Open PR to CosmWasm/02-testnets:master (https://github.com/CosmWasm/testnets)\n')),(0,s.kt)("p",null,"After the network is launched you can follow ",(0,s.kt)("a",{parentName:"p",href:"#joining-live-testnets"},"Joining Live Testnets"),"."),(0,s.kt)("h2",{id:"deploying-contracts-to-testnet"},"Deploying Contracts to Testnet"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/getting-started/intro"},"Getting Started section")," is the best reading source that teaches you the process of\ncompiling and deploying contracts using a basic smart contract. If you are interested in developing your own contracts,\nafter reading getting started tutorials head to ",(0,s.kt)("a",{parentName:"p",href:"/tutorials/hijack-escrow/intro"},"Hijacking Escrow")," where you play around\nwith the example escrow contract."))}p.isMDXComponent=!0}}]);