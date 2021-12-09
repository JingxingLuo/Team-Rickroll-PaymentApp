import React, { useEffect, useState } from 'react';

const Transactions = ()=> {
    const [items, setItems] = React.useState('');
    const [seen, setSeen] = React.useState(false);
    var [messages, setMessages] = React.useState([]);
    const storage2 = window.sessionStorage;
    var username = storage2.getItem("username");
    var obj;


    const handleSubmit = () => {
        const settings = {
            method: 'post',
            body: username
        };
        fetch('/api/Transactions', settings)
            .catch(console.log)
            .then(res => res.json())
            .then(data=> {
                console.log(data);

                obj = Object.entries(data).map(([key, value]) => ({key, value}));
                if(obj.length == 0){
                    setSeen(false);
                }
                else{
                    for(var i = 0; i < obj.length; i++){
                        console.log(obj[i].key);
                        console.log(obj[i].value.from);
                        console.log(obj[i].value.to);
                        console.log(obj[i].value.type);
                        console.log(obj[i].value.amount);
                        console.log(obj[i].value.notes);
                        
                        alert("Transaction[" + obj[i].key + "] is: \n" + 
                        "From: " + obj[i].value.from + "\nTo: " + obj[i].value.to + "\nType: " + obj[i].value.type 
                        + "\nAmount: " + obj[i].value.amount + "\nNotes: "+obj[i].value.notes);
                        setSeen(true);
                    }
                }
            });
    };

    return (
        <div className="restofPage">
            <h1 class="motto">
                <div><h2>Transaction History</h2></div>
                <button  type="button" className='button1' style={{width: "30%", marginLeft: "30%",marginBottom:"50%"}} onClick={handleSubmit}>Show all transcation</button>
                <div className = "" style = {{paddingTop: "30px"}}>
                        {/* <div>{seen ? <div style = {{color: "green"}}>Here is something{messages}</div> 
                        : <div style = {{color: "red"}}>HERE is something else</div> }</div> */}
                    </div>
            </h1>
        </div>
    );
}

export default Transactions;
