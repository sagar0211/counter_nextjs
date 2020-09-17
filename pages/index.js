import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to NEXT</title> 
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Checkout <a href="https://dev.to/dotintegral/next-js-the-future-of-react-21nb">NEXTJS FUTURE</a>
        </h1>

        <div className={styles.grid}>
          <a href="count" className={styles.card}>
            <h3>Counter </h3>
            <p>Checkout implementation of counter.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <h1>NEXT.JS Innovation</h1>
      </footer>
    </div>
  )
}
