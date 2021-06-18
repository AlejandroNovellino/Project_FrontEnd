import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Context } from "../../store/appContext";

import "../../../styles/adminStyles/addFromFile.scss";

export const AddStudentsFile = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const [file, setFile] = useState(null);

	const uploadFile = async e => {
		let myFile = file;

		const formData = new FormData();
		formData.append("myFile", myFile);

		const response = await actions.uploadStudentsFile(formData);

		history.push("/home");
	};

	return (
		<Container fluid className="d-flex align-items-center bg-primary p-5 h-100">
			<Container className="fileWrapper align-items-center bg-light border border-dark rounded-lg p-4">
				<Row className="justify-content-center h-25">
					<h2>Anadir un archivo de estudiantes</h2>
				</Row>
				<Row className="justify-content-center h-25">
					<p className="text-center">
						El archivo debe ser en formato Excel con la informacion indicada por el consejo de escuela
					</p>
				</Row>
				<Row className="justify-content-center h-25">
					<div className="custom-file m-auto">
						<input
							type="file"
							className="custom-file-input"
							name="myFile"
							onChange={e => setFile(e.target.files[0])}
						/>
						<label className="custom-file-label m-auto w-75">{file ? file.name : "Choose File"}</label>
					</div>
				</Row>
				<Row className="h-25">
					<Button variant="primary" size="lg" className="m-auto" onClick={uploadFile}>
						Cargar
					</Button>
				</Row>
			</Container>
		</Container>
	);
};
