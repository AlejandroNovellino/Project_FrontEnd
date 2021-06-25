import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import { Pie } from "react-chartjs-2";

import { Context } from "../../store/appContext";

export const StudentGraphics = () => {
	const { store, actions } = useContext(Context);
	const [graphicData, setGraphicData] = useState([]);

	useEffect(_ => {
		const getInfo = async _ => {
			const aux = await actions.getAllElementInfo("professors");

			const auxData = aux.reduce((arr, element) => {
				const career = element.career;
				if (Object.keys(arr).includes(career)) {
					arr[career] += 1;
				} else {
					arr[career] = 1;
				}
				return arr;
			}, []);

			setGraphicData(auxData);
		};
		getInfo();
	}, []);

	const data = {
		labels: Object.keys(graphicData),
		datasets: [
			{
				label: "# of persona with this nationality",
				data: Object.values(graphicData),
				backgroundColor: [
					"rgba(87, 90, 108, 0.6)",
					"rgba(179, 197, 64, 0.6)",
					"rgba(224, 226, 210, 0.6)",
					"rgba(54, 135, 201, 0.6)"
				],
				borderColor: [
					"rgba(87, 90, 108, 1)",
					"rgba(179, 197, 64, 1)",
					"rgba(224, 226, 210, 1)",
					"rgba(54, 135, 201, 1)"
				],
				borderWidth: 1
			}
		]
	};

	return (
		<Container fluid className="bg-primary p-5">
			<Jumbotron className="m-0 pt-2 pb-4">
				<Row className="justify-content-center h-25">
					<h2 className="text-center">Grafica de la informacion demografia de los profesores</h2>
				</Row>
				<Row className="justify-content-center h-25">
					<Col xs={7}>
						<Pie id="pieChart" data={data} />
					</Col>
				</Row>
			</Jumbotron>
		</Container>
	);
};
