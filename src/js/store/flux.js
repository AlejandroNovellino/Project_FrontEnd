const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			user: {},
			nationalities: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
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
			createProfessor: async (fullName, email, ci, phoneNumber, age, residence, career) => {
				let response = await fetch("http://192.168.0.111:4000/professor", {
					method: "POST",
					body: JSON.stringify({
						fullName,
						email,
						ci,
						phoneNumber,
						age,
						residence,
						career
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				return response.ok;
			}
		}
	};
};

export default getState;
