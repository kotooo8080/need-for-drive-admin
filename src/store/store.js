import { createStore } from 'vuex';
import axios from 'axios'

const store = createStore({
    state: {
        status: '',

        token: localStorage.getItem('user-token') || '',
        refreshToken: localStorage.getItem('refresh-token') || '',
    },

    mutations: {
        authSuccess( state, token, refreshToken ){
            state.status = 'success';

            state.token = token;
            state.refreshToken = refreshToken;
        },

        authError( state ){
            state.status = 'error';
        },

        logout( state ){
            state.status = '';

            state.token = '';
            state.refreshToken = ''
        },
    },

    actions: {
        login({ commit }, data) {
            return new Promise((resolve, reject) => {
                axios({ 
                    method: 'post',
                    url: 'https://api-factory.simbirsoft1.com/api/auth/login',
                    headers: {
                        'X-Api-Factory-Application-Id': process.env.VUE_APP_APPLICATION_ID,
                        'Authorization': 'Basic ' + window.btoa(unescape(encodeURIComponent(
                            process.env.VUE_APP_RANDOM_HASH + 
                            ':' + 
                            process.env.VUE_APP_CLIENT_SECRET
                        ))),
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                    data: {
                        "username": data.email,
                        "password": data.password,
                    }  
                })
                .then(res => {
                    const token = res.data.access_token;
                    const refreshToken = res.data.refresh_token;

                    localStorage.setItem('user-token', token);
                    localStorage.setItem('refresh-token', refreshToken);

                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    commit('authSuccess', token, refreshToken);

                    resolve(res);
                })
                .catch(err => {
                    commit('authError');

                    localStorage.removeItem('user-token');
                    localStorage.removeItem('refresh-token');

                    reject(err);
                })
            })
        },

        logout({ commit }) {
            return new Promise((resolve) => {
                commit('logout');

                localStorage.removeItem('user-token');
                localStorage.removeItem('refresh-token');
                
                delete axios.defaults.headers.common['Authorization'];
                resolve();
            })
        }
    },

    getters : {
        authStatus: state => state.status,
        isLoggedIn: state => !!state.token,
    }
})

export default store;