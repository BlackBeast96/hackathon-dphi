import React, { useState } from 'react'
import Inputval from './inputval'
import { Button } from "@mui/material"
import Description from './Description'
import Level from './Level_Type'
import Image from './image'
import { Add } from "../Redux/Admin_Panel"
import { useSelector, useDispatch } from "react-redux"
function Edite() {

    const dispatch = useDispatch()
    const data = useSelector((state) => {
        return state.Admin.hackathon_data
    })

    const Transfer_Data = useSelector((state) => {
        return state.Transfer.Transfer_Data
    })

    const [imageurl, setimageurl] = useState("")
    const [Challenge, setChallenge] = useState({
        id: data.length + 1,
        situation: "Upcoming",
        image: Transfer_Data.image,
        title: Transfer_Data.title,
        time_title:"Starts in",
        time:Transfer_Data.time,
        desc: Transfer_Data.desc,
        level: Transfer_Data.Level,
        End_Date:"",
    })

    function Submite() {
        if(Challenge.time>Challenge.End_Date){
            alert("starting time is not greater than end time")
        }
        else if(Challenge.time!=Transfer_Data.time && Challenge.End_Date!=""){
            dispatch(Add(Challenge))
            alert("challenge created")
        }
        else{
            alert("change starting and ending time")
        }
    }

    function imageSelect(e) {
        const image = URL.createObjectURL(e.target.files[0]);
        setimageurl(image)
        setChallenge({ ...Challenge, image })
    }

    const [title, settitle] = useState(null);
    const [desc, setdesc] = useState(null);
    const [level, setlevel] = useState("");
    return (
        <div className='mt-20 '>
            <h1 className='font-bold text-3xl w-full h-20 bg-[#F8F9FD] pl-10 md:pl-20 pt-5' >Challenge Details</h1>

            <Inputval inputvalue={
                title == null? Transfer_Data.title : title
            } change={(e) => {
                settitle(e.target.value)
                setChallenge({ ...Challenge, title: e.target.value 
            })
            }} name="Challenge Name" type="text" />

            <Inputval change={(e) => { setChallenge({ ...Challenge, time: e.target.value }) }} name="Start Date" type="Date" />

            <Inputval change={(e) => { setChallenge({ ...Challenge, End_Date: e.target.value }) }} name="End Date" type="Date" />

            <Description Desvalue={
                desc == null ? Transfer_Data.desc : desc
            } change={(e) => {
                setdesc(e.target.value)
                setChallenge({ ...Challenge, Description: e.target.value })
            }} />

            <Image image={Transfer_Data.image} url={imageurl} change={imageSelect} />

            <Level level={level == "" ? Transfer_Data.Level : level} change={(e) => {
                setlevel(e.target.value)
                setChallenge({ ...Challenge, level: e.target.value })
            }
            } />

            <Button variant="contained" sx={{ ml: 9, mt: 6, mb: 10 }} onClick={Submite}>Create Challenge</Button>
        </div>
    )
}

export default Edite