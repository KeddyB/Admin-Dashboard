import React from 'react'
import { Navbar, Sidebar } from '../../components'
import Footer from '../../components/Footer'
import styles from './style.module.css'

const page = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Footer />
      <Sidebar />
    </div>
  )
}

export default page
