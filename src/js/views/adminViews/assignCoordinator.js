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
				<Row>
					<input Model="search" className="form-control" placeholder="escriba el nombre"></input>
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
								{/* <td>{{professor.id}}</td>
								<td>{{professor.full_name}}</td>
								<td>{{professor.ci}}</td>
								<td>{{professor.courses}}</td>
								<Button>Rol</Button> */}
							</tr>
						</tbody>
					</Table>
				</Row>
			</Jumbotron>
		</Container>
	);
};
