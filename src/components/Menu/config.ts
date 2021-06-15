import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.dragonballfinance.org/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.dragonballfinance.org/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://www.dragonballfinance.org/pools'
  },
//   {
//     label: 'Layer 1',
//     icon: 'LayerIcon',
//     href: 'https://dragonballfinance.org/layer/info',
//   },
//   {
//     label: 'Super Siyan Pool',
//     icon: 'PoolIcon',
//     href: 'https://dragonballfinance.org/supersaiyanpool'
//   },
//   {
//     label: 'NFT',
//     icon: 'NftIcon',
//     href: 'https://www.dragonballfinance.org/Nft',
//   },
//   {
//     label: 'Lottery',
//     icon: 'TicketIcon',
//     href: 'https://www.dragonballfinance.org/Lottery',
//   },
//   {
//     label: 'Gaming App',
//     icon: 'NftIcon',
//     href: 'https://www.dragonballfinance.org/Gaming',
//   },
//  {
//     label: 'DBALL Info',
//     icon: 'InfoIcon',
//     items: [
//       {
//         label: 'BSC Scan',
//         href: 'https://bscscan.com/token/0xceB2f5e9C7F2D3BCd12A7560D73c56f3396af3F9',
//       },
//       {
//         label: 'Price Graph',
//         href: 'https://dex.guru/token/0xceB2f5e9C7F2D3BCd12A7560D73c56f3396af3F9-bsc',
//       },
//       {
//         label: 'DApp Radar',
//         href: 'https://dappradar.com/binance-smart-chain/defi/dragonball-finance',
//       },
//     ],
//   },
//   {
//     label: 'SENZU Info',
//     icon: 'InfoIcon',
//     items: [
//       {
//         label: 'BSC Scan',
//         href: 'https://bscscan.com/token/0xcBA1813Ede683333020cedea7C3b63FbaC28e78e',
//       },
//       {
//         label: 'Price Graph',
//         href: 'https://dex.guru/token/0xcBA1813Ede683333020cedea7C3b63FbaC28e78e-bsc',
//       },
//       {
//         label: 'DApp Radar',
//         href: 'https://dappradar.com/binance-smart-chain/defi/dragonball-finance',
//       },
//     ],
//   },
//   {
//     label: 'More',
//     icon: 'MoreIcon',
//     items: [
//       {
//         label: 'Github',
//         href: 'https://github.com/DragonBallFinance',
//       },
//       {
//         label: 'Docs',
//         href: 'https://docs.dragonballfinance.org/',
//       },
//       {
//         label: 'Blog',
//         href: 'https://dragonballfinance.medium.com/',
//       },
//       {
//         label: 'Whitepaper',
//         href: 'https://dragonballfinance.org/Whitepaper.pdf',
//       },
//     ],
//   },
//   {
//     label: 'Roadmap',
//     icon: 'RoadmapIcon',
//     href: 'https://dragonballfinance.org/Roadmap',
//   },
//   {
//     label: 'DBALL Audit',
//     icon: 'AuditIcon',
//     href: 'https://dragonballfinance.org/Dball.pdf',
//   },
//   {
//     label: 'SENZU Audit',
//     icon: 'AuditIcon',
//     href: 'https://dragonballfinance.org/Senzu.pdf',
//   },
]

export default config
