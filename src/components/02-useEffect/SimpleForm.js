import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name :'',
        email: ''
    });

    const { name , email } = formState;

    useEffect( () =>{

    },[]);

    useEffect( () =>{
        // console.log('formstate');
    },[ formState ]);

    useEffect( () =>{
        // console.log('cambios de email');
    },[ email ]);

    const handleInputChange = ({ target }) => {
        // console.log(target.name);
        setFormState({
            ...formState, 
            [ target.name ] : target.value
        });
    }


    return (
        <>
            <h1> UseEffect </h1>   
            <hr/>
            <div className='form-group'>
                <input type='text' name='name' className='form-control' placeholder='Tu nombre' autoComplete='off' value={name} onChange={handleInputChange} />
            </div>

            <div className='form-group mt-3'>
                <input type='text' name='email' className='form-control' placeholder='Email' autoComplete='off' value={email} onChange={handleInputChange} />
            </div>

            { ( name === '123' ) && <Message />}

        </>
    )
}
