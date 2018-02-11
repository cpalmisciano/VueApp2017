<template>
  <div>
    <h1>Main Home</h1>
    <div>Main Home content</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim suscipit eligendi ipsum reiciendis ipsam, expedita quam maxime harum officiis doloribus nesciunt inventore vitae commodi molestiae! Voluptatum, animi! Similique placeat, nam debitis, repellat tempore fuga expedita quisquam id quod nemo tenetur.</p>
    <br/>
    <div>
      <button @click="$bus.$emit('my-event')">Click to trigger event</button>
    </div>
    <div class="grid-container">
      <div class="grid-cell" v-for="item in this.$store.state.data" :key="item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
  // we need to wait to get a JWT to show the app

  //import appService from '@Source/app.service.js';
  import store from '@Source/vuex/store.js';

  export default {
    /*
    data() {
      return {
        items: null
      }
    },
    */
    methods:{
      getData(){
        /*
        // using appService
        appService.getData()
        .then((data) => {
        this.items = data;
        })
        .catch((status) => window.alert('Unable to get data:' + status));
        */
      }
    },
    mounted() {
      //this.getData();
      this.$store.dispatch('GET_DATA')
    }
  }
</script>