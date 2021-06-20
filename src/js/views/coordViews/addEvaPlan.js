import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Context } from "../../store/appContext";

import "../../../styles/adminStyles/addFromFile.scss";

export const AddEvaPlan = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	return (
		<Container fluid className="d-flex align-items-center bg-primary p-5 h-100">
			<Container className="fileWrapper align-items-center bg-light border border-dark rounded-lg p-4">
				<Row className="justify-content-center h-25">
					<h2>Anadir un plan de evaluacion</h2>
				</Row>
				<Row className="justify-content-center h-25">
					<p className="text-center">
						El archivo debe ser en formato Excel con la informacion indicada por el consejo de escuela
					</p>
				</Row>
				<Row className="justify-content-center h-25" />
				<Row className="h-25">
					<Button variant="primary" size="lg" className="m-auto">
						Cargar
					</Button>
				</Row>
			</Container>
		</Container>
	);
};
