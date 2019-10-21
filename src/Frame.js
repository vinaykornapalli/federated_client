import React , {useState , useEffect } from 'react';
import './common.css'
import Device from './Device';
import {Row , Col , Container , Button , Form} from 'react-bootstrap';
import Model from './Model';
import axios from 'axios'
function Frame(props) {
    var deviceList = [
        { id :1,
          wifi : false,
          charge : false,
          colorClass : 0,
          status : "idle"
        } , 
        { id :2,
           wifi : false,
          charge : false,
          colorClass : 0,
          status : "idle"
        } ,
        {
          id :3,
           wifi : false,
          charge : false,
          colorClass : 0,
          status : "idle"
        } ,
        { id :4,
          wifi : false,
          charge : false,
          colorClass : 0,
         status : "idle"
        } , 
        { id :5,
          wifi : false,
          charge : false,
          colorClass : 0,
          status : "idle"
        } ,
        { id :6,
          wifi : false,
          charge : false,
          colorClass : 0,
         status : "idle"
        } 
    ];
    var [deviceListState , setDeviceListState] = useState(deviceList);
    var [train , setTrain] = useState(false);
    //prediction
    var [text , setText] = useState('');
    var [senti , setSenti] = useState(-1); 
     
    function getPrediction(){
         axios.get('http://127.0.0.1:5000/query' , {
           params : {
             text : text
           }
         }).then(res=>{
           console.log(res);
         })
    }


    function startTraining(e){
       setTrain(true);
       console.log("Client models Training Started");
       setTimeout(function(){
         setTrain(false);
         console.log("Client models Training Ended");
       } , 5000);
       setTimeout(function(){
        console.log("Main Model updated");
       },8000)
      
    }
    // useEffect
    return (
       <div>
         <Container className="mt-3">
           <Row>
             <Col className="device-container card" style={{height:"250px"}}>
                <Model/>
             </Col>
             <Col  className="device-container card ml-3">
             <Row>
               <Col lg={8}>
                <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Query for Sentiment Analysis</Form.Label>
                    <Form.Control type="text" value={text} placeholder="Some Text" onChange={e=>{setText(e.target.value)}}/>
                  </Form.Group>
                </Form>
               </Col>
               <Col lg={4}>
               <Row>
               <Button variant="success" onClick={startTraining}>Train</Button>
               </Row>
               <Row>
               <Button variant="success" onClick={getPrediction}>Predict</Button>
               </Row>

               </Col>
             </Row>
             
             </Col>
           </Row>
         </Container>

          <Container className="device-container card mt-3" >
           <Row>
                {deviceListState.map((device , i)=>{
                    return <Col key={i}><Device key={i} device={device} train={train}>
            </Device>
            </Col>
           })}   
           </Row>
         </Container>

       </div>
      
    );
}

export default Frame;