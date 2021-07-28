import React from 'react'
import { Feed } from '../Feed/Feed'
import style from './style.module.scss'

export const Home = () => {
  return (
    <section className='container mainContainer'>
      <Feed />  
    </section>
  )
}

