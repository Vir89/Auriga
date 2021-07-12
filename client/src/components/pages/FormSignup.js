import React, { useState } from 'react';
import validate from './validateInfo';
import {useForm} from './useForm';
import './Form.css';
import GoogleLogin from 'react-google-login';

const FormSignup = () => {

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });


  function addNewUser(username, email, password){
    let newUser = {
      username : username,
      email : email, 
      password : password
    };
    console.log(newUser);

    localStorage.setItem('localUser', JSON.stringify(newUser));
  }

  function submitForm(username, email, password) {
    addNewUser(username, email, password);
    window.location = '/';
  }


  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  //const answerGoogle = (answer) => {
    //console.log(answer);

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          ¡Quédate con nosotros hoy! ¿Y si te registras? 
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Nombre de usuario</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Introduce tu nombre de usuario'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Introduce tu email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Introduce tu contraseña'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirma Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirma tu contraseña'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Registra aquí
        </button>
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

      </form>
    </div>

);
};


export default FormSignup;