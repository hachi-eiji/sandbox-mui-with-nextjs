import { SerializedStyles } from "@emotion/react";

export type CssItems = {
  [key: string]: SerializedStyles;
};

export type CssStyles = {
  base?: CssItems;
  pc?: CssItems;
  sp?: CssItems;
};

export function compact_from(...items: (SerializedStyles | undefined)[]): SerializedStyles[] {
  const result: SerializedStyles[] = [];
  items.forEach((v) => {
    if (v) {
      result.push(v);
    }
  });
  return result;
}
