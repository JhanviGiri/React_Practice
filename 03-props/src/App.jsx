import React from 'react'
import Card from './components/Card'


const App = () => {

  return (
    <div className='parent'>
      <Card user='Rimuru' age={2} img='https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyfGVufDB8fDB8fHww' />
      <Card user='Milim' age={2000} img='https://images.unsplash.com/photo-1615280825886-fa817c0a06cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D'/>
      <Card user='Veldora' age={5000} img='https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D'/>
 
    </div>
  )
}

export default App