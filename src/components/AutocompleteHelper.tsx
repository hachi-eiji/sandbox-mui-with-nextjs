import { Divider, Paper, PaperProps, TextField } from "@mui/material";
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete/Autocomplete";
import * as React from "react";

export const defaultNoOptionsText = "データが見つかりません";

export function defaultRenderInput(params: AutocompleteRenderInputParams) {
  return <TextField {...params} placeholder="選択してください" />;
}

type PaperWithFooterType = PaperProps & { footer: React.ReactNode };

export function PaperWithFooter(props: PaperWithFooterType) {
  const { children, footer, ...others } = props;
  return (
    <Paper {...others}>
      {children}
      <Divider />
      {footer}
    </Paper>
  );
}
