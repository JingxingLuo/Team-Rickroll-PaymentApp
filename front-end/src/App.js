import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup';
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import './styles/login.css';
import './styles/signup.css';


function App() {
  return (
    <div class="app-mount-point">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component ={Home} />
          <Route path="/SignUp" exact component = {SignUp} />
          <Route path="/Login" exact component = {Login} />
          <Route path="/About" exact component = {About} />
        </Switch>
        <Footer />
      </Router>
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