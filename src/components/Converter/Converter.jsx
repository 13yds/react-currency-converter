import { useReducer } from 'react'
import { converterReducer, initState } from '../../reducer/converter-reducer.js'
import { ButtonArea } from './ButtonArea/ButtonArea.jsx'
import style from './Converter.module.css'
export const Converter = (converterReducer)=>{
    // const [state, dispatch] = useReducer(converterReducer, initState)
    return (
        <div className={style.converter}>
            <header>

            </header>
            <footer>
                <ButtonArea />
            </footer>
        </div>
    )
}