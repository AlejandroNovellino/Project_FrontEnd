import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { LogIn } from "./views/logIn";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Home } from "./views/home";

import injectContext from "./store/appContext";
import { Admin } from "./views/admin";
import { Carreras } from "./views/carreras";
import { Estudiantes } from "./views/estudiantes";
import { Materias } from "./views/materias";
import { Profesores } from "./views/profesores";

import { AppNavbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column vh-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<AppNavbar />
					<Switch>
						<Route exact path="/">
							<LogIn />
						</Route>
						<Route exact path="/admin">
							<Admin />
						</Route>
						<Route exact path="/profesores">
							<Profesores />
						</Route>
						<Route exact path="/materias">
							<Materias />
						</Route>
						<Route exact path="/estudiantes">
							<Estudiantes />
						</Route>
						<Route exact path="/carreras">
							<Carreras />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
