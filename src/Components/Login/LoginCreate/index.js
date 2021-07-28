import React from 'react'
import { UserContext } from '../../../Contexts/userContext';
import { useFetch } from '../../../Hooks/useFetch';
import { useForm } from '../../../Hooks/useForm';
import { USER_POST } from '../../../services/api';
import { ButtonForm } from '../ButtonForm';
import { InputForm } from '../InputForm';
import { Error } from '../../Helper/Error'
import styles from './style.module.scss'

export const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = React.useContext(UserContext);
  const {loading, error, request} = useFetch()
  
  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const {response, json} = await request(url, options);
    if (response.ok) userLogin(username.value, password.value)
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastra-se</h1>
      <form onSubmit={handleSubmit}>
        <InputForm name='username' label='Usuário' type='text' {...username} />
        <InputForm name='Email' label='Email' type='email' {...email} />
        <InputForm name='password' label='Senha' type='password' {...password} />
        {loading ?  (
          <ButtonForm disabled>Cadastrando...</ButtonForm>
        ) : (
          <ButtonForm>Cadastrar</ButtonForm>
        )}
        <Error error={error} />
      </form>
    </section>
  )
}
