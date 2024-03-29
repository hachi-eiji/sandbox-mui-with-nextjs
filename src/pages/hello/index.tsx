import { List, ListItem, Theme, useMediaQuery } from "@mui/material";
import { css, useTheme } from "@emotion/react";
import { compact_from, CssStyles } from "@/types/CssStyle";

const styles: CssStyles = {
  base: {
    list: css({ padding: "10px" }),
  },
  pc: {
    list: (theme: Theme) =>
      css({
        padding: "20px",
        border: `1px solid ${theme.palette.primary.main}`,
      }),
    item: css({
      marginTop: "10px",
    }),
  },
  sp: {
    list: css({
      border: "1px solid",
    }),
    item: css({
      marginTop: "20px",
      fontWeight: "bold",
    }),
  },
};

export default function HelloIndex() {
  const numbers: number[] = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(i);
  }

  const theme = useTheme();
  const isSp = useMediaQuery(theme.breakpoints.down("md"));
  const device = isSp ? "sp" : "pc";

  const classes = {
    list: compact_from(styles.base?.list, styles[device]?.list),
    item: compact_from(styles.base?.item, styles[device]?.item),
  };


  return (
    <>
      <List css={classes.list}>
        {numbers.map((i) => {
          return (
            <ListItem key={i} css={classes.item}>
              Number {i}
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
