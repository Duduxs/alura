import React, { useState } from 'react';
import PageDefault from '../../PageDefault'
import FormField from '../../FormField'
import './styles.css';

function CategoryRegister(){
    const initialValues = {
        name: '',
        descricao: '',
        random:'',
        color: '',
      }
      const [categories, setCategorias] = useState([]);
      const [values, setValues] = useState(initialValues);
      const randomValues =['O mês depois de Agosto?', 'O mês antes de Fevereiro?'];

      function setValue(chave, valor) {
         
        setValues({
          ...values,
          [chave]: valor, // nome: 'valor'
        })
      }
    
      function handleChange(infosDoEvento) {
        setValue(
          infosDoEvento.target.getAttribute('name'),
          infosDoEvento.target.value
        );
      }
    
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
                  value={values.name}
                  onChange={handleChange}
                />
        
                <FormField
                  id="txtDesc"
                  label="Descrição"
                  type="textArea"
                  name="desc"
                  value={values.desc}
                  onChange={handleChange}
                />
                <FormField
                  id="txtSpam"
                  label="Proteção de Spam"
                  type="text"
                  name="spam"
                  placeholder={randomValues[Math.round(Math.random())]}
                  value={values.random}
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

           
                
                 <button>
                  Cadastrar
                </button>
        
            </fieldset>
    
         
            <fieldset id='values'>

                <legend>Categorias Cadastradas</legend>

                <ul id='categories'>
                {categories.map((category, indice) => {
                  return (
                    <li key={`${category}${indice}`}>
                      {category.name}
                    </li>
                  )
                })}
              </ul>

            </fieldset>

          </form>
          
    


        </PageDefault>
      )
}

export default CategoryRegister;