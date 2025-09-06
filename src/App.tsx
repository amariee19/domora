import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import RootLayout from "./layout/RootLayout"
import Home from "./Pages/Home"
import Help from "./Pages/Help"
import Houses from "./Pages/Houses"
import Venue from "./Pages/Venue"
import Signup from "./Pages/Signup"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element= {<RootLayout/>}>
        <Route index element = {<Home/>} />
        <Route path='/help' element = {<Help />} />
        <Route path='/houses' element = {<Houses />} />
        <Route path='/venue' element = {<Venue />} />
        <Route path='/signup' element = {<Signup />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
