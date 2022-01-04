import React from 'react'
import { GifGridItem } from './GifGridItem';
//import { getGif } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    // const [Images, setImages] = useState([]);
    // useEffect( () =>{
    //     getGif(category).then(img => setImages(img)); 
    //     // then(setImages)
    // }, [category]);
    const {data, loading} = useFetchGifs(category);
    return (
        <>
            <h3 className="card animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="card animate__animated animate__flash">Cargando...</p>}
            <div className='cardGrid'>
                {
                    data.map( (img) => (
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />
                    ))
                }
            </div>
                
        </>
    )
}
