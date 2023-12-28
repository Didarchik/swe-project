import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Accordion, ProgressBar, Navbar, Container, Nav} from "react-bootstrap"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Info from './components/Info/Info';
import {useRef} from "react"

function App() {
  const inputRef = useRef([])
  const focus = (e) => {
    if (e.target.textContent == 'Біз жайлы'){
      inputRef.current[1].focus();
      console.log(inputRef.current[1]);
    }
    else if (e.target.textContent == 'Негізгі'){
      inputRef.current[0].focus();
      console.log(inputRef.current[0]);
    }
    else{
      inputRef.current[2].focus();
      console.log(inputRef.current[2]);
    }
  }
  return (
    <div className="App">
      <Header inputRef={inputRef} focus={focus}/>
      <Home inputRef={inputRef}/>
      <About inputRef={inputRef} focus={focus}/>
      <Info inputRef={inputRef}/>
    </div>
  );
}

export default App;
