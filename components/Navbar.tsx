import React from 'react'

import { TbUserSquareRounded } from "react-icons/tb";
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
        <div className={styles.search}><input type="text" placeholder='Search Here...' className={styles.input} />&nbsp;<CiSearch fontSize={21} /></div>
        <div><FaGear fontSize={21}/></div>
        <div className={styles.icons}>
          <button>
            <IoGiftOutline fontSize={20} />
          </button>
          <button>
            <IoIosNotifications fontSize={20} />
          </button>
          <button>
            <LuMessagesSquare fontSize={20}/>
          </button>
        </div>
        <div className={styles.user}><a href="/"><TbUserSquareRounded fontSize={25}/> David</a></div>
    </div>
  )
}

export default Navbar