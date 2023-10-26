import { Tooltip, Box } from '@mui/material'
import { ReactNode, useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'

interface CopyTextProps {
  children: ReactNode
  text: string
  sx?: object
}

export const CopyText: React.FC<CopyTextProps> = ({ children, text, sx }) => { 
  const [value, copy] = useCopyToClipboard()
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    copy(text)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000)
  }

  return (
    <Tooltip title={isCopied ? 'Copied!' : 'Copy'} sx={sx}>
      <Box
        onClick={(e) => {
          e.preventDefault()
          handleCopy()
        }}
      >
        {children}
      </Box>
    </Tooltip>
  )
}
