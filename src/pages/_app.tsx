import type { AppProps } from "next/app";
import AppThemeProvider from "@/themes/AppThemeProvider";
import UserThemeProvider from "@/themes/UserThemeProvider";
import React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StyledEngineProvider } from "@mui/material/styles";

const emotionCache = createCache({ key: "css", prepend: true });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <StyledEngineProvider injectFirst>
        <AppThemeProvider>
          <UserThemeProvider>
            <Component {...pageProps} />
          </UserThemeProvider>
        </AppThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}
