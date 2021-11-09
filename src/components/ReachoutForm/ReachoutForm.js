import React, { useState } from "react";
import PropTypes from 'prop-types';
import Button from "@restart/ui/esm/Button";
import { Form } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Alert from 'react-bootstrap/Alert';
import emailjs from 'emailjs-com';
import './ReachoutForm.css';

const formIntialState = {
    name: "",
    email: "",
    message: ""
}
const alertIntialState = {
    show: false,
    status: ""
}
function ReachoutForm(props) {
    const { title, subtitle, buttonText, successMessage, failureMessage } = props;

    const [validated, setValidated] = useState(false);
    const [formValues, setFormformValues] = useState(formIntialState);
    const [showAlert, setShowAlert] = useState(alertIntialState);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormformValues(formValues => ({ ...formValues, [name]: value }))
    }
    const getAlert = (show, alertStatus) => {
        let variant = alertStatus === 'SUCCESS' ? 'success' : 'danger';
        let message = alertStatus === 'SUCCESS' ? successMessage : failureMessage;
        if (show) {
            return (
                <Alert variant={variant} onClose={() => setShowAlert({ show: false, status: null })} dismissible>
                    <p>{message}</p>
                </Alert>
            );
        }
        return null;
    }
    const handleSubmit = (event) => {
        setValidated(true);
        event.preventDefault();
        if (event.currentTarget.checkValidity() === true) {
            emailjs.send(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAIL_JS_TEMPATEID, formValues, process.env.REACT_APP_EMAIL_JS_USERID)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setShowAlert({ show: true, status: 'SUCCESS' });
                    setFormformValues(formIntialState);
                    setValidated(false);
                }, (err) => {
                    console.log('ERROR!', err.status, err.text);
                    setShowAlert({ show: true, status: 'FAIL' })
                }
                );
        }
    };
    return (
        <>
            <div className="container-md col-11 bg-white p-4 rounded text-center">
                <h2> {title} </h2>
                <h5 className="fst-italic">
                    {subtitle}
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
                    {getAlert(showAlert.show, showAlert.status)}
                    <Button variant="primary" type="submit" className="btn btn-dark">
                        {buttonText}
                    </Button>
                </Form>
            </div>
        </>
    )
}
ReachoutForm.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    successMessage: PropTypes.string.isRequired,
    failureMessage: PropTypes.string.isRequired,
};
ReachoutForm.defaultProps = {
    title: "",
    subtitle: "",
    buttonText: "",
    successMessage: "",
    failureMessage: "",
}
export default ReachoutForm;