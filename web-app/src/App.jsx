import { Routes, Route } from "react-router-dom";
import DashBorad from "./dashborad_Components/Dashboard";
import Nav_Bar_LS from "./Component/NavBar_S"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav_Bar_LS />} />
        <Route path="/dashboard/:fullname" element={<DashBorad />} />
      </Routes>

    </>
  )
}

export default App
