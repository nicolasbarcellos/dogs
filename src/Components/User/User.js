import React from 'react'
import { Routes, Route } from 'react-router'
import { Feed } from '../Feed/Feed'
import styles from './style.module.scss'
import { UserHeader } from './UserHeader/UserHeader'
import { UserPhotoPost } from './UserPhotoPost/UserPhotoPost'
import { UserStats } from './UserStats/UserStats'

export const User = () => {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
      </Routes>
    </section>
  )
}
