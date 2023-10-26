import { CButton } from '@/features/layout/common/MComponents'
import { useChain, useManager } from '@cosmos-kit/react'
import { Button } from '@mui/material'
import { MouseEventHandler } from 'react'
import {
  WalletConnectButtonGroup,
  Error,
  Connected,
  Connecting,
  Disconnected,
  NotExist,
  Rejected,
} from './CosmosWalletGroup'

export const ConnectCosmosWalletButton: React.FC = ({}) => {
  const {
    connect,
    openView,
    status,
    username,
    address,
    message,
    wallet,
    chain: chainInfo,
  } = useChain('cosmoshub')
  const { getChainLogo } = useManager()
  // Events
  const onClickConnect: MouseEventHandler = async (e) => {
    e.preventDefault()
    await connect()
  }

  const onClickOpenView: MouseEventHandler = (e) => {
    e.preventDefault()
    openView()
  }

  return (
    <WalletConnectButtonGroup
      walletStatus={status}
      disconnect={
        <Disconnected
          text="Connect Cosmos Wallet"
          handleClick={onClickConnect}
        />
      }
      connecting={<Connecting />}
      connected={<Connected text={'My Wallet'} handleClick={onClickOpenView} />}
      rejected={<Rejected text="Reconnect" handleClick={onClickConnect} />}
      error={<Error text="Change Wallet" handleClick={onClickOpenView} />}
      notExist={
        <NotExist text="Install Wallet" handleClick={onClickOpenView} />
      }
    />
  )
}
