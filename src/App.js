import React from 'react';
//import logo from './logo.svg';
import './App.css';

var jwt = require('jsonwebtoken');


function App() {
  var token = "";

  var hash = window.location.hash.substr(1);
  console.log("hash="+hash);
  var tokenName = "id_token=";
  var index = hash.indexOf(tokenName);
  console.log("index="+index);
  if(index !== -1){ 
      token = hash.substr(index+tokenName.length);
      console.log("token="+token);

      //var decryptedToken = token;
      var decryptedToken = jwt.decode(token)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is the fragment:<br/>
          <pre>{hash}</pre>
        </p>
        <p>
          This is the token:<br/>
          <pre>{JSON.stringify(decryptedToken, null, 2) }</pre>
        </p>
      </header>
    </div>
  );
}

export default App;