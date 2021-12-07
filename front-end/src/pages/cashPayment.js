import React from "react";
// import { useState } from "react";
// import ReactDOM from "react-dom"

const CashPayment = () => {
    const [from, setFrom] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [to, setTo] = React.useState('');
    const [type, setType] = React.useState('cash');
    const [amount, setAmount] = React.useState('');

    const handleCashPayment = () => {
        console.log('test', from, password, to, type, amount);
        const body = {
            from: from,
            password: password,
            to: to,
            type: type,
            amount: amount

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

            <div className="paymentPage">
                <div className="userbox">
                    <div className="user">
                        <div className="textedit">Username</div>
                        <input className="passBox" type="text"
                            value={from} onChange={(e) => setFrom(e.target.value)} />

                        <div className="textedit">Password</div>
                        <input className="passBox2" type="password" style={{width: "200px"}} value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                    </div>
                    <div className="verify">
                        <button type="button" className="verifybutton"
                            onClick={handleVerify}>Verify My Account</button>
                    </div>
                </div>

                <div className="userbox">
                    <div className="recipient">
                        <div className="textedit">Recipient</div>
                        <input type="text" className="inputBoxRec" value={to}
                            onChange={(e) => setTo(e.target.value)} />
                    </div>
                    <div className="checkuser">
                        <button className="verifyRecipient" onClick={handleRecipient}>Check Recipient</button>
                    </div>
                </div>

                <div className="userbox">
                    <h1 className="paymentSelect">Cash Amount</h1>
                    <div className="paymentType">
                        <input className="inputBoxPay" type="number" min="0.00"
                            value={amount} placeholder="Amount"
                            onChange={(e) => setAmount(e.target.value)} />
                        <div className="notes">Notes
                            <textarea>
                            </textarea>
                        </div>
                    </div>

                </div>
                <div >
                    <button type="button" className="submitButton"
                        onClick={handleCashPayment}>Send</button>
                </div>
            </div>

            <div className="space">

            </div>
        </div>
    );
};

export default CashPayment;