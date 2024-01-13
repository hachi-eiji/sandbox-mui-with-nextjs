import {createTheme, ThemeProvider} from "@mui/material";
import {ReactNode} from "react";

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
