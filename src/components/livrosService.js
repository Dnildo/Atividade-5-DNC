import Axios from 'axios';
const BASE_URL = "http://localhost:5173"

export class LivrosService{
    static getLivros(){
        return Axios.get(BASE_URL+'/livros');
    }

    static getLivros(id){
        return Axios.get(`${BASE_URL}/livros/${id}`);
    }

    static createLivros(body){
        return Axios.post(`${BASE_URL}/livros`,body);
    }

    static  updateLivro(id,body){
        return Axios.put(`${BASE_URL}/livros/${id}`,body);
    }

    static deleteLivro(id){
        return Axios.delete(`${BASE_URL}/livros/${id}`);
    }
    
}