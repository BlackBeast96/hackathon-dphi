import React from 'react'

function Skill_Card(props) {
  return (
    <>
    <div className='w-[64vw] lg:w-[420px] h-[276px] bg-[#F8F9FD] rounded-xl space-y-5 md:pl-8 md:pr-12 mt-12'>
        <img className='' src={props.img} alt={props.alt}/>
        <h1 className='text-3xl font-bold'>{props.title}</h1>
        <h1 className='font-bold text-[#64607D] text-lg'>{props.desc}</h1>
    </div>
    </>
  )
}

export default Skill_Card