//import react into the bundle
import React, { useState, useContext, useEffect } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
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
	const [roll, setRoll] = useState(null);

	useEffect(
		() => {
			const auxFunc = async () => {
				await actions.getAllCountries();
			};
			auxFunc();
		},
		[actions.getAllCountries]
	);

	const createProfessor = e => {
		let career = "None";
		//actions.createProfessor(name, email, dni, phoneNumber, age, residence, career);
	};

	return (
		<Container className="d-flex align-items-center flex-column h-100">
			<Row>
				<Col xs={12}>
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
						<Form.Group>
							<Form.Label>Cedula</Form.Label>
							<Form.Control placeholder="Cedula" value={dni} onChange={e => setDni(e.target.value)} />
						</Form.Group>

						<Form.Group>
							<Form.Label>Número de Telefono </Form.Label>
							<Form.Control
								placeholder="Telefono"
								value={phoneNumber}
								onChange={e => setPhoneNumber(e.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Edad</Form.Label>
							<Form.Control placeholder="Edad" value={age} onChange={e => setAge(e.target.value)} />
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridNacionality">
							{/*<Form.Label>Nacionalidad</Form.Label>
							<Form.Control />*/}
							<Form.Label>Nacionalidad</Form.Label>
							<Form.Control
								as="select"
								defaultValue="Choose..."
								onChange={e => setNationality(e.target.value)}>
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
						<Form.Group as={Col} controlId="formGridCarrer">
							<Form.Label>Carrera</Form.Label>
							<Form.Control placeholder="Carrera" />
						</Form.Group>

						<Form.Group as={Col}>
							<Form.Label>Roll</Form.Label>
							<Form.Control as="select" defaultValue="Choose..." onChange={e => setRoll(e.target.value)}>
								<option value="1">Coordinador</option>
								<option value="2">Profesor</option>
							</Form.Control>
						</Form.Group>

						<Button variant="success" className="btn-block" onClick={createProfessor}>
							Añadir
						</Button>
					</Form.Row>
				</Form>
			</Row>
		</Container>
	);
};
