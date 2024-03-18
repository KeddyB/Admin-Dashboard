import Link from 'next/link'
import React from 'react'

import styles from './style.module.css'

const Menu = ({menu: {id, menu, name, subName}} : any) => {
  return (
    <div className={styles.menuList}>
      <Link href={`/menu/${name}`}>
        <div className={styles.mainMenu}>
            <p>{name}</p>
        </div>
      </Link>
    </div>
  )
}

export default Menu
