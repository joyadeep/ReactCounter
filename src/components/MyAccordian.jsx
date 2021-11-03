import React, { useState } from "react";
const MyAccordian=({question,answer})=>{
    const [bool,setBool] = useState(false)
    return(
        <>
        <div className='row accordian' >
            
            <div className='col-1 sign'  onClick={()=>setBool(!bool)}> {bool?'-':'+'}
            </div>
            <div className='col-11'>
                <div className='row'>
                    <div className='col-12 question '>
                        {question}
                    </div>
                   {bool && <div className='col-12 answer '>{answer}</div>}
                </div>
            </div>
        </div>

        </>
    )

}
export default MyAccordian;