import axios from "axios";
import React, { useState, useContext } from 'react';
import { ApiContext } from "../../context/ApiContext";
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
//import facebook from "../../styles/img/facebook.png";

const MyFacebookLogin = (props) => {
    
  const [loggingStatus, setLoggingStatus] = useState("");
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');
  const context = useContext(ApiContext);

  const responseFacebook = (responseSSO) => {

    console.log(responseSSO);
      setData(responseSSO);
      setPicture(responseSSO.picture.data.url);
      if (responseSSO.accessToken) {
        axios
        .post("/sso_login", responseSSO)
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
//setLogin(true);
}else {
setLogin(false);
}
}

return (

    <div class="loginfacebook">
    <Card style={{ width: '600px' }}>
      <Card.Header>
        {!login &&
        <FacebookLogin
        appId="193878182856813"
        autoLoad={false}
        fields="name,email,picture"
        scope="public_profile, user_friends"
        callback={responseFacebook} />
        }
        {login &&
          <Image src={picture} roundedCircle />             

        }
      </Card.Header>
      {login &&
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.text>
          {data.email}
        </Card.text>
      </Card.Body>

      }
    </Card>

  </div>
)}

export default MyFacebookLogin;