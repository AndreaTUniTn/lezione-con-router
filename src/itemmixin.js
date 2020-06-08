export default {
    props: ["item"],
    methods: {
        viewDetails: function() {
            console.log("View detail", this.item);
            this.$router.push({path: '/product/' + this.item.id});
        }
    }
};