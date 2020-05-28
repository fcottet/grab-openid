import React from 'react';
//import logo from './logo.svg';
import './App.css';

var jwt = require('jsonwebtoken');

// eslint-disable-next-line
function copyPuid() {
  /* Get the text field */
  var copyText = document.getElementById("puid");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  document.execCommand("copy");
}

function App() {
  var token = "";
  var decryptedToken ="";
  var subject = "";

  var hash = window.location.hash.substr(1);
  console.log("hash="+hash);
  var tokenName = "id_token=";
  var index = hash.indexOf(tokenName);
  console.log("index="+index);
  if(index !== -1){ 
      token = hash.substr(index+tokenName.length);
      console.log("token="+token);
      decryptedToken = jwt.decode(token);
      subject = decryptedToken["sub"];
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is the PartnerUserID:
        </p>
        <pre id="puid">{subject}</pre>

        <p>
          This is the decoded token:
        </p>
        <pre>{JSON.stringify(decryptedToken, null, 2) }</pre>

        <br/>

        <p className="long">
          This is the fragment:<br/><br/>
          {hash}
        </p>
        <p className="long">
          This is the full URL:<br/><br/>
          {window.location.toString()}
        </p>
      </header>
    </div>
  );
}

export default App;