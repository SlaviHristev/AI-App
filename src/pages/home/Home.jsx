import { Link } from 'react-router-dom'
import './home.css'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'


const Home = () => {

  const [typingStatus, setTypingStatus] = useState("human1")

  return (
    <div className='home'>
        <img src="/orbital.png" alt="" className='orbital'/>
        <div className="left">
            <h1>SLAVI AI</h1>
            <h2>Supercharge your creativity and productivity!</h2>
            <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, unde.
            </h3>
            <Link to="/dashboard">Get Started</Link>
        </div>
        <div className="right">
            <div className="imgContainer">
              <div className="bgContainer">
                <div className="bg"> </div>
              </div>
                <img src="/bot.png" alt="" className='bot' />
                <div className="chat">
                  <img src={typingStatus === 'human1' ? "/human1.jpeg" :  typingStatus === "human2" ? "/human2.jpeg" : "/bot.png" } alt="" />
                  <TypeAnimation
                  sequence={[
                    "Human: Lorem ipsum dolor sit amet consectetur adipisicing elit!",
                    2000,() =>{
                      setTypingStatus("bot")
                    },
                    "Bot: Lorem ipsum dolor sit amet consectetur!",
                    2000,
                    () =>{
                      setTypingStatus("human2")
                    },
                    "Human2: Lorem ipsum adipisicing elit. Ullam, unde."
                    ,2000,() =>{
                      setTypingStatus("bot")
                    },
                    "Bot: Lorem ipsum dolor sit amet consectetur!",
                    2000,
                    () =>{
                      setTypingStatus("human1")
                    },
                  ]}
                  wrapper='span'
                  repeat={Infinity}
                  cursor={true}
                  omitDeletionAnimation={true}/>
                </div>
            </div>
        </div>
        <div className="terms">
          <img src="/logo.png" alt="" />
          <div className="links">
            <Link to="/">Terms of Service</Link>
            <span>|</span>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
    </div>
  )
}

export default Home