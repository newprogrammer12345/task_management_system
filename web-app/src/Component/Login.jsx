import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaUser, FaLock } from 'react-icons/fa';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { RxEyeOpen } from "react-icons/rx";
import { LuEyeClosed } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

const SignupSchema = z.object({
    fullname: z.string().min(3, "It must be greater then 3").max(50, "It is must be less then 50 "),
    password: z.string().min(1, "Password is required").max(7, "password must be 7 character long"),
})


export default function Login() {
    let [login, setlogin] = useState(false);
    let [password_view, chamge_password_type] = useState(false)
    let navigate = useNavigate()

    const formhook = useForm({
        resolver: zodResolver(SignupSchema),
        mode: "onChange",
    })

    function handle_view_password() {
        chamge_password_type(!password_view);
    }

    const register = formhook.register;
    const errors = formhook.formState.errors;
    const reset = formhook.reset;
    const handleSubmit = formhook.handleSubmit;

    function handleClose() {
        setlogin(false);
        reset();
    }
    function handleLogin() {
        setlogin(true);
    }

    function onSubmit(data) {
        if (data) {
            const sent_data = {
                fullname: data.fullname,
                password: data.password,
            }
            setlogin(false);
            navigate(`/dashboard/${encodeURIComponent(sent_data.fullname.trim())}`);
        }
    }
    return (
        <>
            <Button className=' text-primary  bg-light' onClick={handleLogin}>
                Login
            </Button>

            <Modal show={login} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>


                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        {/* Full Name */}
                        <Form.Group className="mb-3">
                            <InputGroup>
                                <InputGroup.Text><FaUser /></InputGroup.Text>
                                <Form.Control type="text" placeholder="Full name" isInvalid={Boolean(errors.fullname)} {...register("fullname")} />
                            </InputGroup>
                            <Form.Text className="text-danger">
                                {errors.fullname?.message}
                            </Form.Text>
                        </Form.Group>

                        {/* Password */}

                        <Form.Group >
                            <InputGroup>
                                <InputGroup.Text><FaLock /></InputGroup.Text>
                                <Form.Control type={password_view ? "text" : "password"} placeholder="Password" isInvalid={Boolean(errors.password)} {...register("password")} />
                                <Button variant='outline-secondary' type='button' onClick={handle_view_password}>
                                    {password_view ? <RxEyeOpen /> : <LuEyeClosed />}
                                </Button>
                            </InputGroup>
                            <Form.Text className="text-danger">
                                {errors.password?.message}
                            </Form.Text>
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            <IoPaperPlaneOutline className="me-1" /> Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}