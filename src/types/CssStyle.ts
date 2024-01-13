import {SerializedStyles} from "@emotion/react";

export type CssItems = {
  [key: string]: SerializedStyles
}

export type CssBreakPoints = {
  base?: CssItems
  pc?: CssItems
  sp?: CssItems
};
