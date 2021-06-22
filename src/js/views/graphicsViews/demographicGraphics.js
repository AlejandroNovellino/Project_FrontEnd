import React from "react";
import ReactDOM from "react-dom";
import { Pie } from "react-chartjs-2"

export const demographicGraphics = () => {
	const data={
		// labels:['getDemograficInfo']
		// dataset:[{
		// 	backgroundcolor:{}
		// }]
	}
	const options={
		responsive:true
	}
	return (
		<Container fluid className="d-flex align-items-center bg-primary p-5 h-100">
			<Container className="fileWrapper align-items-center bg-light border border-dark rounded-lg p-4">
				<Row className="justify-content-center h-25">
					<h2>Generar una grafica de la informacion demografia de mis estudiantes</h2>
				</Row>
				<Row className="justify-content-center h-25">
					<div className="custom-file m-auto">
						<Pie data={data} options={options}></Pie>
					</div>
				</Row>
				<Row className="h-25">
					<Button variant="primary" size="lg" className="m-auto" onClick={}>
						Cargar
					</Button>
				</Row>
			</Container>
		</Container>
	);
};

export default demographicGraphics;
