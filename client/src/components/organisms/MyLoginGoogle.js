import React, { useState, useContext } from 'react';
import { ApiContext } from "../../context/ApiContext";
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';



const MyLoginGoogle = (props) => {
 
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');
  const [loggingStatus, setLoggingStatus] = useState("");
  const context = useContext(ApiContext);
  
  
  const responseGoogle = (responseGOO) => {
    console.log(responseGOO);
  
    setData(responseGOO);
    if (responseGOO.accessToken) {
     axios
          .post("/sso_login", responseGOO)
          .then(function(response) {
            context.setUser(response.data.user);
            context.setUsersLoaded(true);
            localStorage.setItem("token", response.data.token);
            props.history.push("/");
          })
  
          .catch(function(error) {
            setLoggingStatus("Something is wrong");
            console.error(error);
          })
  
        }else {
          setLogin(false);
   }

  };
  
  return (

    <div>
      <GoogleLogin
        clientId="979160339603-09rs6jej3m4gqi6u35vm1beii6ei3kte.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={false}
      />
    </div>
  )
}

export default MyLoginGoogle;