import { Button } from './Button/Button'
import {RiNumber0,RiNumber1,RiNumber2,RiNumber3,RiNumber4,RiNumber5,RiNumber6,RiNumber7,RiNumber8,RiNumber9} from 'react-icons/ri'
import {VscCircleFilled} from 'react-icons/vsc'
import {MdClear} from 'react-icons/md'
import {TbLetterC} from 'react-icons/tb'
import style from './ButtonArea.module.css'
export const ButtonArea = (props)=>{
    const icons = [
        {
            component:(params)=><div><RiNumber0 {...params}/><RiNumber0 {...params}/></div>,
            width: 22,
            height: 22
        },
        {component:RiNumber0},
        {component:RiNumber1}, 
        {component:VscCircleFilled, color:'#F63356', width: 16, height: 16}, 
        {component:RiNumber2}, 
        {component:RiNumber3}, 
        {component:RiNumber4}, 
        {component:TbLetterC, isStroke:true, color:'#F63356'},  
        {component:RiNumber5}, 
        {component:RiNumber6}, 
        {component:RiNumber7}, 
        {component:MdClear, color:'#F63356'}, 
        {component:RiNumber8}, 
        {component:RiNumber9}
    ]
    return (
        <div className={style.buttonArea}>
           {icons.map(icon=> <Button key={icon.component.name} icon={icon}/>)}
        </div>
    )
}