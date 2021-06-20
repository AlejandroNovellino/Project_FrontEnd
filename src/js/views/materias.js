//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

export const Materias = () => {
	return (
		<div>
			<Row>
			<h1> Materias:</h1>
			</Row>
			<Row>
				<CardDeck>
					<Card
						bg={variant.toLowerCase()}
						key={idx}
						text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
						style={{ width: '18rem' }}
						className="mb-2"
					>
						<Card.Header>Medicina</Card.Header>
						<Card.Body>
						<Card.Title>{variant} Card Title </Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk
							of the card's content.
						</Card.Text>
						<Button variant="info" size="lg">Info</Button>{' '}
						</Card.Body>
					</Card>
					<Card
						bg={variant.toLowerCase()}
						key={idx}
						text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
						style={{ width: '18rem' }}
						className="mb-2"
					>
						<Card.Header>Ingenieria</Card.Header>
						<Card.Body>
						<Card.Title>{variant} Card Title </Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk
							of the card's content.
						</Card.Text>
						<Button variant="info" size="lg">Info</Button>{' '}
						</Card.Body>
					</Card>
					<Card
						bg={variant.toLowerCase()}
						key={idx}
						text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
						style={{ width: '18rem' }}
						className="mb-2"
					>
						<Card.Header>Derecho</Card.Header>
						<Card.Body>
						<Card.Title>{variant} Card Title </Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk
							of the card's content.
						</Card.Text>
						<Button variant="info" size="lg">Info</Button>{' '}
						</Card.Body>
					</Card>
				</CardDeck>
			</Row>

		</div>
	);
};

export default Materias;
