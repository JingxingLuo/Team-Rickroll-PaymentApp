import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './login';
import SignUp from './signup';
import Home from './home';


function App() {
  return (
    <div class="app-mount-point">
      <div class="active-links">
        <nav id="main-menu" class="nav-menu">
          <ul class="main-menu-list">
            <li>
              <Link to="/" class="Home">Home</Link>
            </li>
            <li>
              <Link to="About" class="About">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-buttons">
        <div class="button-list">
          <button class="login1">
            <Link class="Login" to="/Login">
              Log In
            </Link>
          </button>
          <button class="signup1">
            <Link class="Sign-up" to="/Signup">
              Sign Up
            </Link>
          </button>
        </div>
      </div>
      <Switch>
        <Route path="/SignUp"><SignUp /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </div>

  );
}
export default App;
// function App() {

// const myHandler = () =>{
//   console.log('User has clicked')
// };
//   return (
//     <div className="app-mount-point">
//       <header className="active-links">
//         <div className="button-wrappers"> 
//           <nav id = "main-menu" className="nav-menu">
//             <ul className="main-menu-list">
//               <li>
//                   <Link to="/" className="Home" onClick={myHandler}>
//                     Home
//                   </Link>
//               </li>
//               <li>
//                 <Link to="/personal" className="Personal" onClick={myHandler}>
//                   Personal
//                 </Link>
//               </li>
//               { <li>
//                 <Link to="/business" className="Business" onClick={myHandler}>
//                   Business
//                 </Link>
//               </li> }
//               {/* <li>
//                 <Link to="/help" className="Help" onClick={myHandler}>
//                   Help
//                 </Link>
//               </li> */}
//             </ul>
//             <div className="header-buttons">
//               <div className="button-list">
//                 <button>
//                   <Link to="/Login" class="Login" onClick={myHandler}>
//                     Log In
//                   </Link>
//                 </button>
//                 <button>
//                   <Link to="/Signup" class = "Sign-up" onClick={myHandler}>
//                     Sign Up
//                   </Link>
//                 </button>
//               </div>
//           </div>
//           </nav>

//           <Switch>
//           <Route path="/"><Home /></Route>
//             <Route path="/Personal"><personal/></Route>
//             {/* <Route path="/business"><business/></Route> */}
//             {/* <Route path="/Help"><Help/></Route> */}
//             <Route path="/login"><Login /></Route>
//             <Route path="/SignUp"><SignUp /></Route>
//           </Switch>


//         </div>
//       </header>
//       <div className="restofPage">
//       </div>
//     </div>
//   );
// }

// export default App;