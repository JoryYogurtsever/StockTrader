import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Stocks from './components/Stocks.vue'

export const routes = [
    {path: '', component: Home},
    {path: '/profile', component: Profile},
    {path: '/stocks', component: Stocks},
];
