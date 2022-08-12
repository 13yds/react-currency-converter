import { ADD_SYMBOL, CLEAR_VALUE, REMOVE_LAST_SYMBOL, SET_RATES, SET_CURRENCY, SET_PRELOADER, SET_VALUE, SET_ACTIVE_FIELD } from "../actions"
export const initState = {
    isPreloader: true,
    value: 0,
    activeField: 
    {
        id:0,
        rate:1
    }, 
    date:  new Date().toLocaleDateString().split('.').reverse().join('-'),
    rates:[],
    from: null,
    to: null
}
const converterReducer = (state=initState, action)=>{
    switch(action.type){
        case ADD_SYMBOL:{
            const valueToStr = state.value+"";
            const newValue = valueToStr === '0' && action.symbol!=='.'?action.symbol:valueToStr + action.symbol
            return {...state, value: +newValue}
        }
        case CLEAR_VALUE:{
            return {...state, value:0}
        }
        case REMOVE_LAST_SYMBOL:{
            let valueToStr = state.value+"";
            let newValue = valueToStr.slice(0, state.value.length-1)
            return{...state, value:+newValue||0};
        }
        case SET_RATES:{
            return{...state, rates:action.rates}
        }
        case SET_CURRENCY:{
            const currency = {abbrev:action.currency[0], rate:action.currency[1]};
            if(action.from) return {...state, from:currency};
            return {...state, to:currency}
        }
        case SET_PRELOADER:{
            return {...state, isPreloader:action.isPreloader}
        }
        case SET_VALUE:{
            return {...state, value:action.value}
        }
        case SET_ACTIVE_FIELD:{
            return {...state, activeField:{id:action.id, rate: action.rate}}
        }
        default: return {...state}
    }
}

export default converterReducer;