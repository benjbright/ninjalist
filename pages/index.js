import Head from "next/head"
import Link from "next/link"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
          obcaecati dolorem quod voluptatibus error eligendi est dolorum quidem
          similique. Adipisci similique soluta corporis excepturi nemo autem
          iusto voluptate odio tempore.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          nisi blanditiis voluptate quia ducimus porro perspiciatis quibusdam
          totam iste! Distinctio nesciunt necessitatibus est, voluptatum
          similique reprehenderit. Odit, facere. Fuga, corporis!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
