import {RiNumber0,RiNumber1,RiNumber2,RiNumber3,RiNumber4,RiNumber5,RiNumber6,RiNumber7,RiNumber8,RiNumber9} from 'react-icons/ri'
import {VscCircleFilled} from 'react-icons/vsc'
import {MdClear} from 'react-icons/md'
import {TbLetterC} from 'react-icons/tb'
import { addSymbol, clearValue, removeLastSymbol } from './actions'
export const buttonsProps = [
    {
        component:(params)=><div><RiNumber0 {...params}/><RiNumber0 {...params}/></div>, 
        action: addSymbol('00'),
        width: 22,
        height: 22
    },
    {
        component:RiNumber0, 
        action: addSymbol('0')
    },
    {
        component:RiNumber1, 
        action: addSymbol('1')
    }, 
    {
        component:VscCircleFilled, 
        color:'#F63356', 
        width: 16, 
        height: 16, 
        action:addSymbol('.')}, 
    {
        component:RiNumber2, 
        action: addSymbol('2')}, 
    {
        component:RiNumber3, 
        action: addSymbol('3')}, 
    {
        component:RiNumber4, 
        action: addSymbol('4')}, 
    {
        component:TbLetterC, 
        isStroke:true, 
        color:'#F63356', 
        action:clearValue()},  
    {
        component:RiNumber5, 
        action: addSymbol('5')}, 
    {
        component:RiNumber6, 
        action: addSymbol('6')}, 
    {
        component:RiNumber7, 
        action: addSymbol('7')}, 
    {
        component:MdClear, 
        color:'#F63356', 
        action:removeLastSymbol()}, 
    {
        component:RiNumber8, 
        action: addSymbol('8')}, 
    {
        component:RiNumber9, 
        action: addSymbol('9')
    }
]