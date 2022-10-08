import React from 'react'
import {TaskAlt} from "@mui/icons-material"
import {Button} from "@mui/material"

import { useSelector, useDispatch } from "react-redux"
import {useNavigate} from "react-router-dom"
import { Transfer } from '../Redux/Edite_and_delete'

function Card(props) {

    const navigate=useNavigate()

    const dispatch = useDispatch()

    function handleclick(){
        dispatch(Transfer({
            starting_date:props.time,
            title:props.title,
            Level:props.level,
            desc:props.desc,
            image:props.image,
            time_title:props.time_title,
            situation:props.situation,
            time:props.time,
        }))
        navigate("/Edit")
    }


    return (
        <>
            <div className='w-[310px] h-[450px] bg-white rounded-2xl space-y-8 mt-20 cursor-pointer' onClick={handleclick}>
                <img className='' src={props.image} />
                <div className='grid space-y-5 text-center'>
                    <div className={`w-20 h-5 rounded-md bg-yellow-100 justify-self-center ${props.bgclass}`}>
                        <h1 className={`mt-[-2.5px] font-bold text-black ${props.colorclass}`}>{props.situation}</h1>
                    </div>
                    <h1 className='justify-self-center text-xl w-64 font-bold'>{props.title}</h1>
                    <h1 className='justify-self-center '>{props.time_title}</h1>
                    <h1 className='text-xl'>{props.time}</h1>
                    <div>
                   <Button 
                   color="success"
                   variant='contained' 
                   sx={{width:190,height:42,borderRadius:4}}startIcon={<TaskAlt/>}>Participate Now</Button>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Card