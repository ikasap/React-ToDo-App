import { GET_ALL_TODOS, ADD_NEW_TODO, REMOVE_TODO, COMPLETE_TODO, TODO_SHOW_HIDE } from '../constants';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getAllToDoItems = () => {
  return async (dispatch) => {
    const response = await fetch(`${baseUrl}/todos`);
    const json = await response.json();
    return dispatch({ 
      type: GET_ALL_TODOS, 
      items: json.filter(f=> f.id <= 10)
    });
  }
}

export const addNewToDoItem = (title, completed) => {
  return async (dispatch) => {
    const response = await fetch(`${baseUrl}/todos`, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        completed: completed
      })
    });
    const json = await response.json();
    return dispatch({
      type: ADD_NEW_TODO,
      id: json.id,
      title,
      completed
    })
  }
}

export const removeToDoItem = (id) => {
  return async (dispatch) => {
    await fetch(`${baseUrl}/todos/${id}`, {method: 'DELETE' });
    return dispatch({
      type: REMOVE_TODO,
      id
    });
  }
}

export const completeToDoItem = (id) => {
  return {
    type: COMPLETE_TODO,
    id
  }
}

export const toDoShowHide = (showHide) => {
  return {
    type: TODO_SHOW_HIDE,
    showHide
  }
} 