import React, {useState} from 'react';
import { AddCategorias } from './components/AddCategorias';
import { GifGrid } from './components/GifGrid';

export const GiftSearchApp = () => {
    //const Categorias = ['One Piace', 'Naruto', 'Dragon Ball'];
    const [Categorias, setCategorias] = useState(['One Piace']);
    /*const handleAdd = () =>{
        setCategorias([...Categorias, 'Attack on Titan']); //Agrega al final
        setCategorias(['Attack on Titan', ...Categorias]);  //Aparace al inicio
    }*/
    return (
        <div>
            <h1 className='Titulo'>Desarrollo de Software I - Semestre 2021-II</h1>
            <h2>GiftSearchApp</h2>
            <AddCategorias setCategorias={setCategorias}/>
            <hr/>
            
            <ol>
                {
                    Categorias.map( (category) => (
                        <GifGrid
                            key = {category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}
