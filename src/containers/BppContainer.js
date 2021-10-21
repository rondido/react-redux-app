import { connect,useSelector,useDispatch } from "react-redux";
import Bpp from '../components/Bpp';
import {inc,dec} from '../modules/bpp'

//hooks
const BppContainer = ()=>{
    const num = useSelector(state => state.num);
    const dispatch = useDispatch();
    return(
      <Bpp num={num}
      onInc={()=>dispatch(inc())}
      onDec={()=>dispatch(dec())}
      />
    )
  };
export default BppContainer;