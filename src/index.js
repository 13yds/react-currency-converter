import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import converterReducer from './reducer/converter-reducer';
import { combineReducers } from 'redux';
import { Converter } from './components/Converter/Converter';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({reducer:converterReducer})
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Converter />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
