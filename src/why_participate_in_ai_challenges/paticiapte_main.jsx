import React from 'react'
import Skill_Card from './Skill_Card'
function Paticiapte_main() {
  return (
    <>
    <div className='text-center text-4xl font-bold mt-14 mb-4'> <h1 className="inline">Why Participate in </h1 ><h1 className='inline text-[#44924C]'>AI Challenges?</h1></div>
    <div className='grid justify-center lg:grid-cols-2 xl:pl-52 lg:pl-32 lg:pr-10 xl:pr-52 mb-20'>
        <Skill_Card img="./icons/carbon_notebook-reference.svg" alt="robot svg" title="Prove your skills" desc="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions." />
        <Skill_Card img="./icons/Vector.svg" alt="robot svg" title="Learn from community" desc="One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them." />
        <Skill_Card img="./icons/Robot.svg" alt="robot svg" title="Challenge yourself" desc="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder." />
        <Skill_Card img="./icons/IdentificationCard.svg" alt="robot svg" title="Earn recognition" desc="You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards." />
    </div>
    </>
  )
}

export default Paticiapte_main