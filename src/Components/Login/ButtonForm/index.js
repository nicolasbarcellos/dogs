import React from 'react'
import styles from './style.module.scss'

export const ButtonForm = ( {children, ...props} ) => {
  return (
   <button {...props} className={styles.button}>
     {children}
   </button>
  )
}
