import React,{useState} from 'react'
import Filter_input from './filter_input'
import {useDispatch,useSelector} from "react-redux"
import {Filters} from "../Redux/Admin_Panel"
import {Sorting} from "../Redux/Admin_Panel"
function Sort() {
    const Hackathon_data=useSelector((state)=>{
        return state.Admin.hackathon_data
    })
    const dispatch=useDispatch();
    const [checking,setchecking]=useState();
    function handlechange(e) {
        const sorting=e.target.value
        if(e.target.checked==true && sorting==checking){
          e.target.checked=false;
          setchecking()
          dispatch(Filters("All"))
        }
        else{
            dispatch(Sorting(e.target.value))
            setchecking(e.target.value)
        }
    }
    return (
        <>

            <h1 className='text-4xl font-bold mt-8 ml-1'>Sort</h1>
            <div className='mt-2.5 flex space-x-10'>
                <Filter_input change={handlechange} name="sort" title="Newest First" className="text-xl" />
                <Filter_input change={handlechange} name="sort" title="Oldest First" className="text-xl" />
            </div>

        </>
    )
}

export default Sort