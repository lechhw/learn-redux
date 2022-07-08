import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore } from 'redux';
import rootReducer from './modules';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(
  rootReducer,

  // logger 를 사용 할 경우, logger가 가장 마지막에 와야 한다.
  composeWithDevTools(applyMiddleware(ReduxThunk, logger)) // 여러개의 미들웨어를 적용할 수 있다.
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
