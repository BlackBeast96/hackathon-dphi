import { configureStore } from "@reduxjs/toolkit";
import Hackathon from "../Admin_Panel"
import Edite from '../Edite_and_delete'

const Store=configureStore({
    reducer:{
        Admin:Hackathon,
        Transfer:Edite
    }
})

export default Store