<template>
   <div class="poopy">
       <h2><strong>Trade or View Your Portfolio</strong></h2><br>
       <p>You may Save & Load your Data</p><br>
       <p>Click on "End Day" to begin a new Day!</p>
       <hr>
       <h4><strong> Your Funds: ${{Funds}}</strong></h4>
   </div>
</template>

<script>
    export default {
       computed: {
           Funds: function () {
               return this.$store.state.funds;
           }
        }
    }
</script>

<style>
    .poopy {
        border: 1px solid #E6E6E6;
        padding-left: 40px;
        padding-right: 40px;
    }
    p {
        margin-bottom: none;
    }
</style>