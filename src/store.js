import { legacy_createStore } from 'redux';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// createAction
const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// const reducer = (state = [], action) => {
//   console.log(action);
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];

//     case deleteToDo.type:
//       const cleaned = state.filter((todo) => todo.id !== action.payload);
//       return cleaned;

//     default:
//       return state;
//   }
// };

// createReducer
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
});

const store = legacy_createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
