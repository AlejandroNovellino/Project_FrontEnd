const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			user: {},
			nationalities: [],
			careers: [],
			cathedras: []
		},
		actions: {
			// Use getActions to call a function within a function
			logIn: async (email, password) => {
				let response = await fetch("http://192.168.0.111:4000/log-in", {
					method: "POST",
					body: JSON.stringify({
						email,
						password
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				if (response.ok) {
					let body = await response.json();
					setStore({
						token: body.token,
						user: body.user
					});
					localStorage.setItem("token", body.token);
					localStorage.setItem("user", JSON.stringify(body.user));
					return true;
				}
				return false;
			},
			logOut: _ => {
				setStore({
					token: "",
					user: null
				});
				localStorage.removeItem("token");
				localStorage.removeItem("user");
			},
			setToken: (token, user) => {
				setStore({
					token,
					user: JSON.parse(user)
				});
			},
			uploadCathedrasFile: async myFile => {
				const response = await fetch("http://192.168.0.111:4000/upload-cathedras", {
					method: "POST",
					body: myFile
				});

				if (response.ok) {
					return true;
				} else {
					return false;
				}
			},
			uploadCoursesFile: async myFile => {
				const response = await fetch("http://192.168.0.111:4000/upload-courses", {
					method: "POST",
					body: myFile
				});

				if (response.ok) {
					return true;
				} else {
					return false;
				}
			},
			uploadGradesFile: async myFile => {
				const response = await fetch("http://192.168.0.111:4000/upload-grades", {
					method: "POST",
					body: myFile
				});

				if (response.ok) {
					return true;
				} else {
					return false;
				}
			},
			uploadProfessorsFile: async myFile => {
				const response = await fetch("http://192.168.0.111:4000/upload-professors", {
					method: "POST",
					body: myFile
				});

				if (response.ok) {
					return true;
				} else {
					return false;
				}
			},
			uploadStudentsFile: async myFile => {
				const response = await fetch("http://192.168.0.111:4000/upload-students", {
					method: "POST",
					body: myFile
				});

				if (response.ok) {
					return true;
				} else {
					return false;
				}
			},
			getAllCountries: async _ => {
				let response = await fetch("https://restcountries.eu/rest/v2/all?fields=name");

				if (response.ok) {
					const data = await response.json();
					setStore({
						nationalities: data
					});
				} else {
					return null;
				}
			},
			getAllCareers: async () => {
				try {
					let response = await fetch("http://192.168.0.111:4000/careers");

					if (response.ok) {
						const data = await response.json();
						let careers = data.map(element => {
							return element[0].toUpperCase() + element.slice(1);
						});
						setStore({
							careers: careers
						});
					} else {
						return null;
					}
				} catch {
					return null;
				}
			},
			getAllElementInfo: async elementName => {
				try {
					const response = await fetch("http://192.168.0.111:4000/" + elementName + "/info");

					if (response.ok) {
						const data = await response.json();
						return data;
					} else {
						return null;
					}
				} catch {
					return null;
				}
			},
			getAllCathedrasFromCareer: async career => {
				try {
					const response = await fetch("http://192.168.0.111:4000/cathedras/" + career);

					if (response.ok) {
						const data = await response.json();
						setStore({
							cathedras: data
						});
					} else {
						return null;
					}
				} catch {
					return null;
				}
			},
			getActivesCoursesFromCareer: async career => {
				try {
					const response = await fetch("http://192.168.0.111:4000/courses/" + career);

					if (response.ok) {
						const data = await response.json();
						return data;
					} else {
						return null;
					}
				} catch {
					return null;
				}
			},
			getCourseByCode: async code => {
				try {
					const response = await fetch("http://192.168.0.111:4000/courses/byCode/" + code);
					if (response.ok) {
						const data = response.json();
						return data;
					} else {
						return null;
					}
				} catch {
					return null;
				}
			},
			createUser: async (email, password, role, professor_id) => {
				try {
					let response = await fetch("http://192.168.0.111:4000/sign-up", {
						method: "POST",
						body: {
							email: email,
							password: password,
							role: role,
							professor_id: professor_id
						},
						header: {
							"Content-Type": "application/json"
						}
					});

					if (response.ok) {
						const new_professor = response.json();
						return new_professor;
					} else {
						return null;
					}
				} catch {
					return null;
				}
			},
			createProfessor: async (...params) => {
				try {
					const response = await fetch("http://192.168.0.111:4000/professor", {
						method: "POST",
						body: JSON.stringify({
							fullName: params[0],
							ci: params[1],
							phoneNumber: params[2],
							age: params[3],
							nationality: params[4],
							residence: params[5],
							career: params[6],
							cathedras: params[7],
							email: params[8],
							role: params[9]
						}),
						headers: {
							"Content-Type": "application/json"
						}
					});
				} catch {
					return null;
				}
			},
			createStudent: async (...params) => {
				try {
					const response = await fetch("http://192.168.0.111:4000/student", {
						method: "POST",
						body: JSON.stringify({
							fullName: params[0],
							ci: params[1],
							phoneNumber: params[2],
							age: params[3],
							nationality: params[4],
							residence: params[5],
							career: params[6]
						}),
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.ok) {
						const data = response.json();
						return data;
					} else {
						return null;
					}
				} catch {
					return null;
				}
			},
			createInscription: async (student_id, course_id) => {
				try {
					const response = await fetch("http://192.168.0.111:4000/inscription", {
						method: "POST",
						body: JSON.stringify({
							student_id: student_id,
							course_id: course_id
						}),
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.ok) {
						const data = response.json();
						return data;
					} else {
						return null;
					}
				} catch {
					return null;
				}
			},
			createEvaluation: async (course_id, name, percentage) => {
				try {
					const response = await fetch("http://192.168.0.111:4000/evaluation", {
						method: "POST",
						body: JSON.stringify({
							course_id,
							name,
							percentage
						}),
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (response.ok) {
						const data = await response.json();
						return data;
					} else {
						return null;
					}
				} catch {
					return null;
				}
			},
			// getProfessorData: async() =>{
				//try{
				// 	const response = await fetch("http://192.168.0.111:4000/professor", {
				// 		method: "POST",
				// 		body: JSON.stringify({
				// 			course_id,
				// 			name,
				// 			percentage
				// 		}),
				// 		headers: {
				// 			"Content-Type": "application/json"
				// 		}
				// 	});

				// 	if (response.ok) {
				// 		const data = await response.json();
				// 		return data;
				// 	} else {
				// 		return null;
				// 	}
				// } catch {
				// 	return null;
			// },
			// getDemograficInfo: async () =>{
				//try{
				// 	const response = await fetch("http://192.168.0.111:4000/", {
				// 		method: "POST",
				// 		body: JSON.stringify({
				// 			course_id,
				// 			name,
				// 			percentage
				// 		}),
				// 		headers: {
				// 			"Content-Type": "application/json"
				// 		}
				// 	});

				// 	if (response.ok) {
				// 		const data = await response.json();
				// 		return data;
				// 	} else {
				// 		return null;
				// 	}
				// } catch {
				// 	return null;
				//}
			//},
		}
	};
};

export default getState;
