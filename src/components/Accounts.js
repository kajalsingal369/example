import React ,{Component} from 'react';
import Savings  from './Savings';
import CreditBalance from './CreditBalance';

class Accounts extends Component{
    render(){
        return(
            <div className="account">
                <h1>this is account page</h1>
              
                  <Savings/>
                  <CreditBalance/>
            
            </div>
        )
    }
}

export default Accounts;