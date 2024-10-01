import { Link } from 'react-router-dom'
import './chatList.css'

const ChatList = () => {
  return (
    <div className='chatList'>
        <span className='title'>DASHBOARD</span>
        <Link to='/dashboard'>Create a new Chat</Link>
        <Link to='/'>Explore</Link>
        <Link to='/'>Contact</Link>
        <hr />
        <div className="list">
            <Link to='/'>My Chat</Link>
        </div>
        <hr />
        <div className="upgrade">
            <img src="/logo.png" alt="" />
            <div className="texts">
                <span>
                    Upgrade to Pro
                </span>
                <span>
                    Get unlimited access to all features
                </span>
            </div>
        </div>
    </div>
  )
}

export default ChatList