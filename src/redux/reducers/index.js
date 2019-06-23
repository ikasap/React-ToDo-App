import { GET_ALL_TODOS, ADD_NEW_TODO, REMOVE_TODO, COMPLETE_TODO, TODO_SHOW_HIDE } from '../constants';

const ToDoItem = (action) => {
  let{id, title, completed} = action;
  return { 
    id: (id + Math.random()), 
    title, 
    completed 
  };
}

const Reducer = (state = {items: [], showHide: false, changeId: 0}, action) => {  
  switch (action.type) {
    case GET_ALL_TODOS:
      return {
        ...state, items: action.items
      }
    case ADD_NEW_TODO:
      return {
        ...state, items: [...state.items, ToDoItem(action)]
      }
    case REMOVE_TODO:
      return {
        ...state, items: state.items.filter(f=> f.id !== action.id)
      }
    case COMPLETE_TODO: {
      let items = state.items;
      items.find(f=> f.id === action.id).completed = true;
      state.changeId= Math.random();
      return {
        ...state
      }
    }
    case TODO_SHOW_HIDE: {
      return {
        ...state, showHide: action.showHide
      }
    }
    default:
      return state;
  }
}

export default Reducer;