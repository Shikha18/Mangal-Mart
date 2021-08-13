import React from 'react';
import { GoogleLogin } from 'react-google-login';

function SignIn() {

    const responseGoogle = res => {
        console.log(res);
    }
    return (
        <div>
            <GoogleLogin 
            clientId="673234244387-oo9b2ahej2fhtgpoevi7hfo2pb1d9dip.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            />
        </div>
    )
}

export default SignIn
