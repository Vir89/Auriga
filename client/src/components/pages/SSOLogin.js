import React from 'react';
//import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';



function SSOLogin(){

    const answerGoogle=(answer)=>{
      console.log(answer);
  
    }
  return (
    <div className={SSOLogin}>
      <br/> <br/>
      <GoogleLogin
    clientId="600656666058-4vbo5ne30rqc84rb13e6mjkpgt384k7d.apps.googleusercontent.com"
    buttonText="Login"
   //render={renderProps => (
  // <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
  //)}
    onSuccess={answerGoogle}
    onFailure={answerGoogle}
    cookiePolicy={'single_host_origin'}
    />
  
    </div>
  
  );
  
  }
  
  
  export default SSOLogin;