import { SerializedStyles } from "@emotion/react";
import { Theme } from "@mui/material";

type CssClass = SerializedStyles | ((theme: Theme) => SerializedStyles);
export type CssItems = {
  [key: string]: CssClass;
};

export type CssStyles = {
  base?: CssItems;
  pc?: CssItems;
  sp?: CssItems;
};

export function compact_from(...items: (CssClass | undefined)[]): CssClass[] {
  const result: CssClass[] = [];
  items.forEach((v) => {
    if (v) {
      result.push(v);
    }
  });
  return result;
}
