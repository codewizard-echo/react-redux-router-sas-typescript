// import requestAPI from "../utils/requestAPI";

import { ResponseProps } from "./utils";

export interface UserInfo {
	firstname: string;
	lastname: string;
	email: string;
}

export const login = (username: string, password: string) => {
		//requestAPI.get(...)
		return new Promise<ResponseProps<UserInfo>>((resolve, reject) => {
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
