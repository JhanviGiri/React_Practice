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

const deleteNote = (idx) =>{
  const copyTask = [...task];
 // console.log(copyTake[idx])

 copyTask.splice(idx, 1)
 setTask(copyTask)
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
    
    
    <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
    
    {task.map(function(elem, idx){
     return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
      
    <div>
    
    <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
    
    <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
    </div>
    
    <button onClick={() => {
                deleteNote(idx)
              }}  
    className='w-full cursor-pointer active:scale-95 bg-red-400 active:bg-red-600 py-1 text-xs rounded font-bold text-white'>Delete</button>
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