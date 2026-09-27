import React, {useState} from 'react'

export const App = () => {
  
  // let a = 20
  // function changeA(){
  //   console.log(a)
  //   a = 30
  //   console.log(a)
  // }


  // const [num, setNum] = useState(10)
  // const [userName, setName] = useState('Jahanvi')
  // const [array, setarray] = useState([10,20,30,40,50])
  

  // function changeNum(){
  //   setNum(12)
  //   setName('Jungkook')
  //   setarray([20,40,60,80])
  // }


  const [num, setNum] = useState(0)

  function increaseNum() {
    // console.log('increase');
    setNum(num+1)
    // setNum(num*num + 10)
  }

  function decreaseNum() {
    // console.log('decrease');
    setNum(num-1)
    // setNum(num*num - 10)
  }

  function jumpNum() {
    setNum(num+10)
  }


  return (
    <div>

      {/* <h1>The value of num is {num}</h1><br></br>
      <h1>The name of user is {userName}</h1><br></br>
      <h1>The value of array is {array}</h1>
      <button onClick={changeNum}>Click To Change</button>
   */}

      
    {/* <button onClick={changeA}>Click to Change</button> */}
    
    <h1>{num}</h1>
    <button onClick={increaseNum}>Increase</button>
    <button onClick={decreaseNum}>Decrease</button>
    <button onClick={jumpNum}>Increase By 10</button>
    
    </div>
  )
}


export default App