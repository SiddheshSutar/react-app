import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

const headerProp = document.getElementById('header');
console.log("headerProp in App.js :: " , headerProp);
function App() {
  return (
    <div className="App">
      {ReactDOM.createPortal(<div id='cntr'>HIIIIIIIII</div> , headerProp)}
    </div>
  );
}

export default App;
