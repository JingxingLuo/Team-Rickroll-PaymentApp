import React, { useEffect, useState } from 'react';

const Transactions = ()=> {
    const [items, setItems] = React.useState('');


    const handleSubmit = () => {
        const settings = {
            method: 'post',
            body: 'something'
        };
        fetch('/api/Transactions', settings)
            .catch(console.log)
            .then(res => res.json())
            .then(json=> console.log(json))
    };


    return (
        <div className="restofPage">
            <h1 class="motto">
                <div><h2>Transaction History</h2></div>

                <button  type="button" onClick={handleSubmit}>Transaction</button>

            </h1>
        </div>
    );
}

export default Transactions;
