//import react into the bundle
import React, { useState, useContext, useEffect } from "react";

import { Container, Row, Col, Form, Button, Jumbotron } from "react-bootstrap";
import { Context } from "../../store/appContext";

export const AddProfessor = () => {
	const { store, actions } = useContext(Context);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [dni, setDni] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [age, setAge] = useState("");
	const [nationality, setNationality] = useState("");
	const [residence, setResidence] = useState("");
	const [role, setRole] = useState(null);
	const [career, setCareer] = useState({});
	const [cathedras, setCathedras] = useState([]);

	useEffect(
		() => {
			const auxFunc = async () => {
				await actions.getAllCountries();
				await actions.getAllCareers();
			};
			auxFunc();
		},
		[actions.getAllCountries]
	);

	const handleCareerChange = async e => {
		setCareer(e.target.value);
		const career = e.target.value.toLowerCase();
		await actions.getAllCathedrasFromCareer(career);
	};

	const handleMultipleSelect = e => {
		let values = Array.from(e.target.selectedOptions, option => option.value);
		setCathedras(values);
	};

	const emptyStates = _ => {
		setName("");
		setEmail("");
		setDni("");
		setPhoneNumber("");
		setAge("");
		setNationality("");
		setResidence("");
		setRole(null);
		setCareer({});
		setCathedras([]);
	};

	const createProfessor = async e => {
		await actions.createProfessor(
			name,
			dni,
			phoneNumber,
			parseInt(age),
			nationality,
			residence,
			parseInt(career),
			cathedras,
			email,
			parseInt(role)
		);

		alert("Profesor creado");
		emptyStates();
	};

	return (
		<Container fluid className="bg-primary p-5">
			<Jumbotron className="m-0 pt-2 pb-4">
				<Row>
					<Col xs={12} className="my-4">
						<h2 className="m-auto"> Añadir profesor: </h2>
					</Col>
				</Row>

				<Row className="m-auto">
					<Form className="container-fluid">
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>Nombre Completo</Form.Label>
								<Form.Control
									type="Name"
									placeholder="Nombre Completo"
									value={name}
									onChange={e => setName(e.target.value)}
								/>
							</Form.Group>

							<Form.Group as={Col}>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="Email"
									placeholder="Email"
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row className="d-flex justify-content-between">
							<Form.Group as={Col}>
								<Form.Label>Cedula</Form.Label>
								<Form.Control placeholder="Cedula" value={dni} onChange={e => setDni(e.target.value)} />
							</Form.Group>

							<Form.Group as={Col}>
								<Form.Label>Número de Telefono </Form.Label>
								<Form.Control
									placeholder="Telefono"
									value={phoneNumber}
									onChange={e => setPhoneNumber(e.target.value)}
								/>
							</Form.Group>

							<Form.Group as={Col}>
								<Form.Label>Edad</Form.Label>
								<Form.Control placeholder="Edad" value={age} onChange={e => setAge(e.target.value)} />
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>Nacionalidad</Form.Label>
								<Form.Control
									as="select"
									defaultValue="choose"
									onChange={e => setNationality(e.target.value)}>
									<option hidden value="choose">
										{"Elija una"}
									</option>
									{store.nationalities &&
										store.nationalities.map((element, index) => {
											return (
												<option key={index} value={element.name}>
													{element.name}
												</option>
											);
										})}
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col}>
								<Form.Label>Residencia</Form.Label>
								<Form.Control
									placeholder="Residencia"
									value={residence}
									onChange={e => setResidence(e.target.value)}
								/>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>Carrera</Form.Label>
								<Form.Control as="select" defaultValue="choose..." onChange={handleCareerChange}>
									<option hidden value="choose">
										{"Elija una"}
									</option>
									{store.careers &&
										store.careers.map((element, index) => {
											return (
												<option key={index} value={index + 1}>
													{element}
												</option>
											);
										})}
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col}>
								<Form.Label>Roll</Form.Label>
								<Form.Control as="select" defaultValue="choose" onChange={e => setRole(e.target.value)}>
									<option hidden value="choose">
										{"Elija una"}
									</option>
									<option value="2">Coordinador</option>
									<option value="3">Profesor</option>
								</Form.Control>
								<small className="form-text text-muted">
									Sera coordinador de todas las materias elegidas
								</small>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>Materias</Form.Label>
								<Form.Control as="select" multiple onChange={handleMultipleSelect}>
									{store.cathedras &&
										store.cathedras.map((element, index) => {
											return (
												<option key={index} value={element.code}>
													{element.name}
												</option>
											);
										})}
								</Form.Control>
								<small className="form-text text-muted">
									Mantener presionado Ctrl para selecionar varias materias
								</small>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Button variant="success" size="lg" block onClick={createProfessor}>
								Añadir
							</Button>
						</Form.Row>
					</Form>
				</Row>
			</Jumbotron>
		</Container>
	);
};
