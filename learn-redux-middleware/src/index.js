import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore } from 'redux';
import rootReducer from './modules';
import myLogger from './middlewares/myLogger';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(rootReducer, applyMiddleware(myLogger));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
