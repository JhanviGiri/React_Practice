import {Bookmark} from 'lucide-react' 
import React from 'react'


const Card = (props) => {

    // console.log(props.company)
  return (
    
<div className='card'>

<div>
        <div className="top">
          <img src={props.brandLogo} alt='Logo'></img>
          <button>Save <Bookmark size={18} /></button>
        </div>

        <div className="centre">
          <h2>{props.company} <span>{props.datePosted}</span> </h2>
          <h3>{props.post}</h3>
        
        <div className="tag">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
</div>
      </div>
  )
}

export default Card