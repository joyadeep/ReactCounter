import React,{useState} from 'react'
import {Data} from '../api/Data';
import MyAccordian from './MyAccordian';
const Accordian=()=>
{
    const [state, setstate] = useState(Data);
    return(
        <>
        <div className='col-md-6 mx-auto maincontainer'> 
        <div className='head'>React Interview Questions</div>
       {
         
           state.map((data,id)=>
           {
               return(
                   
               <MyAccordian key={id} {...data}/>
              
               )
           })
       }
        </div>

      
        </>
    )
}
export default Accordian;