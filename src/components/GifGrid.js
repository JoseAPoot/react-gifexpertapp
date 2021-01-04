import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { categoria } ) => {
    const { data:images, loading } = useFetchGifs( categoria );
    
    return (
        <>
            <div className="card-grid">
                <h3>{ categoria }</h3> 
                { loading && <p className="animate__animated animate__flash" >Cargando. . .</p> }

                { 
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    )) 
                }
            </div>
        </>
    )
}
