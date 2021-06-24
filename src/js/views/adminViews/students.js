import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Table, Jumbotron } from "react-bootstrap";
import { Context } from "../../store/appContext";

export const Students = () => {
	const { store, actions } = useContext(Context);
	const [studentsInfo, setStudentsInfo] = useState();

	useEffect(_ => {
		const getStudentsInfo = async _ => {
			const aux = await actions.getAllElementInfo("students");
			setStudentsInfo(aux);
		};
		getStudentsInfo();
	}, []);

	return (
		<Container fluid className="bg-primary p-5">
			<Jumbotron className="py-4 d-flex flex-column">
				<Row className="justify-content-center">
					<p className="display-4 mt-2 mb-3">Informacion de los Estudiantes</p>
				</Row>
				<Row>
					<Col xs={12}>
						<Table striped bordered hover variant="dark">
							<thead>
								<tr>
									<th>#</th>
									<th>Nombre</th>
									<th>Cedula</th>
									<th>Edad</th>
									<th>Telefono</th>
									<th>Nacionalidad</th>
									<th>Residencia</th>
									<th>Carrera</th>
								</tr>
							</thead>
							<tbody>
								{studentsInfo &&
									studentsInfo.map((element, index) => {
										return (
											<tr key={index}>
												<td>{index + 1}</td>
												<td>{element.fullname}</td>
												<td>{element.ci}</td>
												<td>{element.age}</td>
												<td>{element.phone_number}</td>
												<td>{element.nationality}</td>
												<td>{element.residence}</td>
												<td>{element.career}</td>
											</tr>
										);
									})}
							</tbody>
						</Table>
					</Col>
				</Row>
			</Jumbotron>
		</Container>
	);
};
