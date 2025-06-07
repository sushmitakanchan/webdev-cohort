const todoInput = document.getElementById('todo-input')
const addBtn = document.getElementById('add-btn')
const todoItemsContainer = document.getElementById('todo-items')
const removeAllBtn = document.createElement('button');
removeAllBtn.innerText = "Clear all tasks"

addBtn.addEventListener('click',()=>{
    const value = todoInput.value;
    console.log(value);
    
    const li = document.createElement('li');
    li.innerText = value;

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'X'
    li.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', ()=>{
        li.remove()
    })
    

    
    todoItemsContainer.appendChild(li);
    todoItemsContainer.appendChild(removeAllBtn);

    removeAllBtn.addEventListener('click',()=>{
        todoItemsContainer.innerHTML = ""
    })
})