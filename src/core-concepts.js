let state = {
    todos: [{
      text: 'Eat food',
      completed: true
    }, {
      text: 'Exercise',
      completed: false
    }],
    visibilityFilter: 'SHOW_COMPLETED'
}

let actions = [
    { type: 'ADD_TODO', text: 'Go to swimming pool' },
    { type: 'TOGGLE_TODO', index: 1 },
    { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' },
]

let filterOptions = [
    'SHOW_ALL',
    'SHOW_COMPLETED',
]

function visibilityFilter(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_VISIBILITY_FILTER') {
      return action.filter
    } else {
      return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([{ text: action.text, completed: false }])
      case 'TOGGLE_TODO':
        return state.map(
          (todo, index) =>
            action.index === index
              ? { text: todo.text, completed: !todo.completed }
              : todo
        )
      case 'SET_VISIBILITY_FILTER':
        return visibilityFilter(state, action);
      default:
        return state
    }
}

function completedOnClick(index) {
    state.todos = todos(state.todos, { type: 'TOGGLE_TODO', index: index });
    render();
}

function filterOnChange(element) {
    let filterOption = element.options[element.selectedIndex].value;
    state.visibilityFilter = todos(state.visibilityFilter, { type: 'SET_VISIBILITY_FILTER', filter: filterOption });

    render();
}

function addOnClick(value) {
    state.todos = todos(state.todos, { type: 'ADD_TODO', text: value })
    render();
}

function inputOnKeyUp(event) {
  if (event.keyCode === 13) {
    addOnClick(event.target.value);
  }
} 

function renderList() {
    let list = document.createElement('ul');
    list.id = 'todos';

    let todoData = state.visibilityFilter === 'SHOW_ALL' ? 
        state.todos : 
        state.todos.filter(todo => todo.completed === false);

    for (let todo of todoData) {
        let index = state.todos.indexOf(todo)

        let text = document.createElement('span');
        text.innerText = todo.text;

        let completed = document.createElement('input');
        completed.type = 'checkbox';
        completed.checked = todo.completed;
        completed.onchange = () => completedOnClick(index);

        let listItem = document.createElement('li');
        listItem.appendChild(completed);
        listItem.appendChild(text);

        list.appendChild(listItem);
    }

    return list;
}

function renderFilter() {
    let filter = document.createElement('select');

    for (const filterOption of filterOptions) {
        let option = document.createElement('option');
        option.value = filterOption;
        option.innerText = filterOption.toLocaleLowerCase().split('_').join(' ');

        if (state.visibilityFilter === filterOption) {
            option.selected = true;
        }

        filter.appendChild(option);
    }

    filter.onchange = () => filterOnChange(filter);

    return filter;
}

function renderAdd() {
    let add = document.createElement('div');
    let prompt = document.createElement('span');
    prompt.innerText = 'Add To Do: ';

    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'e.g. Clean the dishes';
    input.onkeyup = inputOnKeyUp;

    let btnAdd = document.createElement('button');
    btnAdd.innerText = 'Add';
    btnAdd.onclick = () => addOnClick(input.value);

    add.appendChild(prompt);
    add.appendChild(input);
    add.appendChild(btnAdd);

    return add;
}

function render() {
    let toBeCleared = document.getElementById('container');
    if (toBeCleared) {
        toBeCleared.remove();
    }

    let container = document.createElement('div');
    container.id = 'container';

    let list = renderList();
    let filter = renderFilter();
    let add = renderAdd();
    
    container.appendChild(filter);
    container.appendChild(list);
    container.appendChild(add);
    document.body.appendChild(container);
}

render();
