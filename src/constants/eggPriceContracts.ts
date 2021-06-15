// 使用 bitdogetoken对BUSD给前端喂价
const priceContracts: {cakeAddress: string, busdAddress: string, lpAddress:string} = {
  // BITDOGETOKEN地址
  cakeAddress: '0xceB2f5e9C7F2D3BCd12A7560D73c56f3396af3F9',
  // BUSD地址
  busdAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  // BITDOGETOKEN-BUSD 交易对LP 地址
  lpAddress: '0x55d06D963CDc4405E204FB1585b45b5E8e353719'
}

export default priceContracts