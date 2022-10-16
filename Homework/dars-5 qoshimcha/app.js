let select= document.querySelector(".select")
let langCollecction = document.querySelector(".lang_collection")
let uzbek = document.querySelector(".uzbek")
let russian = document.querySelector(".russian")
let english = document.querySelector(".english")
let text = document.querySelector(".text")

select.addEventListener('click',()=>{
    langCollecction.classList.toggle("show")
})
uzbek.addEventListener('click',()=>{
    text.innerHTML = "Uzbek"
    langCollecction.classList.remove("show")
})
russian.addEventListener('click',()=>{
    text.innerHTML = "Russian"
    langCollecction.classList.remove("show")
})
english.addEventListener('click',()=>{
    text.innerHTML = "Uzbek"
    langCollecction.classList.remove("show")
})  