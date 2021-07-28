import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Div from "../atoms/Div";
import H2 from "../atoms/H2";
import P from "../atoms/P";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Main from "../atoms/Main";
import Section from "../atoms/Section";
import "./Form.css";
import ButtonSpan from "../atoms/ButtonSpan";
import { ApiContext } from "../../context/ApiContext";
import logo from "../../styles/img/logo.png"
import google from "../../styles/img/google.png"
import facebook from "../../styles/img/facebook.png"
import Img from "../atoms/Img";
import H1 from "../atoms/H1";
import Hr from "../atoms/Hr";
import Form from  "../atoms/Form";
import Hr from "../atoms/Hr";

const Login = (props) => {

    const context = useContext(ApiContext);
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loggingStatus, setLoggingStatus] = useState("");
    const { email, password } = inputs;

    // reset login status when logout
    useEffect(() => {
        context.setUser({});
        context.setUsersLoaded(false);
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
                    context.setUsersLoaded(true);
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
         <Section formLogin>
                <Div column>
                 <Img logo  src={logo}  alt='Logo-Auriga'/>
                     <H1 logo>Mi.Auriga</H1>                    
                    <Div column center>
                        <Form name="form" onSubmit={(e) => handleSubmit(e)}>                       
                            <Div column center>
                                {/* <Label>Email</Label> */}
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    defaultValue={email}
                                    onChange={handleChange}
                                    className={"form-control" + (submitted && !email ? " is-invalid" : "")}
                                />
                                {submitted && !email && (
                                    <div className="invalid-feedback">
                                        Email es requerido
                                    </div>
                                )}

                            
                                {/* <Label>Contraseña</Label> */}
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    defaultValue={password}
                                    onChange={handleChange}
                                    className={"form-control" + (submitted && !password
                                            ? " is-invalid"
                                            : "")
                                        }
                                />
                                {submitted && !password && (
                                    <Div red>
                                        Contraseña es requerida
                                    </Div>
                                )}
                                {loggingStatus === "KO" && (
                                    <Div red>
                                        Email y/o contraseña no válido/s
                                    </Div>
                                )}
                            </Div>
                            <Div column center>
                                <Button type="submit" main>
                                    <ButtonSpan>Entrar</ButtonSpan>
                                </Button>
                                    <P>¿Aún no estas registrado? </P>
                                    <Link to="/registro" className="btn btn-link">
                                        {" "}
                                        Registro
                                    </Link>
                            </Div>
                            
                        </Form> 
                    </Div> 
                </Div>
            </Section>
            <Div links>
             <Div hr>
             <Hr></Hr><H2 network>Incicia Sesión</H2><Hr></Hr>
             </Div>
           <Img links src={google} alt='google' />
           <Img links src={facebook} alt='facebook'/>
           </Div>
        </Main>
    );
};

export default Login;