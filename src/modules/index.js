// 루트 리듀서
// 현재 두개의 리덕스 모듈을 만들었다. 그래서 리듀서도 2개.
// 한 프로젝트에 여러개의 리듀서가 있을 때는 이를 한 리듀서로 합쳐서 사용한다. 이때 합쳐진 리듀서를 루트 리듀서라고 한다.
// 리듀서를 합치는 작업은 리덕스에 내장 되어 있는 combineReducers 라는 함수를 사용한다.

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
