import type {StargateV2Config} from '../../types/StargateV2Config';
import {createConfig} from '../../types/zod';

export const USDT_MAINNET: StargateV2Config = createConfig({
  assetId: 2,
  deployments: {
    arbitrum: {
      eid: 30110,
      token: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
        address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      },
      lpToken: {
        name: 'USDT-LP',
        symbol: 'S*USDT',
        decimals: 6,
        address: '0x8D66Ff1845b1baCC6E87D867CA4680d05A349cA8',
      },
      feeLib: {
        address: '0x1F605162282570dFa6255D27895587f4117F52FA',
      },
      tokenMessaging: {
        address: '0x19cFCE47eD54a88614648DC3f19A5980097007dD',
      },
      stargatePool: {
        address: '0xcE8CcA271Ebc0533920C83d39F417ED6A0abB7D0',
      },
    },
    avalanche: {
      eid: 30106,
      token: {
        name: 'TetherToken',
        symbol: 'USDt',
        decimals: 6,
        address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
      },
      lpToken: {
        name: 'USDT-LP',
        symbol: 'S*USDT',
        decimals: 6,
        address: '0x80f1b5d3665a61a91f896C1f0790B4062966610E',
      },
      feeLib: {
        address: '0x22BdF9633F3e679785638Db690b85dC0Dc8B35B8',
      },
      tokenMessaging: {
        address: '0x17E450Be3Ba9557F2378E20d64AD417E59Ef9A34',
      },
      stargatePool: {
        address: '0x12dC9256Acc9895B076f6638D628382881e62CeE',
      },
    },
    bsc: {
      eid: 30102,
      token: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 18,
        address: '0x55d398326f99059fF775485246999027B3197955',
      },
      lpToken: {
        name: 'USDT-LP',
        symbol: 'S*USDT',
        decimals: 18,
        address: '0xe664Fd3a278b1E49C20F9B0aF77aA57DC770B21B',
      },
      feeLib: {
        address: '0xDd002227d9bC27f10066ED9A17bE89c43bCafC31',
      },
      tokenMessaging: {
        address: '0x6E3d884C96d640526F273C61dfcF08915eBd7e2B',
      },
      stargatePool: {
        address: '0x138EB30f73BC423c6455C53df6D89CB01d9eBc63',
      },
    },
    ebi: {
      eid: 30282,
      token: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
        address: '0x5489DDAb89609580835eE6d655CD9B3503E7F97D',
      },
      feeLib: {
        address: '0x1a6437BeF5b8615Ef523d00Ef7c9D58D66c0F246',
      },
      tokenMessaging: {
        address: '0x4EeBa4E168b23601EB7716A5D1Ac243B8D375290',
      },
      stargateOft: {
        address: '0xF8c61c8F4Fdd41dd444f7b582C9F440e1b1ADcc8',
      },
    },
    ethereum: {
      eid: 30101,
      token: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
        address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      },
      lpToken: {
        name: 'USDT-LP',
        symbol: 'S*USDT',
        decimals: 6,
        address: '0x17BBC9BD51A52aAf4d2CC6652630DaF4fdB358F7',
      },
      feeLib: {
        address: '0xe171AFcd1E0394b3312e68ca823D5BC87F3Db311',
      },
      tokenMessaging: {
        address: '0x6d6620eFa72948C5f68A3C8646d58C00d3f4A980',
      },
      stargatePool: {
        address: '0x933597a323Eb81cAe705C5bC29985172fd5A3973',
      },
    },
    flare: {
      eid: 30295,
      token: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
        address: '0x0B38e83B86d491735fEaa0a791F65c2B99535396',
      },
      feeLib: {
        address: '0x8c1014B5936dD88BAA5F4DB0423C3003615E03a0',
      },
      tokenMessaging: {
        address: '0x45d417612e177672958dC0537C45a8f8d754Ac2E',
      },
      stargateOft: {
        address: '0x1C10CC06DC6D35970d1D53B2A23c76ef370d4135',
      },
    },
    gravity: {
      eid: 30294,
      token: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
        address: '0x816E810f9F787d669FB71932DeabF6c83781Cd48',
      },
      feeLib: {
        address: '0x45d417612e177672958dC0537C45a8f8d754Ac2E',
      },
      tokenMessaging: {
        address: '0x9c2dc7377717603eB92b2655c5f2E7997a4945BD',
      },
      stargateOft: {
        address: '0x0B38e83B86d491735fEaa0a791F65c2B99535396',
      },
    },
    iota: {
      eid: 30284,
      token: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
        address: '0xC1B8045A6ef2934Cf0f78B0dbD489969Fa9Be7E4',
      },
      feeLib: {
        address: '0x711b5aAFd4d0A5b7B863Ca434A2678D086830d8E',
      },
      tokenMessaging: {
        address: '0x1C10CC06DC6D35970d1D53B2A23c76ef370d4135',
      },
      stargateOft: {
        address: '0x77C71633C34C3784ede189d74223122422492a0f',
      },
    },
    kava: {
      eid: 30177,
      token: {
        name: 'TetherUSDt',
        symbol: 'USDt',
        decimals: 6,
        address: '0x919C1c267BC06a7039e03fcc2eF738525769109c',
      },
      lpToken: {
        name: 'USDT-LP',
        symbol: 'S*USDT',
        decimals: 6,
        address: '0x9B8b53CDB3a241E838cDE548d7D8B76DA759D90B',
      },
      feeLib: {
        address: '0xA76CD3a43751090c40a35C37B38aA06973Cc6184',
      },
      tokenMessaging: {
        address: '0x6B73D3cBbb278Ce2E8698E983AecCdD94Dc4594B',
      },
      stargatePool: {
        address: '0x41A5b0470D96656Fb3e8f68A218b39AdBca3420b',
      },
    },
    klaytn: {
      eid: 30150,
      token: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
        address: '0x9025095263d1E548dc890A7589A4C78038aC40ab',
      },
      feeLib: {
        address: '0x6eFfA1afE190a652a8204D318fec03D3dD9402d2',
      },
      tokenMessaging: {
        address: '0x16F3F98D82d965988E6853681fD578F4d719A1c0',
      },
      stargateOft: {
        address: '0x8619bA1B324e099CB2227060c4BC5bDEe14456c6',
      },
    },
    mantle: {
      eid: 30181,
      token: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
        address: '0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE',
      },
      lpToken: {
        name: 'USDT-LP',
        symbol: 'S*USDT',
        decimals: 6,
        address: '0xe1152564ED7B59e01915FC95bBF87cF9b6636fe6',
      },
      feeLib: {
        address: '0xa81274AFac523D639DbcA2C32c1470f1600cCEBe',
      },
      tokenMessaging: {
        address: '0x41B491285A4f888F9f636cEc8a363AB9770a0AEF',
      },
      stargatePool: {
        address: '0xB715B85682B731dB9D5063187C450095c91C57FC',
      },
    },
    metis: {
      eid: 30151,
      token: {
        name: 'USDT Token',
        symbol: 'm.USDT',
        decimals: 6,
        address: '0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC',
      },
      lpToken: {
        name: 'USDT-LP',
        symbol: 'S*USDT',
        decimals: 6,
        address: '0x222A9a6dD812CA5a27fFfEC39816A2DF6837D396',
      },
      feeLib: {
        address: '0x19cFCE47eD54a88614648DC3f19A5980097007dD',
      },
      tokenMessaging: {
        address: '0xcbE78230CcA58b9EF4c3c5D1bC0D7E4b3206588a',
      },
      stargatePool: {
        address: '0x4dCBFC0249e8d5032F89D6461218a9D2eFff5125',
      },
    },
    optimism: {
      eid: 30111,
      token: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
        address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
      },
      lpToken: {
        name: 'USDT-LP',
        symbol: 'S*USDT',
        decimals: 6,
        address: '0x9f58A79D81477130C0C6D74b96e1397db9765ab1',
      },
      feeLib: {
        address: '0x3da4f8E456AC648c489c286B99Ca37B666be7C4C',
      },
      tokenMessaging: {
        address: '0xF1fCb4CBd57B67d683972A59B6a7b1e2E8Bf27E6',
      },
      stargatePool: {
        address: '0x19cFCE47eD54a88614648DC3f19A5980097007dD',
      },
    },
    polygon: {
      eid: 30109,
      token: {
        name: '(PoS) Tether USD',
        symbol: 'USDT',
        decimals: 6,
        address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
      },
      lpToken: {
        name: 'USDT-LP',
        symbol: 'S*USDT',
        decimals: 6,
        address: '0x3e3C6dC77Ebf9EA16E6d83bf3ba021aAa7374Ca7',
      },
      feeLib: {
        address: '0x4e422B0aCb2Bd7e3aC70B5c0E5eb806e86a94038',
      },
      tokenMessaging: {
        address: '0x6CE9bf8CDaB780416AD1fd87b318A077D2f50EaC',
      },
      stargatePool: {
        address: '0xd47b03ee6d86Cf251ee7860FB2ACf9f91B9fD4d7',
      },
    },
    rarible: {
      eid: 30235,
      token: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
        address: '0x362FAE9A75B27BBc550aAc28a7c1F96C8D483120',
      },
      feeLib: {
        address: '0x8e8539e4CcD69123c623a106773F2b0cbbc58746',
      },
      tokenMessaging: {
        address: '0xC1B8045A6ef2934Cf0f78B0dbD489969Fa9Be7E4',
      },
      stargateOft: {
        address: '0x17d65bF79E77B6Ab21d8a0afed3bC8657d8Ee0B2',
      },
    },
    sei: {
      eid: 30280,
      token: {
        name: 'USDT',
        symbol: 'USDT',
        decimals: 6,
        address: '0xB75D0B03c06A926e488e2659DF1A861F860bD3d1',
      },
      lpToken: {
        name: 'USDT-LP',
        symbol: 'S*USDT',
        decimals: 6,
        address: '0xe1d6BE6B535EbCaa41bF23eEb22d08119ae258ed',
      },
      feeLib: {
        address: '0x711b5aAFd4d0A5b7B863Ca434A2678D086830d8E',
      },
      tokenMessaging: {
        address: '0x1502FA4be69d526124D453619276FacCab275d3D',
      },
      stargatePool: {
        address: '0x0dB9afb4C33be43a0a0e396Fd1383B4ea97aB10a',
      },
    },
    taiko: {
      eid: 30290,
      token: {
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
        address: '0x9c2dc7377717603eB92b2655c5f2E7997a4945BD',
      },
      feeLib: {
        address: '0x711b5aAFd4d0A5b7B863Ca434A2678D086830d8E',
      },
      tokenMessaging: {
        address: '0x45d417612e177672958dC0537C45a8f8d754Ac2E',
      },
      stargateOft: {
        address: '0x1C10CC06DC6D35970d1D53B2A23c76ef370d4135',
      },
    },
  },
  sharedDecimals: 6,
});
