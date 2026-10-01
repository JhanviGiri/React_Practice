import React from 'react'

const App = () => {

const submitHandler = (e) => {
  e.preventDefault()
  console.log('Form Submitted');
}



  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) =>{
        submitHandler(e)
      } } 
      className='flex p-10 lg:w-1/2 gap-5 items-start flex-col'>
        <input
        type='text' 
        placeholder='Enter Notes Heading'
        className='px-5 w-full py-2 border-5 rounded-2xl text-2xl'
        />
        <textarea
        type='text'
        placeholder='Enter Details' 
        className='px-5 w-full py-2 h-50 border-5 rounded-2xl text-2xl'
        />

        <button className='px-5 w-full py-2 border-2 rounded-3xl bg-gray-500 text-2xl'>
          Add Notes
          </button>
      </form>

      <div className='flex flex-wrap p-10 lg:w-1/2'>
      <div className='h-32 w-32 rounded-2xl bg-white'></div>
      </div>
    </div>
  )
}

export default App