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

    const handleCashPayment = () => {
        console.log('test', from, password, to, type, amount);
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
            .catch(console.log);
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
            .catch(console.log);
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
            .catch(console.log);
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