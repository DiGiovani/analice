import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession()

  return (
    <div className={styles.container}>
     <div id="api"></div>

      
    </div>
  )
}
