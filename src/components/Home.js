import React ,{Component} from 'react';
import Trackerchart from './Trackerchart.js';
import Trackerchart2 from './Trackerchart2.js';

 class Home extends Component{
    render(){
        return(
            <div className="home">
                <h1>this is home page</h1>
              <Trackerchart/>
              <Trackerchart2/>
            </div>
        )
    }
}
export default Home;