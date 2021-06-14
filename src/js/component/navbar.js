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
						<SplitButton
							key={Materias}
							id={`dropdown-button-drop-${Materias}`}
							drop={Materias}
							variant="secondary"
							title={`Drop ${Materias}`}
						>
							<Dropdown.Item eventKey="1">Añadir Materias</Dropdown.Item>
						</SplitButton>
						<SplitButton
							key={Profesores}
							id={`dropdown-button-drop-${Profesores}`}
							drop={Profesores}
							variant="secondary"
							title={`Drop ${Profesores}`}
						>
							<Dropdown.Item eventKey="1">Añadir Profesores</Dropdown.Item>
						</SplitButton>
						<SplitButton
							key={Estudiantes}
							id={`dropdown-button-drop-${Estudiantes}`}
							drop={Estudiantes}
							variant="secondary"
							title={`Drop ${Estudiantes}`}
						>
							<Dropdown.Item eventKey="1">Añadir Estudiantes</Dropdown.Item>
						</SplitButton>
					</>
					) : null}
					{store.user && store.user.role == "coordinator" ? (
						<>
							<Nav.Link href="#">MisMaterias</Nav.Link>
							<Nav.Link href="#">MisProfesores</Nav.Link>
							<Nav.Link href="#">MisAlumnos</Nav.Link>
						</>
					) : null}
					{store.user && store.user.role == "professor" ? (
						<>
							<Nav.Link href="#">MisMaterias</Nav.Link>
							<Nav.Link href="#">MisAlumnos</Nav.Link>
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
