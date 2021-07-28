import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../Contexts/userContext';
import { useForm } from '../../../Hooks/useForm';
import { Error } from '../../Helper/Error';
import { ButtonForm } from '../ButtonForm';
import { InputForm } from '../InputForm';
import styles from './style.module.scss'
import stylesBtn from '../ButtonForm/style.module.scss'

export const LoginForm = () => {  
  const userName = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (userName.validate() && password.validate()) {
      userLogin(userName.value, password.value)
  }

}
  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputForm label='Usuário' type='text' name='email' {...userName} />
        <InputForm label='Senha' type='password' name='password' {...password} />
        {loading ? (
          <ButtonForm disabled>Carregando...</ButtonForm>
        ) :
          <ButtonForm>Entrar</ButtonForm>
        }
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">Perdeu a senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastra-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
      </div>
    </section>
  )
}

