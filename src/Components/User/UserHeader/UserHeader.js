import React from 'react'
import styles from './style.module.scss'
import { UserHeaderNav } from '../UserHeaderNav/UserHeaderNav';
import { useLocation } from 'react-router';


export const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();


  React.useEffect(() => {
    if (location.pathname.match('conta')) setTitle('Minha Conta');
    if (location.pathname.match('estatisticas')) setTitle('Estatísticas');
    if (location.pathname.match('postar')) setTitle('Postar Foto');
  }, [location])


  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}
