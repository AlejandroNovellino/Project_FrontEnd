import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Button, Jumbotron } from "react-bootstrap";
import { Pie } from "react-chartjs-2";

import { Context } from "../../store/appContext";

export const DemographicGraphics = () => {
	const { store, actions } = useContext(Context);
	const [labels, setLabels] = useState("");
	const [graphicInfo, setGraphicData] = useState("");

	useEffect(_ => {
		const getDemograficInfo = async _ => {
			const aux = await actions.getAllElementInfo("students");
			const graphicInfo = aux.map(element => {
				return element.nationality;
			});
			console.log(graphicInfo);
			setLabels(aux);
		};
		getDemograficInfo();
	}, []);

	const data = {
		labels: labels,
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
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
					<h2>Grafica de la informacion demografia de los estudiantes</h2>
				</Row>
				<Row className="justify-content-center h-25">
					<div className="custom-file m-auto">
						<Pie height={80} width={80} data={data} />
					</div>
				</Row>
			</Jumbotron>
		</Container>
	);
};
