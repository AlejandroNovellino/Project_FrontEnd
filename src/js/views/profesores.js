//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { Card, CardColumns, small, Form, Button } from "react-bootstrap";

export const Profesores = () => {
	return (
		<div>
			<h2> Profesores </h2>
			<CardColumns>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
					<Card.Title>Nombre del profesor</Card.Title>
					<Card.Text> carrera, materias 
					</Card.Text>
					</Card.Body>
					<Card.Footer>
					<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
					<Card.Title>nombre del profesor</Card.Title>
					<Card.Text> carrera, materias 
					</Card.Text>
					</Card.Body>
					<Card.Footer>
					<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
					<Card.Title>Nombre del Profesor</Card.Title>
					<Card.Text> carrera, materias 
					</Card.Text>
					</Card.Body>
					<Card.Footer>
					<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
			</CardColumns>
		</div>
	);
};

export default Profesores;
