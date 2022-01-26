"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6928],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2580:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:2},l="D\xe9velopper le contrat",c={unversionedId:"develop-smart-contract/develop",id:"develop-smart-contract/develop",title:"D\xe9velopper le contrat",description:"Dans cette session, nous allons nous appuyer sur le mod\xe8le que nous avons g\xe9n\xe9r\xe9 sur la page pr\xe9c\xe9dente.",source:"@site/i18n/fr/docusaurus-plugin-content-docs-dev-academy/current/develop-smart-contract/02-develop.md",sourceDirName:"develop-smart-contract",slug:"/develop-smart-contract/develop",permalink:"/fr/dev-academy/develop-smart-contract/develop",editUrl:"https://crowdin.com/project/cosmwasm-docs/fr",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devAcademy",previous:{title:"Anatomie d'un contrat intelligent",permalink:"/fr/dev-academy/develop-smart-contract/intro"},next:{title:"Introduction",permalink:"/fr/dev-academy/dao-governance/what-is-smart-contracts"}},d=[{value:"Config",id:"config",children:[],level:2},{value:"Instantiate",id:"instantiate",children:[{value:"Msg",id:"msg",children:[],level:3},{value:"Instantiate",id:"instantiate-1",children:[],level:3},{value:"Tests",id:"tests",children:[],level:3}],level:2},{value:"Cr\xe9er un pot commun",id:"cr\xe9er-un-pot-commun",children:[{value:"State",id:"state",children:[],level:3},{value:"Msg",id:"msg-1",children:[],level:3},{value:"Execute",id:"execute",children:[],level:3}],level:2},{value:"Collecter des jetons",id:"collecter-des-jetons",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2},{value:"D\xe9fi",id:"d\xe9fi",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"d\xe9velopper-le-contrat"},"D\xe9velopper le contrat"),(0,o.kt)("p",null,"Dans cette session, nous allons nous appuyer sur le mod\xe8le que nous avons g\xe9n\xe9r\xe9 sur la ",(0,o.kt)("a",{parentName:"p",href:"/fr/dev-academy/develop-smart-contract/intro"},"page pr\xe9c\xe9dente"),"."),(0,o.kt)("p",null,"Voici la logique de l'application que nous voulons :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Les jetons collect\xe9s dans le solde du contrat intelligent sont lib\xe9r\xe9s \xe0 une adresse cible apr\xe8s que le montant des jetons d\xe9passe un montant sp\xe9cifi\xe9."),(0,o.kt)("li",{parentName:"ul"},"Le contrat accepte le jeton cw20 qui est pr\xe9d\xe9fini par l'administrateur.")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Nous recommandons de supprimer le code du mod\xe8le pendant l'impl\xe9mentation pour faciliter le copier-coller du code. :::")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("p",null,"Les informations ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," qui d\xe9terminent qui contr\xf4le l'adresse de cr\xe9ation de pot doivent \xeatre persist\xe9es sur le stockage du contrat lors de chaque ex\xe9cution. Nous enregistrerons ces informations lors de la phase de ",(0,o.kt)("inlineCode",{parentName:"p"},"instantiate"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// state.rs\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct Config {\n  pub admin: Addr,\n  pub cw20_addr: Addr\n}\n\npub const CONFIG: Item<Config> = Item::new("config");\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Item")," est utilis\xe9 car ces donn\xe9es seront un singleton."),(0,o.kt)("h2",{id:"instantiate"},"Instantiate"),(0,o.kt)("h3",{id:"msg"},"Msg"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// msg.rs\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct InstantiateMsg {\n    pub admin: Option<String>,\n    /// cw20_addr is the address of the allowed cw20 token\n    pub cw20_addr: String\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"admin")," est d\xe9fini comme ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," car si ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"info.sender")," sera d\xe9fini comme admin par d\xe9faut. L'adresse cw20 accept\xe9e est d\xe9finie ici."),(0,o.kt)("h3",{id:"instantiate-1"},"Instantiate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'//contract.rs\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn instantiate(\n    deps: DepsMut,\n    _env: Env,\n    info: MessageInfo,\n    msg: InstantiateMsg,\n) -> Result<Response, ContractError> {\n    set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;\n\n    let owner = msg.admin\n        .and_then(|s| deps.api.addr_validate(s.as_str()).ok())\n        .unwrap_or(info.sender);\n    let config = Config {\n        owner: owner.clone(),\n    };\n    let config = Config {\n        owner: owner.clone(),\n        cw20_addr: deps.api.addr_validate(msg.cw20_addr.as_str())?\n    } ;\n    CONFIG.save(deps.storage, &config) ;\n\n    // init pot sequence\n    POT_SEQ.save(deps.storage, &Uint128::new(0))? ;\n\n    Ok(Response::new()\n        .add_attribute("method", "instantiate")\n        .add_attribute("owner", owner)\n        .add_attribute("cw20_addr", msg.cw20_addr))\n}\n')),(0,o.kt)("p",null,"La logique ci-dessus signifie que si le propri\xe9taire est ",(0,o.kt)("inlineCode",{parentName:"p"},"Some")," alors valider, sinon utiliser ",(0,o.kt)("inlineCode",{parentName:"p"},"info.sender")," et enregistrer la configuration, puis retourner ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," avec des attributs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let owner = msg.admin\n    .and_then(|s| deps.api.addr_validate(s.as_str()).ok())\n    .unwrap_or(info.sender);\n")),(0,o.kt)("p",null,"L'exemple ci-dessus est un excellent moyen de comprendre le cha\xeenage des m\xe9thodes. Nous vous recommandons cette excellente lecture : ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/rust-by-example/error/option_unwrap/and_then.html"},"Rust Combinator")),(0,o.kt)("h3",{id:"tests"},"Tests"),(0,o.kt)("p",null,"Je vous laisse cette partie comme un d\xe9fi ;)"),(0,o.kt)("h2",{id:"cr\xe9er-un-pot-commun"},"Cr\xe9er un pot commun"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"admin")," peut cr\xe9er des pots pour collecter de l'argent avec un seuil donn\xe9."),(0,o.kt)("h3",{id:"state"},"State"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// state.rs\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct Pot {\n  /// target_addr is the address that will receive the pot\n  pub target_addr: Addr,\n  /// threshold_amount is the token threshold amount\n  pub threshold_amount: Uint128,\n  /// collected keeps information on how much is collected for this pot.\n  pub collected: Uint128,\n}\n\n/// POT_SEQ contient le dernier ID du pot commun\npub const POT_SEQ: Item<Uint128> = Item::new("pot_seq");\n/// POTS sont index\xe9s par un entier qui auto incr\xe9mente.\npub const POTS: Map<U128Key, Pot> = Map::new("pot");\n')),(0,o.kt)("p",null,"Nous pouvons utiliser une fonction ",(0,o.kt)("inlineCode",{parentName:"p"},"save_pot")," pour auto-incr\xe9menter seq et l'utiliser comme index pour pot."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// state.rs\npub fn save_pot(deps: DepsMut, pot: &Pot) -> StdResult<()> {\n  // increment id if exists, or return 1\n  let id = POT_SEQ.load(deps.storage)?;\n  // checks for overflow\n  let id = id.checked_add(Uint128::new(1))?;\n  POT_SEQ.save(deps.storage, &id)?;\n\n  // save pot with id\n  POTS.save(deps.storage, id.u128().into(), pot)\n}\n")),(0,o.kt)("h3",{id:"msg-1"},"Msg"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," devient ceci :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// msg.rs\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum ExecuteMsg {\n    CreatePot {\n        /// target_addr will receive tokens when token amount threshold is met.\n        target_addr: String,\n        /// threshold est le montant du jeton pour la lib\xe9ration des jetons.\n        threshold: Uint128\n    },\n}\n')),(0,o.kt)("h3",{id:"execute"},"Execute"),(0,o.kt)("p",null,"En fonction du message re\xe7u ",(0,o.kt)("inlineCode",{parentName:"p"},"Execute")," va soit ",(0,o.kt)("inlineCode",{parentName:"p"},"CreatePot ")," ou ",(0,o.kt)("inlineCode",{parentName:"p"},"Receive"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// contract.rs\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn execute(\n    deps: DepsMut,\n    _env: Env,\n    info: MessageInfo,\n    msg: ExecuteMsg,\n) -> Result<Response, ContractError> {\n    match msg {\n        ExecuteMsg::CreatePot {\n            target_addr,\n            threshold,\n        } => execute_create_pot(deps, info, target_addr, threshold),\n        ExecuteMsg::Receive(msg) => execute_receive(deps, info, msg),\n    }\n}\n')),(0,o.kt)("p",null,"L'exemple ci-dessus est un excellent exemple pour comprendre l'op\xe9rateur ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/rust-by-example/flow_control/match.html"},"match"),". Maintenant que nous avons ajout\xe9 des options suppl\xe9mentaires \xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," nous allons revenir en arri\xe8re et mettre \xe0 jour l'enum."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'//msg.rs\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum ExecuteMsg {\n    CreatePot {\n        /// target_addr will receive tokens when token amount threshold is met.\n        target_addr: String,\n        /// threshold is the token amount for releasing tokens.\n        threshold: Uint128,\n    },\n    /// Receive forwards received cw20 tokens to an execution logic\n    Receive(Cw20ReceiveMsg),\n}\n\n')),(0,o.kt)("p",null,"Now that we have updated ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecuteMsg"),", we must create ",(0,o.kt)("inlineCode",{parentName:"p"},"execute_create_pot")," which is called by the contract's ",(0,o.kt)("inlineCode",{parentName:"p"},"Execute")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// contract.rs\npub fn execute_create_pot(\n    deps: DepsMut,\n    info: MessageInfo,\n    target_addr: String,\n    threshold: Uint128,\n) -> Result<Response, ContractError> {\n    // owner authentication\n    let config = CONFIG.load(deps.storage)?;\n    if config.owner != info.sender {\n        return Err(ContractError::Unauthorized {});\n    }\n    // create and save pot\n    let pot = Pot {\n        target_addr: deps.api.addr_validate(target_addr.as_str())?,\n        threshold,\n        collected: Uint128::zero(),\n    };\n    save_pot(deps, &pot)?;\n\n    Ok(Response::new()\n        .add_attribute("action", "execute_create_pot")\n        .add_attribute("target_addr", target_addr)\n        .add_attribute("threshold_amount", threshold))\n}\n')),(0,o.kt)("h2",{id:"collecter-des-jetons"},"Collecter des jetons"),(0,o.kt)("p",null,"C'est la partie importante que ce document tente d'enseigner : l'interaction avec un contrat externe. Le contrat intelligent collectera les jetons cw20. Apr\xe8s l'envoi du jeton cw20, ce contrat fonctionnera sur cette information."),(0,o.kt)("p",null,"Mais comment ?"),(0,o.kt)("p",null,"Les contrats intelligents CosmWasm fonctionnent comme des acteurs qui envoient des messages. Chaque contrat ex\xe9cute les autres en renvoyant un message au contexte."),(0,o.kt)("p",null,"Les utilisateurs peuvent transf\xe9rer des jetons de leur compte vers le contrat intelligent, puis ex\xe9cuter le contrat intelligent pour sauvegarder l'allocation de ce jeton dans la prochaine TX. Mais le probl\xe8me ici est de savoir comment v\xe9rifier que ce jeton est envoy\xe9 par cet utilisateur ?"),(0,o.kt)("p",null,"Une fa\xe7on d'y parvenir :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"L'utilisateur ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cw-plus/tree/main/packages/cw20#allowances"},"augmente l'allocation de jetons")," de l'adresse du contrat intelligent cw20-pot."),(0,o.kt)("li",{parentName:"ol"},"L'utilisateur d\xe9clenche le contrat cw20-pot pour retirer les fonds autoris\xe9s sur son compte.")),(0,o.kt)("p",null,"Cette op\xe9ration n\xe9cessite deux transactions."),(0,o.kt)("p",null,"Il existe un moyen meilleur et plus \xe9l\xe9gant : ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/tree/main/packages/cw20#receiver"},"cw20 Receiver Interface"),"."),(0,o.kt)("p",null,"Cela fonctionne comme suit : l'utilisateur cr\xe9e un message pour envoyer des jetons cw20 au contrat cw20-pot avec un message int\xe9gr\xe9 dans pour d\xe9clencher l'ex\xe9cution du cw20-pot."),(0,o.kt)("p",null,"Si vous v\xe9rifiez ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/contracts/cw20-base/src/contract.rs#L318"},"cw20-base/contrats.rs#execute_send")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn execute_send(\n  deps: DepsMut,\n  _env: Env,\n  info: MessageInfo,\n  contract: String,\n  amount: Uint128,\n  msg: Binary,\n) -> Result<Response, ContractError> {\n")),(0,o.kt)("p",null,"Dans la signature, vous remarquerez ",(0,o.kt)("inlineCode",{parentName:"p"},"contract"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," et ",(0,o.kt)("inlineCode",{parentName:"p"},"msg"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," est le destinataire du jeton et aussi adresse de la prochaine ex\xe9cution, ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," est le nombre de jetons et ",(0,o.kt)("inlineCode",{parentName:"p"},"msg")," est le message externe en ",(0,o.kt)("inlineCode",{parentName:"p"},"base64"),"."),(0,o.kt)("p",null,"\xc0 la fin de ",(0,o.kt)("inlineCode",{parentName:"p"},"execute_send"),", vous verrez une ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," avec un message incorpor\xe9 renvoy\xe9 \xe0 la cha\xeene."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let res = Response::new()\n        .add_attribute("action", "send")\n        .add_attribute("from", &info.sender)\n        .add_attribute("to", &contract)\n        .add_attribute("amount", amount)\n        .add_message(\n            Cw20ReceiveMsg {\n                sender: info.sender.into(),\n                amount,\n                msg,\n            }\n            .into_cosmos_msg(contract)?,\n        );\n    Ok(res)\n')),(0,o.kt)("p",null,"Comme vous pouvez le voir, ",(0,o.kt)("inlineCode",{parentName:"p"},"msg")," est envelopp\xe9 dans un ",(0,o.kt)("inlineCode",{parentName:"p"},"Cw20ReceiveMsg")," et pour l'interaction avec le contrat cw20, votre contrat accepte ",(0,o.kt)("inlineCode",{parentName:"p"},"Cw20ReceiveMsg"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn execute_receive(\n  deps: DepsMut,\n  info: MessageInfo,\n  wrapped: Cw20ReceiveMsg,\n) -> Result<Response, ContractError> {\n  // cw20 address authentication\n  let config = CONFIG.load(deps.storage)?;\n  if config.cw20_addr != info.sender {\n    return Err(ContractError::Unauthorized {});\n  }\n\n  let msg: ReceiveMsg = from_binary(&wrapped.msg)?;\n  match msg {\n    ReceiveMsg::Send { id } => receive_send(deps, id, wrapped.amount, info.sender),\n  }\n}\n")),(0,o.kt)("p",null,"Sur cette ligne, le message de r\xe9ception envelopp\xe9 et d\xe9fini par contrat est analys\xe9 \xe0 partir du binaire en base64."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"  let msg: ReceiveMsg = from_binary(&wrapped.msg)?;\n")),(0,o.kt)("p",null,"Voici le ",(0,o.kt)("inlineCode",{parentName:"p"},"ReceiveMsg"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum ReceiveMsg {\n    // Send sends token to an id with defined pot\n    Send { id: Uint128 },\n}\n')),(0,o.kt)("p",null,"Cela cr\xe9e une branche de deuxi\xe8me profondeur \xe0 l'int\xe9rieur de ",(0,o.kt)("inlineCode",{parentName:"p"},"execute"),"."),(0,o.kt)("p",null,"Et le contrat intelligent ex\xe9cute cette logique :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn receive_send(\n    deps: DepsMut,\n    pot_id: Uint128,\n    amount: Uint128,\n    cw20_addr: Addr,\n) -> Result<Response, ContractError> {\n    // load pot\n    let mut pot = POTS.load(deps.storage, pot_id.u128().into())?;\n\n    pot.collected += amount;\n\n    POTS.save(deps.storage, pot_id.u128().into(), &pot)?;\n\n    let mut res = Response::new()\n        .add_attribute("action", "receive_send")\n        .add_attribute("pot_id", pot_id)\n        .add_attribute("collected", pot.collected)\n        .add_attribute("threshold", pot.threshold);\n\n    // if collected exceeds threshold prepare a cw20 message\n    if pot.collected >= pot.threshold {\n        // Cw20Contract is a function helper that provides several queries and message builder.\n        let cw20 = Cw20Contract(cw20_addr);\n        // Build a cw20 transfer send msg, that send collected funds to target address\n        let msg = cw20.call(Cw20ExecuteMsg::Transfer {\n            recipient: pot.target_addr.into_string(),\n            amount: pot.collected,\n        })?;\n        res = res.add_message(msg);\n    }\n\n    Ok(res)\n}\n')),(0,o.kt)("p",null,"Apr\xe8s l'ex\xe9cution, si le seuil est d\xe9pass\xe9, le montant collect\xe9 est envoy\xe9 \xe0 la cible."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Dans cette section, nous vous avons montr\xe9 l'interaction contrat \xe0 contrat et l'interaction contrat cw20. Cela devrait vous donner un aper\xe7u du passage des messages, du mod\xe8le \xe0 Acteurs (Actor model) et du d\xe9veloppement des contrats."),(0,o.kt)("h2",{id:"d\xe9fi"},"D\xe9fi"),(0,o.kt)("p",null,"Comme d\xe9fi, vous pouvez essayer de mettre en \u0153uvre un contrat qui \xe9tend ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-plus/"},"cw-plus")," ou ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts"},"cw-nfts"),"."))}p.isMDXComponent=!0}}]);