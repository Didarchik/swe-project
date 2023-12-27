import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Accordion, ProgressBar, Navbar, Container, Nav} from "react-bootstrap"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Info from './components/Info/Info';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Info />
    </div>
  );
}

export default App;
