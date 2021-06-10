import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";

import { Context } from "../store/appContext";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [cardsInfo, setCardsInfo] = useState(_ => {
		if (store.role == "admin") {
		} else if (store.role == "professor") {
		} else if (store.role == "coordinator") {
		}
	});
	return (
		<Container fluid className="bg-primary h-100">
			<Row className="h-100">
				<Col md={3} className="bg-white h-100">
					<Nav variant="pills" defaultActiveKey="" className="flex-column">
						<Nav.Item>
							{store.user.role == "coordinator" ? (
								<Nav.Link eventKey="graphs" className="text-center">
									Planes
								</Nav.Link>
							) : null}
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="graphs" className="text-center">
								Graficos
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="reports" className="text-center">
								Reportes
							</Nav.Link>
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
