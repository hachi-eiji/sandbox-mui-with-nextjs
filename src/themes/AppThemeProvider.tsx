import {ReactNode} from "react";
import {createTheme, Theme as MUITheme, ThemeProvider} from "@mui/material";

declare module "@emotion/react" {
  export interface Theme extends MUITheme {
  }
}

const theme = createTheme({
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:nth-child(odd)': {
            backgroundColor: 'red'
          }
        }
      }
    }
  }
})

export interface AppThemeProviderProps {
  children?: ReactNode
}

export default function AppThemeProvider(props: AppThemeProviderProps) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
