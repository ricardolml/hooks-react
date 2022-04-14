import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coor, setCoor] = useState({
        x : 0,
        y : 0
    });

    const { x ,y } = coor;

    useEffect(() => {
        const mouseMove = ({x, y}) =>{
            setCoor( { x , y } );
            // console.log(':D')
        }
        window.addEventListener('mousemove' , mouseMove );
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [] );

    return (
        <>
            <h3>Eres genial { x + ' - ' + y }</h3>   
        </>
    )
}
