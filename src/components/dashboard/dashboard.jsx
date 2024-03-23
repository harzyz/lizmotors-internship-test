import { Link } from 'react-router-dom'
import Sidebar from '../sidebar/sidebar'
import styles from './dashboard.module.css'

const Dashboard = ({children}) => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Link to='/' className={styles.link}><h1 className={styles.header}>LIZMOTORS</h1></Link>
        {children}
      </div>
    </main>
  )
}

export default Dashboard
