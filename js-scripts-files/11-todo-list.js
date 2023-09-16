const todoList = ['make dinner', 'do  laundry']
renderTodoList()
function renderTodoList () {
  let todoListHTML = ''
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i]
    //generating  html
    const html = `<p> ${todo}</p>`

    todoListHTML += html
    document.querySelector('.js-todo-list').innerHTML = todoListHTML
  }
}

function addTodo () {
  let inputElement = document.querySelector('.js-name-input')

  const name = inputElement.value
  if (name) {
    todoList.push(name)

    console.log(todoList)

    document.querySelector('.js-name-input').value = ''
  } else {
    document.querySelector('.js-name-input').value = 'please Enter  value'
  }

  renderTodoList()
}
