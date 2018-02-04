<template>
  <div>
    <h1>Main Home</h1>
    <div>Main Home content</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim suscipit eligendi ipsum reiciendis ipsam, expedita quam maxime harum officiis doloribus nesciunt inventore vitae commodi molestiae! Voluptatum, animi! Similique placeat, nam debitis, repellat tempore fuga expedita quisquam id quod nemo tenetur.</p>
    <br/>
    <div class="grid-container">
      <div class="grid-cell" v-for="item in items">{{ item }}</div>
    </div>
  </div>
</template>

<script>
  import appService from '@Source/app.service.js';

  export default {
    data() {
      return {
        items: null
      }
    },
    methods:{
      getData(){
        appService.getData()
          .then((data) => {
            this.items = data;
          })
          .catch((status) => window.alert('Unable to get data:' + status));
      }
    },
    beforeCreate() {

    },
    created() {

    },
    beforeMount() {
    },
    mounted() {
      this.getData();
    }

  }
</script>