<template>
  <div style="border: 1px solid #000;">
    <h1>Top</h1>
    <a :href="this.$store.state.rootUrl">Main App</a> | <a :href="this.$store.state.rootUrl + 'lists'">Lists App</a> | <a :href="this.$store.state.rootUrl + 'reports'">Reports App</a> | <a :href="this.$store.state.rootUrl + 'profile'">Profile App</a>
  </div>
</template>

<script>
  import store from '@Source/vuex/store.js';

  export default {
    beforeCreate() {
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
    }
  }
</script>