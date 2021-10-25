import React, { Component } from "react";

class Bpp extends Component {
    render() {
      return (
        <div>
          <h1>아리</h1>
          <h1>{this.props.num}</h1>
        {/* <button onClick={this.props.onInc}>증가</button> */}
        {/* <button onClick={ () =>{this.props.onInc(100)}}>증가</button> */}
        <button onClick={ () =>{this.props.onInc({a:10,b:20})}}>증가</button>
        </div>
      );
    }
}

export default Bpp;
// Bpp.js
// 수정전
// <button onClick={this.props.onInc}>증가</button> 
// 수정후
// <button onClick={ () =>{this.props.onInc(100)}}>증가</button>