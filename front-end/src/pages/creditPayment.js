
import react from "react";
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom"

const CreditPayment = () => {
    const [from, setFrom] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [to, setTo] = React.useState('');
    const [type, setType] = React.useState('credit');
    const [amount, setAmount] = React.useState('');
    const [creditNumber, setCreditNumber] = React.useState('');

    const handleCreditPayment = () => {
        console.log('test', from, password, to, type, amount, creditNumber);
        const body = {
            from: from,
            password: password,
            to: to,
            type: type,
            creditNumber: creditNumber,
            amount: amount
            

        };
        const settings = {
            method: 'post',
            body: JSON.stringify(body), //to json string
        };
        fetch('/api/creditPayment', settings) // makes http client calls 
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
        fetch('/api/creditPayment-verifyAccount', settings) // makes http client calls 
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
        fetch('/api/creditPayment-verifyRecipient', settings) // makes http client calls 
            .catch(console.log);
    };


    return (
        <div>
            <div>
                <h1 className="header">Transfer using Credit</h1>
            </div>

            <div className="paymentPage">
                <div className="userbox">
                    <div className="user">
                        <div className="textedit">Username</div>
                        <input className="inputBox" type="text" id="question"
                            value={from} onChange={(e) => setFrom(e.target.value)} />
                        <div className="textedit">Password</div>
                        <input classNameName="passBox" type="password" value={password}
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
                    {/* <h1 className="paymentSelect">Credit Amount</h1> */}
                    <div className="paymentType">
                        {/* <label for="ccn">Credit Card Number:</label>
                        <input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,16}"
                         autocomplete="cc-number" maxlength="16" /> */}
                        <form class="credit-card">
                            <div class="form-header">
                                <h4 class="title">Credit card detail</h4>
                            </div>
                            <div class="form-body">
                                <input type="text" class="creditCardText" placeholder="Card Number"
                                    inputmode="numeric" pattern="[0-9\s]{16,}" maxlength="19" placeholder="xxxx xxxx xxxx xxxx"
                                    value={creditNumber} 
                                    onChange={(e) => setCreditNumber(e.target.value)} />
                                <span class="validity"></span>
                                <div class="date-field">
                                    <div class="month">
                                        <select name="Month">
                                            <option value="january">January</option>
                                            <option value="february">February</option>
                                            <option value="march">March</option>
                                            <option value="april">April</option>
                                            <option value="may">May</option>
                                            <option value="june">June</option>
                                            <option value="july">July</option>
                                            <option value="august">August</option>
                                            <option value="september">September</option>
                                            <option value="october">October</option>
                                            <option value="november">November</option>
                                            <option value="december">December</option>
                                        </select>
                                    </div>
                                    <div class="year">
                                        <select name="Year">
                                            <option value="2016">2021</option>
                                            <option value="2017">2022</option>
                                            <option value="2018">2023</option>
                                            <option value="2019">2024</option>
                                            <option value="2020">2025</option>
                                            <option value="2021">2026</option>
                                            <option value="2022">2027</option>
                                            <option value="2023">2028</option>
                                            <option value="2024">2029</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="card-verification">
                                    <div class="cvv-input">
                                        <input type="text" placeholder="CVV" inputmode="numeric" pattern="[0-9\s]{3,4}" maxlength="4" />
                                        <span class="validity"></span>
                                    </div>
                                    <div class="cvv-details">
                                        <p>3 digits usually found <br /> on the signature strip</p>
                                    </div>
                                </div>
                                <button type="submit" class="proceed-btn"><a href="#">Proceed</a></button>
                                <button type="submit" class="paypal-btn"><a href="#">Pay With</a></button>
                            </div>
                        </form>
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
                        onClick={handleCreditPayment}>Send</button>
                </div>
            </div>

            <div className="space">

            </div>
        </div>
    );
};

export default CreditPayment;