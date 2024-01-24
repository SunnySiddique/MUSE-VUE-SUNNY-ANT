import { Route, Routes } from "react-router-dom"
import Biling from "../BilingMain/Biling/Biling"
import Dashboard from "../DashboardMain/Dashboard/Dashboard"
import Profile from "../ProfileMain/Profile/Profile"
import SignIn from "../SignInMain/SignIn/SignIn"
import TableComponent from "../TableMain/TableComponent/TableComponent"

const Contents = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/table" element={<TableComponent />} />
      <Route path="/biling" element={<Biling />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
    </div>
  )
}

export default Contents
