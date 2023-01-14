import React from 'react';
import styles from './NavBar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle  } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      
      <button className={styles.homeBtn}>Home</button>

      <button className={styles.addBtn}> FontAwesomeIcon className={styles.icons} icon={faCircle} </button>


    </nav>
    
  )
}

export default NavBar