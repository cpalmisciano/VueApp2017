import Vue from 'vue'
import axios from 'axios'

export default {
    setToken(token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    },
    getToken(rootUrl) {
        return new Promise((resolve, reject) => {
            axios.get(rootUrl + 'Home/requestToken')
                .then(response => {
                    resolve(response.data)
                }).catch(response => {
                    reject(response.status);
                })
        })
    },
    verifyToken(rootUrl) {
        return new Promise((resolve) => {
            axios.get(rootUrl + 'Home/verifyToken')
                .then(response => {
                    resolve(response.data)
                }).catch(response => {
                    reject(response.status)
                })
        })
    },
    getData(rootUrl) {
        return new Promise((resolve, reject) => {
            axios.get(rootUrl + 'api/Data/getData')
                .then(response => {
                    resolve(response.data)
                }).catch(response => {
                    reject(response.status);
                })
        })
    },
    getBooks(rootUrl) {
        return new Promise((resolve, reject) => {
            axios.get(rootUrl + 'api/Data/getBooks')
                .then(response => {
                    resolve(response.data)
                }).catch(response => {
                    reject(response.status);
                })
        })
    }
}