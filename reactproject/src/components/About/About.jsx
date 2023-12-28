import React, { useReducer, useRef } from 'react'
import foodPhoto from "../../assets/img/aboutFood.png"
import videoIcon from "../../assets/videoButton.png"
import {Card, Button} from "react-bootstrap"
import style from "./About.module.scss"

function About({inputRef, focus}) {
  return (
    <div className={style.about_page} tabIndex="0" ref={el=> inputRef.current[1] = el}>
        <img src={foodPhoto} />
        <Card className={style.card}>

          <Card.Title className={style.about}>Біз жайлы</Card.Title>
          <Card.Body>
            <Card.Title className={style.title}>Foodie сіздің күнделікті диетаңызды <br/>жеңіл етеді</Card.Title>

            <Card.Text className={style.cardText}>Казақстан - әлемдегі ең үлкен елдердің бірі және оның бай мәдениеті мен тарихы бар. Ол Орталық Азияда орналасқан және Ресей, Қытай, Қырғызстан, Өзбекстан және Түрікменстанмен шекаралас. </Card.Text>
            <Card.Text className={style.cardText}>Казақстан байырғы түркі халықтарының мәдениетін сақтаған және осы күнге дейін көшпелі дәстүрлердің көптеген элементтерін көрсетеді.</Card.Text>
          </Card.Body>
          <Card.Body className='d-flex justify-content-around'>
            <Button variant='alert' className={style.btn2}>Learn More</Button>
            <div className='d-flex align-items-center' style={{marginLeft: '20px'}}>
              <img src={videoIcon} style={{width: 40, height: 40}} className={style.videoIcon}/>
              <label>Watch Video</label>
            </div>
          </Card.Body>
        </Card>
    </div>
  )
}

export default About