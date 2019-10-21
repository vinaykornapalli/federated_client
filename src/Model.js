import React , {useState , useEffect } from 'react';
import './common.css'
import Terminal from 'terminal-in-react';
function Model(props) {
    
    return (
      <div
        style={{
          
          justifyContent: "center",
          alignItems: "center",
          height: "100px"
        }}
      >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='Federated Learning Model'
          watchConsoleLogging={true}
        />
      </div>
    );
}

export default Model;