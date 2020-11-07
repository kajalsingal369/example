import React from 'react'
import './App.css';
import { BrowserRouter , Switch,Route, Link } from "react-router-dom";
import Home  from './components/Home'
import Fundstransfer from './components/Fundstransfer'
import FixedDeposits from './components/FixedDeposits';
import  Accounts from './components/Accounts';
import Profile from './components/Profile'
import CreditBalance from './components/CreditBalance';
import Savings from './components/Savings';
import Navigation from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation/>
    <Switch>
     <Route exact path='/' component={Home} />
                <Route path='/Fundstransfer' component={Fundstransfer} />
                <Route path='/FixedDeposits' component={FixedDeposits} />

<Route path='/Accounts/Savings' component={Savings} />
<Route path='/Accounts/CreditBalance' component={CreditBalance} />
<Route path='/Profile' component={Profile} />
    </Switch>
   
   </div>
   </BrowserRouter>
    
  );
}

export default App;
