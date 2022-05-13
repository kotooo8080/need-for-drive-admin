import axiosInstance from './instance'
import { auth } from '../auth/auth'

async function signIn (data) {
    try {
        const result = await auth(axiosInstance, data)

        const token = result.data.access_token
        const refreshToken = result.data.refresh_token

        localStorage.setItem('user-token', token)
        localStorage.setItem('refresh-token', refreshToken)

        axiosInstance.setToken(token)

        return {
            token,
            refreshToken,
        }
    } catch (err) {
        localStorage.removeItem('user-token')
        localStorage.removeItem('refresh-token')
    }
}

function logOut() {
    localStorage.removeItem('user-token');
    localStorage.removeItem('refresh-token');
                
    axiosInstance.deleteToken()
}

export default { signIn, logOut }