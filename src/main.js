import Vue from 'vue';
import './plugins/bootstrap-vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// import Parallax from 'vue-parallaxy';
// import VideoBg from 'vue-videobg';
import VueFormulate from '@braid/vue-formulate';

import App from './App.vue';
import router from './router';
import store from './store';

const Parallax = () =>
    import ('vue-parallaxy')

const VideoBg = () =>
    import ('vue-videobg')

const fontawesomeCSS = () =>
    import ('@fortawesome/fontawesome-free/css/all.css')
const fontawesomeJS = () =>
    import ('@fortawesome/fontawesome-free/js/all.js')

/*import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';*/

Vue.use(VueFormulate);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(Parallax);
Vue.use(fontawesomeCSS);
Vue.use(fontawesomeJS);
Vue.component('video-bg', VideoBg);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render(h) { return h(App); },
}).$mount('#app');