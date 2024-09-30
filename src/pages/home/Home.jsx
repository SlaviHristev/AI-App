import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
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
            </div>
        </div>
    </div>
  )
}

export default Home