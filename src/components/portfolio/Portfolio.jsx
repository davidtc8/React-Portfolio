import './Portfolio.scss'
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from 'react';
import { featuredPortfolio,
  softwareDevPortfolio,
  automationPortfolio,
  aiDataAnalysisPortfolio } from '../../data'

export default function Portfolio() {
  // Create the switch for the selection of each title
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([])
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
      title: 'AI/Data Analysis',
    },
  ];
  // Switch case for bringing the data from data.js
  useEffect(() => {
    switch(selected){
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'software':
        setData(softwareDevPortfolio);
        break;
      case 'automation':
        setData(automationPortfolio);
        break;
      case 'ai':
        setData(aiDataAnalysisPortfolio);
        break;
      default:
        setData(featuredPortfolio)
    }
  }, [selected])
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <h3>Hover over the images</h3>
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
        {data.map((d) => (
          <div className="item">
            <a href={d.link} target="_blank" rel="noopener noreferrer">
              <img src={d.img} alt=""/>
            </a>
            <h3>{d.title}</h3>
            <h4>{d.description}</h4>
            <p>{d.tech}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
