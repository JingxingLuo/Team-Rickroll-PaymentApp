import React, { useEffect, useState } from 'react';

const Transactions = ()=> {
    const [items, setItems] = React.useState('');
    var storage = window.localStorage;
    var storage2 = window.sessionStorage;

    const handleSubmit = () => {
        const settings = {
            method: 'post',
        };
        fetch('/api/Transactions', settings)
            .then(res => res.json())
            .then(json=> console.log(json))
    };
    console.log(storage);
    

    return (
        <div className="restofPage">
            <h1 class="motto">
                <div><h2>Transaction History</h2></div>
                <form>
                <button onClick={handleSubmit}>Transaction</button>
            </form>
            </h1>
        </div>
    );
}

export default Transactions;
