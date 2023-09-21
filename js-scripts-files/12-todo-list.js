let todoList = JSON.parse(localStorage.getItem('todoList')) || {
  name: 'make dinner',
  dueDate: '19-20-2023',
  name: 'do  laundry',
  dueDate: '19-20-2023'
}

renderTodoList()
function renderTodoList () {
  let todoListHTML = ''
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i]
    const { name, dueDate } = todoObject
    //generating  html
    const html = `
    <div> ${name}</div>
 <div>   ${dueDate}</div>
     <button onclick="todoList.splice(${i},1);
 renderTodoList();"
  class="js-todo-delete-button">Delete</button>`

    todoListHTML += html
    document.querySelector('.js-todo-list').innerHTML = todoListHTML
  }
}

function addTodo () {
  let inputElement = document.querySelector('.js-name-input')
  let dueDateElement = document.querySelector('.js-due-date-input')
  let todoDelete = document.querySelector('.js-todo-delete-button')

  const name = inputElement.value
  const dueDate = dueDateElement.value
  if (name) {
    todoList.push({ name, dueDate })

    console.log(todoList)

    document.querySelector('.js-name-input').value = ''
  } else {
    document.querySelector('.js-name-input').value = 'please Enter  value'
  }

  renderTodoList()
  localStorage.setItem('todoList', JSON.stringify(todoList))
}
