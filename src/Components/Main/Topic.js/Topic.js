import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './_Topic.scss';

function Topic(props) {
  return (
        <ul className='topic__list'>
          {
            props.Obj.map((item, key) => {
              <li key={key+65} className='topic__item'>
              <div className='topic__inners'>
                <div className='topic__users'>
                  <div className='topic__imgbox'>
                  <img className='topic__img' src={item.avatar} alt="img" />
                  <p className='topic__name'>{item.name}</p>
                  <span className='topic__date'>{item.day}</span>
                  </div>
  
                  <div className='topic__about'>
                  <h3 className='topic__title'>{item.title}</h3>
                  <p className='topic__text'>{item.desc}</p>
                  <div className='topic__box'>
                    <div className='topic__info'>
                      <button className='topic__app'>{item.type}</button>
                      <span className='topic__min'>{item.time}</span>
                      <span className='topic__min'>{item.select}</span>
                    </div>
                    <div className='topic__sub'>
                      <button className='topic__add'><i class='bx bx-bookmark-alt-plus'></i></button>
                      <button className='topic__add'><i class='bx bx-dots-horizontal-rounded' ></i></button>
                    </div>
                  </div>
                </div>
                </div>
                <div>
                  <img className='topic__image' src={item.img} alt="img" />
                </div>
              </div>
            </li>
            })
          }
          {/* <li className='topic__item'>
            <div className='topic__inners'>
              <div className='topic__users'>
                <div className='topic__imgbox'>
                <img className='topic__img' src="https://miro.medium.com/fit/c/30/30/1*cHpWPIFXdXHpo25bR-R6ow.png" alt="img" />
                <p className='topic__name'>Piyush</p>
                <span className='topic__date'>Apr 30</span>
                </div>

                <div className='topic__about'>
                <h3 className='topic__title'>18 Best Self-improvement apps for a life-changing 2022</h3>
                <p className='topic__text'>Have you ever tried improving yourself, but ended up being lazy and tired again? If yes, then you are not alone. We all feel unproductive, tired, and</p>
                <div className='topic__box'>
                  <div className='topic__info'>
                    <button className='topic__app'>UI</button>
                    <span className='topic__min'>5 min read</span>
                    <span className='topic__min'>Selected for you</span>
                  </div>
                  <div className='topic__sub'>
                    <button className='topic__add'><i class='bx bx-bookmark-alt-plus'></i></button>
                    <button className='topic__add'><i class='bx bx-dots-horizontal-rounded' ></i></button>
                  </div>
                </div>
              </div>
              </div>
              <div>
                <img className='topic__image' src="https://miro.medium.com/fit/c/140/140/0*w4Q3coLmtv6RLhBU" alt="" />
              </div>
            </div>
          </li> */}
        </ul>
  );
}

export default Topic;