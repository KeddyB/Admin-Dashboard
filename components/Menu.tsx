import Link from 'next/link'
import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

import styles from './style.module.css'

const Menu = ({menu: {id, menu, name, subName}} : any) => {
  return (
    <div className={styles.menuList}>
      <Link href={`/menu/${name}`}>
        <div className={styles.mainMenu}>
            <p>{name}</p>
            <IoMdArrowDropright fontSize={20} />
        </div>
      </Link>
    </div>
  )
}

export default Menu
