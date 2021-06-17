//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../../styles/carreras.scss";

export const Carreras = () => {
	return (
		<div>
			<h1 className="encabezado">Carreras: </h1>

			<div className="contenedorpostal">
				<div className="postal">
					<img
						className="imgpostal"
						src="https://www.graphicsprings.com/filestorage/stencils/62eedfb5818a17fdb9581b1b9324a630.png?width=500&height=500"
					/>
					<h2>Medicina</h2>
				</div>

				<div className="postal">
					<img className="imgpostal" src="https://image.flaticon.com/icons/png/512/1781/1781182.png" />
					<h2>Derecho</h2>
				</div>

				<div className="postal">
					<img className="imgpostal" src="https://image.flaticon.com/icons/png/512/401/401599.png" />
					<h2>Ingeniería</h2>
				</div>
			</div>
		</div>
	);
};

export default Carreras;
