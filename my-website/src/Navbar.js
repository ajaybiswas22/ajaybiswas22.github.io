import { SocialFlow } from './component'; 
import { Link } from 'react-router-dom'
const NavbarElement = () => {
    return (
          <div className="App font-regular">
            <ul className="Navbar">
              <li><Link to='/'>Ajay Biswas</Link></li>
              <li><Link to='/Timeline'>Timeline</Link></li>
              <li><Link to='/Gallery'>Gallery</Link></li>
              <SocialFlow/>
            </ul>
          </div>
        );
    }

export { NavbarElement }
