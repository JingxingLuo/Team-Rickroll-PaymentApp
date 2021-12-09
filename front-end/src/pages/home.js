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
    const [seen, setSeen] = React.useState(false);

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
            setSeen(true);
            if(username == "Stranger"){
                setSeen(false);
            }
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

    const handleRefresh = () => {
        const body = {
            username: storage2.getItem("username"),
        };
        const settings = {
            method: 'post',
            body: JSON.stringify(body),
        };
        fetch('/api/refresh', settings)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.isSuccess) {
                console.log("asdadssadasdasdas");
                storage2.setItem("amount", JSON.stringify(data.amount));
                window.location.href = '/';
            }
            else{
            }
        }).catch(console.log);

    }

    return (
        <div className="restofPage">
            <img src = {CashTree} alt="pho" />
            <h1 class="motto">
                <div><h2>{seen ? 'Hello! ' + name + '\n,You have ' +"$"+ amount
                 + ' in your pocket' : 'Hello Stranger, register today and get free $1000 '}
                  </h2></div>
                If you're like us, you are certain money grows on trees.
            </h1>
            <h2 class="motto">
                <div>
                    {seen ? <div></div>: "Don't waste your time with other money transfering" +
               " services like PayPal or Venmo. Transfer money with us " +
                "and we will make sure you never see it again." }
                </div>


            </h2>
            <div style={{alignContent:'center', paddingLeft:"40%"}}> 
            {seen ? <div>
                <div style={{textAlign:'center'}}>
                <form action="http://localhost:3000/cashPayment" >
                <button  className='button1' type="submit">Transfer with cash</button>
                </form>
                </div>
            <form action="http://localhost:3000/creditPayment">
            <button  className='button1' type="credit">Transfer with credit card</button>
            </form>
            
            <button  className='button1' type="submit" onClick={handleRefresh}>Refresh my amount</button> </div> : <div></div>}


            
            <div>{seen ? <form action="http://localhost:3000/Logoutsuccess">
            <button type="submit" className='button1' style={{backgroundColor: "#e63f3f"}} onClick={handleLogout}>Want to Sign out?</button>
            </form> : <div></div> } </div>

            {/* <form action="http://localhost:3000/Logoutsuccess">
            <button type="logoff" onClick={handleLogout}>Want to Log out?</button>
            </form> */}
            </div>
        </div>
    );

}
export default Home;