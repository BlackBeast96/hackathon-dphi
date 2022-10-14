import React from 'react'
import CountUp from "react-countup"
function Countup(props) {
  return (
    <>
    <CountUp duration={4.5} end={props.end}/>
    </>
  )
}

export default Countup