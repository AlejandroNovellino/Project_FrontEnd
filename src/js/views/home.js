import React, { useState } from "react";
import { Container, Row, Col, Navbar, Form, Button } from "react-bootstrap";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Container fluid className="bg-primary p-5">
			<Container className="inputsWrapper align-items-center bg-light border border-dark rounded-lg p-4">
				<Row className="justify-content-center h-100 m-0">
					<Col lg={10} className="">
						<Form.Control
							type="input"
							placeholder="Email"
							className="d-block"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</Col>
					<Col lg={10} className="">
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</Col>
					<Col lg={5} className="">
						<Button variant="primary" className="btn-block">
							Sign-in
						</Button>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
