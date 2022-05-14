import { createStore } from 'vuex'
import api from '../services/api/api'

const store = createStore({
    state: {
        status: '',
        err: null,
        token: localStorage.getItem('user-token') || '',
        refreshToken: localStorage.getItem('refresh-token') || '',

        activePage: 0,
        blurVal: false,
        answer: {},
        carToChange: { 
            name: 'Hyndai, i30 N',
            categoryId: {
                name: 'Компакт-кар'
            },
            colors: ['Красный','Белый','Чёрный'],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing" +
            " elit. Odio eaque, quidem, commodi soluta qui quae quod" +
            " dolorum sint alias, possimus illum assumenda eligendi cumque?",
            thumbnail: {
                path: require('../assets/img/car1.png')
            }
        },

        points: [],
        categories: [],
        rates: [],
        cars: [],
        orders: [],
        cities: [],
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

        dataSet ( state, [ arrName, data ] ) {
            state[arrName] = data;
        },

        changeActivePage ( state, pageIndx ) {
            state.activePage = pageIndx;
        },

        blurSet ( state, blurValue ) {
            state.blurVal = blurValue;
        },

        setDataAnswer( state, data ) {
            state.answer = data;
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
                commit('dataSet', [ serviceData.arrName, serverData.data.data ]);
            } catch (err) {}
        },

        async setServerData({ commit }, serviceData ) {
            try {
                const serverData = await api.setServerData( serviceData.name, serviceData.data );
                commit('setDataAnswer', serverData.data);
            } catch (err) {}
        },

        async changeServerData({ commit }, serviceData ) {
            try {
                await api.changeServerData( serviceData.name, serviceData.data );
            } catch (err) {}
        },

        async deleteServerData({ commit }, serviceData ) {
            try {
                await api.deleteServerData( serviceData );
            } catch (err) {}
        }
    },

    getters : {
        authStatus: state => state.status,
        isLoggedIn: state => !!state.token,
    }
})

export default store;