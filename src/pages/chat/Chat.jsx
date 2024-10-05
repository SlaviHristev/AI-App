import { useRef } from 'react'
import './chat.css'
import { useEffect } from 'react';
import NewPrompt from '../../components/newPrompt/NewPrompt';

const Chat = () => {

  

  return (
    <div className='chatPage'>
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test1</div>
          <div className="message user">Test2</div>
          <div className="message">Test1</div>
          <div className="message user">Test2</div>
          <div className="message">Test1</div>
          <div className="message user">Test2</div>
          <div className="message">Test1</div>
          <div className="message user">Test2</div>
          <div className="message">Test1</div>
          <div className="message user">Test2</div>
          <div className="message">Test1</div>
          <div className="message user">Test2</div>
          <NewPrompt/>
        </div>
      </div>
    </div>
  )
}

export default Chat