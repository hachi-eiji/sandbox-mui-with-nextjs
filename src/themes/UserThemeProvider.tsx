import { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          "&:nth-child(odd)": {
            backgroundColor: "green",
          },
        },
      },
    },
  },
});

export interface UserThemeProviderProps {
  children?: ReactNode;
}

export default function UserThemeProvider(props: UserThemeProviderProps) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
