import Vue from 'vue';
import Router from 'vue-router'
import AppQuotes from './pages/AppQuotes'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/', 
            redirect: 'quotes',
            name:'home'},
        {
            path: '/quotes',
            component: AppQuotes,
            name: 'quotes'},
        ]
})


