import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom"

const CashPayment = () => {
    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');    
    const [type, setType] = React.useState('cash');
    const [amount, setAmount] = React.useState('');

    const handleCashPayment = () => {
        console.log('test', from, to, type, amount);
        const body = {
            from: from,
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


    return (
        <div>
            <h1>This is cashPayment</h1>
            <div className = "cashContainer">
                          
                    <input value={from} placeholder="From"
                     onChange={(e) => setFrom(e.target.value)}/>
                    <input value={to} placeholder="To" 
                    onChange={(e) => setTo(e.target.value)}/>

                    <form>
                    <select value ={type} onChange={(e) => setType(e.target.value)}>
                        <option value = "cash" selected>Cash</option>
                    </select>
                    </form>

                    <input value={amount} placeholder="Amount"
                    onChange={(e) => setAmount(e.target.value)}/>

                <div>
                <button onClick={handleCashPayment}>Submit</button>
                </div>

            </div>

        </div>

    );
};

export default CashPayment;