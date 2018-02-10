<template>
  <div class="row">
    <div class="col-md-1">{{catId}}</div>
    <div class="col-md-3">
      <select v-model="filterType" @change="filterChange" :size="selectSize">
        <option disabled="" value="">Please select one</option>
        <option value="FilterCheckBox">FilterCheckBox</option>
        <option value="FilterLookupList">FilterLookupList</option>
        <option value="FilterMisc">FilterMisc</option>
        <option value="FilterRadio">FilterRadio</option>
        <option value="FilterRange">FilterRange</option>
        <option value="FilterSearchList">FilterSearchList</option>
      </select>
    </div>
    <div class="col-md-6">
      <component :is="filterType" transition="fade" transition-mode="out-in"></component>
    </div>
    <div class="col-md-2">
      <button @click="addFilter">Add Filter</button>
    </div>
  </div>
</template>

<script>
  const FilterCheckBox = () => import(/* webpackChunkName: "filter.checkbox" */ './FilterCheckBox.vue');
  const FilterLookupList = () => import(/* webpackChunkName: "filter.lookuplist" */ './FilterLookupList.vue');
  const FilterMisc = () => import(/* webpackChunkName: "filter.misc" */ './FilterMisc.vue');
  const FilterRadio = () => import(/* webpackChunkName: "filter.radio" */ './FilterRadio.vue');
  const FilterRange = () => import(/* webpackChunkName: "filter.range" */ './FilterRange.vue');
  const FilterSearchList = () => import(/* webpackChunkName: "filter.searchlist" */ './FilterSearchList.vue');

  export default {
  components: { FilterCheckBox, FilterLookupList, FilterMisc, FilterRadio, FilterRange, FilterSearchList },
  props: {
  catId: {
  type: Number,
  default: 3
  }
  },
  data(){
  return {
  filterType: '',
  selectSize: 7
  }
  },
  watch: {
  catId: function(newVal, oldVal) { // watch it
  this.filterType = '';
  this.selectSize = 7;
  console.log('Prop changed: ', newVal, ' | was: ', oldVal)
  }
  },
  methods:{
  addFilter: function(){
  console.log('in addFilter');
  this.$emit('filterAdded', { id: 1, value: 'value1'});
  },
  filterChange: function(){
  this.selectSize = 1;
  }
  }
  }
</script>