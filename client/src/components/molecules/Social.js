import Img from "../atoms/Img";
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import facebook from "../../styles/img/facebook.png"

const Facebook =(props) => {

    const responseFacebook = (response) => {
        console.log("Aquí tenemos el nombre: "+response.name);
        console.log("Aquí tenemos el email: " +response.email);
        console.log("Aquí esta la foto: " +response.picture.date.url);
      }


      return (

        <Img links src={facebook} alt='facebook'>
        <FacebookLogin
        appId="193878182856813"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        />
        </Img>
      )


}

export default Facebook;
