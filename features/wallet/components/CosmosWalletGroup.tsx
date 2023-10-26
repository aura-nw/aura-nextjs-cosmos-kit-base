import React, { MouseEventHandler, ReactNode } from 'react'
import { WalletStatus } from '@cosmos-kit/core'
import { RedText } from '@/features/layout/common/SComponents'
import { CButton } from '@/features/layout/common/MComponents'

export interface ConnectWalletProp {
  text?: string
  isLoading?: boolean
  isDisabled?: boolean
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export const ConnectWalletButton = ({
  text,
  isLoading,
  isDisabled,
  handleClick,
}: ConnectWalletProp) => {
  return <CButton onClick={handleClick}>{text || 'Connect Wallet'}</CButton>
}

export const Disconnected = ({ text, handleClick }: ConnectWalletProp) => {
  return <ConnectWalletButton text={text} handleClick={handleClick} />
}

export const Connected = ({ text, handleClick }: ConnectWalletProp) => {
  return <ConnectWalletButton text={text} handleClick={handleClick} />
}

export const Connecting = () => {
  return <ConnectWalletButton isLoading={true} />
}

export const Rejected = ({ text, handleClick }: ConnectWalletProp) => {
  return <RedText>{text}</RedText>
}

export const Error = ({ text, handleClick }: ConnectWalletProp) => {
  return <RedText>{text}</RedText>
}

export const NotExist = ({ text, handleClick }: ConnectWalletProp) => {
  return (
    <ConnectWalletButton
      text={text}
      isDisabled={false}
      handleClick={handleClick}
    />
  )
}

export const WalletConnectButtonGroup = ({
  walletStatus,
  disconnect,
  connecting,
  connected,
  rejected,
  error,
  notExist,
}: {
  walletStatus: WalletStatus
  disconnect: ReactNode
  connecting: ReactNode
  connected: ReactNode
  rejected: ReactNode
  error: ReactNode
  notExist: ReactNode
}) => {
  switch (walletStatus) {
    case WalletStatus.Disconnected:
      return <>{disconnect}</>
    case WalletStatus.Connecting:
      return <>{connecting}</>
    case WalletStatus.Connected:
      return <>{connected}</>
    case WalletStatus.Rejected:
      return <>{rejected}</>
    case WalletStatus.Error:
      return <>{error}</>
    case WalletStatus.NotExist:
      return <>{notExist}</>
    default:
      return <>{disconnect}</>
  }
}
