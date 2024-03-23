import styles from './box.module.css'

const Box = ({children, bgColor}) => {
  return (
    <h1 style={{backgroundColor: bgColor}} className={styles.wrapper}>
      {children}
    </h1>
  )
}

export default Box
