import React from 'react'

function Level(props) {
  return (
    <>
      <div className='md:pl-20 pl-10 mt-10 '>
        <h1 className='text-lg font-semibold inline'>Level Type</h1>
        <select value={props.level} onChange={props.change} className='block w-52 h-10 border-2 border-black rounded-lg font-bold mt-3 pl-2'>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>
    </>
  )
}

export default Level