import logo from './logo.svg';
import './App.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import {createAction, handleActions } from 'redux-actions';
import BppContainer from './containers/BppContainer';

// src +
//    index.js(파일)
//    app.js(파일)
//    components(폴더) : Bpp.js(컴포넌트)
//    modules(폴더)    : bpp.js (리듀스)
//    containers(폴더) : BppContainer.js (컨넥트(hook:state + dispatch + connect))


class App extends Component {
  render() {
    return (
      <div>
         <h1>호랑이</h1>
         <BppContainer/>         

      </div>
    )    
  } 


}
export default App;


//dispatch


//store <<----- num :101
// const ConnectBpp = connect(
//   state => ({num:state.num}),
//   dispatchToProps =>bindActionCreators({  
//     onInc:inc,
//     onDec:dec
//   },dispatch) 
// )(Bpp);


// const ConnectBpp = connect(
//   state => ({num:state.num}),
//   {
//     onInc:inc,
//     onDec:dec
//   }
// )(Bpp);

