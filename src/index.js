import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import App from './app';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

const store = legacy_createStore(rootReducer, composeWithDevTools()); // 스토어 만들기
// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // Provider 로 store 를 넣어서 App 을 감싸게 되면 렌더링 하는 그 어떤 컴포넌트던지 리덕스 스토어에 접근 할 수 있게 된다.
  <Provider store={store}>
    <App />
  </Provider>
);
