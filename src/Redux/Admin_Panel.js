import { createSlice } from "@reduxjs/toolkit"


var list = [
    {
        id:5,
        image: "./cardimage/bridge_boy.png",
        situation: "Past",
        title: "Travel Insurance Claim Prediction",
        time_title: "Ended on",
        time: "2022-11-23",
        level: "Easy",
        desc: 'AI-based methods were used to develop cutting-edge travel apps enabling us to forecast flights and travel-related things like hotels. These innovative solutions serve travelers in terms of finding the cheapest price and providing details on flight costs in the future'
    },
    {
        id:3,
        image: "./cardimage/butterfly.png",
        situation: "Upcoming",
        title: "Data Sprint 72 - Butterfly Identification",
        time_title: "Starts in",
        time: "2022-10-20",
        level: "Medium",
        desc: 'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.'
    },

    {
        key: 2,
        image: "./cardimage/snow_fall.png",
        situation: "Active",
        title: "Data Sprint 71 - Weather Recognition",
        time_title: "Ends in",
        time: "",
        level: "Easy",
        desc: 'AI can reduce the workload of meteorologists, thereby improving the accuracy of weather forecasts. The speed and accuracy of AI technologies when it comes to processing data in extreme weather conditions means that scientists will have a better chance of alerting people in danger.'
    },

    {
        key: 4,
        image: "./cardimage/Data_science.png",
        situation: "Upcoming",
        title: "Data Science Bootcamp - Graded Datathon",
        time_title: "Starts in",
        time: "2022-10-21",
        level: "Hard",
        desc: 'AI is the implementation of a predictive model to foresee events. Data science is an umbrella term for statistical techniques, design techniques, and development methods. Artificial intelligence has to do with algorithm design, development, efficiency, conversions, and the deployment of these designs and products.'
    },

    {
        key: 1,
        image: "./cardimage/airline_passenger.png",
        situation: "Active",
        title: "Data Sprint 70-Airline Passenger Satisfaction",
        time_title: "Ends in",
        time: "",
        level: "Medium",
        desc: "It's important that customers have an excellent experience every time they travel. On-time flights, good in-flight entertainment, more (and better) snacks, and more legroom might be the obvious contributors to a good experience and more loyalty."
    },
    {
        key: 6,
        image: "./cardimage/graduates.png",
        situation: "Past",
        title: "Engineering Graduates Employment Outcomes",
        time_title: "Ended on",
        time: "2022-10-22",
        level: "Easy",
        desc: 'An AI engineer builds AI models using machine learning algorithms and deep learning neural networks to draw business insights, which can be used to make business decisions that affect the entire organization. These engineers also create weak or strong AIs, depending on what goals they want to achieve'
    },
]

const initialState = {
    hackathon_data: [...list]
}

var Hackathon = createSlice({
    name: "Hackathon data",
    initialState,
    reducers: {
        Add: (state, action) => {
            state.hackathon_data.push(action.payload)
        },
        Remove: (state, action) => {
            const newlist = state.hackathon_data.filter((elem, index) => elem.title != action.payload)
            return {
                hackathon_data: newlist
            }
        },
        Filters: (state, action) => {
            const newlist = state.hackathon_data.filter((elem, index) => elem.situation == action.payload || elem.level == action.payload || elem.title == action.payload)

            if (action.payload == "All") {
                return {
                    hackathon_data: list
                }
            } else {
                return {
                    hackathon_data: newlist
                }
            }
        },

        Sorting:(state,action)=>{
            if(action.payload=="Newest First"){

                var newlist=state.hackathon_data.sort((a,b)=>a.time>b.time ? 1:-1)
                console.log(newlist);
            }
            if(action.payload=="Oldest First"){
                var newlist=state.hackathon_data.sort((a,b)=>a.time<b.time ? 1:-1)
                console.log(newlist);
            }
        }
    }
})

export default Hackathon.reducer
export const { Add, Remove, Filters ,Sorting} = Hackathon.actions