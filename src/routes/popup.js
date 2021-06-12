import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../page/Home.vue';
import InfoView from '../page/popup/Popup.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // url에 # 없애기
    routes: [
        {
            path: '/',
            name: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/notice',
            name: 'notice',
            component: InfoView,
        }
    ]
});