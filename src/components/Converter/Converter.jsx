import { useDispatch, useSelector } from 'react-redux'
import { getCurrencies } from '../../actions.js'
import { converterReducer, initState } from '../../reducer/converter-reducer.js'
import style from './Converter.module.css'
import { CurrencyArea } from './CurrencyArea/CurrencyArea.jsx'
import { useEffect } from 'react'
import { Preloader } from '../Preloader/Preloader.jsx'
export const Converter = (converterReducer)=>{
    const isPreloader = useSelector(state=> state.isPreloader)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrencies())
    }, []);
    return (
        <>
            {isPreloader?<Preloader/>:
                <div className={style.converter}>
                    <CurrencyArea/>
                </div>
                }
        </>
    )
}