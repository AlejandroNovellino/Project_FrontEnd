//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Form, Button, option} from "react-bootstrap";

export const assignCoordinator = () => {
	return (
		<div>
			<h1 className="titulo"> asignar Coordinador </h1>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Example multiple select</Form.Label>
                    <Form.Control as="select" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
		</div>
	);
};

export default assignCoordinator;
