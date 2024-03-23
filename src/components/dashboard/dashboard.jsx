import Sidebar from '../sidebar/sidebar'
import styles from './dashboard.module.css'

const Dashboard = ({children}) => {
  return (
    <main className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </main>
  )
}

export default Dashboard
