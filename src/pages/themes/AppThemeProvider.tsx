import {createTheme, ThemeProvider} from "@mui/material";
import {ReactNode} from "react";

const theme = createTheme({
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          '& :nth-child(odd)': {
            marginTop: 2
          }
        }
      }
    }
  }
})

export interface AppThemeProviderProps {
  children?: ReactNode
}

export function AppThemeProvider(props: AppThemeProviderProps) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
