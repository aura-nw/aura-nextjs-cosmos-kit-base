import { ChainRecord, Wallet } from '@cosmos-kit/core'
import { ChainWC } from '@cosmos-kit/walletconnect'

import { C98Client } from './client'

export class ChainC98Mobile extends ChainWC {
  constructor(walletInfo: Wallet, chainInfo: ChainRecord) {
    super(walletInfo, chainInfo, C98Client)
  }
}
