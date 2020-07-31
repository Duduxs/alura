import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import './styles.css';
<<<<<<< HEAD
import Button from '../../../components/Button'
=======
import Button from '../../Button'
import useForm from '../../hooks/useForm';

>>>>>>> develop

function CategoryRegister() {
  const initialValues = {
    titulo: '',
    desc: '',
    color: '',
  }
  const [categories, setCategorias] = useState([]);
  const { handleChange, values, clearForm } = useForm(initialValues);

<<<<<<< HEAD
    setValues({
      ...values,
      [chave]: valor, 
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  useEffect(() => {

    const BASE_URL =  window.location.hostname.includes('localhost')
    ? 'https://eduflix-dusky.vercel.app/':'https://eduflix.herokuapp.com/categorias';
=======

  useEffect(() => {
    
    const BASE_URL =  window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://eduflix-dusky.vercel.app/register/category';
>>>>>>> develop
    fetch(BASE_URL).then(async (Response) =>{
      const response = await Response.json();
      setCategorias([
        ...response,
      ]);
    });
  },[]);

  return (
    <PageDefault>


      <form onSubmit={function handleSubmit(infos) {
        infos.preventDefault();
        setCategorias([
          ...categories,
          values,
        ]);

        clearForm();
      }}>

        <fieldset>

          <legend>Cadastro da Categoria {values.titulo}</legend>

          <FormField
            id="txtName"
            label="Nome da Categoria"
            type="text"
            name="titulo"
            placeholder='Jogos, Filmes, Revistas...'
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            id="txtDesc"
            label="Descrição"
            type="textArea"
            name="desc"
            placeholder='A melhor lista de X da atualidade...'
            value={values.desc}
            onChange={handleChange}
          />


          <FormField
            id="txtColor"
            label="Cor"
            type="color"
            name="color"
            value={values.color}
            onChange={handleChange}
          />


          <Button>
            Cadastrar
          </Button>

<<<<<<< HEAD
          {categories.lenght === 0 &&(
=======
          {categories.length === 0 &&(
>>>>>>> develop
          <div>
            Loading...
          </div>
          )}

        </fieldset>


        <fieldset id='values'>

          <legend>Categorias Cadastradas</legend>

          <ul id='categories'>
            {categories.map((category) => (
                <pre>
                  <li key={`${category.titulo}`} style={{ color: category.color}}>
                    {category.titulo+"✔️"}
                  </li>
                </pre>
              
            ))}
          </ul>

        </fieldset>

      </form>




    </PageDefault>
  )
}

export default CategoryRegister;