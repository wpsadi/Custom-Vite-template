
import HomePage from "@/Pages/Home"
import {Routes, Route} from "react-router-dom"
function CustomRouter(){
    return (<>
    <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes>
    </>)

}

export default CustomRouter