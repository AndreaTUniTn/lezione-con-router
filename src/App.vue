<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
        Questa rimane!
      </a>
    </nav>

    <br>
    
    <router-view></router-view>
  </div>

</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
}
</style>
