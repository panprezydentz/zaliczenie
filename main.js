//pobranie elementów
const buttonAdd = document.querySelector('.add-button')
const taskInput = document.querySelector('.add-task')
const ulTask = document.querySelector('.tasklist-container ul')

let myList = [] ;

//dodawanie elementów
function addNewTodo () {
    if (taskInput.value !== '') {
    myList = document.createElement('li')
    ulTask.append(myList)
    myList.textContent = taskInput.value
    
    taskInput.value = ''
    createToolsArea()}
}



//przyciski:gotowe i usuń
const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    myList.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = 'check <i class="fas fa-check"></i>'
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = 'delete <i class="fas fa-times"></i>'

    toolsPanel.append(completeBtn, deleteBtn)

}

const checkClick = e => {
    if(e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.delete')) {
        deleteTodo(e)
    }
    }
    
    const deleteTodo = (e) => {
        e.target.closest('li').remove()
    } 


//działanie na enter
const enterKeyCheck = e => {
    if(e.key === 'Enter') {
        console.log('enter');
        addNewTodo()
    }

}



//nasłuchiwanie
buttonAdd.addEventListener('click', addNewTodo)
taskInput.addEventListener('keyup', enterKeyCheck)
ulTask.addEventListener('click', checkClick)