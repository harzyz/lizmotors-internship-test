import styles from './box.module.css'

const Box = ({children, bgColor, onMouseLeave, onMouseEnter}) => {
  return (
    <h1 style={{backgroundColor: bgColor}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={styles.wrapper}>
      {children}
    </h1>
  )
}

export default Box
