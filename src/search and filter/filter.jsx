import React, { useState } from 'react'
import { ArrowDropDown } from "@mui/icons-material"
import { useSelector, useDispatch } from "react-redux"
import { Filters} from "../Redux/Admin_Panel"
import Filter_input from './filter_input'



function Filter(props) {
  const dispatch = useDispatch()

  const [show, setshow] = useState("invisible");
  
  function handleclick() {
    setshow("visible")
  }

  document.addEventListener("dblclick", () => {
    setshow("invisible")
  })

  const data = useSelector((state) =>state.Admin.hackathon_data)

  
  return (
    <>
      <div className='ml-4'>
        <div className='w-28 h-10 bg-white rounded-lg text-black mt-2 font-bold text-2xl flex justify-center cursor-pointer ' onClick={handleclick}>
          <h1 className='mt-0.5' >Filter</h1>
          <ArrowDropDown sx={{ mt: 0.7, ml: 1, visibility: { show } }} />
        </div>
        <section className={`w-32 h-60 rounded-lg bg-white text-black font-bold divide-y absolute pl-2 ${show} mt-0.5 ml-[-22px] sm:ml-0 space-y-2`}>
          <section className='mt-2'>
            <h1>Status</h1>
            <ul className='grid  accent-green-400'>
              <Filter_input title="All" change={props.change} name="status" />
              <Filter_input title="Active" change={props.change} name="status"/>
              <Filter_input title="Upcoming" change={props.change} name="status" />
              <Filter_input title="Past" change={props.change} name="status"/>
            </ul>
          </section>
          <section>
            <h1>Level</h1>
            <ul className='grid accent-green-400'>
              <Filter_input title="Easy" change={props.change} name="status"/>
              <Filter_input title="Medium" change={props.change} name="status"/>
              <Filter_input title="Hard" change={props.change} name="status" />
            </ul>
          </section>
        </section>
      </div>
    </>
  )
}

export default Filter