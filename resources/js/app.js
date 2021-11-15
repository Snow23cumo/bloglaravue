require('./bootstrap');
window.Vue = require('vue').default;

// Paquetes extras instalados
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import {
    routes
} from './routes';

// editor support
import 'v-markdown-editor/dist/v-markdown-editor.css';
import Editor from 'v-markdown-editor';
// global register
Vue.use(Editor);

// Vuex Support
import Vuex from 'vuex';
Vue.use(Vuex);

import storeData from "./store/index";
const store = new Vuex.Store(
    storeData
);
// moment js
import { filter } from './filter';


// Componentes
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);
Vue.component('home-main', require('./components/public/PublicMaster.vue').default);

// SweetAlert 2
import Swal from 'sweetalert2';
window.Swal = Swal;
// Toast 
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

window.Toast = Toast;
// vForm
import Vue from 'vue';
import {
    Form
} from 'vform';
window.Form = Form;

// Constantes 
const router = new VueRouter({
    routes,
    mode: 'hash',
});

const app = new Vue({
    el: '#app',
    router,
    store
});