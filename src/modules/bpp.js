import { createAction, handleActions } from "redux-actions";

//reducers
const INC = 'INC';
const DEC = 'DEC';

export const inc = createAction(INC)
export const dec = createAction(DEC)

const initState = {
  num:100
}

export default handleActions(
  {
    // 비구조화 할당 문법 
    // 리네임이 일어나고 있다.
  //[INC]: (state, action) => ({num:state.num + action.payload}),
  //[INC]: (state, {payload}) => ({num:state.num + payload}),
  [INC]: (state, {payload:data}) => {    
    return {num:state.num + data.a}
  },
  [DEC]: (state, action) => ({num:state.num - 1})
  },
   initState
);


