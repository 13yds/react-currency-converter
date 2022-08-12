import { useSelector, useDispatch } from 'react-redux'
import style from './CurrencyArea.module.css'
import {Currency} from './Currency/Currency.jsx'
import { useCallback } from 'react';
import { setActiveField, setValue, setCurrency} from '../../../actions';
export const CurrencyArea = ()=>{
    const date = useSelector(state=>state.date);
    const from = useSelector(state=>state.from);
    const to = useSelector(state=> state.to);
    const dispatch = useDispatch();
    const onChange = useCallback((value, id, rate)=>{
        value = value<0?0:value;
        dispatch(setValue(value));
        dispatch(setActiveField(id, rate))
    },[])
    const onSelectCurrency = useCallback((currency, isFrom)=>{
        dispatch(setCurrency(currency, isFrom))
    },[])
    return (
        <div className={style.currencyArea}>
            <h1>Exchange Rate</h1>
            <Currency id={'from'} type={from} onChange={onChange} onSelectCurrency={onSelectCurrency}/>
            <Currency id={'to'} type={to} onChange={onChange} onSelectCurrency={onSelectCurrency}/>
            <h2>
                *Exchange rates are as per the - <a href="https://openexchangerates.org" target={"_blank"} rel={"noreferrer"}>https://openexchangerates.org</a>
            </h2>
            <h3>Updated on {date}</h3>
        </div>
    )
}