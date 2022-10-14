import React from 'react'
import Countup from './countup'
function Achievement(props) {
  return (
    <>
      <div className='sm:flex text-white pl-4 sm:pl-10 md:pl-16 lg:pl-28'>
        <img className='w-16 ' src={props.img} alt={props.alt} />
        <div className='sm:ml-3 mt-1 sm:mt-0'>
          <h1 className='text-2xl font-bold'><Countup end={props.achive}/>{props.quentitiy}+</h1>
          <h1 className=''>{props.title}</h1>
        </div>
      </div>
    </>
  )
}

export default Achievement