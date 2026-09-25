import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useTaskdate } from '../userdata_sign';

const Category_Dropdwon = z.enum(["Add Task",
    "Favorite",
    "Work",
    "Personal",
    "Learning"]);

const Status_Dropdown = z.enum(["Pending", "InProgress", "Completed"])


let sechma = z.object({
    Title: z.string().min(3, "Make sure title characters are greater then 3").max(50, "The title can't be greater then 50"),
    Date: z.string().min(1, "Date is required"),
    Time: z.string().min(1, "Time is required"),
    Category: z.string().min(1, "Category is required"),
    Category: Category_Dropdwon,
    Status: z.string().min(1, "Status is required"),
    Status: Status_Dropdown,
    Progress: z.string().min(1, "Progress is required"),
    Description : z.string().optional()

})
export default function Add_task() {
    const [show, setShow] = useState(false);
    let GetTaskdata = useTaskdate((state)=>{
        return state.update_taskdata

    })

    function handleClose() {
        setShow(false);
        reset()
    }

    function handleShow() {
        setShow(true);
    }

    let formhook = useForm({
        resolver: zodResolver(sechma),
        mode: "onChange",
    })

    const register = formhook.register;
    const errors = formhook.formState.errors;
    const reset = formhook.reset;
    const handleSubmit = formhook.handleSubmit;

    function handle_User_data_task(data_of_task) {
        if (data_of_task) {
            let sent_data = {
                Title: data_of_task.Title,
                Date: data_of_task.Date,
                Time: data_of_task.Time,
                Category: data_of_task.Category,
                Status: data_of_task.Status,
                Progress: data_of_task.Progress,
                Description: data_of_task.Description
            }
            GetTaskdata(sent_data)
            handleClose()
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>Add Task</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add task Form</Modal.Title>
                </Modal.Header>
                <Form className="p-2" onSubmit={handleSubmit(handle_User_data_task)}>
                    <Modal.Body>
                        {/* Row 1: Title */}
                        <Row className="mb-3">
                            <Col md={12}>
                                <Form.Group controlId="formTaskTitle">
                                    <Form.Label className="fw-semibold">Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter task title"
                                        isInvalid={Boolean(errors.Title)}
                                        {...register("Title")}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.Title?.message}
                                    </Form.Text>
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
                                        isInvalid={Boolean(errors.Date)}
                                        {...register("Date")}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.Date?.message}
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formTaskDueTime">
                                    <Form.Label className="fw-semibold">Due Time</Form.Label>
                                    <Form.Control
                                        type="time"
                                        isInvalid={Boolean(errors.Time)}
                                        {...register("Time")}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.Time?.message}
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Row 3: Category & Status (Dropdowns) */}
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="formTaskCategory">
                                    <Form.Label className="fw-semibold">Category</Form.Label>
                                    <Form.Select defaultValue="" isInvalid={Boolean(errors.Category)} {...register("Category")}>
                                        <option value="" disabled>Select category</option>
                                        <option value="Add Task">Add task</option>
                                        <option value="Favorite">Favorite</option>
                                        <option value="Work">Work</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Learning">Learning</option>
                                    </Form.Select>
                                    <Form.Text className="text-danger">
                                        {errors.Category?.message}
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formTaskStatus">
                                    <Form.Label className="fw-semibold">Status</Form.Label>
                                    <Form.Select defaultValue="" isInvalid={errors.Category} {...register("Status")}>
                                        <option value="" disabled>Select status</option>
                                        <option value="Pending">Pending</option>
                                        <option value="InProgress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </Form.Select>
                                    <Form.Text className="text-danger">
                                        {errors.Status?.message}
                                    </Form.Text>
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
                                        isInvalid={errors.Progress}
                                        {...register("Progress")}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.Progress?.message}
                                    </Form.Text>
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
                                        {...register("Description")}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal >
        </>
    )
}