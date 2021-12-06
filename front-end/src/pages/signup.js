import React from "react";

//import './signup.css';
const SignUp = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const rickRoll = () => {
        console.log('You are rickRolled!');
    };

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
        <div>
            <h1>Sign Up</h1>

            <div>
                <div>
                    <input value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </div>
                <div>
                <button onClick={handleSignUp}>Sign Up</button>
                </div>
                <div>
                <button onClick={rickRoll}>rick?</button>
                </div>
            </div>
        </div>
    );
};

// manually export in js
export default SignUp;