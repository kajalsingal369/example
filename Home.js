import React ,{Component} from 'react';
import Trackerchart from './Trackerchart.js';

 class Home extends Component{
    render(){
        return(
            <div className="home">
                <h1>this is home page</h1>
              <Trackerchart/>
            </div>
        )
    }
}
export default Home;