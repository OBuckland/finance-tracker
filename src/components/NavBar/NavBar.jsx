import React from 'react';
import styles from './NavBar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faHouse  } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      
      <a href="" target="_blank">
          {" "}
          <FontAwesomeIcon className={styles.icons} icon={faHouse} />
        </a>

      {/* <button className={styles.addBtn}> FontAwesomeIcon className={styles.icons} icon={faCircle} </button> */}
      <a href="" target="_blank">
          {" "}
          <FontAwesomeIcon className={styles.icons} icon={faCirclePlus} />
        </a>

    </nav>
    
  )
}

export default NavBar