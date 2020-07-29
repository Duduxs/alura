import React from 'react';
import PageDefault from '../../PageDefault'
import { Link } from 'react-router-dom';

function videoRegister(){
    return(

        <PageDefault>
           <h1>Cadastro de Vídeo</h1>

           <Link to='/register/category'>
               Cadastrar Categoria
           </Link>
        </PageDefault>
    );
}

export default videoRegister;