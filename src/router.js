import Vue from 'vue'
import Router from 'vue-router'

import Pagination from './components/Pagination'
import Terms from './components/Terms'
import Search from './components/Search'
import Contact from './components/Contact'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Pagination
        }, {
            path: '/termos-e-condicoes',
            component: Terms
        }, {
            path: '/procurar',
            component: Search
        }, {
            path: '/contacto',
            component: Contact

        }]
})