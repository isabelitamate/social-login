import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';



const responseGoogle = (response) => {
  console.log(response);
}


class App extends Component {

  render() {
    return (
      <div className="App">


        <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com" buttonText="Login" cookiePolicy={'single_host_origin'}
            onSuccess={responseGoogle} onFailure={responseGoogle}   />

      </div>
    );
  }
}

export default App;
