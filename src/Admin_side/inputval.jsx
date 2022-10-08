import React from 'react'

function Inputval(props) {
  return (
    <div className='md:pl-20 pl-10 pr-20'>
        <h1 className='mt-10 text-lg font-semibold'>{props.name}</h1>
        <input value={props.inputvalue} onChange={props.change} className={`border-2 rounded-md border-black mt-3 w-full md:w-[28rem] h-12 pl-2 pr-2 ${props.className} `} placeholder={props.placeholder}  type={props.type}/>
    </div>
  )
}



export default Inputval