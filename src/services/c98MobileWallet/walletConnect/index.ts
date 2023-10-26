import { Chain, AssetList } from '@chain-registry/types'
export const euphoria: Chain = {
  bech32_prefix: 'aura',
  chain_id: 'euphoria-2',
  chain_name: 'euphoria-aura',
  network_type: 'testnet',
  pretty_name: 'Aura Network Euphoria Testnet',
  slip44: 118,
  status: 'live',
}
export const euphoriaAssets: AssetList = {
  assets: [
    {
      denom_units: [
        {
          denom: 'ueaura',
          exponent: 0,
        },
        {
          denom: 'eaura',
          exponent: 6,
        },
      ],
      base: 'ueaura',
      name: 'Aura',
      display: 'eaura',
      symbol: 'EAURA',
    },
  ],
  chain_name: 'euphoria-aura',
}
