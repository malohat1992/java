
let moon = document.querySelector ('.moon')
let sun = document.querySelector ('.sun')
let body = document.querySelector ('body')
let lbl = document.querySelector ('label')
let inp = document.querySelector ('input')
let slash = document.querySelector ('.slash')
let eye = document.querySelector ('.eye')
let slash1 = document.querySelector ('.slash1')
let eye1 = document.querySelector ('.eye1')

moon.addEventListener('click',()=>{
    moon.style.display = 'none'
    sun.style.display = 'inline-block'
    body.style.background = 'rgb(46, 0, 90)'

    lbl.forEach ((item) => {
      item.style.color='rgb(211, 174, 7)'  
    } );
    inp.forEach ((item) => {
      item.style.color='gold'  
    } );
})

sun.addEventListener('click',()=>{
  sun.style.display = 'none'
  moon.style.display = 'inline-block'
  body.style.background = 'aliceblue'

  lbl.forEach ((item) => {
    item.style.color='black'  
  } );
})
slash.addEventListener('click',()=>{
  slash.style.display = 'none'
  eye.style.display = 'inline-block'
  

  
})
eye.addEventListener('click',()=>{
  eye.style.display = 'none'
  slash.style.display = 'inline-block'
  

  
})
slash1.addEventListener('click',()=>{
  slash1.style.display = 'none'
  eye1.style.display = 'inline-block'
  

  
})
eye1.addEventListener('click',()=>{
  eye1.style.display = 'none'
  slash1.style.display = 'inline-block'
  

  
})