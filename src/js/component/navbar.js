import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
import {
	Container,
	Row,
	Col,
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
	SplitButton,
	Dropdown,
	ButtonGroup
} from "react-bootstrap";

import "../../styles/navbar.scss";

export const AppNavbar = ({ role }) => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const logOut = _ => {
		history.push("/");
		actions.logOut();
	};

	return (
		<Navbar bg="light" expand="md">
			<Navbar.Brand href="/home">UMetricAcademy</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					{store.user && store.user.role == "admin" ? (
						<>
							<SplitButton variant="secondary" title={"Carreras"} className="mx-1">
								<Dropdown.Item eventKey="1" className="bg-secondary text-white">
									Añadir Materias
								</Dropdown.Item>
							</SplitButton>
							<SplitButton variant="secondary" title={"Profesores"} className="mx-1">
								<Dropdown.Item eventKey="1" className="bg-secondary text-white">
									Añadir Profesores
								</Dropdown.Item>
							</SplitButton>
							<SplitButton variant="secondary" title={"Estudiantes"} className="mx-1">
								<Dropdown.Item
									eventKey="1"
									className="bg-secondary text-white"
									onClick={e => history.push("/addStudents")}>
									Añadir Archivo
								</Dropdown.Item>
								<Dropdown.Item eventKey="2" className="bg-secondary text-white">
									Añadir Unico
								</Dropdown.Item>
							</SplitButton>
						</>
					) : null}
					{store.user && store.user.role == "coordinator" ? (
						<>
							<Nav.Link href="#">MisMaterias</Nav.Link>
							<Nav.Link href="#">MisProfesores</Nav.Link>
							<Nav.Link href="#">MisAlumnos</Nav.Link>
							<SplitButton variant="secondary" title={"MisMaterias"} className="mx-1">
								<Dropdown.Item eventKey="1" className="bg-secondary text-white">
									Añadir Materias
								</Dropdown.Item>
							</SplitButton>
							<SplitButton variant="secondary" title={"MisProfesores"} className="mx-1">
								<Dropdown.Item eventKey="1" className="bg-secondary text-white">
									Añadir Profesores
								</Dropdown.Item>
							</SplitButton>
							<SplitButton variant="secondary" title={"MisEstudiantes"} className="mx-1">
								<Dropdown.Item eventKey="1" className="bg-secondary text-white">
									Añadir Estudiantes
								</Dropdown.Item>
							</SplitButton>
						</>
					) : null}
					{store.user && store.user.role == "professor" ? (
						<>
							<SplitButton variant="secondary" title={"MisMaterias"} className="mx-1">
								<Dropdown.Item eventKey="1" className="bg-secondary text-white">
									Añadir Materias
								</Dropdown.Item>
							</SplitButton>
							<SplitButton variant="secondary" title={"MisEstudiantes"} className="mx-1">
								<Dropdown.Item eventKey="1" className="bg-secondary text-white">
									Añadir Estudiantes
								</Dropdown.Item>
							</SplitButton>
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
