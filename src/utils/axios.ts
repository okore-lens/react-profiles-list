import axios from "axios";

const url = import.meta.env.VITE_HOST_API_KEY;

const axiosInstance = axios.create({
	baseURL: url,
});

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) =>
		Promise.reject(
			error?.response?.data?.content ||
				error?.response?.data?.message ||
				error?.message ||
				"Something went wrong"
		)
);

export default axiosInstance;
