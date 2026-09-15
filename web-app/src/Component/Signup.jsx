import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt, FaImage } from 'react-icons/fa';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { RxEyeOpen } from "react-icons/rx";
import { LuEyeClosed } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

const SignupSchema = z.object({
    fullname: z.string().min(3, "It must be greater then 3").max(50, "It is must be less then 50 "),
    email: z.string().min(1, "Email is required").email('Please enter a valid email address'),
    Profile_Img: z.custom((filetype) => filetype instanceof FileList && filetype.length > 0, "File is required")
        .refine((filetype) => filetype && filetype[0] && filetype[0].type.startsWith("image/"), "file must be in the format of PNG, JPG, WEBP."),
    password: z.string().min(1, "Password is required").max(7, "password must be 7 character long"),
    contact_number: z.string().regex(/^03\d{2}-\d{7}$/, "Format must be in 03XX-XXXXXXX")
})

export default function Signup() {

    let [password_view, chamge_password_type] = useState(false)
    let [signup, setsignup] = useState(false);
    let navigate = useNavigate();

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
        setsignup(false);
        reset();
    }
    function handleSignup() {
        setsignup(true);
    }

    function onSubmit(data) {
        if (data) {

            const reader = new FileReader();
            const profile_pic = data.Profile_Img[0];

            reader.onloadend = function () {
                const sent_data = {
                    fullname: data.fullname,
                    email: data.email,
                    profile_pic: data.Profile_Img[0],
                    password: data.password,
                    contact_number: data.contact_number
                }
                setsignup(false)
                navigate(`/dashboard/${encodeURIComponent(sent_data.fullname)}`,{
                state:
                {user:sent_data}
                })
            }

            if(profile_pic){
                reader.readAsDataURL(profile_pic)
            }
        }
    }

    return (
        <>
            <Button className='text-light bg-primary' onClick={handleSignup}>
                Signup
            </Button>

            <Modal show={signup} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
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

                        {/* Email */}
                        <Form.Group className="mb-3">
                            <InputGroup>
                                <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                                <Form.Control type="email" placeholder="Email address" isInvalid={Boolean(errors.email)} {...register("email")} />
                            </InputGroup>
                            <Form.Text className="text-danger">
                                {errors.email?.message}
                            </Form.Text>
                        </Form.Group>

                        {/* Password and Contact (Side-by-side) */}
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
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

                            <Form.Group as={Col} md="6">
                                <InputGroup>
                                    <InputGroup.Text><FaPhoneAlt /></InputGroup.Text>
                                    <Form.Control type="text" placeholder="Contact number" isInvalid={Boolean(errors.contact_number)} {...register("contact_number")} />
                                </InputGroup>
                                <Form.Text className="text-danger">
                                    {errors.contact_number?.message}
                                </Form.Text>
                            </Form.Group>
                        </Row>

                        {/* File Upload */}
                        <Form.Group className="mb-3">
                            <InputGroup>
                                <InputGroup.Text><FaImage /></InputGroup.Text>
                                <Form.Control type="file" accept="image/*" isInvalid={Boolean(errors.Profile_Img)} {...register("Profile_Img")} />
                            </InputGroup>
                            <Form.Text className="text-danger">
                                {errors.Profile_Img?.message}
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
    );
}