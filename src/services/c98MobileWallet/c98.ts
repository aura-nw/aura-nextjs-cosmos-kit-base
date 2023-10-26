import { c98MobileInfo, C98MobileWallet } from './wallet-connect'

const c98Mobile = new C98MobileWallet(c98MobileInfo)

export const wallets = [c98Mobile]
