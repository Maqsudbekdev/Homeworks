let sidebar = document.querySelector(".sidebar")
let bars = document.querySelector("#bars")
let close = document.querySelector("#close")

bars.addEventListener('click',()=>{
    sidebar.style = "margin-left:0px;"
    close.style = "display:block;"
    bars.style = "display:none;"
})
close.addEventListener('click',()=>{
    sidebar.style = "margin-left:-150px;"
    close.style = "display:none;"
    bars.style = "display:block;"
})