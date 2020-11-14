import React ,{Component} from 'react';
import {useState} from 'react';
import {Form, Button, Modal} from 'react-bootstrap';

const Transfer=()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return( 
        <div><Button variant="outline-success" onClick={handleShow}>Transfer</Button>
        <Modal show={show}
            onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Transfer Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Button variant="primary">Confirm</Button> &nbsp;&nbsp;&nbsp;
              <Button variant="secondary" onClick={handleClose}> Close</Button>
             </Modal.Body>
          </Modal></div>
        
      );
   
}

 class FundsTransfer extends Component{
    
    render(){
       return(
         <div className="transfer">
         <Form> 
        <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Account ID</Form.Label>
    <Form.Control type="number" placeholder="Enter Account ID to transfer" />
      </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Beneficiary Name</Form.Label>
    <Form.Control type="Text" placeholder="Enter Beneficiary Name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput3">
    <Form.Label>Transfer Amount</Form.Label>
    <Form.Control type="number" placeholder="Enter Amount to transfer" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label >Account Type</Form.Label>
    <Form.Control as="select">
      <option>Savings</option>
      <option>Credit</option>
      </Form.Control>
    </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea">
    <Form.Label>ReMark</Form.Label>
    <Form.Control as="textarea" rows={2} placeholder="Optional" />
  </Form.Group>
  <Form.Group><Transfer/></Form.Group>
</Form> 


            </div>
        )
    }
}


export default FundsTransfer;