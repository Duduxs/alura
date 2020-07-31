import React, {useState, useEffect}from 'react';
import PageDefault from '../../PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../components/hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function VideoRegister(){
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const { handleChange, values } = useForm({
      
      titulo: 'Primario',
      url: 'https://www.youtube.com/watch?v=aHolTqDXipc',
      categoria: 'Jogos',
    });

    useEffect(() =>{
        categoriasRepository
        .getAll()
        .then((categoriasFromServer) =>{
            setCategorias(categoriasFromServer);
        }); 
}, []);



    return(

        <PageDefault>
      

        <form onSubmit={(event) => {
        event.preventDefault();

    
          const categoriaEscolhida = categorias.find((categoria) =>{
            return categoria.titulo === values.categoria;
          });

          console.log('categoriaId', categoriaEscolhida);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <fieldset>
        <legend>Cadastro de Vídeo {values.name}</legend>

               <FormField
                label="Título do Vídeo"
                type="text"
                name="titulo"
                placeholder='Meu novo dog...'
                value={values.titulo}
                onChange={handleChange}
              />
    
            <FormField
              label="URL"
              type="text"
              name="url"
              placeholder='youtube.com/...'
              value={values.url}
              onChange={handleChange}
            />
    
            <FormField
              label="Categoria"
              type="text"
              name="categoria"
              placeholder='Jogos, Filmes, Revistas...'
              value={values.categoria}
              onChange={handleChange}
            />
    
            <Button type="submit">
              Cadastrar
            </Button>
        </fieldset>
      </form>

           <Link to='/register/category'>
               Cadastrar Categoria
           </Link>
        </PageDefault>
    );
}

export default VideoRegister;