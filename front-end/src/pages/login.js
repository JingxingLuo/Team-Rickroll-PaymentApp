import React from "react";
import { Redirect } from "react-router";



const Login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [redirect, setRedirect] = React.useState(false);
    const [red,setRed] = React.useState(false);
    const [messages,setMessages] = React.useState('');
    var storage = window.localStorage;
    var storage2 = window.sessionStorage;

    const handleSubmit = () => {
        console.log("test", username, password);
        const body = {
            username: username,
            password: password
        };
        const settings = {
            method: 'post',
            body: JSON.stringify(body),
        };
        fetch('/api/login', settings)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.isSuccess) {
                    setRedirect(true);
                    storage2.setItem("isSuccess", JSON.stringify(data.isSuccess));
                    storage2.setItem("username", JSON.stringify(data.username));
                    storage2.setItem("amount", JSON.stringify(data.amount));
                    setRed(false);
                }
                else{
                    setRed(true);
                    setMessages("Invalid username/password!");
                }
            }).catch(console.log);
    };

    if (redirect) {
        setTimeout(function() {
            window.location.href = '/';
            setRedirect(false);
         }, 3000);
        
        return (
            <div>
            <h1 style = {{paddingBottom:'120px'}}>Welcome back! {username}</h1>
            <div style = {{color :'lightblue', paddingBottom:'300px'}}>
                Redirecting to the home page in 3 seconds..
            </div>
        </div>
        )
    }

    return (
        <div className="login">
            <main className="form-signin">
                <form>
                    <h1 className="">Sign in</h1>
                    <h2 className="title">Username</h2>
                    <input type="username" id="inputUsername" className="form-control" placeholder="Rick" required autoFocus
                        value={username} onChange={(e) => setUsername(e.target.value)} />

                    <h2 className="title">Password</h2>
                    <input type="password" id="inputPassword" className="form-control" placeholder="" required
                        value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div className = "" style = {{paddingTop: "5px"}}>
                        <div>{red ? <div style = {{color: "red"}}>{messages}</div> 
                        : <div style = {{color: "green"}}>{messages}</div> }</div>
                    </div>    

                    <button className="submitButtonlog" type="button" onClick={handleSubmit}>Submit</button>
                </form>
            </main>
        </div>
    );
}

// class login extends Component {
//     constructor (props) {
//         super (props);
//         this.state = {
//             username: '',
//             password: ''
//         }
//         this.login = this.login.bind(this);
//         this.onChange = this.onChange.bind(this);
//     }

//     login(){
//         console.log("This is login");
//         Post('login', this.state).then((result) =>{
//         let responseJSON = result;
//             console.log(responseJSON);
//         });
//     }

//     onChange(e){
//         this.setState({[e.target.name]: e.target.value});
//         console.log(this.state);
//     }

//     render(){
//         return (
//             <div className = "login container">
//                 <div class = "login-body">
//                 <h1 class = "login-title">Login</h1>

//                 <label>Username:</label>
//                 <input type="text" name="username" 
//                 placeholder="NeverGonnaGiveYouUp" onChange={this.onChange}></input>

//                 <label><br />Password:</label>
//                 <input type="password" name="password" 
//                 placeholder="NeverGonnaLetYouDown" onChange={this.onChange}></input>
//                 <input type="submit" value="Submit" className="button" onClick={this.login}></input>
//                 </div>
//             </div>
//         );
//     }
// }

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
export default Login;
