import React from 'react'

function Filter_input(props) {
    return (
        <>
            <section className={`flex ml-2 ${props.className}` }>
                <input className='cursor-pointer' onChange={props.change} value={props.title} type="radio" name={props.name}/><h1 className='ml-1.5 font-semibold'>{props.title}</h1>
            </section>
        </>
    )
}

export default Filter_input