import style  from "./Button.module.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setValue } from "../../../../reducer/converter-reducer";
import { useCallback, useEffect } from "react";
const initIconStyle = (props)=>
{
    const color = props.color || `#747474`
    const style = props.isStroke ? {stroke:color} : {fill:color};
    style.width = props.width || `32px`;
    style.height = props.height || `32px`;
    return style;
}
export const Button = (props)=>{
    const dispatch = useDispatch();
    const onClick = useCallback(()=> dispatch(props.action),[])
    return <button onClick={onClick}>{props.component({style:initIconStyle(props)})}</button>
}