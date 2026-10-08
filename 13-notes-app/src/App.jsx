import React, { useState } from 'react'

const App = () => {

const [title, setTitle] = useState('')
const [details, setDetails] = useState('')

const [task, setTask] = useState([])

const submitHandler = (e) => {
  e.preventDefault()
  console.log('Form Submitted by ', title);

  const copyTask = [...task];
  copyTask.push({title, details})
  // console.log(copyTask);

  setTask(copyTask)
  console.log(copyTask)
  // console.log(title)
  // console.log(details)
  
  setTitle('')
  setDetails('')
}



  return (
    <div className='h-screen lg:flex bg-black text-white'>
     
      <form onSubmit={(e) =>{
        submitHandler(e)
      } } 
      className='flex p-10 lg:w-1/2 gap-5 items-start flex-col'>
        
        <h1 className='text-4xl font-bold'>Add Notes</h1>
        
        <input
        type='text' 
        placeholder='Enter Notes Heading'
        className='px-5 w-full py-2 border-5 rounded-2xl text-2xl'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        />


        <textarea
        type='text'
        placeholder='Enter Details' 
        className='px-5 w-full py-2 h-50 border-5 rounded-2xl text-2xl'
        value={details}
        onChange={(e) =>{
          setDetails(e.target.value)
        }}
        />


         

        <button className='px-5 w-full py-2 active:bg-gray-400 active:scale-95 border-2 rounded-3xl bg-gray-500 text-2xl'>
          Add Notes
          </button>

      </form>
      
    <div className='lg:w-1/2 lg:border-l-2 bg-gray-800 p-10'>
    
    
    <h1 className='text-4xl font-bold'>Your Notes</h1>
    
    
    <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
    
    {task.map(function(elem, idx){
      return  <div key={idx} className='h-52 w-40 text-black p-5 rounded-2xl bg-white'>
      <h2 className='leading-tight text-xl font-bold'>{elem.title}</h2>
      <p>{elem.details}</p>
      </div>
    })}


    {/* <div className='h-52 w-40 rounded-2xl bg-white'></div>
    <div className='h-52 w-40 rounded-2xl bg-white'></div>
    <div className='h-52 w-40 rounded-2xl bg-white'></div> */}
    
    </div>
    </div>
    </div>
  )
}

export default App