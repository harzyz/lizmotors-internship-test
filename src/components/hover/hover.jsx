import styles from './hover.module.css'

const Hover = ({reviews, positive, negative, comments, prate, nrate, crate,}) => {
  return (
    <div className={styles.wrapper}>
      <div style={{width: prate}} className={styles.bar}></div>
      <div style={{width: nrate}} className={styles.bar2}></div>
      <div style={{width: crate}} className={styles.bar3}></div>
      <span>Total reviews : {reviews}</span>
      <span>Positive reviews : {positive}</span>
      <span>Negative reviews : {negative}</span>
      <span>Comments : {comments}</span>
    </div>
  )
}

export default Hover
