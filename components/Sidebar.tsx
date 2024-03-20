"use client"
import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from 'next/image'

import { mainMenu } from '../utils/data'
import Menu  from './Menu'
import styles from './style.module.css'
import image from '../assets/images/logo.png'

const Sidebar = () => {
  return (
    <div className={styles.sideContainer}>
      <header>
        <div>
          <Image src={image} alt=""  className={styles.image} />
        </div>
      </header>
      <div className="menu">
        <p>Main Menu</p>
        <div className="menuList">
          {mainMenu.map((menubar) => 
            (<Menu key={menubar.id} menu={menubar} />)
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
