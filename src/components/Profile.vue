<template>
    <div>
        <products Uname="BMW" :units="BMW" :unitPrice="BMWp" v-if="BMW" class="stock tock">BMW</products>
        <products Uname="Google" :units="Google" :unitPrice="Googlep" v-if="Google" class="stock">Google</products>
        <products Uname="Apple" :units="Apple" :unitPrice="Applep" v-if="Apple" class="stock tock">Apple</products>
        <products Uname="Twitter" :units="Twitter" :unitPrice="Twitterp" v-if="Twitter" class="stock">Twitter</products>
    </div>
</template>

<script>
    import Products from './Products.vue'
    export default {
        components:{
            products: Products
        },
        computed: {
            BMW() {
                return this.$store.state.BMWUnits;
            },
            Apple() {
                return this.$store.state.AppleUnits;
            },
            Google() {
                return this.$store.state.GoogleUnits;
            },
            Twitter() {
                return this.$store.state.TwitterUnits;
            },
            BMWp() {
                    return this.$store.state.BMWStock;
            },
            Applep() {
                    return this.$store.state.AppleStock;
            },
            Googlep() {
                    return this.$store.state.GoogleStock;
            },
            Twitterp() {
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