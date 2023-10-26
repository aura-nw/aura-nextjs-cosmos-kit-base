import React, { FC } from 'react'
//@ts-ignore
import { useReservoirClient } from '@reservoir0x/reservoir-kit-ui'
import { zeroAddress } from 'viem'
import Image from 'next/image'

type Props = {
  address: string
  chainId?: number
  style?: object
  width?: number
  height?: number
}

const CryptoCurrencyIcon: FC<Props> = ({
  address = zeroAddress,
  width = 15,
  height = 15,
  chainId,
  style,
}) => {
  const client = useReservoirClient()

  const chain = client?.chains?.find((chain: any) =>
    chainId !== undefined ? chain.id === chainId : chain.active
  )

  return (
    <Image
      src={`${chain?.baseApiUrl}/redirect/currency/${address}/icon/v1`}
      alt={address}
      width={width}
      height={height}
      unoptimized
      style={style}
    />
  )
}

export default CryptoCurrencyIcon
