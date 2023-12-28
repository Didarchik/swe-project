import React from 'react'
import style from "./Info.module.scss"
import {Card, Button} from "react-bootstrap"
import pickMeal from "../../assets/pickMeal.png"
import truckIcon from "../../assets/truck.png"
import fingerIcon from "../../assets/finger.png"
function Info({inputRef}) {
  return (
    <div tabIndex="0" ref={el => inputRef.current[2] = el} className={`d-flex align-items-center flex-column ${style.info_block}`}>
        <Card className={style.upperBlock}>
            <Card.Title className={style.info}>Деректер</Card.Title>
            <Card.Title className={style.title}>How it works</Card.Title>
            <Card.Text className={style.cardText}>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</Card.Text>
        </Card>
        <div className={`d-flex flex-wrap align-items-center justify-content-center ${style.lowerBlock}`}>
            <Card className={style.items}>
                <img src={pickMeal}/>
                <Card.Title className={style.itemTitle}>Pick Meals</Card.Title>
                <Card.Text className={style.itemText}>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</Card.Text>
            </Card>
            <Card className={style.items}>
                <img src={fingerIcon} />
                <Card.Title className={style.itemTitle}>Pick Meals</Card.Title>
                <Card.Text className={style.itemText}>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</Card.Text>
            </Card>
            <Card className={style.items}>
                <img src={truckIcon} />
                <Card.Title className={style.itemTitle}>Pick Meals</Card.Title>
                <Card.Text className={style.itemText}>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</Card.Text>
            </Card>
        </div>
    </div>
  )
}

export default Info