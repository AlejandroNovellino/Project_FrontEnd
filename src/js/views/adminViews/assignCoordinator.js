//import react into the bundle
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button, option, Card, ListGroup, ListGroupItem, Jumbotron } from "react-bootstrap";
import { Context } from "../../store/appContext";

export const AssignCoordinator = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	return (
		<Container fluid className="bg-primary p-5">
			<Jumbotron className="m-0 pt-2 pb-4">
				<Row>
					<h2 className="m-auto"> Asignar Coordinador </h2>
				</Row>
				<Row className="m-auto">
					<Form className="container-fluid">
						<Form.Group controlId="exampleForm.ControlInput1">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Email@example.com" />
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Label>Asignar Roll</Form.Label>
							<Form.Control as="select">
								<option>Coordinador</option>
								<option>Profesor</option>
							</Form.Control>
						</Form.Group>
					</Form>
				</Row>
				<Row>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
						<Card.Body>
							<Card.Title />
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroupItem>Carrera</ListGroupItem>
							<ListGroupItem>materias</ListGroupItem>
						</ListGroup>
					</Card>
				</Row>
			</Jumbotron>
		</Container>
	);
};
