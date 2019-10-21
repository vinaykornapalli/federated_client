import React from 'react';
import logo from './logo.svg';
import './App.css';
import Device from './Device';
import Frame from './Frame';
import {Row , Col , Container} from 'react-bootstrap';
function App() {

  return (
    <div>
       <div className="App-header">
          <h2 className="fed_heading">Federated Learning Simulation</h2>
      </div>
    <Frame/> 
    </div>
   
  );
}

export default App;
