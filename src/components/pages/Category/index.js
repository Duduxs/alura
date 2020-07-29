import React from 'react';
import PageDefault from '../../PageDefault'
import { Link } from 'react-router-dom';

function categoryRegister(){
    return(

        <PageDefault>
           <h1>Cadastro de Categoria</h1>

           <Link to='/'>
               Ir para home
           </Link>
        </PageDefault>
    );
}

export default categoryRegister;