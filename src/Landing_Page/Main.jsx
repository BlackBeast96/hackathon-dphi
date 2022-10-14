import React from 'react'
import Paticiapte_main from '../why_participate_in_ai_challenges/paticiapte_main'
import Achievement from './Achievement'
import {useNavigate} from "react-router-dom"
function Main() {
  const navigate=useNavigate();
  function handleclick(){
    navigate("/Admin")
  }
  return (
    <>
      <div className="bg-[#003145] flex pt-28 pb-20 ">
        <div className='w-4 lg:w-2.5 mt-64 ml-6 invisible lg:ml-36 md:mt-0 md:visible md:relative h-28  bg-yellow-400'></div>
        <div className='pt-64 md:pt-0 space-y-14 md:ml-10 text-white'>
          <h1 className='lg:w-[50vw] text-6xl sm:w-[80vw] md:w-[50vw] font-bold'>Accelerate Innovation with Global AI Challenges</h1>
          <h1 className='text-2xl lg:w-[35rem]'>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</h1>
          <button className="bg-white text-[#074c68] font-bold text-lg rounded-lg h-12 pl-3 pr-3" onClick={handleclick}>Create Challenge</button>
        </div>
        <img className='absolute md:relative mt-[-7.5rem] md:mt-[-16rem] lg:mt-[-2rem] md:w-[29rem] ml-[1vw] sm:ml-[24vw] md:ml-0' src="./icons/rocket.svg" alt="rocket svg image" />
      </div>
      <div className='bg-[#002A3B] pt-16 pb-16 grid grid-cols-3 pl-4 sm:pl-0 sm:divide-x'>
        <Achievement img="./icons/Ai.svg" achive={100} quentitiy="k" title="AI model submissions" alt="Ai icon" />
        <Achievement img="./icons/achive.svg" achive={50} quentitiy="k" title="Data Scientist" alt="data image" />
        <Achievement img="./icons/bot.svg" achive={100} title="AI Challenges hosted" alt="bot icon" />
      </div>
      <Paticiapte_main />
    </>
  )
}

export default Main