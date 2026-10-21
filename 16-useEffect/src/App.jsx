import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(function(){
    console.log('useEffect is running....')
  },[num])
  return (
    <div>

      <h1>The value of num is {num}</h1>
       <h1>The value of num2 is {num2}</h1>

      <button onClick={() =>{
      setNum(num + 1)
      }}> Num1 </button>

      <button onClick={() =>{
      setNum2(num2 + 10)
      }}> Num2 </button>
    </div>
  )
}

export default App