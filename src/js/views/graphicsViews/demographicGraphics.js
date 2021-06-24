import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Pie } from "react-chartjs-2";

import { Context } from "../../store/appContext";

export const DemographicGraphics = () => {
	const { store, actions } = useContext(Context);
	const [demograficInfo, setDemograficInfo] = useState();

	// const data = {
	// 	labels:
	// 	dataset:[{
	// 		data:

	// 	}],
	// };

	const getInfo = async () => {
		const info = await actions.getAllElementInfo();
		const response = await actions.getInfo("Info", info);
	};

	useEffect(_ => {
		const getDemograficInfo = async _ => {
			const aux = await actions.getAllElementInfo("students");
			const graphicInfo = aux.reduce((accum, element) => {
				return element.nacionality;
			}, []);
			setDemograficInfo(aux);
		};
		getDemograficInfo();
	}, []);
	return (
		<Container fluid className="d-flex align-items-center bg-primary p-5 h-100">
			<Container className="fileWrapper align-items-center bg-light border border-dark rounded-lg p-4">
				<Row className="justify-content-center h-25">
					<h2>Grafica de la informacion demografia de mis estudiantes</h2>
				</Row>
				<Row className="justify-content-center h-25">
					<div className="custom-file m-auto">
						<Pie data={demograficInfo} />
					</div>
				</Row>
				<Row className="h-25">
					<Button variant="primary" size="lg" className="m-auto">
						Cargar
					</Button>
				</Row>
			</Container>
		</Container>
	);
};
