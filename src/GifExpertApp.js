import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['madara uchiha']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias } />

            <hr/>

            {
                categorias.map( categoria => 
                    <GifGrid 
                        key={ categoria }
                        categoria={ categoria } 
                    />
                )
            }
        </>
    );
}