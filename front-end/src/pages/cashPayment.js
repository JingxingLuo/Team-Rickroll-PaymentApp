import React from "react";
// import { useState } from "react";
// import ReactDOM from "react-dom"

const CashPayment = () => {
    const [from, setFrom] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [to, setTo] = React.useState('');
    const [type, setType] = React.useState('cash');
    const [amount, setAmount] = React.useState('');
    const [notes, setNotes] = React.useState('');
    var [messages, setMessages] = React.useState('');
    const [red,setRed] = React.useState(false);

    const [recipientRed,setRecipientRed] = React.useState(false);
    var [recipientMessage, setRecipientMessage] = React.useState(false);

    const handleCashPayment = () => {
        console.log('test', from, password, to, type, amount);
        if(from =="" || password == "" || to == "" || amount == "") {
            alert("Something goes wrong, check if you have completed the form");
        }
        const body = {
            from: from,
            password: password,
            to: to,
            type: type,
            amount: amount,
            notes: notes
        };
        const settings = {
            method: 'post',
            body: JSON.stringify(body), //to json string
        };
        fetch('/api/cashPayment', settings) // makes http client calls 
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(!data.isSuccess){
                    alert(data.message);
                }
                else{
                    window.location.href = '/';
                }
            });
    };

    const handleVerify = () => {
        console.log('test', from, password);
        const body = {
            from: from,
            password: password
        };
        const settings = {
            method: 'post',
            body: JSON.stringify(body), //to json string
        };
        fetch('/api/cashPayment-verifyAccount', settings) // makes http client calls 
            .then(res => res.json())
            .then(data => {
             var obj = Object.entries(data).map(([key, value]) => ({key, value}));
             console.log(obj[0].value);
             if(obj[0].value == false){
                setRed(true);
             }
             else{
                 setRed(false);
             }
             console.log(obj[1].value);
             setMessages(obj[1].value);
                console.log(messages);
            });
    };

    const handleRecipient = () => {
        console.log('test', to);
        const body = {
            to: to
        };
        const settings = {
            method: 'post',
            body: JSON.stringify(body), //to json string
        };
        fetch('/api/cashPayment-verifyRecipient', settings) // makes http client calls 
        .then(res => res.json())
        .then(data => {
            var obj = Object.entries(data).map(([key, value]) => ({key, value}));
            console.log(obj[0].value);
            if(obj[0].value == false){
               setRecipientRed(true);
            }
            else{
                setRecipientRed(false);
            }
            setRecipientMessage(obj[1].value);
           });
    };
    
    return (


        <div>
            <div>
                <h1 className="header">Transfer with Cash</h1>
            </div>

            <div className="paymentPage1">
                <div className="userbox1">
                    <div className="user1">
                        <div className="textedit1">Username</div>
                        <input className="passBox1" type="text"
                            value={from} onChange={(e) => setFrom(e.target.value)} />

                        <div className="textedit1">Password</div>
                        <input className="passBox1" type="password" style={{width: "270px"}} value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                    </div>
                    <div className="verify1">
                        <button type="button" className="verifybutton1"
                            onClick={handleVerify}>Verify My Account</button>
                    </div>
                    <div className = "" style = {{paddingTop: "30px"}}>
                        <div>{red ? <div style = {{color: "red"}}>{messages}</div> 
                        : <div style = {{color: "green"}}>{messages}</div> }</div>
                    </div>
                </div>

                <div className="userbox1">
                    <div className="recipient1">
                        <div className="textedit1">Recipient</div>
                        <input type="text" className="inputBoxRec1" value={to}
                            onChange={(e) => setTo(e.target.value)} />
                    </div>
                    <div className="checkuser1">
                        <button className="verifyRecipient1" onClick={handleRecipient}>Check Recipient</button>
                    </div>
                    <div className = "" style = {{paddingTop: "30px"}}>
                        <div>{recipientRed ? <div style = {{color: "red"}}>{recipientMessage}</div> 
                        : <div style = {{color: "green"}}>{recipientMessage}</div> }</div>
                    </div>
                </div>

                <div className="userbox1">
                    <h1 className="paymentSelect1">Cash Amount</h1>
                    <div className="paymentType1">
                        <input className="inputBoxPay1" type="number" min="0.00"
                            value={amount} placeholder="Amount"
                            onChange={(e) => setAmount(e.target.value)} />
                        <div className="notes1">Notes
                            <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}>
                            </textarea>
                        </div>
                    </div>

                </div>
                <div >
                    <button className="submitButton1" type="button" 
                        onClick={handleCashPayment}>Send</button>
                </div>
            </div>

            <div className="space1">

            </div>
        </div>
    );
};

export default CashPayment;