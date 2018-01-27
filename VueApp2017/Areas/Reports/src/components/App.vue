<template>
  <div id="app">
    <Header></Header>
    <h1>Reports</h1>
    <router-link to="/">Reports Home</router-link> | <router-link to="/view1">Reports View 1</router-link>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  const Header = () => import('@Source/components/shared/Header.vue');
  const Footer = () => import('@Source/components/shared/Footer.vue');

  export default {
    components: { Header, Footer }
  }
</script>