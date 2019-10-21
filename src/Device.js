import React , {useState , useEffect } from 'react';
import './device.css'
import './common.css'
import Switch from "react-switch";
import {Row , Col , Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi , faBatteryHalf } from '@fortawesome/free-solid-svg-icons'

function Device(props) {

     const [device , setDevice] = useState(props.device);
    function onWifiChange(checked) {
        setDevice({...device,wifi:checked});
     }
     function onChargeChange(checked) {
      setDevice({...device,charge:checked});
     }

     useEffect(()=>{
       if(device.charge && device.wifi){
        setDevice(d=>{ return {...d,colorClass:1}});
        setDevice(d=>{ return {...d,status:"ready"}});
       }else{
        setDevice(d=>{ return {...d,colorClass:0}});
        setDevice(d=>{ return {...d,status:"idle"}});
       }
     },[device.charge , device.wifi])


     useEffect(()=>{
      
         if(props.train){
           if(device.charge && device.wifi){
            setDevice(d=>{ return {...d,colorClass:2}});
            setDevice(d=>{ return {...d,status:"running"}});
           }else{
            setDevice(d=>{ return {...d,colorClass:0}});
            setDevice(d=>{ return {...d,status:"idle"}});
           }
         }else{
           if(device.charge && device.wifi){
            setDevice(d=>{ return {...d,colorClass:1}});
            setDevice(d=>{ return {...d,status:"ready"}});
           }else{
            setDevice(d=>{ return {...d,colorClass:0}});
            setDevice(d=>{ return {...d,status:"idle"}});
           }
          
         }
        
       
     } , [props.train ,device.charge, device.wifi]);

     //loader
     const loader = <div class="loader"></div>;

     
    return (
        <div className={classList({'smartphone':true, 
                                    'black-border' : device.colorClass === 0,
                                    'yellow-border' : device.colorClass === 1,
                                    'green-border' : device.colorClass === 2,
                                    'red-border' : device.colorClass === -1,
                                    })}>
        <div className="content">
         <Container className="p-1">
           <Row>
           <Col ><FontAwesomeIcon icon={faWifi} /></Col>
           <Col><Switch checked={device.wifi} onChange={onWifiChange} height={20}  width={40}/></Col>
         </Row>
         <Row>
           <Col ><FontAwesomeIcon icon={faBatteryHalf} /></Col>
           <Col><Switch checked={device.charge} onChange={onChargeChange} height={20}  width={40}/></Col>
         </Row>
         <Row>
           <Col><span className="small">Status</span></Col>
           <Col> <span className="small">{device.status}</span></Col>
         </Row>
         <Row>
           <Col>
            { (props.train && device.wifi && device.charge) ? loader : '' }
           </Col>
         </Row>
         
         </Container>
         
        </div>
      </div>
    );
}
function classList(classes) {
  return Object
    .entries(classes)
    .filter(entry => entry[1])
    .map(entry => entry[0])
    .join(' ');
}
export default Device;