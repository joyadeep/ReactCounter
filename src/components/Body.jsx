import React, { useState } from "react";
// import AddRoundedIcon from '@mui/icons-material/AddRounded';
const Body=()=>{

    const [num,setNum]=useState(0);
    const add=()=>
    {
        setNum(num+1);
    }
    const sub=()=>{
        if((num-1)<0)
        {
            return    alert('cannot decrease less than 0. contact dev to enable it.')
        }
        setNum(num-1);
        
    }

    return(
        <>
        <div className='container'>
            <div className='row '>
                <div className='col-4 body-col mx-auto'>
<div className='num'>{num}</div>
                </div>
            </div>
            <div className='row'>
                <div className=' col-12 '>
                <div className='buttons'>
                    <div className='add btn btn-success' onClick={add}>+ </div>
                    <div className='sub btn btn-danger' onClick={sub}>- </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Body;