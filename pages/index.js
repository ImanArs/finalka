import Head from 'next/head'
import Image from 'next/image'
import MainPage from '../components/MainPage'
import ProductList from '../components/ProductList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> ARSSHOP </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <MainPage />
      <div>
      
      </div>
      <Slider />

      

    </div>
  )
}
