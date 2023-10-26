import { FC, ReactNode } from 'react'
import Header from './Header'
import { Box } from '@mui/system'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ height: '100vh' }}>{children}</div>
    </>
  )
}

export default Layout
