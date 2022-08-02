import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import "../App.css";

import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

function Homepage () {

  const history = useHistory();
  
  const navigateToPayForm = () => {
    // 👇️ navigate to /contacts
    history.push('/paymentForm');
  };

  return (
    <div className="App">
      <div className="App-header">
      <h1>
          <GiPayMoney fontSize="120px" onClick={navigateToPayForm}/>
           <hr />
           Welcome To Stripe App
           <hr />
          Safe To Pay
           <hr />
           <GiReceiveMoney fontSize="120px"/>
         </h1>
        <button 
        className="App-button"
        onClick={navigateToPayForm}
        >
          Let's Pay
        </button>
      </div>
    </div>
  )
}

export default Homepage;
