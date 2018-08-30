<template>
    <div>
        <stock Uname="BMW" :unitPrice="BMW" class="stock tock">BMW</stock>
        <stock Uname="Google" :unitPrice="Google" class="stock">Google</stock>
        <stock Uname="Apple" :unitPrice="Apple" class="stock tock">Apple</stock>
        <stock Uname="Twitter" :unitPrice="Twitter" class="stock">Twitter</stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue'
    export default {
        data: function(){
            return{
                unitPrice: 150
            }
        },
        components:{
          stock: Stock
        },
        computed: {
            BMW() {
                return this.$store.state.BMWStock;
            },
            Apple() {
                return this.$store.state.AppleStock;
            },
            Google() {
                return this.$store.state.GoogleStock;
            },
            Twitter() {
                return this.$store.state.TwitterStock;
            }
        }
    }
</script>

<style>
    .stock{
        width: 48%;
        float: left;
    }
    .tock {
        margin-right:4%
    }
</style>