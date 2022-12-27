import axios from "axios";
import { API_BASE_URL } from "../config/config";

const requestAPI = axios.create({
	baseURL: `${API_BASE_URL}/api/`,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Content-Type": "application/json",
		"X-Requested-With": "XMLHttpRequest",
	}, 
	withCredentials: true, 
});

requestAPI.interceptors.response.use(
	function (response) {
		// Do something with response data

		return response;
	}
	// , function (error, response) {
	//	 if(error.response.status === 401){
	//		 localStorage.removeItem('token');
	//		 localStorage.removeItem('role');
	//		 window.location = '/'
	//		 }
	// }
);

export default requestAPI;
