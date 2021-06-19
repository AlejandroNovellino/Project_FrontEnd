import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import u_metric_academy from "../../img/u_metric_academy.jpg";
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
			<Navbar.Brand>
				<img src={u_metric_academy} width="40" height="40" className="d-inline-block align-top" />
			</Navbar.Brand>
			<Navbar.Brand type="button" onClick={e => history.push("/home")}>
				UMetricAcademy
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					{store.user && store.user.role == "admin" ? (
						<>
							<SplitButton variant="secondary" title={"Carreras"} className="mx-1">
								<Dropdown.Item
									eventKey="1"
									className="bg-secondary text-white"
									onClick={e => history.push("/addCathedrasFile")}>
									Añadir Archivo
								</Dropdown.Item>
							</SplitButton>
							<SplitButton variant="secondary" title={"Profesores"} className="mx-1">
								<Dropdown.Item
									eventKey="1"
									className="bg-secondary text-white"
									onClick={e => history.push("/addProfessor")}>
									Añadir Profesor
								</Dropdown.Item>
								<Dropdown.Item
									eventKey="2"
									className="bg-secondary text-white"
									onClick={e => history.push("/addProfessorsFile")}>
									Añadir Archivo
								</Dropdown.Item>
								<Dropdown.Item
									eventKey="3"
									className="bg-secondary text-white"
									onClick={e => history.push("/assignCoordinator")}>
									Asignar Coordinador
								</Dropdown.Item>
							</SplitButton>
							<SplitButton variant="secondary" title={"Estudiantes"} className="mx-1">
								<Dropdown.Item
									eventKey="1"
									className="bg-secondary text-white"
									onClick={e => history.push("/addStudentsFile")}>
									Añadir Archivo
								</Dropdown.Item>
								<Dropdown.Item
									eventKey="2"
									className="bg-secondary text-white"
									onClick={e => history.push("/addStudent")}>
									Añadir Unico
								</Dropdown.Item>
							</SplitButton>
						</>
					) : null}
					{store.user && store.user.role == "coordinator" ? (
						<>
							<SplitButton variant="secondary" title={"MisMaterias"} className="mx-1">
								<Dropdown.Item eventKey="1" className="bg-secondary text-white">
									Añadir plan de evaluación
								</Dropdown.Item>
							</SplitButton>
							<SplitButton variant="secondary" title={"MisProfesores"} className="mx-1">
								<Dropdown.Item eventKey="1" className="bg-secondary text-white">
									Profesores
								</Dropdown.Item>
							</SplitButton>
							<SplitButton variant="secondary" title={"MisEstudiantes"} className="mx-1">
								<Dropdown.Item eventKey="1" className="bg-secondary text-white">
									Estudiantes
								</Dropdown.Item>
							</SplitButton>
						</>
					) : null}
					{store.user && store.user.role == "professor" ? (
						<>
							<SplitButton variant="secondary" title={"MisMaterias"} className="mx-1">
								<Dropdown.Item eventKey="1" className="bg-secondary text-white">
									Materias
								</Dropdown.Item>
							</SplitButton>
							<SplitButton variant="secondary" title={"MisEstudiantes"} className="mx-1">
								<Dropdown.Item eventKey="1" className="bg-secondary text-white">
									Estudiantes
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
