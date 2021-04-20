import Vue from 'vue'
import App from './App.vue'
import router from './router'

//vue-resource
import VueResource from 'vue-resource'

Vue.use(VueResource);


Vue.config.productionTip = false


//bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner)
Vue.component('icons', FontAwesomeIcon)




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
