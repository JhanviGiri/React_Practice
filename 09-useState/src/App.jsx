import React, {useState} from 'react'

export const App = () => {
  
  // let a = 20
  // function changeA(){
  //   console.log(a)
  //   a = 30
  //   console.log(a)
  // }


  const [num, setNum] = useState(10)

   function changeNum(){
    setNum(12)
  }
  return (
    <div>
      <h1>The value of num is {num}</h1>
      <button onClick={changeNum}>Click To Change</button>

      {/* <button onClick={changeA}>Click to Change</button> */}
    </div>
  )
}


export default App