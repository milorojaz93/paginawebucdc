import Vue from 'vue';
import VueRouter from 'vue-router';
import Inicio from '../views/Inicio.vue';
const Nosotros = () =>
    import ('../views/Nosotros.vue');
const Inscribete = () =>
    import ('../views/Inscribete.vue');
const Contactanos = () =>
    import ('../views/Contactanos.vue');

const DanzandoT = () =>
    import ('../views/proyectos/DanzandoT.vue');

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Inicio',
        component: Inicio,
    },
    {
        path: '/nosotros',
        name: 'Nosotros',
        component: Nosotros,
    },
    {
        path: '/inscribete',
        name: 'Inscribete',
        component: Inscribete,
    },
    {
        path: '/contactanos',
        name: 'Contactanos',
        component: Contactanos,
    },
    {
        path: '/proyectos/danzando-t',
        name: 'Danzando T',
        component: DanzandoT,
    },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;