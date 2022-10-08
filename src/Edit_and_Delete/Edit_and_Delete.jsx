import React from 'react'
import { AccessTime } from "@mui/icons-material"
import { Button } from '@mui/material'
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {Remove} from "../Redux/Admin_Panel"
function Edit_and_Delete(props) {

  const dispatch=useDispatch()
  const Transfer_Data=useSelector((state)=>{
    return state.Transfer.Transfer_Data
  })


  const navigate=useNavigate()

  function handleclick(){
    navigate("/Admin")
  }

  function RemoveData(e){
    dispatch(Remove(Transfer_Data.title))
    navigate("/");
  } 


  return (
    <>
      <div className='bg-[#003145] text-white pt-20 pl-10 lg:pl-28 space-y-10 pb-20 '>
        <div className='bg-[#FFCE5C] h-8 mr-20 md:mr-20 text-black md:w-[36vw] rounded-md font-bold pl-5 pt-0.5'>
          <AccessTime />
          <h1 className='inline ml-2 pt-10'>{Transfer_Data.time_title} {Transfer_Data.starting_date} (India Standard Time)</h1>
        </div>
        <h1 className='text-5xl font-semibold'>{Transfer_Data.title}</h1>
        <h1 className='font-bold text-xl'>Identify the class to which each {Transfer_Data.title.slice(16,224)} belongs to</h1>
        <div className='bg-white text-[#003145] flex w-28 justify-center rounded-md'>
          <img src="./icons/Skill.svg" alt="hardness level" />
          <h1 className='ml-2 text-lg font-bold'>{Transfer_Data.Level}</h1>
        </div>
      </div>
      <div className='grid grid-cols-2 mt-4 pl-10 sm:pl-20 md:pl-44 pb-2 border-b-4 shadow-2xl border-[#DDE6ED]'>
        <h1 className='text-2xl font-bold underline decoration-4 decoration-[#44924C] underline-offset-[0.9rem] pt-2'>Overview</h1>
        <div className='xl:ml-80 lg:ml-56 md:ml-20 flex space-x-4'>
          <Button variant="contained" color="success" size="large" sx={{ borderRadius: 2 }} onClick={handleclick}>Edit</Button>
          <Button variant="outlined" color="error" size="large" sx={{ borderRadius: 2 }} onClick={RemoveData}>Delete</Button>
        </div>
      </div>
      <div className="mt-6 flex ml-10 mr-10 justify-center lg:ml-28 lg:mr-80 font-bold text-xl font-sans text-[#64607D] mb-20">
        <h1>{Transfer_Data.desc}</h1>
      </div>
    </>
  )
}

export default Edit_and_Delete