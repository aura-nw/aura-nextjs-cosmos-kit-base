import { formatBN } from '@/utils/numbers'
import { Box } from '@mui/material'
import React, { FC } from 'react'

type Props = {
  amount: string | number | bigint | null | undefined
  maximumFractionDigits?: number
  decimals?: number
  children?: React.ReactNode
  textStyle?: any
}

const FormatCrypto: FC<Props> = ({
  amount,
  maximumFractionDigits = 4,
  decimals = 18,
  children,
  textStyle = {},
}) => {
  const value = formatBN(amount, maximumFractionDigits, decimals)
  return (
    <Box alignItems="center" sx={{ gap: '$1', minWidth: 'max-content' }}>
      {value !== '-' ? children : null}
      <span style={textStyle}>{value}</span>
    </Box>
  )
}

export default FormatCrypto
