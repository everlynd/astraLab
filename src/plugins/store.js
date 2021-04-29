import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        password: null,
        email: null,
        fullName: null,
    },
    mutations: {
        updatePassword: (state, password) => {
            state.password = password
        },
        updateEmail: (state, email) => {
            state.email = email
        },
        updateName: (state, name) => {
            state.fullName = name
        }
    },
    actions: {
        SET_PASSWORD({ commit }, value) {
            localStorage.setItem('password', value)
            commit('updatePassword', value)
        },
        SET_EMAIL({ commit }, value) {
            localStorage.setItem('email', value)
            commit('updateEmail', value)
        },
        SET_NAME({ commit }, value) {
            localStorage.setItem('name', value)
            commit('updateName', value)
        }
    },
    getters: {
        EMAIL: state => state.email,
        PASSWORD: state => state.password,
        FULLNAME: state => state.fullName,
    },
})

export default store;