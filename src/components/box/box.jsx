import styles from './box.module.css'

const Box = ({children, bgColor, onMouseLeave, onMouseEnter, fSize}) => {
  return (
    <h1 style={{backgroundColor: bgColor, fontSize: fSize}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={styles.wrapper}>
      {children}
    </h1>
  )
}

export default Box
