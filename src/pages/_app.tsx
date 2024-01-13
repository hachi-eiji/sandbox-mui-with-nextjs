import type { AppProps } from 'next/app'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {AppThemeProvider} from "@/pages/themes/AppThemeProvider";
import UserThemeProvider from "@/pages/themes/UserThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <UserThemeProvider>
        <Component {...pageProps} />
      </UserThemeProvider>
    </AppThemeProvider>
  )
}
