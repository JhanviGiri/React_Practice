/**************Simple making of element in JS*************/

// var h1 = document.createElement('h1')
// h1.innerHTML = "Hello, World!"
// //document.body.appendChild(h1)
// console.log(h1);


/************** Example Of Import And Export *************/

//Named Export
import {a} from './app.js' 
console.log(a) //20

import {name} from './app.js' 
console.log(name) //John Doe

import {skills} from './app.js' 
console.log(skills) //["HTML", "CSS", "JavaScript", "React"]

//Default Export
import arr from './app.js'
// import array from './app.js'  Can be exported with any name
console.log(arr) //[10, 20, 30, 40]