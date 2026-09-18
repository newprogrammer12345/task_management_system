import { Routes, Route } from "react-router-dom";
import All_Task from "../pages_dashborad/All_task";
import Favorite_page from "../pages_dashborad/Favourite";
import Learning_Page from "../pages_dashborad/learning";
import Personal_page from "../pages_dashborad/personal";
import Work_page from "../pages_dashborad/work";
import Layout from "../layout/layout";
export default function DashBorad() {

    return (
        <>
            <Routes>
                <Route path="/" element ={<Layout/>}>
                    <Route index element = {<All_Task/>}/>
                    <Route path="Favorite" element = {<Favorite_page/>}/>
                    <Route path="Work" element = {<Work_page/>}/>
                    <Route path="Personal" element = {<Personal_page/>}/>
                    <Route path="Learning" element = {<Learning_Page/>}/>
                </Route>
            </Routes>
        </>
    )
}