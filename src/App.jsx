import Search from "./search and filter/search"
import Hackathon from "./hackathon/hackathon"
import Edite from "./Admin_side/Edite"
import Main from "./Landing_Page/Main"
import Edit_and_Delete from "./Edit_and_Delete/Edit_and_Delete"
import {Routes,Route} from "react-router-dom"
import Error_Page from "./Error_page"
function App() {
  return(
    <>
    <Routes>
      <Route exact path="/Edit" element={<Edit_and_Delete/>}/>
      <Route exact path="/Admin" element={<Edite/>}/>
      <Route path="/" element={
        <>
      <Main/>
      <Search/>
      <Hackathon/>
      </>
      }/>
      <Route path="*" element={<Error_Page/>}/>
    </Routes>
    </>
  )
}

export default App
