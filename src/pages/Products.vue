<template>
    <div class="container">
      <div class="row">
        <div class="col text-right">
          <button class="btn btn-success" @click="gridView = !gridView">Toggle View</button>

        </div>

      </div>

      <br>

      <object-list :objects="products">
        <template v-slot:default="{ object }">
          <list-item v-if="!gridView" :item="object"></list-item>
          <card-item v-if="gridView" :item="object"></card-item>
        </template>
      </object-list>

    </div>
</template>

<script>
import ObjectList from '../components/ObjectList';
import ListItem from '../components/ListItem';
import CardItem from '../components/CardItem';

import DataService from '../dataservice';

export default {
    components: { ObjectList, ListItem, CardItem },
    data: function() {
        return {
            gridView: false,
            products: DataService.getProducts()
        };
    }
}
</script>

<style>

</style>