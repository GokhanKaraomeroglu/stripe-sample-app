import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import PaymentForm from "../pages/PaymentForm";



function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Homepage /> } />
        <Route path="/paymentForm" element={<PaymentForm /> } />
      </Switch>
      </BrowserRouter>
  
  );
}
export default AppRouter