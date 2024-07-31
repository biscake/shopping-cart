import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"

const Root = () => {
  return (
  <>
    <h1> testing </h1>
    <Navbar />
    <Outlet />
  </>
  )
}

export default Root