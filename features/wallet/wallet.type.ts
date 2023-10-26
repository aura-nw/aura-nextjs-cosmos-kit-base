interface CurrenciesProp {
  [key: string]: CurrencyProp[]
}

interface CurrencyProp {
  address: string
  symbol: string
  decimals: number
  chain: {
    id: number
    name: string
  }
  coinGeckoId: string
}

interface CurrencyBalanceProp extends CurrencyProp {
  usdPrice: number
  balance: string | number | bigint
}

export type { CurrenciesProp, CurrencyProp, CurrencyBalanceProp }
