import React from 'react'

import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaGear } from "react-icons/fa6";
import { IoGiftOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";

import styles from './style.module.css'

const Navbar = () => {
  return (
    <div className={styles.navBar}>
        <RxHamburgerMenu fontSize={25}/>
        <p className="font">Admin Dashboard</p>
        <div className={styles.search}><input type="text" placeholder='Search Here...'/>&nbsp;<CiSearch fontSize={21} /></div>
        <div><FaGear fontSize={24}/></div>
        <div className={styles.icons}>
          <IoGiftOutline />
          <LuMessagesSquare />
          <IoIosNotifications />
        </div>
        <div className={styles.user}><a href="/"><FaUserCircle fontSize={25}/></a></div>
    </div>
  )
}

export default Navbar