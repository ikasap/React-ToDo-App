import React from 'react';
import CAddToDo from './AddToDo';
import CToDoList from './ToDoList';
import './ToDo.css';

class ToDo extends React.Component {
  state = {
    todos: [],
    show: false
  }
  fAddToDoItem = (item) => {
    item.id = Math.random();
    let todos = [...this.state.todos, item];
    this.setState({
      todos
    });
  }
  fDoneToDo = (itemId) => {
    let todos = this.state.todos;
    todos.find(f=> f.id === itemId).isDone = 1;
    this.setState({
      todos
    });
  }
  fDeleteToDo = (itemId) => {
    let todos = this.state.todos.filter(f=> f.id !== itemId);
    this.setState({
      todos
    });
  }
  fShowHide = () => {
    this.setState({
      show: !(this.state.show === true)
    });
  }
  render() {
    let title = this.props.pTitle != null ? <div className="text-center"><h3>{this.props.pTitle}</h3></div> : null;
    return (
      <div className="pt-5">
          { title }
          <CAddToDo pAddTodo={ this.fAddToDoItem } />
          <CToDoList pToDoItems={ this.state.todos } pDoneToDo={ this.fDoneToDo } pDeleteToDo={ this.fDeleteToDo } pShowHide={ this.fShowHide } pShowHideValue={ this.state.show} />
      </div>
    );
  }
}
  
export default ToDo;