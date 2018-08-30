import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX);

export const store = new VueX.Store({
    state:{
        BMWStock: 121,
        BMWUnits: 0,
        GoogleStock:150,
        GoogleUnits: 0,
        AppleStock:200,
        AppleUnits: 0,
        TwitterStock:8,
        TwitterUnits:0,
        funds: 10000
    },

});