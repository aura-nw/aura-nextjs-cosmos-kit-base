import FormatCrypto from './FormatCrypto'
import React, { FC, ComponentProps } from 'react'
import CryptoCurrencyIcon from './CryptoCurrencyIcon'
import { zeroAddress } from 'viem'

type FormatCryptoCurrencyProps = {
  logoHeight?: number
  address?: string
}

type Props = ComponentProps<typeof FormatCrypto> & FormatCryptoCurrencyProps

const FormatCryptoCurrency: FC<Props> = ({
  amount,
  address = zeroAddress,
  maximumFractionDigits,
  logoHeight = 8,
  textStyle,
  decimals,
}) => {
  return (
    <FormatCrypto
      textStyle={textStyle}
      amount={amount}
      maximumFractionDigits={maximumFractionDigits}
      decimals={decimals}
    >
      <CryptoCurrencyIcon address={address} />
    </FormatCrypto>
  )
}

export default FormatCryptoCurrency
