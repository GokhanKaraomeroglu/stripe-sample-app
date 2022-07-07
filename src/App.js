import './App.css';
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <GiPayMoney fontSize="120px"/>
          <hr />
          Welcome To Stripe App
          <hr />
          Safe To Pay
          <hr />
          <GiReceiveMoney fontSize="120px"/>
        </h1>
      </header>
    </div>
  );
}

export default App;
