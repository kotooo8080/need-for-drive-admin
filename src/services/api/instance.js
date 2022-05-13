import axios from 'axios'

const axiosInstance = {
    instance: axios.create({
        baseURL: process.env.VUE_APP_BASE_URL,
        headers: {
            'X-Api-Factory-Application-Id': process.env.VUE_APP_APPLICATION_ID,
            'Authorization': localStorage.getItem('user-token') ? 
                `Bearer ${localStorage.getItem('user-token')}` : 
                'Basic ' + window.btoa(unescape(encodeURIComponent(
                    process.env.VUE_APP_RANDOM_HASH + 
                    ':' + process.env.VUE_APP_CLIENT_SECRET
                ))),
            'Content-type': 'application/json; charset=UTF-8'
        },
    }),
}

export default axiosInstance