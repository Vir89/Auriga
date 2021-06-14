
import React from 'react';
import validate from './validateInfo';
import {useForm} from './useForm';
import './Form.css';


const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

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
          Entrar
        </button>
        <span className='form-input-login'>
          ¿Ya tienes cuenta con nosotros? Login <a href='/login'>Aquí</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;