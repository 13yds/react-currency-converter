import { useSelector } from 'react-redux/es/exports';
import style from './Currency.module.css'
export const Currency = (props)=>{
    const value = useSelector(state=>state.value);
    const rates = useSelector(state=>state.rates);
    const activeField = useSelector(state=>state.activeField)
    const ratesOptions = Object.keys(rates).map((rate)=> <option key={rate} value={rate}>{rate}</option>);
    let convertedValue = activeField.id === props.id?value:Number((value/activeField.rate * props.type.rate).toFixed(4));
    return(
        <div className={style.currency}>
            <select className={style.title} value={props.type.abbrev} onChange={(e)=>props.onSelectCurrency([e.target.value, rates[e.target.value]],props.id==='from')}>
                {ratesOptions}
            </select>
            <input type="number" value={convertedValue} onChange={(e)=>props.onChange(Number(e.target.value),props.id, props.type.rate)}/>
        </div>
    )
}