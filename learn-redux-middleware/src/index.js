import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import rootReducer from './modules';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(rootReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
