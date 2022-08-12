import { useSelector, useDispatch } from 'react-redux'
import style from './CurrencyArea.module.css'
import {Currency} from './Currency/Currency.jsx'
import { useCallback } from 'react';
import { setActiveField, setValue } from '../../../actions';
export const CurrencyArea = ()=>{
    const date = useSelector(state=>state.date);
    const from = useSelector(state=>state.from);
    const to = useSelector(state=> state.to);
    const dispatch = useDispatch();
    const onChange = useCallback((value, id, rate)=>{
        dispatch(setValue(value));
        dispatch(setActiveField(id, rate))
    },[])
    
    // const convert = (value, toRate='', fromRate='')=>{
    //     if(!value||!toRate||!fromRate) return '1'
    //     return Math.round((+value) * fromRate/toRate * 1000)/1000 
    // }
    return (
        <div className={style.currencyArea}>
            <h1>Exchange Rate</h1>
            <Currency id={'from'} type={from} onChange={onChange}/>
            <Currency id={'to'} type={to} onChange={onChange}/>
            <h2>
                *Exchange rates are as per the - <a href="http://www.cbr.ru" target={"_blank"} rel={"noreferrer"}>http://www.cbr.ru</a>
            </h2>
            <h3>Updated on {date}</h3>
        </div>
    )
}