import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import { Pie } from "react-chartjs-2";

import { Context } from "../../store/appContext";

export const DemographicGraphics = () => {
	const { store, actions } = useContext(Context);
	const [graphicData, setGraphicData] = useState([]);

	useEffect(_ => {
		const getInfo = async _ => {
			const aux = await actions.getAllElementInfo("students");

			const auxData = aux.reduce((arr, element) => {
				const nationality = element.nationality;
				if (Object.keys(arr).includes(nationality)) {
					arr[nationality] += 1;
				} else {
					arr[nationality] = 1;
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
				label: "# of Votes",
				data: Object.values(graphicData),
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)"
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)"
				],
				borderWidth: 1
			}
		]
	};

	return (
		<Container fluid className="bg-primary p-5">
			<Jumbotron className="m-0 pt-2 pb-4">
				<Row className="justify-content-center h-25">
					<h2 className="text-center">Grafica de la informacion demografia de los estudiantes</h2>
				</Row>
				<Row className="justify-content-center h-25">
					<Col xs={12}>
						<Pie id="pieChart" data={data} />
					</Col>
				</Row>
			</Jumbotron>
		</Container>
	);
};
