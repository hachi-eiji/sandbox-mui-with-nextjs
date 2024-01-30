import type { AppProps } from "next/app";
import AppThemeProvider from "@/themes/AppThemeProvider";
import UserThemeProvider from "@/themes/UserThemeProvider";
import React, { ReactElement, ReactNode } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StyledEngineProvider } from "@mui/material/styles";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { NextPage } from "next";

const emotionCache = createCache({ key: "css", prepend: true });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <StyledEngineProvider injectFirst>
        <AppThemeProvider>
          <UserThemeProvider>
            <DefaultLayout>{getLayout(<Component {...pageProps} />)}</DefaultLayout>
          </UserThemeProvider>
        </AppThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}
