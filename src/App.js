import React from 'react';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

let tasks = [
  {
    todo: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    todo: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  toggleTodo  = todoId => {
    console.log(todoId);
    this.setState({
      tasks: this.state.tasks.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    })
  }

  addTodo = todo => {
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTodo]
    });
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(todo => !todo.completed)
    });
  }

  render() {
    return (
      <div>
        <TodoList 
          tasks={this.state.tasks}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted} />
        <TodoForm 
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted} />
      </div>
    );
    
  }
}

export default App;
