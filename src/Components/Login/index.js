import React, { useContext } from 'react';
import { LoginForm } from './LoginForm';
import { LoginCreate } from './LoginCreate';
import { LoginPasswordLost } from './LoginPasswordLost';
import { LoginPasswordReset } from './LoginPasswordReset';

import styles from './style.module.scss';
import { UserContext } from '../../Contexts/userContext';
import {Route, Routes, Navigate} from 'react-router-dom';

export const Login = () => {
  const { login } = useContext(UserContext);
  
  if (login === true) return <Navigate to='/conta' />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/criar' element={<LoginCreate />} />
          <Route path='/perdeu' element={<LoginPasswordLost />} />
          <Route path='/resetar' element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}

