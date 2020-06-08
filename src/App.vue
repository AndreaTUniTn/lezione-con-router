<template>
  <div id="app">

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
  </div>

</template>

<script>
import ObjectList from './components/ObjectList';
import ListItem from './components/ListItem';
import CardItem from './components/CardItem';

export default {
  name: 'App',
  components: { ObjectList, ListItem, CardItem },
  data: function() {
    return {
      gridView: false,
      products: [
        {id: '1', title: 'Titolo 1', description: 'Descrizione semplice'},
        {id: '2', title: 'Titolo 2', description: 'Descrizione semplice 2'},
        {id: '3', title: 'Titolo 3', description: 'Descrizione semplice altro'},
        {id: '4', title: 'Titolo 4', description: 'Descrizione semplice ancora'}
      ]
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
}
</style>
