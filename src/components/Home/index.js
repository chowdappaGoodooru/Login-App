// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  onClickButton = () => {
    this.setState(pervState => ({isLogin: !pervState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <Message isLogin={isLogin} />
          {isLogin ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
