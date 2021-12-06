import React from 'react';
import CashTree from '../assets/CashTree.png';

function Home() {

    return (
        <div className="restofPage">
            <img src = {CashTree} />
            <h1 class="motto">
                If you're like us, you are certain money grows on trees.
            </h1>
            <h2 class="motto">
                Don't waste your time with other money transfering
                services like PayPal or Venmo. Transfer money with us
                and we will make sure you never see it again.
            </h2>
            <form action="http://localhost:3000/cashPayment">
            <button type="submit">Click me</button>
            </form>
        </div>
    );

}
export default Home;