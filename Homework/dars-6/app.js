let path = document.querySelector(".path")
let box = document.querySelector(".box")
let sun = document.querySelector("#sun")
let moon = document.querySelector("#moon")
let body = document.querySelector("body")

box.addEventListener('click',()=>{
    box.classList.toggle("second")
    if(box.classList.contains("second")){
        body.style.background = "black"
        box.style.background = "gold"
        sun.style.display = "block"
        moon.style.display = "none"
    }
    else{
        body.style.background = "white"
        box.style.background = "black"
        sun.style.display = "none"
        moon.style.display = "block"
    }
})



