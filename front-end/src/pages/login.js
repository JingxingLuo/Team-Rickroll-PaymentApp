import React from "react";
import './login.css';

function loginInfo() {

    const handleLogin = () => {
        console.log('Login Clicked');
    };

    return(
        <div class = "login container">
            <div class = "login-body">
                <h1 class = "login-title">Sign-in</h1>
                <form>
                    <div class = "form-container">
                        <label htmlFor = "input">Email Address: </label>
                        <input type="text" class="form">
                        </input>
                        <small class="hint">
                            Never gonna give you up
                        </small>
                    </div>
                    <div class = "form-container">
                        <label htmlFor = "password">Password: </label>
                        <input type="text" class="form">
                        </input>
                        <small class="hint">
                            Never gonna let you down
                        </small>

                    </div>
                    <button type = "submit" class = "button">
                        Submit
                    </button>
                    <button type = "Forget Password" class = "button">
                    Forget Password?(new feature)
                    </button>
                </form>
            </div>
        </div>
    );

}

export default loginInfo;
