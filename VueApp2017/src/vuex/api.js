import Vue from 'vue'
import axios from 'axios'

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