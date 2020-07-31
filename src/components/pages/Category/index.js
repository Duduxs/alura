import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import './styles.css';
import Button from '../../../components/Button'

function CategoryRegister() {
  const initialValues = {
    name: '',
    desc: '',
    color: '',
  }
  const [categories, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(chave, valor) {

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

    const BASE_URL = "http://localhost:8080/categorias";
    fetch(BASE_URL).then(async (Response) =>{
      const response = await Response.json();
      setCategorias([
        ...response,
      ])
    })
    .then(() =>{

    }
    );

  }, []);

  return (
    <PageDefault>


      <form onSubmit={function handleSubmit(infos) {
        infos.preventDefault();
        setCategorias([
          ...categories,
          values
        ]);

        setValues(initialValues)
      }}>

        <fieldset>

          <legend>Cadastro da Categoria {values.name}</legend>

          <FormField
            id="txtName"
            label="Nome da Categoria"
            type="text"
            name="name"
            placeholder='Jogos, Filmes, Revistas...'
            value={values.name}
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

          {categories.lenght === 0 &&(
          <div>
            Loading...
          </div>
          )}

        </fieldset>


        <fieldset id='values'>

          <legend>Categorias Cadastradas</legend>

          <ul id='categories'>
            {categories.map((category, indice) => {
              return (
                <pre>
                  <li key={`${category}${indice}`} style={{ color: category.color}}>
                    {(category.name + "      " + category.desc)}
                  </li>
                </pre>
              )
            })}
          </ul>

        </fieldset>

      </form>




    </PageDefault>
  )
}

export default CategoryRegister;