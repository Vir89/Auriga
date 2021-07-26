import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Div from "../atoms/Div";
import H2 from "../atoms/H2";
import P from "../atoms/P";
import Input from "../atoms/Input";
import Main from "../atoms/Main";
import Section from "../atoms/Section";
import "./Form.css";
import GoogleIcon from "../atoms/GoogleIcon";
import Ahref from "../atoms/Ahref";
import ButtonSpan from "../atoms/ButtonSpan";
import { ApiContext } from "../../context/ApiContext";
import logo from "../../styles/img/logo.png"
import google from "../../styles/img/google.png"
import facebook from "../../styles/img/facebook.png"
import Img from "../atoms/Img";
import H1 from "../atoms/H1";
import Form from  "../atoms/Form";

const Login = (props) => {

    const context = useContext(ApiContext);
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loggingStatus, setLoggingStatus] = useState("");
    const { email, password } = inputs;

    // reset login status
    useEffect(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log("hey");
        if (email && password) {
            const loginData = {
                email: email,
                password: password,
            };

            axios
                .post("http://localhost:5000/login", loginData)
                .then(function (response) {
                    // handle success
                    context.setUser(response.data.user);
                    context.setUsersLoaded(true)
                    localStorage.setItem("token", response.data.token);
                    props.history.push("/");
                    
                })
                .catch(function (error) {
                    // handle error
                    setLoggingStatus("KO");
                    console.error(error);
                });
        }
    };

    return (
        <Main>
         <Section form>
                <Div column>
                 <Img logo  src={logo}  alt='Logo-Auriga'/>
                    <H1 logo>AURIGA</H1>
                    <Div row>
                    <Form name="form" onSubmit={(e) => handleSubmit(e)}>                       
                        
                            <label>Email</label>
                            <Input
                                type="email"
                                name="email"
                                defaultValue={email}
                                onChange={handleChange}
                                className={"form-control" + (submitted && !email ? " is-invalid" : "")}
                            />
                            {submitted && !email && (
                                <div className="invalid-feedback">
                                    Email es requerido
                                </div>
                            )}
                        
                            <label>Contraseña</label>
                            <Input
                                type="password"
                                name="password"
                                defaultValue={password}
                                onChange={handleChange}
                                className={"form-control" + (submitted && !password
                                        ? " is-invalid"
                                        : "")
                                    }
                            />
                            {submitted && !password && (
                                <div className="invalid-feedback">
                                    Contraseña es requerida
                                </div>
                            )}
                            {loggingStatus === "KO" && (
                                <div className="invalid-feedback">
                                    Email y/o contraseña no válido/s
                                </div>
                            )}
                            <Button type="submit" main>
                                <ButtonSpan>Entrar</ButtonSpan>
                            </Button>
                                <P>¿Aún no estas registrado? </P>
                                <Link to="/registro" className="btn btn-link">
                                    {" "}
                                    Registro
                                </Link>
                          
                    </Form> 
                    </Div> 
                </Div>
            </Section>
            <Div links>
            <H2>Ingresar con</H2>
           <Img google src={google} alt='google' />
           <Img facebook src={facebook} alt='facebook'/>
           </Div>
        </Main>
    );
};

export default Login;