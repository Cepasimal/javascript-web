let listDiv = null;
let todoList = [
  {
    id: 1,
    title: "Faire les courses",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Faire tes devoirs",
    description: "Lorem ipsum dolor sit amet",
  },
];

/**
 * Create card html with todo
 * @param {*} todo 
 * @returns the html in a string
 */
const createCardHtml = (todo) => {
  return `<div class="card">
    <div class="heading"> 
      <div>${todo.title}</div>  
      <button class="btn-remove" onclick="remove(${todo.id})">
        <img src="assets/delete-icon.png" />
      </button> 
    </div>

    <div class="description"> ${todo.description} </div>
    <button class="btn-check" onclick="check(${todo.id})">
      <img src="assets/done-icon.png" />
      <div>Fait</div>  
    </button>
  </div>`;
}

/**
 * Remove the todo of the list and update the website
 * @param {*} id 
 */
const remove = (id) => {
  todoList = todoList.filter((element) => element.id !== id);
  updateHTML();
}

/**
 * Update html with the todo list
 */
const updateHTML = () => {
  let string = "";

  todoList.forEach((todo) => {
    string += createCardHtml(todo);
  });

  listDiv.innerHTML = string;
}

/**
 * When page is loaded, update html and listen to event
 */
const onLoad = () => {
  listDiv = document.getElementById('list');
  updateHTML();

  const addButton = document.getElementById('add');
  addButton.addEventListener('click', () => {
    const title = document.getElementById('title');
    const description = document.getElementById('description');

    todoList.push({id: todoList.length + 1, title: title.value, description: description.value});
    
    // Reset fields
    title.value = "";
    description.value = "";

    updateHTML();
  })
}

window.addEventListener("load", onLoad);