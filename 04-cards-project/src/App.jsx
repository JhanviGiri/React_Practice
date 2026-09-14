import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className='card'>

        <div className="top">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPjeZ-FjJ-FHOMlVO9c1ZtEPo8ypuNnRN1uCMugVyyA&s=10' alt='Logo'></img>
          <button>Save <Bookmark size={18} /></button>
        </div>

        <div className="centre">
          <h2>Amazon</h2>
          <span>5 days ago</span>
          <h3>Senior full stack developer</h3>
        
        <div>
          <h3>Part-Time</h3>
          <h3>Senior-level</h3>
          <h3>Remote</h3>
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
  )
}

export default App