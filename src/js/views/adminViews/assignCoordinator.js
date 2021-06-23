//import react into the bundle
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Table, Jumbotron } from "react-bootstrap";
import { Context } from "../../store/appContext";

export const AssignCoordinator = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	//const

	return (
		<Container fluid className="bg-primary h-100 p-5">
			<Jumbotron className="m-0 pt-2 pb-4">
				<Row className="justify-content-center">
					<h2 className="text-center my-3"> Asignar Coordinador </h2>
				</Row>
				<Row className="m-auto">
					<input
						className="form-control mb-4"
						placeholder="Escriba el nombre"
					/>
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
