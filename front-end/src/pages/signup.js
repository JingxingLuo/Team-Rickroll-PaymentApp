import React from "react";
import '../styles/signup.css';
const SignUp = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSignUp = () => {
        console.log('Sign Up Clicked', username, password);
        const body = {
            username: username,
            password: password,
        };
        const settings = {
            method: 'post',
            body: JSON.stringify(body), //to json string
        };
        fetch('/api/SignUp', settings) // makes http client calls 
            .catch(console.log);
    };
    
    return(
        <div class="signup">
            <h1>Sign Up</h1>
            <div class="content">
                <div>
                    <input class="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <input class="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </div>
                <div>
                <button class="button" onClick={handleSignUp}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};


export default SignUp;