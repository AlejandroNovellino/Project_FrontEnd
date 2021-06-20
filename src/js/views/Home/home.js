import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { Context } from "../../store/appContext";

import "../../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [cardsInfo, setCardsInfo] = useState(_ => {
		if (store.user.role == "admin") {
		} else if (store.role == "professor") {
		} else if (store.role == "coordinator") {
		}
	});

	const history = useHistory();

	return (
		<Container fluid className="bg-primary h-100">
			<Row className="h-100">
				<Col md={3} className="bg-white h-100">
					<Nav variant="pills" defaultActiveKey="" className="flex-column">
						<Nav.Item>
							<Button className="text-center btn-block my-1" variant="secondary">
								Graficos
							</Button>
						</Nav.Item>
						<Nav.Item>
							<Button className="text-center btn-block my-1" variant="secondary">
								Reportes
							</Button>
						</Nav.Item>
					</Nav>
				</Col>
				<Col md={9}>
					<Container />
				</Col>
			</Row>
		</Container>
	);
};
