<template>
  <div style="border: 1px solid #000;">
    <h1>Header</h1>
    <a :href="this.rootUrl">Main App</a> | <a :href="this.rootUrl + 'reports'">Reports App</a> | <a :href="this.rootUrl + 'profile'">Profile App</a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rootUrl: ''
      }
    },
    beforeCreate() {
      console.log('Nothing gets called before me!')
    },
    created() {
      this.rootUrl = window.site.getRootUrl();
      console.log('Created: this.rootUrl is now reactive. ' + this.rootUrl)
    },
    beforeMount() {
      console.log('Before Mount')
    },
    mounted() {
      console.log('Mounted')
    }
  }
</script>