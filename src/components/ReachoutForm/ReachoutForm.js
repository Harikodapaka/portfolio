import React, { useState } from "react";
import Button from "@restart/ui/esm/Button";
import { Form } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './ReachoutForm.css';
const formIntialState = {
    name: "",
    email: "",
    message: ""
}
function ReachoutForm(props) {
    const [validated, setValidated] = useState(false);
    const [formValues, setFormformValues] = useState(formIntialState);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormformValues(formValues => ({ ...formValues, [name]: value }))
    }

    const handleSubmit = (event) => {
        setValidated(true);
        event.preventDefault();
        if (event.currentTarget.checkValidity() === true) {
            // TODO - implement the email functionality
            setFormformValues(formIntialState);
            setValidated(false);
        }

    };
    return (
        <>
            <div className="col-12 col-md-9 col-lg-7 bg-white p-4 rounded text-center">
                <h2> Say Hi! </h2>
                <h5 className="fst-italic">
                    Thank you for visiting. I hope you liked my portfolio.
                    If you have any suggestions or want to say "Hello",
                    please send me a message by filling the contact form.
                </h5>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="mt-5">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                            <Form.Control required type="text"
                                name="name" value={formValues.name} onChange={handleChange}
                                placeholder="Enter Your Name" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                            <Form.Control required type="email"
                                name="email" value={formValues.email} onChange={handleChange}
                                placeholder="Enter Your Email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <FloatingLabel controlId="floatingTextarea2" label="Message">
                            <Form.Control required as="textarea"
                                value={formValues.message} onChange={handleChange}
                                name="message"
                                placeholder="Leave your message here" style={{ height: '100px' }} />
                        </FloatingLabel>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn btn-dark">
                        Reach!
                    </Button>
                </Form>
            </div>
        </>
    )
}
export default ReachoutForm