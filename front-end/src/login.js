import React from "react";
import './login.css';

function login(){

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

export default login;

// import React from "react";

// const login = () => {

//     const handleLogin = () => {
//         console.log('Login Clicked');
//     };

//     return(
//         <div>
//             <h1>Login</h1>

//             <div>
//                 <div>
//                     <input />
//                 </div>
//                 <div>
//                     <input type="password" />
//                 </div>
//                 <div>
//                     <button onClick={handleLogin}>Login</button>
//                     <button>Forgot Password</button>
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default login;
