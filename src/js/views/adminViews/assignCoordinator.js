//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Form, Button, option } from "react-bootstrap";

export const assignCoordinator = () => {
	return (
		<div>
			<h2 className="titulo"> asignar Coordinador </h2>
			<Form>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Email@example.com"
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>Asignar Roll</Form.Label>
					<Form.Control as="select">
						<option>Coordinador</option>
						<option>Profesor</option>
					</Form.Control>
				</Form.Group>
			</Form>
		</div>
	);
};

export default assignCoordinator;
