import React from 'react'
import styles from './style.module.scss'

export const FeedPhotosItem = ({ photo }) => {
  return (
    <li className={styles.photo}>
     <img src={photo.src} alt={photo.title}/>
     <span className={styles.eye}>{photo.acessos}</span>
    </li>
  )
}
