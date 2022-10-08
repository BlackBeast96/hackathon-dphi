import React,{useRef} from 'react'
import {CloudUpload} from "@mui/icons-material"
function Image(props) {
    const ref=useRef()
    function handleclick(){
        ref.current.click()
    }
    
    
    return (
        <form className='md:pl-20 pl-10 mt-10 '>
            <h1 className='text-lg font-semibold '>Image</h1>
            <input className="hidden" type="file" onChange={props.change} ref={ref}/>
            <img className='mt-4 mb-5 w-80' src={props.url=="" ? props.image:props.url} alt="Image Preview Here"/>
            <div className='mt-3 w-52 h-10 bg text-center bg-[#e8e8eb] font-bold text-xl pt-1 rounded-lg border-2 border-black cursor-pointer' onClick={handleclick}>
                <h1 className='inline'>Upload</h1>
                <CloudUpload sx={{ml:1,mt:-0.5}}/>
            </div>
        </form>
    )
}

export default Image