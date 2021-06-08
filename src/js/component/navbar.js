import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Navbar, Form } from "react-bootstrap";

export const AppNavbar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#">UMetricAcademy</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

{
	/* <nav className="navbar navbar-light bg-light mb-3">
	<Link to="/">
		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
	</Link>
	<div className="ml-auto">
		<Link to="/demo">
			<button className="btn btn-primary">Check the Context in action</button>
		</Link>
	</div>
</nav> */
}
