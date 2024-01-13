import styles from './Hello.module.scss'

export default function HelloIndex() {
  const numbers: number[] = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(i)
  }

  return (
    <ul>
      {numbers.map(i => <li key={i} className={styles.listItem}>Number {i}</li>)}
    </ul>
  )
}
