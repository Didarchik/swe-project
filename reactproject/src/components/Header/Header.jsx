import React, {useRef, useState} from 'react'
import style from './Header.module.scss'
import MyPhoto from "../../assets/bag.png"
import logo from "../../assets/FOODIE.svg"
import {Button, Card, Accordion, ProgressBar, Navbar, Container, Nav} from "react-bootstrap"


function Header({inputRef, focus}) {
  const [toggle, setToggle] = useState(false);
  const handle = () => {
    setToggle(prev => !prev);
    console.log(toggle);
  }
  return (
    <div className='header'>
      <Navbar expand='lg' data-bs-theme="light" expanded={toggle}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3"><img src={logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handle}/>
          <Navbar.Collapse>
          <Nav className='ms-auto'>
            <Nav.Link href="#deets" className="fs-5 navLink" onClick={focus}>Негізгі</Nav.Link>
            <Nav.Link href="#memes" className="fs-5 navLink" onClick={focus}>Біз жайлы</Nav.Link>
            <Nav.Link href='#contact' className="fs-5 navLink" onClick={focus}>Деректер</Nav.Link>
            <Nav.Link href="#test" className='fs-5 navLink' onClick={focus}>Тестиномдар</Nav.Link>
            <Nav.Link href='#hz' className="fs-5 navLink"><img src={MyPhoto} style={{width: 20, height: 20}}/></Nav.Link>
            <Button variant='primary' className='btn1 fs-5'>Заказ беру</Button>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header