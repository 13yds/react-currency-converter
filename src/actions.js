import { getCurrenciesReq } from "./api/request";
export const ADD_SYMBOL = 'ADD-SYMBOL';
export const CLEAR_VALUE = 'CLEAR-VALUE';
export const REMOVE_LAST_SYMBOL = 'REMOVE-LAST-SYMBOL';
export const GET_CURRENCIES = 'GET-CURRENCIES';
export const SET_RATES = 'SET-RATES';
export const SET_CURRENCY = 'SET-CURRENCY';
export const SET_PRELOADER = 'SET-PRELOADER';
export const SET_VALUE = 'SET-VALUE';
export const SET_ACTIVE_FIELD = 'SET-ACTIVE-FIELD';
export const clearValue = ()=>{
    return {type:CLEAR_VALUE}
}
export const removeLastSymbol = ()=>{
    return {type:REMOVE_LAST_SYMBOL}
}
export const addSymbol = (symbol)=>{
    return {type:ADD_SYMBOL, symbol}
}
export const setRates = (rates)=>{
    return {type:SET_RATES, rates}
}
export const getCurrencies = ()=>async(dispatch)=>{
    const json = await getCurrenciesReq();
    const rates = json.rates;
    const [from, to] = Object.entries(rates);
    dispatch(setRates({...rates}))
    dispatch(setCurrency(from, true));
    dispatch(setCurrency(to));
    dispatch(setPreloader());
}
export const setCurrency = (currency, from=false)=>{
    return {type:SET_CURRENCY, currency, from}
}
export const setPreloader = (isPreloader=false)=>{
    return {type:SET_PRELOADER, isPreloader}
}
export const setActiveField = (id,rate)=>{
    return {type:SET_ACTIVE_FIELD, id, rate};
}
export const setValue = (value)=>{
    return {type:SET_VALUE, value}
}