<template>
  <div class="row align-items-center">
      <div class="col-8">
          <h2>{{item.title}}</h2>
          <p>{{item.description}}</p>
      </div>
      <div class="col-4 text-right">
          <button class="btn btn-sm btn-primary" @click="viewDetails()">Detail</button>
      </div>
      
  </div>
</template>

<script>
import itemmixin from '../itemmixin';

export default {
    mixins: [itemmixin]
};
</script>

<style scoped>
    .row {
        border-bottom: 1px solid grey;
    }
</style>