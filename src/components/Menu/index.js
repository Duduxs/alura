import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import Button from '../Button'


function Menu(){
    return(
    
        
            <nav className='Menu'>
                <a href='/'>
                    <img src={Logo} className='Logo' alt='EduFlix Logo'></img>
                </a>

                <Button as={Link} className='ButtonLink' to='/register'>
                    Novo vídeo
               </Button>

            </nav>
  
    );
}

export default Menu;

