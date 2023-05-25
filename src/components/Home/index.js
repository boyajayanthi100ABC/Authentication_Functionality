// Write your JS code here

import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <div className="container-home">
    <Header />
    <div className="container-home">
      <h1 className="heading"> Home </h1>
      <LogoutButton />
    </div>
  </div>
)

export default Home
