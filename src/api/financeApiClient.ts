import axios from "axios";
const financeApiClient = axios.create({
	baseURL: import.meta.env.VITE_FINANCE_API_ADDRESS,
});

financeApiClient.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error.response.data);
	}
);

export default financeApiClient;
