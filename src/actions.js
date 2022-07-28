
export const ADD_SYMBOL = 'ADD-SYMBOL';
export const CLEAR_VALUE = 'CLEAR-VALUE';
export const REMOVE_LAST_SYMBOL = 'REMOVE-LAST-SYMBOL';
export const clearValue = ()=>{
    return {type:CLEAR_VALUE}
}
export const removeLastSymbol = ()=>{
    return {type:REMOVE_LAST_SYMBOL}
}
export const addSymbol = (symbol)=>{
    return {type:ADD_SYMBOL, symbol}
}