import React ,{Component} from 'react';
import { Doughnut } from 'react-chartjs-2'; 
import {Form, Row,Col} from 'react-bootstrap';
import '../css/trackerchart.css';

let bg;
let Expense_spent=[50000];
let ExpenseLimit=[50000];

const chartColors ={
    red:"#ff0000",
    blue:"#00bfff",
    green:"#80ff00"
};

   
    


class Trackerchart extends Component{
 constructor(props){
     super(props)
     this.state={
        data1:{
            labels:["Expense spent","Monthly Expense Limit"],
               datasets:[{
                       data: [Expense_spent.map(function(value){
                         if(value<=10000) {
                          bg=chartColors.green;
                          return value;
                         }
                         else if(value>10000 && value<50000)
                         {
                             bg=chartColors.blue;
                             return value;
                         }
                         else{ 
                          bg=chartColors.red;
                          return value;
                      }
                      }), ExpenseLimit],
                     backgroundColor:[bg,"#9932CC"],
                     borderWidth:3,
                     borderColor:"gray"
                   }]
  }
    }}
    render(){
        return(
            <div id="Trackerchart"  style={{height:600,width:700}}>
 <Doughnut data={this.state.data1}   options={{responsive:true, maintainAspectRatio: true}}/>
 <div><Form>
 <Form.Group as={Row}>
     &emsp;<h5><b>Expense Limit Indicators:</b></h5>    
     &ensp; <Col sm="0"><div Class="box green"></div></Col>&nbsp;<h5>Normal</h5>
     &ensp;<Col sm="0"><div Class="box blue"></div></Col>&nbsp;<h5>Moderate</h5>
     &ensp;<Col sm="0"><div Class="box red"></div></Col>&nbsp;<h5>Exceed Limit</h5>
     </Form.Group>
     </Form></div>              
                
                </div>

        )
    }
}

export default Trackerchart;