import React from "react";

const login = () => {

    const handleLogin = () => {
        console.log('Login Clicked');
    };

    return(
        <div>
            <h1>Login</h1>

            <div>
                <div>
                    <input />
                </div>
                <div>
                    <input type="password" />
                </div>
                <div>
                    <button onClick={handleLogin}>Login</button>
                    <button>Forgot Password</button>
                </div>
            </div>
        </div>
    );
};

// manually export in js
export default login;