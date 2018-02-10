<template>
  <div id="app" v-cloak>
    <Header></Header>
    <h1>Lists</h1>
    <router-link to="/">Geography</router-link> | <router-link to="/property">Property</router-link> | <router-link to="/mortgage">Mortgage</router-link> | <router-link to="/demographics">Demographics</router-link> | <router-link to="/distressed">Distressed</router-link> | <router-link to="/other">Other</router-link> | <router-link to="/additional">Additional Output</router-link> | <router-link to="/partial">Partial Selection</router-link> | <router-link to="/suppression">Suppression</router-link>
    <div class="row">
      <div class="col-md-8" style="min-height: 300px; padding: 10px;">
        <router-view @filterAdded="newFilterAdded"></router-view>
      </div>
      <div class="col-md-4">
        <list-criteria v-bind:filters="filters" v-bind:outputs="outputs" v-bind:from="from" v-bind:to="to"></list-criteria>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  const Header = () => import('@Source/components/shared/Header.vue');
  const Footer = () => import('@Source/components/shared/Footer.vue');

  const Criteria = () => import(/* webpackChunkName: "lists.criteria" */ './components/Criteria.vue');

  export default {
    components: { Header, Footer, "list-criteria": Criteria },
    data(){
      return {
        filters: [],
        outputs: [],
        from: 0,
        to: 0
      }
    },
    methods:{
      newFilterAdded: function(filter){
        console.log(filter);
        this.filters.push(filter);
      }
    }
  }
</script>
