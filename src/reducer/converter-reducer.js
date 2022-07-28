import { ADD_SYMBOL, CLEAR_VALUE, REMOVE_LAST_SYMBOL } from "../actions"
export const initState = {
    value: "0",
    currencies:{
        from:null,
        to: null
    }
}
const converterReducer = (state=initState, action)=>{
    switch(action.type){
        case ADD_SYMBOL:{
            const newValue = state.value === '0' && action.symbol!=='.'?action.symbol:state.value + action.symbol
            return {...state, value: newValue}
        }
        case CLEAR_VALUE:{
            return {...state, value:"0"}
        }
        case REMOVE_LAST_SYMBOL:{
            let newValue = state.value.slice(0, state.value.length-1)
            return{...state, value:newValue||'0'};
        }
        default: return {...state}
    }
}

export default converterReducer;