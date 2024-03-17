"use client"
import React from 'react'
import { NavLink } from 'react-router-dom'

import { mainMenu } from '../utils/data'
import styles from './style.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sideContainer}>
      <header>Logo placeholder</header>
      <div className="menu">
        <p>Main Menu</p>
        {mainMenu.slice(0, mainMenu.length - 1).map((menu) =>(
            <NavLink
              to={`/menu/${menu?.name}`}
              key={menu?.name}
            >
              {menu?.name}
            </NavLink>
          ))}
      </div>
    </div>
  )
}

export default Sidebar
