import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
	baseURL: 'http://localhost:8080',
	timeout: 20000,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYiLCJpYXQiOjE3Mjg0ODE0OTEsImV4cCI6MTcyODY1NDI5MX0.0P25wV0wpGbYAckLqCZKKxiMkh08JcLwcw7sa9Mq3ac`, // Assuming the token is stored in localStorage
	},
})

export default axiosInstance
