import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Signup from './Signup';
import Login from './Login';

export default function Nav_Bar_LS() {
    return (

        <>
            <Navbar bg="light" data-bs-theme="light" className=' shadow-sm'>
                <div className=' d-flex justify-content-between align-items-center w-100 container'>
                    <Navbar.Brand href="#home"><span className=' text-info fw-bold '>EVS</span></Navbar.Brand>

                    <div className=' d-flex gap-2'>
                        <Login />
                        <Signup />
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
            <div>hi</div>
        </>
    )
}