import React from 'react'

const Card = (props) => {

    console.log(props)
  return (
    <div>
    <div className='card'>

       {/* <img src='https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyfGVufDB8fDB8fHww' alt='bg-img'></img>
    //   <h2>Jhanvi Giri</h2> */}

       <img src={props.img} alt='flower'></img>
       <h2>{props.user},{props.age}</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <button>View Profile</button>
 </div>
    </div>
  )
}

export default Card