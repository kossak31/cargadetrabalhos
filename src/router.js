import Vue from 'vue'
import Router from 'vue-router'
import Search from './components/Search'
import Contact from './components/Contact'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/procurar',
        component: Search
    }, {
        path: '/contacto',
        component: Contact

    }]
})