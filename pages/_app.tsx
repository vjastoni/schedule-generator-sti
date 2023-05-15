import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AuthProvider from '../context/authContext';

import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../auth/authConfig';
import { MsalProvider } from '@azure/msal-react';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  const msalInstance = new PublicClientApplication(msalConfig);
  return (
    <MsalProvider instance={msalInstance}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" />
      <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" />
    </MsalProvider>
  );
}
