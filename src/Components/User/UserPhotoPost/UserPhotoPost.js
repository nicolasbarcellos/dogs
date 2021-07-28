import React from 'react'
import { useFetch } from '../../../Hooks/useFetch';
import { useForm } from '../../../Hooks/useForm';
import { PHOTO_POST } from '../../../services/api';
import { Error } from '../../Helper/Error';
import { ButtonForm } from '../../Login/ButtonForm';
import { InputForm } from '../../Login/InputForm';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss'

export const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm();
  const idade = useForm();

  const {data, request, loading, error} = useFetch();
  const [img, setImg] = React.useState({});
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate])

  console.log(data);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)

    const token = window.localStorage.getItem('token')
    const {url, options} = PHOTO_POST(formData, token)
    request(url, options);
  }
  
  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
     <form onSubmit={handleSubmit}>
       <InputForm label="Nome" type="text" name='nome' {...nome}/>
       <InputForm label="Peso" type="number" name='peso' {...peso}/>
       <InputForm label="Idade" type="number" name='idade' {...idade}/>
       <input className={styles.file} type='file' name='img' id='img' onChange={handleImgChange} />
       {loading ? (
         <ButtonForm disabled>Enviando...</ButtonForm>
       ) : (
        <ButtonForm>Enviar</ButtonForm>
       )}
        <Error error={error}/>

     </form>
      {img.preview && 
      <div 
        className={styles.preview} 
        style={{backgroundImage: `url('${img.preview}')`}}>
      </div>}
    </section>
  )
}
