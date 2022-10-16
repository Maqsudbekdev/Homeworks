axios.get("https://jsonplaceholder.typicode.com/users")
.then(response=>{
    response.data.forEach(user => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const btn  = document.createElement('button');
        const btn2 = document.createElement('button')
        const btn3 = document.createElement('button')
        btn.innerHTML = "Delete";
        btn2.innerHTML = "Edit";
        btn3.innerHTML = "View"
        td.appendChild(btn)
        td.appendChild(btn2)
        td.appendChild(btn3)
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name.toUpperCase()}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td><a href = "tel : ${user.phone.replace(/-/g ,"").replace(/\./g, "").replace(/[{()}]/g, "").split("x")[0]}">${user.phone.replace(/-/g ,"").replace(/\./g, "").replace(/[{()}]/g, "").split("x")[0]}</a></td>
            <td>${user.website}</td>

        `
        table.appendChild(tr)
        tr.appendChild(td)
        btn.addEventListener('click',()=>{
            tr.remove();
        })
        btn2.addEventListener('click',()=>{
            if(tr.hasAttribute("contenteditable")){
                tr.removeAttribute("contenteditable");
                btn2.innerHTML = "Edit"
        
        }
            else{
                tr.setAttribute("contenteditable" , true)
                btn2.innerHTML = "Done"
            }
        })
    });
})
.catch(err=>console.log(err))