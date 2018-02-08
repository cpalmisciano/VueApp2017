import Vue from 'vue';
import Vuex from 'vuex';
import api from './api.js'

Vue.use(Vuex);

let rootUrl = './VueCore/';
if (process.env.NODE_ENV === "development") {
    rootUrl = './';
}

const state = {
    //initial state / define vars
    rootUrl: rootUrl,
    authToken: null,
    data: null,
    books: null
};

const actions = {
    GET_TOKEN: (context) => {
        return api.getToken(state.rootUrl)
            .then((response) => context.commit('GET_TOKEN_MUTATION', response))
            .catch((error) => context.commit('API_FAILURE_MUTATION', error));
    },
    GET_DATA: (context) => {     
        return api.getData(state.rootUrl)
            .then((response) => context.commit('GET_DATA_MUTATION', response))
            .catch((error) => context.commit('API_FAILURE_MUTATION', error));
    },
    GET_BOOKS: (context) => {
        return api.getBooks(state.rootUrl)
            .then((response) => context.commit('GET_BOOKS_MUTATION', response))
            .catch((error) => context.commit('API_FAILURE_MUTATION', error));
    }
};

const mutations = {
    GET_TOKEN_MUTATION: (state, response) => {
        state.authToken = Object.assign({}, response.token)
    },
    GET_DATA_MUTATION: (state, response) => {
        state.data = Object.assign({}, response);
    },
    GET_BOOKS_MUTATION: (state, response) => {
        state.books = Object.assign({}, response);
    },
    API_FAILURE_MUTATION: (state, error) => {
        console.error(error);
    },
};

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters: {
    },
    modules: {
    }
});

export default store;