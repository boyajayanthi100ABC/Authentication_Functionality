// Write your JS code here

import {Redirect} from 'react-router-dom'
import './index.css'
import Cookies from 'js-cookie'

const LogoutButton = () => {
  const onClickLogOut = () => {
    Cookies.remove('jwt-token')
    return <Redirect to="/login" />
  }

  return (
    <div className="container">
      <button className="button" type="button" onClick={onClickLogOut}>
        {' '}
        Logout
      </button>
    </div>
  )
}

export default LogoutButton
