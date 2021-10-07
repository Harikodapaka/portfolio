import Button from "@restart/ui/esm/Button";
import { Col, Form, Row } from "react-bootstrap";

function ReachoutForm() {
    return (
        <>
            <div className="p-4 d-flex justify-content-center bg-secondary mt-2">
                <div className="col-5 col-md-7 col-sm-12 bg-info p-4 rounded">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter a name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="username" placeholder="Enter name" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn btn-dark" href="#">
                            Reach!
                        </Button>
                    </Form>
                </div>
            </div>
        </>



    )
}
export default ReachoutForm