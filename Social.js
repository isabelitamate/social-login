import React, { Component } from 'react';
import SocialButton from './SocialButton'



const handleSocialLogin = (user) => {
  console.log(user)
}

const handleSocialLoginFailure = (err) => {
  console.error(err)
}




class Social extends Component {

    render() {
      return (
        <div className="">
            <SocialButton
                provider='facebook'
                appId='YOUR_APP_ID'
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
                >
                Login with Facebook
            </SocialButton>
    </div>
    )  }
}


export default Social;


