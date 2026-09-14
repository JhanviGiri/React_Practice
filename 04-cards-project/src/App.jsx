import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className='card'>

<div>
        <div className="top">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMza-4WthdR-Chpw-GxQmXjYcuN7-rS8V5gKoJFMlC-A&s=10' alt='Logo'></img>
          <button>Save <Bookmark size={18} /></button>
        </div>

        <div className="centre">
          <h2>Amazon  <span>5 days ago</span> </h2>
          <h3>Senior full stack developer</h3>
        
        <div className="tag">
          <h4>Part-Time</h4>
          <h4>Senior-level</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
        </div>
</div>
      </div>
    </div>
  )
}

export default App