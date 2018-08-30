<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Stock Trader</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <router-link to="/profile" tag="li" active-class="active"><a> Portfolio </a></router-link>
                    <router-link to="/stocks" tag="li" active-class="active"><a> Stocks </a></router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="NewDay">End Day</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" @click="ozge = !ozge"> Save & Load <span class="caret"></span></a>
                        <ul v-if="ozge" class="poop">
                            <li><a @click="Submit">Save</a></li>
                            <li><a @click="RestoreSettings">Load</a></li>
                        </ul>
                    </li>
                    <li><a class="navbar-brand" href="#"><small>Funds: ${{Funds}}</small></a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    export default {
        data: function () {
            return{
//                funds: 10000,
                ozge: false
            }
        },
        computed: {
            Funds: function () {
                return this.$store.state.funds;
            }
        },
        methods: {
            NewDay(){
                let BMWToday = Math.floor(Math.random()*160);
                var GoogleToday = Math.floor(Math.random()*180);
                var AppleToday = Math.floor(Math.random()*250);
                var TwitterToday = Math.floor(Math.random()*15);
                this.$store.state.BMWStock = BMWToday;
                this.$store.state.GoogleStock = GoogleToday;
                this.$store.state.AppleStock = AppleToday;
                this.$store.state.TwitterStock = TwitterToday;
            },
            Submit(){
                this.$http.put('https://vuejs-http-96a4b.firebaseio.com/Ozge.json', this.$store.state);
            },
            RestoreSettings(){
                this.$http.get('https://vuejs-http-96a4b.firebaseio.com/Ozge.json',).then(response => {
                    this.$store.replaceState(response.body);
                });
            }
        }
    }
</script>

<style>
    .poop {
        background-color: #F8F8F8;
        position: absolute;
        border: 1px solid #E6E6E6;
        border-top: none;
        width: 115px;
    }
</style>