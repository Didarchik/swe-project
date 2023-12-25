import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Accordion, ProgressBar, Navbar, Container, Nav} from "react-bootstrap"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
