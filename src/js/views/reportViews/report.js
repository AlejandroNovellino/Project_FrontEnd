import React from "react";
import ReactDOM from "react-dom";

export const report = () => {
	return (
		<>
			<ButtonToolbar aria-label="Toolbar with button groups">
					<Button size="lg" className="mb-2" variant="secondary">Informacion demografica</Button> 
					<Button size="lg" className="mb-2" variant="secondary">informe de desempeño de profesores</Button> 
					<Button size="lg" className="mb-2" variant="secondary">Informe de desempeño de estudiantes</Button>
			</ButtonToolbar>
        </>
	);
};

export default report;
