//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Profesores = () => {
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const[dni, setDni] = useState("");
	const [phonenumber, setphonenumber] = useState("");
	const [age, setage] = useState("");
	const [direction, setdirection] = useState("");

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
							onChange={e => setname(e.target.value)}/>
						</Form.Group>

						<Form.Group as={Col}>
							<Form.Label>Email</Form.Label>
							<Form.Control type="Email" placeholder="Email" value={email} onChange={e => setemail(e.target.value)}/>
						</Form.Group>
					</Form.Row>
					<Form.Row className="d-flex justify-content-between" >
						<Form.Group>
							<Form.Label>Cedula</Form.Label>
							<Form.Control placeholder="Cedula" value={dni} onChange={e => setDni(e.target.value)}/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Número de Telefono </Form.Label>
							<Form.Control placeholder="Telefono" value={phonenumber} onChange={e => setphonenumber(e.target.value)}/>
						</Form.Group>

						<Form.Group >
							<Form.Label>Edad</Form.Label>
							<Form.Control placeholder="Edad" value={age} onChange={e => setage(e.target.value)}/>
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridNacionality">
							<Form.Label>Nacionalidad</Form.Label>
							<Form.Control />
						</Form.Group>

						<Form.Group as={Col}>
							<Form.Label>Dirección</Form.Label>
							<Form.Control placeholder="Dirección" value={direction} onChange={e => setdirection(e.target.value)}/>
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridCarrer">
							<Form.Label>Carrera</Form.Label>
							<Form.Control placeholder="Carrera"/>
						</Form.Group>

						<Form.Group as={Col}>
							<Form.Label>Roll</Form.Label>
							<Form.Control as="select" defaultValue="Choose..." >
								<option>coordinator</option>
								<option>Profesor</option>
							</Form.Control>
						</Form.Group>

						<Button variant="success" type="submit">
							➕ Listo
						</Button>
					</Form.Row>
				</Form>
			</Row>
		</Container>
	);
};

export default Profesores;
