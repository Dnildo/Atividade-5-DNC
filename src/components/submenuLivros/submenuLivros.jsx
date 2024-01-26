import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";
import LivrosEdicao from '../../views/livrosEdicao/livrosEdicao.jsx';


function SubmenuLivros() {
  return (
    <div className='submenu'>  
      
        <ul>
            <li><Link to="/livros/cadastro">Cadastrar Livro</Link></li>
        </ul>  
        
        <ul>
            <li><Link to="/livros/edicao/:livroId">Editar Livro</Link></li>
        </ul>    
        
               
    </div>
  )
}

export default SubmenuLivros








