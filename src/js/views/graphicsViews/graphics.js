import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const Graphics = () => {
	const history = useHistory();

	return (
		<Container fluid className="bg-primary h-100 p-5">
			<Jumbotron className="m-0 pt-2 pb-4">
				<Row>
					<Col xs={12}>
						<h2 className="text-center my-3">Graficas para generar disponibles</h2>
					</Col>
				</Row>
				<Row>
					<Col xs={4}>
						<Button
							size="lg"
							className="btn-block mb-2"
							variant="secondary"
							onClick={_ => history.push("/demographicGraphics")}>
							Informacion demografica estudiantes
						</Button>
					</Col>
					<Col xs={4}>
						<Button
							size="lg"
							className="btn-block mb-2"
							variant="secondary"
							onClick={_ => history.push("/teachersGraphic")}>
							Informacion demografica profesores
						</Button>
					</Col>
					<Col xs={4}>
						<Button
							size="lg"
							className="btn-block mb-2"
							variant="secondary"
							onClick={_ => history.push("/studentGraphics")}>
							Estudiantes por carrera
						</Button>
					</Col>
				</Row>
			</Jumbotron>
		</Container>
	);
};
