import React, { useEffect, useState } from 'react'

type Props = {
  amount: string | number | null | undefined
  currency?: Intl.NumberFormatOptions['currency']
  maximumFractionDigits?: number
}

const FormatCurrency = ({
  amount,
  maximumFractionDigits = 2,
  currency = 'USD',
}: Props) => {
  const [formattedValue, setFormattedValue] = useState('-')

  useEffect(() => {
    if (amount) {
      const formatted = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency,
      }).format(+amount)
      setFormattedValue(formatted)
    } else {
      setFormattedValue('-')
    }
  }, [amount, maximumFractionDigits])

  return <span>{formattedValue}</span>
}

export default FormatCurrency
