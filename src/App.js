import React,{ Component } from 'react';
import  BppContainer  from './containers/BppContainer.js';

//       conponents(폴더)  modules(폴더)  containers(폴더)
// src + index.js  (파일)  reducers       connect
//       App.js    (파일)
//       컴포넌트
//       Bpp.js            bpp.js         BppContainer.js(hook)
class App extends Component {
  // f1(x){}
  // f2({a,b}){}
  // f6({payload:data,b}){}
  render() {
    let action = {payload:{a:1,b:2}}
    console.log(action.payload.a);

    let {payload} = {payload:{a:1,b:2}};
    console.log(payload.a);
    
    
    return (
      <div>
          <h1>호랑이</h1>
          <BppContainer/>
      </div>
    );
       
  }
}
export default App;
    //ex6)
    // let {payload:data,b} = {payload:{c:1, d:2}, b:3}
    // console.log(data.c, data.d, b);
    //this.f6({payload:{email:1, d:2}, b:3});
    // ex1)
    // let x = {a:1, b:2};
    // console.log(x.a,x.b);
    //this.f1({a:1,b:2});
    // ex2) 비구조화 할당 문법
    //쌍방향간에 키값이 같아야 한다.
    // let {a, b} = x;
    // console.log(a,b);
    //this.f2(x);
    // ex3)
    // let {a, b} = {a:1, b:2};
    // rename이 일어난다.
    // a는 키로써 비교 대상이고
    // 실제 사용하는 변수는 x
    // let {a:x, b:y} = {a:1, b:2};
    // console.log(x,y);
    
    //ex4)
    // let {a,b} = {a:{c:1, d:2}, b:3}
    // console.log(a.c, a.d, b);
    
    //ex5)
    // let {a:p,b} = {a:{c:1, d:2}, b:3}
    // console.log(p.c, p.d, b);




