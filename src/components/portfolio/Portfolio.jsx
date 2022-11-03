import './Portfolio.scss'
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from 'react';

export default function Portfolio() {
  // Create the switch for the selection of each title
  const [selected, setSelected] = useState('featured')
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'software',
      title: 'Software Development'
    },
    {
      id: 'automation',
      title: 'Automation',
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
    },
  ];
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList 
          title={item.title} 
          active = {selected === item.id} 
          setSelected={setSelected}
          id = {item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/game.jpg" alt="" />
          <h3>RPG Game in Python</h3>
        </div>
        <div className="item">
          <img src="assets/game.jpg" alt="" />
          <h3>RPG Game in Python</h3>
        </div>
        <div className="item">
          <img src="assets/game.jpg" alt="" />
          <h3>RPG Game in Python</h3>
        </div>
        <div className="item">
          <img src="assets/game.jpg" alt="" />
          <h3>RPG Game in Python</h3>
        </div>
        <div className="item">
          <img src="assets/game.jpg" alt="" />
          <h3>RPG Game in Python</h3>
        </div>
      </div>
    </div>
  )
}
