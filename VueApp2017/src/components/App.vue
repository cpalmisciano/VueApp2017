<template>
  <div id="app">
    <Header></Header>
    <h1>Main</h1>
    <router-link to="/">Main Home</router-link> | <router-link to="/view1">Main View 1</router-link>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import appService from '@Source/app.service.js';
  const Header = () => import(/* webpackChunkName: "shared.header" */ '@Source/components/shared/Header.vue');
  const Footer = () => import(/* webpackChunkName: "shared.footer" */ '@Source/components/shared/Footer.vue');

  export default {
    components: { Header, Footer },
    methods:{
      getToken(){
        appService.getToken()
          .then((data) => {
            window.localStorage.setItem('token', data.token);
            window.localStorage.setItem('tokenExpiration', data.expiration);
          })
          .catch((status) => window.alert('Unable to get token:' + status));
      },
      verifyToken(){
        appService.verifyToken()
          .then((data) => { console.log(data); })
          .catch((status) => window.alert('Unable to get token: ' + status));
      }
    }
  }
</script>