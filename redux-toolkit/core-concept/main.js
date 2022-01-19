let state =
{
    todos: [{
        text: 'Eat food',
        completed: true
    }, {
        text: 'Exercise',
        completed: false
    }],
    visibilityFilter: 'SHOW_COMPLETED'
}

const action1 = { type: 'ADD_TODO', text: 'Go to swimming pool' };
const action2 = { type: 'TOGGLE_TODO', index: 1 };
const action3 = { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' };


function visibilityFilter(state = 'SHOW_ALL', action) {
    console.log('visibilityFilter');
    if (action.type === 'SET_VISIBILITY_FILTER') {
      return action.filter
    } else {
      return state
    }
  }
  
  function todos(state = [], action) {
      console.log('todos');
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([{ text: action.text, completed: false }])
      case 'TOGGLE_TODO':
        return state.map((todo, index) =>
          action.index === index
            ? { text: todo.text, completed: !todo.completed }
            : todo
        )
      default:
        return state
    }
  }

  
  function todoApp(state = {}, action) {
    console.log('todoApp');
    return {
      todos: todos(state.todos, action),
      visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    }
  }

console.log(state);
state = todoApp(state, action1);
console.log(state);
state = todoApp(state, action2);
console.log(state);
state = todoApp(state, action3);
console.log(state);
