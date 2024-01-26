import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import cors from 'cors'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './views/home/home.jsx';
import Livros from './views/livros/Livros.jsx';
import LivrosCadastro from './views/livrosCadastro/LivrosCadastro';
import LivrosEdicao from './views/livrosEdicao/livrosEdicao';
import Header from './components/Header/Header.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  
  {
    path: "/livros/cadastro",
    element: <LivrosCadastro />,
  },
  {
    path: "/livros/edicao/:livroId",
    element: <LivrosEdicao />,
  },
  {
    path: "/livros",
    element: <Livros/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />


  </React.StrictMode>,
)
