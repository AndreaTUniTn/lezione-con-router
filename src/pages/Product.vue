<template>
    <div class="container">
        <h1>{{product.title}}</h1>
        <h3>{{product.description}}</h3>

        <button class="btn btn-primary" @click="goBack()">Indietro</button>

    </div>
</template>

<script>
import DataService from '../dataservice';

export default {
    data: function() {
        return {
            product: DataService.getProduct(this.$route.params.id)
        };
    },
    methods: {
        goBack: function() {
            // this.$router.go(-1);
            this.$router.back();
        }
    }
}
</script>

<style>

</style>