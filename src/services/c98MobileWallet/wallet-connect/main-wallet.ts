import { EndpointOptions, Wallet } from '@cosmos-kit/core'
import { WCWallet } from '@cosmos-kit/walletconnect'

import { ChainC98Mobile } from './chain-wallet'
import { C98Client } from './client'

export class C98MobileWallet extends WCWallet {
  constructor(walletInfo: Wallet, preferredEndpoints?: EndpointOptions['endpoints']) {
    super(walletInfo, ChainC98Mobile, C98Client)
    this.preferredEndpoints = preferredEndpoints
  }
}
