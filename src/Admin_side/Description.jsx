import React from 'react'

function Description(props) {
  return (
    <div className='md:pl-20 pl-10'>
        <h1 className='mt-10 text-lg font-semibold'>Description</h1>
        <textarea value={props.Desvalue} onChange={props.change}  className='border-2 border-black rounded-lg 
        lg:w-[55rem] w-[80vw] h-52 mt-3 overflow-y-scroll pl-2 pr-2 pt-2' rows={4}/>
    </div>
  )
}

export default Description