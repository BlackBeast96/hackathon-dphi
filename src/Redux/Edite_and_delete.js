import {createSlice} from "@reduxjs/toolkit"


const initialState={
    Transfer_Data:{ 
        starting_date:" 16th May'22 09:00 PM",
        time_title:"Starts in",
        title:"Data Sprint 72 - Butterfly Identification",
        image:"./cardimage/butterfly.png",
        situation:"Upcoming",
        Level:"Medium",
        desc:'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.'
    }
}

var Edite=createSlice({
    name:"Edite data",
    initialState,
    reducers:{
        Transfer:(state,action)=>{
            state.Transfer_Data=action.payload
        }
    }
})

export default Edite.reducer
export const {Transfer} = Edite.actions