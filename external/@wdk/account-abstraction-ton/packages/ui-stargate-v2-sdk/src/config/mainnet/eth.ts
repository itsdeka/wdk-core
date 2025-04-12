import type {StargateV2Config} from '../../types/StargateV2Config';
import {createConfig} from '../../types/zod';

export const ETH_MAINNET: StargateV2Config = createConfig({
  assetId: 13,
  deployments: {
    arbitrum: {
      eid: 30110,
      token: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      lpToken: {
        name: 'ETH-LP',
        symbol: 'S*ETH',
        decimals: 18,
        address: '0x993614e1c8c9C5AbE49462Ce5702431978Fd767F',
      },
      feeLib: {
        address: '0xda82A31dF339BfDF0123661134b4DB63Cb1706f5',
      },
      tokenMessaging: {
        address: '0x19cFCE47eD54a88614648DC3f19A5980097007dD',
      },
      stargatePoolNative: {
        address: '0xA45B5130f36CDcA45667738e2a258AB09f4A5f7F',
      },
    },
    base: {
      eid: 30184,
      token: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      lpToken: {
        name: 'ETH-LP',
        symbol: 'S*ETH',
        decimals: 18,
        address: '0x98fB8522d891F43B771e2d27367b41Ba138D0B80',
      },
      feeLib: {
        address: '0x17E450Be3Ba9557F2378E20d64AD417E59Ef9A34',
      },
      tokenMessaging: {
        address: '0x5634c4a5FEd09819E3c46D86A965Dd9447d86e47',
      },
      stargatePoolNative: {
        address: '0xdc181Bd607330aeeBEF6ea62e03e5e1Fb4B6F7C7',
      },
    },
    ethereum: {
      eid: 30101,
      token: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      lpToken: {
        name: 'ETH-LP',
        symbol: 'S*ETH',
        decimals: 18,
        address: '0xfcb42A0e352a08AbD50b8EE68d01f581B6Dfd80A',
      },
      feeLib: {
        address: '0x3E368B6C95c6fEfB7A16dCc0D756389F3c658a06',
      },
      tokenMessaging: {
        address: '0x6d6620eFa72948C5f68A3C8646d58C00d3f4A980',
      },
      stargatePoolNative: {
        address: '0x77b2043768d28E9C9aB44E1aBfC95944bcE57931',
      },
    },
    flare: {
      eid: 30295,
      token: {
        name: 'WETH',
        symbol: 'WETH',
        decimals: 18,
        address: '0x1502FA4be69d526124D453619276FacCab275d3D',
      },
      feeLib: {
        address: '0xCd4302D950e7e6606b6910Cd232758b5ad423311',
      },
      tokenMessaging: {
        address: '0x45d417612e177672958dC0537C45a8f8d754Ac2E',
      },
      stargateOft: {
        address: '0x8e8539e4CcD69123c623a106773F2b0cbbc58746',
      },
    },
    gravity: {
      eid: 30294,
      token: {
        name: 'WETH',
        symbol: 'WETH',
        decimals: 18,
        address: '0xf6f832466Cd6C21967E0D954109403f36Bc8ceaA',
      },
      feeLib: {
        address: '0x77C71633C34C3784ede189d74223122422492a0f',
      },
      tokenMessaging: {
        address: '0x9c2dc7377717603eB92b2655c5f2E7997a4945BD',
      },
      stargateOft: {
        address: '0x17d65bF79E77B6Ab21d8a0afed3bC8657d8Ee0B2',
      },
    },
    iota: {
      eid: 30284,
      token: {
        name: 'WETH',
        symbol: 'WETH',
        decimals: 18,
        address: '0x160345fC359604fC6e70E3c5fAcbdE5F7A9342d8',
      },
      feeLib: {
        address: '0x0dB9afb4C33be43a0a0e396Fd1383B4ea97aB10a',
      },
      tokenMessaging: {
        address: '0x1C10CC06DC6D35970d1D53B2A23c76ef370d4135',
      },
      stargateOft: {
        address: '0x9c2dc7377717603eB92b2655c5f2E7997a4945BD',
      },
    },
    klaytn: {
      eid: 30150,
      token: {
        name: 'WETH',
        symbol: 'WETH',
        decimals: 18,
        address: '0x55Acee547DF909CF844e32DD66eE55a6F81dC71b',
      },
      feeLib: {
        address: '0xB83ab1FF56cCD2B9E9914c68C182135C3a7ECFcd',
      },
      tokenMessaging: {
        address: '0x16F3F98D82d965988E6853681fD578F4d719A1c0',
      },
      stargateOft: {
        address: '0xBB4957E44401a31ED81Cab33539d9e8993FA13Ce',
      },
    },
    mantle: {
      eid: 30181,
      token: {
        name: 'Ether',
        symbol: 'WETH',
        decimals: 18,
        address: '0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111',
      },
      lpToken: {
        name: 'WETH-LP',
        symbol: 'S*WETH',
        decimals: 18,
        address: '0xc2c3Cc203FB607f2f93e6A15f45556bc83620644',
      },
      feeLib: {
        address: '0x2BC3141AaeA1d84bcd557EeB543253fd9685c0C4',
      },
      tokenMessaging: {
        address: '0x41B491285A4f888F9f636cEc8a363AB9770a0AEF',
      },
      stargatePool: {
        address: '0x4c1d3Fc3fC3c177c3b633427c2F769276c547463',
      },
    },
    metis: {
      eid: 30151,
      token: {
        name: 'Ether',
        symbol: 'WETH',
        decimals: 18,
        address: '0x420000000000000000000000000000000000000A',
      },
      lpToken: {
        name: 'WETH-LP',
        symbol: 'S*WETH',
        decimals: 18,
        address: '0x16C58802FD464D2Ac33B8f1DB57D7717f8365d91',
      },
      feeLib: {
        address: '0xe8CDF27AcD73a434D661C84887215F7598e7d0d3',
      },
      tokenMessaging: {
        address: '0xcbE78230CcA58b9EF4c3c5D1bC0D7E4b3206588a',
      },
      stargatePool: {
        address: '0x36ed193dc7160D3858EC250e69D12B03Ca087D08',
      },
    },
    optimism: {
      eid: 30111,
      token: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      lpToken: {
        name: 'ETH-LP',
        symbol: 'S*ETH',
        decimals: 18,
        address: '0x6Ea313859A5D9F6fF2a68f529e6361174bFD2225',
      },
      feeLib: {
        address: '0x80F755e3091b2Ad99c08Da8D13E9C7635C1b8161',
      },
      tokenMessaging: {
        address: '0xF1fCb4CBd57B67d683972A59B6a7b1e2E8Bf27E6',
      },
      stargatePoolNative: {
        address: '0xe8CDF27AcD73a434D661C84887215F7598e7d0d3',
      },
    },
    scroll: {
      eid: 30214,
      token: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      lpToken: {
        name: 'ETH-LP',
        symbol: 'S*ETH',
        decimals: 18,
        address: '0x73424Acc8749b5c76c7AbBB1B17D1F18Ce0Bb092',
      },
      feeLib: {
        address: '0x2A6c43e0DBDCde23d40c82F45682BC6D8A6dB219',
      },
      tokenMessaging: {
        address: '0x4e422B0aCb2Bd7e3aC70B5c0E5eb806e86a94038',
      },
      stargatePoolNative: {
        address: '0xC2b638Cb5042c1B3c5d5C969361fB50569840583',
      },
    },
    sei: {
      eid: 30280,
      token: {
        name: 'WETH',
        symbol: 'WETH',
        decimals: 18,
        address: '0x160345fC359604fC6e70E3c5fAcbdE5F7A9342d8',
      },
      feeLib: {
        address: '0xDe48600aA18Ae707f5D57e0FaafEC7C118ABaeb2',
      },
      tokenMessaging: {
        address: '0x1502FA4be69d526124D453619276FacCab275d3D',
      },
      stargateOft: {
        address: '0x5c386D85b1B82FD9Db681b9176C8a4248bb6345B',
      },
    },
    linea: {
      eid: 30183,
      token: {
        name: 'Linea Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      lpToken: {
        name: 'ETH-LP',
        symbol: 'S*ETH',
        decimals: 18,
        address: '0x23A46eFDa973Bd4e97Ee84bAc87018537538D078',
      },
      feeLib: {
        address: '0x6E3d884C96d640526F273C61dfcF08915eBd7e2B',
      },
      tokenMessaging: {
        address: '0x5f688F563Dc16590e570f97b542FA87931AF2feD',
      },
      stargatePoolNative: {
        address: '0x81F6138153d473E8c5EcebD3DC8Cd4903506B075',
      },
    },
  },
  sharedDecimals: 6,
});
