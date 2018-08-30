<template>
    <div class="panel panel-success">
        <div class="panel-heading">
            <h3 class="panel-title"><slot></slot></h3><small>(price:{{ unitPrice }} )</small>
        </div>
        <div class="ozgeInput">
            <form>
                <input placeholder="quantity" class="schmozgeInput" type="number" v-model="BMWs">
                <button class="ozgeButton" type="submit" @click.prevent="BuyBMW(Uname)"> Buy </button>{{Uname}}
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                BMWs: 0
            }
        },
        props:{
            unitPrice: [Number, String],
            Uname: String
        },
        methods:{
            BuyBMW(Uname){
                var vm = Number(this.BMWs);
                if(Uname === 'BMW') {
                    this.$store.state.BMWUnits += vm;
                    this.$store.state.funds -= vm * this.$store.state.BMWStock;
                } else if (Uname === 'Google')
                {
                    this.$store.state.GoogleUnits += vm;
                    this.$store.state.funds -= vm * this.$store.state.GoogleStock;
                }else if(Uname === 'Apple')
                {
                    this.$store.state.AppleUnits += vm;
                    this.$store.state.funds -= vm * this.$store.state.AppleStock;
                }
                else if (Uname === 'Twitter')
                {
                    this.$store.state.TwitterUnits += Number(this.BMWs);
                    this.$store.state.funds -= Number(this.BMWs) * this.$store.state.TwitterStock;
                }
            }
        }
    }
</script>

<style>
    .ozgeInput {
        padding: 20px;
    }
    .schmozgeInput {
        border-radius: 5px;
        padding: 5px;
    }
    .ozgeButton {
        float: right;
        background-color: green;
    }
</style>