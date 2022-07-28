import style  from "./Button.module.css";
const initIconStyle = (icon)=>
{
    const color = icon.color || `#747474`
    const style = icon.isStroke ? {stroke:color} : {fill:color};
    style.width = icon.width || `32px`;
    style.height = icon.height || `32px`;
    console.log(style)
    return style;
}
export const Button = (props)=>{
    return <button>{props.icon.component({style:initIconStyle(props.icon)})}</button>
}