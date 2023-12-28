import React from 'react'
import style from './Home.module.scss'
import {Card, Button} from "react-bootstrap"
import foodPicture from "../../assets/img/food.webp"
import ReactTyped from "react-typed"
function Home({inputRef}) {
  return (
    <div className='home_page' ref={el => inputRef.current[0] = el}>
          <Card className='card'>
            <Card.Title className='cardTitle'>Сіздің сүйікті тағамдарыңыз бізбен, Foodie-мен</Card.Title>
            <Card.Body>
              <Card.Text className='cardText' style={{color: '#828282'}}>
              Foodie Pizza бұл {" "} 
              <ReactTyped strings={["дәмді пицца", "тегін сусындар", "атмосфералық өлеңдер"]} typeSpeed={100} loop/>
              </Card.Text>
              <Button variant='alert' className='btn2 d-flex' >Тапсырыс беру</Button>
            </Card.Body>
          </Card>
            <img src={foodPicture} />
            <div className='backBlock'></div>
    </div>
  )
}

export default Home