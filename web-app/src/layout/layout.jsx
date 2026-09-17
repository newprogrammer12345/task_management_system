import { Outlet } from "react-router-dom";
import Nav_bar_Dashborad from "../dashborad_Components/Navbar";

export default function Layout() {
  return (
    <>
      <Nav_bar_Dashborad />
      <main>
        <Outlet />
      </main>
    </>
  );
}