// Write your JS code here

import {Link} from 'react-router-dom'
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const About = () => (
  <div>
    <Header />
    <div className="container-about">
      <h1 className="heading"> About Route </h1>
      <LogoutButton />
    </div>
  </div>
)

export default About
