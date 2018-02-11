<template>
  <div style="border: 1px solid #000;">
    <h1>Bottom</h1>
    <a :href="rootUrl">Main App</a> | <a :href="rootUrl + 'lists'">Lists App</a> | <a :href="rootUrl + 'reports'">Reports App</a> | <a :href="rootUrl + 'profile'">Profile App</a>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        rootUrl: './VueCore/'
      }
    },
    beforeCreate() {
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
      if (process.env.NODE_ENV === "development") {
        this.rootUrl = './';
      }
    }
  }
</script>