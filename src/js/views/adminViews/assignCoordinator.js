//import react into the bundle
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Table, Jumbotron, Button, Form } from "react-bootstrap";
import { Context } from "../../store/appContext";

export const AssignCoordinator = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const [professors, setProfessors] = useState(null);

	const getProfessorsInfo = async _ => {
		const aux = await actions.getAllElementInfo("users");
		const users = aux.filter(user => user.professor);
		setProfessors(users);
	};

	const modifyRole = async (e, email, role) => {
		if (role == "professor") {
			await actions.modifyUserRole(email, 2);
		} else {
			await actions.modifyUserRole(email, 3);
		}
		getProfessorsInfo();
	};

	useEffect(_ => {
		getProfessorsInfo();
	}, []);

	return (
		<Container fluid className="bg-primary h-100 p-5">
			<Jumbotron className="m-0 pt-2 pb-4">
				<Row className="justify-content-center">
					<h2 className="text-center my-3"> Asignar Coordinador </h2>
				</Row>
				<Row className="m-auto">
					<input className="form-control mb-4" placeholder="Escriba el nombre" />
				</Row>
				<Row className="m-auto">
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
								<th>#</th>
								<th>Nombre</th>
								<th>Cedula</th>
								<th>Carrera</th>
								<th>Rol</th>
							</tr>
						</thead>
						<tbody>
							{professors &&
								professors.map((element, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{element.professor.fullname}</td>
											<td>{element.professor.ci}</td>
											<td>{element.professor.career}</td>
											<td>
												<Button
													variant={element.role == "professor" ? "success" : "danger"}
													className="btn-block"
													onClick={e => modifyRole(e, element.email, element.role)}>
													{element.role == "professor"
														? "Hacer coordinador"
														: "Destituir coordinador"}
												</Button>
											</td>
										</tr>
									);
								})}
						</tbody>
					</Table>
				</Row>
			</Jumbotron>
		</Container>
	);
};
