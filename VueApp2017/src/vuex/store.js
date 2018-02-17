import Vue from 'vue';
import Vuex from 'vuex';  // it is already global
import api from './api.js';

Vue.use(Vuex);  // defines Vuex as global

const state = {
    //initial state / define vars
    rootUrl: './',
    authToken: null,
    isReady: false,
    data: null,
    books: null
};

//if (process.env.NODE_ENV === "development") {
//    state.rootUrl = './';
//}

/**
 *  Action perform the calls that affect the data
 */
const actions = {
    GET_TOKEN: (context) => {
        return api.getToken(state.rootUrl)
            .then((response) => context.commit('GET_TOKEN_MUTATION', response))
            .catch((error) => context.commit('API_FAILURE_MUTATION', error));
    },
    GET_DATA: (context) => {    
        return api.getData(state.rootUrl, state.authToken)
            .then((response) => context.commit('GET_DATA_MUTATION', response))
            .catch((error) => context.commit('API_FAILURE_MUTATION', error));
    },
    GET_BOOKS: (context) => {
        return api.getBooks(state.rootUrl, state.authToken)
            .then((response) => context.commit('GET_BOOKS_MUTATION', response))
            .catch((error) => context.commit('API_FAILURE_MUTATION', error));
    }
};

/**
 * Mutation update the data state
 */
const mutations = {
    GET_TOKEN_MUTATION: (state, response) => {
        window.localStorage.setItem('token', response.token);
        //window.localStorage.setItem('tokenExpiration', response.expiration);
   
        state.authToken = response.token;
        state.isReady = true;
        console.info('mutation GET_TOKEN_MUTATION received');
    },
    GET_DATA_MUTATION: (state, response) => {
        state.data = Object.assign({}, response);
        console.info('mutation GET_DATA_MUTATION received');
    },
    GET_BOOKS_MUTATION: (state, response) => {
        state.books = Object.assign({}, response);
        console.info('mutation GET_BOOKS_MUTATION received');
    },
    API_FAILURE_MUTATION: (state, error) => {
        //console.error(error);
        console.info('mutation API_FAILURE_MUTATION received');
    }
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