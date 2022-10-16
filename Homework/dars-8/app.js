let box = document.querySelector(".box")
let desc = document.querySelector(".desc")
let rotate = document.querySelector(".rotate")
let boxx2 = document.querySelector(".boxx2")
let desc2 = document.querySelector(".desc2")
let rotate2 = document.querySelector(".rotate2")
let boxx3 = document.querySelector(".boxx3")
let desc3 = document.querySelector(".desc3")
let rotate3 = document.querySelector(".rotate3")
let boxx4 = document.querySelector(".boxx4")
let desc4 = document.querySelector(".desc4")
let rotate4 = document.querySelector(".rotate4")
let  small = document.querySelector(".small_div")
logo.addEventListener('click',()=>{
    small.classList.toggle("get_big")
})
box.addEventListener('click',()=>{
    // desc.style.display = "block"
    desc.classList.toggle("second")
    desc2.classList.remove("second2")
    desc3.classList.remove("second3")
    des4.classList.remove("second4")
    rotate.style = "z-index:1;"
})
boxx2.addEventListener('click',()=>{
    desc2.classList.toggle("second2")
    desc.classList.remove("second")
    desc3.classList.remove("second3")
    desc4.classList.remove("second4")
})

boxx3.addEventListener('click',()=>{
    desc3.classList.toggle("second3")
    desc.classList.remove("second")
    desc2.classList.remove("second2")
    desc4.classList.remove("second4")
})
boxx4.addEventListener('click',()=>{
    desc4.classList.toggle("second4")
    desc.classList.remove("second")
    desc3.classList.remove("second3")
    desc2.classList.remove("second2")
})