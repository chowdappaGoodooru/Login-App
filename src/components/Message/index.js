// Write your code here
import './index.css'

const Message = props => {
  const {isLogin} = props

  const Text = isLogin ? 'Welcome User' : 'Please Login'

  return <h1 className="message">{Text}</h1>
}

export default Message
