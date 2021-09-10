import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d37275f85da24c608634685a650b17bf"
    }
})

export default instance