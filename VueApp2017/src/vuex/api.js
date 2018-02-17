import Vue from 'vue'
import axios from 'axios'

axios.interceptors.request.use(function (config) {
    // Do something before request is sent

    //if (typeof window === 'undefined') {
    //    return config;
    //}

    //const token = window.localStorage.getItem('token');

    //if (config.url !== './Home/requestToken' && (!(token == 'undefined' || typeof token == 'undefined') && token)) {
    //    config.headers.Authorization = `Bearer ${token}`;
    //}

    console.log('sending request');

    return config;
},
function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // Do something with response data
    // like reset timeout
    console.log('getting response');

    return response;
},
function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default {
    getToken(rootUrl) {
        return new Promise((resolve, reject) => {
            axios.get(rootUrl + 'Home/requestToken')
                .then(response => {
                    resolve(response.data);
                }).catch(response => {
                    reject(response.status);
                })
        })
    },
    verifyToken(rootUrl, token) {
        return new Promise((resolve) => {
            axios.get(rootUrl + 'Home/verifyToken', { headers: { Authorization: `Bearer ${token}` } })
                .then(response => {
                    resolve(response.data)
                }).catch(response => {
                    reject(response.status)
                })
        })
    },
    getData(rootUrl, token) {
        return new Promise((resolve, reject) => {
            //axios.setToken(token, 'Bearer')
            axios.get(rootUrl + 'api/Data/getData', { headers: { Authorization: `Bearer ${token}` } })
                .then(response => {
                    resolve(response.data)
                }).catch(response => {
                    reject(response.status);
                })
        })
    },
    getBooks(rootUrl, token) {
        return new Promise((resolve, reject) => {
            //axios.setToken(token, 'Bearer')
            axios.get(rootUrl + 'api/Data/getBooks', { headers: { Authorization: `Bearer ${token}` } })
                .then(response => {
                    resolve(response.data)
                }).catch(response => {
                    reject(response.status);
                })
        })
    }
}