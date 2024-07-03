import { Toaster } from "react-hot-toast"
import { BrowserRouter } from "react-router-dom"

import CustomRouter from "./Router/CustomRouter"

function App(){
    return (<>
        <BrowserRouter>
            <CustomRouter/>
            <Toaster/>
        </BrowserRouter>
    </>
    )
}

export default App