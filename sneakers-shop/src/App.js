import React, { useState } from "react";
import './App.css';
import Content from "./Content";
import Header from "./Header";
import Overlay from "./Overlay";

function App() {
  const [object, setObj] = useState([]);
  function addItem(newItem){
    setObj(prev => [...prev, newItem]);
  }
  
  return (
    <div className="wrapper clear">
      <Header object={object} setObj={setObj} />
      <Content object={object} setObj={setObj} addItem={addItem}/>
      </div>
  );
}

export default App;
