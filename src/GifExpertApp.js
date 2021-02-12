import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['Chocolate'])

    // const handleAdd = () => {
    //     // setcategorias([...categorias, 'Precios']);
    //     //otra forma de ahcerlo, se hace como la línea 12
    //     setcategorias(cats => [...cats, 'Precios']);

    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories ={setCategories}/>
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}
            {/* //De la forma del 21, se podría añadir una categoría nueva que sería Precios// */}
        
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category = {category} />  
                    ))
                }
            </ol>

        </>
    )
}