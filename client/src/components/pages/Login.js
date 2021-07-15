import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../atoms/Button';
import Div from '../atoms/Div';
import H2 from '../atoms/H2';
import P from '../atoms/P';
import Input from '../atoms/Input';
import Main from '../atoms/Main';
import Section from '../atoms/Section';
import './Form.css';
import GoogleIcon from '../atoms/GoogleIcon';
import Ahref from '../atoms/Ahref'
const Login =()=> {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loggingStatus , setLoggingStatus ] = useState('');
    const [loggedUser , setLoggedUser ] = useState({});
    const { email, password } = inputs;
    const location = useLocation();

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const handleSubmit=(e)=> {
        e.preventDefault();
        setSubmitted(true);

        if (email && password) {
            
            let storedUser = JSON.parse(localStorage.getItem('localUser'));

            if(storedUser && storedUser.email === email && storedUser.password === password){
                setLoggingStatus('OK');
                setLoggedUser(storedUser);
                window.location = '/home';
            }else{
                setLoggingStatus('KO');
            }
        }
    }

    return (
        <Main>
            <Section form>
                <Div column>
                   {/*  Logo */}
                    <H2>Login</H2>
                    <form name="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <Input type="email" name="email" defaultValue={email} onChange={handleChange} className={'form-control' + (submitted && !email ? ' is-invalid' : '')} />
                            {submitted && !email &&
                                <div className="invalid-feedback">
                                    Email es requerido
                                </div>
                            }
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <Input type="password" name="password" defaultValue={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                            {submitted && !password &&
                                <div className="invalid-feedback">Contraseña es requerida</div>
                            }
                        </div>
                        <div className="form-group">
                        {loggingStatus === 'KO' &&
                                <div className="invalid-feedback">Email y/o contraseña no válido/s</div>
                            }
                            <Button main>
                            
                                <Ahref href="/home">Entrar</Ahref>
                            </Button>
                            <Div row>
                            <P>¿Aún no estas registrado?   </P>
                            <Link to="/registro" className="btn btn-link"> Registro</Link>
                            </Div>
                            <Div authSocialNetworks>
                                <Div  googleBtn >
                                    <Div googleIconWrapper>
                                        <GoogleIcon src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                    </Div>               
                                        <Ahref google href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser">Sign in with google</Ahref>
                                    </Div>
                            </Div>
                            
                        </div>
                    </form>
                </Div>
            </Section>
        </Main>
    );
}

export default Login;