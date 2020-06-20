import Vue from 'vue';
import VueRouter from 'vue-router';
import Inicio from '../views/Inicio.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Inicio',
  component: Inicio,
},
{
  path: '/nosotros',
  name: 'Nosotros',
  component() {
    return import(/* webpackChunkName: "about" */ '../views/Nosotros.vue');
  },
},
{
  path: '/inscribete',
  name: 'Inscribete',
  component() {
    return import(/* webpackChunkName: "about" */ '../views/Inscribete.vue');
  },
},
{
  path: '/contactanos',
  name: 'Contactanos',
  component() {
    return import(/* webpackChunkName: "about" */ '../views/Contactanos.vue');
  },
},
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
