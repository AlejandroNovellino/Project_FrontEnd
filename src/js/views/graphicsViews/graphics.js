import React from "react";
import ReactDOM from "react-dom";

export const graphics = () => {
	return (
		<>
		<ButtonToolbar aria-label="Toolbar with button groups">
				<Button size="lg" className="mb-2" variant="secondary">Graficas sobre Informacion demografica</Button> 
				<Button size="lg" className="mb-2" variant="secondary">Graficas sobre el desempeño del profesore</Button> 
				<Button size="lg" className="mb-2" variant="secondary">GRafias sobre el desempeño de un estudiantes</Button>
		</ButtonToolbar>
        </>
	);
};

export default graphics;
