import axios from "axios"

const api = axios.create({

    baseURL: `http://${process.env.REACT_APP_API_BASE_URL}`,
    timeout: 5000,
})

export default api