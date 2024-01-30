import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function DefaultLayout({ children }: Props) {
  return <Box sx={{ mt: 2, ml: 2 }}>{children}</Box>;
}
