import {List, ListItem, useMediaQuery} from "@mui/material";
import {css, useTheme} from "@emotion/react";
import {useMemo} from "react";
import style from './Hello.module.scss'

const styles = {
  pcStyle: css({
    marginTop: '10px'
  }),

  spStyle: css({
    marginTop: '20px',
    fontWeight: 'bold'
  })
}

export default function HelloIndex() {
  const numbers: number[] = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(i)
  }

  const theme = useTheme();
  const isSp = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useMemo(() => {
    return isSp ? [styles.spStyle] : [styles.pcStyle]
  }, [isSp])

  return (
    <>
      <List>
        {numbers.map(i => {
          return <ListItem key={i} css={classes} className={style.listItem}>Number {i}</ListItem>
        })}
      </List>
    </>
  )
}
