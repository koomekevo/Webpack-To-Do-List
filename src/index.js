import './style.css';

const toDoListItems = [
  {
    description: 'Eat Dinner',
    completed: false,
    index: 0,
  },
  {
    description: 'Code',
    completed: false,
    index: 1,
  },
  {
    description: 'Meditate',
    completed: false,
    index: 2,
  },
];

function populateList() {
  const todoList = document.getElementById('todo-list');

  toDoListItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <input class="checkbox" type="checkbox" name="" value="">
    <span>${item.description}</span>
    `;
    todoList.appendChild(listItem);
  });
}

populateList();