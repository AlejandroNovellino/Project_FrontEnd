//import react into the bundle
import React, { useState, useContext, useEffect } from "react";

import { Container, Row, Col, Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Reports = () => {
	const { store, actions } = useContext(Context);
	const [urls, setUrls] = useState([]);

	useEffect(
		() => {
			const getFile = async neededInfo => {
				let aux = [];
				for (let neededInfo of ["careers", "cathedras", "professors", "students"]) {
					let fileName = await actions.createInfoFile(neededInfo);
					const url = await actions.getFileUrl("reports", fileName);
					aux.push(url);
				}
				setUrls(aux);
			};

			getFile();
		},
		[actions.createInfoFile, actions.getFileUrl]
	);

	return (
		<Container fluid className="bg-primary h-100 p-5">
			<Jumbotron className="m-0 pt-2 pb-4">
				<Row>
					<Col xs={12}>
						<h2 className="text-center my-3">Reportes para generar disponibles</h2>
					</Col>
				</Row>

				<Row>
					<Col xs={3}>
						<a
							className="btn btn-secondary btn-block text-center my-1"
							variant="secondary"
							href={urls[0]}
							target="_blank"
							rel="noopener noreferrer"
							role="button">
							Informacion de todas las carreras
						</a>
					</Col>
					<Col xs={3}>
						<a
							className="btn btn-secondary btn-block text-center my-1"
							href={urls[1]}
							target="_blank"
							rel="noopener noreferrer"
							role="button">
							Informacion de todas las materias
						</a>
					</Col>
					<Col xs={3}>
						<a
							className="btn btn-secondary btn-block text-center my-1"
							href={urls[2]}
							target="_blank"
							rel="noopener noreferrer"
							role="button">
							Informacion de todas los profesores
						</a>
					</Col>
					<Col xs={3}>
						<a
							className="btn btn-secondary btn-block text-center my-1"
							href={urls[3]}
							target="_blank"
							rel="noopener noreferrer"
							role="button">
							Informacion de todos los estudiantes
						</a>
					</Col>
				</Row>
			</Jumbotron>
		</Container>
	);
};
