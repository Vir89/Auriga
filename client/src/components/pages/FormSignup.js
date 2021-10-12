import axios from "axios";
import React, { useState } from 'react';
import Form from  "../atoms/Form";
import Div from '../atoms/Div';
import Label from '../atoms/Label';
import {useForm} from './useForm';
import './Form.css';
import validateInfo from './validateInfo';
import Main from "../atoms/Main";
import Section from "../atoms/Section";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import H1 from "../atoms/H1";
import Img from "../atoms/Img";
import logo from "../../styles/img/logo.png";
//import google from "../../styles/img/google.png";
import Hr from "../atoms/Hr";
import H2 from "../atoms/H2";
import MyFacebookLogin from "../organisms/MyFacebookLogin.js";
import MyLoginGoogle from "../organisms/MyLoginGoogle.js";



const FormSignup = (props) => {


  const [login, setLogin] = useState(false);

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

  
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');


 

  return (

    <Main>
      <Section formRegister>
      <Div column center>
          <Img logo  src={logo}  alt='Logo-Auriga'/>
          <H1 logo>AURIGA</H1>
          <Div row>
            <Form name="form" onSubmit={handleSubmit} noValidate>
            <Div column center>
     
              <Input
                
                type='text'
                name='firstName'
                placeholder='Nombre'
                value={values.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p>{errors.firstName}</p>}
            </Div>
            {/*<Div column center>
           
              <Label>Apellidos</Label>
              <Input
                type='text'
                name='lastName'
                placeholder='Apellidos'
                value={values.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p>{errors.lastName}</p>}
            </Div>*/}
            <Div column center>
              <Input
              
                type='email'
                name='email'
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </Div>
            <Div column center>
              <Input
                type='password'
                name='password'
                placeholder='Contraseña'
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </Div>
            <Div column center>
           
              <Input
                type='password'
                name='password2'
                placeholder='Confirma la contraseña'
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </Div>
            <Div column center>
            
            <Button type="submit" main>
              Registra aquí
            </Button>
            </Div>  
      </Form>   

        </Div>

        </Div>
      </Section>  
      <Div links>
      <span className='form-input-login'>
          ¿Ya tienes cuenta con nosotros? Haz click <a href='/login'>Aquí</a>
      </span>
             <Div hr>
             <Hr></Hr><H2 netwk>Inicia Sesión</H2><Hr></Hr>
             </Div>



           {/*<Img links src={google} alt='google'
            GoogleLogin
            clientId="979160339603-09rs6jej3m4gqi6u35vm1beii6ei3kte.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}           
          />*/}

        

          {/*<Img links src={facebook} alt='facebook'
          
          />*/}
          <MyFacebookLogin {...props}/>
          <MyLoginGoogle {...props}/>
      
           </Div>
  </Main>
  );
};

export default FormSignup;