import React from 'react'

const App = () => {


/*********************To set Item in key-value pair */

// localStorage.setItem('user','Jahanvi')
// localStorage.setItem('user2', 'Anvi')



/**********To get Item in key-value pair using only key****/
// const user = localStorage.getItem('user')
// const user2 = localStorage.getItem('user2')
// console.log(user, user2)


// /***************To remove Item******/
// localStorage.removeItem('user2')


//In object form 
// const user1 = {
//   username:'Anvi',
//   age:'20',
//   city:'Indore'
// }

// console.log(user1)
// localStorage.setItem('user1', user1);

//to store in string form
// localStorage.setItem('user1', JSON.stringify(user1));

//to get the info of user1
// const user = localStorage.getItem('user1');


//to convert it back to object 
// const user = JSON.parse(localStorage.getItem('user1'))
// console.log(typeof(user))

  return (
    <div>App</div>
  )
}

export default App