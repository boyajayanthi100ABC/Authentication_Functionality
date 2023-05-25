// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="container">
    <ul className="nav-container">
      <li className="item-container">
        <Link to="/"> Home </Link>
      </li>
      <li className="item-container">
        <Link to="/about"> About </Link>
      </li>
    </ul>
  </div>
)

export default Header
