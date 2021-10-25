import { useDispatch, useSelector } from "react-redux";
import Bpp from "../component/Bpp";
import { dec, inc } from "../modules/bpp";


// hook
const BppContainer = () => {
    const num = useSelector(state => state.num);
    const dispatch = useDispatch();
    return (
      <Bpp 
        num={num}
        onInc = {(n)=>dispatch(inc(n))}
        onDec = {()=>dispatch(dec())}
      />
    )
  }

export default BppContainer;

// Bpp.js
// 수정전
// <button onClick={this.props.onInc}>증가</button> 
// 수정후
// <button onClick={ () =>{this.props.onInc(100)}}>증가</button>

//BppContainer
//수정 전
//onInc = {()=>dispatch(inc())}
//수정 후
//onInc = {(n)=>dispatch(inc(n))}