import './topbar.scss'
import {Mail} from '@material-ui/icons'

export default function topbar({menuOpen, setMenuOpen}) {
  return (
    // The curly braces is to prepare the burger to be active
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Why I like to Code!</a>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span>
              daaviid_11@hotmail.com
            </span>
          </div>
        </div>
        <div className="right">
          {/* Making the hamburger being set to opposive of menuOpen everytime we click on it */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
