let desc = document.querySelector(".desc")
let desc2 = document.querySelector(".desc2")
let desc3 = document.querySelector(".desc3")
let desc4 = document.querySelector(".desc4")
let sidebar = document.querySelector(".sidebar")
let iconName = document.querySelector(".icon_name")
let iconName2 = document.querySelector(".icon_name2")
let iconName3 = document.querySelector(".icon_name3")
let iconName4 = document.querySelector(".icon_name4")
let coderName = document.querySelector(".coder_name") 





bigTooltip.addEventListener('mouseover',()=>{
    desc.classList.toggle("descActive")
    desc2.classList.remove("descActive2")
    desc3.classList.remove("descActive3")
    desc4.classList.remove("descActive4")
})

bigGear.addEventListener('mouseover',()=>{
    desc2.classList.toggle("descActive2")
    desc.classList.remove("descActive")
    desc3.classList.remove("descActive3")
    desc4.classList.remove("descActive4")
})

file.addEventListener('mouseover',()=>{
    desc3.classList.toggle("descActive3")
    desc2.classList.remove("descActive2")
    desc.classList.remove("descActive")
    desc4.classList.remove("descActive4")
})

star.addEventListener('mouseover',()=>{
    desc4.classList.toggle("descActive4")
    desc2.classList.remove("descActive2")
    desc3.classList.remove("descActive3")
    desc.classList.remove("descActive")
})



menu.addEventListener('click',()=>{
    sidebar.classList.add("menu")
    menu.style.display = "none"
    arrowLeft.style.display = "block"
    iconName.style.display = "block"
    iconName2.style.display = "block"
    iconName3.style.display = "block"
    iconName4.style.display = "block"
    coderName.style.display = "block"
    

})
arrowLeft.addEventListener('click',()=>{
    sidebar.classList.remove("menu")
    arrowLeft.style.display = "none"
    menu.style.display  = "block"
    iconName.style.display = "none"
    coderName.style.display = "none"
    iconName2.style.display = "none"
    iconName3.style.display = "none"
    iconName4.style.display = "none"
})


