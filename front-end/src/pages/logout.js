import React from 'react'
import { Redirect } from "react-router";

function Logout() {


    setTimeout(function() {window.location.href = '/';}, 3000);
    
return (
    <div>
    <h1 style = {{paddingBottom:'120px'}}>See you again!</h1>
    <div style = {{color :'lightblue', paddingBottom:'300px'}}>
        Redirecting to the home page in 3 seconds..
    </div>
    </div>  
)

}
    


export default Logout;