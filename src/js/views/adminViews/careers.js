import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Table, Jumbotron } from "react-bootstrap";
import { Context } from "../../store/appContext";

export const Careers = () => {
	const { store, actions } = useContext(Context);
	const [careersInfo, setCareersInfo] = useState();

	useEffect(_ => {
		const getCareersInfo = async _ => {
			const aux = await actions.getAllElementInfo("careers");
			setCareersInfo(aux);
		};
		getCareersInfo();
	}, []);

	return (
		<Container fluid className="bg-primary p-5">
			<Jumbotron className="py-4 d-flex flex-column">
				<Row className="justify-content-center">
					<p className="display-4 mt-2 mb-3">Informacion de las Carreras</p>
				</Row>
				<Row className="">
					<Col xs={12} className="">
						<Table striped bordered hover variant="dark">
							<thead>
								<tr>
									<th>#</th>
									<th>Carrera</th>
									<th>Materias</th>
									<th>Profesores</th>
									<th>Estudiantes</th>
								</tr>
							</thead>
							<tbody>
								{careersInfo &&
									careersInfo.map((element, index) => {
										return (
											<tr key={index}>
												<td>{index + 1}</td>
												<td>{element.name}</td>
												<td>{element.cathedras.length}</td>
												<td>{element.professors.length}</td>
												<td>{element.students.length}</td>
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
