<template>
  <div id="app">
    <Header></Header>
    <h1>Profile</h1>
    <router-link to="/">Profile Home</router-link> | <router-link to="/view1">Profile View 1</router-link>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import appService from '@Source/app.service.js';

  const Header = () => import('@Source/components/shared/Header.vue');
  const Footer = () => import('@Source/components/shared/Footer.vue');

  export default {
    components: { Header, Footer },
    methods:{
      verifyToken(){
        appService.verifyToken()
        .then((data) => { console.log(data); })
        .catch((status) => window.alert('Unable to get token: ' + status));
      }
    }
  }
</script>
