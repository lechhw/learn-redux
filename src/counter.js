import { legacy_createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// Reducer: store의 상태를 없데이트 하는 함수. 액션을 받아 스토어 변경 작업 실행
// return 하는 값이 application의 state 가 됨.

number.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;

    default:
      return count;
  }
};

// Store: application 의 state 를 관리하는 공간. 하나의 애플리케이션 안에는 하나의 스토어만 만들어서 사용한다. 여러개의 스토어를 만들수는 있으나 권장되지 않음.
const countStore = legacy_createStore(countModifier);

// Subscribe: 스토어의 내장 함수 중 하나이고, 리스너 함수를 파라미터로 넣어 호출하면 상태가 업데이트될 때마다 호출된다. 일종의 이벤트 리스너라고 볼 수 있다.
const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

// Action: 앱에서 스토어에 전달할 데이터를 말한다. 리듀서에 처리해야 할 작업의 이름과 데이터가 객체 형태로 전달. type필드를 반드시 가지고 있어야 한다.
// action 을 reducer 에 전달하기 위해선 dispatch()메서드를 사용해야한다.
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
import { legacy_createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// Reducer: store의 상태를 없데이트 하는 함수. 액션을 받아 스토어 변경 작업 실행
// return 하는 값이 application의 state 가 됨.

number.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;

    default:
      return count;
  }
};

// Store: application 의 state 를 관리하는 공간. 하나의 애플리케이션 안에는 하나의 스토어만 만들어서 사용한다. 여러개의 스토어를 만들수는 있으나 권장되지 않음.
const countStore = legacy_createStore(countModifier);

// Subscribe: 스토어의 내장 함수 중 하나이고, 리스너 함수를 파라미터로 넣어 호출하면 상태가 업데이트될 때마다 호출된다. 일종의 이벤트 리스너라고 볼 수 있다.
const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

// Action: 앱에서 스토어에 전달할 데이터를 말한다. 리듀서에 처리해야 할 작업의 이름과 데이터가 객체 형태로 전달. type필드를 반드시 가지고 있어야 한다.
// action 을 reducer 에 전달하기 위해선 dispatch()메서드를 사용해야한다.
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
