import React, { useState } from 'react'
import propTypes from 'prop-types';
export const AddCategorias = ({setCategorias}) => {
    const [inputValue, setinputValue] = useState(' ')
    const handleInputChange = (e) =>{
        //console.log(e.target.value);
        setinputValue(e.target.value);
    }
    const handleSumit = (e) =>{
        e.preventDefault();
        if(inputValue.length > 2){
            setCategorias(cats => [inputValue, ...cats]);
            setinputValue('');
        }
        
    }
    return (
        <form onSubmit={handleSumit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleSumit}>Buscar</button>
        </form>
    )
}

AddCategorias.propTypes = {
    setCategorias: propTypes.func.isRequired
}