<template>
  <div style="border: 1px solid #000;">
    <h1>Footer</h1>
    <a :href="this.rootUrl">Main App</a> | <a :href="this.rootUrl + 'reports'">Reports App</a> | <a :href="this.rootUrl + 'profile'">Profile App</a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rootUrl: window.site.getRootUrl()
      }
    },
    ready:function() {
    }
  }
</script>