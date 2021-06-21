import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { LogIn } from "./views/home/logIn";
import { Home } from "./views/home/home";

import injectContext from "./store/appContext";
import { Admin } from "./views/adminViews/admin";
import { Estudiantes } from "./views/estudiantes";
import { Cathedras } from "./views/coordViews/cathedras";
import { Profesores } from "./views/profesores";
import { AddCathedrasFile } from "./views/adminViews/addCathedrasFile";
import { AddCoursesFile } from "./views/adminViews/addCoursesFile";
import { AddGradesFile } from "./views/adminViews/addGradesFile";
import { AddProfessorsFile } from "./views/adminViews/addProfessorsFile";
import { AddStudentsFile } from "./views/adminViews/addStudentsFile";
import { AddProfessor } from "./views/adminViews/addProfessor";
import { AddStudent } from "./views/adminViews/addStudent";
import { AddEvaPlan } from "./views/coordViews/addEvaPlan";
import { AssignCoordinator } from "./views/adminViews/assignCoordinator";
import { Reports } from "./views/reports";

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
							<Cathedras />
						</Route>
						<Route exact path="/estudiantes">
							<Estudiantes />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/addCathedrasFile">
							<AddCathedrasFile />
						</Route>
						<Route exact path="/addCoursesFile">
							<AddCoursesFile />
						</Route>
						<Route exact path="/addGradesFile">
							<AddGradesFile />
						</Route>
						<Route exact path="/addProfessorsFile">
							<AddProfessorsFile />
						</Route>
						<Route exact path="/addStudentsFile">
							<AddStudentsFile />
						</Route>
						<Route exact path="/addProfessor">
							<AddProfessor />
						</Route>
						<Route exact path="/addStudent">
							<AddStudent />
						</Route>
						<Route exact path="/addEvaPlan">
							<AddEvaPlan />
						</Route>
						<Route exact path="/assignCoordinator">
							<AssignCoordinator />
						</Route>
						<Route exact path="/reports">
							<Reports />
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
