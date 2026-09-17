import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav"
import { useState } from 'react';
import { isValid } from 'zod/v3';

export default function Nav_bar_Dashborad() {
    let [bg_col, changed_bg_col] = useState([
        { isValid: true },
        { isValid: false },
        { isValid: false },
        { isValid: false },
        { isValid: false }
    ]
    )

    function handle_changeurl(e) {
        const target = Number(e.target.dataset.index);
        console.log(target, typeof target)
        const result = bg_col.map((item, index) => {
            if (index == target) {
                return { isValid: true }
            }
            else {
                return { isValid: false }
            }
        });
        console.log(result)
        changed_bg_col(result);
    }
    return (
        <>
            <Navbar bg="light" data-bs-theme="light" className=' shadow-sm'>
                <div className=' d-flex justify-content-between align-items-center w-100 container'>
                    <div className=' d-flex justify-content-center align-items-center'>
                        <Navbar.Brand href="#home"><span className=' text-info fw-bold '>EVS</span></Navbar.Brand>

                        <Nav>
                            <Link className={`nav-link ${bg_col[0].isValid ? 'bg-primary text-light rounded-2 fw-bolder' : ''}`} to="" onClick={handle_changeurl} >All task</Link>
                            <Link className={`nav-link ${bg_col[1].isValid ? 'bg-primary text-light rounded-2 fw-bolder' : ''}`} to="Favorite" onClick={handle_changeurl}>Favorite</Link>
                            <Link className={`nav-link ${bg_col[2].isValid ? 'bg-primary text-light rounded-2 fw-bolder' : ''}`} to="Work" onClick={handle_changeurl}>Work</Link>
                            <Link className={`nav-link ${bg_col[3].isValid ? 'bg-primary text-light rounded-2 fw-bolder' : ''}`} to="Personal" onClick={handle_changeurl}>Personal</Link>
                            <Link className={`nav-link ${bg_col[4].isValid ? 'bg-primary text-light rounded-2 fw-bolder' : ''}`} to="Learning" onClick={handle_changeurl}>Learning</Link>
                        </Nav>
                    </div>
                    <div className=' d-flex gap-2'>

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