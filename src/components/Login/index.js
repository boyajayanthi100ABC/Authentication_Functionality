// Write your JS code here

import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = () => {
  const jwtToken = Cookies.get('jwt-token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const setCookiesAndNavigateHome = token => {
    const {history} = props
    Cookies.set('jwt-token', token, {expires: 30, path: '/'})
    history.replace('/')
  }

  const homeRoute = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      setCookiesAndNavigateHome(data.jwt_token)
    }
  }

  return (
    <div className="container">
      <h1 className="heading"> Please Login </h1>
      <button className="button" type="button" onClick={homeRoute}>
        {' '}
        Login with Sample Creds{' '}
      </button>
    </div>
  )
}

export default Login
