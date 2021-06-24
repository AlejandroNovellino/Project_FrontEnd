import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button, Jumbotron, DropdownButton, Dropdown, Table } from "react-bootstrap";
import { Context } from "../../store/appContext";

import "../../../styles/coordStyles/addEvaPlan.scss";

export const AddEvaPlan = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const [selectedCourse, setSelectedCourse] = useState(null);
	const [name, setName] = useState("");
	const [percentage, setPercentage] = useState("");
	const [evaluations, setEvaluations] = useState([]);

	const addEvaluation = _ => {
		const evaluation = {
			name,
			percentage
		};
		setEvaluations([...evaluations, evaluation]);
	};

	const createEvalPlan = async () => {
		if (selectedCourse == null) {
			alert("No se escogio curso");
			return null;
		}
		for (let evaluation of evaluations) {
			const aux = await actions.createEvaluation(
				selectedCourse.id,
				evaluation.name,
				parseInt(evaluation.percentage)
			);
		}
		history.push("/home");
	};

	return (
		<Container fluid className="bg-primary p-5">
			<Jumbotron className="py-4 d-flex flex-column">
				<h2 className="text-center pb-2">
					Plan de evaluacion {selectedCourse ? "para " + selectedCourse.title : ""}
				</h2>
				<Row>
					<Col xs={6}>
						<p>Elija el curso a anadir el plan de evaluacion </p>
					</Col>
					<Col xs={6}>
						<DropdownButton variant="secondary" drop="right" title="Dropdown button" className="m-auto">
							{store.user.professor &&
								store.user.professor.courses &&
								store.user.professor.courses.map((element, index) => {
									return (
										<Dropdown.Item
											key={index}
											as="button"
											value={element.code}
											onClick={e =>
												setSelectedCourse({
													id: element.id,
													title: element.title,
													code: element.code
												})
											}>
											{element.title}
										</Dropdown.Item>
									);
								})}
						</DropdownButton>
					</Col>
				</Row>
				<Row>
					<Form className="container-fluid my-2">
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>Nombre</Form.Label>
								<Form.Control
									type="Name"
									placeholder="Nombre"
									value={name}
									onChange={e => setName(e.target.value)}
								/>
							</Form.Group>

							<Form.Group as={Col}>
								<Form.Label>Porcentaje</Form.Label>
								<Form.Control
									type="text"
									placeholder="Porcentaje"
									value={percentage}
									onChange={e => setPercentage(e.target.value)}
								/>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Button variant="primary" className="btn-block" onClick={addEvaluation}>
								Añadir
							</Button>
						</Form.Row>
					</Form>
				</Row>
				<Row className="mt-1 p-2">
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Nombre</th>
								<th>Porcentaje</th>
							</tr>
						</thead>
						<tbody>
							{evaluations.map((element, index) => {
								return (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{element.name}</td>
										<td>{element.percentage}</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</Row>
				<Row className="p-2">
					<Button variant="primary" className="btn-block" onClick={createEvalPlan}>
						Crear
					</Button>
				</Row>
			</Jumbotron>
		</Container>
	);
};
