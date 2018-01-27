import axios from 'axios'
import store from '@Source/vuex/store.js';

axios.interceptors.request.use(function (config) {

    if (typeof window === 'undefined') {
        return config;
    }

    const token = window.localStorage.getItem('token');

    if (config.url !== './Home/requestToken' && (!(token == 'undefined' || typeof token == 'undefined') && token)) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config
})

const appService = {
    getToken() {
        return new Promise((resolve, reject) => {
            axios.get('./Home/requestToken')
                .then(response => {
                    resolve(response.data)
                }).catch(response => {
                    reject(response.status);
                })
        })
    },
    verifyToken() {
        return new Promise((resolve) => {
            axios.get('./Home/verifyToken')
                .then(response => {
                    resolve(response.data)
                }).catch(response => {
                    reject(response.status)
                })
        })
    }
}

export default appService
