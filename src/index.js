import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reducers from './modules/bpp';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import { Provider} from 'react-redux';
import App from './App';


const store = createStore(reducers);
ReactDOM.render(

   <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

//변경 후
// const store = createStore(reducers);

// //redux,react-redux
// const listener = () => {
//   ReactDOM.render(  
//     <App Store={store}/>,
  
//   document.getElementById('root')
// );}
// store.subscribe(listener);
// listener();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
