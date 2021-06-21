import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import { Context } from "../../store/appContext";

export const Careers = () => {
	const { store, actions } = useContext(Context);
	const [careers, setCareers] = useState(null);

	useEffect(_ => {
		const getCareers = async _ => {
			await actions.getAllCareers();
		};
		getCareers();
	}, []);

	return (
		<Container fluid className="h-100">
			<Row className="justify-content-center">
				<p className="display-4 text-light mt-2 mb-3">Carreras</p>
			</Row>
			<Row className="h-75">
				<Col xs={12} className="h-100">
					<CardDeck>
						{store.careers &&
							store.careers.map((career, index) => {
								return (
									<Card
										key={index}
										bg="secondary"
										text="light"
										style={{ width: "18rem" }}
										className="mb-2">
										<Card.Header className="text-center display-4">{career}</Card.Header>
										<Card.Body>
											<Card.Text>
												Some quick example text to build on the card title and make up the bulk
												of the cards content.
											</Card.Text>
										</Card.Body>
									</Card>
								);
							})}
					</CardDeck>
				</Col>
			</Row>
		</Container>
	);
};
