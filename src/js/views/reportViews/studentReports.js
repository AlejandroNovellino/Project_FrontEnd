import React from "react";
import ReactDOM from "react-dom";

export const studentReports = () => {
	return (
		<Container fluid className="d-flex align-items-center bg-primary p-5 h-100">
			<Container className="fileWrapper align-items-center bg-light border border-dark rounded-lg p-4">
				<Row className="justify-content-center h-25">
					<h2>Descargar un reporte de mis estudiantes</h2>
				</Row>
				<Row className="justify-content-center h-25">
					<p className="text-center">
						El archivo se va a descargar en formato "" 
					</p>
				</Row>
				<Row className="justify-content-center h-25">
					<div className="custom-file m-auto">
						<input
							type="file"
							className="custom-file-input"
							name="myFile"
						/>
						<label className="custom-file-label m-auto w-75">{}</label>
					</div>
				</Row>
				<Row className="h-25">
					<Button variant="primary" size="lg" className="m-auto" onClick={DownloadFile}>
						Cargar
					</Button>
				</Row>
			</Container>
		</Container>
	);
};

export default studentReports;
