import type {StargateV2Config} from '../../types/StargateV2Config';
import {createConfig} from '../../types/zod';

export const USDC_MAINNET: StargateV2Config = createConfig({
  assetId: 1,
  deployments: {
    arbitrum: {
      eid: 30110,
      token: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6,
        address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      },
      lpToken: {
        name: 'USDC-LP',
        symbol: 'S*USDC',
        decimals: 6,
        address: '0x6Ea313859A5D9F6fF2a68f529e6361174bFD2225',
      },
      feeLib: {
        address: '0x80F755e3091b2Ad99c08Da8D13E9C7635C1b8161',
      },
      tokenMessaging: {
        address: '0x19cFCE47eD54a88614648DC3f19A5980097007dD',
      },
      stargatePool: {
        address: '0xe8CDF27AcD73a434D661C84887215F7598e7d0d3',
      },
    },
    aurora: {
      eid: 30211,
      token: {
        name: 'USDC',
        symbol: 'USDC',
        decimals: 6,
        address: '0x368EBb46ACa6b8D0787C96B2b20bD3CC3F2c45F7',
      },
      lpToken: {
        name: 'USDC-LP',
        symbol: 'S*USDC',
        decimals: 6,
        address: '0x23A46eFDa973Bd4e97Ee84bAc87018537538D078',
      },
      feeLib: {
        address: '0x6E3d884C96d640526F273C61dfcF08915eBd7e2B',
      },
      tokenMessaging: {
        address: '0x5f688F563Dc16590e570f97b542FA87931AF2feD',
      },
      stargatePool: {
        address: '0x81F6138153d473E8c5EcebD3DC8Cd4903506B075',
      },
    },
    avalanche: {
      eid: 30106,
      token: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6,
        address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
      },
      lpToken: {
        name: 'USDC-LP',
        symbol: 'S*USDC',
        decimals: 6,
        address: '0xaDA7A31B692e3AbFccD02C3d7f8aDc5944510291',
      },
      feeLib: {
        address: '0xDFc47DCeF7e8f9Ab19a1b8Af3eeCF000C7ea0B80',
      },
      tokenMessaging: {
        address: '0x17E450Be3Ba9557F2378E20d64AD417E59Ef9A34',
      },
      stargatePool: {
        address: '0x5634c4a5FEd09819E3c46D86A965Dd9447d86e47',
      },
    },
    base: {
      eid: 30184,
      token: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6,
        address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
      },
      lpToken: {
        name: 'USDC-LP',
        symbol: 'S*USDC',
        decimals: 6,
        address: '0x53983F31E8E0D0c3Fd0b8d85654989A1336317d7',
      },
      feeLib: {
        address: '0x08ed1d79D509A6f1020685535028ae60C144441E',
      },
      tokenMessaging: {
        address: '0x5634c4a5FEd09819E3c46D86A965Dd9447d86e47',
      },
      stargatePool: {
        address: '0x27a16dc786820B16E5c9028b75B99F6f604b5d26',
      },
    },
    bsc: {
      eid: 30102,
      token: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 18,
        address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      },
      lpToken: {
        name: 'USDC-LP',
        symbol: 'S*USDC',
        decimals: 18,
        address: '0xd5a9B8b07e9bA3D492b801c84B69E292476805B3',
      },
      feeLib: {
        address: '0x622244fFF1328586D0754D67cc6Ab77e7ab38B7D',
      },
      tokenMessaging: {
        address: '0x6E3d884C96d640526F273C61dfcF08915eBd7e2B',
      },
      stargatePool: {
        address: '0x962Bd449E630b0d928f308Ce63f1A21F02576057',
      },
    },
    ethereum: {
      eid: 30101,
      token: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6,
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      },
      lpToken: {
        name: 'USDC-LP',
        symbol: 'S*USDC',
        decimals: 6,
        address: '0x5DaAee9EF143faFF495B581e9863570e83F99d31',
      },
      feeLib: {
        address: '0x52B35406CB2FB5e0038EdEcFc129A152a1f74087',
      },
      tokenMessaging: {
        address: '0x6d6620eFa72948C5f68A3C8646d58C00d3f4A980',
      },
      stargatePool: {
        address: '0xc026395860Db2d07ee33e05fE50ed7bD583189C7',
      },
    },
    flare: {
      eid: 30295,
      token: {
        name: 'Bridged USDC (Stargate)',
        symbol: 'USDC.e',
        decimals: 6,
        address: '0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6',
      },
      feeLib: {
        address: '0x711b5aAFd4d0A5b7B863Ca434A2678D086830d8E',
      },
      tokenMessaging: {
        address: '0x45d417612e177672958dC0537C45a8f8d754Ac2E',
      },
      stargateOft: {
        address: '0x77C71633C34C3784ede189d74223122422492a0f',
      },
    },
    gravity: {
      eid: 30294,
      token: {
        name: 'Bridged USDC (Stargate)',
        symbol: 'USDC.e',
        decimals: 6,
        address: '0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6',
      },
      feeLib: {
        address: '0x1C10CC06DC6D35970d1D53B2A23c76ef370d4135',
      },
      tokenMessaging: {
        address: '0x9c2dc7377717603eB92b2655c5f2E7997a4945BD',
      },
      stargateOft: {
        address: '0xC1B8045A6ef2934Cf0f78B0dbD489969Fa9Be7E4',
      },
    },
    iota: {
      eid: 30284,
      token: {
        name: 'Bridged USDC (Stargate)',
        symbol: 'USDC.e',
        decimals: 6,
        address: '0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6',
      },
      feeLib: {
        address: '0xCd4302D950e7e6606b6910Cd232758b5ad423311',
      },
      tokenMessaging: {
        address: '0x1C10CC06DC6D35970d1D53B2A23c76ef370d4135',
      },
      stargateOft: {
        address: '0x8e8539e4CcD69123c623a106773F2b0cbbc58746',
      },
    },
    klaytn: {
      eid: 30150,
      token: {
        name: 'Bridged USDC (Stargate)',
        symbol: 'USDC.e',
        decimals: 6,
        address: '0xE2053BCf56D2030d2470Fb454574237cF9ee3D4B',
      },
      feeLib: {
        address: '0x8d92105ae654f494CE10B3b3e4C58186E3e0dA00',
      },
      tokenMessaging: {
        address: '0x16F3F98D82d965988E6853681fD578F4d719A1c0',
      },
      stargateOft: {
        address: '0x01A7c805cc47AbDB254CD8AaD29dE5e447F59224',
      },
    },
    mantle: {
      eid: 30181,
      token: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6,
        address: '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9',
      },
      lpToken: {
        name: 'USDC-LP',
        symbol: 'S*USDC',
        decimals: 6,
        address: '0x5D131cb99cE5642f3d539417A187a93EEae48177',
      },
      feeLib: {
        address: '0x288968ffF40543F168eAf29A54D5C0affD3C8df7',
      },
      tokenMessaging: {
        address: '0x41B491285A4f888F9f636cEc8a363AB9770a0AEF',
      },
      stargatePool: {
        address: '0xAc290Ad4e0c891FDc295ca4F0a6214cf6dC6acDC',
      },
    },
    optimism: {
      eid: 30111,
      token: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6,
        address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
      },
      lpToken: {
        name: 'USDC-LP',
        symbol: 'S*USDC',
        decimals: 6,
        address: '0x8D66Ff1845b1baCC6E87D867CA4680d05A349cA8',
      },
      feeLib: {
        address: '0x1F605162282570dFa6255D27895587f4117F52FA',
      },
      tokenMessaging: {
        address: '0xF1fCb4CBd57B67d683972A59B6a7b1e2E8Bf27E6',
      },
      stargatePool: {
        address: '0xcE8CcA271Ebc0533920C83d39F417ED6A0abB7D0',
      },
    },
    polygon: {
      eid: 30109,
      token: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6,
        address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
      },
      lpToken: {
        name: 'USDC-LP',
        symbol: 'S*USDC',
        decimals: 6,
        address: '0xfe2439B656d8b624c78B7bF7bDc440D101ff9929',
      },
      feeLib: {
        address: '0x3Fc69CC4A842838bCDC9499178740226062b14E4',
      },
      tokenMessaging: {
        address: '0x6CE9bf8CDaB780416AD1fd87b318A077D2f50EaC',
      },
      stargatePool: {
        address: '0x9Aa02D4Fae7F58b8E8f34c66E756cC734DAc7fe4',
      },
    },
    rarible: {
      eid: 30235,
      token: {
        name: 'Bridged USDC (Stargate)',
        symbol: 'USDC.e',
        decimals: 6,
        address: '0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6',
      },
      feeLib: {
        address: '0x9c2dc7377717603eB92b2655c5f2E7997a4945BD',
      },
      tokenMessaging: {
        address: '0xC1B8045A6ef2934Cf0f78B0dbD489969Fa9Be7E4',
      },
      stargateOft: {
        address: '0x875bee36739e7Ce6b60E056451c556a88c59b086',
      },
    },
    scroll: {
      eid: 30214,
      token: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6,
        address: '0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4',
      },
      lpToken: {
        name: 'USDC.e-LP',
        symbol: 'S*USDC.e',
        decimals: 6,
        address: '0x1eA77149Dfd4C80A753aaa39AaFC22453aefcc99',
      },
      feeLib: {
        address: '0x503C5cFEa3477E0A576C8Cf5354023854b7A06Ff',
      },
      tokenMessaging: {
        address: '0x4e422B0aCb2Bd7e3aC70B5c0E5eb806e86a94038',
      },
      stargatePool: {
        address: '0x3Fc69CC4A842838bCDC9499178740226062b14E4',
      },
    },
    sei: {
      eid: 30280,
      token: {
        name: 'USDC',
        symbol: 'USDC',
        decimals: 6,
        address: '0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1',
      },
      lpToken: {
        name: 'USDC-LP',
        symbol: 'S*USDC',
        decimals: 6,
        address: '0x3AE336CD18c50Fc5F23Ad44c6DAd07E83bd2B303',
      },
      feeLib: {
        address: '0xCd4302D950e7e6606b6910Cd232758b5ad423311',
      },
      tokenMessaging: {
        address: '0x1502FA4be69d526124D453619276FacCab275d3D',
      },
      stargatePool: {
        address: '0x45d417612e177672958dC0537C45a8f8d754Ac2E',
      },
    },
    taiko: {
      eid: 30290,
      token: {
        name: 'Bridged USDC (Stargate)',
        symbol: 'USDC.e',
        decimals: 6,
        address: '0x19e26B0638bf63aa9fa4d14c6baF8D52eBE86C5C',
      },
      feeLib: {
        address: '0xCd4302D950e7e6606b6910Cd232758b5ad423311',
      },
      tokenMessaging: {
        address: '0x45d417612e177672958dC0537C45a8f8d754Ac2E',
      },
      stargateOft: {
        address: '0x77C71633C34C3784ede189d74223122422492a0f',
      },
    },
    // xchain: {
    //   eid: 30291,
    //   token: {
    //     name: 'Bridged USDC (Stargate)',
    //     symbol: 'USDC.e',
    //     decimals: 6,
    //     address: '0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6',
    //   },
    //   feeLib: {
    //     address: '0x9c2dc7377717603eB92b2655c5f2E7997a4945BD',
    //   },
    //   tokenMessaging: {
    //     address: '0xC1B8045A6ef2934Cf0f78B0dbD489969Fa9Be7E4',
    //   },
    //   stargateOft: {
    //     address: '0x17d65bF79E77B6Ab21d8a0afed3bC8657d8Ee0B2',
    //   },
    // },
  },
  sharedDecimals: 6,
});
