import React from 'react'
function Filter_Chip(props) {
  return (
    <div className='w-24 h-10 bg-[#F8F9FD7D] rounded-2xl mt-5 text-center' >
        <h1 className=' inline-block text-lg font-bold mt-1 cursor-pointer' onClick={props.click}>{props.situation}</h1>
        
    </div>
  )
}

export default Filter_Chip