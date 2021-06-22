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
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Nombre</th>
								<th>Cedula</th>
								<th>Curso</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{{professor.id}}</td>
								<td>{{professor.full_name}}</td>
								<td>{{professor.ci}}</td>
								<td>{{professor.courses}}</td>
								<Button>Editar</Button>
							</tr>
						</tbody>
					</Table>
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
