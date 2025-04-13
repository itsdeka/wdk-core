'use strict';

// config/dvns.json
var dvns_default = [
  {
    name: "LayerZero Labs",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "xlayer-mainnet",
    eid: 30274
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "xlayer-mainnet",
    eid: 30274
  },
  {
    name: "TSS",
    address: "0x4b80f7d25c451d204b1c93d9bdf2ab3b04f3ea4a",
    chainKey: "xlayer-mainnet",
    eid: 274
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "xlayer-mainnet",
    eid: 30274
  },
  {
    name: "Nethermind",
    address: "0x28af4dadbc5066e994986e8bb105240023dc44b6",
    chainKey: "xlayer-mainnet",
    eid: 30274
  },
  {
    name: "LZDeadDVN",
    address: "0xac9dc8415b2348d8135ec725e8e9b1f1dfaf8e53",
    chainKey: "xlayer-mainnet",
    eid: 30274
  },
  {
    name: "Nethermind",
    address: "0x4bc3343593c0bb0e70639d5c0fdbc67e05fe4183",
    chainKey: "xlayer-testnet",
    eid: 40269
  },
  {
    name: "LayerZero Labs",
    address: "0x55c175dd5b039331db251424538169d8495c18d1",
    chainKey: "xlayer-testnet",
    eid: 40269
  },
  {
    name: "LayerZero Labs",
    address: "0x12523de19dc41c91f7d2093e0cfbb76b17012c8d",
    chainKey: "ble-testnet",
    eid: 40330
  },
  {
    name: "LZDeadDVN",
    address: "0x55c175dd5b039331db251424538169d8495c18d1",
    chainKey: "ble-testnet",
    eid: 40330
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "unreal-testnet",
    eid: 40262
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "bartio-testnet",
    eid: 40291
  },
  {
    name: "LayerZero Labs",
    address: "0x28a5536ca9f36c45a9d2ac8d2b62fc46fde024b6",
    chainKey: "tenet-mainnet",
    eid: 30173
  },
  {
    name: "BCW",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "tenet-mainnet",
    eid: 30173
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "tenet-mainnet",
    eid: 30173
  },
  {
    name: "TSS",
    address: "0x282b3386571f7f794450d5789911a9804fa346b4",
    chainKey: "tenet-mainnet",
    eid: 173
  },
  {
    name: "LZDeadDVN",
    address: "0x0e557f8f5bfeedc6905594987dccc2e10af33e5c",
    chainKey: "tenet-mainnet",
    eid: 30173
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "tenet-testnet",
    eid: 10173
  },
  {
    name: "LayerZero Labs",
    address: "0x74582424b8b92be2ec17c192f6976b2effefab7c",
    chainKey: "tenet-testnet",
    eid: 40173
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "rootstock-mainnet",
    eid: 30333
  },
  {
    name: "Stargate",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "rootstock-mainnet",
    eid: 30333
  },
  {
    name: "Nethermind",
    address: "0x05aaefdf9db6e0f7d27fa3b6ee099edb33da029e",
    chainKey: "rootstock-mainnet",
    eid: 30333
  },
  {
    name: "Horizen",
    address: "0x54dd79f5ce72b51fcbbcb170dd01e32034323565",
    chainKey: "rootstock-mainnet",
    eid: 30333
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "rootstock-mainnet",
    eid: 30333
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "rootstock-testnet",
    eid: 40350
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "rootstock-testnet",
    eid: 40350
  },
  {
    name: "LayerZero Labs",
    address: "0x1a39b89a98bf89f82d5dc5c52d1f08f407d72ebb",
    chainKey: "venn-testnet",
    eid: 40234
  },
  {
    name: "LayerZero Labs",
    address: "0x8363302080e711e0cab978c081b9e69308d49808",
    chainKey: "harmony-mainnet",
    eid: 30116
  },
  {
    name: "LZDeadDVN",
    address: "0x801bfd947905c337d552f8e30cb4e80435771674",
    chainKey: "harmony-mainnet",
    eid: 30116
  },
  {
    name: "Horizen",
    address: "0x462a63dbe8ca43a57d379c88a382c02862b9a2ce",
    chainKey: "harmony-mainnet",
    eid: 30116
  },
  {
    name: "TSS",
    address: "0x3e2ef091d7606e4ca3b8d84bcaf23da0ffa11053",
    chainKey: "harmony-mainnet",
    eid: 116
  },
  {
    name: "Google",
    address: "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
    chainKey: "harmony-mainnet",
    eid: 30116
  },
  {
    name: "Nethermind",
    address: "0xd24972c11f91c1bb9eaee97ec96bb9c33cf7af24",
    chainKey: "harmony-mainnet",
    eid: 30116
  },
  {
    name: "TSS",
    address: "0xb099d5a9652a80ff8f4234bde00f66531aa91c50",
    chainKey: "harmony-testnet",
    eid: 10133
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "stabledevnet-testnet",
    eid: 40361
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "stabledevnet-testnet",
    eid: 40361
  },
  {
    name: "LayerZero Labs",
    address: "0xce8358bc28dd8296ce8caf1cd2b44787abd65887",
    chainKey: "skale-mainnet",
    eid: 30273
  },
  {
    name: "LZDeadDVN",
    address: "0xc8b0b3a95bc6ac3eda97208556dc7a7820da5bf0",
    chainKey: "skale-mainnet",
    eid: 30273
  },
  {
    name: "LayerZero Labs",
    address: "0x955412c07d9bc1027eb4d481621ee063bfd9f4c6",
    chainKey: "skale-testnet",
    eid: 40273
  },
  {
    name: "Delegate",
    address: "0x4d52f5bc932cf1a854381a85ad9ed79b8497c153",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Nethermind",
    address: "0xbcefdadb8d24b1d36c26b522235012cd4cf162f6",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Republic",
    address: "0x547bf6889b1095b7cc6e525a1f8e8fdb26134a38",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "P2P",
    address: "0x9eeee79f5dbc4d99354b5cb547c138af432f937b",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Omnicat",
    address: "0xa2d10677441230c4aed58030e4ea6ba7bfd80393",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Chainlink",
    address: "0x150a58e9e6bf69cceb1dba5ae97c166dc8792539",
    chainKey: "polygon-mainnet",
    eid: 109
  },
  {
    name: "Nodesguru",
    address: "0xf7ddee427507cdb6885e53caaaa1973b1fe29357",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Canary",
    address: "0x13feb7234ff60a97af04477d6421415766753ba3",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Google",
    address: "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Planetarium",
    address: "0x2ac038606fff3fb00317b8f0ccfb4081694acdd0",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "ABDB",
    address: "0xab6d3d37d8dc309e7d8086b2e85a953b84ee5fa9",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Nethermind",
    address: "0x31f748a368a893bdb5abb67ec95f232507601a73",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "BCW",
    address: "0x66d771b8f938ccb82a1a9cb7a93671cb92016ab0",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "polygon-mainnet",
    eid: 109
  },
  {
    name: "Superform",
    address: "0x1e4ce74ccf5498b19900649d9196e64bab592451",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Gitcoin",
    address: "0x047d9dbe4fc6b5c916f37237f547f9f42809935a",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "ABDB",
    address: "0xa6f5ddbf0bd4d03334523465439d301080574742",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Horizen",
    address: "0x25e0e650a78e6304a3983fc4b7ffc6544b1beea6",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "AltLayer",
    address: "0xbabbb709b3cefe563f2ab14898a53301686d48b9",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Zenrock",
    address: "0xcd8ea69bbca0a2bb221aed59fa2704f01fc76a9f",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Stargate",
    address: "0xc79f0b1bcb7cdae9f9ba547dcfc57cbfcd2993a5",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "BWare",
    address: "0x247624e2143504730aec22912ed41f092498bef2",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "LayerZero Labs",
    address: "0x23de2fe932d9043291f870324b74f820e11dc81a",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Stakingcabin",
    address: "0xcd19d26710cacf8241583769f353ea7395159007",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "LayerZero Labs",
    address: "0xa70c51c38d5a9990f3113a403d74eba01fce4ccb",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Bitgo",
    address: "0xc30291521305bc76115de7bca8034ea7147abe36",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Superduper",
    address: "0x8fc629aa400d4d9c0b118f2685a49316552abf27",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Stakingcabin",
    address: "0x53bdce6dccf7505a55813022f53c43fabfef7b3a",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Paxos",
    address: "0x7decc6df3af9cfc275e25d2f9703ecf7ad800d5d",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Restake",
    address: "0x2afa3787cd95fee5d5753cd717ef228eb259f4ea",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "POPS",
    address: "0xa75abcc0fab6ae09c8fd808bec7be7e88fe31d6b",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Omnix",
    address: "0x06b85533967179ed5bc9c754b84ae7d02f7ed830",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Stablelab",
    address: "0xabc9b1819cc4d9846550f928b985993cf6240439",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Blockhunters",
    address: "0xbd40c9047980500c46b8aed4462e2f889299febe",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "LZDeadDVN",
    address: "0x43cfcc293cdf99f7d021f21ffd443f174ab0e843",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Shrapnel",
    address: "0x54dd79f5ce72b51fcbbcb170dd01e32034323565",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Nocturnal",
    address: "0xf60c89799c85d8fab79519f7666dcde2a7c97cca",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "TSS",
    address: "0x5a54fe5234e811466d5366846283323c954310b2",
    chainKey: "polygon-mainnet",
    eid: 109
  },
  {
    name: "MIM",
    address: "0x1bab20e7fdc79257729cb596bef85db76c44915e",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "BCW",
    address: "0xd410ddb726991f372b69a05b006d2ae5a8cedbd6",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "01node",
    address: "0xf0809f6e760a5452ee567975eda7a28da4a83d38",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Luganodes",
    address: "0xd1b5493e712081a6fbab73116405590046668f6b",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Switchboard",
    address: "0xc6d46f63578635e4a7140cdf4d0eea0fd7bb50ec",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Bitgo",
    address: "0x02152f4624596602dcbb8b8ead2988ad44edc865",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "Flowdesk",
    address: "0x2cabf8f2c0aae35a771a1c19487684e94388b03a",
    chainKey: "polygon-mainnet",
    eid: 30109
  },
  {
    name: "LayerZero Labs",
    address: "0x10aeafac83d48e2f9ac4baaf94311c45face1404",
    chainKey: "polygon-sandbox",
    eid: 50109
  },
  {
    name: "BWare",
    address: "0x1cf01d5042d1ae231f918a2645f2762d663476e7",
    chainKey: "polygon-testnet",
    eid: 40109
  },
  {
    name: "Gitcoin",
    address: "0x60aadb6d42d2ea93d97c550a1bebc49fa7c2074b",
    chainKey: "polygon-testnet",
    eid: 40109
  },
  {
    name: "TSS",
    address: "0xaec5e56217a963bde38a3b6e0c3cb5e864450c86",
    chainKey: "polygon-testnet",
    eid: 10109
  },
  {
    name: "Stablelab",
    address: "0x7d43b7da9e85ced3f413abd3f996b40901d9c5de",
    chainKey: "polygon-testnet",
    eid: 40109
  },
  {
    name: "Google",
    address: "0x89d01aa6abf72facc05ef88c82e415b2e4024a0c",
    chainKey: "polygon-testnet",
    eid: 40109
  },
  {
    name: "Nethermind",
    address: "0xc460cecfcc7a69665ccd41ebf25dd2572c18f657",
    chainKey: "polygon-testnet",
    eid: 40109
  },
  {
    name: "Switchboard",
    address: "0x000f50aa91cb11b7be7e844e53d85065466a8d9a",
    chainKey: "polygon-testnet",
    eid: 40109
  },
  {
    name: "P2P",
    address: "0x8d2944b493dc0caa7d480d78bb0d3e44097cd164",
    chainKey: "polygon-testnet",
    eid: 40109
  },
  {
    name: "LayerZero",
    address: "0x67a822f55c5f6e439550b9c4ea39e406480a40f3",
    chainKey: "polygon-testnet",
    eid: 40109
  },
  {
    name: "Delegate",
    address: "0x74fbf0539e433fecb7d3fd760ac0e11480354ccd",
    chainKey: "polygon-testnet",
    eid: 40109
  },
  {
    name: "LZDeadDVN",
    address: "0x701f3927871efcea1235db722f9e608ae120d243",
    chainKey: "worldcoin-testnet",
    eid: 40335
  },
  {
    name: "LayerZero Labs",
    address: "0x55c175dd5b039331db251424538169d8495c18d1",
    chainKey: "worldcoin-testnet",
    eid: 40335
  },
  {
    name: "LZDeadDVN",
    address: "0x11ba0f5c3832044a416b2e177ea773ecebccee1f",
    chainKey: "bob-mainnet",
    eid: 30279
  },
  {
    name: "Horizen",
    address: "0xf2067660520f79eb7a8326dc1266dce0167d64e7",
    chainKey: "bob-mainnet",
    eid: 30279
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "bob-mainnet",
    eid: 30279
  },
  {
    name: "BWare",
    address: "0x58dff8622759ea75910a08dba5d060579271dcd7",
    chainKey: "bob-mainnet",
    eid: 30279
  },
  {
    name: "TSS",
    address: "0xbb2753c1b940363d278c81d6402fa89e79ab4ebc",
    chainKey: "bob-mainnet",
    eid: 279
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "bob-mainnet",
    eid: 30279
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "bob-testnet",
    eid: 40279
  },
  {
    name: "LayerZero Labs",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "lyra-mainnet",
    eid: 30311
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "lyra-mainnet",
    eid: 30311
  },
  {
    name: "LZDeadDVN",
    address: "0xce8358bc28dd8296ce8caf1cd2b44787abd65887",
    chainKey: "lyra-mainnet",
    eid: 30311
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "lyra-testnet",
    eid: 40308
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "lyra-testnet",
    eid: 40308
  },
  {
    name: "LZDeadDVN",
    address: "0x701f3927871efcea1235db722f9e608ae120d243",
    chainKey: "kevnet-testnet",
    eid: 40328
  },
  {
    name: "LayerZero Labs",
    address: "0x55c175dd5b039331db251424538169d8495c18d1",
    chainKey: "kevnet-testnet",
    eid: 40328
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "flow-mainnet",
    eid: 30336
  },
  {
    name: "Nethermind",
    address: "0x3c61aad6d402d867c653f603558f4b8f91abe952",
    chainKey: "flow-mainnet",
    eid: 30336
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "flow-mainnet",
    eid: 30336
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "flow-mainnet",
    eid: 30336
  },
  {
    name: "Stargate",
    address: "0xd1c70192cc0eb9a89e3d9032b9facab259a0a1e9",
    chainKey: "flow-mainnet",
    eid: 30336
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "flow-testnet",
    eid: 40351
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "flow-testnet",
    eid: 40351
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "bitlayer-mainnet",
    eid: 30314
  },
  {
    name: "Horizen",
    address: "0x95729ea44326f8add8a9b1d987279dbdc1dd3dff",
    chainKey: "bitlayer-mainnet",
    eid: 30314
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "bitlayer-mainnet",
    eid: 30314
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "bitlayer-mainnet",
    eid: 30314
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "bitlayer-testnet",
    eid: 40320
  },
  {
    name: "Nethermind",
    address: "0x743178c017952aa88d7f17c1676dcb81d308acb6",
    chainKey: "bitlayer-testnet",
    eid: 40320
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "bitlayer-testnet",
    eid: 40320
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "islander-mainnet",
    eid: 30330
  },
  {
    name: "Nethermind",
    address: "0x70bf42c69173d6e33b834f59630dac592c70b369",
    chainKey: "islander-mainnet",
    eid: 30330
  },
  {
    name: "Horizen",
    address: "0xca848bcb059e33adb260d793ee360924b6aa8e86",
    chainKey: "islander-mainnet",
    eid: 30330
  },
  {
    name: "Stargate",
    address: "0x9eeee79f5dbc4d99354b5cb547c138af432f937b",
    chainKey: "islander-mainnet",
    eid: 30330
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "islander-mainnet",
    eid: 30330
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "shimmer-mainnet",
    eid: 230
  },
  {
    name: "LayerZero Labs",
    address: "0x9bdf3ae7e2e3d211811e5e782a808ca0a75bf1fc",
    chainKey: "shimmer-mainnet",
    eid: 30230
  },
  {
    name: "Horizen",
    address: "0xa59ba433ac34d2927232918ef5b2eaafcf130ba5",
    chainKey: "shimmer-mainnet",
    eid: 30230
  },
  {
    name: "Nethermind",
    address: "0x5fddd320a1e29bb466fa635661b125d51d976f92",
    chainKey: "shimmer-mainnet",
    eid: 30230
  },
  {
    name: "BCW",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "shimmer-mainnet",
    eid: 30230
  },
  {
    name: "LZDeadDVN",
    address: "0x7d71242e93ed57455c017b92f980b01066e87d22",
    chainKey: "shimmer-mainnet",
    eid: 30230
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "shimmer-testnet",
    eid: 10230
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "frame-testnet",
    eid: 10222
  },
  {
    name: "BCW",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "canto-mainnet",
    eid: 30159
  },
  {
    name: "LayerZero Labs",
    address: "0x1bacc2205312534375c8d1801c27d28370656cff",
    chainKey: "canto-mainnet",
    eid: 30159
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "canto-mainnet",
    eid: 30159
  },
  {
    name: "TSS",
    address: "0x377530cda84dfb2673bf4d145dcf0c4d7fdcb5b6",
    chainKey: "canto-mainnet",
    eid: 159
  },
  {
    name: "Nethermind",
    address: "0x809cde2afcf8627312e87a6a7bbffab3f8f347c7",
    chainKey: "canto-mainnet",
    eid: 30159
  },
  {
    name: "LZDeadDVN",
    address: "0x8b84482bd8bdd718dea9b791ea76997ebb4f2d0e",
    chainKey: "canto-mainnet",
    eid: 30159
  },
  {
    name: "Omnicat",
    address: "0x25e0e650a78e6304a3983fc4b7ffc6544b1beea6",
    chainKey: "canto-mainnet",
    eid: 30159
  },
  {
    name: "TSS",
    address: "0x3acaaf60502791d199a5a5f0b173d78229ebfe32",
    chainKey: "canto-testnet",
    eid: 10159
  },
  {
    name: "LayerZero Labs",
    address: "0x032457e2c87376ad1d0ae8bbada45d178c9968b3",
    chainKey: "canto-testnet",
    eid: 40159
  },
  {
    name: "Stargate",
    address: "0xe900e073badafdc6f72541f34e6b701bde835487",
    chainKey: "ink-mainnet",
    eid: 30339
  },
  {
    name: "TSS",
    address: "0xf772581dcf3300914d6222c4e6fcf0ed5ef93142",
    chainKey: "ink-mainnet",
    eid: 339
  },
  {
    name: "LayerZero Labs",
    address: "0x174f2ba26f8adeafa82663bcf908288d5dbca649",
    chainKey: "ink-mainnet",
    eid: 30339
  },
  {
    name: "USDT0",
    address: "0xdf44a1594d3d516f7cdfb4dc275a79a5f6e3db1d",
    chainKey: "ink-mainnet",
    eid: 30339
  },
  {
    name: "LZDeadDVN",
    address: "0x5ba261d2b595966a81548b4fbe3851a6da9cf92c",
    chainKey: "ink-mainnet",
    eid: 30339
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "ink-mainnet",
    eid: 30339
  },
  {
    name: "Horizen",
    address: "0x395b14700812cccc38b8e64f0a06ce2045fe9ba3",
    chainKey: "ink-mainnet",
    eid: 30339
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "ink-testnet",
    eid: 40358
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "ink-testnet",
    eid: 40358
  },
  {
    name: "LayerZero Labs",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "joc-mainnet",
    eid: 30285
  },
  {
    name: "Stakingcabin",
    address: "0x34730f2570e6cff8b1c91faabf37d0dd917c4367",
    chainKey: "joc-mainnet",
    eid: 30285
  },
  {
    name: "Horizen",
    address: "0xfb02364e3f5e97d8327dc6e4326e93828a28657d",
    chainKey: "joc-mainnet",
    eid: 30285
  },
  {
    name: "LZDeadDVN",
    address: "0xcc2d3d4b88b87775bec386d92f6951ee7f8d52d9",
    chainKey: "joc-mainnet",
    eid: 30285
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "joc-testnet",
    eid: 10242
  },
  {
    name: "LayerZero Labs",
    address: "0x9db9ca3305b48f196d18082e91cb64663b13d014",
    chainKey: "joc-testnet",
    eid: 40242
  },
  {
    name: "Japan Blockchain Foundation",
    address: "0x3d4d36a92a597faec770678c1de305d50a7c4307",
    chainKey: "joc-testnet",
    eid: 40242
  },
  {
    name: "TSS",
    address: "0xa6bf2be6c60175601bf88217c75dd4b14abb5fbb",
    chainKey: "coredao-mainnet",
    eid: 153
  },
  {
    name: "Nethermind",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "coredao-mainnet",
    eid: 30153
  },
  {
    name: "Stargate",
    address: "0xe6cd8c2e46ef396df88048449e5b1c75172b40c3",
    chainKey: "coredao-mainnet",
    eid: 30153
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "coredao-mainnet",
    eid: 30153
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "coredao-mainnet",
    eid: 153
  },
  {
    name: "LayerZero Labs",
    address: "0x3c5575898f59c097681d1fc239c2c6ad36b7b41c",
    chainKey: "coredao-mainnet",
    eid: 30153
  },
  {
    name: "BCW",
    address: "0x7a7ddc46882220a075934f40380d3a7e1e87d409",
    chainKey: "coredao-mainnet",
    eid: 30153
  },
  {
    name: "LZDeadDVN",
    address: "0xb872d80dd876fb59085872fb99b1ade3dbef5390",
    chainKey: "coredao-mainnet",
    eid: 30153
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "coredao-mainnet",
    eid: 30153
  },
  {
    name: "Nethermind",
    address: "0x4bb65bdb2c5d9bbaf25574a882c12fd98f5f994a",
    chainKey: "coredao-testnet",
    eid: 40153
  },
  {
    name: "TSS",
    address: "0xb0487596a0b62d1a71d0c33294bd6eb635fc6b09",
    chainKey: "coredao-testnet",
    eid: 10153
  },
  {
    name: "LayerZero Labs",
    address: "0xae9bbf877bf1bd41edd5dfc3473d263171cf3b9e",
    chainKey: "coredao-testnet",
    eid: 40153
  },
  {
    name: "LZDeadDVN",
    address: "0xf6268056ce73e997450f42aa79de88103cfefd09",
    chainKey: "otherworld-testnet",
    eid: 40337
  },
  {
    name: "LayerZero",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "otherworld-testnet",
    eid: 40337
  },
  {
    name: "LayerZero Labs",
    address: "0xb099d5a9652a80ff8f4234bde00f66531aa91c50",
    chainKey: "otherworld-testnet",
    eid: 40337
  },
  {
    name: "Canary",
    address: "0xe5bffd46776251b70895517d4ab635a640da61e9",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "TSS",
    address: "0xa0cc33dd6f4819d473226257792afe230ec3c67f",
    chainKey: "fantom-mainnet",
    eid: 112
  },
  {
    name: "LayerZero Labs",
    address: "0xe60a3959ca23a92bf5aaf992ef837ca7f828628a",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Paxos",
    address: "0x1cf63a377a66006cb9317920e07f8768bd74309b",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Restake",
    address: "0x4d52f5bc932cf1a854381a85ad9ed79b8497c153",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Blockhunters",
    address: "0x547bf6889b1095b7cc6e525a1f8e8fdb26134a38",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Delegate",
    address: "0x9eeee79f5dbc4d99354b5cb547c138af432f937b",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Chainlink",
    address: "0x150a58e9e6bf69cceb1dba5ae97c166dc8792539",
    chainKey: "fantom-mainnet",
    eid: 112
  },
  {
    name: "Planetarium",
    address: "0xf7ddee427507cdb6885e53caaaa1973b1fe29357",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "P2P",
    address: "0x439264fb87581a70bb6d7befd16b636521b0ad2d",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Google",
    address: "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Omnix",
    address: "0xe0f0fbbdbf9d398eca0dd8c86d1f308d895b9eb7",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Nethermind",
    address: "0x31f748a368a893bdb5abb67ec95f232507601a73",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Bitgo",
    address: "0x3b247f1b48f055ebf2db593672b98c9597e3081e",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "fantom-mainnet",
    eid: 112
  },
  {
    name: "Bitgo",
    address: "0xdf44a1594d3d516f7cdfb4dc275a79a5f6e3db1d",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Nodesguru",
    address: "0x05aaefdf9db6e0f7d27fa3b6ee099edb33da029e",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Zenrock",
    address: "0xae675d8a97a06dea4e74253d429bd324606ded24",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Luganodes",
    address: "0xa6f5ddbf0bd4d03334523465439d301080574742",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Horizen",
    address: "0x25e0e650a78e6304a3983fc4b7ffc6544b1beea6",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Stakingcabin",
    address: "0x2b8cbea81315130a4c422e875063362640ddfeb0",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "BWare",
    address: "0x247624e2143504730aec22912ed41f092498bef2",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "LZDeadDVN",
    address: "0xdd8d6cc54fdb9ec81cb8efb8988ee17abb8eecd1",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "ABDB",
    address: "0x313328609a9c38459cae56625fff7f2ad6dcde3b",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "01node",
    address: "0x8fc629aa400d4d9c0b118f2685a49316552abf27",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Shrapnel",
    address: "0xb4fa7f1c67e5ec99b556ec92cbddbcdd384106f2",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "POPS",
    address: "0x78203678d264063815dac114ea810e9837cd80f7",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Gitcoin",
    address: "0x2afa3787cd95fee5d5753cd717ef228eb259f4ea",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Flowdesk",
    address: "0x4c4552785d09a422231a1fb3da02b49a3e99426c",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Stakingcabin",
    address: "0x193204535913df3a3b350fcd2e1c97d047abb409",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Stablelab",
    address: "0xabc9b1819cc4d9846550f928b985993cf6240439",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Superduper",
    address: "0xbd40c9047980500c46b8aed4462e2f889299febe",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Superform",
    address: "0x2edfe0220a74d9609c79711a65e3a2f2a85dc83b",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "MIM",
    address: "0x1bab20e7fdc79257729cb596bef85db76c44915e",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Switchboard",
    address: "0xf0809f6e760a5452ee567975eda7a28da4a83d38",
    chainKey: "fantom-mainnet",
    eid: 30112
  },
  {
    name: "Google",
    address: "0xbdb61339dc1cd02982ab459fa46f858decf3cec6",
    chainKey: "fantom-testnet",
    eid: 40112
  },
  {
    name: "P2P",
    address: "0xf10955530720932660589259dabc44c964d88869",
    chainKey: "fantom-testnet",
    eid: 40112
  },
  {
    name: "Bitgo",
    address: "0xbac63154331081539dbabb595c21c47879f425e4",
    chainKey: "fantom-testnet",
    eid: 40112
  },
  {
    name: "TSS",
    address: "0x9b743b9846230b657546fb942c6b11a23cfecd9a",
    chainKey: "fantom-testnet",
    eid: 10112
  },
  {
    name: "Bitgo",
    address: "0xd83401cd9e9ec8c81e4bf247b0bce1b85c2ec2b6",
    chainKey: "fantom-testnet",
    eid: 40112
  },
  {
    name: "LayerZero Labs",
    address: "0xfffc92a6abe6480adc574901ebfde108a7077eb8",
    chainKey: "fantom-testnet",
    eid: 40112
  },
  {
    name: "Switchboard",
    address: "0xfd53de8f107538c28148f0bcdf1fb1f1dfd5461b",
    chainKey: "fantom-testnet",
    eid: 40112
  },
  {
    name: "Stablelab",
    address: "0x134dc38ae8c853d1aa2103d5047591acdaa16682",
    chainKey: "fantom-testnet",
    eid: 40112
  },
  {
    name: "BWare",
    address: "0x312f5c396cf78a80f6fac979b55a4ddde44031f0",
    chainKey: "fantom-testnet",
    eid: 40112
  },
  {
    name: "Nethermind",
    address: "0x39ed64e4e063d22f69fb09d5a84ed6582aff120f",
    chainKey: "fantom-testnet",
    eid: 40112
  },
  {
    name: "Gitcoin",
    address: "0x97f671e60196ff62279dd06c393948f5b0b90c05",
    chainKey: "fantom-testnet",
    eid: 40112
  },
  {
    name: "Delegate",
    address: "0x427859dcf157e29fda324c2cd90b17fa33d0e300",
    chainKey: "fantom-testnet",
    eid: 40112
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "camp-testnet",
    eid: 40295
  },
  {
    name: "Stakingcabin",
    address: "0x1253ca32712171b5d28115a1346f2b22bb9a41d5",
    chainKey: "sanko-mainnet",
    eid: 30278
  },
  {
    name: "Horizen",
    address: "0x5fddd320a1e29bb466fa635661b125d51d976f92",
    chainKey: "sanko-mainnet",
    eid: 30278
  },
  {
    name: "Omnix",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "sanko-mainnet",
    eid: 30278
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "sanko-mainnet",
    eid: 30278
  },
  {
    name: "TSS",
    address: "0xbb2753c1b940363d278c81d6402fa89e79ab4ebc",
    chainKey: "sanko-mainnet",
    eid: 278
  },
  {
    name: "LZDeadDVN",
    address: "0x10ac9b7eb034fab1f3bc446e81479d7dc089be83",
    chainKey: "sanko-mainnet",
    eid: 30278
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "sanko-testnet",
    eid: 40278
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "bl3-testnet",
    eid: 40346
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "bl3-testnet",
    eid: 40346
  },
  {
    name: "Bitgo",
    address: "0x938b28dc069a7b0880f4749655cb3c727c07a442",
    chainKey: "optsep-testnet",
    eid: 40232
  },
  {
    name: "TSS",
    address: "0x45841dd1ca50265da7614fc43a361e526c0e6160",
    chainKey: "optsep-testnet",
    eid: 10232
  },
  {
    name: "Bitgo",
    address: "0x4fe728b39d5e19ff3a9702c5e156bbc6cd8c6021",
    chainKey: "optsep-testnet",
    eid: 40232
  },
  {
    name: "Nethermind",
    address: "0x2d15d4e61558480a9300632772e68d8b5e7cc7e5",
    chainKey: "optsep-testnet",
    eid: 40232
  },
  {
    name: "LayerZero Labs",
    address: "0xd680ec569f269aa7015f7979b4f1239b5aa4582c",
    chainKey: "optsep-testnet",
    eid: 40232
  },
  {
    name: "BWare",
    address: "0x3e9d8fa8067938f2a62baa7114eed183040824ab",
    chainKey: "optsep-testnet",
    eid: 40232
  },
  {
    name: "LayerZero Labs",
    address: "4VDjp6XQaxoZf5RGwiPU9NR1EXSZn2TP4ATMmiSzLfhb",
    chainKey: "solana-mainnet",
    eid: 30168
  },
  {
    name: "Nethermind",
    address: "GPjyWr8vCotGuFubDpTxDxy9Vj1ZeEN4F2dwRmFiaGab",
    chainKey: "solana-mainnet",
    eid: 30168
  },
  {
    name: "Paxos",
    address: "4HxXbLv37XrivKukEbofybpHr7C8HUGJzd4B5T9USpGh",
    chainKey: "solana-mainnet",
    eid: 30168
  },
  {
    name: "Horizen",
    address: "HR9NQKK1ynW9NzgdM37dU5CBtqRHTukmbMKS7qkwSkHX",
    chainKey: "solana-mainnet",
    eid: 30168
  },
  {
    name: "Google",
    address: "F7gu9kLcpn4bSTZn183mhn2RXUuMy7zckdxJZdUjuALw",
    chainKey: "solana-mainnet",
    eid: 30168
  },
  {
    name: "LayerZero Labs",
    address: "4VDjp6XQaxoZf5RGwiPU9NR1EXSZn2TP4ATMmiSzLfhb",
    chainKey: "solana-sandbox",
    eid: 50168
  },
  {
    name: "LayerZero Labs",
    address: "4VDjp6XQaxoZf5RGwiPU9NR1EXSZn2TP4ATMmiSzLfhb",
    chainKey: "solana-testnet",
    eid: 40168
  },
  {
    name: "Paxos",
    address: "4HxXbLv37XrivKukEbofybpHr7C8HUGJzd4B5T9USpGh",
    chainKey: "solana-testnet",
    eid: 40168
  },
  {
    name: "LZDeadDVN",
    address: "0x701f3927871efcea1235db722f9e608ae120d243",
    chainKey: "ozean-testnet",
    eid: 40323
  },
  {
    name: "LayerZero Labs",
    address: "0x55c175dd5b039331db251424538169d8495c18d1",
    chainKey: "ozean-testnet",
    eid: 40323
  },
  {
    name: "TSS",
    address: "0x45841dd1ca50265da7614fc43a361e526c0e6160",
    chainKey: "idex-testnet",
    eid: 10219
  },
  {
    name: "BCW",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "telos-mainnet",
    eid: 30199
  },
  {
    name: "Stargate",
    address: "0xa80aa110f05c9c6140018aae0c4e08a70f43350d",
    chainKey: "telos-mainnet",
    eid: 30199
  },
  {
    name: "LZDeadDVN",
    address: "0x1de78bed411ad03e7f9b4c591d9c80499287cb04",
    chainKey: "telos-mainnet",
    eid: 30199
  },
  {
    name: "Bitgo",
    address: "0x2a22804cfa992d5cb1324863ec4ada920256b908",
    chainKey: "telos-mainnet",
    eid: 30199
  },
  {
    name: "TSS",
    address: "0x4514fc667a944752ee8a29f544c1b20b1a315f25",
    chainKey: "telos-mainnet",
    eid: 199
  },
  {
    name: "LayerZero Labs",
    address: "0x3c5575898f59c097681d1fc239c2c6ad36b7b41c",
    chainKey: "telos-mainnet",
    eid: 30199
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "telos-mainnet",
    eid: 30199
  },
  {
    name: "Nethermind",
    address: "0x809cde2afcf8627312e87a6a7bbffab3f8f347c7",
    chainKey: "telos-mainnet",
    eid: 30199
  },
  {
    name: "Bitgo",
    address: "0x31b8c7cd7226ea79e833fabdccbca0fa38d6e0a1",
    chainKey: "telos-mainnet",
    eid: 30199
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "telos-testnet",
    eid: 10199
  },
  {
    name: "LayerZero Labs",
    address: "0x5b11f3833393e9be06fa702c68453ad31976866e",
    chainKey: "telos-testnet",
    eid: 40199
  },
  {
    name: "Bitgo",
    address: "0xfd657d625f929e7caec08add967ead23423f3391",
    chainKey: "telos-testnet",
    eid: 40199
  },
  {
    name: "LayerZero Labs",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "masa-mainnet",
    eid: 30263
  },
  {
    name: "Nethermind",
    address: "0x77d94a239dca4b8a92a45dd68ec3e31515a807c0",
    chainKey: "masa-mainnet",
    eid: 30263
  },
  {
    name: "Horizen",
    address: "0xacde1f22eeab249d3ca6ba8805c8fee9f52a16e7",
    chainKey: "masa-mainnet",
    eid: 30263
  },
  {
    name: "LZDeadDVN",
    address: "0x178f93794328c04988bcd52a1b820ec105b17f2f",
    chainKey: "masa-mainnet",
    eid: 30263
  },
  {
    name: "TSS",
    address: "0xf665989b02709006448dd7ebd20b6ed25f0828c5",
    chainKey: "masa-mainnet",
    eid: 263
  },
  {
    name: "LayerZero Labs",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "masa-testnet",
    eid: 40263
  },
  {
    name: "Nethermind",
    address: "0xaa3099f91912e07976c2dd1598dc740d81bd3fea",
    chainKey: "glue-mainnet",
    eid: 30342
  },
  {
    name: "LZDeadDVN",
    address: "0xc097ab8cd7b053326dfe9fb3e3a31a0cce3b526f",
    chainKey: "glue-mainnet",
    eid: 30342
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "glue-mainnet",
    eid: 30342
  },
  {
    name: "LayerZero Labs",
    address: "0xce8358bc28dd8296ce8caf1cd2b44787abd65887",
    chainKey: "glue-mainnet",
    eid: 30342
  },
  {
    name: "Stargate",
    address: "0xd1c70192cc0eb9a89e3d9032b9facab259a0a1e9",
    chainKey: "glue-mainnet",
    eid: 30342
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "glue-testnet",
    eid: 40296
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "reya-mainnet",
    eid: 30313
  },
  {
    name: "Horizen",
    address: "0x6c5f923b63fdd52fb9c45daefa8695fa6b55a935",
    chainKey: "reya-mainnet",
    eid: 30313
  },
  {
    name: "TSS",
    address: "0x4b80f7d25c451d204b1c93d9bdf2ab3b04f3ea4a",
    chainKey: "reya-mainnet",
    eid: 313
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "reya-mainnet",
    eid: 30313
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "reya-testnet",
    eid: 40319
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "reya-testnet",
    eid: 40319
  },
  {
    name: "Horizen",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "scroll-mainnet",
    eid: 30214
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "scroll-mainnet",
    eid: 214
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "scroll-mainnet",
    eid: 30214
  },
  {
    name: "POPS",
    address: "0x34730f2570e6cff8b1c91faabf37d0dd917c4367",
    chainKey: "scroll-mainnet",
    eid: 30214
  },
  {
    name: "Nethermind",
    address: "0x446755349101cb20c582c224462c3912d3584dce",
    chainKey: "scroll-mainnet",
    eid: 30214
  },
  {
    name: "Stargate",
    address: "0xb87591d8b0b93fae8b631a073577c40e8dd46a62",
    chainKey: "scroll-mainnet",
    eid: 30214
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "scroll-mainnet",
    eid: 214
  },
  {
    name: "LZDeadDVN",
    address: "0xdb238d5196328b5623612c235062427f2f6792c0",
    chainKey: "scroll-mainnet",
    eid: 30214
  },
  {
    name: "BCW",
    address: "0x7a7ddc46882220a075934f40380d3a7e1e87d409",
    chainKey: "scroll-mainnet",
    eid: 30214
  },
  {
    name: "Axelar",
    address: "0x70cedf51c199fad12c6c0a71cd876af948059540",
    chainKey: "scroll-mainnet",
    eid: 30214
  },
  {
    name: "BWare",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "scroll-mainnet",
    eid: 30214
  },
  {
    name: "Zenrock",
    address: "0x05aaefdf9db6e0f7d27fa3b6ee099edb33da029e",
    chainKey: "scroll-mainnet",
    eid: 30214
  },
  {
    name: "LayerZero Labs",
    address: "0xbe0d08a85eebfcc6eda0a843521f7cbb1180d2e2",
    chainKey: "scroll-mainnet",
    eid: 30214
  },
  {
    name: "TSS",
    address: "0x145c041566b21bec558b2a37f1a5ff261ab55998",
    chainKey: "scroll-testnet",
    eid: 10214
  },
  {
    name: "LayerZero Labs",
    address: "0xb186f85d0604fe58af2ea33fe40244f5eef7351b",
    chainKey: "scroll-testnet",
    eid: 40170
  },
  {
    name: "BWare",
    address: "0xca01daa8e559cb6a810ce7906ec2aea39bdecce4",
    chainKey: "scroll-testnet",
    eid: 40170
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "plume-mainnet",
    eid: 30318
  },
  {
    name: "Horizen",
    address: "0xd841a741addcb6dea735d3b8c9faf96ba3f3d30d",
    chainKey: "plume-mainnet",
    eid: 30318
  },
  {
    name: "Ondo",
    address: "0x54dd79f5ce72b51fcbbcb170dd01e32034323565",
    chainKey: "plume-mainnet",
    eid: 30318
  },
  {
    name: "Ondo Staging",
    address: "0xcbfb74e751052404dcdab09494e5a502f9be0438",
    chainKey: "plume-mainnet",
    eid: 30318
  },
  {
    name: "Nethermind",
    address: "0x07c05eab7716acb6f83ebf6268f8eecda8892ba1",
    chainKey: "plume-mainnet",
    eid: 30318
  },
  {
    name: "TSS",
    address: "0xe2e3a0d9a869dda2a98fcba032725cdae85436df",
    chainKey: "plume-mainnet",
    eid: 318
  },
  {
    name: "Stargate",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "plume-mainnet",
    eid: 30318
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "plume-mainnet",
    eid: 30318
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "plume-testnet",
    eid: 40304
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "plume-testnet",
    eid: 40304
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "botanix-testnet",
    eid: 40281
  },
  {
    name: "Bitgo",
    address: "0x3ed2211f49ce343d70cb8ded927ca6c4a6198101",
    chainKey: "amoy-testnet",
    eid: 40267
  },
  {
    name: "IntellectEU",
    address: "0xdd1da938b19614d6db8c3973c89908df234ad1ce",
    chainKey: "amoy-testnet",
    eid: 40267
  },
  {
    name: "Blockdaemon",
    address: "0xe67ef84173d024603a844c4aea6a3a15ccccc32c",
    chainKey: "amoy-testnet",
    eid: 40267
  },
  {
    name: "Japan Blockchain Foundation",
    address: "0xd44e25bea2bedcceceb7e104d5843a55d208e8a9",
    chainKey: "amoy-testnet",
    eid: 40267
  },
  {
    name: "Bitgo",
    address: "0x02feab4e6ca6eebd60d85347762de70ca9ce162a",
    chainKey: "amoy-testnet",
    eid: 40267
  },
  {
    name: "Republic",
    address: "0x35cea726508192472919c51951042dd140794b01",
    chainKey: "amoy-testnet",
    eid: 40267
  },
  {
    name: "LayerZero Labs",
    address: "0x55c175dd5b039331db251424538169d8495c18d1",
    chainKey: "amoy-testnet",
    eid: 40267
  },
  {
    name: "LZDeadDVN",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "bl4-mainnet",
    eid: 30337
  },
  {
    name: "Nethermind",
    address: "0x07653d28b0f53d4c54b70eb1f9025795b23a9d6e",
    chainKey: "ape-mainnet",
    eid: 30312
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "ape-mainnet",
    eid: 30312
  },
  {
    name: "LayerZero Labs",
    address: "0x965a80dc87cec5848310e612dead84b543aef874",
    chainKey: "ape-mainnet",
    eid: 30312
  },
  {
    name: "Nethermind",
    address: "0xb2e6e01a5bef9bf25f00105dc7e47542f750de68",
    chainKey: "ape-mainnet",
    eid: 30312
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "ape-mainnet",
    eid: 30312
  },
  {
    name: "TSS",
    address: "0xa2eb037ee6aaba1547fca8804392eb8ef9c33976",
    chainKey: "ape-mainnet",
    eid: 312
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "ape-mainnet",
    eid: 30312
  },
  {
    name: "LayerZero Labs",
    address: "0x12523de19dc41c91f7d2093e0cfbb76b17012c8d",
    chainKey: "zkastar-testnet",
    eid: 40266
  },
  {
    name: "Zenrock",
    address: "0x1383981c78393b36f59c4f8f4f12f1b4eb249ebf",
    chainKey: "celo-mainnet",
    eid: 30125
  },
  {
    name: "LayerZero Labs",
    address: "0x75b073994560a5c03cd970414d9170be0c6e5c36",
    chainKey: "celo-mainnet",
    eid: 30125
  },
  {
    name: "Horizen",
    address: "0x31f748a368a893bdb5abb67ec95f232507601a73",
    chainKey: "celo-mainnet",
    eid: 30125
  },
  {
    name: "LZDeadDVN",
    address: "0xc67f8f84d00a4908581b235f1abe0fe3afc8126f",
    chainKey: "celo-mainnet",
    eid: 30125
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "celo-mainnet",
    eid: 30125
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "celo-mainnet",
    eid: 125
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "celo-mainnet",
    eid: 30125
  },
  {
    name: "TSS",
    address: "0x071c3f1bc3046c693c3abbc03a87ca9a30e43be2",
    chainKey: "celo-mainnet",
    eid: 125
  },
  {
    name: "Google",
    address: "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
    chainKey: "celo-mainnet",
    eid: 30125
  },
  {
    name: "Nethermind",
    address: "0x449391d6812bce0b0b86d32d752035ff5be3f159",
    chainKey: "celo-testnet",
    eid: 40125
  },
  {
    name: "TSS",
    address: "0x894a918a9c2bfa6d32874e40ef4bba75b820b17c",
    chainKey: "celo-testnet",
    eid: 10125
  },
  {
    name: "LayerZero Labs",
    address: "0xbef132bc69c87f52d173d093a3f8b5b98842275f",
    chainKey: "celo-testnet",
    eid: 40125
  },
  {
    name: "Republic",
    address: "0xa1bc1b9af01a0ec78883aa5dc7decdce897e1e76",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Shrapnel",
    address: "0xce97511db880571a7c31821eb026ef12fcac892e",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Nocturnal",
    address: "0x7c42f598d22e8711998bac7c3360a7b3a514863d",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Gitcoin",
    address: "0x38179d3bfa6ef1d69a8a7b0b671ba3d8836b2ae8",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Stakingcabin",
    address: "0xdeb742e71d57603d8f769ce36f4353468007fc02",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Chainlink",
    address: "0x150a58e9e6bf69cceb1dba5ae97c166dc8792539",
    chainKey: "ethereum-mainnet",
    eid: 101
  },
  {
    name: "AltLayer",
    address: "0x1e129c36bc3afc3f0d46a42c9d9cab7586bda94c",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "LZDeadDVN",
    address: "0x747c741496a507e4b404b50463e691a8d692f6ac",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Google",
    address: "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Paxos",
    address: "0xb0b2ef168f52f6d1e42f461e11117295ef992daf",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Stablelab",
    address: "0x5fddd320a1e29bb466fa635661b125d51d976f92",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Restake",
    address: "0xe4193136b92ba91402313e95347c8e9fad8d27d0",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Nethermind",
    address: "0xf4064220871e3b94ca6ab3b0cee8e29178bf47de",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Mantle02",
    address: "0x4d45727d2de5ffc811e6a161c3a7233a2ea2e0e7",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Bitgo",
    address: "0x05d78174b97cf2ec223ee578cd1f401ff792ca31",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "ethereum-mainnet",
    eid: 101
  },
  {
    name: "MIM",
    address: "0x0ae4e6a9a8b01ee22c6a49af22b674a4e033a23d",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Lagrange",
    address: "0x95729ea44326f8add8a9b1d987279dbdc1dd3dff",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Mantle01",
    address: "0x7cc59b5062a8291804a21a2a793c6ce9ea2f0eb9",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "01node",
    address: "0x58dff8622759ea75910a08dba5d060579271dcd7",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "USDT0",
    address: "0x3b0531eb02ab4ad72e7a531180beef9493a00dd2",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Planetarium",
    address: "0x972ed7bd3d42d9c0bea3632992ebf7e97186ea4a",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "FBTC",
    address: "0x45c09dc691b0ad798e10d38b97e9dfd917d4b680",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "POPS",
    address: "0x94aafe0a92a8300f0a2100a7f3de47d6845747a9",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Luganodes",
    address: "0x58249a2ec05c1978bf21df1f5ec1847e42455cf4",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Mantle03",
    address: "0x554833698ae0fb22ecc90b01222903fd62ca4b47",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "P2P",
    address: "0x06559ee34d85a88317bf0bfe307444116c631b67",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Ondo Staging",
    address: "0xf34d1b07c64c4f4d492ae3ddd0aab0658a2975eb",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Stargate",
    address: "0x8fafae7dd957044088b3d0f67359c327c6200d18",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Canary",
    address: "0xa4fe5a5b9a846458a70cd0748228aed3bf65c2cd",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Omnicat",
    address: "0xf10ea2c0d43bc4973cfbcc94ebafc39d1d4af118",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Mantle02",
    address: "0xdd907f5af01a829cd65c99a132e8720d3e990d02",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Axelar",
    address: "0xce5b47fa5139fc5f3c8c5f4c278ad5f56a7b2016",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Blockhunters",
    address: "0x6e70fcdc42d3d63748b7d8883399dcb16bbb5c8c",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Flowdesk",
    address: "0x2fdbb1e2419e13a7e043d07eaf412934b73ad7a8",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Bitgo",
    address: "0xc9ca319f6da263910fd9b037ec3d817a814ef3d8",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Ubisoft",
    address: "0xcc9da5b157ed87e24a9cf562e6a7c05d3c3decd3",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Delegate",
    address: "0x87048402c32632b7c4d0a892d82bc1160e8b2393",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "BCW",
    address: "0xe552485d02edd3067fe7fcbd4dd56bb1d3a998d2",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Ondo",
    address: "0x241c66a979125f230c239e79d103e0c2128c6618",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Nethermind",
    address: "0xa59ba433ac34d2927232918ef5b2eaafcf130ba5",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "BCW",
    address: "0x3a283ed6bcce8d9dfb673fbfba6e644c9d02e9ab",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Stakingcabin",
    address: "0xcd0ca0619fc8db4d47b19a1f04105312952e5f6d",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Omnix",
    address: "0xaf75bfd402f3d4ee84978179a6c87d16c4bd1724",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Tapioca",
    address: "0xd24972c11f91c1bb9eaee97ec96bb9c33cf7af24",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Nodesguru",
    address: "0x9f45834f0c8042e36935781b944443e906886a87",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "LayerZero Labs",
    address: "0x589dedbd617e0cbcb916a9223f4d1300c294236b",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "BWare",
    address: "0x7a23612f07d81f16b26cf0b5a4c3eca0e8668df2",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Zenrock",
    address: "0xd42306df1a805d8053bc652ce0cd9f62bde80146",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Switchboard",
    address: "0x276e6b1138d2d49c0cda86658765d12ef84550c1",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "ABDB",
    address: "0x864b42dddc43a610e7506c163048c087f0b406ef",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Superduper",
    address: "0x92ef4381a03372985985e70fb15e9f081e2e8d14",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Superform",
    address: "0x7518f30bd5867b5fa86702556245dead173afe46",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "Horizen",
    address: "0x380275805876ff19055ea900cdb2b46a94ecf20d",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "ABDB",
    address: "0x7e65bdd15c8db8995f80abf0d6593b57dc8be437",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "TSS",
    address: "0x5a54fe5234e811466d5366846283323c954310b2",
    chainKey: "ethereum-mainnet",
    eid: 101
  },
  {
    name: "LayerZero Labs",
    address: "0xdb979d0a36af0525afa60fc265b1525505c55d79",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "CCIP",
    address: "0x771d10d0c86e26ea8d3b778ad4d31b30533b9cbf",
    chainKey: "ethereum-mainnet",
    eid: 30101
  },
  {
    name: "LayerZero Labs",
    address: "0x10aeafac83d48e2f9ac4baaf94311c45face1404",
    chainKey: "ethereum-sandbox",
    eid: 50121
  },
  {
    name: "TSS",
    address: "0xa6bf2be6c60175601bf88217c75dd4b14abb5fbb",
    chainKey: "ethereum-testnet",
    eid: 154
  },
  {
    name: "Polyhedra",
    address: "0x2ddf08e397541721acd82e5b8a1d0775454a180b",
    chainKey: "ethereum-testnet",
    eid: 30154
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "bl2-testnet",
    eid: 40331
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "bl2-testnet",
    eid: 40331
  },
  {
    name: "Stakingcabin",
    address: "0x93d2d7aadc9f2cf5ebc88e9703e06db09b8fd85b",
    chainKey: "sei-mainnet",
    eid: 30280
  },
  {
    name: "Horizen",
    address: "0x87048402c32632b7c4d0a892d82bc1160e8b2393",
    chainKey: "sei-mainnet",
    eid: 30280
  },
  {
    name: "TSS",
    address: "0xd5c9dfde96aa0731b3224f8bacf00cd456188542",
    chainKey: "sei-mainnet",
    eid: 280
  },
  {
    name: "Stargate",
    address: "0xbd00c87850416db0995ef8030b104f875e1bdd15",
    chainKey: "sei-mainnet",
    eid: 30280
  },
  {
    name: "Bitgo",
    address: "0xe40d78243074711e21ca5290ee190062bdce09b5",
    chainKey: "sei-mainnet",
    eid: 30280
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "sei-mainnet",
    eid: 280
  },
  {
    name: "LZDeadDVN",
    address: "0xf772581dcf3300914d6222c4e6fcf0ed5ef93142",
    chainKey: "sei-mainnet",
    eid: 30280
  },
  {
    name: "BCW",
    address: "0x1feb08b1a53a9710afce82d380b8c2833c69a37e",
    chainKey: "sei-mainnet",
    eid: 30280
  },
  {
    name: "Bitgo",
    address: "0x26cd5abadf7ec3f0f02b48314bfca6b2342cddd4",
    chainKey: "sei-mainnet",
    eid: 30280
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "sei-mainnet",
    eid: 30280
  },
  {
    name: "Nethermind",
    address: "0xd24972c11f91c1bb9eaee97ec96bb9c33cf7af24",
    chainKey: "sei-mainnet",
    eid: 30280
  },
  {
    name: "Bitgo",
    address: "0xb99ea5d9b28ac78d3293afc75248e7f6225c93f9",
    chainKey: "sei-testnet",
    eid: 40258
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "sei-testnet",
    eid: 40258
  },
  {
    name: "BCW",
    address: "0x97841d4ab18e9a923322a002d5b8eb42b31ccdb5",
    chainKey: "hedera-mainnet",
    eid: 30316
  },
  {
    name: "LZDeadDVN",
    address: "0xc097ab8cd7b053326dfe9fb3e3a31a0cce3b526f",
    chainKey: "hedera-mainnet",
    eid: 30316
  },
  {
    name: "LayerZero Labs",
    address: "0xce8358bc28dd8296ce8caf1cd2b44787abd65887",
    chainKey: "hedera-mainnet",
    eid: 30316
  },
  {
    name: "Horizen",
    address: "0xd0f50363e1ae33feac8e0e067e42d0070c394525",
    chainKey: "hedera-mainnet",
    eid: 30316
  },
  {
    name: "LayerZero Labs",
    address: "0xec7ee1f9e9060e08df969dc08ee72674afd5e14d",
    chainKey: "hedera-testnet",
    eid: 40285
  },
  {
    name: "Nethermind",
    address: "0xabc9b1819cc4d9846550f928b985993cf6240439",
    chainKey: "merlin-mainnet",
    eid: 30266
  },
  {
    name: "TSS",
    address: "0x41bdb4aa4a63a5b2efc531858d3118392b1a1c3d",
    chainKey: "merlin-mainnet",
    eid: 266
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "merlin-mainnet",
    eid: 30266
  },
  {
    name: "LZDeadDVN",
    address: "0x5ee3cb252978c2a51671e6aad109491e62f04d8f",
    chainKey: "merlin-mainnet",
    eid: 30266
  },
  {
    name: "Horizen",
    address: "0x439264fb87581a70bb6d7befd16b636521b0ad2d",
    chainKey: "merlin-mainnet",
    eid: 30266
  },
  {
    name: "Stakingcabin",
    address: "0xfd4ad9cdbd06fd4d8ca521307bf63a20239208ef",
    chainKey: "merlin-mainnet",
    eid: 30266
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "merlin-mainnet",
    eid: 30266
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "merlin-testnet",
    eid: 40264
  },
  {
    name: "Nethermind",
    address: "0x3bd9af5aa8c33b1e71c94cae7c009c36413e08fd",
    chainKey: "merlin-testnet",
    eid: 40264
  },
  {
    name: "LayerZero Labs",
    address: "0x282b3386571f7f794450d5789911a9804fa346b4",
    chainKey: "bahamut-mainnet",
    eid: 30363
  },
  {
    name: "LZDeadDVN",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "bahamut-mainnet",
    eid: 30363
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "bahamut-testnet",
    eid: 40347
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "bahamut-testnet",
    eid: 40347
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "bahamut-testnet",
    eid: 40347
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "xdc-mainnet",
    eid: 30365
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "xdc-mainnet",
    eid: 30365
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "worldchain-mainnet",
    eid: 30319
  },
  {
    name: "Horizen",
    address: "0x95729ea44326f8add8a9b1d987279dbdc1dd3dff",
    chainKey: "worldchain-mainnet",
    eid: 30319
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "worldchain-mainnet",
    eid: 30319
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "worldchain-mainnet",
    eid: 30319
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "mp1-mainnet",
    eid: 30331
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "mp1-mainnet",
    eid: 30331
  },
  {
    name: "Nethermind",
    address: "0xe33de1a8cf9bcdc6b509c44eef66f47c65da6d47",
    chainKey: "mp1-mainnet",
    eid: 30331
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "mp1-mainnet",
    eid: 30331
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "mp1-testnet",
    eid: 40345
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "mp1-testnet",
    eid: 40345
  },
  {
    name: "LayerZero Labs",
    address: "0x25d5882bd4b6d4aa72a877eb62c7096364ae210a",
    chainKey: "tangible-testnet",
    eid: 40252
  },
  {
    name: "Bitgo",
    address: "0xdff3f73c260b3361d4f006b02972c6af6c5c5417",
    chainKey: "bera-mainnet",
    eid: 30362
  },
  {
    name: "USDT0",
    address: "0xd01ae6905d48315f7be10c7330aecf8360ef5b12",
    chainKey: "bera-mainnet",
    eid: 30362
  },
  {
    name: "TSS",
    address: "0x306b9a8953b9462f8b826e6768a93c8ea7454965",
    chainKey: "bera-mainnet",
    eid: 362
  },
  {
    name: "FBTC",
    address: "0xe900e073badafdc6f72541f34e6b701bde835487",
    chainKey: "bera-mainnet",
    eid: 30362
  },
  {
    name: "ABDB",
    address: "0xa2d10677441230c4aed58030e4ea6ba7bfd80393",
    chainKey: "bera-mainnet",
    eid: 30362
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "bera-mainnet",
    eid: 30362
  },
  {
    name: "Stargate",
    address: "0x6e70fcdc42d3d63748b7d8883399dcb16bbb5c8c",
    chainKey: "bera-mainnet",
    eid: 30362
  },
  {
    name: "LayerZero Labs",
    address: "0x282b3386571f7f794450d5789911a9804fa346b4",
    chainKey: "bera-mainnet",
    eid: 30362
  },
  {
    name: "LZDeadDVN",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "bera-mainnet",
    eid: 30362
  },
  {
    name: "MIM",
    address: "0x73ddc92e39aeda95feb8d3e0008016d9f1268c76",
    chainKey: "bera-mainnet",
    eid: 30362
  },
  {
    name: "LayerZero Labs",
    address: "0x4cf1b3fa61465c2c907f82fc488b43223ba0cf93",
    chainKey: "bera-testnet",
    eid: 40256
  },
  {
    name: "Bitgo",
    address: "0xd506ac2b77228cc3eb48f620cb78085f5a642154",
    chainKey: "bera-testnet",
    eid: 40256
  },
  {
    name: "Nethermind",
    address: "0xfd952ea14b87fb18d4a1119be0be45064e448f45",
    chainKey: "tron-mainnet",
    eid: 30420
  },
  {
    name: "Horizen",
    address: "0xfee824cc7ced4f2ba7a0e72e5cfe20fd2197cd53",
    chainKey: "tron-mainnet",
    eid: 30420
  },
  {
    name: "LZDeadDVN",
    address: "0x73a38738170aca1b2ebcb55538ed9c7fb10ccd3b",
    chainKey: "tron-mainnet",
    eid: 30420
  },
  {
    name: "LayerZero Labs",
    address: "0x8bc1d368036ee5e726d230beb685294be191a24e",
    chainKey: "tron-mainnet",
    eid: 30420
  },
  {
    name: "Zenrock",
    address: "0x1de9dec8465638b07c198f53f1d4cb2a92be729c",
    chainKey: "tron-mainnet",
    eid: 30420
  },
  {
    name: "Stakingcabin",
    address: "0x73763eb00879c9f7ee111ab8fabafb40e78ed4b8",
    chainKey: "tron-mainnet",
    eid: 30420
  },
  {
    name: "LayerZero Labs",
    address: "0x415d421843273766ead41942e8873decfc40ffac",
    chainKey: "tron-sandbox",
    eid: 50420
  },
  {
    name: "LayerZero Labs",
    address: "0x415d421843273766eaD41942E8873DEcfC40FFac",
    chainKey: "tron-sandbox",
    eid: 50420
  },
  {
    name: "LayerZero",
    address: "0x40b59f818c05c721758882b12d8200bca385af4a",
    chainKey: "tron-sandbox",
    eid: 50420
  },
  {
    name: "LayerZero Labs",
    address: "0xc6b1a264d9bb30a8d19575b0bb3ba525a3a6fc93",
    chainKey: "tron-testnet",
    eid: 40420
  },
  {
    name: "LayerZero",
    address: "0xfb74015093331adb622ca9c0540bedf3de54e8ca",
    chainKey: "tron-testnet",
    eid: 40420
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "meritcircle-mainnet",
    eid: 198
  },
  {
    name: "LZDeadDVN",
    address: "0x690b1857eaa8c55850547d7c22148c0b99a71dcd",
    chainKey: "meritcircle-mainnet",
    eid: 30198
  },
  {
    name: "LayerZero Labs",
    address: "0x5e38c31c28d0f485d6dc3ffabf8980bbcd882294",
    chainKey: "meritcircle-mainnet",
    eid: 30198
  },
  {
    name: "BCW",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "meritcircle-mainnet",
    eid: 30198
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "meritcircle-mainnet",
    eid: 30198
  },
  {
    name: "TSS",
    address: "0x3acaaf60502791d199a5a5f0b173d78229ebfe32",
    chainKey: "meritcircle-testnet",
    eid: 10178
  },
  {
    name: "LayerZero Labs",
    address: "0x51b5ba90288c2253cfa03ca71bd1f04b53c423dd",
    chainKey: "meritcircle-testnet",
    eid: 40178
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "loot-mainnet",
    eid: 197
  },
  {
    name: "LZDeadDVN",
    address: "0x34406a8ef674f133b57f32083656787722aee4de",
    chainKey: "loot-mainnet",
    eid: 30197
  },
  {
    name: "LayerZero Labs",
    address: "0x4f8b7a7a346da5c467085377796e91220d904c15",
    chainKey: "loot-mainnet",
    eid: 30197
  },
  {
    name: "BCW",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "loot-mainnet",
    eid: 30197
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "loot-mainnet",
    eid: 30197
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "loot-testnet",
    eid: 10197
  },
  {
    name: "LayerZero Labs",
    address: "0x09c3ff7df4f480f329cbee2df6f66c9a2e7f5a63",
    chainKey: "loot-testnet",
    eid: 40197
  },
  {
    name: "Stargate",
    address: "0x62aa89bad332788021f6f4f4fb196d5fe59c27a6",
    chainKey: "zksync-mainnet",
    eid: 30165
  },
  {
    name: "Ubisoft",
    address: "0x02a7bf7298d17c12181578ff474c17c922aad75a",
    chainKey: "zksync-mainnet",
    eid: 30165
  },
  {
    name: "LayerZero Labs",
    address: "0x620a9df73d2f1015ea75aea1067227f9013f5c51",
    chainKey: "zksync-mainnet",
    eid: 30165
  },
  {
    name: "Nethermind",
    address: "0xb183c2b91cf76cad13602b32ada2fd273f19009c",
    chainKey: "zksync-mainnet",
    eid: 30165
  },
  {
    name: "BWare",
    address: "0x3a5a74f863ec48c1769c4ee85f6c3d70f5655e2a",
    chainKey: "zksync-mainnet",
    eid: 30165
  },
  {
    name: "BCW",
    address: "0x0d1bc4efd08940eb109ef3040c1386d09b6334e0",
    chainKey: "zksync-mainnet",
    eid: 30165
  },
  {
    name: "TSS",
    address: "0xcb7ad38d45ab5bcf5880b0fa851263c29582c18a",
    chainKey: "zksync-mainnet",
    eid: 165
  },
  {
    name: "Horizen",
    address: "0x1253e268bc04bb43cb96d2f7ee858b8a1433cf6d",
    chainKey: "zksync-mainnet",
    eid: 30165
  },
  {
    name: "Zenrock",
    address: "0xc4a1f52fda034a9a5e1b3b27d14451d15776fef6",
    chainKey: "zksync-mainnet",
    eid: 30165
  },
  {
    name: "LZDeadDVN",
    address: "0x3f80157b0d0025c85f905b75b1ee2386f6daf168",
    chainKey: "zksync-mainnet",
    eid: 30165
  },
  {
    name: "TSS",
    address: "0x2dcc8cfb612fdbc0fb657ea1b51a6f77b8b86448",
    chainKey: "zksync-testnet",
    eid: 10165
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "olive-testnet",
    eid: 40277
  },
  {
    name: "LayerZero Labs",
    address: "0xbf6ff58f60606edb2f190769b951d825bcb214e2",
    chainKey: "basesep-testnet",
    eid: 40245
  },
  {
    name: "Bitgo",
    address: "0xfa1a1804effec9000f75cd15d16d18b05738d467",
    chainKey: "basesep-testnet",
    eid: 40245
  },
  {
    name: "Nethermind",
    address: "0xd9222cc3ccd1df7c070d700ea377d4ada2b86eb5",
    chainKey: "basesep-testnet",
    eid: 40245
  },
  {
    name: "Bitgo",
    address: "0xdf04abb599c7b37dd5ffc0f8e94f6898120874ef",
    chainKey: "basesep-testnet",
    eid: 40245
  },
  {
    name: "LayerZero Labs",
    address: "0xe1a12515f9ab2764b887bf60b923ca494ebbb2d6",
    chainKey: "basesep-testnet",
    eid: 40245
  },
  {
    name: "LZDeadDVN",
    address: "0x78551adc2553ef1858a558f5300f7018aad2fa7e",
    chainKey: "basesep-testnet",
    eid: 40245
  },
  {
    name: "TSS",
    address: "0x45841dd1ca50265da7614fc43a361e526c0e6160",
    chainKey: "polygoncdk-testnet",
    eid: 10224
  },
  {
    name: "LZDeadDVN",
    address: "0x1be6093e02a7abf324053ee3f501cf2c049da471",
    chainKey: "nova-mainnet",
    eid: 30175
  },
  {
    name: "Horizen",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "nova-mainnet",
    eid: 30175
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "nova-mainnet",
    eid: 30175
  },
  {
    name: "BCW",
    address: "0x34730f2570e6cff8b1c91faabf37d0dd917c4367",
    chainKey: "nova-mainnet",
    eid: 30175
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "nova-mainnet",
    eid: 175
  },
  {
    name: "LayerZero Labs",
    address: "0xb7e97ad5661134185fe608b2a31fe8cef2147ba9",
    chainKey: "nova-mainnet",
    eid: 30175
  },
  {
    name: "BWare",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "nova-mainnet",
    eid: 30175
  },
  {
    name: "TSS",
    address: "0x37aaaf95887624a363effb7762d489e3c05c2a02",
    chainKey: "nova-mainnet",
    eid: 175
  },
  {
    name: "Google",
    address: "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
    chainKey: "nova-mainnet",
    eid: 30175
  },
  {
    name: "LayerZero Labs",
    address: "0x701f3927871efcea1235db722f9e608ae120d243",
    chainKey: "zorasep-testnet",
    eid: 40249
  },
  {
    name: "Nethermind",
    address: "0x18f76f0d8ccd176bbe59b3870fa486d1fff87026",
    chainKey: "lightlink-mainnet",
    eid: 30309
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "lightlink-mainnet",
    eid: 30309
  },
  {
    name: "Horizen",
    address: "0xacde1f22eeab249d3ca6ba8805c8fee9f52a16e7",
    chainKey: "lightlink-mainnet",
    eid: 30309
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "lightlink-mainnet",
    eid: 30309
  },
  {
    name: "Stargate",
    address: "0x0e95cf21ad9376a26997c97f326c5a0a267bb8ff",
    chainKey: "lightlink-mainnet",
    eid: 30309
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "lightlink-testnet",
    eid: 40309
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "lightlink-testnet",
    eid: 40309
  },
  {
    name: "BCW",
    address: "0x70bf42c69173d6e33b834f59630dac592c70b369",
    chainKey: "aurora-mainnet",
    eid: 30211
  },
  {
    name: "Stargate",
    address: "0xe11c808bc6099abc9be566c9017aa2ab0f131d35",
    chainKey: "aurora-mainnet",
    eid: 30211
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "aurora-mainnet",
    eid: 211
  },
  {
    name: "LayerZero Labs",
    address: "0xd4a903930f2c9085586cda0b11d9681eecb20d2f",
    chainKey: "aurora-mainnet",
    eid: 30211
  },
  {
    name: "Nethermind",
    address: "0x34730f2570e6cff8b1c91faabf37d0dd917c4367",
    chainKey: "aurora-mainnet",
    eid: 30211
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "aurora-mainnet",
    eid: 30211
  },
  {
    name: "LZDeadDVN",
    address: "0x412cec9fc5044bcba04ed6875729540ce35c6c6f",
    chainKey: "aurora-mainnet",
    eid: 30211
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "aurora-testnet",
    eid: 10201
  },
  {
    name: "LayerZero Labs",
    address: "0x988d898a9acf43f61fdbc72aad6eb3f0542e19e1",
    chainKey: "aurora-testnet",
    eid: 40201
  },
  {
    name: "LayerZero Labs",
    address: "0xcce466a522984415bc91338c232d98869193d46e",
    chainKey: "fraxtal-mainnet",
    eid: 30255
  },
  {
    name: "TSS",
    address: "0x3a73033c0b1407574c76bdbac67f126f6b4a9aa9",
    chainKey: "fraxtal-mainnet",
    eid: 255
  },
  {
    name: "LZDeadDVN",
    address: "0x6a6991e0bf27e3cccde6b73de94b7da6e240ff6e",
    chainKey: "fraxtal-mainnet",
    eid: 30255
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "fraxtal-mainnet",
    eid: 30255
  },
  {
    name: "Nethermind",
    address: "0xa7b5189bca84cd304d8553977c7c614329750d99",
    chainKey: "fraxtal-mainnet",
    eid: 30255
  },
  {
    name: "Axelar",
    address: "0x025bab5b7271790f9cf188fdce2c4214857f48d3",
    chainKey: "fraxtal-mainnet",
    eid: 30255
  },
  {
    name: "Nethermind",
    address: "0x14ccb1a6ebb0b6f669fce087a2dbf664a1f57251",
    chainKey: "fraxtal-testnet",
    eid: 40255
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "fraxtal-testnet",
    eid: 40255
  },
  {
    name: "Horizen",
    address: "0x38179d3bfa6ef1d69a8a7b0b671ba3d8836b2ae8",
    chainKey: "hemi-mainnet",
    eid: 30329
  },
  {
    name: "Nethermind",
    address: "0x07c05eab7716acb6f83ebf6268f8eecda8892ba1",
    chainKey: "hemi-mainnet",
    eid: 30329
  },
  {
    name: "Stargate",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "hemi-mainnet",
    eid: 30329
  },
  {
    name: "LayerZero Labs",
    address: "0x282b3386571f7f794450d5789911a9804fa346b4",
    chainKey: "hemi-mainnet",
    eid: 30329
  },
  {
    name: "LZDeadDVN",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "hemi-mainnet",
    eid: 30329
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "hemi-testnet",
    eid: 40338
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "hemi-testnet",
    eid: 40338
  },
  {
    name: "Zenrock",
    address: "0xe5491fac6965aa664efd6d1ae5e7d1d56da4fdda",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Flowdesk",
    address: "0x00e91548787caf130d811ef1872f2bc2c0583d90",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Restake",
    address: "0x4d52f5bc932cf1a854381a85ad9ed79b8497c153",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Stakingcabin",
    address: "0xccf6ee53aa0b7c7f190d2a7b273e7b04cce14d21",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Blockhunters",
    address: "0x547bf6889b1095b7cc6e525a1f8e8fdb26134a38",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Delegate",
    address: "0x9eeee79f5dbc4d99354b5cb547c138af432f937b",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Chainlink",
    address: "0x150a58e9e6bf69cceb1dba5ae97c166dc8792539",
    chainKey: "bsc-mainnet",
    eid: 102
  },
  {
    name: "Republic",
    address: "0xf7ddee427507cdb6885e53caaaa1973b1fe29357",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "P2P",
    address: "0x439264fb87581a70bb6d7befd16b636521b0ad2d",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Nocturnal",
    address: "0x48ecf6d66045aad8d75e72109489ac29da6066a9",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "BCW",
    address: "0x5246d80e5673251eb1977ae9d07a93fbd8649963",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Omnix",
    address: "0x5a4c666e9c7aa86fd4fbfdfbfd04646dcc45c6c5",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Google",
    address: "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Bitgo",
    address: "0xa2ceb887f545400b8247dfb7e9ccada7ababbde8",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Stargate",
    address: "0xac8de74ce0a44a5e73bbc709fe800406f58431e0",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Omnicat",
    address: "0xdff3f73c260b3361d4f006b02972c6af6c5c5417",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "LayerZero Labs",
    address: "0x509889389cfb7a89850017425810116a44676f58",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Stakingcabin",
    address: "0xd841a741addcb6dea735d3b8c9faf96ba3f3d30d",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Nethermind",
    address: "0x31f748a368a893bdb5abb67ec95f232507601a73",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "bsc-mainnet",
    eid: 102
  },
  {
    name: "Axelar",
    address: "0x878c20d3685cdbc5e2680a8a0e7fb97389344fe1",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Canary",
    address: "0xfa9ba83c102283958b997adc8b44ed3a3cdb5dda",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "LayerZero Labs",
    address: "0xfd6865c841c2d64565562fcc7e05e619a30615f0",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Planetarium",
    address: "0x05aaefdf9db6e0f7d27fa3b6ee099edb33da029e",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Bitgo",
    address: "0xd791948db16ab4373fa394b74c727ddb7fb02520",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "POPS",
    address: "0x33e5fcc13d7439cc62d54c41aa966197145b3cd7",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "MIM",
    address: "0x25e0e650a78e6304a3983fc4b7ffc6544b1beea6",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Horizen",
    address: "0x247624e2143504730aec22912ed41f092498bef2",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Paxos",
    address: "0x82f6ad698f3116ca1b71836a7f1303628fa855db",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Nethermind",
    address: "0x0321a1b9e48ccdc5a8a32c524b858e10072ef798",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "BWare",
    address: "0xfe1cd27827e16b07e61a4ac96b521bdb35e00328",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "ABDB",
    address: "0x313328609a9c38459cae56625fff7f2ad6dcde3b",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "01node",
    address: "0x8fc629aa400d4d9c0b118f2685a49316552abf27",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "CCIP",
    address: "0x53561bcfe6b3f23bc72e5b9919c12322729942e8",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Shrapnel",
    address: "0xb4fa7f1c67e5ec99b556ec92cbddbcdd384106f2",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "LZDeadDVN",
    address: "0xe9b5e4f9395a60799f4f608ba3abebdfc0ee6d9c",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Gitcoin",
    address: "0x2afa3787cd95fee5d5753cd717ef228eb259f4ea",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Stablelab",
    address: "0xabc9b1819cc4d9846550f928b985993cf6240439",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Superduper",
    address: "0xbd40c9047980500c46b8aed4462e2f889299febe",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Luganodes",
    address: "0x2c7185f5b0976397d9eb5c19d639d4005e6708f0",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "BCW",
    address: "0xd36246c322ee102a2203bca9cafb84c179d306f6",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "TSS",
    address: "0x5a54fe5234e811466d5366846283323c954310b2",
    chainKey: "bsc-mainnet",
    eid: 102
  },
  {
    name: "AltLayer",
    address: "0xdb979d0a36af0525afa60fc265b1525505c55d79",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Nodesguru",
    address: "0x1bab20e7fdc79257729cb596bef85db76c44915e",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Switchboard",
    address: "0xf0809f6e760a5452ee567975eda7a28da4a83d38",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "Superform",
    address: "0xf4c489afd83625f510947e63ff8f90dfee0ae46c",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "ABDB",
    address: "0xd4925b81f62457caca368412315d230535b9a48a",
    chainKey: "bsc-mainnet",
    eid: 30102
  },
  {
    name: "LayerZero Labs",
    address: "0x10aeafac83d48e2f9ac4baaf94311c45face1404",
    chainKey: "bsc-sandbox",
    eid: 50102
  },
  {
    name: "Bitgo",
    address: "0x7baa95c10cc99c7687d31fc5b45b6b916362ed22",
    chainKey: "bsc-testnet",
    eid: 40102
  },
  {
    name: "TSS",
    address: "0x53ccb44479b2666cf93f5e815f75738aa5c6d3b9",
    chainKey: "bsc-testnet",
    eid: 10102
  },
  {
    name: "Polyhedra",
    address: "0x2ddf08e397541721acd82e5b8a1d0775454a180b",
    chainKey: "bsc-testnet",
    eid: 40102
  },
  {
    name: "LayerZero Labs",
    address: "0x0ee552262f7b562efced6dd4a7e2878ab897d405",
    chainKey: "bsc-testnet",
    eid: 40102
  },
  {
    name: "BWare",
    address: "0x35fa068ec18631719a7f6253710ba29ab5c5f3b7",
    chainKey: "bsc-testnet",
    eid: 40102
  },
  {
    name: "Gitcoin",
    address: "0x6f978ee5bfd7b1a8085a3ea9e54eb76e668e195a",
    chainKey: "bsc-testnet",
    eid: 40102
  },
  {
    name: "Google",
    address: "0x6f99ea3fc9206e2779249e15512d7248dab0b52e",
    chainKey: "bsc-testnet",
    eid: 40102
  },
  {
    name: "P2P",
    address: "0xd0a6fd2e542945d81d4ed82d8f4d25cc09c65f7f",
    chainKey: "bsc-testnet",
    eid: 40102
  },
  {
    name: "Nethermind",
    address: "0x6334290b7b4a365f3c0e79c85b1b42f078db78e4",
    chainKey: "bsc-testnet",
    eid: 40102
  },
  {
    name: "Bitgo",
    address: "0x16b711e3284e7c1d3b7eed25871584ad8d946cac",
    chainKey: "bsc-testnet",
    eid: 40102
  },
  {
    name: "Delegate",
    address: "0xcd02c60d6a23966bd74d435df235a941b35f4f5f",
    chainKey: "bsc-testnet",
    eid: 40102
  },
  {
    name: "Switchboard",
    address: "0x4ecbb26142a1f2233aeee417fd2f4fb0ec6e0d78",
    chainKey: "bsc-testnet",
    eid: 40102
  },
  {
    name: "Republic",
    address: "0x33ba0e70d74c72d3633870904244b57edfb35df7",
    chainKey: "bsc-testnet",
    eid: 40102
  },
  {
    name: "Stablelab",
    address: "0xd05c27f2e47fbba82adaac2a5adb71ba57a5b933",
    chainKey: "bsc-testnet",
    eid: 40102
  },
  {
    name: "Horizen",
    address: "0x01a998260da061efb9a85b26d42f8f8662bf3d5f",
    chainKey: "degen-mainnet",
    eid: 30267
  },
  {
    name: "Stargate",
    address: "0x80442151791bbdd89117719e508115ebc1ce2d93",
    chainKey: "degen-mainnet",
    eid: 30267
  },
  {
    name: "TSS",
    address: "0x41bdb4aa4a63a5b2efc531858d3118392b1a1c3d",
    chainKey: "degen-mainnet",
    eid: 267
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "degen-mainnet",
    eid: 30267
  },
  {
    name: "Nethermind",
    address: "0x8d77d35604a9f37f488e41d1d916b2a0088f82dd",
    chainKey: "degen-mainnet",
    eid: 30267
  },
  {
    name: "LZDeadDVN",
    address: "0xf80cb5f7467b67cbec77dce6a13c89f210b554c0",
    chainKey: "degen-mainnet",
    eid: 30267
  },
  {
    name: "LayerZero Labs",
    address: "0x07fd0e370b49919ca8da0ce842b8177263c0e12c",
    chainKey: "cronoszkevm-mainnet",
    eid: 30360
  },
  {
    name: "LZDeadDVN",
    address: "0x04830f6decf08dec9ed6c3fcad215245b78a59e1",
    chainKey: "cronoszkevm-mainnet",
    eid: 30360
  },
  {
    name: "LayerZero Labs",
    address: "0x6869b4348fae6a911fdb5bae5e0d153b2aa261f6",
    chainKey: "cronoszkevm-testnet",
    eid: 40360
  },
  {
    name: "LZDeadDVN",
    address: "0x9c0b5520e3ec0cce919ceaa1fb5aaa7cdab437d4",
    chainKey: "cronoszkevm-testnet",
    eid: 40360
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "hubble-mainnet",
    eid: 182
  },
  {
    name: "LayerZero",
    address: "0xe9ba4c1e76d874a43942718dafc96009ec9d9917",
    chainKey: "hubble-mainnet",
    eid: 30182
  },
  {
    name: "TSS",
    address: "0x45841dd1ca50265da7614fc43a361e526c0e6160",
    chainKey: "hubble-testnet",
    eid: 10182
  },
  {
    name: "LZDeadDVN",
    address: "0x6008b58840b2353996797d65f8539d42e01bb297",
    chainKey: "meter-mainnet",
    eid: 30176
  },
  {
    name: "BCW",
    address: "0xc4e1b199c3b24954022fce7ba85419b3f0669142",
    chainKey: "meter-mainnet",
    eid: 30176
  },
  {
    name: "TSS",
    address: "0x51a6e62d12f2260e697039ff53bcb102053f5ab7",
    chainKey: "meter-mainnet",
    eid: 176
  },
  {
    name: "LayerZero Labs",
    address: "0xb792afc44214b5f910216bc904633dbd15b31680",
    chainKey: "meter-mainnet",
    eid: 30176
  },
  {
    name: "Nethermind",
    address: "0x08095eced6c0b46d50ee45a6a59c0fd3de0b0855",
    chainKey: "meter-mainnet",
    eid: 30176
  },
  {
    name: "Horizen",
    address: "0x3f10b9b75b05f103995ee8b8e2803aa6c7a9dcdf",
    chainKey: "meter-mainnet",
    eid: 30176
  },
  {
    name: "LayerZero Labs",
    address: "0xe3a4539200e8906c957cd85b3e7a515c9883fd81",
    chainKey: "meter-testnet",
    eid: 40156
  },
  {
    name: "TSS",
    address: "0x0e8738298a8e437035e3aebd57f8dddc1a1bc44a",
    chainKey: "meter-testnet",
    eid: 10156
  },
  {
    name: "LayerZero",
    address: "0x51ec85b4cf4d7ac03a2a42853a5f0cfbd22f56fda66726e1f98906d5829b7c22",
    chainKey: "movement-sandbox",
    eid: 0
  },
  {
    name: "LayerZero",
    address: "0x1f79b324153abe0ca18a279822f3b561acbaabb4d68d47ed3639b5a53e4d3470",
    chainKey: "movement-sandbox",
    eid: 0
  },
  {
    name: "TSS",
    address: "0xa6bf2be6c60175601bf88217c75dd4b14abb5fbb",
    chainKey: "okx-mainnet",
    eid: 155
  },
  {
    name: "LayerZero Labs",
    address: "0x52eea5c490fb89c7a0084b32feab854eeff07c82",
    chainKey: "okx-mainnet",
    eid: 30155
  },
  {
    name: "Horizen",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "okx-mainnet",
    eid: 30155
  },
  {
    name: "BWare",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "okx-mainnet",
    eid: 30155
  },
  {
    name: "LZDeadDVN",
    address: "0x641a8990001199692fd8042dc37445f07355d6ce",
    chainKey: "okx-mainnet",
    eid: 30155
  },
  {
    name: "LayerZero Labs",
    address: "0xdbdc042321a87dff222c6bf26be68ad7b3d7543f",
    chainKey: "okx-testnet",
    eid: 40155
  },
  {
    name: "TSS",
    address: "0xd682ecf100f6f4284138aa925348633b0611ae21",
    chainKey: "okx-testnet",
    eid: 10155
  },
  {
    name: "TSS",
    address: "0x59dae6516d2fa7f21195adc0cda14d819d21031c",
    chainKey: "iota-mainnet",
    eid: 284
  },
  {
    name: "LZDeadDVN",
    address: "0xe6f1c3c1674d3bae71ef33300441e7469a0021ff",
    chainKey: "iota-mainnet",
    eid: 30284
  },
  {
    name: "Stargate",
    address: "0xf18a7d86917653725afb7c215e47a24f9d784718",
    chainKey: "iota-mainnet",
    eid: 30284
  },
  {
    name: "Horizen",
    address: "0xdfc9455f8f86b45fa3b1116967f740905de6fe51",
    chainKey: "iota-mainnet",
    eid: 30284
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "iota-mainnet",
    eid: 30284
  },
  {
    name: "BWare",
    address: "0xd7bb44516b476ca805fb9d6fc5b508ef3ee9448d",
    chainKey: "iota-mainnet",
    eid: 30284
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "iota-mainnet",
    eid: 30284
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "iota-testnet",
    eid: 40307
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "iota-testnet",
    eid: 40307
  },
  {
    name: "TSS",
    address: "0x145c041566b21bec558b2a37f1a5ff261ab55998",
    chainKey: "injective-testnet",
    eid: 10218
  },
  {
    name: "Nethermind",
    address: "0x6a4c9096f162f0ab3c0517b0a40dc1ce44785e16",
    chainKey: "kava-mainnet",
    eid: 30177
  },
  {
    name: "TSS",
    address: "0xaab5a48cfc03efa9cc34a2c1aacccb84b4b770e4",
    chainKey: "kava-mainnet",
    eid: 177
  },
  {
    name: "LayerZero Labs",
    address: "0x2d40a7b66f776345cf763c8ebb83199cd285e7a3",
    chainKey: "kava-mainnet",
    eid: 30177
  },
  {
    name: "BCW",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "kava-mainnet",
    eid: 30177
  },
  {
    name: "LZDeadDVN",
    address: "0x1b3b79f03ee74d4c88f2bdd84112b58a01ea0167",
    chainKey: "kava-mainnet",
    eid: 30177
  },
  {
    name: "Stargate",
    address: "0x9cbaf815ed62ef45c59e9f2cb05106babb4d31d3",
    chainKey: "kava-mainnet",
    eid: 30177
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "kava-mainnet",
    eid: 30177
  },
  {
    name: "Axelar",
    address: "0x80c4c3768dd5a3dd105cf2bd868fdc50280e398b",
    chainKey: "kava-mainnet",
    eid: 30177
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "kava-testnet",
    eid: 10172
  },
  {
    name: "LayerZero Labs",
    address: "0x433daf5e5fba834de2c3d06a82403c9e96df6b42",
    chainKey: "kava-testnet",
    eid: 40172
  },
  {
    name: "Paxos",
    address: "0x51172653a6a1ebb0d4d716bf2e4f57f41507668c",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "Mantle01",
    address: "0xa6bcc8c553ea756c8ad393d2cf379bfb59856499",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "TSS",
    address: "0x36ebea3941907c438ca8ca2b1065deef21ccdaed",
    chainKey: "sepolia-testnet",
    eid: 161
  },
  {
    name: "Mantle01",
    address: "0x6943872cfc48f6b18f8b81d57816733d4545eca3",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "Gitcoin",
    address: "0x28b92d35407caa791531cd7f7d215044f4c0cbdd",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "BWare",
    address: "0xca7a736be0fe968a33af62033b8b36d491f7999b",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "P2P",
    address: "0xe7b65ec1ae41186ef626a3a3cbf79d0c0426a911",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "Mantle01",
    address: "0xe4f5f5cd6229de94adc343deb86172c07b129bb0",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "TSS",
    address: "0xa6bf2be6c60175601bf88217c75dd4b14abb5fbb",
    chainKey: "sepolia-testnet",
    eid: 161
  },
  {
    name: "TSS",
    address: "0x00c5c0b8e0f75ab862cbaaecfff499db555fbdd2",
    chainKey: "sepolia-testnet",
    eid: 161
  },
  {
    name: "Nethermind",
    address: "0x715a4451be19106bb7cefd81e507813e23c30768",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "BWare",
    address: "0xac294c43d44d4131db389256959f33e713851e31",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "Nethermind",
    address: "0x68802e01d6321d5159208478f297d7007a7516ed",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "Delegate",
    address: "0x942afc25b43d6ffe6d990af37737841f580638d7",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "LayerZero Labs",
    address: "0x8eebf8b423b73bfca51a1db4b7354aa0bfca9193",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "Japan Blockchain Foundation",
    address: "0xefd1d76a2db92bad8fd56167f847d204f5f4004e",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "Google",
    address: "0x4f675c48fad936cb4c3ca07d7cbf421ceeae0c75",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "LZDeadDVN",
    address: "0xf53857dbc0d2c59d5666006ec200cba2936b8c35",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "LZDeadDVN",
    address: "0x8b450b0acf56e1b0e25c581bb04fbabeeb0644b8",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "Mantle02",
    address: "0x15f5a70fc078279d7d4a7dd94811189364810111",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "Google",
    address: "0x96746917b256bdb8424496ff6bbcaf8216708a6a",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "AltLayer",
    address: "0x25f492a35ec1e60ebcf8a3dd52a815c2d167f4c3",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "Switchboard",
    address: "0x51e8907d6f3606587ba9f0aba4ece4c28ac31ec6",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "LayerZero Labs",
    address: "0x530fbe405189204ef459fa4b767167e4d41e3a37",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "Stablelab",
    address: "0xf21f0282b55b4143251d8e39d3d93e78a78389ab",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "sepolia-testnet",
    eid: 30161
  },
  {
    name: "Bitgo",
    address: "0x6a4c9096f162f0ab3c0517b0a40dc1ce44785e16",
    chainKey: "unichain-mainnet",
    eid: 30320
  },
  {
    name: "Bitgo",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "unichain-mainnet",
    eid: 30320
  },
  {
    name: "LayerZero Labs",
    address: "0x282b3386571f7f794450d5789911a9804fa346b4",
    chainKey: "unichain-mainnet",
    eid: 30320
  },
  {
    name: "LZDeadDVN",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "unichain-mainnet",
    eid: 30320
  },
  {
    name: "LayerZero Labs",
    address: "0x6236072727ae3dfe29bafe9606e41827be8c6341",
    chainKey: "unichain-testnet",
    eid: 40333
  },
  {
    name: "LZDeadDVN",
    address: "0x9fabeeca47e03d4a37f43b5e476030ab1bb200ad",
    chainKey: "unichain-testnet",
    eid: 40333
  },
  {
    name: "Bitgo",
    address: "0x14ccb1a6ebb0b6f669fce087a2dbf664a1f57251",
    chainKey: "unichain-testnet",
    eid: 40333
  },
  {
    name: "LayerZero Labs",
    address: "0x12523de19dc41c91f7d2093e0cfbb76b17012c8d",
    chainKey: "hyperliquid-testnet",
    eid: 40332
  },
  {
    name: "LZDeadDVN",
    address: "0x55c175dd5b039331db251424538169d8495c18d1",
    chainKey: "hyperliquid-testnet",
    eid: 40332
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "citrea-testnet",
    eid: 40344
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "citrea-testnet",
    eid: 40344
  },
  {
    name: "TSS",
    address: "0xdeef80c12d49e5da8e01b05636e2d0c776f6b78d",
    chainKey: "moonbeam-mainnet",
    eid: 126
  },
  {
    name: "POPS",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "moonbeam-mainnet",
    eid: 30126
  },
  {
    name: "Nethermind",
    address: "0x790d7b1e97a086eb0012393b65a5b32ce58a04dc",
    chainKey: "moonbeam-mainnet",
    eid: 30126
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "moonbeam-mainnet",
    eid: 30126
  },
  {
    name: "Horizen",
    address: "0x34730f2570e6cff8b1c91faabf37d0dd917c4367",
    chainKey: "moonbeam-mainnet",
    eid: 30126
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "moonbeam-mainnet",
    eid: 126
  },
  {
    name: "LZDeadDVN",
    address: "0x28eee23b2b6c5582112037fd43a4d8c359f54d4d",
    chainKey: "moonbeam-mainnet",
    eid: 30126
  },
  {
    name: "LayerZero Labs",
    address: "0x8b9b67b22ab2ed6ee324c2fd43734dbd2dddd045",
    chainKey: "moonbeam-mainnet",
    eid: 30126
  },
  {
    name: "BWare",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "moonbeam-mainnet",
    eid: 30126
  },
  {
    name: "Google",
    address: "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
    chainKey: "moonbeam-mainnet",
    eid: 30126
  },
  {
    name: "TSS",
    address: "0xa85bfaa7bec20e014e5c29cb3536231116f3f789",
    chainKey: "moonbeam-testnet",
    eid: 10126
  },
  {
    name: "BWare",
    address: "0xcc9a31f253970ad46cb45e6db19513e2248ed1fe",
    chainKey: "moonbeam-testnet",
    eid: 40126
  },
  {
    name: "LayerZero Labs",
    address: "0x90ccfdcd75a66dac697ab9c49f9ee0e32fd77e9f",
    chainKey: "moonbeam-testnet",
    eid: 40126
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "mantasep-testnet",
    eid: 40272
  },
  {
    name: "Nethermind",
    address: "0x6a4c9096f162f0ab3c0517b0a40dc1ce44785e16",
    chainKey: "orderly-mainnet",
    eid: 30213
  },
  {
    name: "LZDeadDVN",
    address: "0x690b1857eaa8c55850547d7c22148c0b99a71dcd",
    chainKey: "orderly-mainnet",
    eid: 30213
  },
  {
    name: "LayerZero Labs",
    address: "0xf53857dbc0d2c59d5666006ec200cba2936b8c35",
    chainKey: "orderly-mainnet",
    eid: 30213
  },
  {
    name: "BCW",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "orderly-mainnet",
    eid: 30213
  },
  {
    name: "Stargate",
    address: "0xd074b6bbcbec2f2b4c4265de3d95e521f82bf669",
    chainKey: "orderly-mainnet",
    eid: 30213
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "orderly-mainnet",
    eid: 213
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "orderly-mainnet",
    eid: 30213
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "orderly-testnet",
    eid: 10200
  },
  {
    name: "LayerZero Labs",
    address: "0x175d2b829604b82270d384393d25c666a822ab60",
    chainKey: "orderly-testnet",
    eid: 40200
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "zora-mainnet",
    eid: 195
  },
  {
    name: "BCW",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "zora-mainnet",
    eid: 30195
  },
  {
    name: "LayerZero Labs",
    address: "0xc1ec25a9e8a8de5aa346f635b33e5b74c4c081af",
    chainKey: "zora-mainnet",
    eid: 30195
  },
  {
    name: "Nethermind",
    address: "0xa7b5189bca84cd304d8553977c7c614329750d99",
    chainKey: "zora-mainnet",
    eid: 30195
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "zora-mainnet",
    eid: 30195
  },
  {
    name: "LZDeadDVN",
    address: "0x08ab92e05ba1dec2c5bb876caa0af60caede1d17",
    chainKey: "zora-mainnet",
    eid: 30195
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "zora-testnet",
    eid: 10195
  },
  {
    name: "LayerZero",
    address: "0xd52e4d3cdad28d7714ab6d56a7c9aa02ee45ab7f",
    chainKey: "zora-testnet",
    eid: 40195
  },
  {
    name: "LZDeadDVN",
    address: "0x4cc028221b4567c7439dc618d2d7f7a22315c1e4",
    chainKey: "metis-mainnet",
    eid: 30151
  },
  {
    name: "TSS",
    address: "0xa6bf2be6c60175601bf88217c75dd4b14abb5fbb",
    chainKey: "metis-mainnet",
    eid: 151
  },
  {
    name: "LayerZero Labs",
    address: "0x32d4f92437454829b3fe7bebfece5d0523deb475",
    chainKey: "metis-mainnet",
    eid: 30151
  },
  {
    name: "Stargate",
    address: "0x61a1b61a1087be03abedc04900cfcc1c14187237",
    chainKey: "metis-mainnet",
    eid: 30151
  },
  {
    name: "Horizen",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "metis-mainnet",
    eid: 30151
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "metis-mainnet",
    eid: 30151
  },
  {
    name: "Nethermind",
    address: "0x6abdb569dc985504cccb541ade8445e5266e7388",
    chainKey: "metis-mainnet",
    eid: 30151
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "metis-mainnet",
    eid: 151
  },
  {
    name: "BCW",
    address: "0x7a7ddc46882220a075934f40380d3a7e1e87d409",
    chainKey: "metis-mainnet",
    eid: 30151
  },
  {
    name: "BWare",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "metis-mainnet",
    eid: 30151
  },
  {
    name: "TSS",
    address: "0xd682ecf100f6f4284138aa925348633b0611ae21",
    chainKey: "metis-testnet",
    eid: 10151
  },
  {
    name: "LZDeadDVN",
    address: "0xadfac55b334de39b3efbe88bb1c992765e88bb60",
    chainKey: "xpla-mainnet",
    eid: 30216
  },
  {
    name: "BCW",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "xpla-mainnet",
    eid: 30216
  },
  {
    name: "TSS",
    address: "0xc39161c743d0307eb9bcc9fef03eeb9dc4802de7",
    chainKey: "xpla-mainnet",
    eid: 216
  },
  {
    name: "LayerZero Labs",
    address: "0x2d24207f9c1f77b2e08f2c3ad430da18e355cf66",
    chainKey: "xpla-mainnet",
    eid: 30216
  },
  {
    name: "Ubisoft",
    address: "0xa51ce237fafa3052d5d3308df38a024724bb1274",
    chainKey: "xpla-mainnet",
    eid: 30216
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "xpla-mainnet",
    eid: 30216
  },
  {
    name: "Nethermind",
    address: "0x809cde2afcf8627312e87a6a7bbffab3f8f347c7",
    chainKey: "xpla-mainnet",
    eid: 30216
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "xpla-testnet",
    eid: 10216
  },
  {
    name: "LayerZero Labs",
    address: "0x0747d0dabb284e5fbaeeea427bba7b2fba507120",
    chainKey: "xpla-testnet",
    eid: 40216
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "vanar-testnet",
    eid: 40298
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "vanar-testnet",
    eid: 40298
  },
  {
    name: "IntellectEU",
    address: "0xf898152d3ec65946cf463dacace6636415cb8c2b",
    chainKey: "ll1-testnet",
    eid: 40271
  },
  {
    name: "LayerZero Labs",
    address: "0xa78a78a13074ed93ad447a26ec57121f29e8fec2",
    chainKey: "ll1-testnet",
    eid: 40271
  },
  {
    name: "Blockdaemon",
    address: "0xc2d9010b6116fcbfa592077e841d0443322ea61a",
    chainKey: "ll1-testnet",
    eid: 40271
  },
  {
    name: "Republic",
    address: "0xcde82f74624525e24853b1f59c8b20a162a3d297",
    chainKey: "ll1-testnet",
    eid: 40271
  },
  {
    name: "LZDeadDVN",
    address: "0x4cf1b3fa61465c2c907f82fc488b43223ba0cf93",
    chainKey: "odyssey-testnet",
    eid: 40340
  },
  {
    name: "LayerZero Labs",
    address: "0x9db9ca3305b48f196d18082e91cb64663b13d014",
    chainKey: "odyssey-testnet",
    eid: 40340
  },
  {
    name: "LayerZero Labs",
    address: "0x55c175dd5b039331db251424538169d8495c18d1",
    chainKey: "zkpolygonsep-testnet",
    eid: 40247
  },
  {
    name: "Mantle02",
    address: "0x3fbe85cc14b34c9515a1b27dfc9d46fd4b4dbd4c",
    chainKey: "mantlesep-testnet",
    eid: 40246
  },
  {
    name: "Mantle01",
    address: "0xec428b5d75d5d0b44ff58cd4b3d3e12aef3e2c1f",
    chainKey: "mantlesep-testnet",
    eid: 40246
  },
  {
    name: "Mantle01",
    address: "0xa8b188a6eb601d0cc82685d912718feca8d36e2f",
    chainKey: "mantlesep-testnet",
    eid: 40246
  },
  {
    name: "LayerZero Labs",
    address: "0x9454f0eabc7c4ea9ebf89190b8bf9051a0468e03",
    chainKey: "mantlesep-testnet",
    eid: 40246
  },
  {
    name: "Mantle01",
    address: "0x1b2fe5096eac6da9f452356046953039a90e696c",
    chainKey: "mantlesep-testnet",
    eid: 40246
  },
  {
    name: "Stargate",
    address: "0x18f76f0d8ccd176bbe59b3870fa486d1fff87026",
    chainKey: "peaq-mainnet",
    eid: 30302
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "peaq-mainnet",
    eid: 30302
  },
  {
    name: "TSS",
    address: "0x4b80f7d25c451d204b1c93d9bdf2ab3b04f3ea4a",
    chainKey: "peaq-mainnet",
    eid: 302
  },
  {
    name: "Stakingcabin",
    address: "0x2edfe0220a74d9609c79711a65e3a2f2a85dc83b",
    chainKey: "peaq-mainnet",
    eid: 30302
  },
  {
    name: "BWare",
    address: "0x790d7b1e97a086eb0012393b65a5b32ce58a04dc",
    chainKey: "peaq-mainnet",
    eid: 30302
  },
  {
    name: "Nodesguru",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "peaq-mainnet",
    eid: 30302
  },
  {
    name: "Nethermind",
    address: "0x725fafe20b74ff6f88daea0c506190a8f1037635",
    chainKey: "peaq-mainnet",
    eid: 30302
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "peaq-mainnet",
    eid: 30302
  },
  {
    name: "Horizen",
    address: "0x21caf0bce846aaa78c9f23c5a4ec5988ecbf9988",
    chainKey: "peaq-mainnet",
    eid: 30302
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "peaq-testnet",
    eid: 40299
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "peaq-testnet",
    eid: 40299
  },
  {
    name: "Horizen",
    address: "0xc9c1b26505bf3f4d6562159a119f6ede1e245deb",
    chainKey: "bb1-mainnet",
    eid: 30234
  },
  {
    name: "TSS",
    address: "0x3a73033c0b1407574c76bdbac67f126f6b4a9aa9",
    chainKey: "bb1-mainnet",
    eid: 234
  },
  {
    name: "LayerZero Labs",
    address: "0xb21f945e8917c6cd69fcfe66ac6703b90f7fe004",
    chainKey: "bb1-mainnet",
    eid: 30234
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "bb1-mainnet",
    eid: 30234
  },
  {
    name: "LZDeadDVN",
    address: "0x3aa71d4c322ed650a78bc3a8bab292e47a214a2c",
    chainKey: "bb1-mainnet",
    eid: 30234
  },
  {
    name: "BWare",
    address: "0x2ac038606fff3fb00317b8f0ccfb4081694acdd0",
    chainKey: "opbnb-mainnet",
    eid: 30202
  },
  {
    name: "Nethermind",
    address: "0x6a4c9096f162f0ab3c0517b0a40dc1ce44785e16",
    chainKey: "opbnb-mainnet",
    eid: 30202
  },
  {
    name: "BCW",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "opbnb-mainnet",
    eid: 30202
  },
  {
    name: "TSS",
    address: "0xa658742d33ebd2ce2f0bdff73515aa797fd161d9",
    chainKey: "opbnb-mainnet",
    eid: 202
  },
  {
    name: "LayerZero Labs",
    address: "0x3ebb618b5c9d09de770979d552b27d6357aff73b",
    chainKey: "opbnb-mainnet",
    eid: 30202
  },
  {
    name: "LZDeadDVN",
    address: "0xd0a9ec7544106258c5836121fa032ae65c83f99b",
    chainKey: "opbnb-mainnet",
    eid: 30202
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "opbnb-mainnet",
    eid: 30202
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "opbnb-mainnet",
    eid: 202
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "opbnb-mainnet",
    eid: 30202
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "opbnb-testnet",
    eid: 10202
  },
  {
    name: "LayerZero Labs",
    address: "0x15e62434aadd26acc8a045e89404eceb4f6d2a52",
    chainKey: "opbnb-testnet",
    eid: 40202
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "tomo-mainnet",
    eid: 196
  },
  {
    name: "Nethermind",
    address: "0x790d7b1e97a086eb0012393b65a5b32ce58a04dc",
    chainKey: "tomo-mainnet",
    eid: 30196
  },
  {
    name: "LayerZero Labs",
    address: "0x1ace9dd1bc743ad036ef2d92af42ca70a1159df5",
    chainKey: "tomo-mainnet",
    eid: 30196
  },
  {
    name: "LZDeadDVN",
    address: "0x658ff096ee44e16564bea9e1161ecbc503ae6e75",
    chainKey: "tomo-mainnet",
    eid: 30196
  },
  {
    name: "BCW",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "tomo-mainnet",
    eid: 30196
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "tomo-mainnet",
    eid: 30196
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "tomo-testnet",
    eid: 10196
  },
  {
    name: "LayerZero Labs",
    address: "0x37d03c8d27d7928546b5b773566ec9c2847054d2",
    chainKey: "tomo-testnet",
    eid: 40196
  },
  {
    name: "LZDeadDVN",
    address: "0x4cf1b3fa61465c2c907f82fc488b43223ba0cf93",
    chainKey: "gameswift-testnet",
    eid: 40339
  },
  {
    name: "LayerZero Labs",
    address: "0x9db9ca3305b48f196d18082e91cb64663b13d014",
    chainKey: "gameswift-testnet",
    eid: 40339
  },
  {
    name: "BCW",
    address: "0x2ac038606fff3fb00317b8f0ccfb4081694acdd0",
    chainKey: "dos-mainnet",
    eid: 30149
  },
  {
    name: "LayerZero Labs",
    address: "0x203dfa8cbcbe234821da01a6e95fcbf92da065ea",
    chainKey: "dos-mainnet",
    eid: 30149
  },
  {
    name: "TSS",
    address: "0xa6bf2be6c60175601bf88217c75dd4b14abb5fbb",
    chainKey: "dos-mainnet",
    eid: 149
  },
  {
    name: "Nethermind",
    address: "0xacde1f22eeab249d3ca6ba8805c8fee9f52a16e7",
    chainKey: "dos-mainnet",
    eid: 30149
  },
  {
    name: "LZDeadDVN",
    address: "0x4474b891bf3d93e61676912f0739e04b86232dd5",
    chainKey: "dos-mainnet",
    eid: 30149
  },
  {
    name: "Horizen",
    address: "0x33e5fcc13d7439cc62d54c41aa966197145b3cd7",
    chainKey: "dos-mainnet",
    eid: 30149
  },
  {
    name: "TSS",
    address: "0xe1a12515f9ab2764b887bf60b923ca494ebbb2d6",
    chainKey: "dos-testnet",
    eid: 10162
  },
  {
    name: "LayerZero Labs",
    address: "0x9e35059b08dca75f0f3c3940e4217b8dc73f4fda",
    chainKey: "dos-testnet",
    eid: 40286
  },
  {
    name: "Nethermind",
    address: "0xabc9b1819cc4d9846550f928b985993cf6240439",
    chainKey: "real-mainnet",
    eid: 30237
  },
  {
    name: "Horizen",
    address: "0x439264fb87581a70bb6d7befd16b636521b0ad2d",
    chainKey: "real-mainnet",
    eid: 30237
  },
  {
    name: "Stakingcabin",
    address: "0xfd4ad9cdbd06fd4d8ca521307bf63a20239208ef",
    chainKey: "real-mainnet",
    eid: 30237
  },
  {
    name: "TSS",
    address: "0xcbd35a9b849342ad34a71e072d9947d4afb4e164",
    chainKey: "real-mainnet",
    eid: 237
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "real-mainnet",
    eid: 30237
  },
  {
    name: "LZDeadDVN",
    address: "0xda13808dbe60775e9b8b07a7cc9b98dfbd0f769f",
    chainKey: "real-mainnet",
    eid: 30237
  },
  {
    name: "Horizen",
    address: "0x38179d3bfa6ef1d69a8a7b0b671ba3d8836b2ae8",
    chainKey: "superposition-mainnet",
    eid: 30327
  },
  {
    name: "Nethermind",
    address: "0x07c05eab7716acb6f83ebf6268f8eecda8892ba1",
    chainKey: "superposition-mainnet",
    eid: 30327
  },
  {
    name: "Stargate",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "superposition-mainnet",
    eid: 30327
  },
  {
    name: "LayerZero Labs",
    address: "0x282b3386571f7f794450d5789911a9804fa346b4",
    chainKey: "superposition-mainnet",
    eid: 30327
  },
  {
    name: "LZDeadDVN",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "superposition-mainnet",
    eid: 30327
  },
  {
    name: "TSS",
    address: "0xaea4fb2c28252c8e5f195178820e8791aa4a4e41",
    chainKey: "superposition-mainnet",
    eid: 327
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "superposition-testnet",
    eid: 40336
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "superposition-testnet",
    eid: 40336
  },
  {
    name: "LZDeadDVN",
    address: "0xf9420f9d2552640e242ad89cd5d3b625f92705c9",
    chainKey: "manta-mainnet",
    eid: 30217
  },
  {
    name: "Stargate",
    address: "0xca848bcb059e33adb260d793ee360924b6aa8e86",
    chainKey: "manta-mainnet",
    eid: 30217
  },
  {
    name: "BWare",
    address: "0xabc9b1819cc4d9846550f928b985993cf6240439",
    chainKey: "manta-mainnet",
    eid: 30217
  },
  {
    name: "LayerZero Labs",
    address: "0xa09db5142654e3eb5cf547d66833fae7097b21c3",
    chainKey: "manta-mainnet",
    eid: 30217
  },
  {
    name: "Horizen",
    address: "0x31f748a368a893bdb5abb67ec95f232507601a73",
    chainKey: "manta-mainnet",
    eid: 30217
  },
  {
    name: "Nethermind",
    address: "0x247624e2143504730aec22912ed41f092498bef2",
    chainKey: "manta-mainnet",
    eid: 30217
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "manta-mainnet",
    eid: 217
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "manta-mainnet",
    eid: 30217
  },
  {
    name: "BCW",
    address: "0x809cde2afcf8627312e87a6a7bbffab3f8f347c7",
    chainKey: "manta-mainnet",
    eid: 30217
  },
  {
    name: "TSS",
    address: "0x45841dd1ca50265da7614fc43a361e526c0e6160",
    chainKey: "manta-testnet",
    eid: 10221
  },
  {
    name: "LayerZero Labs",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "gravity-mainnet",
    eid: 30294
  },
  {
    name: "Stargate",
    address: "0x70bf42c69173d6e33b834f59630dac592c70b369",
    chainKey: "gravity-mainnet",
    eid: 30294
  },
  {
    name: "LZDeadDVN",
    address: "0xc70ab6f32772f59fbfc23889caf4ba3376c84baf",
    chainKey: "gravity-mainnet",
    eid: 30294
  },
  {
    name: "Stakingcabin",
    address: "0x0d155ec1dfc983e919c318964fd16078408e99cc",
    chainKey: "gravity-mainnet",
    eid: 30294
  },
  {
    name: "Horizen",
    address: "0xe95b63c4da1d94fa5022e7c23c984f278b416ca7",
    chainKey: "gravity-mainnet",
    eid: 30294
  },
  {
    name: "Nodesguru",
    address: "0x4d52f5bc932cf1a854381a85ad9ed79b8497c153",
    chainKey: "gravity-mainnet",
    eid: 30294
  },
  {
    name: "Nethermind",
    address: "0x4b92bc2a7d681bf5230472c80d92acfe9a6b9435",
    chainKey: "gravity-mainnet",
    eid: 30294
  },
  {
    name: "BWare",
    address: "0xcced05c3667877b545285b25f19f794436a1c481",
    chainKey: "gravity-mainnet",
    eid: 30294
  },
  {
    name: "Nethermind",
    address: "0xe6cd8c2e46ef396df88048449e5b1c75172b40c3",
    chainKey: "goat-mainnet",
    eid: 30361
  },
  {
    name: "Horizen",
    address: "0xdf0771128bd4b9b18ed883d5af41a6c725c51b38",
    chainKey: "goat-mainnet",
    eid: 30361
  },
  {
    name: "Stargate",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "goat-mainnet",
    eid: 30361
  },
  {
    name: "LayerZero Labs",
    address: "0x282b3386571f7f794450d5789911a9804fa346b4",
    chainKey: "goat-mainnet",
    eid: 30361
  },
  {
    name: "LZDeadDVN",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "goat-mainnet",
    eid: 30361
  },
  {
    name: "TSS",
    address: "0x00961ae3250c2c0db37a476c0eba2353ce800dae",
    chainKey: "goat-mainnet",
    eid: 361
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "goat-testnet",
    eid: 40356
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "goat-testnet",
    eid: 40356
  },
  {
    name: "TSS",
    address: "0x3acaaf60502791d199a5a5f0b173d78229ebfe32",
    chainKey: "cathay-testnet",
    eid: 10171
  },
  {
    name: "LayerZero Labs",
    address: "0x2b3ebe6662ad402317ee7ef4e6b25c79a0f91015",
    chainKey: "moonriver-mainnet",
    eid: 30167
  },
  {
    name: "Horizen",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "moonriver-mainnet",
    eid: 30167
  },
  {
    name: "Nethermind",
    address: "0xfe1cd27827e16b07e61a4ac96b521bdb35e00328",
    chainKey: "moonriver-mainnet",
    eid: 30167
  },
  {
    name: "TSS",
    address: "0x84070061032f3e7ea4e068f447fb7cdfc98d57fe",
    chainKey: "moonriver-mainnet",
    eid: 167
  },
  {
    name: "BCW",
    address: "0x7a7ddc46882220a075934f40380d3a7e1e87d409",
    chainKey: "moonriver-mainnet",
    eid: 30167
  },
  {
    name: "LZDeadDVN",
    address: "0x24d7ff228a81e827efc29ec45e7b30a99b96c653",
    chainKey: "moonriver-mainnet",
    eid: 30167
  },
  {
    name: "BWare",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "moonriver-mainnet",
    eid: 30167
  },
  {
    name: "TSS",
    address: "0xa6bf2be6c60175601bf88217c75dd4b14abb5fbb",
    chainKey: "gnosis-mainnet",
    eid: 145
  },
  {
    name: "Nethermind",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "gnosis-mainnet",
    eid: 30145
  },
  {
    name: "LayerZero Labs",
    address: "0x11bb2991882a86dc3e38858d922559a385d506ba",
    chainKey: "gnosis-mainnet",
    eid: 30145
  },
  {
    name: "POPS",
    address: "0x790d7b1e97a086eb0012393b65a5b32ce58a04dc",
    chainKey: "gnosis-mainnet",
    eid: 30145
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "gnosis-mainnet",
    eid: 30145
  },
  {
    name: "Horizen",
    address: "0x6abdb569dc985504cccb541ade8445e5266e7388",
    chainKey: "gnosis-mainnet",
    eid: 30145
  },
  {
    name: "Zenrock",
    address: "0x07c05eab7716acb6f83ebf6268f8eecda8892ba1",
    chainKey: "gnosis-mainnet",
    eid: 30145
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "gnosis-mainnet",
    eid: 145
  },
  {
    name: "BWare",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "gnosis-mainnet",
    eid: 30145
  },
  {
    name: "Stargate",
    address: "0xfcea5cef8b1ae3a454577c9444cdd95c1284b0cf",
    chainKey: "gnosis-mainnet",
    eid: 30145
  },
  {
    name: "LZDeadDVN",
    address: "0x8a893567f27893e6e0c7b6bba8769d9ab3e911ff",
    chainKey: "gnosis-mainnet",
    eid: 30145
  },
  {
    name: "Google",
    address: "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
    chainKey: "gnosis-mainnet",
    eid: 30145
  },
  {
    name: "LayerZero Labs",
    address: "0xabfa1f7c3586eaff6958dc85baebbab7d3908fd2",
    chainKey: "gnosis-testnet",
    eid: 40145
  },
  {
    name: "BWare",
    address: "0x1c4fc6f1e44eaaef53ac701b7cc4c280f536fa75",
    chainKey: "gnosis-testnet",
    eid: 40145
  },
  {
    name: "TSS",
    address: "0xd682ecf100f6f4284138aa925348633b0611ae21",
    chainKey: "gnosis-testnet",
    eid: 10145
  },
  {
    name: "Nethermind",
    address: "0xb186f85d0604fe58af2ea33fe40244f5eef7351b",
    chainKey: "gnosis-testnet",
    eid: 40145
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "dm2verse-mainnet",
    eid: 30315
  },
  {
    name: "Nethermind",
    address: "0xf2f6fe29d5b07bf2eb15846c1331941b9fa06b3c",
    chainKey: "dm2verse-mainnet",
    eid: 30315
  },
  {
    name: "Horizen",
    address: "0x4752239901aa8d8b99c237dcfb0b02d9871d7a1f",
    chainKey: "dm2verse-mainnet",
    eid: 30315
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "dm2verse-mainnet",
    eid: 30315
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "dm2verse-testnet",
    eid: 40321
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "dm2verse-testnet",
    eid: 40321
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "opencampus-testnet",
    eid: 40297
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "opencampus-testnet",
    eid: 40297
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "form-testnet",
    eid: 40270
  },
  {
    name: "LayerZero Labs",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "xai-mainnet",
    eid: 30236
  },
  {
    name: "Horizen",
    address: "0xe94ae34dfcc87a61836938641444080b98402c75",
    chainKey: "xai-mainnet",
    eid: 30236
  },
  {
    name: "BCW",
    address: "0x34730f2570e6cff8b1c91faabf37d0dd917c4367",
    chainKey: "xai-mainnet",
    eid: 30236
  },
  {
    name: "TSS",
    address: "0x4b80f7d25c451d204b1c93d9bdf2ab3b04f3ea4a",
    chainKey: "xai-mainnet",
    eid: 236
  },
  {
    name: "LZDeadDVN",
    address: "0xeff272433131a0077592f58a16b702ee49b04312",
    chainKey: "xai-mainnet",
    eid: 30236
  },
  {
    name: "Nethermind",
    address: "0xacde1f22eeab249d3ca6ba8805c8fee9f52a16e7",
    chainKey: "xai-mainnet",
    eid: 30236
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "xai-testnet",
    eid: 40251
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "morph-mainnet",
    eid: 30322
  },
  {
    name: "Horizen",
    address: "0x6c5f923b63fdd52fb9c45daefa8695fa6b55a935",
    chainKey: "morph-mainnet",
    eid: 30322
  },
  {
    name: "Nethermind",
    address: "0xdf30c9f6a70ce65a152c5bd09826525d7e97ba49",
    chainKey: "morph-mainnet",
    eid: 30322
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "morph-mainnet",
    eid: 30322
  },
  {
    name: "TSS",
    address: "0xb250b0b2a9891a035080615ac30f040d2b7e7fab",
    chainKey: "morph-mainnet",
    eid: 322
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "morph-testnet",
    eid: 40322
  },
  {
    name: "LayerZero",
    address: "0x55c175dd5b039331db251424538169d8495c18d1",
    chainKey: "morph-testnet",
    eid: 40322
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "morph-testnet",
    eid: 40322
  },
  {
    name: "LayerZero Labs",
    address: "0x129ee430cb2ff2708ccaddbdb408a88fe4ffd480",
    chainKey: "zkconsensys-mainnet",
    eid: 30183
  },
  {
    name: "LZDeadDVN",
    address: "0x1b368a0d7c57080a01054862114b5a42e54cbb98",
    chainKey: "zkconsensys-mainnet",
    eid: 30183
  },
  {
    name: "Horizen",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "zkconsensys-mainnet",
    eid: 30183
  },
  {
    name: "Superform",
    address: "0x7a205ed4e3d7f9d0777594501705d8cd405c3b05",
    chainKey: "zkconsensys-mainnet",
    eid: 30183
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "zkconsensys-mainnet",
    eid: 183
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "zkconsensys-mainnet",
    eid: 30183
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "zkconsensys-mainnet",
    eid: 183
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "zkconsensys-mainnet",
    eid: 30183
  },
  {
    name: "BWare",
    address: "0xf45742bbfabcee739ea2a2d0ba2dd140f1f2c6a3",
    chainKey: "zkconsensys-mainnet",
    eid: 30183
  },
  {
    name: "Stargate",
    address: "0xef269bbadb81de86e4b3278fa1dae1723545268b",
    chainKey: "zkconsensys-mainnet",
    eid: 30183
  },
  {
    name: "Google",
    address: "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
    chainKey: "zkconsensys-mainnet",
    eid: 30183
  },
  {
    name: "TSS",
    address: "0x00c5c0b8e0f75ab862cbaaecfff499db555fbdd2",
    chainKey: "zkconsensys-testnet",
    eid: 10157
  },
  {
    name: "LayerZero",
    address: "0x411a883ef017dfdbf026e2d4a54371039ff8aa09",
    chainKey: "zkconsensys-testnet",
    eid: 40157
  },
  {
    name: "LayerZero Labs",
    address: "0x8f337d230a5088e2a448515eab263735181a9039",
    chainKey: "gunzilla-testnet",
    eid: 40236
  },
  {
    name: "Horizen",
    address: "0xabc9b1819cc4d9846550f928b985993cf6240439",
    chainKey: "shrapnel-mainnet",
    eid: 30148
  },
  {
    name: "TSS",
    address: "0xa6bf2be6c60175601bf88217c75dd4b14abb5fbb",
    chainKey: "shrapnel-mainnet",
    eid: 148
  },
  {
    name: "TSS",
    address: "0x2bf15bbbf2abc0018d50bbbcbf6ab65cf43bef37",
    chainKey: "shrapnel-testnet",
    eid: 10164
  },
  {
    name: "Superduper",
    address: "0x539008c98b17803a273edf98aba2d4414ee3f4d7",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Ondo Staging",
    address: "0x2f2f1c6025e8da125e2afd73ba17d3cbdfe3d093",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "MIM",
    address: "0x9e930731cb4a6bf7ecc11f695a295c60bdd212eb",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Omnicat",
    address: "0xd1c70192cc0eb9a89e3d9032b9facab259a0a1e9",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Ubisoft",
    address: "0x77aaf86b4466a67869667babe02c6ebe7e7791d6",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Chainlink",
    address: "0x150a58e9e6bf69cceb1dba5ae97c166dc8792539",
    chainKey: "arbitrum-mainnet",
    eid: 110
  },
  {
    name: "Google",
    address: "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "USDT0",
    address: "0xa8b8575fa41c305953f519c7d288cd7741727c7b",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Horizen",
    address: "0x19670df5e16bea2ba9b9e68b48c054c5baea06b8",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "arbitrum-mainnet",
    eid: 110
  },
  {
    name: "Switchboard",
    address: "0xcced05c3667877b545285b25f19f794436a1c481",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Stargate",
    address: "0x5756a74e8e18d8392605ba667171962b2b2826b5",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Ondo",
    address: "0x4708a19824bfe71262a91cdefa36ce21cbffafe1",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Blockhunters",
    address: "0xd074b6bbcbec2f2b4c4265de3d95e521f82bf669",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "01node",
    address: "0x7a205ed4e3d7f9d0777594501705d8cd405c3b05",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Flowdesk",
    address: "0xc07125d75bfa05a0108de0f64c4d6ebb12b357f6",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "POPS",
    address: "0x8fa9eef18c2a1459024f0b44714e5acc1ce7f5e8",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Planetarium",
    address: "0xe6cd8c2e46ef396df88048449e5b1c75172b40c3",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Gitcoin",
    address: "0x313328609a9c38459cae56625fff7f2ad6dcde3b",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "AltLayer",
    address: "0x8ede21203e062d7d1eaec11c4c72ad04cdc15658",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "BCW",
    address: "0x78203678d264063815dac114ea810e9837cd80f7",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "ABDB",
    address: "0xf0e40968e27f63b3b0a0b3baac4a274149376591",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Shrapnel",
    address: "0x7b8a0fd9d6ae5011d5cbd3e85ed6d5510f98c9bf",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Nodesguru",
    address: "0xd954bf7968ef68875c9100c9ec890f969504d120",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "LayerZero Labs",
    address: "0x2f55c492897526677c5b68fb199ea31e2c126416",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "LZDeadDVN",
    address: "0x758c419533ad64ce9d3413bc8d3a97b026098ec1",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Axelar",
    address: "0x9d3979c7e3dd26653c52256307709c09f47741e0",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Delegate",
    address: "0xdf30c9f6a70ce65a152c5bd09826525d7e97ba49",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "TSS",
    address: "0xa0cc33dd6f4819d473226257792afe230ec3c67f",
    chainKey: "arbitrum-mainnet",
    eid: 110
  },
  {
    name: "P2P",
    address: "0xb3ce0a5d132cd9bf965aba435e650c55edce0062",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Stablelab",
    address: "0xcd37ca043f8479064e10635020c65ffc005d36f6",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Bitgo",
    address: "0x4a6b9962945d866f53fd114bb76b38b8791b8c1d",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Stakingcabin",
    address: "0xb0646fb9028364ac1f04477271375ef32a8a5e62",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "ABDB",
    address: "0xddaa92ce2d2fac3f7c5eae19136e438902ab46cc",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Stakingcabin",
    address: "0x6268950b2d11aa0516007b6361f6ee3facb3cb14",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Nethermind",
    address: "0x14e570a1684c7ca883b35e1b25d2f7cec98a16cd",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Lagrange",
    address: "0x021e401c2a1a60618c5e6353a40524971eba1e8d",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Nethermind",
    address: "0xa7b5189bca84cd304d8553977c7c614329750d99",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Paxos",
    address: "0x8e5f5825602bc5db725974bb9e60677d4adc5fbe",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "LayerZero Labs",
    address: "0x1308151a7ebac14f435d3ad5ff95c34160d539a5",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Bitgo",
    address: "0x0711dd777ae626ef5e0a4f50e199c7a0e0666857",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "BWare",
    address: "0x9bcd17a654bffaa6f8fea38d19661a7210e22196",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Canary",
    address: "0xf2e380c90e6c09721297526dbc74f870e114dfcb",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Tapioca",
    address: "0xabc9b1819cc4d9846550f928b985993cf6240439",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Restake",
    address: "0x969a0bdd86a230345ad87a6a381de5ed9e6cda85",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Luganodes",
    address: "0x54dd79f5ce72b51fcbbcb170dd01e32034323565",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Nocturnal",
    address: "0xfdd2e77a6addc1e18862f43297500d2ebfbd94ac",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "BCW",
    address: "0x05ce650134d943c5e336dc7990e84fb4e69fdf29",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Zenrock",
    address: "0x3b65e87e2a4690f14cae0483014259ded8215adc",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Superform",
    address: "0x5496d03d9065b08e5677e1c5d1107110bb05d445",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "Omnix",
    address: "0xabea0b6b9237b589e676dc16f6d74bf7612591f4",
    chainKey: "arbitrum-mainnet",
    eid: 30110
  },
  {
    name: "LayerZero Labs",
    address: "0x10aeafac83d48e2f9ac4baaf94311c45face1404",
    chainKey: "arbitrum-sandbox",
    eid: 50231
  },
  {
    name: "TSS",
    address: "0x9e13017d416cdf0816bccac744760dd1c374cd20",
    chainKey: "arbitrum-testnet",
    eid: 10143
  },
  {
    name: "Google",
    address: "0x33f5e99ea89b1c67887553c04928bda8c1301171",
    chainKey: "arbitrum-testnet",
    eid: 40143
  },
  {
    name: "Nethermind",
    address: "0x3b057c9602ab708a83b37da6f1f9de5bc1e8b515",
    chainKey: "arbitrum-testnet",
    eid: 40143
  },
  {
    name: "LayerZero",
    address: "0xf0326814d47c2a2a4e34fc0ad066683b1100a875",
    chainKey: "zksyncsep-testnet",
    eid: 40305
  },
  {
    name: "LZDeadDVN",
    address: "0x7750c0cbae78ddf514b9aefeb2887143d3dbd203",
    chainKey: "zksyncsep-testnet",
    eid: 40305
  },
  {
    name: "LayerZero",
    address: "0xf52d98b18451eb5501d9929ec40a4caccd2e7e38",
    chainKey: "zksyncsep-testnet",
    eid: 40305
  },
  {
    name: "LayerZero Labs",
    address: "0x605688c4caa80d17448e074faa463ed7b7693d63",
    chainKey: "zksyncsep-testnet",
    eid: 40305
  },
  {
    name: "TSS",
    address: "0xa6bf2be6c60175601bf88217c75dd4b14abb5fbb",
    chainKey: "fuse-mainnet",
    eid: 138
  },
  {
    name: "Stargate",
    address: "0x9f45834f0c8042e36935781b944443e906886a87",
    chainKey: "fuse-mainnet",
    eid: 30138
  },
  {
    name: "BCW",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "fuse-mainnet",
    eid: 30138
  },
  {
    name: "LayerZero Labs",
    address: "0x795f8325af292ff6e58249361d1954893be15aff",
    chainKey: "fuse-mainnet",
    eid: 30138
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "fuse-mainnet",
    eid: 30138
  },
  {
    name: "Nethermind",
    address: "0x809cde2afcf8627312e87a6a7bbffab3f8f347c7",
    chainKey: "fuse-mainnet",
    eid: 30138
  },
  {
    name: "LZDeadDVN",
    address: "0xfb01e486d8b2556a70fe66e4a86d76deab4ba974",
    chainKey: "fuse-mainnet",
    eid: 30138
  },
  {
    name: "TSS",
    address: "0x340b5e5e90a6d177e7614222081e0f9cdd54f25c",
    chainKey: "fuse-testnet",
    eid: 10138
  },
  {
    name: "LayerZero Labs",
    address: "0x955412c07d9bc1027eb4d481621ee063bfd9f4c6",
    chainKey: "fuse-testnet",
    eid: 40138
  },
  {
    name: "Nethermind",
    address: "0x6a4c9096f162f0ab3c0517b0a40dc1ce44785e16",
    chainKey: "klaytn-mainnet",
    eid: 30150
  },
  {
    name: "TSS",
    address: "0xa6bf2be6c60175601bf88217c75dd4b14abb5fbb",
    chainKey: "klaytn-mainnet",
    eid: 150
  },
  {
    name: "Horizen",
    address: "0xacde1f22eeab249d3ca6ba8805c8fee9f52a16e7",
    chainKey: "klaytn-mainnet",
    eid: 30150
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "klaytn-mainnet",
    eid: 30150
  },
  {
    name: "Stargate",
    address: "0x17720e3f361dcc2f70871a2ce3ac51b0eaa5c2e4",
    chainKey: "klaytn-mainnet",
    eid: 30150
  },
  {
    name: "LZDeadDVN",
    address: "0xdc58a279bd69b208a4adfda0aa066f76e33e2901",
    chainKey: "klaytn-mainnet",
    eid: 30150
  },
  {
    name: "LayerZero Labs",
    address: "0xc80233ad8251e668becbc3b0415707fc7075501e",
    chainKey: "klaytn-mainnet",
    eid: 30150
  },
  {
    name: "BCW",
    address: "0x28af4dadbc5066e994986e8bb105240023dc44b6",
    chainKey: "klaytn-mainnet",
    eid: 30150
  },
  {
    name: "TSS",
    address: "0xd682ecf100f6f4284138aa925348633b0611ae21",
    chainKey: "klaytn-testnet",
    eid: 10150
  },
  {
    name: "LayerZero Labs",
    address: "0xe4fe9782b809b7d66f0dcd10157275d2c4e4898d",
    chainKey: "klaytn-testnet",
    eid: 40150
  },
  {
    name: "LZDeadDVN",
    address: "0xf90b61aa892ba0433f54d2c1bf594d89d22ed7f6",
    chainKey: "soneium-mainnet",
    eid: 30340
  },
  {
    name: "Bitgo",
    address: "0xd251d8a85cdfc84518b9454ee6a8d017e503f56c",
    chainKey: "soneium-mainnet",
    eid: 30340
  },
  {
    name: "Nethermind",
    address: "0x5cc4e4d2cdf15795dc5ea383b8768ec91a587719",
    chainKey: "soneium-mainnet",
    eid: 30340
  },
  {
    name: "Horizen",
    address: "0x8fc629aa400d4d9c0b118f2685a49316552abf27",
    chainKey: "soneium-mainnet",
    eid: 30340
  },
  {
    name: "LayerZero Labs",
    address: "0xfdfa2330713a8e2eac6e4f15918f11937ffa4dbe",
    chainKey: "soneium-mainnet",
    eid: 30340
  },
  {
    name: "Stargate",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "soneium-mainnet",
    eid: 30340
  },
  {
    name: "TSS",
    address: "0xf80cb5f7467b67cbec77dce6a13c89f210b554c0",
    chainKey: "soneium-mainnet",
    eid: 340
  },
  {
    name: "Bitgo",
    address: "0x04584d612802a3a26b160e3f90341e6443ddb76a",
    chainKey: "soneium-mainnet",
    eid: 30340
  },
  {
    name: "BWare",
    address: "0xd0d47c34937ddbebbe698267a6bbb1dace51198d",
    chainKey: "holesky-testnet",
    eid: 40217
  },
  {
    name: "LayerZero Labs",
    address: "0x3e43f8ff0175580f7644da043071c289ddf98118",
    chainKey: "holesky-testnet",
    eid: 40217
  },
  {
    name: "Bitgo",
    address: "0xa38e1ff4b2516f6ed7ebbf1bf12a46c766969937",
    chainKey: "holesky-testnet",
    eid: 40217
  },
  {
    name: "TSS",
    address: "0xb23b28012ee92e8de39deb57af31722223034747",
    chainKey: "holesky-testnet",
    eid: 10217
  },
  {
    name: "Bitgo",
    address: "0x7ae0755fbb6f397c4147edd8af159b805de68fca",
    chainKey: "holesky-testnet",
    eid: 40217
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "conflux-mainnet",
    eid: 212
  },
  {
    name: "LayerZero Labs",
    address: "0x8d183a062e99cad6f3723e6d836f9ea13886b173",
    chainKey: "conflux-mainnet",
    eid: 30212
  },
  {
    name: "LZDeadDVN",
    address: "0x3e7647e24553d486ed1b1db94b86c7677ea9ab65",
    chainKey: "conflux-mainnet",
    eid: 30212
  },
  {
    name: "BCW",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "conflux-mainnet",
    eid: 30212
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "conflux-mainnet",
    eid: 30212
  },
  {
    name: "Nethermind",
    address: "0x809cde2afcf8627312e87a6a7bbffab3f8f347c7",
    chainKey: "conflux-mainnet",
    eid: 30212
  },
  {
    name: "TSS",
    address: "0x145c041566b21bec558b2a37f1a5ff261ab55998",
    chainKey: "conflux-testnet",
    eid: 10211
  },
  {
    name: "LayerZero Labs",
    address: "0x62a731f0840d23970d5ec36fb7a586e1d61db9b6",
    chainKey: "conflux-testnet",
    eid: 40211
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "eon-mainnet",
    eid: 215
  },
  {
    name: "LayerZero Labs",
    address: "0xe9ae261d3aff7d3fccf38fa2d612dd3897e07b2d",
    chainKey: "eon-mainnet",
    eid: 30215
  },
  {
    name: "LZDeadDVN",
    address: "0xf9420f9d2552640e242ad89cd5d3b625f92705c9",
    chainKey: "eon-mainnet",
    eid: 30215
  },
  {
    name: "BCW",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "eon-mainnet",
    eid: 30215
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "eon-mainnet",
    eid: 30215
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "eon-testnet",
    eid: 10215
  },
  {
    name: "LZDeadDVN",
    address: "0x701f3927871efcea1235db722f9e608ae120d243",
    chainKey: "nibiru-testnet",
    eid: 40352
  },
  {
    name: "LayerZero Labs",
    address: "0x55c175dd5b039331db251424538169d8495c18d1",
    chainKey: "nibiru-testnet",
    eid: 40352
  },
  {
    name: "LayerZero Labs",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "codex-mainnet",
    eid: 30323
  },
  {
    name: "Horizen",
    address: "0x5131e3a44c499b11bd694d1070635cf49ebfebf3",
    chainKey: "codex-mainnet",
    eid: 30323
  },
  {
    name: "Nethermind",
    address: "0xabc9b1819cc4d9846550f928b985993cf6240439",
    chainKey: "codex-mainnet",
    eid: 30323
  },
  {
    name: "Stargate",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "codex-mainnet",
    eid: 30323
  },
  {
    name: "LZDeadDVN",
    address: "0xce8358bc28dd8296ce8caf1cd2b44787abd65887",
    chainKey: "codex-mainnet",
    eid: 30323
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "codex-testnet",
    eid: 40311
  },
  {
    name: "LayerZero",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "codex-testnet",
    eid: 40311
  },
  {
    name: "LayerZero Labs",
    address: "0x12523de19dc41c91f7d2093e0cfbb76b17012c8d",
    chainKey: "minato-testnet",
    eid: 40334
  },
  {
    name: "Nethermind",
    address: "0xeab9a73194501424372d468970cd5e37529ea971",
    chainKey: "minato-testnet",
    eid: 40334
  },
  {
    name: "Bitgo",
    address: "0xd351a601cd3821ae15466c109d807362b10eee1a",
    chainKey: "minato-testnet",
    eid: 40334
  },
  {
    name: "LZDeadDVN",
    address: "0x55c175dd5b039331db251424538169d8495c18d1",
    chainKey: "minato-testnet",
    eid: 40334
  },
  {
    name: "LZDeadDVN",
    address: "0xc097ab8cd7b053326dfe9fb3e3a31a0cce3b526f",
    chainKey: "cronosevm-mainnet",
    eid: 30359
  },
  {
    name: "LayerZero Labs",
    address: "0xce8358bc28dd8296ce8caf1cd2b44787abd65887",
    chainKey: "cronosevm-mainnet",
    eid: 30359
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "cronosevm-testnet",
    eid: 40359
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "cronosevm-testnet",
    eid: 40359
  },
  {
    name: "LayerZero Labs",
    address: "0x40c744c40deca61aac562921468aa85ae3e49936fadf7275687c2070512cffd3",
    chainKey: "ton-mainnet",
    eid: 30343
  },
  {
    name: "LayerZero Labs",
    address: "0x42e444969684e9149d4b4083459a9f3719d8e7aaa5933f52e7b5fe69d9ef1972",
    chainKey: "ton-mainnet",
    eid: 30343
  },
  {
    name: "LayerZero Labs",
    address: "0xcccfff7463dfe156b5524e2ef663489a00cd98973db1fe03048ceaab1f88fe28",
    chainKey: "ton-sandbox",
    eid: 50343
  },
  {
    name: "LayerZero Labs",
    address: "0x99cb8e7fa52324205b74699fa63d9914bd7c27ecf1264d93fd458f0ae367ede4",
    chainKey: "ton-testnet",
    eid: 40343
  },
  {
    name: "LayerZero Labs",
    address: "0x408932f78e937a28d453741744be81f6589c01a1139afefebce6041b92fd7d39",
    chainKey: "ton-testnet",
    eid: 40343
  },
  {
    name: "Nethermind",
    address: "0x7a23612f07d81f16b26cf0b5a4c3eca0e8668df2",
    chainKey: "etherlink-mainnet",
    eid: 30292
  },
  {
    name: "TSS",
    address: "0xb87396e0d0d8b12169319803b56db763cd738e63",
    chainKey: "etherlink-mainnet",
    eid: 292
  },
  {
    name: "Stargate",
    address: "0x31f748a368a893bdb5abb67ec95f232507601a73",
    chainKey: "etherlink-mainnet",
    eid: 30292
  },
  {
    name: "LayerZero Labs",
    address: "0xc097ab8cd7b053326dfe9fb3e3a31a0cce3b526f",
    chainKey: "etherlink-mainnet",
    eid: 30292
  },
  {
    name: "LZDeadDVN",
    address: "0x6f95f0e1903bdb57b0761c8efe9bc3bfb7e416bb",
    chainKey: "etherlink-mainnet",
    eid: 30292
  },
  {
    name: "LayerZero Labs",
    address: "0x4d97186cd94047e285b7cb78fa63c93e69e7aad0",
    chainKey: "etherlink-testnet",
    eid: 40239
  },
  {
    name: "LayerZero Labs",
    address: "0x1f7e674143031e74bc48a0c570c174a07aa9c5d0",
    chainKey: "dfk-mainnet",
    eid: 30115
  },
  {
    name: "TSS",
    address: "0x88bd5f18a13c22c41cf5c8cba12eb371c4bd18d9",
    chainKey: "dfk-mainnet",
    eid: 115
  },
  {
    name: "Horizen",
    address: "0xa9ff468ad000a4d5729826459197a0db843f433e",
    chainKey: "dfk-mainnet",
    eid: 30115
  },
  {
    name: "BCW",
    address: "0x6a110d94e1baa6984a3d904bab37ae49b90e6b4f",
    chainKey: "dfk-mainnet",
    eid: 30115
  },
  {
    name: "Nethermind",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "dfk-mainnet",
    eid: 30115
  },
  {
    name: "LZDeadDVN",
    address: "0x4cac2e674d1c3c4548a00fbecbba713c902579cf",
    chainKey: "dfk-mainnet",
    eid: 30115
  },
  {
    name: "LayerZero Labs",
    address: "0x685e66cb79b4864ce0a01173f2c5efbf103715ad",
    chainKey: "dfk-testnet",
    eid: 40115
  },
  {
    name: "TSS",
    address: "0x7cfb4fadedc96793f844371d8498f4fdcd37da61",
    chainKey: "dfk-testnet",
    eid: 10115
  },
  {
    name: "TSS",
    address: "0x01bbb6319c596e70342a0cfd1193cfebe10bbb1d",
    chainKey: "sonic-mainnet",
    eid: 332
  },
  {
    name: "Stargate",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "sonic-mainnet",
    eid: 30332
  },
  {
    name: "Nethermind",
    address: "0x05aaefdf9db6e0f7d27fa3b6ee099edb33da029e",
    chainKey: "sonic-mainnet",
    eid: 30332
  },
  {
    name: "Horizen",
    address: "0x54dd79f5ce72b51fcbbcb170dd01e32034323565",
    chainKey: "sonic-mainnet",
    eid: 30332
  },
  {
    name: "LayerZero Labs",
    address: "0x282b3386571f7f794450d5789911a9804fa346b4",
    chainKey: "sonic-mainnet",
    eid: 30332
  },
  {
    name: "LZDeadDVN",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "sonic-mainnet",
    eid: 30332
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "sonic-testnet",
    eid: 40349
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "sonic-testnet",
    eid: 40349
  },
  {
    name: "TSS",
    address: "0xcf1b0f4106b0324f96fefcc31ba9498caa80701c",
    chainKey: "blockgen-testnet",
    eid: 10177
  },
  {
    name: "BCW",
    address: "0xd77a62b54ee18bcd667b6cd158d5a000182af5cf",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "Zenrock",
    address: "0x9e930731cb4a6bf7ecc11f695a295c60bdd212eb",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "BCW",
    address: "0xb3ce0a5d132cd9bf965aba435e650c55edce0062",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "Superform",
    address: "0xeb62f578497bdc351dd650853a751135212faf49",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "Nethermind",
    address: "0x658947bc7956aea0067a62cf87ab02ae199ef3f3",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "Omnicat",
    address: "0xe6cd8c2e46ef396df88048449e5b1c75172b40c3",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "Bitgo",
    address: "0x133e9fb2d339d8428476a714b1113b024343811e",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "Nethermind",
    address: "0xcd37ca043f8479064e10635020c65ffc005d36f6",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "Lagrange",
    address: "0xc50a49186aa80427aa3b0d3c2cec19ba64222a29",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "LayerZero Labs",
    address: "0xb1473ac9f58fb27597a21710da9d1071841e8163",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "Google",
    address: "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "LZDeadDVN",
    address: "0x6498b0632f3834d7647367334838111c8c889703",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "Omnix",
    address: "0xeede111103535e473451311e26c3e6660b0f77e1",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "TSS",
    address: "0xaab5a48cfc03efa9cc34a2c1aacccb84b4b770e4",
    chainKey: "base-mainnet",
    eid: 184
  },
  {
    name: "LayerZero Labs",
    address: "0x9e059a54699a285714207b43b055483e78faac25",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "Stargate",
    address: "0xcdf31d62140204c08853b547e64707110fbc6680",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "Bitgo",
    address: "0x7a3d18e2324536294cd6f054cdde7c994f40391a",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "base-mainnet",
    eid: 184
  },
  {
    name: "AltLayer",
    address: "0x8deec5b3deb8640bf79b334b59227454e0901953",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "ABDB",
    address: "0x41ef29f974fc9f6772654f005271c64210425391",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "Horizen",
    address: "0xa7b5189bca84cd304d8553977c7c614329750d99",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "BWare",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "Nocturnal",
    address: "0xf4c489afd83625f510947e63ff8f90dfee0ae46c",
    chainKey: "base-mainnet",
    eid: 30184
  },
  {
    name: "TSS",
    address: "0x53fd4c4fbbd53f6bc58cae6704b92db1f360a648",
    chainKey: "base-testnet",
    eid: 10160
  },
  {
    name: "LZDeadDVN",
    address: "0x06e56abd0cb3c88880644ba3c534a498ca18e5c8",
    chainKey: "abstract-mainnet",
    eid: 30324
  },
  {
    name: "Stargate",
    address: "0xcec9f0a49073ac4a1c439d06cb9448512389a64e",
    chainKey: "abstract-mainnet",
    eid: 30324
  },
  {
    name: "Horizen",
    address: "0x264fe346fcd0a89e3b41a6499bac80dea7e908d2",
    chainKey: "abstract-mainnet",
    eid: 30324
  },
  {
    name: "Nethermind",
    address: "0xc4a1f52fda034a9a5e1b3b27d14451d15776fef6",
    chainKey: "abstract-mainnet",
    eid: 30324
  },
  {
    name: "LayerZero Labs",
    address: "0xf4da94b4ee9d8e209e3bf9f469221ce2731a7112",
    chainKey: "abstract-mainnet",
    eid: 30324
  },
  {
    name: "LayerZero Labs",
    address: "0x5dfcab27c1eec1eb07ff987846013f19355a04cb",
    chainKey: "abstract-testnet",
    eid: 40313
  },
  {
    name: "LZDeadDVN",
    address: "0x2dcc8cfb612fdbc0fb657ea1b51a6f77b8b86448",
    chainKey: "abstract-testnet",
    eid: 40313
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "zkatana-mainnet",
    eid: 257
  },
  {
    name: "LZDeadDVN",
    address: "0x01ca5322ce196568a62780c480bb0cc0b595efec",
    chainKey: "zkatana-mainnet",
    eid: 30257
  },
  {
    name: "Horizen",
    address: "0x0131a4ce592e5f5eabb08e62b1ceeb9bafeba036",
    chainKey: "zkatana-mainnet",
    eid: 30257
  },
  {
    name: "LayerZero Labs",
    address: "0xce8358bc28dd8296ce8caf1cd2b44787abd65887",
    chainKey: "zkatana-mainnet",
    eid: 30257
  },
  {
    name: "TSS",
    address: "0x145c041566b21bec558b2a37f1a5ff261ab55998",
    chainKey: "zkatana-testnet",
    eid: 10220
  },
  {
    name: "P2P",
    address: "0x539008c98b17803a273edf98aba2d4414ee3f4d7",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Flowdesk",
    address: "0x57f61546bd2259db04ee7132ac385e5447174403",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Horizen",
    address: "0x9e930731cb4a6bf7ecc11f695a295c60bdd212eb",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Bitgo",
    address: "0xf24dc834039a1e39f6b99a51df05df9c91e35b2d",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Superduper",
    address: "0xdf30c9f6a70ce65a152c5bd09826525d7e97ba49",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "TSS",
    address: "0xa0cc33dd6f4819d473226257792afe230ec3c67f",
    chainKey: "optimism-mainnet",
    eid: 111
  },
  {
    name: "Blockhunters",
    address: "0xb3ce0a5d132cd9bf965aba435e650c55edce0062",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Stablelab",
    address: "0xcd37ca043f8479064e10635020c65ffc005d36f6",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Chainlink",
    address: "0x150a58e9e6bf69cceb1dba5ae97c166dc8792539",
    chainKey: "optimism-mainnet",
    eid: 111
  },
  {
    name: "Axelar",
    address: "0x218b462e19d00c8fed4adbce78f33aef88d2ccfc",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Nethermind",
    address: "0x6075e53dc2ddcfa81142fbad52315ae627ffce75",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "BCW",
    address: "0x73ddc92e39aeda95feb8d3e0008016d9f1268c76",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "AltLayer",
    address: "0x06e8042729cef3ae6d6db5350f48f9d736c3675d",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Google",
    address: "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Superform",
    address: "0xb0b2ef168f52f6d1e42f461e11117295ef992daf",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Luganodes",
    address: "0xd841a741addcb6dea735d3b8c9faf96ba3f3d30d",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "POPS",
    address: "0xe552485d02edd3067fe7fcbd4dd56bb1d3a998d2",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "LayerZero Labs",
    address: "0x6a02d83e8d433304bba74ef1c427913958187142",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "ABDB",
    address: "0x3b247f1b48f055ebf2db593672b98c9597e3081e",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Stakingcabin",
    address: "0x56d675bfd1574ff170723689223c3a93dee5fa78",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "BWare",
    address: "0x19670df5e16bea2ba9b9e68b48c054c5baea06b8",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Planetarium",
    address: "0x021e401c2a1a60618c5e6353a40524971eba1e8d",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "optimism-mainnet",
    eid: 111
  },
  {
    name: "Bitgo",
    address: "0x90ee303d4743f460b9a38415e09f3799b85a4efc",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Canary",
    address: "0x5b6735c66d97479ccd18294fc96b3084ecb2fa3f",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Restake",
    address: "0xcced05c3667877b545285b25f19f794436a1c481",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Nethermind",
    address: "0xa7b5189bca84cd304d8553977c7c614329750d99",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Zenrock",
    address: "0xaf75bfd402f3d4ee84978179a6c87d16c4bd1724",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Lagrange",
    address: "0xa4281c1c88f0278ff696edeb517052153190fc9e",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Nocturnal",
    address: "0x47039f4327f74e755f65821040a7e0addd596d09",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Paxos",
    address: "0xd77a62b54ee18bcd667b6cd158d5a000182af5cf",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Omnix",
    address: "0x03d2414476a742aba715bcc337583c820525e22a",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Delegate",
    address: "0x7a205ed4e3d7f9d0777594501705d8cd405c3b05",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Nodesguru",
    address: "0xe6cd8c2e46ef396df88048449e5b1c75172b40c3",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Switchboard",
    address: "0x313328609a9c38459cae56625fff7f2ad6dcde3b",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Gitcoin",
    address: "0xb4fa7f1c67e5ec99b556ec92cbddbcdd384106f2",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Stakingcabin",
    address: "0xea0c32623d19d888e926e68667a5e42853fa91b4",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Tapioca",
    address: "0xabc9b1819cc4d9846550f928b985993cf6240439",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "01node",
    address: "0x969a0bdd86a230345ad87a6a381de5ed9e6cda85",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "ABDB",
    address: "0x7b8a0fd9d6ae5011d5cbd3e85ed6d5510f98c9bf",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "BCW",
    address: "0x41f3a349e6ac46caad2da04cfceae3e0de0e6c0c",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Shrapnel",
    address: "0xd36246c322ee102a2203bca9cafb84c179d306f6",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Ubisoft",
    address: "0x51accfb59e4bda0f8324934f9789e9ea19fbeff4",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "MIM",
    address: "0xd954bf7968ef68875c9100c9ec890f969504d120",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Stargate",
    address: "0xfe6507f094155cabb4784403cd784c2df04122dd",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "LZDeadDVN",
    address: "0xebc3065003e67caac747836da272d9e5271a37e1",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "LayerZero Labs",
    address: "0xd4925b81f62457caca368412315d230535b9a48a",
    chainKey: "optimism-mainnet",
    eid: 30111
  },
  {
    name: "Google",
    address: "0xd9777221e6acc6e13f745da6ee1849c774fe8ed9",
    chainKey: "optimism-testnet",
    eid: 40132
  },
  {
    name: "TSS",
    address: "0x97597016f7dac89e55005105fc755c0513973fa8",
    chainKey: "optimism-testnet",
    eid: 10132
  },
  {
    name: "Nethermind",
    address: "0xd40527ccd4cc3c0d1efc33363539349544c18b5f",
    chainKey: "optimism-testnet",
    eid: 40132
  },
  {
    name: "Nethermind",
    address: "0x70bf42c69173d6e33b834f59630dac592c70b369",
    chainKey: "dexalot-mainnet",
    eid: 30118
  },
  {
    name: "LayerZero Labs",
    address: "0xb98d764d25d53f803f05d451225612e4a9a3b712",
    chainKey: "dexalot-mainnet",
    eid: 30118
  },
  {
    name: "TSS",
    address: "0xa6bf2be6c60175601bf88217c75dd4b14abb5fbb",
    chainKey: "dexalot-mainnet",
    eid: 118
  },
  {
    name: "Horizen",
    address: "0xd42306df1a805d8053bc652ce0cd9f62bde80146",
    chainKey: "dexalot-mainnet",
    eid: 30118
  },
  {
    name: "BCW",
    address: "0x58dff8622759ea75910a08dba5d060579271dcd7",
    chainKey: "dexalot-mainnet",
    eid: 30118
  },
  {
    name: "LZDeadDVN",
    address: "0x92918f4ad410517b635a8961a64e77bdf8798ddc",
    chainKey: "dexalot-mainnet",
    eid: 30118
  },
  {
    name: "LayerZero Labs",
    address: "0x433daf5e5fba834de2c3d06a82403c9e96df6b42",
    chainKey: "dexalot-testnet",
    eid: 40118
  },
  {
    name: "TSS",
    address: "0xab38efc6917086576137e4927af3a4d57da5f00c",
    chainKey: "dexalot-testnet",
    eid: 10118
  },
  {
    name: "TSS",
    address: "0x236b9303d513ddf3f4c4e93a640fb80a178872f1",
    chainKey: "aavegotchi-testnet",
    eid: 10191
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "memecoreformicarium-testnet",
    eid: 40354
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "memecoreformicarium-testnet",
    eid: 40354
  },
  {
    name: "LayerZero Labs",
    address: "0x35b24d49241ffe21e93b7745411fc72f06b7e7ce",
    chainKey: "memecoreformicarium-testnet",
    eid: 40354
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "plume2-testnet",
    eid: 40329
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "plume2-testnet",
    eid: 40329
  },
  {
    name: "LayerZero Labs",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "story-mainnet",
    eid: 30364
  },
  {
    name: "LZDeadDVN",
    address: "0xce8358bc28dd8296ce8caf1cd2b44787abd65887",
    chainKey: "story-mainnet",
    eid: 30364
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "story-testnet",
    eid: 40315
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "story-testnet",
    eid: 40315
  },
  {
    name: "Nethermind",
    address: "0x261150ab73528dbd51573a52917eab243be9729a",
    chainKey: "ebi-mainnet",
    eid: 30282
  },
  {
    name: "Stargate",
    address: "0x97841d4ab18e9a923322a002d5b8eb42b31ccdb5",
    chainKey: "ebi-mainnet",
    eid: 30282
  },
  {
    name: "Stakingcabin",
    address: "0x796e526de6ebb62b006ea680e52175a22eadbff7",
    chainKey: "ebi-mainnet",
    eid: 30282
  },
  {
    name: "LZDeadDVN",
    address: "0x9f3f929f87b29f07a7026cfbc40e0e6b476d2185",
    chainKey: "ebi-mainnet",
    eid: 30282
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "ebi-mainnet",
    eid: 30282
  },
  {
    name: "Horizen",
    address: "0x3a2d3a2249691809c34fb9733fd0d826d1aee028",
    chainKey: "ebi-mainnet",
    eid: 30282
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "ebi-testnet",
    eid: 40284
  },
  {
    name: "Horizen",
    address: "0xbd237ef21319e2200487bdf30c188c6c34b16d3b",
    chainKey: "taiko-mainnet",
    eid: 30290
  },
  {
    name: "LZDeadDVN",
    address: "0xc30ff4f3182a75c0be27493fa357886c06c384b6",
    chainKey: "taiko-mainnet",
    eid: 30290
  },
  {
    name: "Stakingcabin",
    address: "0x2c7185f5b0976397d9eb5c19d639d4005e6708f0",
    chainKey: "taiko-mainnet",
    eid: 30290
  },
  {
    name: "LayerZero Labs",
    address: "0xc097ab8cd7b053326dfe9fb3e3a31a0cce3b526f",
    chainKey: "taiko-mainnet",
    eid: 30290
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "taiko-mainnet",
    eid: 30290
  },
  {
    name: "TSS",
    address: "0x0ec3aa6352a0bfa3352523938260e42c212fa8e7",
    chainKey: "taiko-mainnet",
    eid: 290
  },
  {
    name: "Stargate",
    address: "0x37473676ff697f2eba29c8a3105309abf00ba013",
    chainKey: "taiko-mainnet",
    eid: 30290
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "taiko-testnet",
    eid: 40274
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "kiwi-testnet",
    eid: 10209
  },
  {
    name: "LayerZero Labs",
    address: "0xcfc3f9dd0205b76ff04e20243f106465dd829656",
    chainKey: "tiltyard-mainnet",
    eid: 30238
  },
  {
    name: "Horizen",
    address: "0x0165c910ea47964a23dc4fb7c7483f6f3ad462ae",
    chainKey: "tiltyard-mainnet",
    eid: 30238
  },
  {
    name: "TSS",
    address: "0xfdfa2330713a8e2eac6e4f15918f11937ffa4dbe",
    chainKey: "tiltyard-mainnet",
    eid: 238
  },
  {
    name: "LZDeadDVN",
    address: "0xa50d9c4ad49933f7bc0574d8c54427ec42c2b073",
    chainKey: "tiltyard-mainnet",
    eid: 30238
  },
  {
    name: "LayerZero Labs",
    address: "0x07fd0e370b49919ca8da0ce842b8177263c0e12c",
    chainKey: "sophon-mainnet",
    eid: 30334
  },
  {
    name: "Stargate",
    address: "0x7cc1a4a700aab8fba8160a4e09b04a9a68c6d914",
    chainKey: "sophon-mainnet",
    eid: 30334
  },
  {
    name: "Nethermind",
    address: "0xa1a31d9ddf919e87a23a1416b0aa0b600d32435d",
    chainKey: "sophon-mainnet",
    eid: 30334
  },
  {
    name: "Horizen",
    address: "0xcec9f0a49073ac4a1c439d06cb9448512389a64e",
    chainKey: "sophon-mainnet",
    eid: 30334
  },
  {
    name: "LZDeadDVN",
    address: "0x04830f6decf08dec9ed6c3fcad215245b78a59e1",
    chainKey: "sophon-mainnet",
    eid: 30334
  },
  {
    name: "LayerZero Labs",
    address: "0xe2f60a4cb9445a3e3d1a7e76a5f46cb8139838b8",
    chainKey: "sophon-testnet",
    eid: 40341
  },
  {
    name: "LZDeadDVN",
    address: "0xe18a1f5942b31f075b00b5f5e944f384b15abf83",
    chainKey: "sophon-testnet",
    eid: 40341
  },
  {
    name: "LZDeadDVN",
    address: "0x9c0b5520e3ec0cce919ceaa1fb5aaa7cdab437d4",
    chainKey: "treasure-testnet",
    eid: 40348
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "treasure-testnet",
    eid: 40348
  },
  {
    name: "LayerZero Labs",
    address: "0x6869b4348fae6a911fdb5bae5e0d153b2aa261f6",
    chainKey: "treasure-testnet",
    eid: 40348
  },
  {
    name: "LayerZero",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "treasure-testnet",
    eid: 40348
  },
  {
    name: "LayerZero Labs",
    address: "0x12523de19dc41c91f7d2093e0cfbb76b17012c8d",
    chainKey: "metissep-testnet",
    eid: 40292
  },
  {
    name: "LZDeadDVN",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "bl5-mainnet",
    eid: 30338
  },
  {
    name: "TSS",
    address: "0xbef15a890bb0e73312fd38a5ce6f36f33827fcae",
    chainKey: "kiwi2-testnet",
    eid: 10241
  },
  {
    name: "Nodesguru",
    address: "0x3a5a74f863ec48c1769c4ee85f6c3d70f5655e2a",
    chainKey: "zklink-mainnet",
    eid: 30301
  },
  {
    name: "BWare",
    address: "0x1253e268bc04bb43cb96d2f7ee858b8a1433cf6d",
    chainKey: "zklink-mainnet",
    eid: 30301
  },
  {
    name: "LZDeadDVN",
    address: "0x4c1ac7b3c1223887db9178d2437200b594effcf4",
    chainKey: "zklink-mainnet",
    eid: 30301
  },
  {
    name: "TSS",
    address: "0xb6a4cc4a7d78fb37d668297d4c76fe750de626a3",
    chainKey: "zklink-mainnet",
    eid: 301
  },
  {
    name: "LayerZero Labs",
    address: "0x04830f6decf08dec9ed6c3fcad215245b78a59e1",
    chainKey: "zklink-mainnet",
    eid: 30301
  },
  {
    name: "Horizen",
    address: "0x27bb790440376db53c840326263801fafd9f0ee6",
    chainKey: "zklink-mainnet",
    eid: 30301
  },
  {
    name: "TSS",
    address: "0x8b82a8de13af4bdac68134494d83a7aacc113165",
    chainKey: "zklink-mainnet",
    eid: 301
  },
  {
    name: "LayerZero Labs",
    address: "0x6869b4348fae6a911fdb5bae5e0d153b2aa261f6",
    chainKey: "zklink-testnet",
    eid: 40283
  },
  {
    name: "LayerZero Labs",
    address: "0xdf8f0a53b20f1656f998504b81259698d126523a31bdbbae45ba1e8a3078d8da",
    chainKey: "aptos-mainnet",
    eid: 30108
  },
  {
    name: "TSS",
    address: "0x12e12de0af996d9611b0b78928cd9f4cbf50d94d972043cdd829baa77a78929b",
    chainKey: "aptos-mainnet",
    eid: 108
  },
  {
    name: "Horizen",
    address: "0x93adea241d46ddebc207d74402ff9a150f70b9de828b8b2208d69b7d08e90bd7",
    chainKey: "aptos-mainnet",
    eid: 30108
  },
  {
    name: "Nethermind",
    address: "0x7aae9c9a36878bdd16fc77dedd1bdc9a1711ad0513f8ea26b0fd4fcd4e3abcac",
    chainKey: "aptos-mainnet",
    eid: 30108
  },
  {
    name: "LayerZero",
    address: "0x51ec85b4cf4d7ac03a2a42853a5f0cfbd22f56fda66726e1f98906d5829b7c22",
    chainKey: "aptos-sandbox",
    eid: 0
  },
  {
    name: "LayerZero",
    address: "0x1f79b324153abe0ca18a279822f3b561acbaabb4d68d47ed3639b5a53e4d3470",
    chainKey: "aptos-sandbox",
    eid: 0
  },
  {
    name: "LayerZero Labs",
    address: "0x756f8ab056688d22687740f4a9aeec3b361170b28d08b719e28c4d38eed1043e",
    chainKey: "aptos-testnet",
    eid: 40108
  },
  {
    name: "TSS",
    address: "0x47a30bcdb5b5bdbf6af883c7325827f3e40b3f52c3538e9e677e68cf0c0db060",
    chainKey: "aptos-testnet",
    eid: 10108
  },
  {
    name: "LayerZero Labs",
    address: "0xd6f420483a90c7db5ce2ec12e8acfc2bfb7b93829c9e6a3b0760bca330be64dd",
    chainKey: "aptos-testnet",
    eid: 40108
  },
  {
    name: "Japan Blockchain Foundation",
    address: "0x7c84feb58183d3865e4e01d1b6c22ba2d227dc23",
    chainKey: "arbsep-testnet",
    eid: 40231
  },
  {
    name: "LZDeadDVN",
    address: "0xa85be08a6ce2771c730661766aacf2c8bb24c611",
    chainKey: "arbsep-testnet",
    eid: 40231
  },
  {
    name: "BWare",
    address: "0x9f529527a6810f1b661fb2aeea19378ce5a2c23e",
    chainKey: "arbsep-testnet",
    eid: 40231
  },
  {
    name: "LayerZero Labs",
    address: "0x5c8c267174e1f345234ff5315d6cfd6716763bac",
    chainKey: "arbsep-testnet",
    eid: 40231
  },
  {
    name: "Bitgo",
    address: "0x500e6064cb1fe164974cc0a4fe9151928c870bbe",
    chainKey: "arbsep-testnet",
    eid: 40231
  },
  {
    name: "Nethermind",
    address: "0x3a74f7174709842d3b8a14ce60b4aa2499f2a2f2",
    chainKey: "arbsep-testnet",
    eid: 40231
  },
  {
    name: "Bitgo",
    address: "0x0fbb88ff8d38cd1e917149cd14076852f13e088e",
    chainKey: "arbsep-testnet",
    eid: 40231
  },
  {
    name: "LayerZero Labs",
    address: "0x53f488e93b4f1b60e8e83aa374dbe1780a1ee8a8",
    chainKey: "arbsep-testnet",
    eid: 40231
  },
  {
    name: "TSS",
    address: "0x145c041566b21bec558b2a37f1a5ff261ab55998",
    chainKey: "arbsep-testnet",
    eid: 10231
  },
  {
    name: "AltLayer",
    address: "0x47cee39389206557f88118a54efdbce13b28b6a4",
    chainKey: "arbsep-testnet",
    eid: 40231
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "lisk-mainnet",
    eid: 30321
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "lisk-mainnet",
    eid: 30321
  },
  {
    name: "Horizen",
    address: "0x6c5f923b63fdd52fb9c45daefa8695fa6b55a935",
    chainKey: "lisk-mainnet",
    eid: 30321
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "lisk-testnet",
    eid: 40327
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "lisk-testnet",
    eid: 40327
  },
  {
    name: "LayerZero",
    address: "0x7f890e79ba7c2011afa5dbf63849b7dc7f56c7c2bf82318a0142ac238dab4950",
    chainKey: "initia-sandbox",
    eid: 0
  },
  {
    name: "LayerZero",
    address: "0xf0ad1b2b2295c7c80a83de59427dee9627363355",
    chainKey: "initia-sandbox",
    eid: 0
  },
  {
    name: "LayerZero Labs",
    address: "0xcb92299263684d4b9db6e3d45a07d894995790f21b4b7a089f6145ce4dcc8125",
    chainKey: "initia-testnet",
    eid: 0
  },
  {
    name: "LayerZero",
    address: "0x1fdbdab3fec27ece61e37839a079b2f9eda60b64",
    chainKey: "initia-testnet",
    eid: 0
  },
  {
    name: "LayerZero Labs",
    address: "0x3f12330ba9e26a604e2149b4b67c0710d32fcbc3de0bea76dd43dbb6b747bc8c",
    chainKey: "initia-testnet",
    eid: 0
  },
  {
    name: "LayerZero Labs",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "bouncebit-mainnet",
    eid: 30293
  },
  {
    name: "LZDeadDVN",
    address: "0x1f7e674143031e74bc48a0c570c174a07aa9c5d0",
    chainKey: "bouncebit-mainnet",
    eid: 30293
  },
  {
    name: "Horizen",
    address: "0x8d77d35604a9f37f488e41d1d916b2a0088f82dd",
    chainKey: "bouncebit-mainnet",
    eid: 30293
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "bouncebit-testnet",
    eid: 40289
  },
  {
    name: "LayerZero Labs",
    address: "0x701f3927871efcea1235db722f9e608ae120d243",
    chainKey: "lineasep-testnet",
    eid: 40287
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "bl6-testnet",
    eid: 40357
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "bl6-testnet",
    eid: 40357
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "apexfusionnexus-testnet",
    eid: 40355
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "apexfusionnexus-testnet",
    eid: 40355
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "swell-mainnet",
    eid: 30335
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "swell-mainnet",
    eid: 30335
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "swell-mainnet",
    eid: 30335
  },
  {
    name: "Horizen",
    address: "0xf4672690ef45b46eaa3b688fe2f0fc09e9366b20",
    chainKey: "swell-mainnet",
    eid: 30335
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "swell-testnet",
    eid: 40353
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "swell-testnet",
    eid: 40353
  },
  {
    name: "LayerZero Labs",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "edu-mainnet",
    eid: 30328
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "edu-mainnet",
    eid: 30328
  },
  {
    name: "LZDeadDVN",
    address: "0xce8358bc28dd8296ce8caf1cd2b44787abd65887",
    chainKey: "edu-mainnet",
    eid: 30328
  },
  {
    name: "Horizen",
    address: "0xf4672690ef45b46eaa3b688fe2f0fc09e9366b20",
    chainKey: "edu-mainnet",
    eid: 30328
  },
  {
    name: "LayerZero Labs",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "flare-mainnet",
    eid: 30295
  },
  {
    name: "Horizen",
    address: "0xeaa5a170d2588f84773f965281f8611d61312832",
    chainKey: "flare-mainnet",
    eid: 30295
  },
  {
    name: "Stakingcabin",
    address: "0xce97511db880571a7c31821eb026ef12fcac892e",
    chainKey: "flare-mainnet",
    eid: 30295
  },
  {
    name: "Stargate",
    address: "0x8d77d35604a9f37f488e41d1d916b2a0088f82dd",
    chainKey: "flare-mainnet",
    eid: 30295
  },
  {
    name: "LZDeadDVN",
    address: "0x28b6140ead70cb2fb669705b3598ffb4beaa060b",
    chainKey: "flare-mainnet",
    eid: 30295
  },
  {
    name: "Nethermind",
    address: "0x9bcd17a654bffaa6f8fea38d19661a7210e22196",
    chainKey: "flare-mainnet",
    eid: 30295
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "flare-mainnet",
    eid: 30295
  },
  {
    name: "LayerZero Labs",
    address: "0x12523de19dc41c91f7d2093e0cfbb76b17012c8d",
    chainKey: "flare-testnet",
    eid: 40294
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "lif3-testnet",
    eid: 40300
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "lif3-testnet",
    eid: 40300
  },
  {
    name: "TSS",
    address: "0x45841dd1ca50265da7614fc43a361e526c0e6160",
    chainKey: "lif3-testnet",
    eid: 10300
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "fi-testnet",
    eid: 40301
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "fi-testnet",
    eid: 40301
  },
  {
    name: "LZDeadDVN",
    address: "0x25dcd7adc3ab4c00b8bcf78f33d95a19211eab48",
    chainKey: "homeverse-mainnet",
    eid: 30265
  },
  {
    name: "Horizen",
    address: "0x97841d4ab18e9a923322a002d5b8eb42b31ccdb5",
    chainKey: "homeverse-mainnet",
    eid: 30265
  },
  {
    name: "TSS",
    address: "0xcbd35a9b849342ad34a71e072d9947d4afb4e164",
    chainKey: "homeverse-mainnet",
    eid: 265
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "homeverse-mainnet",
    eid: 30265
  },
  {
    name: "Stakingcabin",
    address: "0x1294e3347ec64fd63e1d0594dc1294247cd237c7",
    chainKey: "homeverse-mainnet",
    eid: 30265
  },
  {
    name: "Ubisoft",
    address: "0x60af1c48abd2f6013e06269292a77b3285e984b9",
    chainKey: "homeverse-mainnet",
    eid: 30265
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "homeverse-testnet",
    eid: 40265
  },
  {
    name: "LZDeadDVN",
    address: "0x4cf1b3fa61465c2c907f82fc488b43223ba0cf93",
    chainKey: "moksha-testnet",
    eid: 40342
  },
  {
    name: "LayerZero Labs",
    address: "0x9db9ca3305b48f196d18082e91cb64663b13d014",
    chainKey: "moksha-testnet",
    eid: 40342
  },
  {
    name: "LZDeadDVN",
    address: "0xfe9e60ee82c8e800bd48c4fc2ae1b7716528cc56",
    chainKey: "rarible-mainnet",
    eid: 30235
  },
  {
    name: "TSS",
    address: "0x3a73033c0b1407574c76bdbac67f126f6b4a9aa9",
    chainKey: "rarible-mainnet",
    eid: 235
  },
  {
    name: "Nethermind",
    address: "0xb53648ca1aa054a80159c1175c03679fdc76bf88",
    chainKey: "rarible-mainnet",
    eid: 30235
  },
  {
    name: "LayerZero Labs",
    address: "0x0b5e5452d0c9da1bb5fb0664f48313e9667d7820",
    chainKey: "rarible-mainnet",
    eid: 30235
  },
  {
    name: "Stargate",
    address: "0x2fa870cee4da57de84d1db36759d4716ad7e5038",
    chainKey: "rarible-mainnet",
    eid: 30235
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "rarible-mainnet",
    eid: 30235
  },
  {
    name: "LayerZero Labs",
    address: "0xfc7c4b995a9293a1123bdd425531cfcd71082de4",
    chainKey: "rarible-testnet",
    eid: 40235
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "exocore-testnet",
    eid: 40259
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "space-mainnet",
    eid: 30341
  },
  {
    name: "LayerZero Labs",
    address: "0x7cacbe439ead55fa1c22790330b12835c6884a91",
    chainKey: "space-mainnet",
    eid: 30341
  },
  {
    name: "LZDeadDVN",
    address: "0x282b3386571f7f794450d5789911a9804fa346b4",
    chainKey: "space-mainnet",
    eid: 30341
  },
  {
    name: "LayerZero Labs",
    address: "0xb0487596a0b62d1a71d0c33294bd6eb635fc6b09",
    chainKey: "besu1-testnet",
    eid: 40288
  },
  {
    name: "LayerZero Labs",
    address: "0xe1975c47779edaaaba31f64934a33affd3ce15c2",
    chainKey: "astar-mainnet",
    eid: 30210
  },
  {
    name: "Nethermind",
    address: "0xb19a9370d404308040a9760678c8ca28affbbb76",
    chainKey: "astar-mainnet",
    eid: 30210
  },
  {
    name: "LZDeadDVN",
    address: "0x6626d0739b2b04b70b372394274eb77cad0824b2",
    chainKey: "astar-mainnet",
    eid: 30210
  },
  {
    name: "Horizen",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "astar-mainnet",
    eid: 30210
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "astar-mainnet",
    eid: 210
  },
  {
    name: "BCW",
    address: "0x7a7ddc46882220a075934f40380d3a7e1e87d409",
    chainKey: "astar-mainnet",
    eid: 30210
  },
  {
    name: "BWare",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "astar-mainnet",
    eid: 30210
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "astar-testnet",
    eid: 10210
  },
  {
    name: "LayerZero Labs",
    address: "0x190deb4f8555872b454920d6047a04006eee4ca9",
    chainKey: "astar-testnet",
    eid: 40210
  },
  {
    name: "BWare",
    address: "0x44f29fa5237e6ba7bc6dd2fbe758e11ddc5e67a6",
    chainKey: "astar-testnet",
    eid: 40210
  },
  {
    name: "BWare",
    address: "0x10901f74cae315f674d3f6fc0645217fe4fad77c",
    chainKey: "mode-mainnet",
    eid: 30260
  },
  {
    name: "Horizen",
    address: "0xacde1f22eeab249d3ca6ba8805c8fee9f52a16e7",
    chainKey: "mode-mainnet",
    eid: 30260
  },
  {
    name: "LayerZero Labs",
    address: "0xce8358bc28dd8296ce8caf1cd2b44787abd65887",
    chainKey: "mode-mainnet",
    eid: 30260
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "mode-mainnet",
    eid: 260
  },
  {
    name: "LZDeadDVN",
    address: "0x7b9e184e07a6ee1ac23eae0fe8d6be2f663f05e6",
    chainKey: "mode-mainnet",
    eid: 30260
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "mode-mainnet",
    eid: 30260
  },
  {
    name: "Stargate",
    address: "0x06559ee34d85a88317bf0bfe307444116c631b67",
    chainKey: "mode-mainnet",
    eid: 30260
  },
  {
    name: "Nethermind",
    address: "0xcd37ca043f8479064e10635020c65ffc005d36f6",
    chainKey: "mode-mainnet",
    eid: 30260
  },
  {
    name: "LayerZero Labs",
    address: "0x12523de19dc41c91f7d2093e0cfbb76b17012c8d",
    chainKey: "mode-testnet",
    eid: 40260
  },
  {
    name: "Zenrock",
    address: "0x1383981c78393b36f59c4f8f4f12f1b4eb249ebf",
    chainKey: "blast-mainnet",
    eid: 30243
  },
  {
    name: "Horizen",
    address: "0x70bf42c69173d6e33b834f59630dac592c70b369",
    chainKey: "blast-mainnet",
    eid: 30243
  },
  {
    name: "BWare",
    address: "0xabc9b1819cc4d9846550f928b985993cf6240439",
    chainKey: "blast-mainnet",
    eid: 30243
  },
  {
    name: "Axelar",
    address: "0xb830a5afcbebb936c30c607a18bbba9f5b0a592f",
    chainKey: "blast-mainnet",
    eid: 30243
  },
  {
    name: "LZDeadDVN",
    address: "0x73dd395e80a2dd6d88db11e69f15d534d182f019",
    chainKey: "blast-mainnet",
    eid: 30243
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "blast-mainnet",
    eid: 243
  },
  {
    name: "Polyhedra",
    address: "0x0ff4cc28826356503bb79c00637bec0ee006f237",
    chainKey: "blast-mainnet",
    eid: 30243
  },
  {
    name: "LayerZero Labs",
    address: "0xc097ab8cd7b053326dfe9fb3e3a31a0cce3b526f",
    chainKey: "blast-mainnet",
    eid: 30243
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "blast-mainnet",
    eid: 30243
  },
  {
    name: "Superform",
    address: "0x0e95cf21ad9376a26997c97f326c5a0a267bb8ff",
    chainKey: "blast-mainnet",
    eid: 30243
  },
  {
    name: "Omnicat",
    address: "0x25e0e650a78e6304a3983fc4b7ffc6544b1beea6",
    chainKey: "blast-mainnet",
    eid: 30243
  },
  {
    name: "LayerZero Labs",
    address: "0x939afd54a8547078dbea02b683a7f1fdc929f853",
    chainKey: "blast-testnet",
    eid: 40243
  },
  {
    name: "LZDeadDVN",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "zircuit-mainnet",
    eid: 30303
  },
  {
    name: "Horizen",
    address: "0xdcdd4628f858b45260c31d6ad076bd2c3d3c2f73",
    chainKey: "zircuit-mainnet",
    eid: 30303
  },
  {
    name: "TSS",
    address: "0x4b80f7d25c451d204b1c93d9bdf2ab3b04f3ea4a",
    chainKey: "zircuit-mainnet",
    eid: 303
  },
  {
    name: "Stakingcabin",
    address: "0x92ef4381a03372985985e70fb15e9f081e2e8d14",
    chainKey: "zircuit-mainnet",
    eid: 30303
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "zircuit-mainnet",
    eid: 30303
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "zircuit-mainnet",
    eid: 30303
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "zircuit-testnet",
    eid: 40275
  },
  {
    name: "LayerZero Labs",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "xchain-mainnet",
    eid: 30291
  },
  {
    name: "Horizen",
    address: "0x0e5c792ec122cbe89ce0085d7efcdb151eae3376",
    chainKey: "xchain-mainnet",
    eid: 30291
  },
  {
    name: "LZDeadDVN",
    address: "0x69fbed8561f829efbb3c9785f1983641b27887e7",
    chainKey: "xchain-mainnet",
    eid: 30291
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "xchain-mainnet",
    eid: 30291
  },
  {
    name: "Stargate",
    address: "0x56053a8f4db677e5774f8ee5bdd9d2dc270075f3",
    chainKey: "xchain-mainnet",
    eid: 30291
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "xchain-testnet",
    eid: 40282
  },
  {
    name: "LayerZero Labs",
    address: "0x9c061c9a4782294eef65ef28cb88233a987f4bdd",
    chainKey: "bevm-mainnet",
    eid: 30317
  },
  {
    name: "TSS",
    address: "0x6c47e59bc0600942146bf37668fc92b369c85ab7",
    chainKey: "bevm-mainnet",
    eid: 317
  },
  {
    name: "Horizen",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "bevm-mainnet",
    eid: 30317
  },
  {
    name: "LZDeadDVN",
    address: "0xce8358bc28dd8296ce8caf1cd2b44787abd65887",
    chainKey: "bevm-mainnet",
    eid: 30317
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "bevm-testnet",
    eid: 40324
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "bevm-testnet",
    eid: 40324
  },
  {
    name: "LZDeadDVN",
    address: "0x790def6091dd5e5e8c3f8550b37a04790e0ba492",
    chainKey: "root-testnet",
    eid: 40318
  },
  {
    name: "LayerZero",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "root-testnet",
    eid: 40318
  },
  {
    name: "LayerZero Labs",
    address: "0xb100823baa9f8d625052fc8f544fc307b0184b18",
    chainKey: "root-testnet",
    eid: 40318
  },
  {
    name: "Bitgo",
    address: "0x07ff86c392588254ad10f0811dbbcad45f4c7d87",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Chainlink",
    address: "0x150a58e9e6bf69cceb1dba5ae97c166dc8792539",
    chainKey: "avalanche-mainnet",
    eid: 106
  },
  {
    name: "Google",
    address: "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Planetarium",
    address: "0x2ac038606fff3fb00317b8f0ccfb4081694acdd0",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Stablelab",
    address: "0x5fddd320a1e29bb466fa635661b125d51d976f92",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Superform",
    address: "0x8fb0b7d74b557e4b45ef89648bac197eab2e4325",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Luganodes",
    address: "0xe4193136b92ba91402313e95347c8e9fad8d27d0",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "avalanche-mainnet",
    eid: 106
  },
  {
    name: "Paxos",
    address: "0x41ef29f974fc9f6772654f005271c64210425391",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Gitcoin",
    address: "0xcced05c3667877b545285b25f19f794436a1c481",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Omnix",
    address: "0x21caf0bce846aaa78c9f23c5a4ec5988ecbf9988",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "POPS",
    address: "0x2b8cbea81315130a4c422e875063362640ddfeb0",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Flowdesk",
    address: "0x795c62387ef3022b61f2c705bfbe5d94a78b971d",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Blockhunters",
    address: "0xd074b6bbcbec2f2b4c4265de3d95e521f82bf669",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Restake",
    address: "0x377b51593a03b82543c1508fe7e75aba6acde008",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Nocturnal",
    address: "0xbd836c4c9d2c3ff94718173b463054c3e2c11cf4",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Bitgo",
    address: "0xc18d69d1a83294d0886e1b79f241405f1fa86cb6",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "BCW",
    address: "0x7b8a0fd9d6ae5011d5cbd3e85ed6d5510f98c9bf",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Canary",
    address: "0xcc49e6fca014c77e1eb604351cc1e08c84511760",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Shrapnel",
    address: "0x6a110d94e1baa6984a3d904bab37ae49b90e6b4f",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Superduper",
    address: "0x0e95cf21ad9376a26997c97f326c5a0a267bb8ff",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Stakingcabin",
    address: "0xb6323aa5a3fc07d93a3cf0f1044447f2a88b7dab",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Horizen",
    address: "0x07c05eab7716acb6f83ebf6268f8eecda8892ba1",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "P2P",
    address: "0xe94ae34dfcc87a61836938641444080b98402c75",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "01node",
    address: "0xa80aa110f05c9c6140018aae0c4e08a70f43350d",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Zenrock",
    address: "0xe552485d02edd3067fe7fcbd4dd56bb1d3a998d2",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Nodesguru",
    address: "0xd251d8a85cdfc84518b9454ee6a8d017e503f56c",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "BWare",
    address: "0xcff5b0608fa638333f66e0da9d4f1eb906ac18e3",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Nethermind",
    address: "0xa59ba433ac34d2927232918ef5b2eaafcf130ba5",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Axelar",
    address: "0xc390fd7ca590a505655eb6c454ed0783c99a2ea9",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Republic",
    address: "0x1feb08b1a53a9710afce82d380b8c2833c69a37e",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Ubisoft",
    address: "0xc86d023c11c5e8aa731f40b65158590624d242af",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "MIM",
    address: "0xf45742bbfabcee739ea2a2d0ba2dd140f1f2c6a3",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "AltLayer",
    address: "0x8efb6b7dc61c6b6638714747d5e6b81a3512b5c3",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Tapioca",
    address: "0xd24972c11f91c1bb9eaee97ec96bb9c33cf7af24",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "LayerZero Labs",
    address: "0x0ffe02df012299a370d5dd69298a5826eacafdf8",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "LZDeadDVN",
    address: "0x90cca24d1338bd284c25776d9c12f96764bde5e1",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Nethermind",
    address: "0x1308151a7ebac14f435d3ad5ff95c34160d539a5",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "ABDB",
    address: "0xab82e9b24004b954985528dac14d1b020722a3c8",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Switchboard",
    address: "0x92ef4381a03372985985e70fb15e9f081e2e8d14",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "LayerZero Labs",
    address: "0x962f502a63f5fbeb44dc9ab932122648e8352959",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Stakingcabin",
    address: "0x54dd79f5ce72b51fcbbcb170dd01e32034323565",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "TSS",
    address: "0x5a54fe5234e811466d5366846283323c954310b2",
    chainKey: "avalanche-mainnet",
    eid: 106
  },
  {
    name: "CCIP",
    address: "0xd46270746acbca85dab8de1ce1d71c46c2f2994c",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "BCW",
    address: "0x7a42a1c1deba75756f9af12bee6b29cfc2be3d70",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Delegate",
    address: "0x83d06212b6647b0d0865e730270751e3fdf5036e",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Stargate",
    address: "0x252b234545e154543ad2784c7111eb90406be836",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "ABDB",
    address: "0xffe42dc3927a240f3459e5ec27eaabd88727173e",
    chainKey: "avalanche-mainnet",
    eid: 30106
  },
  {
    name: "Bitgo",
    address: "0x8ca279897cde74350bd880737fd60c047d6d3d64",
    chainKey: "avalanche-testnet",
    eid: 40106
  },
  {
    name: "P2P",
    address: "0xdbec329a5e6d7fb0113eb0a098750d2afd61e9ae",
    chainKey: "avalanche-testnet",
    eid: 40106
  },
  {
    name: "Republic",
    address: "0xefdd92121acb3acd6e2f09dd810752d8da3dfdaf",
    chainKey: "avalanche-testnet",
    eid: 40106
  },
  {
    name: "Google",
    address: "0xa4652582077afc447ea7c9e984d656ee4963fe95",
    chainKey: "avalanche-testnet",
    eid: 40106
  },
  {
    name: "Nethermind",
    address: "0x7883f83ea40a56137a63baf93bfee5b9b8c1c447",
    chainKey: "avalanche-testnet",
    eid: 40106
  },
  {
    name: "BWare",
    address: "0x0d88ab4c8e8f89d8d758cbd5a6373f86f7bd737b",
    chainKey: "avalanche-testnet",
    eid: 40106
  },
  {
    name: "Switchboard",
    address: "0xca5ab7adcd3ea879f1a1c4eee81eaccd250173e4",
    chainKey: "avalanche-testnet",
    eid: 40106
  },
  {
    name: "LayerZero Labs",
    address: "0x9f0e79aeb198750f963b6f30b99d87c6ee5a0467",
    chainKey: "avalanche-testnet",
    eid: 40106
  },
  {
    name: "TSS",
    address: "0x92cfdb3789693c2ae7225fcc2c263de94d630be4",
    chainKey: "avalanche-testnet",
    eid: 10106
  },
  {
    name: "Delegate",
    address: "0xe0f3389bf8a8aa1576b420d888cd462483fdc2a0",
    chainKey: "avalanche-testnet",
    eid: 40106
  },
  {
    name: "Stablelab",
    address: "0xfde647565009b33b1df02689d5873bffff15d907",
    chainKey: "avalanche-testnet",
    eid: 40106
  },
  {
    name: "Bitgo",
    address: "0xa1d84e5576299acda9ffed53195eadbe60d48e83",
    chainKey: "avalanche-testnet",
    eid: 40106
  },
  {
    name: "Gitcoin",
    address: "0x071fbf35b35d48afc3edf84f0397980c25531560",
    chainKey: "avalanche-testnet",
    eid: 40106
  },
  {
    name: "TSS",
    address: "0xa6bf2be6c60175601bf88217c75dd4b14abb5fbb",
    chainKey: "zkpolygon-mainnet",
    eid: 158
  },
  {
    name: "Horizen",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "zkpolygon-mainnet",
    eid: 30158
  },
  {
    name: "Ubisoft",
    address: "0xd074b6bbcbec2f2b4c4265de3d95e521f82bf669",
    chainKey: "zkpolygon-mainnet",
    eid: 30158
  },
  {
    name: "BCW",
    address: "0x12b4e588beb7154519c0c6f737bb8cba1d4e5bc7",
    chainKey: "zkpolygon-mainnet",
    eid: 30158
  },
  {
    name: "LayerZero Labs",
    address: "0x488863d609f3a673875a914fbee7508a1de45ec6",
    chainKey: "zkpolygon-mainnet",
    eid: 30158
  },
  {
    name: "LZDeadDVN",
    address: "0xbd8f7f0b165213aaabb5a9ea0d572d5fd9829664",
    chainKey: "zkpolygon-mainnet",
    eid: 30158
  },
  {
    name: "Nethermind",
    address: "0x7a7ddc46882220a075934f40380d3a7e1e87d409",
    chainKey: "zkpolygon-mainnet",
    eid: 30158
  },
  {
    name: "BWare",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "zkpolygon-mainnet",
    eid: 30158
  },
  {
    name: "LayerZero",
    address: "0x45e8f8c14e792e9d9cff576b6b34150a403f3ad8",
    chainKey: "zkpolygon-testnet",
    eid: 40158
  },
  {
    name: "TSS",
    address: "0x00c5c0b8e0f75ab862cbaaecfff499db555fbdd2",
    chainKey: "zkpolygon-testnet",
    eid: 10158
  },
  {
    name: "BWare",
    address: "0x360b319fa74547a0fac8cb74dd7b6b3dbc5e5fc4",
    chainKey: "zkpolygon-testnet",
    eid: 40158
  },
  {
    name: "TSS",
    address: "0xcb566e3b6934fa77258d68ea18e931fa75e1aaaa",
    chainKey: "pgn-mainnet",
    eid: 218
  },
  {
    name: "Horizen",
    address: "0x8d77d35604a9f37f488e41d1d916b2a0088f82dd",
    chainKey: "pgn-mainnet",
    eid: 30218
  },
  {
    name: "TSS",
    address: "0x6c7ab2202c98c4227c5c46f1417d81144da716ff",
    chainKey: "pgn-testnet",
    eid: 10223
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "monad-testnet",
    eid: 40204
  },
  {
    name: "LZDeadDVN",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "monad-testnet",
    eid: 40204
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "cyber-mainnet",
    eid: 30283
  },
  {
    name: "LZDeadDVN",
    address: "0x9c8d8a224545c15024cb50c7c02cf3ea9aa1bf36",
    chainKey: "cyber-mainnet",
    eid: 30283
  },
  {
    name: "Horizen",
    address: "0x9885110b909e88bb94f7f767a68ec2558b2afa73",
    chainKey: "cyber-mainnet",
    eid: 30283
  },
  {
    name: "Nethermind",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "cyber-mainnet",
    eid: 30283
  },
  {
    name: "Stakingcabin",
    address: "0x2206ceb6809bd39f8707ed5ee618f8cfa57e40f2",
    chainKey: "cyber-mainnet",
    eid: 30283
  },
  {
    name: "LayerZero Labs",
    address: "0x6788f52439aca6bff597d3eec2dc9a44b8fee842",
    chainKey: "cyber-mainnet",
    eid: 30283
  },
  {
    name: "LayerZero Labs",
    address: "0x88b27057a9e00c5f05dda29241027aff63f9e6e0",
    chainKey: "cyber-testnet",
    eid: 40280
  },
  {
    name: "LZDeadDVN",
    address: "0xc1868e054425d378095a003ecba3823a5d0135c9",
    chainKey: "curtis-testnet",
    eid: 40306
  },
  {
    name: "LayerZero Labs",
    address: "0xf49d162484290eaead7bb8c2c7e3a6f8f52e32d6",
    chainKey: "curtis-testnet",
    eid: 40306
  },
  {
    name: "Horizen",
    address: "0x7fe673201724925b5c477d4e1a4bd3e954688cf5",
    chainKey: "mantle-mainnet",
    eid: 30181
  },
  {
    name: "Ondo Staging",
    address: "0x377b51593a03b82543c1508fe7e75aba6acde008",
    chainKey: "mantle-mainnet",
    eid: 30181
  },
  {
    name: "Stargate",
    address: "0xfe809470016196573d64a8d17a745bebea4ecc41",
    chainKey: "mantle-mainnet",
    eid: 30181
  },
  {
    name: "Ondo",
    address: "0xdeb742e71d57603d8f769ce36f4353468007fc02",
    chainKey: "mantle-mainnet",
    eid: 30181
  },
  {
    name: "Polyhedra",
    address: "0x8ddf05f9a5c488b4973897e278b58895bf87cb24",
    chainKey: "mantle-mainnet",
    eid: 30181
  },
  {
    name: "Axelar",
    address: "0x6e6359a9abe2e235ef2b82e48f0f93d1ec16afbb",
    chainKey: "mantle-mainnet",
    eid: 30181
  },
  {
    name: "Mantle03",
    address: "0x78203678d264063815dac114ea810e9837cd80f7",
    chainKey: "mantle-mainnet",
    eid: 30181
  },
  {
    name: "Mantle02",
    address: "0x5a4c666e9c7aa86fd4fbfdfbfd04646dcc45c6c5",
    chainKey: "mantle-mainnet",
    eid: 30181
  },
  {
    name: "Mantle02",
    address: "0x18f76f0d8ccd176bbe59b3870fa486d1fff87026",
    chainKey: "mantle-mainnet",
    eid: 30181
  },
  {
    name: "LZDeadDVN",
    address: "0x2e2af282e98bfaded5dd6ec51c7240d818ddbbd9",
    chainKey: "mantle-mainnet",
    eid: 30181
  },
  {
    name: "Nethermind",
    address: "0xb19a9370d404308040a9760678c8ca28affbbb76",
    chainKey: "mantle-mainnet",
    eid: 30181
  },
  {
    name: "TSS",
    address: "0xaab5a48cfc03efa9cc34a2c1aacccb84b4b770e4",
    chainKey: "mantle-mainnet",
    eid: 181
  },
  {
    name: "LayerZero Labs",
    address: "0x28b6140ead70cb2fb669705b3598ffb4beaa060b",
    chainKey: "mantle-mainnet",
    eid: 30181
  },
  {
    name: "Mantle01",
    address: "0x0d7cb4033e0c193f65b3639e61b6986a29bf1dd4",
    chainKey: "mantle-mainnet",
    eid: 30181
  },
  {
    name: "Polyhedra",
    address: "0xe014fe8c4d5c23edb7ac4011f226e869ac7ef5cc",
    chainKey: "mantle-mainnet",
    eid: 181
  },
  {
    name: "BCW",
    address: "0x7a7ddc46882220a075934f40380d3a7e1e87d409",
    chainKey: "mantle-mainnet",
    eid: 30181
  },
  {
    name: "BWare",
    address: "0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b",
    chainKey: "mantle-mainnet",
    eid: 30181
  },
  {
    name: "TSS",
    address: "0x45841dd1ca50265da7614fc43a361e526c0e6160",
    chainKey: "mantle-testnet",
    eid: 10181
  },
  {
    name: "LayerZero",
    address: "0x988d898a9acf43f61fdbc72aad6eb3f0542e19e1",
    chainKey: "mantle-testnet",
    eid: 40181
  },
  {
    name: "BWare",
    address: "0x7f417f2192b89cf93b8c4ee01d558883a0ad7b47",
    chainKey: "mantle-testnet",
    eid: 40181
  }
];

// src/dvns.ts
var dvns = dvns_default;

exports.dvns = dvns;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-HUIE6JNC.cjs.map