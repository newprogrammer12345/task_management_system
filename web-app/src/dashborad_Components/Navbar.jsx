import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav"
import Add_task from './Add_task';
import { useUserStorage } from '../userdata_sign';

export default function Nav_bar_Dashborad() {

    let Stoarge_User_data = useUserStorage((state)=>{
        return state.userdata;
    })
    return (
        <>
            <Navbar bg="light" data-bs-theme="light" className=' shadow-sm'>
                <div className=' d-flex justify-content-between align-items-center w-100 container'>
                    <div className=' d-flex justify-content-center align-items-center'>
                        <Navbar.Brand href="#home"><span className=' text-info fw-bold '>EVS</span></Navbar.Brand>

                        <Nav>
                            <Link className="nav-link" to="">All task</Link>
                            <Link className="nav-link" to="Favorite">Favorite</Link>
                            <Link className="nav-link" to="Work">Work</Link>
                            <Link className="nav-link" to="Personal">Personal</Link>
                            <Link className="nav-link" to="Learning">Learning</Link>
                        </Nav>
                    </div>
                    <div className=' d-flex gap-2'>
                        <div
                            className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center border bg-light"
                            style={{ width: '60px', height: '60px' }}
                        >
                            <img
                                src={Stoarge_User_data?.profile_pic}
                                alt="Profile"
                                className="w-100 h-100 object-fit-cover" />
                        </div>
                        <Add_task />
                    </div>
                </div>
            </Navbar>
            <Container className='my-2'>
                <Navbar bg="light" data-bs-theme="light" className=' shadow'>
                    <Navbar.Brand className=' text-info fw-bold px-3'>
                        All Task
                    </Navbar.Brand>
                </Navbar>
            </Container>
        </>
    )
}