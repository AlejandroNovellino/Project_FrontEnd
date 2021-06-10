import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

export const AppNavbar = ({ role }) => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const logOut = _ => {
		history.push("/");
		actions.logOut();
	};

	return (
		<Navbar bg="light" expand="md">
			<Navbar.Brand href="#">UMetricAcademy</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					{store.user && store.user.role == "admin" ? (
						<>
							<Nav.Link href="#">Carreras</Nav.Link>
							<Nav.Link href="#">Materias</Nav.Link>
							<Nav.Link href="#">Profesores</Nav.Link>
						</>
					) : null}
				</Nav>
				<Nav className="ml-auto">
					{store.token ? (
						<Button variant="danger" size="sm" className="btn-block" onClick={logOut}>
							Log-out
						</Button>
					) : (
						<Nav.Link href="#">Help</Nav.Link>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

AppNavbar.propTypes = {
	role: PropTypes.string
};
