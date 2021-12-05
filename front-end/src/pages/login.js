import React from "react";
import { Component } from "react";
import {Post} from './Post';

class login extends Component {
    constructor (props) {
        super (props);
        this.state = {
            username: '',
            password: ''
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login(){
        console.log("This is login");
        Post('login', this.state).then((result) =>{
        let responseJSON = result;
            console.log(responseJSON);
        });
    }

    onChange(e){

        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
    }

    render(){
        return (
            <div className = "login container">
                <div class = "login-body">
                <h1 class = "login-title">Login</h1>
                
                <label>Username:</label>
                <input type="text" name="username" 
                placeholder="NeverGonnaGiveYouUp" onChange={this.onChange}></input>
                                      
                <label><br />Password:</label>
                <input type="password" name="passwword" 
                placeholder="NeverGonnaLetYouDown" onChange={this.onChange}></input>
                <input type="submit" value="Submit" className="button" onClick={this.login}></input>
                </div>
            </div>
        );
    }
}

// const login = () => {

//     const handleLogin = () => {
//         console.log('Login Clicked');
//     };

//     return(
        
//         <div class = "login container">
//             <div class = "login-body">
//                 <h1 class = "login-title">Sign-in</h1>
//                 <form>
//                     <div class = "form-container">
//                         <label htmlFor = "input">Email Address: </label>
//                         <input type="text" class="form">
//                         </input>
//                         <small class="hint">
//                             Never gonna give you up
//                         </small>
//                     </div>
//                     <div class = "form-container">
//                         <label htmlFor = "password">Password: </label>
//                         <input type="text" class="form">
//                         </input>
//                         <small class="hint">
//                             Never gonna let you down
//                         </small>

//                     </div>
//                     <button type = "submit" class = "button">
//                         Submit
//                     </button>
//                     <button type = "Forget Password" class = "button">
//                     Forget Password?(new feature)
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// manually export in js
export default login;
