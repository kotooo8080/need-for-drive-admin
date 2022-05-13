import { createStore } from 'vuex'
import api from '../services/api/api'

const store = createStore({
    state: {
        status: '',
        err: null,
        token: localStorage.getItem('user-token') || '',
        refreshToken: localStorage.getItem('refresh-token') || '',
    },

    mutations: {
        authSuccess( state, token, refreshToken ){
            state.status = 'success';

            state.token = token;
            state.refreshToken = refreshToken;
        },

        authError( state, err ) {
            state.status = 'error'
            state.err = err
        },

        logout( state ) {
            state.status = '';
            state.token = '';
            state.refreshToken = ''
        },
    },

    actions: {
        async login({ commit }, data) {
            try {
                const { token, refreshToken } = await api.signIn(data)
                commit('authSuccess', token, refreshToken)

            } catch (err) {
                commit('authError', err)
            }
        },

        async logout({ commit }) {
            await api.logOut();
            commit('logout');
        }
    },

    getters : {
        authStatus: state => state.status,
        isLoggedIn: state => !!state.token,
    }
})

export default store;