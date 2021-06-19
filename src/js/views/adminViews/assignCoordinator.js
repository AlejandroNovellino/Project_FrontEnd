//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	option,
	Card,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap";

export const assignCoordinator = () => {
    const { store, actions } = useContext(Context);
    const history = useHistory();

	return (
		<Container>
			<Row>
				<h2 className="titulo"> Asignar Coordinador </h2>
			</Row>
			<Row>
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
			</Row>
			<Row>
				<Card style={{ width: "18rem" }}>
					<Card.Img
						variant="top"
						src="holder.js/100px180?text=Image cap"
					/>
					<Card.Body>
						<Card.Title></Card.Title>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroupItem>Carrera</ListGroupItem>
						<ListGroupItem>materias</ListGroupItem>
					</ListGroup>
				</Card>
			</Row>
		</Container>
	);
};

export default assignCoordinator;
