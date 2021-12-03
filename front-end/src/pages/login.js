import React from "react";
import './login.css';

function loginInfo() {

    const handleLogin = () => {
        console.log('Login Clicked');
    };

    return (
        <div class="login">
            <h1>Welcome</h1>

            <div class="content">
                <div>
                    <input class="username" />
                </div>
                
                <div>
                    <input type="password" />
                </div>
                <div>
                    <button class="login" onClick={handleLogin}>Login</button>
                    <button class="forgot">Forgot Password</button>
                </div>
            </div>
        </div>
    );

}

export default loginInfo;
