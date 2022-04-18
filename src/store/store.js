import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: null,
    },

    mutations: {
        setUserData (state, data) {
            state.user = data;
        },
    },

    actions: {
        login ({ commit }, data) {
            window.localStorage.setItem('auth', true);
            commit('setUserData', data);
        },

        logout ({ commit }) {
            console.log('logout');
            window.localStorage.setItem('auth', false);
            commit('setUserData', {});
        },
    }
})

export default store;