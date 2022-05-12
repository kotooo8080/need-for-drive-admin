import axios from 'axios'

let AUTHORIZATION;
if(localStorage.getItem('user-token')) {
    AUTHORIZATION = `Bearer ${localStorage.getItem('user-token')}`
} else {
    AUTHORIZATION = 'Basic ' + window.btoa(unescape(encodeURIComponent(
        process.env.VUE_APP_RANDOM_HASH + 
        ':' + process.env.VUE_APP_CLIENT_SECRET
    )))
}

const axiosInstance = {
    instance: axios.create({
        baseURL: process.env.VUE_APP_BASE_URL,
        headers: {
            'X-Api-Factory-Application-Id': process.env.VUE_APP_APPLICATION_ID,
            'Authorization': AUTHORIZATION,
            'Content-type': 'application/json; charset=UTF-8'
        },
    }),
}

export default axiosInstance