import { createStore } from 'vuex'
import api from '../services/api/api'

const store = createStore({
    state: {
        status: '',
        err: null,
        token: localStorage.getItem('user-token') || '',
        refreshToken: localStorage.getItem('refresh-token') || '',

        activePage: 0,
        points: [],
        categories: [],
        rates: [],
        cars: [],
        orders: []
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

        pointsSet ( state, data ) {
            state.points = data;
        },

        categoriesSet ( state, data ) {
            state.categories = data;
        },

        ratesSet ( state, data ) {
            state.rates = data;
        },

        carsSet ( state, data ) {
            state.cars = data;
        },

        ordersSet ( state, data ) {
            state.orders = data;
        },

        changeActivePage ( state, pageIndx ) {
            state.activePage = pageIndx;
        }
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
        },

        async getServerData({ commit }, serviceData) {
            try {
                const serverData = await api.getServerData(serviceData.name);

                switch (serviceData.indx) {
                    case 0: {
                        commit('pointsSet', serverData.data.data);
                        break;
                    }
                    case 1: {
                        commit('categoriesSet', serverData.data.data);
                        break;
                    }
                    case 2: {
                        commit('ratesSet', serverData.data.data);
                        break;
                    }
                    case 3: {
                        commit('carsSet', serverData.data.data);
                        break;
                    }
                    case 4: {
                        commit('ordersSet', serverData.data.data);
                        break;
                    }
                }
            } catch (err) {}
        }
    },

    getters : {
        authStatus: state => state.status,
        isLoggedIn: state => !!state.token,
    }
})

export default store;