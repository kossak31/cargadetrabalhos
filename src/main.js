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

//sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
