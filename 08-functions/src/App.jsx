import React from 'react'

const App = () => {

  function btnClicked(){
    console.log('button is clicked')
  }


  function inputChanging(){
        console.log("Input Entered")
      }

  
  const pageScrolling = (elem) =>{
    // console.log('page scrolling.... at speed',elem)

    if(elem > 0){
      console.log('downwards scrolling');
    }
    else{
      console.log('upwards Scrolling');
    }
  }


  return (
    <div>

      
     <div onWheel={(elem) =>{
      // console.log(elem.deltaY);
      
      pageScrolling(elem.deltaY)
     }}>
      
    <div className='page1'></div>
    <div className='page2'></div>
    <div className='page3'></div>
     </div>
    
      <h1>Hello!</h1>

      {/* <button onClick={btnClicked}>Click</button> */}
      {/* <button onDoubleClick={btnClicked}>Click Here</button>
    */}



      {/* <button onClick={() => {
        console.log('Surprise!!!!')
      }}>Click Me</button> */}



      {/* <input onChange={inputChanging} 
      type="text" 
      placeholder="Enter Name">
      </input> */}
    
    
 </div>
)
}

export default App