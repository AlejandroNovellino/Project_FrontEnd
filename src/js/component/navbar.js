import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">UMetricademy</span>
			</Link>
			<Link to="/materias">
				<span className="navbar-brand mb-0 h1">Materias</span>
			</Link>
			<Link to="/carreras">
				<span className="navbar-brand mb-0 h1">Carreras</span>
			</Link>
			<Link to="/estudiantes">
				<span className="navbar-brand mb-0 h1">Estudiantes</span>
			</Link>
			<Link to="/profesores">
				<span className="navbar-brand mb-0 h1">Profesores</span>
			</Link>
			<div className="ml-auto">
				<Link to="/admin">
					<button className="btn btn-primary">Login-admin</button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
