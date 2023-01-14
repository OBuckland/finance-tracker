import React from 'react';
import styles from './HomeMessage.module.scss'

const HomeMessage = () => {
  return (
    <div className={styles.messageContainer}>

    <p>This month you have spent</p>
    <p>£120.02</p>

    </div>
  )
}

export default HomeMessage