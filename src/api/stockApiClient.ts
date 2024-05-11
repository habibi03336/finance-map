import axios from "axios";
const stockApiClient = axios.create({
	baseURL: import.meta.env.VITE_STOCK_API_ADDRESS,
	validateStatus: function () {
		return true; // always true, error handled by application code by status code
	},
});

stockApiClient.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error.response.data);
	}
);

export default stockApiClient;
