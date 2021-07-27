import axios from "axios";
import React, { useState } from 'react';
import Form from  "../atoms/Form";
import Div from '../atoms/Div';
import {useForm} from './useForm';
import './Form.css';
import GoogleLogin from 'react-google-login';
import validateInfo from './validateInfo';
import Main from "../atoms/Main";
import Section from "../atoms/Section";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import H1 from "../atoms/H1";
import Img from "../atoms/Img";
import logo from "../../styles/img/logo.png"

const FormSignup = () => {

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  function submitForm(firstName, lastName, email, password) {

    let newUser = {
      firstName : firstName,
      lastName : lastName,
      email : email, 
      password : password
    };
    
    axios.post("http://localhost:5000/register", newUser)
    .then(function (response) {
      // handle success
      window.location = '/login';
    })
    .catch(function (error) {
      // handle error
      console.log(error);

    });

    //localStorage.setItem('localUser', JSON.stringify(newUser));

  }



  const { handleChange, handleSubmit, values, errors } = useForm(

    submitForm, validateInfo

  );

  //const answerGoogle = (answer) => {
    //console.log(answer);

  return (

    <Main>
      <Section form>
      <Div column>
          <Img logo  src={logo}  alt='Logo-Auriga'/>
          <H1 logo>AURIGA</H1>
          <Div row>
            <Form name="form" onSubmit={handleSubmit} noValidate>
     
              <label >Nombre</label>
              <Input
                
                type='text'
                name='firstName'
                placeholder='Enter your firstName'
                value={values.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p>{errors.firstName}</p>}
            
           
              <label>Apellidos</label>
              <Input
                type='text'
                name='lastName'
                placeholder='Enter your lastname'
                value={values.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p>{errors.lastName}</p>}
          
              <label >Email</label>
              <Input
              
                type='email'
                name='email'
                placeholder='Enter your email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
         
              <label >Contraseña</label>
              <Input
                type='password'
                name='password'
                placeholder='Enter your password'
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
           
              <label >Confirma la Contraseña</label>
              <Input
                type='password'
                name='password2'
                placeholder='Confirm your password'
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            
            <Button type="submit" main>
              Registra aquí
            </Button>
            {/*<span className='form-input-loginGoogle'>
              Login with Google <a href='/logingoogle'>Here</a>
      </span>*/}

      <br></br>

        <div className="login">

            <span className='form-input-login'>
              ¿Ya tienes cuenta con nosotros? Haz click <a href='/login'>Aquí</a>

            </span>
        </div>    
        
            <div className="autencticate">
            <br / > < br / >
            <GoogleLogin clientId = "600656666058-4vbo5ne30rqc84rb13e6mjkpgt384k7d.apps.googleusercontent.com"
            buttonText = "Entra con Google"
            //render={renderProps => (
            // <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
            //)}
            //onSuccess = { answerGoogle }
            //onFailure = { answerGoogle }
            cookiePolicy = { 'single_host_origin' }
            />

            </div>

          
        </Form>

        </Div>

        </Div>
      </Section>

  </Main>
  );
};

export default FormSignup;