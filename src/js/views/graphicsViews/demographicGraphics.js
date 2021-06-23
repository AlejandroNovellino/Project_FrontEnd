import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Pie } from "react-chartjs-2";

import { Context } from "../../store/appContext";

export const DemographicGraphics = () => {
	const { store, actions } = useContext(Context);
	const [demograficInfo, setDemograficInfo] = useState();

	useEffect(_ => {
		const getDemograficInfo = async _ => {
			const aux = await actions.getAllElementInfo("students");
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
						{demograficInfo &&
							demograficInfo.map((element, index) => {
								return (
									<Pie key={index}>
										{element.age}
										{element.nationality}
										{element.residence}
										{element.career}
									</Pie>
								);
							})}
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
