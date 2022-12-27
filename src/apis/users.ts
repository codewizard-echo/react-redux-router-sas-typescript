// import requestAPI from "../utils/requestAPI";

export const login = (username: string, password: string) => {
		//requestAPI.get(...)
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					status: 200, 
					data: {
							firstname: 'first', 
							lastname: 'last', 
							email: 'email'
					}
				});
			}, 1000);
		})
}
