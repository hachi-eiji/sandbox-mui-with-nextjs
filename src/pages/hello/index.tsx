import styles from './Hello.module.scss'
import {Box, List, ListItem, ListItemButton, ListItemText} from "@mui/material";

export default function HelloIndex() {
  const numbers: number[] = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(i)
  }

  return (
    <Box>
      <List>
        {numbers.map(i => {
          return <ListItem key={i} className={styles.listItem}>Number {i}</ListItem>
        })}
      </List>
    </Box>
  )
}
