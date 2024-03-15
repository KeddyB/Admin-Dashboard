import React from 'react'

import { TbUserSquareRounded } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { GoGear } from "react-icons/go";
import { IoGiftOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

import styles from './style.module.css'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navBar}>
        <RxHamburgerMenu fontSize={25}/>
        <p className="font">Admin Dashboard</p>
        <div className={styles.search}><input type="text" placeholder='Search here' className={styles.input} /><CiSearch fontSize={21} /></div>
        <div className={styles.gear}><GoGear fontSize={21}/></div>
        <div className={styles.icons}>
          <button>
            <IoIosNotifications fontSize={20} />
          </button>
          <button>
            <LuMessagesSquare fontSize={20}/>
          </button>
          <button>
            <IoGiftOutline fontSize={20} />
          </button>
        </div>
        <div className={styles.user}>
          <Link className={styles.link} href={``}><TbUserSquareRounded fontSize={24} /></Link>
          <p className={styles.userName}>David</p>
          <IoMdArrowDropdown fontSize={20} />
        </div>
    </div>
  )
}

export default Navbar