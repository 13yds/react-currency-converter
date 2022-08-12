import { useDispatch, useSelector } from 'react-redux'
import { getCurrencies } from '../../actions.js'
import { CurrencyArea } from './CurrencyArea/CurrencyArea.jsx'
import { useEffect } from 'react'
import { Preloader } from '../Preloader/Preloader.jsx'
import style from './Converter.module.css'
export const Converter = ()=>{
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