import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, CardDeck, Card, Button } from "react-bootstrap";
import { Context } from "../../store/appContext";

export const Cathedras = () => {
	const { store, actions } = useContext(Context);
	useEffect(_ => {
		const getCareers = async _ => {};
	}, []);

	return (
		<Container fluid>
			<Row>
				<h1> Materias:</h1>
			</Row>
			<Row>
				<CardDeck>
					<Card bg="secondary" style={{ width: "18rem" }} className="mb-2">
						<Card.Header>Medicina</Card.Header>
						<Card.Body>
							<Card.Title> Card Title </Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</Card.Text>
							<Button variant="info" size="lg">
								Info
							</Button>
						</Card.Body>
					</Card>
					<Card bg="secondary" style={{ width: "18rem" }} className="mb-2">
						<Card.Header>Ingenieria</Card.Header>
						<Card.Body>
							<Card.Title> Card Title </Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</Card.Text>
							<Button variant="info" size="lg">
								Info
							</Button>
						</Card.Body>
					</Card>
					<Card bg="secondary" style={{ width: "18rem" }} className="mb-2">
						<Card.Header>Derecho</Card.Header>
						<Card.Body>
							<Card.Title> Card Title </Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</Card.Text>
							<Button variant="info" size="lg">
								Info
							</Button>
						</Card.Body>
					</Card>
				</CardDeck>
			</Row>
		</Container>
	);
};
