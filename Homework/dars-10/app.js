let deleteBtn = document.querySelector(".delete_btn")
let todolistCont = document.querySelector(".todolist_container")
let answer = document.querySelector(".answer")
let yes = document.querySelector(".yes")
let no = document.querySelector(".no")

deleteBtn.addEventListener('click',()=>{
    todolistCont.classList.add("todolist_container_active")
    answer.style.display = "block"
})
no.addEventListener('click',()=>{
    todolistCont.classList.remove("todolist_container_active")
    answer.style.display = "none"
})

yes.addEventListener('click',()=>{
    todolistCont.classList.remove("todolist_container_active")
    answer.style.display = "none"
})


