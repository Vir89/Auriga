import React from 'react';
import Form from './Form';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import useForm from './useForm';
import validateInfo from './validateInfo';



export const Alta = () => {
    return (
        <Form>


            <Form>
                <useForm/>
                <FormSignup/>
                <FormSuccess/>
                <validateInfo/>
            </Form>
            
        </Form>
    )
}
