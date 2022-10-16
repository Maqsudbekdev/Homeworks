let menuBtn = document.querySelector(".menu_btn")
let leftDiv = document.querySelector(".left")
let rightDiv = document.querySelector(".right")
let exitBtn = document.querySelector(".exit_btn")
menuBtn.addEventListener('click',() =>{
    menuBtn.style.display = "none"
    exitBtn.style.display = "block"
    leftDiv.style = "transform:scaleX(0); transform-origin:left;"
    rightDiv.style = "transform:translateX(-100px)"
    
})  
exitBtn.addEventListener('click' ,() =>{
    leftDiv.style = "transform:scaleX(1);"
    exitBtn.style.display = "none"
    menuBtn.style.display = "block"
    rightDiv.style = "transform:scaleX(1);"
})
