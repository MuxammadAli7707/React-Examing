import React, { useEffect, useState } from 'react';
import Topic from './Topic.js/Topic';
import Obj from '../../Object/Object'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Follow from './Follow/Follow';
import './Topic.js/_Topic.scss';

let category = [
  {
    id: "Productivity",
    name: "Productivity",
    class: true
  },

  {
    id: "UI",
    name: "UI",
    class: false
  },
  {
    id: "JavaScript",
    name: "JavaScript",
    class: false
  },
  {
    id: "Headlines",
    name: "Headlines",
    class: false
  },
  {
    id: "Design",
    name: "Design",
    class: false
  },
  {
    id: "Relationships",
    name: "Relationships",
    class: false
  },
]

function Main() {
  const [newObj, setNewObj] = useState([]);

  useEffect(() => {
    setNewObj(Obj)
  },[])

  const [cate, setCate] = useState([])
  let cates = []
  useEffect(() => {
    setCate(category)
  }, [])

  let btnClick = (e) => {
    cate.map(item => {
      if(e.target.id === item.id) {
        item.class = true
        cates.push(item)
      }
      else {
        item.class = false
        cates.push(item)
      }
    })
    setCate(cates)

    setNewObj(Obj.filter(item => {
      return item.type === e.target.id
    }))
    console.log(Obj);
  }

  return (
    <>
    <div className='topic'>
      <div className='topic__main'>
        <div className='topic__inner'>
          <button className='topic__btn'>+</button>
          <p className='topic__keep'>Keep up with the latest in any topic</p>
        </div>
        <ul className="topic__cates">
          {category.map((item, key) => (
            <li key={key+97} className="category__item">
              <button onClick={btnClick} id={item.id} className='topic__cate'>{item.name}</button>
            </li>
          ))}
        </ul>

        <div className='topic__links'>
          <Link to="/follow" className='topic__link'>Following</Link>
          <Link to="/recom" className='topic__link'>Recommended</Link>
        </div>
      </div>
      
    <Routes>
      <Route path='/recom' element={<Topic
        Obj={Obj}
        newObj={newObj}
        setNewObj={setNewObj}
      />} />
      <Route path="/follow" element={<Follow />} />
    </Routes> 
    </div>
    </>
  );
}

export default Main;