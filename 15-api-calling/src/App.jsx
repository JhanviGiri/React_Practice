import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  
/* JavaScript works synchronously, but during the API calling it works asynchronously. So we are creating a function and declaring it 
asynchronous, Also writing await before fetch because it will not run till the data is received. So this is how API works. Also we are 
using fetch to receive data from database. the line will not run till it receives the data because of 'await' function. */

// async function getData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//   console.log(response)

// }


//By Arrow function
// const getData = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//   // console.log(response)
//   // console.log(response.json())

//   //we are receiving response but we are not getting its data so for that we have to write await 
//   // function
//   const data = await response.json()
//   console.log(data)

// }


// This is the 2nd method of calling api

const [data, setData] = useState([])
const getData = async () => {
    
    const response = await axios.get('https://picsum.photos/v2/list')
    // console.log(response.data)

    setData(response.data)
    
  }
  return (
    <div>
       <button onClick={getData}>Get Data</button>

       <div>
        {data.map(function(elem,idx){

          return <h3>Hello, {elem.author} {idx}</h3>
        })}
      </div>
  
    </div>
  )

}
export default App