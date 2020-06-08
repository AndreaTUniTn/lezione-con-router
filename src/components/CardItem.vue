<template>
  <div class="card">
      <h5 class="card-title">{{item.title}}</h5>
      <p class="card-text">{{item.description}}</p>
      <a class="btn btn-primary" @click="viewDetails()">View More</a>
  </div>
</template>

<script>
import itemmixin from '../itemmixin';

export default {
    mixins: [itemmixin]
}
</script>

<style>
    .card {
        display: inline-flex;
        width: 33%;
    }

    .card-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>