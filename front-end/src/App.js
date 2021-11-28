import { Link, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {

const myHandler = () =>{
  console.log('User has clicked')
};
  return (
    <div className="app-mount-point">
      <header className="active-links">
        <div className="button-wrappers"> 
          <nav id = "main-menu" className="nav-menu">
            <ul className="main-menu-list">
              <li>
                  <Link to="/" className="Home" onClick={myHandler}>
                    Home
                  </Link>
              </li>
              <li>
                <Link to="/personal" className="Personal" onClick={myHandler}>
                  Personal
                </Link>
              </li>
              <li>
                <Link to="/business" className="Business" onClick={myHandler}>
                  Business
                </Link>
              </li>
              <li>
                <Link to="/help" className="Help" onClick={myHandler}>
                  Help
                </Link>
              </li>
            </ul>
            <div className="header-buttons">
              <div className="button-list">
                <button>
                  <Link to="/login" class="Login" onClick={myHandler}>
                    Log In
                  </Link>
                </button>
                <button>
                  <Link to="/signup" class = "Sign-up" onClick={myHandler}>
                    Sign Up
                  </Link>
                </button>
              </div>
          </div>
          </nav>

          <Switch>
            <Route path="/"><home/></Route>
            <Route path="/personal"><personal/></Route>
            <Route path="/business"><business/></Route>
            <Route path="/help"><help/></Route>
            <Route path="/login"><login/></Route>
            <Route path="/signup"><signup/></Route>
          </Switch>


        </div>
      </header>
      <div className="restofPage">
      </div>
    </div>
  );
}

export default App;
