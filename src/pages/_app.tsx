import React, { ReactNode, useState } from 'react';
import { MainWalletBase } from '@cosmos-kit/core';
import './App.css';
import './App.scss';
import { darkTheme, lightTheme } from '@/features/theme/theme';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '@/features/store';
import { default as NextApp } from 'next/app';
import type { AppContext, AppProps } from 'next/app';
import { useAppSelector } from '@/features/hook';
import { selectTheme } from '@/features/theme/theme.slice';
import { ChainProvider } from '@cosmos-kit/react';
import { chains, assets } from 'chain-registry';
import CssBaseline from '@mui/material/CssBaseline';
import { isMobile } from 'react-device-detect';
import { wallets as c98Mobile } from 'src/services/c98MobileWallet';
import { wallets as leapExtension } from '@cosmos-kit/leap-extension';
import { wallets as leapMobile } from '@cosmos-kit/leap-mobile';
import { wallets as keplrExtension } from '@cosmos-kit/keplr-extension';
import { wallets as c98Extension } from '@cosmos-kit/coin98-extension';
import 'src/styles/globals.scss';
import { ConnectWalletModal } from 'components/ConnectWalletModal.tsx/ConnectWalletModal';
import { WalletProvider } from '../context';

const LeapExtension = leapExtension[0];
const LeapMobileWallet = leapExtension[1];

function App({
  Component,
  pageProps,
  baseUrl,
}: AppProps & { baseUrl: string }) {
  const theme = useAppSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

function AppWrapper(props: AppProps & { baseUrl: string }) {
  const wallets = isMobile
    ? ([...c98Mobile, ...keplrExtension, ...leapExtension] as MainWalletBase[])
    : ([
        ...c98Extension,
        ...keplrExtension,
        ...leapExtension,
    ] as MainWalletBase[]);
  return (
    <Provider store={store}>
      <WalletProvider>
        <ChainProvider
          chains={chains}
          assetLists={assets}
          wallets={wallets}
          walletConnectOptions={{
            signClient: {
              projectId: '790d4c56a17b7994864e074380cfa08e',
              relayUrl: 'wss://relay.walletconnect.org',
              metadata: {
                name: 'ANS',
                description: 'CosmosKit dapp template',
                url: 'https://docs.cosmoskit.com/',
                icons: [],
              },
            },
          }}
          signerOptions={{}}
          walletModal={ConnectWalletModal as any}
        >
          <App {...props} />
        </ChainProvider>
      </WalletProvider>
    </Provider>
  );
}

AppWrapper.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await NextApp.getInitialProps(appContext);
  let baseUrl = '';

  if (appContext.ctx.req?.headers.host) {
    const host = appContext.ctx.req?.headers.host;
    baseUrl = `${host.includes('localhost') ? 'http' : 'https'}://${host}`;
  } else if (process.env.NEXT_PUBLIC_HOST_URL) {
    baseUrl = process.env.NEXT_PUBLIC_HOST_URL || '';
  }
  baseUrl = baseUrl.replace(/\/$/, '');

  return { ...appProps, baseUrl };
};

export default AppWrapper;
