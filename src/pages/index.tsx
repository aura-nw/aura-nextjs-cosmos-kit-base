import Layout from '@/features/layout/Layout';
import { useTranslation } from 'react-i18next';
import { HomePage } from '../view/homepage';

declare global {
  interface Window {
    // ⚠️ notice that "Window" is capitalized here
    keplr: any;
    getOfflineSigner: any;
    coin98: any;
    logoutTimeoutId: any;
    config: any;
    leap: any;
  }
}
export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
