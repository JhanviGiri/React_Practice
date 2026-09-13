import React from 'react'
import Card from './components/Card'

const App = () => {

  const greeting = "Hello! Everyone"
  return (
    <div>
      <div className='card'>
       <h1>{greeting}</h1> 
      <h2>Jhanvi Giri</h2>
       <p>Lorem ipsum dolor sit amet.</p>
      
      </div>

      <Card />
      {/* {Card()} */}
    </div>
  )
}

export default App