import React, { useState } from 'react'
import data from './data';

function Content({object, setObj, addItem}) {
  console.log(object);
  return (
    <div className='content p-30'> 
        <div className='d-flex align-center justify-between mb-30'>
          <h1>All sneakers</h1>
          <div className='search d-flex'>
            <img src='/img/search.svg' />
            <input placeholder='Поиск...' className='pl-5'/>
          </div>
        </div>
        <div className='d-flex flex-wrap'>
          {data.map((item) => (
            <div className='card mr-40'>
              <img width={133} height={112} src={item.img} alt='1' />
              <p>{item.text}</p>
              <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                  <span className="text-uppercase">Цена:</span>
                  <b>{item.price} руб.</b>
                </div>
                <button className='button' onClick={() => addItem(item)}>+</button>
              </div>
            </div>
          ))}


          
          </div>
        </div>
  )
}

export default Content