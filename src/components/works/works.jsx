import './works.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLaptopCode, faServer, faDatabase, faTable, faCloud, faChartSimple, faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { faReact, faHtml5, faCss3, faBootstrap, faJs, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons'

export default function works() {
  return (
    <section className='works' id='works'>
      <header>Skills</header>
      <div className="skills">

        {/* Front End Development */}
        <div className="set">
          <FontAwesomeIcon className='iconFontAwesome' icon={faLaptopCode} />
          <br />
          <header>Front-End Development</header>
          <div className="list">
            <label htmlFor="">HTML </label>
            <FontAwesomeIcon icon={faHtml5} />
          </div>
          <div className="list">
            <label htmlFor="">CSS </label>
            <FontAwesomeIcon icon={faCss3} />
          </div>
          <div className="list">
            <label htmlFor="">Bootstrap </label>
            <FontAwesomeIcon icon={faBootstrap} />
          </div>
          <div className="list">
            <label htmlFor="">React </label>
            <FontAwesomeIcon icon={faReact} />
          </div>
          <div className="list">
            <label htmlFor="">Javascript </label>
            <FontAwesomeIcon icon={faJs} />
          </div>
          <div className="list">
            <label htmlFor="">Bulma </label>
            <FontAwesomeIcon icon={faPaintBrush} />
          </div>
        </div>
        
        {/* Backend Development */}
        <div className="set">
          <FontAwesomeIcon className='iconFontAwesome' icon={faCode} />
          <br />
          <header>Back-End Development</header>
          <div className="list">
            <label htmlFor="">Python </label>
            <FontAwesomeIcon icon={faPython} />
          </div>
          <div className="list">
            <label htmlFor="">Django </label>
            <FontAwesomeIcon icon={faServer} />
          </div>
          <div className="list">
            <label htmlFor="">MySQL </label>
            <FontAwesomeIcon icon={faDatabase} />
          </div>
          <div className="list">
            <label htmlFor="">Express </label>
            <FontAwesomeIcon icon={faServer} />
          </div>
          <div className="list">
            <label htmlFor="">Node JS </label>
            <FontAwesomeIcon icon={faNodeJs} />
          </div> 
          <div className="list">
            <label htmlFor="">Pandas </label>
            <FontAwesomeIcon icon={faTable} />
          </div> 
          <div className="list">
            <label htmlFor="">Azure </label>
            <FontAwesomeIcon icon={faCloud} />
          </div> 
          <div className="list">
            <label htmlFor="">Matplotlib </label>
            <FontAwesomeIcon icon={faChartSimple} />
          </div>         
        </div>
      </div>
    </section>
  )
}
