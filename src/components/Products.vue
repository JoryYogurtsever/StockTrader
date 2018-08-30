<template>
    <div class="panel panel-info">
        <div class="panel-heading">
            <h3 class="panel-title"><slot></slot></h3><small>(Price: {{ unitPrice }} Quantity:{{ units }} )</small>
        </div>
        <div class="ozgeInput">
            <form>
                <input placeholder="quantity" class="schmozgeInput" type="number" v-model="Value">
                <button class="ozgeButton" type="submit" @click.prevent="SellBMW(Uname)"> Sell </button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                Value: 0
            }
        },
        props:{
            units: Number,
            Uname: String,
            unitPrice: [Number, String]
        },
            methods:{
                SellBMW(Uname){
                    var vm = Number(this.Value);
                    if(Uname === 'BMW' && this.$store.state.BMWUnits >= vm) {
                        this.$store.state.BMWUnits -= vm;
                        this.$store.state.funds += vm * this.$store.state.BMWStock;
                    } else if (Uname === 'Google'  && this.$store.state.GoogleUnits >= vm)
                    {
                        this.$store.state.GoogleUnits -= vm;
                        this.$store.state.funds += vm * this.$store.state.GoogleStock;
                    }else if(Uname === 'Apple'  && this.$store.state.AppleUnits >= vm)
                    {
                        this.$store.state.AppleUnits -= vm;
                        this.$store.state.funds += vm * this.$store.state.AppleStock;
                    }
                    else if (Uname === 'Twitter' && this.$store.state.TwitterUnits >= vm)
                    {
                        this.$store.state.TwitterUnits -= Number(this.BMWs);
                        this.$store.state.funds += Number(this.BMWs) * this.$store.state.TwitterStock;
                    } else {
                        alert('Units to sell cannot exceed current Stock, please refine your transaction');
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
        background-color: cornflowerblue;
    }
</style>