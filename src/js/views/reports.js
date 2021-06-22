//import react into the bundle
import React, { useState, useContext, useEffect } from "react";

import { Container, Row, Col, Button, Jumbotron } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Reports = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container fluid className="bg-primary h-100 p-5">
			<Jumbotron className="m-0 pt-2 pb-4">
				<Row>
					<Col xs={12}>
						<h2 className="text-center my-3">Reportes para generar disponibles</h2>
					</Col>
				</Row>

				{store.user.role == "admin" ? (
					<Row>
						<Col xs={3}>
							<Button className="text-center btn-block my-1" variant="secondary">
								Informacion de todas las carreras
							</Button>
						</Col>
						<Col xs={3}>
							<Button className="text-center btn-block my-1" variant="secondary">
								Informacion de todas las materias
							</Button>
						</Col>
						<Col xs={3}>
							<Button className="text-center btn-block my-1" variant="secondary">
								Informacion de todas los profesores
							</Button>
						</Col>
						<Col xs={3}>
							<Button className="text-center btn-block my-1" variant="secondary">
								Informacion de todos los estudiantes
							</Button>
						</Col>
					</Row>
				) : store.user.role == "coordinator" ? (
					<Row>
						<Col xs={4}>
							<Button className="text-center btn-block my-1" variant="secondary">
								Informacion de mis materias
							</Button>
						</Col>
						<Col xs={4}>
							<Button className="text-center btn-block my-1" variant="secondary">
								Informacion de mis profesores
							</Button>
						</Col>
						<Col xs={4}>
							<Button className="text-center btn-block my-1" variant="secondary">
								Informacion de mis estudiantes
							</Button>
						</Col>
					</Row>
				) : (
					<Row>
						<Col xs={4}>
							<Button className="text-center btn-block my-1" variant="secondary">
								Informacion de todas las carreras
							</Button>
						</Col>
						<Col xs={4}>
							<Button className="text-center btn-block my-1" variant="secondary">
								Informacion de todas las materias
							</Button>
						</Col>
						<Col xs={4}>
							<Button className="text-center btn-block my-1" variant="secondary">
								Informacion de todos los estudiantes
							</Button>
						</Col>
					</Row>
				)}
			</Jumbotron>
		</Container>
	);
};
