import { Button } from './Button/Button'
import style from './ButtonArea.module.css'
import { buttonsProps } from '../../../buttons'
import { useMemo } from 'react'
export const ButtonArea = (props)=>{
    const buttons = useMemo(()=>buttonsProps,[])
    return (
        <div className={style.buttonArea}>
           {buttons.map(props=> <Button key={props.component.name} {...props}/>)}
        </div>
    )
}