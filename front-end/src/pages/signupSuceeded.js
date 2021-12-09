import React from 'react'

function SignupSuceeded() {

    
        setTimeout(function() {
            window.location.href = '/';
         }, 3000);
    


    return (
        <div>
            <h1 style = {{paddingBottom:'120px'}}>Welcome!</h1>
            <h1 style = {{paddingBottom:'120px'}}>You get a free $1000 in your account!</h1>
            <h1 style = {{paddingBottom:'120px'}}>Sign in to check your balance!</h1>
            <div style = {{color :'lightblue', paddingBottom:'300px'}}>
                Redirecting to the home page in 3 seconds..
            </div>

        </div>
    )
}

export default SignupSuceeded;
