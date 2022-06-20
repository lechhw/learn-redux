import { legacy_createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

// Action creator: 액션 생성함수는 액션 객체를 만들어주는 함수이다. (보통 reducer 함수 위에서 선언한다.)
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state]; //기존의 배열은 수정하지 않고 새로운 배열을 만들어서 교체하는 방식으로 업데이트.
    case DELETE_TODO:
      const cleaned = state.filter((toDo) => toDo.id !== action.id); // filter() 는 새로운 배열을 리턴한다.
      return cleaned;
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';

  toDos.forEach((todo) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = 'DEL';
    btn.addEventListener('click', dispatchDeleteToDo);
    li.id = todo.id;
    li.innerText = todo.text;
    ul.appendChild(li);
    li.appendChild(btn);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = '';
  dispatchAddToDo(todo);
};

form.addEventListener('submit', onSubmit);
