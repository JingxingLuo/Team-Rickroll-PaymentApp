import React, { useEffect, useState } from 'react';
import CashTree from '../assets/CashTree.png';

const Home = ()=> {
    const [name,setName] = React.useState('');
    var [check,setCheck] = React.useState(true);
    const [amount, setAmount] = React.useState('');
    const storage = window.localStorage;
    const storage2 = window.sessionStorage;
    const username = storage2.getItem("username");
    const pocket = storage2.getItem("amount");


    // async function test(){
    //     const api_call = await fetch('http://localhost:3000/login');
    //     console.log(api_call);
    // }
    // test();

    // useEffect(() => {
    //     (
    //         async () => {
    //             await fetch('http://localhost:3000/login')
    //             .then(res => res.json())
    //             .then(data =>{ 
    //                 console.log(data);
    //                 if(data.isSuccess){setName(data.username);}
    //             })
            
    //         })();
    // });
    console.log(storage2.getItem("username"));
    if(check){
        console.log("HHHHHHHELLO"+username);
        if(username != null){
            // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            setName(username);
            setAmount(pocket);
            setCheck(false);
        }
    else{
        console.log(storage2.getItem("username"));
        storage2.setItem("username", "Stranger");
        storage2.setItem("amount", "0");
        setCheck(true);
    }
    }

    const handleLogout = () => {
        storage2.clear();

    };

    return (
        <div className="restofPage">
            <img src = {CashTree} alt="pho" />
            <h1 class="motto">
                <div><h2>{name ? 'Hello! ' + name + '\nYou have ' +"$"+ amount + ' in your pocket' : 'Please login!'}</h2></div>
                If you're like us, you are certain money grows on trees.
            </h1>
            <h2 class="motto">
                Don't waste your time with other money transfering
                services like PayPal or Venmo. Transfer money with us
                and we will make sure you never see it again.
            </h2>
            <form action="http://localhost:3000/cashPayment">
            <button type="submit">Cash Payment tester</button>
            </form>
            <form action="http://localhost:3000/creditPayment">
            <button type="credit">Credit Payment tester</button>
            </form>

            <form action="http://localhost:3000/loginSuceeded">
            <button type="logoff" onClick={handleLogout}>Want to Log out?</button>
            </form>
        </div>
    );

}
export default Home;