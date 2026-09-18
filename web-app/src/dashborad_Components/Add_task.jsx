import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

export default function Add_task() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>Add Task</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add task Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="p-2">
                        {/* Row 1: Title */}
                        <Row className="mb-3">
                            <Col md={12}>
                                <Form.Group controlId="formTaskTitle">
                                    <Form.Label className="fw-semibold">Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter task title"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Row 2: Date & Due Time */}
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="formTaskDate">
                                    <Form.Label className="fw-semibold">Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formTaskDueTime">
                                    <Form.Label className="fw-semibold">Due Time</Form.Label>
                                    <Form.Control
                                        type="time"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Row 3: Category & Status (Dropdowns) */}
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="formTaskCategory">
                                    <Form.Label className="fw-semibold">Category</Form.Label>
                                    <Form.Select defaultValue="">
                                        <option value="" disabled>Select category</option>
                                        <option value="Add Task">Add task</option>
                                        <option value="Favorite">Favorite</option>
                                        <option value="Work">Work</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Learning">Learning</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formTaskStatus">
                                    <Form.Label className="fw-semibold">Status</Form.Label>
                                    <Form.Select defaultValue="">
                                        <option value="" disabled>Select status</option>
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Row 4: Progress */}
                        <Row className="mb-3">
                            <Col md={12}>
                                <Form.Group controlId="formTaskProgress">
                                    <Form.Label className="fw-semibold">Progress (%)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        min="0"
                                        max="100"
                                        placeholder="e.g. 50"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Row 5: Description Text Area */}
                        <Row className="mb-3">
                            <Col md={12}>
                                <Form.Group controlId="formTaskDescription">
                                    <Form.Label className="fw-semibold">Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Enter task details..."
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}