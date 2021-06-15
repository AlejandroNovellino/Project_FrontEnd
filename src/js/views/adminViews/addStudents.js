import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Context } from "../../store/appContext";

import "../../../styles/adminStyles/addStudents.scss";

export const AddStudents = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	return (
		<Container fluid className="d-flex align-items-center bg-primary p-5 h-100">
			<Container className="inputsWrapper align-items-center bg-light border border-dark rounded-lg p-4">
				<Row className="justify-content-center">
					<h2>Anadir un archivo de estudiantes</h2>
				</Row>
				<Row className="justify-content-center">
					<p className="text-center">
						El archivo debe ser en formato Excel con la informacion indicada por el consejo de escuela
					</p>
				</Row>
				<Row className="justify-content-center">
					<Form.Group controlId="formFileLg" className="mb-3">
						<Form.Label>Large file input example</Form.Label>
						<Form.Control type="file" size="lg" />
					</Form.Group>
				</Row>
			</Container>
		</Container>
	);
};
