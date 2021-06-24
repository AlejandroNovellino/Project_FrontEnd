import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Context } from "../../store/appContext";

import "../../../styles/logIn.scss";

export const LogIn = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = async _ => {
		let result = await actions.logIn(email, password);
		if (result) {
			history.push("/home");
		} else {
			alert("Bad credentials");
		}
	};

	return (
		<Container fluid className="d-flex align-items-center bg-primary p-5 h-100">
			<Container className="inputsWrapper align-items-center bg-light border border-dark rounded-lg p-4">
				<Row className="justify-content-center h-100 m-0">
					<Col lg={10} className="d-flex align-items-center">
						<Form.Control
							type="email"
							placeholder="Email"
							className="d-block"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</Col>
					<Col lg={10} className="d-flex align-items-center">
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</Col>
					<Col lg={5} className="d-flex align-items-center">
						<Button variant="primary" className="btn-block" onClick={signIn}>
							Log-in
						</Button>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
