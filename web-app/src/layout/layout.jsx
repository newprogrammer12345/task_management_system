import { Outlet } from "react-router-dom";
import Nav_Bar_LS from "../Component/NavBar_S"

export default function Layout() {
  return (
    <>
      <Nav_Bar_LS />
      <main>
        <Outlet />
      </main>
    </>
  );
}