import React from 'react';
import Header from "../../components/Header/Header";
import "./index.scss";
import LivrosEdicao from '../livrosEdicao/livrosEdicao';

const Home = () => {
  return (
    <div className='home'>      
      <Header/>
      
      <h1>Biblioteca Central Online - Livros</h1>
    </div>
  )
}

export default Home