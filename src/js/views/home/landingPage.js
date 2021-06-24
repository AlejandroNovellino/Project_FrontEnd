import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { Context } from "../../store/appContext";

import "../../../styles/home.scss";

export const LandingPage = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	return (
		<Container fluid className="bg-primary h-100 p-5">
			<Jumbotron className="m-0 pt-2 pb-4">
				<Row>
					<Col xs={12}>
						<p className="display-4 text-center mt-4 mb-5">Bienvenido {store.user.email}</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<h5 className="text-center pb-2">{`En el navbar se encuentra la informacion relacionada a:`}</h5>
						{store.user.role == "admin" && (
							<h5 className="text-center pb-4">
								<strong>{`"Carreras"`}</strong>, <strong>{`"Profesores"`}</strong> y{" "}
								<strong>{`"Estudiantes"`}</strong>
							</h5>
						)}
						{store.user.role == "coordinator" && (
							<h5 className="text-center pb-4">
								<strong>{`"Materias pertenecientes"`}</strong>,{" "}
								<strong>{`"Profesores adjuntos a la materia"`}</strong> y{" "}
								<strong>{`"Estudiantes de las materias que se dictan"`}</strong>
							</h5>
						)}
						{store.user.role == "coordinator" && (
							<h5 className="text-center pb-4">
								<strong>{`"Materias pertenecientes"`}</strong>, y{" "}
								<strong>{`"Estudiantes de las materias que se dictan"`}</strong>
							</h5>
						)}
						<h5 className="text-center pb-2">
							{`En el menu de la izquierda se encuentran la informacion relacionada a:`}
						</h5>
						<h5 className="text-center pb-2">
							{store.user.role == "coordinator" && <strong>{`"Planes de Evaluacion"`}</strong>}
							<strong>{`"Graficas"`}</strong> y <strong>{`"Reportes"`}</strong>
						</h5>
					</Col>
				</Row>
			</Jumbotron>
		</Container>
	);
};
