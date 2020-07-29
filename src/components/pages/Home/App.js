import React from 'react';
import Menu from '../../Menu/index.js';
import dadosIniciais from '../../../data/dados_iniciais.json';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import Footer from '../../Footer';


function Home() {
  return (

   <div className='bgColor'>

     
        <Menu/>
        <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Crime Street é um jogo de beat and up. Foi inspirado em grandes clássicos como o: Battletoads, Final Fight e o Double Dragon. Sua missão como jogador é derrotar o chefão do crime de Rio de Janeiro MURALHA, assim libertando toda a cidade do crime."}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
        category={dadosIniciais.categorias[1]}
      />

      <Carousel 
        category={dadosIniciais.categorias[2]}
      />

      <Carousel 
        category={dadosIniciais.categorias[3]}
      />

      <Carousel 
        category={dadosIniciais.categorias[4]}
      />

      <Carousel 
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
      
   </div>
  );
}

export default Home;
