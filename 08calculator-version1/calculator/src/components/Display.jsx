import React from 'react'
import styles from './Display.module.css'
const Display = ({text}) => {
  return (
    <input className={styles.display} type="text" value={text} readOnly/>
  )
}

export default Display
