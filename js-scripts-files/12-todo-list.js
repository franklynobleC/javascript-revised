let todoList = JSON.parse(localStorage.getItem('todoList')) || {
  name: 'make dinner',
  dueDate: '19-20-2023',
  name: 'do  laundry',
  dueDate: '19-20-2023'
}

renderTodoList()
function renderTodoList() {
  let todoListHTML = ''
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i]
    const { name, dueDate } = todoObject
    //generating  html
    const html = `
    <div> ${name}</div>
 <div>   ${dueDate}</div>
     <button
  class="js-todo-delete-button">Delete</button>`

    // put  the  html  on  the  Page
    todoListHTML += html
    document.querySelector('.js-todo-list').innerHTML = todoListHTML
  }

  //   querySelectorAll would  give you  all  the element with  class,  todo,
  //Add element  delete Button
  // get all The Element from  the List, Loop Through  the List,  for Each Element addEventListener
  document
    .querySelectorAll('.js-todo-delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1)
        renderTodoList()
      })
    })
}
//Event Add Button
let todoAddBtnElement = document
  .querySelector('.js-todo-addButton')
  .addEventListener('click', () => {
    addTodo()
  })
//Event DeleteButton
let todoDeleteButton = document
  .querySelector('.js-todo-delete-button')
  .addEventListener('click', () => {})
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
  }

  renderTodoList()
  localStorage.setItem('todoList', JSON.stringify(todoList))
}
