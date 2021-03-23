import { useState } from 'react';
import './App.css';
import phone from './assets/phone.jpeg';
import StripeContainer from './components/StripeContainer';

function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>The Oppo Store</h1>
      {showItem ? <StripeContainer/> : <> <h3>Rs 10.00</h3> <img style={{marginLeft: '250px'}} src={phone} alt="phone" />
      <button onClick={() => setShowItem(true)}>Purchase Phone</button></>}
    </div>
  );
}

export default App;