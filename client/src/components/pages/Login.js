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
                    context.setNewUser(response.data.user);
                    localStorage.setItem("token", response.data.token);
                    props.history.push("/home");
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
                    {/*  Logo */}
                    <H2>Login?</H2>
                    <form name="form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
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
                        </div>
                        <div className="form-group">
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
                        </div>
                        <div className="form-group">
                            {loggingStatus === "KO" && (
                                <div className="invalid-feedback">
                                    Email y/o contraseña no válido/s
                                </div>
                            )}
                            <Button type="submit" main>
                                <ButtonSpan>Entrar!!!!</ButtonSpan>
                            </Button>
                            <Div row>
                                <P>¿Aún no estas registrado? </P>
                                <Link to="/registro" className="btn btn-link">
                                    {" "}
                                    Registro
                                </Link>
                            </Div>
                            <Div authSocialNetworks>
                                <Div googleBtn>
                                    <Div googleIconWrapper>
                                        <GoogleIcon
                                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                            alt="google button"
                                        />
                                    </Div>
                                    <Ahref
                                        google
                                        href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser"
                                    >
                                        Sign in with google
                                    </Ahref>
                                </Div>
                            </Div>
                        </div>
                    </form>
                </Div>
            </Section>
        </Main>
    );
};

export default Login;