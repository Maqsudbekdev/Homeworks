let backside = document.querySelector(".backside")
let backside2 = document.querySelector(".backside2")
let btn = document.querySelector(".btn")
let btnText = document.querySelector(".btn_text")
let btn2 = document.querySelector(".btn2")
let btnText2 = document.querySelector(".btn_text2")
let backside3 = document.querySelector(".backside3")
let btn3 = document.querySelector(".btn3")
let btnText3 = document.querySelector(".btn_text3")
click.addEventListener('click',()=>{
    backside.classList.toggle("backsideActive")
    backside2.classList.remove("backsideActive2")
    backside3.classList.remove("backsideActive3")
})
btn.addEventListener('click',()=>{
    backside.classList.remove("backsideActive")
})
btn.addEventListener('mouseover',()=>{
    btnText.style.display = "none"
    times.style.display = "block"
    
})
btn.addEventListener('mouseout',()=>{
    btnText.style.display = "block"
    times.style.display = "none"
    
})


yellowClick.addEventListener('click',()=>{
    backside2.classList.toggle("backsideActive2")
    backside.classList.remove("backsideActive")
    backside3.classList.remove("backsideActive3")
})
btn2.addEventListener('click',()=>{
    backside2.classList.remove("backsideActive2")
})
btn2.addEventListener('mouseover',()=>{
    btnText2.style.display = "none"
    times2.style.display = "block"
    
})
btn2.addEventListener('mouseout',()=>{
    btnText2.style.display = "block"
    times2.style.display = "none"
    
})
redClick.addEventListener('click',()=>{
    backside3.classList.toggle("backsideActive3")
    backside.classList.remove("backsideActive")
    backside2.classList.remove("backsideActive2")
})
btn3.addEventListener('click',()=>{
    backside3.classList.remove("backsideActive3")
})
btn3.addEventListener('mouseover',()=>{
    btnText3.style.display = "none"
    times3.style.display = "block"
    
})
btn3.addEventListener('mouseout',()=>{
    btnText3.style.display = "block"
    times3.style.display = "none"
    
})





