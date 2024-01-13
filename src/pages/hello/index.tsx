import {List, ListItem, useMediaQuery} from "@mui/material";
import {css, SerializedStyles, useTheme} from "@emotion/react";
import {useMemo} from "react";

type CssItem = {
  list?: SerializedStyles,
  item?: SerializedStyles,
}

type CssDefinedStyle = {
  base?: CssItem,
  pc?: CssItem,
  sp?: CssItem,
};

const styles: CssDefinedStyle = {
  base: {
    list: css({padding: '10px'}),
  },
  pc: {
    list: css({
      padding: '20px',
      border: '1px solid'
    }),
    item: css({
      marginTop: '10px'
    })
  },
  sp: {
    list: css({
      border: '1px solid'
    }),
    item: css({
      marginTop: '20px',
      fontWeight: 'bold'
    })
  }
};

export default function HelloIndex() {
  const numbers: number[] = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(i)
  }

  const theme = useTheme();
  const isSp = useMediaQuery(theme.breakpoints.down('md'));
  const device = isSp ? 'sp' : 'pc';

  const classes = useMemo(() => {
    return {
      list: [styles.base?.list, styles[device]?.list].filter(v => !!v),
      item: [styles.base?.item, styles[device]?.item].filter(v => !!v)
    }
  }, [isSp])

  return (
    <>
      <List css={classes.list}>
        {numbers.map(i => {
          return <ListItem key={i} css={classes.item}>Number {i}</ListItem>
        })}
      </List>
    </>
  )
}
