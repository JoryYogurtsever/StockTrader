<template>
    <div class="container">
        <br>
        <br>
        <app-task-bar></app-task-bar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Profile from './components/Profile.vue'
    import TaskBar from './components/TaskBar.vue'
    import Stocks from './components/Stocks.vue'


    export default {
        components:{
            profile: Profile,
            appTaskBar: TaskBar,
            stocks: Stocks,
        }

    }
</script>

<style>

</style>
