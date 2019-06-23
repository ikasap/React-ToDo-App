import React from 'react';
import CAddToDo from './AddToDo';
import CToDoList from './ToDoList';
import './ToDo.scss';
import { connect } from 'react-redux';
import { getAllToDoItems, addNewToDoItem, removeToDoItem, completeToDoItem, toDoShowHide } from '../../redux/actions';


class ToDo extends React.Component {
  componentDidMount() {
    this.props.onGetAllToDoItems();
  }
  fAddToDoItem = (item) => {
    this.props.onAddNewToDoItem(item.title, false);
  }
  fDoneToDo = (itemId) => {
    this.props.onCompleteToDoItem(itemId);
  }
  fDeleteToDo = (itemId) => {
    this.props.onRemoveTodoItem(itemId);
  }
  fShowHide = () => {
    this.props.onToDoShowHide(!this.props.showHide);
  }
  render() {
    let title = this.props.pTitle != null ? <div className="text-center"><h3>{this.props.pTitle}</h3></div> : null;
    return (
      <div className="pt-5">
          { title }
          <CAddToDo pAddTodo={ this.fAddToDoItem } />
          <CToDoList pToDoItems={ this.props.items } pDoneToDo={ this.fDoneToDo } pDeleteToDo={ this.fDeleteToDo } pShowHide={ this.fShowHide } pShowHideValue={ this.props.showHide } pChangeId={ this.props.changeId } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    showHide: state.showHide,
    changeId: state.changeId
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onGetAllToDoItems: () => dispatch(getAllToDoItems()),
    onAddNewToDoItem: (title, completed) => dispatch(addNewToDoItem(title, completed)),
    onRemoveTodoItem: (id) => dispatch(removeToDoItem(id)),
    onCompleteToDoItem: (id) => dispatch(completeToDoItem(id)),
    onToDoShowHide: (showHide) => dispatch(toDoShowHide(showHide))
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ToDo);