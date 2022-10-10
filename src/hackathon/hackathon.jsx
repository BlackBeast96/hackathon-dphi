import React from 'react'
import Card from './card'
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"


function Hackathon() {
    const data = useSelector((state) => state.Admin.hackathon_data)
    const [hour, sethour] = useState(10);
    const [sec, setsec] = useState(60);
    const [min, setmin] = useState(60);

    var timer
    useEffect(() => {
        timer = setInterval(() => {
            setsec(sec - 1)
            if (sec <= 0) {
                setmin(min - 1);
                setsec(60);
            }
            if (min <= 0) {
                sethour(hour - 1);
                setmin(60)
            }
            if (hour <= 0 && min <= 0 && sec <= 0) {
                sethour(0);
                setmin(0);
                setsec(0);
            }
        }, 1000)
        return () => clearInterval(timer)
    })


    var color = "";
    var bgcolor = "";

    return (
        <>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 bg-[#003145] justify-items-center pb-24'>
                {
                    data.map((elem, index) => {
                        if (elem.situation == "Active") {
                            color = "text-green-500"
                            bgcolor = "bg-green-200"
                        }
                        if (elem.situation == "Upcoming") {
                            color = "text-black"
                            bgcolor = "bg-yellow-200"
                        }
                        if (elem.situation == "Past") {
                            color = "text-black"
                            bgcolor = "bg-red-200"
                        }
                        return <Card key={index} image={elem.image} situation={elem.situation}
                            title={elem.title}
                            time_title={elem.time_title}
                            level={elem.level}
                            time={elem.time == "" ?
                                `${hour} : ${min} : ${sec}` : elem.time
                            }
                            bgclass={bgcolor}
                            colorclass={color}
                            desc={elem.desc}
                            id={elem.id}
                        />


                    }
                    )

                }

            </div>
        </>
    )
}

export default Hackathon