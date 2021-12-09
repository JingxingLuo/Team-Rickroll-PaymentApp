import React from 'react'

function SignupSuceeded() {

    
        setTimeout(function() {
            window.location.href = '/';
         }, 3000);
    


    return (
        <div>
            <h1 style = {{paddingBottom:'120px'}}>Welcome!</h1>
            <div style = {{color :'lightblue', paddingBottom:'300px'}}>
                Redirecting to the home page in 3 seconds..
            </div>

        </div>
    )
}

export default SignupSuceeded;
