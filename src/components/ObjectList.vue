<template>
  <div>
      <div class="placeholder" v-for="obj in objects" :key="obj.id">
          <slot v-bind:object="obj"></slot>

      </div>
      <div class="text-center">Total {{count}} elements</div>

  </div>
</template>

<script>
export default {
    props: ['objects'],
    computed: {
        count: function() {
            return this.objects.length;
        }
    }
}
</script>

<style scoped>
    .placeholder {
        display: inline;
    }
</style>