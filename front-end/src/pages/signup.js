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

    return (
        <div className="signup">
            <main className="form-signup">
                <form>
                    <h1 className="">Sign Up</h1>
                    <h2 className="title">Username</h2>
                    <input type="username" id="inputusername" className="form-control"
                        placeholder="Rick" required autoFocus
                        value={username} onChange={(e) => setUsername(e.target.value)} />

                    <h2 className="title">Password</h2>
                    <input id="inputPassword" value={password} type="password"
                        className="form-control" placeholder="" required value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                    <button className="submitButtonsig" onClick={handleSignUp}>Sign Up</button>
                    <button className="submitButtonsig" onClick={rickRoll}>rick?</button>


                </form>
            </main>
        </div>
    );
};

// manually export in js
export default SignUp;