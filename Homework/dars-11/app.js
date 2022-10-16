let adderForm = document.querySelector(".adder_form")
let adderBtn = document.querySelector(".adder_btn")
let wrapper = document.querySelector(".wrapper")



adderForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const chislo = new Date();
    const item = document.createElement('div')
    const text = document.createElement('p')
    const cont = document.createElement('div')
    wrapper.appendChild(item)
    
    item.appendChild(cont)
    cont.appendChild(text)
    cont.style.height = "200px"
    cont.style.width = "200px"
    cont.style.background = "red"
    text.style.display = "none"
    item.innerHTML = '<i class="fa-solid fa-clock"></i> '+ chislo.getFullYear() + ":" +  chislo.getMonth() + ":"+ chislo.getDate() + ":" + chislo.getHours() + ":" + chislo.getMinutes();
    chislo.style = "font-size:20px;"
    text.innerHTML = inp.value
    item.addEventListener('click',()=>{
      item.style.height = "350px"
      item.style.width = "200px"

    })
})