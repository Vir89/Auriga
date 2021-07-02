import React from 'react';
import Form from './Form';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import useForm from './useForm';
import validateInfo from './validateInfo';
import Login from './Login';
import SSOLogin from './SSOLogin';



const Alta = () => {
    return (
        <Form>


            
                <useForm/>
                <SSOLogin/>
                <FormSignup/>
                <FormSuccess/>
                <validateInfo/>
                <Login/>
            
            
        </Form>
    )
}

export default Alta