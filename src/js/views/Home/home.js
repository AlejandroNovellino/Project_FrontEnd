import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { Context } from "../../store/appContext";

import "../../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	return (
		<Container fluid className="bg-primary h-100">
			<Row className="h-100">
				<Col xs={3} className="bg-dark h-100 py-2">
					<Nav variant="pills" defaultActiveKey="" className="flex-column">
						<Nav.Item>
							<Button className="text-center btn-block my-1" variant="secondary">
								Graficos
							</Button>
						</Nav.Item>
						<Nav.Item>
							<Button
								className="text-center btn-block my-1"
								variant="secondary"
								onClick={_ => history.push("/reports")}>
								Reportes
							</Button>
						</Nav.Item>
					</Nav>
				</Col>
				<Col xs={9}>{store.user.role == "admin" ? <></> : null}</Col>
			</Row>
		</Container>
	);
};
