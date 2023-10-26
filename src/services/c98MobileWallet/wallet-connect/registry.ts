import { OS, Wallet } from '@cosmos-kit/core'

import { ICON } from '../constants'

export const c98MobileInfo: Wallet = {
  name: 'c98-mobile',
  prettyName: 'C98 Mobile',
  logo: ICON,
  mode: 'wallet-connect',
  mobileDisabled: false,
  rejectMessage: {
    source: 'Request rejected',
  },
  downloads: [
    {
      device: 'mobile',
      os: 'android',
      link: 'https://play.google.com/store/apps/details?id=coin98.crypto.finance.media&pli=1',
    },
    {
      device: 'mobile',
      os: 'ios',
      link: 'https://apps.apple.com/us/app/coin98-wallet/id1561969966',
    },
  ],
  connectEventNamesOnWindow: ['c98_keystorechange'],
  walletconnect: {
    name: 'coin98',
    projectId: '2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01',
    encoding: 'base64',
    mobile: {
      native: {
        ios: 'coin98:',
        android: 'intent:',
      },
    },
  },
}
