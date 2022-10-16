let right = document.querySelector("#right")
let down = document.querySelector("#down")
let bottom = document.querySelector(".bottom")
let desc = document.querySelector(".desc")
let topDiv = document.querySelector(".top")


let topDiv2 = document.querySelector(".top2")
let bottom2 = document.querySelector(".bottom2")
let desc2 = document.querySelector(".desc2")
let topDiv3 = document.querySelector(".top3")
let bottom3 = document.querySelector(".bottom3")
let desc3 = document.querySelector(".desc3")

right.addEventListener('click',()=>{
    bottom.classList.toggle("second")
    right.style.display = "none"
    down.style.display = "block"
    desc.style.display = "block"
    bottom2.classList.remove("second2")
    right2.style.display = "block"
    down2.style.display = "none"

    bottom3.classList.remove("second3")
    right3.style.display = "block"
    down3.style.display = "none"
        topDiv3.style = "border-radius:0px 0px 25px 25px"
})

down.addEventListener('click',()=>{
    bottom.classList.remove("second")
    down.style.display = "none"
    right.style.display = "block"
})


right2.addEventListener('click',()=>{
    bottom2.classList.toggle("second2")
    right2.style.display = "none"
    down.style.display = "none"
    right.style.display = "block"
    
    down2.style.display = "block"
    desc2.style.display = "block"
    bottom.classList.remove("second")
    bottom3.classList.remove("second3")
    down3.style.display = "none"
    right3.style.display = "block"
    topDiv3.style = "border-radius:0px 0px 25px 25px"
    
    
})
down2.addEventListener('click',()=>{
    down2.style.display = "none"
    right2.style.display = "block"
    bottom2.classList.remove("second2")
    
})


right3.addEventListener('click',()=>{
    bottom3.classList.toggle("second3")
    topDiv3.style = "border-radius:0px 0px 0px 0px;"
    desc3.style.display = "block"
    bottom.classList.remove("second")
    right.style.display = "block"
    down.style.display = "none"
    right3.style.display ="none"
    down3.style.display = "block"
    bottom2.classList.remove("second2")
    down2.style.display = "none"
    right2.style.display = "block"
})
down3.addEventListener('click',()=>{
    bottom3.classList.remove("second3")
    down3.style.display = "none"
    right3.style.display = "block"
    if(bottom3.classList.contains("second3"))
    {
        topDiv3.style = "border-radius:0px 0px 25px 25px"
    }
    else{
        topDiv3.style = "boder-radius:0px 0px 0px 0px"
    }
})