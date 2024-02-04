import { Route, Routes } from "react-router-dom";
import Biling from "../BilingMain/Biling/Biling";
import Dashboard from "../DashboardMain/Dashboard/Dashboard";
import Profile from "../ProfileMain/Profile/Profile";
import LogIn from "../SignInMain/Login/Login";
import Protected from "../SignInMain/Protected/Protected";
import TableComponent from "../TableMain/TableComponent/TableComponent";

const Contents = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route
          path="/home"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route path="/table" element={<TableComponent />} />
        <Route path="/biling" element={<Biling />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Contents;
