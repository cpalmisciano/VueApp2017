<template>
  <div>
    <h1>Lists Criteria</h1>
    <div class="row">
      <div class="col-md-2">From:</div>
      <div class="col-md-2">{{ from }}</div>
      <div class="col-md-2"> </div>
      <div class="col-md-2">To:</div>
      <div class="col-md-2">{{ to }}</div>
      <div class="col-md-2"> </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <ul>
          <li v-for="filter in filters" :key="filter.id">{{ filter.value }}</li>
        </ul>
      </div>
      <div class="col-md-6">
        <ul>
          <li v-for="output in outputs" :key="output.id">{{ output.value }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      filters: {
        type: Array,
        default: function () { return [] }
      },
      outputs: {
        type: Array,
        default: function () { return [] }
      },
      from: 0,
      to: 0
    }
  }
</script>