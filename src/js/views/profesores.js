//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { Form, Button } from "react-bootstrap";

export const Profesores = () => {
	return (
		<div>
			<h1> Profesores: </h1>
			<Form>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridName">
						<Form.Label>Nombre Completo</Form.Label>
						<Form.Control type="Name" placeholder="Nombre Completo" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="Email" placeholder="Email" />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group controlId="formGridDNI">
						<Form.Label>Cedula</Form.Label>
						<Form.Control placeholder="Cedula" />
					</Form.Group>

					<Form.Group controlId="formGridPhoneNumber">
						<Form.Label>Número de Telefono </Form.Label>
						<Form.Control placeholder="Telefono" />
					</Form.Group>
					
					<Form.Group controlId="formGridAge">
						<Form.Label>Edad</Form.Label>
						<Form.Control placeholder="Edad" />
					</Form.Group>
				</Form.Row>
				<Form.Row>

					<Form.Group as={Col} controlId="formGridNacionality">
						<Form.Label>Nacionalidad</Form.Label>
						<Form.Control />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridaddress">
						<Form.Label>Dirección</Form.Label>
						<Form.Control placeholder="Dirección"  />
					</Form.Group>

				</Form.Row>
				<Form.Row>

					<Form.Group as={Col} controlId="formGridCarrer">
						<Form.Label>Carrera</Form.Label>
						<Form.Control placeholder="Carrera" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridRole">
						<Form.Label>Roll</Form.Label>
						<Form.Control as="select" defaultValue="Choose...">
							<option>coordinator</option>
							<option>Profesor</option>
						</Form.Control>
					</Form.Group>

				<Button variant="success" type="submit">
					➕ Listo
				</Button>
				</Form.Row>
			</Form>
		</div>
	);
};

export default Profesores;
