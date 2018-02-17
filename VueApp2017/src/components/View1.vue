<template>
  <div>
    <h1>Main View 1</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim suscipit eligendi ipsum reiciendis ipsam, expedita quam maxime harum officiis doloribus nesciunt inventore vitae commodi molestiae! Voluptatum, animi! Similique placeat, nam debitis, repellat tempore fuga expedita quisquam id quod nemo tenetur.</p>
    <br/>
    <div class="grid-table">
      <div class="grid-table-cell" v-for="book in this.$store.state.books" :key="book.isbn">
        <div class="subgrid-container">
          <div class="subgrid-header">
            {{ book.title }}
            <br/>
            <span style="font-size: normal; font-weight:500;">{{ book.subtitle }}</span>
            <br/>
            {{ book.author }}
          </div>
          <div class="subgrid-sidebar">
            ISBN: {{ book.isbn }}
            <br/>
            Publisher: {{ book.publisher }} ({{ book.published }})
            <br/>
            {{ book.pages }}
            <br/>
            <a :href="book.website">Link</a>
          </div>
          <div class="subgrid-content">{{ book.description }}</div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
  //import appService from '@Source/app.service.js';
  import store from '@Source/vuex/store.js';

  export default {
    mounted() {
      this.$store.dispatch('GET_BOOKS')
    }
  }
</script>