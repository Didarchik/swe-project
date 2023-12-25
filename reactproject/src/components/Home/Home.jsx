import React from 'react'
import style from './Home.module.scss'
import {Card, Button} from "react-bootstrap"
import foodPicture from "../../assets/img/food.png"
function Home() {
  return (
    <div className='home_page'>
          <Card className='card'>
            <Card.Title className='cardTitle'>Your Favourite Food Delivered Hot & Fresh</Card.Title>
            <Card.Body>
              <Card.Text className='cardText' style={{color: '#828282'}}>Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.</Card.Text>
              <Button variant='alert' className='btn2'>Order Now</Button>
            </Card.Body>
          </Card>
          <img src={foodPicture} />
    </div>
  )
}

export default Home