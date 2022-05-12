import axiosInstance from './instance'
import { auth } from '../auth/auth'
import { getData } from '../methods/get'
import { setData } from '../methods/set'
import { changeData } from '../methods/change'
import { deleteData } from '../methods/delete'

async function signIn (data) {
    try {
        const result = await auth(axiosInstance, data)

        const token = result.data.access_token
        const refreshToken = result.data.refresh_token

        localStorage.setItem('user-token', token)
        localStorage.setItem('refresh-token', refreshToken)

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
}

async function getServerData (serviceName) {
    try {
        const result = await getData(axiosInstance, serviceName);
        return result
    } catch (err) {
        return err
    }
}

async function setServerData (serviceName, data) {
    try {
        const result = await setData(axiosInstance, serviceName, data);
        return result;
    } catch (error) {
        return err
    }
}

async function changeServerData (serviceName, data) {
    try {
        const result = await changeData(axiosInstance, serviceName, data);
        return result;
    } catch (error) {
        return err
    }
}

async function deleteServerData (serviceName) {
    try {
        const result = await deleteData(axiosInstance, serviceName);
        return result;
    } catch (error) {
        return err
    }
}

export default { signIn, logOut, getServerData, setServerData, changeServerData, deleteServerData }